"use client";
import React from "react";
import clsx from "clsx";

type TaskItem = {
  id: string;
  prompt: string; // «a cat → …»
  answer: string; // «cats»
  rule?: string; // «+s», «y→ies», «'s», «s'», «irregular», и т.п.
  hint?: string; // краткое объяснение (показывать, если ошибся)
};

type CheckableTaskProps = {
  title: string; // Заголовок «Задание N»
  instruction: string; // «Преобразуйте во множественное число»
  items: TaskItem[];
  compact?: boolean; // true — узкие инпуты
};

export default function CheckableTask({
  title,
  instruction,
  items,
  compact,
}: CheckableTaskProps) {
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [checked, setChecked] = React.useState(false);

  function onChange(id: string, v: string) {
    setAnswers((a) => ({ ...a, [id]: v }));
  }

  function normalize(s: string) {
    return s.trim().toLowerCase().replace(/\s+/g, " ");
  }

  const results = React.useMemo(() => {
    if (!checked) return {};
    const r: Record<string, boolean> = {};
    for (const it of items) {
      r[it.id] = normalize(answers[it.id] ?? "") === normalize(it.answer);
    }
    return r;
  }, [checked, answers, items]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-1 text-gray-600">{instruction}</div>

      <div className="mt-4 space-y-3">
        {items.map((it, idx) => {
          const val = answers[it.id] ?? "";
          const state = checked ? results[it.id] : null;
          return (
            <div key={it.id} className="flex items-start gap-3">
              <div className="min-w-[28px] pt-2 text-gray-500">{idx + 1}.</div>
              <div className="flex-1">
                <div className="text-gray-900">{it.prompt}</div>
                <input
                  value={val}
                  onChange={(e) => onChange(it.id, e.target.value)}
                  className={clsx(
                    "mt-2 rounded-lg border px-3 py-2 outline-none",
                    compact ? "w-48 md:w-56" : "w-64 md:w-72",
                    state === true && "border-green-500 ring-2 ring-green-400",
                    state === false && "border-red-500 ring-2 ring-red-400"
                  )}
                  placeholder="ответ…"
                />
                {checked && state === true && (
                  <div className="mt-1 text-sm text-green-700">Верно</div>
                )}
                {checked && state === false && (
                  <div className="mt-1 text-sm text-red-700">
                    {it.hint ??
                      (it.rule
                        ? `Правило: ${it.rule}`
                        : "Проверьте правописание.")}
                    <div className="text-gray-500">
                      Правильно: <b>{it.answer}</b>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <button
          onClick={() => setChecked(true)}
          className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 h-10"
        >
          Проверить
        </button>
      </div>
    </div>
  );
}
