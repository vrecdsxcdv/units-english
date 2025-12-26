"use client";

import React from "react";

export default function ProgressBar({
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
    <div
      className="h-2 w-full rounded-full bg-gray-200"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeTotal}
      aria-valuenow={safeCurrent}
      aria-label="Прогресс теста"
    >
      <div
        className="h-2 rounded-full bg-blue-600 transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
