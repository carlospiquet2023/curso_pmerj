import { PrismaClient } from "@prisma/client";
import { essayPromptSeeds } from "../lib/essay-prompts";
import { lessonContent } from "../lib/lesson-content";
import { seedQuestions } from "./questions-seed";

const prisma = new PrismaClient();

const subjects = [
  {
    slug: "lingua-portuguesa",
    name: "Língua Portuguesa",
    shortName: "Português",
    description: "Interpretação, gramática normativa, sintaxe, crase, regência e vocabulário.",
    order: 1,
    progress: 38,
    accuracy: 72,
    status: "ESTUDANDO" as const,
    topics: [
      "Leitura e interpretação de textos",
      "Ortografia, sinônimos e antônimos",
      "Classes de palavras",
      "Sintaxe e orações",
      "Concordância, regência, pronomes e crase"
    ]
  },
  {
    slug: "matematica-basica",
    name: "Matemática Básica",
    shortName: "Matemática",
    description: "Números, razão, proporção, porcentagem, equações, geometria, probabilidade e lógica.",
    order: 2,
    progress: 31,
    accuracy: 58,
    status: "ESTUDANDO" as const,
    topics: [
      "Números inteiros, racionais e reais",
      "Razão, proporção, regra de três e porcentagem",
      "Equação e sistema do 1º grau",
      "Medidas, tabelas, gráficos e geometria",
      "Probabilidade e raciocínio lógico"
    ]
  },
  {
    slug: "direitos-humanos",
    name: "Noções de Direitos Humanos",
    shortName: "Direitos Humanos",
    description: "DUDH, direitos fundamentais, tratados internacionais, migração, tortura e uso da força.",
    order: 3,
    progress: 26,
    accuracy: 64,
    status: "REVISANDO" as const,
    topics: [
      "Declaração Universal dos Direitos Humanos",
      "Constituição Federal: direitos e deveres individuais",
      "Tratados internacionais e controle de convencionalidade",
      "Lei de Migração e combate à tortura",
      "Uso de instrumentos de menor potencial ofensivo"
    ]
  },
  {
    slug: "direito-administrativo-pmerj",
    name: "Direito Administrativo e Legislação Aplicada à PMERJ",
    shortName: "Administrativo",
    description: "Princípios, organização, poderes, atos, processo, agentes e legislação aplicada à PMERJ.",
    order: 4,
    progress: 22,
    accuracy: 52,
    status: "ESTUDANDO" as const,
    topics: [
      "Princípios do Direito Administrativo",
      "Organização administrativa e órgãos públicos",
      "Poderes administrativos",
      "Atos e processo administrativo",
      "Legislação aplicada à PMERJ"
    ]
  },
  {
    slug: "direito-penal-processual-penal",
    name: "Direito Penal e Processual Penal",
    shortName: "Penal e Processo",
    description: "Parte geral, crimes em espécie, legislação especial, inquérito, ação penal e provas.",
    order: 5,
    progress: 18,
    accuracy: 49,
    status: "NAO_INICIADO" as const,
    topics: [
      "Aplicação da lei penal, crime e imputabilidade",
      "Penas, ação penal e parte especial",
      "Legislação penal especial",
      "Inquérito policial e ação penal",
      "Provas, prisão e medidas cautelares"
    ]
  }
];

