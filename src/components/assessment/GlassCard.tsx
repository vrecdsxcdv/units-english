"use client";

import React from "react";
import clsx from "clsx";

export default function GlassCard({
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
        "relative rounded-3xl p-6 md:p-8 bg-white/20 backdrop-blur-2xl border border-white/30 ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      {title && (
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
          {title}
        </h2>
      )}
      <div className={title ? "mt-4" : undefined}>{children}</div>
      {footer && <div className="mt-6">{footer}</div>}
    </div>
  );
}
