"use client";
import React from "react";

type Props = {
  passage: string; // текст с {{1}}, {{2}}...
  answers: string[]; // "a" | "an" | "the" | "" (нулевой артикль)
  hints: string[]; // краткие пояснения
  storageKey: string; // ключ локального хранилища
  accept?: Record<number, string[]>; // необязательные альтернативы по позициям (1-based)
};

const normalize = (v: string) =>
  v
    .trim()
    .toLowerCase()
    .replace(/^–|—|-$/, "")
    .replace(/\s+/g, "");

export default function ArticlePassageExercise({
  passage,
  answers,
  hints,
  storageKey,
  accept = {},
}: Props) {
  const slots = answers.length;
  const [values, setValues] = React.useState<string[]>(Array(slots).fill(""));
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed?.values) && parsed.values.length === slots) {
          setValues(parsed.values);
        }
      }
    } catch {}
  }, [storageKey, slots]);

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ values }));
  }, [storageKey, values]);

  const handleChange = (i: number, v: string) => {
    setValues((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  const reset = () => {
    setValues(Array(slots).fill(""));
    setChecked(false);
    localStorage.removeItem(storageKey);
  };

  const check = () => setChecked(true);

  // Рендерим абзацы: делим двойными переводами строки
  const paragraphs = passage.split(/\n\s*\n/);

  // Функция вставки инпутов по {{n}}
  const renderLine = (line: string) => {
    const nodes: React.ReactNode[] = [];
    const re = /\{\{(\d+)\}\}/g;
    let last = 0;
    let m: RegExpExecArray | null;
    let k = 0;

    while ((m = re.exec(line))) {
      const idx = m.index;
      const num = Number(m[1]);
      const i = num - 1;

      if (idx > last)
        nodes.push(<span key={`t-${k++}`}>{line.slice(last, idx)}</span>);

      const correct = normalize(answers[i]);
      const current = normalize(values[i]);
      const alternatives = (accept[num] || []).map((x) => normalize(x));
      const validCurrent = [correct, ...alternatives];

      const isRight = checked && validCurrent.includes(current);
      const isWrong = checked && !isRight;

      nodes.push(
        <span
          key={`i-${k++}`}
          className="inline-flex items-center mx-1 align-baseline"
        >
          <input
            value={values[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            className={[
              "h-8 w-14 sm:w-16 rounded-md border px-2 text-center outline-none transition",
              "bg-white/90",
              isWrong
                ? "border-rose-300 ring-2 ring-rose-200"
                : isRight
                ? "border-emerald-300 ring-2 ring-emerald-200"
                : "border-zinc-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200",
            ].join(" ")}
            placeholder="" // ПУСТОЙ плейсхолдер — как просили
            aria-label={`Blank ${num}`}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
          {checked && isWrong && (
            <span className="ml-2 text-xs text-rose-600">
              {hints[i] ?? "Проверьте правило."}
            </span>
          )}
          {checked && isRight && (
            <span className="ml-2 text-sm text-emerald-600">✓</span>
          )}
        </span>
      );

      last = idx + m[0].length;
    }

    if (last < line.length)
      nodes.push(<span key={`t-end-${k++}`}>{line.slice(last)}</span>);
    return nodes;
  };

  const score = checked
    ? values.reduce((acc, v, i) => {
        const corr = normalize(answers[i]);
        const alts = (accept[i + 1] || []).map((x) => normalize(x));
        return acc + ([corr, ...alts].includes(normalize(v)) ? 1 : 0);
      }, 0)
    : 0;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 sm:p-6 shadow-sm">
        <div className="space-y-4 leading-7 text-zinc-800">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="whitespace-pre-wrap">
              {renderLine(p)}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={check}
          className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700"
        >
          Проверить
        </button>
        <button
          onClick={reset}
          className="rounded-md border border-zinc-200 bg-white px-4 py-2 hover:bg-zinc-50"
        >
          Сбросить
        </button>

        {checked && (
          <span className="ml-2 text-sm text-zinc-600">
            Результат: <strong>{score}</strong> / {slots}
          </span>
        )}

        <div className="ml-auto flex items-center gap-2 text-xs text-zinc-500">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />{" "}
          верно
          <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />{" "}
          ошибка
        </div>
      </div>
    </div>
  );
}