const subtopicsByTitle: Record<string, string[]> = {
  "Leitura e interpretação de textos": [
    "Textos informativos, literários e jornalísticos",
    "Sentido próprio e figurado das palavras",
    "Figuras de linguagem"
  ],
  "Ortografia, sinônimos e antônimos": ["Emprego das letras", "Sinônimos", "Antônimos"],
  "Classes de palavras": [
    "Substantivo, adjetivo, numeral e pronome",
    "Verbo e advérbio",
    "Preposição e conjunção: emprego e sentido"
  ],
  "Sintaxe e orações": ["Reconhecimento dos termos da oração", "Reconhecimento das orações no período"],
  "Concordância, regência, pronomes e crase": [
    "Concordância verbal e nominal",
    "Regência verbal e nominal",
    "Colocação de pronomes e ocorrência de crase"
  ],
  "Números inteiros, racionais e reais": [
    "Operações e propriedades com inteiros",
    "Representação fracionária e decimal",
    "Números reais e suas operações"
  ],
  "Razão, proporção, regra de três e porcentagem": [
    "Mínimo múltiplo comum",
    "Razão e proporção",
    "Porcentagem, juros e regra de três simples"
  ],
  "Equação e sistema do 1º grau": [
    "Equação do primeiro grau",
    "Sistema de equações do primeiro grau",
    "Resolução de situações-problema"
  ],
  "Medidas, tabelas, gráficos e geometria": [
    "Medidas de tempo, comprimento, superfície e capacidade",
    "Relação entre grandezas: tabelas e gráficos",
    "Forma, perímetro, área, volume e teorema de Pitágoras"
  ],
  "Probabilidade e raciocínio lógico": ["Probabilidade", "Conjuntos, operações e diagramas", "Raciocínio lógico"],
  "Declaração Universal dos Direitos Humanos": [
    "Direitos e liberdades básicas",
    "Vedação à escravidão e tortura",
    "Presunção de inocência e remédio efetivo"
  ],
  "Constituição Federal: direitos e deveres individuais": [
    "Artigo 5º da Constituição Federal",
    "Inviolabilidade de domicílio",
    "Prisão ilegal e relaxamento pela autoridade judiciária"
  ],
  "Tratados internacionais e controle de convencionalidade": [
    "Tratados de direitos humanos no direito brasileiro",
    "Controle de convencionalidade",
    "Pacto Internacional de Direitos Civis e Políticos e Convenção Americana"
  ],
  "Lei de Migração e combate à tortura": [
    "Lei Federal 13.445/2017",
    "Sistema Nacional de Prevenção e Combate à Tortura",
    "Lei Federal 9.455/1997"
  ],
  "Uso de instrumentos de menor potencial ofensivo": [
    "Lei Federal 13.060/2014",
    "Uso proporcional da força",
    "Uso de arma de fogo e risco de morte ou lesão"
  ],
  "Princípios do Direito Administrativo": [
    "Legalidade, impessoalidade, moralidade, publicidade e eficiência",
    "Razoabilidade e proporcionalidade",
    "Supremacia do interesse público, continuidade e autotutela"
  ],
  "Organização administrativa e órgãos públicos": [
    "Desconcentração e descentralização",
    "Administração direta e indireta",
    "Órgãos públicos: conceito, criação, extinção e classificações"
  ],
  "Poderes administrativos": [
    "Poder normativo ou regulamentar",
    "Poder de polícia",
    "Poder hierárquico e poder disciplinar"
  ],
  "Atos e processo administrativo": [
    "Elementos do ato administrativo",
    "Discricionariedade, vinculação e atributos",
    "Processo administrativo e PAD"
  ],
  "Legislação aplicada à PMERJ": [
    "Constituição Federal: arts. 42, 144 e 125",
    "Constituição Estadual: arts. 91 a 93",
    "Decreto-Lei 667/1969 e Lei Estadual 443/1981"
  ],
  "Aplicação da lei penal, crime e imputabilidade": [
    "Aplicação da lei penal",
    "Crime e excludentes",
    "Imputabilidade penal"
  ],
  "Penas, ação penal e parte especial": [
    "Penas privativas de liberdade, restritivas de direitos e multa",
    "Suspensão condicional da pena e livramento condicional",
    "Crimes contra pessoa, patrimônio, dignidade sexual, paz pública, fé pública e administração pública"
  ],
  "Legislação penal especial": [
    "Abuso de autoridade, crimes hediondos e tortura",
    "Drogas, Maria da Penha, ECA e Estatuto do Idoso",
    "Juizados Especiais, desarmamento, consumidor e pessoa com deficiência"
  ],
  "Inquérito policial e ação penal": [
    "Disposições preliminares do CPP",
    "Inquérito policial",
    "Ação penal e sujeitos do processo"
  ],
  "Provas, prisão e medidas cautelares": [
    "Disposições gerais da prova",
    "Corpo de delito, cadeia de custódia, perícias, busca e apreensão",
    "Prisão, medidas cautelares e liberdade provisória"
  ]
};

async function resetDatabase() {
  await prisma.aiGeneration.deleteMany();
  await prisma.essaySubmission.deleteMany();
  await prisma.essayPrompt.deleteMany();
  await prisma.sourceDocument.deleteMany();
  await prisma.studentTopicProgress.deleteMany();
  await prisma.studentSubjectProgress.deleteMany();
  await prisma.generalProgress.deleteMany();
  await prisma.studySession.deleteMany();
  await prisma.studyTask.deleteMany();
  await prisma.studyPlan.deleteMany();
  await prisma.simulationResult.deleteMany();
  await prisma.simulationQuestion.deleteMany();
  await prisma.simulation.deleteMany();
  await prisma.reviewSchedule.deleteMany();
  await prisma.flashcard.deleteMany();
  await prisma.errorNotebookEntry.deleteMany();
  await prisma.studentAttempt.deleteMany();
  await prisma.answerKey.deleteMany();
  await prisma.questionOption.deleteMany();
  await prisma.question.deleteMany();
  await prisma.summary.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.edictalTopic.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.studentProfile.deleteMany();
  await prisma.user.deleteMany();
}

