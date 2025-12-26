"use client";
import React from "react";
import InlineInput from "./InlineInput";

export type FillItem = {
  left?: string;
  right?: string;
  answers: string[]; // допустимые ответы
  explanation?: string; // показываем при ошибке
  ariaLabel?: string;
  wide?: boolean; // Широкое поле для длинных ответов
};

export default function CheckableExercise({
  title,
  instruction,
  items,
  onChecked,
  wideInputs = false, // Все поля будут широкими
}: {
  title: string;
  instruction?: string;
  items: FillItem[];
  onChecked?: (s: { total: number; correct: number }) => void;
  wideInputs?: boolean;
}) {
  const [vals, setVals] = React.useState<string[]>(
    Array(items.length).fill("")
  );
  const [checked, setChecked] = React.useState(false);
  const [valids, setValids] = React.useState<boolean[]>(
    Array(items.length).fill(false)
  );

  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

  const doCheck = () => {
    const v = vals.map((x, i) => {
      const ok = items[i].answers.map(norm).includes(norm(x));
      return ok;
    });
    setValids(v);
    setChecked(true);
    onChecked?.({ total: v.length, correct: v.filter(Boolean).length });
  };

  const reset = () => {
    setVals(Array(items.length).fill(""));
    setValids(Array(items.length).fill(false));
    setChecked(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index < items.length - 1) {
        // Focus next input
        const nextInput = document.querySelector(
          `input[data-index="${index + 1}"]`
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        // Last input - trigger check
        doCheck();
      }
    }
  };

  return (
    <div className="rounded-xl border border-zinc-200 bg-white/70 p-4 md:p-5">
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      {instruction && <p className="mt-1 text-zinc-600">{instruction}</p>}

      <div className="mt-4 space-y-3 leading-8">
        {items.map((it, i) => (
          <div key={i} className="text-zinc-900">
            {it.left && <span>{it.left} </span>}
            <InlineInput
              ariaLabel={it.ariaLabel ?? `Поле ${i + 1}`}
              value={vals[i]}
              setValue={(v) => {
                const n = [...vals];
                n[i] = v;
                setVals(n);
              }}
              invalid={checked && !valids[i]}
              valid={checked && valids[i]}
              onKeyDown={(e) => handleKeyDown(e, i)}
              dataIndex={i}
              wide={wideInputs || it.wide}
            />
            {it.right && <span> {it.right}</span>}
            {checked && !valids[i] && (
              <div className="text-sm text-red-600 mt-1">
                {vals[i].trim() === "" ? (
                  <span>❌ Поле не заполнено. Правильный ответ: <b>{it.answers[0]}</b></span>
                ) : (
                  <span>
                    Правильно: <b>{it.answers[0]}</b>
                    {it.explanation && `. ${it.explanation}`}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={doCheck}
          className="h-10 px-5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Проверить
        </button>
        <button
          type="button"
          onClick={reset}
          className="h-10 px-5 rounded-full border border-zinc-300 hover:bg-zinc-50"
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}
