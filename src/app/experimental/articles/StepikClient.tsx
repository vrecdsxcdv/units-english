"use client";

import * as React from "react";
import { MCQ, Input } from "./TaskWidgets";

type Node =
  | { t: "h2"; text: string; id: string }
  | { t: "p"; text: string }
  | { t: "ex"; en: string; ru?: string }
  | { t: "taskTitle"; text: string }
  | { t: "mcq"; id: string; q: string; options: string[]; a: string }
  | {
      t: "input";
      id: string;
      q: string;
      a: string;
      hint?: string;
      ph?: string;
    };

type Section = { id: string; title: string; nodes: Node[] };

function useLocalFlag(key: string) {
  const [flag, setFlag] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setFlag(window.localStorage.getItem(key) === "1");
  }, [key]);
  const mark = React.useCallback(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, "1");
    setFlag(true);
  }, [key]);
  return { flag, mark };
}

export default function LessonClient() {
  const sections = React.useMemo<Section[]>(
    () => [
      {
        id: "s1",
        title: "Артикли: a/an/the",
        nodes: [
          { t: "h2", id: "s1", text: "1. Артикли: a/an/the" },
          {
            t: "p",
            text: "Артикль показывает, говорим ли мы о предмете впервые/в общем (a/an) или о конкретном/известном (the). Нулевой артикль — когда он не нужен.",
          },
          {
            t: "p",
            text: "Выбор a/an — по звуку: an hour, a university. При первом упоминании с there is/are обычно ставится a/an.",
          },
          {
            t: "ex",
            en: "There is a phone in the room.",
            ru: "В комнате есть телефон.",
          },
          {
            t: "p",
            text: "Повторное упоминание → the: I saw a man. The man smiled.",
          },
        ],
      },
      {
        id: "s2",
        title: "Типовые задания",
        nodes: [
          { t: "h2", id: "s2", text: "2. Типовые задания" },
          { t: "taskTitle", text: "Выберите правильный вариант" },
          {
            t: "mcq",
            id: "a1",
            q: "___ apple a day keeps ___ doctor away.",
            options: ["a / a", "an / the", "the / the", "— / —"],
            a: "an / the",
          },
          {
            t: "mcq",
            id: "a2",
            q: "There is ___ phone in the room.",
            options: ["a", "an", "the", "—"],
            a: "a",
          },
          { t: "taskTitle", text: "Короткие ответы" },
          {
            t: "input",
            id: "a3",
            q: "Сделайте восклицание: «умная идея!» (what ...)",
            a: "What a clever idea!",
            hint: "What a + adj + noun",
          },
          {
            t: "input",
            id: "a4",
            q: "Преобразуйте: «Задание слишком трудное.» (too ... a ...)",
            a: "It is too difficult a task.",
          },
        ],
      },
      {
        id: "s3",
        title: "Частые ошибки",
        nodes: [
          { t: "h2", id: "s3", text: "3. Частые ошибки" },
          {
            t: "p",
            text: "Не путайте выбор a/an по звуку, а не по букве: an hour, a university.",
          },
          {
            t: "p",
            text: "С обобщающим значением чаще используйте the: The tiger is a dangerous animal.",
          },
          {
            t: "p",
            text: "Не ставьте артикль перед неисчисляемыми в общем значении: Information is important. (нулевой артикль)",
          },
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = React.useState<string>("s1");
  const ids = React.useMemo(() => sections.map((s) => s.id), [sections]);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  const [okMap, setOkMap] = React.useState<Record<string, boolean>>({});
  const report = React.useCallback((id: string, ok: boolean) => {
    setOkMap((prev) => (prev[id] === ok ? prev : { ...prev, [id]: ok }));
  }, []);

  const allCorrect = React.useMemo(() => {
    const taskIds = sections
      .flatMap((s) => s.nodes)
      .filter((n) => n.t === "mcq" || n.t === "input")
      .map((n: any) => n.id);
    return taskIds.length > 0 && taskIds.every((id) => okMap[id]);
  }, [sections, okMap]);

  const { flag: done, mark } = useLocalFlag("unitsExp:articles:lesson");
  React.useEffect(() => {
    if (allCorrect && !done) mark();
  }, [allCorrect, done, mark]);

  const scrollTo = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-6">
      <aside className="md:sticky md:top-6 self-start">
        <div className="mb-3 text-xs uppercase tracking-wide text-zinc-500">
          Начальный курс
        </div>
        <nav className="space-y-1">
          {sections.map((s, idx) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={[
                  "w-full text-left rounded-lg px-3 py-2 transition",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-zinc-50 text-zinc-700",
                ].join(" ")}
              >
                <span className="mr-2 tabular-nums">{idx + 1}.</span>
                {s.title}
              </button>
            );
          })}
        </nav>
        <div className="mt-4 text-xs text-zinc-500">
          {allCorrect || done
            ? "Готово: все задания решены (локально сохранено)."
            : "Решите все задания, чтобы завершить урок."}
        </div>
      </aside>

      <main>
        <header className="pb-3 mb-4 border-b border-zinc-200">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
            Тема урока: <span className="text-emerald-700">Артикли</span>
          </h1>
        </header>

        <article className="prose prose-zinc max-w-none">
          {sections.map((sec) => (
            <React.Fragment key={sec.id}>
              {sec.nodes.map((n) => {
                if (n.t === "h2")
                  return (
                    <h2
                      id={n.id}
                      key={n.id}
                      className="scroll-mt-24 text-zinc-900 font-extrabold"
                    >
                      {n.text}
                    </h2>
                  );
                if (n.t === "p") return <p key={n.text}>{n.text}</p>;
                if (n.t === "ex")
                  return (
                    <p key={n.en}>
                      <em>{n.en}</em>
                      {n.ru && <span className="text-zinc-500"> — {n.ru}</span>}
                    </p>
                  );
                if (n.t === "taskTitle")
                  return (
                    <p key={n.text} className="font-semibold mt-6">
                      {n.text}
                    </p>
                  );
                if (n.t === "mcq")
                  return (
                    <MCQ
                      key={n.id}
                      id={n.id}
                      q={n.q}
                      options={n.options}
                      a={n.a}
                      onChange={(ok) => report(n.id, ok)}
                    />
                  );
                if (n.t === "input")
                  return (
                    <Input
                      key={n.id}
                      id={n.id}
                      q={n.q}
                      a={n.a}
                      hint={n.hint}
                      ph={n.ph}
                      onChange={(ok) => report(n.id, ok)}
                    />
                  );
                return null;
              })}
            </React.Fragment>
          ))}
        </article>
      </main>
    </div>
  );
}
