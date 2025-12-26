// src/components/blocks/TopicCard.tsx
"use client";
import * as React from "react";

function clamp01(n: number | undefined) {
  if (typeof n !== "number") return 0;
  if (n < 0) return 0;
  if (n > 100) return 100;
  return Math.round(n);
}

type Props = {
  title: string;
  hint?: string;
  est?: string;
  progress?: number;
  locked?: boolean;
  onClick?: () => void;
};

export default function TopicCard({
  title,
  hint,
  est,
  progress = 0,
  locked = false,
  onClick,
}: Props) {
  const pct = clamp01(progress);
  return (
    <button
      type="button"
      onClick={locked ? undefined : onClick}
      aria-disabled={locked}
      className={[
        "w-full text-left rounded-3xl border border-white/25 bg-white/60 backdrop-blur-xl",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.08)]",
        "transition-colors duration-200",
        locked ? "opacity-70 cursor-not-allowed" : "hover:bg-white/70",
        "px-5 py-4",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="truncate text-base md:text-lg font-semibold text-gray-900">
              {title}
            </h4>
            {locked && (
              <span className="shrink-0 rounded-full border border-gray-300 bg-white/80 px-2 py-0.5 text-[10px] text-gray-600">
                Скоро
              </span>
            )}
          </div>
          {hint && (
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">{hint}</p>
          )}
          {est && <p className="mt-1 text-xs text-gray-500">{est}</p>}
        </div>

        {/* progress ring */}
        <div className="ml-2 shrink-0">
          <div className="relative h-10 w-10">
            <svg viewBox="0 0 36 36" className="h-10 w-10">
              <path
                d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32"
                fill="none"
                stroke="rgba(0,0,0,0.07)"
                strokeWidth="3"
              />
              <path
                d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32"
                fill="none"
                stroke="rgba(0,0,0,0.7)"
                strokeWidth="3"
                strokeDasharray={`${pct}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-800">
              {pct}%
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
/* BLOCKS_TOPICS_APPLIED */
