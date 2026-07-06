import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { getApostilaChunk } from "@/lib/apostila";
import { errorResponse, getClientIp, LIMITS, rateLimiter } from "@/lib/security";

export const runtime = "nodejs";

const modes = ["explicar", "resumo", "questoes", "flashcards"] as const;
type TrainingMode = (typeof modes)[number];

function fallbackTraining(mode: TrainingMode, title: string, content: string) {
  const excerpt = content
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 950);

  if (mode === "questoes") {
    return [
      `Treino de questões sobre ${title}`,
      "",
      "1. Qual é a ideia central do trecho estudado?",
      "2. Que conceito do edital esse trecho ajuda a revisar?",
      "3. Qual detalhe do texto poderia virar pegadinha de prova?",
      "",
      "Gabarito orientado: responda com base no trecho e revise os termos técnicos que aparecerem mais de uma vez.",
      "",
      `Trecho-base: ${excerpt}`
    ].join("\n");
  }

  if (mode === "flashcards") {
    return [
      `Flashcards sobre ${title}`,
      "",
      "Frente: Qual é o conceito principal deste trecho?",
      `Verso: Revise a ideia central apresentada em: ${excerpt}`,
      "",
      "Frente: O que eu preciso memorizar para a prova?",
      "Verso: Definições, exceções, prazos, classificações e palavras-chave do trecho.",
      "",
      "Frente: Como a banca pode cobrar isso?",
      "Verso: Em questão direta, interpretação de caso ou alternativa com exceção indevida."
    ].join("\n");
  }

  if (mode === "resumo") {
    return [
      `Resumo objetivo de ${title}`,
      "",
      excerpt,
      "",
      "Pontos para fixar:",
      "- Identifique o conceito principal.",
      "- Marque palavras-chave e exceções.",
      "- Transforme a leitura em perguntas de revisão."
    ].join("\n");
  }

  return [
    `Explicação como professor sobre ${title}`,
    "",
    "Leia este trecho em camadas: primeiro entenda o conceito, depois procure as palavras que a banca pode usar para confundir.",
    "",
    excerpt,
    "",
    "Como treinar: feche o texto e explique com suas palavras. Se travar, volte ao trecho e transforme a dúvida em flashcard."
  ].join("\n");
}

function promptFor(mode: TrainingMode, title: string, subject: string, content: string) {
  const taskByMode: Record<TrainingMode, string> = {
    explicar:
      "Explique como professor particular para aluno iniciante, com linguagem simples, exemplo de prova e alerta de pegadinha.",
    resumo:
      "Gere um resumo de alta retenção, com tópicos, palavras-chave, exceções e fechamento para revisão rápida.",
    questoes:
      "Crie 5 questões objetivas estilo concurso, cada uma com alternativas A-E, gabarito e explicação curta.",
    flashcards:
      "Crie 8 flashcards de active recall, com frente objetiva e verso direto, priorizando memorização para prova."
  };

  return JSON.stringify({
    papel: "Professor especialista em aprovação PMERJ",
    materia: subject,
    trecho: title,
    tarefa: taskByMode[mode],
    regra: "Use somente o conteúdo do trecho como base. Seja didático, direto e voltado para treino.",
    conteudo: content.slice(0, 7000)
  });
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!rateLimiter(ip, "apostila_training", LIMITS.MAX_REQUESTS_PER_MINUTE_AI)) {
    return errorResponse("Limite de treinos atingido. Tente novamente em instantes.", 429);
  }

  let body: { chunkId?: string; mode?: TrainingMode };

  try {
    body = (await request.json()) as { chunkId?: string; mode?: TrainingMode };
  } catch {
    return errorResponse("JSON inválido.", 400);
  }

  if (!body.chunkId || !body.mode || !modes.includes(body.mode)) {
    return errorResponse("Trecho ou modo de treino inválido.", 400);
  }

  const chunk = await getApostilaChunk(body.chunkId);

  if (!chunk) {
    return errorResponse("Trecho da apostila não encontrado no R2.", 404);
  }

  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  let provider = "local";
  let output = fallbackTraining(body.mode, chunk.title, chunk.content);

  if (process.env.GROQ_API_KEY) {
    try {
      const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
      const completion = await groq.chat.completions.create({
        model,
        temperature: 0.25,
        top_p: 1,
        max_completion_tokens: 4096,
        messages: [
          {
            role: "system",
            content:
              "Você transforma apostilas em treino prático para concursos. Não invente conteúdo fora do trecho. Responda em português do Brasil."
          },
          {
            role: "user",
            content: promptFor(body.mode, chunk.title, chunk.subject ?? "PMERJ", chunk.content)
          }
        ]
      });
      output = completion.choices[0]?.message?.content?.trim() || output;
      provider = "groq";
    } catch (error) {
      console.error("Falha no treino IA da apostila:", error);
    }
  }

  return NextResponse.json({
    provider,
    model: provider === "groq" ? model : "local-fallback",
    mode: body.mode,
    title: chunk.title,
    subject: chunk.subject ?? "PMERJ",
    wordCount: chunk.wordCount,
    output
  });
}
