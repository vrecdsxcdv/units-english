"use client";

import React from "react";

export default function QuestionIndex({
  current,
  total,
  answered,
}: {
  current: number;
  total: number;
  answered: Set<number>;
}) {
  const items = Array.from({ length: Math.max(0, total) }, (_, i) => i + 1);
  return (
    <aside className="hidden md:block">
      <div className="sticky top-6">
        <div className="grid grid-cols-5 gap-2">
          {items.map((n) => {
            const isCurrent = n === current;
            const isAnswered = answered.has(n);
            const base =
              "h-9 rounded-md text-sm border focus-visible:outline-none focus-visible:ring-2 ring-blue-600";
            const styles = isCurrent
              ? "ring-2 ring-blue-600 bg-white"
              : isAnswered
              ? "bg-gray-900/80 text-white border-gray-900/80"
              : "bg-white border-gray-200 text-gray-900";
            return (
              <button
                key={n}
                type="button"
                className={`${base} ${styles}`}
                disabled
                aria-current={isCurrent ? "true" : undefined}
                aria-label={`Вопрос ${n}${
                  isCurrent ? ", текущий" : isAnswered ? ", отвечен" : ""
                }`}
              >
                {n}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
