import { PrismaClient } from "@prisma/client";
import { essayPromptSeeds } from "../lib/essay-prompts";
import { lessonContent } from "../lib/lesson-content";
import { seedQuestions } from "./questions-seed";

const prisma = new PrismaClient();

const subjects = [
  {
    slug: "lingua-portuguesa",
    name: "Lingua Portuguesa",
    shortName: "Portugues",
    description: "Interpretacao, gramatica normativa, sintaxe, crase, regencia e vocabulario.",
    order: 1,
    progress: 38,
    accuracy: 72,
    status: "ESTUDANDO" as const,
    topics: [
      "Leitura e interpretacao de textos",
      "Ortografia, sinonimos e antonimos",
      "Classes de palavras",
      "Sintaxe e oracoes",
      "Concordancia, regencia, pronomes e crase"
    ]
  },
  {
    slug: "matematica-basica",
    name: "Matematica Basica",
    shortName: "Matematica",
    description: "Numeros, razao, proporcao, porcentagem, equacoes, geometria, probabilidade e logica.",
    order: 2,
    progress: 31,
    accuracy: 58,
    status: "ESTUDANDO" as const,
    topics: [
      "Numeros inteiros, racionais e reais",
      "Razao, proporcao, regra de tres e porcentagem",
      "Equacao e sistema do 1o grau",
      "Medidas, tabelas, graficos e geometria",
      "Probabilidade e raciocinio logico"
    ]
  },
  {
    slug: "direitos-humanos",
    name: "Nocoes de Direitos Humanos",
    shortName: "Direitos Humanos",
    description: "DUDH, direitos fundamentais, tratados internacionais, migracao, tortura e uso da forca.",
    order: 3,
    progress: 26,
    accuracy: 64,
    status: "REVISANDO" as const,
    topics: [
      "Declaracao Universal dos Direitos Humanos",
      "Constituicao Federal: direitos e deveres individuais",
      "Tratados internacionais e controle de convencionalidade",
      "Lei de Migracao e combate a tortura",
      "Uso de instrumentos de menor potencial ofensivo"
    ]
  },
  {
    slug: "direito-administrativo-pmerj",
    name: "Direito Administrativo e Legislacao Aplicada a PMERJ",
    shortName: "Administrativo",
    description: "Principios, organizacao, poderes, atos, processo, agentes e legislacao aplicada a PMERJ.",
    order: 4,
    progress: 22,
    accuracy: 52,
    status: "ESTUDANDO" as const,
    topics: [
      "Principios do Direito Administrativo",
      "Organizacao administrativa e orgaos publicos",
      "Poderes administrativos",
      "Atos e processo administrativo",
      "Legislacao aplicada a PMERJ"
    ]
  },
  {
    slug: "direito-penal-processual-penal",
    name: "Direito Penal e Processual Penal",
    shortName: "Penal e Processo",
    description: "Parte geral, crimes em especie, legislacao especial, inquerito, acao penal e provas.",
    order: 5,
    progress: 18,
    accuracy: 49,
    status: "NAO_INICIADO" as const,
    topics: [
      "Aplicacao da lei penal, crime e imputabilidade",
      "Penas, acao penal e parte especial",
      "Legislacao penal especial",
      "Inquerito policial e acao penal",
      "Provas, prisao e medidas cautelares"
    ]
  }
];

