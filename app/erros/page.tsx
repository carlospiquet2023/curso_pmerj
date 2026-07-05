import { ErrorNotebook } from "@/components/error-notebook";
import { getErrorNotebook } from "@/lib/errors";

export const dynamic = "force-dynamic";

export default async function ErrorsPage() {
  const notebook = await getErrorNotebook();

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Caderno de erros inteligente</span>
          <h1>Erros viram revisão, flashcard e reforço</h1>
          <p>
            Cada erro registra matéria, assunto, motivo provável, explicação simplificada, revisão
            obrigatória e flashcard automático.
          </p>
        </div>
      </section>
      <ErrorNotebook entries={notebook.entries} />
    </div>
  );
}
