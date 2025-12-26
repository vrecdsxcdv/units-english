"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function HaveGot({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Что такое have/has got? Базовое введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. Что такое have/has got?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глаголы <strong>have got</strong> и <strong>has got</strong>{" "}
          используются в английском языке, чтобы показать, что у кого-то есть
          что-то (владение). Например, это может быть предмет (книга, телефон),
          животное (собака), или даже абстрактные вещи (время, идея). Для
          начинающих важно запомнить две формы: <strong>have got</strong> (для
          I, you, we, they) и <strong>has got</strong> (для he, she, it).
        </p>
      </UiSection>

      <UiSection title="2. Зачем нужны?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Показывают владение:</strong> I have got a car. (У меня есть
            машина.)
          </li>
          <li>
            <strong>Описывают, что принадлежит человеку или предмету:</strong>{" "}
            She has got a new phone. (У неё новый телефон.)
          </li>
          <li>
            Используются в повседневной речи, особенно в разговорном английском.
          </li>
        </ul>
      </UiSection>

      <UiSection title="3. Ключевые формы и произношение">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Have got</strong> [hæv ɡɒt] (хэв гот) — для I, you, we,
              they (я, ты/вы, мы, они).
            </li>
            <li>
              <strong>Has got</strong> [hæz ɡɒt] (хэз гот) — для he, she, it
              (он, она, оно).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="4. Пример для понимания">
        <p className="text-zinc-700 leading-relaxed mb-2">
          Вместо «У меня есть книга» в русском, в английском говорят:{" "}
          <strong>I have got a book</strong>. Глагол <strong>have got</strong>{" "}
          показывает, что книга принадлежит вам.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          <strong>Повтор:</strong> Have/has got — это про то, что у вас есть
          (владение).
        </p>
      </UiSection>

      <UiSection title="5. Визуал для запоминания">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Картинка:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>человек держит телефон (I have got a phone)</li>
            <li>девушка с собакой (She has got a dog)</li>
            <li>группа с велосипедами (They have got bikes)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="6. Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В английском <strong>have got</strong> чаще используется в
            разговорной речи, чем просто <strong>have</strong> (например, I have
            a car тоже правильно, но I have got a car звучит естественнее в
            неформальном общении). В русском «есть» часто опускается (У меня
            машина), но в английском have/has got обязательны.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Формы have/has got в настоящем времени ===== */
