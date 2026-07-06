import type { TafAdminConfig } from "@/lib/taf";
import {
  createTafChecklistTemplate,
  createTafOfficialNotice,
  createTafRequirement,
  toggleTafChecklistTemplate,
  toggleTafNotice,
  toggleTafRequirement
} from "@/app/admin/taf-actions";

const exerciseLabels: Record<string, string> = {
  CORRIDA: "Corrida",
  FLEXAO: "Flexão",
  ABDOMINAL: "Abdominal",
  FORCA_COMPLEMENTAR: "Força complementar"
};

const kindLabels: Record<string, string> = {
  DOCUMENTO: "Documento",
  EXAME: "Exame",
  ETAPA: "Etapa"
};

export function AdminTafPanel({ config }: { config: TafAdminConfig }) {
  return (
    <section className="page-stack">
      <section className="panel admin-band">
        <span className="eyebrow">TAF e etapas pós-prova</span>
        <h2>Configuração editável para o edital vigente</h2>
        <p>
          Cadastre exercícios, marcas mínimas, documentos, exames e avisos oficiais. Quando o edital 2026 for
          publicado, a atualização fica nesta área, sem alterar código.
        </p>
      </section>

      <section className="grid-3">
        <article className="panel admin-form">
          <span className="eyebrow">Exercícios exigidos</span>
          <h3>Nova marca oficial</h3>
          <form action={createTafRequirement} className="admin-inline-form">
            <label>
              Exercício
              <input name="title" placeholder="Corrida 12 minutos" required />
            </label>
            <label>
              Tipo
              <select name="exerciseType" defaultValue="CORRIDA">
                <option value="CORRIDA">Corrida</option>
                <option value="FLEXAO">Flexão</option>
                <option value="ABDOMINAL">Abdominal</option>
                <option value="FORCA_COMPLEMENTAR">Força complementar</option>
              </select>
            </label>
            <div className="form-grid-2">
              <label>
                Mín. masc.
                <input name="minMale" type="number" step="0.01" />
              </label>
              <label>
                Mín. fem.
                <input name="minFemale" type="number" step="0.01" />
              </label>
            </div>
            <label>
              Unidade
              <input name="unit" placeholder="metros, reps, segundos..." />
            </label>
            <label>
              Observação
              <textarea name="notes" rows={3} />
            </label>
            <button className="primary-action" type="submit">Cadastrar critério</button>
          </form>
        </article>

        <article className="panel admin-form">
          <span className="eyebrow">Checklist oficial</span>
          <h3>Novo documento, exame ou etapa</h3>
          <form action={createTafChecklistTemplate} className="admin-inline-form">
            <label>
              Título
              <input name="title" placeholder="Certidão negativa" required />
            </label>
            <label>
              Tipo
              <select name="kind" defaultValue="DOCUMENTO">
                <option value="DOCUMENTO">Documento</option>
                <option value="EXAME">Exame</option>
                <option value="ETAPA">Etapa</option>
              </select>
            </label>
            <label>
              Orientação
              <textarea name="guidance" rows={5} placeholder="Prazo, validade e instruções para o aluno" />
            </label>
            <button className="primary-action" type="submit">Cadastrar item</button>
          </form>
        </article>

        <article className="panel admin-form">
          <span className="eyebrow">Avisos oficiais</span>
          <h3>Novo aviso do módulo</h3>
          <form action={createTafOfficialNotice} className="admin-inline-form">
            <label>
              Título
              <input name="title" placeholder="Edital publicado" required />
            </label>
            <label>
              Conteúdo
              <textarea name="content" rows={7} placeholder="Texto de alerta, orientação ou regra oficial" required />
            </label>
            <button className="primary-action" type="submit">Publicar aviso</button>
          </form>
        </article>
      </section>

      <section className="grid-3">
        <article className="panel">
          <span className="eyebrow">Critérios ativos</span>
          <h3>Exercícios cadastrados</h3>
          <div className="review-list">
            {config.requirements.map((item) => (
              <div className="review-item" key={item.id}>
                <span>
                  <strong>{item.title}</strong>
                  <small>{exerciseLabels[item.exerciseType]} - {item.unit}</small>
                  <small>
                    Masc.: {item.minMale ?? "configurar"} | Fem.: {item.minFemale ?? "configurar"}
                  </small>
                  <span className={item.active ? "tag tag-success" : "tag tag-danger"}>
                    {item.active ? "Ativo" : "Inativo"}
                  </span>
                </span>
                <form action={toggleTafRequirement}>
                  <input name="id" type="hidden" value={item.id} />
                  <input name="active" type="hidden" value={item.active ? "false" : "true"} />
                  <button className="secondary-action compact-action" type="submit">
                    {item.active ? "Desativar" : "Ativar"}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Checklist</span>
          <h3>Itens configuráveis</h3>
          <div className="review-list">
            {config.templates.map((item) => (
              <div className="review-item" key={item.id}>
                <span>
                  <strong>{item.title}</strong>
                  <small>{kindLabels[item.kind]}</small>
                  <small>{item.guidance}</small>
                  <span className={item.active ? "tag tag-success" : "tag tag-danger"}>
                    {item.active ? "Ativo" : "Inativo"}
                  </span>
                </span>
                <form action={toggleTafChecklistTemplate}>
                  <input name="id" type="hidden" value={item.id} />
                  <input name="active" type="hidden" value={item.active ? "false" : "true"} />
                  <button className="secondary-action compact-action" type="submit">
                    {item.active ? "Desativar" : "Ativar"}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Avisos</span>
          <h3>Orientações publicadas</h3>
          <div className="review-list">
            {config.notices.map((item) => (
              <div className="review-item" key={item.id}>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.content}</small>
                  <span className={item.active ? "tag tag-success" : "tag tag-danger"}>
                    {item.active ? "Ativo" : "Inativo"}
                  </span>
                </span>
                <form action={toggleTafNotice}>
                  <input name="id" type="hidden" value={item.id} />
                  <input name="active" type="hidden" value={item.active ? "false" : "true"} />
                  <button className="secondary-action compact-action" type="submit">
                    {item.active ? "Desativar" : "Ativar"}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}
