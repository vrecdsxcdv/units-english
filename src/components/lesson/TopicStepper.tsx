"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import {
  saveLocal,
  loadLocal,
  saveStepToServer,
  loadAllStepsFromServer,
} from "./progressClient";
import {
  STEP_TITLES,
  THEORY_HTML,
  EXERCISE_ITEMS,
} from "@/lib/lessons/a1/articles-steps";

type Props = {
  track: "a1";
  lesson: "articles";
  onFinish?: () => void;
};

type StepState = {
  completed: boolean;
  answers?: any;
  errors?: string[];
};

const ARTICLE_OPTIONS = ["a", "an", "the", "—"] as const;

export default function TopicStepper({ track, lesson, onFinish }: Props) {
  const { status } = useSession();
  const signedIn = status === "authenticated";

  const [active, setActive] = React.useState(0); // 0..4
  const [steps, setSteps] = React.useState<Record<number, StepState>>({});

  // hydrate from server or local
  React.useEffect(() => {
    let mounted = true;
    (async () => {
      let loaded: Record<number, StepState> = {};
      if (signedIn) {
        const rows = await loadAllStepsFromServer(track, lesson);
        if (rows) {
          for (const r of rows) {
            loaded[r.stepIndex] = {
              completed: !!r.completed,
              answers: r.answersJson ?? undefined,
            };
          }
        }
      }
      if (!Object.keys(loaded).length) {
        const local = loadLocal(track, lesson) as Record<number, any>;
        for (const k of Object.keys(local)) {
          const i = Number(k);
          loaded[i] = {
            completed: !!local[i]?.completed,
            answers: local[i]?.answers,
          };
        }
      }
      if (mounted) setSteps(loaded);
    })();
    return () => {
      mounted = false;
    };
  }, [signedIn, track, lesson]);

  const markAndSave = React.useCallback(
    async (idx: number, state: StepState) => {
      setSteps((prev) => {
        const next = { ...prev, [idx]: state };
        return next;
      });
      saveLocal(track, lesson, idx, state);
      if (signedIn) {
        await saveStepToServer({
          track,
          lesson,
          stepIndex: idx,
          completed: !!state.completed,
          answers: state.answers ?? null,
        });
      }
    },
    [signedIn, track, lesson]
  );

  // --- STEP 1 (theory) ---
  const completeTheory = React.useCallback(() => {
    markAndSave(0, { completed: true });
    setActive(1);
  }, [markAndSave]);

  // --- STEP 2 (exercise) ---
  type SelectedMap = Record<number, string[]>; // itemIndex -> answers[]
  const [sel, setSel] = React.useState<SelectedMap>({});
  // hydrate step2 answers when loaded:
  React.useEffect(() => {
    const prev = steps[1]?.answers as SelectedMap | undefined;
    if (prev) setSel(prev);
  }, [steps]);

  const setChoice = (itemIdx: number, blankIdx: number, val: string) => {
    setSel((prev) => {
      const row = prev[itemIdx]
        ? [...prev[itemIdx]]
        : Array(EXERCISE_ITEMS[itemIdx].answers.length).fill("");
      row[blankIdx] = val;
      const next = { ...prev, [itemIdx]: row };
      return next;
    });
  };

  const [checkMsg, setCheckMsg] = React.useState<string | null>(null);
  const [wrongList, setWrongList] = React.useState<number[]>([]);

  const checkExercise = () => {
    const wrong: number[] = [];
    EXERCISE_ITEMS.forEach((it, i) => {
      const user = sel[i] || [];
      const ok =
        user.length === it.answers.length &&
        user.every((v, j) => v === it.answers[j]);
      if (!ok) wrong.push(i);
    });
    setWrongList(wrong);
    if (wrong.length === 0) {
      setCheckMsg("Вы всё правильно прошли.");
      const newState: StepState = { completed: true, answers: sel };
      markAndSave(1, newState);
    } else {
      setCheckMsg("Есть ошибки. Проверьте выделенные места и пояснения ниже.");
      const newState: StepState = { completed: false, answers: sel };
      markAndSave(1, newState);
    }
  };

  return (
    <div className="w-full">
      {/* TOP chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {STEP_TITLES.map((t, i) => {
          const done = steps[i]?.completed;
          const isActive = i === active;
          return (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={[
                "px-3 py-1.5 rounded-full text-sm transition border",
                isActive
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : done
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50",
              ].join(" ")}
              title={t}
            >
              {i + 1}. {t}
            </button>
          );
        })}
      </div>

      {/* STEP CONTENT */}
      {active === 0 && (
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <h2 className="text-xl font-extrabold mb-3">
            Тема урока: <span className="text-indigo-600">Артикли</span>
          </h2>
          <div
            className="prose prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: THEORY_HTML }}
          />
          <div className="mt-4 flex gap-2">
            <button
              onClick={completeTheory}
              className="rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            >
              Далее
            </button>
          </div>
        </div>
      )}

      {active === 1 && (
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <h2 className="text-xl font-extrabold mb-3">
            Вставьте артикли где необходимо
          </h2>
          <div className="space-y-3">
            {EXERCISE_ITEMS.map((it, i) => {
              const user = sel[i] || [];
              const wrong = wrongList.includes(i);
              return (
                <div
                  key={i}
                  className={[
                    "text-[15px] leading-7",
                    wrong ? "bg-rose-50/60 rounded-md px-2 -mx-2" : "",
                  ].join(" ")}
                >
                  {it.parts.map((part, j) => {
                    const isBlank = j < it.answers.length;
                    return (
                      <React.Fragment key={j}>
                        <span>{part}</span>
                        {isBlank && (
                          <select
                            value={user[j] ?? ""}
                            onChange={(e) => setChoice(i, j, e.target.value)}
                            className={[
                              "mx-1 rounded-md border px-2 py-0.5 text-sm align-middle",
                              user[j]
                                ? user[j] === it.answers[j] && checkMsg
                                  ? "border-emerald-400 bg-emerald-50"
                                  : checkMsg
                                  ? "border-rose-400 bg-rose-50"
                                  : "border-zinc-300"
                                : "border-zinc-300",
                            ].join(" ")}
                          >
                            <option value="" disabled>
                              —
                            </option>
                            {ARTICLE_OPTIONS.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex gap-2 items-center">
            <button
              onClick={checkExercise}
              className="rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            >
              Проверить
            </button>
            {checkMsg && (
              <span
                className={
                  checkMsg.startsWith("Вы всё")
                    ? "text-emerald-700"
                    : "text-rose-600"
                }
              >
                {checkMsg}
              </span>
            )}
          </div>

          {/* explanations when errors */}
          {wrongList.length > 0 && (
            <div className="mt-4 border-t pt-3">
              <h3 className="font-semibold mb-2">Пояснения</h3>
              <ul className="list-disc ml-5 text-[15px]">
                {wrongList.map((i) => (
                  <li key={i}>
                    <span className="font-medium">Пункт {i + 1}:</span>{" "}
                    {EXERCISE_ITEMS[i].explain ?? "Смотрите правило выше."}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setActive(0)}
              className="rounded-md border border-zinc-200 bg-white px-4 py-2"
            >
              Назад
            </button>
            <button
              onClick={() => setActive(2)}
              className="rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            >
              Далее
            </button>
          </div>
        </div>
      )}

      {active >= 2 && (
        <div className="bg-white rounded-xl border border-zinc-200 p-5">
          <h2 className="text-xl font-extrabold mb-3">
            {STEP_TITLES[active]} (скоро)
          </h2>
          <p className="text-zinc-600">
            Этот шаг пока пустой — заполним позже.
          </p>
          <div className="mt-4 flex gap-2">
            {active > 0 && (
              <button
                onClick={() => setActive(active - 1)}
                className="rounded-md border border-zinc-200 bg-white px-4 py-2"
              >
                Назад
              </button>
            )}
            {active < 4 && (
              <button
                onClick={() => {
                  if (active === 3) {
                    // Last step - call onFinish if provided
                    onFinish?.();
                  } else {
                    setActive(active + 1);
                  }
                }}
                className="rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
              >
                {active === 3 ? "Завершить тему" : "Далее"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
