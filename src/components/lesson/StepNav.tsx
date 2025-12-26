// src/components/lesson/StepNav.tsx
"use client";
import Link from "next/link";

type Props = {
  backHref: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isLast: boolean;
};

export default function StepNav({
  backHref,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  isLast,
}: Props) {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href={backHref}
        className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
      >
        ← К темам
      </Link>

      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={[
            "rounded-full border px-5 py-2.5 text-sm",
            hasPrev
              ? "border-gray-300 text-gray-700 hover:bg-gray-50"
              : "border-gray-200 text-gray-400 cursor-not-allowed",
          ].join(" ")}
        >
          Назад
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext && !isLast}
          className={[
            "rounded-full px-5 py-2.5 text-sm text-white",
            "bg-green-600 hover:bg-green-700",
          ].join(" ")}
        >
          {isLast ? "Завершить тему" : "Следующий шаг"}
        </button>
      </div>
    </div>
  );
}

