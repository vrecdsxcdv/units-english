"use client";

import React from "react";

export default function ProgressPill({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const safeTotal = Math.max(1, Number(total || 0));
  const safeCurrent = Math.min(Math.max(0, Number(current || 0)), safeTotal);
  const percent = Math.round((safeCurrent / safeTotal) * 100);
  return (
    <div className="rounded-full bg-white/30 backdrop-blur px-4 py-2 border border-white/30 inline-flex items-center gap-3 text-sm text-gray-800">
      <span>
        Вопрос {safeCurrent} / {safeTotal}
      </span>
      <div className="h-1 w-40 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-1 rounded-full bg-indigo-600 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
