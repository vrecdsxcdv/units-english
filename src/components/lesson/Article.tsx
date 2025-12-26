You are editing my Next.js (App Router) project.

GOAL
Fix the warning "A param property was accessed directly with `params.track` ... unwrap with React.use()" in src/app/blocks/[track]/page.tsx.

CHANGES
1) Update the page component to treat params as a Promise and unwrap it with React.use().
2) If there is a LegacyTrackPage that receives params, forward the unwrapped params object to it.

PATCH
- Open: src/app/blocks/[track]/page.tsx
- Replace the default export signature and first lines as follows:

```tsx
import * as React from "react";
import LessonShell from "@/components/lesson/LessonShell";
import { a1ArticlesSections } from "@/lib/lessons/a1/articles";

// If you have other imports, keep them.

export function LegacyTrackPage(props: { params: { track: string } }) {
  // ...keep the previous default page's body here, using props.params.track...
  return <div>{/* existing legacy content */}</div>;
}

// Treat params as a Promise and unwrap with React.use()
export default function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = React.use(params);

  if (track === "a1") {
    return (
      <div className="min-h-screen bg-white">
        <LessonShell
          courseLabel="Начальный курс"
          lessonTitle="Артикли"
          metaLine="Демо-урок • решите задания, чтобы сохранить прогресс"
          sections={a1ArticlesSections}
        />
      </div>
    );
  }

  // Pass the unwrapped params to legacy
  return <LegacyTrackPage params={{ track }} />;
}"use client";

import * as React from "react";
// Adjust import below if TaskWidgets are elsewhere:
import { MCQ, Input } from "./TaskWidgets";

// If you already have a shared type — reuse it. Otherwise define here:
type Node =
  | { t: "h2"; id?: string; text: string }
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

type Props = {
  nodes: Node[];
  /** optional reporter from parent; must NOT trigger state changes unless value actually changed */
  onTaskChange?: (id: string, ok: boolean) => void;
};

function ArticleBase({ nodes, onTaskChange }: Props) {
  // Stable reporter; no local state here
  const report = React.useCallback(
    (id: string, ok: boolean) => {
      if (onTaskChange) onTaskChange(id, ok);
    },
    [onTaskChange]
  );

  return (
    <div className="prose prose-zinc max-w-none prose-h2:mt-8 prose-h2:mb-3 prose-p:my-3 prose-li:my-1">
      {nodes.map((n) => {
        switch (n.t) {
          case "h2":
            return (
              <h2 id={n.id} key={`h2:${n.id ?? n.text}`}>
                {n.text}
              </h2>
            );
          case "p":
            return <p key={`p:${n.text}`}>{n.text}</p>;
          case "ex":
            return (
              <p key={`ex:${n.en}`}>
                <em>{n.en}</em>
                {n.ru && <span className="text-zinc-500"> — {n.ru}</span>}
              </p>
            );
          case "taskTitle":
            return (
              <p key={`tt:${n.text}`} className="font-semibold mt-6">
                {n.text}
              </p>
            );
          case "mcq":
            return (
              <MCQ
                key={`mcq:${n.id}`}
                id={n.id}
                q={n.q}
                options={n.options}
                a={n.a}
                onChange={(ok) => report(n.id, ok)}
              />
            );
          case "input":
            return (
              <Input
                key={`in:${n.id}`}
                id={n.id}
                q={n.q}
                a={n.a}
                hint={n.hint}
                ph={n.ph}
                onChange={(ok) => report(n.id, ok)}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/** Memoized to avoid unnecessary re-renders when parent recreates arrays */
const Article = React.memo(ArticleBase);
export default Article;
// src/components/lesson/Article.tsx
import * as React from "react";

export type ArticleNode =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "example"; en: string; ru?: string }
  | {
      type: "task_mcq";
      id: string;
      prompt: string;
      options: string[];
      answer: string; // exact match
    }
  | {
      type: "task_input";
      id: string;
      prompt: string;
      placeholder?: string;
      answer: string; // case-insensitive trim compare
      hint?: string;
    };

export type ArticleProps = {
  nodes: ArticleNode[];
  onTaskState?: (state: Record<string, boolean>) => void; // id -> correct
};

/** Typography close to article style: calm margins, readable width, no flashy boxes */
export default function Article({ nodes, onTaskState }: ArticleProps) {
  const [state, setState] = React.useState<Record<string, boolean>>({});
  // keep latest callback in a ref to avoid re-running when parent creates a new function each render
  const cbRef = React.useRef<typeof onTaskState>();
  React.useEffect(() => {
    cbRef.current = onTaskState;
  }, [onTaskState]);
  React.useEffect(() => {
    cbRef.current?.(state);
  }, [state]);

  return (
    <div className="prose prose-zinc max-w-none prose-h2:mt-8 prose-h2:mb-3 prose-p:my-3 prose-li:my-1">
      {nodes.map((n, i) => {
        switch (n.type) {
          case "h2":
            return <h2 key={i}>{n.text}</h2>;
          case "p":
            return <p key={i}>{n.text}</p>;
          case "example":
            return (
              <p key={i}>
                <span className="rounded-md bg-zinc-100 px-1.5 py-0.5">
                  {n.en}
                </span>
                {n.ru && <span className="text-zinc-500"> — {n.ru}</span>}
              </p>
            );
          case "task_mcq": {
            return (
              <TaskMcq
                key={n.id}
                node={n}
                onChange={(ok) => setState((s) => ({ ...s, [n.id]: ok }))}
              />
            );
          }
          case "task_input": {
            return (
              <TaskInput
                key={n.id}
                node={n}
                onChange={(ok) => setState((s) => ({ ...s, [n.id]: ok }))}
              />
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}

function TaskMcq({
  node,
  onChange,
}: {
  node: Extract<ArticleNode, { type: "task_mcq" }>;
  onChange: (ok: boolean) => void;
}) {
  const [val, setVal] = React.useState<string>("");
  const ok = val === node.answer;
  React.useEffect(() => onChange(ok), [ok, onChange]);
  return (
    <div className="my-4">
      <p className="font-medium text-zinc-900">Задание: {node.prompt}</p>
      <p className="text-sm text-zinc-500 mb-1">Выберите вариант:</p>
      <div className="flex flex-wrap gap-2">
        {node.options.map((o) => (
          <button
            key={o}
            onClick={() => setVal(o)}
            className={[
              "rounded-full border px-3 py-1.5 text-sm",
              val === o
                ? ok
                  ? "border-emerald-600 text-emerald-700"
                  : "border-rose-500 text-rose-600"
                : "border-zinc-300 text-zinc-700 hover:bg-white",
            ].join(" ")}
          >
            {o}
          </button>
        ))}
      </div>
      {val && (
        <p
          className={
            "mt-1 text-sm " + (ok ? "text-emerald-600" : "text-rose-600")
          }
        >
          {ok ? "Верно" : "Попробуйте другой вариант"}
        </p>
      )}
    </div>
  );
}

function TaskInput({
  node,
  onChange,
}: {
  node: Extract<ArticleNode, { type: "task_input" }>;
  onChange: (ok: boolean) => void;
}) {
  const [val, setVal] = React.useState("");
  const ok = val.trim().toLowerCase() === node.answer.trim().toLowerCase();
  React.useEffect(() => onChange(ok), [ok, onChange]);
  return (
    <div className="my-4">
      <p className="font-medium text-zinc-900">Задание: {node.prompt}</p>
      <input
        className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder={node.placeholder ?? "введите ответ"}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <div className="mt-1 text-sm">
        {val ? (
          <span className={ok ? "text-emerald-600" : "text-rose-600"}>
            {ok ? "Верно" : "Подсказка: "}
            {ok ? "" : node.hint ?? ""}
          </span>
        ) : (
          <span className="text-zinc-500">Ответ обязателен.</span>
        )}
      </div>
    </div>
  );
}
