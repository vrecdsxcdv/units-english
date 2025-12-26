"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export default function CollapsibleProgress({
  answered = new Set<number>(),
  current = 0,
  total = 100,
}: {
  answered?: Set<number> | number[];
  current: number; // 0-based index
  total: number;
}) {
  const [open, setOpen] = React.useState(false);
  const answeredSet = React.useMemo(() => {
    return answered instanceof Set
      ? answered
      : new Set<number>(Array.isArray(answered) ? answered : []);
  }, [answered]);

  function toggle() {
    setOpen((v) => !v);
  }

  const answeredCount = answeredSet.size;
  const pct = Math.min(
    100,
    Math.round((answeredCount / Math.max(1, total)) * 100)
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-2 flex justify-center">
          <button
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            }}
            aria-expanded={open}
            aria-controls="progress-panel"
            className={cn(
              "rounded-full border bg-white/80 backdrop-blur px-4 py-2 text-sm shadow-md",
              "border-gray-200 hover:bg-white transition"
            )}
          >
            {open ? "Скрыть прогресс" : "Показать прогресс"}
          </button>
        </div>
      </div>

      <div
        id="progress-panel"
        aria-hidden={!open}
        className="overflow-hidden bg-white/90 backdrop-blur border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]"
        style={{
          transition: "grid-template-rows 220ms ease",
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-gray-700">
                Вопрос <b>{current + 1}</b> из <b>{total}</b> · Отвечено:{" "}
                <b>{answeredCount}</b>
              </div>
              <div className="h-2 w-full max-w-md rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-indigo-600 transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-10 gap-2 sm:grid-cols-12 md:grid-cols-20 lg:grid-cols-25">
              {Array.from({ length: total }).map((_, i) => {
                const isCurrent = i === current;
                const isDone = answeredSet.has(i);
                return (
                  <div
                    key={i}
                    role="button"
                    aria-label={`Вопрос ${i + 1} ${
                      isDone ? "отвечен" : "не отвечен"
                    }${isCurrent ? ", текущий" : ""}`}
                    tabIndex={-1}
                    className={cn(
                      "flex h-8 items-center justify-center rounded-md border text-xs select-none",
                      "bg-white",
                      isDone && "bg-gray-900 text-white border-gray-900",
                      isCurrent && "ring-2 ring-indigo-600",
                      !isDone && !isCurrent && "border-gray-200 text-gray-700"
                    )}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Подсказка: переход по номерам отключён, панель отображает прогресс
              в тесте.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}








