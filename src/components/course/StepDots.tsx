"use client";
import React from "react";
import clsx from "clsx";

export default function StepDots({
  total,
  value,
  onChange,
}: {
  total: number;
  value: number;
  onChange?: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const active = i === value;
        return (
          <button
            key={i}
            onClick={() => onChange?.(i)}
            className={clsx(
              "h-8 w-8 rounded-full text-sm",
              active
                ? "bg-indigo-600 text-white"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
            )}
            aria-label={`Шаг ${i + 1}`}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}








