import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Brain,
  ClipboardList,
  Dumbbell,
  FileQuestion,
  FileText,
  NotebookPen,
  RefreshCcw,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { foundationModules } from "@/lib/edital-data";

export default function HomePage() {
  return (
    <div className="page-stack">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Plataforma de estudos PMERJ 2026</span>
          <h1>Treino guiado até o nível de aprovação.</h1>
          <p>
            Diagnóstico, plano automático, questões no padrão FGV, simulados
            cronometrados, redação corrigida, revisão espaçada e preparação
            para as etapas físicas e documentais. A matriz usa a base anterior e
            está pronta para ser atualizada quando sair o edital 2026.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/cadastro">
              Começar agora <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/disciplinas">
              Explorar o edital completo
            </Link>
          </div>
        </div>
        <div className="hero-stats" aria-label="Números do concurso">
          <div className="hero-stat">
            <strong>50</strong>
            <span>questões objetivas na prova</span>
          </div>
          <div className="hero-stat">
            <strong>5</strong>
            <span>disciplinas objetivas</span>
          </div>
          <div className="hero-stat">
            <strong>60%</strong>
            <span>régua operacional de aprovação</span>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-header">
        <div>
          <span className="eyebrow">Tudo que você precisa em um só lugar</span>
          <h2>Ferramentas criadas para quem leva o concurso a sério</h2>
          <p>
            Cada recurso da plataforma foi desenhado com base no edital da
            PMERJ, nos padrões da banca FGV e em técnicas comprovadas de
            aprendizagem acelerada.
          </p>
        </div>
      </section>

      <section className="grid-3">
        {[
          {
            icon: FileQuestion,
            title: "Banco de Questões FGV",
            desc: "Milhares de questões comentadas no estilo da banca, organizadas por disciplina, assunto e nível de dificuldade.",
          },
          {
            icon: ClipboardList,
            title: "Simulados Cronometrados",
            desc: "Provas completas com 50 questões, cronômetro regressivo e diagnóstico detalhado de pontos fortes e fracos.",
          },
          {
            icon: Brain,
            title: "Plano de Estudos com IA",
            desc: "Roteiro personalizado que se adapta ao seu desempenho, priorizando as matérias em que você mais precisa evoluir.",
          },
          {
            icon: NotebookPen,
            title: "Caderno de Erros",
            desc: "Registre cada erro com o motivo provável e revise-os periodicamente para nunca errar a mesma questão.",
          },
          {
            icon: RefreshCcw,
            title: "Revisões Espaçadas",
            desc: "Flashcards inteligentes com ciclos de 24h, 7, 15 e 30 dias baseados na curva de esquecimento.",
          },
          {
            icon: FileText,
            title: "Redação Comentada",
            desc: "Pratique redações com temas reais e receba correção detalhada com nota por competência.",
          },
          {
            icon: Dumbbell,
            title: "TAF e Pós-Prova",
            desc: "Acompanhe corrida, força, IMC, exames, documentos e etapas posteriores para não estudar só a prova objetiva.",
          },
        ].map((feature) => (
          <div className="module-card" key={feature.title}>
            <feature.icon size={28} />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── MODULES DO EDITAL ── */}
      <section className="section-header">
        <div>
          <span className="eyebrow">Acesso rápido</span>
          <h2>Explore os módulos da plataforma</h2>
          <p>
            Navegue diretamente para qualquer área de estudo. Todas as
            funcionalidades integradas ao mapa completo do edital.
          </p>
        </div>
      </section>

      <section className="mind-map-container">
        <div className="mind-map-line"></div>
        {foundationModules.map((module) => {
          const Icon = module.icon;

          return (
            <Link className="module-card mind-map-node" href={module.href} key={module.title} style={{ width: '280px', flexShrink: 0, borderTop: '2px solid var(--green-2)' }}>
              <Icon size={32} />
              <div>
                <h3 style={{ fontSize: '1.2rem' }}>{module.title}</h3>
                <p>{module.description}</p>
              </div>
              <span className="tag" style={{ background: 'var(--accent-soft)', color: 'var(--green)', border: '1px solid var(--green-2)' }}>Acessar</span>
            </Link>
          );
        })}
      </section>

      {/* ── SOCIAL PROOF / STATS ── */}
      <section className="panel">
        <div className="section-header">
          <div>
            <span className="eyebrow">Por que escolher esta plataforma</span>
            <h2>Números que fazem a diferença na sua preparação</h2>
          </div>
        </div>
        <div className="grid-4" style={{ marginTop: 24 }}>
          {[
            {
              icon: FileQuestion,
              value: "2.000+",
              label: "Questões no padrão FGV",
            },
            {
              icon: BookOpen,
              value: "5",
              label: "Disciplinas mapeadas",
            },
            {
              icon: Target,
              value: "Vivo",
              label: "Mapa pronto para atualização",
            },
            {
              icon: TrendingUp,
              value: "3x",
              label: "Mais retenção com revisão espaçada",
            },
          ].map((stat) => (
            <div className="module-card" key={stat.label}>
              <stat.icon size={24} />
              <div>
                <h3 style={{ fontSize: "2rem", lineHeight: 1 }}>
                  {stat.value}
                </h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── METHODOLOGY TIMELINE ── */}
      <section className="panel">
        <div className="section-header">
          <div>
            <span className="eyebrow">Método comprovado</span>
            <h2>5 etapas para dominar o edital</h2>
          </div>
        </div>
        <div className="timeline" style={{ marginTop: 18 }}>
          {[
            {
              step: "Diagnosticar",
              desc: "Faça um simulado inicial para identificar seus pontos fortes e fracos em cada disciplina.",
            },
            {
              step: "Estudar",
              desc: "Siga o plano de estudos personalizado com conteúdo organizado por tópico do edital.",
            },
            {
              step: "Treinar",
              desc: "Resolva questões comentadas no padrão FGV para fixar o conhecimento na prática.",
            },
            {
              step: "Revisar",
              desc: "Use flashcards e revisões espaçadas para garantir retenção a longo prazo.",
            },
            {
              step: "Avançar",
              desc: "Faça simulados, redação, TAF e checklist documental para treinar a jornada completa.",
            },
          ].map((item, index) => (
            <article className="timeline-item" key={item.step}>
              <span className="timeline-index">{index + 1}</span>
              <div>
                <h3>{item.step}</h3>
                <p>
                  <CheckCircle2 size={16} /> {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── EXAM BREAKDOWN ── */}
      <section className="panel">
        <div className="section-header">
          <div>
            <span className="eyebrow">Estrutura da prova</span>
            <h2>Entenda o que cai na prova da PMERJ</h2>
          </div>
        </div>
        <div className="mind-map-container" style={{ marginTop: 18 }}>
          <div className="mind-map-line"></div>
          {[
            {
              name: "Língua Portuguesa",
              questions: 10,
              focus: "Interpretação, sintaxe, crase, concordância",
            },
            {
              name: "Matemática Básica",
              questions: 10,
              focus: "Porcentagem, equações, razão, geometria",
            },
            {
              name: "Direitos Humanos",
              questions: 10,
              focus: "DUDH, art. 5, tratados internacionais",
            },
            {
              name: "Direito Administrativo",
              questions: 10,
              focus: "Princípios, poderes, atos, Estatuto PMERJ",
            },
            {
              name: "Direito Penal",
              questions: 10,
              focus: "Crimes, penas, inquérito, flagrante",
            },
            {
              name: "Redação",
              questions: 1,
              focus: "Texto dissertativo-argumentativo",
            },
          ].map((subject) => (
            <div className="module-card mind-map-node" key={subject.name} style={{ width: '300px', flexShrink: 0 }}>
              <Shield size={28} />
              <div>
                <h3>{subject.name}</h3>
                <p>
                  {subject.questions}{" "}
                  {subject.questions === 1 ? "prova" : "questões"} —{" "}
                  {subject.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="panel" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Zap size={32} style={{ color: "var(--gold)", marginBottom: 12 }} />
          <h2>Pronto para começar sua jornada?</h2>
          <p style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.7 }}>
            Crie sua conta e tenha acesso imediato ao mapa do edital,
            banco de questões e plano de estudos personalizado. Sua aprovação na
            PMERJ está a um clique de distância.
          </p>
          <div
            className="hero-actions"
            style={{ justifyContent: "center", marginTop: 24 }}
          >
            <Link className="primary-action" href="/cadastro">
              Criar minha conta <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/login">
              Já tenho conta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
