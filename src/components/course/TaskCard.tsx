"use client";
import React from "react";
import clsx from "clsx";

export default function TaskCard({
  title,
  children,
  onCheck,
  onReset,
  footer,
  className,
}: {
  title: string;
  children?: React.ReactNode;
  onCheck?: () => void;
  onReset?: () => void;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition",
        className
      )}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 min-h-[72px] text-zinc-700">
        {children ?? (
          <span className="text-zinc-400">Здесь будет задание…</span>
        )}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button
          className="rounded-full h-10 px-5 bg-indigo-600 text-white hover:bg-indigo-700"
          onClick={onCheck}
        >
          Проверить
        </button>
        <button
          className="rounded-full h-10 px-5 border border-zinc-300 hover:bg-zinc-50"
          onClick={onReset}
        >
          Сбросить
        </button>
        {footer && <div className="ml-auto">{footer}</div>}
      </div>
    </div>
  );
}








