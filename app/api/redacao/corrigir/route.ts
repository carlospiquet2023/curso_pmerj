import { getCurrentUser } from "@/lib/auth";
import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { essayRules } from "@/lib/essay";
import { prisma } from "@/lib/prisma";
import { errorResponse, getClientIp, rateLimiter, sanitizeText, validateCuid, LIMITS } from "@/lib/security";

export const runtime = "nodejs";


type Correction = {
  score: number;
  formalScore: number;
  textualScore: number;
  technicalScore: number;
  strengths: string[];
  weaknesses: string[];
  studyFocus: string[];
  actionPlan: string[];
  lineFeedback: string;
  finalMessage: string;
};

function countLines(content: string) {
  return content.replace(/\r/g, "").split("\n").filter((line) => line.trim().length > 0).length;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function fallbackCorrection(content: string, lineCount: number): Correction {
  const words = content.trim().split(/\s+/).filter(Boolean);
  const hasThesis = /defendo|entendo|portanto|assim|desse modo|nesse sentido/i.test(content);
  const hasConnectors = /al[eé]m disso|por outro lado|contudo|portanto|assim|dessa forma|em primeiro lugar/i.test(content);

  const sizePenalty = words.length < 180 ? 10 : 0;

  let formalScore = clamp(18 - (sizePenalty ? 4 : 0), 0, essayRules.formalPoints);
  let textualScore = clamp(hasConnectors ? 16 : 10, 0, essayRules.textualPoints);
  let technicalScore = clamp(hasThesis ? 16 : 10, 0, essayRules.technicalPoints);

  let score = clamp(formalScore + textualScore + technicalScore, 0, 100);

  if (lineCount < 10) {
    if (score > 35) {
      const factor = 35 / score;
      formalScore = Math.floor(formalScore * factor);
      textualScore = Math.floor(textualScore * factor);
      technicalScore = Math.floor(technicalScore * factor);
      score = 35;
    }
  } else if (lineCount >= 10 && lineCount < 20) {
    if (score > 50) {
      const factor = 50 / score;
      formalScore = Math.floor(formalScore * factor);
      textualScore = Math.floor(textualScore * factor);
      technicalScore = Math.floor(technicalScore * factor);
      score = 50;
    }
  } else if (lineCount >= 20 && lineCount < essayRules.minLines) {
    if (score > 70) {
      const factor = 70 / score;
      formalScore = Math.floor(formalScore * factor);
      textualScore = Math.floor(textualScore * factor);
      technicalScore = Math.floor(technicalScore * factor);
      score = 70;
    }
  }

  const isInvalidLineCount = lineCount < essayRules.minLines || lineCount > essayRules.maxLines;
  const lineFeedback = lineCount < essayRules.minLines
    ? `Sua redação está fora do número mínimo de linhas exigido. Textos abaixo de ${essayRules.minLines} linhas sofrem forte penalização e podem receber nota muito baixa, mesmo que apresentem alguma ideia inicial.`
    : `Texto com ${lineCount} linha(s). O oficial PMERJ exige de ${essayRules.minLines} a ${essayRules.maxLines}.`;

  return {
    score,
    formalScore,
    textualScore,
    technicalScore,
    strengths: [
      hasThesis ? "Ha tentativa de posicionamento argumentativo." : "O texto apresenta base para desenvolver uma tese.",
      "A estrutura pode ser evoluida com treino orientado."
    ],
    weaknesses: [
      isInvalidLineCount ? `A quantidade de linhas está fora do intervalo oficial de ${essayRules.minLines} a ${essayRules.maxLines}.` : "A linha oficial foi respeitada.",
      hasConnectors ? "Conectivos aparecem, mas podem ser usados com mais estratégia." : "Faltam conectivos claros para guiar a argumentação.",
      words.length < 180 ? "O desenvolvimento ainda está curto para sustentar nota alta." : "O desenvolvimento precisa de argumentos mais densos."
    ],
    studyFocus: [
      "Estrutura da dissertação: introdução com tese, desenvolvimento e conclusão.",
      hasConnectors ? "Uso estratégico de conectivos entre ideias." : "Conectivos argumentativos e progressão textual.",
      "Norma-padrão: pontuação, concordância, regência e clareza."
    ],
    actionPlan: [
      "Escreva uma tese direta no primeiro parágrafo.",
      "Use dois argumentos fortes, um por parágrafo.",
      "Feche com conclusão coerente e retomada da tese.",
      "Revise concordância, pontuação e repetições antes de enviar."
    ],
    lineFeedback,
    finalMessage: "Nota rigorosa gerada por corretor local porque a IA externa não estava configurada. Ajuste os pontos fracos e reescreva buscando nota máxima."
  };
}

function parseCorrection(raw: string, content: string, lineCount: number): Correction {
  try {
    const json = raw.replace(/```json|```/g, "").trim();
    const start = json.indexOf("{");
    const end = json.lastIndexOf("}");
    const parsed = JSON.parse(start >= 0 && end >= start ? json.slice(start, end + 1) : json) as Partial<Correction>;
    const formalScore = clamp(Number(parsed.formalScore ?? 0), 0, essayRules.formalPoints);
    const textualScore = clamp(Number(parsed.textualScore ?? 0), 0, essayRules.textualPoints);
    const technicalScore = clamp(Number(parsed.technicalScore ?? 0), 0, essayRules.technicalPoints);
    return {
      score: clamp(Number(parsed.score ?? formalScore + textualScore + technicalScore), 0, 100),
      formalScore,
      textualScore,
      technicalScore,
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.map(String) : [],
      weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses.map(String) : [],
      studyFocus: Array.isArray(parsed.studyFocus) ? parsed.studyFocus.map(String) : [],
      actionPlan: Array.isArray(parsed.actionPlan) ? parsed.actionPlan.map(String) : [],
      lineFeedback: String(parsed.lineFeedback ?? `Texto com ${lineCount} linha(s).`),
      finalMessage: String(parsed.finalMessage ?? "Continue revisando com foco na nota máxima.")
    };
  } catch {
    return fallbackCorrection(content, lineCount);
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  // Limite estrito para a API da Groq
  if (!rateLimiter(ip, "essay_correction", LIMITS.MAX_REQUESTS_PER_MINUTE_AI)) {
    return errorResponse("Limite de correções atingido. Tente novamente mais tarde.", 429);
  }

  let body: { promptId?: string; content?: string };

  try {
    body = (await request.json()) as { promptId?: string; content?: string };
  } catch {
    return errorResponse("JSON invalido.", 400);
  }

  if (!body.promptId || !body.content?.trim()) {
    return errorResponse("Tema e redação são obrigatórios.", 400);
  }

  if (!validateCuid(body.promptId)) {
    return errorResponse("ID de tema invalido.", 400);
  }

  const content = sanitizeText(body.content, LIMITS.MAX_TEXT_LENGTH);
  if(content.length < 50) {
      return errorResponse("Texto muito curto para correção.", 400);
  }

  const [user, prompt] = await Promise.all([
    prisma.user.findUnique({ where: { id: (await getCurrentUser())?.id || "" } }),
    prisma.essayPrompt.findUnique({ where: { id: body.promptId } })
  ]);

  if (!user || !prompt) {
    return errorResponse("Usuário ou tema não encontrado.", 404);
  }

  const lineCount = countLines(content);
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  let correction: Correction;
  let provider = "local";

  if (process.env.GROQ_API_KEY) {
    try {
      const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
      const completion = await groq.chat.completions.create({
        model,
        temperature: 0.2,
        top_p: 1,
        max_completion_tokens: 4096,
        messages: [
          {
            role: "system",
            content:
              "Você é um professor de Português especialista em redação para concurso público militar e também atua como banca rigorosa. Corrija sem pena, com nota realista, aponte exatamente onde o aluno deve estudar mais e mantenha orientação construtiva. Responda apenas JSON válido."
          },
          {
            role: "user",
            content: JSON.stringify({
              edital: {
                tipo: essayRules.type,
                linhas: `${essayRules.minLines} a ${essayRules.maxLines}`,
                criterios: {
                  formal: essayRules.formalPoints,
                  textual: essayRules.textualPoints,
                  tecnicoArgumentativo: essayRules.technicalPoints
                }
              },
              tema: prompt.theme,
              proposta: prompt.statement,
              texto: content,
              linhasInformadas: lineCount,
              formatoObrigatorio:
                "JSON com score, formalScore, textualScore, technicalScore, strengths[], weaknesses[], studyFocus[], actionPlan[], lineFeedback, finalMessage."
            })
          }
        ]
      });
      correction = parseCorrection(completion.choices[0]?.message?.content ?? "", content, lineCount);
      provider = "groq";
    } catch {
      correction = fallbackCorrection(content, lineCount);
    }
  } else {
    correction = fallbackCorrection(content, lineCount);
  }

  const saved = await prisma.essaySubmission.create({
    data: {
      userId: user.id,
      promptId: prompt.id,
      content,
      lineCount,
      score: correction.score,
      formalScore: correction.formalScore,
      textualScore: correction.textualScore,
      technicalScore: correction.technicalScore,
      strengths: JSON.stringify(correction.strengths),
      weaknesses: JSON.stringify(correction.weaknesses),
      actionPlan: JSON.stringify(correction.actionPlan),
      correctionJson: JSON.stringify(correction),
      aiProvider: provider,
      aiModel: provider === "groq" ? model : "local-fallback"
    }
  });

  return NextResponse.json({
    id: saved.id,
    provider,
    model: saved.aiModel,
    lineCount,
    officialLineRange: `${essayRules.minLines}-${essayRules.maxLines}`,
    ...correction
  });
}
