"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PersonalInfo({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Что такое личная информация? Базовое введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="1. Что такое личная информация?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Личная информация</strong> — это данные о человеке, такие как
          имя, возраст, национальность, профессия, адрес, номер телефона или
          email. На английском языке эта информация часто используется для
          знакомства, заполнения анкет или общения в повседневных ситуациях
          (например, в школе, на работе, в путешествиях).
        </p>
      </UiSection>

      <UiSection title="2. Зачем нужна?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Помогает представиться и рассказать о себе:</strong> My name
            is Anna. (Меня зовут Анна.)
          </li>
          <li>
            <strong>Необходима для вопросов о других людях:</strong> How old are
            you? (Сколько тебе лет?)
          </li>
          <li>
            Используется в анкетах, регистрации или разговорах с новыми
            знакомыми.
          </li>
        </ul>
      </UiSection>

      <UiSection title="3. Ключевые слова и произношение">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Name</strong> [нэйм] — Имя
            </li>
            <li>
              <strong>Surname</strong> [сёрнэйм] — Фамилия
            </li>
            <li>
              <strong>Age</strong> [эйдж] — Возраст
            </li>
            <li>
              <strong>Job</strong> [джоб] — Работа, профессия
            </li>
            <li>
              <strong>Nationality</strong> [нэшнэли] — Национальность
            </li>
            <li>
              <strong>Address</strong> [эдрэс] — Адрес
            </li>
            <li>
              <strong>Phone number</strong> [фон намбэр] — Номер телефона
            </li>
            <li>
              <strong>Email</strong> [и-мэйл] — Электронная почта
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="4. Пример для понимания">
        <p className="text-zinc-700 leading-relaxed mb-2">
          Вместо «Меня зовут Иван, мне 20 лет» на русском, в английском говорят:{" "}
          <strong>My name is Ivan. I am 20 years old</strong>. Это простые
          фразы, которые помогают начать общение.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          <strong>Повтор:</strong> Личная информация нужна, чтобы рассказать о
          себе или узнать о других.
        </p>
      </UiSection>

      <UiSection title="5. Визуал для запоминания">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Картинка:</strong>
          </p>
          <p className="text-sm text-zinc-700">
            человек заполняет анкету с полями «Name», «Age», «Job», рядом
            табличка с фразой My name is….
          </p>
        </div>
      </UiSection>

      <UiSection title="6. Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В англоязычных странах принято называть имя и фамилию в анкетах
            (first name — имя, last name — фамилия), а вопросы о возрасте (How
            old are you?) считаются нормальными даже при первом знакомстве, в
            отличие от русской культуры, где это может быть менее уместно.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Основная лексика личной информации ===== */
