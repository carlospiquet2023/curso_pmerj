import Link from "next/link";
import { CheckCircle2, PlayCircle, TrendingUp, AlertTriangle } from "lucide-react";
import { getStudentDashboard } from "@/lib/student-dashboard";
import { ProgressBar } from "@/components/progress-bar";

export const dynamic = "force-dynamic";

export default async function StudentDashboardPage() {
  const dashboard = await getStudentDashboard();
  const nextMission = dashboard.missions[0]; // Pegar a primeira missão como foco principal

  return (
    <div className="container page-stack">
      {/* 1. Área de Foco: Continuar de Onde Parei */}
      <section className="resume-banner" style={{
        background: 'var(--surface-solid)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        boxShadow: 'var(--shadow)',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="eyebrow">Continue seus estudos</span>
            <h1 style={{ fontSize: '2.2rem', marginTop: '8px', marginBottom: '8px' }}>
              {nextMission ? nextMission.title : "Tudo concluído por hoje!"}
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
              {nextMission 
                ? `${nextMission.subject} • ${nextMission.duration} min planejados` 
                : "Você finalizou todas as metas do dia. Que tal fazer algumas questões extras?"}
            </p>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '8px' }}>
              Sequência de Estudos
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>
                {dashboard.student.streakDays}
              </span>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Dias 🔥</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Link href="/questoes" className="primary-action" style={{ fontSize: '1.1rem', padding: '0 32px', minHeight: '52px', borderRadius: '8px', gap: '8px' }}>
            <PlayCircle size={22} />
            {nextMission ? "Começar Agora" : "Treinar Questões"}
          </Link>
          <Link href="/plano" className="secondary-action" style={{ fontSize: '1.1rem', padding: '0 24px', minHeight: '52px', borderRadius: '8px' }}>
            Ver Plano Completo
          </Link>
        </div>
      </section>

      {/* 2. Resumo Simples do Dia */}
      <section className="grid-2">
        <article className="panel" style={{ borderRadius: 'var(--radius)' }}>
          <div className="section-header">
            <div>
              <span className="eyebrow">Trilha do Dia</span>
              <h2>Metas Restantes</h2>
            </div>
          </div>
          <ul className="mission-list" style={{ marginTop: 24, gap: '16px' }}>
            {dashboard.missions.slice(1).map((mission) => (
              <li key={mission.id} style={{ padding: '12px', background: 'var(--surface-soft)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ display: 'block', width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <strong style={{ fontSize: '1.05rem' }}>{mission.title}</strong>
                    <span className="tag" style={{ background: '#ffffff' }}>{mission.duration} min</span>
                  </div>
                  <small style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{mission.subject}</small>
                </span>
              </li>
            ))}
            {dashboard.missions.length <= 1 && (
              <p style={{ color: 'var(--muted)' }}>Não há outras metas obrigatórias para hoje.</p>
            )}
          </ul>
        </article>

        <article className="panel" style={{ borderRadius: 'var(--radius)' }}>
          <div className="section-header">
            <div>
              <span className="eyebrow">Diagnóstico Automático</span>
              <h2>Foco de Revisão</h2>
            </div>
          </div>
          
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#fff9f0', border: '1px solid #f2e2c4', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9e7314', fontWeight: 700, marginBottom: '8px' }}>
                <AlertTriangle size={18} />
                Ponto de Atenção
              </div>
              <p style={{ margin: 0, color: '#5c4615', lineHeight: 1.5 }}>
                {dashboard.persistentWeakness}
              </p>
            </div>

            <div style={{ padding: '16px', background: '#f0f9f4', border: '1px solid #c9ebd8', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1a6b41', fontWeight: 700, marginBottom: '8px' }}>
                <TrendingUp size={18} />
                Ponto Forte
              </div>
              <p style={{ margin: 0, color: '#134027', lineHeight: 1.5 }}>
                {dashboard.strongPoints}
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* 3. Métricas Básicas (Opcional) */}
      <section style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '16px' }}>Seu Desempenho Recente</h3>
        <div className="grid-4 compact-kpis">
          <div className="panel" style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--ink)' }}>{dashboard.counts.questionsDone}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Questões Feitas</div>
          </div>
          <div className="panel" style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--ink)' }}>{dashboard.counts.simulationsDone}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Simulados Realizados</div>
          </div>
          <div className="panel" style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--ink)' }}>{dashboard.counts.inProgress}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Matérias em Andamento</div>
          </div>
          <div className="panel" style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--red)' }}>{dashboard.counts.delayed}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Atrasadas</div>
          </div>
        </div>
      </section>
    </div>
  );
}
