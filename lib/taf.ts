import type {
  TafChecklistKind,
  TafChecklistStatus,
  TafExerciseType,
  TafPlanTaskStatus
} from "@prisma/client";
import { prisma } from "@/lib/prisma";

const dayMs = 24 * 60 * 60 * 1000;

const defaultChecklistTemplates: Array<{
  kind: TafChecklistKind;
  title: string;
  guidance: string;
}> = [
  { kind: "DOCUMENTO", title: "RG", guidance: "Manter documento legivel, atualizado e pronto para envio." },
  { kind: "DOCUMENTO", title: "CPF", guidance: "Conferir regularidade e divergencias de cadastro." },
  { kind: "DOCUMENTO", title: "Comprovante de residencia", guidance: "Guardar comprovante recente no nome do candidato ou justificativa." },
  { kind: "DOCUMENTO", title: "Certidao de nascimento ou casamento", guidance: "Verificar validade exigida na convocacao." },
  { kind: "DOCUMENTO", title: "Comprovante de escolaridade", guidance: "Separar diploma, certificado ou declaracao conforme edital vigente." },
  { kind: "DOCUMENTO", title: "Titulo de eleitor", guidance: "Conferir regularidade eleitoral e comprovantes solicitados." },
  { kind: "DOCUMENTO", title: "CNH e requisitos", guidance: "Atualizar quando o edital 2026 confirmar exigencias." },
  { kind: "EXAME", title: "Exames laboratoriais", guidance: "Listar exames exigidos quando houver convocacao oficial." },
  { kind: "EXAME", title: "Exame medico", guidance: "Agendar avaliacao e guardar laudo/resultado." },
  { kind: "EXAME", title: "Exame psicologico", guidance: "Organizar documentos e data de comparecimento." },
  { kind: "EXAME", title: "Exame toxicológico", guidance: "Acompanhar prazo de coleta e validade." },
  { kind: "EXAME", title: "Avaliacao antropometrica", guidance: "Acompanhar medidas e criterios oficiais." },
  { kind: "ETAPA", title: "Exame social", guidance: "Preparar certidoes, historico e comprovantes solicitados." }
];

const defaultRequirements: Array<{
  title: string;
  exerciseType: TafExerciseType;
  unit: string;
  notes: string;
}> = [
  {
    title: "Corrida",
    exerciseType: "CORRIDA",
    unit: "metros/tempo",
    notes: "Marca oficial deve ser atualizada pelo admin quando o edital vigente for publicado."
  },
  {
    title: "Flexao",
    exerciseType: "FLEXAO",
    unit: "repeticoes validas",
    notes: "Controlar execucao valida e descanso."
  },
  {
    title: "Abdominal",
    exerciseType: "ABDOMINAL",
    unit: "repeticoes/tempo",
    notes: "Controlar cadencia, amplitude e tempo."
  },
  {
    title: "Barra ou forca complementar",
    exerciseType: "FORCA_COMPLEMENTAR",
    unit: "configuravel",
    notes: "Exercicio configuravel ate confirmacao do edital."
  }
];

const defaultWeeklyPlan = [
  ["Corrida leve + abdominal", "Base aerobica, tecnica de respiracao e core leve."],
  ["Flexao + forca complementar", "Series tecnicas, descanso cronometrado e controle de execucao."],
  ["Descanso ativo", "Mobilidade, caminhada leve e recuperacao."],
  ["Corrida intervalada leve", "Intervalos curtos sem salto brusco de carga."],
  ["Flexao + abdominal", "Volume moderado e foco em repeticoes validas."],
  ["Simulado parcial", "Testar ordem dos exercicios e tempo de descanso."],
  ["Recuperacao", "Sono, alongamento leve e revisao das dores registradas."]
] as const;

function mondayStart(date = new Date()) {
  const result = new Date(date);
  const day = result.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + diff);
  result.setHours(0, 0, 0, 0);
  return result;
}

