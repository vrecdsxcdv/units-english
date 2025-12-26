"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function AdvancedConditionals({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Что такое Advanced Conditionals ========== */
function Step1() {
  return (
    <>
      <UiSection title="🎯 Advanced Conditionals — Продвинутые условия">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🔀</div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-3">
              Advanced Conditionals
            </h2>
            <p className="text-xl text-indigo-700">
              Условные конструкции высокого уровня
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed mb-3">
              Помимо стандартных условий с <strong>IF</strong>, в английском есть
              более изящные и выразительные способы выразить условие. Эти конструкции
              делают речь более естественной и формальной.
            </p>
          </div>

          <div className="bg-indigo-100 rounded-lg p-5 border-2 border-indigo-400">
            <p className="font-bold text-indigo-900 mb-2 text-lg">
              📚 Что мы изучим:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-blue-900 mb-1">
                  If it weren't for...
                </p>
                <p className="text-sm text-zinc-600">Если бы не... (настоящее)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-purple-900 mb-1">
                  If it hadn't been for...
                </p>
                <p className="text-sm text-zinc-600">Если бы не... (прошлое)</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-green-900 mb-1">Had + subject...</p>
                <p className="text-sm text-zinc-600">Инверсия в условиях</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-orange-900 mb-1">
                  Supposing / Provided that...
                </p>
                <p className="text-sm text-zinc-600">Альтернативы IF</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="💡 Зачем нужны продвинутые условия?">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✨</div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 text-lg mb-2">
                  Звучать естественнее
                </h4>
                <p className="text-zinc-700">
                  Носители используют разные конструкции, чтобы избежать повторения
                  IF в каждом предложении.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">📝</div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 text-lg mb-2">
                  Формальный стиль
                </h4>
                <p className="text-zinc-700">
                  Некоторые конструкции (как инверсия с HAD) используются в
                  письменной речи, литературе и деловых документах.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 text-lg mb-2">
                  Выше уровень владения языком
                </h4>
                <p className="text-zinc-700">
                  Использование этих конструкций показывает продвинутый уровень
                  английского (C1-C2).
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: If it weren't for / hadn't been for ========== */
function Step2() {
  return (
    <>
      <UiSection title="🔑 If it weren't for... / If it hadn't been for...">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-6 border-2 border-blue-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🆘</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              "Если бы не..."
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              🎯 Значение:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Эти конструкции показывают, что <strong>что-то важное помогло нам</strong> или
              спасло ситуацию. "Если бы не X, то Y не случилось бы".
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-5 border-2 border-blue-400">
            <p className="font-bold text-blue-900 mb-3 text-lg">
              📌 Две формы:
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-blue-800 mb-2">
                  If it weren't for... (настоящее/будущее)
                </p>
                <p className="text-sm mb-2">
                  <strong>If it weren't for my job, I would travel more.</strong>
                </p>
                <p className="text-sm text-zinc-600">
                  Если бы не моя работа, я бы больше путешествовал.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-purple-800 mb-2">
                  If it hadn't been for... (прошлое)
                </p>
                <p className="text-sm mb-2">
                  <strong>If it hadn't been for your help, I would have failed.</strong>
                </p>
                <p className="text-sm text-zinc-600">
                  Если бы не твоя помощь, я бы провалился.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📖 Примеры: If it weren't for... (настоящее)">
        <div className="space-y-3">
          {[
            {
              en: "If it weren't for my parents, I would be homeless.",
              ru: "Если бы не мои родители, я был бы бездомным.",
            },
            {
              en: "If it weren't for coffee, I couldn't function in the morning.",
              ru: "Если бы не кофе, я не мог бы функционировать по утрам.",
            },
            {
              en: "If it weren't for the traffic, I could get to work faster.",
              ru: "Если бы не пробки, я мог бы добираться до работы быстрее.",
            },
            {
              en: "If it weren't for you, I would give up.",
              ru: "Если бы не ты, я бы сдался.",
            },
          ].map((example, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-200"
            >
              <p className="font-semibold text-blue-900 mb-1">{example.en}</p>
              <p className="text-sm text-zinc-600 italic">{example.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📖 Примеры: If it hadn't been for... (прошлое)">
        <div className="space-y-3">
          {[
            {
              en: "If it hadn't been for the doctor, she wouldn't have survived.",
              ru: "Если бы не доктор, она бы не выжила.",
            },
            {
              en: "If it hadn't been for your warning, I would have made a terrible mistake.",
              ru: "Если бы не твоё предупреждение, я бы совершил ужасную ошибку.",
            },
            {
              en: "If it hadn't been for the rain, we would have gone to the beach.",
              ru: "Если бы не дождь, мы бы пошли на пляж.",
            },
            {
              en: "If it hadn't been for his courage, many people would have died.",
              ru: "Если бы не его храбрость, многие люди бы погибли.",
            },
          ].map((example, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200"
            >
              <p className="font-semibold text-purple-900 mb-1">{example.en}</p>
              <p className="text-sm text-zinc-600 italic">{example.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="🔄 Синонимы">
        <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300">
          <p className="font-bold text-amber-900 mb-4">
            Можно сказать то же самое другими способами:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-blue-900 mb-2">Without...</p>
              <p className="text-sm mb-2">
                <strong>Without your help, I would be lost.</strong>
              </p>
              <p className="text-xs text-zinc-600">
                (= If it weren't for your help...)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">But for...</p>
              <p className="text-sm mb-2">
                <strong>But for the traffic, I'd be there by now.</strong>
              </p>
              <p className="text-xs text-zinc-600">
                (= If it weren't for the traffic...)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Практика If it weren't/hadn't been for ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "Without my friends, I would be lonely. → If it",
      answers: ["weren't for my friends, I would be lonely", "weren't for my friends, I would be lonely."],
      wide: true,
    },
    {
      left: "Without his help back then, I would have quit. → If it",
      answers: ["hadn't been for his help, I would have quit", "hadn't been for his help, I would have quit."],
      wide: true,
    },
    {
      left: "But for the internet, we couldn't work remotely. → If it",
      answers: ["weren't for the internet, we couldn't work remotely", "weren't for the internet, we couldn't work remotely."],
      wide: true,
    },
    {
      left: "Without the vaccine, many people would have died. → If it",
      answers: ["hadn't been for the vaccine, many people would have died", "hadn't been for the vaccine, many people would have died."],
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика">
        <CheckableExercise
          title="Упражнение 1: Трансформация"
          instruction="Перепишите предложения, используя If it weren't for / hadn't been for"
          items={items}
        />
      </UiSection>

      <UiSection title="🎯 Дополнительная практика">
        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
          <h3 className="font-bold text-green-900 mb-4 text-lg">
            Переведите на английский:
          </h3>
          <div className="space-y-4">
            {[
              "Если бы не мой будильник, я бы опоздал.",
              "Если бы не её совет тогда, я бы не добился успеха.",
              "Если бы не погода, мы бы поехали на пикник.",
              "Если бы не технологии, наша жизнь была бы скучнее.",
            ].map((sentence, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-zinc-800">{idx + 1}. {sentence}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: Had + subject (инверсия) ========== */
function Step4() {
  return (
    <>
      <UiSection title="🔀 Had + subject — Инверсия в условиях">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 mb-6 border-2 border-green-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎩</div>
            <h2 className="text-2xl font-bold text-green-900 mb-3">
              Формальный стиль: убираем IF
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎯 Что это:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed mb-4">
              В формальном английском можно <strong>убрать IF</strong> и вынести
              HAD/WERE/SHOULD вперёд. Это делает речь более литературной и элегантной.
            </p>

            <div className="bg-green-100 rounded-lg p-5 border-2 border-green-400">
              <p className="font-bold text-green-900 mb-3">Трансформация:</p>
              <div className="bg-white rounded-lg p-4 mb-2">
                <p className="text-center mb-2">
                  <span className="text-red-700">If I had known</span>, I would have told you.
                </p>
                <p className="text-center text-2xl mb-2">↓</p>
                <p className="text-center">
                  <span className="text-green-700">Had I known</span>, I would have told you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📖 Примеры с HAD (Past Perfect)">
        <div className="space-y-3">
          {[
            {
              normal: "If I had seen him, I would have said hello.",
              inversion: "Had I seen him, I would have said hello.",
              ru: "Если бы я увидел его, я бы поздоровался.",
            },
            {
              normal: "If she had called me, I would have helped.",
              inversion: "Had she called me, I would have helped.",
              ru: "Если бы она позвонила мне, я бы помог.",
            },
            {
              normal: "If they had arrived earlier, they wouldn't have missed the show.",
              inversion: "Had they arrived earlier, they wouldn't have missed the show.",
              ru: "Если бы они прибыли раньше, они бы не пропустили шоу.",
            },
          ].map((example, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200"
            >
              <div className="mb-3">
                <p className="text-xs text-zinc-500 mb-1">Обычная форма:</p>
                <p className="text-sm text-zinc-700">{example.normal}</p>
              </div>
              <div className="mb-3">
                <p className="text-xs text-zinc-500 mb-1">С инверсией:</p>
                <p className="font-semibold text-green-900">{example.inversion}</p>
              </div>
              <p className="text-sm text-zinc-600 italic">{example.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📖 Примеры с WERE (нереальное настоящее)">
        <div className="space-y-3">
          {[
            {
              normal: "If I were rich, I would travel the world.",
              inversion: "Were I rich, I would travel the world.",
              ru: "Если бы я был богат, я бы путешествовал по миру.",
            },
            {
              normal: "If she were here, she would help us.",
              inversion: "Were she here, she would help us.",
              ru: "Если бы она была здесь, она бы помогла нам.",
            },
            {
              normal: "If it were possible, I would do it.",
              inversion: "Were it possible, I would do it.",
              ru: "Если бы это было возможно, я бы это сделал.",
            },
          ].map((example, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-200"
            >
              <div className="mb-3">
                <p className="text-xs text-zinc-500 mb-1">Обычная форма:</p>
                <p className="text-sm text-zinc-700">{example.normal}</p>
              </div>
              <div className="mb-3">
                <p className="text-xs text-zinc-500 mb-1">С инверсией:</p>
                <p className="font-semibold text-blue-900">{example.inversion}</p>
              </div>
              <p className="text-sm text-zinc-600 italic">{example.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="⚠️ Важно помнить">
        <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📝</div>
              <div>
                <p className="font-bold text-amber-900 mb-1">Формальный стиль</p>
                <p className="text-zinc-700">
                  Эта конструкция используется в письменной речи, литературе,
                  официальных документах. В разговорной речи лучше использовать обычный IF.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <p className="font-bold text-amber-900 mb-1">Работает только с HAD, WERE, SHOULD</p>
                <p className="text-zinc-700">
                  С другими глаголами инверсия не работает. Нельзя сказать "Went I there..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: Практика инверсии ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "If I had known the truth, I would have acted differently. →",
      answers: ["Had I known the truth, I would have acted differently", "Had I known the truth, I would have acted differently."],
      wide: true,
    },
    {
      left: "If she were my sister, I would help her. →",
      answers: ["Were she my sister, I would help her", "Were she my sister, I would help her."],
      wide: true,
    },
    {
      left: "If they had listened to me, this wouldn't have happened. →",
      answers: ["Had they listened to me, this wouldn't have happened", "Had they listened to me, this wouldn't have happened."],
      wide: true,
    },
    {
      left: "If it were up to me, I would change everything. →",
      answers: ["Were it up to me, I would change everything", "Were it up to me, I would change everything."],
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика инверсии">
        <CheckableExercise
          title="Упражнение: Переписывание с инверсией"
          instruction="Уберите IF и используйте инверсию (Had/Were + subject)"
          items={items}
        />
      </UiSection>

      <UiSection title="📚 Примеры из литературы">
        <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
          <p className="font-bold text-indigo-900 mb-4">
            Так пишут в книгах и формальных текстах:
          </p>
          <div className="space-y-4">
            {[
              {
                text: "Had I but known what fate awaited me, I would have chosen a different path.",
                ru: "Если бы я только знал, какая судьба меня ждёт, я бы выбрал другой путь.",
              },
              {
                text: "Were the situation different, we might have succeeded.",
                ru: "Если бы ситуация была другой, мы могли бы преуспеть.",
              },
              {
                text: "Had the weather been better, the outcome would have been quite different.",
                ru: "Если бы погода была лучше, результат был бы совсем другим.",
              },
            ].map((example, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="font-semibold text-indigo-900 mb-2">{example.text}</p>
                <p className="text-sm text-zinc-600 italic">{example.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Альтернативы IF ========== */
function Step6() {
  return (
    <>
      <UiSection title="🔄 Альтернативы IF — другие способы выразить условие">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 mb-6 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎭</div>
            <h2 className="text-2xl font-bold text-orange-900 mb-3">
              Разнообразие условий
            </h2>
            <p className="text-lg text-orange-700">
              IF — не единственный способ выразить условие
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="1️⃣ Supposing... (Предположим)">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-200 mb-4">
          <p className="font-bold text-orange-900 mb-3">
            Значение: "Предположим, что..." (разговорный стиль)
          </p>
          <div className="space-y-3">
            {[
              {
                en: "Supposing it rains tomorrow, what will we do?",
                ru: "Предположим, завтра пойдёт дождь, что мы будем делать?",
              },
              {
                en: "Supposing you won the lottery, how would you spend the money?",
                ru: "Предположим, ты выиграешь в лотерею, как ты потратишь деньги?",
              },
            ].map((ex, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-orange-900 mb-1">{ex.en}</p>
                <p className="text-sm text-zinc-600 italic">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="2️⃣ Provided (that) / Providing (that) (При условии что)">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-200 mb-4">
          <p className="font-bold text-blue-900 mb-3">
            Значение: "При условии, что..." (формальный стиль)
          </p>
          <div className="space-y-3">
            {[
              {
                en: "You can go out, provided you finish your homework first.",
                ru: "Можешь выйти при условии, что сначала закончишь домашку.",
              },
              {
                en: "I'll lend you the money, providing that you pay me back next week.",
                ru: "Я одолжу тебе денег при условии, что ты вернёшь на следующей неделе.",
              },
            ].map((ex, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-1">{ex.en}</p>
                <p className="text-sm text-zinc-600 italic">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="3️⃣ Unless... (Если не)">
        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 border-2 border-red-200 mb-4">
          <p className="font-bold text-red-900 mb-3">
            Значение: "Если не...", "Кроме случая если..."
          </p>
          <div className="space-y-3">
            {[
              {
                en: "Unless you hurry, we'll be late.",
                ru: "Если ты не поторопишься, мы опоздаем.",
              },
              {
                en: "I won't go unless you come with me.",
                ru: "Я не пойду, если ты не пойдёшь со мной.",
              },
            ].map((ex, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-1">{ex.en}</p>
                <p className="text-sm text-zinc-600 italic">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="4️⃣ As long as / So long as (Пока, при условии)">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200 mb-4">
          <p className="font-bold text-green-900 mb-3">
            Значение: "Пока...", "При условии что..."
          </p>
          <div className="space-y-3">
            {[
              {
                en: "You can stay here as long as you want.",
                ru: "Ты можешь остаться здесь, сколько хочешь.",
              },
              {
                en: "I'm happy so long as you're happy.",
                ru: "Я счастлив, пока ты счастлив.",
              },
            ].map((ex, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-green-900 mb-1">{ex.en}</p>
                <p className="text-sm text-zinc-600 italic">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="5️⃣ In case... (На случай если)">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200 mb-4">
          <p className="font-bold text-purple-900 mb-3">
            Значение: "На случай если..."
          </p>
          <div className="space-y-3">
            {[
              {
                en: "Take an umbrella in case it rains.",
                ru: "Возьми зонт на случай, если пойдёт дождь.",
              },
              {
                en: "I'll leave my phone on in case you need to call.",
                ru: "Я оставлю телефон включённым на случай, если тебе нужно позвонить.",
              },
            ].map((ex, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-purple-900 mb-1">{ex.en}</p>
                <p className="text-sm text-zinc-600 italic">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Практика альтернатив ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "If it rains, we'll cancel the picnic. (supposing) →",
      answers: ["Supposing it rains, we'll cancel the picnic", "Supposing it rains, we'll cancel the picnic."],
      wide: true,
    },
    {
      left: "You can borrow my car if you drive carefully. (provided) →",
      answers: ["You can borrow my car provided you drive carefully", "You can borrow my car provided you drive carefully.", "You can borrow my car provided that you drive carefully", "You can borrow my car provided that you drive carefully."],
      wide: true,
    },
    {
      left: "I won't tell anyone if you don't want me to. (unless) →",
      answers: ["I won't tell anyone unless you want me to", "I won't tell anyone unless you want me to."],
      wide: true,
    },
    {
      left: "You can stay here if you behave. (as long as) →",
      answers: ["You can stay here as long as you behave", "You can stay here as long as you behave."],
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Альтернативы IF">
        <CheckableExercise
          title="Упражнение: Перефразирование"
          instruction="Перепишите предложения, используя указанное слово"
          items={items}
        />
      </UiSection>

      <UiSection title="🎯 Таблица: Когда использовать">
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-3 font-bold text-gray-800">Конструкция</th>
                  <th className="text-left p-3 font-bold text-gray-800">Значение</th>
                  <th className="text-left p-3 font-bold text-gray-800">Стиль</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold text-orange-700">Supposing...</td>
                  <td className="p-3">Предположим</td>
                  <td className="p-3 text-sm text-zinc-600">Разговорный</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold text-blue-700">Provided (that)...</td>
                  <td className="p-3">При условии что</td>
                  <td className="p-3 text-sm text-zinc-600">Формальный</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold text-red-700">Unless...</td>
                  <td className="p-3">Если не</td>
                  <td className="p-3 text-sm text-zinc-600">Нейтральный</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold text-green-700">As long as...</td>
                  <td className="p-3">Пока, при условии</td>
                  <td className="p-3 text-sm text-zinc-600">Разговорный</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-purple-700">In case...</td>
                  <td className="p-3">На случай если</td>
                  <td className="p-3 text-sm text-zinc-600">Нейтральный</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: Финальный тест ========== */
function Step8() {
  const items1: FillItem[] = [
    {
      left: "Without your support, I would give up. (If it weren't for) →",
      answers: ["If it weren't for your support, I would give up", "If it weren't for your support, I would give up."],
      wide: true,
    },
    {
      left: "If I had seen her, I would have said hello. (Had) →",
      answers: ["Had I seen her, I would have said hello", "Had I seen her, I would have said hello."],
      wide: true,
    },
    {
      left: "If you don't tell the truth, I'll be angry. (Unless) →",
      answers: ["Unless you tell the truth, I'll be angry", "Unless you tell the truth, I'll be angry."],
      wide: true,
    },
  ];

  const items2: FillItem[] = [
    {
      left: "_____ it weren't for coffee, I couldn't wake up.",
      answers: ["If"],
      right: "",
    },
    {
      left: "_____ she known the truth, she would have acted differently.",
      answers: ["Had"],
      right: "",
    },
    {
      left: "You can come _____ you promise to behave.",
      answers: ["provided", "provided that", "providing", "providing that", "as long as", "so long as"],
      right: "",
    },
    {
      left: "I won't go _____ you come with me.",
      answers: ["unless"],
      right: "",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Финальный тест">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-3">
              Проверьте свои знания!
            </h2>
          </div>
        </div>

        <CheckableExercise
          title="Тест 1: Трансформация предложений"
          instruction="Перепишите предложения, используя указанную конструкцию"
          items={items1}
        />
      </UiSection>

      <UiSection title="📝 Тест 2: Заполнение пропусков">
        <CheckableExercise
          title="Вставьте правильное слово"
          instruction="Заполните пропуски подходящим словом"
          items={items2}
        />
      </UiSection>

      <UiSection title="📚 Шпаргалка: Advanced Conditionals">
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">
                If it weren't for...
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Значение:</strong> Если бы не... (настоящее)
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Пример:</strong> If it weren't for you, I'd be lost.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">
                If it hadn't been for...
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Значение:</strong> Если бы не... (прошлое)
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Пример:</strong> If it hadn't been for you, I'd have failed.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
              <h4 className="font-bold text-green-900 mb-3 text-lg">
                Had + subject...
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Значение:</strong> Инверсия (формальный стиль)
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Пример:</strong> Had I known, I'd have told you.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 text-lg">
                Supposing...
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Значение:</strong> Предположим, что...
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Пример:</strong> Supposing it rains, what will we do?
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
              <h4 className="font-bold text-red-900 mb-3 text-lg">
                Unless...
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Значение:</strong> Если не...
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Пример:</strong> Unless you hurry, we'll be late.
              </p>
            </div>

            <div className="bg-teal-50 rounded-lg p-5 border-2 border-teal-200">
              <h4 className="font-bold text-teal-900 mb-3 text-lg">
                Provided / As long as
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Значение:</strong> При условии, что...
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Пример:</strong> You can go provided you finish work.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center">
              🎓 Ключевые моменты:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-700">
              <div>
                <p className="mb-2">
                  ✅ <strong>Формальные:</strong> Had + subject, Provided that
                </p>
                <p>
                  ✅ <strong>Разговорные:</strong> Supposing, As long as, Unless
                </p>
              </div>
              <div>
                <p className="mb-2">
                  ✅ <strong>Настоящее:</strong> If it weren't for...
                </p>
                <p>
                  ✅ <strong>Прошлое:</strong> If it hadn't been for...
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляю!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border-2 border-green-300 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            Вы освоили Advanced Conditionals!
          </h3>
          <p className="text-lg text-zinc-700">
            Теперь вы можете использовать продвинутые условные конструкции и
            звучать как носитель языка!
          </p>
        </div>
      </UiSection>
    </>
  );
}
