"use client";
import * as React from "react";

type Props = {
  /** Короткий мотивирующий абзац под заголовком */
  description?: string;
  /** Скролл к списку тем или любой старт-хендлер */
  onStart?: () => void;
};

const CHECKLIST: string[] = [
  "Части речи",
  "Имя существительное",
  "Артикль",
  "Имя прилагательное",
  "Имя числительное",
  "Местоимение",
  "Глагол",
  "Present tense",
  "Past tense",
  "Future tense",
  "The Present Continuous",
];

export default function WelcomePanel({ description, onStart }: Props) {
  return (
    <section
      className={[
        "rounded-3xl border border-white/30 bg-white/60",
        "backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
      ].join(" ")}
    >
      <div className="p-6 md:p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Вы хотите начать наше обучение
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          {description ??
            "Мы подготовили для вас спокойный, понятный маршрут: короткая теория, понятные примеры и практика, которая действительно закрепляет."}
        </p>

        {/* Перечень тем */}
        <div className="mx-auto mt-6 max-w-2xl text-left">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-gray-800">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <button
            onClick={onStart}
            className="inline-flex h-11 items-center justify-center rounded-full px-6 text-lg font-medium text-white bg-gray-900 hover:bg-black/90 transition-colors"
          >
            Начать
          </button>
          {/* микро-мотиватор */}
          <div className="mt-2 text-xs text-gray-500">
            Начните с первой темы — всё займет не больше 10–15 минут.
          </div>
        </div>
      </div>
    </section>
  );
}
/* BLOCKS_TOPICS_APPLIED */