function parseNumber(value: number | null | undefined, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function formatKm(meters?: number | null) {
  if (!meters) return "Sem registro";
  return `${(meters / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 2 })} km`;
}

function formatMinutes(seconds?: number | null) {
  if (!seconds) return "sem tempo";
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${String(sec).padStart(2, "0")}`;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function serializeDate(date: Date | null | undefined) {
  return date ? date.toISOString() : null;
}

export async function ensureDefaultTafConfiguration() {
  const [templateCount, requirementCount, noticeCount] = await Promise.all([
    prisma.tafChecklistTemplate.count(),
    prisma.tafExerciseRequirement.count(),
    prisma.tafOfficialNotice.count()
  ]);

  if (templateCount === 0) {
    await prisma.tafChecklistTemplate.createMany({
      data: defaultChecklistTemplates.map((item) => ({
        kind: item.kind,
        title: item.title,
        guidance: item.guidance,
        required: true,
        active: true
      })),
      skipDuplicates: true
    });
  }

  if (requirementCount === 0) {
    await prisma.tafExerciseRequirement.createMany({
      data: defaultRequirements.map((item) => ({
        title: item.title,
        exerciseType: item.exerciseType,
        unit: item.unit,
        notes: item.notes,
        active: true
      }))
    });
  }

  if (noticeCount === 0) {
    await prisma.tafOfficialNotice.create({
      data: {
        title: "Edital 2026 pendente de confirmacao",
        content:
          "Os exercicios, marcas minimas, documentos e exames devem ser ajustados pela administracao quando o edital vigente for publicado.",
        active: true
      }
    });
  }
}

export async function ensureTafChecklistForUser(userId: string) {
  await ensureDefaultTafConfiguration();

  const [templates, existing] = await Promise.all([
    prisma.tafChecklistTemplate.findMany({ where: { active: true }, orderBy: [{ kind: "asc" }, { title: "asc" }] }),
    prisma.tafChecklistItem.findMany({ where: { userId }, select: { title: true, kind: true } })
  ]);

  const existingKeys = new Set(existing.map((item) => `${item.kind}:${item.title}`));
  const missing = templates.filter((template) => !existingKeys.has(`${template.kind}:${template.title}`));

  if (missing.length > 0) {
    await prisma.tafChecklistItem.createMany({
      data: missing.map((template) => ({
        userId,
        templateId: template.id,
        kind: template.kind,
        title: template.title,
        guidance: template.guidance,
        status: "PENDENTE" as TafChecklistStatus
      })),
      skipDuplicates: true
    });
  }
}

export async function ensureWeeklyPlanForUser(userId: string) {
  const start = mondayStart();
  const end = new Date(start.getTime() + 7 * dayMs);

  const count = await prisma.tafPlanTask.count({
    where: {
      userId,
      scheduledFor: { gte: start, lt: end }
    }
  });

  if (count > 0) return;

  await prisma.tafPlanTask.createMany({
    data: defaultWeeklyPlan.map(([title, activity], index) => ({
      userId,
      scheduledFor: new Date(start.getTime() + index * dayMs),
      title,
      activity,
      status: "PENDENTE" as TafPlanTaskStatus
    })),
    skipDuplicates: true
  });
}

export async function getTafDashboard(userId: string) {
  await Promise.all([ensureTafChecklistForUser(userId), ensureWeeklyPlanForUser(userId)]);

  const weekStart = mondayStart();
  const now = new Date();

  const [trainingLogs, healthSnapshots, simulations, checklistItems, planTasks, requirements, notices] =
    await Promise.all([
      prisma.tafTrainingLog.findMany({
        where: { userId },
        orderBy: { trainedAt: "desc" },
        take: 80
      }),
      prisma.tafHealthSnapshot.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 12
      }),
      prisma.tafSimulation.findMany({
        where: { userId },
        orderBy: { simulatedAt: "desc" },
        take: 10
      }),
      prisma.tafChecklistItem.findMany({
        where: { userId },
        orderBy: [{ status: "asc" }, { expiresAt: "asc" }, { title: "asc" }]
      }),
      prisma.tafPlanTask.findMany({
        where: { userId, scheduledFor: { gte: weekStart, lt: new Date(weekStart.getTime() + 7 * dayMs) } },
        orderBy: { scheduledFor: "asc" }
      }),
      prisma.tafExerciseRequirement.findMany({ where: { active: true }, orderBy: { createdAt: "asc" } }),
      prisma.tafOfficialNotice.findMany({ where: { active: true }, orderBy: { createdAt: "desc" }, take: 3 })
    ]);

  const runLogs = trainingLogs.filter((log) => log.exerciseType === "CORRIDA");
  const runLogsAsc = [...runLogs].reverse();
  const latestRun = runLogs[0];
  const previousRun = runLogs[1];
  const weeklyLogs = trainingLogs.filter((log) => log.trainedAt >= weekStart);
  const weeklyStrengthLogs = weeklyLogs.filter((log) => log.exerciseType !== "CORRIDA");
  const latestHealth = healthSnapshots[0];
  const painSequence = trainingLogs.slice(0, 2).filter((log) => log.pain).length >= 2;

  const pendingChecklist = checklistItems.filter((item) => {
    const expired = item.expiresAt ? item.expiresAt < now : false;
    return item.status === "PENDENTE" || item.status === "EM_ANALISE" || item.status === "VENCIDO" || expired;
  });

  const nextPending =
    pendingChecklist.find((item) => item.expiresAt && item.expiresAt >= now) ?? pendingChecklist[0] ?? null;
  const nextTraining = planTasks.find((task) => task.status === "PENDENTE" && task.scheduledFor >= weekStart);

  const runJumpPercent =
    latestRun?.distanceMeters && previousRun?.distanceMeters
      ? Math.round(((latestRun.distanceMeters - previousRun.distanceMeters) / previousRun.distanceMeters) * 100)
      : 0;

  const alerts: Array<{ level: "ok" | "attention" | "risk"; title: string; detail: string }> = [];

  if (!latestHealth?.doctorEvaluationDone) {
    alerts.push({
      level: "attention",
      title: "Avaliacao medica pendente",
      detail: "Registre uma avaliacao medica antes de aumentar volume ou intensidade."
    });
  }

  if (painSequence) {
    alerts.push({
      level: "risk",
      title: "Dor registrada em treinos seguidos",
      detail: "Reduza carga e procure orientacao profissional antes de insistir no estimulo."
    });
  }

  if (latestHealth?.sleepHours && latestHealth.sleepHours < 6) {
    alerts.push({
      level: "attention",
      title: "Sono abaixo do recomendado",
      detail: "Sono baixo prejudica recuperacao, corrida e forca."
    });
  }

  if (runJumpPercent > 25) {
    alerts.push({
      level: "risk",
      title: "Salto brusco na corrida",
      detail: `A distancia subiu ${runJumpPercent}% em relacao ao treino anterior. Evolua com cautela.`
    });
  }

  const expiredCount = checklistItems.filter((item) => item.expiresAt && item.expiresAt < now && item.status !== "CONCLUIDO").length;
  if (expiredCount > 0) {
    alerts.push({
      level: "risk",
      title: "Documento ou exame vencido",
      detail: `${expiredCount} item(ns) precisam de atualizacao imediata.`
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      level: "ok",
      title: "Dentro do plano",
      detail: "Sem alertas criticos no historico recente."
    });
  }

  const bestRunMeters = Math.max(0, ...runLogs.map((log) => parseNumber(log.distanceMeters)));
  const bestPushups = Math.max(0, ...trainingLogs.filter((log) => log.exerciseType === "FLEXAO").map((log) => parseNumber(log.repetitions)));
  const bestSitups = Math.max(0, ...trainingLogs.filter((log) => log.exerciseType === "ABDOMINAL").map((log) => parseNumber(log.repetitions)));
  const bestPull = Math.max(
    0,
    ...trainingLogs.filter((log) => log.exerciseType === "FORCA_COMPLEMENTAR").map((log) => parseNumber(log.repetitions))
  );

  const readinessScore = Math.max(
    0,
    Math.min(
      100,
      100 -
        pendingChecklist.length * 5 -
        (latestRun ? 0 : 18) -
        (latestHealth?.doctorEvaluationDone ? 0 : 14) -
        (painSequence ? 16 : 0) -
        (runJumpPercent > 25 ? 12 : 0)
    )
  );

  const readinessStatus = readinessScore >= 80 ? "Dentro do plano" : readinessScore >= 60 ? "Atenção" : "Risco";

  return {
    metrics: [
      {
        label: "Corrida",
        value: latestRun ? formatKm(latestRun.distanceMeters) : "Iniciar",
        detail: latestRun ? `${formatMinutes(latestRun.durationSeconds)} no ultimo treino` : "Registre o primeiro treino",
        tone: "blue" as const
      },
      {
        label: "Força",
        value: `${Math.min(100, Math.round((weeklyStrengthLogs.length / 3) * 100))}%`,
        detail: `${weeklyStrengthLogs.length}/3 sessoes de forca na semana`,
        tone: undefined
      },
      {
        label: "IMC",
        value: latestHealth?.bmi ? latestHealth.bmi.toFixed(1).replace(".", ",") : "Sem dado",
        detail: "Indicador, nao substitui avaliacao profissional",
        tone: "gold" as const
      },
      {
        label: "Pendencias",
        value: String(pendingChecklist.length),
        detail: nextPending ? nextPending.title : "Checklist em dia",
        tone: pendingChecklist.length > 0 ? ("red" as const) : undefined
      }
    ],
    readiness: {
      score: readinessScore,
      status: readinessStatus,
      nextTraining: nextTraining ? nextTraining.title : "Montar proximo treino",
      nextPending: nextPending ? nextPending.title : "Sem pendencia critica"
    },
    alerts,
    bestMarks: {
      run: bestRunMeters ? formatKm(bestRunMeters) : "Sem marca",
      pushups: bestPushups ? `${bestPushups} reps` : "Sem marca",
      situps: bestSitups ? `${bestSitups} reps` : "Sem marca",
      pull: bestPull ? `${bestPull} reps` : "Configuravel"
    },
    weeklyFrequency: weeklyLogs.length,
    runEvolution: runLogsAsc.slice(-6).map((log) => ({
      id: log.id,
      label: formatDate(log.trainedAt),
      distanceKm: log.distanceMeters ? Number((log.distanceMeters / 1000).toFixed(2)) : 0,
      time: formatMinutes(log.durationSeconds)
    })),
    recentLogs: trainingLogs.slice(0, 8).map((log) => ({
      id: log.id,
      exerciseType: log.exerciseType,
      trainedAt: serializeDate(log.trainedAt),
      summary:
        log.exerciseType === "CORRIDA"
          ? `${formatKm(log.distanceMeters)} em ${formatMinutes(log.durationSeconds)}`
          : `${log.repetitions ?? 0} reps, ${log.sets ?? 1} serie(s)`,
      pain: log.pain,
      notes: log.notes
    })),
    health: latestHealth
      ? {
          doctorEvaluationDone: latestHealth.doctorEvaluationDone,
          doctorEvaluationAt: serializeDate(latestHealth.doctorEvaluationAt),
          hasLimitation: latestHealth.hasLimitation,
          hasPain: latestHealth.hasPain,
          painLocation: latestHealth.painLocation,
          sleepHours: latestHealth.sleepHours,
          weightKg: latestHealth.weightKg,
          heightCm: latestHealth.heightCm,
          bmi: latestHealth.bmi,
          notes: latestHealth.notes,
          createdAt: serializeDate(latestHealth.createdAt)
        }
      : null,
    simulations: simulations.map((simulation) => ({
      id: simulation.id,
      simulatedAt: serializeDate(simulation.simulatedAt),
      exerciseOrder: simulation.exerciseOrder,
      run: simulation.runDistanceMeters
        ? `${formatKm(simulation.runDistanceMeters)} em ${formatMinutes(simulation.runDurationSeconds)}`
        : "Sem corrida",
      pushups: simulation.pushups,
      situps: simulation.situps,
      pullups: simulation.pullups,
      complementaryResult: simulation.complementaryResult,
      restSeconds: simulation.restSeconds,
      finalStatus: simulation.finalStatus,
      notes: simulation.notes
    })),
    checklist: checklistItems.map((item) => ({
      id: item.id,
      kind: item.kind,
      title: item.title,
      status: item.status,
      issuedAt: serializeDate(item.issuedAt),
      expiresAt: serializeDate(item.expiresAt),
      fileName: item.fileName,
      filePath: item.filePath,
      notes: item.notes,
      guidance: item.guidance,
      isExpired: Boolean(item.expiresAt && item.expiresAt < now && item.status !== "CONCLUIDO")
    })),
    planTasks: planTasks.map((task) => ({
      id: task.id,
      scheduledFor: serializeDate(task.scheduledFor),
      title: task.title,
      activity: task.activity,
      status: task.status,
      notes: task.notes
    })),
    requirements: requirements.map((requirement) => ({
      id: requirement.id,
      title: requirement.title,
      exerciseType: requirement.exerciseType,
      minMale: requirement.minMale,
      minFemale: requirement.minFemale,
      unit: requirement.unit,
      notes: requirement.notes
    })),
    notices: notices.map((notice) => ({
      id: notice.id,
      title: notice.title,
      content: notice.content
    }))
  };
}

export async function getTafAdminConfig() {
  await ensureDefaultTafConfiguration();

  const [requirements, templates, notices] = await Promise.all([
    prisma.tafExerciseRequirement.findMany({ orderBy: [{ active: "desc" }, { createdAt: "asc" }] }),
    prisma.tafChecklistTemplate.findMany({ orderBy: [{ active: "desc" }, { kind: "asc" }, { title: "asc" }] }),
    prisma.tafOfficialNotice.findMany({ orderBy: [{ active: "desc" }, { createdAt: "desc" }] })
  ]);

  return {
    requirements,
    templates,
    notices
  };
}

export type TafDashboard = Awaited<ReturnType<typeof getTafDashboard>>;
export type TafAdminConfig = Awaited<ReturnType<typeof getTafAdminConfig>>;
