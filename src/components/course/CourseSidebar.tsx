"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function CourseSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { label: "Существительные", href: "/blocks/a1?t=nouns" },
    { label: "Прилагательные", href: "/blocks/a1?t=adjectives" },
  ];

  return (
    <aside className="w-full sm:w-64 shrink-0 sm:sticky sm:top-4 sm:max-h-[calc(100vh-2rem)] flex flex-col">
      <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur flex flex-col overflow-hidden h-full">
        <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2 px-4 pt-4 flex-shrink-0">
          Начальный курс
        </div>
        <nav className="space-y-1 px-4 pb-4 overflow-y-auto flex-1">
          {items.map((it) => {
            const active = pathname?.startsWith(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                className={clsx(
                  "block rounded-xl px-3 py-2 text-sm",
                  active
                    ? "bg-indigo-50 text-indigo-800 border border-indigo-200"
                    : "hover:bg-zinc-50 text-zinc-700 border border-transparent"
                )}
              >
                {it.label}
              </Link>
            );
          })}
          <button
            className="w-full mt-2 rounded-xl px-3 py-2 text-sm border border-zinc-200 hover:bg-zinc-50"
            onClick={() => router.push("/blocks/a1?t=nouns")}
          >
            Перейти к существительным
          </button>
          <button
            className="w-full mt-2 rounded-xl px-3 py-2 text-sm bg-emerald-600 text-white hover:bg-emerald-700"
            onClick={() => alert("Тема помечена как завершённая (заглушка)")}
          >
            Завершить тему
          </button>
        </nav>
      </div>
    </aside>
  );
}
