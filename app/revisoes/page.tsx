import { Brain, CalendarClock, RefreshCcw, TrendingUp } from "lucide-react";
import { FlashcardReview } from "@/components/flashcard-review";
import { MetricCard } from "@/components/metric-card";
import { getReviewCenter } from "@/lib/reviews";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const center = await getReviewCenter();

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Revisões e flashcards</span>
          <h1>Base para memorizar antes do esquecimento</h1>
          <p>
            Esta tela prepara a estrutura para active recall, flashcards inteligentes e revisão espaçada.
            O histórico de acertos e erros entra nas próximas etapas de estudo.
          </p>
        </div>
      </section>

      <section className="grid-4">
        <MetricCard label="Flashcards" value={String(center.metrics.flashcards)} detail="Cartões ativos" icon={Brain} />
        <MetricCard label="Pendentes" value={String(center.metrics.pendingReviews)} detail="Revisões em aberto" icon={CalendarClock} tone="red" />
        <MetricCard label="Para hoje" value={String(center.metrics.dueToday)} detail="Vencidos ou do dia" icon={RefreshCcw} tone="gold" />
        <MetricCard label="Mais esquecidos" value={String(center.metrics.weakCards)} detail="Erros superam acertos" icon={TrendingUp} tone="blue" />
      </section>

      <section className="grid-4">
        {center.cycles.map((cycle, index) => (
          <article className="metric-card" key={cycle.label}>
            <div>
              <p>Ciclo {index + 1}</p>
              <strong>{cycle.label}</strong>
              <span>{cycle.description}</span>
            </div>
            <div className="metric-icon" aria-hidden="true">
              <RefreshCcw size={20} />
            </div>
          </article>
        ))}
      </section>

      <section className="split-panel">
        <article className="panel">
          <Brain className="panel-icon" size={30} />
          <h2>Flashcard automático</h2>
          <p>
            Cada erro importante poderá virar pergunta de frente e verso, ligada à matéria, assunto,
            dificuldade e próxima revisão.
          </p>
        </article>
        <article className="panel">
          <h2>Fila de revisão</h2>
          <ul className="clean-list" style={{ marginTop: 18 }}>
            <li>Conceitos errados recentemente aparecem primeiro.</li>
            <li>Tópicos com baixa confiança recebem intervalo menor.</li>
            <li>Acertos consistentes aumentam o intervalo.</li>
          </ul>
        </article>
      </section>

      <FlashcardReview cards={center.cards} />
    </div>
  );
}
