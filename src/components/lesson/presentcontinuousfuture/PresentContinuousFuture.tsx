"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentContinuousFuture({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое Present Continuous для будущего?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous (am/is/are + глагол + -ing) обычно используется для
          действий, происходящих сейчас (I am reading now), но также применяется
          для <strong>будущих договорённостей</strong> — запланированных событий
          с фиксированным временем или договорённостью с другими людьми.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>I am meeting my friend tomorrow.</strong> (Я встречаюсь с
              другом завтра.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>She is going to the cinema tonight.</strong> (Она идёт в
              кино сегодня вечером.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает говорить о планах и договорённостях: We are having dinner
            at 7 p.m. (Мы ужинаем в 7 вечера.)
          </li>
          <li>
            Учит отличать Present Continuous для будущего от других времён
            (going to, will).
          </li>
          <li>
            Формирует навык описания запланированных событий с точным временем.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">
            Формула: Подлежащее + am/is/are + глагол + -ing
          </p>
          <p className="text-sm text-zinc-700 mb-3">
            <strong>Когда использовать?</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Для договорённостей с другими людьми:</strong> I am
              meeting Anna at 5 p.m. (Я встречаюсь с Анной в 5 вечера.)
            </li>
            <li>
              <strong>Для фиксированных планов с указанием времени:</strong> We
              are flying to London tomorrow. (Мы летим в Лондон завтра.)
            </li>
          </ul>
        </div>

        <div className="bg-sky-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Произношение и интонация:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Am [æm], is [ɪz], are [ɑːr], -ing [ɪŋ]</li>
            <li>Утверждения — ровная интонация, вопросы — восходящая (↑)</li>
          </ul>
        </div>

        <div className="bg-rose-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Временные слова:</p>
          <p className="text-sm text-zinc-700">
            tomorrow, tonight, at 5 p.m., next week, on Monday
          </p>
        </div>
      </UiSection>

      <UiSection title="Отличие от Going to">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              Present Continuous:
            </p>
            <p className="text-sm text-zinc-700">
              Конкретные договорённости с временем/людьми → I am meeting my
              friend at 7 p.m.
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">Going to:</p>
            <p className="text-sm text-zinc-700">
              Общие планы без чёткой договорённости → I am going to study
              tomorrow.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском «я встречаюсь завтра» может быть общим планом или
              договорённостью, в английском Present Continuous подчёркивает
              конкретную договорённость с временем или людьми.
            </li>
            <li>
              Русскоязычные часто путают Present Continuous с going to или will
              для планов (I will meet my friend вместо I am meeting my friend).
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
      <UiSection title="Лексика для Present Continuous в будущем">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вот список из <strong>20 ключевых слов</strong> с переводом и
          произношением для уровня A1-A2.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Meet</strong> [miːt] → <strong>Meeting</strong> [ˈmiːtɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Встречаться → Встречаясь</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Go</strong> [ɡoʊ] → <strong>Going</strong> [ˈɡoʊɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Идти → Идущий</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Visit</strong> [ˈvɪzɪt] → <strong>Visiting</strong>{" "}
              [ˈvɪzɪtɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Посещать → Посещая</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Have</strong> [hæv] → <strong>Having</strong> [ˈhævɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Иметь/проводить → Имея</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Fly</strong> [flaɪ] → <strong>Flying</strong> [ˈflaɪɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Лететь → Летящий</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Watch</strong> [wɒtʃ] → <strong>Watching</strong>{" "}
              [ˈwɒtʃɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Смотреть → Смотря</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Eat</strong> [iːt] → <strong>Eating</strong> [ˈiːtɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Есть → Едящий</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Play</strong> [pleɪ] → <strong>Playing</strong> [ˈpleɪɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Играть → Играя</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Study</strong> [ˈstʌdi] → <strong>Studying</strong>{" "}
              [ˈstʌdiɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Учиться → Учась</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Work</strong> [wɜːrk] → <strong>Working</strong>{" "}
              [ˈwɜːrkɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Работать → Работая</p>
          </div>

          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Tonight</strong> [təˈnaɪt] — Сегодня вечером
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Next week</strong> [nɛkst wiːk] — На следующей неделе
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>At</strong> [æt] — В (время)
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>On Monday</strong> [ɒn ˈmʌndeɪ] — В понедельник
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Friend</strong> [frend] — Друг
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Cinema</strong> [ˈsɪnəmə] — Кинотеатр
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Party</strong> [ˈpɑːrti] — Вечеринка
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Dinner</strong> [ˈdɪnər] — Ужин
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>School</strong> [skuːl] — Школа
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              I am meeting my friend tomorrow. (Я встречаюсь с другом завтра.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              She is going to the cinema tonight. (Она идёт в кино сегодня
              вечером.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Повторяйте с аудио (meeting [ˈmiːtɪŋ], tomorrow [təˈmɒroʊ]).</li>
          <li>Составляйте предложения: I am having dinner at 7 p.m.</li>
          <li>Карточки: слово + перевод + пример с Present Continuous.</li>
        </ul>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Когда использовать ===== */
function Step3() {
  return (
    <>
      <UiSection title="Когда использовать Present Continuous для будущего?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous используется для будущих договорённостей, которые:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              1. Запланированы с конкретным временем:
            </p>
            <p className="text-sm text-zinc-700">
              I am meeting Anna at 5 p.m. (Я встречаюсь с Анной в 5 вечера.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              2. Договорены с другими людьми:
            </p>
            <p className="text-sm text-zinc-700">
              We are having dinner with friends tonight. (Мы ужинаем с друзьями
              сегодня вечером.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              3. Связаны с фиксированными событиями:
            </p>
            <p className="text-sm text-zinc-700">
              She is flying to London tomorrow. (Она летит в Лондон завтра.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема построения">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Утверждения:</strong> Подлежащее + am/is/are + глагол +
              -ing (I am meeting)
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + am/is/are + not + -ing (I
              am not meeting)
            </li>
            <li>
              <strong>Вопросы:</strong> Am/Is/Are + подлежащее + -ing (Are you
              meeting?)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            I am visiting my grandma tomorrow. (Я навещаю бабушку завтра.) —
            Семья.
          </li>
          <li>
            We are playing football at 6 p.m. (Мы играем в футбол в 6 вечера.) —
            Спорт.
          </li>
          <li>
            She is going to the cinema tonight. (Она идёт в кино сегодня
            вечером.) — Досуг.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ НЕ для общих планов: I am studying tomorrow.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I am going to study tomorrow. (без
                времени/договорённости)
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ НЕ для предсказаний: It is raining tomorrow.
              </div>
              <div className="text-green-600">
                ✅ Правильно: It will rain tomorrow.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ НЕ для спонтанных решений: I am helping you.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I will help you.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русский «я встречаюсь завтра» не уточняет, договорённость это или
            план, английский требует Present Continuous для чёткой
            договорённости.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Правила формирования ===== */
function Step4() {
  return (
    <>
      <UiSection title="Как строить предложения?">
        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              1. Утверждения: Подлежащее + am/is/are + глагол + -ing
            </p>
            <p className="text-sm text-zinc-700">I am meeting my friend.</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">
              2. Отрицания: Подлежащее + am/is/are + not + -ing
            </p>
            <p className="text-sm text-zinc-700">I am not meeting my friend.</p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-2">
              3. Вопросы: Am/Is/Are + подлежащее + -ing
            </p>
            <p className="text-sm text-zinc-700">
              Are you meeting your friend?
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила добавления -ing">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">
                  Правило
                </th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
                <th className="border border-gray-300 p-2 text-left">
                  Результат
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Обычные глаголы</td>
                <td className="border border-gray-300 p-2">meet</td>
                <td className="border border-gray-300 p-2">meeting</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">На -e: убираем e</td>
                <td className="border border-gray-300 p-2">write</td>
                <td className="border border-gray-300 p-2">writing</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Гласная + согласная: удваиваем
                </td>
                <td className="border border-gray-300 p-2">run</td>
                <td className="border border-gray-300 p-2">running</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  На -ie: ie → y + -ing
                </td>
                <td className="border border-gray-300 p-2">die</td>
                <td className="border border-gray-300 p-2">dying</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Примеры предложений">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            She is visiting her grandma tomorrow. (Она навещает бабушку завтра.)
          </li>
          <li>
            We are not playing football tonight. (Мы не играем в футбол сегодня
            вечером.)
          </li>
          <li>Are you going to the cinema? (Ты идёшь в кино?)</li>
        </ul>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">❌ Wrong: I am meet my friend.</div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am writeing a letter.
              </div>
              <div className="text-green-600">
                ✅ Right: I am writing a letter. (убираем e)
              </div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I am runing.</div>
              <div className="text-green-600">
                ✅ Right: I am running. (удваиваем n)
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Сравнение ===== */
function Step5() {
  return (
    <>
      <UiSection title="Сравнение: Present Continuous, Going to и Future Simple">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте разберём, когда использовать каждую форму будущего времени:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Время</th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
                <th className="border border-gray-300 p-2 text-left">Когда?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Present Continuous
                </td>
                <td className="border border-gray-300 p-2">
                  I am meeting Anna at 5 p.m.
                </td>
                <td className="border border-gray-300 p-2">Договорённость</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Going to</td>
                <td className="border border-gray-300 p-2">
                  I am going to study tomorrow.
                </td>
                <td className="border border-gray-300 p-2">Общий план</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Future Simple</td>
                <td className="border border-gray-300 p-2">
                  It will rain tomorrow.
                </td>
                <td className="border border-gray-300 p-2">Предсказание</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              Present Continuous для договорённостей:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I am meeting my friend at 7 p.m. (Встреча договорена.)</li>
              <li>She is flying to London tomorrow. (Билет куплен.)</li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">
              Going to для общих планов:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I am going to meet my friend tomorrow. (Общий план.)</li>
              <li>She is going to travel next month. (План без времени.)</li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-2">
              Future Simple для предсказаний/решений:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I will meet my friend. (Решение сейчас.)</li>
              <li>She will like London. (Предсказание.)</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am going to meet my friend at 5 p.m. (если
                договорено)
              </div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend at 5 p.m.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: It is raining tomorrow.
              </div>
              <div className="text-green-600">
                ✅ Right: It will rain tomorrow.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русскоязычные путают Present Continuous с going to для
            договорённостей (I am going to meet вместо I am meeting).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Типичные ошибки ===== */
function Step6() {
  return (
    <>
      <UiSection title="Типичные ошибки русскоязычных">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте разберём самые частые ошибки и научимся их избегать:
        </p>

        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              1. Путаница с going to:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">
                ❌ Wrong: I am going to meet my friend at 5 p.m. (если
                договорено)
              </div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend at 5 p.m.
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              2. Использование will для договорённостей:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">
                ❌ Wrong: I will meet my friend tomorrow at 7 p.m.
              </div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend tomorrow at 7 p.m.
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">3. Пропуск -ing:</p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">❌ Wrong: I am meet my friend.</div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend.
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              4. Неправильная форма be:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">
                ❌ Wrong: She am meeting her friend.
              </div>
              <div className="text-green-600">
                ✅ Right: She is meeting her friend.
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Почему так происходит?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском «я встречаюсь завтра» не уточняет, договорённость или
              план, английский требует Present Continuous для чёткой
              договорённости.
            </li>
            <li>
              Русскоязычные забывают -ing, так как в русском нет подобной формы.
            </li>
            <li>
              Русскоязычные часто используют will для всех случаев будущего, но
              Present Continuous звучит естественнее для договорённостей.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Сравнительная таблица ошибок">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Ошибка</th>
                <th className="border border-gray-300 p-2 text-left">
                  Правильно
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Почему?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  I am going to meet at 5 p.m.
                </td>
                <td className="border border-gray-300 p-2">
                  I am meeting at 5 p.m.
                </td>
                <td className="border border-gray-300 p-2">Договорённость</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  I will meet at 7 p.m.
                </td>
                <td className="border border-gray-300 p-2">
                  I am meeting at 7 p.m.
                </td>
                <td className="border border-gray-300 p-2">Договорённость</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения часть 1 ===== */
function Step7() {
  const exercise1: FillItem[] = [
    {
      prompt: "I ______ my friend tomorrow at 5 p.m. (договорённость: meet)",
      answer: "am meeting",
      hint: "Используйте am + meeting для договорённости",
    },
    {
      prompt: "She ______ to the cinema tonight. (договорённость: go)",
      answer: "is going",
      hint: "Используйте is + going для договорённости",
    },
    {
      prompt: "We ______ dinner with friends at 7 p.m. (договорённость: have)",
      answer: "are having",
      hint: "Используйте are + having для договорённости",
    },
    {
      prompt: "They ______ football at 6 p.m. tomorrow. (договорённость: play)",
      answer: "are playing",
      hint: "Используйте are + playing",
    },
    {
      prompt: "I ______ my grandma tomorrow morning. (договорённость: visit)",
      answer: "am visiting",
      hint: "Используйте am + visiting",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I am meeting my friend tomorrow. → (отрицание)",
      right: "",
      answers: [
        "I am not meeting my friend tomorrow",
        "I am not meeting my friend tomorrow.",
        "I'm not meeting my friend tomorrow",
        "I'm not meeting my friend tomorrow.",
      ],
      explanation: "Ответ: I am not meeting my friend tomorrow.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. She is going to the cinema tonight. → (отрицание)",
      right: "",
      answers: [
        "She is not going to the cinema tonight",
        "She is not going to the cinema tonight.",
        "She isn't going to the cinema tonight",
        "She isn't going to the cinema tonight.",
      ],
      explanation: "Ответ: She is not going to the cinema tonight.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. We are having dinner at 7 p.m. → (отрицание)",
      right: "",
      answers: [
        "We are not having dinner at 7 p.m",
        "We are not having dinner at 7 p.m.",
        "We aren't having dinner at 7 p.m",
        "We aren't having dinner at 7 p.m.",
      ],
      explanation: "Ответ: We are not having dinner at 7 p.m.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Упражнение 1: Заполните пропуски">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Используйте Present Continuous для выражения договорённостей.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Заполните пропуски правильной формой"
        instruction="Используйте am/is/are + глагол с -ing"
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise2}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Утверждение:</strong> I am meeting my friend.
            </li>
            <li>
              <strong>Отрицание:</strong> I am not meeting my friend.
            </li>
            <li>
              <strong>Важно:</strong> Не забывайте -ing!
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения часть 2 ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. I am meeting my friend tomorrow. → (вопрос)",
      right: "",
      answers: [
        "Am I meeting my friend tomorrow",
        "Am I meeting my friend tomorrow?",
      ],
      explanation: "Ответ: Am I meeting my friend tomorrow?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. She is going to the cinema tonight. → (вопрос)",
      right: "",
      answers: [
        "Is she going to the cinema tonight",
        "Is she going to the cinema tonight?",
      ],
      explanation: "Ответ: Is she going to the cinema tonight?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. We are having dinner at 7 p.m. → (вопрос)",
      right: "",
      answers: [
        "Are we having dinner at 7 p.m",
        "Are we having dinner at 7 p.m.?",
        "Are we having dinner at 7 p.m?",
      ],
      explanation: "Ответ: Are we having dinner at 7 p.m.?",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. Я встречаюсь с другом завтра в 6 вечера. →",
      right: "",
      answers: [
        "I am meeting my friend tomorrow at 6 p.m",
        "I am meeting my friend tomorrow at 6 p.m.",
        "I'm meeting my friend tomorrow at 6 p.m",
        "I'm meeting my friend tomorrow at 6 p.m.",
      ],
      explanation: "Ответ: I am meeting my friend tomorrow at 6 p.m.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Она идёт в кино сегодня вечером. →",
      right: "",
      answers: [
        "She is going to the cinema tonight",
        "She is going to the cinema tonight.",
      ],
      explanation: "Ответ: She is going to the cinema tonight.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Мы ужинаем с друзьями в субботу. →",
      right: "",
      answers: [
        "We are having dinner with friends on Saturday",
        "We are having dinner with friends on Saturday.",
      ],
      explanation: "Ответ: We are having dinner with friends on Saturday.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. ❌ I am meet my friend tomorrow. →",
      right: "",
      answers: [
        "I am meeting my friend tomorrow",
        "I am meeting my friend tomorrow.",
      ],
      explanation: "Исправление: I am meeting my friend tomorrow. (нужно -ing)",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She will go to the cinema tonight. (договорённость) →",
      right: "",
      answers: [
        "She is going to the cinema tonight",
        "She is going to the cinema tonight.",
      ],
      explanation:
        "Исправление: She is going to the cinema tonight. (договорённость)",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ We is having dinner at 7 p.m. →",
      right: "",
      answers: [
        "We are having dinner at 7 p.m",
        "We are having dinner at 7 p.m.",
      ],
      explanation: "Исправление: We are having dinner at 7 p.m. (are для we)",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="📝 Упражнение 1: Задайте вопросы"
        instruction="Переделайте утверждения в вопросительные предложения."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Переведите на английский"
        instruction="Переведите предложения с русского на английский."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в предложениях."
        items={exercise3}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Вопросы:</strong> Am/Is/Are + подлежащее + глагол с -ing?
            </li>
            <li>
              <strong>Перевод:</strong> Обращайте внимание на договорённости с
              временем!
            </li>
            <li>
              <strong>Важно:</strong> Не забывайте добавлять -ing к глаголу!
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Домашнее задание ===== */
function Step9() {
  return (
    <>
      <UiSection title="📚 Домашнее задание: Выучите лексику">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Задание: Выучите 20 слов из списка на странице 2.
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold text-indigo-900 mb-3">
            Как выполнять задание:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-sm">
            <li>
              <strong>Повторение:</strong> Прочитайте каждое слово вслух 3 раза
              (meeting [ˈmiːtɪŋ], tomorrow [təˈmɒroʊ]). Используйте аудио на
              сайте.
            </li>
            <li>
              <strong>Карточки:</strong> Напишите слова на карточках (английское
              слово + перевод + пример). Проверяйте себя.
            </li>
            <li>
              <strong>Предложения:</strong> Составьте 10 предложений:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>4 утвердительных: I am meeting my friend tomorrow.</li>
                <li>3 отрицательных: I am not going to the cinema.</li>
                <li>3 вопроса: Are you having dinner at 7 p.m.?</li>
              </ul>
            </li>
            <li>
              <strong>Диалог:</strong> Напишите диалог (5-6 реплик) с минимум 5
              словами из списка.
            </li>
          </ol>
        </div>

        <div className="bg-green-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold text-green-900 mb-2">Пример диалога:</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>A:</strong> Are you meeting your friend tomorrow?
            </p>
            <p>
              <strong>B:</strong> Yes, I am meeting Anna at 5 p.m.
            </p>
            <p>
              <strong>A:</strong> Are you going to the cinema?
            </p>
            <p>
              <strong>B:</strong> No, I'm not going to the cinema.
            </p>
          </div>
        </div>

        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="font-semibold text-amber-900 mb-2">Советы:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите свои планы на завтра).
            </li>
            <li>Проверяйте произношение (is [ɪz], meeting [ˈmiːtɪŋ]).</li>
            <li>Повторяйте слова каждый день по 10-15 минут.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="✍️ Задание для самопроверки">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="font-semibold mb-3">
            Опишите свои планы на эту неделю:
          </p>
          <p className="text-sm text-zinc-700 mb-3">
            Напишите 5-7 предложений о своих договорённостях на эту неделю.
            Используйте Present Continuous и слова из списка.
          </p>
          <div className="bg-gray-50 rounded p-3">
            <p className="text-sm text-zinc-600 italic">
              Пример: I am meeting my friend on Monday at 6 p.m. We are going to
              the cinema on Saturday night. I am visiting my grandma on
              Sunday...
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и задания ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const matchingItems: FillItem[] = [
    {
      left: "1. Договорённость о встрече с другом",
      right: "",
      answers: ["B", "b"],
      explanation:
        "Ответ: B — I am meeting my best friend Anna at 3 p.m. in the park.",
      ariaLabel: "Сопоставление 1",
      wide: true,
    },
    {
      left: "2. План игры в теннис",
      right: "",
      answers: ["E", "e"],
      explanation: "Ответ: E — We are playing tennis together.",
      ariaLabel: "Сопоставление 2",
      wide: true,
    },
    {
      left: "3. План посещения бабушки",
      right: "",
      answers: ["F", "f"],
      explanation: "Ответ: F — I am visiting my grandma in the morning.",
      ariaLabel: "Сопоставление 3",
      wide: true,
    },
    {
      left: "4. План ужина",
      right: "",
      answers: ["A", "a"],
      explanation: "Ответ: A — She is cooking dinner for us at 6 p.m.",
      ariaLabel: "Сопоставление 4",
      wide: true,
    },
    {
      left: "5. Отрицание о походе брата в кино",
      right: "",
      answers: ["C", "c"],
      explanation: "Ответ: C — My brother is not going to the cinema with us.",
      ariaLabel: "Сопоставление 5",
      wide: true,
    },
    {
      left: "6. Отрицание о вечеринке",
      right: "",
      answers: ["D", "d"],
      explanation: "Ответ: D — No, we aren't.",
      ariaLabel: "Сопоставление 6",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📖 Текст для чтения: My Weekend Plans">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed mb-3">
            This weekend is going to be busy. On Saturday, I am meeting my best
            friend Anna at 3 p.m. in the park. We are playing tennis together.
            On Sunday, I am visiting my grandma in the morning. She is cooking
            dinner for us at 6 p.m. My brother is not going to the cinema with
            us because he is working on Sunday. Are we having a party? No, we
            aren't, but we are watching a film at home in the evening.
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
              Эти выходные будут насыщенными. В субботу я встречаюсь с лучшей
              подругой Анной в 3 часа дня в парке. Мы играем в теннис вместе. В
              воскресенье я навещаю бабушку утром. Она готовит ужин для нас в 6
              вечера. Мой брат не идёт в кино с нами, потому что он работает в
              воскресенье. Устраиваем ли мы вечеринку? Нет, не устраиваем, но мы
              смотрим фильм дома вечером.
            </p>
          </div>
        )}
      </UiSection>

      <UiSection title="📝 Варианты для сопоставления">
        <div className="bg-white rounded-lg border p-4 mb-4">
          <p className="text-sm font-semibold mb-2">
            Сопоставьте утверждения с частями текста:
          </p>
          <ul className="list-none space-y-1 text-sm">
            <li>
              <strong>A.</strong> She is cooking dinner for us at 6 p.m.
            </li>
            <li>
              <strong>B.</strong> I am meeting my best friend Anna at 3 p.m. in
              the park.
            </li>
            <li>
              <strong>C.</strong> My brother is not going to the cinema with us.
            </li>
            <li>
              <strong>D.</strong> No, we aren't.
            </li>
            <li>
              <strong>E.</strong> We are playing tennis together.
            </li>
            <li>
              <strong>F.</strong> I am visiting my grandma in the morning.
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Задание: Сопоставьте утверждения"
        instruction="Введите букву (A, B, C, D, E или F), соответствующую каждому утверждению."
        items={matchingItems}
      />

      <UiSection title="💡 Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Подчеркните am/is/are и -ing в тексте для поиска ответов.</li>
            <li>Обратите внимание на временные слова (tomorrow, at 3 p.m.).</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <p className="text-zinc-700 leading-relaxed mb-4">
            Вы завершили тему{" "}
            <strong>Present Continuous для будущих договорённостей</strong>!
            Теперь вы знаете:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Как говорить о договорённостях с конкретным временем</li>
            <li>Разницу между Present Continuous, Going to и Future Simple</li>
            <li>Как строить утверждения, вопросы и отрицания</li>
            <li>Типичные ошибки русскоязычных и как их избегать</li>
          </ul>
          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-indigo-900 font-semibold mb-2">
              Продолжайте практиковаться!
            </p>
            <p className="text-sm">
              Используйте Present Continuous, когда рассказываете о своих планах
              с точным временем или договорённостях с другими людьми.
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