const subtopicsByTitle: Record<string, string[]> = {
  "Leitura e interpretacao de textos": [
    "Textos informativos, literarios e jornalisticos",
    "Sentido proprio e figurado das palavras",
    "Figuras de linguagem"
  ],
  "Ortografia, sinonimos e antonimos": ["Emprego das letras", "Sinonimos", "Antonimos"],
  "Classes de palavras": [
    "Substantivo, adjetivo, numeral e pronome",
    "Verbo e adverbio",
    "Preposicao e conjuncao: emprego e sentido"
  ],
  "Sintaxe e oracoes": ["Reconhecimento dos termos da oracao", "Reconhecimento das oracoes no periodo"],
  "Concordancia, regencia, pronomes e crase": [
    "Concordancia verbal e nominal",
    "Regencia verbal e nominal",
    "Colocacao de pronomes e ocorrencia de crase"
  ],
  "Numeros inteiros, racionais e reais": [
    "Operacoes e propriedades com inteiros",
    "Representacao fracionaria e decimal",
    "Numeros reais e suas operacoes"
  ],
  "Razao, proporcao, regra de tres e porcentagem": [
    "Minimo multiplo comum",
    "Razao e proporcao",
    "Porcentagem, juros e regra de tres simples"
  ],
  "Equacao e sistema do 1o grau": [
    "Equacao do primeiro grau",
    "Sistema de equacoes do primeiro grau",
    "Resolucao de situacoes-problema"
  ],
  "Medidas, tabelas, graficos e geometria": [
    "Medidas de tempo, comprimento, superficie e capacidade",
    "Relacao entre grandezas: tabelas e graficos",
    "Forma, perimetro, area, volume e teorema de Pitagoras"
  ],
  "Probabilidade e raciocinio logico": ["Probabilidade", "Conjuntos, operacoes e diagramas", "Raciocinio logico"],
  "Declaracao Universal dos Direitos Humanos": [
    "Direitos e liberdades basicas",
    "Vedacao a escravidao e tortura",
    "Presuncao de inocencia e remedio efetivo"
  ],
  "Constituicao Federal: direitos e deveres individuais": [
    "Artigo 5o da Constituicao Federal",
    "Inviolabilidade de domicilio",
    "Prisao ilegal e relaxamento pela autoridade judiciaria"
  ],
  "Tratados internacionais e controle de convencionalidade": [
    "Tratados de direitos humanos no direito brasileiro",
    "Controle de convencionalidade",
    "Pacto Internacional de Direitos Civis e Politicos e Convencao Americana"
  ],
  "Lei de Migracao e combate a tortura": [
    "Lei Federal 13.445/2017",
    "Sistema Nacional de Prevencao e Combate a Tortura",
    "Lei Federal 9.455/1997"
  ],
  "Uso de instrumentos de menor potencial ofensivo": [
    "Lei Federal 13.060/2014",
    "Uso proporcional da forca",
    "Uso de arma de fogo e risco de morte ou lesao"
  ],
  "Principios do Direito Administrativo": [
    "Legalidade, impessoalidade, moralidade, publicidade e eficiencia",
    "Razoabilidade e proporcionalidade",
    "Supremacia do interesse publico, continuidade e autotutela"
  ],
  "Organizacao administrativa e orgaos publicos": [
    "Desconcentracao e descentralizacao",
    "Administracao direta e indireta",
    "Orgaos publicos: conceito, criacao, extincao e classificacoes"
  ],
  "Poderes administrativos": [
    "Poder normativo ou regulamentar",
    "Poder de policia",
    "Poder hierarquico e poder disciplinar"
  ],
  "Atos e processo administrativo": [
    "Elementos do ato administrativo",
    "Discricionariedade, vinculacao e atributos",
    "Processo administrativo e PAD"
  ],
  "Legislacao aplicada a PMERJ": [
    "Constituicao Federal: arts. 42, 144 e 125",
    "Constituicao Estadual: arts. 91 a 93",
    "Decreto-Lei 667/1969 e Lei Estadual 443/1981"
  ],
  "Aplicacao da lei penal, crime e imputabilidade": [
    "Aplicacao da lei penal",
    "Crime e excludentes",
    "Imputabilidade penal"
  ],
  "Penas, acao penal e parte especial": [
    "Penas privativas de liberdade, restritivas de direitos e multa",
    "Suspensao condicional da pena e livramento condicional",
    "Crimes contra pessoa, patrimonio, dignidade sexual, paz publica, fe publica e administracao publica"
  ],
  "Legislacao penal especial": [
    "Abuso de autoridade, crimes hediondos e tortura",
    "Drogas, Maria da Penha, ECA e Estatuto do Idoso",
    "Juizados Especiais, desarmamento, consumidor e pessoa com deficiencia"
  ],
  "Inquerito policial e acao penal": [
    "Disposicoes preliminares do CPP",
    "Inquerito policial",
    "Acao penal e sujeitos do processo"
  ],
  "Provas, prisao e medidas cautelares": [
    "Disposicoes gerais da prova",
    "Corpo de delito, cadeia de custodia, pericias, busca e apreensao",
    "Prisao, medidas cautelares e liberdade provisoria"
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
