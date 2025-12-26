"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentSimple({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Обзор времен в английском языке ===== */
function Step1() {
  return (
    <>
      <UiSection title="Введение в времена в английском языке">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Английский язык имеет сложную систему времен (tenses), которая
          помогает точно выражать, когда происходит действие, как оно происходит
          и завершено ли оно. В целом, в английском{" "}
          <strong>12 основных времен</strong> в активном залоге, разделенных на
          три группы:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              Past (Прошедшее):
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Past Simple (I worked — Я работал)</li>
              <li>Past Continuous (I was working — Я работал в момент)</li>
              <li>Past Perfect (I had worked — Я уже работал)</li>
              <li>
                Past Perfect Continuous (I had been working — Я работал какое-то
                время до другого действия)
              </li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              Present (Настоящее):
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Present Simple (I work — Я работаю регулярно)</li>
              <li>Present Continuous (I am working — Я работаю сейчас)</li>
              <li>
                Present Perfect (I have worked — Я работал и результат важен)
              </li>
              <li>
                Present Perfect Continuous (I have been working — Я работаю уже
                какое-то время)
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              Future (Будущее):
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Future Simple (I will work — Я буду работать)</li>
              <li>
                Future Continuous (I will be working — Я буду работать в момент)
              </li>
              <li>
                Future Perfect (I will have worked — Я уже буду работать к
                моменту)
              </li>
              <li>
                Future Perfect Continuous (I will have been working — Я буду
                работать какое-то время к моменту)
              </li>
            </ul>
          </div>
        </div>

        <p className="text-zinc-700 leading-relaxed">
          Каждое время сочетает <strong>аспект</strong> (simple — простое,
          continuous — продолжительное, perfect — завершенное, perfect
          continuous — завершенно-продолжительное) и <strong>время</strong>{" "}
          (past, present, future). Это позволяет англичанам точно описывать
          нюансы действия, чего в русском достигают контекстом, наречиями или
          аспектами глагола.
        </p>
      </UiSection>

      <UiSection title="Сравнение с русским языком: ключевые различия">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Русский и английский языки сильно отличаются в грамматике глаголов.
          Вот основные различия:
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Количество времен:</strong> В русском всего три времени:
            прошедшее (я работал), настоящее (я работаю), будущее (я буду
            работать). В английском 12 времен, что делает его более "точным" в
            описании времени действия.
          </li>
          <li>
            <strong>Аспекты vs. времена:</strong> Русский полагается на аспекты
            (несовершенный/совершенный), чтобы показать, завершено ли действие.
            Английский использует времена и вспомогательные глаголы (be, have,
            do, will).
          </li>
          <li>
            <strong>Вспомогательные глаголы:</strong> В английском для вопросов
            и отрицаний используются do/does/did, be, have, чего нет в русском.
            В русском вопрос — это интонация или инверсия.
          </li>
          <li>
            <strong>Спряжение:</strong> В русском глаголы спрягаются по лицам и
            числам (я работаю, ты работаешь, он работает). В английском Present
            Simple спряжение минимальное: только -s для 3-го лица ед.ч. (he
            works).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Распространенные ошибки русскоязычных">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Забывают -s (He work вместо He works)</li>
            <li>Путают do с be (Do you student? вместо Are you a student?)</li>
            <li>
              Используют Present Continuous вместо Simple для привычек (I am
              going to work every day вместо I go)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Почему это важно?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            Понимание различий помогает избежать переводов "слово в слово" и
            думать по-английски. <strong>Present Simple</strong> — основа, так
            как оно самое простое и частое.
          </p>
        </div>
      </UiSection>

      <UiSection title="Визуал для запоминания">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Таблица сравнения:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Английский: 12 времен, вспомогательные глаголы</li>
            <li>Русский: 3 времени, аспекты (несовершенный/совершенный)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Английские времена точнее описывают нюансы,
            русский — аспектами и контекстом.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Введение в Present Simple ===== */
function Step2() {
  return (
    <>
      <UiSection title="Что такое Present Simple?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Present Simple</strong> — настоящее простое время, которое
          показывает{" "}
          <strong>регулярные действия, привычки, рутину и факты</strong>. Оно
          "простое", потому что не использует вспомогательные глаголы в
          утверждениях (кроме do/does в вопросах и отрицаниях).
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <p className="text-sm text-zinc-700">
            <strong>💡 Мелочь:</strong> В отличие от русского настоящего, где
            глагол меняется по лицам (работаю/работаешь), в английском изменения
            минимальны — только -s для 3-го лица.
          </p>
        </div>
      </UiSection>

      <UiSection title="Общая структура">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">Утверждение:</p>
            <p className="text-sm text-gray-700">
              Подлежащее + глагол (+ -s для he/she/it)
            </p>
            <p className="text-sm italic text-gray-600">I work. / He works.</p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold">Отрицание:</p>
            <p className="text-sm text-gray-700">
              Подлежащее + do/does + not + глагол
            </p>
            <p className="text-sm italic text-gray-600">
              I don't work. / He doesn't work.
            </p>
          </div>

          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold">Вопрос:</p>
            <p className="text-sm text-gray-700">
              Do/Does + подлежащее + глагол?
            </p>
            <p className="text-sm italic text-gray-600">
              Do you work? / Does he work?
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с русским">
        <p className="text-zinc-700 leading-relaxed mb-4">
          В русском настоящее время — это базовая форма глагола с окончаниями по
          лицам (я работаю, ты работаешь). Нет do/does.
        </p>

        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            <strong>Мелочь:</strong> Русское настоящее может выражать и
            привычку, и факт, и текущий момент (контекст решает), в английском
            для текущего момента — Present Continuous (I am working now).
          </p>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">I work in an office.</p>
            <p className="text-sm text-gray-600">Перевод: Я работаю в офисе.</p>
            <p className="text-sm text-gray-700 mt-1">
              Привычка, регулярное действие
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am working now.</p>
            <p className="text-sm text-gray-600">Перевод: Я сейчас работаю.</p>
            <p className="text-sm text-gray-700 mt-1">
              Текущий момент (не Present Simple!)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Диаграмма:</p>
          <p className="text-sm text-zinc-700">
            Подлежащее → Глагол (work/works) → Пример
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Simple — для регулярного, с
            минимальными изменениями глагола.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Утвердительные предложения ===== */
function Step3() {
  const fillItems: FillItem[] = [
    {
      left: "1. He",
      right: "in a shop. (work)",
      answers: ["works"],
      explanation: "Ответ: works — Для 'he' добавляем -s к глаголу work.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "to school. (go)",
      answers: ["goes"],
      explanation:
        "Ответ: goes — Глагол go оканчивается на -o, поэтому добавляем -es.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. I",
      right: "apples. (eat)",
      answers: ["eat"],
      explanation:
        "Ответ: eat — Для 'I' глагол не изменяется, используем базовую форму.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "4. He",
      right: "English. (study)",
      answers: ["studies"],
      explanation:
        "Ответ: studies — Когда глагол заканчивается на -y после согласной, меняем на -ies.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "5. She",
      right: "breakfast at 8. (have)",
      answers: ["has"],
      explanation: "Ответ: has — Нерегулярная форма: have → has для 3-го лица.",
      ariaLabel: "Упражнение 5",
    },
  ];

  return (
    <>
      <UiSection title="Как строить утверждения?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + глагол</strong> (инфинитив без to, +
          -s/-es для he/she/it).
        </p>
      </UiSection>

      <UiSection title="Подробные правила добавления -s/-es">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Стандартное правило: + -s</p>
            <p className="text-sm mb-2">talk → talks [токс]</p>
            <p className="text-sm text-gray-700">
              <strong>Мелочь:</strong> Произношение -s зависит от предыдущего
              звука:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
              <li>[s] после глухих: talks [токс]</li>
              <li>[z] после звонких: plays [плэйз]</li>
              <li>[ɪz] после шипящих: kisses [кисиз]</li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              2. Правило: + -es для -s, -sh, -ch, -x, -o, -z
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>kiss → kisses</li>
              <li>go → goes [гоуз]</li>
              <li>watch → watches</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Исключение:</strong> do → does [даз]
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Правило для -y</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>После согласной: y → ies (try → tries [трайз])</li>
              <li>После гласной: + -s (play → plays)</li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Нерегулярные</p>
            <p className="text-sm">have → has [хэз]</p>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Мелочь:</strong> have в Present Simple — не как have got
              (владение), а для действий (I have breakfast — Я завтракаю).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры с мелочами">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I eat apples.</p>
            <p className="text-sm text-gray-600">Перевод: Я ем яблоки.</p>
            <p className="text-sm text-gray-700 mt-1">Без изменений</p>
          </div>

          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">He eats apples.</p>
            <p className="text-sm text-gray-600">Перевод: Он ест яблоки.</p>
            <p className="text-sm text-gray-700 mt-1">-s, произношение [its]</p>
          </div>

          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">She goes to school.</p>
            <p className="text-sm text-gray-600">Перевод: Она ходит в школу.</p>
            <p className="text-sm text-gray-700 mt-1">
              -es, потому что go на -o
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не для текущих действий:
              <div className="text-red-600 ml-4">Wrong: I eat now</div>
              <div className="text-green-600 ml-4">Right: I am eating now</div>
            </li>
            <li>
              Не добавляйте to:
              <div className="text-red-600 ml-4">Wrong: I to work</div>
              <div className="text-green-600 ml-4">Right: I work</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте правильную форму глагола"
        instruction="Добавьте -s/-es где необходимо или используйте базовую форму."
        items={fillItems}
      />

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Уделяйте внимание -s/-es и произношению —
            ключевые мелочи!
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Отрицательные предложения ===== */
function Step4() {
  const negativeItems: FillItem[] = [
    {
      left: "1. I play tennis. → Отрицание:",
      right: "",
      answers: [
        "I don't play tennis",
        "I don't play tennis.",
        "I do not play tennis",
        "I do not play tennis.",
      ],
      explanation: "Ответ: I don't play tennis. — Используем don't для 'I'.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. She likes tea. → Отрицание:",
      right: "",
      answers: [
        "She doesn't like tea",
        "She doesn't like tea.",
        "She does not like tea",
        "She does not like tea.",
      ],
      explanation:
        "Ответ: She doesn't like tea. — Используем doesn't для 'she', глагол без -s.",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. They study Russian. → Отрицание:",
      right: "",
      answers: [
        "They don't study Russian",
        "They don't study Russian.",
        "They do not study Russian",
        "They do not study Russian.",
      ],
      explanation:
        "Ответ: They don't study Russian. — Используем don't для 'they'.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как делать отрицание?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>Подлежащее + do/does + not + глагол (инфинитив)</strong>.
        </p>
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            <strong>Мелочь:</strong> do/does — вспомогательные, они "помогают"
            главному глаголу. В русском просто "не" (не работаю), без
            вспомогательных — это главная разница.
          </p>
        </div>
      </UiSection>

      <UiSection title="Подробные правила">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              Do not (don't) для I, you, we, they
            </p>
            <p className="text-sm mb-2">I don't eat meat.</p>
            <p className="text-sm text-gray-700">
              Произношение don't [doʊnt] — не [донт], русскоязычные часто
              говорят [донт].
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              Does not (doesn't) для he, she, it
            </p>
            <p className="text-sm mb-2">She doesn't eat meat.</p>
            <p className="text-sm text-gray-700">
              Произношение doesn't [ˈdʌznt] — звук [z] перед [n].
            </p>
            <p className="text-sm text-red-600 mt-2">
              <strong>Мелочь:</strong> После doesn't глагол БЕЗ -s (eat, не
              eats) — это ловушка для русскоязычных.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Сокращения</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>don't = do not</li>
              <li>doesn't = does not</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              В разговорной речи всегда используйте сокращения, в формальной —
              полные формы.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры с мелочами">
        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">I don't speak Russian.</p>
            <p className="text-sm text-gray-600">
              Перевод: Я не говорю по-русски.
            </p>
            <p className="text-sm text-gray-700 mt-1">Полное: do not</p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">He doesn't like tea.</p>
            <p className="text-sm text-gray-600">Перевод: Он не любит чай.</p>
            <p className="text-sm text-gray-700 mt-1">Глагол like без -s</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с русским">
        <p className="text-zinc-700 leading-relaxed mb-4">
          В русском отрицание — "не" перед глаголом (не говорю), без изменений.
          В английском do/does меняет форму по подлежащему, как в спряжении.
        </p>
        <div className="bg-red-50/50 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Ошибка:</strong> Русскоязычные говорят "I not speak" без do.
          </p>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не используйте not без do/does:
              <div className="text-red-600 ml-4">Wrong: I not work</div>
              <div className="text-green-600 ml-4">Right: I don't work</div>
            </li>
            <li>
              Не добавляйте -s после doesn't:
              <div className="text-red-600 ml-4">Wrong: She doesn't likes</div>
              <div className="text-green-600 ml-4">Right: She doesn't like</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Сделайте отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные."
        items={negativeItems}
      />

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Do/does + not — ключ к отрицанию, без
            изменений главного глагола.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Вопросительные предложения ===== */
function Step5() {
  const questionItems: FillItem[] = [
    {
      left: "1. He works in London. → Вопрос:",
      right: "",
      answers: ["Does he work in London", "Does he work in London?"],
      explanation:
        "Ответ: Does he work in London? — Переносим 'does' в начало предложения, глагол без -s.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. You read books. → Вопрос:",
      right: "",
      answers: ["Do you read books", "Do you read books?"],
      explanation:
        "Ответ: Do you read books? — Переносим 'do' в начало предложения.",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. She watches films. → Вопрос:",
      right: "",
      answers: ["Does she watch films", "Does she watch films?"],
      explanation:
        "Ответ: Does she watch films? — Переносим 'does' в начало, глагол watch без -es.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как делать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Do/Does + подлежащее + глагол (инфинитив)?</strong>
        </p>
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            <strong>Мелочь:</strong> Это инверсия — вспомогательный do/does на
            первое место. В русском вопросы — интонация или "ли" (Работаешь ли
            ты?), без вспомогательных.
          </p>
        </div>
      </UiSection>

      <UiSection title="Подробные правила">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Do для I, you, we, they</p>
            <p className="text-sm mb-2">Do you speak English?</p>
            <p className="text-sm text-gray-700">
              Произношение [duː] — длинный [u].
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Does для he, she, it</p>
            <p className="text-sm mb-2">Does she speak English?</p>
            <p className="text-sm text-gray-700 mb-2">
              Произношение [dʌz] — короткий [ʌ].
            </p>
            <p className="text-sm text-red-600">
              <strong>Мелочь:</strong> После Does глагол БЕЗ -s (speak, не
              speaks).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Короткие ответы</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Yes, I do. / No, I don't.</li>
              <li>Yes, she does. / No, she doesn't.</li>
            </ul>
            <p className="text-sm text-red-600 mt-2">
              <strong>Не:</strong> Yes, I speak — это ошибка русскоязычных!
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Вопросы с wh-словами</p>
            <p className="text-sm mb-2">
              What/Where/When/Why/How + do/does + подлежащее + глагол?
            </p>
            <p className="text-sm text-gray-700">
              Пример: What do you do? (Какая у тебя работа?)
            </p>
            <p className="text-sm text-red-600 mt-2">
              <strong>Мелочь:</strong> "What do you do?" — идиома для профессии,
              не буквальное "Что ты делаешь?".
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры с мелочами">
        <div className="space-y-4">
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Do they play tennis?</p>
            <p className="text-sm text-gray-600">
              Они играют в теннис? → Yes, they do.
            </p>
          </div>

          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Does he go to school?</p>
            <p className="text-sm text-gray-600">
              Он ходит в школу? → No, he doesn't.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с русским">
        <p className="text-zinc-700 leading-relaxed mb-4">
          В русском: "Ты говоришь по-английски?" — интонация. Нет do/does.
        </p>
        <div className="bg-red-50/50 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Ошибка:</strong> Русскоязычные говорят "You speak English?"
            без do.
          </p>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не используйте -s после Does:
              <div className="text-red-600 ml-4">Wrong: Does she speaks?</div>
              <div className="text-green-600 ml-4">Right: Does she speak?</div>
            </li>
            <li>
              Не путайте с to be:
              <div className="text-red-600 ml-4">Wrong: Are you speak?</div>
              <div className="text-green-600 ml-4">Right: Do you speak?</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Задайте вопросы"
        instruction="Переделайте утвердительные предложения в вопросы."
        items={questionItems}
      />

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Do/Does на первом месте — основа вопросов.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Распространенные ошибки ===== */
function Step6() {
  return (
    <>
      <UiSection title="Типичные ошибки русскоязычных и как их избежать">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вот самые распространенные ошибки, которые делают русскоязычные
          ученики при использовании Present Simple:
        </p>

        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              1. Забывают -s для he/she/it
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: He work</div>
              <div className="text-green-600">✅ Right: He works</div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Причина:</strong> В русском нет такого.
              <br />
              <strong>Решение:</strong> Всегда проверяйте подлежащее — если 3-е
              лицо ед.ч., добавьте -s. Практикуйте произношение [s/z/ɪz].
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              2. Путают do/does в вопросах/отрицаниях
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: Do she work?</div>
              <div className="text-green-600">✅ Right: Does she work?</div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Мелочь:</strong> Does для 3-го лица, как -s.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              3. Добавляют -s в отрицаниях/вопросах
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: She doesn't works</div>
              <div className="text-green-600">✅ Right: She doesn't work</div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Причина:</strong> Забывают, что does уже "несет" 3-е лицо.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              4. Используют not без do
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: I not work</div>
              <div className="text-green-600">✅ Right: I don't work</div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Причина:</strong> Прямой перевод из русского.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              5. Неправильные короткие ответы
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: Yes, I work</div>
              <div className="text-green-600">✅ Right: Yes, I do</div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Мелочь:</strong> Ответ на do, не на глагол.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              6. Путают с другими временами
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: I work now</div>
              <div className="text-green-600">✅ Right: I am working now</div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Решение:</strong> Помните, Present Simple — для
              регулярного, не для текущего момента.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">
              7. Произношение мелочей
            </p>
            <p className="text-sm text-gray-700">
              -s произносят как [с] всегда, вместо [z] или [ɪz].
              <br />
              <strong>Практикуйте:</strong> dogs [dɒɡz] (z), cats [kæts] (s),
              kisses [kɪsɪz] (ɪz)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с русским">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В русском нет вспомогательных, так что ошибки от прямого перевода.
            Русское настоящее — более "гибкое", английское — строгое с
            правилами.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Проверяйте подлежащее, вспомогательные и -s
            — избегайте типичных ловушек.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения ===== */
function Step7() {
  const fillForm: FillItem[] = [
    {
      left: "1. I",
      right: "books. (read)",
      answers: ["read"],
      explanation: "Ответ: read — Для 'I' глагол не изменяется.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. She",
      right: "in Moscow. (live)",
      answers: ["lives"],
      explanation: "Ответ: lives — Для 'she' добавляем -s.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. He",
      right: "football. (play)",
      answers: ["plays"],
      explanation: "Ответ: plays — Для 'he' добавляем -s.",
      ariaLabel: "Вопрос 3",
    },
    {
      left: "4. They",
      right: "English. (study)",
      answers: ["study"],
      explanation: "Ответ: study — Для 'they' глагол не изменяется.",
      ariaLabel: "Вопрос 4",
    },
    {
      left: "5. She",
      right: "TV. (watch)",
      answers: ["watches"],
      explanation: "Ответ: watches — Глагол на -ch, поэтому добавляем -es.",
      ariaLabel: "Вопрос 5",
    },
  ];

  const translation: FillItem[] = [
    {
      left: "1. Я не читаю книги. →",
      right: "",
      answers: ["I don't read books", "I don't read books."],
      explanation:
        "Ответ: I don't read books. — Используем don't для отрицания с 'I'.",
      ariaLabel: "Переведите 1",
      wide: true,
    },
    {
      left: "2. Он работает в офисе? →",
      right: "",
      answers: ["Does he work in an office", "Does he work in an office?"],
      explanation:
        "Ответ: Does he work in an office? — Вопрос начинается с 'Does' для 'he'.",
      ariaLabel: "Переведите 2",
      wide: true,
    },
    {
      left: "3. Она изучает английский. →",
      right: "",
      answers: ["She studies English", "She studies English."],
      explanation:
        "Ответ: She studies English. — Для 'she' глагол study меняется на studies.",
      ariaLabel: "Переведите 3",
      wide: true,
    },
  ];

  const mistakes: FillItem[] = [
    {
      left: "1. ❌ I works every day. → Исправленное:",
      right: "",
      answers: ["I work every day", "I work every day."],
      explanation: "Исправление: I work every day. — Для 'I' не добавляем -s.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She don't live here. → Исправленное:",
      right: "",
      answers: ["She doesn't live here", "She doesn't live here."],
      explanation:
        "Исправление: She doesn't live here. — Для 'she' используется doesn't.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Does he studies? → Исправленное:",
      right: "",
      answers: ["Does he study", "Does he study?"],
      explanation:
        "Исправление: Does he study? — После 'does' глагол без -s/-es.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Финальные упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Теперь проверим ваши знания! Выполните все упражнения, чтобы закрепить
          тему "Present Simple: Structure and Formation". Каждое упражнение
          включает четкие инструкции и объяснения правильных ответов.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Заполните правильную форму"
        instruction="Вставьте правильную форму глагола в Present Simple."
        items={fillForm}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Переведите предложения"
        instruction="Переведите предложения с русского на английский, используя Present Simple."
        items={translation}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в использовании Present Simple."
        items={mistakes}
      />

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Present Simple: Structure and Formation"! Теперь вы
          знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>12 времен английского языка и их отличие от русского</li>
          <li>Структуру Present Simple: утверждения, отрицания, вопросы</li>
          <li>Правила добавления -s/-es для 3-го лица единственного числа</li>
          <li>Использование do/does в вопросах и отрицаниях</li>
          <li>Типичные ошибки русскоязычных и как их избежать</li>
          <li>Разницу между Present Simple и Present Continuous</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Утверждения:</strong> Подлежащее + глагол (+ -s для
              he/she/it)
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + don't/doesn't + глагол
              (без -s)
            </li>
            <li>
              <strong>Вопросы:</strong> Do/Does + подлежащее + глагол (без -s)?
            </li>
            <li>
              <strong>Главная ловушка:</strong> После does/doesn't глагол всегда
              без -s
            </li>
            <li>
              <strong>Использование:</strong> Для регулярных действий, привычек,
              фактов, НЕ для текущего момента
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте произношение -s: [s] после глухих, [z] после звонких,
              [ɪz] после шипящих
            </li>
            <li>Всегда проверяйте подлежащее перед выбором формы глагола</li>
            <li>
              Помните: do/does "забирают" на себя -s в вопросах и отрицаниях
            </li>
            <li>
              Используйте Present Simple для описания своих привычек и рутины
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