function Step2() {
  const fillItems: FillItem[] = [
    {
      left: "1. I",
      right: "a pen.",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'I' всегда используется форма 'have got'.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "a bag.",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'she' используется форма 'has got'.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "two bikes.",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'they' используется форма 'have got'.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "4. We",
      right: "a new car.",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'we' используется форма 'have got'.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "5. He",
      right: "a dog.",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'he' используется форма 'has got'.",
      ariaLabel: "Упражнение 5",
    },
  ];

  return (
    <>
      <UiSection title="Что такое формы have/has got?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глагол have got меняется в зависимости от подлежащего (кто владеет). В
          настоящем времени используются две формы: <strong>have got</strong> и{" "}
          <strong>has got</strong>.
        </p>
      </UiSection>

      <UiSection title="Когда использовать каждую форму?">
        <div className="space-y-3">
          <ExampleBlock
            title="Have got"
            description="с I, you, we, they"
            example="I have got a pen."
            translation="У меня есть ручка."
          />
          <ExampleBlock
            title="Has got"
            description="с he, she, it"
            example="She has got a bag."
            translation="У неё есть сумка."
          />
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Выбирайте форму по подлежащему: I/you/we/they → have got, he/she/it
            → has got.
          </li>
          <li>
            После have/has got идет существительное (что принадлежит): I have
            got a book.
          </li>
          <li>
            Произношение: Have got [hæv ɡɒt] (хэв гот), Has got [hæz ɡɒt] (хэз
            гот). Слушайте аудио на сайте.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I have got a new phone.</p>
            <p className="text-sm text-gray-600">
              Перевод: У меня новый телефон.
            </p>
            <p className="text-sm text-gray-700 mt-1">Владение предметом.</p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">He has got a dog.</p>
            <p className="text-sm text-gray-600">
              Перевод: У него есть собака.
            </p>
            <p className="text-sm text-gray-700 mt-1">Владение животным.</p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">They have got two bikes.</p>
            <p className="text-sm text-gray-600">
              Перевод: У них два велосипеда.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Владение во множественном числе.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не путайте формы:
              <div className="text-red-600 ml-4">
                Wrong: She have got a car.
              </div>
              <div className="text-green-600 ml-4">
                Right: She has got a car.
              </div>
            </li>
            <li>
              Не используйте без got в этой конструкции:
              <div className="text-red-600 ml-4">Wrong: I have a car got.</div>
              <div className="text-green-600 ml-4">
                Right: I have got a car.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал для запоминания">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Таблица:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>I/You/We/They → have got → I have got a phone.</li>
            <li>He/She/It → has got → She has got a cat.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Have got</strong> звучит более разговорно, чем{" "}
            <strong>have</strong>. Например, дети и подростки в англоязычных
            странах часто говорят I've got… вместо I have….
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Формы:</strong> I/you/we/they have got, he/she/it has got.
            Запоминайте по подлежащему!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Выберите правильную форму"
        instruction="Вставьте правильную форму глагола have got или has got в зависимости от подлежащего."
        items={fillItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 3: Утвердительные предложения с have/has got ===== */
function Step3() {
  const fillItems: FillItem[] = [
    {
      left: "1. I",
      right: "a laptop. (У меня есть ноутбук)",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'I' используется форма 'have got'.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "a new dress. (У неё новое платье)",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'she' используется форма 'has got'.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "two cats. (У них два кота)",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'they' используется форма 'have got'.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "4. He",
      right: "a red car. (У него красная машина)",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'he' используется форма 'has got'.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "5. We",
      right: "tickets. (У нас есть билеты)",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'we' используется форма 'have got'.",
      ariaLabel: "Упражнение 5",
    },
  ];

  return (
    <>
      <UiSection title="Что такое утвердительные предложения?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Утвердительные предложения с have/has got показывают, что у кого-то
          есть что-то. Схема:{" "}
          <strong>Подлежащее + have/has got + объект</strong> (что принадлежит).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I have got a laptop.</p>
            <p className="text-sm text-gray-600">
              Перевод: У меня есть ноутбук.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> I (подлежащее) + have got (форма для
              I) + a laptop (объект владения).
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">She has got a new dress.</p>
            <p className="text-sm text-gray-600">
              Перевод: У неё новое платье.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> She (подлежащее) + has got (форма для
              she) + a new dress (объект).
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">They have got two cats.</p>
            <p className="text-sm text-gray-600">Перевод: У них два кота.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> They (подлежащее) + have got (форма
              для they) + two cats (объект).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Используйте have got для I/you/we/they, has got для he/she/it.
          </li>
          <li>
            После have/has got идет существительное с артиклем (a/an для
            единственного числа, ничего для множественного: I have got books).
          </li>
          <li>
            Сокращенные формы: I have got = I've got [aɪv ɡɒt], She has got =
            She's got [ʃiz ɡɒt].
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">I have got a big family.</p>
            <p className="text-sm text-gray-600">
              Перевод: У меня большая семья.
            </p>
            <p className="text-sm text-gray-700 mt-1">Владение абстрактным.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">He has got a red car.</p>
            <p className="text-sm text-gray-600">
              Перевод: У него красная машина.
            </p>
            <p className="text-sm text-gray-700 mt-1">Владение предметом.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">We have got tickets.</p>
            <p className="text-sm text-gray-600">Перевод: У нас есть билеты.</p>
            <p className="text-sm text-gray-700 mt-1">Множественное число.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не путайте с to be:
              <div className="text-red-600 ml-4">Wrong: I am got a book.</div>
              <div className="text-green-600 ml-4">
                Right: I have got a book.
              </div>
            </li>
            <li>
              Не используйте has с I:
              <div className="text-red-600 ml-4">Wrong: I has got a dog.</div>
              <div className="text-green-600 ml-4">
                Right: I have got a dog.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Картинка:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>человек с ноутбуком (I've got a laptop)</li>
            <li>девушка с платьем (She's got a dress)</li>
            <li>группа с билетами (They've got tickets)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Утвердительные предложения:</strong> Подлежащее + have/has
            got + объект.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Заполните пропуски"
        instruction="Вставьте правильную форму глагола have got или has got в утвердительные предложения."
        items={fillItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 4: Отрицательные предложения с have/has got ===== */
function Step4() {
  const negativeItems: FillItem[] = [
    {
      left: "1. I have got a car. → Отрицание:",
      right: "",
      answers: [
        "I have not got a car",
        "I have not got a car.",
        "I haven't got a car",
        "I haven't got a car.",
      ],
      explanation:
        "Ответ: I have not got a car. — Добавьте 'not' между 'have' и 'got'.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. She has got a phone. → Отрицание:",
      right: "",
      answers: [
        "She has not got a phone",
        "She has not got a phone.",
        "She hasn't got a phone",
        "She hasn't got a phone.",
      ],
      explanation:
        "Ответ: She has not got a phone. — Добавьте 'not' между 'has' и 'got' (или используйте hasn't got).",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. They have got books. → Отрицание:",
      right: "",
      answers: [
        "They have not got books",
        "They have not got books.",
        "They haven't got books",
        "They haven't got books.",
      ],
      explanation:
        "Ответ: They have not got books. — Добавьте 'not' между 'have' и 'got'.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
    {
      left: "4. He has got a dog. → Отрицание:",
      right: "",
      answers: [
        "He has not got a dog",
        "He has not got a dog.",
        "He hasn't got a dog",
        "He hasn't got a dog.",
      ],
      explanation:
        "Ответ: He has not got a dog. — Добавьте 'not' между 'has' и 'got'.",
      ariaLabel: "Упражнение 4",
      wide: true,
    },
    {
      left: "5. We have got time. → Отрицание:",
      right: "",
      answers: [
        "We have not got time",
        "We have not got time.",
        "We haven't got time",
        "We haven't got time.",
      ],
      explanation:
        "Ответ: We have not got time. — Добавьте 'not' между 'have' и 'got'.",
      ariaLabel: "Упражнение 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как сделать отрицание?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для отрицательных предложений добавьте <strong>not</strong> после
          have/has. Схема:{" "}
          <strong>Подлежащее + have/has + not + got + объект</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">I have not got a car.</p>
            <p className="text-sm text-gray-600">Перевод: У меня нет машины.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> I + have + not + got + a car.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">She has not got a phone.</p>
            <p className="text-sm text-gray-600">
              Перевод: У неё нет телефона.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> She + has + not + got + a phone.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">They have not got books.</p>
            <p className="text-sm text-gray-600">Перевод: У них нет книг.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> They + have + not + got + books.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Not ставится между have/has и got.</li>
          <li>
            Сокращенные формы: have not got = haven't got [ˈhævnt ɡɒt], has not
            got = hasn't got [ˈhæznt ɡɒt].
          </li>
          <li>
            Произношение: Haven't got [ˈhævnt ɡɒt] (хэвнт гот), Hasn't got
            [ˈhæznt ɡɒt] (хэзнт гот).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="font-semibold text-lg">I haven't got a bike.</p>
            <p className="text-sm text-gray-600">
              Перевод: У меня нет велосипеда.
            </p>
            <p className="text-sm text-gray-700 mt-1">Отрицание владения.</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="font-semibold text-lg">He hasn't got a dog.</p>
            <p className="text-sm text-gray-600">Перевод: У него нет собаки.</p>
            <p className="text-sm text-gray-700 mt-1">Животное.</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="font-semibold text-lg">We haven't got time.</p>
            <p className="text-sm text-gray-600">Перевод: У нас нет времени.</p>
            <p className="text-sm text-gray-700 mt-1">Абстрактное.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не добавляйте not дважды:
              <div className="text-red-600 ml-4">
                Wrong: I haven't not got a car.
              </div>
              <div className="text-green-600 ml-4">
                Right: I haven't got a car.
              </div>
            </li>
            <li>
              Не путайте формы:
              <div className="text-red-600 ml-4">
                Wrong: She haven't got a bag.
              </div>
              <div className="text-green-600 ml-4">
                Right: She hasn't got a bag.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Таблица:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>I/You/We/They haven't got → I haven't got a car.</li>
            <li>He/She/It hasn't got → She hasn't got a phone.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В разговорной речи <strong>haven't got</strong>/
            <strong>hasn't got</strong> звучат естественнее, чем{" "}
            <strong>don't have</strong>/<strong>doesn't have</strong>, особенно
            в британском английском.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Отрицания:</strong> Подлежащее + have/has + not + got +
            объект.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Преобразуйте в отрицание"
        instruction="Преобразуйте утвердительные предложения в отрицательные, добавив 'not' между have/has и got."
        items={negativeItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: Вопросы с have/has got ===== */
function Step5() {
  const questionItems: FillItem[] = [
    {
      left: "1. He has got a car. → Вопрос:",
      right: "",
      answers: ["Has he got a car", "Has he got a car?"],
      explanation:
        "Ответ: Has he got a car? — Перенесите 'has' в начало предложения.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. We have got tickets. → Вопрос:",
      right: "",
      answers: ["Have we got tickets", "Have we got tickets?"],
      explanation:
        "Ответ: Have we got tickets? — Перенесите 'have' в начало предложения.",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. I have got a bike. → Вопрос:",
      right: "",
      answers: ["Have I got a bike", "Have I got a bike?"],
      explanation:
        "Ответ: Have I got a bike? — Перенесите 'have' в начало предложения.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
    {
      left: "4. She has got a dog. → Вопрос:",
      right: "",
      answers: ["Has she got a dog", "Has she got a dog?"],
      explanation:
        "Ответ: Has she got a dog? — Перенесите 'has' в начало предложения.",
      ariaLabel: "Упражнение 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для вопросов с have/has got меняйте порядок слов:{" "}
          <strong>Have/Has + подлежащее + got + объект?</strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Have I got a bike?</p>
            <p className="text-sm text-gray-600">
              Перевод: У меня есть велосипед?
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Have (для I) + I + got + a bike
              (объект владения).
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Has she got a dog?</p>
            <p className="text-sm text-gray-600">Перевод: У неё есть собака?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Has (для she) + she + got + a dog
              (объект владения).
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Have they got tickets?</p>
            <p className="text-sm text-gray-600">Перевод: У них есть билеты?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Have (для they) + they + got +
              tickets (объект владения).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Ставьте have/has в начало предложения.</li>
          <li>Вопросительный знак (?) обязателен в конце.</li>
          <li>
            Короткие ответы:
            <ul className="list-circle pl-5 mt-1">
              <li>Yes, I have. / No, I haven't.</li>
              <li>Yes, she has. / No, she hasn't.</li>
              <li>Yes, they have. / No, they haven't.</li>
            </ul>
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">Has it got a tail?</p>
            <p className="text-sm text-gray-600">Перевод: У него есть хвост?</p>
            <p className="text-sm text-gray-700 mt-1">Описание животного.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">Have you got time?</p>
            <p className="text-sm text-gray-600">Перевод: У тебя есть время?</p>
            <p className="text-sm text-gray-700 mt-1">Абстрактное владение.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">Have I got this right?</p>
            <p className="text-sm text-gray-600">Перевод: Я правильно понял?</p>
            <p className="text-sm text-gray-700 mt-1">Проверка.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не используйте have/has got для действий:
              <div className="text-red-600 ml-4">Wrong: Has she got run?</div>
              <div className="text-green-600 ml-4">Right: Does she run?</div>
            </li>
            <li>
              Не путайте формы:
              <div className="text-red-600 ml-4">Wrong: Have he got a car?</div>
              <div className="text-green-600 ml-4">
                Right: Has he got a car?
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Картинка:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              вопросительный знак с примерами: Have I got…? (человек указывает
              на себя)
            </li>
            <li>Has she got…? (указывает на девушку)</li>
            <li>Have they got…? (группа людей)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В английском вопросы с <strong>have/has got</strong> часто
            используются для проверки информации (Have you got a pen?) или
            вежливого уточнения (Have you got time?).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Вопросы:</strong> Have/Has + подлежащее + got + объект?
            Короткие ответы: Yes/No + подлежащее + have/has.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Задайте вопросы"
        instruction="Переделайте утвердительные предложения в вопросы, переставив have/has в начало."
        items={questionItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 6: Сравнение с другими темами ===== */
function Step6() {
  return (
    <>
      <UiSection title="Что общего?">
        <p className="text-zinc-700 leading-relaxed mb-2">
          Глагол have/has got работает с другими изученными темами:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Личные местоимения</strong> (I, you, he/she/it, we, they):
            Определяют форму have/has got (I have got, she has got, they have
            got).
          </li>
          <li>
            <strong>Указательные местоимения</strong> (this, that): Могут
            использоваться с have/has got для описания владения (This cat has
            got a tail).
          </li>
          <li>
            <strong>Существительные:</strong> Have/has got часто используется с
            существительными для описания владения (I have got a book).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Что разного?">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal pronouns:</strong> Указывают, кто владеет (I have
            got), а местоимения сами по себе просто указывают подлежащее (I
            run).
          </li>
          <li>
            <strong>To be:</strong> Описывает состояние или роль (She is happy),
            а have/has got описывает владение (She has got a car).
          </li>
          <li>
            <strong>Greetings:</strong> Начинают разговор (Hi!), а have/has got
            описывает, что у вас есть (I have got time).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Сравнение по контексту">
        <div className="bg-indigo-50/50 rounded-lg p-4 space-y-2">
          <p>
            <strong>Have/has got:</strong> She has got a dog. (Описывает
            владение.)
          </p>
          <p>
            <strong>To be:</strong> She is happy. (Описывает состояние.)
          </p>
          <p>
            <strong>Pronouns:</strong> She runs. (Указывает подлежащее.)
          </p>
        </div>
      </UiSection>

      <UiSection title="Vocabulary list (сравнения, с [произношением], примерами)">
        <div className="bg-blue-50/50 rounded-lg p-4 space-y-3">
          <div>
            <p className="font-semibold">Have/has got:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
              <li>
                <strong>Have got</strong> [hæv ɡɒt] — У меня есть машина: I have
                got a car.
              </li>
              <li>
                <strong>Has got</strong> [hæz ɡɒt] — У неё дома кошка: She has
                got a cat at home.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">To be:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
              <li>
                <strong>Am</strong> [æm] — Я студент: I am a student.
              </li>
              <li>
                <strong>Is</strong> [ɪz] — Она дома: She is at home.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Pronouns:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
              <li>
                <strong>I</strong> [aɪ] — Я иду: I walk.
              </li>
              <li>
                <strong>This</strong> [ðɪs] — Это книга: This is a book.
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Common mistakes">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">Wrong: I has got a car.</div>
              <div className="text-green-600">Right: I have got a car.</div>
            </li>
            <li>
              <div className="text-red-600">Wrong: Have he got a dog?</div>
              <div className="text-green-600">Right: Has he got a dog?</div>
            </li>
            <li>
              <div className="text-red-600">Wrong: She have got a phone.</div>
              <div className="text-green-600">Right: She has got a phone.</div>
            </li>
          </ul>
          <p className="mt-3 text-zinc-700">
            <strong>Повтор:</strong> Проверяйте форму have/has got по
            подлежащему.
          </p>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Таблица:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Have/has got:</strong> I have got a car. (У меня есть
              машина.)
            </li>
            <li>
              <strong>To be:</strong> I am happy. (Я счастлив.)
            </li>
            <li>
              <strong>Pronouns:</strong> I run. (Я бегу.)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Have/has got</strong> часто используется в разговорных
            фразах, например, I've got a question (У меня есть вопрос) или Have
            you got a minute? (У тебя есть минутка?), что делает его ключевым
            для общения.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения по have/has got ===== */
function Step7() {
  const fillForm: FillItem[] = [
    {
      left: "1. I",
      right: "a car.",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'I' используется форма 'have got'.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. She",
      right: "a phone.",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'she' используется форма 'has got'.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. They",
      right: "two dogs.",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'they' используется форма 'have got'.",
      ariaLabel: "Вопрос 3",
    },
    {
      left: "4. He",
      right: "a bike. (У него есть велосипед)",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'he' используется форма 'has got'.",
      ariaLabel: "Вопрос 4",
    },
    {
      left: "5. We",
      right: "tickets. (У нас есть билеты)",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'we' используется форма 'have got'.",
      ariaLabel: "Вопрос 5",
    },
    {
      left: "6. It",
      right: "a long tail. (У него длинный хвост)",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'it' используется форма 'has got'.",
      ariaLabel: "Вопрос 6",
    },
    {
      left: "7. You",
      right: "a nice house. (У тебя хороший дом)",
      answers: ["have got"],
      explanation:
        "Ответ: have got — Для подлежащего 'you' используется форма 'have got'.",
      ariaLabel: "Вопрос 7",
    },
  ];

  const makeNegative: FillItem[] = [
    {
      left: "1. I have got a car. → Отрицание:",
      right: "",
      answers: [
        "I have not got a car",
        "I have not got a car.",
        "I haven't got a car",
        "I haven't got a car.",
      ],
      explanation:
        "Ответ: I have not got a car. — Добавляем 'not' между 'have' и 'got'.",
      ariaLabel: "Сделайте отрицательным 1",
      wide: true,
    },
    {
      left: "2. She has got a dog. → Отрицание:",
      right: "",
      answers: [
        "She has not got a dog",
        "She has not got a dog.",
        "She hasn't got a dog",
        "She hasn't got a dog.",
      ],
      explanation:
        "Ответ: She has not got a dog. — Добавляем 'not' между 'has' и 'got'.",
      ariaLabel: "Сделайте отрицательным 2",
      wide: true,
    },
    {
      left: "3. They have got books. → Отрицание:",
      right: "",
      answers: [
        "They have not got books",
        "They have not got books.",
        "They haven't got books",
        "They haven't got books.",
      ],
      explanation:
        "Ответ: They have not got books. — Добавляем 'not' между 'have' и 'got'.",
      ariaLabel: "Сделайте отрицательным 3",
      wide: true,
    },
  ];

  const makeQuestions: FillItem[] = [
    {
      left: "1. He has got a phone. → Вопрос:",
      right: "",
      answers: ["Has he got a phone", "Has he got a phone?"],
      explanation:
        "Ответ: Has he got a phone? — Переносим 'has' в начало предложения.",
      ariaLabel: "Сделайте вопросом 1",
      wide: true,
    },
    {
      left: "2. You have got time. → Вопрос:",
      right: "",
      answers: ["Have you got time", "Have you got time?"],
      explanation:
        "Ответ: Have you got time? — Переносим 'have' в начало предложения.",
      ariaLabel: "Сделайте вопросом 2",
      wide: true,
    },
    {
      left: "3. It has got a tail. → Вопрос:",
      right: "",
      answers: ["Has it got a tail", "Has it got a tail?"],
      explanation:
        "Ответ: Has it got a tail? — Переносим 'has' в начало предложения.",
      ariaLabel: "Сделайте вопросом 3",
      wide: true,
    },
  ];

  const translation: FillItem[] = [
    {
      left: "1. У меня нет собаки. →",
      right: "",
      answers: [
        "I have not got a dog",
        "I have not got a dog.",
        "I haven't got a dog",
        "I haven't got a dog.",
      ],
      explanation:
        "Ответ: I have not got a dog. — Используем 'have not got' для отрицания с 'I'.",
      ariaLabel: "Переведите 1",
      wide: true,
    },
    {
      left: "2. У них есть машина? →",
      right: "",
      answers: ["Have they got a car", "Have they got a car?"],
      explanation:
        "Ответ: Have they got a car? — Вопрос начинается с 'Have' для 'they'.",
      ariaLabel: "Переведите 2",
      wide: true,
    },
    {
      left: "3. У неё есть новый телефон. →",
      right: "",
      answers: [
        "She has got a new phone",
        "She has got a new phone.",
        "She's got a new phone",
        "She's got a new phone.",
      ],
      explanation:
        "Ответ: She has got a new phone. — Используем 'has got' для 'she' с существительным.",
      ariaLabel: "Переведите 3",
      wide: true,
    },
    {
      left: "4. У нас есть билеты. →",
      right: "",
      answers: [
        "We have got tickets",
        "We have got tickets.",
        "We've got tickets",
        "We've got tickets.",
      ],
      explanation:
        "Ответ: We have got tickets. — Используем 'have got' для 'we' с существительным во множественном числе.",
      ariaLabel: "Переведите 4",
      wide: true,
    },
  ];

  const mistakes: FillItem[] = [
    {
      left: "1. ❌ I has got a car. → Исправленное:",
      right: "",
      answers: ["I have got a car", "I have got a car."],
      explanation:
        "Исправление: I have got a car. — Для 'I' используется 'have got', а не 'has got'.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She have got a dog. → Исправленное:",
      right: "",
      answers: ["She has got a dog", "She has got a dog."],
      explanation:
        "Исправление: She has got a dog. — Для 'she' используется 'has got', а не 'have got'.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Have he got a phone? → Исправленное:",
      right: "",
      answers: ["Has he got a phone", "Has he got a phone?"],
      explanation:
        "Исправление: Has he got a phone? — Для 'he' используется 'has', а не 'have'.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
    {
      left: "4. ❌ We hasn't got time. → Исправленное:",
      right: "",
      answers: [
        "We have not got time",
        "We have not got time.",
        "We haven't got time",
        "We haven't got time.",
      ],
      explanation:
        "Исправление: We haven't got time. — Для 'we' используется 'haven't got', а не 'hasn't got'.",
      ariaLabel: "Исправьте 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Финальные упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Теперь проверим ваши знания! Выполните все упражнения, чтобы закрепить
          тему "Have/has got". Каждое упражнение включает четкие инструкции и
          объяснения правильных ответов.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Заполните правильную форму (have got, has got)"
        instruction="Вставьте правильную форму глагола have got или has got в зависимости от подлежащего."
        items={fillForm}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте предложения отрицательными"
        instruction="Переделайте утвердительные предложения в отрицательные, добавив 'not' между have/has и got."
        items={makeNegative}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Составьте вопросы"
        instruction="Переделайте утвердительные предложения в вопросы, переставив have/has в начало."
        items={makeQuestions}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Переведите предложения"
        instruction="Переведите предложения с русского на английский, используя правильную форму have/has got."
        items={translation}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в использовании глагола have/has got."
        items={mistakes}
      />

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Have/has got"! Теперь вы знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Формы: I/you/we/they have got, he/she/it has got</li>
          <li>Утверждения: Подлежащее + have/has got + объект</li>
          <li>Отрицания: Подлежащее + have/has + not + got + объект</li>
          <li>Вопросы: Have/Has + подлежащее + got + объект?</li>
          <li>Короткие ответы: Yes/No + подлежащее + have/has</li>
          <li>Как избегать распространённых ошибок</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>I/You/We/They have got:</strong> Всегда используйте 'have
              got' с этими местоимениями. Пример: I have got a car.
            </li>
            <li>
              <strong>He/She/It has got:</strong> Используйте 'has got' для
              единственного числа третьего лица. Пример: She has got a phone.
            </li>
            <li>
              <strong>Отрицания:</strong> Добавьте 'not' между have/has и got.
              Пример: I haven't got time.
            </li>
            <li>
              <strong>Вопросы:</strong> Перенесите have/has в начало. Пример:
              Have you got a pen?
            </li>
            <li>
              <strong>Произношение:</strong> Have got [hæv ɡɒt] (хэв гот), Has
              got [hæz ɡɒt] (хэз гот), Haven't got [ˈhævnt ɡɒt] (хэвнт гот),
              Hasn't got [ˈhæznt ɡɒt] (хэзнт гот).
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте произношение: Have got [hæv ɡɒt], Has got [hæz ɡɒt].
            </li>
            <li>
              Запомните правило: проверяйте подлежащее перед выбором формы
              have/has got.
            </li>
            <li>
              Используйте have/has got в повседневных предложениях: "I've got a
              question", "She's got a car", "We've got time".
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== Helper Components ===== */
function ExampleBlock({
  title,
  description,
  example,
  translation,
}: {
  title: string;
  description: string;
  example: string;
  translation: string;
}) {
  return (
    <div className="bg-indigo-50/50 rounded-lg p-3">
      <p className="font-semibold text-zinc-900">{title}</p>
      <p className="text-sm text-zinc-600 mb-1">{description}</p>
      <p className="text-zinc-900">{example}</p>
      <p className="text-sm italic text-zinc-600">{translation}</p>
    </div>
  );
}
