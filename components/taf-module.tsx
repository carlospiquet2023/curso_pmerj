"use client";

import { useMemo, useState, useActionState } from "react";
import {
  Activity,
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  FileCheck,
  HeartPulse,
  PlayCircle,
  ShieldAlert,
  TrendingUp,
  Upload
} from "lucide-react";
import type { TafDashboard } from "@/lib/taf";
import {
  createTafSimulation,
  createTafTrainingLog,
  saveTafHealthSnapshot,
  updateTafChecklistItem,
  updateTafPlanTask,
  type TafActionState
} from "@/app/taf/actions";

type TafModuleProps = {
  dashboard: TafDashboard;
};

const tabLabels = [
  ["treino", "Treinos"],
  ["plano", "Plano"],
  ["saude", "Saúde"],
  ["simulado", "Simulado"],
  ["checklist", "Checklist"]
] as const;

const exerciseLabels: Record<string, string> = {
  CORRIDA: "Corrida",
  FLEXAO: "Flexão",
  ABDOMINAL: "Abdominal",
  FORCA_COMPLEMENTAR: "Força complementar"
};

const statusLabels: Record<string, string> = {
  PENDENTE: "Pendente",
  EM_ANALISE: "Em análise",
  CONCLUIDO: "Concluído",
  VENCIDO: "Vencido",
  NAO_SE_APLICA: "Não se aplica",
  APROVADO: "Aprovado",
  ATENCAO: "Atenção",
  INSUFICIENTE: "Insuficiente",
  NAO_FEITO: "Não feito",
  PARCIAL: "Parcial",
  DOR: "Senti dor",
  AJUSTAR: "Preciso ajustar"
};

function todayInput() {
  return new Date().toISOString().slice(0, 10);
}

function dateInput(value: string | null) {
  return value ? value.slice(0, 10) : "";
}

