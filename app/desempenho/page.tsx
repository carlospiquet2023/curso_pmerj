import { AlertTriangle, BarChart3, Clock, FileQuestion, RefreshCcw, Trophy } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { getPerformanceDashboard } from "@/lib/performance";

export const dynamic = "force-dynamic";

function minutesToHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}h${String(rest).padStart(2, "0")}` : `${hours}h`;
}

export default async function PerformancePage() {
  const dashboard = await getPerformanceDashboard();

  return (
    <div className="page-stack">
      <section className="section-header">
        <div>
          <span className="eyebrow">Dashboard de desempenho</span>
          <h1>Evolução, pontos fracos e previsão de crescimento</h1>
          <p>
            Visão avançada para acompanhar acertos, erros, tempo, simulados, revisões atrasadas e matérias
            que estão impedindo a nota de subir.
          </p>
        </div>
      </section>

      <section className="grid-4">
        <MetricCard label="Edital" value={`${dashboard.totals.editalPercent}%`} detail={`Projeção: ${dashboard.totals.projection}%`} icon={BarChart3} />
        <MetricCard label="Acerto geral" value={`${dashboard.totals.accuracy}%`} detail="Meta: 75%" icon={Trophy} tone="blue" />
        <MetricCard label="Tempo" value={minutesToHours(dashboard.totals.studyMinutes)} detail="Estudo acumulado" icon={Clock} tone="gold" />
        <MetricCard label="Revisões atrasadas" value={String(dashboard.totals.reviewsLate)} detail="Corrigir hoje" icon={RefreshCcw} tone="red" />
      </section>

      <section className="grid-2">
        <article className="panel">
          <span className="eyebrow">Evolução semanal</span>
          <h2>Edital estudado</h2>
          <div className="bar-chart">
            {dashboard.weeklyEvolution.map((item) => (
              <div className="bar-row" key={item.label}>
                <span>{item.label}</span>
                <div><strong style={{ width: `${item.value}%` }} /></div>
                <em>{item.value}%</em>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Evolução mensal</span>
          <h2>Taxa de acerto</h2>
          <div className="bar-chart">
            {dashboard.monthlyEvolution.map((item) => (
              <div className="bar-row" key={item.label}>
                <span>{item.label}</span>
                <div><strong style={{ width: `${item.value}%` }} /></div>
                <em>{item.value}%</em>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid-2">
        <article className="panel">
          <span className="eyebrow">Por matéria</span>
          <h2>Acertos, erros e questões</h2>
          <div className="review-list">
            {dashboard.subjectRows.map((item) => (
              <div className="review-item" key={item.name}>
                <FileQuestion size={18} />
                <span>
                  <strong>{item.name}: {item.accuracy}%</strong>
                  <small>{item.correct} acertos, {item.wrong} erros, {item.questionsDone} questões feitas</small>
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <span className="eyebrow">Alertas inteligentes</span>
          <h2>O que precisa de ação</h2>
          <div className="review-list">
            {dashboard.alerts.map((alert) => (
              <div className="review-item" key={alert}>
                <AlertTriangle size={18} />
                <span><strong>{alert}</strong></span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid-2">
        <article className="panel">
          <span className="eyebrow">Fortes</span>
          <h2>Manter ritmo</h2>
          <div className="tag-row">
            {dashboard.strong.map((item) => <span className="tag" key={item.name}>{item.name}</span>)}
          </div>
        </article>
        <article className="panel">
          <span className="eyebrow">Fracos</span>
          <h2>Reforçar no plano</h2>
          <div className="tag-row">
            {dashboard.weak.map((item) => <span className="tag tag-danger" key={item.name}>{item.name}</span>)}
          </div>
        </article>
      </section>
    </div>
  );
}
