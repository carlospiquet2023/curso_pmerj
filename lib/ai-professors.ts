import { prisma } from "@/lib/prisma";

function strategyForSubject(shortName: string) {
  const strategies: Record<string, string> = {
    Português: "Comece por interpretação e sintaxe. Depois avance para crase, concordância e regência com questões curtas.",
    Matemática: "Resolva problemas pequenos todos os dias. Priorize porcentagem, regra de três, equações e geometria básica.",
    "Direitos Humanos": "Memorize literalidade essencial e treine situações práticas envolvendo atuação policial.",
    Administrativo: "Estude princípios e poderes primeiro. Depois atos, agentes e legislação PMERJ com quadros comparativos.",
    "Penal e Processo": "Separe Penal de Processo Penal. Fixe conceitos de crime, penas, flagrante, provas e ação penal."
  };

  return strategies[shortName] ?? "Estude em blocos curtos, revise e resolva questões ligadas ao edital.";
}

function commonMistakes(shortName: string) {
  const mistakes: Record<string, string[]> = {
    Português: ["Ler rápido demais", "Confundir função sintática", "Decorar crase sem olhar regência"],
    Matemática: ["Usar base errada em porcentagem", "Pular etapas do cálculo", "Não conferir unidade de medida"],
    "Direitos Humanos": ["Aceitar exceções proibidas", "Confundir tratado comum com tratado de direitos humanos"],
    Administrativo: ["Confundir impessoalidade com publicidade", "Trocar poder disciplinar por hierárquico"],
    "Penal e Processo": ["Confundir regime de pena", "Misturar flagrante próprio, impróprio e presumido"]
  };

  return mistakes[shortName] ?? ["Estudar sem revisar", "Fazer questões sem corrigir o motivo do erro"];
}

export async function getAiProfessors() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: {
      topics: {
        where: { parentId: null },
        orderBy: { order: "asc" },
        take: 5
      },
      questions: {
        orderBy: { examNumber: "asc" },
        take: 2,
        include: { topic: true }
      }
    }
  });

  return subjects.map((subject) => ({
    id: subject.id,
    slug: subject.slug,
    name: subject.name,
    shortName: subject.shortName,
    objective: `Levar o aluno iniciante a dominar ${subject.shortName} no padrão da prova PMERJ/FGV.`,
    howItFalls: subject.description,
    mainTopics: subject.topics.map((topic) => topic.title),
    strategy: strategyForSubject(subject.shortName),
    commonMistakes: commonMistakes(subject.shortName),
    evolutionPlan: [
      "Nível 1: entender o vocabulário básico",
      "Nível 2: estudar exemplos simples",
      "Nível 3: resolver questões fáceis",
      "Nível 4: corrigir erros e criar flashcards",
      "Nível 5: simular cobrança FGV"
    ],
    classes: subject.topics.map((topic, index) => ({
      title: `Aula ${index + 1}: ${topic.title}`,
      description: `Explicação simples, exemplo, pegadinha e revisão rápida de ${topic.title}.`
    })),
    commentedQuestions: subject.questions.map((question) => ({
      title: question.examNumber ? `Questão ${question.examNumber}` : "Questão de treino",
      topic: question.topic.title,
      review: question.reviewConcept
    }))
  }));
}

export function buildTeacherExplanation(subject: string, topic: string) {
  return {
    simple: `Vamos estudar ${topic} em ${subject} como se fosse a primeira vez: primeiro o significado, depois um exemplo e só então a questão.`,
    practicalExample: `Exemplo prático: pegue uma questão curta sobre ${topic}, identifique o comando e elimine alternativas absurdas antes de decidir.`,
    analogy: "Pense como uma abordagem em etapas: observar, identificar, agir e conferir. No estudo, você lê, classifica, resolve e revisa.",
    commonErrors: ["Responder pela memória sem ler o comando", "Não anotar por que errou", "Estudar teoria demais sem questões"],
    traps: ["Alternativa com palavra absoluta", "Conceito parecido com outro tópico", "Exceção inventada pela banca"],
    howBankCharges: "A FGV costuma cobrar leitura cuidadosa, situações práticas e diferença fina entre conceitos próximos.",
    memorySummary: `Memorize ${topic} por pergunta curta: o que é, quando aparece, qual exceção falsa a banca tenta vender.`,
    trainingQuestions: ["Explique o conceito em uma frase.", "Crie um exemplo do dia a dia.", "Resolva uma questão e justifique as erradas."],
    quickReview: "Leia seu resumo, responda sem olhar, confira, marque erro e programe revisão."
  };
}
