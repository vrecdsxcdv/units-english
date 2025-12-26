"use client";

import * as React from "react";
import { MCQ, Input } from "./TaskWidgets";
import { useTaskMap, useLessonDone, useLastSection } from "./useLocalProgress";

export type Node =
  | { t: "h2"; id: string; text: string }
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

export type Section = { id: string; title: string; nodes: Node[] };

export default function LessonShell({
  courseLabel = "Начальный курс",
  lessonTitle,
  metaLine = "Шаги и баллы",
  sections,
  headerAddon,
}: {
  courseLabel?: string;
  lessonTitle: string;
  metaLine?: string;
  sections: Section[];
  headerAddon?: React.ReactNode;
}) {
  const lessonId = React.useMemo(
    () => (lessonTitle || "lesson").toLowerCase().replace(/\s+/g, "-"),
    [lessonTitle]
  );

  const [activeId, setActiveId] = React.useState<string>(sections[0]?.id ?? "");
  const ids = React.useMemo(() => sections.map((s) => s.id), [sections]);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target?.id) setActiveId(top.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  const { ready: tasksReady, map: okMap, setTask } = useTaskMap(lessonId);
  const report = React.useCallback(
    (id: string, ok: boolean) => {
      setTask(id, ok);
    },
    [setTask]
  );
  const allCorrect = React.useMemo(() => {
    const taskIds = sections
      .flatMap((s) => s.nodes)
      .filter((n) => n.t === "mcq" || n.t === "input")
      .map((n: any) => n.id);
    return taskIds.length > 0 && taskIds.every((id) => okMap[id]);
  }, [sections, okMap]);
  const { ready: doneReady, done, markDone } = useLessonDone(lessonId);
  React.useEffect(() => {
    if (tasksReady && doneReady && allCorrect && !done) markDone();
  }, [tasksReady, doneReady, allCorrect, done, markDone]);

  // last viewed section persistence & resume
  const {
    ready: lastReady,
    last,
    set: setLast,
    clear: clearLast,
  } = useLastSection(lessonId);
  React.useEffect(() => {
    if (!sections.length) return;
    if (!activeId) return;
    setLast(activeId);
  }, [activeId, setLast, sections.length]);

  const scrollTo = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  React.useEffect(() => {
    if (!lastReady || !sections.length) return;
    const firstId = sections[0].id;
    if (last && last !== firstId) {
      const t = setTimeout(() => scrollTo(last), 50);
      return () => clearTimeout(t);
    }
  }, [lastReady, last, sections, scrollTo]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)]">
      {/* LEFT: pleasant light sidebar */}
      <aside
        className="
        md:sticky md:top-0 md:min-h-screen
        bg-gradient-to-b from-indigo-50/80 via-sky-50/60 to-white/60
        backdrop-blur-sm border-r border-zinc-200
        px-4 py-5
      "
      >
        <div className="mb-4">
          <div className="text-[11px] uppercase tracking-wider text-zinc-600">
            {courseLabel}
          </div>
          <div className="mt-2 h-2 rounded-full bg-zinc-200/80 overflow-hidden">
            <div
              className="h-2 rounded-full bg-indigo-400 transition-all"
              style={{
                width: (() => {
                  const total =
                    sections
                      .flatMap((s) => s.nodes)
                      .filter((n) => n.t === "mcq" || n.t === "input").length ||
                    1;
                  const solved = Object.values(okMap).filter(Boolean).length;
                  return `${Math.min(
                    100,
                    Math.round((solved / total) * 100)
                  )}%`;
                })(),
              }}
            />
          </div>
          <div className="mt-3 flex gap-2">
            {lastReady && last && last !== sections[0]?.id && (
              <button
                onClick={() => scrollTo(last)}
                className="rounded-md border border-indigo-200 bg-white/70 px-3 py-1.5 text-[13px] text-indigo-700 hover:bg-white"
              >
                Продолжить
              </button>
            )}
            {lastReady && last && (
              <button
                onClick={clearLast}
                className="rounded-md border border-zinc-200 bg-white/50 px-3 py-1.5 text-[13px] text-zinc-600 hover:bg-white"
                title="Забыть позицию"
              >
                Сбросить
              </button>
            )}
          </div>
        </div>
        <nav className="space-y-1.5">
          {sections.map((s, idx) => {
            const active = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={[
                  "w-full text-left rounded-lg px-3 py-2 text-[15px] transition",
                  active
                    ? "bg-white/70 ring-1 ring-indigo-200 text-zinc-900 shadow-sm"
                    : "hover:bg-white/40 text-zinc-700",
                ].join(" ")}
              >
                <span className="mr-2 tabular-nums text-zinc-500">
                  {idx + 1}.
                </span>
                {s.title}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* RIGHT: content column */}
      <main className="bg-white">
        <div className="border-b border-zinc-200 px-5 py-3 text-sm text-zinc-600 flex items-center gap-3">
          <span>{metaLine}</span>
          {tasksReady && (
            <span className="text-zinc-500">
              Прогресс:{" "}
              {(() => {
                const total =
                  sections
                    .flatMap((s) => s.nodes)
                    .filter((n) => n.t === "mcq" || n.t === "input").length ||
                  0;
                const solved = Object.values(okMap).filter(Boolean).length;
                return `${solved}/${total}`;
              })()}{" "}
              {done ? "• урок завершён" : ""}
            </span>
          )}
          {lastReady && last && last !== sections[0]?.id && (
            <button
              onClick={() => scrollTo(last)}
              className="ml-auto rounded-md border border-indigo-200 bg-white/70 px-3 py-1.5 text-indigo-700 hover:bg-white"
            >
              Продолжить
            </button>
          )}
        </div>

        <div className="px-5 md:px-10 py-6 md:py-8">
          <h1 className="text-[28px] md:text-[32px] font-extrabold mb-4 text-zinc-900 tracking-tight">
            Тема урока: <span className="text-indigo-600">{lessonTitle}</span>
          </h1>
          {headerAddon ?? null}

          <article className="prose prose-zinc max-w-none">
            {sections.map((sec) => (
              <React.Fragment key={sec.id}>
                {sec.nodes.map((n) => {
                  if (n.t === "h2")
                    return (
                      <h2
                        id={n.id}
                        key={n.id}
                        className="scroll-mt-28 text-zinc-900 font-extrabold"
                      >
                        {n.text}
                      </h2>
                    );
                  if (n.t === "p") return <p key={n.text}>{n.text}</p>;
                  if (n.t === "ex")
                    return (
                      <p key={n.en}>
                        <em>{n.en}</em>
                        {n.ru && (
                          <span className="text-zinc-500"> — {n.ru}</span>
                        )}
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
        </div>
      </main>
    </div>
  );
}
