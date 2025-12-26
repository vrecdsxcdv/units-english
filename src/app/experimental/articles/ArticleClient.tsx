"use client";
// src/app/experimental/articles/ArticleClient.tsx

import * as React from "react";

type Node =
  | { t: "h2"; text: string }
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

function useCompletion(key: string) {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const v = window.localStorage.getItem(key);
    if (v === "1") setDone(true);
  }, [key]);
  const mark = React.useCallback(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, "1");
    setDone(true);
  }, [key]);
  return { done, mark };
}

function MCQ({
  id,
  q,
  options,
  a,
  onChange,
}: {
  id: string;
  q: string;
  options: string[];
  a: string;
  onChange: (ok: boolean) => void;
}) {
  const [val, setVal] = React.useState("");
  const ok = val === a;
  React.useEffect(() => onChange(!!val && ok), [ok, val, onChange]);
  return (
    <div className="my-4">
      <p>
        <span className="font-medium">Задание:</span> {q}
      </p>
      <div className="mt-1">
        {options.map((o) => {
          const active = val === o;
          return (
            <button
              key={o}
              onClick={() => setVal(o)}
              className={[
                "mr-4 underline underline-offset-4",
                active
                  ? ok
                    ? "text-emerald-600"
                    : "text-rose-600"
                  : "text-zinc-700 hover:text-zinc-900",
              ].join(" ")}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Input({
  id,
  q,
  a,
  hint,
  ph,
  onChange,
}: {
  id: string;
  q: string;
  a: string;
  hint?: string;
  ph?: string;
  onChange: (ok: boolean) => void;
}) {
  const [val, setVal] = React.useState("");
  const ok = val.trim().toLowerCase() === a.trim().toLowerCase();
  React.useEffect(
    () => onChange(val.trim().length > 0 && ok),
    [ok, val, onChange]
  );
  return (
    <div className="my-4">
      <p>
        <span className="font-medium">Задание:</span> {q}
      </p>
      <input
        className="inline border-0 border-b border-b-zinc-300 focus:border-b-emerald-500 focus:ring-0 px-1 py-0.5"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={ph ?? "введите ответ"}
      />
      <span
        className={
          "ml-2 text-sm " +
          (val ? (ok ? "text-emerald-600" : "text-rose-600") : "text-zinc-500")
        }
      >
        {val
          ? ok
            ? "Верно"
            : hint
            ? `Подсказка: ${hint}`
            : "Неверно"
          : "Ответ обязателен"}
      </span>
    </div>
  );
}

export default function ArticleClient() {
  const nodes = React.useMemo<Node[]>(
    () => [
      { t: "h2", text: "Что такое артикль и зачем он нужен" },
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

      { t: "h2", text: "Когда ставится a/an" },
      {
        t: "p",
        text: "Первое упоминание; профессии; восклицания с what: What a clever idea! После such/quite/rather перед исчисляемым ед. ч.; модель so/too + adj + a + noun.",
      },
      { t: "ex", en: "What a fine building!" },
      { t: "ex", en: "She is such a kind woman." },
      { t: "ex", en: "It is too difficult a task." },

      { t: "h2", text: "Когда ставится the" },
      {
        t: "p",
        text: "Повторное упоминание; уникальные/единственные в ситуации (the sun; open the window); класс предметов (The tiger...); группы людей (the poor); «все представители» (the students).",
      },
      { t: "ex", en: "I saw a man. The man smiled." },
      { t: "ex", en: "The students of our Institute learn foreign languages." },

      { t: "taskTitle", text: "Решите задания" },
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
    []
  );

  const [okMap, setOkMap] = React.useState<Record<string, boolean>>({});
  const allCorrect = React.useMemo(() => {
    const ids = Object.keys(okMap);
    return ids.length > 0 && ids.every((k) => okMap[k]);
  }, [okMap]);

  const { done, mark } = useCompletion("unitsExp:articles");
  React.useEffect(() => {
    if (allCorrect && !done) mark();
  }, [allCorrect, done, mark]);

  return (
    <>
      <article className="prose prose-zinc max-w-none mt-6">
        {nodes.map((n) => {
          if (n.t === "h2") return <h2 key={n.text}>{n.text}</h2>;
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
                onChange={(ok) => setOkMap((s) => ({ ...s, [n.id]: ok }))}
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
                onChange={(ok) => setOkMap((s) => ({ ...s, [n.id]: ok }))}
              />
            );
          return null;
        })}
      </article>

      <p
        className={
          "mt-4 text-sm " +
          (allCorrect || done ? "text-emerald-600" : "text-zinc-500")
        }
      >
        {allCorrect || done
          ? "Готово: все задания решены (сохранено локально)."
          : "Решите все задания, чтобы завершить экспериментальную тему."}
      </p>
    </>
  );
}
