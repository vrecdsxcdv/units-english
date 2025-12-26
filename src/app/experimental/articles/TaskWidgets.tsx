"use client";

import * as React from "react";

export function MCQ({
  id,
  q,
  options,
  a,
  onChange,
}: {
  id: string;
  q: string;
  options: string[];
  a: string;
  onChange: (ok: boolean) => void;
}) {
  const [val, setVal] = React.useState("");
  const ok = val === a;
  const prev = React.useRef<string>("");
  React.useEffect(() => {
    if (val !== prev.current) {
      prev.current = val;
      onChange(!!val && ok);
    }
  }, [val, ok, onChange]);
  return (
    <div className="my-4">
      <p className="text-[15px]">
        <span className="font-semibold">Задание:</span> {q}
      </p>
      <div className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
        {options.map((o) => {
          const active = val === o;
          return (
            <button
              key={o}
              onClick={() => setVal(o)}
              className={[
                "underline underline-offset-4 transition-colors",
                active
                  ? ok
                    ? "text-emerald-500"
                    : "text-rose-500"
                  : "text-zinc-200 hover:text-white",
              ].join(" ")}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Input({
  id,
  q,
  a,
  hint,
  ph,
  onChange,
}: {
  id: string;
  q: string;
  a: string;
  hint?: string;
  ph?: string;
  onChange: (ok: boolean) => void;
}) {
  const [val, setVal] = React.useState("");
  const ok = val.trim().toLowerCase() === a.trim().toLowerCase();
  const prev = React.useRef<string>("");
  React.useEffect(() => {
    if (val !== prev.current) {
      prev.current = val;
      onChange(val.trim().length > 0 && ok);
    }
  }, [val, ok, onChange]);
  return (
    <div className="my-4">
      <p className="text-[15px]">
        <span className="font-semibold">Задание:</span> {q}
      </p>
      <input
        className="inline bg-transparent border border-zinc-700 rounded px-2 py-1 text-[15px] focus:outline-none focus:ring-2 focus:ring-emerald-500"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={ph ?? "введите ответ"}
      />
      <span
        className={
          "ml-3 text-sm " +
          (val ? (ok ? "text-emerald-500" : "text-rose-400") : "text-zinc-400")
        }
      >
        {val
          ? ok
            ? "Верно"
            : hint
            ? `Подсказка: ${hint}`
            : "Неверно"
          : "Ответ обязателен"}
      </span>
    </div>
  );
}
