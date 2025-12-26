"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function TestModals({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в тест ===== */
function Step1() {
  return (
    <>
      <UiSection title="📝 ТЕСТ по модальным глаголам">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 mb-4">
          <p className="text-xl font-bold text-indigo-900 mb-3">
            Can / Can&apos;t │ Must / Mustn&apos;t │ Have to │ Should │ Could
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white rounded-lg px-4 py-2">
              <span className="font-semibold">Уровень:</span> A1-A2
            </div>
            <div className="bg-white rounded-lg px-4 py-2">
              <span className="font-semibold">Баллов:</span> 30
            </div>
            <div className="bg-white rounded-lg px-4 py-2">
              <span className="font-semibold">Время:</span> 20 минут
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📋 Структура теста">
        <div className="space-y-3">
          <div className="bg-blue-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">
              Часть 1: Multiple Choice
            </h4>
            <p className="text-sm text-zinc-700">
              10 вопросов × 1 балл = 10 баллов
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Выберите правильный модальный глагол из вариантов
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">
              Часть 2: Заполните пропуски
            </h4>
            <p className="text-sm text-zinc-700">
              10 вопросов × 1 балл = 10 баллов
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Вставьте правильный модальный глагол самостоятельно
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">
              Часть 3: Перевод
            </h4>
            <p className="text-sm text-zinc-700">
              5 вопросов × 2 балла = 10 баллов
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Переведите предложения с русского на английский
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="💡 Подготовка к тесту">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="font-semibold mb-3">Повторите перед тестом:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Can / Can&apos;t:</strong> способность, возможность,
              разрешение
            </li>
            <li>
              <strong>Could:</strong> вежливая просьба, способность в прошлом
            </li>
            <li>
              <strong>Must / Mustn&apos;t:</strong> обязанность, запрет
            </li>
            <li>
              <strong>Have to / Don&apos;t have to:</strong> необходимость,
              отсутствие необходимости
            </li>
            <li>
              <strong>Should / Shouldn&apos;t:</strong> совет, рекомендация
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="🎯 Критерии оценки">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
            <p className="font-bold text-green-900">30–27 баллов</p>
            <p className="text-sm text-green-800">ОТЛИЧНО! 🌟</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-4">
            <p className="font-bold text-blue-900">26–22 баллов</p>
            <p className="text-sm text-blue-800">ХОРОШО! 👍</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-4">
            <p className="font-bold text-amber-900">21–17 баллов</p>
            <p className="text-sm text-amber-800">НОРМАЛЬНО 👌</p>
          </div>
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-4">
            <p className="font-bold text-red-900">&lt; 17 баллов</p>
            <p className="text-sm text-red-800">Нужно повторить 📚</p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Часть 1 - Вопросы 1-5 ===== */
function Step2() {
  const questions: FillItem[] = [
    {
      left: "1. I",
      right: "swim very well.",
      answers: ["can"],
      explanation: "Правильно: can — способность (умею плавать).",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. You",
      right: "run in the corridor.",
      answers: ["mustn&apos;t", "must not"],
      explanation: "Правильно: mustn&apos;t — запрет (нельзя бегать).",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. She",
      right: "wear glasses. The doctor said so.",
      answers: ["has to"],
      explanation:
        "Правильно: has to — необходимость по внешним причинам (врач сказал).",
      ariaLabel: "Вопрос 3",
    },
    {
      left: "4. We",
      right: "bring food. Mum cooked.",
      answers: ["don&apos;t have to", "do not have to"],
      explanation:
        "Правильно: don&apos;t have to — нет необходимости (мама приготовила).",
      ariaLabel: "Вопрос 4",
    },
    {
      left: "5. You",
      right: "drink water after sport.",
      answers: ["should"],
      explanation: "Правильно: should — совет, рекомендация (тебе следует).",
      ariaLabel: "Вопрос 5",
    },
  ];

  return (
    <>
      <UiSection title="📝 Часть 1: Multiple Choice (Вопросы 1-5)">
        <p className="text-zinc-700 mb-4">
          Выберите правильный модальный глагол. Для справки используйте
          подсказки ниже.
        </p>
        <div className="bg-blue-50/50 rounded-lg p-3 mb-4 text-sm">
          <p className="font-semibold mb-2">💡 Подсказка:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>can — способность (умею)</li>
            <li>mustn&apos;t — запрет (нельзя)</li>
            <li>has to — необходимость (должен/должна)</li>
            <li>don&apos;t have to — нет необходимости (не обязательно)</li>
            <li>should — совет (следует)</li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Вопросы 1-5"
        instruction="Вставьте правильный модальный глагол (can, mustn't, has to, don't have to, should)."
        items={questions}
      />

      <UiSection title="📊 Прогресс">
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-sm text-indigo-900">
            <strong>Выполнено:</strong> 5 из 25 вопросов (20%)
          </p>
          <p className="text-xs text-indigo-700 mt-1">
            Максимум за эту страницу: 5 баллов
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Часть 1 - Вопросы 6-10 ===== */
function Step3() {
  const questions: FillItem[] = [
    {
      left: "6.",
      right: "you help me, please?",
      answers: ["Could", "could"],
      explanation: "Правильно: Could — вежливая просьба.",
      ariaLabel: "Вопрос 6",
    },
    {
      left: "7. I",
      right: "speak French when I was 6.",
      answers: ["could"],
      explanation: "Правильно: could — способность в прошлом (мог/умел).",
      ariaLabel: "Вопрос 7",
    },
    {
      left: "8. Students",
      right: "be late.",
      answers: ["mustn&apos;t", "must not"],
      explanation:
        "Правильно: mustn&apos;t — запрет (студентам нельзя опаздывать).",
      ariaLabel: "Вопрос 8",
    },
    {
      left: "9. Tom",
      right: "go to bed at 9 p.m. every day.",
      answers: ["has to"],
      explanation:
        "Правильно: has to — необходимость, правило (должен ложиться).",
      ariaLabel: "Вопрос 9",
    },
    {
      left: "10. You",
      right: "eat sweets every day.",
      answers: ["shouldn&apos;t", "should not"],
      explanation:
        "Правильно: shouldn&apos;t — совет (не следует есть сладости каждый день).",
      ariaLabel: "Вопрос 10",
    },
  ];

  return (
    <>
      <UiSection title="📝 Часть 1: Multiple Choice (Вопросы 6-10)">
        <p className="text-zinc-700 mb-4">
          Продолжаем! Вставьте правильный модальный глагол.
        </p>
        <div className="bg-blue-50/50 rounded-lg p-3 mb-4 text-sm">
          <p className="font-semibold mb-2">💡 Подсказка:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>could — вежливая просьба / способность в прошлом</li>
            <li>mustn&apos;t — запрет</li>
            <li>has to — необходимость (для he/she/it)</li>
            <li>shouldn&apos;t — отрицательный совет (не следует)</li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Вопросы 6-10"
        instruction="Вставьте правильный модальный глагол (Could, could, mustn't, has to, shouldn't)."
        items={questions}
      />

      <UiSection title="📊 Прогресс">
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-sm text-indigo-900">
            <strong>Выполнено:</strong> 10 из 25 вопросов (40%)
          </p>
          <p className="text-xs text-indigo-700 mt-1">
            <strong>Часть 1 завершена!</strong> Максимум: 10 баллов
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Часть 2 - Вопросы 11-15 ===== */
function Step4() {
  const questions: FillItem[] = [
    {
      left: "11. I",
      right: "play tennis. I have a bad leg.",
      answers: ["can&apos;t", "cannot"],
      explanation: "Правильно: can&apos;t (not) — не могу играть из-за травмы.",
      ariaLabel: "Вопрос 11",
    },
    {
      left: "12. You",
      right: "wear a helmet on a bike.",
      answers: ["must"],
      explanation: "Правильно: must — обязанность, правило безопасности.",
      ariaLabel: "Вопрос 12",
    },
    {
      left: "13. He",
      right: "wake up early on Sunday.",
      answers: ["doesn&apos;t have to", "does not have to"],
      explanation:
        "Правильно: doesn&apos;t have to (not) — нет необходимости вставать рано в воскресенье.",
      ariaLabel: "Вопрос 13",
    },
    {
      left: "14.",
      right: "you open the window, please?",
      answers: ["Could", "could"],
      explanation: "Правильно: Could — вежливая просьба.",
      ariaLabel: "Вопрос 14",
    },
    {
      left: "15. We",
      right: "visit Grandma tomorrow. She is ill.",
      answers: ["should"],
      explanation:
        "Правильно: should — совет, моральная обязанность (следует навестить).",
      ariaLabel: "Вопрос 15",
    },
  ];

  return (
    <>
      <UiSection title="📝 Часть 2: Заполните пропуски (Вопросы 11-15)">
        <p className="text-zinc-700 mb-4">
          Теперь вставьте модальный глагол самостоятельно. Обратите внимание на
          подсказки в скобках (not).
        </p>
        <div className="bg-green-50/50 rounded-lg p-3 mb-4 text-sm">
          <p className="font-semibold mb-2">💡 Важно:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Если видите (not) — используйте отрицательную форму</li>
            <li>Обращайте внимание на подлежащее (I, he, she, you)</li>
            <li>Для he/she/it используйте has to / doesn&apos;t have to</li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Вопросы 11-15"
        instruction="Вставьте правильный модальный глагол. Если видите (not), используйте отрицательную форму."
        items={questions}
      />

      <UiSection title="📊 Прогресс">
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-sm text-indigo-900">
            <strong>Выполнено:</strong> 15 из 25 вопросов (60%)
          </p>
          <p className="text-xs text-indigo-700 mt-1">
            Максимум за эту страницу: 5 баллов
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Часть 2 - Вопросы 16-20 ===== */
function Step5() {
  const questions: FillItem[] = [
    {
      left: "16. Children",
      right: "watch TV all day.",
      answers: ["shouldn&apos;t", "should not"],
      explanation:
        "Правильно: shouldn&apos;t — совет (детям не следует смотреть ТВ весь день).",
      ariaLabel: "Вопрос 16",
    },
    {
      left: "17. My brother",
      right: "drive. He is 18.",
      answers: ["can"],
      explanation:
        "Правильно: can — способность, возможность (умеет водить, ему 18).",
      ariaLabel: "Вопрос 17",
    },
    {
      left: "18. I",
      right: "cook today. Dad cooks.",
      answers: ["don&apos;t have to", "do not have to"],
      explanation:
        "Правильно: don&apos;t have to (not) — нет необходимости готовить (папа готовит).",
      ariaLabel: "Вопрос 18",
    },
    {
      left: "19. You",
      right: "see this film. It's great!",
      answers: ["should"],
      explanation:
        "Правильно: should — совет, рекомендация (тебе следует посмотреть).",
      ariaLabel: "Вопрос 19",
    },
    {
      left: "20. She",
      right: "speak three languages.",
      answers: ["can"],
      explanation:
        "Правильно: can — способность (умеет говорить на трёх языках).",
      ariaLabel: "Вопрос 20",
    },
  ];

  return (
    <>
      <UiSection title="📝 Часть 2: Заполните пропуски (Вопросы 16-20)">
        <p className="text-zinc-700 mb-4">
          Последние вопросы второй части. Будьте внимательны!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Вопросы 16-20"
        instruction="Вставьте правильный модальный глагол самостоятельно."
        items={questions}
      />

      <UiSection title="📊 Прогресс">
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-sm text-indigo-900">
            <strong>Выполнено:</strong> 20 из 25 вопросов (80%)
          </p>
          <p className="text-xs text-indigo-700 mt-1">
            <strong>Часть 2 завершена!</strong> Максимум за обе части: 10 баллов
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Часть 3 - Перевод (все вопросы) ===== */
function Step6() {
  const questions: FillItem[] = [
    {
      left: "21. Мне не нужно идти в магазин. →",
      right: "",
      answers: [
        "I don&apos;t have to go to the shop",
        "I don&apos;t have to go to the shop.",
        "I do not have to go to the shop",
        "I do not have to go to the shop.",
      ],
      explanation: "Правильно: I don&apos;t have to go to the shop.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "22. Тебе нельзя курить в школе. →",
      right: "",
      answers: [
        "You mustn&apos;t smoke at school",
        "You mustn&apos;t smoke at school.",
        "You must not smoke at school",
        "You must not smoke at school.",
      ],
      explanation: "Правильно: You mustn&apos;t smoke at school.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "23. Тебе следует больше спать. →",
      right: "",
      answers: ["You should sleep more", "You should sleep more."],
      explanation: "Правильно: You should sleep more.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
    {
      left: "24. Не могли бы вы повторить? →",
      right: "",
      answers: [
        "Could you repeat",
        "Could you repeat?",
        "could you repeat",
        "could you repeat?",
      ],
      explanation: "Правильно: Could you repeat?",
      ariaLabel: "Перевод 4",
      wide: true,
    },
    {
      left: "25. Я умел кататься на коньках в 5 лет. →",
      right: "",
      answers: [
        "I could skate when I was 5",
        "I could skate when I was 5.",
        "I could skate when I was five",
        "I could skate when I was five.",
      ],
      explanation: "Правильно: I could skate when I was 5.",
      ariaLabel: "Перевод 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📝 Часть 3: Перевод (Вопросы 21-25)">
        <p className="text-zinc-700 mb-4">
          Переведите предложения с русского на английский, используя модальные
          глаголы.
        </p>
        <div className="bg-amber-50/50 rounded-lg p-3 mb-4 text-sm">
          <p className="font-semibold mb-2">💡 Подсказки:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>&quot;Не нужно&quot; = don&apos;t have to</li>
            <li>&quot;Нельзя&quot; = mustn&apos;t</li>
            <li>&quot;Следует&quot; = should</li>
            <li>&quot;Не могли бы&quot; = Could you...?</li>
            <li>&quot;Умел (в прошлом)&quot; = could</li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Вопросы 21-25 (по 2 балла каждый)"
        instruction="Переведите предложения на английский, используя модальные глаголы."
        items={questions}
      />

      <UiSection title="📊 Прогресс">
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-green-900">
            <strong>✅ Все вопросы выполнены!</strong> 25 из 25 (100%)
          </p>
          <p className="text-xs text-green-700 mt-1">
            Максимум за перевод: 10 баллов (2 балла × 5)
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Бонус - Мини-диалог ===== */
function Step7() {
  return (
    <>
      <UiSection title="🎭 Бонус: Мини-диалог">
        <p className="text-zinc-700 mb-4">
          Прочитайте диалог вслух и обратите внимание на использование модальных
          глаголов.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  <strong className="text-blue-600">Can</strong> I use your
                  phone?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  Sorry, you{" "}
                  <strong className="text-red-600">mustn&apos;t</strong>.
                  It&apos;s broken.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  OK. <strong className="text-indigo-600">Do</strong> I{" "}
                  <strong className="text-indigo-600">have to</strong> come
                  tomorrow?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  No, you{" "}
                  <strong className="text-green-600">don&apos;t have to</strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  <strong className="text-amber-600">Should</strong> I bring
                  cake?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  Yes, you <strong className="text-amber-600">should</strong>!
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">
                  <strong className="text-purple-600">Could</strong> you open
                  the door?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p className="text-zinc-900">Sure!</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📖 Перевод диалога">
        <div className="bg-zinc-50 rounded-lg p-4 text-sm">
          <p className="mb-2">
            <strong>A:</strong> Могу я воспользоваться твоим телефоном?
          </p>
          <p className="mb-2">
            <strong>B:</strong> Извини, нельзя. Он сломан.
          </p>
          <p className="mb-2">
            <strong>A:</strong> Хорошо. Мне нужно прийти завтра?
          </p>
          <p className="mb-2">
            <strong>B:</strong> Нет, не обязательно.
          </p>
          <p className="mb-2">
            <strong>A:</strong> Мне следует принести торт?
          </p>
          <p className="mb-2">
            <strong>B:</strong> Да, следует!
          </p>
          <p className="mb-2">
            <strong>A:</strong> Не могли бы вы открыть дверь?
          </p>
          <p>
            <strong>B:</strong> Конечно!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎯 Практика">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="font-semibold mb-2">Задание:</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Прочитайте диалог вслух 3 раза</li>
            <li>Обратите внимание на интонацию в вопросах</li>
            <li>Разыграйте диалог с партнёром или запишите себя</li>
          </ol>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Таблица модальных глаголов ===== */
function Step8() {
  return (
    <>
      <UiSection title="📋 Справочная таблица модальных глаголов">
        <p className="text-zinc-700 mb-4">
          Используйте эту таблицу для повторения перед тестом.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="border border-indigo-300 p-3 text-left">
                  Модальный глагол
                </th>
                <th className="border border-indigo-300 p-3 text-left">
                  Значение
                </th>
                <th className="border border-indigo-300 p-3 text-left">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3">
                  <strong>Can</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Способность, возможность
                </td>
                <td className="border border-zinc-300 p-3">
                  I <strong>can</strong> swim.
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3">
                  <strong>Can&apos;t</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Неспособность, невозможность
                </td>
                <td className="border border-zinc-300 p-3">
                  I <strong>can&apos;t</strong> fly.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3">
                  <strong>Could</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Вежливая просьба / способность в прошлом
                </td>
                <td className="border border-zinc-300 p-3">
                  <strong>Could</strong> you help me?
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3">
                  <strong>Must</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Обязанность (личная)
                </td>
                <td className="border border-zinc-300 p-3">
                  I <strong>must</strong> study.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3">
                  <strong>Mustn&apos;t</strong>
                </td>
                <td className="border border-zinc-300 p-3">Запрет</td>
                <td className="border border-zinc-300 p-3">
                  You <strong>mustn&apos;t</strong> smoke here.
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3">
                  <strong>Have to</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Необходимость (внешняя)
                </td>
                <td className="border border-zinc-300 p-3">
                  I <strong>have to</strong> go to school.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3">
                  <strong>Don&apos;t have to</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Нет необходимости
                </td>
                <td className="border border-zinc-300 p-3">
                  You <strong>don&apos;t have to</strong> come.
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3">
                  <strong>Should</strong>
                </td>
                <td className="border border-zinc-300 p-3">Совет</td>
                <td className="border border-zinc-300 p-3">
                  You <strong>should</strong> rest.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3">
                  <strong>Shouldn&apos;t</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Отрицательный совет
                </td>
                <td className="border border-zinc-300 p-3">
                  You <strong>shouldn&apos;t</strong> eat sugar.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="💡 Ключевые различия">
        <div className="space-y-3">
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="font-semibold text-yellow-900 mb-2">
              Must vs Have to
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <strong>Must:</strong> личная обязанность (я так решил)
              </li>
              <li>
                <strong>Have to:</strong> внешняя необходимость (правила, закон)
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              Mustn&apos;t vs Don&apos;t have to
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <strong>Mustn&apos;t:</strong> запрещено (нельзя!)
              </li>
              <li>
                <strong>Don&apos;t have to:</strong> не обязательно (можно не
                делать)
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Типичные ошибки ===== */
function Step9() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки и как их избежать">
        <p className="text-zinc-700 mb-4">
          Изучите эти ошибки, чтобы не допустить их в тесте!
        </p>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="font-semibold text-red-900 mb-2">
            ❌ Ошибка 1: Путаница с &quot;to&quot;
          </p>
          <div className="ml-4 space-y-1 text-sm">
            <p className="text-red-700">
              ❌ I must <del>to</del> go. (НЕПРАВИЛЬНО)
            </p>
            <p className="text-green-700">✅ I must go. (ПРАВИЛЬНО)</p>
            <p className="text-zinc-700 mt-2">
              <strong>Правило:</strong> После модальных глаголов НЕ используется
              &quot;to&quot;
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="font-semibold text-red-900 mb-2">
            ❌ Ошибка 2: Неправильная форма have to
          </p>
          <div className="ml-4 space-y-1 text-sm">
            <p className="text-red-700">❌ He have to go. (НЕПРАВИЛЬНО)</p>
            <p className="text-green-700">✅ He has to go. (ПРАВИЛЬНО)</p>
            <p className="text-zinc-700 mt-2">
              <strong>Правило:</strong> Для he/she/it используется &quot;has
              to&quot;
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="font-semibold text-red-900 mb-2">
            ❌ Ошибка 3: Путаница mustn&apos;t и don&apos;t have to
          </p>
          <div className="ml-4 space-y-1 text-sm">
            <p className="text-red-700">
              ❌ You mustn&apos;t bring food. (если мама приготовила)
            </p>
            <p className="text-green-700">
              ✅ You don&apos;t have to bring food. (ПРАВИЛЬНО)
            </p>
            <p className="text-zinc-700 mt-2">
              <strong>Правило:</strong> mustn&apos;t = запрет, don&apos;t have
              to = не обязательно
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="font-semibold text-red-900 mb-2">
            ❌ Ошибка 4: Форма глагола после модального
          </p>
          <div className="ml-4 space-y-1 text-sm">
            <p className="text-red-700">
              ❌ He can <del>plays</del> football. (НЕПРАВИЛЬНО)
            </p>
            <p className="text-green-700">
              ✅ He can play football. (ПРАВИЛЬНО)
            </p>
            <p className="text-zinc-700 mt-2">
              <strong>Правило:</strong> После модального глагола используется
              инфинитив без &quot;to&quot;
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="font-semibold text-red-900 mb-2">
            ❌ Ошибка 5: Двойное отрицание
          </p>
          <div className="ml-4 space-y-1 text-sm">
            <p className="text-red-700">
              ❌ He doesn&apos;t can swim. (НЕПРАВИЛЬНО)
            </p>
            <p className="text-green-700">✅ He can&apos;t swim. (ПРАВИЛЬНО)</p>
            <p className="text-zinc-700 mt-2">
              <strong>Правило:</strong> Используйте только отрицательную форму
              модального глагола
            </p>
          </div>
        </div>
      </div>

      <UiSection title="✅ Чек-лист перед тестом">
        <div className="bg-green-50 rounded-lg p-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Знаю разницу между must и have to</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Помню, что mustn&apos;t ≠ don&apos;t have to</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                После модальных глаголов НЕ ставлю &quot;to&quot; (кроме have
                to)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Для he/she/it использую has to (не have to)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Could использую для вежливых просьб</span>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Поздравление и рекомендации ===== */
function Step10() {
  return (
    <>
      <UiSection title="🎉 Поздравляем с завершением теста!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-green-900 mb-3">
            Вы прошли тест по модальным глаголам!
          </p>
          <p className="text-zinc-700">
            Надеемся, что тест помог вам проверить и закрепить знания по теме
            модальных глаголов.
          </p>
        </div>
      </UiSection>

      <UiSection title="📊 Оцените свой результат">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg p-5">
            <div className="text-3xl font-bold text-green-900 mb-2">30-27</div>
            <p className="font-semibold text-green-800 mb-2">ОТЛИЧНО! 🌟</p>
            <p className="text-sm text-green-700">
              Вы отлично владеете модальными глаголами! Продолжайте в том же
              духе и переходите к более сложным темам.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-lg p-5">
            <div className="text-3xl font-bold text-blue-900 mb-2">26-22</div>
            <p className="font-semibold text-blue-800 mb-2">ХОРОШО! 👍</p>
            <p className="text-sm text-blue-700">
              Хороший результат! Повторите тему один раз и вы будете готовы к
              следующему уровню.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-amber-200 rounded-lg p-5">
            <div className="text-3xl font-bold text-amber-900 mb-2">21-17</div>
            <p className="font-semibold text-amber-800 mb-2">НОРМАЛЬНО 👌</p>
            <p className="text-sm text-amber-700">
              Неплохо! Обратите особое внимание на различия mustn&apos;t и
              don&apos;t have to. Повторите уроки по модальным глаголам.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-200 rounded-lg p-5">
            <div className="text-3xl font-bold text-red-900 mb-2">&lt; 17</div>
            <p className="font-semibold text-red-800 mb-2">Повторите тему 📚</p>
            <p className="text-sm text-red-700">
              Рекомендуем вернуться к урокам по модальным глаголам и пройти их
              еще раз. Обратите внимание на таблицы и примеры.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Что дальше?">
        <div className="space-y-3">
          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              🔄 Если набрали меньше 22 баллов:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Вернитесь к урокам &quot;Modals&quot; и &quot;Modals
                Consolidation&quot;
              </li>
              <li>Повторите таблицу различий модальных глаголов</li>
              <li>Сделайте упражнения из уроков еще раз</li>
              <li>Пройдите тест снова через несколько дней</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">
              ➡️ Если набрали 22+ баллов:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Переходите к следующим темам курса</li>
              <li>Практикуйте модальные глаголы в реальных диалогах</li>
              <li>Составьте свои примеры с каждым модальным глаголом</li>
              <li>Используйте модальные глаголы в письменных работах</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="💪 Советы для практики">
        <div className="bg-blue-50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Ведите дневник на английском</strong> и используйте
              модальные глаголы (I should..., I have to..., I can...)
            </li>
            <li>
              <strong>Смотрите видео на английском</strong> и отмечайте, когда
              слышите модальные глаголы
            </li>
            <li>
              <strong>Составьте свои правила</strong> с использованием must,
              mustn&apos;t, should (например, правила в школе или дома)
            </li>
            <li>
              <strong>Практикуйте вежливые просьбы</strong> с Could you...? в
              реальных ситуациях
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🎯 Ключ к успеху">
        <div className="bg-purple-50 rounded-lg p-5 text-center">
          <p className="text-lg font-semibold text-purple-900 mb-2">
            Практика + Повторение = Успех! 🚀
          </p>
          <p className="text-sm text-purple-700">
            Модальные глаголы — одна из самых важных тем в английском. Чем
            больше вы практикуетесь, тем увереннее будете их использовать!
          </p>
        </div>
      </UiSection>
    </>
  );
}
