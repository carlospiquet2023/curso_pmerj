import { ClipboardCheck, RefreshCcw } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { StatusPill } from "@/components/status-pill";
import { editalStatus } from "@/lib/edital-data";
import { getEditalMap } from "@/lib/edital-map";

export const dynamic = "force-dynamic";

export default async function SubjectsPage() {
  const subjects = await getEditalMap();

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Edital inteligente</span>
          <h1>Disciplinas, tópicos, prioridade e atualização</h1>
          <p>
            A matriz foi organizada em blocos de estudo e fica conectada ao desempenho, domínio,
            revisões e plano de cada aluno.
          </p>
        </div>
      </section>

      <section className="grid-2">
        <article className="panel edital-status-panel">
          <ClipboardCheck className="panel-icon" size={30} />
          <span className="eyebrow">Matriz atual</span>
          <h2>{editalStatus.version}</h2>
          <p>{editalStatus.source}. {editalStatus.readiness}.</p>
          <div className="tag-row">
            {editalStatus.rules.map((rule) => (
              <span className="tag" key={rule}>{rule}</span>
            ))}
          </div>
        </article>

        <article className="panel edital-status-panel">
          <RefreshCcw className="panel-icon" size={30} />
          <span className="eyebrow">Quando sair o edital 2026</span>
          <h2>Atualização sem refazer a plataforma</h2>
          <div className="review-list">
            {editalStatus.adminActions.map((action) => (
              <div className="review-item" key={action}>
                <ClipboardCheck size={18} />
                <span><strong>{action}</strong></span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="edital-map">
        {subjects.map((subject) => (
          <article className="subject-card edital-subject" key={subject.name}>
            <header className="subject-map-header">
              <div>
                <span className="eyebrow">{subject.shortName}</span>
                <h2>{subject.name}</h2>
                <p>{subject.description}</p>
              </div>
              <StatusPill status={subject.status} />
            </header>
            <ProgressBar value={subject.progress} label={`Domínio em ${subject.name}`} />
            <div className="tag-row">
              <span className="tag">Domínio {subject.mastery}%</span>
              <span className="tag">Acerto {subject.accuracy}%</span>
              <span className="tag">{subject.topics.length} tópicos</span>
            </div>

            <div className="topic-map-list">
              {subject.topics.map((topic) => (
                <section className="topic-block" key={topic.id}>
                  <div className="topic-block-header">
                    <div>
                      <span className="topic-code">{topic.code}</span>
                      <h3>{topic.title}</h3>
                    </div>
                    <StatusPill status={topic.status} />
                  </div>
                  <div className="tag-row">
                    <span className="tag">Prioridade {topic.priority}</span>
                    <span className="tag">Domínio {topic.mastery}%</span>
                    <span className="tag">{topic.questionsLinked} questões vinculadas</span>
                    {topic.reviewDue ? <span className="tag tag-danger">Revisão pendente</span> : null}
                  </div>
                  <div className="subtopic-grid">
                    {topic.children.map((child) => (
                      <article className="subtopic-card" key={child.id}>
                        <div>
                          <span className="topic-code">{child.code}</span>
                          <strong>{child.title}</strong>
                        </div>
                        <StatusPill status={child.status} />
                        <ProgressBar value={child.mastery} label={`Domínio em ${child.title}`} />
                        <div className="tag-row">
                          <span className="tag">Prioridade {child.priority}</span>
                          <span className="tag">{child.questionsLinked} questões</span>
                          {child.reviewDue ? <span className="tag tag-danger">Revisar</span> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
