"use client";
import React from "react";

export type CollocationGroup = {
  title: string;
  subtitle?: string;
  items: string[];
  note?: string | string[];
  examples?: { en: string; ru?: string }[];
};

export default function CollocationsBoard({
  groups,
}: {
  groups: CollocationGroup[];
}) {
  const safeGroups = Array.isArray(groups) ? groups : [];

  if (!safeGroups.length) {
    return <div className="text-sm text-gray-500">Пока нет выражений</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {safeGroups.map((g, idx) => (
        <section
          key={idx}
          className="rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{g.title || "Без названия"}</h3>
          {g.subtitle && (
            <p className="mt-1 text-sm text-gray-500">{g.subtitle}</p>
          )}

          <ul className="mt-4 space-y-2">
            {(Array.isArray(g.items) ? g.items : []).map((it, i) => (
              <li
                key={i}
                className="rounded-lg bg-violet-50 text-violet-900 px-3 py-2 text-sm font-medium"
              >
                {it || "—"}
              </li>
            ))}
          </ul>

          {g.note &&
            (Array.isArray(g.note) ? (
              <div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 border border-amber-200">
                <ul className="list-disc pl-5 space-y-1">
                  {g.note.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 border border-amber-200">
                {g.note}
              </p>
            ))}

          {g.examples && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-600">Примеры</p>
              <ul className="mt-2 space-y-2">
                {(Array.isArray(g.examples) ? g.examples : []).map((ex, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-gray-200 px-3 py-2"
                  >
                    <span className="font-medium">{ex?.en || "—"}</span>
                    {ex?.ru && (
                      <span className="text-gray-500"> — {ex.ru}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
