"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function UsedToWould({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Введение — Все 4 конструкции ========== */
function Step1() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const constructions = [
    {
      title: "used to",
      emoji: "⏰",
      meaning: "Прошлые привычки и состояния",
      color: "indigo",
      formula: "used to + V1",
      example: "I used to smoke, but I quit.",
      translation: "Раньше я курил, но бросил.",
      usage: [
        "Действия, которые были регулярными в прошлом",
        "Состояния, которые больше не существуют",
        "Подчеркивает КОНТРАСТ с настоящим",
      ],
    },
    {
      title: "would",
      emoji: "📖",
      meaning: "Повторяющиеся действия (в рассказах)",
      color: "purple",
      formula: "would + V1",
      example: "Every summer we would go to the beach.",
      translation: "Каждое лето мы ездили на пляж.",
      usage: [
        "ТОЛЬКО повторяющиеся действия (не состояния!)",
        "Создаёт ностальгический тон",
        "Часто в повествовании о прошлом",
      ],
    },
    {
      title: "be used to",
      emoji: "😌",
      meaning: "Привычен к чему-то (СЕЙЧАС)",
      color: "emerald",
      formula: "be used to + Noun/Ving",
      example: "I'm used to working at night.",
      translation: "Я привык работать ночью.",
      usage: [
        "Описывает текущую привычку",
        "После 'to' идёт СУЩЕСТВИТЕЛЬНОЕ или Ving",
        "Означает 'это нормально для меня'",
      ],
    },
    {
      title: "get used to",
      emoji: "🔄",
      meaning: "Привыкать (процесс)",
      color: "amber",
      formula: "get used to + Noun/Ving",
      example: "I'm getting used to the new schedule.",
      translation: "Я привыкаю к новому расписанию.",
      usage: [
        "Процесс адаптации",
        "После 'to' идёт СУЩЕСТВИТЕЛЬНОЕ или Ving",
        "Означает 'начинаю чувствовать комфорт'",
      ],
    },
  ];

  const activeConstruction = constructions[activeCard];

  return (
    <>
      <UiSection title="🎯 Used to / Would / Be used to / Get used to — Полный обзор">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-emerald-50 rounded-xl p-8 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🔄</div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-3">
              4 конструкции о привычках
            </h2>
            <p className="text-lg text-zinc-700">
              Каждая имеет свою уникальную роль!
            </p>
          </div>

          {/* Interactive Card Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {constructions.map((con, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                  activeCard === idx
                    ? `border-${con.color}-500 bg-${con.color}-50 shadow-lg scale-105`
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-4xl mb-2">{con.emoji}</div>
                <p className={`font-bold text-sm ${activeCard === idx ? `text-${con.color}-900` : "text-zinc-700"}`}>
                  {con.title}
                </p>
              </button>
            ))}
          </div>

          {/* Active Card Display */}
          <div className={`bg-gradient-to-br from-${activeConstruction.color}-50 to-white rounded-xl p-6 border-2 border-${activeConstruction.color}-300`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{activeConstruction.emoji}</span>
              <div>
                <h3 className={`text-2xl font-bold text-${activeConstruction.color}-900`}>
                  {activeConstruction.title}
                </h3>
                <p className="text-zinc-700">{activeConstruction.meaning}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <p className="text-sm text-zinc-600 mb-2">Формула:</p>
              <p className={`text-xl font-mono font-bold text-${activeConstruction.color}-900`}>
                {activeConstruction.formula}
              </p>
            </div>

            <div className={`bg-${activeConstruction.color}-100 rounded-lg p-4 mb-4`}>
              <p className="text-sm font-semibold text-zinc-800 mb-1">
                {activeConstruction.example}
              </p>
              <p className="text-xs text-zinc-600">{activeConstruction.translation}</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-800 mb-2 text-sm">Когда использовать:</p>
              <ul className="space-y-1 text-sm text-zinc-700">
                {activeConstruction.usage.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`text-${activeConstruction.color}-600`}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🗺️ Временная шкала — Как они связаны?">
        <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: About the PAST */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-5 border-2 border-purple-200">
              <h4 className="text-xl font-bold text-purple-900 mb-4 text-center">
                📜 О ПРОШЛОМ
              </h4>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⏰</span>
                    <p className="font-bold text-indigo-900">used to</p>
                  </div>
                  <p className="text-sm text-zinc-700 mb-2">
                    Раньше было → сейчас НЕТ
                  </p>
                  <div className="bg-indigo-50 rounded p-2">
                    <p className="text-xs">I <strong>used to</strong> live in Paris.</p>
                    <p className="text-xs text-zinc-600">(Жил, но больше не живу)</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📖</span>
                    <p className="font-bold text-purple-900">would</p>
                  </div>
                  <p className="text-sm text-zinc-700 mb-2">
                    Повторялось → сейчас НЕТ
                  </p>
                  <div className="bg-purple-50 rounded p-2">
                    <p className="text-xs">We <strong>would</strong> play all day.</p>
                    <p className="text-xs text-zinc-600">(Играли, больше не играем)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: About the PRESENT */}
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-lg p-5 border-2 border-emerald-200">
              <h4 className="text-xl font-bold text-emerald-900 mb-4 text-center">
                ✨ О НАСТОЯЩЕМ
              </h4>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">😌</span>
                    <p className="font-bold text-emerald-900">be used to</p>
                  </div>
                  <p className="text-sm text-zinc-700 mb-2">
                    Уже привык → это норма
                  </p>
                  <div className="bg-emerald-50 rounded p-2">
                    <p className="text-xs">I'm <strong>used to</strong> waking up early.</p>
                    <p className="text-xs text-zinc-600">(Уже привык, это нормально)</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🔄</span>
                    <p className="font-bold text-amber-900">get used to</p>
                  </div>
                  <p className="text-sm text-zinc-700 mb-2">
                    Привыкаю → процесс
                  </p>
                  <div className="bg-amber-50 rounded p-2">
                    <p className="text-xs">I'm <strong>getting used to</strong> the cold.</p>
                    <p className="text-xs text-zinc-600">(Ещё привыкаю, процесс)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4 border border-indigo-300">
            <p className="text-center font-bold text-indigo-900 text-sm">
              💡 Ключевое отличие: <span className="text-purple-700">used to/would</span> = прошлое,
              {" "}<span className="text-emerald-700">be/get used to</span> = настоящее!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: Used to & Would (прошлое) ========== */
function Step2() {
  const [selectedExample, setSelectedExample] = useState<number>(0);

  const examples = [
    {
      situation: "🏡 Переезд",
      usedTo: {
        sentence: "I used to live in a small village.",
        meaning: "Раньше жил в деревне",
        note: "Состояние в прошлом (live = state)",
      },
      would: {
        sentence: "❌ I would live in a small village.",
        meaning: "НЕПРАВИЛЬНО!",
        note: "Would не работает с глаголами состояния",
      },
      verdict: "Только used to ✓",
      color: "indigo",
    },
    {
      situation: "⚽ Спортивная привычка",
      usedTo: {
        sentence: "I used to play football every weekend.",
        meaning: "Играл в футбол каждые выходные",
        note: "Повторяющееся действие",
      },
      would: {
        sentence: "I would play football every weekend.",
        meaning: "Играл в футбол каждые выходные",
        note: "Действие в прошлом — тоже правильно!",
      },
      verdict: "Оба подходят ✓✓",
      color: "green",
    },
    {
      situation: "👵 Бабушкины истории",
      usedTo: {
        sentence: "My grandma used to tell us stories.",
        meaning: "Бабушка рассказывала нам истории",
        note: "Универсальный вариант",
      },
      would: {
        sentence: "My grandma would tell us stories.",
        meaning: "Бабушка рассказывала нам истории",
        note: "Создаёт ностальгический тон",
      },
      verdict: "Оба подходят (would более эмоционален) ✓✓",
      color: "green",
    },
  ];

  const current = examples[selectedExample];

  return (
    <>
      <UiSection title="⏰ Used to & Would — Говорим о прошлом">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
            Прошлые привычки и действия
          </h3>

          {/* Formula Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">⏰</span>
                <h4 className="text-xl font-bold text-indigo-900">used to</h4>
              </div>
              <div className="bg-indigo-50 rounded p-3 mb-3">
                <p className="font-mono text-lg font-bold text-indigo-900">
                  used to + V1
                </p>
              </div>
              <ul className="text-sm text-zinc-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Действия (play, go, work)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Состояния (be, live, have)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Вопросы и отрицания</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">📖</span>
                <h4 className="text-xl font-bold text-purple-900">would</h4>
              </div>
              <div className="bg-purple-50 rounded p-3 mb-3">
                <p className="font-mono text-lg font-bold text-purple-900">
                  would + V1
                </p>
              </div>
              <ul className="text-sm text-zinc-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Только действия</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>НЕ состояния (be, live, know)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <span>Редко в вопросах</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Example Selector */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {examples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedExample(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedExample === idx
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-zinc-700 border border-gray-200 hover:border-indigo-300"
                }`}
              >
                {ex.situation}
              </button>
            ))}
          </div>

          {/* Active Example */}
          <div className={`bg-gradient-to-br from-${current.color}-50 to-white rounded-lg p-6 border-2 border-${current.color}-200`}>
            <h4 className="text-xl font-bold text-zinc-900 mb-4">{current.situation}</h4>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="text-sm text-zinc-600 mb-1">Used to:</p>
                <p className="font-semibold text-zinc-900 mb-1">{current.usedTo.sentence}</p>
                <p className="text-sm text-zinc-600 mb-2">{current.usedTo.meaning}</p>
                <div className="bg-indigo-50 rounded p-2">
                  <p className="text-xs text-indigo-800">💡 {current.usedTo.note}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-zinc-600 mb-1">Would:</p>
                <p className="font-semibold text-zinc-900 mb-1">{current.would.sentence}</p>
                <p className="text-sm text-zinc-600 mb-2">{current.would.meaning}</p>
                <div className={`${current.would.sentence.includes('❌') ? 'bg-red-50' : 'bg-purple-50'} rounded p-2`}>
                  <p className={`text-xs ${current.would.sentence.includes('❌') ? 'text-red-800' : 'text-purple-800'}`}>
                    💡 {current.would.note}
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-4 bg-${current.color}-100 rounded-lg p-3 border border-${current.color}-300`}>
              <p className={`text-center font-bold text-${current.color}-900`}>
                ⭐ {current.verdict}
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Формы (утверждение, отрицание, вопрос)">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">Тип</th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">Used to</th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">Would</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">✓ Утверждение</td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  I <strong>used to</strong> play tennis.
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  I <strong>would</strong> play tennis.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">✗ Отрицание</td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  I <strong>didn't use to</strong> like coffee.
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  I <strong>wouldn't</strong> drink coffee.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">? Вопрос</td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  <strong>Did</strong> you <strong>use to</strong> smoke?
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3 bg-amber-50">
                  ⚠️ Редко используется
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-sm font-semibold text-amber-900 mb-2">
            ⚠️ Важное правило:
          </p>
          <p className="text-sm text-zinc-700">
            В вопросах и отрицаниях с <strong>used to</strong> пишется <strong>use</strong> (без -d),
            потому что -d уже есть в did/didn't!
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-green-700">✓ Did you <strong>use to</strong> play?</p>
            <p className="text-xs text-red-700">✗ Did you <strong>used to</strong> play?</p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Be used to (привычен к чему-то) ========== */
function Step3() {
  const [comfortLevel, setComfortLevel] = useState(80);

  const getComfortStatus = () => {
    if (comfortLevel < 30) {
      return {
        emoji: "😰",
        text: "Непривычно",
        color: "red",
        description: "Это сложно и неудобно",
      };
    }
    if (comfortLevel < 70) {
      return {
        emoji: "😐",
        text: "Привыкаю",
        color: "amber",
        description: "Уже лучше, но ещё процесс",
      };
    }
    return {
      emoji: "😌",
      text: "Привык",
      color: "emerald",
      description: "Это нормально, чувствую комфорт",
    };
  };

  const status = getComfortStatus();

  return (
    <>
      <UiSection title="😌 Be used to — Уже привык (состояние)">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6 border-2 border-emerald-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">😌</div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">
              be used to = привычен к чему-то
            </h3>
            <p className="text-zinc-700">
              Описывает ТЕКУЩЕЕ состояние (уже привык!)
            </p>
          </div>

          {/* Formula */}
          <div className="bg-white rounded-lg p-5 mb-6 border-2 border-emerald-200">
            <p className="text-sm text-zinc-600 mb-2 text-center">Формула:</p>
            <p className="text-2xl font-mono font-bold text-emerald-900 text-center mb-4">
              be + used to + Noun/Ving
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded p-3">
                <p className="font-semibold text-emerald-900 mb-1 text-sm">С существительным:</p>
                <p className="text-sm">I'm used to <strong>the cold</strong>.</p>
                <p className="text-xs text-zinc-600">Я привык к холоду.</p>
              </div>
              <div className="bg-teal-50 rounded p-3">
                <p className="font-semibold text-teal-900 mb-1 text-sm">С герундием (Ving):</p>
                <p className="text-sm">I'm used to <strong>working</strong> at night.</p>
                <p className="text-xs text-zinc-600">Я привык работать ночью.</p>
              </div>
            </div>
          </div>

          {/* Interactive Comfort Slider */}
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 mb-6">
            <h4 className="text-lg font-bold text-emerald-900 mb-4 text-center">
              🎚️ Интерактив: Уровень комфорта
            </h4>
            <p className="text-sm text-zinc-600 text-center mb-4">
              Двигай ползунок, чтобы увидеть, как меняется состояние!
            </p>

            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={comfortLevel}
                onChange={(e) => setComfortLevel(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${
                    comfortLevel < 30 ? '#ef4444' : comfortLevel < 70 ? '#f59e0b' : '#10b981'
                  } 0%, ${
                    comfortLevel < 30 ? '#ef4444' : comfortLevel < 70 ? '#f59e0b' : '#10b981'
                  } ${comfortLevel}%, #e5e7eb ${comfortLevel}%, #e5e7eb 100%)`
                }}
              />
            </div>

            <div className={`bg-gradient-to-r from-${status.color}-50 to-white rounded-lg p-6 border-2 border-${status.color}-300`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{status.emoji}</span>
                <div>
                  <p className={`text-2xl font-bold text-${status.color}-900`}>{status.text}</p>
                  <p className="text-sm text-zinc-600">{status.description}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-zinc-700 mb-2">Примеры:</p>
                {comfortLevel < 30 && (
                  <div className="space-y-2">
                    <div className="bg-red-50 rounded p-2">
                      <p className="text-sm">I'm <strong>not used to</strong> this heat!</p>
                      <p className="text-xs text-zinc-600">Я не привык к этой жаре!</p>
                    </div>
                  </div>
                )}
                {comfortLevel >= 30 && comfortLevel < 70 && (
                  <div className="space-y-2">
                    <div className="bg-amber-50 rounded p-2">
                      <p className="text-sm">I'm starting to be <strong>used to</strong> the noise.</p>
                      <p className="text-xs text-zinc-600">Начинаю привыкать к шуму.</p>
                    </div>
                  </div>
                )}
                {comfortLevel >= 70 && (
                  <div className="space-y-2">
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="text-sm">I'm completely <strong>used to</strong> waking up early.</p>
                      <p className="text-xs text-zinc-600">Я полностью привык рано вставать.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-emerald-100 rounded-lg p-5 border border-emerald-300">
            <p className="font-bold text-emerald-900 mb-3">🔑 Ключевые моменты:</p>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Описывает <strong>ТЕКУЩЕЕ</strong> состояние (не прошлое!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>После <strong>to</strong> идёт <strong>СУЩЕСТВИТЕЛЬНОЕ</strong> или <strong>Ving</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Be меняется по временам: I'm / I was / I'll be used to...</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>НЕ путать с <strong>used to</strong> (прошлое)!</span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Be used to в разных временах">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-100 to-teal-100">
                <th className="border-2 border-emerald-300 px-4 py-3 text-left">Время</th>
                <th className="border-2 border-emerald-300 px-4 py-3 text-left">Пример</th>
                <th className="border-2 border-emerald-300 px-4 py-3 text-left">Перевод</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-emerald-200 px-4 py-3 font-semibold">Present</td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  I'm <strong>used to</strong> working late.
                </td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  Я привык работать допоздна.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-emerald-200 px-4 py-3 font-semibold">Past</td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  I was <strong>used to</strong> the noise.
                </td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  Я был привычен к шуму.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-emerald-200 px-4 py-3 font-semibold">Future</td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  I'll be <strong>used to</strong> it soon.
                </td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  Скоро я привыкну к этому.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-emerald-200 px-4 py-3 font-semibold">Negative</td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  I'm not <strong>used to</strong> the heat.
                </td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  Я не привык к жаре.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-emerald-200 px-4 py-3 font-semibold">Question</td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  Are you <strong>used to</strong> driving?
                </td>
                <td className="border-2 border-emerald-200 px-4 py-3">
                  Ты привык водить?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: Get used to (процесс привыкания) ========== */
function Step4() {
  const [adaptationStage, setAdaptationStage] = useState(0);

  const stages = [
    {
      day: "День 1",
      emoji: "😫",
      feeling: "Сложно!",
      color: "red",
      example: "I can't get used to waking up at 6 AM!",
      translation: "Не могу привыкнуть вставать в 6 утра!",
      note: "Начало процесса — очень трудно",
    },
    {
      day: "День 7",
      emoji: "😐",
      feeling: "Немного легче",
      color: "orange",
      example: "I'm getting used to the new schedule.",
      translation: "Я привыкаю к новому расписанию.",
      note: "Процесс идёт — становится проще",
    },
    {
      day: "День 30",
      emoji: "🙂",
      feeling: "Почти привык",
      color: "amber",
      example: "I've almost got used to the early mornings.",
      translation: "Я почти привык к ранним утрам.",
      note: "Близко к завершению адаптации",
    },
    {
      day: "День 60",
      emoji: "😌",
      feeling: "Привык!",
      color: "emerald",
      example: "I've got used to it completely!",
      translation: "Я полностью привык к этому!",
      note: "Процесс завершён — теперь это норма",
    },
  ];

  const currentStage = stages[adaptationStage];

  return (
    <>
      <UiSection title="🔄 Get used to — Привыкать (процесс)">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6 border-2 border-amber-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🔄</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-2">
              get used to = привыкать
            </h3>
            <p className="text-zinc-700">
              Описывает ПРОЦЕСС адаптации (ещё привыкаю!)
            </p>
          </div>

          {/* Formula */}
          <div className="bg-white rounded-lg p-5 mb-6 border-2 border-amber-200">
            <p className="text-sm text-zinc-600 mb-2 text-center">Формула:</p>
            <p className="text-2xl font-mono font-bold text-amber-900 text-center mb-4">
              get + used to + Noun/Ving
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded p-3">
                <p className="font-semibold text-amber-900 mb-1 text-sm">С существительным:</p>
                <p className="text-sm">I'm getting used to <strong>the weather</strong>.</p>
                <p className="text-xs text-zinc-600">Я привыкаю к погоде.</p>
              </div>
              <div className="bg-orange-50 rounded p-3">
                <p className="font-semibold text-orange-900 mb-1 text-sm">С герундием (Ving):</p>
                <p className="text-sm">I'm getting used to <strong>living</strong> here.</p>
                <p className="text-xs text-zinc-600">Я привыкаю жить здесь.</p>
              </div>
            </div>
          </div>

          {/* Interactive Adaptation Timeline */}
          <div className="bg-white rounded-xl p-6 border-2 border-amber-200 mb-6">
            <h4 className="text-lg font-bold text-amber-900 mb-4 text-center">
              📅 Интерактив: Процесс адаптации
            </h4>
            <p className="text-sm text-zinc-600 text-center mb-4">
              Нажимай на этапы, чтобы увидеть, как меняется процесс привыкания!
            </p>

            {/* Stage Buttons */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              {stages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setAdaptationStage(idx)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    adaptationStage === idx
                      ? `bg-${stage.color}-500 text-white shadow-lg scale-105`
                      : "bg-white text-zinc-700 border border-gray-200 hover:border-amber-300"
                  }`}
                >
                  {stage.day}
                </button>
              ))}
            </div>

            {/* Current Stage Display */}
            <div className={`bg-gradient-to-r from-${currentStage.color}-50 to-white rounded-lg p-6 border-2 border-${currentStage.color}-300`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{currentStage.emoji}</span>
                <div>
                  <p className="text-sm text-zinc-600">{currentStage.day}</p>
                  <p className={`text-2xl font-bold text-${currentStage.color}-900`}>{currentStage.feeling}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  {currentStage.example}
                </p>
                <p className="text-xs text-zinc-600">{currentStage.translation}</p>
              </div>

              <div className={`bg-${currentStage.color}-100 rounded p-3`}>
                <p className={`text-xs text-${currentStage.color}-900`}>💡 {currentStage.note}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 transition-all duration-500`}
                  style={{ width: `${((adaptationStage + 1) / stages.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-center text-zinc-600 mt-2">
                Процесс адаптации: {((adaptationStage + 1) / stages.length * 100).toFixed(0)}%
              </p>
            </div>
          </div>

          {/* Key Differences: be used to vs get used to */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border-2 border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">😌</span>
                <p className="font-bold text-emerald-900">be used to</p>
              </div>
              <p className="text-sm text-zinc-700 mb-2">Уже привык (состояние)</p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">I'm <strong>used to</strong> the cold.</p>
                <p className="text-xs text-zinc-600">Уже привык — это норма</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🔄</span>
                <p className="font-bold text-amber-900">get used to</p>
              </div>
              <p className="text-sm text-zinc-700 mb-2">Привыкаю (процесс)</p>
              <div className="bg-white rounded p-3">
                <p className="text-sm">I'm <strong>getting used to</strong> the cold.</p>
                <p className="text-xs text-zinc-600">Ещё привыкаю — процесс идёт</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Get used to в разных временах">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-100 to-orange-100">
                <th className="border-2 border-amber-300 px-4 py-3 text-left">Время</th>
                <th className="border-2 border-amber-300 px-4 py-3 text-left">Пример</th>
                <th className="border-2 border-amber-300 px-4 py-3 text-left">Перевод</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-amber-200 px-4 py-3 font-semibold">Present Continuous</td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  I'm <strong>getting used to</strong> it.
                </td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  Я привыкаю к этому (сейчас).
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-amber-200 px-4 py-3 font-semibold">Past Simple</td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  I <strong>got used to</strong> the noise.
                </td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  Я привык к шуму (завершено).
                </td>
              </tr>
              <tr>
                <td className="border-2 border-amber-200 px-4 py-3 font-semibold">Present Perfect</td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  I've <strong>got used to</strong> waking early.
                </td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  Я привык вставать рано (результат).
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-amber-200 px-4 py-3 font-semibold">Future</td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  I'll <strong>get used to</strong> it soon.
                </td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  Скоро я привыкну к этому.
                </td>
              </tr>
              <tr>
                <td className="border-2 border-amber-200 px-4 py-3 font-semibold">Can't</td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  I can't <strong>get used to</strong> the heat.
                </td>
                <td className="border-2 border-amber-200 px-4 py-3">
                  Не могу привыкнуть к жаре.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: Практика — Все 4 конструкции ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. When I was a child, I",
      right: "play outside every day. (прошлое)",
      answers: ["used to", "would"],
      explanation: "Прошлая привычка → used to или would (действие).",
    },
    {
      left: "2. I'm",
      right: "waking up early now. (уже привык)",
      answers: ["used to"],
      explanation: "Текущее состояние привычки → be used to.",
    },
    {
      left: "3. She",
      right: "live in Paris, but now she lives in London.",
      answers: ["used to"],
      explanation: "Состояние в прошлом → только used to (live = state).",
    },
    {
      left: "4. I'm",
      right: "the new software. It's still difficult.",
      answers: ["getting used to"],
      explanation: "Процесс привыкания → get used to.",
    },
    {
      left: "5. My grandfather",
      right: "tell us amazing stories.",
      answers: ["used to", "would"],
      explanation: "Повторяющееся действие в прошлом → оба варианта.",
    },
    {
      left: "6. Are you",
      right: "driving on the left?",
      answers: ["used to"],
      explanation: "Вопрос о текущей привычке → be used to.",
    },
    {
      left: "7. I can't",
      right: "this noisy neighborhood!",
      answers: ["get used to"],
      explanation: "Не могу привыкнуть (процесс сложный) → get used to.",
    },
    {
      left: "8. There",
      right: "be a cinema here, but it closed.",
      answers: ["used to"],
      explanation: "Состояние в прошлом → used to.",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Все 4 конструкции">
        <div className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50 rounded-lg p-5 mb-4 border-2 border-indigo-200">
          <p className="text-sm text-zinc-700 mb-3">
            Эта практика проверяет понимание ВСЕХ четырёх конструкций:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className="bg-indigo-100 rounded p-2 text-center">
              <strong>used to</strong><br/>прошлое
            </div>
            <div className="bg-purple-100 rounded p-2 text-center">
              <strong>would</strong><br/>прошлое (действия)
            </div>
            <div className="bg-emerald-100 rounded p-2 text-center">
              <strong>be used to</strong><br/>привык (сейчас)
            </div>
            <div className="bg-amber-100 rounded p-2 text-center">
              <strong>get used to</strong><br/>привыкаю (процесс)
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Вставьте правильную конструкцию. Читайте подсказки в скобках!"
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="💡 Подсказка: Как выбрать?">
        <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="font-bold text-purple-900 mb-2">📜 Говорим о ПРОШЛОМ?</p>
              <p className="text-sm text-zinc-700 mb-2">→ Используй <strong>used to</strong> или <strong>would</strong></p>
              <ul className="text-xs text-zinc-600 space-y-1 pl-4">
                <li>• Если состояние (be, live, have) → только <strong>used to</strong></li>
                <li>• Если действие → оба варианта</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <p className="font-bold text-emerald-900 mb-2">✨ Говорим о НАСТОЯЩЕМ?</p>
              <p className="text-sm text-zinc-700 mb-2">→ Используй <strong>be used to</strong> или <strong>get used to</strong></p>
              <ul className="text-xs text-zinc-600 space-y-1 pl-4">
                <li>• Если УЖЕ привык → <strong>be used to</strong></li>
                <li>• Если ЕЩЁ привыкаю (процесс) → <strong>get used to</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Типичные ошибки ========== */
function Step6() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки — Учимся на них!">
        <div className="space-y-4">
          {[
            {
              wrong: "✗ I'm used to wake up early.",
              right: "✓ I'm used to waking up early.",
              reason: "После 'be used to' и 'get used to' идёт ГЕРУНДИЙ (Ving), не инфинитив!",
              category: "be/get used to + Ving",
              color: "red",
            },
            {
              wrong: "✗ I used to working here.",
              right: "✓ I used to work here.",
              reason: "После 'used to' (прошлое) идёт базовая форма глагола (V1), не герундий!",
              category: "used to + V1",
              color: "red",
            },
            {
              wrong: "✗ I would live in Moscow.",
              right: "✓ I used to live in Moscow.",
              reason: "Would НЕ работает с глаголами состояния (live, be, have, know).",
              category: "would ≠ состояния",
              color: "red",
            },
            {
              wrong: "✗ I'm getting use to it.",
              right: "✓ I'm getting used to it.",
              reason: "Правильно: 'used' (с -d), это причастие от глагола 'use'.",
              category: "Орфография",
              color: "red",
            },
            {
              wrong: "✗ Did you used to smoke?",
              right: "✓ Did you use to smoke?",
              reason: "После did/didn't пишется 'use' (без -d), потому что -d уже в did!",
              category: "Вопросы",
              color: "red",
            },
            {
              wrong: "✗ I'm used to the cold weather now. (в прошлом)",
              right: "✓ I used to live in a cold climate. (в прошлом)",
              reason: "'be used to' = про НАСТОЯЩЕЕ, 'used to' = про ПРОШЛОЕ!",
              category: "Путаница времён",
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-3">📜 О прошлом:</h4>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>used to</strong> + V1 (универсал)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>would</strong> + V1 (только действия)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>НЕ 'would' с состояниями!</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-lg p-5 border-2 border-emerald-200">
            <h4 className="font-bold text-emerald-900 mb-3">✨ О настоящем:</h4>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>be used to</strong> + Noun/Ving (привык)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>get used to</strong> + Noun/Ving (привыкаю)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>НЕ инфинитив после 'to'!</span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Итоги и финальный тест ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "eat a lot of sweets, but I stopped. (прошлое)",
      answers: ["used to"],
      explanation: "Прошлая привычка, которая закончилась.",
    },
    {
      left: "2. My grandmother",
      right: "make us cookies every Sunday. (прошлое, действие)",
      answers: ["would", "used to"],
      explanation: "Повторяющееся действие → оба варианта.",
    },
    {
      left: "3. I'm not",
      right: "this cold weather! (не привык сейчас)",
      answers: ["used to"],
      explanation: "Текущее состояние (не привык) → be used to.",
    },
    {
      left: "4. She's",
      right: "her new job. It's still stressful. (процесс)",
      answers: ["getting used to"],
      explanation: "Процесс адаптации → get used to.",
    },
    {
      left: "5. There",
      right: "be a park here, but they built a mall.",
      answers: ["used to"],
      explanation: "Состояние в прошлом (be) → used to.",
    },
    {
      left: "6. It took me a while to",
      right: "driving on the right. (завершённый процесс)",
      answers: ["get used to"],
      explanation: "Процесс привыкания (с 'to' после) → get used to.",
    },
    {
      left: "7. We",
      right: "go fishing every summer when I was young.",
      answers: ["would", "used to"],
      explanation: "Повторяющееся действие в прошлом → оба.",
    },
    {
      left: "8. Are you",
      right: "living alone? (привык ли ты сейчас)",
      answers: ["used to"],
      explanation: "Вопрос о текущей привычке → be used to.",
    },
    {
      left: "9. He can't",
      right: "waking up so early. (не может привыкнуть)",
      answers: ["get used to"],
      explanation: "Сложность в процессе адаптации → get used to.",
    },
    {
      left: "10. When I was a student, I",
      right: "study late at night.",
      answers: ["would", "used to"],
      explanation: "Действие в прошлом → оба варианта.",
    },
  ];

  return (
    <>
      <UiSection title="🎓 Финальный тест — Проверь себя!">
        <div className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50 rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-4">
            <div className="text-6xl mb-3">🏆</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">
              Финальный тест
            </h3>
            <p className="text-zinc-700">
              10 вопросов на все 4 конструкции. Цель: 8/10 или выше!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "used to", color: "indigo", emoji: "⏰" },
              { name: "would", color: "purple", emoji: "📖" },
              { name: "be used to", color: "emerald", emoji: "😌" },
              { name: "get used to", color: "amber", emoji: "🔄" },
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.color}-50 rounded-lg p-3 text-center border border-${item.color}-200`}>
                <div className="text-3xl mb-1">{item.emoji}</div>
                <p className={`text-xs font-semibold text-${item.color}-900`}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Заполните пропуски правильной конструкцией"
          instruction="Читайте подсказки в скобках! Иногда подходит несколько вариантов."
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="📚 Резюме: Все 4 конструкции">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Used to */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-5 border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl">⏰</span>
              <h4 className="text-xl font-bold text-indigo-900">used to</h4>
            </div>
            <p className="text-sm text-zinc-700 mb-2">Прошлые привычки и состояния</p>
            <div className="bg-indigo-50 rounded p-3 mb-2">
              <p className="font-mono text-sm font-bold text-indigo-900">used to + V1</p>
            </div>
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>✓ Действия и состояния</li>
              <li>✓ Контраст с настоящим</li>
              <li>✓ Вопросы: Did ... use to?</li>
            </ul>
          </div>

          {/* Would */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-5 border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl">📖</span>
              <h4 className="text-xl font-bold text-purple-900">would</h4>
            </div>
            <p className="text-sm text-zinc-700 mb-2">Повторяющиеся действия (рассказы)</p>
            <div className="bg-purple-50 rounded p-3 mb-2">
              <p className="font-mono text-sm font-bold text-purple-900">would + V1</p>
            </div>
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>✓ Только действия</li>
              <li>✗ НЕ состояния</li>
              <li>✓ Ностальгический тон</li>
            </ul>
          </div>

          {/* Be used to */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-5 border-2 border-emerald-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl">😌</span>
              <h4 className="text-xl font-bold text-emerald-900">be used to</h4>
            </div>
            <p className="text-sm text-zinc-700 mb-2">Привычен к чему-то (СЕЙЧАС)</p>
            <div className="bg-emerald-50 rounded p-3 mb-2">
              <p className="font-mono text-sm font-bold text-emerald-900">be used to + Noun/Ving</p>
            </div>
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>✓ Текущее состояние</li>
              <li>✓ Уже привык</li>
              <li>✓ После 'to' → Noun/Ving</li>
            </ul>
          </div>

          {/* Get used to */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-5 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-4xl">🔄</span>
              <h4 className="text-xl font-bold text-amber-900">get used to</h4>
            </div>
            <p className="text-sm text-zinc-700 mb-2">Привыкать (процесс)</p>
            <div className="bg-amber-50 rounded p-3 mb-2">
              <p className="font-mono text-sm font-bold text-amber-900">get used to + Noun/Ving</p>
            </div>
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>✓ Процесс адаптации</li>
              <li>✓ Ещё привыкаю</li>
              <li>✓ После 'to' → Noun/Ving</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 via-emerald-100 to-amber-100 rounded-xl p-6 border-2 border-indigo-300">
          <p className="text-center font-bold text-indigo-900 mb-2">
            🎯 Золотое правило запоминания:
          </p>
          <p className="text-center text-sm text-zinc-800">
            <span className="text-purple-700 font-bold">used to/would</span> = прошлое (было → больше нет),
            {" "}<span className="text-emerald-700 font-bold">be/get used to</span> = настоящее (привык/привыкаю сейчас)!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300 text-center">
          <div className="text-7xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            Ты освоил все 4 конструкции!
          </h3>
          <p className="text-zinc-700 mb-4">
            Теперь ты знаешь, как говорить о привычках в прошлом и настоящем!
          </p>
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm font-semibold text-zinc-800 mb-2">Что дальше?</p>
            <ul className="text-sm text-zinc-700 space-y-1 text-left">
              <li>✓ Практикуй в реальной речи</li>
              <li>✓ Расскажи о своих привычках</li>
              <li>✓ Опиши, к чему ты привык</li>
              <li>✓ Переходи к следующей теме!</li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}
