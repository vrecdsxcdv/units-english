"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PrepositionsOfTime({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Базовое введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое предлоги времени?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Предлоги времени (<strong>in, on, at</strong>) используются для
          указания <strong>когда</strong> что-то происходит. Они отвечают на
          вопрос «Когда?» (<em>When?</em>).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">In — длительные периоды</p>
            <p className="text-xs text-gray-600">in the morning, in 2025</p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">On — дни и даты</p>
            <p className="text-xs text-gray-600">on Monday, on July 4th</p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">At — точное время</p>
            <p className="text-xs text-gray-600">at 7 o'clock, at night</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает описывать расписание: I study in the morning. (Я учусь
            утром.)
          </li>
          <li>
            Учит задавать вопросы: When do you work? (Когда ты работаешь?)
          </li>
          <li>
            Необходима для общения: планирование встреч, обсуждение событий (I
            meet friends on Saturday).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Предлоги времени ставятся <strong>перед</strong> указанием времени
              (in the morning, не the morning in).
            </li>
            <li>
              Каждый предлог имеет <strong>специфическое значение</strong> (in
              the evening ≠ at night).
            </li>
            <li>
              <strong>Произношение:</strong> In [ɪn] (ин), On [ɒn] (он), At [æt]
              (эт).
            </li>
            <li>
              <strong>Интонация:</strong> В вопросах (When is it?) — восходящая
              (↑), в утверждениях — ровная.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я учусь утром.</p>
            <p className="text-indigo-600 font-semibold">
              English: I study in the morning.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Встретимся в 7 часов.</p>
            <p className="text-blue-600 font-semibold">
              English: Let's meet at 7 o'clock.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация предлогов времени">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-200 rounded-lg flex items-center justify-center text-4xl mb-3">
                📅
              </div>
              <p className="text-2xl font-bold text-blue-900 mb-2">ON</p>
              <p className="text-sm text-zinc-600 mb-3">Дни и даты</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">
                  <span className="text-blue-600">On</span> Monday
                </p>
                <p className="text-xs text-zinc-600 mt-1">В понедельник</p>
                <div className="mt-2 pt-2 border-t border-blue-100 text-xs text-zinc-500">
                  <p>On Friday / On my birthday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-200 rounded-lg flex items-center justify-center text-4xl mb-3">
                🕐
              </div>
              <p className="text-2xl font-bold text-amber-900 mb-2">AT</p>
              <p className="text-sm text-zinc-600 mb-3">Точное время</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">
                  <span className="text-amber-600">At</span> 7 o&apos;clock
                </p>
                <p className="text-xs text-zinc-600 mt-1">В 7 часов</p>
                <div className="mt-2 pt-2 border-t border-amber-100 text-xs text-zinc-500">
                  <p>At 9:30 / At night</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-purple-200 rounded-lg flex items-center justify-center text-4xl mb-3">
                🌅
              </div>
              <p className="text-2xl font-bold text-purple-900 mb-2">IN</p>
              <p className="text-sm text-zinc-600 mb-3">Периоды времени</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">
                  <span className="text-purple-600">In</span> the morning
                </p>
                <p className="text-xs text-zinc-600 mt-1">Утром</p>
                <div className="mt-2 pt-2 border-t border-purple-100 text-xs text-zinc-500">
                  <p>In July / In 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-center font-semibold text-green-900">
            💡 <span className="text-blue-600">ON</span> дни |{" "}
            <span className="text-amber-600">AT</span> часы |{" "}
            <span className="text-purple-600">IN</span> месяцы/года/части дня
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском предлоги «в» и
              «на» используются шире, в английском in, on, at строго разделены
              (в понедельник = on Monday, в 7 часов = at 7 o'clock).
            </li>
            <li>
              <strong>Артикли:</strong> Английский часто требует the (in the
              morning), русский их опускает.
            </li>
            <li>
              <strong>Порядок слов:</strong> Английский строгий (I work at 7
              p.m.), русский гибкий (Я работаю вечером).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Предлоги времени указывают, когда что-то
            происходит.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика ===== */
function Step2() {
  return (
    <>
      <UiSection title="Какие слова нужно знать?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для работы с предлогами времени важно выучить слова, связанные с
          временем, днями и периодами. Вот список из{" "}
          <strong>20 ключевых слов/фраз</strong> с переводом и произношением для
          A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Части дня:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Morning</strong> [ˈmɔːrnɪŋ] — Утро
              </p>
              <p>
                <strong>Afternoon</strong> [ˌæftərˈnuːn] — День (после полудня)
              </p>
              <p>
                <strong>Evening</strong> [ˈiːvnɪŋ] — Вечер
              </p>
              <p>
                <strong>Night</strong> [naɪt] — Ночь
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Дни недели:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Monday</strong> [ˈmʌndeɪ] — Понедельник
              </p>
              <p>
                <strong>Tuesday</strong> [ˈtjuːzdeɪ] — Вторник
              </p>
              <p>
                <strong>Weekend</strong> [ˌwiːkˈɛnd] — Выходные
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Периоды времени:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Day</strong> [deɪ] — День
              </p>
              <p>
                <strong>Week</strong> [wiːk] — Неделя
              </p>
              <p>
                <strong>Month</strong> [mʌnθ] — Месяц
              </p>
              <p>
                <strong>Year</strong> [jɪər] — Год
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Время и действия:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Hour</strong> [aʊər] — Час
              </p>
              <p>
                <strong>Minute</strong> [ˈmɪnɪt] — Минута
              </p>
              <p>
                <strong>Time</strong> [taɪm] — Время
              </p>
              <p>
                <strong>Work</strong> [wɜːrk] — Работать
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] — Учиться
              </p>
            </div>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Предлоги:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>In</strong> [ɪn] — В (период)
              </p>
              <p>
                <strong>On</strong> [ɒn] — В (день/дата)
              </p>
              <p>
                <strong>At</strong> [æt] — В (точное время)
              </p>
              <p>
                <strong>When</strong> [wɛn] — Когда
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I study in the morning.</p>
            <p className="text-sm text-gray-600">Я учусь утром.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">We meet on Saturday.</p>
            <p className="text-sm text-gray-600">Мы встречаемся в субботу.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">She works at 9 a.m.</p>
            <p className="text-sm text-gray-600">Она работает в 9 утра.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (in [ɪn], morning [ˈmɔːrnɪŋ]).</li>
            <li>Составляйте предложения: I work at 8 o'clock.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто путают in и at (at 7 o'clock ≠ в 7 часов), так
            как русский «в» шире.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: In - Длительные периоды ===== */
function Step3() {
  const inExercise: FillItem[] = [
    {
      left: "1. I study",
      right: "the morning. (утром)",
      answers: ["in"],
      explanation: "Ответ: in — Для частей дня (кроме night) используем in.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. We travel",
      right: "July. (в июле)",
      answers: ["in"],
      explanation: "Ответ: in — Для месяцев используем in.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She was born",
      right: "2000. (в 2000 году)",
      answers: ["in"],
      explanation: "Ответ: in — Для годов используем in.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать In?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>In</strong> используется для{" "}
          <strong>длительных периодов</strong>: части дня (кроме night), месяцы,
          сезоны, годы, века.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I study in the morning.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я учусь утром.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> In + the morning (часть дня).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">We travel in July.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы путешествуем в июле.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> In + July (месяц).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She was born in 2000.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она родилась в 2000 году.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> In + 2000 (год).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Использование:</strong> Для частей дня (in the
              morning/afternoon/evening), месяцев (in January), сезонов (in
              summer), годов (in 2025).
            </li>
            <li>
              <strong>Артикли:</strong> In the morning (с the), но in July (без
              артикля).
            </li>
            <li>
              <strong>Произношение:</strong> In [ɪn] — короткий звук.
            </li>
            <li>
              <strong>Исключение:</strong> At night (не in night).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Работа:</strong> I work in the evening. (Я работаю
              вечером.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Отдых:</strong> We go to the park in summer. (Мы ходим в
              парк летом.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> School starts in September. (Школа
              начинается в сентябре.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для точного времени:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I wake up in 7 a.m.
                </div>
                <div className="text-green-600">
                  ✅ Right: I wake up at 7 a.m.
                </div>
              </div>
            </li>
            <li>
              НЕ для дней:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I study in Monday.</div>
                <div className="text-green-600">
                  ✅ Right: I study on Monday.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте in"
        instruction="Заполните пропуски предлогом in."
        items={inExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «в» для утра (утром) совпадает с in, но для точного времени
            (в 7 часов) нужен at.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> In = длительные периоды (утро, месяц, год).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: On - Дни и даты ===== */
function Step4() {
  const onExercise: FillItem[] = [
    {
      left: "1. I study",
      right: "Monday. (в понедельник)",
      answers: ["on"],
      explanation: "Ответ: on — Для дней недели используем on.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. We meet",
      right: "July 4th. (4 июля)",
      answers: ["on"],
      explanation: "Ответ: on — Для дат используем on.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. The party is",
      right: "Christmas. (на Рождество)",
      answers: ["on"],
      explanation: "Ответ: on — Для праздников используем on.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать On?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>On</strong> используется для <strong>дней недели</strong>,{" "}
          <strong>дат</strong> и <strong>специфических дней</strong> (праздники,
          события).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I study on Monday.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я учусь в понедельник.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> On + Monday (день недели).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">We meet on July 4th.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы встречаемся 4 июля.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> On + July 4th (дата).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The party is on Christmas.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Вечеринка на Рождество.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> On + Christmas (праздник).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Использование:</strong> Для дней (Monday, Tuesday), дат
              (July 4th), праздников (Christmas).
            </li>
            <li>
              <strong>Артикли:</strong> On Monday (без артикля), но on the
              weekend (в американском английском).
            </li>
            <li>
              <strong>Произношение:</strong> On [ɒn] — короткий звук.
            </li>
            <li>
              <strong>Множественное:</strong> On Mondays (по понедельникам,
              регулярно).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Работа:</strong> I work on Friday. (Я работаю в пятницу.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> The exam is on June 10th. (Экзамен 10
              июня.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> We rest on the weekend. (Мы отдыхаем на
              выходных.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для месяцев/годов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I travel on July.</div>
                <div className="text-green-600">
                  ✅ Right: I travel in July.
                </div>
              </div>
            </li>
            <li>
              НЕ для времени:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I wake up on 7 a.m.
                </div>
                <div className="text-green-600">
                  ✅ Right: I wake up at 7 a.m.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте on"
        instruction="Заполните пропуски предлогом on."
        items={onExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «в понедельник» = on Monday, но «на выходных» в британском
            английском — at the weekend.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> On = дни, даты, праздники.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: At - Точное время ===== */
function Step5() {
  const atExercise: FillItem[] = [
    {
      left: "1. I wake up",
      right: "7 a.m. (в 7 утра)",
      answers: ["at"],
      explanation: "Ответ: at — Для точного времени используем at.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She works",
      right: "night. (ночью)",
      answers: ["at"],
      explanation: "Ответ: at — Для night используем at (исключение).",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We meet",
      right: "lunchtime. (в обед)",
      answers: ["at"],
      explanation: "Ответ: at — Для коротких моментов используем at.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать At?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>At</strong> используется для <strong>точного времени</strong>{" "}
          (часы, минуты) и коротких моментов (night, lunchtime).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I wake up at 7 a.m.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я просыпаюсь в 7 утра.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> At + 7 a.m. (точное время).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She works at night.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она работает ночью.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> At + night (момент).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">We meet at lunchtime.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы встречаемся в обед.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> At + lunchtime.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Использование:</strong> Для часов (at 8 p.m.), моментов
              (at night, at breakfast).
            </li>
            <li>
              <strong>Артикли:</strong> At 7 o'clock (без артикля), at night
              (без the).
            </li>
            <li>
              <strong>Произношение:</strong> At [æt] — короткий звук.
            </li>
            <li>
              <strong>События:</strong> At the moment (в данный момент).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> I study at 6 p.m. (Я учусь в 6 вечера.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Еда:</strong> We eat at lunchtime. (Мы едим в обед.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Сон:</strong> She sleeps at night. (Она спит ночью.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для частей дня:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I work at the morning.
                </div>
                <div className="text-green-600">
                  ✅ Right: I work in the morning.
                </div>
              </div>
            </li>
            <li>
              НЕ для дней:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I study at Monday.</div>
                <div className="text-green-600">
                  ✅ Right: I study on Monday.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте at"
        instruction="Заполните пропуски предлогом at."
        items={atExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «в 7 часов» = at 7 o'clock, но «ночью» = at night (не in
            night).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> At = точное время и короткие моменты.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Сравнение In, On, At ===== */
function Step6() {
  return (
    <>
      <UiSection title="Когда использовать каждый предлог?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold">In: Длительные периоды</p>
            <p className="text-sm text-gray-600">
              in the morning, in July, in 2025
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold">On: Дни и даты</p>
            <p className="text-sm text-gray-600">on Monday, on July 4th</p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold">At: Точное время и моменты</p>
            <p className="text-sm text-gray-600">at 7 a.m., at night</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для сравнения">
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div>
            <p className="font-semibold mb-1">Пример 1:</p>
            <p className="text-sm">
              <span className="text-indigo-600">In the morning</span>, I study.
              (Утром я учусь.)
            </p>
            <p className="text-sm">
              <span className="text-green-600">On Monday</span>, I study. (В
              понедельник я учусь.)
            </p>
            <p className="text-sm">
              <span className="text-blue-600">At 7 a.m.</span>, I study. (В 7
              утра я учусь.)
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Пример 2:</p>
            <p className="text-sm">
              <span className="text-indigo-600">In summer</span>, we travel.
              (Летом мы путешествуем.)
            </p>
            <p className="text-sm">
              <span className="text-green-600">On July 4th</span>, we celebrate.
              (4 июля мы празднуем.)
            </p>
            <p className="text-sm">
              <span className="text-blue-600">At noon</span>, we eat. (В полдень
              мы едим.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Иерархия времени:</strong> In — самый большой период
              (месяц, год), on — средний (день, дата), at — самый точный (час,
              момент).
            </li>
            <li>
              <strong>Артикли:</strong> In the morning, on Monday (без the), at
              7 o'clock (без the).
            </li>
            <li>
              <strong>Произношение:</strong> Различать in [ɪn], on [ɒn], at
              [æt].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ путать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I work in 7 p.m.</div>
              <div className="text-green-600">✅ Right: I work at 7 p.m.</div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: We meet on the morning.
              </div>
              <div className="text-green-600">
                ✅ Right: We meet in the morning.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: School starts at September.
              </div>
              <div className="text-green-600">
                ✅ Right: School starts in September.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто используют «в» для всех случаев (в понедельник,
            в 7 часов), в английском важно разделять in/on/at.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> In — периоды, On — дни, At — точное время.
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
      <UiSection title="Сравнение с другими темами">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">I study in the morning. (привычка + in).</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">There is/There are:</p>
            <p className="text-sm">
              There is a book on the table. (место, не время).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Can/Can't:</p>
            <p className="text-sm">I can study at 7 p.m. (умение + at).</p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Prepositions of Place:</p>
            <p className="text-sm">
              I'm in the room. (место) ≠ I study in the morning. (время).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Строгий выбор предлога:</strong> Русский «в» для in и at
              (в 7 часов = at 7 o'clock, в утром = in the morning).
            </li>
            <li>
              <strong>Артикли:</strong> In the morning (с the), но on Monday
              (без the).
            </li>
            <li>
              <strong>Дни недели:</strong> Русский «в понедельник» = on Monday
              (не in).
            </li>
            <li>
              <strong>Точное время:</strong> Русский «в 7 часов» = at 7 o'clock
              (не in).
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают in [ɪn] и on
              [ɒn].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Путаница in/at:
              <div className="ml-4">
                <div className="text-red-600">❌ I work in 7 p.m.</div>
                <div className="text-green-600">✅ I work at 7 p.m.</div>
              </div>
            </li>
            <li>
              Пропуск the:
              <div className="ml-4">
                <div className="text-red-600">❌ I study in morning.</div>
                <div className="text-green-600">✅ I study in the morning.</div>
              </div>
            </li>
            <li>
              Неправильный предлог:
              <div className="ml-4">
                <div className="text-red-600">❌ I study on the evening.</div>
                <div className="text-green-600">✅ I study in the evening.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Домашнее задание ===== */
function Step8() {
  return (
    <>
      <UiSection title="Домашнее задание для запоминания слов">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Задание:</strong> Выучите <strong>20 слов</strong> из списка
          на странице 2.
        </p>
      </UiSection>

      <UiSection title="Как выполнять">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Повторение:</p>
            <p className="text-sm">
              Прочитайте каждое слово вслух 3 раза (in [ɪn], Monday [ˈmʌndeɪ]).
              Используйте аудио на сайте.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Карточки:</p>
            <p className="text-sm">
              Напишите слова на карточках (английское слово + перевод).
              Проверяйте себя.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Предложения:</p>
            <p className="text-sm mb-2">
              Составьте <strong>10 предложений</strong> с разными предлогами:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>4 с in: I study in the morning.</li>
              <li>3 с on: I work on Monday.</li>
              <li>3 с at: I wake up at 7 a.m.</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: I play football on Saturday.
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Диалог:</p>
            <p className="text-sm mb-2">
              Напишите диалог (5-6 реплик) с минимум 5 словами из списка.
            </p>
            <div className="bg-white rounded p-3 text-sm">
              <p>
                <strong>Пример:</strong>
              </p>
              <p>A: When do you study?</p>
              <p>B: I study in the morning.</p>
              <p>A: Do you work on Monday?</p>
              <p>B: Yes, I work at 9 a.m.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте предлоги в реальных ситуациях (опишите своё
              расписание).
            </li>
            <li>Проверяйте произношение (in [ɪn], at [æt]).</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. I study",
      right: "the morning.",
      answers: ["in"],
      explanation: "Ответ: in — Часть дня.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. We meet",
      right: "Saturday.",
      answers: ["on"],
      explanation: "Ответ: on — День недели.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. She works",
      right: "9 a.m.",
      answers: ["at"],
      explanation: "Ответ: at — Точное время.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I wake up",
      right: "7 a.m. (в 7 утра)",
      answers: ["at"],
      explanation: "Ответ: at",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2. We travel",
      right: "summer. (летом)",
      answers: ["in"],
      explanation: "Ответ: in",
      ariaLabel: "Заполните 2",
    },
    {
      left: "3. I study",
      right: "the evening. (вечером)",
      answers: ["in"],
      explanation: "Ответ: in",
      ariaLabel: "Заполните 3",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я учусь вечером. →",
      right: "",
      answers: ["I study in the evening", "I study in the evening."],
      explanation: "Ответ: I study in the evening.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Встретимся в пятницу. →",
      right: "",
      answers: ["Let's meet on Friday", "Let's meet on Friday."],
      explanation: "Ответ: Let's meet on Friday.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Она спит ночью. →",
      right: "",
      answers: ["She sleeps at night", "She sleeps at night."],
      explanation: "Ответ: She sleeps at night.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I work in 7 p.m. →",
      right: "",
      answers: ["I work at 7 p.m", "I work at 7 p.m."],
      explanation: "Исправление: I work at 7 p.m. — Точное время.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ We meet on the morning. →",
      right: "",
      answers: ["We meet in the morning", "We meet in the morning."],
      explanation: "Исправление: We meet in the morning. — Часть дня.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ School starts at September. →",
      right: "",
      answers: ["School starts in September", "School starts in September."],
      explanation: "Исправление: School starts in September. — Месяц.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по предлогам времени">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильный предлог"
        instruction="Вставьте правильный предлог времени."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте подходящий предлог."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Переведите"
        instruction="Переведите с русского на английский."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise4}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. I wake up at 7 a.m.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I wake up at 7 a.m.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I study in the evening.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I study in the morning (не вечером).",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. I work on Monday.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I work on Monday and Tuesday.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. I meet my friend at 7 p.m.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — We meet at noon (не в 7 вечера).",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. School starts in September.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — School starts in September.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Day">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I wake up at 7 a.m. I study in the morning. I work on Monday and
            Tuesday. I don't work in the evening. My friend visits me on
            Saturday. We meet at noon. I sleep at night. School starts in
            September.
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
              Я просыпаюсь в 7 утра. Я учусь утром. Я работаю в понедельник и
              вторник. Я не работаю вечером. Мой друг приходит ко мне в субботу.
              Мы встречаемся в полдень. Я сплю ночью. Школа начинается в
              сентябре.
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
            Подчеркните предлоги (in, on, at) в тексте для поиска ответов.
            Обратите внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Предлоги времени"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Описывать время событий (in, on, at)</li>
          <li>Использовать правильные предлоги для разных ситуаций</li>
          <li>Отличать in (периоды) от on (дни) и at (часы)</li>
          <li>Составлять расписание на английском</li>
          <li>Понимать различия с русским языком</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>In:</strong> Длительные периоды (in the morning, in July)
            </li>
            <li>
              <strong>On:</strong> Дни и даты (on Monday, on July 4th)
            </li>
            <li>
              <strong>At:</strong> Точное время и моменты (at 7 a.m., at night)
            </li>
            <li>
              <strong>Отличия от русского:</strong> Строгий выбор предлога,
              артикли (in the morning)
            </li>
            <li>
              <strong>Произношение:</strong> In [ɪn], On [ɒn], At [æt]
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Опишите своё расписание используя все предлоги</li>
            <li>Не забывайте: at 7 o'clock, not in 7 o'clock!</li>
            <li>Помните: in the morning, но at night</li>
            <li>Практикуйте произношение каждого предлога</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
