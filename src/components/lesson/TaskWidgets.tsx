"use client";
import * as React from "react";

/** Multiple choice; notifies parent only on actual change */
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
                    ? "text-emerald-600"
                    : "text-rose-500"
                  : "text-zinc-700 hover:text-zinc-900",
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

/** Short input; notifies parent only on actual change */
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
        className="inline bg-transparent border-b border-zinc-300 focus:border-b-emerald-500 focus:ring-0 px-1 py-0.5"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={ph ?? "введите ответ"}
      />
      <span
        className={
          "ml-3 text-sm " +
          (val ? (ok ? "text-emerald-600" : "text-rose-500") : "text-zinc-500")
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
