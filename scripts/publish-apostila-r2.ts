import "dotenv/config";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";

type SectionSeed = {
  title: string;
  keyword: string;
  subjectSlug: string;
  subject: string;
};

type ApostilaChunk = {
  id: string;
  title: string;
  subject: string;
  subjectSlug: string;
  order: number;
  wordCount: number;
  content: string;
};

const sourceFile = path.join(process.cwd(), "lib", "apostila.txt");
const basePrefix = process.env.APOSTILA_R2_PREFIX || "apostila-pmerj";
const chunkSize = 4500;

const sections: SectionSeed[] = [
  { title: "Língua Portuguesa", keyword: "LÍNGUA PORTUGUESA", subjectSlug: "lingua-portuguesa", subject: "Português" },
  { title: "Matemática Básica", keyword: "MATEMÁTICA", subjectSlug: "matematica-basica", subject: "Matemática" },
  { title: "Direitos Humanos", keyword: "DIREITOS HUMANOS", subjectSlug: "direitos-humanos", subject: "Direitos Humanos" },
  {
    title: "Direito Administrativo",
    keyword: "Direito Administrativo",
    subjectSlug: "direito-administrativo-pmerj",
    subject: "Administrativo"
  },
  {
    title: "Legislação Aplicada à PMERJ",
    keyword: "5. LEGISLAÇÃO APLICADA À PMERJ",
    subjectSlug: "direito-administrativo-pmerj",
    subject: "Administrativo"
  },
  {
    title: "Direito Penal",
    keyword: "6. DIREITO PENAL",
    subjectSlug: "direito-penal-processual-penal",
    subject: "Penal e Processo"
  },
  {
    title: "Direito Processual Penal",
    keyword: "CAPÍTULO 7 – NOÇÕES DE DIREITO\nPROCESSUAL PENAL",
    subjectSlug: "direito-penal-processual-penal",
    subject: "Penal e Processo"
  }
];

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável ${name} não configurada.`);
  }
  return value;
}

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitIntoChunks(sectionText: string) {
  const paragraphs = sectionText
    .replace(/\r/g, "")
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    const next = current ? `${current}\n\n${paragraph}` : paragraph;
    if (next.length > chunkSize && current) {
      chunks.push(current);
      current = paragraph;
    } else {
      current = next;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function buildChunks(text: string) {
  const normalizedText = text.replace(/\r/g, "");
  const summaryEndIndex = normalizedText.indexOf("Seja bem-vindo(a) à sua preparação");
  const startIndex = summaryEndIndex > 0 ? summaryEndIndex : 1000;
  const chunks: ApostilaChunk[] = [];

  sections.forEach((current, index) => {
    const next = sections[index + 1];
    let contentStart = normalizedText.indexOf(current.keyword, startIndex);

    if (contentStart === -1) {
      contentStart = normalizedText.indexOf(current.keyword);
    }

    if (contentStart === -1) {
      console.warn(`[Aviso] Seção não encontrada: ${current.title}`);
      return;
    }

    let contentEnd = normalizedText.length;
    if (next) {
      const nextIndex = normalizedText.indexOf(next.keyword, contentStart + current.keyword.length);
      if (nextIndex !== -1) {
        contentEnd = nextIndex;
      }
    }

    splitIntoChunks(normalizedText.substring(contentStart, contentEnd)).forEach((content, chunkIndex) => {
      const title = `${current.title} - Trecho ${chunkIndex + 1}`;
      chunks.push({
        id: `${slugify(current.title)}-${chunkIndex + 1}`,
        title,
        subject: current.subject,
        subjectSlug: current.subjectSlug,
        order: index * 1000 + chunkIndex + 1,
        wordCount: wordCount(content),
        content
      });
    });
  });

  return chunks;
}

function buildManifest(chunks: ApostilaChunk[], publicBaseUrl: string) {
  return {
    title: "Apostila PMERJ - Base de Treinamento",
    source: "Apostila interna PMERJ",
    version: new Date().toISOString(),
    storage: "cloudflare-r2",
    chunkCount: chunks.length,
    publicBaseUrl,
    subjects: Object.values(
      chunks.reduce<Record<string, { subject: string; subjectSlug: string; chunks: number; words: number }>>(
        (acc, chunk) => {
          acc[chunk.subjectSlug] ??= {
            subject: chunk.subject,
            subjectSlug: chunk.subjectSlug,
            chunks: 0,
            words: 0
          };
          acc[chunk.subjectSlug].chunks += 1;
          acc[chunk.subjectSlug].words += chunk.wordCount;
          return acc;
        },
        {}
      )
    ),
    chunks: chunks.map(({ content, ...metadata }) => ({
      ...metadata,
      url: `${publicBaseUrl}/chunks/${metadata.id}.json`
    }))
  };
}

async function uploadJson(client: S3Client, bucket: string, key: string, value: unknown) {
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: JSON.stringify(value),
      ContentType: "application/json; charset=utf-8",
      CacheControl: "public, max-age=3600"
    })
  );
}

async function main() {
  if (!fs.existsSync(sourceFile)) {
    throw new Error("Arquivo lib/apostila.txt não encontrado.");
  }

  const accountId = requiredEnv("R2_ACCOUNT_ID");
  const accessKeyId = requiredEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requiredEnv("R2_SECRET_ACCESS_KEY");
  const bucket = requiredEnv("R2_BUCKET");
  const publicUrl = requiredEnv("R2_PUBLIC_URL").replace(/\/$/, "");
  const publicBaseUrl = `${publicUrl}/${basePrefix}`;

  const chunks = buildChunks(fs.readFileSync(sourceFile, "utf8"));
  const manifest = buildManifest(chunks, publicBaseUrl);
  const client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey }
  });

  await uploadJson(client, bucket, `${basePrefix}/manifest.json`, manifest);

  for (const chunk of chunks) {
    await uploadJson(client, bucket, `${basePrefix}/chunks/${chunk.id}.json`, chunk);
  }

  console.log(`Apostila publicada no R2: ${chunks.length} trechos`);
  console.log(`${publicBaseUrl}/manifest.json`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
