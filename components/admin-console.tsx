"use client";

import { useState, useTransition } from "react";
import { Loader2, Plus } from "lucide-react";

type Subject = {
  id: string;
  name: string;
  shortName: string;
  topics: { id: string; title: string; parentId: string | null }[];
};

export function AdminConsole({ subjects }: { subjects: Subject[] }) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function submitJson(path: string, data: Record<string, unknown>) {
    startTransition(async () => {
      const response = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      setMessage(response.ok ? "Registro salvo. Atualize a página para ver na lista." : "Falha ao salvar registro.");
    });
  }

  const firstSubject = subjects[0];
  const firstTopic = firstSubject?.topics[0];

  return (
    <section className="grid-3">
      <article className="panel admin-form">
        <span className="eyebrow">Cadastrar matéria</span>
        <h2>Nova disciplina</h2>
        <button
          className="primary-action"
          disabled={isPending}
          onClick={() =>
            submitJson("/api/admin/subjects", {
              name: "Redação",
              shortName: "Redação",
              description: "Produção textual dissertativo-argumentativa."
            })
          }
          type="button"
        >
          {isPending ? <Loader2 size={18} /> : <Plus size={18} />}
          Criar exemplo
        </button>
      </article>

      <article className="panel admin-form">
        <span className="eyebrow">Cadastrar tópico</span>
        <h2>Novo tópico</h2>
        <button
          className="primary-action"
          disabled={isPending || !firstSubject}
          onClick={() => submitJson("/api/admin/topics", { subjectId: firstSubject.id, title: "Tópico administrativo de exemplo" })}
          type="button"
        >
          {isPending ? <Loader2 size={18} /> : <Plus size={18} />}
          Criar exemplo
        </button>
      </article>

      <article className="panel admin-form">
        <span className="eyebrow">Importar questão</span>
        <h2>Questão objetiva</h2>
        <button
          className="primary-action"
          disabled={isPending || !firstSubject || !firstTopic}
          onClick={() =>
            submitJson("/api/admin/questions", {
              subjectId: firstSubject.id,
              topicId: firstTopic.id,
              statement: "Questão administrativa de exemplo para validar importação.",
              correctLabel: "A",
              options: {
                A: "Alternativa correta",
                B: "Alternativa incorreta",
                C: "Alternativa incorreta",
                D: "Alternativa incorreta",
                E: "Alternativa incorreta"
              }
            })
          }
          type="button"
        >
          {isPending ? <Loader2 size={18} /> : <Plus size={18} />}
          Importar exemplo
        </button>
      </article>
      {message ? <div className="created-simulation">{message}</div> : null}
    </section>
  );
}
