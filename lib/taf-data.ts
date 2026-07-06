import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ClipboardCheck,
  FileCheck,
  HeartPulse,
  Ruler,
  Scale,
  ShieldAlert,
  Timer,
  UserCheck
} from "lucide-react";

export type TafMetric = {
  label: string;
  value: string;
  detail: string;
  tone?: string;
  icon: LucideIcon;
};

export type TafExercise = {
  name: string;
  current: string;
  target: string;
  nextAction: string;
  status: "Dentro do plano" | "Atenção" | "Iniciar";
};

export type ChecklistItem = {
  title: string;
  detail: string;
  status: "Pronto" | "Pendente" | "Acompanhar";
};

export const tafMetrics: TafMetric[] = [
  {
    label: "Corrida",
    value: "2,1 km",
    detail: "Último treino controlado",
    icon: Activity,
    tone: "blue"
  },
  {
    label: "Força",
    value: "68%",
    detail: "Meta semanal concluída",
    icon: UserCheck
  },
  {
    label: "Composição",
    value: "IMC 24,7",
    detail: "Faixa operacional acompanhada",
    icon: Scale,
    tone: "gold"
  },
  {
    label: "Pendências",
    value: "4",
    detail: "Documentos e exames a revisar",
    icon: ClipboardCheck,
    tone: "red"
  }
];

export const tafExercises: TafExercise[] = [
  {
    name: "Corrida",
    current: "2,1 km em ritmo confortável",
    target: "Evoluir volume e ritmo sem salto brusco",
    nextAction: "Treino intervalado leve e registro de tempo",
    status: "Dentro do plano"
  },
  {
    name: "Flexão",
    current: "Série base com execução controlada",
    target: "Aumentar repetições válidas",
    nextAction: "3 séries técnicas, com descanso cronometrado",
    status: "Atenção"
  },
  {
    name: "Abdominal",
    current: "Resistência em construção",
    target: "Manter cadência e amplitude",
    nextAction: "Treino curto após aquecimento",
    status: "Dentro do plano"
  },
  {
    name: "Barra ou força complementar",
    current: "A confirmar conforme edital vigente",
    target: "Preparar base de puxada e pegada",
    nextAction: "Fortalecimento preventivo e técnica",
    status: "Iniciar"
  }
];

export const healthChecks: ChecklistItem[] = [
  {
    title: "Avaliação médica",
    detail: "Validar liberação para corrida, força e progressão de carga.",
    status: "Pendente"
  },
  {
    title: "Controle de lesões",
    detail: "Registrar dores, limitações e dias de recuperação.",
    status: "Acompanhar"
  },
  {
    title: "Peso, altura e IMC",
    detail: "Acompanhar medidas sem substituir orientação profissional.",
    status: "Acompanhar"
  },
  {
    title: "Sono e recuperação",
    detail: "Usar descanso como parte do plano, não como detalhe.",
    status: "Pronto"
  }
];

export const postExamSteps: ChecklistItem[] = [
  {
    title: "Documentos pessoais",
    detail: "RG, CPF, comprovantes, certidões e escolaridade.",
    status: "Acompanhar"
  },
  {
    title: "CNH e requisitos",
    detail: "Conferir exigências assim que o edital 2026 for publicado.",
    status: "Pendente"
  },
  {
    title: "Exames de saúde",
    detail: "Organizar prazos e lista oficial antes da convocação.",
    status: "Pendente"
  },
  {
    title: "Exame psicológico",
    detail: "Separar agenda, histórico e documentos solicitados.",
    status: "Acompanhar"
  },
  {
    title: "Exame social e toxicológico",
    detail: "Manter checklist de certidões e prazos.",
    status: "Acompanhar"
  },
  {
    title: "Avaliação antropométrica",
    detail: "Acompanhar altura, peso e critérios do edital vigente.",
    status: "Pendente"
  }
];

export const tafTimeline = [
  {
    title: "Diagnóstico físico",
    detail: "Registrar ponto de partida, limitações e treino permitido."
  },
  {
    title: "Base aeróbica",
    detail: "Construir corrida com progressão conservadora e constância."
  },
  {
    title: "Força específica",
    detail: "Treinar movimentos prováveis com execução válida."
  },
  {
    title: "Simulado de TAF",
    detail: "Testar tempo, ordem dos exercícios e recuperação."
  },
  {
    title: "Checklist final",
    detail: "Conferir documentos, exames e orientações da convocação."
  }
];

export const tafSafetyNotes = [
  {
    icon: HeartPulse,
    title: "Saúde em primeiro lugar",
    detail: "Treino físico deve respeitar lesões, histórico médico e orientação profissional."
  },
  {
    icon: ShieldAlert,
    title: "Critério oficial manda",
    detail: "Quando o edital 2026 sair, marcas, exercícios e documentos devem ser atualizados pela área administrativa."
  },
  {
    icon: Timer,
    title: "Registro constante",
    detail: "Tempo, repetições, descanso e sensação de esforço precisam entrar no histórico."
  },
  {
    icon: Ruler,
    title: "Medidas acompanhadas",
    detail: "Peso, altura e IMC ajudam a enxergar risco, mas não substituem avaliação técnica."
  },
  {
    icon: FileCheck,
    title: "Prazos documentais",
    detail: "Checklist evita perder etapa por certidão, exame ou comprovante fora do prazo."
  }
];
