"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FirstConditional({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в условные предложения ===== */
function Step1() {
  return (
    <>
      <UiSection title="🔀 Условные предложения (Conditionals)">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-blue-300">
          <p className="text-lg font-semibold text-blue-900 mb-3">
            Что такое условные предложения?
          </p>
          <p className="text-zinc-700 mb-2">
            <strong>Условные предложения (Conditionals)</strong> — это
            предложения, которые описывают ситуацию &quot;ЕСЛИ..., ТО...&quot;
          </p>
          <p className="text-zinc-700">
            Они показывают, что произойдёт при определённом условии!
          </p>
        </div>
      </UiSection>

      <UiSection title="📊 4 типа условных предложений">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="font-bold text-purple-900 text-lg mb-4">
            В английском языке существует 4 основных типа Conditionals:
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">0️⃣</div>
                <div>
                  <p className="font-bold text-green-900 text-xl">
                    Zero Conditional
                  </p>
                  <p className="text-sm text-green-700">
                    If + Present, Present
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded p-3 mb-2">
                <p className="text-sm mb-1">
                  If you <strong>heat</strong> water to 100°C, it{" "}
                  <strong>boils</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Если нагреваешь воду до 100°C, она кипит.
                </p>
              </div>
              <p className="text-xs text-green-700">
                💡 Научные факты, общие истины, законы природы
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">1️⃣</div>
                <div>
                  <p className="font-bold text-blue-900 text-xl">
                    First Conditional
                  </p>
                  <p className="text-sm text-blue-700">If + Present, WILL</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded p-3 mb-2">
                <p className="text-sm mb-1">
                  If it <strong>rains</strong>, I <strong>will stay</strong>{" "}
                  home.
                </p>
                <p className="text-xs text-zinc-600">
                  Если пойдёт дождь, я останусь дома.
                </p>
              </div>
              <p className="text-xs text-blue-700">
                💡 Реальное будущее — вероятные ситуации
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">2️⃣</div>
                <div>
                  <p className="font-bold text-orange-900 text-xl">
                    Second Conditional
                  </p>
                  <p className="text-sm text-orange-700">
                    If + Past Simple, WOULD
                  </p>
                </div>
              </div>
              <div className="bg-orange-50 rounded p-3 mb-2">
                <p className="text-sm mb-1">
                  If I <strong>won</strong> the lottery, I{" "}
                  <strong>would buy</strong> a car.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я выиграл в лотерею, я бы купил машину.
                </p>
              </div>
              <p className="text-xs text-orange-700">
                💡 Нереальное настоящее/будущее — мечты, фантазии
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">3️⃣</div>
                <div>
                  <p className="font-bold text-red-900 text-xl">
                    Third Conditional
                  </p>
                  <p className="text-sm text-red-700">
                    If + Past Perfect, WOULD HAVE
                  </p>
                </div>
              </div>
              <div className="bg-red-50 rounded p-3 mb-2">
                <p className="text-sm mb-1">
                  If I <strong>had studied</strong>, I{" "}
                  <strong>would have passed</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Если бы я учился (тогда), я бы сдал.
                </p>
              </div>
              <p className="text-xs text-red-700">
                💡 Нереальное прошлое — сожаления о прошлом
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Наша тема: First Conditional">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">1️⃣</div>
            <div>
              <p className="text-3xl font-bold text-blue-900">
                First Conditional
              </p>
              <p className="text-lg text-blue-700">
                Реальное условие в будущем
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-900 mb-3 text-lg">📐 Формула:</p>
            <div className="text-center mb-4">
              <p className="text-2xl font-bold text-blue-900">
                IF + <span className="text-green-600">PRESENT SIMPLE</span>,{" "}
                <span className="text-purple-600">WILL + V1</span>
              </p>
            </div>
            <p className="text-sm text-zinc-700 text-center">
              Если (условие в настоящем), то (результат в будущем)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-bold text-blue-900 mb-2">📚 Пример 1:</p>
              <p className="text-sm mb-2">
                If it <strong className="text-green-600">rains</strong>, I{" "}
                <strong className="text-purple-600">will take</strong> an
                umbrella.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Если пойдёт дождь, я возьму зонт.
              </p>
              <p className="text-xs text-blue-700 italic">
                💡 Реальная ситуация — дождь может пойти!
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-bold text-blue-900 mb-2">📚 Пример 2:</p>
              <p className="text-sm mb-2">
                If you <strong className="text-green-600">study</strong> hard,
                you <strong className="text-purple-600">will pass</strong> the
                exam.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Если ты будешь усердно учиться, ты сдашь экзамен.
              </p>
              <p className="text-xs text-blue-700 italic">
                💡 Реальный совет — это возможно!
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="⚖️ Zero vs First Conditional — В чём разница?">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <th className="border border-gray-300 px-4 py-3"></th>
                <th className="border border-gray-300 px-4 py-3">
                  Zero Conditional
                </th>
                <th className="border border-gray-300 px-4 py-3">
                  First Conditional
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">
                  Формула
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  If + Present, Present
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  If + Present, WILL
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3 font-bold">
                  Время
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  Всегда, факты
                </td>
                <td className="border border-gray-300 px-4 py-3">Будущее</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">
                  Вероятность
                </td>
                <td className="border border-gray-300 px-4 py-3">100%</td>
                <td className="border border-gray-300 px-4 py-3">
                  50-90% (вероятно)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-3 font-bold">
                  Пример
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">
                  If you heat ice, it melts.
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">
                  If you heat this, it will melt.
                </td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">
                  Использование
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">
                  Научные факты, общие истины
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm">
                  Планы, предсказания, обещания
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-5 border-2 border-blue-300">
        <p className="font-bold text-blue-900 text-lg mb-3">
          💡 Главное о First Conditional:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white rounded p-3">
            <p className="text-sm font-bold text-blue-900 mb-1">✅ Когда?</p>
            <p className="text-xs text-zinc-600">Реальные ситуации в будущем</p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="text-sm font-bold text-blue-900 mb-1">✅ Как?</p>
            <p className="text-xs text-zinc-600">If + Present, WILL + V1</p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="text-sm font-bold text-blue-900 mb-1">✅ Зачем?</p>
            <p className="text-xs text-zinc-600">
              Планы, предсказания, обещания
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Структура First Conditional ===== */
function Step2() {
  const exercise1: FillItem[] = [
    {
      left: "1. If it rains, I",
      right: "an umbrella. (take)",
      answers: ["will take"],
      explanation: "Правильно: will take — результат в будущем",
    },
    {
      left: "2. If she studies hard, she",
      right: "the exam. (pass)",
      answers: ["will pass"],
      explanation: "Правильно: will pass — вероятный результат",
    },
    {
      left: "3. If we leave now, we",
      right: "on time. (arrive)",
      answers: ["will arrive"],
      explanation: "Правильно: will arrive — условие выполнится",
    },
    {
      left: "4. If you eat too much, you",
      right: "sick. (feel)",
      answers: ["will feel"],
      explanation: "Правильно: will feel — предсказание",
    },
    {
      left: "5. If he calls me, I",
      right: "him. (help)",
      answers: ["will help"],
      explanation: "Правильно: will help — обещание",
    },
    {
      left: "6. If they come early, we",
      right: "dinner together. (have)",
      answers: ["will have"],
      explanation: "Правильно: will have — план на будущее",
    },
  ];

  return (
    <>
      <UiSection title="🔨 Структура First Conditional">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-bold text-indigo-900 mb-4">
            📐 Подробная формула
          </p>

          <div className="bg-white rounded-lg p-5 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-green-900 mb-3 text-lg">
                  Часть 1: IF-clause (условие)
                </p>
                <div className="bg-green-50 rounded p-4 mb-3">
                  <p className="text-center text-xl font-bold text-green-900">
                    IF + <span className="text-green-600">PRESENT SIMPLE</span>
                  </p>
                </div>
                <p className="text-sm text-zinc-700 mb-2">
                  В IF-части используем <strong>Present Simple</strong>, хотя
                  говорим о будущем!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2 border border-green-200">
                    <p className="text-sm">
                      If it <strong className="text-green-600">rains</strong>
                    </p>
                    <p className="text-xs text-zinc-600">Если пойдёт дождь</p>
                  </div>
                  <div className="bg-white rounded p-2 border border-green-200">
                    <p className="text-sm">
                      If you <strong className="text-green-600">study</strong>
                    </p>
                    <p className="text-xs text-zinc-600">Если ты учишься</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-purple-900 mb-3 text-lg">
                  Часть 2: Main clause (результат)
                </p>
                <div className="bg-purple-50 rounded p-4 mb-3">
                  <p className="text-center text-xl font-bold text-purple-900">
                    <span className="text-purple-600">WILL</span> + V1
                  </p>
                </div>
                <p className="text-sm text-zinc-700 mb-2">
                  В главной части используем <strong>WILL + глагол</strong> —
                  будущее!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2 border border-purple-200">
                    <p className="text-sm">
                      I <strong className="text-purple-600">will stay</strong>{" "}
                      home
                    </p>
                    <p className="text-xs text-zinc-600">Я останусь дома</p>
                  </div>
                  <div className="bg-white rounded p-2 border border-purple-200">
                    <p className="text-sm">
                      you <strong className="text-purple-600">will pass</strong>
                    </p>
                    <p className="text-xs text-zinc-600">ты сдашь</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-bold text-blue-900 mb-2">
              ✨ Полное предложение:
            </p>
            <p className="text-center text-lg mb-2">
              If it <strong className="text-green-600">rains</strong>, I{" "}
              <strong className="text-purple-600">will stay</strong> home.
            </p>
            <p className="text-center text-sm text-zinc-600">
              Если пойдёт дождь, я останусь дома.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔄 Порядок частей можно менять!">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <p className="font-bold text-yellow-900 text-lg mb-4">
            ⚠️ IF-часть может быть в начале или в конце!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">1️⃣</div>
                <div>
                  <p className="font-bold text-blue-900 text-lg">IF в начале</p>
                  <p className="text-sm text-blue-700">Запятая ОБЯЗАТЕЛЬНА!</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm mb-1">
                    <strong>If</strong> it rains
                    <strong className="text-red-600">,</strong> I will stay
                    home.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если пойдёт дождь, я останусь дома.
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm mb-1">
                    <strong>If</strong> you study
                    <strong className="text-red-600">,</strong> you will pass.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если ты учишься, ты сдашь.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">2️⃣</div>
                <div>
                  <p className="font-bold text-green-900 text-lg">IF в конце</p>
                  <p className="text-sm text-green-700">Без запятой!</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm mb-1">
                    I will stay home <strong>if</strong> it rains.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я останусь дома, если пойдёт дождь.
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm mb-1">
                    You will pass <strong>if</strong> you study.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Ты сдашь, если ты учишься.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 rounded-lg p-4 mt-4">
            <p className="font-bold text-yellow-900 mb-2">
              💡 Правило запятой:
            </p>
            <p className="text-sm text-zinc-700 mb-1">
              • IF в начале → <strong>ЗАПЯТАЯ</strong> после IF-части ✅
            </p>
            <p className="text-sm text-zinc-700">
              • IF в конце → <strong>БЕЗ ЗАПЯТОЙ</strong> ✅
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="✅ ❌ ❓ Все типы предложений">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">✅</div>
              <p className="font-bold text-green-900 text-xl">
                Утверждение (+)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  If it rains, I{" "}
                  <strong className="text-green-600">will stay</strong> home.
                </p>
                <p className="text-xs text-zinc-600">Я останусь дома.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  If she comes, we{" "}
                  <strong className="text-green-600">will start</strong>.
                </p>
                <p className="text-xs text-zinc-600">Мы начнём.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">❌</div>
              <p className="font-bold text-red-900 text-xl">Отрицание (-)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  If it rains, I{" "}
                  <strong className="text-red-600">won&apos;t go</strong> out.
                </p>
                <p className="text-xs text-zinc-600">Я не выйду.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  If he doesn&apos;t call, I{" "}
                  <strong className="text-red-600">won&apos;t help</strong> him.
                </p>
                <p className="text-xs text-zinc-600">Я не помогу ему.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">❓</div>
              <p className="font-bold text-blue-900 text-xl">Вопрос (?)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  If it rains,{" "}
                  <strong className="text-blue-600">will you stay</strong> home?
                </p>
                <p className="text-xs text-zinc-600">Ты останешься дома?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  <strong className="text-blue-600">Will she come</strong> if I
                  invite her?
                </p>
                <p className="text-xs text-zinc-600">
                  Она придёт, если я приглашу?
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Образуйте First Conditional"
        instruction="Поставьте глагол в правильную форму (will + глагол)."
        items={exercise1}
      />

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-5 border-2 border-indigo-300">
        <p className="font-bold text-indigo-900 text-lg mb-3">
          💡 Запомни формулу:
        </p>
        <div className="bg-white rounded p-4 text-center">
          <p className="text-xl font-bold text-indigo-900">
            IF + <span className="text-green-600">PRESENT</span>,{" "}
            <span className="text-purple-600">WILL</span> + V1
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Когда использовать First Conditional ===== */
function Step3() {
  return (
    <>
      <UiSection title="🎯 Когда использовать First Conditional?">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-4 border-2 border-blue-300">
          <p className="text-lg font-semibold text-blue-900 mb-3">
            5 основных ситуаций для First Conditional
          </p>
          <p className="text-zinc-700">
            First Conditional используется для реальных, вероятных ситуаций в
            будущем.
          </p>
        </div>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-white rounded-lg border-2 border-green-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🔮</div>
            <div className="flex-1">
              <p className="font-bold text-green-900 text-xl mb-3">
                1. Предсказания (Predictions)
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Когда мы предсказываем, что произойдёт в будущем при
                определённом условии.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If it rains tomorrow, the match will be cancelled.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если завтра пойдёт дождь, матч отменят.
                  </p>
                </div>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If she arrives late, she will miss the train.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если она опоздает, она пропустит поезд.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-blue-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🤝</div>
            <div className="flex-1">
              <p className="font-bold text-blue-900 text-xl mb-3">
                2. Обещания (Promises)
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Когда мы обещаем что-то сделать при определённом условии.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If you help me, I will buy you lunch.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если ты мне поможешь, я куплю тебе обед.
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If you finish your homework, I will take you to the cinema.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если ты закончишь домашку, я отведу тебя в кино.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-purple-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-5xl">⚠️</div>
            <div className="flex-1">
              <p className="font-bold text-purple-900 text-xl mb-3">
                3. Предупреждения (Warnings)
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Когда мы предупреждаем о возможных негативных последствиях.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If you don&apos;t study, you will fail the exam.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если ты не будешь учиться, ты провалишь экзамен.
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If you touch that, you will burn yourself.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если ты к этому прикоснёшься, ты обожжёшься.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-amber-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-5xl">💡</div>
            <div className="flex-1">
              <p className="font-bold text-amber-900 text-xl mb-3">
                4. Советы (Advice)
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Когда мы даём советы о том, что лучше сделать.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-amber-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If you feel tired, you should rest.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если ты устал, тебе следует отдохнуть.
                  </p>
                </div>
                <div className="bg-amber-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If you want to improve, you will need to practice more.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если хочешь улучшиться, тебе нужно больше практиковаться.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-indigo-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-5xl">📅</div>
            <div className="flex-1">
              <p className="font-bold text-indigo-900 text-xl mb-3">
                5. Планы и договорённости (Plans & Arrangements)
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Когда мы обсуждаем планы, зависящие от условий.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-indigo-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If everyone agrees, we will start the project next week.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если все согласятся, мы начнём проект на следующей неделе.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-4">
                  <p className="text-sm font-bold mb-2">
                    If the weather is nice, we will have a picnic.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если погода будет хорошей, у нас будет пикник.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
        <p className="font-bold text-blue-900 text-lg mb-4">
          💭 Как определить, что нужен First Conditional?
        </p>
        <div className="space-y-2 text-sm text-zinc-700">
          <p>
            ✓ Ситуация <strong>реальная</strong> (не фантазия)
          </p>
          <p>
            ✓ Говорим о <strong>будущем</strong>
          </p>
          <p>
            ✓ Условие <strong>может выполниться</strong> (вероятность 50-90%)
          </p>
          <p>✓ Есть причинно-следственная связь: &quot;Если A, то B&quot;</p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Модальные глаголы в First Conditional ===== */
function Step4() {
  const exercise2: FillItem[] = [
    {
      left: "1. If it rains, you",
      right: "take an umbrella. (should)",
      answers: ["should"],
      explanation: "SHOULD = совет (тебе следует)",
    },
    {
      left: "2. If you finish early, you",
      right: "leave. (can)",
      answers: ["can"],
      explanation: "CAN = разрешение (можешь)",
    },
    {
      left: "3. If he studies, he",
      right: "pass the exam. (might)",
      answers: ["might"],
      explanation: "MIGHT = возможность (возможно, сдаст)",
    },
    {
      left: "4. If we leave now, we",
      right: "be late. (may)",
      answers: ["may"],
      explanation: "MAY = вероятность (может быть)",
    },
  ];

  return (
    <>
      <UiSection title="🔧 Модальные глаголы в First Conditional">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="text-lg font-semibold text-purple-900 mb-3">
            WILL — не единственный вариант!
          </p>
          <p className="text-zinc-700 mb-2">
            Вместо WILL можно использовать другие модальные глаголы для разных
            оттенков значения.
          </p>
          <p className="text-zinc-700">
            Это делает речь более естественной и точной!
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border-2 border-blue-200 p-5">
          <div className="text-4xl mb-3">🔵</div>
          <p className="font-bold text-blue-900 text-xl mb-3">CAN</p>
          <p className="text-sm text-zinc-700 mb-3">
            Возможность, способность, разрешение
          </p>
          <div className="bg-blue-50 rounded p-4 mb-3">
            <p className="text-sm font-bold mb-2">
              If you finish early, you{" "}
              <strong className="text-blue-600">can</strong> leave.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если закончишь рано, можешь уйти.
            </p>
            <p className="text-xs text-blue-700 italic">💡 Разрешение</p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="text-sm font-bold mb-2">
              If you practice, you{" "}
              <strong className="text-blue-600">can</strong> improve.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если будешь практиковаться, сможешь улучшиться.
            </p>
            <p className="text-xs text-blue-700 italic">💡 Способность</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-purple-200 p-5">
          <div className="text-4xl mb-3">🟣</div>
          <p className="font-bold text-purple-900 text-xl mb-3">MAY / MIGHT</p>
          <p className="text-sm text-zinc-700 mb-3">
            Вероятность, возможность (менее уверенно, чем WILL)
          </p>
          <div className="bg-purple-50 rounded p-4 mb-3">
            <p className="text-sm font-bold mb-2">
              If it rains, we <strong className="text-purple-600">may</strong>{" "}
              stay home.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если пойдёт дождь, мы, возможно, останемся дома.
            </p>
            <p className="text-xs text-purple-700 italic">
              💡 Около 50% вероятности
            </p>
          </div>
          <div className="bg-purple-50 rounded p-4">
            <p className="text-sm font-bold mb-2">
              If he calls, I <strong className="text-purple-600">might</strong>{" "}
              answer.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если он позвонит, я, может быть, отвечу.
            </p>
            <p className="text-xs text-purple-700 italic">
              💡 Меньше вероятности
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-green-200 p-5">
          <div className="text-4xl mb-3">🟢</div>
          <p className="font-bold text-green-900 text-xl mb-3">SHOULD</p>
          <p className="text-sm text-zinc-700 mb-3">
            Совет, рекомендация (тебе следует)
          </p>
          <div className="bg-green-50 rounded p-4 mb-3">
            <p className="text-sm font-bold mb-2">
              If you feel sick, you{" "}
              <strong className="text-green-600">should</strong> see a doctor.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если ты чувствуешь себя плохо, тебе следует пойти к врачу.
            </p>
            <p className="text-xs text-green-700 italic">💡 Совет</p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="text-sm font-bold mb-2">
              If it&apos;s important, you{" "}
              <strong className="text-green-600">should</strong> call him.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если это важно, тебе следует позвонить ему.
            </p>
            <p className="text-xs text-green-700 italic">💡 Рекомендация</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-amber-200 p-5">
          <div className="text-4xl mb-3">🟡</div>
          <p className="font-bold text-amber-900 text-xl mb-3">MUST</p>
          <p className="text-sm text-zinc-700 mb-3">
            Необходимость, обязанность (должен)
          </p>
          <div className="bg-amber-50 rounded p-4 mb-3">
            <p className="text-sm font-bold mb-2">
              If you want to pass, you{" "}
              <strong className="text-amber-600">must</strong> study hard.
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если хочешь сдать, ты должен усердно учиться.
            </p>
            <p className="text-xs text-amber-700 italic">💡 Необходимость</p>
          </div>
          <div className="bg-amber-50 rounded p-4">
            <p className="text-sm font-bold mb-2">
              If we win, we <strong className="text-amber-600">must</strong>{" "}
              celebrate!
            </p>
            <p className="text-xs text-zinc-600 mb-1">
              Если мы победим, мы должны это отпраздновать!
            </p>
            <p className="text-xs text-amber-700 italic">💡 Сильное желание</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
        <p className="font-bold text-indigo-900 text-lg mb-4">
          📊 Шкала уверенности (от слабой к сильной)
        </p>
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between text-sm">
            <div className="text-center flex-1">
              <p className="font-bold text-purple-600">MIGHT</p>
              <p className="text-xs text-zinc-600">~30%</p>
            </div>
            <div className="text-zinc-400">→</div>
            <div className="text-center flex-1">
              <p className="font-bold text-purple-600">MAY</p>
              <p className="text-xs text-zinc-600">~50%</p>
            </div>
            <div className="text-zinc-400">→</div>
            <div className="text-center flex-1">
              <p className="font-bold text-blue-600">CAN</p>
              <p className="text-xs text-zinc-600">~70%</p>
            </div>
            <div className="text-zinc-400">→</div>
            <div className="text-center flex-1">
              <p className="font-bold text-green-600">WILL</p>
              <p className="text-xs text-zinc-600">~90%</p>
            </div>
            <div className="text-zinc-400">→</div>
            <div className="text-center flex-1">
              <p className="font-bold text-amber-600">MUST</p>
              <p className="text-xs text-zinc-600">100%</p>
            </div>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Выберите правильный модальный глагол"
        instruction="Вставьте подходящий модальный глагол."
        items={exercise2}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: UNLESS, AS LONG AS, PROVIDED THAT ===== */
function Step5() {
  const exercise3: FillItem[] = [
    {
      left: "1. I will go",
      right: "it rains. (если не)",
      answers: ["unless"],
      explanation: "UNLESS = if not (если не пойдёт дождь)",
    },
    {
      left: "2. You can stay",
      right: "as you are quiet. (при условии что)",
      answers: ["as long as", "provided that"],
      explanation: "AS LONG AS / PROVIDED THAT = при условии что",
    },
    {
      left: "3.",
      right: "you hurry, we will be late. (если не)",
      answers: ["Unless"],
      explanation: "UNLESS = if not (если ты не поторопишься)",
    },
    {
      left: "4. I will help you",
      right: "you promise to try. (при условии что)",
      answers: ["provided that", "as long as"],
      explanation: "PROVIDED THAT = при условии что (обещаешь)",
    },
  ];

  return (
    <>
      <UiSection title="🔄 Альтернативы IF: UNLESS, AS LONG AS, PROVIDED THAT">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-4 border-2 border-amber-300">
          <p className="text-lg font-semibold text-amber-900 mb-3">
            Не только IF! Другие способы выразить условие
          </p>
          <p className="text-zinc-700">
            Эти конструкции делают вашу речь более разнообразной и естественной.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border-2 border-red-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">🚫</div>
            <div>
              <p className="font-bold text-red-900 text-2xl mb-2">UNLESS</p>
              <p className="text-lg text-red-700">= IF NOT (если не)</p>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 mb-4">
            <p className="font-bold text-red-900 mb-3">Формула:</p>
            <p className="text-center text-xl font-bold text-red-900 mb-2">
              UNLESS + Present, WILL + V1
            </p>
            <p className="text-center text-sm text-zinc-600">
              = IF + NOT + Present, WILL + V1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <p className="text-sm font-bold mb-2">
                I will go <strong className="text-red-600">unless</strong> it
                rains.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Я пойду, если не пойдёт дождь.
              </p>
              <p className="text-xs text-red-700 italic">
                = I will go <strong>if it doesn&apos;t rain</strong>.
              </p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <p className="text-sm font-bold mb-2">
                <strong className="text-red-600">Unless</strong> you hurry,
                we&apos;ll be late.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Если ты не поторопишься, мы опоздаем.
              </p>
              <p className="text-xs text-red-700 italic">
                = <strong>If you don&apos;t hurry</strong>, we&apos;ll be late.
              </p>
            </div>
          </div>

          <div className="bg-red-100 rounded-lg p-4 mt-4">
            <p className="font-bold text-red-900 mb-2">⚠️ Важно:</p>
            <p className="text-sm text-zinc-700">
              После UNLESS НЕ используем отрицание!
              <br />✗ Unless you <del>don&apos;t</del> study...
              <br />✓ Unless you study...
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">⏱️</div>
            <div>
              <p className="font-bold text-blue-900 text-2xl mb-2">
                AS LONG AS
              </p>
              <p className="text-lg text-blue-700">
                = PROVIDED THAT (при условии что)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-900 mb-3">Значение:</p>
            <p className="text-sm text-zinc-700">
              Подчёркивает условие, которое должно быть выполнено.
              <br />
              &quot;При условии что...&quot;, &quot;До тех пор, пока...&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-2">
                You can stay{" "}
                <strong className="text-blue-600">as long as</strong>{" "}
                you&apos;re quiet.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Можешь остаться, при условии что ты будешь тихим.
              </p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-2">
                I&apos;ll help you{" "}
                <strong className="text-blue-600">provided that</strong> you
                try.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Я помогу тебе, при условии что ты будешь стараться.
              </p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-2">
                <strong className="text-blue-600">As long as</strong> you work
                hard, you&apos;ll succeed.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                При условии что ты усердно работаешь, ты добьёшься успеха.
              </p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-2">
                We&apos;ll go{" "}
                <strong className="text-blue-600">provided that</strong> it
                doesn&apos;t rain.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Мы пойдём, при условии что не пойдёт дождь.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
        <p className="font-bold text-purple-900 text-lg mb-4">
          📊 Сравнительная таблица
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-zinc-300 p-3 text-left">
                  Конструкция
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  Значение
                </th>
                <th className="border border-zinc-300 p-3 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>IF</strong>
                </td>
                <td className="border border-zinc-300 p-3">Если</td>
                <td className="border border-zinc-300 p-3">
                  If it rains, I&apos;ll stay home.
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>UNLESS</strong>
                </td>
                <td className="border border-zinc-300 p-3">Если не</td>
                <td className="border border-zinc-300 p-3">
                  Unless it rains, I&apos;ll go out.
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>AS LONG AS</strong>
                </td>
                <td className="border border-zinc-300 p-3">При условии что</td>
                <td className="border border-zinc-300 p-3">
                  As long as you try, I&apos;ll help.
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>PROVIDED THAT</strong>
                </td>
                <td className="border border-zinc-300 p-3">При условии что</td>
                <td className="border border-zinc-300 p-3">
                  Provided that you call, I&apos;ll come.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: UNLESS, AS LONG AS, PROVIDED THAT"
        instruction="Вставьте правильную конструкцию."
        items={exercise3}
      />
    </>
  );
}

/* ===== СТРАНИЦА 6: Слова для изучения (Vocabulary) ===== */
function Step6() {
  const vocabulary = [
    {
      word: "condition",
      transcription: "[kənˈdɪʃən]",
      translation: "условие",
      example: "One condition is that you study hard.",
    },
    {
      word: "consequence",
      transcription: "[ˈkɒnsɪkwəns]",
      translation: "последствие",
      example: "The consequence will be failure.",
    },
    {
      word: "result",
      transcription: "[rɪˈzʌlt]",
      translation: "результат",
      example: "The result will be positive.",
    },
    {
      word: "outcome",
      transcription: "[ˈaʊtkʌm]",
      translation: "исход, результат",
      example: "The outcome depends on you.",
    },
    {
      word: "possibility",
      transcription: "[ˌpɒsəˈbɪləti]",
      translation: "возможность",
      example: "There is a possibility of rain.",
    },
    {
      word: "probability",
      transcription: "[ˌprɒbəˈbɪləti]",
      translation: "вероятность",
      example: "The probability is high.",
    },
    {
      word: "predict",
      transcription: "[prɪˈdɪkt]",
      translation: "предсказывать",
      example: "I predict it will rain.",
    },
    {
      word: "promise",
      transcription: "[ˈprɒmɪs]",
      translation: "обещать",
      example: "I promise to help you.",
    },
    {
      word: "warn",
      transcription: "[wɔːn]",
      translation: "предупреждать",
      example: "I warn you not to go.",
    },
    {
      word: "advise",
      transcription: "[ədˈvaɪz]",
      translation: "советовать",
      example: "I advise you to study.",
    },
    {
      word: "unless",
      transcription: "[ənˈles]",
      translation: "если не",
      example: "Unless you hurry, we&apos;ll be late.",
    },
    {
      word: "provided that",
      transcription: "[prəˈvaɪdɪd ðæt]",
      translation: "при условии что",
      example: "Provided that you try, I&apos;ll help.",
    },
    {
      word: "as long as",
      transcription: "[əz lɒŋ əz]",
      translation: "при условии что",
      example: "As long as you work, you&apos;ll succeed.",
    },
    {
      word: "likely",
      transcription: "[ˈlaɪkli]",
      translation: "вероятно",
      example: "It&apos;s likely to rain tomorrow.",
    },
    {
      word: "unlikely",
      transcription: "[ʌnˈlaɪkli]",
      translation: "маловероятно",
      example: "It&apos;s unlikely to snow in summer.",
    },
    {
      word: "certain",
      transcription: "[ˈsɜːtn]",
      translation: "уверенный, определённый",
      example: "I&apos;m certain he will come.",
    },
    {
      word: "uncertain",
      transcription: "[ʌnˈsɜːtn]",
      translation: "неуверенный",
      example: "The outcome is uncertain.",
    },
    {
      word: "depend on",
      transcription: "[dɪˈpend ɒn]",
      translation: "зависеть от",
      example: "It depends on the weather.",
    },
    {
      word: "arrange",
      transcription: "[əˈreɪndʒ]",
      translation: "договориться",
      example: "We will arrange a meeting.",
    },
    {
      word: "cancel",
      transcription: "[ˈkænsəl]",
      translation: "отменить",
      example: "They will cancel the match.",
    },
  ];

  return (
    <>
      <UiSection title="📚 Слова для изучения темы First Conditional">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            20 ключевых слов для First Conditional
          </p>
          <p className="text-zinc-700 mb-2">
            Эти слова часто используются в условных предложениях.
          </p>
          <p className="text-zinc-700">
            Выучи их, чтобы свободно строить предложения с First Conditional!
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 gap-3">
        {vocabulary.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-zinc-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-900">
                {idx + 1}
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Слово</p>
                  <p className="font-bold text-zinc-900 text-lg">{item.word}</p>
                  <p className="text-xs text-zinc-600">{item.transcription}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Перевод</p>
                  <p className="font-semibold text-zinc-700">
                    {item.translation}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-zinc-500 mb-1">Пример</p>
                  <p className="text-sm italic text-zinc-700">{item.example}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
        <p className="font-bold text-blue-900 text-lg mb-4">
          💡 Как учить эти слова?
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
          <li>
            <strong>Группируй по темам:</strong> условие, последствие,
            вероятность
          </li>
          <li>
            <strong>Создавай карточки:</strong> слово на одной стороне, перевод
            и пример на другой
          </li>
          <li>
            <strong>Составляй свои предложения:</strong> используй новые слова в
            First Conditional
          </li>
          <li>
            <strong>Практикуй произношение:</strong> повторяй транскрипцию вслух
          </li>
          <li>
            <strong>Используй в диалогах:</strong> придумай ситуации с этими
            словами
          </li>
        </ol>
      </div>

      <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300">
        <p className="font-bold text-amber-900 text-lg mb-4">
          🎯 Полезные фразы с новыми словами
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white rounded p-4">
            <p className="text-sm font-bold mb-1">
              If you <strong>depend on</strong> luck, you <strong>might</strong>{" "}
              fail.
            </p>
            <p className="text-xs text-zinc-600">
              Если зависишь от удачи, можешь провалиться.
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-bold mb-1">
              I <strong>predict</strong> the <strong>outcome</strong> will be
              positive.
            </p>
            <p className="text-xs text-zinc-600">
              Я предсказываю, что исход будет положительным.
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-bold mb-1">
              It&apos;s <strong>likely</strong> they will{" "}
              <strong>cancel</strong> the event.
            </p>
            <p className="text-xs text-zinc-600">
              Вероятно, они отменят мероприятие.
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-bold mb-1">
              I <strong>advise</strong> you to consider the{" "}
              <strong>consequences</strong>.
            </p>
            <p className="text-xs text-zinc-600">
              Я советую тебе рассмотреть последствия.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Типичные ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки в First Conditional">
        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 mb-4 border-2 border-red-300">
          <p className="text-lg font-semibold text-red-900 mb-3">
            Разберём самые частые ошибки!
          </p>
          <p className="text-zinc-700">
            Избегай этих ошибок, чтобы говорить правильно.
          </p>
        </div>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 1: WILL в IF-части
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ If it <del>will rain</del>, I will stay home.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ If it <strong>rains</strong>, I will stay home.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> В IF-части используем Present Simple,
                НЕ будущее время!
                <br />
                Даже если говорим о будущем, после IF — Present Simple.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 2: Пропуск запятой (IF в начале)
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ If you study hard<del></del> you will pass.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ If you study hard
                  <strong className="text-red-600">,</strong> you will pass.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> Когда IF в начале, нужна запятая после
                IF-части!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 3: Отрицание с UNLESS
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ Unless you <del>don&apos;t</del> hurry, we&apos;ll be late.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ Unless you <strong>hurry</strong>, we&apos;ll be late.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> UNLESS уже содержит отрицание (= if
                not)!
                <br />
                Не нужно добавлять don&apos;t / doesn&apos;t.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 4: Неправильная форма глагола в IF-части
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ If he <del>go</del>, I will go too.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ If he <strong>goes</strong>, I will go too.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> Present Simple для he/she/it требует
                -s/-es!
                <br />
                he goes, she studies, it works
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 5: Использование Second Conditional вместо First
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ If it <del>rained</del>, I <del>would</del> stay home.
                  (говоря о завтра!)
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ If it <strong>rains</strong>, I <strong>will</strong> stay
                  home.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> Если ситуация реальная и вероятная →
                First Conditional!
                <br />
                Second Conditional — для нереальных/маловероятных ситуаций.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 6: Пропуск WILL в главной части
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ If you help me, I <del>buy</del> you lunch.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ If you help me, I <strong>will buy</strong> you lunch.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> В главной части нужен WILL (или другой
                модальный)!
                <br />
                Нельзя использовать просто глагол.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
        <p className="font-bold text-green-900 text-xl mb-4">
          ✅ Как избежать ошибок?
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
          <li>
            После IF всегда <strong>Present Simple</strong>, НЕ будущее время!
          </li>
          <li>
            IF в начале → нужна <strong>запятая</strong>
          </li>
          <li>UNLESS = if not, НЕ добавляй ещё одно отрицание</li>
          <li>
            He/she/it → добавляй <strong>-s/-es</strong> к глаголу
          </li>
          <li>
            Реальная ситуация → <strong>First</strong>, нереальная → Second
          </li>
          <li>
            В главной части нужен <strong>WILL</strong> (или другой модальный)
          </li>
        </ol>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Zero vs First Conditional (детально) ===== */
function Step8() {
  const exercise4: FillItem[] = [
    {
      left: "1. If you heat water to 100°C, it",
      right: ". (boil/boils/will boil)",
      answers: ["boils"],
      explanation: "Zero Conditional — научный факт, всегда происходит",
    },
    {
      left: "2. If it rains tomorrow, we",
      right: "the match. (cancel/will cancel)",
      answers: ["will cancel"],
      explanation: "First Conditional — предсказание о завтрашнем дне",
    },
    {
      left: "3. If you mix blue and yellow, you",
      right: "green. (get/will get)",
      answers: ["get"],
      explanation: "Zero Conditional — всегда получается зелёный",
    },
    {
      left: "4. If she arrives early, she",
      right: "us. (calls/will call)",
      answers: ["will call"],
      explanation: "First Conditional — план на будущее",
    },
  ];

  return (
    <>
      <UiSection title="⚖️ Zero vs First Conditional — детальное сравнение">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="text-lg font-semibold text-purple-900 mb-3">
            Как выбрать: Zero или First?
          </p>
          <p className="text-zinc-700">
            Оба типа используют Present Simple в IF-части, но есть важные
            отличия!
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">0️⃣</div>
            <div>
              <p className="text-2xl font-bold text-green-900">
                Zero Conditional
              </p>
              <p className="text-lg text-green-700">Факты и истины</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-green-900 mb-3">Формула:</p>
            <p className="text-center text-xl font-bold text-green-900 mb-2">
              IF + Present, Present
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="text-sm font-bold mb-2">🔬 Когда?</p>
              <p className="text-xs text-zinc-700">
                • Научные факты
                <br />
                • Общие истины
                <br />
                • Законы природы
                <br />• Привычки и рутины
              </p>
            </div>

            <div className="bg-white rounded p-4">
              <p className="text-sm font-bold mb-2">📊 Вероятность:</p>
              <p className="text-xs text-zinc-700">
                <strong>100%</strong> — всегда происходит
              </p>
            </div>

            <div className="bg-white rounded p-4">
              <p className="text-sm font-bold mb-2">⏰ Время:</p>
              <p className="text-xs text-zinc-700">
                Любое время — всегда верно
              </p>
            </div>

            <div className="bg-green-50 rounded p-4">
              <p className="text-sm font-bold mb-2">📚 Примеры:</p>
              <p className="text-xs mb-2">
                If you <strong>heat</strong> ice, it <strong>melts</strong>.
              </p>
              <p className="text-xs mb-2">
                If I <strong>feel</strong> tired, I <strong>go</strong> to bed.
              </p>
              <p className="text-xs">
                If you <strong>mix</strong> red and blue, you{" "}
                <strong>get</strong> purple.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">1️⃣</div>
            <div>
              <p className="text-2xl font-bold text-blue-900">
                First Conditional
              </p>
              <p className="text-lg text-blue-700">Будущие вероятности</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-900 mb-3">Формула:</p>
            <p className="text-center text-xl font-bold text-blue-900 mb-2">
              IF + Present, WILL + V1
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="text-sm font-bold mb-2">🔮 Когда?</p>
              <p className="text-xs text-zinc-700">
                • Предсказания
                <br />
                • Обещания
                <br />
                • Предупреждения
                <br />• Планы
              </p>
            </div>

            <div className="bg-white rounded p-4">
              <p className="text-sm font-bold mb-2">📊 Вероятность:</p>
              <p className="text-xs text-zinc-700">
                <strong>50-90%</strong> — вероятно произойдёт
              </p>
            </div>

            <div className="bg-white rounded p-4">
              <p className="text-sm font-bold mb-2">⏰ Время:</p>
              <p className="text-xs text-zinc-700">
                Будущее — ещё не произошло
              </p>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm font-bold mb-2">📚 Примеры:</p>
              <p className="text-xs mb-2">
                If it <strong>rains</strong>, I <strong>will take</strong> an
                umbrella.
              </p>
              <p className="text-xs mb-2">
                If you <strong>study</strong>, you <strong>will pass</strong>.
              </p>
              <p className="text-xs">
                If she <strong>calls</strong>, I <strong>will answer</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300">
        <p className="font-bold text-amber-900 text-xl mb-4">
          🎯 Как выбрать между Zero и First?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4">
            <p className="font-bold text-green-600 mb-2">Zero Conditional ↓</p>
            <p className="text-sm text-zinc-700 mb-2">
              ✓ Это всегда происходит?
              <br />
              ✓ Это научный факт?
              <br />
              ✓ Это общая истина?
              <br />✓ Вероятность = 100%?
            </p>
            <p className="text-xs text-green-700 italic">
              → Используй Present в обеих частях
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="font-bold text-blue-600 mb-2">First Conditional ↓</p>
            <p className="text-sm text-zinc-700 mb-2">
              ✓ Это о будущем?
              <br />
              ✓ Это может произойти?
              <br />
              ✓ Это план или предсказание?
              <br />✓ Вероятность &lt; 100%?
            </p>
            <p className="text-xs text-blue-700 italic">
              → Используй IF + Present, WILL
            </p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Zero или First Conditional?"
        instruction="Выберите правильную форму глагола."
        items={exercise4}
      />

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
        <p className="font-bold text-indigo-900 text-lg mb-4">
          💡 Подсказки для запоминания
        </p>
        <div className="space-y-2 text-sm text-zinc-700">
          <p>
            <strong>Zero:</strong> &quot;0 = всегда&quot; — вероятность 100%,
            факт
          </p>
          <p>
            <strong>First:</strong> &quot;1 = будущее&quot; — вероятное будущее,
            WILL
          </p>
          <p>
            <strong>Zero:</strong> &quot;If this happens, that happens&quot;
            (всегда)
          </p>
          <p>
            <strong>First:</strong> &quot;If this happens, that WILL
            happen&quot; (вероятно)
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Практика и упражнения ===== */
function Step9() {
  const exercise5: FillItem[] = [
    {
      left: "1. If you",
      right: "hard, you will succeed. (work)",
      answers: ["work"],
      explanation: "Present Simple в IF-части",
    },
    {
      left: "2. She will call you if she",
      right: "time. (have)",
      answers: ["has"],
      explanation: "He/she/it → has (Present Simple)",
    },
    {
      left: "3. If it doesn't rain, we",
      right: "for a walk. (go)",
      answers: ["will go"],
      explanation: "WILL + V1 в главной части",
    },
    {
      left: "4.",
      right: "you study, you will fail. (unless)",
      answers: ["Unless"],
      explanation: "UNLESS = if not",
    },
    {
      left: "5. If they arrive early, they",
      right: "help us. (can)",
      answers: ["can"],
      explanation: "Модальный глагол CAN вместо WILL",
    },
    {
      left: "6. You can go",
      right: "you finish your homework. (provided that)",
      answers: ["provided that", "as long as"],
      explanation: "PROVIDED THAT / AS LONG AS = при условии что",
    },
  ];

  return (
    <>
      <UiSection title="📝 Практика First Conditional">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-4 border-2 border-blue-300">
          <p className="text-lg font-semibold text-blue-900 mb-3">
            Проверь свои знания!
          </p>
          <p className="text-zinc-700">
            Эти упражнения охватывают все аспекты First Conditional.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Заполни пропуски"
        instruction="Вставьте правильную форму глагола."
        items={exercise5}
      />

      <UiSection title="✍️ Дополнительные задания">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 rounded-lg p-6">
            <p className="font-bold text-purple-900 mb-4 text-lg">
              Задание 1: Переведите на английский
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
              <li>Если пойдёт дождь, я возьму зонт.</li>
              <li>Если ты усердно учишься, ты сдашь экзамен.</li>
              <li>Я помогу тебе, если ты попросишь.</li>
              <li>Если мы уедем сейчас, мы не опоздаем.</li>
              <li>Если она не позвонит, я не пойду.</li>
              <li>Если не поторопишься, мы опоздаем.</li>
            </ol>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <p className="font-bold text-green-900 mb-4 text-lg">
              Задание 2: Исправьте ошибки
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
              <li>If it will rain, I will stay home. →</li>
              <li>If you study hard you will pass. →</li>
              <li>Unless you don&apos;t hurry, we&apos;ll be late. →</li>
              <li>If he go, I will go too. →</li>
              <li>If you help me, I buy you lunch. →</li>
            </ol>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300">
        <p className="font-bold text-amber-900 text-lg mb-4">
          🎯 Задание 3: Составьте свои предложения
        </p>
        <p className="text-sm text-zinc-700 mb-4">
          Используя First Conditional, составьте предложения на следующие темы:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-700">
          <li>
            <strong>Погода:</strong> Что вы будете делать, если завтра пойдёт
            дождь?
          </li>
          <li>
            <strong>Учёба:</strong> Что произойдёт, если вы усердно учитесь?
          </li>
          <li>
            <strong>Путешествия:</strong> Куда вы поедете, если у вас будет
            отпуск?
          </li>
          <li>
            <strong>Здоровье:</strong> Что вы сделаете, если почувствуете себя
            плохо?
          </li>
          <li>
            <strong>Работа:</strong> Что вы сделаете, если получите повышение?
          </li>
        </ol>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговый тест с чтением ===== */
function Step10() {
  const readingExercise: FillItem[] = [
    {
      left: "1. Sarah will visit the museum",
      right: "(True/False)",
      answers: ["True"],
      explanation:
        "В тексте: 'If the weather is good, she will visit the local museum'",
    },
    {
      left: "2. Sarah has been to Paris before",
      right: "(True/False)",
      answers: ["False"],
      explanation: "В тексте: 'She has never been to Paris before'",
    },
    {
      left: "3. Sarah will rent a bike if",
      right: "(choose: rains/is sunny/is cold)",
      answers: ["is sunny"],
      explanation: "В тексте: 'if it is sunny, she will rent a bike'",
    },
    {
      left: "4. Unless Sarah",
      right:
        "French, she will use a translation app. (speak/speaks/will speak)",
      answers: ["speaks"],
      explanation: "Unless = if not, используем Present Simple",
    },
  ];

  const fillInExercise: FillItem[] = [
    {
      left: "5. If I",
      right: "time, I will join you. (have)",
      answers: ["have"],
      explanation: "Present Simple в IF-части",
    },
    {
      left: "6. She",
      right: "call you if she arrives. (will)",
      answers: ["will"],
      explanation: "WILL в главной части",
    },
    {
      left: "7. If it",
      right: ", the match will be cancelled. (rain)",
      answers: ["rains"],
      explanation: "Present Simple, he/she/it → добавляем -s",
    },
    {
      left: "8.",
      right: "you finish early, you can leave. (If)",
      answers: ["If"],
      explanation: "IF для условия",
    },
  ];

  return (
    <>
      <UiSection title="📖 Итоговый тест: Чтение и упражнения">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Финальная проверка знаний!
          </p>
          <p className="text-zinc-700">Прочитайте текст и выполните задания.</p>
        </div>
      </UiSection>

      <UiSection title="📝 Reading: Sarah's Plans">
        <div className="bg-white rounded-lg border-2 border-blue-200 p-6 mb-6">
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Sarah is planning a trip to Paris next month. She has never been to
            Paris before, and she is very excited about it. She made a list of
            conditions and plans:
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            <strong className="text-blue-900">
              &quot;If the weather is good, I will visit the local museum and
              walk along the Seine River. If it rains, I will spend more time in
              cafes and bookshops. Unless I find a good hotel, I will stay at my
              friend&apos;s apartment.&quot;
            </strong>
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Sarah also thought about transportation:{" "}
            <strong className="text-blue-900">
              &quot;If it is sunny, I will rent a bike and explore the city. If
              it is too cold, I will use the metro. As long as I have a travel
              card, I can use public transport easily.&quot;
            </strong>
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            She is a bit worried about the language:{" "}
            <strong className="text-blue-900">
              &quot;Unless I speak French well, I will use a translation app. If
              people don&apos;t understand me, I will show them pictures or
              write things down.&quot;
            </strong>
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Part 1: True/False и выбор правильного ответа"
        instruction="Основываясь на тексте, ответьте на вопросы."
        items={readingExercise}
      />

      <CheckableExercise
        title="📝 Part 2: Дополните предложения"
        instruction="Вставьте правильное слово или форму глагола."
        items={fillInExercise}
      />

      <UiSection title="📊 Сводная таблица First Conditional">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-zinc-300 p-3 text-left">Аспект</th>
                <th className="border border-zinc-300 p-3 text-left">
                  Правило
                </th>
                <th className="border border-zinc-300 p-3 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Формула</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  IF + Present Simple, WILL + V1
                </td>
                <td className="border border-zinc-300 p-3">
                  If it rains, I will stay home.
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Когда?</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Реальные ситуации в будущем
                </td>
                <td className="border border-zinc-300 p-3">
                  Predictions, promises, warnings
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>IF-часть</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Present Simple (НЕ будущее!)
                </td>
                <td className="border border-zinc-300 p-3">
                  If you study (NOT will study)
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Главная часть</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  WILL / CAN / MAY / MIGHT / SHOULD
                </td>
                <td className="border border-zinc-300 p-3">
                  you will pass / you can leave
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Запятая</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  IF в начале → запятая ✓
                </td>
                <td className="border border-zinc-300 p-3">
                  If it rains<strong>,</strong> I&apos;ll stay.
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>UNLESS</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  = IF NOT (без отрицания!)
                </td>
                <td className="border border-zinc-300 p-3">
                  Unless you hurry (= If you don&apos;t)
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>AS LONG AS</strong>
                </td>
                <td className="border border-zinc-300 p-3">= PROVIDED THAT</td>
                <td className="border border-zinc-300 p-3">
                  As long as you try, I&apos;ll help.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 text-center border-2 border-blue-200">
        <p className="text-4xl mb-4">✅</p>
        <p className="text-2xl font-bold text-blue-900 mb-3">
          Вы завершили тему First Conditional!
        </p>
        <div className="bg-white rounded-lg p-6 inline-block text-left max-w-2xl">
          <p className="text-sm text-zinc-600 mb-3">Теперь вы знаете:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Формулу First Conditional (IF + Present, WILL + V1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                Когда использовать First Conditional (предсказания, обещания,
                предупреждения)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                Модальные глаголы в First Conditional (CAN, MAY, MIGHT, SHOULD,
                MUST)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Альтернативы IF (UNLESS, AS LONG AS, PROVIDED THAT)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Разницу между Zero и First Conditional</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>20 ключевых слов для темы</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Как избегать типичных ошибок</span>
            </li>
          </ul>
        </div>
        <p className="text-sm text-zinc-600 mt-6">
          💪 Продолжайте практиковаться и использовать First Conditional в речи!
        </p>
      </div>
    </>
  );
}
