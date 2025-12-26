"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentPerfectVsPast({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в оба времени ===== */
function Step1() {
  return (
    <>
      <UiSection title="Present Perfect vs Past Simple">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-zinc-900 mb-4">
            Почему эти времена часто путают?
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Оба времени описывают действия, которые произошли в прошлом. Но есть
            ключевое различие: <strong>Past Simple</strong> говорит о
            завершённом действии в определённый момент прошлого, а{" "}
            <strong>Present Perfect</strong> создаёт связь между прошлым и
            настоящим.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            В этом уроке мы детально разберём оба времени и научимся различать
            их в любом контексте.
          </p>
        </div>
      </UiSection>

      <UiSection title="Краткий обзор обоих времён">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Present Perfect
                </h3>
                <p className="text-sm text-zinc-600">Прошлое → Настоящее</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="font-semibold text-blue-900 mb-2">Формула:</p>
              <p className="text-lg font-mono text-blue-700">have/has + V3</p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  I have visited London.
                </p>
                <p className="text-xs text-zinc-600">
                  Я был в Лондоне (опыт в жизни, неважно когда).
                </p>
              </div>

              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  She has lost her keys.
                </p>
                <p className="text-xs text-zinc-600">
                  Она потеряла ключи (результат важен сейчас).
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-zinc-50 rounded-lg">
              <p className="text-xs font-semibold text-zinc-900 mb-2">
                Когда использовать:
              </p>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• Результат виден сейчас</li>
                <li>• Опыт в жизни</li>
                <li>• НЕ указываем точное время</li>
                <li>• Связь с настоящим</li>
              </ul>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">📅</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Past Simple</h3>
                <p className="text-sm text-zinc-600">Завершённое прошлое</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <p className="font-semibold text-green-900 mb-2">Формула:</p>
              <p className="text-lg font-mono text-green-700">V2 (V-ed)</p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  I visited London last year.
                </p>
                <p className="text-xs text-zinc-600">
                  Я был в Лондоне в прошлом году (точное время).
                </p>
              </div>

              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  She lost her keys yesterday.
                </p>
                <p className="text-xs text-zinc-600">
                  Она потеряла ключи вчера (конкретный момент).
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-zinc-50 rounded-lg">
              <p className="text-xs font-semibold text-zinc-900 mb-2">
                Когда использовать:
              </p>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• Завершённое действие в прошлом</li>
                <li>• С точным временем</li>
                <li>• Последовательность событий</li>
                <li>• НЕТ связи с настоящим</li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Главное различие">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <p className="font-semibold text-amber-900 mb-3">
                Ключевое правило:
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-blue-700 mb-1">
                    Present Perfect
                  </p>
                  <p className="text-sm text-zinc-700">
                    Фокус на <strong>результате</strong> или{" "}
                    <strong>опыте</strong>. <strong>НЕ</strong> используется с
                    точным временем (yesterday, last week, in 2020).
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    Past Simple
                  </p>
                  <p className="text-sm text-zinc-700">
                    Фокус на <strong>факте в прошлом</strong>. Часто
                    используется с точным временем. Действие завершено и не
                    связано с настоящим.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Временная шкала">
        <div className="bg-zinc-100 rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-blue-900 mb-3">
                Present Perfect:
              </p>
              <div className="flex items-center gap-2">
                <div className="w-24 h-12 bg-zinc-300 rounded flex items-center justify-center text-xs">
                  ПРОШЛОЕ
                </div>
                <div className="flex-1 h-2 bg-blue-400 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-24 h-12 bg-blue-500 rounded flex items-center justify-center text-xs text-white font-bold">
                  СЕЙЧАС ✓
                </div>
              </div>
              <p className="text-xs text-zinc-600 mt-2">
                Действие в прошлом → связь → результат/значение сейчас
              </p>
            </div>

            <div>
              <p className="font-semibold text-green-900 mb-3">Past Simple:</p>
              <div className="flex items-center gap-2">
                <div className="w-24 h-12 bg-green-300 rounded flex items-center justify-center text-xs relative">
                  <span className="absolute -top-6 text-xs text-green-700">
                    yesterday
                  </span>
                  ПРОШЛОЕ ✓
                </div>
                <div className="flex-1 h-2 bg-zinc-300"></div>
                <div className="w-24 h-12 bg-zinc-200 rounded flex items-center justify-center text-xs">
                  СЕЙЧАС
                </div>
              </div>
              <p className="text-xs text-zinc-600 mt-2">
                Действие завершено в прошлом, нет связи с настоящим
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Past Simple — детальный разбор ===== */
function Step2() {
  return (
    <>
      <UiSection title="Past Simple: Полный разбор">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">
            Что такое Past Simple?
          </h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Past Simple (простое прошедшее время) — это время, которое описывает{" "}
            <strong>завершённые действия в прошлом</strong>. Мы используем его,
            когда говорим о том, что произошло и закончилось в определённый
            момент прошлого.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Главная идея: действие <strong>полностью завершено</strong>, мы
            часто знаем <strong>КОГДА</strong> это произошло, и это{" "}
            <strong>НЕ связано</strong> с настоящим моментом.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формула Past Simple">
        <div className="border border-green-200 rounded-lg p-6 mb-6">
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-center text-2xl font-mono font-bold text-green-900 mb-2">
              V2 (вторая форма глагола)
            </p>
            <p className="text-center text-sm text-zinc-600">
              правильные: V + ed | неправильные: см. таблицу
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">
                Утвердительная форма:
              </h4>
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <p className="font-mono text-green-900 mb-2">Подлежащее + V2</p>
                <div className="space-y-1 text-sm">
                  <p>
                    I/You/He/She/It/We/They <strong>worked</strong>
                  </p>
                  <p>
                    I/You/He/She/It/We/They <strong>went</strong>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">
                Отрицательная форма:
              </h4>
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <p className="font-mono text-green-900 mb-2">
                  Подлежащее + did not (didn&apos;t) + V1
                </p>
                <div className="space-y-1 text-sm">
                  <p>
                    I <strong>didn&apos;t work</strong>
                  </p>
                  <p>
                    She <strong>didn&apos;t go</strong>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">
                Вопросительная форма:
              </h4>
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <p className="font-mono text-green-900 mb-2">
                  Did + подлежащее + V1?
                </p>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Did</strong> you <strong>work</strong>?
                  </p>
                  <p>
                    <strong>Did</strong> she <strong>go</strong>?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правильные и неправильные глаголы">
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">✓</span>
              <h4 className="text-lg font-bold text-blue-900">
                Правильные глаголы (Regular Verbs)
              </h4>
            </div>
            <p className="text-sm text-zinc-700 mb-3">
              Добавляем окончание <strong>-ed</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">work → worked</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">play → played</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">watch → watched</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">finish → finished</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">live → lived</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">study → studied</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">stop → stopped</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">travel → travelled</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">!</span>
              <h4 className="text-lg font-bold text-red-900">
                Неправильные глаголы (Irregular Verbs)
              </h4>
            </div>
            <p className="text-sm text-zinc-700 mb-3">
              Имеют особую форму, которую нужно <strong>запомнить</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  go → <strong>went</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  come → <strong>came</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  see → <strong>saw</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  make → <strong>made</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  take → <strong>took</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  get → <strong>got</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  have → <strong>had</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  do → <strong>did</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  say → <strong>said</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  buy → <strong>bought</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  write → <strong>wrote</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  read → <strong>read</strong> [red]
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда использовать Past Simple">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-green-700">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Завершённое действие в определённый момент прошлого
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Мы знаем КОГДА это произошло
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I visited Paris last summer.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я был в Париже прошлым летом (конкретное время).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-green-700">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Последовательность действий в прошлом
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Рассказываем историю: что произошло сначала, потом...
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I woke up, had breakfast, and went to work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Последовательность: проснулся → позавтракал → пошёл на
                    работу.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-green-700">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Привычки и повторяющиеся действия в прошлом
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  То, что мы делали регулярно, но сейчас не делаем
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    When I was a child, I played football every day.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Когда я был ребёнком, я играл в футбол каждый день (но
                    сейчас нет).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-green-700">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Завершённый период времени
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Период в прошлом, который уже закончился
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I lived in London for 5 years. (Now I live elsewhere)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я жил в Лондоне 5 лет (но сейчас живу в другом месте).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Present Perfect — детальный разбор ===== */
function Step3() {
  return (
    <>
      <UiSection title="Present Perfect: Полный разбор">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">
            Что такое Present Perfect?
          </h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Present Perfect (настоящее совершённое время) — это время, которое
            создаёт <strong>мост между прошлым и настоящим</strong>. Действие
            произошло в прошлом, но его <strong>результат или значение</strong>{" "}
            важны СЕЙЧАС.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Главная идея: мы <strong>НЕ указываем точное время</strong> действия
            (нельзя сказать &quot;I have seen him yesterday&quot;). Важен сам
            факт или результат, а не момент, когда это произошло.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формула Present Perfect">
        <div className="border border-blue-200 rounded-lg p-6 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-center text-2xl font-mono font-bold text-blue-900 mb-2">
              HAVE / HAS + V3
            </p>
            <p className="text-center text-sm text-zinc-600">
              вспомогательный глагол + третья форма глагола
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">
                Утвердительная форма:
              </h4>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-zinc-600 mb-1">I/You/We/They:</p>
                    <p className="text-sm">
                      I <strong>have worked</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-1">He/She/It:</p>
                    <p className="text-sm">
                      She <strong>has worked</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">
                Отрицательная форма:
              </h4>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <div className="space-y-1 text-sm">
                  <p>
                    I <strong>have not (haven&apos;t)</strong> worked
                  </p>
                  <p>
                    She <strong>has not (hasn&apos;t)</strong> worked
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 mb-3">
                Вопросительная форма:
              </h4>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Have</strong> you worked?
                  </p>
                  <p>
                    <strong>Has</strong> she worked?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда использовать Present Perfect">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Результат действия виден сейчас
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Действие завершено, и его последствия важны в настоящем
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I have lost my keys. (I can&apos;t open the door now)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я потерял ключи → СЕЙЧАС не могу открыть дверь.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Опыт в жизни (неважно когда)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  &quot;Я делал это в своей жизни&quot; — когда именно, неважно
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    Have you ever been to Japan?
                  </p>
                  <p className="text-xs text-zinc-600">
                    Ты когда-нибудь был в Японии? (в жизни, без указания
                    времени).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Действия в незавершённый период
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  today, this week, this year — период ещё продолжается
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I have seen him twice today.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я видел его два раза сегодня (день ещё не закончился).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Длительность до настоящего момента (for/since)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Действие началось в прошлом и продолжается до сих пор
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I have lived here for 10 years. (I still live here)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я живу здесь 10 лет (и всё ещё живу).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Новости и недавние события
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Только что случилось, информация свежая
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    The President has arrived in London.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Президент прибыл в Лондон (новость, только что).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
        <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
          <span>⚠️</span>
          <span>ВАЖНО: Present Perfect НЕ используется с:</span>
        </h4>
        <div className="space-y-2">
          <div className="bg-white rounded p-3">
            <p className="text-sm font-semibold text-red-700 mb-1">
              ❌ yesterday, last week, last year, ago, in 2020
            </p>
            <p className="text-xs text-zinc-600">
              Эти слова указывают на точное время в прошлом → используем Past
              Simple
            </p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="text-sm font-semibold text-red-700 mb-1">
              ❌ When did you...?
            </p>
            <p className="text-xs text-zinc-600">
              Вопрос &quot;Когда?&quot; требует точного времени → Past Simple
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Ключевые различия ===== */
function Step4() {
  return (
    <>
      <UiSection title="Ключевые различия: Present Perfect vs Past Simple">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Понимание этих различий критически важно. Давайте разберём по
            каждому аспекту, чтобы вы никогда их не путали.
          </p>
        </div>
      </UiSection>

      <UiSection title="1. Связь с настоящим">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Present Perfect</h4>
            <p className="text-sm text-zinc-700 mb-4">
              Действие в прошлом <strong>связано</strong> с настоящим
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  I have broken my leg.
                </p>
                <p className="text-xs text-zinc-600">
                  Я сломал ногу → она всё ещё сломана СЕЙЧАС
                </p>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  She has gone to Paris.
                </p>
                <p className="text-xs text-zinc-600">
                  Она уехала в Париж → она там СЕЙЧАС (её здесь нет)
                </p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">Past Simple</h4>
            <p className="text-sm text-zinc-700 mb-4">
              Действие в прошлом <strong>НЕ связано</strong> с настоящим
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  I broke my leg last year.
                </p>
                <p className="text-xs text-zinc-600">
                  Я сломал ногу в прошлом году → сейчас она зажила
                </p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  She went to Paris yesterday.
                </p>
                <p className="text-xs text-zinc-600">
                  Она поехала в Париж вчера → возможно, уже вернулась
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Указание времени">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Present Perfect</h4>
            <p className="text-sm text-zinc-700 mb-4">
              <strong>НЕТ</strong> точного времени
            </p>
            <div className="space-y-2">
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm">
                  ✓ I have visited London. <br />
                  <span className="text-xs text-zinc-600">
                    (когда — неизвестно и неважно)
                  </span>
                </p>
              </div>
              <div className="bg-red-50 rounded p-3">
                <p className="text-sm text-red-700">
                  ❌ I have visited London yesterday.
                  <br />
                  <span className="text-xs text-red-600">
                    (НЕЛЬЗЯ с yesterday!)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">Past Simple</h4>
            <p className="text-sm text-zinc-700 mb-4">
              Часто <strong>ЕСТЬ</strong> точное время
            </p>
            <div className="space-y-2">
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm">
                  ✓ I visited London last year.
                  <br />
                  <span className="text-xs text-zinc-600">
                    (точное время указано)
                  </span>
                </p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm">
                  ✓ I visited London in 2020.
                  <br />
                  <span className="text-xs text-zinc-600">
                    (конкретный год)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="3. Период времени">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-4">
              Незавершённый vs Завершённый период
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-blue-700 mb-2">
                  Present Perfect (период продолжается):
                </p>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-sm">
                      I have seen him <strong>today</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      (день ещё не закончился)
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-sm">
                      She has called me <strong>this week</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">(неделя ещё идёт)</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-green-700 mb-2">
                  Past Simple (период закончился):
                </p>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded p-2">
                    <p className="text-sm">
                      I saw him <strong>yesterday</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">(вчера уже прошло)</p>
                  </div>
                  <div className="bg-green-50 rounded p-2">
                    <p className="text-sm">
                      She called me <strong>last week</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      (прошлая неделя закончилась)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="4. Вопрос When?">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <p className="font-semibold text-amber-900 mb-3">
                Важное правило!
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    ✓ When did you see him?
                  </p>
                  <p className="text-xs text-zinc-600">
                    Вопрос &quot;Когда?&quot; → Past Simple (требуется точное
                    время)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm font-semibold text-red-700 mb-1">
                    ❌ When have you seen him?
                  </p>
                  <p className="text-xs text-zinc-600">
                    НЕПРАВИЛЬНО! Present Perfect не используется с
                    &quot;When?&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнительная таблица">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 p-3 text-left">Аспект</th>
                <th className="border border-zinc-300 p-3 text-left">
                  Present Perfect
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  Past Simple
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Формула</strong>
                </td>
                <td className="border border-zinc-300 p-3">have/has + V3</td>
                <td className="border border-zinc-300 p-3">V2 (V-ed)</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Связь с настоящим</strong>
                </td>
                <td className="border border-zinc-300 p-3">Есть связь</td>
                <td className="border border-zinc-300 p-3">Нет связи</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Точное время</strong>
                </td>
                <td className="border border-zinc-300 p-3">НЕ указываем</td>
                <td className="border border-zinc-300 p-3">Часто указываем</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Период</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Незавершённый (today, this week)
                </td>
                <td className="border border-zinc-300 p-3">
                  Завершённый (yesterday, last week)
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>When?</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  ❌ НЕ используется
                </td>
                <td className="border border-zinc-300 p-3">✓ Используется</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Пример</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  I have visited Paris
                </td>
                <td className="border border-zinc-300 p-3">
                  I visited Paris in 2020
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Слова-маркеры ===== */
function Step5() {
  return (
    <>
      <UiSection title="Слова-маркеры: как определить нужное время">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Определённые слова помогают понять, какое время использовать.
            Запомните эти маркеры — они значительно упростят выбор.
          </p>
        </div>
      </UiSection>

      <UiSection title="Маркеры Present Perfect">
        <div className="border border-blue-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-bold text-blue-900 mb-3">
                  Основные маркеры
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">just</p>
                    <p className="text-xs text-zinc-600">только что</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">already</p>
                    <p className="text-xs text-zinc-600">уже</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">yet</p>
                    <p className="text-xs text-zinc-600">
                      ещё (в вопросах и отрицаниях)
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">ever</p>
                    <p className="text-xs text-zinc-600">когда-либо</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">never</p>
                    <p className="text-xs text-zinc-600">никогда</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">before</p>
                    <p className="text-xs text-zinc-600">раньше</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-bold text-blue-900 mb-3">Длительность</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">for + период</p>
                    <p className="text-xs text-zinc-600">в течение</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">since + точка</p>
                    <p className="text-xs text-zinc-600">
                      с (какого-то момента)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-bold text-blue-900 mb-3">
                  Незавершённые периоды
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">today</p>
                    <p className="text-xs text-zinc-600">сегодня</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">
                      this week/month/year
                    </p>
                    <p className="text-xs text-zinc-600">
                      на этой неделе/в этом месяце/году
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">recently</p>
                    <p className="text-xs text-zinc-600">недавно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">lately</p>
                    <p className="text-xs text-zinc-600">в последнее время</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">so far</p>
                    <p className="text-xs text-zinc-600">до сих пор</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">up to now</p>
                    <p className="text-xs text-zinc-600">
                      до настоящего момента
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="font-bold text-blue-900">Примеры с маркерами:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  I have <strong className="text-blue-600">just</strong>{" "}
                  arrived.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  Have you <strong className="text-blue-600">ever</strong> been
                  to Italy?
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  I haven&apos;t finished{" "}
                  <strong className="text-blue-600">yet</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  She has lived here{" "}
                  <strong className="text-blue-600">for 5 years</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Маркеры Past Simple">
        <div className="border border-green-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">
                  Точное время в прошлом
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">yesterday</p>
                    <p className="text-xs text-zinc-600">вчера</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">
                      last (week/month/year)
                    </p>
                    <p className="text-xs text-zinc-600">
                      на прошлой неделе/в прошлом месяце/году
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">ago</p>
                    <p className="text-xs text-zinc-600">тому назад</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">
                      in + год (in 2020, in 1990)
                    </p>
                    <p className="text-xs text-zinc-600">в (каком-то году)</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">Когда?</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">when?</p>
                    <p className="text-xs text-zinc-600">когда?</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">
                      on Monday, on 5th May
                    </p>
                    <p className="text-xs text-zinc-600">в конкретный день</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">
                  Завершённые периоды
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">last night</p>
                    <p className="text-xs text-zinc-600">прошлой ночью</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">the other day</p>
                    <p className="text-xs text-zinc-600">на днях</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">at that time/moment</p>
                    <p className="text-xs text-zinc-600">в тот момент</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">then</p>
                    <p className="text-xs text-zinc-600">тогда</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="font-bold text-green-900">Примеры с маркерами:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  I saw him{" "}
                  <strong className="text-green-600">yesterday</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  She lived there{" "}
                  <strong className="text-green-600">3 years ago</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  We met <strong className="text-green-600">in 2020</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  <strong className="text-green-600">When</strong> did you
                  arrive?
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Важное замечание">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <p className="font-semibold text-amber-900 mb-2">
                Внимание: &quot;for&quot; может использоваться с обоими
                временами!
              </p>
              <div className="space-y-3 text-sm text-zinc-700">
                <div>
                  <p className="mb-2">
                    • <strong>Present Perfect:</strong> I have lived here{" "}
                    <strong>for 5 years</strong>. (до сих пор живу)
                  </p>
                  <p>
                    • <strong>Past Simple:</strong> I lived there{" "}
                    <strong>for 5 years</strong>. (больше не живу)
                  </p>
                </div>
                <p className="text-xs italic text-amber-800 mt-3">
                  Разница в том, продолжается ли действие СЕЙЧАС или уже
                  закончилось!
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Типичные ошибки ===== */
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "him yesterday. (see)",
      answers: ["saw"],
      explanation: "yesterday = Past Simple → saw",
    },
    {
      left: "2. She",
      right: "to Paris many times. (be)",
      answers: ["has been"],
      explanation: "many times = опыт → Present Perfect",
    },
    {
      left: "3. We",
      right: "here for 10 years. (live - до сих пор живём)",
      answers: ["have lived"],
      explanation: "до сих пор + for → Present Perfect",
    },
    {
      left: "4. When",
      right: "you",
      right2: "? (arrive)",
      answers: ["did", "arrive"],
      explanation: "When? → Past Simple",
    },
  ];

  return (
    <>
      <UiSection title="Типичные ошибки при использовании времён">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Разберём самые распространённые ошибки, которые делают студенты при
            выборе между Present Perfect и Past Simple.
          </p>
        </div>
      </UiSection>

      <div className="space-y-5">
        <div className="border border-red-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-red-700">1</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-900 mb-3">
                Perfect с точным временем (yesterday, ago, in 2020)
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I have seen him yesterday.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: yesterday = точное время → нужен Past Simple
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I saw him yesterday.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: Past Simple с yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-red-700">2</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-900 mb-3">
                Past Simple для опыта в жизни
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I visited Paris. (если говорим об опыте)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: для опыта нужен Present Perfect
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have visited Paris.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: Present Perfect для опыта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-red-700">3</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-900 mb-3">
                Perfect с &quot;When?&quot;
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ When have you seen him?
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: When? = запрос точного времени → Past Simple
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ When did you see him?
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: When? → Past Simple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-red-700">4</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-900 mb-3">
                Путаница с for/since
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I live here for 5 years.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: for + период до сейчас → Present Perfect
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have lived here for 5 years.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: Present Perfect для длительности до сейчас
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-red-700">5</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-900 mb-3">
                Неправильная форма глагола
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I have saw / She has went
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: нужна третья форма (V3)
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have seen / She has gone
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: seen и gone — V3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-red-700">6</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-900 mb-3">
                Perfect для последовательности действий
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I have woken up, have had breakfast, and have gone to
                    work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: для последовательности → Past Simple
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I woke up, had breakfast, and went to work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: Past Simple для последовательности
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="Практика: Выберите правильное время"
        instruction="Вставьте глагол в правильной форме (Present Perfect или Past Simple)."
        items={exercise1}
      />

      <div className="mt-6 bg-zinc-100 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-4">Как избежать ошибок:</h4>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">1.</span>
            <span>
              Есть точное время (yesterday, ago, in 2020)? → Past Simple
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">2.</span>
            <span>Вопрос &quot;Когда?&quot; (When?) → Past Simple</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">3.</span>
            <span>Результат важен сейчас / опыт в жизни → Present Perfect</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">4.</span>
            <span>
              Действие продолжается до сих пор (for/since) → Present Perfect
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">5.</span>
            <span>Период закончился (yesterday, last week) → Past Simple</span>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Контексты использования ===== */
function Step7() {
  return (
    <>
      <UiSection title="Практические контексты использования">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Разберём ситуации из жизни, где нужно выбирать между Present Perfect
            и Past Simple. Это поможет вам уверенно использовать оба времени.
          </p>
        </div>
      </UiSection>

      <UiSection title="Контекст 1: Рассказ о поездке">
        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">
              Present Perfect: Общий опыт
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Используем, когда говорим о опыте БЕЗ деталей
            </p>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm mb-2">
                <strong>— Have you ever been to Japan?</strong>
                <br />
                <span className="text-xs text-zinc-600">
                  (спрашиваем об опыте)
                </span>
              </p>
              <p className="text-sm">
                <strong>— Yes, I have visited Tokyo.</strong>
                <br />
                <span className="text-xs text-zinc-600">
                  (подтверждаем опыт, без деталей)
                </span>
              </p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Past Simple: Конкретные детали
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Переходим на Past Simple, когда даём ДЕТАЛИ
            </p>
            <div className="bg-green-50 rounded p-4">
              <p className="text-sm mb-2">
                <strong>— When did you go there?</strong>
                <br />
                <span className="text-xs text-zinc-600">(запрос деталей)</span>
              </p>
              <p className="text-sm mb-2">
                <strong>— I went there last summer.</strong>
                <br />
                <span className="text-xs text-zinc-600">
                  (конкретное время)
                </span>
              </p>
              <p className="text-sm">
                <strong>
                  I stayed for two weeks and visited many temples.
                </strong>
                <br />
                <span className="text-xs text-zinc-600">
                  (последовательность событий в прошлом)
                </span>
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Контекст 2: Потерянные вещи">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">
              Present Perfect: Результат актуален
            </h4>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm mb-2">
                <strong>I have lost my keys.</strong>
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Я потерял ключи → СЕЙЧАС не могу открыть дверь (результат важен
                сейчас)
              </p>
              <p className="text-sm">
                <strong>Have you seen them?</strong>
              </p>
              <p className="text-xs text-zinc-600">
                Ты их не видел? (неважно когда, важно СЕЙЧАС)
              </p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Past Simple: Результат неактуален
            </h4>
            <div className="bg-green-50 rounded p-4">
              <p className="text-sm mb-2">
                <strong>I lost my keys yesterday, but I found them.</strong>
              </p>
              <p className="text-xs text-zinc-600">
                Я потерял ключи вчера, но нашёл их (проблема решена, результат
                не актуален)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Контекст 3: Работа и карьера">
        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">
              Present Perfect: Текущая ситуация
            </h4>
            <div className="bg-blue-50 rounded p-4 space-y-3">
              <div>
                <p className="text-sm">
                  <strong>I have worked here for 5 years.</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Я работаю здесь 5 лет (и до сих пор работаю)
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <strong>She has been a teacher since 2015.</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Она учитель с 2015 года (и всё ещё учитель)
                </p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Past Simple: Прошлая ситуация
            </h4>
            <div className="bg-green-50 rounded p-4 space-y-3">
              <div>
                <p className="text-sm">
                  <strong>I worked there for 5 years.</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Я работал там 5 лет (но больше не работаю)
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <strong>She was a teacher from 2015 to 2020.</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Она была учителем с 2015 по 2020 (сейчас не учитель)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Контекст 4: Новости">
        <div className="border border-blue-200 rounded-lg p-5">
          <h4 className="font-bold text-blue-900 mb-3">
            Present Perfect: Свежие новости
          </h4>
          <p className="text-sm text-zinc-700 mb-4">
            Используем для новостей, которые только что произошли (обычно в
            заголовках)
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-blue-50 rounded p-3">
              <p className="text-sm">
                <strong>The President has arrived in London.</strong>
              </p>
              <p className="text-xs text-zinc-600">
                Президент прибыл в Лондон (только что, новость)
              </p>
            </div>
            <div className="bg-blue-50 rounded p-3">
              <p className="text-sm">
                <strong>Scientists have discovered a new planet.</strong>
              </p>
              <p className="text-xs text-zinc-600">
                Учёные открыли новую планету (свежая новость)
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-4 italic">
            Затем, давая детали, переходим на Past Simple: &quot;Scientists
            discovered a new planet. They found it last month using a new
            telescope...&quot;
          </p>
        </div>
      </UiSection>

      <UiSection title="Контекст 5: Диалоги">
        <div className="bg-zinc-100 rounded-lg p-6">
          <h4 className="font-bold text-zinc-900 mb-4">
            Типичный диалог (опыт → детали):
          </h4>
          <div className="space-y-3 text-sm">
            <div className="bg-white rounded p-3 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-900 mb-1">A:</p>
              <p>
                <strong className="text-blue-700">Have you ever been</strong> to
                Italy?
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (Present Perfect — опыт)
              </p>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-900 mb-1">B:</p>
              <p>
                Yes, I <strong className="text-blue-700">have visited</strong>{" "}
                Rome twice.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (Present Perfect — подтверждение опыта)
              </p>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-1">A:</p>
              <p>
                When <strong className="text-green-700">did you go</strong>{" "}
                there last?
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (Past Simple — запрос деталей с &quot;When&quot;)
              </p>
            </div>

            <div className="bg-white rounded p-3 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-1">B:</p>
              <p>
                I <strong className="text-green-700">went</strong> there last
                summer. I <strong className="text-green-700">stayed</strong> for
                a week and <strong className="text-green-700">visited</strong>{" "}
                the Colosseum.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (Past Simple — конкретные детали и последовательность)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Практические ситуации и алгоритм ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "this book last week. (read)",
      answers: ["read"],
      explanation: "last week → Past Simple",
    },
    {
      left: "2. She",
      right: "three emails today. (send)",
      answers: ["has sent"],
      explanation: "today (незавершённый период) → Present Perfect",
    },
    {
      left: "3. We",
      right: "each other for 10 years. (know)",
      answers: ["have known"],
      explanation: "for 10 years (до сих пор) → Present Perfect",
    },
    {
      left: "4. They",
      right: "to London in 2019. (move)",
      answers: ["moved"],
      explanation: "in 2019 (точное время) → Past Simple",
    },
    {
      left: "5.",
      right: "you",
      right2: "your homework yet? (finish)",
      answers: ["Have", "finished"],
      explanation: "yet → Present Perfect",
    },
  ];

  return (
    <>
      <UiSection title="Алгоритм выбора времени">
        <div className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-lg p-6 border-2 border-blue-200">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>Как выбрать правильное время?</span>
          </h3>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold text-zinc-900 mb-2">
                    Есть точное время в прошлом?
                  </p>
                  <p className="text-sm text-zinc-700 mb-2">
                    (yesterday, last week, ago, in 2020, когда я был
                    ребёнком...)
                  </p>
                  <div className="bg-green-50 rounded p-2">
                    <p className="text-sm font-semibold text-green-700">
                      ДА → Past Simple
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold text-zinc-900 mb-2">
                    Вопрос &quot;Когда?&quot; (When?)
                  </p>
                  <div className="bg-green-50 rounded p-2">
                    <p className="text-sm font-semibold text-green-700">
                      → Past Simple
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-bold text-zinc-900 mb-2">
                    Результат важен СЕЙЧАС?
                  </p>
                  <p className="text-sm text-zinc-700 mb-2">
                    (Действие завершено, но его последствия видны/важны в
                    настоящем)
                  </p>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-sm font-semibold text-blue-700">
                      ДА → Present Perfect
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-bold text-zinc-900 mb-2">
                    Опыт в жизни (без указания времени)?
                  </p>
                  <p className="text-sm text-zinc-700 mb-2">
                    (Have you ever...? I have never... I have been there...)
                  </p>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-sm font-semibold text-blue-700">
                      ДА → Present Perfect
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="font-bold text-zinc-900 mb-2">
                    Действие продолжается до сих пор?
                  </p>
                  <p className="text-sm text-zinc-700 mb-2">
                    (I have lived here for 5 years — и всё ещё живу)
                  </p>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-sm font-semibold text-blue-700">
                      ДА → Present Perfect
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <p className="font-bold text-zinc-900 mb-2">
                    Последовательность действий в прошлом?
                  </p>
                  <p className="text-sm text-zinc-700 mb-2">
                    (I came, saw, and left...)
                  </p>
                  <div className="bg-green-50 rounded p-2">
                    <p className="text-sm font-semibold text-green-700">
                      ДА → Past Simple
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Практические ситуации">
        <div className="space-y-4">
          <div className="bg-zinc-100 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-3">
              Ситуация 1: Собеседование
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-blue-700">Interviewer:</strong> Have you
                worked in sales before?{" "}
                <span className="text-xs text-blue-600">(опыт)</span>
              </p>
              <p>
                <strong className="text-green-700">You:</strong> Yes, I have.{" "}
                <span className="text-xs text-blue-600">(подтверждение)</span>
              </p>
              <p>
                <strong className="text-blue-700">Interviewer:</strong> Where
                did you work?{" "}
                <span className="text-xs text-green-600">(детали)</span>
              </p>
              <p>
                <strong className="text-green-700">You:</strong> I worked at ABC
                Company for 3 years.{" "}
                <span className="text-xs text-green-600">
                  (завершённый период)
                </span>
              </p>
            </div>
          </div>

          <div className="bg-zinc-100 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-3">
              Ситуация 2: Встреча друзей
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-blue-700">Friend:</strong> I
                haven&apos;t seen you for ages!{" "}
                <span className="text-xs text-blue-600">
                  (результат: давно)
                </span>
              </p>
              <p>
                <strong className="text-green-700">You:</strong> I know! We last
                met in 2020.{" "}
                <span className="text-xs text-green-600">
                  (конкретное время)
                </span>
              </p>
              <p>
                <strong className="text-blue-700">Friend:</strong> Have you been
                busy?{" "}
                <span className="text-xs text-blue-600">
                  (период до сейчас)
                </span>
              </p>
              <p>
                <strong className="text-green-700">You:</strong> Yes, I started
                a new job last year.{" "}
                <span className="text-xs text-green-600">(last year)</span>
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Выберите правильное время"
        instruction="Вставьте глагол в правильной форме."
        items={exercise1}
      />

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-bold text-amber-900 mb-3">
          💡 Совет для практики:
        </h4>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li>
            • Когда рассказываете историю, начните с общего (Present Perfect),
            затем переходите к деталям (Past Simple)
          </li>
          <li>
            • Если видите точное время — автоматически используйте Past Simple
          </li>
          <li>
            • Если говорите о результате, видимом СЕЙЧАС — используйте Present
            Perfect
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "my keys. Can you help me find them? (lose)",
      answers: ["have lost"],
      explanation: "Результат важен сейчас → Present Perfect",
    },
    {
      left: "2. Shakespeare",
      right: "many famous plays. (write)",
      answers: ["wrote"],
      explanation: "Шекспир умер (завершённое прошлое) → Past Simple",
    },
    {
      left: "3.",
      right: "you",
      right2: "to the new restaurant yet? (be)",
      answers: ["Have", "been"],
      explanation: "yet → Present Perfect",
    },
    {
      left: "4. We",
      right: "them at the party last night. (meet)",
      answers: ["met"],
      explanation: "last night → Past Simple",
    },
    {
      left: "5. She",
      right: "in Paris since 2015. (live)",
      answers: ["has lived"],
      explanation: "since 2015 + до сих пор → Present Perfect",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "6. I",
      right: "three cups of coffee today. (drink)",
      answers: ["have drunk"],
      explanation: "today (незавершённый) → Present Perfect",
    },
    {
      left: "7. When",
      right: "you",
      right2: "your homework? (do)",
      answers: ["did", "do"],
      explanation: "When? → Past Simple",
    },
    {
      left: "8. They",
      right: "never",
      right2: "sushi. (try)",
      answers: ["have", "tried"],
      explanation: "never → Present Perfect",
    },
    {
      left: "9. I",
      right: "to New York twice. (be)",
      answers: ["have been"],
      explanation: "опыт (twice) → Present Perfect",
    },
    {
      left: "10. He",
      right: "his car in 2020. (buy)",
      answers: ["bought"],
      explanation: "in 2020 → Past Simple",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "11. My phone is working again. I",
      right: "it. (fix)",
      answers: ["have fixed"],
      explanation: "Результат виден сейчас → Present Perfect",
    },
    {
      left: "12. Mozart",
      right: "over 600 pieces of music. (compose)",
      answers: ["composed"],
      explanation: "Моцарт умер → Past Simple",
    },
    {
      left: "13. I",
      right: "this film three times already. (see)",
      answers: ["have seen"],
      explanation: "already → Present Perfect",
    },
    {
      left: "14. We",
      right: "football yesterday afternoon. (play)",
      answers: ["played"],
      explanation: "yesterday → Past Simple",
    },
    {
      left: "15.",
      right: "she ever",
      right2: "Japanese food? (eat)",
      answers: ["Has", "eaten"],
      explanation: "ever → Present Perfect",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения для закрепления">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Практика — лучший способ закрепить материал. Выполните все
            упражнения, обращая внимание на маркеры времени.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Основы"
        instruction="Вставьте глагол в правильной форме (Present Perfect или Past Simple)."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Средний уровень"
        instruction="Продолжаем практиковаться. Вставьте глагол в нужной форме."
        items={exercise2}
      />

      <CheckableExercise
        title="Упражнение 3: Продвинутый уровень"
        instruction="Последнее упражнение. Будьте внимательны к контексту!"
        items={exercise3}
      />

      <div className="mt-6 bg-zinc-100 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-4">
          Дополнительная практика: Переведите на английский
        </h4>
        <div className="space-y-4">
          <div className="bg-white rounded p-4">
            <p className="text-sm font-semibold mb-2">
              1. Я видел этот фильм вчера.
            </p>
            <p className="text-xs text-zinc-600">
              I saw this film yesterday. (вчера → Past Simple)
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-semibold mb-2">
              2. Я видел этот фильм три раза.
            </p>
            <p className="text-xs text-zinc-600">
              I have seen this film three times. (опыт → Present Perfect)
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-semibold mb-2">
              3. Она живёт здесь с 2018 года.
            </p>
            <p className="text-xs text-zinc-600">
              She has lived here since 2018. (since + продолжается → Present
              Perfect)
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-semibold mb-2">
              4. Она жила там 5 лет, но потом переехала.
            </p>
            <p className="text-xs text-zinc-600">
              She lived there for 5 years, but then moved. (завершённое → Past
              Simple)
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="text-sm font-semibold mb-2">
              5. Ты когда-нибудь был в Лондоне?
            </p>
            <p className="text-xs text-zinc-600">
              Have you ever been to London? (ever → Present Perfect)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговый тест ===== */
function Step10() {
  const finalTest: FillItem[] = [
    {
      left: "1. I",
      right: "to call you yesterday, but you didn't answer. (try)",
      answers: ["tried"],
      explanation: "yesterday → Past Simple",
    },
    {
      left: "2.",
      right: "you",
      right2: "the report yet? (finish)",
      answers: ["Have", "finished"],
      explanation: "yet → Present Perfect",
    },
    {
      left: "3. She",
      right: "three languages when she was a child. (speak)",
      answers: ["spoke"],
      explanation: "when she was a child → Past Simple",
    },
    {
      left: "4. We",
      right: "each other for many years. (know)",
      answers: ["have known"],
      explanation: "for many years + до сих пор → Present Perfect",
    },
    {
      left: "5. They",
      right: "to Italy last month. (travel)",
      answers: ["travelled", "traveled"],
      explanation: "last month → Past Simple",
    },
    {
      left: "6. I",
      right: "never",
      right2: "Japanese food. (eat)",
      answers: ["have", "eaten"],
      explanation: "never → Present Perfect",
    },
    {
      left: "7. When",
      right: "the lesson",
      right2: "? (start)",
      answers: ["did", "start"],
      explanation: "When? → Past Simple",
    },
    {
      left: "8. He",
      right: "his job two weeks ago. (lose)",
      answers: ["lost"],
      explanation: "two weeks ago → Past Simple",
    },
    {
      left: "9.",
      right: "she",
      right2: "her keys? She can't find them. (lose)",
      answers: ["Has", "lost"],
      explanation: "результат важен сейчас → Present Perfect",
    },
    {
      left: "10. I",
      right: "in this house all my life. (live)",
      answers: ["have lived"],
      explanation: "all my life + до сих пор → Present Perfect",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест">
        <div className="bg-gradient-to-br from-blue-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                Проверьте свои знания!
              </h3>
              <p className="text-zinc-700 leading-relaxed">
                Пройдите финальный тест, чтобы убедиться, что вы усвоили все
                различия между Present Perfect и Past Simple.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Вставьте глагол в правильной форме. Будьте внимательны к контексту и маркерам времени!"
        items={finalTest}
      />

      <UiSection title="Итоговая таблица: Present Perfect vs Past Simple">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-green-100">
                <th className="border border-zinc-300 p-3 text-left font-bold">
                  Критерий
                </th>
                <th className="border border-zinc-300 p-3 text-left font-bold text-blue-900">
                  Present Perfect
                </th>
                <th className="border border-zinc-300 p-3 text-left font-bold text-green-900">
                  Past Simple
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Формула
                </td>
                <td className="border border-zinc-300 p-3">
                  <span className="font-mono text-blue-700">have/has + V3</span>
                </td>
                <td className="border border-zinc-300 p-3">
                  <span className="font-mono text-green-700">V2 (V-ed)</span>
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Когда использовать
                </td>
                <td className="border border-zinc-300 p-3">
                  • Результат важен СЕЙЧАС
                  <br />• Опыт в жизни (без времени)
                  <br />• Незавершённый период
                  <br />• Действие до сих пор (for/since)
                </td>
                <td className="border border-zinc-300 p-3">
                  • Завершённое действие в прошлом
                  <br />• С точным временем
                  <br />• Последовательность событий
                  <br />• Завершённый период
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Точное время
                </td>
                <td className="border border-zinc-300 p-3 text-red-700">
                  ❌ НЕ используется
                </td>
                <td className="border border-zinc-300 p-3 text-green-700">
                  ✓ Часто указывается
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Маркеры
                </td>
                <td className="border border-zinc-300 p-3">
                  just, already, yet, ever, never, for, since, today, this week,
                  recently
                </td>
                <td className="border border-zinc-300 p-3">
                  yesterday, last, ago, in 2020, when?, then, at that time
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Связь с настоящим
                </td>
                <td className="border border-zinc-300 p-3 text-blue-700">
                  ✓ Есть связь
                </td>
                <td className="border border-zinc-300 p-3 text-zinc-600">
                  ❌ Нет связи
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Примеры
                </td>
                <td className="border border-zinc-300 p-3">
                  I have lost my keys.
                  <br />
                  <span className="text-xs text-zinc-600">
                    (не могу открыть дверь СЕЙЧАС)
                  </span>
                  <br />
                  <br />
                  Have you ever been to Japan?
                  <br />
                  <span className="text-xs text-zinc-600">(опыт в жизни)</span>
                </td>
                <td className="border border-zinc-300 p-3">
                  I lost my keys yesterday.
                  <br />
                  <span className="text-xs text-zinc-600">
                    (конкретный день)
                  </span>
                  <br />
                  <br />
                  I went to Japan in 2019.
                  <br />
                  <span className="text-xs text-zinc-600">(точное время)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Ключевые выводы:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Present Perfect</strong> создаёт связь между прошлым и
                настоящим. Фокус на результате или опыте.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Past Simple</strong> описывает завершённые действия в
                прошлом. Фокус на факте в определённое время.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Точное время в прошлом (yesterday, last week, ago, in 2020) =
                всегда <strong>Past Simple</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Вопрос &quot;When?&quot; = всегда <strong>Past Simple</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Результат важен СЕЙЧАС / опыт в жизни / действие до сих пор =
                <strong>Present Perfect</strong>.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Вы отлично справились!</span>
          </h4>
          <p className="text-sm text-zinc-700">
            Теперь вы понимаете ключевые различия между Present Perfect и Past
            Simple. Продолжайте практиковаться, используя эти времена в реальных
            ситуациях, и скоро выбор между ними станет автоматическим!
          </p>
        </div>
      </div>
    </>
  );
}