async function main() {
  await resetDatabase();

  const student = await prisma.user.create({
    data: {
      name: "Carlos Piquet",
      email: "carlos.piquet2016@gmail.com",
      role: "STUDENT",
      profile: {
        create: {
          dailyMinutes: 120,
          beginnerMode: true,
          currentLevel: 1,
          streakDays: 0,
          totalStudyMinutes: 0,
          targetScore: 80
        }
      },
      generalProgress: {
        create: {
          editalPercent: 0,
          overallAccuracy: 0,
          questionsDone: 0,
          simulationsDone: 0,
          studyMinutes: 0,
          pendingReviews: 0,
          persistentWeakness: "Ainda não identificado",
          strongPoints: "Ainda não identificado"
        }
      }
    }
  });

  await prisma.user.create({
    data: {
      name: "Administrador",
      email: "admin@pmerj.local",
      role: "ADMIN"
    }
  });

  const editalDoc = await prisma.sourceDocument.create({
    data: {
      title: "Edital CFSd PMERJ 2023 com retificacoes",
      kind: "edital",
      fileName: "edital_cfsd_completo_1_2_retificacoes.pdf",
      description: "Fonte oficial dos topicos programaticos usados para a base inicial."
    }
  });

  const provaDoc = await prisma.sourceDocument.create({
    data: {
      title: "Prova objetiva Soldado Policial Militar Classe C",
      kind: "prova",
      fileName: "soldado_policial_militar_classe_c.pdf"
    }
  });

  await prisma.sourceDocument.create({
    data: {
      title: "Gabarito definitivo da prova aplicada em 09/04/2024",
      kind: "gabarito",
      fileName: "gabarito_definitivo.pdf"
    }
  });

  await prisma.essayPrompt.createMany({ data: essayPromptSeeds });

  const subjectMap: Record<string, string> = {};
  const topicMap: Record<string, string> = {};

  for (const subjectSeed of subjects) {
    const subject = await prisma.subject.create({
      data: {
        slug: subjectSeed.slug,
        name: subjectSeed.name,
        shortName: subjectSeed.shortName,
        description: subjectSeed.description,
        order: subjectSeed.order,
        questionCount: 10,
        pointValue: 20,
        priorityWeight: 100
      }
    });

    subjectMap[subjectSeed.slug] = subject.id;

    await prisma.studentSubjectProgress.create({
      data: {
        userId: student.id,
        subjectId: subject.id,
        status: "NAO_INICIADO",
        progress: 0,
        mastery: 0,
        accuracy: 0,
        questionsDone: 0
      }
    });

    for (const [index, title] of subjectSeed.topics.entries()) {
      const topic = await prisma.edictalTopic.create({
        data: {
          subjectId: subject.id,
          title,
          code: `${subjectSeed.order}.${index + 1}`,
          priorityWeight: index < 2 ? 90 : 70,
          order: index + 1
        }
      });

      topicMap[title] = topic.id;

      await prisma.studentTopicProgress.create({
        data: {
          userId: student.id,
          topicId: topic.id,
          status: "NAO_INICIADO",
          mastery: 0,
          accuracy: 0,
          questionsDone: 0,
          nextReviewAt: null
        }
      });

      const lessonText = lessonContent[title]?.aula || `Explicacao introdutoria de ${title}, em linguagem simples para aluno iniciante.`;
      const summaryText = lessonContent[title]?.resumo || `Resumo-base para revisar ${title} com foco em prova objetiva FGV.`;

      const lesson = await prisma.lesson.create({
        data: {
          subjectId: subject.id,
          topicId: topic.id,
          title: `Aula: ${title}`,
          level: 1,
          durationMinutes: 30,
          content: lessonText,
          order: 1
        }
      });

      await prisma.summary.create({
        data: {
          subjectId: subject.id,
          topicId: topic.id,
          lessonId: lesson.id,
          title: `Resumo: ${title}`,
          content: summaryText,
          onePage: true
        }
      });

      for (const [childIndex, childTitle] of (subtopicsByTitle[title] ?? []).entries()) {
        const childTopic = await prisma.edictalTopic.create({
          data: {
            subjectId: subject.id,
            parentId: topic.id,
            title: childTitle,
            code: `${subjectSeed.order}.${index + 1}.${childIndex + 1}`,
            priorityWeight: childIndex === 0 ? 75 : 60,
            order: childIndex + 1
          }
        });

        await prisma.studentTopicProgress.create({
          data: {
            userId: student.id,
            topicId: childTopic.id,
            status: "NAO_INICIADO",
            mastery: 0,
            accuracy: 0,
            questionsDone: 0,
            nextReviewAt: null
          }
        });
      }
    }
  }

  // Seed questions
  await seedQuestions(prisma, student.id, subjectMap, topicMap, editalDoc.id);

  // Removidas as injeções de progresso falso, tentativas e simulados falsos.
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
