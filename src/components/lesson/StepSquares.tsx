"use client";
import * as React from "react";
import Link from "next/link";

type Step = { n: number; href: string };

type PropsNew = {
  steps?: Step[];
  active?: number;
  className?: string;
  total?: never;
  value?: never;
  onChange?: never;
  completed?: never;
};

type PropsOld = {
  total?: number;
  value?: number;
  onChange?: (n: number) => void;
  completed?: boolean[];
  className?: string;
  steps?: never;
  active?: never;
};

type Props = PropsNew | PropsOld;

export default function StepSquares(props: Props) {
  const { className = "" } = props;

  // New API (with steps and active)
  if ("steps" in props && props.steps) {
    const { steps, active = 1 } = props;

    if (!steps || steps.length === 0) {
      return null;
    }

    return (
      <div className={`flex gap-2 mb-4 flex-wrap ${className}`}>
        {steps.map((s) => {
          const isActive = s.n === active;
          const isDone = s.n < active;
          const cls = [
            "size-8 md:size-9 rounded-md border grid place-items-center text-[12px] md:text-[13px] transition",
            isActive
              ? "bg-indigo-600 text-white border-indigo-600"
              : isDone
              ? "bg-emerald-500 text-white border-emerald-500"
              : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50",
          ].join(" ");
          return (
            <Link
              key={s.n}
              href={s.href}
              className={cls}
              aria-label={`Шаг ${s.n}`}
            >
              {s.n}
            </Link>
          );
        })}
      </div>
    );
  }

  // Old API (with total, value, onChange)
  if ("total" in props && typeof props.total === "number") {
    const { total = 0, value = 0, onChange, completed = [] } = props;

    if (total === 0 || !onChange) {
      return null;
    }

    return (
      <div className={`flex gap-2 mb-4 flex-wrap ${className}`}>
        {Array.from({ length: total }, (_, i) => {
          const n = i;
          const isActive = n === value;
          const isDone = completed[i] === true;
          const cls = [
            "size-8 md:size-9 rounded-md border grid place-items-center text-[12px] md:text-[13px] transition cursor-pointer",
            isActive
              ? "bg-indigo-600 text-white border-indigo-600"
              : isDone
              ? "bg-emerald-500 text-white border-emerald-500"
              : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50",
          ].join(" ");
          return (
            <button
              key={n}
              onClick={() => onChange(n)}
              className={cls}
              aria-label={`Шаг ${n + 1}`}
              type="button"
            >
              {n + 1}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
}
