"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ToBe({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Что такое глагол to be? ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. Что такое глагол to be?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глагол <strong>to be</strong> (быть) — один из самых важных глаголов в
          английском языке. Он используется, чтобы описать, кто или что есть
          человек/предмет, их состояние, местоположение или принадлежность. Для
          начинающих важно запомнить его основные формы:{" "}
          <strong>am, is, are</strong>.
        </p>
      </UiSection>

      <UiSection title="2. Зачем нужен?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Показывает, кто это или что это:</strong> I am a student. (Я
            студент.)
          </li>
          <li>
            <strong>Описывает состояние:</strong> She is happy. (Она счастлива.)
          </li>
          <li>
            <strong>Указывает местоположение:</strong> We are at home. (Мы
            дома.)
          </li>
          <li>Используется в простых предложениях для связи слов.</li>
        </ul>
      </UiSection>

      <UiSection title="3. Ключевые формы и произношение">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Am</strong> [æm] (эм) — для I (я).
            </li>
            <li>
              <strong>Is</strong> [ɪz] (из) — для he, she, it (он, она, оно).
            </li>
            <li>
              <strong>Are</strong> [ɑːr] (ар) — для you, we, they (ты/вы, мы,
              они).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="4. Пример для понимания">
        <p className="text-zinc-700 leading-relaxed mb-2">
          Вместо длинного описания «Мария — счастливая девушка» можно сказать:{" "}
          <strong>Maria is happy</strong>. Глагол <strong>is</strong> связывает
          имя (Maria) и характеристику (happy).
        </p>
        <p className="text-zinc-700 leading-relaxed">
          <strong>Повтор:</strong> To be — это глагол-связка, которая помогает
          описывать людей, вещи или ситуации.
        </p>
      </UiSection>

      <UiSection title="5. Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В английском to be используется чаще, чем в русском, где глагол
            «быть» часто опускается (например, «Я студент» вместо «Я есть
            студент»). В английском am/is/are всегда обязательны.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Формы глагола to be ===== */
