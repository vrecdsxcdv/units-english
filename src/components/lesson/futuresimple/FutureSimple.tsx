"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FutureSimple({ step }: Props) {
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
      <UiSection title="Что такое Future Simple и Going to?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Future Simple (will) и Going to — это способы говорить о будущем в
          английском языке.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-900 mb-2">
              Future Simple (will):
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
              <li>
                <strong>Предсказания:</strong> То, что мы думаем произойдёт (It
                will rain tomorrow. — Завтра будет дождь.)
              </li>
              <li>
                <strong>Спонтанные решения:</strong> Решения, принятые в момент
                речи (I will help you. — Я помогу тебе.)
              </li>
              <li>
                <strong>Формула:</strong> Подлежащее + will + глагол (начальная
                форма)
              </li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Going to:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
              <li>
                <strong>Планы:</strong> Запланированные действия (I am going to
                study tomorrow. — Я собираюсь учиться завтра.)
              </li>
              <li>
                <strong>Формула:</strong> Подлежащее + am/is/are + going to +
                глагол (начальная форма)
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает говорить о будущем: I will go to the shop. (Я пойду в
            магазин, решение сейчас.) / I am going to the shop. (Я собираюсь в
            магазин, план).
          </li>
          <li>
            Учит задавать вопросы: Will you help me? (Ты поможешь мне?) / Are
            you going to study? (Ты собираешься учиться?)
          </li>
          <li>
            Разъясняет разницу между предсказаниями, решениями и планами для
            правильного общения о будущем.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold mb-2">Future Simple (will):</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Для всех подлежащих <strong>will</strong> одинаково (I will, she
              will).
            </li>
            <li>
              Отрицания: <strong>won't</strong> (will not).
            </li>
            <li>
              Вопросы: <strong>Will + подлежащее + глагол</strong>.
            </li>
            <li>Произношение: Will [wɪl] (вил), Won't [woʊnt] (воунт).</li>
          </ul>
        </div>

        <div className="bg-sky-50/50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold mb-2">Going to:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Am/is/are меняется по подлежащему (I am going to, she is going
              to).
            </li>
            <li>
              Отрицания: <strong>am/is/are + not + going to</strong>.
            </li>
            <li>
              Вопросы:{" "}
              <strong>Am/Is/Are + подлежащее + going to + глагол</strong>.
            </li>
            <li>Произношение: Going to [ˈɡoʊɪŋ tu] (гоинг ту).</li>
          </ul>
        </div>

        <div className="bg-rose-50/50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Интонация и временные слова:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Утверждения — ровная интонация, вопросы — восходящая (↑).</li>
            <li>
              Временные слова: tomorrow, next week, soon, today для обоих, но
              going to чаще с планами.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры для понимания">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Future Simple:</strong> It will be sunny. (Будет солнечно,
              предсказание.) / I will buy it. (Я куплю, решение сейчас.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Going to:</strong> I am going to buy a book tomorrow. (Я
              собираюсь купить книгу завтра, план.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> Русский «я пойду» может быть
              и предсказанием, и планом, английский различает will
              (спонтанно/предсказание) и going to (план).
            </li>
            <li>
              <strong>Будущее время:</strong> В русском «буду делать» для
              планов, английский использует going to для планов, will для
              предсказаний.
            </li>
            <li>
              <strong>Ошибки:</strong> Русскоязычные путают will и going to (I
              will go tomorrow вместо I am going to go tomorrow, если план).
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика ===== */
function Step2() {
  return (
    <>
      <UiSection title="Лексика для Future Simple и Going to">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для говорения о будущем важно выучить глаголы и слова времени. Вот
          список из <strong>20 ключевых слов/фраз</strong> с переводом и
          произношением для A1-A2.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Help</strong> [hɛlp] — Помогать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Buy</strong> [baɪ] — Покупать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Go</strong> [ɡoʊ] — Идти
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Meet</strong> [miːt] — Встречаться
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Study</strong> [ˈstʌdi] — Учиться
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Rain</strong> [reɪn] — Дождь (идёт дождь)
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Be</strong> [biː] — Быть
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Have</strong> [hæv] — Иметь
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Eat</strong> [iːt] — Есть
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Drink</strong> [drɪŋk] — Пить
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Next week</strong> [nɛkst wiːk] — На следующей неделе
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Soon</strong> [suːn] — Скоро
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Today</strong> [təˈdeɪ] — Сегодня
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Friend</strong> [frend] — Друг
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Book</strong> [bʊk] — Книга
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Park</strong> [pɑːrk] — Парк
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>School</strong> [skuːl] — Школа
            </p>
          </div>
          <div className="bg-amber-50/50 rounded-lg p-3 border border-amber-200">
            <p className="text-sm">
              <strong>Will</strong> [wɪl] — Будет (для Future Simple)
            </p>
          </div>
          <div className="bg-amber-50/50 rounded-lg p-3 border border-amber-200">
            <p className="text-sm">
              <strong>Going to</strong> [ˈɡoʊɪŋ tu] — Собираюсь (для Going to)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Future Simple:</strong> It will rain tomorrow. (Завтра
              будет дождь.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Going to:</strong> I am going to meet my friend tomorrow.
              (Я собираюсь встретиться с другом завтра.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Повторяйте с аудио (will [wɪl], going to [ˈɡoʊɪŋ tu]).</li>
          <li>
            Составляйте предложения: I will help you. / I am going to study.
          </li>
          <li>Используйте карточки: слово + перевод + пример в будущем.</li>
        </ul>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Future Simple для предсказаний ===== */
function Step3() {
  return (
    <>
      <UiSection title="Future Simple для предсказаний">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Future Simple (will) используется для предсказаний — когда мы думаем о
          том, что произойдёт в будущем, без плана.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              It will rain tomorrow.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Завтра будет дождь.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> It + will + rain + tomorrow
              (предсказание).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              He will be happy.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Он будет счастлив.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> He + will + be + happy.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              The team will win.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Команда выиграет.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> The team + will + win.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Формула:</strong> Подлежащее + will + глагол (начальная
              форма).
            </li>
            <li>
              <strong>Will одинаково для всех:</strong> I will, she will.
            </li>
            <li>
              <strong>Произношение:</strong> Will [wɪl], короткий звук.
            </li>
            <li>
              <strong>Временные слова:</strong> tomorrow, soon, next year.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>It will be cold tomorrow. (Завтра будет холодно.) — Погода.</li>
          <li>You will like the book. (Тебе понравится книга.) — Мнение.</li>
          <li>
            The bus will arrive soon. (Автобус приедет скоро.) — Ожидание.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-rose-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>НЕ для планов:</strong> Wrong: I will meet my friend
              tomorrow (если запланировано). Right: I am going to meet my friend
              tomorrow.
            </li>
            <li>
              <strong>НЕ для очевидных фактов:</strong> Wrong: The sun will rise
              tomorrow. Right: The sun rises tomorrow. (Present Simple для
              расписаний).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русский «будет дождь» = it will rain, но русскоязычные могут
            использовать will для планов (I will go tomorrow вместо I am going
            to go), что неправильно.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Future Simple для спонтанных решений ===== */
function Step4() {
  return (
    <>
      <UiSection title="Future Simple для спонтанных решений">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Future Simple (will) используется для спонтанных решений — решений,
          принятых в момент речи, без предварительного плана.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              I will help you.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я помогу тебе. (Решение сейчас.)
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> I + will + help + you.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">I will buy it.</p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я куплю это. (Спонтанно.)
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> I + will + buy + it.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              We will eat at home.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Мы поедим дома. (Решение в момент.)
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> We + will + eat + at home.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Формула:</strong> Подлежащее + will + глагол.
            </li>
            <li>
              <strong>Спонтанность:</strong> Используется, когда решение
              принимается на месте (I see it's raining. I will take an
              umbrella).
            </li>
            <li>
              <strong>Произношение:</strong> Will [wɪl], акцент на решение.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            It's cold. I will close the window. (Холодно. Я закрою окно.) — Дом.
          </li>
          <li>I will call you. (Я позвоню тебе.) — Разговор.</li>
          <li>We will have tea. (Мы попьём чай.) — Встреча.</li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-rose-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>НЕ для заранее спланированных действий:</strong> Wrong: I
              will meet my friend tomorrow (если запланировано). Right: I am
              going to meet my friend tomorrow.
            </li>
            <li>
              <strong>НЕ для предсказаний без основания:</strong> Wrong: It will
              rain (если не уверены). Right: It will rain (с основанием, как
              погода).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русскоязычные могут использовать will для всех случаев будущего, но
            в английском will для спонтанных решений, going to для планов.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Going to для планов ===== */
function Step5() {
  return (
    <>
      <UiSection title="Going to для планов">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Going to используется для планов — действий, которые запланированы
          заранее, с намерением.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              I am going to study tomorrow.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я собираюсь учиться завтра.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> I + am going to + study + tomorrow.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              She is going to buy a book.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Она собирается купить книгу.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> She + is going to + buy + a book.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              We are going to meet at 7 p.m.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Мы собираемся встретиться в 7 вечера.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> We + are going to + meet + at 7 p.m.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Формула:</strong> Подлежащее + am/is/are + going to +
              глагол.
            </li>
            <li>
              <strong>Am/is/are меняется:</strong> I am, he is, they are.
            </li>
            <li>
              <strong>Произношение:</strong> Going to [ˈɡoʊɪŋ tu].
            </li>
            <li>
              <strong>Временные слова:</strong> tomorrow, next week, soon.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            I am going to visit my grandma. (Я собираюсь навестить бабушку.) —
            Семья.
          </li>
          <li>
            He is going to play football tomorrow. (Он собирается играть в
            футбол завтра.) — Спорт.
          </li>
          <li>
            They are going to travel to Paris. (Они собираются поехать в Париж.)
            — Путешествия.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-rose-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>НЕ для предсказаний без плана:</strong> Wrong: It is going
              to rain. Right: It will rain (если нет плана, просто
              предсказание).
            </li>
            <li>
              <strong>НЕ для спонтанных решений:</strong> Wrong: I am going to
              help you (если решение сейчас). Right: I will help you.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            В русском «я собираюсь» = I am going to, но для спонтанных решений
            используйте will, а не going to.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Отрицания и вопросы: Сводка ===== */
function Step6() {
  return (
    <>
      <UiSection title="Отрицания в Future Simple">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для создания отрицаний в Future Simple используется{" "}
          <strong>won't</strong> (сокращённая форма от will not) или полная
          форма <strong>will not</strong>.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              I won't go tomorrow.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я не пойду завтра.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Формула:</strong> I + won't + go + tomorrow.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              It will not rain.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Не будет дождя.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Формула:</strong> It + will not + rain.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              She won't help us.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Она не поможет нам.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Формула:</strong> She + won't + help + us.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отрицания в Going to">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для создания отрицаний в Going to добавляется <strong>not</strong>{" "}
          после am/is/are: <strong>am/is/are + not + going to + глагол</strong>.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              I am not going to study.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я не собираюсь учиться.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              He isn't going to come.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Он не собирается приходить.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              They aren't going to travel.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Они не собираются путешествовать.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ Wrong: I will not going to study.
              </div>
              <div className="text-green-600">
                ✅ Right: I am not going to study.
              </div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: She don't will come.</div>
              <div className="text-green-600">✅ Right: She won't come.</div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I amn't going to help.
              </div>
              <div className="text-green-600">
                ✅ Right: I am not going to help. (нет сокращения am not)
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Практика - Выбор Will или Going to ===== */
function Step7() {
  const exercise1: FillItem[] = [
    {
      prompt: "It ___ rain tomorrow. (предсказание о погоде)",
      answer: "will",
      hint: "Используйте will для предсказаний",
    },
    {
      prompt: "I ___ going to visit my grandma next week. (у меня план)",
      answer: "am",
      hint: "Используйте am с I для планов",
    },
    {
      prompt: "Oh no! I forgot my keys. I ___ go back home. (решение сейчас)",
      answer: "will",
      hint: "Используйте will для спонтанных решений",
    },
    {
      prompt: "She ___ going to study English tomorrow. (запланировано)",
      answer: "is",
      hint: "Используйте is с she для планов",
    },
    {
      prompt: "The phone is ringing. I ___ answer it. (решение в момент)",
      answer: "will",
      hint: "Используйте will для спонтанных решений",
    },
    {
      prompt: "We ___ going to travel to Paris next month. (план на будущее)",
      answer: "are",
      hint: "Используйте are с we для планов",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Практика: Will или Going to?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте потренируемся выбирать правильную форму будущего времени!
          Помните:
        </p>
        <div className="bg-blue-50/50 rounded-lg p-4 mb-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Will</strong> — для предсказаний и спонтанных решений
            </li>
            <li>
              <strong>Going to</strong> — для планов (запланированных действий)
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Заполните пропуски"
        instruction="Используйте will, am, is или are в зависимости от контекста."
        items={exercise1}
      />

      <UiSection title="💡 Подсказка">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Обращайте внимание на контекст! Если действие запланировано заранее
            — используйте going to. Если это предсказание или решение в момент
            речи — используйте will.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Практика - Отрицания ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. I will go tomorrow. → (отрицание)",
      right: "",
      answers: [
        "I won't go tomorrow",
        "I won't go tomorrow.",
        "I will not go tomorrow",
        "I will not go tomorrow.",
      ],
      explanation: "Ответ: I won't go tomorrow. (или I will not go tomorrow.)",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. She will help you. → (отрицание)",
      right: "",
      answers: [
        "She won't help you",
        "She won't help you.",
        "She will not help you",
        "She will not help you.",
      ],
      explanation: "Ответ: She won't help you.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. They are going to study. → (отрицание)",
      right: "",
      answers: [
        "They aren't going to study",
        "They aren't going to study.",
        "They are not going to study",
        "They are not going to study.",
      ],
      explanation: "Ответ: They aren't going to study.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
    {
      left: "4. I am going to buy a book. → (отрицание)",
      right: "",
      answers: [
        "I am not going to buy a book",
        "I am not going to buy a book.",
        "I'm not going to buy a book",
        "I'm not going to buy a book.",
      ],
      explanation: "Ответ: I am not going to buy a book.",
      ariaLabel: "Отрицание 4",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. Я не помогу тебе. →",
      right: "",
      answers: [
        "I won't help you",
        "I won't help you.",
        "I will not help you",
        "I will not help you.",
      ],
      explanation: "Ответ: I won't help you.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Она не собирается приходить. →",
      right: "",
      answers: [
        "She isn't going to come",
        "She isn't going to come.",
        "She is not going to come",
        "She is not going to come.",
      ],
      explanation: "Ответ: She isn't going to come.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Завтра не будет дождя. →",
      right: "",
      answers: [
        "It won't rain tomorrow",
        "It won't rain tomorrow.",
        "It will not rain tomorrow",
        "It will not rain tomorrow.",
      ],
      explanation: "Ответ: It won't rain tomorrow.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Практика: Отрицания">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Потренируемся создавать отрицательные предложения в Future Simple и
          Going to!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Переведите на английский"
        instruction="Переведите отрицательные предложения с русского на английский."
        items={exercise2}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Will:</strong> won't (will not)
            </li>
            <li>
              <strong>Going to:</strong> am not / isn't / aren't + going to
            </li>
            <li>
              <strong>Важно:</strong> am not НЕ сокращается до "amn't"
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Практика - Вопросы ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. You will help me. → (вопрос)",
      right: "",
      answers: ["Will you help me", "Will you help me?"],
      explanation: "Ответ: Will you help me?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. She is going to study. → (вопрос)",
      right: "",
      answers: ["Is she going to study", "Is she going to study?"],
      explanation: "Ответ: Is she going to study?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. It will rain tomorrow. → (вопрос)",
      right: "",
      answers: ["Will it rain tomorrow", "Will it rain tomorrow?"],
      explanation: "Ответ: Will it rain tomorrow?",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
    {
      left: "4. They are going to travel. → (вопрос)",
      right: "",
      answers: ["Are they going to travel", "Are they going to travel?"],
      explanation: "Ответ: Are they going to travel?",
      ariaLabel: "Вопрос 4",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. Ты поможешь мне? →",
      right: "",
      answers: ["Will you help me", "Will you help me?"],
      explanation: "Ответ: Will you help me?",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Она собирается учиться завтра? →",
      right: "",
      answers: [
        "Is she going to study tomorrow",
        "Is she going to study tomorrow?",
      ],
      explanation: "Ответ: Is she going to study tomorrow?",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Они собираются приходить? →",
      right: "",
      answers: ["Are they going to come", "Are they going to come?"],
      explanation: "Ответ: Are they going to come?",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. ❌ Will you going to study? →",
      right: "",
      answers: ["Are you going to study", "Are you going to study?"],
      explanation: "Исправление: Are you going to study? (не Will с going to)",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ Is she will come? →",
      right: "",
      answers: ["Will she come", "Will she come?"],
      explanation: "Исправление: Will she come? (не is с will)",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Do you will help me? →",
      right: "",
      answers: ["Will you help me", "Will you help me?"],
      explanation: "Исправление: Will you help me? (не do с will)",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Практика: Вопросы">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Потренируемся задавать вопросы в Future Simple и Going to!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Задайте вопросы"
        instruction="Переделайте утверждения в вопросительные предложения."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Переведите на английский"
        instruction="Переведите вопросы с русского на английский."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в вопросах."
        items={exercise3}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Will:</strong> Will + подлежащее + глагол?
            </li>
            <li>
              <strong>Going to:</strong> Am/Is/Are + подлежащее + going to +
              глагол?
            </li>
            <li>
              <strong>Важно:</strong> НЕ смешивайте will и going to в одном
              предложении!
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и финальная практика ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. Emma will go to Paris tomorrow.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — She is going to go to London (plan).",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. Emma is going to visit museums.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I am going to visit museums.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. Emma thinks it will rain.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I think it will rain (prediction).",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. Tom will help Emma pack her bags.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I will help you pack (spontaneous decision).",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. Emma is going to buy a new camera.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — She is going to take photos, but no mention of buying camera.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  const mixedExercise: FillItem[] = [
    {
      left: "1. Я собираюсь встретиться с друзьями завтра. →",
      right: "",
      answers: [
        "I am going to meet friends tomorrow",
        "I am going to meet friends tomorrow.",
        "I'm going to meet friends tomorrow",
        "I'm going to meet friends tomorrow.",
      ],
      explanation: "Ответ: I am going to meet friends tomorrow.",
      ariaLabel: "Смешанное 1",
      wide: true,
    },
    {
      left: "2. Я думаю, будет солнечно. →",
      right: "",
      answers: ["I think it will be sunny", "I think it will be sunny."],
      explanation: "Ответ: I think it will be sunny.",
      ariaLabel: "Смешанное 2",
      wide: true,
    },
    {
      left: "3. Он не собирается покупать машину. →",
      right: "",
      answers: [
        "He isn't going to buy a car",
        "He isn't going to buy a car.",
        "He is not going to buy a car",
        "He is not going to buy a car.",
      ],
      explanation: "Ответ: He isn't going to buy a car.",
      ariaLabel: "Смешанное 3",
      wide: true,
    },
    {
      left: "4. Ты поможешь мне с домашней работой? →",
      right: "",
      answers: [
        "Will you help me with homework",
        "Will you help me with homework?",
      ],
      explanation: "Ответ: Will you help me with homework?",
      ariaLabel: "Смешанное 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📖 Текст для чтения: Emma's Plans">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed mb-3">
            <strong>Emma:</strong> Hi Tom! I am going to go to London tomorrow.
            I am very excited! I am going to visit museums and take photos. I
            think it will be an amazing trip!
          </p>
          <p className="text-zinc-900 leading-relaxed mb-3">
            <strong>Tom:</strong> That sounds great! Will you visit Big Ben?
          </p>
          <p className="text-zinc-900 leading-relaxed mb-3">
            <strong>Emma:</strong> Yes, I will! I am also going to try English
            food. But I think it will rain tomorrow, so I will take an umbrella.
          </p>
          <p className="text-zinc-900 leading-relaxed">
            <strong>Tom:</strong> Good idea! I will help you pack your bags if
            you want.
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
            <p className="font-semibold text-zinc-900 mb-2">Перевод диалога:</p>
            <p className="text-zinc-700 leading-relaxed mb-3">
              <strong>Эмма:</strong> Привет, Том! Я собираюсь поехать в Лондон
              завтра. Я очень взволнована! Я собираюсь посетить музеи и сделать
              фотографии. Я думаю, это будет потрясающая поездка!
            </p>
            <p className="text-zinc-700 leading-relaxed mb-3">
              <strong>Том:</strong> Звучит здорово! Ты посетишь Биг Бен?
            </p>
            <p className="text-zinc-700 leading-relaxed mb-3">
              <strong>Эмма:</strong> Да! Я также собираюсь попробовать
              английскую еду. Но я думаю, что завтра будет дождь, поэтому я
              возьму зонт.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Том:</strong> Хорошая идея! Я помогу тебе упаковать сумки,
              если хочешь.
            </p>
          </div>
        )}
      </UiSection>

      <CheckableExercise
        title="📝 Задание True/False"
        instruction="Прочитайте текст и ответьте True (правда) или False (ложь)."
        items={trueFalseItems}
      />

      <CheckableExercise
        title="📝 Финальное упражнение: Переведите"
        instruction="Переведите предложения с русского на английский, используя will или going to."
        items={mixedExercise}
      />

      <UiSection title="💡 Ключевые моменты из текста">
        <div className="bg-green-50/50 rounded-lg p-4 mb-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Going to (планы):</strong> "I am going to go to London"
              (запланированная поездка)
            </li>
            <li>
              <strong>Will (предсказания):</strong> "I think it will rain"
              (предсказание о погоде)
            </li>
            <li>
              <strong>Will (спонтанные решения):</strong> "I will take an
              umbrella" (решение в момент речи)
            </li>
            <li>
              <strong>Will (вопросы):</strong> "Will you visit Big Ben?" (общий
              вопрос)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
          <p className="text-zinc-700 leading-relaxed mb-4">
            Вы завершили тему <strong>Future Simple и Going to</strong>! Теперь
            вы знаете:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Как говорить о будущем, используя will и going to</li>
            <li>
              Различие между предсказаниями, спонтанными решениями и планами
            </li>
            <li>Как задавать вопросы и создавать отрицания</li>
            <li>Когда использовать will, а когда going to</li>
          </ul>
        </div>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых формул:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Will (утверждение):</strong> I will help you.
            </li>
            <li>
              <strong>Will (отрицание):</strong> I won't go.
            </li>
            <li>
              <strong>Will (вопрос):</strong> Will you help me?
            </li>
            <li>
              <strong>Going to (утверждение):</strong> I am going to study.
            </li>
            <li>
              <strong>Going to (отрицание):</strong> I am not going to go.
            </li>
            <li>
              <strong>Going to (вопрос):</strong> Are you going to come?
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <p className="text-yellow-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Делайте предсказания о погоде, используя will</li>
            <li>Рассказывайте о своих планах, используя going to</li>
            <li>
              Помните разницу: will = спонтанно/предсказание, going to = план
            </li>
            <li>Практикуйте все три формы: утверждения, вопросы, отрицания</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
