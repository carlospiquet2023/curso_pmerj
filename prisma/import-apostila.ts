import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando importação da apostila...');
  const filePath = path.join(__dirname, '../lib/apostila.txt');

  if (!fs.existsSync(filePath)) {
    console.error('Arquivo apostila.txt não encontrado em lib/');
    process.exit(1);
  }

  const text = fs.readFileSync(filePath, 'utf8');

  // Mapeamento dos blocos principais (expressão regular ou split simples)
  const sections = [
    { title: 'Língua Portuguesa', keyword: 'LÍNGUA PORTUGUESA', slug: 'lingua-portuguesa' },
    { title: 'Matemática Básica', keyword: 'MATEMÁTICA', slug: 'matematica-basica' },
    { title: 'Direitos Humanos', keyword: 'DIREITOS HUMANOS', slug: 'direitos-humanos' },
    { title: 'Direito Administrativo', keyword: 'Direito Administrativo', slug: 'direito-administrativo-pmerj' },
    { title: 'Legislação Aplicada à PMERJ', keyword: '5. LEGISLAÇÃO APLICADA À PMERJ', slug: 'direito-administrativo-pmerj' },
    { title: 'Direito Penal', keyword: '6. DIREITO PENAL', slug: 'direito-penal-processual-penal' },
    { title: 'Direito Processual Penal', keyword: 'CAPÍTULO 7 – NOÇÕES DE DIREITO PROCESSUAL PENAL', slug: 'direito-penal-processual-penal' },
  ];

  // Encontrar os índices onde cada seção começa (depois do sumário)
  // Ignoramos a primeira ocorrência (que geralmente está no sumário) usando um offset
  const summaryEndIndex = text.indexOf('Seja bem-vindo(a) à sua preparação'); // Início real do conteúdo
  let startIndex = summaryEndIndex > 0 ? summaryEndIndex : 1000;

  for (let i = 0; i < sections.length; i++) {
    const current = sections[i];
    const next = sections[i + 1];

    let contentStart = text.indexOf(current.keyword, startIndex);
    if (contentStart === -1) {
       // fallback search
       contentStart = text.indexOf(current.keyword);
    }

    let contentEnd = text.length;
    if (next) {
      let nextIndex = text.indexOf(next.keyword, contentStart + current.keyword.length);
      if (nextIndex !== -1) {
        contentEnd = nextIndex;
      }
    }

    if (contentStart !== -1) {
      const sectionText = text.substring(contentStart, contentEnd);
      console.log(`\nProcessando ${current.title} (${sectionText.length} caracteres)`);

      // Buscar a matéria no banco
      const subject = await prisma.subject.findUnique({
        where: { slug: current.slug }
      });

      if (!subject) {
        console.log(`[Aviso] Matéria não encontrada para o slug: ${current.slug}. Pulando.`);
        continue;
      }

      // Criar ou encontrar o Tópico Especial para a Apostila
      let topic = await prisma.edictalTopic.findFirst({
        where: { subjectId: subject.id, title: 'Apostila Completa' }
      });

      if (!topic) {
        // Encontrar a última ordem para anexar no final
        const lastTopic = await prisma.edictalTopic.findFirst({
          where: { subjectId: subject.id },
          orderBy: { order: 'desc' }
        });
        const order = lastTopic ? lastTopic.order + 1 : 1;

        topic = await prisma.edictalTopic.create({
          data: {
            subjectId: subject.id,
            title: 'Apostila Completa',
            description: `Conteúdo integral da apostila base para ${current.title}`,
            order: order,
            priorityWeight: 80
          }
        });
      }

      // Quebrar o texto em chunks menores para criar as aulas
      const chunkSize = 8000; // ~8k caracteres por aula para não pesar a interface
      const chunks = [];
      for (let j = 0; j < sectionText.length; j += chunkSize) {
        chunks.push(sectionText.substring(j, Math.min(j + chunkSize, sectionText.length)));
      }

      console.log(`Criando ${chunks.length} aulas (Lessons) para ${current.title}...`);

      for (let j = 0; j < chunks.length; j++) {
        const lessonTitle = `${current.title} - Parte ${j + 1}`;

        // Verificar se a aula já existe para não duplicar (idempotência)
        const existingLesson = await prisma.lesson.findFirst({
          where: { topicId: topic.id, title: lessonTitle }
        });

        if (!existingLesson) {
          await prisma.lesson.create({
            data: {
              subjectId: subject.id,
              topicId: topic.id,
              title: lessonTitle,
              content: chunks[j],
              order: j + 1,
              durationMinutes: 30, // Estimativa
              level: 2
            }
          });
        }
      }

      console.log(`${current.title} importada com sucesso!`);
    } else {
      console.log(`[Aviso] Seção ${current.title} não encontrada no texto.`);
    }
  }

  console.log('\nImportação concluída com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
