import { BookOpenCheck } from "lucide-react";
import { ApostilaTrainer } from "@/components/apostila-trainer";
import { getApostilaTrainerData } from "@/lib/apostila";

export const dynamic = "force-dynamic";

export default async function ApostilaPage() {
  const data = await getApostilaTrainerData();

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Apostila inteligente</span>
          <h1>Treinar pela apostila sem pesar o Railway</h1>
          <p>
            A apostila fica no Cloudflare R2 em arquivos JSON pequenos. O aluno escolhe um trecho, pede explicação,
            resumo, questões ou flashcards, e a IA trabalha somente naquele recorte.
          </p>
        </div>
      </section>

      <section className="panel">
        <div className="section-header">
          <div>
            <BookOpenCheck className="panel-icon" size={30} />
            <h2>Como esta ferramenta funciona</h2>
            <p>
              O sistema carrega só um manifesto leve e busca o conteúdo completo apenas do trecho selecionado no
              momento do treino. O banco do Railway não recebe o texto gigante da apostila.
            </p>
          </div>
        </div>
      </section>

      <ApostilaTrainer material={data.material} chunks={data.chunks} subjectStats={data.subjectStats} />
    </div>
  );
}
