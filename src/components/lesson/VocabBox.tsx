"use client";
import React from "react";
import clsx from "clsx";

export type VocabItem = {
  word: string; // английское слово
  ipa?: string; // транскрипция в слэшах: /wɜːd/
  ru: string; // перевод
};

export default function VocabBox({
  items,
  title = "Выучите слова",
  className,
}: {
  items: VocabItem[];
  title?: string;
  className?: string;
}) {
  if (!items?.length) return null;
  return (
    <div
      className={clsx(
        "mt-8 rounded-xl border border-zinc-200 bg-white/60 p-4",
        className
      )}
    >
      <div className="mb-2 text-sm font-medium text-zinc-700">{title}</div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-baseline gap-2">
            <span className="font-medium text-zinc-900">{it.word}</span>
            {it.ipa && <span className="text-zinc-500 text-sm">{it.ipa}</span>}
            <span className="text-zinc-600">— {it.ru}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}







