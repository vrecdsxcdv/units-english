"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ModalsDeduction({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🔍 Modals of Deduction — Предположения и догадки">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              Модальные глаголы для выражения предположений
            </h2>
            <p className="text-zinc-700 mb-3">
              Когда мы не уверены в чём-то на 100%, мы используем **модальные
              глаголы предположения**. Они показывают, насколько мы уверены в
              своём утверждении.
            </p>
            <p className="text-zinc-700 mb-3">
              В русском языке: "должно быть", "наверное", "возможно", "не может
              быть", "вряд ли"
            </p>
            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200 mt-4">
              <p className="text-sm font-semibold text-indigo-900 mb-2">
                Пример ситуации:
              </p>
              <p className="text-sm text-zinc-700">
                🚪 Вы звоните другу, но он не отвечает. Вы делаете
                предположения:
              </p>
              <ul className="list-disc pl-6 mt-2 text-sm text-zinc-700 space-y-1">
                <li>
                  He <strong>must be</strong> sleeping. (Наверняка спит — 95%)
                </li>
                <li>
                  He <strong>might be</strong> busy. (Возможно, занят — 50%)
                </li>
                <li>
                  He <strong>can't be</strong> at home. (Не может быть дома —
                  5%)
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="📊 Шкала уверенности">
          <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-red-50 rounded-lg p-6 border-2 border-zinc-300">
            <h3 className="text-xl font-bold text-zinc-900 mb-4 text-center">
              От 100% уверенности до 0%
            </h3>

            <div className="space-y-3">
              <div className="bg-green-100 rounded-lg p-4 border-2 border-green-400">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-green-900">
                    100% — ФАКТ (не предположение)
                  </h4>
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-sm text-zinc-700">
                  He <strong>is</strong> at home. (Я знаю точно)
                </p>
              </div>

              <div className="bg-emerald-100 rounded-lg p-4 border-2 border-emerald-400">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-emerald-900">
                    95% — MUST (должно быть, наверняка)
                  </h4>
                  <span className="text-2xl">💯</span>
                </div>
                <p className="text-sm text-zinc-700 mb-1">
                  He <strong>must be</strong> at home. (Почти уверен)
                </p>
                <p className="text-xs text-zinc-600">
                  Русский: должно быть, наверняка, точно
                </p>
              </div>

              <div className="bg-lime-100 rounded-lg p-4 border-2 border-lime-400">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lime-900">
                    70-80% — SHOULD / OUGHT TO (вероятно)
                  </h4>
                  <span className="text-2xl">🤔</span>
                </div>
                <p className="text-sm text-zinc-700 mb-1">
                  He <strong>should be</strong> at home. (Вероятно)
                </p>
                <p className="text-xs text-zinc-600">
                  Русский: вероятно, должен быть
                </p>
              </div>

              <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-400">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-yellow-900">
                    30-50% — MIGHT / MAY / COULD (возможно)
                  </h4>
                  <span className="text-2xl">❓</span>
                </div>
                <p className="text-sm text-zinc-700 mb-1">
                  He <strong>might be</strong> at home. (Возможно, не знаю)
                </p>
                <p className="text-xs text-zinc-600">
                  Русский: возможно, может быть
                </p>
              </div>

              <div className="bg-red-100 rounded-lg p-4 border-2 border-red-400">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-red-900">
                    5% — CAN'T (не может быть)
                  </h4>
                  <span className="text-2xl">❌</span>
                </div>
                <p className="text-sm text-zinc-700 mb-1">
                  He <strong>can't be</strong> at home. (Уверен, что нет)
                </p>
                <p className="text-xs text-zinc-600">
                  Русский: не может быть, точно не
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="💪 MUST — Уверенность (95%)">
          <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-300 mb-4">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">
              MUST — "Должно быть", "Наверняка"
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Используем <strong>must</strong>, когда почти уверены (95%), что
              что-то правда. У нас есть доказательства или логика.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
                <p className="font-semibold text-emerald-900 mb-1">
                  Present Simple:
                </p>
                <p className="text-sm mb-1">
                  She <strong>must be</strong> tired. (Она должна быть уставшей)
                </p>
                <p className="text-xs text-zinc-600">
                  Доказательство: она работала 12 часов
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
                <p className="font-semibold text-emerald-900 mb-1">
                  Present Continuous:
                </p>
                <p className="text-sm mb-1">
                  He <strong>must be sleeping</strong>. (Он, должно быть, спит)
                </p>
                <p className="text-xs text-zinc-600">
                  Доказательство: свет выключен, тихо
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
                <p className="font-semibold text-emerald-900 mb-1">
                  Perfect (прошлое):
                </p>
                <p className="text-sm mb-1">
                  She <strong>must have left</strong>. (Она, должно быть, ушла)
                </p>
                <p className="text-xs text-zinc-600">
                  Доказательство: её сумки нет
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Формулы:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• must + be + adjective (must be tired)</li>
                <li>• must + be + -ing (must be working)</li>
                <li>• must + have + V3 (must have gone)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-2">
                🔊 The music is very loud. They{" "}
                <strong className="text-emerald-700">must be</strong> having a
                party.
              </p>
              <p className="text-xs text-zinc-600">
                Музыка очень громкая. Они, должно быть, устраивают вечеринку.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-2">
                😴 She looks exhausted. She{" "}
                <strong className="text-emerald-700">must have worked</strong>{" "}
                all night.
              </p>
              <p className="text-xs text-zinc-600">
                Она выглядит измученной. Она, должно быть, работала всю ночь.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-2">
                🌧️ The ground is wet. It{" "}
                <strong className="text-emerald-700">must have rained</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Земля мокрая. Должно быть, шёл дождь.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
              <p className="text-sm mb-2">
                📚 He has so many books. He{" "}
                <strong className="text-emerald-700">must love</strong> reading.
              </p>
              <p className="text-xs text-zinc-600">
                У него так много книг. Он, должно быть, любит читать.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="❌ CAN'T — Уверенность в обратном (5%)">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-3">
              CAN'T — "Не может быть", "Точно не"
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Используем <strong>can't</strong>, когда уверены (95%), что что-то
              НЕ правда. Это логически невозможно.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-1">
                  Present Simple:
                </p>
                <p className="text-sm mb-1">
                  He <strong>can't be</strong> 80. (Ему не может быть 80)
                </p>
                <p className="text-xs text-zinc-600">Он выглядит на 40!</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-1">
                  Present Continuous:
                </p>
                <p className="text-sm mb-1">
                  She <strong>can't be working</strong>. (Она не может работать)
                </p>
                <p className="text-xs text-zinc-600">Сегодня воскресенье!</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-1">
                  Perfect (прошлое):
                </p>
                <p className="text-sm mb-1">
                  He <strong>can't have stolen</strong> it. (Он не мог украсть)
                </p>
                <p className="text-xs text-zinc-600">Он был со мной!</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Формулы:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• can't + be + adjective (can't be true)</li>
                <li>• can't + be + -ing (can't be sleeping)</li>
                <li>• can't + have + V3 (can't have done)</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <h4 className="font-bold text-indigo-900 mb-3">
              🆚 MUST vs CAN'T — Противоположности
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-100 rounded p-3">
                <p className="font-semibold text-emerald-900 mb-1">
                  MUST BE ✅
                </p>
                <p className="text-sm">He must be rich.</p>
                <p className="text-xs text-zinc-600">Он, должно быть, богат.</p>
              </div>
              <div className="bg-red-100 rounded p-3">
                <p className="font-semibold text-red-900 mb-1">CAN'T BE ❌</p>
                <p className="text-sm">He can't be rich.</p>
                <p className="text-xs text-zinc-600">
                  Он не может быть богатым.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                👨‍💼 He's only 25. He{" "}
                <strong className="text-red-700">can't be</strong> a CEO.
              </p>
              <p className="text-xs text-zinc-600">
                Ему всего 25. Он не может быть директором.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                🏃 She just ate. She{" "}
                <strong className="text-red-700">can't be</strong> hungry.
              </p>
              <p className="text-xs text-zinc-600">
                Она только что ела. Она не может быть голодной.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                🌙 It's 3 AM. They{" "}
                <strong className="text-red-700">can't be working</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Сейчас 3 часа ночи. Они не могут работать.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <p className="text-sm mb-2">
                🚗 He doesn't have a car. He{" "}
                <strong className="text-red-700">can't have driven</strong>{" "}
                here.
              </p>
              <p className="text-xs text-zinc-600">
                У него нет машины. Он не мог приехать на машине.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="❓ MIGHT / MAY / COULD — Возможность (30-50%)">
          <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-300 mb-4">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">
              MIGHT / MAY / COULD — "Возможно", "Может быть"
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Используем, когда **не уверены** (30-50%). Это просто одна из
              возможностей.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-900 mb-2">
                  Все три глагола почти одинаковые:
                </p>
                <p className="text-sm mb-1">
                  He <strong>might be</strong> at home. = He{" "}
                  <strong>may be</strong> at home. = He{" "}
                  <strong>could be</strong> at home.
                </p>
                <p className="text-xs text-zinc-600">
                  Он, возможно, дома. (Не знаю точно)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-900 mb-1">
                  С Continuous:
                </p>
                <p className="text-sm mb-1">
                  She <strong>might be watching</strong> TV. (Возможно, смотрит
                  ТВ)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-900 mb-1">
                  С Perfect (прошлое):
                </p>
                <p className="text-sm mb-1">
                  He <strong>may have forgotten</strong>. (Возможно, забыл)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">💡 Отрицание:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>might not / may not</strong> = возможно, не
                </li>
                <li>
                  • ❌ <strong>couldn't</strong> = НЕ используем для
                  предположений (couldn't = can't)
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-300">
              <h4 className="font-semibold text-yellow-900 mb-2">MIGHT</h4>
              <p className="text-sm mb-1">
                It <strong>might rain</strong> later.
              </p>
              <p className="text-xs text-zinc-600">Возможно, пойдёт дождь.</p>
            </div>

            <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-300">
              <h4 className="font-semibold text-yellow-900 mb-2">MAY</h4>
              <p className="text-sm mb-1">
                She <strong>may come</strong> to the party.
              </p>
              <p className="text-xs text-zinc-600">Может быть, придёт.</p>
            </div>

            <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-300">
              <h4 className="font-semibold text-yellow-900 mb-2">COULD</h4>
              <p className="text-sm mb-1">
                He <strong>could be</strong> sick.
              </p>
              <p className="text-xs text-zinc-600">Возможно, он болен.</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <p className="text-sm mb-2">
                📱 She's not answering. She{" "}
                <strong className="text-yellow-700">might be</strong> in a
                meeting.
              </p>
              <p className="text-xs text-zinc-600">
                Она не отвечает. Возможно, на встрече.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <p className="text-sm mb-2">
                🔑 I can't find my keys. I{" "}
                <strong className="text-yellow-700">may have left</strong> them
                at work.
              </p>
              <p className="text-xs text-zinc-600">
                Не могу найти ключи. Возможно, оставил на работе.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <p className="text-sm mb-2">
                ⏰ He's late. He{" "}
                <strong className="text-yellow-700">could be</strong> stuck in
                traffic.
              </p>
              <p className="text-xs text-zinc-600">
                Он опаздывает. Возможно, застрял в пробке.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="🤔 SHOULD / OUGHT TO — Вероятность (70-80%)">
          <div className="bg-lime-50 rounded-lg p-6 border-2 border-lime-300 mb-4">
            <h3 className="text-xl font-bold text-lime-900 mb-3">
              SHOULD / OUGHT TO — "Вероятно", "Должно быть"
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Используем, когда **довольно уверены** (70-80%). Это **ожидание**
              или **логический вывод**.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-lime-400">
                <p className="font-semibold text-lime-900 mb-2">
                  Present / Future:
                </p>
                <p className="text-sm mb-1">
                  She <strong>should be</strong> home by now. (Вероятно, уже
                  дома)
                </p>
                <p className="text-xs text-zinc-600">
                  Ожидание: она вышла 2 часа назад
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-lime-400">
                <p className="font-semibold text-lime-900 mb-1">
                  Perfect (прошлое):
                </p>
                <p className="text-sm mb-1">
                  They <strong>should have arrived</strong> by now. (Вероятно,
                  прибыли)
                </p>
                <p className="text-xs text-zinc-600">Рейс был 2 часа назад</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
              <p className="font-bold text-amber-900 mb-2">
                💡 SHOULD vs OUGHT TO:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>Should</strong> — более распространённый
                </li>
                <li>
                  • <strong>Ought to</strong> — более формальный, менее частый
                </li>
                <li>• Значение одинаковое!</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-lime-200">
              <p className="text-sm mb-2">
                🚆 The train left 10 minutes ago. It{" "}
                <strong className="text-lime-700">should be</strong> here soon.
              </p>
              <p className="text-xs text-zinc-600">
                Поезд вышел 10 минут назад. Он, вероятно, скоро будет здесь.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-lime-200">
              <p className="text-sm mb-2">
                📚 He studied hard. He{" "}
                <strong className="text-lime-700">ought to pass</strong> the
                exam.
              </p>
              <p className="text-xs text-zinc-600">
                Он усердно учился. Он, вероятно, сдаст экзамен.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-lime-200">
              <p className="text-sm mb-2">
                ☀️ The weather is nice. The streets{" "}
                <strong className="text-lime-700">should be</strong> busy.
              </p>
              <p className="text-xs text-zinc-600">
                Погода хорошая. Улицы, вероятно, полны народа.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-lime-200">
              <p className="text-sm mb-2">
                💼 She's very qualified. She{" "}
                <strong className="text-lime-700">should get</strong> the job.
              </p>
              <p className="text-xs text-zinc-600">
                Она очень квалифицированная. Она, вероятно, получит работу.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    const items: FillItem[] = [
      {
        left: "She looks exhausted. She",
        answers: ["must be"],
        right: "tired.",
        explanation: "Она выглядит измученной. Она, должно быть, уставшая.",
      },
      {
        left: "He's only 5 years old. He",
        answers: ["can't be"],
        right: "a doctor.",
        explanation: "Ему всего 5 лет. Он не может быть врачом.",
      },
      {
        left: "I'm not sure where John is. He",
        answers: ["might be"],
        right: "at the gym.",
        explanation: "Я не уверен, где Джон. Возможно, он в спортзале.",
      },
      {
        left: "The train left 5 minutes ago. It",
        answers: ["should be"],
        right: "here soon.",
        explanation: "Поезд вышел 5 минут назад. Он, вероятно, скоро будет здесь.",
      },
      {
        left: "The lights are on. Someone",
        answers: ["must be"],
        right: "home.",
        explanation: "Свет горит. Кто-то, должно быть, дома.",
      },
      {
        left: "She said she hates spicy food. She",
        answers: ["can't be"],
        right: "eating curry.",
        explanation: "Она сказала, что ненавидит острое. Она не может есть карри.",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Выбери правильный модальный глагол">
          <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200 mb-4">
            <p className="text-sm font-semibold text-indigo-900 mb-2">
              📝 Задание:
            </p>
            <p className="text-sm text-zinc-700">
              Вставь правильный модальный глагол: <strong>must be</strong>,{" "}
              <strong>can't be</strong>, <strong>might be</strong> или{" "}
              <strong>should be</strong>. Подумай о степени уверенности!
            </p>
          </div>

          <CheckableExercise
            title="Базовое различение"
            instruction="Вставь модальный глагол."
            items={items}
            wideInputs
          />

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <p className="font-bold text-amber-900 mb-2">💡 Подсказка:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • Есть доказательства → <strong>must be</strong>
              </li>
              <li>
                • Логически невозможно → <strong>can't be</strong>
              </li>
              <li>
                • Не уверены → <strong>might be</strong>
              </li>
              <li>
                • Ожидание / вероятно → <strong>should be</strong>
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "The ground is wet. It",
        answers: ["must have rained"],
        right: "last night.",
        explanation: "Земля мокрая. Должно быть, ночью шёл дождь.",
      },
      {
        left: "She's not here yet. She",
        answers: ["might have forgotten"],
        right: "about the meeting.",
        explanation: "Её ещё нет. Возможно, она забыла о встрече.",
      },
      {
        left: "I can't find my wallet. I",
        answers: ["may have lost"],
        right: "it.",
        explanation: "Не могу найти кошелёк. Возможно, я потерял его.",
      },
      {
        left: "He looks confused. He",
        answers: ["can't have understood"],
        right: "the instructions.",
        explanation: "Он выглядит растерянным. Он не мог понять инструкции.",
      },
      {
        left: "She studied a lot. She",
        answers: ["should have passed"],
        right: "the exam.",
        explanation: "Она много занималась. Она, вероятно, сдала экзамен.",
      },
      {
        left: "They're not answering. They",
        answers: ["must have left"],
        right: "already.",
        explanation: "Они не отвечают. Они, должно быть, уже ушли.",
      },
      {
        left: "He wasn't at the party. He",
        answers: ["might not have been"],
        right: "invited.",
        explanation: "Его не было на вечеринке. Возможно, его не пригласили.",
      },
      {
        left: "The shop is closed. It",
        answers: ["can't have opened"],
        right: "yet.",
        explanation: "Магазин закрыт. Он не мог ещё открыться.",
      },
    ];

    return (
      <>
        <Section title="⏰ Perfect Forms — Предположения о прошлом">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              Предположения о прошлом
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда делаем предположения о **прошлом**, используем **Perfect
              Infinitive**: <strong>must/can't/might + have + V3</strong>
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-purple-900 mb-2">Формулы:</p>
                <ul className="text-sm text-zinc-700 space-y-1">
                  <li>
                    ✅ <strong>must have + V3</strong> — наверняка (прошлое)
                  </li>
                  <li>
                    ❌ <strong>can't have + V3</strong> — не могло быть
                    (прошлое)
                  </li>
                  <li>
                    ❓ <strong>might/may have + V3</strong> — возможно (прошлое)
                  </li>
                  <li>
                    🤔 <strong>should have + V3</strong> — вероятно (прошлое)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <CheckableExercise
            title="Предположения о прошлом"
            instruction="Используй модальный глагол + have + V3."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "Look! The lights are on. Someone",
        answers: ["must be working"],
        right: "late.",
        explanation: "Смотри! Свет горит. Кто-то, должно быть, работает допоздна.",
      },
      {
        left: "I can hear music. They",
        answers: ["must be having"],
        right: "a party.",
        explanation: "Я слышу музыку. Они, должно быть, устраивают вечеринку.",
      },
      {
        left: "She's not answering her phone. She",
        answers: ["might be driving"],
        right: ".",
        explanation: "Она не отвечает на телефон. Возможно, она за рулём.",
      },
      {
        left: "It's 3 AM. He",
        answers: ["can't be studying"],
        right: "now.",
        explanation: "Сейчас 3 часа ночи. Он не может сейчас заниматься.",
      },
      {
        left: "The train should arrive at 5. They",
        answers: ["should be arriving"],
        right: "any minute now.",
        explanation: "Поезд должен прибыть в 5. Они, вероятно, прибудут с минуты на минуту.",
      },
      {
        left: "I saw smoke. The building",
        answers: ["might be burning"],
        right: ".",
        explanation: "Я увидел дым. Здание, возможно, горит.",
      },
    ];

    return (
      <>
        <Section title="🔄 Continuous Forms — Предположения о процессе">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-3">
              Предположения о действии в процессе
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда предполагаем, что кто-то **сейчас что-то делает**,
              используем: <strong>modal + be + V-ing</strong>
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-cyan-900 mb-2">Формулы:</p>
                <ul className="text-sm text-zinc-700 space-y-1">
                  <li>
                    ✅ <strong>must be + V-ing</strong> — наверняка делает
                    сейчас
                  </li>
                  <li>
                    ❌ <strong>can't be + V-ing</strong> — не может делать
                    сейчас
                  </li>
                  <li>
                    ❓ <strong>might/may be + V-ing</strong> — возможно, делает
                  </li>
                  <li>
                    🤔 <strong>should be + V-ing</strong> — вероятно, делает
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400">
                <p className="text-sm mb-1">
                  She's not answering. She{" "}
                  <strong className="text-cyan-700">must be sleeping</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Она не отвечает. Она, должно быть, спит (сейчас).
                </p>
              </div>
            </div>
          </div>

          <CheckableExercise
            title="Действия в процессе"
            instruction="Используй модальный глагол + be + V-ing."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 9) {
    const scenarios = [
      {
        icon: "🚪",
        situation: "Дверь открыта",
        evidence: "Evidence: The door is open",
        options: [
          { modal: "must have left", level: "95%", color: "emerald" },
          {
            modal: "might have forgotten",
            level: "50%",
            color: "yellow",
          },
        ],
      },
      {
        icon: "📱",
        situation: "Телефон не отвечает",
        evidence: "Evidence: Phone not answering",
        options: [
          { modal: "might be busy", level: "50%", color: "yellow" },
          { modal: "could be sleeping", level: "50%", color: "yellow" },
          { modal: "can't be at work", level: "5%", color: "red" },
        ],
      },
      {
        icon: "😴",
        situation: "Выглядит уставшим",
        evidence: "Evidence: Looks exhausted",
        options: [
          { modal: "must be tired", level: "95%", color: "emerald" },
          {
            modal: "must have worked all night",
            level: "95%",
            color: "emerald",
          },
        ],
      },
    ];

    return (
      <>
        <Section title="🎭 Ситуации и выводы">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              Анализ ситуаций: Какой модальный выбрать?
            </h3>
            <p className="text-sm text-zinc-700">
              Посмотрим, как одна ситуация может иметь разные интерпретации в
              зависимости от доказательств.
            </p>
          </div>

          <div className="space-y-4">
            {scenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-zinc-200"
              >
                <h4 className="text-lg font-bold text-zinc-900 mb-3">
                  {scenario.icon} {scenario.situation}
                </h4>
                <p className="text-sm text-zinc-600 mb-3">
                  {scenario.evidence}
                </p>
                <div className="space-y-2">
                  {scenario.options.map((option, optIdx) => (
                    <div
                      key={optIdx}
                      className={`bg-${option.color}-50 rounded p-3 border-2 border-${option.color}-300`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">
                          Someone <strong>{option.modal}</strong> the door open
                        </p>
                        <span
                          className={`text-xs font-bold text-${option.color}-900`}
                        >
                          {option.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    const items: FillItem[] = [
      {
        left: "She has a British accent. She",
        answers: ["must be"],
        right: "from the UK.",
        explanation: "У неё британский акцент. Она, должно быть, из Великобритании.",
      },
      {
        left: "He's wearing a suit. He",
        answers: ["might be"],
        right: "going to an interview.",
        explanation: "На нём костюм. Возможно, он идёт на собеседование.",
      },
      {
        left: "The restaurant is closed on Mondays. It",
        answers: ["can't be"],
        right: "open today.",
        explanation: "Ресторан закрыт по понедельникам. Он не может быть открыт сегодня.",
      },
      {
        left: "She left an hour ago. She",
        answers: ["should be"],
        right: "there by now.",
        explanation: "Она вышла час назад. Она, вероятно, уже там.",
      },
      {
        left: "I heard a crash. Someone",
        answers: ["must have dropped"],
        right: "something.",
        explanation: "Я услышал грохот. Кто-то, должно быть, что-то уронил.",
      },
      {
        left: "She's a vegetarian. She",
        answers: ["can't be eating"],
        right: "meat.",
        explanation: "Она вегетарианка. Она не может есть мясо.",
      },
      {
        left: "The exam was easy. Most students",
        answers: ["should have passed"],
        right: ".",
        explanation: "Экзамен был лёгким. Большинство студентов, вероятно, сдали.",
      },
      {
        left: "It's sunny outside. People",
        answers: ["must be enjoying"],
        right: "the weather.",
        explanation: "На улице солнечно. Люди, должно быть, наслаждаются погодой.",
      },
      {
        left: "She's not here. She",
        answers: ["may have left"],
        right: "early.",
        explanation: "Её здесь нет. Возможно, она ушла рано.",
      },
      {
        left: "He's only been learning for a month. He",
        answers: ["can't be"],
        right: "fluent yet.",
        explanation: "Он учит всего месяц. Он не может ещё свободно говорить.",
      },
    ];

    return (
      <>
        <Section title="🎯 Мега-тест: Все модальные вместе (1/2)">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <p className="font-bold text-indigo-900 mb-2">
              📋 Большой тест на все модальные предположения
            </p>
            <p className="text-sm text-zinc-700">
              Определи уровень уверенности и выбери правильный модальный глагол.
              Здесь смешаны: must, can't, might/may/could, should.
            </p>
          </div>

          <CheckableExercise
            title="Мега-упражнение (часть 1)"
            instruction="Вставь правильный модальный глагол."
            items={items}
            wideInputs
          />
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "The baby is crying. She",
        answers: ["must be"],
        right: "hungry.",
        explanation: "Ребёнок плачет. Она, должно быть, голодная.",
      },
      {
        left: "I can't find my phone. I",
        answers: ["might have left"],
        right: "it at home.",
        explanation: "Не могу найти телефон. Возможно, я оставил его дома.",
      },
      {
        left: "She didn't study at all. She",
        answers: ["can't have passed"],
        right: "the test.",
        explanation: "Она вообще не училась. Она не могла сдать тест.",
      },
      {
        left: "They said they'd call. They",
        answers: ["should call"],
        right: "soon.",
        explanation: "Они сказали, что позвонят. Они, вероятно, позвонят скоро.",
      },
      {
        left: "The lights are off. Nobody",
        answers: ["must be"],
        right: "home.",
        explanation: "Свет выключен. Никого, должно быть, нет дома.",
      },
      {
        left: "She looks happy. She",
        answers: ["must have got"],
        right: "good news.",
        explanation: "Она выглядит счастливой. Она, должно быть, получила хорошие новости.",
      },
      {
        left: "He didn't come to work. He",
        answers: ["might be"],
        right: "sick.",
        explanation: "Он не пришёл на работу. Возможно, он болен.",
      },
      {
        left: "The door is locked. Everyone",
        answers: ["must have left"],
        right: ".",
        explanation: "Дверь заперта. Все, должно быть, ушли.",
      },
      {
        left: "She's been traveling for 12 hours. She",
        answers: ["must be"],
        right: "exhausted.",
        explanation: "Она в пути 12 часов. Она, должно быть, измучена.",
      },
      {
        left: "It's raining. The match",
        answers: ["might be"],
        right: "cancelled.",
        explanation: "Идёт дождь. Матч, возможно, отменят.",
      },
    ];

    return (
      <>
        <Section title="🎯 Мега-тест: Все модальные вместе (2/2)">
          <CheckableExercise
            title="Мега-упражнение (часть 2)"
            instruction="Вставь правильный модальный глагол."
            items={items}
            wideInputs
          />

          <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300 mt-4">
            <p className="font-bold text-green-900 mb-2">✅ Отличная работа!</p>
            <p className="text-sm text-zinc-700">
              Вы прошли через 20 предложений со всеми типами модальных
              предположений. Если вы набрали более 17/20, вы отлично понимаете
              modals of deduction!
            </p>
          </div>
        </Section>
      </>
    );
  }

  if (step === 12) {
    return (
      <>
        <Section title="🆚 Типичные ошибки">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Распространённые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: Использование "mustn't" для предположений
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He <strong>mustn't</strong> be at home.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He <strong>can't be</strong> at home.
                    </p>
                  </div>
                  <p className="text-xs text-zinc-600">
                    "Mustn't" = запрет, не предположение!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: Забывать "have" в Perfect
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She <strong>must gone</strong> home.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She <strong>must have gone</strong> home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: "Couldn't" для предположения о настоящем
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He <strong>couldn't</strong> be there now.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He <strong>can't be</strong> there now.
                    </p>
                  </div>
                  <p className="text-xs text-zinc-600">
                    Для настоящего используем "can't", не "couldn't"
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: Забывать "be" в Continuous
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She <strong>must working</strong>.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She <strong>must be working</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: Путать should (предположение) и should (совет)
                </p>
                <div className="space-y-2">
                  <div className="bg-blue-100 rounded p-3">
                    <p className="text-sm">
                      Предположение: He <strong>should be</strong> here soon.
                      (Вероятно, скоро будет)
                    </p>
                  </div>
                  <div className="bg-purple-100 rounded p-3">
                    <p className="text-sm">
                      Совет: You <strong>should study</strong> more. (Тебе
                      следует учиться больше)
                    </p>
                  </div>
                  <p className="text-xs text-zinc-600">
                    Контекст показывает значение!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 13) {
    return (
      <>
        <Section title="📚 Сравнение: Русский vs Английский">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Как переводить русские предположения на английский
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-3">
                  "Должно быть" — 3 варианта!
                </h4>
                <div className="space-y-2">
                  <div className="bg-emerald-50 rounded p-3">
                    <p className="text-sm font-semibold">
                      95% уверенности → MUST
                    </p>
                    <p className="text-sm">
                      Он, должно быть, богат. = He <strong>must be</strong>{" "}
                      rich.
                    </p>
                  </div>
                  <div className="bg-lime-50 rounded p-3">
                    <p className="text-sm font-semibold">
                      70-80% вероятность → SHOULD
                    </p>
                    <p className="text-sm">
                      Он, должно быть, скоро придёт. = He{" "}
                      <strong>should come</strong> soon.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-sm font-semibold">Обязанность → MUST</p>
                    <p className="text-sm">
                      Он должен прийти. = He <strong>must come</strong>. (не
                      предположение!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-3">
                  "Возможно" / "Может быть"
                </h4>
                <div className="space-y-2">
                  <div className="bg-yellow-50 rounded p-3">
                    <p className="text-sm">
                      Возможно, он дома. = He{" "}
                      <strong>might/may/could be</strong> at home.
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded p-3">
                    <p className="text-sm">
                      Может быть, он забыл. = He{" "}
                      <strong>might/may have forgotten</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-3">
                  "Не может быть" / "Вряд ли"
                </h4>
                <div className="space-y-2">
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm">
                      Не может быть! = It <strong>can't be</strong> true!
                    </p>
                  </div>
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-sm">
                      Он вряд ли знает. = He <strong>can't know</strong>. / He{" "}
                      <strong>probably doesn't know</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-3">"Наверное"</h4>
                <div className="space-y-2">
                  <div className="bg-lime-50 rounded p-3">
                    <p className="text-sm">
                      Наверное, он дома. = He's <strong>probably</strong> at
                      home. / He <strong>should be</strong> at home.
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded p-3">
                    <p className="text-sm">
                      Он наверняка знает. = He <strong>must know</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="🎓 Vocabulary: Полезные слова">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { word: "evidence", explanation: "доказательство" },
              { word: "certainty", explanation: "уверенность" },
              { word: "deduction", explanation: "вывод, дедукция" },
              { word: "assumption", explanation: "предположение" },
              { word: "speculation", explanation: "домысел" },
              { word: "probability", explanation: "вероятность" },
              { word: "possibility", explanation: "возможность" },
              { word: "likelihood", explanation: "вероятность" },
              { word: "inference", explanation: "умозаключение" },
              { word: "conclusion", explanation: "заключение" },
              { word: "guess", explanation: "догадка" },
              { word: "hypothesis", explanation: "гипотеза" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3 border-2 border-indigo-200"
              >
                <p className="font-semibold text-indigo-900">{item.word}</p>
                <p className="text-xs text-zinc-600">{item.ru}</p>
              </div>
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (step === 14) {
    const items: FillItem[] = [
      {
        left: "The streets are wet. It",
        answers: ["must have rained"],
        right: ".",
        explanation: "Улицы мокрые. Должно быть, шёл дождь.",
      },
      {
        left: "She's not in the office. She",
        answers: ["might be"],
        right: "working from home.",
        explanation: "Её нет в офисе. Возможно, она работает из дома.",
      },
      {
        left: "He speaks perfect English. He",
        answers: ["must be"],
        right: "a native speaker.",
        explanation: "Он говорит на идеальном английском. Он, должно быть, носитель языка.",
      },
      {
        left: "The shop is dark. It",
        answers: ["can't be"],
        right: "open.",
        explanation: "В магазине темно. Он не может быть открыт.",
      },
      {
        left: "She's been studying all week. She",
        answers: ["should pass"],
        right: "the exam.",
        explanation: "Она училась всю неделю. Она, вероятно, сдаст экзамен.",
      },
      {
        left: "I saw her car outside. She",
        answers: ["must be"],
        right: "home.",
        explanation: "Я видел её машину снаружи. Она, должно быть, дома.",
      },
      {
        left: "They're not answering. They",
        answers: ["might have gone"],
        right: "out.",
        explanation: "Они не отвечают. Возможно, они вышли.",
      },
      {
        left: "He's too young. He",
        answers: ["can't have"],
        right: "much experience.",
        explanation: "Он слишком молод. У него не может быть большого опыта.",
      },
      {
        left: "She looks worried. Something",
        answers: ["must have happened"],
        right: ".",
        explanation: "Она выглядит обеспокоенной. Что-то, должно быть, случилось.",
      },
      {
        left: "The flight was delayed. They",
        answers: ["should be arriving"],
        right: "late.",
        explanation: "Рейс задержали. Они, вероятно, прибудут поздно.",
      },
      {
        left: "I can hear voices. Someone",
        answers: ["must be"],
        right: "in the next room.",
        explanation: "Я слышу голоса. Кто-то, должно быть, в соседней комнате.",
      },
      {
        left: "She didn't reply to my message. She",
        answers: ["might not have seen"],
        right: "it.",
        explanation: "Она не ответила на моё сообщение. Возможно, она не видела его.",
      },
      {
        left: "The restaurant is full. It",
        answers: ["must be"],
        right: "very popular.",
        explanation: "Ресторан полон. Он, должно быть, очень популярный.",
      },
      {
        left: "He didn't come to the party. He",
        answers: ["may not have been"],
        right: "invited.",
        explanation: "Он не пришёл на вечеринку. Возможно, его не пригласили.",
      },
      {
        left: "It's Saturday. The bank",
        answers: ["can't be"],
        right: "open.",
        explanation: "Сегодня суббота. Банк не может быть открыт.",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный супер-тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">
              Финальная проверка знаний
            </h3>
            <p className="text-sm text-zinc-700 mb-2">
              Это последнее упражнение! Здесь смешаны **все типы модальных
              предположений**: must, can't, might/may/could, should.
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 13/15 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (15 вопросов)"
            instruction="Вставь правильный модальный глагол."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы прошли полный курс по модальным глаголам предположения! Теперь
              вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Выражать высокую уверенность с MUST</li>
              <li>✅ Выражать уверенность в обратном с CAN'T</li>
              <li>✅ Выражать возможность с MIGHT / MAY / COULD</li>
              <li>✅ Выражать вероятность с SHOULD / OUGHT TO</li>
              <li>✅ Делать предположения о прошлом (have + V3)</li>
              <li>✅ Делать предположения о процессе (be + V-ing)</li>
              <li>✅ Различать уровни уверенности</li>
              <li>✅ Избегать типичных ошибок</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Краткая памятка">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border-2 border-emerald-300">
              <h4 className="font-bold text-emerald-900 mb-2">
                MUST (95% уверенности)
              </h4>
              <p className="text-xs text-zinc-700 mb-1">
                must be / must be doing / must have done
              </p>
              <p className="text-xs text-zinc-600">Должно быть, наверняка</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
              <h4 className="font-bold text-red-900 mb-2">
                CAN'T (5% — уверенность в обратном)
              </h4>
              <p className="text-xs text-zinc-700 mb-1">
                can't be / can't be doing / can't have done
              </p>
              <p className="text-xs text-zinc-600">Не может быть, точно не</p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-300">
              <h4 className="font-bold text-yellow-900 mb-2">
                MIGHT / MAY / COULD (30-50%)
              </h4>
              <p className="text-xs text-zinc-700 mb-1">
                might be / may be doing / could have done
              </p>
              <p className="text-xs text-zinc-600">Возможно, может быть</p>
            </div>

            <div className="bg-lime-50 rounded-lg p-4 border-2 border-lime-300">
              <h4 className="font-bold text-lime-900 mb-2">
                SHOULD / OUGHT TO (70-80%)
              </h4>
              <p className="text-xs text-zinc-700 mb-1">
                should be / ought to be doing / should have done
              </p>
              <p className="text-xs text-zinc-600">Вероятно, должно быть</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return null;
}

