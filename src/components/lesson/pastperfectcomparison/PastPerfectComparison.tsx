"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastPerfectComparison({ step }: Props) {
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

/* ========== ШАГ 1: Введение — Два времени ========== */
function Step1() {
  const [activeTime, setActiveTime] = useState<number>(0);

  const times = [
    {
      name: "Past Perfect",
      emoji: "✅",
      color: "purple",
      formula: "had + V3",
      meaning: "Завершённое действие до момента в прошлом",
      example: "I had finished my homework before dinner.",
      translation: "Я закончил домашнее задание до ужина.",
      focus: "РЕЗУЛЬТАТ (что сделал)",
      usage: [
        "Действие завершилось до другого действия",
        "Подчеркивает последовательность событий",
        "Акцент на факте завершения",
      ],
    },
    {
      name: "Past Perfect Continuous",
      emoji: "⏳",
      color: "indigo",
      formula: "had been + Ving",
      meaning: "Длительное действие до момента в прошлом",
      example: "I had been studying for 3 hours before dinner.",
      translation: "Я занимался 3 часа до ужина.",
      focus: "ПРОЦЕСС (как долго делал)",
      usage: [
        "Подчёркивает длительность действия",
        "Показывает процесс, а не результат",
        "Часто с указанием времени (for/since)",
      ],
    },
  ];

  const activeTimeData = times[activeTime];

  return (
    <>
      <UiSection title="⏰ Past Perfect vs Past Perfect Continuous">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-xl p-8 mb-6 border-2 border-purple-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🕰️</div>
            <h2 className="text-3xl font-bold text-purple-900 mb-3">
              Два "предпрошедших" времени
            </h2>
            <p className="text-lg text-zinc-700">
              Оба говорят о действиях ДО другого момента в прошлом
            </p>
          </div>

          {/* Interactive Time Selector */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {times.map((time, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTime(idx)}
                className={`p-5 rounded-xl border-2 transition-all transform hover:scale-105 ${
                  activeTime === idx
                    ? `border-${time.color}-500 bg-${time.color}-50 shadow-xl scale-105`
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-5xl mb-3">{time.emoji}</div>
                <p className={`font-bold text-lg mb-1 ${activeTime === idx ? `text-${time.color}-900` : "text-zinc-700"}`}>
                  {time.name}
                </p>
                <p className="text-sm text-zinc-600">{time.focus}</p>
              </button>
            ))}
          </div>

          {/* Active Time Display */}
          <div className={`bg-gradient-to-br from-${activeTimeData.color}-50 to-white rounded-xl p-6 border-2 border-${activeTimeData.color}-300`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{activeTimeData.emoji}</span>
              <div>
                <h3 className={`text-2xl font-bold text-${activeTimeData.color}-900`}>
                  {activeTimeData.name}
                </h3>
                <p className="text-zinc-700">{activeTimeData.meaning}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <p className="text-sm text-zinc-600 mb-2">Формула:</p>
              <p className={`text-2xl font-mono font-bold text-${activeTimeData.color}-900`}>
                {activeTimeData.formula}
              </p>
            </div>

            <div className={`bg-${activeTimeData.color}-100 rounded-lg p-4 mb-4`}>
              <p className="text-sm font-semibold text-zinc-800 mb-1">
                {activeTimeData.example}
              </p>
              <p className="text-xs text-zinc-600">{activeTimeData.translation}</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-800 mb-2 text-sm">Когда использовать:</p>
              <ul className="space-y-1 text-sm text-zinc-700">
                {activeTimeData.usage.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`text-${activeTimeData.color}-600`}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`mt-4 bg-${activeTimeData.color}-200 rounded-lg p-3`}>
              <p className={`text-center font-bold text-${activeTimeData.color}-900`}>
                🎯 Акцент: {activeTimeData.focus}
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Визуальное сравнение">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Past Perfect */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✅</span>
              <h4 className="text-xl font-bold text-purple-900">Past Perfect</h4>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-1">
                    1
                  </div>
                  <p className="text-xs font-semibold text-purple-900">had done</p>
                </div>
                <div className="flex-1 h-1 bg-purple-300 mx-2"></div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold mb-1">
                    2
                  </div>
                  <p className="text-xs font-semibold text-gray-700">did</p>
                </div>
              </div>
              <p className="text-xs text-center text-zinc-600">
                Первое действие завершено → потом второе
              </p>
            </div>

            <div className="bg-purple-100 rounded p-3 mb-2">
              <p className="text-sm font-semibold mb-1">She had cooked dinner</p>
              <p className="text-xs text-zinc-600">Она приготовила ужин (завершила!)</p>
            </div>
            <div className="bg-gray-100 rounded p-3">
              <p className="text-sm font-semibold mb-1">before I arrived</p>
              <p className="text-xs text-zinc-600">до того как я пришёл</p>
            </div>
          </div>

          {/* Past Perfect Continuous */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border-2 border-indigo-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⏳</span>
              <h4 className="text-xl font-bold text-indigo-900">Past Perfect Continuous</h4>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mb-1">
                    ⏳
                  </div>
                  <p className="text-xs font-semibold text-indigo-900">had been doing</p>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-indigo-500 to-gray-400 mx-2 animate-pulse"></div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold mb-1">
                    2
                  </div>
                  <p className="text-xs font-semibold text-gray-700">did</p>
                </div>
              </div>
              <p className="text-xs text-center text-zinc-600">
                Процесс длился → потом произошло событие
              </p>
            </div>

            <div className="bg-indigo-100 rounded p-3 mb-2">
              <p className="text-sm font-semibold mb-1">She had been cooking for 2 hours</p>
              <p className="text-xs text-zinc-600">Она готовила 2 часа (процесс!)</p>
            </div>
            <div className="bg-gray-100 rounded p-3">
              <p className="text-sm font-semibold mb-1">before I arrived</p>
              <p className="text-xs text-zinc-600">до того как я пришёл</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: Past Perfect — Детально ========== */
function Step2() {
  return (
    <>
      <UiSection title="✅ Past Perfect — Завершённое действие в прошлом">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
            Формула Past Perfect
          </h3>

          <div className="bg-white rounded-lg p-6 mb-6 border-2 border-purple-200">
            <p className="text-sm text-zinc-600 mb-2 text-center">Структура:</p>
            <p className="text-3xl font-mono font-bold text-purple-900 text-center mb-4">
              had + V3 (Past Participle)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 rounded p-3 text-center">
                <p className="font-bold text-purple-900 mb-1">had</p>
                <p className="text-xs text-zinc-600">вспомогательный глагол<br/>(не меняется!)</p>
              </div>
              <div className="bg-indigo-50 rounded p-3 text-center">
                <p className="font-bold text-indigo-900 mb-1">+</p>
                <p className="text-xs text-zinc-600">плюс</p>
              </div>
              <div className="bg-purple-50 rounded p-3 text-center">
                <p className="font-bold text-purple-900 mb-1">V3</p>
                <p className="text-xs text-zinc-600">третья форма глагола<br/>(ed / неправильные)</p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
              <p className="text-sm text-purple-900 font-semibold mb-2">✅ Утверждение</p>
              <div className="bg-purple-50 rounded p-3 mb-2">
                <p className="font-semibold">I <strong>had finished</strong> the report.</p>
                <p className="text-sm text-zinc-600">Я закончил отчёт (до определённого момента).</p>
              </div>
              <div className="bg-purple-50 rounded p-3">
                <p className="font-semibold">They <strong>had left</strong> before we arrived.</p>
                <p className="text-sm text-zinc-600">Они ушли до того, как мы приехали.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-red-200">
              <p className="text-sm text-red-900 font-semibold mb-2">❌ Отрицание</p>
              <div className="bg-red-50 rounded p-3 mb-2">
                <p className="font-semibold">I <strong>had not (hadn't) seen</strong> him before.</p>
                <p className="text-sm text-zinc-600">Я не видел его раньше.</p>
              </div>
              <div className="bg-red-50 rounded p-3">
                <p className="font-semibold">She <strong>hadn't finished</strong> her homework.</p>
                <p className="text-sm text-zinc-600">Она не закончила домашнее задание.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
              <p className="text-sm text-blue-900 font-semibold mb-2">❓ Вопрос</p>
              <div className="bg-blue-50 rounded p-3 mb-2">
                <p className="font-semibold"><strong>Had</strong> you <strong>eaten</strong> before you came?</p>
                <p className="text-sm text-zinc-600">Ты поел до того, как пришёл?</p>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="font-semibold"><strong>Had</strong> they <strong>left</strong> when you arrived?</p>
                <p className="text-sm text-zinc-600">Они ушли, когда ты приехал?</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Когда использовать Past Perfect">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">1️⃣</span>
              Последовательность событий
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Когда одно действие произошло ДО другого
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                When I arrived, she <strong>had already left</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Когда я приехал, она уже ушла (сначала ушла, потом я приехал).
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">2️⃣</span>
              Объяснение ситуации
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Почему что-то произошло в прошлом
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                I was tired because I <strong>had worked</strong> all day.
              </p>
              <p className="text-xs text-zinc-600">
                Я устал, потому что работал весь день (работа была раньше усталости).
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">3️⃣</span>
              Reported Speech (косвенная речь)
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Передача слов, сказанных в прошлом
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-zinc-600 mb-1">Direct: "I lost my keys."</p>
              <p className="text-sm font-semibold mb-1">
                He said he <strong>had lost</strong> his keys.
              </p>
              <p className="text-xs text-zinc-600">
                Он сказал, что потерял ключи.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">4️⃣</span>
              Third Conditional
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Нереальные условия в прошлом
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                If I <strong>had known</strong>, I would have come.
              </p>
              <p className="text-xs text-zinc-600">
                Если бы я знал, я бы пришёл (но не знал).
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Past Perfect Continuous — Детально ========== */
function Step3() {
  return (
    <>
      <UiSection title="⏳ Past Perfect Continuous — Длительный процесс в прошлом">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
            Формула Past Perfect Continuous
          </h3>

          <div className="bg-white rounded-lg p-6 mb-6 border-2 border-indigo-200">
            <p className="text-sm text-zinc-600 mb-2 text-center">Структура:</p>
            <p className="text-3xl font-mono font-bold text-indigo-900 text-center mb-4">
              had been + Ving
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="bg-indigo-50 rounded p-3 text-center">
                <p className="font-bold text-indigo-900 mb-1">had</p>
                <p className="text-xs text-zinc-600">вспомогательный</p>
              </div>
              <div className="bg-blue-50 rounded p-3 text-center">
                <p className="font-bold text-blue-900 mb-1">been</p>
                <p className="text-xs text-zinc-600">Past Participle<br/>от 'be'</p>
              </div>
              <div className="bg-indigo-50 rounded p-3 text-center">
                <p className="font-bold text-indigo-900 mb-1">+</p>
                <p className="text-xs text-zinc-600">плюс</p>
              </div>
              <div className="bg-blue-50 rounded p-3 text-center">
                <p className="font-bold text-blue-900 mb-1">Ving</p>
                <p className="text-xs text-zinc-600">глагол + ing</p>
              </div>
              <div className="bg-indigo-50 rounded p-3 text-center">
                <p className="font-bold text-indigo-900 mb-1">for/since</p>
                <p className="text-xs text-zinc-600">часто с указанием времени</p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
              <p className="text-sm text-indigo-900 font-semibold mb-2">✅ Утверждение</p>
              <div className="bg-indigo-50 rounded p-3 mb-2">
                <p className="font-semibold">I <strong>had been studying</strong> for 3 hours.</p>
                <p className="text-sm text-zinc-600">Я занимался 3 часа (до определённого момента).</p>
              </div>
              <div className="bg-indigo-50 rounded p-3">
                <p className="font-semibold">They <strong>had been waiting</strong> since morning.</p>
                <p className="text-sm text-zinc-600">Они ждали с утра.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-red-200">
              <p className="text-sm text-red-900 font-semibold mb-2">❌ Отрицание</p>
              <div className="bg-red-50 rounded p-3 mb-2">
                <p className="font-semibold">I <strong>had not (hadn't) been working</strong> long.</p>
                <p className="text-sm text-zinc-600">Я работал недолго.</p>
              </div>
              <div className="bg-red-50 rounded p-3">
                <p className="font-semibold">She <strong>hadn't been feeling</strong> well.</p>
                <p className="text-sm text-zinc-600">Она плохо себя чувствовала.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
              <p className="text-sm text-blue-900 font-semibold mb-2">❓ Вопрос</p>
              <div className="bg-blue-50 rounded p-3 mb-2">
                <p className="font-semibold"><strong>Had</strong> you <strong>been waiting</strong> long?</p>
                <p className="text-sm text-zinc-600">Ты долго ждал?</p>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="font-semibold">How long <strong>had</strong> they <strong>been living</strong> there?</p>
                <p className="text-sm text-zinc-600">Как долго они там жили?</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Когда использовать Past Perfect Continuous">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">1️⃣</span>
              Длительность до момента
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Акцент на ТОМ, КАК ДОЛГО длилось действие
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                I <strong>had been running</strong> for an hour when it started to rain.
              </p>
              <p className="text-xs text-zinc-600">
                Я бегал час, когда начался дождь (акцент на длительности).
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">2️⃣</span>
              Объяснение последствий
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Почему было видно результат процесса
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                She was tired because she <strong>had been working</strong> all day.
              </p>
              <p className="text-xs text-zinc-600">
                Она устала, потому что работала весь день (видно по усталости).
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">3️⃣</span>
              С for и since
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Указание продолжительности действия
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                They <strong>had been living</strong> there <strong>for 10 years</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Они жили там 10 лет (before they moved).
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">4️⃣</span>
              Видимые результаты процесса
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Когда есть "следы" длительного действия
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold mb-1">
                His hands were dirty. He <strong>had been fixing</strong> the car.
              </p>
              <p className="text-xs text-zinc-600">
                Руки грязные → был процесс ремонта машины.
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: Сравнение с интерактивом ========== */
function Step4() {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      situation: "📚 Экзамен",
      context: "Когда экзамен начался...",
      pastPerfect: {
        sentence: "I had read the book.",
        meaning: "Я прочитал книгу.",
        focus: "✅ Факт завершения (прочитал до экзамена)",
        color: "purple",
      },
      pastPerfectContinuous: {
        sentence: "I had been reading for 5 hours.",
        meaning: "Я читал 5 часов.",
        focus: "⏳ Длительность процесса (как долго готовился)",
        color: "indigo",
      },
    },
    {
      situation: "😴 Усталость",
      context: "Почему он был уставшим...",
      pastPerfect: {
        sentence: "He had finished the project.",
        meaning: "Он закончил проект.",
        focus: "✅ Результат (проект готов)",
        color: "purple",
      },
      pastPerfectContinuous: {
        sentence: "He had been working on it for weeks.",
        meaning: "Он работал над ним неделями.",
        focus: "⏳ Процесс работы (поэтому устал)",
        color: "indigo",
      },
    },
    {
      situation: "🌧️ Мокрые улицы",
      context: "Улицы были мокрыми...",
      pastPerfect: {
        sentence: "It had rained.",
        meaning: "Прошёл дождь.",
        focus: "✅ Факт (дождь был)",
        color: "purple",
      },
      pastPerfectContinuous: {
        sentence: "It had been raining for hours.",
        meaning: "Дождь шёл часами.",
        focus: "⏳ Длительность дождя",
        color: "indigo",
      },
    },
  ];

  const current = scenarios[selectedScenario];

  return (
    <>
      <UiSection title="🔄 Интерактивное сравнение">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
            Одна ситуация — два взгляда
          </h3>

          {/* Scenario Selector */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {scenarios.map((scenario, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedScenario(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedScenario === idx
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white text-zinc-700 border border-gray-200 hover:border-indigo-300"
                }`}
              >
                {scenario.situation}
              </button>
            ))}
          </div>

          {/* Current Scenario */}
          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-gray-200">
            <div className="text-center mb-6">
              <p className="text-3xl mb-2">{current.situation.split(' ')[0]}</p>
              <p className="text-lg font-bold text-zinc-900">{current.context}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Past Perfect */}
              <div className={`bg-gradient-to-br from-${current.pastPerfect.color}-50 to-white rounded-lg p-5 border-2 border-${current.pastPerfect.color}-200`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">✅</span>
                  <h4 className={`font-bold text-${current.pastPerfect.color}-900`}>Past Perfect</h4>
                </div>

                <div className="bg-white rounded p-3 mb-3">
                  <p className="font-semibold text-sm mb-1">{current.pastPerfect.sentence}</p>
                  <p className="text-xs text-zinc-600">{current.pastPerfect.meaning}</p>
                </div>

                <div className={`bg-${current.pastPerfect.color}-100 rounded p-3`}>
                  <p className={`text-xs text-${current.pastPerfect.color}-900 font-semibold`}>
                    {current.pastPerfect.focus}
                  </p>
                </div>
              </div>

              {/* Past Perfect Continuous */}
              <div className={`bg-gradient-to-br from-${current.pastPerfectContinuous.color}-50 to-white rounded-lg p-5 border-2 border-${current.pastPerfectContinuous.color}-200`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">⏳</span>
                  <h4 className={`font-bold text-${current.pastPerfectContinuous.color}-900`}>Past Perfect Continuous</h4>
                </div>

                <div className="bg-white rounded p-3 mb-3">
                  <p className="font-semibold text-sm mb-1">{current.pastPerfectContinuous.sentence}</p>
                  <p className="text-xs text-zinc-600">{current.pastPerfectContinuous.meaning}</p>
                </div>

                <div className={`bg-${current.pastPerfectContinuous.color}-100 rounded p-3`}>
                  <p className={`text-xs text-${current.pastPerfectContinuous.color}-900 font-semibold`}>
                    {current.pastPerfectContinuous.focus}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Difference */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-5 border-2 border-amber-300">
            <p className="text-center font-bold text-amber-900 mb-2">
              💡 Ключевое отличие
            </p>
            <p className="text-center text-sm text-zinc-800">
              <span className="text-purple-700 font-bold">Past Perfect</span> = РЕЗУЛЬТАТ (что сделал),
              {" "}<span className="text-indigo-700 font-bold">Past Perfect Continuous</span> = ПРОЦЕСС (как долго делал)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Сравнительная таблица">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-purple-100 to-indigo-100">
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">Критерий</th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">Past Perfect</th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">Past Perfect Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">Формула</td>
                <td className="border-2 border-indigo-200 px-4 py-3 bg-purple-50">
                  had + V3
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3 bg-indigo-50">
                  had been + Ving
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">Акцент</td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  Результат, факт завершения
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  Длительность, процесс
                </td>
              </tr>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">Вопрос</td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  "Что произошло?"
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  "Как долго?"
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">Маркеры времени</td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  already, just, by the time
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  for, since, all day/week
                </td>
              </tr>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">С глаголами состояния</td>
                <td className="border-2 border-indigo-200 px-4 py-3 bg-green-50">
                  ✅ Да (had known, had been)
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3 bg-red-50">
                  ❌ Редко (не с live, know, etc)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: Практика Past Perfect ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. When I arrived, the movie",
      right: "already start. (already / start)",
      answers: ["had already started"],
      explanation: "Фильм начался ДО того, как я приехал → Past Perfect.",
    },
    {
      left: "2. She was upset because she",
      right: "her phone. (lose)",
      answers: ["had lost"],
      explanation: "Потеря телефона произошла раньше расстройства → Past Perfect.",
    },
    {
      left: "3. They",
      right: "the house before the storm came. (leave)",
      answers: ["had left"],
      explanation: "Ушли ДО бури → Past Perfect.",
    },
    {
      left: "4. I wasn't hungry because I",
      right: "lunch. (just / eat)",
      answers: ["had just eaten"],
      explanation: "Только что поел → Past Perfect с 'just'.",
    },
    {
      left: "5. By the time we got there, the show",
      right: ". (finish)",
      answers: ["had finished"],
      explanation: "'By the time' указывает на Past Perfect.",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Past Perfect">
        <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-5 mb-4 border-2 border-purple-200">
          <p className="text-sm text-zinc-700 mb-2">
            Поставьте глаголы в <strong>Past Perfect</strong>. Все действия произошли ДО другого момента в прошлом.
          </p>
          <div className="bg-purple-100 rounded p-3">
            <p className="text-xs font-semibold text-purple-900">
              💡 Подсказка: had + V3 (третья форма глагола)
            </p>
          </div>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Используйте Past Perfect (had + V3)"
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Практика Past Perfect Continuous ========== */
function Step6() {
  const items: FillItem[] = [
    {
      left: "1. I was tired because I",
      right: "for 3 hours. (run)",
      answers: ["had been running"],
      explanation: "Длительность процесса (3 hours) → Past Perfect Continuous.",
    },
    {
      left: "2. She",
      right: "all day, so she was exhausted. (work)",
      answers: ["had been working"],
      explanation: "Весь день работала → акцент на длительности.",
    },
    {
      left: "3. How long",
      right: "before you found a job? (you / look)",
      answers: ["had you been looking"],
      explanation: "Вопрос о длительности → How long + Past Perfect Continuous.",
    },
    {
      left: "4. They",
      right: "there for 10 years before they moved. (live)",
      answers: ["had been living"],
      explanation: "Жили 10 лет (for 10 years) → Past Perfect Continuous.",
    },
    {
      left: "5. His eyes were red because he",
      right: ". (cry)",
      answers: ["had been crying"],
      explanation: "Видимый результат процесса (красные глаза) → Past Perfect Continuous.",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Past Perfect Continuous">
        <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-5 mb-4 border-2 border-indigo-200">
          <p className="text-sm text-zinc-700 mb-2">
            Поставьте глаголы в <strong>Past Perfect Continuous</strong>. Акцент на ДЛИТЕЛЬНОСТИ процесса.
          </p>
          <div className="bg-indigo-100 rounded p-3">
            <p className="text-xs font-semibold text-indigo-900">
              💡 Подсказка: had been + Ving
            </p>
          </div>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Используйте Past Perfect Continuous (had been + Ving)"
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Выбор между двумя временами ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. When I arrived, she",
      right: "dinner. (cook — результат или процесс?)",
      answers: ["had cooked", "had been cooking"],
      explanation: "had cooked = приготовила (готово), had been cooking = готовила (процесс). Оба правильны!",
    },
    {
      left: "2. I was tired because I",
      right: "all day. (work — почему устал?)",
      answers: ["had been working"],
      explanation: "Акцент на длительности процесса → Past Perfect Continuous.",
    },
    {
      left: "3. He",
      right: "three books by the time he was 10. (read — сколько прочитал?)",
      answers: ["had read"],
      explanation: "Конкретное количество (three books) → Past Perfect.",
    },
    {
      left: "4. They",
      right: "for 2 hours when I joined them. (wait — как долго?)",
      answers: ["had been waiting"],
      explanation: "Указание длительности (for 2 hours) → Past Perfect Continuous.",
    },
    {
      left: "5. She",
      right: "her homework before dinner. (finish — факт завершения)",
      answers: ["had finished"],
      explanation: "Акцент на результате (закончила) → Past Perfect.",
    },
    {
      left: "6. His hands were dirty. He",
      right: "the car. (fix — видимый след)",
      answers: ["had been fixing"],
      explanation: "Видимый результат процесса (грязные руки) → Past Perfect Continuous.",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Практика: Выбор времени">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-lg p-5 mb-4 border-2 border-indigo-200">
          <p className="text-sm text-zinc-700 mb-3">
            Выберите правильное время в зависимости от контекста. Иногда подходят оба варианта!
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-purple-100 rounded p-2 text-center">
              <strong>Past Perfect</strong><br/>had + V3<br/>→ РЕЗУЛЬТАТ
            </div>
            <div className="bg-indigo-100 rounded p-2 text-center">
              <strong>Past Perfect Continuous</strong><br/>had been + Ving<br/>→ ПРОЦЕСС
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Заполните пропуски правильной формой"
          instruction="Читайте подсказки в скобках!"
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="💡 Как выбрать правильное время?">
        <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="font-bold text-purple-900 mb-2">✅ Используй Past Perfect, если:</p>
              <ul className="text-sm text-zinc-700 space-y-1 pl-4">
                <li>• Акцент на ФАКТЕ завершения действия</li>
                <li>• Есть конкретное количество (three books, two times)</li>
                <li>• Важна последовательность событий</li>
                <li>• С already, just, by the time</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <p className="font-bold text-indigo-900 mb-2">⏳ Используй Past Perfect Continuous, если:</p>
              <ul className="text-sm text-zinc-700 space-y-1 pl-4">
                <li>• Акцент на ДЛИТЕЛЬНОСТИ процесса</li>
                <li>• Есть указание времени (for 3 hours, all day)</li>
                <li>• Видимый результат процесса (tired, dirty hands)</li>
                <li>• Вопросы "How long?"</li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: Типичные ошибки ========== */
function Step8() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки">
        <div className="space-y-4">
          {[
            {
              wrong: "✗ I had went to the store.",
              right: "✓ I had gone to the store.",
              reason: "После 'had' нужна ТРЕТЬЯ ФОРМА глагола (V3), не вторая!",
              category: "Неправильная форма глагола",
              color: "red",
            },
            {
              wrong: "✗ I had been know him for years.",
              right: "✓ I had known him for years.",
              reason: "Глаголы состояния (know, be, have) редко используются в Continuous!",
              category: "Глаголы состояния",
              color: "red",
            },
            {
              wrong: "✗ She had been reading three books.",
              right: "✓ She had read three books.",
              reason: "С конкретным количеством используй Past Perfect, не Continuous!",
              category: "Конкретное количество",
              color: "red",
            },
            {
              wrong: "✗ I have finished when you came.",
              right: "✓ I had finished when you came.",
              reason: "Действие ДО момента в прошлом → Past Perfect, не Present Perfect!",
              category: "Путаница времён",
              color: "amber",
            },
            {
              wrong: "✗ He had been tired.",
              right: "✓ He had been working. / He was tired.",
              reason: "Tired — состояние, не действие. Используй Past Perfect Continuous для действий!",
              category: "Состояние vs действие",
              color: "amber",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border-2 border-${item.color}-200 rounded-xl p-5`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">⚠️</span>
                <div className="flex-1">
                  <p className={`text-sm font-semibold text-${item.color}-900 mb-1`}>
                    {item.category}
                  </p>
                  <p className="text-sm text-red-600 font-mono mb-1">{item.wrong}</p>
                  <p className="text-sm text-green-600 font-mono">{item.right}</p>
                </div>
              </div>
              <div className={`bg-${item.color}-50 rounded p-3`}>
                <p className={`text-xs text-${item.color}-900`}>💡 {item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="🎯 Чек-лист правильности">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border-2 border-purple-200">
            <h4 className="font-bold text-purple-900 mb-3">✅ Past Perfect</h4>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>had + V3</strong> (третья форма!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Для результата, факта</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>С конкретным количеством</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>already, just, by the time</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-3">⏳ Past Perfect Continuous</h4>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>had been + Ving</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Для процесса, длительности</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>С указанием времени (for/since)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>НЕ с глаголами состояния!</span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 9: Смешанная практика ========== */
function Step9() {
  const items: FillItem[] = [
    {
      left: "1. When I got home, my family",
      right: "dinner. (already / eat)",
      answers: ["had already eaten"],
      explanation: "Факт завершения → Past Perfect.",
    },
    {
      left: "2. She was exhausted because she",
      right: "all night. (study)",
      answers: ["had been studying"],
      explanation: "Длительность процесса (all night) → Past Perfect Continuous.",
    },
    {
      left: "3. They",
      right: "in that house for 20 years before they sold it. (live)",
      answers: ["had been living", "had lived"],
      explanation: "Оба варианта правильны! lived = факт, been living = длительность.",
    },
    {
      left: "4. I",
      right: "never",
      right2: "such a beautiful sunset before. (see)",
      answers: ["had never seen"],
      explanation: "Опыт до момента в прошлом → Past Perfect с never.",
    },
    {
      left: "5. He",
      right: "for 30 minutes when the bus finally arrived. (wait)",
      answers: ["had been waiting"],
      explanation: "Длительность ожидания (for 30 minutes) → Past Perfect Continuous.",
    },
    {
      left: "6. By the time I woke up, everyone",
      right: ". (leave)",
      answers: ["had left"],
      explanation: "'By the time' + факт ухода → Past Perfect.",
    },
    {
      left: "7. Her hands were covered in paint. She",
      right: "the fence. (paint)",
      answers: ["had been painting"],
      explanation: "Видимый результат процесса → Past Perfect Continuous.",
    },
    {
      left: "8.",
      right: "you",
      right2: "long before the doctor saw you? (wait)",
      answers: ["Had you been waiting"],
      explanation: "Вопрос о длительности → Had + been + Ving.",
    },
  ];

  return (
    <>
      <UiSection title="🧪 Смешанная практика">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-lg p-5 mb-4 border-2 border-indigo-200">
          <p className="text-sm text-zinc-700 mb-3">
            Эта практика проверяет понимание ОБОИХ времён. Выбирайте правильную форму в зависимости от контекста!
          </p>
          <p className="text-sm font-semibold text-indigo-900">
            Цель: 7/8 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Финальная практика"
          instruction="Используйте Past Perfect или Past Perfect Continuous"
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 10: Итоги и финальный тест ========== */
function Step10() {
  const items: FillItem[] = [
    {
      left: "1. I was tired because I",
      right: "all day. (work)",
      answers: ["had been working"],
      explanation: "Длительность процесса → Past Perfect Continuous.",
    },
    {
      left: "2. She",
      right: "her homework before she went out. (finish)",
      answers: ["had finished"],
      explanation: "Факт завершения → Past Perfect.",
    },
    {
      left: "3. They",
      right: "for 2 hours when it started to rain. (play)",
      answers: ["had been playing"],
      explanation: "Длительность (for 2 hours) → Past Perfect Continuous.",
    },
    {
      left: "4. He",
      right: "never",
      right2: "abroad before that trip. (travel)",
      answers: ["had never travelled", "had never traveled"],
      explanation: "Опыт до момента в прошлом → Past Perfect.",
    },
    {
      left: "5. When I arrived, the meeting",
      right: ". (already / start)",
      answers: ["had already started"],
      explanation: "Факт начала до приезда → Past Perfect.",
    },
    {
      left: "6. His clothes were wet. He",
      right: "in the rain. (walk)",
      answers: ["had been walking"],
      explanation: "Видимый результат процесса → Past Perfect Continuous.",
    },
    {
      left: "7. By 2010, she",
      right: "five novels. (write)",
      answers: ["had written"],
      explanation: "Конкретное количество → Past Perfect.",
    },
    {
      left: "8. How long",
      right: "you",
      right2: "before you found your keys? (look)",
      answers: ["had you been looking"],
      explanation: "Вопрос о длительности → Past Perfect Continuous.",
    },
    {
      left: "9. I",
      right: "my wallet, so I couldn't pay. (lose)",
      answers: ["had lost"],
      explanation: "Потеря произошла раньше → Past Perfect.",
    },
    {
      left: "10. They",
      right: "there since 2005. (live)",
      answers: ["had been living", "had lived"],
      explanation: "Оба варианта правильны! lived = факт, been living = длительность.",
    },
  ];

  return (
    <>
      <UiSection title="🎓 Финальный тест">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-4">
            <div className="text-6xl mb-3">🏆</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">
              Финальный тест
            </h3>
            <p className="text-zinc-700">
              10 вопросов на оба времени. Цель: 9/10 или выше!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
              <div className="text-3xl mb-1">✅</div>
              <p className="text-xs font-semibold text-purple-900">Past Perfect</p>
              <p className="text-xs text-zinc-600">had + V3</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-200">
              <div className="text-3xl mb-1">⏳</div>
              <p className="text-xs font-semibold text-indigo-900">Past Perfect Continuous</p>
              <p className="text-xs text-zinc-600">had been + Ving</p>
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Заполните пропуски правильной формой"
          instruction="Выберите Past Perfect или Past Perfect Continuous"
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="📚 Резюме">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Past Perfect */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-5 border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl">✅</span>
              <h4 className="text-xl font-bold text-purple-900">Past Perfect</h4>
            </div>
            <div className="bg-purple-50 rounded p-3 mb-3">
              <p className="font-mono text-sm font-bold text-purple-900">had + V3</p>
            </div>
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>✓ Завершённое действие</li>
              <li>✓ Результат, факт</li>
              <li>✓ Последовательность событий</li>
              <li>✓ already, just, by the time</li>
            </ul>
            <div className="mt-3 bg-purple-100 rounded p-2">
              <p className="text-xs text-center text-purple-900">
                <strong>Акцент:</strong> ЧТО произошло
              </p>
            </div>
          </div>

          {/* Past Perfect Continuous */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-5 border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl">⏳</span>
              <h4 className="text-xl font-bold text-indigo-900">Past Perfect Continuous</h4>
            </div>
            <div className="bg-indigo-50 rounded p-3 mb-3">
              <p className="font-mono text-sm font-bold text-indigo-900">had been + Ving</p>
            </div>
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>✓ Длительный процесс</li>
              <li>✓ Акцент на длительности</li>
              <li>✓ Видимые результаты процесса</li>
              <li>✓ for, since, all day/week</li>
            </ul>
            <div className="mt-3 bg-indigo-100 rounded p-2">
              <p className="text-xs text-center text-indigo-900">
                <strong>Акцент:</strong> КАК ДОЛГО происходило
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-2 border-amber-300 mb-6">
          <p className="text-center font-bold text-amber-900 mb-2">
            🎯 Главное правило
          </p>
          <p className="text-center text-sm text-zinc-800">
            <span className="text-purple-700 font-bold">Past Perfect</span> = РЕЗУЛЬТАТ (что сделал? завершил?),
            {" "}<span className="text-indigo-700 font-bold">Past Perfect Continuous</span> = ПРОЦЕСС (как долго делал?)
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300 text-center">
          <div className="text-7xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            Поздравляем! Вы освоили оба времени!
          </h3>
          <p className="text-zinc-700 mb-4">
            Теперь вы можете говорить о действиях, которые произошли ДО другого момента в прошлом!
          </p>
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm font-semibold text-zinc-800 mb-2">Что дальше?</p>
            <ul className="text-sm text-zinc-700 space-y-1 text-left">
              <li>✓ Практикуй в реальной речи</li>
              <li>✓ Пиши истории с этими временами</li>
              <li>✓ Обращай внимание на эти конструкции в книгах и фильмах</li>
              <li>✓ Переходи к следующей теме!</li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}
