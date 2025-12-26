"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function MixedTenses2({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== ШАГ 1: Обзор прошедших времён ===== */
function Step1() {
  return (
    <>
      <UiSection title="⏪ Mixed Tenses Review 2 — Повторение прошедших времён">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Акцент на Past Perfect и связанные прошедшие времена
          </p>
          <p className="text-zinc-700 mb-2">
            В этом уроке мы повторим и сравним <strong>Past Perfect</strong> с
            другими прошедшими временами, научимся правильно показывать
            последовательность событий в прошлом.
          </p>
        </div>
      </UiSection>

      <UiSection title="📊 Прошедшие времена">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-indigo-100 to-sky-100 rounded-lg p-6 border-2 border-indigo-300">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              🕰️ Past Perfect
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">had + V3</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Действие ДО другого в прошлом
              </p>
              <div className="bg-indigo-50 rounded p-2">
                <p className="text-sm">
                  When I arrived, she <strong>had left</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Когда я пришёл, она (уже) ушла.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-900 mb-3">
              📅 Past Simple
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">V2 / did + V1</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Просто факт в прошлом
              </p>
              <div className="bg-blue-50 rounded p-2">
                <p className="text-sm">
                  She <strong>left</strong> yesterday.
                </p>
                <p className="text-xs text-zinc-600">Она ушла вчера.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              ⏱️ Past Continuous
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">was/were + V-ing</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Процесс в прошлом (фон)
              </p>
              <div className="bg-purple-50 rounded p-2">
                <p className="text-sm">
                  I <strong>was studying</strong> when she called.
                </p>
                <p className="text-xs text-zinc-600">
                  Я учился, когда она позвонила.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg p-6 border-2 border-sky-300">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              ✅ Present Perfect
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">have/has + V3</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Связь прошлого с настоящим
              </p>
              <div className="bg-sky-50 rounded p-2">
                <p className="text-sm">
                  I <strong>have finished</strong> my work.
                </p>
                <p className="text-xs text-zinc-600">
                  Я закончил работу (результат сейчас).
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔄 Временная линия">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-lg font-bold text-indigo-900 mb-4">
            Последовательность событий в прошлом:
          </h4>
          <div className="flex items-center justify-between mb-4">
            <div className="text-center flex-1">
              <div className="text-4xl mb-2">1️⃣</div>
              <p className="font-bold text-indigo-900">Past Perfect</p>
              <p className="text-sm text-zinc-600">had done</p>
              <p className="text-xs text-indigo-700 mt-1">(Раньше)</p>
            </div>
            <div className="text-4xl mx-4">→</div>
            <div className="text-center flex-1">
              <div className="text-4xl mb-2">2️⃣</div>
              <p className="font-bold text-blue-900">Past Simple</p>
              <p className="text-sm text-zinc-600">did</p>
              <p className="text-xs text-blue-700 mt-1">(Позже)</p>
            </div>
            <div className="text-4xl mx-4">→</div>
            <div className="text-center flex-1">
              <div className="text-4xl mb-2">✅</div>
              <p className="font-bold text-green-900">Now</p>
              <p className="text-sm text-zinc-600">Настоящее</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-center text-sm mb-2">
              <span className="text-indigo-700 font-bold">
                She had already left
              </span>{" "}
              (1) when{" "}
              <span className="text-blue-700 font-bold">I arrived</span> (2).
            </p>
            <p className="text-center text-xs text-zinc-600">
              Она уже ушла, когда я пришёл.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Цель урока">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-semibold text-amber-900">
                  Понять различия между Past Perfect и другими прошедшими
                  временами
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-semibold text-orange-900">
                  Научиться показывать последовательность событий
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-semibold text-amber-900">
                  Практиковать выбор правильного времени в контексте
                </p>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 2: Past Perfect vs Past Simple ===== */
function Step2() {
  return (
    <>
      <UiSection title="⚖️ Past Perfect vs Past Simple">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Главное различие: ПОСЛЕДОВАТЕЛЬНОСТЬ vs ПРОСТОЙ ФАКТ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                Past Perfect
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Показываем, что действие было <strong>РАНЬШЕ</strong> другого
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    When I got home, she <strong>had cooked</strong> dinner.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Когда я пришёл домой, она (уже) приготовила ужин.
                  </p>
                  <p className="text-xs text-indigo-700 mt-1">
                    💡 Она готовила ДО моего прихода
                  </p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    The movie <strong>had started</strong> before we arrived.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Фильм начался до того, как мы пришли.
                  </p>
                  <p className="text-xs text-indigo-700 mt-1">
                    💡 Фильм начался РАНЬШЕ нашего прихода
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                Past Simple
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Просто факт или последовательность (одно за другим)
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    When I got home, she <strong>cooked</strong> dinner.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Когда я пришёл домой, она приготовила ужин.
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    💡 Она начала готовить ПОСЛЕ моего прихода
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    The movie <strong>started</strong> and we sat down.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Фильм начался, и мы сели.
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    💡 Два последовательных действия
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔑 Ключевые маркеры">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3">Past Perfect:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "before",
                "after",
                "by the time",
                "already",
                "just",
                "never",
              ].map((word, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 mb-3">Past Simple:</h4>
            <div className="flex flex-wrap gap-2">
              {["yesterday", "last week", "ago", "in 2020", "when", "then"].map(
                (word, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm"
                  >
                    {word}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Выберите Past Perfect или Past Simple"
          instruction="Вставьте форму глагола в скобках."
          items={[
            {
              left: "1. By the time I woke up, she",
              answers: ["had left"],
              right: ". (leave)",
              explanation: "by the time → действие произошло раньше.",
            },
            {
              left: "2. I",
              answers: ["saw"],
              right: "him yesterday. (see)",
              explanation: "yesterday = простой факт → Past Simple.",
            },
            {
              left: "3. After she",
              answers: ["had finished"],
              right: "her work, she went home. (finish)",
              explanation:
                "after + завершение до другого действия → Past Perfect.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 3: Past Perfect vs Past Continuous ===== */
function Step3() {
  return (
    <>
      <UiSection title="⚖️ Past Perfect vs Past Continuous">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Главное различие: РАНЬШЕ vs ФОН
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                Past Perfect
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Завершённое действие ДО другого момента
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I <strong>had finished</strong> my homework when she came.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я закончил домашнюю работу, когда она пришла.
                  </p>
                  <p className="text-xs text-indigo-700 mt-1">
                    💡 Работа была ЗАВЕРШЕНА до её прихода
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                Past Continuous
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Процесс в прошлом (фон для другого действия)
              </p>
              <div className="space-y-3">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I <strong>was doing</strong> my homework when she came.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я делал домашнюю работу, когда она пришла.
                  </p>
                  <p className="text-xs text-purple-700 mt-1">
                    💡 Я был В ПРОЦЕССЕ, когда она пришла
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Схема использования">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mb-6">
          <h4 className="font-bold text-indigo-900 mb-4">
            Комбинация Past Continuous + Past Simple:
          </h4>
          <div className="bg-purple-50 rounded-lg p-4 mb-4">
            <p className="text-center font-mono mb-2">
              was/were + V-ing (ФОН) <span className="text-blue-700">+</span>{" "}
              when + V2 (СОБЫТИЕ)
            </p>
            <p className="text-sm text-center text-zinc-700">
              I <strong className="text-purple-700">was reading</strong> when he{" "}
              <strong className="text-blue-700">called</strong>.
            </p>
          </div>

          <h4 className="font-bold text-indigo-900 mb-4 mt-6">
            Комбинация Past Perfect + Past Simple:
          </h4>
          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-center font-mono mb-2">
              had + V3 (РАНЬШЕ) <span className="text-blue-700">+</span> when +
              V2 (ПОЗЖЕ)
            </p>
            <p className="text-sm text-center text-zinc-700">
              She <strong className="text-indigo-700">had left</strong> when I{" "}
              <strong className="text-blue-700">arrived</strong>.
            </p>
          </div>
        </div>

        <CheckableExercise
          title="Past Perfect или Past Continuous?"
          instruction="Вставьте нужную форму (was/were + V-ing или had + V3)."
          items={[
            {
              left: "1. When the phone rang, I",
              answers: ["was taking"],
              right: "a shower. (take)",
              explanation: "Фон в момент звонка → Past Continuous.",
            },
            {
              left: "2. When I called him, he",
              answers: ["had already left", "'d already left"],
              right: ". (already/leave)",
              explanation: "already + до звонка → Past Perfect.",
            },
            {
              left: "3. She",
              answers: ["was cooking"],
              right: "dinner when the guests arrived. (cook)",
              explanation: "Процесс в момент прихода → Past Continuous.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 4: Past Perfect vs Present Perfect ===== */
function Step4() {
  return (
    <>
      <UiSection title="⚖️ Past Perfect vs Present Perfect">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Главное различие: ПРОШЛОЕ vs НАСТОЯЩЕЕ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                Past Perfect
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Действие к моменту <strong>В ПРОШЛОМ</strong>
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    By 2020, I <strong>had graduated</strong> from university.
                  </p>
                  <p className="text-xs text-zinc-600">
                    К 2020 году я окончил университет.
                  </p>
                  <p className="text-xs text-indigo-700 mt-1">
                    💡 К моменту В ПРОШЛОМ (2020)
                  </p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    She <strong>had never been</strong> to Paris before 2019.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она никогда не была в Париже до 2019.
                  </p>
                  <p className="text-xs text-indigo-700 mt-1">
                    💡 До момента В ПРОШЛОМ (2019)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-sky-900 mb-3">
                Present Perfect
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Действие связано с <strong>НАСТОЯЩИМ</strong>
              </p>
              <div className="space-y-3">
                <div className="bg-sky-50 border-l-4 border-sky-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I <strong>have graduated</strong> from university.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я окончил университет (результат сейчас).
                  </p>
                  <p className="text-xs text-sky-700 mt-1">
                    💡 Связь с НАСТОЯЩИМ (я выпускник)
                  </p>
                </div>
                <div className="bg-sky-50 border-l-4 border-sky-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    She <strong>has never been</strong> to Paris.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она никогда не была в Париже (до сих пор).
                  </p>
                  <p className="text-xs text-sky-700 mt-1">
                    💡 Опыт до НАСТОЯЩЕГО момента
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔑 Как выбрать?">
        <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300 mb-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">
                Past Perfect → Если есть конкретный момент В ПРОШЛОМ:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• by 2020, by yesterday, before she came</li>
                <li>• Часто используется с Past Simple в одном предложении</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-sky-900 mb-2">
                Present Perfect → Если связь с НАСТОЯЩИМ:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• ever, never, yet, already, just (без точной даты)</li>
                <li>• Результат важен СЕЙЧАС</li>
              </ul>
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Past Perfect или Present Perfect?"
          instruction="Подставьте правильную форму глагола."
          items={[
            {
              left: "1. I",
              answers: ["had never seen"],
              right: "such a beautiful sunset before yesterday. (never/see)",
              explanation:
                "before + конкретный момент в прошлом → Past Perfect.",
            },
            {
              left: "2. I",
              answers: ["have never seen"],
              right: "such a beautiful sunset. (never/see)",
              explanation: "Опыт до настоящего момента → Present Perfect.",
            },
            {
              left: "3. By the time I was 20, I",
              answers: ["had visited", "'d visited"],
              right: "10 countries. (visit)",
              explanation: "by the time + прошедший возраст → Past Perfect.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 5: Контекстные упражнения 1 ===== */
function Step5() {
  const fillItems1: FillItem[] = [
    {
      left: "When I arrived, the train",
      answers: ["had already left", "'d already left"],
      right: ". (already/leave)",
      explanation: "Поезд уехал ДО моего прихода → Past Perfect",
    },
    {
      left: "She",
      answers: ["was reading"],
      right: "when the phone rang. (read)",
      explanation: "Процесс в момент звонка (фон) → Past Continuous",
    },
    {
      left: "I",
      answers: ["saw"],
      right: "him yesterday. (see)",
      explanation: "'yesterday' = конкретное время → Past Simple",
    },
    {
      left: "By 2020, they",
      answers: ["had lived", "'d lived"],
      right: "there for 10 years. (live)",
      explanation: "'By 2020' = к моменту в прошлом → Past Perfect",
    },
    {
      left: "I",
      answers: ["have never been", "'ve never been"],
      right: "to Japan. (never/be)",
      explanation: "Опыт до настоящего момента → Present Perfect",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Выберите правильное время">
        <div className="bg-indigo-50 rounded-lg p-5 mb-6 border-2 border-indigo-300">
          <p className="font-bold text-indigo-900 mb-2">
            💡 Подсказки для выбора:
          </p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • <strong>before/by the time + прошлое</strong> → Past Perfect
            </li>
            <li>
              • <strong>was/were + V-ing when</strong> → Past Continuous + Past
              Simple
            </li>
            <li>
              • <strong>yesterday/ago/last week</strong> → Past Simple
            </li>
            <li>
              • <strong>ever/never (до сих пор)</strong> → Present Perfect
            </li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение: Past Tenses"
          instruction="Поставьте глагол в скобках в правильное время:"
          items={fillItems1}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 6: Контекстные упражнения 2 ===== */
function Step6() {
  return (
    <>
      <UiSection title="🔄 Практика: определите время по контексту">
        <CheckableExercise
          title="Смешанные времена"
          instruction="Вставьте правильную форму глагола."
          items={[
            {
              left: "1. The house was empty. Everyone",
              answers: ["had gone"],
              right: "home. (go)",
              explanation: "Дом пуст после того, как все ушли → Past Perfect.",
            },
            {
              left: "2. I'm sorry I'm late. I",
              answers: ["was stuck"],
              right: "in traffic. (stick)",
              explanation: "Процесс в прошлом → Past Continuous.",
            },
            {
              left: "3. Look at this mess! What",
              answers: ["has happened"],
              right: "here? (happen)",
              explanation: "Результат заметен сейчас → Present Perfect.",
            },
            {
              left: "4. I met John at the party. I",
              answers: ["had never met"],
              right: "him before that. (never/meet)",
              explanation: "До встречи → Past Perfect.",
            },
            {
              left: "5. The phone rang while I",
              answers: ["was taking"],
              right: "a shower. (take)",
              explanation: "while + процесс → Past Continuous.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 7: Типичные ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки с Past Perfect">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300">
            <h4 className="text-lg font-bold text-red-900 mb-4">
              ❌ Ошибка 1: Используют Past Perfect без причины
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  I <strong>had seen</strong> him yesterday.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (нет другого действия в прошлом)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  I <strong>saw</strong> him yesterday.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (просто факт → Past Simple)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300">
            <h4 className="text-lg font-bold text-orange-900 mb-4">
              ❌ Ошибка 2: Путают Past Perfect и Present Perfect
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  I <strong>have finished</strong> my work before she came.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (нужно Past Perfect для момента в прошлом!)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  I <strong>had finished</strong> my work before she came.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (к моменту в прошлом)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
            <h4 className="text-lg font-bold text-purple-900 mb-4">
              ❌ Ошибка 3: Используют Past Perfect вместо Past Continuous
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  She <strong>had cooked</strong> when I arrived.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (звучит так, будто она УЖЕ закончила)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">
                  ✅ Правильно (если процесс):
                </p>
                <p className="text-sm">
                  She <strong>was cooking</strong> when I arrived.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (она была в процессе готовки)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="text-lg font-bold text-blue-900 mb-4">
              ❌ Ошибка 4: Используют два Past Perfect подряд
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  After she <strong>had left</strong>, I{" "}
                  <strong>had gone</strong> home.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (второе действие в Past Simple!)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  After she <strong>had left</strong>, I <strong>went</strong>{" "}
                  home.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (Past Perfect + Past Simple)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 8: Практика со сложными случаями ===== */
function Step8() {
  const fillItems: FillItem[] = [
    {
      left: "When I got to the station, my train",
      answers: ["had left", "'d left"],
      right: ". (leave)",
      explanation: "Поезд уехал ДО того, как я добрался → Past Perfect",
    },
    {
      left: "While I",
      answers: ["was walking"],
      right: "home, it started to rain. (walk)",
      explanation: "'while' = фон для другого действия → Past Continuous",
    },
    {
      left: "I",
      answers: ["have never tried", "'ve never tried"],
      right: "sushi. (never/try)",
      explanation:
        "Опыт до настоящего момента (нет конкретной даты) → Present Perfect",
    },
    {
      left: "She",
      answers: ["had already gone", "'d already gone"],
      right: "to bed when I called her last night. (already/go)",
      explanation: "Она легла спать ДО моего звонка → Past Perfect",
    },
    {
      left: "We",
      answers: ["moved"],
      right: "to this city in 2015. (move)",
      explanation: "'in 2015' = конкретная дата → Past Simple",
    },
  ];

  return (
    <>
      <UiSection title="💪 Сложные случаи">
        <div className="bg-amber-50 rounded-lg p-5 mb-6 border-2 border-amber-300">
          <p className="font-bold text-amber-900 mb-3">💡 Обратите внимание:</p>
          <ul className="text-sm text-zinc-700 space-y-2">
            <li>
              • Past Perfect используется ТОЛЬКО когда есть другое действие в
              прошлом
            </li>
            <li>• While + Past Continuous = фон для другого действия</li>
            <li>• Present Perfect для опыта (без конкретной даты в прошлом)</li>
            <li>• Past Simple для конкретных дат/моментов</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение: Сложные случаи"
          instruction="Поставьте глагол в скобках в правильное время:"
          items={fillItems}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 9: Итоговая практика ===== */
function Step9() {
  return (
    <>
      <UiSection title="🎯 Итоговая практика: впишите форму">
        <CheckableExercise
          title="Resolve the context"
          instruction="Определите подходящее время и впишите форму глагола."
          items={[
            {
              left: "1. By the time the police arrived, the thieves",
              answers: ["had escaped"],
              right: ". (escape)",
              explanation: "by the time → действие завершилось раньше.",
            },
            {
              left: "2. I",
              answers: ["was watching"],
              right: "TV when someone knocked on the door. (watch)",
              explanation: "while/when + фон → Past Continuous.",
            },
            {
              left: "3. She",
              answers: ["has been"],
              right: "to London three times. (be)",
              explanation: "Опыт до настоящего момента → Present Perfect.",
            },
            {
              left: "4. I",
              answers: ["met"],
              right: "him in 2019. (meet)",
              explanation: "Конкретная дата → Past Simple.",
            },
            {
              left: "5. After she",
              answers: ["had read"],
              right: "the book, she watched the movie. (read)",
              explanation: "after + действие раньше → Past Perfect.",
            },
            {
              left: "6. He",
              answers: ["had never seen"],
              right: "such a big house before he moved to LA. (never/see)",
              explanation: "before + прошлое → Past Perfect.",
            },
            {
              left: "7. While they",
              answers: ["were having"],
              right: "dinner, the lights went out. (have)",
              explanation: "while + процесс → Past Continuous.",
            },
            {
              left: "8. I can't find my keys. I think I",
              answers: ["have lost"],
              right: "them. (lose)",
              explanation: "Результат важен сейчас → Present Perfect.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 10: Итоговое резюме ===== */
function Step10() {
  return (
    <>
      <UiSection title="🎓 Итоговое резюме: Mixed Tenses Review 2">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-6 border-2 border-indigo-400">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Что мы повторили:
          </h3>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-indigo-900 mb-3">
                🕰️ Past Perfect
              </h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Действие ДО другого в прошлом</li>
                <li>• Маркеры: before, after, by the time, already, never</li>
                <li>• Часто с Past Simple: had done + did</li>
                <li>• Формула: had + V3</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-blue-900 mb-3">📅 Past Simple</h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Просто факт в прошлом</li>
                <li>• Конкретное время: yesterday, ago, in 2020</li>
                <li>• Последовательность событий</li>
                <li>• Формула: V2 / did + V1</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-purple-900 mb-3">
                ⏱️ Past Continuous
              </h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Процесс в прошлом (фон)</li>
                <li>• Часто с while + Past Simple (when)</li>
                <li>• Незавершённое действие в прошлом</li>
                <li>• Формула: was/were + V-ing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-sky-900 mb-3">
                ✅ Present Perfect
              </h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Связь прошлого с НАСТОЯЩИМ</li>
                <li>• Опыт до сих пор (без конкретной даты)</li>
                <li>• Результат важен СЕЙЧАС</li>
                <li>• Формула: have/has + V3</li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔑 Схема выбора времени">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-purple-300">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">
                1. Есть ДВА действия в прошлом?
              </p>
              <p className="text-sm text-zinc-700">
                → Past Perfect (раньше) + Past Simple (позже)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">
                2. Фон + событие в прошлом?
              </p>
              <p className="text-sm text-zinc-700">
                → Past Continuous (фон) + Past Simple (событие)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-blue-900 mb-2">
                3. Конкретная дата в прошлом?
              </p>
              <p className="text-sm text-zinc-700">
                → Past Simple (yesterday, in 2020, 3 days ago)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-sky-900 mb-2">
                4. Результат важен СЕЙЧАС?
              </p>
              <p className="text-sm text-zinc-700">
                → Present Perfect (связь с настоящим)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Сравнительная таблица">
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-blue-100">
                <th className="border px-3 py-2 text-left text-sm">Время</th>
                <th className="border px-3 py-2 text-left text-sm">
                  Когда использовать
                </th>
                <th className="border px-3 py-2 text-left text-sm">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-sm font-semibold">
                  Past Perfect
                </td>
                <td className="border px-3 py-2 text-sm">
                  ДО другого в прошлом
                </td>
                <td className="border px-3 py-2 text-sm">
                  She had left when I arrived
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 text-sm font-semibold">
                  Past Simple
                </td>
                <td className="border px-3 py-2 text-sm">
                  Факт, конкретная дата
                </td>
                <td className="border px-3 py-2 text-sm">
                  I saw him yesterday
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-sm font-semibold">
                  Past Continuous
                </td>
                <td className="border px-3 py-2 text-sm">Фон в прошлом</td>
                <td className="border px-3 py-2 text-sm">
                  I was cooking when she called
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 text-sm font-semibold">
                  Present Perfect
                </td>
                <td className="border px-3 py-2 text-sm">Связь с настоящим</td>
                <td className="border px-3 py-2 text-sm">
                  I have finished my work
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-8 text-center border-2 border-indigo-400">
          <div className="text-6xl mb-4">🎓</div>
          <p className="text-2xl font-bold text-indigo-900 mb-2">
            Отлично! Вы завершили Mixed Tenses Review 2!
          </p>
          <p className="text-indigo-700">
            Теперь вы умеете различать Past Perfect, Past Simple, Past
            Continuous и Present Perfect!
          </p>
        </div>
      </UiSection>
    </>
  );
}
