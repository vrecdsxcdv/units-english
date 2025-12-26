"use client";

import React from "react";
import clsx from "clsx";

/**
 * Glass-style exam card.
 * - Без изменений публичного API
 * - Только визуал/классы Tailwind
 */
export default function ExamCard({
  title,
  children,
  footer,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        // glass / frosted style
        "relative overflow-hidden rounded-2xl",
        "bg-white/40 backdrop-blur-xl",
        "ring-1 ring-white/60 shadow-2xl",
        // subtle gradient sheen
        "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-white/60 before:to-indigo-50/30",
        // padding
        "p-5 sm:p-6 md:p-8",
        className
      )}
    >
      {title && (
        <h2
          className={clsx(
            "text-[20px] sm:text-[22px] md:text-2xl font-semibold tracking-tight",
            "text-zinc-900"
          )}
        >
          {title}
        </h2>
      )}

      <div className={clsx(title ? "mt-4 md:mt-5" : "")}>{children}</div>

      {footer && (
        <div className="mt-6 md:mt-7 border-t border-white/60 pt-5">
          {footer}
        </div>
      )}
    </div>
  );
}
