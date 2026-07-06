export type ApostilaChunkMeta = {
  id: string;
  title: string;
  subject: string;
  subjectSlug: string;
  order: number;
  wordCount: number;
  url: string;
};

export type ApostilaChunk = Omit<ApostilaChunkMeta, "url"> & {
  content: string;
};

export type ApostilaManifest = {
  title: string;
  source: string;
  version: string;
  storage: "cloudflare-r2";
  chunkCount: number;
  publicBaseUrl: string;
  subjects: Array<{
    subject: string;
    subjectSlug: string;
    chunks: number;
    words: number;
  }>;
  chunks: ApostilaChunkMeta[];
};

function apostilaBaseUrl() {
  const explicit = process.env.APOSTILA_R2_BASE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const publicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, "");
  if (!publicUrl) return null;

  return `${publicUrl}/${process.env.APOSTILA_R2_PREFIX || "apostila-pmerj"}`;
}

function isValidChunkId(id: string) {
  return /^[a-z0-9-]{3,120}$/.test(id);
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(`Falha ao carregar apostila do R2: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function getApostilaManifest() {
  const baseUrl = apostilaBaseUrl();
  if (!baseUrl) return null;

  try {
    return await fetchJson<ApostilaManifest>(`${baseUrl}/manifest.json`);
  } catch (error) {
    console.error("Falha ao carregar manifesto da apostila:", error);
    return null;
  }
}

export async function getApostilaChunk(chunkId: string) {
  if (!isValidChunkId(chunkId)) return null;

  const baseUrl = apostilaBaseUrl();
  if (!baseUrl) return null;

  try {
    return await fetchJson<ApostilaChunk>(`${baseUrl}/chunks/${chunkId}.json`);
  } catch (error) {
    console.error("Falha ao carregar trecho da apostila:", error);
    return null;
  }
}

export async function getApostilaTrainerData() {
  const manifest = await getApostilaManifest();

  if (!manifest) {
    return {
      material: null,
      chunks: [],
      subjectStats: []
    };
  }

  return {
    material: {
      id: "r2-apostila-pmerj",
      title: manifest.title,
      source: manifest.source,
      description: "Apostila armazenada em JSON no Cloudflare R2 e carregada sob demanda.",
      importedAt: new Date(manifest.version).toLocaleDateString("pt-BR"),
      chunks: manifest.chunkCount
    },
    chunks: manifest.chunks,
    subjectStats: manifest.subjects.map((subject) => ({
      subject: subject.subject,
      slug: subject.subjectSlug,
      chunks: subject.chunks,
      words: subject.words
    }))
  };
}
