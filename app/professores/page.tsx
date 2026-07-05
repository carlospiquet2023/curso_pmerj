import { ProfessorPanel } from "@/components/professor-panel";
import { getAiProfessors } from "@/lib/ai-professors";

export const dynamic = "force-dynamic";

export default async function ProfessorsPage() {
  const professors = await getAiProfessors();

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Professor IA por matéria</span>
          <h1>Explicação clara para quem está voltando a estudar</h1>
          <p>
            Cada professor organiza o conteúdo em linguagem simples, exemplo, analogia, erros comuns,
            pegadinhas, cobrança da banca, resumo e treino.
          </p>
        </div>
      </section>
      <ProfessorPanel professors={professors} />
    </div>
  );
}
