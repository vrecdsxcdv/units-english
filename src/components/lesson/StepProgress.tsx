// src/components/lesson/StepProgress.tsx
"use client";
import * as React from "react";

type Props = {
  total: number;
  current: number; // 1..total
};

export default function StepProgress({ total, current }: Props) {
  const items = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="w-full">
      <div className="flex items-center gap-1.5">
        {items.map((i) => {
          const active = i <= current;
          return (
            <div
              key={i}
              className={[
                "h-5 w-full rounded-md",
                active ? "bg-green-500 ring-2 ring-white" : "bg-gray-300/70",
              ].join(" ")}
              aria-label={`Шаг ${i} ${active ? "выполнен" : "не выполнен"}`}
            />
          );
        })}
      </div>
      <div className="mt-1 text-xs text-gray-600">
        Шаг {current} из {total}
      </div>
    </div>
  );
}