function Step2() {
  const fillItems: FillItem[] = [
    {
      left: "1. I",
      right: "a student.",
      answers: ["am"],
      explanation:
        "Ответ: am — Для подлежащего 'I' всегда используется форма 'am'.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "at school.",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'she' используется форма 'is'.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "happy.",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'they' используется форма 'are'.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "4. We",
      right: "friends.",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'we' используется форма 'are'.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "5. He",
      right: "a doctor.",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'he' используется форма 'is'.",
      ariaLabel: "Упражнение 5",
    },
  ];

  return (
    <>
      <UiSection title="Что такое формы to be?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глагол to be меняется в зависимости от подлежащего (кто или что
          выполняет действие). В настоящем времени он имеет три формы:{" "}
          <strong>am, is, are</strong>.
        </p>
      </UiSection>

      <UiSection title="Когда использовать каждую форму?">
        <div className="space-y-3">
          <ExampleBlock
            title="Am"
            description="только с I (я)"
            example="I am a teacher."
            translation="Я учитель."
          />
          <ExampleBlock
            title="Is"
            description="с he, she, it (он, она, оно)"
            example="She is a doctor."
            translation="Она доктор."
          />
          <ExampleBlock
            title="Are"
            description="с you, we, they (ты/вы, мы, они)"
            example="We are friends."
            translation="Мы друзья."
          />
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Выбирайте форму по подлежащему: I → am, he/she/it → is, you/we/they
            → are.
          </li>
          <li>
            To be всегда стоит после подлежащего и перед описанием (например, He
            is tall).
          </li>
          <li>Произношение: Am [æm] (эм), Is [ɪz] (из), Are [ɑːr] (ар).</li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не путайте формы:
              <div className="text-red-600 ml-4">Wrong: I is a student.</div>
              <div className="text-green-600 ml-4">Right: I am a student.</div>
            </li>
            <li>
              Не пропускайте to be:
              <div className="text-red-600 ml-4">Wrong: She happy.</div>
              <div className="text-green-600 ml-4">Right: She is happy.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Выберите правильную форму"
        instruction="Вставьте правильную форму глагола to be (am, is, are) в зависимости от подлежащего."
        items={fillItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 3: Утвердительные предложения ===== */
function Step3() {
  const fillItems: FillItem[] = [
    {
      left: "1. He",
      right: "a doctor. (Он доктор)",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'he' используется форма 'is'.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. We",
      right: "at the park. (Мы в парке)",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'we' используется форма 'are'.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. I",
      right: "tired. (Я устал)",
      answers: ["am"],
      explanation: "Ответ: am — Для подлежащего 'I' используется форма 'am'.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "4. It",
      right: "a cat. (Это кошка)",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'it' используется форма 'is'.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "5. You",
      right: "my friend. (Ты мой друг)",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'you' используется форма 'are'.",
      ariaLabel: "Упражнение 5",
    },
  ];

  return (
    <>
      <UiSection title="Что такое утвердительные предложения?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Утвердительные предложения с to be сообщают информацию о человеке,
          предмете или ситуации. Они строятся по схеме:{" "}
          <strong>Подлежащее + to be + описание</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am a student.</p>
            <p className="text-sm text-gray-600">Перевод: Я студент.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> I (подлежащее) + am (форма для I) + a
              student (описание профессии).
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">She is happy.</p>
            <p className="text-sm text-gray-600">Перевод: Она счастлива.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> She (подлежащее) + is (форма для she)
              + happy (состояние).
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">They are at the park.</p>
            <p className="text-sm text-gray-600">Перевод: Они в парке.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> They (подлежащее) + are (форма для
              they) + at the park (местоположение).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Используйте am/is/are в зависимости от подлежащего.</li>
          <li>
            После to be идет описание: профессия (a teacher), состояние (tired),
            место (at home).
          </li>
          <li>
            В английском артикль a/an нужен перед профессией: I am a doctor. (не
            просто I am doctor).
          </li>
        </ul>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Заполните пропуски"
        instruction="Вставьте правильную форму глагола to be в утвердительные предложения."
        items={fillItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 4: Отрицательные предложения ===== */
function Step4() {
  const negativeItems: FillItem[] = [
    {
      left: "1. I am a teacher. → Отрицание:",
      right: "",
      answers: [
        "I am not a teacher",
        "I am not a teacher.",
        "I'm not a teacher",
        "I'm not a teacher.",
      ],
      explanation: "Ответ: I am not a teacher. — Добавьте 'not' после 'am'.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. She is happy. → Отрицание:",
      right: "",
      answers: [
        "She is not happy",
        "She is not happy.",
        "She isn't happy",
        "She isn't happy.",
      ],
      explanation:
        "Ответ: She is not happy. — Добавьте 'not' после 'is' (или используйте isn't).",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. They are at home. → Отрицание:",
      right: "",
      answers: [
        "They are not at home",
        "They are not at home.",
        "They aren't at home",
        "They aren't at home.",
      ],
      explanation:
        "Ответ: They are not at home. — Добавьте 'not' после 'are' (или используйте aren't).",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как сделать отрицание?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Чтобы сделать предложение отрицательным, добавьте <strong>not</strong>{" "}
          после am/is/are. Схема:{" "}
          <strong>Подлежащее + to be + not + описание</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am not a teacher.</p>
            <p className="text-sm text-gray-600">Перевод: Я не учитель.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> I + am + not + a teacher (отрицание
              профессии).
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">She is not at home.</p>
            <p className="text-sm text-gray-600">Перевод: Она не дома.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> She + is + not + at home (отрицание
              местоположения).
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">They are not tired.</p>
            <p className="text-sm text-gray-600">Перевод: Они не устали.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> They + are + not + tired (отрицание
              состояния).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Not</strong> всегда идет сразу после am/is/are.
            </li>
            <li>
              Сокращенные формы: am not (без сокращения), is not ={" "}
              <strong>isn't</strong> [ˈɪznt], are not = <strong>aren't</strong>{" "}
              [ˈɑːrnt].
            </li>
            <li>
              Произношение сокращений: Isn't [ˈɪznt] (изнт), Aren't [ˈɑːrnt]
              (арнт).
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Сделайте отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные, добавив 'not' после to be."
        items={negativeItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: Вопросы ===== */
function Step5() {
  const questionItems: FillItem[] = [
    {
      left: "1. He is a student. → Вопрос:",
      right: "",
      answers: ["Is he a student", "Is he a student?"],
      explanation:
        "Ответ: Is he a student? — Перенесите 'is' в начало предложения.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. We are at school. → Вопрос:",
      right: "",
      answers: ["Are we at school", "Are we at school?"],
      explanation:
        "Ответ: Are we at school? — Перенесите 'are' в начало предложения.",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. I am late. → Вопрос:",
      right: "",
      answers: ["Am I late", "Am I late?"],
      explanation: "Ответ: Am I late? — Перенесите 'am' в начало предложения.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
    {
      left: "4. She is happy. → Вопрос:",
      right: "",
      answers: ["Is she happy", "Is she happy?"],
      explanation:
        "Ответ: Is she happy? — Перенесите 'is' в начало предложения.",
      ariaLabel: "Упражнение 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для вопросов с to be меняйте порядок слов:{" "}
          <strong>to be + подлежащее + описание?</strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Am I late?</p>
            <p className="text-sm text-gray-600">Перевод: Я опоздал?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Am (для I) + I + late (состояние).
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Is she a teacher?</p>
            <p className="text-sm text-gray-600">Перевод: Она учитель?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Is (для she) + she + a teacher
              (профессия).
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Are they at home?</p>
            <p className="text-sm text-gray-600">Перевод: Они дома?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Are (для they) + they + at home
              (местоположение).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Ставьте am/is/are в начало предложения.</li>
          <li>Вопросительный знак (?) обязателен в конце.</li>
          <li>
            Короткие ответы:
            <ul className="list-circle pl-5 mt-1">
              <li>Yes, I am. / No, I'm not.</li>
              <li>Yes, she is. / No, she isn't.</li>
              <li>Yes, they are. / No, they aren't.</li>
            </ul>
          </li>
        </ul>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Задайте вопросы"
        instruction="Переделайте утвердительные предложения в вопросы, переставив to be в начало."
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
          Глагол to be работает с другими изученными темами:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Личные местоимения</strong> (I, you, he/she/it, we, they):
            Определяют форму to be (I am, she is, they are).
          </li>
          <li>
            <strong>Указательные местоимения</strong> (this, that): Используются
            с to be для описания (This is a book).
          </li>
          <li>
            <strong>Приветствия и представления:</strong> To be часто
            встречается в представлениях (This is my friend).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Что разного?">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal pronouns:</strong> Указывают, кто делает действие
            (I run), а to be описывает состояние или роль (I am a student).
          </li>
          <li>
            <strong>Demonstrative pronouns:</strong> Указывают на предмет (This
            is a pen), а to be связывает предмет с описанием.
          </li>
          <li>
            <strong>Greetings:</strong> Начинают разговор (Hi!), а to be строит
            предложения (I am fine).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Сравнение по контексту">
        <div className="bg-indigo-50/50 rounded-lg p-4 space-y-2">
          <p>
            <strong>To be:</strong> She is happy. (Описывает состояние.)
          </p>
          <p>
            <strong>Pronouns:</strong> She runs. (Указывает подлежащее.)
          </p>
          <p>
            <strong>Greetings:</strong> Hi, I'm Anna. (Использует to be для
            представления.)
          </p>
        </div>
      </UiSection>

      <UiSection title="Common mistakes">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">Wrong: I are a student.</div>
              <div className="text-green-600">Right: I am a student.</div>
            </li>
            <li>
              <div className="text-red-600">Wrong: Is they happy?</div>
              <div className="text-green-600">Right: Are they happy?</div>
            </li>
          </ul>
          <p className="mt-3 text-zinc-700">
            <strong>Повтор:</strong> Проверяйте форму to be по подлежащему.
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
      right: "a student.",
      answers: ["am"],
      explanation: "Ответ: am — Для подлежащего 'I' используется форма 'am'.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. She",
      right: "at school.",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'she' используется форма 'is'.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. They",
      right: "happy.",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'they' используется форма 'are'.",
      ariaLabel: "Вопрос 3",
    },
    {
      left: "4. He",
      right: "a doctor. (Он доктор)",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'he' используется форма 'is'.",
      ariaLabel: "Вопрос 4",
    },
    {
      left: "5. We",
      right: "at the park. (Мы в парке)",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'we' используется форма 'are'.",
      ariaLabel: "Вопрос 5",
    },
    {
      left: "6. It",
      right: "a cat. (Это кошка)",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'it' используется форма 'is'.",
      ariaLabel: "Вопрос 6",
    },
    {
      left: "7. You",
      right: "my friend. (Ты мой друг)",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'you' используется форма 'are'.",
      ariaLabel: "Вопрос 7",
    },
  ];

  const makeNegative: FillItem[] = [
    {
      left: "1. I am a student. → Отрицание:",
      right: "",
      answers: [
        "I am not a student",
        "I am not a student.",
        "I'm not a student",
        "I'm not a student.",
      ],
      explanation: "Ответ: I am not a student. — Добавляем 'not' после 'am'.",
      ariaLabel: "Сделайте отрицательным 1",
      wide: true,
    },
    {
      left: "2. She is happy. → Отрицание:",
      right: "",
      answers: [
        "She is not happy",
        "She is not happy.",
        "She isn't happy",
        "She isn't happy.",
      ],
      explanation: "Ответ: She is not happy. — Добавляем 'not' после 'is'.",
      ariaLabel: "Сделайте отрицательным 2",
      wide: true,
    },
    {
      left: "3. They are at home. → Отрицание:",
      right: "",
      answers: [
        "They are not at home",
        "They are not at home.",
        "They aren't at home",
        "They aren't at home.",
      ],
      explanation:
        "Ответ: They are not at home. — Добавляем 'not' после 'are'.",
      ariaLabel: "Сделайте отрицательным 3",
      wide: true,
    },
  ];

  const makeQuestions: FillItem[] = [
    {
      left: "1. He is a doctor. → Вопрос:",
      right: "",
      answers: ["Is he a doctor", "Is he a doctor?"],
      explanation:
        "Ответ: Is he a doctor? — Переносим 'is' в начало предложения.",
      ariaLabel: "Сделайте вопросом 1",
      wide: true,
    },
    {
      left: "2. You are tired. → Вопрос:",
      right: "",
      answers: ["Are you tired", "Are you tired?"],
      explanation:
        "Ответ: Are you tired? — Переносим 'are' в начало предложения.",
      ariaLabel: "Сделайте вопросом 2",
      wide: true,
    },
    {
      left: "3. It is a cat. → Вопрос:",
      right: "",
      answers: ["Is it a cat", "Is it a cat?"],
      explanation: "Ответ: Is it a cat? — Переносим 'is' в начало предложения.",
      ariaLabel: "Сделайте вопросом 3",
      wide: true,
    },
  ];

  const translation: FillItem[] = [
    {
      left: "1. Я не доктор. →",
      right: "",
      answers: [
        "I am not a doctor",
        "I am not a doctor.",
        "I'm not a doctor",
        "I'm not a doctor.",
      ],
      explanation:
        "Ответ: I am not a doctor. — Используем 'am not' для отрицания с 'I'.",
      ariaLabel: "Переведите 1",
      wide: true,
    },
    {
      left: "2. Они в школе? →",
      right: "",
      answers: ["Are they at school", "Are they at school?"],
      explanation:
        "Ответ: Are they at school? — Вопрос начинается с 'Are' для 'they'.",
      ariaLabel: "Переведите 2",
      wide: true,
    },
    {
      left: "3. Это мой кот. →",
      right: "",
      answers: ["This is my cat", "This is my cat."],
      explanation:
        "Ответ: This is my cat. — Используем 'This is' для указания на предмет.",
      ariaLabel: "Переведите 3",
      wide: true,
    },
    {
      left: "4. Она счастлива. →",
      right: "",
      answers: ["She is happy", "She is happy."],
      explanation:
        "Ответ: She is happy. — Используем 'is' для 'she' с прилагательным 'happy'.",
      ariaLabel: "Переведите 4",
      wide: true,
    },
  ];

  const mistakes: FillItem[] = [
    {
      left: "1. ❌ I is a student. → Исправленное:",
      right: "",
      answers: ["I am a student", "I am a student."],
      explanation:
        "Исправление: I am a student. — Для 'I' используется 'am', а не 'is'.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She are happy. → Исправленное:",
      right: "",
      answers: ["She is happy", "She is happy."],
      explanation:
        "Исправление: She is happy. — Для 'she' используется 'is', а не 'are'.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Is they at home? → Исправленное:",
      right: "",
      answers: ["Are they at home", "Are they at home?"],
      explanation:
        "Исправление: Are they at home? — Для 'they' используется 'are', а не 'is'.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
    {
      left: "4. ❌ We am friends. → Исправленное:",
      right: "",
      answers: ["We are friends", "We are friends."],
      explanation:
        "Исправление: We are friends. — Для 'we' используется 'are', а не 'am'.",
      ariaLabel: "Исправьте 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Финальные упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Теперь проверим ваши знания! Выполните все упражнения, чтобы закрепить
          тему "Глагол to be". Каждое упражнение включает четкие инструкции и
          объяснения правильных ответов.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Заполните правильную форму (am, is, are)"
        instruction="Вставьте правильную форму глагола to be в зависимости от подлежащего."
        items={fillForm}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте предложения отрицательными"
        instruction="Переделайте утвердительные предложения в отрицательные, добавив 'not' после to be."
        items={makeNegative}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Составьте вопросы"
        instruction="Переделайте утвердительные предложения в вопросы, переставив to be в начало."
        items={makeQuestions}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Переведите предложения"
        instruction="Переведите предложения с русского на английский, используя правильную форму to be."
        items={translation}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в использовании глагола to be."
        items={mistakes}
      />

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Глагол to be"! Теперь вы знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Формы: I am, he/she/it is, you/we/they are</li>
          <li>Утверждения: Подлежащее + to be + описание</li>
          <li>Отрицания: Подлежащее + to be + not + описание</li>
          <li>Вопросы: To be + подлежащее + описание?</li>
          <li>Короткие ответы: Yes/No + подлежащее + to be</li>
          <li>Как избегать распространённых ошибок</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>I am:</strong> Всегда используйте 'am' с подлежащим 'I'.
              Пример: I am a student.
            </li>
            <li>
              <strong>He/She/It is:</strong> Используйте 'is' для единственного
              числа третьего лица. Пример: She is happy.
            </li>
            <li>
              <strong>You/We/They are:</strong> Используйте 'are' для
              множественного числа и 'you'. Пример: They are at home.
            </li>
            <li>
              <strong>Отрицания:</strong> Добавьте 'not' после to be. Пример: I
              am not tired.
            </li>
            <li>
              <strong>Вопросы:</strong> Перенесите to be в начало. Пример: Are
              you happy?
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Практикуйте произношение: Am [æm], Is [ɪz], Are [ɑːr].</li>
            <li>
              Запомните правило: проверяйте подлежащее перед выбором формы to
              be.
            </li>
            <li>
              Используйте to be в повседневных предложениях: "I am tired", "She
              is at school", "We are happy".
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