function Step2() {
  return (
    <>
      <UiSection title="Какие слова нужно знать?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для общения о личной информации важно выучить базовые слова и фразы.
          Вот список из 20 ключевых слов/фраз с переводом и произношением,
          подходящих для A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <p className="text-sm">
                <strong>1. Name</strong> [нэйм] — Имя
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>2. Surname</strong> [сёрнэйм] — Фамилия
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>3. Age</strong> [эйдж] — Возраст
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>4. Old</strong> [олд] — Старый (о возрасте, например, 20
                years old)
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>5. Year</strong> [йир] — Год
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>6. Job</strong> [джоб] — Работа, профессия
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>7. Student</strong> [студент] — Студент
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>8. Teacher</strong> [тичер] — Учитель
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>9. Doctor</strong> [доктор] — Врач
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>10. Address</strong> [эдрэс] — Адрес
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>11. Phone number</strong> [фон намбэр] — Номер телефона
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>12. Email</strong> [и-мэйл] — Электронная почта
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>13. Country</strong> [кантри] — Страна
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>14. City</strong> [сити] — Город
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>15. Nationality</strong> [нэшнэли] — Национальность
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>16. Live</strong> [лив] — Жить
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>17. Work</strong> [ворк] — Работать
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>18. Study</strong> [стади] — Учиться
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>19. Married</strong> [мэрид] — Женат/замужем
              </p>
            </div>
            <div>
              <p className="text-sm">
                <strong>20. Single</strong> [сингл] — Одинокий
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">My name is Maria.</p>
            <p className="text-sm text-gray-600">Перевод: Меня зовут Мария.</p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am 25 years old.</p>
            <p className="text-sm text-gray-600">Перевод: Мне 25 лет.</p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I live in Moscow.</p>
            <p className="text-sm text-gray-600">Перевод: Я живу в Москве.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Повторяйте слова с аудио на сайте, чтобы освоить произношение.
          </li>
          <li>
            Составляйте предложения о себе: I am a student. I live in a city.
          </li>
          <li>
            Используйте карточки: слово на английском с одной стороны, перевод —
            с другой.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Таблица:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Name → My name is Anna.</li>
            <li>Age → I am 20 years old.</li>
            <li>Job → I am a teacher.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            Русскоязычным важно помнить, что в английском возраст выражается
            через <strong>to be</strong> (I am 20), а не через «мне есть» как в
            русском.
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
      left: "1. My name",
      right: "Anna. (Меня зовут Анна)",
      answers: ["is"],
      explanation: "Ответ: is — Для 'name' используется форма 'is'.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. I",
      right: "30 years old. (Мне 30 лет)",
      answers: ["am"],
      explanation: "Ответ: am — Для подлежащего 'I' используется форма 'am'.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She",
      right: "a phone number. (У неё есть номер телефона)",
      answers: ["has got"],
      explanation:
        "Ответ: has got — Для подлежащего 'she' и владения используется 'has got'.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "4. We",
      right: "from Russia. (Мы из России)",
      answers: ["are"],
      explanation:
        "Ответ: are — Для подлежащего 'we' используется форма 'are'.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "5. He",
      right: "a doctor. (Он врач)",
      answers: ["is"],
      explanation: "Ответ: is — Для подлежащего 'he' используется форма 'is'.",
      ariaLabel: "Упражнение 5",
    },
  ];

  return (
    <>
      <UiSection title="Как строить утверждения?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Утвердительные предложения с личной информацией обычно используют
          глагол <strong>to be</strong> или <strong>have/has got</strong> (см.
          предыдущие темы). Схема:{" "}
          <strong>Подлежащее + am/is/are + описание</strong> или{" "}
          <strong>Подлежащее + have/has got + объект</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">My name is Alex.</p>
            <p className="text-sm text-gray-600">Перевод: Меня зовут Алекс.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> My name (подлежащее) + is (форма to
              be для имени) + Alex.
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am 30 years old.</p>
            <p className="text-sm text-gray-600">Перевод: Мне 30 лет.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> I + am + 30 years old (возраст).
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">She has got a phone number.</p>
            <p className="text-sm text-gray-600">
              Перевод: У неё есть номер телефона.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> She + has got + a phone number
              (владение).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Используйте am с I, is с he/she/it, are с you/we/they.</li>
          <li>Для владения (phone, email) используйте have got/has got.</li>
          <li>Артикль a/an нужен перед профессией: I am a doctor.</li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am a student.</p>
            <p className="text-sm text-gray-600">Перевод: Я студент.</p>
            <p className="text-sm text-gray-700 mt-1">Профессия.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">I live in London.</p>
            <p className="text-sm text-gray-600">Перевод: Я живу в Лондоне.</p>
            <p className="text-sm text-gray-700 mt-1">Место жительства.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">I have got an email.</p>
            <p className="text-sm text-gray-600">Перевод: У меня есть email.</p>
            <p className="text-sm text-gray-700 mt-1">Контакты.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не пропускайте to be:
              <div className="text-red-600 ml-4">Wrong: I student.</div>
              <div className="text-green-600 ml-4">Right: I am a student.</div>
            </li>
            <li>
              Не путайте have/has:
              <div className="text-red-600 ml-4">
                Wrong: She have got a phone.
              </div>
              <div className="text-green-600 ml-4">
                Right: She has got a phone.
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
          <p className="text-sm text-zinc-700">
            человек с анкетой, где написано Name: Anna, Age: 25, Job: Teacher.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Утверждения:</strong> Подлежащее + am/is/are + информация
            или Подлежащее + have/has got + объект.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Заполните пропуски"
        instruction="Вставьте правильную форму глагола to be или have/has got."
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
      left: "2. She is married. → Отрицание:",
      right: "",
      answers: [
        "She is not married",
        "She is not married.",
        "She isn't married",
        "She isn't married.",
      ],
      explanation:
        "Ответ: She is not married. — Добавьте 'not' после 'is' (или используйте isn't).",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. They have got an email. → Отрицание:",
      right: "",
      answers: [
        "They have not got an email",
        "They have not got an email.",
        "They haven't got an email",
        "They haven't got an email.",
      ],
      explanation:
        "Ответ: They haven't got an email. — Добавьте 'not' между 'have' и 'got'.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
    {
      left: "4. He is from Russia. → Отрицание:",
      right: "",
      answers: [
        "He is not from Russia",
        "He is not from Russia.",
        "He isn't from Russia",
        "He isn't from Russia.",
      ],
      explanation: "Ответ: He isn't from Russia. — Добавьте 'not' после 'is'.",
      ariaLabel: "Упражнение 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как сделать отрицание?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для отрицания добавьте <strong>not</strong> после am/is/are или
          have/has. Схемы:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Подлежащее + am/is/are + not + описание.</strong>
          </li>
          <li>
            <strong>Подлежащее + have/has + not + got + объект.</strong>
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am not a teacher.</p>
            <p className="text-sm text-gray-600">Перевод: Я не учитель.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> I + am + not + a teacher.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">She is not married.</p>
            <p className="text-sm text-gray-600">Перевод: Она не замужем.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> She + is + not + married.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold text-lg">They haven't got an email.</p>
            <p className="text-sm text-gray-600">Перевод: У них нет email.</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> They + have + not + got + an email.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Not идет после am/is/are или между have/has и got.</li>
          <li>
            Сокращения: is not = isn't [ˈɪznt], are not = aren't [ˈɑːrnt], have
            not got = haven't got [ˈhævnt ɡɒt], has not got = hasn't got [ˈhæznt
            ɡɒt].
          </li>
          <li>Произношение: Слушайте аудио на сайте.</li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="font-semibold text-lg">I am not 20 years old.</p>
            <p className="text-sm text-gray-600">Перевод: Мне не 20 лет.</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="font-semibold text-lg">
              He hasn't got a phone number.
            </p>
            <p className="text-sm text-gray-600">
              Перевод: У него нет номера телефона.
            </p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="font-semibold text-lg">We aren't from Russia.</p>
            <p className="text-sm text-gray-600">Перевод: Мы не из России.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не добавляйте not дважды:
              <div className="text-red-600 ml-4">
                Wrong: I am not no student.
              </div>
              <div className="text-green-600 ml-4">
                Right: I am not a student.
              </div>
            </li>
            <li>
              Не путайте формы:
              <div className="text-red-600 ml-4">Wrong: She haven't got.</div>
              <div className="text-green-600 ml-4">Right: She hasn't got.</div>
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
            <li>I am not → I am not a doctor.</li>
            <li>She hasn't got → She hasn't got an email.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Отрицания:</strong> Подлежащее + am/is/are + not + описание
            или Подлежащее + have/has + not + got + объект.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Сделайте отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные."
        items={negativeItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: Вопросы с личной информацией ===== */
function Step5() {
  const questionItems: FillItem[] = [
    {
      left: "1. You are a student. → Вопрос:",
      right: "",
      answers: ["Are you a student", "Are you a student?"],
      explanation:
        "Ответ: Are you a student? — Перенесите 'are' в начало предложения.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. She has got an email. → Вопрос:",
      right: "",
      answers: ["Has she got an email", "Has she got an email?"],
      explanation:
        "Ответ: Has she got an email? — Перенесите 'has' в начало предложения.",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
    {
      left: "3. He is from Russia. → Вопрос:",
      right: "",
      answers: ["Is he from Russia", "Is he from Russia?"],
      explanation:
        "Ответ: Is he from Russia? — Перенесите 'is' в начало предложения.",
      ariaLabel: "Упражнение 3",
      wide: true,
    },
    {
      left: "4. They have got a phone number. → Вопрос:",
      right: "",
      answers: [
        "Have they got a phone number",
        "Have they got a phone number?",
      ],
      explanation:
        "Ответ: Have they got a phone number? — Перенесите 'have' в начало предложения.",
      ariaLabel: "Упражнение 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для вопросов меняйте порядок слов:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Am/Is/Are + подлежащее + описание?</strong>
          </li>
          <li>
            <strong>Have/Has + подлежащее + got + объект?</strong>
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Are you a student?</p>
            <p className="text-sm text-gray-600">Перевод: Ты студент?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Are (для you) + you + a student.
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">Has she got an email?</p>
            <p className="text-sm text-gray-600">Перевод: У неё есть email?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> Has (для she) + she + got + an email.
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold text-lg">What is your name?</p>
            <p className="text-sm text-gray-600">Перевод: Как тебя зовут?</p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Почему так:</strong> What + is + your name.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>Ставьте am/is/are или have/has в начало.</li>
          <li>
            Короткие ответы:
            <ul className="list-circle pl-5 mt-1">
              <li>Yes, I am. / No, I'm not.</li>
              <li>Yes, she has. / No, she hasn't.</li>
            </ul>
          </li>
          <li>
            Вопросы с what/where/how: What is your job? (Какая у тебя работа?)
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">Where do you live?</p>
            <p className="text-sm text-gray-600">Перевод: Где ты живешь?</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">
              Have you got a phone number?
            </p>
            <p className="text-sm text-gray-600">
              Перевод: У тебя есть номер телефона?
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold text-lg">How old is he?</p>
            <p className="text-sm text-gray-600">Перевод: Сколько ему лет?</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не путайте to be и have got:
              <div className="text-red-600 ml-4">
                Wrong: Is she got a phone?
              </div>
              <div className="text-green-600 ml-4">
                Right: Has she got a phone?
              </div>
            </li>
            <li>
              Не используйте do:
              <div className="text-red-600 ml-4">
                Wrong: Do you are a student?
              </div>
              <div className="text-green-600 ml-4">
                Right: Are you a student?
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
            <li>вопросительный знак с примерами: Are you a student?</li>
            <li>Has she got a phone?</li>
            <li>What is your name?</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В англоязычных странах вопрос <strong>How old are you?</strong>{" "}
            нормален даже при первом знакомстве, в отличие от русской культуры,
            где он может быть невежливым.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Вопросы:</strong> Am/Is/Are + подлежащее + описание? или
            Have/Has + подлежащее + got + объект?
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Задайте вопросы"
        instruction="Переделайте утвердительные предложения в вопросы."
        items={questionItems}
      />
    </>
  );
}

/* ===== СТРАНИЦА 6: Фразы для общения о личной информации ===== */
function Step6() {
  return (
    <>
      <UiSection title="Какие фразы нужны?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Эти фразы помогают задавать вопросы и отвечать о личной информации.
        </p>
      </UiSection>

      <UiSection title="Ключевые фразы">
        <div className="bg-indigo-50/50 rounded-lg p-4 space-y-3">
          <div>
            <p className="font-semibold">What's your name? [вотс юр нэйм]</p>
            <p className="text-sm text-zinc-600">Как тебя зовут?</p>
          </div>
          <div>
            <p className="font-semibold">My name is… [май нэйм из]</p>
            <p className="text-sm text-zinc-600">Меня зовут…</p>
          </div>
          <div>
            <p className="font-semibold">How old are you? [хау олд ар ю]</p>
            <p className="text-sm text-zinc-600">Сколько тебе лет?</p>
          </div>
          <div>
            <p className="font-semibold">I am… years old. [ай эм … йирз олд]</p>
            <p className="text-sm text-zinc-600">Мне … лет.</p>
          </div>
          <div>
            <p className="font-semibold">Where are you from? [вэа ар ю фром]</p>
            <p className="text-sm text-zinc-600">Откуда ты?</p>
          </div>
          <div>
            <p className="font-semibold">I am from… [ай эм фром]</p>
            <p className="text-sm text-zinc-600">Я из…</p>
          </div>
          <div>
            <p className="font-semibold">What's your job? [вотс юр джоб]</p>
            <p className="text-sm text-zinc-600">Какая у тебя работа?</p>
          </div>
          <div>
            <p className="font-semibold">I am a… [ай эм э]</p>
            <p className="text-sm text-zinc-600">Я … (профессия).</p>
          </div>
          <div>
            <p className="font-semibold">
              Have you got a phone number? [хэв ю гот э фон намбэр]
            </p>
            <p className="text-sm text-zinc-600">У тебя есть номер телефона?</p>
          </div>
          <div>
            <p className="font-semibold">
              Yes, I have. / No, I haven't. [йес ай хэв / ноу ай хэвнт]
            </p>
            <p className="text-sm text-zinc-600">Да, есть. / Нет, нет.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры диалога">
        <div className="bg-blue-50/50 rounded-lg p-4 space-y-4">
          <div>
            <p className="text-sm">
              <strong>A:</strong> What's your name?
            </p>
            <p className="text-sm">
              <strong>B:</strong> My name is Anna.
            </p>
          </div>
          <div>
            <p className="text-sm">
              <strong>A:</strong> How old are you?
            </p>
            <p className="text-sm">
              <strong>B:</strong> I am 20 years old.
            </p>
          </div>
          <div>
            <p className="text-sm">
              <strong>A:</strong> Where are you from?
            </p>
            <p className="text-sm">
              <strong>B:</strong> I am from Russia.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Используйте to be для имени, возраста, национальности, места
            жительства.
          </li>
          <li>Используйте have/has got для контактов (телефон, email).</li>
          <li>Произношение: Слушайте аудио для фраз (What's = What is).</li>
        </ul>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Картинка:</strong>
          </p>
          <p className="text-sm text-zinc-700">
            два человека разговаривают, один спрашивает What's your name?,
            другой отвечает My name is….
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Фразы:</strong> What's your name?, How old are you?, Where
            are you from?
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение с другими темами ===== */
function Step7() {
  return (
    <>
      <UiSection title="Что общего?">
        <p className="text-zinc-700 leading-relaxed mb-2">
          Личная информация связана с другими темами:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Личные местоимения</strong> (I, you, he/she): Определяют,
            кто говорит (I am a student).
          </li>
          <li>
            <strong>Указательные местоимения</strong> (this, that): Используются
            для представления (This is my friend).
          </li>
          <li>
            <strong>Глагол to be:</strong> Основной для описания (I am 20).
          </li>
          <li>
            <strong>Have/has got:</strong> Для владения (I have got a phone).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Что разного?">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal pronouns:</strong> Указывают подлежащее (I live), а
            личная информация — конкретные данные (I live in Moscow).
          </li>
          <li>
            <strong>To be:</strong> Описывает состояние/роль (She is a teacher),
            а have/has got — владение (She has got an email).
          </li>
          <li>
            <strong>Greetings:</strong> Начинают разговор (Hi!), а личная
            информация продолжает (My name is Anna).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Сравнение по контексту">
        <div className="bg-indigo-50/50 rounded-lg p-4 space-y-2">
          <p>
            <strong>To be:</strong> I am a student. (Я студент.)
          </p>
          <p>
            <strong>Have/has got:</strong> I have got a phone. (У меня телефон.)
          </p>
          <p>
            <strong>Greetings:</strong> Hi, my name is Anna. (Привет, меня зовут
            Анна.)
          </p>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">This is my teacher.</p>
            <p className="text-sm text-gray-600">Перевод: Это мой учитель.</p>
            <p className="text-sm text-gray-700 mt-1">
              Указательное местоимение + to be.
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">I have got an email.</p>
            <p className="text-sm text-gray-600">Перевод: У меня есть email.</p>
            <p className="text-sm text-gray-700 mt-1">Have got.</p>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold text-lg">What's your job?</p>
            <p className="text-sm text-gray-600">
              Перевод: Какая у тебя работа?
            </p>
            <p className="text-sm text-gray-700 mt-1">Личная информация.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Таблица:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>To be:</strong> I am a student.
            </li>
            <li>
              <strong>Have got:</strong> I have got a phone.
            </li>
            <li>
              <strong>Greetings:</strong> Hi, I'm Anna.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            В английском личная информация (имя, возраст) часто запрашивается
            напрямую (What's your name?), что может показаться русскоязычным
            прямолинейным, но это норма.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Домашнее задание для запоминания слов ===== */
function Step8() {
  return (
    <>
      <UiSection title="Задание: Выучите 20 слов из списка на странице 2">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Это домашнее задание поможет вам запомнить ключевые слова для общения
          о личной информации.
        </p>
      </UiSection>

      <UiSection title="Как выполнять:">
        <div className="space-y-4">
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">1. Повторение:</p>
            <p className="text-sm text-zinc-700">
              Прочитайте каждое слово вслух 3 раза, используя произношение (name
              [нэйм], age [эйдж]). Слушайте аудио на сайте.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">2. Карточки:</p>
            <p className="text-sm text-zinc-700">
              Напишите слова на карточках (английское слово на одной стороне,
              перевод — на другой). Проверяйте себя.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">3. Предложения:</p>
            <p className="text-sm text-zinc-700 mb-2">
              Составьте по одному предложению с 10 словами из списка. Например:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>My name is Ivan. (Меня зовут Иван.)</li>
              <li>I am 25 years old. (Мне 25 лет.)</li>
              <li>I live in a city. (Я живу в городе.)</li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-zinc-900 mb-2">4. Диалог:</p>
            <p className="text-sm text-zinc-700 mb-2">
              Напишите короткий диалог (4-5 реплик), используя минимум 5 слов из
              списка. Например:
            </p>
            <div className="text-sm space-y-1">
              <p>
                <strong>A:</strong> What's your name?
              </p>
              <p>
                <strong>B:</strong> My name is Maria.
              </p>
              <p>
                <strong>A:</strong> Where are you from?
              </p>
              <p>
                <strong>B:</strong> I am from Russia. I am a student.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте слова в контексте, представляя, что заполняете анкету
              или знакомитесь.
            </li>
            <li>Проверьте произношение с аудио.</li>
            <li>Повторяйте слова каждый день по 5-10 минут.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-zinc-700 mb-2">
            <strong>Картинка:</strong>
          </p>
          <p className="text-sm text-zinc-700">
            карточки с английскими словами (name, age) и русским переводом,
            человек повторяет слова вслух.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения по личной информации ===== */
function Step9() {
  const multipleChoice: FillItem[] = [
    {
      left: "1. I",
      right: "a student.",
      answers: ["am"],
      explanation: "Ответ: am — Для I используется am.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. She",
      right: "an email.",
      answers: ["has got"],
      explanation: "Ответ: has got — Для she используется has got.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. They",
      right: "from Russia.",
      answers: ["are"],
      explanation: "Ответ: are — Для they используется are.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const fillBlanks: FillItem[] = [
    {
      left: "1. My name",
      right: "Anna. (Меня зовут Анна)",
      answers: ["is"],
      explanation: "Ответ: is — Для name.",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2. He",
      right: "25 years old. (Ему 25 лет)",
      answers: ["is"],
      explanation: "Ответ: is — Для he.",
      ariaLabel: "Заполните 2",
    },
    {
      left: "3. We",
      right: "a phone number. (У нас есть номер телефона)",
      answers: ["have got"],
      explanation: "Ответ: have got — Для we.",
      ariaLabel: "Заполните 3",
    },
    {
      left: "4. She",
      right: "from London. (Она из Лондона)",
      answers: ["is"],
      explanation: "Ответ: is — Для she.",
      ariaLabel: "Заполните 4",
    },
    {
      left: "5. I",
      right: "a teacher. (Я учитель)",
      answers: ["am"],
      explanation: "Ответ: am — Для I.",
      ariaLabel: "Заполните 5",
    },
  ];

  const makeNegative: FillItem[] = [
    {
      left: "1. I am a doctor. → Отрицание:",
      right: "",
      answers: [
        "I am not a doctor",
        "I am not a doctor.",
        "I'm not a doctor",
        "I'm not a doctor.",
      ],
      explanation: "Ответ: I am not a doctor. — Not после am.",
      ariaLabel: "Отрицание 1",
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
      explanation: "Ответ: She hasn't got a phone. — Has + not + got.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. They are from Moscow. → Отрицание:",
      right: "",
      answers: [
        "They are not from Moscow",
        "They are not from Moscow.",
        "They aren't from Moscow",
        "They aren't from Moscow.",
      ],
      explanation: "Ответ: They aren't from Moscow. — Not после are.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
  ];

  const makeQuestions: FillItem[] = [
    {
      left: "1. He is a student. → Вопрос:",
      right: "",
      answers: ["Is he a student", "Is he a student?"],
      explanation: "Ответ: Is he a student? — Is на первое место.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. You have got an email. → Вопрос:",
      right: "",
      answers: ["Have you got an email", "Have you got an email?"],
      explanation: "Ответ: Have you got an email? — Have на первое место.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. She is 20 years old. → Вопрос:",
      right: "",
      answers: ["Is she 20 years old", "Is she 20 years old?"],
      explanation: "Ответ: Is she 20 years old? — Is на первое место.",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const translation: FillItem[] = [
    {
      left: "1. Я не учитель. →",
      right: "",
      answers: [
        "I am not a teacher",
        "I am not a teacher.",
        "I'm not a teacher",
        "I'm not a teacher.",
      ],
      explanation: "Ответ: I am not a teacher. — Отрицание с to be.",
      ariaLabel: "Переведите 1",
      wide: true,
    },
    {
      left: "2. У тебя есть номер телефона? →",
      right: "",
      answers: ["Have you got a phone number", "Have you got a phone number?"],
      explanation: "Ответ: Have you got a phone number? — Вопрос с have got.",
      ariaLabel: "Переведите 2",
      wide: true,
    },
    {
      left: "3. Откуда он? →",
      right: "",
      answers: ["Where is he from", "Where is he from?"],
      explanation: "Ответ: Where is he from? — Вопрос с to be.",
      ariaLabel: "Переведите 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Финальные упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Теперь проверим ваши знания! Выполните все упражнения, чтобы закрепить
          тему "Личная информация". Каждое упражнение включает четкие инструкции
          и объяснения правильных ответов.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Выберите правильную форму (am, is, are, have got, has got)."
        items={multipleChoice}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте am, is, are, have got, has got."
        items={fillBlanks}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={makeNegative}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Задайте вопросы"
        instruction="Превратите утверждения в вопросы."
        items={makeQuestions}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Переведите предложения"
        instruction="Переведите с русского на английский."
        items={translation}
      />

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Личная информация"! Теперь вы знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>20 ключевых слов для описания личной информации</li>
          <li>
            Как строить утверждения: Подлежащее + am/is/are + описание или
            Подлежащее + have/has got + объект
          </li>
          <li>
            Как делать отрицания: Подлежащее + am/is/are + not + описание или
            Подлежащее + have/has + not + got + объект
          </li>
          <li>
            Как задавать вопросы: Am/Is/Are + подлежащее + описание? или
            Have/Has + подлежащее + got + объект?
          </li>
          <li>Фразы для общения: What's your name?, How old are you?</li>
          <li>Культурные особенности общения на английском</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Имя:</strong> My name is… / What's your name?
            </li>
            <li>
              <strong>Возраст:</strong> I am 20 years old. / How old are you?
            </li>
            <li>
              <strong>Профессия:</strong> I am a teacher. / What's your job?
            </li>
            <li>
              <strong>Место:</strong> I am from Russia. / Where are you from?
            </li>
            <li>
              <strong>Контакты:</strong> I have got a phone number. / Have you
              got an email?
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте произношение всех 20 слов с аудио на сайте каждый
              день.
            </li>
            <li>
              Создайте свою «визитную карточку» на английском с именем,
              возрастом, профессией и городом.
            </li>
            <li>
              Попробуйте заполнить анкету на английском или познакомиться с
              кем-то, используя изученные фразы.
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и задания True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. Anna is 22 years old.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — В тексте: She is 22 years old. (Ей 22 года.)",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. Anna is a doctor.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — В тексте: Her job is not a doctor. (Она не врач.)",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. Anna is from London.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — В тексте: She is from Moscow, Russia. (Она из Москвы.)",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. Anna has got a phone number.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation:
        "Ответ: True — В тексте: She has got a phone number. (У неё есть номер телефона.)",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. Anna is married.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — В тексте: Anna is not married. (Анна не замужем.)",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Friend Anna">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            My name is Ivan. I have a friend. Her name is Anna. She is 22 years
            old. Anna is a student. She is from Moscow, Russia. She has got a
            phone number and an email. Anna is not married. She lives in a small
            flat. Her job is not a doctor. She studies English.
          </p>
        </div>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mb-4 px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium transition-colors flex items-center gap-2"
        >
          {showTranslation ? "🔼 Скрыть перевод" : "🔽 Показать перевод"}
        </button>

        {showTranslation && (
          <div className="bg-amber-50/50 rounded-lg p-6 mb-4">
            <p className="font-semibold text-zinc-900 mb-2">Перевод текста:</p>
            <p className="text-zinc-700 leading-relaxed">
              Меня зовут Иван. У меня есть друг. Её зовут Анна. Ей 22 года. Анна
              — студентка. Она из Москвы, Россия. У неё есть номер телефона и
              email. Анна не замужем. Она живёт в маленькой квартире. Её работа
              — не врач. Она изучает английский.
            </p>
          </div>
        )}
      </UiSection>

      <CheckableExercise
        title="📝 Задание True/False"
        instruction="Прочитайте текст и определите, верны ли утверждения (True) или ложны (False)."
        items={trueFalseItems}
      />

      <UiSection title="💡 Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            Перечитайте текст, чтобы найти точные ответы. Подчеркните ключевые
            слова (is, has got, not) в тексте, чтобы проверить утверждения.
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Личная информация"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Рассказать о себе (имя, возраст, профессия)</li>
          <li>Задавать вопросы о личной информации</li>
          <li>Понимать простые тексты о людях</li>
          <li>Использовать have/has got и to be в контексте</li>
          <li>Читать и понимать базовую информацию о человеке</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🌟 Следующие шаги:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Практикуйтесь в разговоре с реальными людьми</li>
            <li>Заполните анкету на английском</li>
            <li>Напишите короткий текст о себе или о друге</li>
            <li>Переходите к следующей теме курса A1</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
