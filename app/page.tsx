import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Brain,
  ClipboardList,
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
          <span className="eyebrow">Plataforma oficial de estudos PMERJ</span>
          <h1>Sua aprovacao na PMERJ comeca aqui.</h1>
          <p>
            Estude com questoes no padrao FGV, simulados cronometrados, plano de
            estudos com inteligencia artificial e revisoes espacadas. Tudo
            organizado pelo edital — para voce dominar cada disciplina e
            conquistar sua vaga.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/cadastro">
              Comecar agora — e gratis <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/disciplinas">
              Explorar o edital completo
            </Link>
          </div>
        </div>
        <div className="hero-stats" aria-label="Numeros do concurso">
          <div className="hero-stat">
            <strong>50</strong>
            <span>questoes objetivas na prova</span>
          </div>
          <div className="hero-stat">
            <strong>5</strong>
            <span>disciplinas cobradas</span>
          </div>
          <div className="hero-stat">
            <strong>60%</strong>
            <span>nota minima para aprovacao</span>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-header">
        <div>
          <span className="eyebrow">Tudo que voce precisa em um so lugar</span>
          <h2>Ferramentas criadas para quem leva o concurso a serio</h2>
          <p>
            Cada recurso da plataforma foi desenhado com base no edital da
            PMERJ, nos padroes da banca FGV e em tecnicas comprovadas de
            aprendizagem acelerada.
          </p>
        </div>
      </section>

      <section className="grid-3">
        {[
          {
            icon: FileQuestion,
            title: "Banco de Questoes FGV",
            desc: "Milhares de questoes comentadas no estilo da banca, organizadas por disciplina, assunto e nivel de dificuldade.",
          },
          {
            icon: ClipboardList,
            title: "Simulados Cronometrados",
            desc: "Provas completas com 50 questoes, timer regressivo e diagnostico detalhado de pontos fortes e fracos.",
          },
          {
            icon: Brain,
            title: "Plano de Estudos com IA",
            desc: "Roteiro personalizado que se adapta ao seu desempenho, priorizando as materias onde voce mais precisa evoluir.",
          },
          {
            icon: NotebookPen,
            title: "Caderno de Erros",
            desc: "Registre cada erro com o motivo provavel e revise-os periodicamente para nunca errar a mesma questao.",
          },
          {
            icon: RefreshCcw,
            title: "Revisoes Espacadas",
            desc: "Flashcards inteligentes com ciclos de 24h, 7, 15 e 30 dias baseados na curva de esquecimento.",
          },
          {
            icon: FileText,
            title: "Redacao Comentada",
            desc: "Pratique redacoes com temas reais e receba correcao detalhada com nota por competencia.",
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
          <span className="eyebrow">Acesso rapido</span>
          <h2>Explore os modulos da plataforma</h2>
          <p>
            Navegue diretamente para qualquer area de estudo. Todas as
            funcionalidades integradas ao mapa completo do edital.
          </p>
        </div>
      </section>

      <section className="grid-4">
        {foundationModules.map((module) => {
          const Icon = module.icon;

          return (
            <Link className="module-card" href={module.href} key={module.title}>
              <Icon size={28} />
              <div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
              <span className="tag">Acessar</span>
            </Link>
          );
        })}
      </section>

      {/* ── SOCIAL PROOF / STATS ── */}
      <section className="panel">
        <div className="section-header">
          <div>
            <span className="eyebrow">Por que escolher esta plataforma</span>
            <h2>Numeros que fazem a diferenca na sua preparacao</h2>
          </div>
        </div>
        <div className="grid-4" style={{ marginTop: 24 }}>
          {[
            {
              icon: FileQuestion,
              value: "2.000+",
              label: "Questoes no padrao FGV",
            },
            {
              icon: BookOpen,
              value: "5",
              label: "Disciplinas mapeadas",
            },
            {
              icon: Target,
              value: "100%",
              label: "Cobertura do edital",
            },
            {
              icon: TrendingUp,
              value: "3x",
              label: "Mais retencao com revisao espacada",
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
            <span className="eyebrow">Metodo comprovado</span>
            <h2>5 etapas para dominar o edital</h2>
          </div>
        </div>
        <div className="timeline" style={{ marginTop: 18 }}>
          {[
            {
              step: "Diagnosticar",
              desc: "Faca um simulado inicial para identificar seus pontos fortes e fracos em cada disciplina.",
            },
            {
              step: "Estudar",
              desc: "Siga o plano de estudos personalizado com conteudo organizado por topico do edital.",
            },
            {
              step: "Treinar",
              desc: "Resolva questoes comentadas no padrao FGV para fixar o conhecimento na pratica.",
            },
            {
              step: "Revisar",
              desc: "Use flashcards e revisoes espacadas para garantir retencao a longo prazo.",
            },
            {
              step: "Simular",
              desc: "Faca simulados completos com tempo real e analise detalhada do seu desempenho.",
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
        <div className="grid-3" style={{ marginTop: 18 }}>
          {[
            {
              name: "Lingua Portuguesa",
              questions: 10,
              focus: "Interpretacao, sintaxe, crase, concordancia",
            },
            {
              name: "Matematica Basica",
              questions: 10,
              focus: "Porcentagem, equacoes, razao, geometria",
            },
            {
              name: "Direitos Humanos",
              questions: 10,
              focus: "DUDH, art. 5, tratados internacionais",
            },
            {
              name: "Direito Administrativo",
              questions: 10,
              focus: "Principios, poderes, atos, Estatuto PMERJ",
            },
            {
              name: "Direito Penal",
              questions: 10,
              focus: "Crimes, penas, inquerito, flagrante",
            },
            {
              name: "Redacao",
              questions: 1,
              focus: "Texto dissertativo-argumentativo",
            },
          ].map((subject) => (
            <div className="module-card" key={subject.name}>
              <Shield size={22} />
              <div>
                <h3>{subject.name}</h3>
                <p>
                  {subject.questions}{" "}
                  {subject.questions === 1 ? "prova" : "questoes"} —{" "}
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
          <h2>Pronto para comecar sua jornada?</h2>
          <p style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.7 }}>
            Crie sua conta gratuita e tenha acesso imediato ao mapa do edital,
            banco de questoes e plano de estudos personalizado. Sua aprovacao na
            PMERJ esta a um clique de distancia.
          </p>
          <div
            className="hero-actions"
            style={{ justifyContent: "center", marginTop: 24 }}
          >
            <Link className="primary-action" href="/cadastro">
              Criar minha conta gratis <ArrowRight size={18} />
            </Link>
            <Link className="secondary-action" href="/login">
              Ja tenho conta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
