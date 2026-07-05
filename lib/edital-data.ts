import React from "react";
import {
  BookOpen,
  Brain,
  BarChart3,
  ClipboardList,
  FileText,
  FileQuestion,
  GraduationCap,
  LayoutDashboard,
  NotebookPen,
  Presentation,
  RefreshCcw,
  Route,
  ShieldCheck,
  Trophy,
  Video
} from "lucide-react";

export type TopicStatus = "nao-iniciado" | "estudando" | "revisando" | "dominado";

export type Subject = {
  name: string;
  shortName: string;
  questions: number;
  points: number;
  priority: "Alta" | "Média" | "Base";
  progress: number;
  accuracy: number;
  status: TopicStatus;
  focus: string;
  topics: string[];
};

export const navItems = [
  { href: "/", label: "Início", icon: ({ size = 20 }: { size?: number | string }) => React.createElement("img", { src: "https://i.imgur.com/bUmZwYh.png", alt: "Início", style: { width: size, height: size, objectFit: 'contain' } }) },
  { href: "/aluno", label: "Aluno", icon: LayoutDashboard },
  { href: "/desempenho", label: "Desempenho", icon: BarChart3 },
  { href: "/disciplinas", label: "Edital", icon: BookOpen },
  { href: "/questoes", label: "Questões", icon: FileQuestion },
  { href: "/redacao", label: "Redação", icon: FileText },
  { href: "/erros", label: "Erros", icon: NotebookPen },
  { href: "/revisoes", label: "Revisões", icon: RefreshCcw },
  { href: "/professores", label: "Professores", icon: Presentation },
  { href: "/plano", label: "Plano", icon: Route },
  { href: "/simulados", label: "Simulados", icon: ClipboardList },
  { href: "/videos", label: "Vídeos", icon: Video }
];

export const subjects: Subject[] = [
  {
    name: "Língua Portuguesa",
    shortName: "Português",
    questions: 10,
    points: 20,
    priority: "Alta",
    progress: 38,
    accuracy: 72,
    status: "estudando",
    focus: "Interpretação, sintaxe, crase, concordância e vocabulário.",
    topics: [
      "Leitura e interpretação de textos",
      "Ortografia, sinônimos e antônimos",
      "Classes de palavras",
      "Sintaxe e orações",
      "Concordância, regência, pronomes e crase"
    ]
  },
  {
    name: "Matemática Básica",
    shortName: "Matemática",
    questions: 10,
    points: 20,
    priority: "Alta",
    progress: 31,
    accuracy: 58,
    status: "estudando",
    focus: "Situações-problema, porcentagem, equações, razão e geometria.",
    topics: [
      "Números inteiros, racionais e reais",
      "Razão, proporção, regra de três e porcentagem",
      "Equação e sistema do 1º grau",
      "Medidas, tabelas, gráficos e geometria",
      "Probabilidade e raciocínio lógico"
    ]
  },
  {
    name: "Noções de Direitos Humanos",
    shortName: "Direitos Humanos",
    questions: 10,
    points: 20,
    priority: "Alta",
    progress: 26,
    accuracy: 64,
    status: "revisando",
    focus: "DUDH, art. 5º, tratados, migração, tortura e uso da força.",
    topics: [
      "Declaração Universal dos Direitos Humanos",
      "Constituição Federal: direitos e deveres individuais",
      "Tratados internacionais e controle de convencionalidade",
      "Lei de Migração e combate à tortura",
      "Uso de instrumentos de menor potencial ofensivo"
    ]
  },
  {
    name: "Direito Administrativo e Legislação Aplicada à PMERJ",
    shortName: "Administrativo",
    questions: 10,
    points: 20,
    priority: "Alta",
    progress: 22,
    accuracy: 52,
    status: "estudando",
    focus: "Princípios, poderes, atos, agentes públicos e Estatuto PMERJ.",
    topics: [
      "Princípios do Direito Administrativo",
      "Organização administrativa e órgãos públicos",
      "Poderes administrativos",
      "Atos e processo administrativo",
      "Legislação aplicada à PMERJ"
    ]
  },
  {
    name: "Direito Penal e Processual Penal",
    shortName: "Penal e Processo",
    questions: 10,
    points: 20,
    priority: "Alta",
    progress: 18,
    accuracy: 49,
    status: "nao-iniciado",
    focus: "Parte geral, crimes em espécie, inquérito, ação penal e provas.",
    topics: [
      "Aplicação da lei penal, crime e imputabilidade",
      "Penas, ação penal e parte especial",
      "Legislação penal especial",
      "Inquérito policial e ação penal",
      "Provas, prisão e medidas cautelares"
    ]
  }
];

export const dashboardMetrics = [
  { label: "Edital estudado", value: "27%", detail: "Base inicial em andamento", tone: "green" },
  { label: "Taxa de acerto", value: "61%", detail: "Meta: superar 75%", tone: "blue" },
  { label: "Tempo estudado", value: "18h", detail: "Semana atual", tone: "gold" },
  { label: "Revisões pendentes", value: "7", detail: "Prioridade para hoje", tone: "red" }
];

export const studyMission = [
  "Revisar crase e objeto direto em Português",
  "Resolver 15 questões de porcentagem e proporção",
  "Fazer active recall de DUDH e art. 5º",
  "Registrar erros com motivo provável"
];

export const foundationModules = [
  {
    title: "Mapa do edital",
    description: "Disciplinas, tópicos, status, prioridade e domínio.",
    href: "/disciplinas",
    icon: GraduationCap
  },
  {
    title: "Banco de questões",
    description: "Questões por matéria, assunto, dificuldade e explicação.",
    href: "/questoes",
    icon: FileQuestion
  },
  {
    title: "Revisão inteligente",
    description: "Flashcards e ciclos de 24h, 7 dias, 15 dias e 30 dias.",
    href: "/revisoes",
    icon: Brain
  },
  {
    title: "Simulados FGV",
    description: "Treinos completos com diagnóstico de pontos fracos.",
    href: "/simulados",
    icon: Trophy
  }
];

export const questionBlueprint = [
  { subject: "Língua Portuguesa", count: 10, sample: "Interpretação, vocabulário, sintaxe, crase." },
  { subject: "Matemática Básica", count: 10, sample: "Média, lógica, porcentagem, geometria, probabilidade." },
  { subject: "Direitos Humanos", count: 10, sample: "DUDH, art. 5º, tratados, tortura, uso da força." },
  { subject: "Administrativo e PMERJ", count: 10, sample: "Princípios, poderes, atos, agentes e Estatuto PMERJ." },
  { subject: "Penal e Processo Penal", count: 10, sample: "Penas, excludentes, crimes, inquérito, flagrante e prova." }
];
