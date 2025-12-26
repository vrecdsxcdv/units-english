"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Conditionals({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Что такое Conditionals ========== */
function Step1() {
  return (
    <>
      <UiSection title="🔀 Conditionals 0 & 1 — Условные предложения">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-6 border-2 border-blue-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🔀</div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              Conditionals
            </h2>
            <p className="text-xl text-blue-700">
              Zero & First Conditional — Условия и результаты
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Условные предложения показывают связь <strong>ЕСЛИ → ТО</strong>.
              Zero Conditional — для фактов и истин, First Conditional — для
              реальных планов и ситуаций в будущем.
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-5 border-2 border-blue-400">
            <p className="font-bold text-blue-900 mb-2 text-lg">
              🔄 Схема условия:
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">❓</div>
                  <p className="text-xs font-bold text-blue-900">IF (ЕСЛИ)</p>
                  <p className="text-xs text-zinc-600">Условие</p>
                </div>
                <div className="text-3xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">✅</div>
                  <p className="text-xs font-bold text-green-900">THEN (ТО)</p>
                  <p className="text-xs text-zinc-600">Результат</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded">
                <p className="text-sm text-center">
                  <strong>Пример:</strong>{" "}
                  <span className="text-blue-700 font-bold">If it rains</span>,
                  we <span className="text-green-700 font-bold">will stay</span>{" "}
                  home.
                </p>
                <p className="text-xs text-center text-zinc-600 mt-1">
                  (Если будет дождь, мы останемся дома)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Два типа условий">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-6 border-2 border-amber-300">
            <h4 className="text-xl font-bold text-amber-900 mb-3">
              0️⃣ Zero Conditional
            </h4>
            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="font-semibold text-amber-900 mb-2">
                Формула: If + Present Simple, Present Simple
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong>
              </p>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-4">
                <li>Общие факты и истины</li>
                <li>Научные законы</li>
                <li>Привычки и рутина</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded p-3">
              <p className="text-sm">
                ✓ If you <strong>heat</strong> water, it <strong>boils</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                (Если нагреваешь воду, она кипит — факт)
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-900 mb-3">
              1️⃣ First Conditional
            </h4>
            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="font-semibold text-blue-900 mb-2">
                Формула: If + Present Simple, will + V1
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong>
              </p>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-4">
                <li>Реальные планы в будущем</li>
                <li>Вероятные ситуации</li>
                <li>Предложения и предсказания</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded p-3">
              <p className="text-sm">
                ✓ If it <strong>rains</strong>, we <strong>will stay</strong>{" "}
                home.
              </p>
              <p className="text-xs text-zinc-600">
                (Если пойдёт дождь, мы останемся дома — план)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Условные союзы">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "if", transcr: "/ɪf/", translation: "если" },
            { word: "when", transcr: "/wen/", translation: "когда" },
            { word: "unless", transcr: "/ʌnˈles/", translation: "если не" },
            {
              word: "as long as",
              transcr: "/əz lɒŋ æz/",
              translation: "пока, если",
            },
            {
              word: "provided (that)",
              transcr: "/prəˈvaɪdɪd/",
              translation: "при условии что",
            },
            {
              word: "in case",
              transcr: "/ɪn keɪs/",
              translation: "на случай если",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-blue-400"
            >
              <p className="font-bold text-blue-900 text-lg">{item.word}</p>
              <p className="text-xs text-blue-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="🌍 Сравнение с русским языком">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Как это работает в русском?
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-indigo-900 mb-3">
              💡 В русском НЕТ разницы между Zero и First!
            </p>
            <p className="text-zinc-700 mb-3">
              Мы используем одну и ту же форму:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>
                <strong>"Если + настоящее, то + настоящее/будущее"</strong>
              </li>
              <li>Контекст подсказывает: факт это или план</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="font-bold text-amber-900 mb-2">🇬🇧 English:</p>
              <p className="text-sm mb-1">
                If you <strong>heat</strong> ice, it <strong>melts</strong>.
                (Zero)
              </p>
              <p className="text-sm">
                If you <strong>come</strong>, we <strong>will cook</strong>.
                (First)
              </p>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <p className="font-bold text-sky-900 mb-2">🇷🇺 Русский:</p>
              <p className="text-sm mb-1">
                Если <strong>нагреваешь</strong> лёд, он <strong>тает</strong>.
              </p>
              <p className="text-sm">
                Если <strong>придёшь</strong>, мы <strong>приготовим</strong>.
              </p>
              <p className="text-xs text-sky-700 mt-2">
                (Одинаковая структура!)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: Zero Conditional — Формула ========== */
function Step2() {
  return (
    <>
      <UiSection title="0️⃣ Zero Conditional — Общие истины">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-8 mb-6 border-2 border-amber-400">
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-6">
            Формула Zero Conditional
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-amber-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-amber-900 mb-4">
                If + Present Simple, Present Simple
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-amber-50 rounded p-3">
                  <p className="font-bold text-amber-900 mb-1">If-часть</p>
                  <p className="text-xs text-zinc-600">
                    Present Simple
                    <br />
                    (условие)
                  </p>
                </div>
                <div className="bg-yellow-50 rounded p-3">
                  <p className="font-bold text-yellow-900 mb-1">Result</p>
                  <p className="text-xs text-zinc-600">
                    Present Simple
                    <br />
                    (результат)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300 mb-4">
            <p className="font-bold text-green-900 mb-2">
              ✅ Когда использовать:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-5">
              <li>Научные факты: If you heat water to 100°C, it boils.</li>
              <li>Общие истины: If you don't eat, you get hungry.</li>
              <li>Привычки: If I drink coffee at night, I can't sleep.</li>
              <li>Инструкции: If you press this button, the door opens.</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
            <p className="font-bold text-blue-900 mb-2">💡 Важно:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>• Оба глагола в Present Simple</li>
              <li>• Можно заменить if на when (результат всегда наступает)</li>
              <li>• Результат ВСЕГДА следует из условия (100% вероятность)</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📋 Примеры Zero Conditional">
        <div className="space-y-4">
          {[
            {
              category: "🔬 Научные факты",
              examples: [
                {
                  en: "If you heat ice, it melts.",
                  ru: "Если нагреваешь лёд, он тает.",
                },
                {
                  en: "If you mix yellow and blue, you get green.",
                  ru: "Если смешиваешь жёлтый и синий, получается зелёный.",
                },
                {
                  en: "If plants don't get water, they die.",
                  ru: "Если растения не получают воду, они умирают.",
                },
              ],
            },
            {
              category: "👤 Привычки и рутина",
              examples: [
                {
                  en: "If I wake up late, I miss the bus.",
                  ru: "Если я просыпаюсь поздно, я опаздываю на автобус.",
                },
                {
                  en: "If she drinks coffee, she feels nervous.",
                  ru: "Если она пьёт кофе, она чувствует себя нервной.",
                },
                {
                  en: "If we have time, we go for a walk.",
                  ru: "Если у нас есть время, мы идём гулять.",
                },
              ],
            },
            {
              category: "⚙️ Инструкции и правила",
              examples: [
                {
                  en: "If you press the red button, the alarm stops.",
                  ru: "Если нажимаешь красную кнопку, сигнализация останавливается.",
                },
                {
                  en: "If you turn left here, you see the museum.",
                  ru: "Если поворачиваешь налево здесь, видишь музей.",
                },
                {
                  en: "If the light is red, cars stop.",
                  ru: "Если свет красный, машины останавливаются.",
                },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-amber-200"
            >
              <div className="bg-amber-50 rounded p-3 mb-3">
                <p className="font-bold text-amber-900">{section.category}</p>
              </div>
              <div className="space-y-3">
                {section.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="bg-amber-50/30 rounded p-3 border-l-4 border-amber-400"
                  >
                    <p className="text-sm font-semibold">{ex.en}</p>
                    <p className="text-xs text-zinc-600 mt-1">{ex.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Научные и бытовые глаголы">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "heat", transcr: "/hiːt/", translation: "нагревать" },
            { word: "boil", transcr: "/bɔɪl/", translation: "кипеть" },
            { word: "melt", transcr: "/melt/", translation: "таять" },
            { word: "freeze", transcr: "/friːz/", translation: "замерзать" },
            { word: "mix", transcr: "/mɪks/", translation: "смешивать" },
            { word: "press", transcr: "/pres/", translation: "нажимать" },
            { word: "turn", transcr: "/tɜːn/", translation: "поворачивать" },
            {
              word: "get hungry",
              transcr: "/ɡet ˈhʌŋɡri/",
              translation: "проголодаться",
            },
            {
              word: "feel nervous",
              transcr: "/fiːl ˈnɜːvəs/",
              translation: "нервничать",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-amber-400"
            >
              <p className="font-bold text-amber-900 text-lg">{item.word}</p>
              <p className="text-xs text-amber-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Zero Conditional — Практика ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. If you",
      right: "water to 100°C, it boils. (heat)",
      answers: ["heat"],
      explanation: "Zero Conditional → Present Simple в if-части.",
    },
    {
      left: "2. If plants don't get water, they",
      right: ". (die)",
      answers: ["die"],
      explanation: "Общий факт → Present Simple.",
    },
    {
      left: "3. If you",
      right: "the red button, the machine stops. (press)",
      answers: ["press"],
      explanation: "Инструкция → Zero Conditional.",
    },
    {
      left: "4. If I",
      right: "coffee at night, I can't sleep. (drink)",
      answers: ["drink"],
      explanation: "Личная привычка → Zero Conditional.",
    },
    {
      left: "5. If you mix blue and yellow, you",
      right: "green. (get)",
      answers: ["get"],
      explanation: "Научный факт → Present Simple в обеих частях.",
    },
    {
      left: "6. When it",
      right: ", the ground gets wet. (rain)",
      answers: ["rains"],
      explanation: "When = if в Zero Conditional → Present Simple.",
    },
    {
      left: "7. If she",
      right: "late, she misses the train. (wake up)",
      answers: ["wakes up"],
      explanation: "Привычка → Zero Conditional.",
    },
    {
      left: "8. If you",
      right: "hungry, you should eat. (be)",
      answers: ["are", "re"],
      explanation: "Общая истина → Present Simple (are).",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Zero Conditional">
        <div className="bg-gradient-to-r from-amber-50 to-white rounded-lg p-5 mb-4 border border-amber-200">
          <p className="text-sm text-zinc-700 mb-3">
            Поставьте глагол в <strong>Present Simple</strong>. Все предложения
            описывают факты, привычки или инструкции.
          </p>
          <p className="text-sm font-semibold text-amber-900">
            Цель: 7/8 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Вставьте глагол в Present Simple."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: First Conditional — Формула ========== */
function Step4() {
  return (
    <>
      <UiSection title="1️⃣ First Conditional — Реальное будущее">
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-8 mb-6 border-2 border-blue-400">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
            Формула First Conditional
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-blue-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-blue-900 mb-4">
                If + Present Simple, will + V1
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">If-часть</p>
                  <p className="text-xs text-zinc-600">
                    Present Simple
                    <br />
                    (условие в будущем)
                  </p>
                </div>
                <div className="bg-sky-50 rounded p-3">
                  <p className="font-bold text-sky-900 mb-1">Result</p>
                  <p className="text-xs text-zinc-600">
                    will + V1
                    <br />
                    (результат в будущем)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300 mb-4">
            <p className="font-bold text-green-900 mb-2">
              ✅ Когда использовать:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc pl-5">
              <li>Реальные планы: If it rains, we will stay home.</li>
              <li>Вероятные события: If you study hard, you will pass.</li>
              <li>Предложения: If you help me, I will cook dinner.</li>
              <li>Предупреждения: If you don't hurry, you will be late.</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">⚠️ Важно:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • If-часть: <strong>Present Simple</strong> (не will!)
              </li>
              <li>
                • Result: <strong>will + инфинитив без to</strong>
              </li>
              <li>• Можно использовать can, may, must вместо will</li>
              <li>• Вероятность: 50% и выше (реально может произойти)</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📋 Примеры First Conditional">
        <div className="space-y-4">
          {[
            {
              category: "☀️ Погода и планы",
              examples: [
                {
                  en: "If it rains tomorrow, we will stay at home.",
                  ru: "Если завтра будет дождь, мы останемся дома.",
                },
                {
                  en: "If the weather is nice, we will go to the beach.",
                  ru: "Если погода будет хорошей, мы поедем на пляж.",
                },
                {
                  en: "If it snows, the roads will be dangerous.",
                  ru: "Если пойдёт снег, дороги будут опасными.",
                },
              ],
            },
            {
              category: "📚 Учёба и работа",
              examples: [
                {
                  en: "If you study hard, you will pass the exam.",
                  ru: "Если будешь усердно учиться, сдашь экзамен.",
                },
                {
                  en: "If I finish early, I will call you.",
                  ru: "Если закончу рано, позвоню тебе.",
                },
                {
                  en: "If she gets the job, she will move to London.",
                  ru: "Если она получит эту работу, переедет в Лондон.",
                },
              ],
            },
            {
              category: "⚠️ Предупреждения",
              examples: [
                {
                  en: "If you don't hurry, you will miss the train.",
                  ru: "Если не поторопишься, опоздаешь на поезд.",
                },
                {
                  en: "If you eat too much, you will feel sick.",
                  ru: "Если съешь слишком много, почувствуешь себя плохо.",
                },
                {
                  en: "If we don't leave now, we will be late.",
                  ru: "Если не уйдём сейчас, опоздаем.",
                },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-blue-200"
            >
              <div className="bg-blue-50 rounded p-3 mb-3">
                <p className="font-bold text-blue-900">{section.category}</p>
              </div>
              <div className="space-y-3">
                {section.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="bg-blue-50/30 rounded p-3 border-l-4 border-blue-400"
                  >
                    <p className="text-sm font-semibold">{ex.en}</p>
                    <p className="text-xs text-zinc-600 mt-1">{ex.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Планы и действия">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "study hard",
              transcr: "/ˈstʌdi hɑːd/",
              translation: "усердно учиться",
            },
            {
              word: "pass an exam",
              transcr: "/pɑːs ən ɪɡˈzæm/",
              translation: "сдать экзамен",
            },
            { word: "hurry", transcr: "/ˈhʌri/", translation: "торопиться" },
            {
              word: "miss the train",
              transcr: "/mɪs ðə treɪn/",
              translation: "опоздать на поезд",
            },
            {
              word: "feel sick",
              transcr: "/fiːl sɪk/",
              translation: "чувствовать себя плохо",
            },
            { word: "be late", transcr: "/biː leɪt/", translation: "опоздать" },
            {
              word: "get a job",
              transcr: "/ɡet ə dʒɒb/",
              translation: "получить работу",
            },
            {
              word: "move to",
              transcr: "/muːv tuː/",
              translation: "переехать в",
            },
            { word: "call", transcr: "/kɔːl/", translation: "позвонить" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-blue-400"
            >
              <p className="font-bold text-blue-900 text-lg">{item.word}</p>
              <p className="text-xs text-blue-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: First Conditional — Практика ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. If it",
      right: "tomorrow, we will cancel the picnic. (rain)",
      answers: ["rains"],
      explanation: "If-часть → Present Simple (rains).",
    },
    {
      left: "2. If you study hard, you",
      right: "the exam. (pass)",
      answers: ["will pass", "'ll pass"],
      explanation: "Result → will + V1.",
    },
    {
      left: "3. If she",
      right: "early, she will call you. (finish)",
      answers: ["finishes"],
      explanation: "If-часть → Present Simple (не will!).",
    },
    {
      left: "4. If we don't leave now, we",
      right: "late. (be)",
      answers: ["will be", "'ll be"],
      explanation: "Result с отрицанием → will be.",
    },
    {
      left: "5. If you",
      right: "me, I will help you. (ask)",
      answers: ["ask"],
      explanation: "If-часть → Present Simple.",
    },
    {
      left: "6. If they",
      right: "the job, they will move to Berlin. (get)",
      answers: ["get"],
      explanation: "If-часть → Present Simple.",
    },
    {
      left: "7. If I have time, I",
      right: "you a call. (give)",
      answers: ["will give", "'ll give"],
      explanation: "Result → will + give.",
    },
    {
      left: "8. If you don't hurry, you",
      right: "the bus. (miss)",
      answers: ["will miss", "'ll miss"],
      explanation: "Result → will miss.",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: First Conditional">
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-5 mb-4 border border-blue-200">
          <p className="text-sm text-zinc-700 mb-3">
            Поставьте глагол в <strong>Present Simple</strong> (if-часть) или{" "}
            <strong>will + V1</strong> (result). Все предложения о будущем.
          </p>
          <p className="text-sm font-semibold text-blue-900">
            Цель: 7/8 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Вставьте правильную форму глагола."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Zero vs First — Сравнение ========== */
function Step6() {
  return (
    <>
      <UiSection title="⚖️ Zero vs First Conditional">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            В чём разница?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-lg font-bold text-amber-900 mb-3">
                0️⃣ Zero Conditional
              </h4>
              <ul className="text-sm text-zinc-700 space-y-2 list-disc pl-4">
                <li>
                  <strong>Формула:</strong> If + PS, PS
                </li>
                <li>
                  <strong>Время:</strong> Всегда (любое время)
                </li>
                <li>
                  <strong>Вероятность:</strong> 100% (факт)
                </li>
                <li>
                  <strong>Примеры:</strong> факты, привычки, инструкции
                </li>
              </ul>
              <div className="bg-amber-50 rounded p-3 mt-3">
                <p className="text-sm font-semibold">
                  If you heat water, it boils.
                </p>
                <p className="text-xs text-zinc-600">(Всегда кипит — факт)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-lg font-bold text-blue-900 mb-3">
                1️⃣ First Conditional
              </h4>
              <ul className="text-sm text-zinc-700 space-y-2 list-disc pl-4">
                <li>
                  <strong>Формула:</strong> If + PS, will + V1
                </li>
                <li>
                  <strong>Время:</strong> Будущее
                </li>
                <li>
                  <strong>Вероятность:</strong> 50%+ (реально)
                </li>
                <li>
                  <strong>Примеры:</strong> планы, предсказания, предупреждения
                </li>
              </ul>
              <div className="bg-blue-50 rounded p-3 mt-3">
                <p className="text-sm font-semibold">
                  If it rains, we will stay home.
                </p>
                <p className="text-xs text-zinc-600">(Может быть дождь)</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Примеры сравнения">
        <div className="space-y-4">
          {[
            {
              situation: "🌡️ Температура",
              zero: "If you heat ice, it melts. (Факт — всегда тает)",
              first:
                "If you heat this soup, it will taste better. (План — станет вкуснее)",
            },
            {
              situation: "🚗 Дорога",
              zero: "If you turn left here, you see the station. (Инструкция)",
              first:
                "If you turn left, you will find a better route. (Предсказание)",
            },
            {
              situation: "☕ Кофе",
              zero: "If I drink coffee, I can't sleep. (Привычка — всегда так)",
              first:
                "If I drink coffee now, I won't sleep tonight. (Конкретный случай)",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-indigo-200"
            >
              <div className="bg-indigo-50 rounded p-3 mb-3">
                <p className="font-bold text-indigo-900">{item.situation}</p>
              </div>
              <div className="space-y-2">
                <div className="bg-amber-50 rounded p-3 border-l-4 border-amber-400">
                  <p className="text-sm">
                    <strong>Zero:</strong> {item.zero}
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                  <p className="text-sm">
                    <strong>First:</strong> {item.first}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📊 Таблица сравнения">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-100 to-blue-100">
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  Критерий
                </th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  Zero Conditional
                </th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  First Conditional
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">
                  Формула
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  If + PS, PS
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  If + PS, will + V1
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">
                  Время
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  Любое время (всегда)
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  Будущее
                </td>
              </tr>
              <tr>
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">
                  Вероятность
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  100% (всегда так)
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  50%+ (реально может быть)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-indigo-200 px-4 py-3 font-semibold">
                  Примеры
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  Факты, привычки, инструкции
                </td>
                <td className="border-2 border-indigo-200 px-4 py-3">
                  Планы, предсказания, предупреждения
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Смешанная практика ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. If you heat water to 100°C, it",
      right: ". (boil — факт)",
      answers: ["boils"],
      explanation: "Научный факт → Zero Conditional (Present Simple).",
    },
    {
      left: "2. If it",
      right: "tomorrow, we will cancel the trip. (rain — будущее)",
      answers: ["rains"],
      explanation: "Будущее → First Conditional (Present Simple в if-части).",
    },
    {
      left: "3. If I drink coffee at night, I",
      right: "sleep. (привычка)",
      answers: ["can't", "cannot"],
      explanation: "Личная привычка → Zero Conditional.",
    },
    {
      left: "4. If you study hard, you",
      right: "the exam. (pass — будущее)",
      answers: ["will pass", "'ll pass"],
      explanation: "Будущее → First Conditional (will + pass).",
    },
    {
      left: "5. If you press this button, the door",
      right: ". (open — инструкция)",
      answers: ["opens"],
      explanation: "Инструкция → Zero Conditional.",
    },
    {
      left: "6. If she",
      right: "the job, she will move to London. (get)",
      answers: ["gets"],
      explanation: "Будущее → First Conditional (Present Simple в if).",
    },
    {
      left: "7. If plants don't get water, they",
      right: ". (die — факт)",
      answers: ["die"],
      explanation: "Общая истина → Zero Conditional.",
    },
    {
      left: "8. If we don't leave now, we",
      right: "late. (be — будущее)",
      answers: ["will be", "'ll be"],
      explanation: "Предупреждение о будущем → First Conditional.",
    },
    {
      left: "9. When you mix blue and yellow, you",
      right: "green. (get)",
      answers: ["get"],
      explanation: "Научный факт → Zero (when = if в фактах).",
    },
    {
      left: "10. If I have time tomorrow, I",
      right: "you. (call)",
      answers: ["will call", "'ll call"],
      explanation: "План на будущее → First Conditional.",
    },
  ];

  return (
    <>
      <UiSection title="🧪 Смешанная практика: Zero vs First">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 rounded-lg p-5 mb-4 border-2 border-purple-200">
          <p className="text-sm text-zinc-700 mb-3">
            Определите тип условия и вставьте правильную форму. Подсказки в
            скобках помогут выбрать Zero или First Conditional.
          </p>
          <p className="text-sm font-semibold text-purple-900">
            Цель: 9/10 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Тест на различие"
          instruction="Вставьте глагол в правильной форме (PS для Zero или will+V1 для First)."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: Модальные в условиях ========== */
function Step8() {
  const items: FillItem[] = [
    {
      left: "1. If you want to succeed, you",
      right: "work hard. (must)",
      answers: ["must"],
      explanation: "Must заменяет will для обязательства.",
    },
    {
      left: "2. If it rains, we",
      right: "stay at home. (can)",
      answers: ["can"],
      explanation: "Can = возможность, вместо will.",
    },
    {
      left: "3. If you finish early, you",
      right: "leave. (may)",
      answers: ["may"],
      explanation: "May = разрешение.",
    },
    {
      left: "4. If she studies, she",
      right: "pass the exam. (should)",
      answers: ["should"],
      explanation: "Should = вероятный совет.",
    },
  ];

  return (
    <>
      <UiSection title="🎭 Модальные глаголы в условиях">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-900 mb-4">
            Will можно заменить на модальные
          </h3>

          <div className="space-y-4">
            {[
              {
                modal: "can",
                meaning: "возможность",
                example: "If you need help, I can assist you.",
                ru: "Если нужна помощь, я могу помочь.",
              },
              {
                modal: "may",
                meaning: "разрешение / вероятность",
                example: "If it's sunny, we may go to the beach.",
                ru: "Если будет солнечно, мы возможно поедем на пляж.",
              },
              {
                modal: "must",
                meaning: "обязательство",
                example: "If you want to succeed, you must work hard.",
                ru: "Если хочешь преуспеть, ты должен усердно работать.",
              },
              {
                modal: "should",
                meaning: "совет",
                example: "If you feel tired, you should rest.",
                ru: "Если чувствуешь усталость, тебе следует отдохнуть.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 border-2 border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-purple-900">
                      {item.modal}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-purple-900 mb-1">
                      {item.modal} = {item.meaning}
                    </p>
                    <p className="text-sm mb-1">{item.example}</p>
                    <p className="text-xs text-zinc-600">{item.ru}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Модальные глаголы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { word: "can", transcr: "/kæn/", translation: "мочь, уметь" },
            {
              word: "may",
              transcr: "/meɪ/",
              translation: "может быть, разрешено",
            },
            { word: "must", transcr: "/mʌst/", translation: "должен" },
            { word: "should", transcr: "/ʃʊd/", translation: "следует" },
            {
              word: "succeed",
              transcr: "/səkˈsiːd/",
              translation: "преуспеть",
            },
            { word: "assist", transcr: "/əˈsɪst/", translation: "помогать" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика с модальными"
        instruction="Вставьте модальный глагол из скобок."
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 9: Unless, As long as, Provided ========== */
function Step9() {
  const items: FillItem[] = [
    {
      left: "1.",
      right: "you study, you won't pass. (Unless)",
      answers: ["Unless"],
      explanation: "Unless = if not (Если не учишься...).",
    },
    {
      left: "2. I'll go",
      right: "the weather is good. (as long as)",
      answers: ["as long as"],
      explanation: "As long as = if/provided (при условии).",
    },
    {
      left: "3. You can borrow my car",
      right: "you drive carefully. (provided)",
      answers: ["provided", "provided that"],
      explanation: "Provided = if (при условии что).",
    },
    {
      left: "4.",
      right: "it rains, we will have a picnic. (Unless)",
      answers: ["Unless"],
      explanation: "Unless = if not (Если не будет дождя).",
    },
  ];

  return (
    <>
      <UiSection title="🔗 Другие условные союзы">
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-6 mb-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-cyan-900 mb-4">
            Не только IF!
          </h3>

          <div className="space-y-4">
            {[
              {
                word: "unless",
                meaning: "если не",
                formula: "Unless = If not",
                example: "Unless you hurry, you'll be late.",
                equal: "If you don't hurry, you'll be late.",
                ru: "Если не поторопишься, опоздаешь.",
              },
              {
                word: "as long as",
                meaning: "при условии что, пока",
                formula: "As long as = if/provided",
                example: "You can go as long as you finish your homework.",
                equal: "You can go if you finish your homework.",
                ru: "Можешь идти, если закончишь домашнюю работу.",
              },
              {
                word: "provided (that)",
                meaning: "при условии что",
                formula: "Provided = if",
                example: "I'll help you provided you help me later.",
                equal: "I'll help you if you help me later.",
                ru: "Я помогу тебе, если ты поможешь мне позже.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-cyan-200"
              >
                <div className="bg-cyan-50 rounded p-3 mb-3">
                  <p className="font-bold text-cyan-900 text-lg">
                    {item.word} = {item.meaning}
                  </p>
                  <p className="text-xs text-cyan-700">{item.formula}</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-teal-50 rounded p-3">
                    <p className="text-sm font-semibold">{item.example}</p>
                  </div>
                  <div className="bg-gray-50 rounded p-3">
                    <p className="text-sm">= {item.equal}</p>
                  </div>
                  <p className="text-xs text-zinc-600">{item.ru}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Условные выражения">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { word: "unless", transcr: "/ʌnˈles/", translation: "если не" },
            {
              word: "as long as",
              transcr: "/əz lɒŋ æz/",
              translation: "при условии",
            },
            {
              word: "provided that",
              transcr: "/prəˈvaɪdɪd/",
              translation: "при условии что",
            },
            {
              word: "in case",
              transcr: "/ɪn keɪs/",
              translation: "на случай если",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-cyan-400"
            >
              <p className="font-bold text-cyan-900 text-lg">{item.word}</p>
              <p className="text-xs text-cyan-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика с разными союзами"
        instruction="Вставьте unless, as long as или provided."
        items={items}
        wideInputs
      />
    </>
  );
}

/* ========== ШАГ 10: Жизненные ситуации ========== */
function Step10() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "enough money, I will buy a new laptop. (have)",
      answers: ["have"],
      explanation: "План на будущее → First Conditional.",
      wide: true,
    },
    {
      left: "2. If you",
      right: "this medicine, you will feel better. (take)",
      answers: ["take"],
      explanation: "Совет/план → First Conditional.",
    },
    {
      left: "3. If water",
      right: "to 0°C, it freezes. (cool)",
      answers: ["cools"],
      explanation: "Научный факт → Zero Conditional.",
    },
    {
      left: "4. If we",
      right: "a taxi, we will arrive on time. (take)",
      answers: ["take"],
      explanation: "План → First Conditional.",
    },
    {
      left: "5. If you touch fire, you",
      right: "burned. (get)",
      answers: ["get"],
      explanation: "Общая истина → Zero Conditional.",
    },
    {
      left: "6. If she",
      right: "me tonight, I will tell her the news. (call)",
      answers: ["calls"],
      explanation: "Возможность в будущем → First Conditional.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🌍 Контекстная практика">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 mb-6 border-2 border-emerald-300">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            Реальные жизненные ситуации
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "💼 На работе",
                sentence:
                  "If you finish the report by Friday, you can take Monday off.",
                ru: "Если закончишь отчёт к пятнице, можешь взять выходной в понедельник.",
                type: "First Conditional (план)",
              },
              {
                title: "🏥 У врача",
                sentence:
                  "If you take this medicine three times a day, you will recover quickly.",
                ru: "Если будешь принимать это лекарство три раза в день, быстро выздоровеешь.",
                type: "First Conditional (совет)",
              },
              {
                title: "🍳 На кухне",
                sentence:
                  "If you add salt to water, it boils at a higher temperature.",
                ru: "Если добавляешь соль в воду, она кипит при более высокой температуре.",
                type: "Zero Conditional (факт)",
              },
              {
                title: "✈️ Путешествие",
                sentence: "If we book tickets now, we will get a discount.",
                ru: "Если забронируем билеты сейчас, получим скидку.",
                type: "First Conditional (предложение)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-emerald-200"
              >
                <div className="bg-emerald-50 rounded p-3 mb-3">
                  <p className="font-bold text-emerald-900">{item.title}</p>
                </div>
                <p className="text-sm mb-2">{item.sentence}</p>
                <p className="text-xs text-zinc-600 mb-2">{item.ru}</p>
                <div className="bg-green-50 rounded p-2">
                  <p className="text-xs text-green-800">💡 {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Жизненные ситуации"
        instruction="Вставьте глагол в правильной форме."
        items={items}
        wideInputs
      />
    </>
  );
}

/* ========== ШАГ 11: Большой тест ========== */
function Step11() {
  const items: FillItem[] = [
    {
      left: "1. If you",
      right: "hard, you will achieve your goals. (work)",
      answers: ["work"],
      explanation: "First Conditional → Present Simple в if-части.",
    },
    {
      left: "2. If ice",
      right: "in the sun, it melts. (stay)",
      answers: ["stays"],
      explanation: "Zero Conditional → факт.",
    },
    {
      left: "3. If it",
      right: "tomorrow, we will cancel the event. (snow)",
      answers: ["snows"],
      explanation: "First Conditional → план.",
    },
    {
      left: "4. If you mix red and white, you",
      right: "pink. (get)",
      answers: ["get"],
      explanation: "Zero Conditional → научный факт.",
    },
    {
      left: "5.",
      right: "you study, you won't pass the exam. (Unless)",
      answers: ["Unless"],
      explanation: "Unless = if not.",
    },
    {
      left: "6. If she",
      right: "me, I will help her. (ask)",
      answers: ["asks"],
      explanation: "First Conditional → if-часть.",
    },
    {
      left: "7. If you press this button, the machine",
      right: ". (start)",
      answers: ["starts"],
      explanation: "Zero Conditional → инструкция.",
    },
    {
      left: "8. If we",
      right: "early, we will catch the train. (leave)",
      answers: ["leave"],
      explanation: "First Conditional → план.",
    },
    {
      left: "9. If I have time, I",
      right: "you tomorrow. (call)",
      answers: ["will call", "'ll call"],
      explanation: "First Conditional → will + call.",
    },
    {
      left: "10. If you",
      right: "cold water, it doesn't boil. (heat)",
      answers: ["heat"],
      explanation: "Zero Conditional → отрицание факта.",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Финальный тест">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 rounded-lg p-5 mb-4 border-2 border-purple-200">
          <p className="text-sm text-zinc-700 mb-3">
            10 вопросов на всё: Zero/First, модальные, unless. Проверь свои
            знания!
          </p>
          <p className="text-sm font-semibold text-purple-900">
            Цель: 9/10 или выше! 🏆
          </p>
        </div>

        <CheckableExercise
          title="Итоговый тест"
          instruction="Вставьте правильную форму глагола или союз."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 12: Самооценка ========== */
function Step12() {
  return (
    <>
      <UiSection title="🏆 Conditionals Scoreboard">
        <div className="bg-gradient-to-r from-indigo-50 via-white to-emerald-50 rounded-lg p-8 mb-6 border-2 border-indigo-300">
          <h3 className="text-2xl font-bold text-indigo-900 text-center mb-6">
            Памятка по Conditionals
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
              <h4 className="text-xl font-bold text-amber-900 mb-4">
                0️⃣ Zero Conditional
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>If + Present Simple, Present Simple</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Для фактов, привычек, инструкций</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Вероятность: 100% (всегда так)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>Можно заменить if на when</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-xl font-bold text-blue-900 mb-4">
                1️⃣ First Conditional
              </h4>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>If + Present Simple, will + V1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Для планов, предсказаний, предупреждений</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Вероятность: 50%+ (реально)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Will можно заменить на can/may/must</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-100 rounded-xl p-5">
            <p className="font-bold text-emerald-900 mb-2">
              🎯 Золотое правило:
            </p>
            <p className="text-sm text-zinc-800">
              Спроси себя: это ФАКТ (всегда так) → Zero, или ПЛАН (может быть в
              будущем) → First? В if-части НИКОГДА не ставь will!
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🗂️ Чек-лист «я умею»">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Я понимаю разницу",
              bullets: [
                "Zero (факты) vs First (планы)",
                "If + Present (не will!)",
                "Unless = if not",
              ],
            },
            {
              title: "Я могу составить",
              bullets: [
                "5 примеров Zero Conditional",
                "5 примеров First Conditional",
                "Предложения с unless/as long as",
              ],
            },
            {
              title: "Уровень автоматизма",
              bullets: [
                "Различаю факт и план на слух",
                "Не ставлю will в if-части",
                "Использую в речи естественно",
              ],
            },
            {
              title: "Следующий шаг",
              bullets: [
                "Second Conditional (нереальное)",
                "Third Conditional (прошлое)",
                "Смешанные условия",
              ],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-zinc-200 p-5"
            >
              <h4 className="font-semibold text-indigo-900 mb-3">
                {card.title}
              </h4>
              <ul className="text-sm text-zinc-700 space-y-1">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

