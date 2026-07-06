"use client";

import { useMemo, useState, useTransition } from "react";
import { BookOpenCheck, Brain, FileQuestion, Layers3, Loader2, RefreshCcw, Sparkles } from "lucide-react";

type ApostilaMaterial = {
  id: string;
  title: string;
  source: string;
  description: string | null;
  importedAt: string;
  chunks: number;
} | null;

type ApostilaChunk = {
  id: string;
  title: string;
  order: number;
  wordCount: number;
  subject: string;
  subjectSlug: string;
};

type SubjectStat = {
  subject: string;
  slug: string;
  chunks: number;
  words: number;
};

type TrainingMode = "explicar" | "resumo" | "questoes" | "flashcards";

type TrainingResult = {
  provider: string;
  model: string;
  mode: TrainingMode;
  title: string;
  subject: string;
  wordCount: number;
  output: string;
};

const modeOptions: Array<{ id: TrainingMode; label: string; icon: typeof Brain }> = [
  { id: "explicar", label: "Professor IA", icon: Brain },
  { id: "resumo", label: "Resumo", icon: BookOpenCheck },
  { id: "questoes", label: "Questões", icon: FileQuestion },
  { id: "flashcards", label: "Flashcards", icon: RefreshCcw }
];

export function ApostilaTrainer({
  material,
  chunks,
  subjectStats
}: {
  material: ApostilaMaterial;
  chunks: ApostilaChunk[];
  subjectStats: SubjectStat[];
}) {
  const [subject, setSubject] = useState("todos");
  const [selectedChunkId, setSelectedChunkId] = useState(chunks[0]?.id ?? "");
  const [mode, setMode] = useState<TrainingMode>("explicar");
  const [result, setResult] = useState<TrainingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filteredChunks = useMemo(
    () => chunks.filter((chunk) => subject === "todos" || chunk.subjectSlug === subject),
    [chunks, subject]
  );

  const selectedChunk = chunks.find((chunk) => chunk.id === selectedChunkId) ?? filteredChunks[0];

  function changeSubject(value: string) {
    const nextChunks = chunks.filter((chunk) => value === "todos" || chunk.subjectSlug === value);
    setSubject(value);
    setSelectedChunkId(nextChunks[0]?.id ?? "");
    setResult(null);
    setError(null);
  }

  function runTraining() {
    if (!selectedChunk) return;

    setError(null);
    startTransition(async () => {
      const response = await fetch("/api/apostila/treinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chunkId: selectedChunk.id, mode })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Não foi possível treinar com este trecho.");
        return;
      }

      setResult(data as TrainingResult);
    });
  }

  if (!material || chunks.length === 0) {
    return (
      <section className="panel apostila-empty">
        <Layers3 size={36} />
        <h2>Apostila pronta para publicar no R2</h2>
        <p>
          O arquivo já está no projeto, mas o manifesto JSON ainda não foi encontrado no Cloudflare R2. Quando a
          publicação for feita, esta área carrega apenas trechos pequenos para gerar resumos, questões e flashcards.
        </p>
      </section>
    );
  }

  return (
    <div className="apostila-trainer">
      <section className="apostila-kpis">
        <article>
          <Layers3 size={20} />
          <span>trechos leves</span>
          <strong>{material.chunks}</strong>
        </article>
        <article>
          <BookOpenCheck size={20} />
          <span>fonte</span>
          <strong>{material.source}</strong>
        </article>
        <article>
          <Sparkles size={20} />
          <span>uso de memória</span>
          <strong>R2 sob demanda</strong>
        </article>
      </section>

      <section className="apostila-layout">
        <aside className="panel apostila-sidebar">
          <span className="eyebrow">Matérias importadas</span>
          <h2>Base de treino</h2>
          <div className="apostila-subject-list">
            <button className={subject === "todos" ? "active" : ""} onClick={() => changeSubject("todos")} type="button">
              Todas as matérias
              <small>{chunks.length} trechos</small>
            </button>
            {subjectStats.map((item) => (
              <button
                className={subject === item.slug ? "active" : ""}
                key={item.slug}
                onClick={() => changeSubject(item.slug)}
                type="button"
              >
                {item.subject}
                <small>{item.chunks} trechos | {item.words} palavras</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="panel apostila-workbench">
          <div className="section-header">
            <div>
              <span className="eyebrow">Treino inteligente</span>
              <h2>{selectedChunk?.title ?? "Selecione um trecho"}</h2>
              <p>
                O sistema carrega apenas o trecho escolhido, mantendo a apostila como ferramenta de estudo sem pesar o
                servidor.
              </p>
            </div>
          </div>

          <div className="apostila-controls">
            <label>
              Trecho
              <select
                onChange={(event) => {
                  setSelectedChunkId(event.target.value);
                  setResult(null);
                  setError(null);
                }}
                value={selectedChunk?.id ?? ""}
              >
                {filteredChunks.map((chunk) => (
                  <option key={chunk.id} value={chunk.id}>
                    {chunk.title} ({chunk.wordCount} palavras)
                  </option>
                ))}
              </select>
            </label>
            <div className="apostila-mode-row">
              {modeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    className={mode === option.id ? "active" : ""}
                    key={option.id}
                    onClick={() => setMode(option.id)}
                    type="button"
                  >
                    <Icon size={17} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="primary-action" disabled={!selectedChunk || isPending} onClick={runTraining} type="button">
            {isPending ? <Loader2 size={18} /> : <Sparkles size={18} />}
            Gerar treino
          </button>

          {error ? <p className="form-feedback danger">{error}</p> : null}

          {result ? (
            <article className="apostila-output">
              <header>
                <span className="tag">{result.provider === "groq" ? "IA Groq" : "treino local"}</span>
                <span className="tag">{result.subject}</span>
                <span className="tag">{result.wordCount} palavras</span>
              </header>
              <pre>{result.output}</pre>
            </article>
          ) : null}
        </section>
      </section>
    </div>
  );
}
