import { Activity, ClipboardCheck, Dumbbell, FileCheck, HeartPulse } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import {
  healthChecks,
  postExamSteps,
  tafExercises,
  tafMetrics,
  tafSafetyNotes,
  tafTimeline
} from "@/lib/taf-data";

export default function TafPage() {
  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">TAF e etapas pós-prova</span>
          <h1>Preparação física, documentos e exames no mesmo fluxo</h1>
          <p>
            A jornada PMERJ não termina na prova objetiva. Este módulo organiza treino físico,
            saúde, checklist documental e etapas posteriores para o aluno se preparar com antecedência.
          </p>
        </div>
      </section>

      <section className="grid-4">
        {tafMetrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
            icon={metric.icon}
            tone={metric.tone}
          />
        ))}
      </section>

      <section className="split-panel">
        <article className="panel taf-focus-panel">
          <Dumbbell className="panel-icon" size={30} />
          <span className="eyebrow">Treino físico</span>
          <h2>Indicadores que precisam virar hábito</h2>
          <div className="review-list">
            {tafExercises.map((exercise) => (
              <div className="review-item" key={exercise.name}>
                <Activity size={18} />
                <span>
                  <strong>{exercise.name}</strong>
                  <small>Atual: {exercise.current}</small>
                  <small>Meta: {exercise.target}</small>
                  <small>Próxima ação: {exercise.nextAction}</small>
                  <span className={exercise.status === "Atenção" ? "tag tag-danger" : "tag"}>
                    {exercise.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel taf-focus-panel">
          <HeartPulse className="panel-icon" size={30} />
          <span className="eyebrow">Segurança do aluno</span>
          <h2>Saúde antes de performance</h2>
          <div className="review-list">
            {healthChecks.map((item) => (
              <div className="review-item" key={item.title}>
                <ClipboardCheck size={18} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                  <span className={item.status === "Pendente" ? "tag tag-danger" : "tag"}>
                    {item.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid-2">
        <article className="panel">
          <span className="eyebrow">Fluxo recomendado</span>
          <h2>Do diagnóstico ao checklist final</h2>
          <div className="timeline" style={{ marginTop: 18 }}>
            {tafTimeline.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-index">{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <FileCheck className="panel-icon" size={30} />
          <span className="eyebrow">Documentos e etapas</span>
          <h2>Checklist pós-prova</h2>
          <div className="review-list">
            {postExamSteps.map((item) => (
              <div className="review-item" key={item.title}>
                <FileCheck size={18} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                  <span className={item.status === "Pendente" ? "tag tag-danger" : "tag"}>
                    {item.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid-5 taf-note-grid">
        {tafSafetyNotes.map((note) => {
          const Icon = note.icon;

          return (
            <article className="module-card" key={note.title}>
              <Icon size={28} />
              <div>
                <h3>{note.title}</h3>
                <p>{note.detail}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
