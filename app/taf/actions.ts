"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  TafChecklistStatus,
  TafExerciseType,
  TafPlanTaskStatus,
  TafSimulationStatus
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LIMITS, sanitizeText, validateCuid } from "@/lib/security";

export type TafActionState = {
  ok?: boolean;
  message?: string;
  error?: string;
};

const exerciseTypes = ["CORRIDA", "FLEXAO", "ABDOMINAL", "FORCA_COMPLEMENTAR"] as const;
const checklistStatuses = ["PENDENTE", "EM_ANALISE", "CONCLUIDO", "VENCIDO", "NAO_SE_APLICA"] as const;
const simulationStatuses = ["APROVADO", "ATENCAO", "INSUFICIENTE"] as const;
const planStatuses = ["PENDENTE", "CONCLUIDO", "NAO_FEITO", "PARCIAL", "DOR", "AJUSTAR"] as const;

async function requireUserId() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user.id;
}

function text(formData: FormData, field: string, max = LIMITS.MAX_SHORT_TEXT_LENGTH) {
  return sanitizeText(formData.get(field)?.toString(), max);
}

function numberValue(formData: FormData, field: string) {
  const raw = formData.get(field)?.toString().replace(",", ".").trim();
  if (!raw) return undefined;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function intValue(formData: FormData, field: string) {
  const parsed = numberValue(formData, field);
  return typeof parsed === "number" ? Math.round(parsed) : undefined;
}

function dateValue(formData: FormData, field: string) {
  const raw = formData.get(field)?.toString();
  if (!raw) return undefined;
  const date = new Date(`${raw}T12:00:00`);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function checked(formData: FormData, field: string) {
  return formData.get(field) === "on" || formData.get(field) === "true";
}

function state(message: string): TafActionState {
  return { ok: true, message };
}

function fail(error: string): TafActionState {
  return { ok: false, error };
}

export async function createTafTrainingLog(
  _prevState: TafActionState | undefined,
  formData: FormData
): Promise<TafActionState> {
  const userId = await requireUserId();
  const exerciseType = formData.get("exerciseType")?.toString() as TafExerciseType | undefined;
  const trainedAt = dateValue(formData, "trainedAt") ?? new Date();

  if (!exerciseType || !exerciseTypes.includes(exerciseType as (typeof exerciseTypes)[number])) {
    return fail("Tipo de treino invalido.");
  }

  const distanceKm = numberValue(formData, "distanceKm");
  const distanceMeters = typeof distanceKm === "number" ? Math.round(distanceKm * 1000) : undefined;
  const durationMinutes = intValue(formData, "durationMinutes") ?? 0;
  const durationSecondsExtra = intValue(formData, "durationSeconds") ?? 0;
  const durationSeconds = durationMinutes > 0 || durationSecondsExtra > 0 ? durationMinutes * 60 + durationSecondsExtra : undefined;
  const repetitions = intValue(formData, "repetitions");
  const sets = intValue(formData, "sets");
  const restSeconds = intValue(formData, "restSeconds");
  const perceivedEffort = intValue(formData, "perceivedEffort");
  const paceSecondsPerKm =
    distanceMeters && durationSeconds ? Math.round(durationSeconds / (distanceMeters / 1000)) : undefined;

  if (exerciseType === "CORRIDA" && !distanceMeters) {
    return fail("Informe a distancia da corrida.");
  }

  if (exerciseType !== "CORRIDA" && !repetitions) {
    return fail("Informe as repeticoes validas.");
  }

  await prisma.tafTrainingLog.create({
    data: {
      userId,
      exerciseType,
      trainedAt,
      distanceMeters,
      durationSeconds,
      paceSecondsPerKm,
      perceivedEffort,
      pain: checked(formData, "pain"),
      painLocation: text(formData, "painLocation"),
      repetitions,
      sets,
      restSeconds,
      controlledExecution: formData.has("controlledExecution") ? checked(formData, "controlledExecution") : undefined,
      cadence: text(formData, "cadence"),
      complementaryExercise: text(formData, "complementaryExercise"),
      loadKg: numberValue(formData, "loadKg"),
      notes: text(formData, "notes", LIMITS.MAX_TEXT_LENGTH)
    }
  });

  revalidatePath("/taf");
  return state("Treino registrado no historico.");
}

export async function saveTafHealthSnapshot(
  _prevState: TafActionState | undefined,
  formData: FormData
): Promise<TafActionState> {
  const userId = await requireUserId();
  const weightKg = numberValue(formData, "weightKg");
  const heightCm = numberValue(formData, "heightCm");
  const heightMeters = heightCm ? heightCm / 100 : undefined;
  const bmi = weightKg && heightMeters ? Number((weightKg / (heightMeters * heightMeters)).toFixed(2)) : undefined;

  await prisma.tafHealthSnapshot.create({
    data: {
      userId,
      doctorEvaluationDone: checked(formData, "doctorEvaluationDone"),
      doctorEvaluationAt: dateValue(formData, "doctorEvaluationAt"),
      hasLimitation: checked(formData, "hasLimitation"),
      hasPain: checked(formData, "hasPain"),
      painLocation: text(formData, "painLocation"),
      sleepHours: numberValue(formData, "sleepHours"),
      weightKg,
      heightCm,
      bmi,
      notes: text(formData, "notes", LIMITS.MAX_TEXT_LENGTH)
    }
  });

  revalidatePath("/taf");
  return state("Dados de saude salvos.");
}

export async function createTafSimulation(
  _prevState: TafActionState | undefined,
  formData: FormData
): Promise<TafActionState> {
  const userId = await requireUserId();
  const finalStatus = formData.get("finalStatus")?.toString() as TafSimulationStatus | undefined;
  const runDistanceKm = numberValue(formData, "runDistanceKm");
  const runDistanceMeters = typeof runDistanceKm === "number" ? Math.round(runDistanceKm * 1000) : undefined;
  const runMinutes = intValue(formData, "runMinutes") ?? 0;
  const runSecondsExtra = intValue(formData, "runSeconds") ?? 0;
  const runDurationSeconds = runMinutes > 0 || runSecondsExtra > 0 ? runMinutes * 60 + runSecondsExtra : undefined;

  if (!finalStatus || !simulationStatuses.includes(finalStatus as (typeof simulationStatuses)[number])) {
    return fail("Selecione o resultado final do simulado.");
  }

  await prisma.tafSimulation.create({
    data: {
      userId,
      simulatedAt: dateValue(formData, "simulatedAt") ?? new Date(),
      exerciseOrder: text(formData, "exerciseOrder") || "Corrida, flexao, abdominal, forca complementar",
      runDistanceMeters,
      runDurationSeconds,
      pushups: intValue(formData, "pushups"),
      situps: intValue(formData, "situps"),
      pullups: intValue(formData, "pullups"),
      complementaryResult: text(formData, "complementaryResult"),
      restSeconds: intValue(formData, "restSeconds"),
      finalStatus,
      notes: text(formData, "notes", LIMITS.MAX_TEXT_LENGTH)
    }
  });

  revalidatePath("/taf");
  return state("Simulado de TAF registrado.");
}

export async function updateTafChecklistItem(
  _prevState: TafActionState | undefined,
  formData: FormData
): Promise<TafActionState> {
  const userId = await requireUserId();
  const id = formData.get("id")?.toString();
  const status = formData.get("status")?.toString() as TafChecklistStatus | undefined;

  if (!validateCuid(id)) {
    return fail("Item de checklist invalido.");
  }

  if (!status || !checklistStatuses.includes(status as (typeof checklistStatuses)[number])) {
    return fail("Status invalido.");
  }

  const existing = await prisma.tafChecklistItem.findFirst({ where: { id, userId } });
  if (!existing) {
    return fail("Item nao encontrado.");
  }

  let fileName: string | undefined;
  let filePath: string | undefined;
  const file = formData.get("file");

  if (file instanceof File && file.size > 0) {
    if (file.size > 8 * 1024 * 1024) {
      return fail("Arquivo acima do limite de 8 MB.");
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
    const relativeDir = `/uploads/taf/${userId}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "taf", userId);
    await mkdir(uploadDir, { recursive: true });

    fileName = safeName;
    filePath = `${relativeDir}/${Date.now()}-${safeName}`;
    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(process.cwd(), "public", filePath), bytes);
  }

  await prisma.tafChecklistItem.update({
    where: { id },
    data: {
      status,
      issuedAt: dateValue(formData, "issuedAt") ?? null,
      expiresAt: dateValue(formData, "expiresAt") ?? null,
      notes: text(formData, "notes", LIMITS.MAX_TEXT_LENGTH),
      ...(fileName && filePath ? { fileName, filePath } : {})
    }
  });

  revalidatePath("/taf");
  return state("Checklist atualizado.");
}

export async function updateTafPlanTask(
  _prevState: TafActionState | undefined,
  formData: FormData
): Promise<TafActionState> {
  const userId = await requireUserId();
  const id = formData.get("id")?.toString();
  const status = formData.get("status")?.toString() as TafPlanTaskStatus | undefined;

  if (!validateCuid(id)) {
    return fail("Treino planejado invalido.");
  }

  if (!status || !planStatuses.includes(status as (typeof planStatuses)[number])) {
    return fail("Status do treino invalido.");
  }

  const existing = await prisma.tafPlanTask.findFirst({ where: { id, userId } });
  if (!existing) {
    return fail("Treino planejado nao encontrado.");
  }

  await prisma.tafPlanTask.update({
    where: { id },
    data: {
      status,
      notes: text(formData, "notes", LIMITS.MAX_TEXT_LENGTH)
    }
  });

  revalidatePath("/taf");
  return state("Plano semanal atualizado.");
}