function displayDate(value: string | null) {
  if (!value) return "Sem data";
  return new Date(value).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function actionClass(status: string, expired?: boolean) {
  if (expired || status === "VENCIDO" || status === "INSUFICIENTE" || status === "DOR") return "tag tag-danger";
  if (status === "CONCLUIDO" || status === "APROVADO") return "tag tag-success";
  if (status === "ATENCAO" || status === "PARCIAL" || status === "AJUSTAR" || status === "EM_ANALISE") {
    return "tag tag-warning";
  }
  return "tag";
}

function StateMessage({ state }: { state?: TafActionState }) {
  if (!state?.message && !state?.error) return null;
  return (
    <p className={state.ok ? "form-feedback success" : "form-feedback danger"}>
      {state.message ?? state.error}
    </p>
  );
}

function SubmitButton({ label, icon }: { label: string; icon?: "upload" | "play" | "check" }) {
  const Icon = icon === "upload" ? Upload : icon === "play" ? PlayCircle : CheckCircle2;
  return (
    <button className="primary-action" type="submit">
      <Icon size={18} />
      {label}
    </button>
  );
}

function MetricTile({ label, value, detail, tone }: { label: string; value: string; detail: string; tone?: string }) {
  const icon = label === "Corrida" ? Activity : label === "Força" ? Dumbbell : label === "IMC" ? HeartPulse : ClipboardCheck;
  const Icon = icon;

  return (
    <article className={`metric-card metric-${tone ?? "green"}`}>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
      <div className="metric-icon" aria-hidden="true">
        <Icon size={20} />
      </div>
    </article>
  );
}

function ReadinessPanel({ dashboard }: TafModuleProps) {
  return (
    <section className="panel taf-readiness">
      <div>
        <span className="eyebrow">Prontidão pós-prova</span>
        <h2>{dashboard.readiness.status}</h2>
        <p>
          Score calculado a partir de treino, saúde, pendências, dor registrada e evolução da corrida.
        </p>
      </div>
      <div className="taf-score-ring" aria-label={`Score ${dashboard.readiness.score}`}>
        <strong>{dashboard.readiness.score}</strong>
        <span>/100</span>
      </div>
      <div className="taf-next-actions">
        <span>
          <Dumbbell size={16} />
          {dashboard.readiness.nextTraining}
        </span>
        <span>
          <FileCheck size={16} />
          {dashboard.readiness.nextPending}
        </span>
      </div>
    </section>
  );
}

function TrainingTab({ dashboard }: TafModuleProps) {
  const [state, formAction] = useActionState(createTafTrainingLog, undefined as TafActionState | undefined);
  const [exerciseType, setExerciseType] = useState("CORRIDA");
  const maxDistance = useMemo(
    () => Math.max(1, ...dashboard.runEvolution.map((item) => item.distanceKm)),
    [dashboard.runEvolution]
  );

  return (
    <section className="taf-tab-grid">
      <article className="panel taf-form-panel">
        <span className="eyebrow">Registro de treino</span>
        <h2>Novo treino físico</h2>
        <form action={formAction} className="taf-form">
          <div className="form-grid-3">
            <label>
              Tipo
              <select name="exerciseType" value={exerciseType} onChange={(event) => setExerciseType(event.target.value)}>
                <option value="CORRIDA">Corrida</option>
                <option value="FLEXAO">Flexão</option>
                <option value="ABDOMINAL">Abdominal</option>
                <option value="FORCA_COMPLEMENTAR">Barra ou força complementar</option>
              </select>
            </label>
            <label>
              Data
              <input name="trainedAt" type="date" defaultValue={todayInput()} />
            </label>
            <label>
              Esforço 1-10
              <input name="perceivedEffort" type="number" min="1" max="10" placeholder="7" />
            </label>
          </div>

          {exerciseType === "CORRIDA" ? (
            <div className="form-grid-3">
              <label>
                Distância km
                <input name="distanceKm" type="number" min="0" step="0.01" placeholder="2,10" />
              </label>
              <label>
                Tempo min
                <input name="durationMinutes" type="number" min="0" placeholder="12" />
              </label>
              <label>
                Segundos
                <input name="durationSeconds" type="number" min="0" max="59" placeholder="30" />
              </label>
            </div>
          ) : (
            <div className="form-grid-4">
              <label>
                Exercício
                <input name="complementaryExercise" placeholder={exerciseType === "FORCA_COMPLEMENTAR" ? "Barra, remada, puxada..." : exerciseLabels[exerciseType]} />
              </label>
              <label>
                Repetições
                <input name="repetitions" type="number" min="0" placeholder="20" />
              </label>
              <label>
                Séries
                <input name="sets" type="number" min="1" placeholder="3" />
              </label>
              <label>
                Descanso s
                <input name="restSeconds" type="number" min="0" placeholder="60" />
              </label>
            </div>
          )}

          <div className="form-grid-3">
            <label>
              Cadência
              <input name="cadence" placeholder="Controlada" />
            </label>
            <label>
              Carga kg
              <input name="loadKg" type="number" min="0" step="0.5" placeholder="Opcional" />
            </label>
            <label className="checkbox-field">
              <input name="controlledExecution" type="checkbox" />
              Execução controlada
            </label>
          </div>

          <div className="form-grid-2">
            <label className="checkbox-field">
              <input name="pain" type="checkbox" />
              Teve dor ou limitação
            </label>
            <label>
              Local da dor
              <input name="painLocation" placeholder="Joelho, lombar, ombro..." />
            </label>
          </div>

          <label>
            Observação
            <textarea name="notes" rows={3} placeholder="Como foi o treino, ajuste necessário, sensação geral..." />
          </label>

          <SubmitButton label="Registrar treino" />
          <StateMessage state={state} />
        </form>
      </article>

      <article className="panel">
        <span className="eyebrow">Histórico e evolução</span>
        <h2>Marcas reais do aluno</h2>
        <div className="taf-best-grid">
          <div><strong>{dashboard.bestMarks.run}</strong><span>Melhor corrida</span></div>
          <div><strong>{dashboard.bestMarks.pushups}</strong><span>Melhor flexão</span></div>
          <div><strong>{dashboard.bestMarks.situps}</strong><span>Melhor abdominal</span></div>
          <div><strong>{dashboard.weeklyFrequency}</strong><span>Treinos na semana</span></div>
        </div>

        <div className="taf-chart" aria-label="Evolução da corrida">
          {dashboard.runEvolution.length === 0 ? (
            <p className="muted-text">Registre corridas para o gráfico aparecer.</p>
          ) : (
            dashboard.runEvolution.map((item) => (
              <div className="taf-chart-row" key={item.id}>
                <span>{item.label}</span>
                <div>
                  <strong style={{ width: `${Math.max(8, (item.distanceKm / maxDistance) * 100)}%` }} />
                </div>
                <em>{item.distanceKm} km</em>
              </div>
            ))
          )}
        </div>

        <div className="review-list">
          {dashboard.recentLogs.map((log) => (
            <div className="review-item" key={log.id}>
              <Activity size={18} />
              <span>
                <strong>{exerciseLabels[log.exerciseType]} - {displayDate(log.trainedAt)}</strong>
                <small>{log.summary}</small>
                {log.pain ? <span className="tag tag-danger">Dor registrada</span> : null}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function PlanTab({ dashboard }: TafModuleProps) {
  const [state, formAction] = useActionState(updateTafPlanTask, undefined as TafActionState | undefined);

  return (
    <section className="panel">
      <span className="eyebrow">Plano semanal</span>
      <h2>Rotina progressiva com marcação real</h2>
      <div className="taf-plan-list">
        {dashboard.planTasks.map((task) => (
          <form action={formAction} className="taf-plan-item" key={task.id}>
            <input name="id" type="hidden" value={task.id} />
            <div>
              <span className="eyebrow">{displayDate(task.scheduledFor)}</span>
              <strong>{task.title}</strong>
              <small>{task.activity}</small>
            </div>
            <select name="status" defaultValue={task.status}>
              <option value="PENDENTE">Pendente</option>
              <option value="CONCLUIDO">Concluído</option>
              <option value="NAO_FEITO">Não feito</option>
              <option value="PARCIAL">Feito parcialmente</option>
              <option value="DOR">Senti dor</option>
              <option value="AJUSTAR">Preciso ajustar</option>
            </select>
            <input name="notes" placeholder="Observação rápida" defaultValue={task.notes ?? ""} />
            <button className="secondary-action" type="submit">
              <CalendarCheck size={16} />
              Atualizar
            </button>
          </form>
        ))}
      </div>
      <StateMessage state={state} />
    </section>
  );
}

function HealthTab({ dashboard }: TafModuleProps) {
  const [state, formAction] = useActionState(saveTafHealthSnapshot, undefined as TafActionState | undefined);

  return (
    <section className="taf-tab-grid">
      <article className="panel taf-form-panel">
        <HeartPulse className="panel-icon" size={30} />
        <span className="eyebrow">Saúde e segurança</span>
        <h2>Novo diagnóstico do aluno</h2>
        <form action={formAction} className="taf-form">
          <div className="form-grid-2">
            <label className="checkbox-field">
              <input name="doctorEvaluationDone" type="checkbox" defaultChecked={dashboard.health?.doctorEvaluationDone ?? false} />
              Avaliação médica realizada
            </label>
            <label>
              Data da avaliação
              <input name="doctorEvaluationAt" type="date" defaultValue={dateInput(dashboard.health?.doctorEvaluationAt ?? null)} />
            </label>
          </div>
          <div className="form-grid-2">
            <label className="checkbox-field">
              <input name="hasLimitation" type="checkbox" defaultChecked={dashboard.health?.hasLimitation ?? false} />
              Possui limitação física
            </label>
            <label className="checkbox-field">
              <input name="hasPain" type="checkbox" defaultChecked={dashboard.health?.hasPain ?? false} />
              Sente dores atualmente
            </label>
          </div>
          <div className="form-grid-4">
            <label>
              Local da dor
              <input name="painLocation" defaultValue={dashboard.health?.painLocation ?? ""} />
            </label>
            <label>
              Sono médio
              <input name="sleepHours" type="number" step="0.5" min="0" max="14" defaultValue={dashboard.health?.sleepHours ?? ""} />
            </label>
            <label>
              Peso kg
              <input name="weightKg" type="number" step="0.1" min="0" defaultValue={dashboard.health?.weightKg ?? ""} />
            </label>
            <label>
              Altura cm
              <input name="heightCm" type="number" step="0.1" min="0" defaultValue={dashboard.health?.heightCm ?? ""} />
            </label>
          </div>
          <label>
            Observações
            <textarea name="notes" rows={4} defaultValue={dashboard.health?.notes ?? ""} />
          </label>
          <SubmitButton label="Salvar saúde" />
          <StateMessage state={state} />
        </form>
      </article>

      <article className="panel">
        <ShieldAlert className="panel-icon" size={30} />
        <span className="eyebrow">Alertas preventivos</span>
        <h2>Risco e orientação</h2>
        <div className="review-list">
          {dashboard.alerts.map((alert) => (
            <div className="review-item" key={alert.title}>
              {alert.level === "risk" ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
              <span>
                <strong>{alert.title}</strong>
                <small>{alert.detail}</small>
                <span className={alert.level === "risk" ? "tag tag-danger" : alert.level === "attention" ? "tag tag-warning" : "tag tag-success"}>
                  {alert.level === "risk" ? "Risco" : alert.level === "attention" ? "Atenção" : "Dentro do plano"}
                </span>
              </span>
            </div>
          ))}
        </div>
        <p className="taf-disclaimer">
          IMC e alertas são indicadores de organização. Eles não substituem avaliação médica, fisioterapêutica ou orientação profissional.
        </p>
      </article>
    </section>
  );
}

function SimulationTab({ dashboard }: TafModuleProps) {
  const [state, formAction] = useActionState(createTafSimulation, undefined as TafActionState | undefined);

  return (
    <section className="taf-tab-grid">
      <article className="panel taf-form-panel">
        <PlayCircle className="panel-icon" size={30} />
        <span className="eyebrow">Simulado de TAF</span>
        <h2>Registrar bateria completa</h2>
        <form action={formAction} className="taf-form">
          <div className="form-grid-2">
            <label>
              Data
              <input name="simulatedAt" type="date" defaultValue={todayInput()} />
            </label>
            <label>
              Ordem dos exercícios
              <input name="exerciseOrder" defaultValue="Corrida, flexão, abdominal, força complementar" />
            </label>
          </div>
          <div className="form-grid-4">
            <label>
              Corrida km
              <input name="runDistanceKm" type="number" step="0.01" min="0" />
            </label>
            <label>
              Corrida min
              <input name="runMinutes" type="number" min="0" />
            </label>
            <label>
              Segundos
              <input name="runSeconds" type="number" min="0" max="59" />
            </label>
            <label>
              Descanso s
              <input name="restSeconds" type="number" min="0" />
            </label>
          </div>
          <div className="form-grid-4">
            <label>
              Flexões
              <input name="pushups" type="number" min="0" />
            </label>
            <label>
              Abdominais
              <input name="situps" type="number" min="0" />
            </label>
            <label>
              Barra/força
              <input name="pullups" type="number" min="0" />
            </label>
            <label>
              Resultado final
              <select name="finalStatus" defaultValue="ATENCAO">
                <option value="APROVADO">Aprovado</option>
                <option value="ATENCAO">Atenção</option>
                <option value="INSUFICIENTE">Insuficiente</option>
              </select>
            </label>
          </div>
          <label>
            Complementar
            <input name="complementaryResult" placeholder="Ex.: remada 3x12, barra assistida..." />
          </label>
          <label>
            Observações
            <textarea name="notes" rows={3} />
          </label>
          <SubmitButton label="Salvar simulado" icon="play" />
          <StateMessage state={state} />
        </form>
      </article>

      <article className="panel">
        <span className="eyebrow">Histórico de simulados</span>
        <h2>Resultados registrados</h2>
        <div className="review-list">
          {dashboard.simulations.length === 0 ? (
            <p className="muted-text">Nenhum simulado registrado ainda.</p>
          ) : (
            dashboard.simulations.map((simulation) => (
              <div className="review-item" key={simulation.id}>
                <TrendingUp size={18} />
                <span>
                  <strong>{displayDate(simulation.simulatedAt)} - {statusLabels[simulation.finalStatus]}</strong>
                  <small>{simulation.run}</small>
                  <small>Flexão {simulation.pushups ?? 0}, abdominal {simulation.situps ?? 0}, força {simulation.pullups ?? 0}</small>
                  <span className={actionClass(simulation.finalStatus)}>{statusLabels[simulation.finalStatus]}</span>
                </span>
              </div>
            ))
          )}
        </div>
      </article>
    </section>
  );
}

function ChecklistTab({ dashboard }: TafModuleProps) {
  const [state, formAction] = useActionState(updateTafChecklistItem, undefined as TafActionState | undefined);
  const groups = [
    ["DOCUMENTO", "Documentos pessoais"],
    ["EXAME", "Exames"],
    ["ETAPA", "Etapas pós-prova"]
  ] as const;

  return (
    <section className="taf-checklist-layout">
      {groups.map(([kind, title]) => (
        <article className="panel" key={kind}>
          <FileCheck className="panel-icon" size={28} />
          <span className="eyebrow">{title}</span>
          <h2>{title}</h2>
          <div className="taf-checklist-list">
            {dashboard.checklist.filter((item) => item.kind === kind).map((item) => (
              <form action={formAction} className="taf-checklist-item" key={item.id}>
                <input name="id" type="hidden" value={item.id} />
                <header>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.guidance}</small>
                  </div>
                  <span className={actionClass(item.status, item.isExpired)}>
                    {item.isExpired ? "Vencido" : statusLabels[item.status]}
                  </span>
                </header>
                <div className="form-grid-3">
                  <label>
                    Status
                    <select name="status" defaultValue={item.status}>
                      <option value="PENDENTE">Pendente</option>
                      <option value="EM_ANALISE">Em análise</option>
                      <option value="CONCLUIDO">Concluído</option>
                      <option value="VENCIDO">Vencido</option>
                      <option value="NAO_SE_APLICA">Não se aplica</option>
                    </select>
                  </label>
                  <label>
                    Emissão
                    <input name="issuedAt" type="date" defaultValue={dateInput(item.issuedAt)} />
                  </label>
                  <label>
                    Validade
                    <input name="expiresAt" type="date" defaultValue={dateInput(item.expiresAt)} />
                  </label>
                </div>
                <label>
                  Arquivo
                  <input name="file" type="file" />
                </label>
                {item.filePath ? (
                  <a className="tag" href={item.filePath} target="_blank" rel="noreferrer">
                    {item.fileName ?? "Arquivo anexado"}
                  </a>
                ) : null}
                <label>
                  Observação
                  <textarea name="notes" rows={2} defaultValue={item.notes ?? ""} />
                </label>
                <button className="secondary-action" type="submit">
                  <Upload size={16} />
                  Atualizar item
                </button>
              </form>
            ))}
          </div>
        </article>
      ))}
      <StateMessage state={state} />
    </section>
  );
}

export function TafModule({ dashboard }: TafModuleProps) {
  const [activeTab, setActiveTab] = useState<(typeof tabLabels)[number][0]>("treino");

  return (
    <div className="taf-module">
      <section className="grid-4">
        {dashboard.metrics.map((metric) => (
          <MetricTile
            detail={metric.detail}
            key={metric.label}
            label={metric.label}
            tone={metric.tone}
            value={metric.value}
          />
        ))}
      </section>

      <ReadinessPanel dashboard={dashboard} />

      {dashboard.notices.length > 0 ? (
        <section className="taf-notice-strip">
          {dashboard.notices.map((notice) => (
            <article key={notice.id}>
              <ShieldAlert size={18} />
              <span>
                <strong>{notice.title}</strong>
                <small>{notice.content}</small>
              </span>
            </article>
          ))}
        </section>
      ) : null}

      <section className="taf-tabs" aria-label="Seções do módulo TAF">
        {tabLabels.map(([id, label]) => (
          <button className={activeTab === id ? "active" : ""} key={id} onClick={() => setActiveTab(id)} type="button">
            {label}
          </button>
        ))}
      </section>

      {activeTab === "treino" ? <TrainingTab dashboard={dashboard} /> : null}
      {activeTab === "plano" ? <PlanTab dashboard={dashboard} /> : null}
      {activeTab === "saude" ? <HealthTab dashboard={dashboard} /> : null}
      {activeTab === "simulado" ? <SimulationTab dashboard={dashboard} /> : null}
      {activeTab === "checklist" ? <ChecklistTab dashboard={dashboard} /> : null}
    </div>
  );
}
