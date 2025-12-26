"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FutureSimpleOffers({ step }: Props) {
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
      <UiSection title="Что такое Future Simple для предложений и желаний?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Future Simple (will + глагол) используется для выражения:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              Предложения (offers):
            </p>
            <p className="text-sm text-zinc-700">
              Спонтанных предложений помочь в момент речи →{" "}
              <strong>I will help you.</strong> (Я помогу тебе.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">
              Желания (wants):
            </p>
            <p className="text-sm text-zinc-700">
              Желаний или намерений, выраженных в момент речи →{" "}
              <strong>I will be happy.</strong> (Я хочу быть счастливым.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает предлагать помощь в разговоре: I will carry your bag. (Я
            понесу твою сумку.)
          </li>
          <li>
            Учит выражать желания: I will live in London. (Я хочу жить в
            Лондоне.)
          </li>
          <li>
            Закрепляет использование will в спонтанных ситуациях, отличая от
            going to и Present Continuous.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">
            Формула: Подлежащее + will + глагол (начальная форма)
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Предложения: I will help you.</li>
            <li>Желания: I will be rich.</li>
          </ul>
        </div>

        <div className="bg-sky-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Формы:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Отрицания:</strong> won't (will not) + глагол (I won't
              go.)
            </li>
            <li>
              <strong>Вопросы:</strong> Will + подлежащее + глагол (Will you
              help me?)
            </li>
          </ul>
        </div>

        <div className="bg-rose-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Произношение и интонация:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Will [wɪl] — короткий звук, ударение на глаголе (I will HELP)
            </li>
            <li>Won't [woʊnt] — звучит как «воунт»</li>
            <li>
              Интонация: Утверждения — ровная, предложения — лёгкий подъём,
              вопросы — восходящая (↑)
            </li>
          </ul>
        </div>

        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Временные слова:</p>
          <p className="text-sm text-zinc-700">
            now, today, tomorrow (но часто без времени, так как спонтанно)
          </p>
        </div>
      </UiSection>

      <UiSection title="Отличия от других времён">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              Will для предложений/желаний:
            </p>
            <p className="text-sm text-zinc-700">Спонтанно → I will help you</p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">Going to:</p>
            <p className="text-sm text-zinc-700">
              Планы → I am going to help my friend tomorrow
            </p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              Present Continuous:
            </p>
            <p className="text-sm text-zinc-700">
              Договорённости → I am helping Anna at 5 p.m.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для понимания">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Предложение:</strong> I will open the door. (Я открою
              дверь.) — Спонтанное предложение.
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Желание:</strong> I will travel the world. (Я хочу
              путешествовать по миру.) — Желание.
            </p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>План (не will):</strong> I am going to travel next month.
              (Я собираюсь путешествовать в следующем месяце.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском «я помогу» может быть и спонтанным предложением, и
              планом; в английском will подчёркивает спонтанность, а going to —
              план.
            </li>
            <li>
              Русскоязычные часто используют will для всех случаев будущего (I
              will meet my friend вместо I am meeting my friend для
              договорённости).
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
      <UiSection title="Лексика для предложений и желаний">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вот список из <strong>20 ключевых слов</strong> для уровня A1-A2:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Help</strong> [hɛlp] — Помогать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Carry</strong> [ˈkæri] — Нести
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Open</strong> [ˈoʊpən] — Открывать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Call</strong> [kɔːl] — Звонить
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Buy</strong> [baɪ] — Покупать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Be</strong> [biː] — Быть
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Travel</strong> [ˈtrævəl] — Путешествовать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Live</strong> [lɪv] — Жить
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Work</strong> [wɜːrk] — Работать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Learn</strong> [lɜːrn] — Учиться
            </p>
          </div>

          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Now</strong> [naʊ] — Сейчас
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Today</strong> [təˈdeɪ] — Сегодня
            </p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Door</strong> [dɔːr] — Дверь
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Bag</strong> [bæɡ] — Сумка
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Friend</strong> [frend] — Друг
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Shop</strong> [ʃɑːp] — Магазин
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Money</strong> [ˈmʌni] — Деньги
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>World</strong> [wɜːrld] — Мир
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Happy</strong> [ˈhæpi] — Счастливый
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Предложение:</strong> I will carry your bag. (Я понесу
              твою сумку.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>Желание:</strong> I will be happy. (Я хочу быть
              счастливым.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Повторяйте с аудио (will [wɪl], carry [ˈkæri]).</li>
          <li>
            Составляйте предложения: I will open the door. / I will travel the
            world.
          </li>
          <li>Карточки: слово + перевод + пример с will.</li>
        </ul>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Will для предложений ===== */
function Step3() {
  return (
    <>
      <UiSection title="Future Simple для предложений (offers)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Future Simple используется для{" "}
          <strong>спонтанных предложений помочь</strong> в момент речи, без
          предварительного плана.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              I will help you.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я помогу тебе.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> Спонтанное предложение (I + will +
              help).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              I will carry your bag.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я понесу твою сумку.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> Реакция на ситуацию (I + will +
              carry).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              I will open the door.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я открою дверь.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> Спонтанное действие.
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
              <strong>Спонтанность:</strong> Предложение делается в момент речи
              (Your bag is heavy. I will carry it.).
            </li>
            <li>
              <strong>Произношение:</strong> Will [wɪl], акцент на глаголе (I
              will HELP).
            </li>
            <li>
              <strong>Интонация:</strong> Лёгкий подъём, чтобы звучать
              дружелюбно.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            It's cold. I will close the window. (Холодно. Я закрою окно.) — Дом.
          </li>
          <li>I will buy you a coffee. (Я куплю тебе кофе.) — Кафе.</li>
          <li>I will call a taxi. (Я вызову такси.) — Улица.</li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ НЕ для планов: I will help my friend tomorrow.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I am going to help my friend tomorrow.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ НЕ для договорённостей: I will meet you at 5 p.m.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I am meeting you at 5 p.m.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русский «я помогу» не уточняет спонтанность, английский will
            подчёркивает моментальное решение.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Will для желаний ===== */
function Step4() {
  return (
    <>
      <UiSection title="Future Simple для желаний (wants)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Future Simple используется для выражения <strong>желаний</strong> или
          намерений, которые человек хочет осуществить в будущем, часто
          спонтанно.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-1">
              I will be happy.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я хочу быть счастливым.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> Желание (I + will + be).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-1">
              I will travel the world.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я хочу путешествовать по миру.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Почему так:</strong> Намерение.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-1">
              I will live in London.
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Перевод:</strong> Я хочу жить в Лондоне.
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
              <strong>Желания:</strong> Выражают мечты или намерения (I want to
              be rich. I will be rich.).
            </li>
            <li>
              <strong>Произношение:</strong> Will [wɪl], акцент на желании (I
              will TRAVEL).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>I will learn English. (Я хочу выучить английский.) — Учёба.</li>
          <li>I will be rich. (Я хочу быть богатым.) — Мечта.</li>
          <li>I will visit Paris. (Я хочу посетить Париж.) — Путешествия.</li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ НЕ для конкретных планов: I will study tomorrow.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I am going to study tomorrow.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ НЕ для договорённостей: I will meet Anna at 5 p.m.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I am meeting Anna at 5 p.m.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русский «я хочу путешествовать» = I will travel, но русскоязычные
            могут использовать will для планов (I will go tomorrow).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Сравнение ===== */
function Step5() {
  return (
    <>
      <UiSection title="Сравнение с Going to и Present Continuous">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте разберём, когда использовать каждую форму:
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
                <td className="border border-gray-300 p-2">Future Simple</td>
                <td className="border border-gray-300 p-2">I will help you.</td>
                <td className="border border-gray-300 p-2">
                  Предложение/желание
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Going to</td>
                <td className="border border-gray-300 p-2">
                  I am going to study.
                </td>
                <td className="border border-gray-300 p-2">План</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Present Continuous
                </td>
                <td className="border border-gray-300 p-2">
                  I am meeting Anna.
                </td>
                <td className="border border-gray-300 p-2">Договорённость</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              Future Simple (will):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I will carry your bag. (Предложение.)</li>
              <li>I will be rich. (Желание.)</li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">Going to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I am going to buy a bag tomorrow. (План.)</li>
              <li>I am going to call my friend tomorrow. (План.)</li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-2">
              Present Continuous:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I am buying a bag at 5 p.m. (Договорённость.)</li>
              <li>I am calling my friend at 7 p.m. (Договорённость.)</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ Wrong: I will meet my friend at 5 p.m.
              </div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend at 5 p.m. (договорённость)
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am going to help you now.
              </div>
              <div className="text-green-600">
                ✅ Right: I will help you. (спонтанное предложение)
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русскоязычные путают will с going to и Present Continuous, так как в
            русском «я помогу» не различает спонтанность или план.
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
          Давайте разберём самые частые ошибки:
        </p>

        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              1. Путаница с going to:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">
                ❌ Wrong: I am going to help you now. (спонтанное предложение)
              </div>
              <div className="text-green-600">✅ Right: I will help you.</div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              2. Путаница с Present Continuous:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">
                ❌ Wrong: I will meet my friend at 5 p.m. (договорённость)
              </div>
              <div className="text-green-600">
                ✅ Right: I am meeting my friend at 5 p.m.
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">3. Пропуск will:</p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">❌ Wrong: I help you.</div>
              <div className="text-green-600">✅ Right: I will help you.</div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              4. Неправильное won't:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">
                ❌ Wrong: I will not help you. (формально в разговоре)
              </div>
              <div className="text-green-600">
                ✅ Right: I won't help you. (разговорно)
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Почему так происходит?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Русский «я помогу» не уточняет, спонтанное это предложение или
              план, английский требует will для спонтанности.
            </li>
            <li>
              Русскоязычные забывают сокращение won't и используют will not в
              разговорной речи.
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
                  I am going to help you now.
                </td>
                <td className="border border-gray-300 p-2">I will help you.</td>
                <td className="border border-gray-300 p-2">
                  Спонтанное предложение
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  I will meet at 5 p.m.
                </td>
                <td className="border border-gray-300 p-2">
                  I am meeting at 5 p.m.
                </td>
                <td className="border border-gray-300 p-2">Договорённость</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            В английском will для предложений звучит вежливо и естественно,
            тогда как going to для спонтанных предложений звучит неуместно.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения часть 1 ===== */
function Step7() {
  const exercise1: FillItem[] = [
    {
      left: "Your bag is heavy. I",
      right: "it. (carry)",
      answers: ["will carry"],
      explanation: "Правильно: will carry. Используйте will + глагол для спонтанного предложения помощи.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "I",
      right: "rich one day. (be)",
      answers: ["will be"],
      explanation: "Правильно: will be. Используйте will + глагол для выражения желания.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "I",
      right: "you now. (call)",
      answers: ["will call"],
      explanation: "Правильно: will call. Используйте will + глагол для спонтанного предложения.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "I",
      right: "the world. (travel)",
      answers: ["will travel"],
      explanation: "Правильно: will travel. Используйте will + глагол для выражения желания.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "She",
      right: "you a coffee. (buy)",
      answers: ["will buy"],
      explanation: "Правильно: will buy. Используйте will + глагол для предложения.",
      ariaLabel: "Упражнение 5",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I will help you. → (отрицание)",
      right: "",
      answers: [
        "I won't help you",
        "I won't help you.",
        "I will not help you",
        "I will not help you.",
      ],
      explanation: "Ответ: I won't help you.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. I will be late. → (отрицание)",
      right: "",
      answers: [
        "I won't be late",
        "I won't be late.",
        "I will not be late",
        "I will not be late.",
      ],
      explanation: "Ответ: I won't be late.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. She will call you. → (отрицание)",
      right: "",
      answers: [
        "She won't call you",
        "She won't call you.",
        "She will not call you",
        "She will not call you.",
      ],
      explanation: "Ответ: She won't call you.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Упражнение 1: Заполните пропуски">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вставьте <strong>will + глагол</strong> из скобок для создания предложения помощи или желания.
        </p>
        <div className="bg-amber-50/50 rounded-lg p-3 mb-4">
          <p className="text-sm text-zinc-700">
            💡 <strong>Подсказка:</strong> Will используется для спонтанных предложений (I will help you) 
            и желаний о будущем (I will be rich).
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Заполните пропуски"
        instruction="Вставьте will + глагол из скобок (например: will carry)."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные, используя won't (will not)."
        items={exercise2}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Утверждение:</strong> I will help you.
            </li>
            <li>
              <strong>Отрицание:</strong> I won't help you.
            </li>
            <li>
              <strong>Важно:</strong> Will используется для спонтанных предложений и желаний о будущем!
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
      left: "1. I will help you. → (вопрос)",
      right: "",
      answers: ["Will I help you", "Will I help you?"],
      explanation: "Ответ: Will I help you?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I will be happy. → (вопрос)",
      right: "",
      answers: ["Will I be happy", "Will I be happy?"],
      explanation: "Ответ: Will I be happy?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. She will call you. → (вопрос)",
      right: "",
      answers: ["Will she call you", "Will she call you?"],
      explanation: "Ответ: Will she call you?",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. Я помогу тебе. (предложение) →",
      right: "",
      answers: ["I will help you", "I will help you."],
      explanation: "Ответ: I will help you.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Я хочу быть счастливым. (желание) →",
      right: "",
      answers: ["I will be happy", "I will be happy."],
      explanation: "Ответ: I will be happy.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Я открою дверь. (предложение) →",
      right: "",
      answers: ["I will open the door", "I will open the door."],
      explanation: "Ответ: I will open the door.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. ❌ I am going to help you now. (предложение) →",
      right: "",
      answers: ["I will help you", "I will help you."],
      explanation: "Исправление: I will help you. — Спонтанное предложение.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ I will meet my friend at 5 p.m. (договорённость) →",
      right: "",
      answers: [
        "I am meeting my friend at 5 p.m",
        "I am meeting my friend at 5 p.m.",
      ],
      explanation:
        "Исправление: I am meeting my friend at 5 p.m. — Договорённость.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ I will not be happy. (разговорная форма) →",
      right: "",
      answers: ["I won't be happy", "I won't be happy."],
      explanation: "Исправление: I won't be happy. — Разговорная форма.",
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
              <strong>Вопросы:</strong> Will + подлежащее + глагол?
            </li>
            <li>
              <strong>Предложения:</strong> will для спонтанных действий
            </li>
            <li>
              <strong>Важно:</strong> Не путайте will с going to и Present
              Continuous!
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
              (will [wɪl], carry [ˈkæri]). Используйте аудио на сайте.
            </li>
            <li>
              <strong>Карточки:</strong> Напишите слова на карточках (английское
              слово + перевод + пример). Проверяйте себя.
            </li>
            <li>
              <strong>Предложения:</strong> Составьте 10 предложений:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>5 для предложений: I will help you.</li>
                <li>3 для желаний: I will be happy.</li>
                <li>2 вопроса: Will you call me?</li>
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
              <strong>A:</strong> Your bag is heavy. I will carry it.
            </p>
            <p>
              <strong>B:</strong> Thanks! Will you call me later?
            </p>
            <p>
              <strong>A:</strong> Yes, I will call you.
            </p>
          </div>
        </div>

        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="font-semibold text-amber-900 mb-2">Советы:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Практикуйте в реальных ситуациях (предложите помощь другу).</li>
            <li>Проверяйте произношение (will [wɪl], won't [woʊnt]).</li>
            <li>Повторяйте слова каждый день по 10-15 минут.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="✍️ Задание для самопроверки">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="font-semibold mb-3">
            Опишите свои предложения и желания:
          </p>
          <p className="text-sm text-zinc-700 mb-3">
            Напишите 5-7 предложений о том, что вы хотите предложить кому-то и
            ваших желаниях. Используйте will и слова из списка.
          </p>
          <div className="bg-gray-50 rounded p-3">
            <p className="text-sm text-zinc-600 italic">
              Пример: I will help my friend with homework. I will carry my
              sister's bag. I will be happy. I will travel the world...
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
      left: "1. Предложение помочь с сумкой",
      right: "",
      answers: ["B", "b"],
      explanation: "Ответ: B — I will help her and carry it.",
      ariaLabel: "Сопоставление 1",
      wide: true,
    },
    {
      left: "2. Желание быть добрым",
      right: "",
      answers: ["F", "f"],
      explanation: "Ответ: F — I want to be kind.",
      ariaLabel: "Сопоставление 2",
      wide: true,
    },
    {
      left: "3. Предложение купить кофе",
      right: "",
      answers: ["A", "a"],
      explanation: "Ответ: A — I will buy her a coffee.",
      ariaLabel: "Сопоставление 3",
      wide: true,
    },
    {
      left: "4. Желание Анны быть счастливой",
      right: "",
      answers: ["D", "d"],
      explanation: "Ответ: D — Anna will be happy.",
      ariaLabel: "Сопоставление 4",
      wide: true,
    },
    {
      left: "5. Отрицание о встрече завтра",
      right: "",
      answers: ["C", "c"],
      explanation: "Ответ: C — We are not meeting tomorrow.",
      ariaLabel: "Сопоставление 5",
      wide: true,
    },
    {
      left: "6. Подтверждение о звонке",
      right: "",
      answers: ["E", "e"],
      explanation: "Ответ: E — Yes, I will.",
      ariaLabel: "Сопоставление 6",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📖 Текст для чтения: A Day at the Shop">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            It's a busy day. My friend Anna is carrying a heavy bag. I will help
            her and carry it. I want to be kind, so I will buy her a coffee.
            Anna will be happy. We are not meeting tomorrow because she is
            working. Will I call her later? Yes, I will.
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
              Это насыщенный день. Моя подруга Анна несёт тяжёлую сумку. Я
              помогу ей и понесу её. Я хочу быть добрым, поэтому куплю ей кофе.
              Анна будет счастлива. Мы не встречаемся завтра, потому что она
              работает. Позвоню ли я ей позже? Да, позвоню.
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
              <strong>A.</strong> I will buy her a coffee.
            </li>
            <li>
              <strong>B.</strong> I will help her and carry it.
            </li>
            <li>
              <strong>C.</strong> We are not meeting tomorrow.
            </li>
            <li>
              <strong>D.</strong> Anna will be happy.
            </li>
            <li>
              <strong>E.</strong> Yes, I will.
            </li>
            <li>
              <strong>F.</strong> I want to be kind.
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
            <li>Подчеркните will и won't в тексте для поиска ответов.</li>
            <li>
              Обратите внимание на спонтанность (I will help — моментальное
              решение).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <p className="text-zinc-700 leading-relaxed mb-4">
            Вы завершили тему{" "}
            <strong>Future Simple для предложений и желаний</strong>! Теперь вы
            знаете:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Как предлагать помощь спонтанно, используя will</li>
            <li>Как выражать желания и намерения</li>
            <li>
              Разницу между will (предложения/желания), going to (планы) и
              Present Continuous (договорённости)
            </li>
            <li>Типичные ошибки русскоязычных и как их избегать</li>
          </ul>
          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-indigo-900 font-semibold mb-2">
              Продолжайте практиковаться!
            </p>
            <p className="text-sm">
              Используйте will, когда хотите спонтанно предложить помощь или
              выразить свои желания. Это звучит естественно и вежливо!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
