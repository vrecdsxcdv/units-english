"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PassiveVoice2({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    case 13:
      return <Step13 />;
    case 14:
      return <Step14 />;
    case 15:
      return <Step15 />;
    default:
      return <Step1 />;
  }
}

/* ===== Компонент для multiple choice с отложенным показом ответа ===== */
function MultipleChoiceQuestion({
  question,
  options,
  correctAnswer,
  explanation,
}: {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-zinc-50 rounded-lg p-4 mb-4">
      <p className="text-sm font-semibold mb-3 text-zinc-900">{question}</p>
      <div className="space-y-2 mb-3">
        {options.map((opt) => {
          const optionLetter = opt.split(".")[0];
          const isSelected = selectedAnswer === optionLetter;
          const isCorrectOption = optionLetter === correctAnswer;

          return (
            <button
              key={opt}
              onClick={() => !showResult && handleAnswer(optionLetter)}
              disabled={showResult}
              className={`w-full text-left rounded p-3 transition-colors ${
                showResult
                  ? isCorrectOption
                    ? "bg-green-100 border-2 border-green-500"
                    : isSelected
                    ? "bg-red-100 border-2 border-red-500"
                    : "bg-white"
                  : isSelected
                  ? "bg-indigo-100 border-2 border-indigo-400"
                  : "bg-white hover:bg-zinc-100"
              } ${!showResult ? "cursor-pointer" : "cursor-default"}`}
            >
              <p className="text-sm text-zinc-700">{opt}</p>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={`rounded-lg p-4 ${
            isCorrect
              ? "bg-green-50 border border-green-300"
              : "bg-red-50 border border-red-300"
          }`}
        >
          <p
            className={`text-sm font-semibold mb-2 ${
              isCorrect ? "text-green-800" : "text-red-800"
            }`}
          >
            {isCorrect ? "✓ Правильно!" : "✗ Неправильно"}
          </p>
          <p className="text-sm text-zinc-700 mb-1">
            <strong>Правильный ответ:</strong> {correctAnswer}
          </p>
          <p className="text-xs text-zinc-600">{explanation}</p>
        </div>
      )}
    </div>
  );
}

/* ===== СТРАНИЦА 1: Обзор времён в Passive Voice ===== */
function Step1() {
  return (
    <>
      <UiSection title="Passive Voice 2: Все времена пассивного залога">
        <div className="bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">⏰</div>
            <div>
              <p className="text-lg font-bold text-slate-900 mb-3">
                Passive Voice во всех временах
              </p>
              <p className="text-zinc-800 leading-relaxed mb-3">
                В первой части мы изучили <strong>Present Simple</strong> и{" "}
                <strong>Past Simple Passive</strong>. Теперь изучим пассивный
                залог во всех остальных временах.
              </p>
              <p className="text-zinc-800 leading-relaxed">
                Формула остаётся той же: <strong>BE + V3</strong>, но меняется
                форма глагола BE в зависимости от времени.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Общая формула для всех времён
          </h4>
          <div className="bg-indigo-100 rounded-lg p-6 mb-4">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-3">
              BE (в нужном времени) + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Изменяется только форма глагола BE!
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                tense: "Present Simple",
                formula: "am/is/are + V3",
                example: "The room is cleaned every day.",
              },
              {
                tense: "Past Simple",
                formula: "was/were + V3",
                example: "The room was cleaned yesterday.",
              },
              {
                tense: "Present Continuous",
                formula: "am/is/are being + V3",
                example: "The room is being cleaned right now.",
              },
              {
                tense: "Past Continuous",
                formula: "was/were being + V3",
                example: "The room was being cleaned at 5 PM.",
              },
              {
                tense: "Present Perfect",
                formula: "have/has been + V3",
                example: "The room has been cleaned.",
              },
              {
                tense: "Past Perfect",
                formula: "had been + V3",
                example: "The room had been cleaned before we arrived.",
              },
              {
                tense: "Future Simple",
                formula: "will be + V3",
                example: "The room will be cleaned tomorrow.",
              },
              {
                tense: "Modal Verbs",
                formula: "modal + be + V3",
                example: "The room can be cleaned.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 mb-1">
                      Время:
                    </p>
                    <p className="text-sm font-bold text-indigo-900">
                      {item.tense}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-sky-600 mb-1">
                      Формула:
                    </p>
                    <p className="text-sm text-zinc-800">{item.formula}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-600 mb-1">
                      Пример:
                    </p>
                    <p className="text-sm text-zinc-800">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            Какие времена НЕ используются в Passive Voice
          </h4>
          <p className="text-zinc-700 mb-4">
            Некоторые времена редко или никогда не используются в пассивном
            залоге, так как они звучат неестественно:
          </p>
          <div className="space-y-3">
            {[
              {
                tense: "Present Perfect Continuous",
                reason:
                  "Слишком сложная конструкция, практически не используется",
                example: "has been being done ❌",
              },
              {
                tense: "Past Perfect Continuous",
                reason: "Очень редко, звучит неестественно",
                example: "had been being done ❌",
              },
              {
                tense: "Future Continuous",
                reason: "Практически не используется",
                example: "will be being done ❌",
              },
              {
                tense: "Future Perfect Continuous",
                reason: "Не используется",
                example: "will have been being done ❌",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-red-50 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">{item.tense}</p>
                <p className="text-sm text-zinc-700 mb-1">{item.reason}</p>
                <p className="text-xs text-red-600 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Что мы изучим в этой теме
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Present Continuous Passive",
              "Past Continuous Passive",
              "Present Perfect Passive",
              "Past Perfect Passive",
              "Future Simple Passive",
              "Future Perfect Passive",
              "Modal Verbs in Passive",
              "Going to в Passive",
            ].map((topic, idx) => (
              <div
                key={idx}
                className="bg-white rounded p-4 border-l-4 border-indigo-400"
              >
                <p className="text-sm font-semibold text-indigo-900">
                  {idx + 1}. {topic}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            Ключевое правило
          </h4>
          <div className="bg-slate-100 rounded-lg p-6">
            <p className="text-lg text-zinc-800 leading-relaxed">
              📌 Чтобы образовать Passive Voice в любом времени, нужно:{" "}
              <strong className="text-indigo-700">
                поставить глагол BE в нужное время + добавить V3
              </strong>
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-zinc-700">
                • Active: They <strong>are building</strong> a house.
              </p>
              <p className="text-sm text-indigo-700">
                • Passive: A house <strong>is being built</strong>.
              </p>
              <p className="text-xs text-zinc-600 italic mt-2">
                (are building → is being built: глагол BE в Present Continuous +
                V3)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Present Continuous Passive ===== */
function Step2() {
  const exercise1: FillItem[] = [
    {
      left: "1. The house",
      right: "(build) right now.",
      answers: ["is being built"],
      explanation: "Present Continuous Passive: is being + built",
    },
    {
      left: "2. The documents",
      right: "(check) at the moment.",
      answers: ["are being checked"],
      explanation:
        "Present Continuous Passive: are being + checked (мн. число)",
    },
    {
      left: "3. The car",
      right: "(not / repair) right now.",
      answers: ["is not being repaired", "isn't being repaired"],
      explanation: "Отрицание: is not being repaired",
    },
    {
      left: "4. Why",
      right: "the room (clean)?",
      answers: ["is the room being cleaned"],
      explanation: "Вопрос: Why is the room being cleaned?",
    },
    {
      left: "5. New employees",
      right: "(train) this week.",
      answers: ["are being trained"],
      explanation: "Present Continuous Passive: are being + trained",
    },
  ];

  return (
    <>
      <UiSection title="Present Continuous Passive">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg">
            Present Continuous Passive используется для действий, которые
            происходят ПРЯМО СЕЙЧАС в пассивном залоге.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Формула образования
          </h4>
          <div className="bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg p-6 mb-6">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-2">
              am / is / are + BEING + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Глагол BE в Present + BEING + третья форма глагола
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3 text-lg">
                1. Утвердительные предложения
              </h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The house is being built right now.",
                    ru: "Дом строится прямо сейчас.",
                    note: "is being built = строится (в данный момент)",
                  },
                  {
                    en: "The documents are being checked at the moment.",
                    ru: "Документы проверяются в данный момент.",
                    note: "are being checked = проверяются",
                  },
                  {
                    en: "A new bridge is being constructed in our city.",
                    ru: "Новый мост строится в нашем городе.",
                    note: "is being constructed = строится",
                  },
                  {
                    en: "The students are being tested now.",
                    ru: "Студенты тестируются сейчас.",
                    note: "are being tested = тестируются",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-indigo-600 italic">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-sky-700 mb-3 text-lg">
                2. Отрицательные предложения
              </h5>
              <div className="bg-sky-100 rounded-lg p-5 mb-3">
                <p className="text-lg font-bold text-center text-sky-900">
                  am / is / are + NOT + being + V3
                </p>
              </div>
              <div className="space-y-2">
                {[
                  {
                    en: "The house is not being built right now.",
                    short: "isn't being built",
                    ru: "Дом не строится прямо сейчас.",
                  },
                  {
                    en: "The documents are not being checked at the moment.",
                    short: "aren't being checked",
                    ru: "Документы не проверяются в данный момент.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-sky-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-sky-600">
                      Сокращённо: {item.short}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-700 mb-3 text-lg">
                3. Вопросительные предложения
              </h5>
              <div className="bg-slate-100 rounded-lg p-5 mb-3">
                <p className="text-lg font-bold text-center text-slate-900">
                  Am / Is / Are + subject + being + V3?
                </p>
              </div>
              <div className="space-y-2">
                {[
                  {
                    en: "Is the house being built right now?",
                    answer: "Yes, it is. / No, it isn't.",
                    ru: "Дом строится прямо сейчас?",
                  },
                  {
                    en: "Are the documents being checked?",
                    answer: "Yes, they are. / No, they aren't.",
                    ru: "Документы проверяются?",
                  },
                  {
                    en: "What is being built in that area?",
                    answer: "A new shopping mall is being built.",
                    ru: "Что строится в том районе?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-zinc-600">
                      <strong>Ответ:</strong> {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Когда используется Present Continuous Passive
          </h4>
          <div className="space-y-3">
            {[
              {
                rule: "1. Действие происходит ПРЯМО СЕЙЧАС",
                example: "The car is being repaired at the moment.",
                markers: "now, right now, at the moment, currently",
              },
              {
                rule: "2. Временная ситуация в настоящем",
                example: "The office is being renovated this month.",
                markers: "this week, this month, these days",
              },
              {
                rule: "3. Процесс, который виден или слышен сейчас",
                example: "Listen! The piano is being played.",
                markers: "Look!, Listen!, Can you hear?",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-5">
                <h5 className="font-semibold text-green-900 mb-2">
                  {item.rule}
                </h5>
                <p className="text-sm text-zinc-800 mb-2">{item.example}</p>
                <p className="text-xs text-green-600">
                  <strong>Маркеры:</strong> {item.markers}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Present Continuous Passive"
          instruction="Поставьте глагол в скобках в Present Continuous Passive."
          items={exercise1}
        />

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300">
          <h4 className="text-xl font-bold text-red-900 mb-4">
            ⚠️ Важно: BEING
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-green-700 font-semibold mb-1">
                ✓ The house <strong>is being built</strong>. ✓
              </p>
              <p className="text-xs text-zinc-600">
                (Правильно: is + BEING + built)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ The house <strong>is built</strong>. ❌
              </p>
              <p className="text-xs text-zinc-600">
                (Неправильно для Continuous: это Present Simple!)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ The house <strong>is building</strong>. ❌
              </p>
              <p className="text-xs text-zinc-600">
                (Неправильно: нужно "is being built", а не "is building")
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Active → Passive (Present Continuous)
          </h4>
          <div className="space-y-4">
            {[
              {
                active: "They are building a new school.",
                passive: "A new school is being built.",
              },
              {
                active: "The mechanic is repairing my car.",
                passive: "My car is being repaired (by the mechanic).",
              },
              {
                active: "Scientists are conducting important research.",
                passive:
                  "Important research is being conducted (by scientists).",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-zinc-800 mb-2">
                  <strong className="text-indigo-700">Active:</strong>{" "}
                  {item.active}
                </p>
                <p className="text-sm text-sky-900 font-semibold">
                  <strong className="text-sky-700">Passive:</strong>{" "}
                  {item.passive}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* Остальные страницы будут добавлены следующими командами */

/* ===== СТРАНИЦА 3: Past Continuous Passive & Present Perfect Passive ===== */
function Step3() {
  const exercise2: FillItem[] = [
    {
      left: "1. When I arrived, the room",
      right: "(clean).",
      answers: ["was being cleaned"],
      explanation: "Past Continuous Passive: was being cleaned",
    },
    {
      left: "2. The documents",
      right: "(already / send) to the manager.",
      answers: ["have already been sent", "have been already sent"],
      explanation: "Present Perfect Passive: have been sent",
    },
    {
      left: "3. At 5 PM yesterday, the bridge",
      right: "(repair).",
      answers: ["was being repaired"],
      explanation: "Past Continuous Passive: was being repaired",
    },
    {
      left: "4. This book",
      right: "(translate) into 20 languages.",
      answers: ["has been translated"],
      explanation: "Present Perfect Passive: has been translated",
    },
    {
      left: "5. The new employees",
      right: "(train) when the director came.",
      answers: ["were being trained"],
      explanation: "Past Continuous Passive: were being trained (мн. число)",
    },
  ];

  return (
    <>
      <UiSection title="Past Continuous & Present Perfect Passive">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            На этой странице изучим два важных времени: Past Continuous Passive
            (действие происходило в определённый момент в прошлом) и Present
            Perfect Passive (результат к настоящему моменту).
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Past Continuous Passive
          </h4>
          <div className="bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg p-6 mb-4">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-2">
              was / were + BEING + V3
            </p>
            <p className="text-center text-zinc-700">
              Действие происходило в определённый момент в прошлом
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="font-semibold text-indigo-900 mb-3">Примеры:</h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The house was being built when I visited the area.",
                    ru: "Дом строился, когда я посетил этот район.",
                  },
                  {
                    en: "At 3 PM yesterday, the car was being repaired.",
                    ru: "Вчера в 3 часа дня машина ремонтировалась.",
                  },
                  {
                    en: "The documents were being checked when the boss arrived.",
                    ru: "Документы проверялись, когда пришёл начальник.",
                  },
                  {
                    en: "While the meeting was going on, coffee was being served.",
                    ru: "Пока шло собрание, подавался кофе.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50 rounded-lg p-5">
              <h5 className="font-semibold text-sky-900 mb-3">
                Когда используется:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Действие происходило в <strong>конкретный момент</strong> в
                    прошлом: <em>at 5 PM, when I arrived</em>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Процесс был <strong>в разгаре</strong> в определённое время
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-400">
              <h5 className="font-semibold text-orange-900 mb-3">
                ⚠️ Важно: Вопрос и отрицание
              </h5>
              <div className="space-y-2">
                <p className="text-sm text-zinc-800">
                  <strong>Отрицание:</strong> The car{" "}
                  <strong>was not being</strong> repaired. (wasn't being
                  repaired)
                </p>
                <p className="text-sm text-zinc-800">
                  <strong>Вопрос:</strong> <strong>Was</strong> the car{" "}
                  <strong>being</strong> repaired?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Present Perfect Passive
          </h4>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 mb-4">
            <p className="text-3xl font-bold text-center text-green-900 mb-2">
              have / has + BEEN + V3
            </p>
            <p className="text-center text-zinc-700">
              Результат действия виден в настоящем
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h5 className="font-semibold text-green-900 mb-3">Примеры:</h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The house has been built.",
                    ru: "Дом построен. (Результат: дом готов)",
                  },
                  {
                    en: "The documents have been sent to the manager.",
                    ru: "Документы отправлены менеджеру.",
                  },
                  {
                    en: "This book has been translated into 50 languages.",
                    ru: "Эта книга переведена на 50 языков.",
                  },
                  {
                    en: "The work has not been finished yet.",
                    ru: "Работа ещё не закончена.",
                  },
                  {
                    en: "Has the email been sent?",
                    ru: "Письмо отправлено?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-5">
              <h5 className="font-semibold text-emerald-900 mb-3">
                Когда используется:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Результат действия <strong>важен сейчас</strong>:{" "}
                    <em>The work has been done.</em>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    С маркерами:{" "}
                    <strong>
                      just, already, yet, never, ever, recently, lately, so far
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Опыт: <em>This film has been seen by millions.</em>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-400">
              <h5 className="font-semibold text-yellow-900 mb-3">
                ⚠️ Важно: have/has BEEN (не being!)
              </h5>
              <div className="space-y-2">
                <p className="text-sm text-green-700 font-semibold">
                  ✓ The work <strong>has been done</strong>. ✓
                </p>
                <p className="text-sm text-red-700 font-semibold">
                  ✗ The work <strong>has being done</strong>. ❌
                </p>
              </div>
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Past Continuous & Present Perfect Passive"
          instruction="Поставьте глагол в правильное время Passive."
          items={exercise2}
        />

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Сравнение: Past Continuous vs Present Perfect Passive
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-sky-100">
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Past Continuous Passive
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Present Perfect Passive
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3">
                    was/were being + V3
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    have/has been + V3
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3">
                    Процесс в определённый момент
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Результат к настоящему
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3">
                    The car <strong>was being repaired</strong> at 5 PM.
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The car <strong>has been repaired</strong>.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Past Perfect Passive ===== */
function Step4() {
  const exercise3: FillItem[] = [
    {
      left: "1. By the time I arrived, the work",
      right: "(finish).",
      answers: ["had been finished"],
      explanation: "Past Perfect Passive: had been finished",
    },
    {
      left: "2. The email",
      right: "(send) before the meeting started.",
      answers: ["had been sent"],
      explanation: "Past Perfect Passive: had been sent",
    },
    {
      left: "3. The report",
      right: "(not / complete) by 5 PM.",
      answers: ["had not been completed", "hadn't been completed"],
      explanation: "Отрицание Past Perfect Passive",
    },
    {
      left: "4. By 2010, the bridge",
      right: "(build).",
      answers: ["had been built"],
      explanation: "Past Perfect Passive: had been built",
    },
    {
      left: "5.",
      right: "the documents (check) before the deadline?",
      answers: ["Had the documents been checked"],
      explanation: "Вопрос: Had the documents been checked?",
    },
  ];

  return (
    <>
      <UiSection title="Past Perfect Passive">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg">
            Past Perfect Passive показывает, что действие было{" "}
            <strong>завершено до</strong> другого действия или момента в
            прошлом.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Формула образования
          </h4>
          <div className="bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg p-6 mb-6">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-2">
              had + BEEN + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Действие завершено ДО другого момента в прошлом
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3 text-lg">
                1. Утвердительные предложения
              </h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The house had been built before we moved there.",
                    ru: "Дом был построен до того, как мы туда переехали.",
                    note: "Сначала построили дом, потом мы переехали",
                  },
                  {
                    en: "The email had been sent before the meeting started.",
                    ru: "Письмо было отправлено до начала встречи.",
                    note: "Сначала отправили письмо, потом началась встреча",
                  },
                  {
                    en: "By 2010, the bridge had been constructed.",
                    ru: "К 2010 году мост был построен.",
                    note: "К определённому моменту в прошлом",
                  },
                  {
                    en: "The work had been finished by the time he arrived.",
                    ru: "Работа была закончена к тому времени, как он пришёл.",
                    note: "by the time = к тому времени",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-indigo-600 italic">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-sky-700 mb-3 text-lg">
                2. Отрицательные предложения
              </h5>
              <div className="bg-sky-100 rounded-lg p-5 mb-3">
                <p className="text-lg font-bold text-center text-sky-900">
                  had + NOT + been + V3
                </p>
              </div>
              <div className="space-y-2">
                {[
                  {
                    en: "The work had not been completed by 5 PM.",
                    short: "hadn't been completed",
                    ru: "Работа не была завершена к 5 вечера.",
                  },
                  {
                    en: "The documents had not been signed before the deadline.",
                    short: "hadn't been signed",
                    ru: "Документы не были подписаны до крайнего срока.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-sky-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-sky-600">
                      Сокращённо: {item.short}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-700 mb-3 text-lg">
                3. Вопросительные предложения
              </h5>
              <div className="bg-slate-100 rounded-lg p-5 mb-3">
                <p className="text-lg font-bold text-center text-slate-900">
                  Had + subject + been + V3?
                </p>
              </div>
              <div className="space-y-2">
                {[
                  {
                    en: "Had the work been finished before he left?",
                    answer: "Yes, it had. / No, it hadn't.",
                    ru: "Работа была закончена до его ухода?",
                  },
                  {
                    en: "Had the house been built by 2015?",
                    answer: "Yes, it had. / No, it hadn't.",
                    ru: "Дом был построен к 2015 году?",
                  },
                  {
                    en: "What had been done before the meeting?",
                    answer: "The documents had been prepared.",
                    ru: "Что было сделано до встречи?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-zinc-600">
                      <strong>Ответ:</strong> {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Когда используется Past Perfect Passive
          </h4>
          <div className="space-y-3">
            {[
              {
                rule: "1. Действие завершено ДО другого действия в прошлом",
                example:
                  "The report had been written before the meeting started.",
                markers: "before, after, by the time, when",
              },
              {
                rule: "2. Действие завершено К определённому моменту в прошлом",
                example: "By 2020, the project had been completed.",
                markers: "by 2020, by that time, by then",
              },
              {
                rule: "3. Предпрошедшее действие (одно раньше другого)",
                example:
                  "When I arrived, the documents had already been signed.",
                markers: "already, just, never, ever",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-5">
                <h5 className="font-semibold text-green-900 mb-2">
                  {item.rule}
                </h5>
                <p className="text-sm text-zinc-800 mb-2">{item.example}</p>
                <p className="text-xs text-green-600">
                  <strong>Маркеры:</strong> {item.markers}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Past Perfect Passive"
          instruction="Поставьте глагол в скобках в Past Perfect Passive."
          items={exercise3}
        />

        <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
          <h4 className="text-xl font-bold text-purple-900 mb-4">
            Временная линия: Past Perfect Passive
          </h4>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                  1
                </div>
                <p className="text-xs text-zinc-700">
                  The house <strong>had been built</strong>
                </p>
                <p className="text-xs text-green-600 font-semibold">
                  (Past Perfect Passive)
                </p>
              </div>
              <div className="flex-1 h-1 bg-zinc-300 mx-4"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                  2
                </div>
                <p className="text-xs text-zinc-700">
                  We <strong>moved</strong> there
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  (Past Simple)
                </p>
              </div>
              <div className="flex-1 h-1 bg-zinc-300 mx-4"></div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                  NOW
                </div>
                <p className="text-xs text-zinc-700">Сейчас</p>
              </div>
            </div>
            <p className="text-sm text-center text-zinc-700">
              Сначала{" "}
              <span className="text-green-700 font-semibold">
                построили дом
              </span>{" "}
              (Past Perfect), потом{" "}
              <span className="text-blue-700 font-semibold">мы переехали</span>{" "}
              (Past Simple)
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300">
          <h4 className="text-xl font-bold text-red-900 mb-4">
            ⚠️ Типичная ошибка
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-green-700 font-semibold mb-1">
                ✓ The work <strong>had been done</strong> before he came. ✓
              </p>
              <p className="text-xs text-zinc-600">
                (Правильно: had been done)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ The work <strong>was done</strong> before he came. ❌
              </p>
              <p className="text-xs text-zinc-600">
                (Неправильно: нужно Past Perfect, а не Past Simple)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Future Simple Passive ===== */
function Step5() {
  const exercise4: FillItem[] = [
    {
      left: "1. The house",
      right: "(build) next year.",
      answers: ["will be built"],
      explanation: "Future Simple Passive: will be built",
    },
    {
      left: "2. The documents",
      right: "(send) tomorrow.",
      answers: ["will be sent"],
      explanation: "Future Simple Passive: will be sent",
    },
    {
      left: "3. The meeting",
      right: "(not / hold) next week.",
      answers: ["will not be held", "won't be held"],
      explanation: "Отрицание: will not be held",
    },
    {
      left: "4.",
      right: "the work (finish) by Friday?",
      answers: ["Will the work be finished"],
      explanation: "Вопрос: Will the work be finished?",
    },
    {
      left: "5. New employees",
      right: "(hire) next month.",
      answers: ["will be hired"],
      explanation: "Future Simple Passive: will be hired",
    },
  ];

  return (
    <>
      <UiSection title="Future Simple Passive & Going to Passive">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold text-lg">
            Future Simple Passive используется для будущих действий, которые
            произойдут с объектом.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Future Simple Passive
          </h4>
          <div className="bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg p-6 mb-6">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-2">
              will + BE + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Действие произойдёт в будущем
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3 text-lg">
                1. Утвердительные предложения
              </h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The house will be built next year.",
                    ru: "Дом будет построен в следующем году.",
                  },
                  {
                    en: "The documents will be sent tomorrow.",
                    ru: "Документы будут отправлены завтра.",
                  },
                  {
                    en: "A new bridge will be constructed in 2025.",
                    ru: "Новый мост будет построен в 2025 году.",
                  },
                  {
                    en: "The meeting will be held on Monday.",
                    ru: "Встреча будет проведена в понедельник.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-sky-700 mb-3 text-lg">
                2. Отрицательные предложения
              </h5>
              <div className="bg-sky-100 rounded-lg p-5 mb-3">
                <p className="text-lg font-bold text-center text-sky-900">
                  will + NOT + be + V3 = won't be + V3
                </p>
              </div>
              <div className="space-y-2">
                {[
                  {
                    en: "The house will not be built this year.",
                    short: "won't be built",
                    ru: "Дом не будет построен в этом году.",
                  },
                  {
                    en: "The meeting will not be cancelled.",
                    short: "won't be cancelled",
                    ru: "Встреча не будет отменена.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-sky-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-sky-600">
                      Сокращённо: {item.short}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-700 mb-3 text-lg">
                3. Вопросительные предложения
              </h5>
              <div className="bg-slate-100 rounded-lg p-5 mb-3">
                <p className="text-lg font-bold text-center text-slate-900">
                  Will + subject + be + V3?
                </p>
              </div>
              <div className="space-y-2">
                {[
                  {
                    en: "Will the house be built next year?",
                    answer: "Yes, it will. / No, it won't.",
                    ru: "Дом будет построен в следующем году?",
                  },
                  {
                    en: "Will the documents be sent tomorrow?",
                    answer: "Yes, they will. / No, they won't.",
                    ru: "Документы будут отправлены завтра?",
                  },
                  {
                    en: "When will the work be finished?",
                    answer: "It will be finished next week.",
                    ru: "Когда работа будет закончена?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-zinc-600">
                      <strong>Ответ:</strong> {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            GOING TO в Passive Voice
          </h4>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 mb-4">
            <p className="text-3xl font-bold text-center text-green-900 mb-2">
              am / is / are + GOING TO + BE + V3
            </p>
            <p className="text-center text-zinc-700">
              Запланированное действие в будущем
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h5 className="font-semibold text-green-900 mb-3">Примеры:</h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The house is going to be built next month.",
                    ru: "Дом собираются построить в следующем месяце.",
                  },
                  {
                    en: "The documents are going to be sent tomorrow.",
                    ru: "Документы собираются отправить завтра.",
                  },
                  {
                    en: "The project is not going to be cancelled.",
                    ru: "Проект не собираются отменять.",
                  },
                  {
                    en: "Is the meeting going to be held next week?",
                    ru: "Встречу собираются проводить на следующей неделе?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-400">
              <h5 className="font-semibold text-yellow-900 mb-3">
                WILL vs GOING TO в Passive
              </h5>
              <div className="space-y-2">
                <p className="text-sm text-zinc-800">
                  <strong>WILL BE + V3:</strong> решение принято в момент речи,
                  предсказание
                </p>
                <p className="text-sm text-indigo-700">
                  The documents <strong>will be sent</strong> tomorrow. (решили
                  только что)
                </p>
                <p className="text-sm text-zinc-800 mt-3">
                  <strong>GOING TO BE + V3:</strong> запланировано заранее
                </p>
                <p className="text-sm text-green-700">
                  The documents <strong>are going to be sent</strong> tomorrow.
                  (уже запланировано)
                </p>
              </div>
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Future Simple Passive"
          instruction="Поставьте глагол в скобках в Future Simple Passive."
          items={exercise4}
        />

        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Active → Passive (Future)
          </h4>
          <div className="space-y-4">
            {[
              {
                active: "They will build a new school.",
                passive: "A new school will be built.",
              },
              {
                active: "The company is going to launch a new product.",
                passive: "A new product is going to be launched.",
              },
              {
                active: "We will finish the project next month.",
                passive: "The project will be finished next month.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-zinc-800 mb-2">
                  <strong className="text-indigo-700">Active:</strong>{" "}
                  {item.active}
                </p>
                <p className="text-sm text-sky-900 font-semibold">
                  <strong className="text-sky-700">Passive:</strong>{" "}
                  {item.passive}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Modal Verbs in Passive ===== */
function Step6() {
  const exercise5: FillItem[] = [
    {
      left: "1. The work",
      right: "(must / finish) by Friday.",
      answers: ["must be finished"],
      explanation: "Modal Passive: must be finished",
    },
    {
      left: "2. The documents",
      right: "(can / send) by email.",
      answers: ["can be sent"],
      explanation: "Modal Passive: can be sent",
    },
    {
      left: "3. The problem",
      right: "(should / solve) immediately.",
      answers: ["should be solved"],
      explanation: "Modal Passive: should be solved",
    },
    {
      left: "4. The report",
      right: "(may / complete) tomorrow.",
      answers: ["may be completed"],
      explanation: "Modal Passive: may be completed",
    },
    {
      left: "5. English",
      right: "(can / learn) at any age.",
      answers: ["can be learned", "can be learnt"],
      explanation: "Modal Passive: can be learned/learnt",
    },
  ];

  return (
    <>
      <UiSection title="Modal Verbs in Passive Voice">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg">
            Модальные глаголы (can, must, should, may, might, could) в пассивном
            залоге показывают возможность, необходимость или вероятность.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Формула образования
          </h4>
          <div className="bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg p-6 mb-6">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-2">
              MODAL VERB + BE + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Модальный глагол + BE + третья форма
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                modal: "CAN / COULD",
                meaning: "возможность, способность",
                examples: [
                  {
                    en: "The work can be done quickly.",
                    ru: "Работа может быть сделана быстро.",
                  },
                  {
                    en: "This problem could be solved easily.",
                    ru: "Эта проблема могла бы решиться легко.",
                  },
                ],
                color: "indigo",
              },
              {
                modal: "MUST / HAVE TO",
                meaning: "необходимость, обязательность",
                examples: [
                  {
                    en: "The work must be finished by Monday.",
                    ru: "Работа должна быть закончена к понедельнику.",
                  },
                  {
                    en: "The documents have to be signed.",
                    ru: "Документы должны быть подписаны.",
                  },
                ],
                color: "sky",
              },
              {
                modal: "SHOULD / OUGHT TO",
                meaning: "рекомендация, совет",
                examples: [
                  {
                    en: "This book should be read by everyone.",
                    ru: "Эта книга должна быть прочитана всеми.",
                  },
                  {
                    en: "The problem ought to be discussed.",
                    ru: "Проблема должна быть обсуждена.",
                  },
                ],
                color: "green",
              },
              {
                modal: "MAY / MIGHT",
                meaning: "вероятность, разрешение",
                examples: [
                  {
                    en: "The meeting may be postponed.",
                    ru: "Встреча может быть перенесена.",
                  },
                  {
                    en: "The documents might be lost.",
                    ru: "Документы могли быть потеряны.",
                  },
                ],
                color: "purple",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-${item.color}-50 rounded-lg p-5 border-2 border-${item.color}-300`}
              >
                <h5 className={`font-bold text-${item.color}-900 mb-2 text-lg`}>
                  {item.modal}
                </h5>
                <p className="text-sm text-zinc-700 mb-3 italic">
                  {item.meaning}
                </p>
                <div className="space-y-2">
                  {item.examples.map((ex, i) => (
                    <div key={i} className="bg-white rounded p-3">
                      <p className="text-sm font-semibold text-zinc-900 mb-1">
                        {ex.en}
                      </p>
                      <p className="text-sm text-zinc-700">{ex.ru}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            Отрицание и вопросы с модальными глаголами
          </h4>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h5 className="font-semibold text-red-900 mb-3">Отрицание:</h5>
              <div className="bg-red-100 rounded-lg p-4 mb-3">
                <p className="text-lg font-bold text-center text-red-900">
                  MODAL + NOT + be + V3
                </p>
              </div>
              <div className="space-y-2">
                {[
                  "The work must not be delayed. (не должна быть отложена)",
                  "This cannot be done. (не может быть сделано)",
                  "The meeting should not be cancelled. (не должна быть отменена)",
                ].map((ex, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-zinc-800 bg-white rounded p-2"
                  >
                    {ex}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5">
              <h5 className="font-semibold text-blue-900 mb-3">Вопросы:</h5>
              <div className="bg-blue-100 rounded-lg p-4 mb-3">
                <p className="text-lg font-bold text-center text-blue-900">
                  MODAL + subject + be + V3?
                </p>
              </div>
              <div className="space-y-2">
                {[
                  "Can the work be done today? (Работа может быть сделана сегодня?)",
                  "Must the documents be signed? (Документы должны быть подписаны?)",
                  "Should the meeting be postponed? (Встречу следует перенести?)",
                ].map((ex, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-zinc-800 bg-white rounded p-2"
                  >
                    {ex}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Modal Verbs in Passive"
          instruction="Поставьте глагол в скобках в Passive с модальным глаголом."
          items={exercise5}
        />

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-xl font-bold text-green-900 mb-4">
            Реальные примеры использования
          </h4>
          <div className="space-y-3">
            {[
              {
                context: "Правила и инструкции:",
                examples: [
                  "Seatbelts must be worn at all times.",
                  "This medicine should be taken after meals.",
                ],
              },
              {
                context: "Возможности и способности:",
                examples: [
                  "This problem can be solved in different ways.",
                  "English can be learned online.",
                ],
              },
              {
                context: "Рекомендации:",
                examples: [
                  "This film should be seen by everyone.",
                  "The report ought to be checked carefully.",
                ],
              },
              {
                context: "Вероятность:",
                examples: [
                  "The package may be delivered tomorrow.",
                  "The meeting might be cancelled due to bad weather.",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2">
                  {item.context}
                </h5>
                <div className="space-y-1">
                  {item.examples.map((ex, i) => (
                    <p
                      key={i}
                      className="text-sm text-zinc-800 bg-white rounded p-2"
                    >
                      • {ex}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            ⚠️ Важно: BE после модального глагола
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-green-700 font-semibold mb-1">
                ✓ The work <strong>can be done</strong>. ✓
              </p>
              <p className="text-xs text-zinc-600">
                (Правильно: can + BE + done)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ The work <strong>can done</strong>. ❌
              </p>
              <p className="text-xs text-zinc-600">
                (Неправильно: пропущен BE)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ The work <strong>can is done</strong>. ❌
              </p>
              <p className="text-xs text-zinc-600">
                (Неправильно: is вместо be)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Смешанные упражнения ===== */
function Step7() {
  const mixedExercise: FillItem[] = [
    {
      left: "1. The house",
      right: "(build) right now.",
      answers: ["is being built"],
      explanation: "Present Continuous Passive: is being built",
    },
    {
      left: "2. By the time I arrived, the work",
      right: "(already / do).",
      answers: ["had already been done", "had been already done"],
      explanation: "Past Perfect Passive: had been done",
    },
    {
      left: "3. The project",
      right: "(complete) next month.",
      answers: ["will be completed"],
      explanation: "Future Simple Passive: will be completed",
    },
    {
      left: "4. English",
      right: "(speak) in many countries.",
      answers: ["is spoken"],
      explanation: "Present Simple Passive: is spoken",
    },
    {
      left: "5. At 5 PM yesterday, the documents",
      right: "(check).",
      answers: ["were being checked"],
      explanation: "Past Continuous Passive: were being checked",
    },
    {
      left: "6. This book",
      right: "(translate) into 50 languages.",
      answers: ["has been translated"],
      explanation: "Present Perfect Passive: has been translated",
    },
    {
      left: "7. The problem",
      right: "(can / solve) easily.",
      answers: ["can be solved"],
      explanation: "Modal Passive: can be solved",
    },
    {
      left: "8. The report",
      right: "(finish) by Friday.",
      answers: ["must be finished", "should be finished", "will be finished"],
      explanation: "Зависит от контекста: must/should/will be finished",
    },
  ];

  return (
    <>
      <UiSection title="Смешанные упражнения: Все времена Passive Voice">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed">
            Проверьте свои знания всех времён в пассивном залоге!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Определите время и поставьте в Passive"
        instruction="Поставьте глагол в скобках в правильное время Passive Voice."
        items={mixedExercise}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-sky-300 my-6">
        <h4 className="text-xl font-bold text-sky-900 mb-4">
          Упражнение 2: Active → Passive
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          Переведите предложения из Active в Passive Voice:
        </p>
        <div className="space-y-4">
          {[
            {
              active: "They are building a new school.",
              passive: "A new school is being built.",
              tense: "Present Continuous",
            },
            {
              active: "Someone stole my car yesterday.",
              passive: "My car was stolen yesterday.",
              tense: "Past Simple",
            },
            {
              active: "They had finished the work before I arrived.",
              passive: "The work had been finished before I arrived.",
              tense: "Past Perfect",
            },
            {
              active: "We will complete the project next month.",
              passive: "The project will be completed next month.",
              tense: "Future Simple",
            },
            {
              active: "You must submit the report by Friday.",
              passive: "The report must be submitted by Friday.",
              tense: "Modal Verb",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-sky-50 rounded-lg p-4">
              <p className="text-xs text-sky-600 mb-1">
                <strong>{item.tense}</strong>
              </p>
              <p className="text-sm text-zinc-800 mb-2">
                <strong>Active:</strong> {item.active}
              </p>
              <p className="text-sm text-sky-900 font-semibold">
                <strong>Passive:</strong> {item.passive}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Упражнение 3: Исправьте ошибки
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          Найдите и исправьте ошибки в следующих предложениях:
        </p>
        <div className="space-y-4">
          {[
            {
              wrong: "The house is building right now.",
              correct: "The house is being built right now.",
              error: "Пропущено BEING (Present Continuous Passive)",
            },
            {
              wrong: "The work had finished before he came.",
              correct: "The work had been finished before he came.",
              error: "Пропущено BEEN (Past Perfect Passive)",
            },
            {
              wrong: "The documents can sent by email.",
              correct: "The documents can be sent by email.",
              error: "Пропущено BE после CAN (Modal Passive)",
            },
            {
              wrong: "The car was being repair at 5 PM.",
              correct: "The car was being repaired at 5 PM.",
              error: "Неправильная форма глагола: repair → repaired (V3)",
            },
            {
              wrong: "The book has being translated.",
              correct: "The book has been translated.",
              error: "Неправильная форма: being → been (Present Perfect)",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ {item.wrong}
              </p>
              <p className="text-sm text-green-700 font-semibold mb-2">
                ✓ {item.correct}
              </p>
              <p className="text-xs text-zinc-600 italic">{item.error}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
        <h4 className="text-xl font-bold text-green-900 mb-4">
          Упражнение 4: Перевод на английский
        </h4>
        <div className="space-y-4">
          {[
            {
              ru: "Дом строится прямо сейчас.",
              en: "The house is being built right now.",
            },
            {
              ru: "Документы были отправлены вчера.",
              en: "The documents were sent yesterday.",
            },
            {
              ru: "Работа будет закончена завтра.",
              en: "The work will be finished tomorrow.",
            },
            {
              ru: "Эта книга была написана в 1990 году.",
              en: "This book was written in 1990.",
            },
            {
              ru: "Проблема должна быть решена немедленно.",
              en: "The problem must be solved immediately.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4">
              <p className="text-sm text-zinc-800 mb-2">
                <strong>
                  {idx + 1}. {item.ru}
                </strong>
              </p>
              <p className="text-sm text-green-700 font-semibold">{item.en}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Текст для чтения ===== */
function Step8() {
  return (
    <>
      <UiSection title="Чтение: The History of Modern Communication">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте текст об истории современных коммуникаций. Обратите
            внимание на использование Passive Voice во всех временах.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          The History of Modern Communication
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Throughout history, communication methods{" "}
            <strong>have been developed</strong> and improved to connect people
            across great distances. Today, messages <strong>can be sent</strong>{" "}
            instantly around the world, but this wasn't always possible.
          </p>

          <div className="bg-indigo-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              The Telegraph Era (1830s-1900s)
            </h4>
            <p className="mb-3">
              The first practical telegraph system <strong>was invented</strong>{" "}
              by Samuel Morse in the 1830s. By the 1850s, telegraph lines{" "}
              <strong>had been built</strong> across continents, and the first
              transatlantic cable <strong>was laid</strong> in 1866. Messages
              that previously <strong>had been carried</strong> by ships for
              weeks <strong>could now be sent</strong> in minutes.
            </p>
            <p>
              Telegraph operators <strong>were trained</strong> to send and
              receive messages in Morse code. During the late 1800s, thousands
              of messages <strong>were being transmitted</strong> daily across
              the growing network of wires. Important news{" "}
              <strong>was shared</strong> quickly, and businesses{" "}
              <strong>were transformed</strong> by this new technology.
            </p>
          </div>

          <div className="bg-sky-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              The Telephone Revolution (1876-present)
            </h4>
            <p className="mb-3">
              In 1876, the telephone <strong>was invented</strong> by Alexander
              Graham Bell. Unlike the telegraph, voices{" "}
              <strong>could be heard</strong> directly over long distances. By
              the early 1900s, telephone networks{" "}
              <strong>had been established</strong> in major cities around the
              world.
            </p>
            <p className="mb-3">
              Throughout the 20th century, telephone technology{" "}
              <strong>was constantly being improved</strong>. Automatic
              switching systems <strong>were developed</strong>, and by the
              1960s, satellite communications{" "}
              <strong>had been introduced</strong>. Today, billions of phone
              calls <strong>are made</strong> every day, and most of them{" "}
              <strong>are transmitted</strong> digitally rather than through
              traditional copper wires.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              The Internet Age (1960s-present)
            </h4>
            <p className="mb-3">
              The foundations of the Internet <strong>were laid</strong> in the
              1960s when ARPANET <strong>was created</strong> by the US
              Department of Defense. However, the World Wide Web as we know it{" "}
              <strong>was not invented</strong> until 1989 by Tim Berners-Lee.
            </p>
            <p className="mb-3">
              Since then, the Internet <strong>has been transformed</strong>{" "}
              from a tool used by scientists and researchers into a global
              network connecting billions of people. Email{" "}
              <strong>was introduced</strong> in the 1970s and quickly became
              popular. By the 1990s, websites{" "}
              <strong>were being created</strong> at an incredible rate.
            </p>
            <p>
              Today, massive amounts of data{" "}
              <strong>are being transmitted</strong> every second. Social media
              platforms <strong>are used</strong> by billions of people to share
              information. Videos <strong>are uploaded</strong> constantly, and
              news <strong>is shared</strong> instantaneously around the world.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              Mobile Communication (1973-present)
            </h4>
            <p className="mb-3">
              The first mobile phone call <strong>was made</strong> in 1973 by
              Martin Cooper. However, mobile phones didn't become widely
              available until the 1980s and 1990s. Early mobile phones{" "}
              <strong>were considered</strong> luxury items and{" "}
              <strong>could only be afforded</strong> by wealthy people.
            </p>
            <p className="mb-3">
              By the 2000s, mobile technology{" "}
              <strong>had been revolutionized</strong> by smartphones. Today,
              smartphones <strong>are owned</strong> by billions of people
              worldwide. Text messages <strong>are sent</strong> trillions of
              times per year, and video calls <strong>can be made</strong> from
              almost anywhere on Earth.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-yellow-900 mb-3">
              The Future of Communication
            </h4>
            <p className="mb-3">
              Looking ahead, even more advanced communication technologies{" "}
              <strong>will be developed</strong>. 5G networks{" "}
              <strong>are being deployed</strong> around the world right now,
              enabling faster data transmission. Virtual and augmented reality
              systems <strong>are being created</strong> to make communication
              more immersive.
            </p>
            <p>
              In the coming decades, new methods of communication{" "}
              <strong>will be invented</strong> that we can't yet imagine.
              Brain-computer interfaces <strong>are being researched</strong>,
              and quantum communication systems{" "}
              <strong>are being tested</strong>. One thing is certain: the way
              we communicate <strong>will continue to be transformed</strong> by
              technology.
            </p>
          </div>

          <p className="mt-6">
            From the telegraph to smartphones, communication technology{" "}
            <strong>has evolved</strong> dramatically. Each innovation{" "}
            <strong>has been built</strong> on previous discoveries, and each{" "}
            <strong>has changed</strong> how humans interact with each other.
            Today, we live in a world where anyone{" "}
            <strong>can be reached</strong> instantly, and information{" "}
            <strong>can be shared</strong> globally in seconds — something that
            would have seemed impossible just a century ago.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["telegraph", "/ˈtelɪɡrɑːf/", "телеграф"],
            ["transatlantic", "/ˌtrænzətˈlæntɪk/", "трансатлантический"],
            ["transmit", "/trænzˈmɪt/", "передавать, транслировать"],
            ["satellite", "/ˈsætəlaɪt/", "спутник"],
            ["foundation", "/faʊnˈdeɪʃn/", "основа, фундамент"],
            ["deploy", "/dɪˈplɔɪ/", "развёртывать, внедрять"],
            ["immersive", "/ɪˈmɜːsɪv/", "погружающий, захватывающий"],
            ["interface", "/ˈɪntəfeɪs/", "интерфейс"],
            ["quantum", "/ˈkwɒntəm/", "квантовый"],
            ["evolution", "/ˌiːvəˈluːʃn/", "эволюция, развитие"],
            ["innovation", "/ˌɪnəˈveɪʃn/", "инновация, нововведение"],
            ["instantly", "/ˈɪnstəntli/", "мгновенно, немедленно"],
            ["practical", "/ˈpræktɪkl/", "практический, практичный"],
            ["improve", "/ɪmˈpruːv/", "улучшать, совершенствовать"],
            ["constantly", "/ˈkɒnstəntli/", "постоянно, непрерывно"],
            ["incredibly", "/ɪnˈkredəbli/", "невероятно"],
          ].map(([word, transcr, translation]) => (
            <div
              key={word}
              className="bg-white rounded-lg p-3 border-l-4 border-indigo-400"
            >
              <p className="font-bold text-indigo-700">{word}</p>
              <p className="text-xs text-zinc-600">{transcr}</p>
              <p className="text-sm text-zinc-800">{translation}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Задания на текст ===== */
function Step9() {
  const questions = [
    {
      q: "1. When was the telegraph invented?",
      options: ["A. In the 1830s", "B. In the 1850s", "C. In 1866"],
      correct: "A",
      explanation:
        "В тексте: 'The first practical telegraph system was invented by Samuel Morse in the 1830s.'",
    },
    {
      q: "2. When was the first transatlantic cable laid?",
      options: ["A. In the 1830s", "B. In the 1850s", "C. In 1866"],
      correct: "C",
      explanation:
        "В тексте: 'the first transatlantic cable was laid in 1866.'",
    },
    {
      q: "3. Who invented the telephone?",
      options: [
        "A. Samuel Morse",
        "B. Alexander Graham Bell",
        "C. Martin Cooper",
      ],
      correct: "B",
      explanation:
        "В тексте: 'In 1876, the telephone was invented by Alexander Graham Bell.'",
    },
    {
      q: "4. When was the World Wide Web invented?",
      options: ["A. In the 1960s", "B. In the 1970s", "C. In 1989"],
      correct: "C",
      explanation:
        "В тексте: 'the World Wide Web as we know it was not invented until 1989 by Tim Berners-Lee.'",
    },
    {
      q: "5. When was the first mobile phone call made?",
      options: ["A. In 1973", "B. In the 1980s", "C. In the 2000s"],
      correct: "A",
      explanation:
        "В тексте: 'The first mobile phone call was made in 1973 by Martin Cooper.'",
    },
    {
      q: "6. What technology is being deployed around the world right now?",
      options: [
        "A. Telegraph networks",
        "B. 5G networks",
        "C. Satellite phones",
      ],
      correct: "B",
      explanation:
        "В тексте: '5G networks are being deployed around the world right now'.",
    },
    {
      q: "7. When did email become popular?",
      options: [
        "A. In the 1960s",
        "B. In the 1970s and after",
        "C. In the 1990s",
      ],
      correct: "B",
      explanation:
        "В тексте: 'Email was introduced in the 1970s and quickly became popular.'",
    },
    {
      q: "8. What made smartphones revolutionary?",
      options: [
        "A. They were cheap",
        "B. They revolutionized mobile technology in the 2000s",
        "C. They were the first phones",
      ],
      correct: "B",
      explanation:
        "В тексте: 'By the 2000s, mobile technology had been revolutionized by smartphones.'",
    },
  ];

  return (
    <>
      <UiSection title="Задания на понимание текста">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-700 leading-relaxed">
            Проверьте, насколько внимательно вы прочитали текст! Выберите
            правильный ответ.
          </p>
        </div>
      </UiSection>

      <div className="space-y-4">
        {questions.map((item, idx) => (
          <MultipleChoiceQuestion
            key={idx}
            question={item.q}
            options={item.options}
            correctAnswer={item.correct}
            explanation={item.explanation}
          />
        ))}
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Упражнения на Present Continuous Passive ===== */
function Step10() {
  const exercise10: FillItem[] = [
    {
      left: "1. Look! The bridge",
      right: "(repair) right now.",
      answers: ["is being repaired"],
      explanation: "Present Continuous Passive: is being repaired",
    },
    {
      left: "2. The flowers",
      right: "(water) at the moment.",
      answers: ["are being watered"],
      explanation: "Present Continuous Passive: are being watered (мн. число)",
    },
    {
      left: "3. A new hospital",
      right: "(build) in our city.",
      answers: ["is being built"],
      explanation: "Present Continuous Passive: is being built",
    },
    {
      left: "4. The windows",
      right: "(not / clean) right now.",
      answers: ["are not being cleaned", "aren't being cleaned"],
      explanation: "Отрицание Present Continuous Passive",
    },
    {
      left: "5. Why",
      right: "the meeting (hold) in this room?",
      answers: ["is the meeting being held"],
      explanation: "Вопрос: Why is the meeting being held?",
    },
    {
      left: "6. New software",
      right: "(install) on all computers this week.",
      answers: ["is being installed"],
      explanation: "Present Continuous Passive: is being installed",
    },
    {
      left: "7. The letter",
      right: "(write) by my colleague now.",
      answers: ["is being written"],
      explanation: "Present Continuous Passive: is being written",
    },
    {
      left: "8.",
      right: "the cars (wash) in the garage?",
      answers: ["Are the cars being washed"],
      explanation: "Вопрос: Are the cars being washed?",
    },
    {
      left: "9. The problem",
      right: "(discuss) at the moment.",
      answers: ["is being discussed"],
      explanation: "Present Continuous Passive: is being discussed",
    },
    {
      left: "10. Several new houses",
      right: "(construct) in this area.",
      answers: ["are being constructed"],
      explanation: "Present Continuous Passive: are being constructed",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения: Present Continuous Passive">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Поставьте глаголы в Present Continuous Passive (am/is/are being +
            V3)
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Present Continuous Passive"
        instruction="Вставьте глагол в правильной форме Present Continuous Passive."
        items={exercise10}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mt-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          📌 Напоминание: Формула
        </h4>
        <div className="bg-indigo-100 rounded-lg p-5">
          <p className="text-2xl font-bold text-center text-indigo-900 mb-2">
            am / is / are + BEING + V3
          </p>
          <p className="text-center text-zinc-700">Не забывайте про BEING!</p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 11: Упражнения на Past Continuous Passive ===== */
function Step11() {
  const exercise11: FillItem[] = [
    {
      left: "1. At 5 PM yesterday, the documents",
      right: "(check).",
      answers: ["were being checked"],
      explanation: "Past Continuous Passive: were being checked",
    },
    {
      left: "2. When I arrived, the room",
      right: "(clean).",
      answers: ["was being cleaned"],
      explanation: "Past Continuous Passive: was being cleaned",
    },
    {
      left: "3. The dinner",
      right: "(cook) when the guests arrived.",
      answers: ["was being cooked"],
      explanation: "Past Continuous Passive: was being cooked",
    },
    {
      left: "4. At 8 AM, the streets",
      right: "(sweep).",
      answers: ["were being swept"],
      explanation: "Past Continuous Passive: were being swept",
    },
    {
      left: "5. The patient",
      right: "(examine) when the doctor came in.",
      answers: ["was being examined"],
      explanation: "Past Continuous Passive: was being examined",
    },
    {
      left: "6. The cars",
      right: "(repair) all day yesterday.",
      answers: ["were being repaired"],
      explanation: "Past Continuous Passive: were being repaired",
    },
    {
      left: "7. A new bridge",
      right: "(build) when I visited the city last year.",
      answers: ["was being built"],
      explanation: "Past Continuous Passive: was being built",
    },
    {
      left: "8. The emails",
      right: "(send) when the system crashed.",
      answers: ["were being sent"],
      explanation: "Past Continuous Passive: were being sent",
    },
    {
      left: "9. The presentation",
      right: "(prepare) at that moment.",
      answers: ["was being prepared"],
      explanation: "Past Continuous Passive: was being prepared",
    },
    {
      left: "10. The projects",
      right: "(review) when the boss called.",
      answers: ["were being reviewed"],
      explanation: "Past Continuous Passive: were being reviewed",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения: Past Continuous Passive">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Поставьте глаголы в Past Continuous Passive (was/were being + V3)
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Past Continuous Passive"
        instruction="Вставьте глагол в правильной форме Past Continuous Passive."
        items={exercise11}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mt-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          📌 Напоминание: Формула
        </h4>
        <div className="bg-indigo-100 rounded-lg p-5">
          <p className="text-2xl font-bold text-center text-indigo-900 mb-2">
            was / were + BEING + V3
          </p>
          <p className="text-center text-zinc-700">
            Действие происходило в определённый момент в прошлом
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 12: Упражнения на Present Perfect Passive ===== */
function Step12() {
  const exercise12: FillItem[] = [
    {
      left: "1. The work",
      right: "(finish) successfully.",
      answers: ["has been finished"],
      explanation: "Present Perfect Passive: has been finished",
    },
    {
      left: "2. These books",
      right: "(already / read) by millions of people.",
      answers: ["have already been read", "have been already read"],
      explanation: "Present Perfect Passive: have been read",
    },
    {
      left: "3. The email",
      right: "(not / send) yet.",
      answers: ["has not been sent", "hasn't been sent"],
      explanation: "Отрицание Present Perfect Passive с yet",
    },
    {
      left: "4.",
      right: "the documents (sign)?",
      answers: ["Have the documents been signed"],
      explanation: "Вопрос: Have the documents been signed?",
    },
    {
      left: "5. This film",
      right: "(see) by millions of viewers.",
      answers: ["has been seen"],
      explanation: "Present Perfect Passive: has been seen",
    },
    {
      left: "6. The house",
      right: "(just / sell).",
      answers: ["has just been sold"],
      explanation: "Present Perfect Passive с just",
    },
    {
      left: "7. Many articles",
      right: "(write) about this topic.",
      answers: ["have been written"],
      explanation: "Present Perfect Passive: have been written",
    },
    {
      left: "8. The problem",
      right: "(solve) by our team.",
      answers: ["has been solved"],
      explanation: "Present Perfect Passive: has been solved",
    },
    {
      left: "9. All the invitations",
      right: "(send).",
      answers: ["have been sent"],
      explanation: "Present Perfect Passive: have been sent",
    },
    {
      left: "10. This song",
      right: "(never / perform) live before.",
      answers: ["has never been performed"],
      explanation: "Present Perfect Passive с never",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения: Present Perfect Passive">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6 border-2 border-green-300">
          <p className="text-green-900 leading-relaxed font-semibold">
            Поставьте глаголы в Present Perfect Passive (have/has been + V3)
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Present Perfect Passive"
        instruction="Вставьте глагол в правильной форме Present Perfect Passive."
        items={exercise12}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-green-300 mt-6">
        <h4 className="text-xl font-bold text-green-900 mb-4">
          📌 Напоминание: Формула
        </h4>
        <div className="bg-green-100 rounded-lg p-5">
          <p className="text-2xl font-bold text-center text-green-900 mb-2">
            have / has + BEEN + V3
          </p>
          <p className="text-center text-zinc-700">
            Результат действия важен сейчас
          </p>
          <p className="text-center text-zinc-600 text-sm mt-2">
            Маркеры: just, already, yet, never, ever, recently
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 13: Упражнения на Past Perfect & Future Passive ===== */
function Step13() {
  const exercise13: FillItem[] = [
    {
      left: "1. By the time I arrived, the movie",
      right: "(start).",
      answers: ["had been started"],
      explanation: "Past Perfect Passive: had been started",
    },
    {
      left: "2. The report",
      right: "(complete) before the deadline.",
      answers: ["had been completed"],
      explanation: "Past Perfect Passive: had been completed",
    },
    {
      left: "3. The new building",
      right: "(open) next month.",
      answers: ["will be opened"],
      explanation: "Future Simple Passive: will be opened",
    },
    {
      left: "4. All the tickets",
      right: "(sell) before we arrived.",
      answers: ["had been sold"],
      explanation: "Past Perfect Passive: had been sold",
    },
    {
      left: "5. The project",
      right: "(finish) by next Friday.",
      answers: ["will be finished"],
      explanation: "Future Simple Passive: will be finished",
    },
    {
      left: "6. The email",
      right: "(send) before the meeting started.",
      answers: ["had been sent"],
      explanation: "Past Perfect Passive: had been sent",
    },
    {
      left: "7. New employees",
      right: "(hire) next year.",
      answers: ["will be hired"],
      explanation: "Future Simple Passive: will be hired",
    },
    {
      left: "8. By 2020, the bridge",
      right: "(construct).",
      answers: ["had been constructed"],
      explanation: "Past Perfect Passive: had been constructed",
    },
    {
      left: "9. The results",
      right: "(announce) tomorrow.",
      answers: ["will be announced"],
      explanation: "Future Simple Passive: will be announced",
    },
    {
      left: "10. The work",
      right: "(do) before he left.",
      answers: ["had been done"],
      explanation: "Past Perfect Passive: had been done",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения: Past Perfect & Future Simple Passive">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 border-2 border-blue-300">
          <p className="text-blue-900 leading-relaxed font-semibold">
            Поставьте глаголы в Past Perfect Passive (had been + V3) или Future
            Simple Passive (will be + V3)
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Past Perfect & Future Simple Passive"
        instruction="Вставьте глагол в правильной форме (Past Perfect или Future Simple Passive)."
        items={exercise13}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-blue-300 mt-6">
        <h4 className="text-xl font-bold text-blue-900 mb-4">
          📌 Напоминание: Формулы
        </h4>
        <div className="space-y-3">
          <div className="bg-blue-100 rounded-lg p-4">
            <p className="text-lg font-bold text-center text-blue-900 mb-1">
              Past Perfect: had + BEEN + V3
            </p>
            <p className="text-center text-zinc-700 text-sm">
              До другого действия в прошлом
            </p>
          </div>
          <div className="bg-cyan-100 rounded-lg p-4">
            <p className="text-lg font-bold text-center text-cyan-900 mb-1">
              Future Simple: will + BE + V3
            </p>
            <p className="text-center text-zinc-700 text-sm">
              Действие произойдёт в будущем
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 14: Упражнения на Modal Verbs in Passive ===== */
function Step14() {
  const exercise14: FillItem[] = [
    {
      left: "1. This work",
      right: "(must / finish) by tomorrow.",
      answers: ["must be finished"],
      explanation: "Modal Passive: must be finished",
    },
    {
      left: "2. The documents",
      right: "(can / send) by email.",
      answers: ["can be sent"],
      explanation: "Modal Passive: can be sent",
    },
    {
      left: "3. English",
      right: "(should / learn) from childhood.",
      answers: ["should be learned", "should be learnt"],
      explanation: "Modal Passive: should be learned/learnt",
    },
    {
      left: "4. The meeting",
      right: "(may / postpone).",
      answers: ["may be postponed"],
      explanation: "Modal Passive: may be postponed",
    },
    {
      left: "5. This problem",
      right: "(could / solve) easily.",
      answers: ["could be solved"],
      explanation: "Modal Passive: could be solved",
    },
    {
      left: "6. All the rules",
      right: "(must / follow).",
      answers: ["must be followed"],
      explanation: "Modal Passive: must be followed",
    },
    {
      left: "7. The medicine",
      right: "(should / take) after meals.",
      answers: ["should be taken"],
      explanation: "Modal Passive: should be taken",
    },
    {
      left: "8. The package",
      right: "(might / deliver) tomorrow.",
      answers: ["might be delivered"],
      explanation: "Modal Passive: might be delivered",
    },
    {
      left: "9. This book",
      right: "(can / read) online.",
      answers: ["can be read"],
      explanation: "Modal Passive: can be read",
    },
    {
      left: "10. The report",
      right: "(ought to / check) carefully.",
      answers: ["ought to be checked"],
      explanation: "Modal Passive: ought to be checked",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения: Modal Verbs in Passive Voice">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-purple-300">
          <p className="text-purple-900 leading-relaxed font-semibold">
            Поставьте глаголы в Passive Voice с модальными глаголами (modal + be
            + V3)
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Modal Verbs in Passive"
        instruction="Вставьте глагол в правильной форме с модальным глаголом."
        items={exercise14}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-purple-300 mt-6">
        <h4 className="text-xl font-bold text-purple-900 mb-4">
          📌 Напоминание: Формула
        </h4>
        <div className="bg-purple-100 rounded-lg p-5">
          <p className="text-2xl font-bold text-center text-purple-900 mb-2">
            MODAL + BE + V3
          </p>
          <p className="text-center text-zinc-700 mb-3">
            Модальный глагол + BE + третья форма
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm">
            <div className="bg-white rounded p-2">can be</div>
            <div className="bg-white rounded p-2">must be</div>
            <div className="bg-white rounded p-2">should be</div>
            <div className="bg-white rounded p-2">may be</div>
            <div className="bg-white rounded p-2">might be</div>
            <div className="bg-white rounded p-2">could be</div>
            <div className="bg-white rounded p-2">would be</div>
            <div className="bg-white rounded p-2">ought to be</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 15: Смешанные упражнения на все времена ===== */
function Step15() {
  const exercise15: FillItem[] = [
    {
      left: "1. The letter",
      right: "(write) right now.",
      answers: ["is being written"],
      explanation: "Present Continuous Passive (right now)",
    },
    {
      left: "2. This novel",
      right: "(translate) into 30 languages.",
      answers: ["has been translated"],
      explanation: "Present Perfect Passive (результат)",
    },
    {
      left: "3. When I came, the dinner",
      right: "(cook).",
      answers: ["was being cooked"],
      explanation: "Past Continuous Passive (в определённый момент)",
    },
    {
      left: "4. The new school",
      right: "(open) next September.",
      answers: ["will be opened"],
      explanation: "Future Simple Passive (next September)",
    },
    {
      left: "5. By the time we arrived, all the food",
      right: "(eat).",
      answers: ["had been eaten"],
      explanation: "Past Perfect Passive (до другого действия)",
    },
    {
      left: "6. These documents",
      right: "(must / sign) immediately.",
      answers: ["must be signed"],
      explanation: "Modal Passive (must be)",
    },
    {
      left: "7. The house",
      right: "(paint) at the moment.",
      answers: ["is being painted"],
      explanation: "Present Continuous Passive (at the moment)",
    },
    {
      left: "8. The project",
      right: "(complete) before the deadline.",
      answers: ["had been completed"],
      explanation: "Past Perfect Passive (before the deadline в прошлом)",
    },
    {
      left: "9. New roads",
      right: "(build) in our city every year.",
      answers: ["are built"],
      explanation: "Present Simple Passive (every year)",
    },
    {
      left: "10. The problem",
      right: "(can / solve) in different ways.",
      answers: ["can be solved"],
      explanation: "Modal Passive (can be)",
    },
    {
      left: "11. At 6 PM yesterday, the documents",
      right: "(print).",
      answers: ["were being printed"],
      explanation: "Past Continuous Passive (в конкретное время)",
    },
    {
      left: "12. The work",
      right: "(just / finish).",
      answers: ["has just been finished"],
      explanation: "Present Perfect Passive (just)",
    },
    {
      left: "13. A new bridge",
      right: "(construct) next year.",
      answers: ["will be constructed"],
      explanation: "Future Simple Passive (next year)",
    },
    {
      left: "14. The email",
      right: "(already / send) when she called.",
      answers: ["had already been sent", "had been already sent"],
      explanation: "Past Perfect Passive (до момента когда позвонила)",
    },
    {
      left: "15. This information",
      right: "(should / check) carefully.",
      answers: ["should be checked"],
      explanation: "Modal Passive (should be)",
    },
  ];

  return (
    <>
      <UiSection title="Итоговые упражнения: Все времена Passive Voice">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Финальная практика!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Определите правильное время и поставьте глагол в нужную форму
                Passive Voice.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Итоговое упражнение: Все времена Passive Voice"
        instruction="Определите время по контексту и вставьте глагол в правильной форме Passive Voice."
        items={exercise15}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mt-6 mb-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Сводная таблица: Все времена Passive Voice
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Время
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Формула
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3">
                  Present Simple
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  am/is/are + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">is cleaned</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3">Past Simple</td>
                <td className="border-2 border-indigo-200 p-3">
                  was/were + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">was cleaned</td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3">
                  Present Continuous
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  am/is/are being + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  is being cleaned
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3">
                  Past Continuous
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  was/were being + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  was being cleaned
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3">
                  Present Perfect
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  have/has been + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  has been cleaned
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3">Past Perfect</td>
                <td className="border-2 border-indigo-200 p-3">
                  had been + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  had been cleaned
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3">
                  Future Simple
                </td>
                <td className="border-2 border-indigo-200 p-3">will be + V3</td>
                <td className="border-2 border-indigo-200 p-3">
                  will be cleaned
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3">Modal Verbs</td>
                <td className="border-2 border-indigo-200 p-3">
                  modal + be + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  can be cleaned
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-300 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800 leading-relaxed">
            Вы успешно завершили изучение всех времён Passive Voice! Вы
            практиковали Present, Past, Future времена в Simple, Continuous и
            Perfect формах, а также модальные глаголы в пассивном залоге. Это
            одна из самых важных и сложных грамматических тем. Продолжайте
            использовать пассивный залог в своей речи и письме!
          </p>
        </div>
      </div>
    </>
  );
}
