"use client";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

type Base = {
  id: string;
  type: "mcq" | "gap" | "reading_mcq" | "listening_matching";
  weight?: number;
};
type MCQ = Base & { type: "mcq"; question: string; choices: string[] };
type GAP = Base & { type: "gap"; text: string };
type RMCQ = Base & {
  type: "reading_mcq";
  passage: string;
  question: string;
  choices: string[];
};
type ListeningMatching = Base & {
  type: "listening_matching";
  audioUrl: string;
  instruction: string;
  speakers: number[];
  options: { label: string; text: string }[];
};

export type PublicQuestion = MCQ | GAP | RMCQ | ListeningMatching;

export type Props = {
  q: PublicQuestion;
  disabled?: boolean;
  onAnswer: (payload: any) => Promise<void> | void;
};

export default function QuestionCard({ q, disabled, onAnswer }: Props) {
  const [userInput, setUserInput] = useState("");
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const audioRef = useRef<HTMLAudioElement>(null);

  // Сбрасываем input при смене вопроса
  useEffect(() => {
    setUserInput("");
    setMatchAnswers({});
  }, [q.id]);

  // Listening Matching
  if (q.type === "listening_matching") {
    const allAnswered = q.speakers.every((s) => matchAnswers[s]);

    return (
      <div className="space-y-6">
        {/* Инструкция */}
        <div className="text-lg font-medium text-slate-700 whitespace-pre-line">
          {q.instruction}
        </div>

        {/* Аудио плеер */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-4 border border-indigo-100">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🎧</span>
            <span className="font-medium text-slate-700">Прослушайте запись</span>
          </div>
          <audio
            ref={audioRef}
            controls
            className="w-full"
            src={q.audioUrl}
          >
            Your browser does not support the audio element.
          </audio>
          <p className="text-sm text-slate-500 mt-2">
            Вы можете прослушать запись дважды
          </p>
        </div>

        {/* Варианты ответов (опции) */}
        <div className="rounded-xl bg-white/80 p-4 border border-slate-200">
          <div className="text-sm font-semibold text-slate-600 mb-3">Активности:</div>
          <div className="grid gap-2">
            {q.options.map((opt) => (
              <div key={opt.label} className="flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                  {opt.label}
                </span>
                <span className="text-slate-700">{opt.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Matching селекторы */}
        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-600">Выберите активность для каждого спикера:</div>
          {q.speakers.map((speaker) => (
            <div
              key={speaker}
              className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200"
            >
              <div className="flex items-center gap-2 min-w-[100px]">
                <span className="text-lg">🗣️</span>
                <span className="font-medium text-slate-700">Speaker {speaker}</span>
              </div>
              <select
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none disabled:opacity-50"
                value={matchAnswers[speaker] || ""}
                onChange={(e) =>
                  setMatchAnswers((prev) => ({
                    ...prev,
                    [speaker]: e.target.value,
                  }))
                }
                disabled={disabled}
              >
                <option value="">— Выберите —</option>
                {q.options.map((opt) => (
                  <option key={opt.label} value={opt.label}>
                    {opt.label}. {opt.text}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Кнопка отправки */}
        <button
          className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 transition"
          disabled={disabled || !allAnswered}
          onClick={() => onAnswer({ matching: matchAnswers })}
        >
          Ответить
        </button>
      </div>
    );
  }

  if (q.type === "reading_mcq") {
    return (
      <div className="space-y-4">
        <div className="rounded-xl bg-white/60 p-4 shadow-sm">
          <div className="text-sm text-slate-600 whitespace-pre-line">
            {q.passage}
          </div>
        </div>
        <div className="text-lg font-medium">{q.question}</div>
        <div className="grid gap-3">
          {q.choices.map((c) => (
            <button
              key={c}
              className={clsx(
                "rounded-xl border px-4 py-3 text-left transition",
                "bg-white hover:bg-slate-50 active:bg-slate-100 disabled:opacity-50"
              )}
              disabled={disabled}
              onClick={() => onAnswer({ chosen: c })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (q.type === "mcq") {
    return (
      <div className="space-y-4">
        <div className="text-lg font-medium">{q.question}</div>
        <div className="grid gap-3">
          {q.choices.map((c) => (
            <button
              key={c}
              className={clsx(
                "rounded-xl border px-4 py-3 text-left transition",
                "bg-white hover:bg-slate-50 active:bg-slate-100 disabled:opacity-50"
              )}
              disabled={disabled}
              onClick={() => onAnswer({ chosen: c })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // gap
  return (
    <div className="space-y-4">
      <div className="text-lg font-medium">{q.text}</div>
      <div className="flex items-center gap-3">
        <input
          className="w-full rounded-xl border bg-white px-4 py-3 outline-none ring-0 focus:border-slate-400"
          placeholder="Введите ответ"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === "Enter") onAnswer({ user: userInput });
          }}
        />
        <button
          className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
          disabled={disabled || !userInput.trim()}
          onClick={() => onAnswer({ user: userInput })}
        >
          Ответить
        </button>
      </div>
    </div>
  );
}
