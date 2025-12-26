"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentPerfectVsContinuous({ step }: Props) {
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
      <UiSection title="Present Perfect vs Present Continuous">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-zinc-900 mb-4">
            Почему эти времена часто путают?
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Оба времени связаны с настоящим моментом, но используются в
            совершенно разных ситуациях.
            <strong> Present Perfect</strong> показывает связь прошлого с
            настоящим (результат), а <strong>Present Continuous</strong>{" "}
            описывает действие, которое происходит СЕЙЧАС или в текущий период
            времени.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            В этом уроке мы детально разберём оба времени, научимся различать их
            и избегать типичных ошибок.
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
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  I have finished my work.
                </p>
                <p className="text-xs text-zinc-600">
                  Я закончил работу (результат важен сейчас).
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  She has lived here for 5 years.
                </p>
                <p className="text-xs text-zinc-600">
                  Она живёт здесь 5 лет (началось в прошлом, продолжается).
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-zinc-50 rounded-lg">
              <p className="text-xs font-semibold text-zinc-900 mb-2">
                Когда использовать:
              </p>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• Результат действия виден сейчас</li>
                <li>• Опыт в жизни</li>
                <li>• Действие началось в прошлом и продолжается</li>
              </ul>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">▶</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Present Continuous
                </h3>
                <p className="text-sm text-zinc-600">Действие СЕЙЧАС</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <p className="font-semibold text-green-900 mb-2">Формула:</p>
              <p className="text-lg font-mono text-green-700">
                am/is/are + V-ing
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  I am working right now.
                </p>
                <p className="text-xs text-zinc-600">
                  Я работаю прямо сейчас (в этот момент).
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  She is studying English this year.
                </p>
                <p className="text-xs text-zinc-600">
                  Она изучает английский в этом году (временная ситуация).
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-zinc-50 rounded-lg">
              <p className="text-xs font-semibold text-zinc-900 mb-2">
                Когда использовать:
              </p>
              <ul className="text-xs text-zinc-700 space-y-1">
                <li>• Действие происходит в момент речи</li>
                <li>• Временная ситуация</li>
                <li>• Запланированное будущее</li>
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
                    <strong>опыте</strong>. Когда именно произошло — неважно.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    Present Continuous
                  </p>
                  <p className="text-sm text-zinc-700">
                    Фокус на <strong>процессе</strong> действия. Действие
                    происходит СЕЙЧАС или в текущий период.
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

/* ===== СТРАНИЦА 2: Present Perfect — детальный разбор ===== */
function Step2() {
  return (
    <>
      <UiSection title="Present Perfect: Полный разбор">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">
            Что такое Present Perfect?
          </h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Present Perfect (настоящее совершённое время) — это время, которое
            создаёт мост между прошлым и настоящим. Действие произошло в
            прошлом, но{" "}
            <strong>его результат или последствия важны СЕЙЧАС</strong>.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Главная идея: мы НЕ указываем точное время, когда произошло
            действие. Важен сам факт и его связь с настоящим моментом.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формула Present Perfect">
        <div className="border border-blue-200 rounded-lg p-6 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-center text-2xl font-mono font-bold text-blue-900 mb-2">
              HAVE / HAS + V3 (Past Participle)
            </p>
            <p className="text-center text-sm text-zinc-600">
              вспомогательный глагол + третья форма глагола
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-blue-900 mb-3">HAVE</p>
              <p className="text-sm text-zinc-600 mb-3">с I, you, we, they</p>
              <div className="space-y-2">
                <p className="text-sm">
                  • I <strong>have worked</strong>
                </p>
                <p className="text-sm">
                  • You <strong>have seen</strong>
                </p>
                <p className="text-sm">
                  • We <strong>have finished</strong>
                </p>
                <p className="text-sm">
                  • They <strong>have done</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-blue-900 mb-3">HAS</p>
              <p className="text-sm text-zinc-600 mb-3">с he, she, it</p>
              <div className="space-y-2">
                <p className="text-sm">
                  • He <strong>has worked</strong>
                </p>
                <p className="text-sm">
                  • She <strong>has seen</strong>
                </p>
                <p className="text-sm">
                  • It <strong>has finished</strong>
                </p>
                <p className="text-sm">
                  • Tom <strong>has done</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Третья форма глагола (V3)">
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">✓</span>
              <h4 className="text-lg font-bold text-green-900">
                Правильные глаголы
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
                <p className="text-sm font-semibold">finish → finished</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">clean → cleaned</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">!</span>
              <h4 className="text-lg font-bold text-red-900">
                Неправильные глаголы
              </h4>
            </div>
            <p className="text-sm text-zinc-700 mb-3">
              Имеют особую форму, которую нужно <strong>запомнить</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">go → gone</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">see → seen</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">do → done</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">write → written</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">eat → eaten</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">take → taken</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">make → made</p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm font-semibold">come → come</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="5 основных значений Present Perfect">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Результат действия
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Действие завершено, и его результат виден СЕЙЧАС
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I have cleaned the room.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я убрал комнату → Комната чистая СЕЙЧАС
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
                <h4 className="font-bold text-zinc-900 mb-2">Опыт в жизни</h4>
                <p className="text-sm text-zinc-700 mb-3">
                  &quot;Я делал это в своей жизни&quot; (неважно когда)
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I have been to Paris.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я был в Париже (в какой-то момент в жизни)
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
                  Подсчёт действий
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Сколько раз делал до настоящего момента
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I have watched this film three times.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я смотрел этот фильм три раза (до сейчас)
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
                  Незавершённый период
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  today, this week, this year — период ещё не закончился
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I haven&apos;t seen him today.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я не видел его сегодня (день ещё идёт)
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
                  Длительность до сейчас
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  С for/since — действие началось в прошлом и продолжается
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    She has lived here for 5 years.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она живёт здесь 5 лет (началось 5 лет назад, живёт ДО СИХ
                    ПОР)
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

/* ===== СТРАНИЦА 3: Present Continuous — детальный разбор ===== */
function Step3() {
  return (
    <>
      <UiSection title="Present Continuous: Полный разбор">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-4">
            Что такое Present Continuous?
          </h3>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Present Continuous (настоящее продолженное время) — это время,
            которое описывает действия,{" "}
            <strong>происходящие В ДАННЫЙ МОМЕНТ</strong> или в текущий период
            времени. Это время показывает <strong>процесс</strong>, который идёт
            СЕЙЧАС.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Главная идея: действие НЕ закончено, оно <strong>в процессе</strong>
            . Мы можем видеть или чувствовать это действие прямо сейчас.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формула Present Continuous">
        <div className="border border-green-200 rounded-lg p-6 mb-6">
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-center text-2xl font-mono font-bold text-green-900 mb-2">
              AM / IS / ARE + V-ing
            </p>
            <p className="text-center text-sm text-zinc-600">
              to be + глагол с окончанием -ing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <p className="font-semibold text-green-900 mb-3">AM</p>
              <p className="text-sm text-zinc-600 mb-3">только с I</p>
              <div className="space-y-2">
                <p className="text-sm">
                  • I <strong>am working</strong>
                </p>
                <p className="text-sm">
                  • I <strong>am reading</strong>
                </p>
                <p className="text-sm">
                  • I <strong>am studying</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-100">
              <p className="font-semibold text-green-900 mb-3">IS</p>
              <p className="text-sm text-zinc-600 mb-3">с he, she, it</p>
              <div className="space-y-2">
                <p className="text-sm">
                  • He <strong>is working</strong>
                </p>
                <p className="text-sm">
                  • She <strong>is reading</strong>
                </p>
                <p className="text-sm">
                  • It <strong>is raining</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-100">
              <p className="font-semibold text-green-900 mb-3">ARE</p>
              <p className="text-sm text-zinc-600 mb-3">с you, we, they</p>
              <div className="space-y-2">
                <p className="text-sm">
                  • You <strong>are working</strong>
                </p>
                <p className="text-sm">
                  • We <strong>are reading</strong>
                </p>
                <p className="text-sm">
                  • They <strong>are studying</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как образуется форма -ing">
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">
              Правило 1: Обычные глаголы
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Просто добавляем <strong>-ing</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  work → work<strong>ing</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  play → play<strong>ing</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  read → read<strong>ing</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  go → go<strong>ing</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h4 className="font-bold text-amber-900 mb-3">
              Правило 2: Глаголы на -e
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Убираем <strong>-e</strong> и добавляем <strong>-ing</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  make → mak<strong>ing</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  write → writ<strong>ing</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  take → tak<strong>ing</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  come → com<strong>ing</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-bold text-red-900 mb-3">
              Правило 3: Удвоение согласной
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Короткие глаголы (согласная-гласная-согласная) удваивают последнюю
              букву
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  sit → sit<strong>ting</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  run → run<strong>ning</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  swim → swim<strong>ming</strong>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="text-sm">
                  stop → stop<strong>ping</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="4 основных значения Present Continuous">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-green-700">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Действие происходит СЕЙЧАС
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  В этот самый момент, когда мы говорим
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I am working right now.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я работаю прямо сейчас (в данную секунду)
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
                  Временная ситуация
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Происходит в текущий период (эти дни, недели)
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    She is studying English this year.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она изучает английский в этом году (не навсегда, временно)
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
                  Запланированное будущее
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Договорённости и планы на ближайшее будущее
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    I am meeting Tom tomorrow.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я встречаюсь с Томом завтра (уже договорились)
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
                  Раздражающие привычки (с always)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Выражает критику или раздражение
                </p>
                <div className="bg-zinc-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    He is always losing his keys!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Он вечно теряет ключи! (это раздражает)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Глаголы, которые НЕ используются в Continuous">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-red-900 mb-4">
            State verbs (глаголы состояния)
          </h4>
          <p className="text-sm text-zinc-700 mb-4">
            Эти глаголы описывают состояния, а не действия, поэтому НЕ
            используются в Continuous:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-sm text-red-900 mb-1">Чувства</p>
              <p className="text-xs">like, love, hate, want, need</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-sm text-red-900 mb-1">
                Мышление
              </p>
              <p className="text-xs">know, understand, believe, think*</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-sm text-red-900 mb-1">Чувства</p>
              <p className="text-xs">see, hear, smell, taste</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-sm text-red-900 mb-1">
                Обладание
              </p>
              <p className="text-xs">have*, belong, own, possess</p>
            </div>
          </div>
          <div className="mt-4 bg-white rounded p-3">
            <p className="text-xs text-zinc-600">
              <strong>Примеры:</strong>
              <br />✓ I <strong>love</strong> pizza. (НЕ: I am loving)
              <br />✓ She <strong>knows</strong> the answer. (НЕ: She is
              knowing)
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Ключевые различия между временами ===== */
function Step4() {
  return (
    <>
      <UiSection title="Ключевые различия: Present Perfect vs Present Continuous">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Понимание различий между этими временами критически важно. Давайте
            разберём по каждому аспекту, чтобы вы никогда их не путали.
          </p>
        </div>
      </UiSection>

      <UiSection title="1. Фокус внимания">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Present Perfect</h4>
            <p className="text-sm text-zinc-700 mb-4">
              Фокус на <strong>результате</strong> или <strong>факте</strong>
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  I have read this book.
                </p>
                <p className="text-xs text-zinc-600">
                  Я прочитал эту книгу → Факт: я знаю содержание
                </p>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  She has finished her work.
                </p>
                <p className="text-xs text-zinc-600">
                  Она закончила работу → Результат: работа готова
                </p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Present Continuous
            </h4>
            <p className="text-sm text-zinc-700 mb-4">
              Фокус на <strong>процессе</strong> действия
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  I am reading this book.
                </p>
                <p className="text-xs text-zinc-600">
                  Я читаю эту книгу → Процесс: я в середине чтения
                </p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  She is finishing her work.
                </p>
                <p className="text-xs text-zinc-600">
                  Она заканчивает работу → Процесс: ещё не закончила
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="2. Время действия">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Present Perfect</h4>
            <p className="text-sm text-zinc-700 mb-4">
              Действие в <strong>прошлом</strong>, результат в{" "}
              <strong>настоящем</strong>
            </p>
            <div className="bg-zinc-50 rounded p-4">
              <p className="text-xs text-zinc-600 mb-3">Временная шкала:</p>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-zinc-300 rounded flex items-center justify-center text-xs">
                  ПРОШЛОЕ
                </div>
                <div className="flex-1 h-1 bg-blue-400"></div>
                <div className="w-20 h-8 bg-blue-500 rounded flex items-center justify-center text-xs text-white">
                  СЕЙЧАС
                </div>
              </div>
              <p className="text-xs text-zinc-600 mt-3">
                Действие произошло ← связь → результат виден сейчас
              </p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Present Continuous
            </h4>
            <p className="text-sm text-zinc-700 mb-4">
              Действие происходит <strong>СЕЙЧАС</strong> (в процессе)
            </p>
            <div className="bg-zinc-50 rounded p-4">
              <p className="text-xs text-zinc-600 mb-3">Временная шкала:</p>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-zinc-300 rounded flex items-center justify-center text-xs">
                  ПРОШЛОЕ
                </div>
                <div className="flex-1 h-1 bg-zinc-300"></div>
                <div className="w-20 h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white animate-pulse">
                  СЕЙЧАС ▶
                </div>
              </div>
              <p className="text-xs text-zinc-600 mt-3">
                Действие идёт прямо сейчас, в данный момент
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="3. Длительность действия">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Present Perfect</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded p-3">
                <p className="text-xs text-zinc-600 mb-2">С for/since:</p>
                <p className="text-sm font-semibold mb-1">
                  I have lived here for 5 years.
                </p>
                <p className="text-xs text-zinc-600">
                  Начал 5 лет назад → живу до сих пор
                </p>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-xs text-zinc-600 mb-2">
                  Без указания длительности:
                </p>
                <p className="text-sm font-semibold mb-1">I have finished.</p>
                <p className="text-xs text-zinc-600">
                  Действие завершено, длительность неважна
                </p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Present Continuous
            </h4>
            <div className="space-y-3">
              <div className="bg-green-50 rounded p-3">
                <p className="text-xs text-zinc-600 mb-2">Временный процесс:</p>
                <p className="text-sm font-semibold mb-1">
                  I am living in London this year.
                </p>
                <p className="text-xs text-zinc-600">
                  Временная ситуация (не навсегда)
                </p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-xs text-zinc-600 mb-2">Прямо сейчас:</p>
                <p className="text-sm font-semibold mb-1">I am working now.</p>
                <p className="text-xs text-zinc-600">
                  В данный момент (действие в процессе)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="4. Вопрос, на который отвечает">
        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xl">?</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-2">
                  Present Perfect
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  <strong>&quot;Каков результат?&quot;</strong> или{" "}
                  <strong>&quot;Это произошло?&quot;</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-xs text-blue-700 mb-1">Вопрос:</p>
                    <p className="text-sm">Have you finished?</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-blue-100">
                    <p className="text-xs text-zinc-600 mb-1">
                      Ответ фокусируется на результате:
                    </p>
                    <p className="text-sm">Yes, it&apos;s done.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xl">?</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-2">
                  Present Continuous
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  <strong>&quot;Что происходит сейчас?&quot;</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-xs text-green-700 mb-1">Вопрос:</p>
                    <p className="text-sm">Are you working?</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-green-100">
                    <p className="text-xs text-zinc-600 mb-1">
                      Ответ о текущем процессе:
                    </p>
                    <p className="text-sm">Yes, I&apos;m at my desk.</p>
                  </div>
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
                  Present Continuous
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Формула</strong>
                </td>
                <td className="border border-zinc-300 p-3">have/has + V3</td>
                <td className="border border-zinc-300 p-3">
                  am/is/are + V-ing
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Фокус</strong>
                </td>
                <td className="border border-zinc-300 p-3">Результат/факт</td>
                <td className="border border-zinc-300 p-3">Процесс</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Когда?</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Прошлое → Настоящее
                </td>
                <td className="border border-zinc-300 p-3">
                  Сейчас (в процессе)
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Завершённость</strong>
                </td>
                <td className="border border-zinc-300 p-3">Часто завершено</td>
                <td className="border border-zinc-300 p-3">НЕ завершено</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Пример</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  I have read the book
                </td>
                <td className="border border-zinc-300 p-3">
                  I am reading the book
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Слова-маркеры обоих времен ===== */
function Step5() {
  return (
    <>
      <UiSection title="Слова-маркеры: как определить нужное время">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Определённые слова и выражения помогают понять, какое время нужно
            использовать. Запомните эти маркеры — они значительно упростят выбор
            правильного времени.
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
                </div>
              </div>

              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-bold text-blue-900 mb-3">Длительность</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">for + период</p>
                    <p className="text-xs text-zinc-600">
                      в течение (for 5 years)
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">since + точка</p>
                    <p className="text-xs text-zinc-600">с (since Monday)</p>
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
                </div>
              </div>

              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-bold text-blue-900 mb-3">Другие</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">before</p>
                    <p className="text-xs text-zinc-600">раньше</p>
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
                  finished.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  She has lived here{" "}
                  <strong className="text-blue-600">for 5 years</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  Have you seen him{" "}
                  <strong className="text-blue-600">today</strong>?
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <p className="text-sm">
                  I haven&apos;t finished{" "}
                  <strong className="text-blue-600">yet</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Маркеры Present Continuous">
        <div className="border border-green-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">Момент речи</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">now</p>
                    <p className="text-xs text-zinc-600">сейчас</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">right now</p>
                    <p className="text-xs text-zinc-600">прямо сейчас</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">at the moment</p>
                    <p className="text-xs text-zinc-600">в данный момент</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">at present</p>
                    <p className="text-xs text-zinc-600">в настоящее время</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">
                  Действия сейчас
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">Look!</p>
                    <p className="text-xs text-zinc-600">Смотри!</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">Listen!</p>
                    <p className="text-xs text-zinc-600">Послушай!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">
                  Временные ситуации
                </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">these days</p>
                    <p className="text-xs text-zinc-600">в эти дни</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">this week/month</p>
                    <p className="text-xs text-zinc-600">
                      на этой неделе/в этом месяце
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">currently</p>
                    <p className="text-xs text-zinc-600">в настоящее время</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">temporarily</p>
                    <p className="text-xs text-zinc-600">временно</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded p-4">
                <h4 className="font-bold text-green-900 mb-3">Раздражение</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">always</p>
                    <p className="text-xs text-zinc-600">
                      вечно, всегда (с раздражением)
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="font-semibold text-sm">constantly</p>
                    <p className="text-xs text-zinc-600">постоянно</p>
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
                  I am working{" "}
                  <strong className="text-green-600">right now</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  <strong className="text-green-600">Look!</strong> It is
                  raining.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  She is studying{" "}
                  <strong className="text-green-600">these days</strong>.
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-100">
                <p className="text-sm">
                  He is <strong className="text-green-600">always</strong>{" "}
                  losing his keys!
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
                Внимание: Некоторые маркеры могут использоваться с обоими
                временами!
              </p>
              <div className="space-y-3 text-sm text-zinc-700">
                <div>
                  <p className="font-semibold mb-1">
                    today, this week, this month:
                  </p>
                  <p className="mb-2">
                    • Present Perfect: I have seen him <strong>today</strong>.
                    (факт в незавершённый период)
                  </p>
                  <p>
                    • Present Continuous: I am working from home{" "}
                    <strong>this week</strong>. (временная ситуация)
                  </p>
                </div>
                <p className="text-xs italic text-amber-800 mt-3">
                  Контекст и значение предложения помогут выбрать правильное
                  время!
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
      right: "my homework. (finish - завершил)",
      answers: ["have finished"],
      explanation: "Present Perfect: результат важен сейчас → have finished",
    },
    {
      left: "2. She",
      right: "TV right now. (watch - смотрит сейчас)",
      answers: ["is watching"],
      explanation:
        "Present Continuous: действие происходит сейчас → is watching",
    },
    {
      left: "3. They",
      right: "here for 10 years. (live - живут)",
      answers: ["have lived"],
      explanation:
        "Present Perfect с for → have lived (началось в прошлом, продолжается)",
    },
    {
      left: "4. Look! It",
      right: ". (rain - идёт дождь)",
      answers: ["is raining"],
      explanation: "Look! = маркер Present Continuous → is raining",
    },
  ];

  return (
    <>
      <UiSection title="Типичные ошибки при использовании времён">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Разберём самые распространённые ошибки, которые делают студенты при
            выборе между Present Perfect и Present Continuous. Понимание этих
            ошибок поможет их избежать.
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
                Использование Perfect вместо Continuous для действия СЕЙЧАС
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I have worked right now.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: Perfect не используется для &quot;сейчас&quot;
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I am working right now.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: Continuous для действия в момент речи
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
                Использование Continuous вместо Perfect для результата
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I am finishing my work. (но работа уже готова)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: Continuous = процесс, не результат
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have finished my work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: Perfect для завершённого действия с результатом
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
                Неправильная форма глагола
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I have finish / She is finish
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: нужны V3 (finished) и V-ing (finishing)
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have finished / She is finishing
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: have + V3 и is + V-ing
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
                Использование state verbs в Continuous
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I am knowing / She is having a car
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: know, have (обладание) = state verbs
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I know / She has a car
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: state verbs в Simple, НЕ Continuous
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
                Неправильное использование for/since
              </h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I am living here for 5 years.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: for + число лет = Perfect, НЕ Continuous
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have lived here for 5 years.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: for/since + длительность = Present Perfect
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
              <h4 className="font-bold text-red-900 mb-3">Путаница с just</h4>
              <div className="space-y-2">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-sm text-red-700 mb-1">
                    ❌ I am just finishing. (когда уже закончил)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Неправильно: just = только что закончил → Perfect
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-700 mb-1">
                    ✓ I have just finished.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно: just с Perfect = только что завершил
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-3 mt-2">
                  <p className="text-sm text-blue-700 mb-1">
                    Но: I am just finishing. (если в процессе завершения)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Continuous возможен, если процесс ещё идёт
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="Практика: Выберите правильное время"
        instruction="Вставьте глагол в правильной форме (Present Perfect или Present Continuous)."
        items={exercise1}
      />

      <div className="mt-6 bg-zinc-100 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-4">Как избежать ошибок:</h4>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">1.</span>
            <span>
              Спросите себя: &quot;Действие происходит СЕЙЧАС?&quot; →
              Continuous
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">2.</span>
            <span>Спросите себя: &quot;Важен результат?&quot; → Perfect</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">3.</span>
            <span>Проверьте: это state verb? → НЕ используйте Continuous</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">4.</span>
            <span>Есть for/since + длительность? → Скорее всего Perfect</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">5.</span>
            <span>Есть now/right now/Look? → Скорее всего Continuous</span>
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
      <UiSection title="Практические контексты: когда использовать каждое время">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Давайте рассмотрим реальные ситуации, в которых используются эти
            времена. Это поможет понять логику их применения в повседневной
            жизни.
          </p>
        </div>
      </UiSection>

      <UiSection title="Контексты для Present Perfect">
        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📝</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-3">
                  1. Отчёт о выполненной работе
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда вы говорите о том, что сделано, и результат важен
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">
                    Диалог на работе:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>Boss: Have you finished the report?</p>
                    <p>
                      Employee: Yes, I have <strong>already sent</strong> it to
                      you.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Фокус на результате: отчёт готов и отправлен
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✈️</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-3">
                  2. Обсуждение опыта и путешествий
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда делитесь опытом (неважно, когда именно это было)
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">
                    Разговор о путешествиях:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      — Have you <strong>ever been</strong> to Japan?
                    </p>
                    <p>
                      — Yes, I <strong>have visited</strong> Tokyo twice.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Говорим об опыте, точное время не указывается
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏠</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-3">
                  3. Результат виден сейчас
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда действие завершено, и мы видим его последствия
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">Ситуация дома:</p>
                  <div className="space-y-2 text-sm">
                    <p>— The room looks clean!</p>
                    <p>
                      — Yes, I <strong>have just cleaned</strong> it.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Результат очевиден: комната чистая СЕЙЧАС
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📚</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-3">
                  4. Незавершённый период времени
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Период ещё идёт: today, this week, this year
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">
                    В конце рабочего дня:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>— How was your day?</p>
                    <p>
                      — I <strong>have had</strong> three meetings today.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      День ещё не закончился, но факт уже есть
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 mb-3">
                  5. Длительность до настоящего момента
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Действие началось в прошлом и продолжается с for/since
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">О работе/учёбе:</p>
                  <div className="space-y-2 text-sm">
                    <p>— How long have you worked here?</p>
                    <p>
                      — I <strong>have worked</strong> here for 5 years.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Начал 5 лет назад и работаю до сих пор
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Контексты для Present Continuous">
        <div className="space-y-4">
          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-3">
                  1. Телефонный разговор
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Описание того, что вы делаете в данный момент
                </p>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">По телефону:</p>
                  <div className="space-y-2 text-sm">
                    <p>— What are you doing?</p>
                    <p>
                      — I <strong>am cooking</strong> dinner. Can I call you
                      back?
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Действие происходит прямо сейчас, в момент звонка
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👀</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-3">
                  2. Описание того, что видите
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  С Look! Listen! для привлечения внимания к происходящему
                </p>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">На улице:</p>
                  <div className="space-y-2 text-sm">
                    <p>
                      — Look! It <strong>is snowing</strong>!
                    </p>
                    <p>
                      — Wow, the children <strong>are playing</strong> in the
                      snow.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Видим действие своими глазами СЕЙЧАС
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💼</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-3">
                  3. Временная ситуация
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Что-то временное, не постоянное (these days, this month)
                </p>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">О работе:</p>
                  <div className="space-y-2 text-sm">
                    <p>— Where is Tom?</p>
                    <p>
                      — He <strong>is working</strong> from home this week.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Временная ситуация на эту неделю (обычно он в офисе)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📅</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-3">
                  4. Планы на ближайшее будущее
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Договорённости и запланированные действия
                </p>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">
                    Обсуждение планов:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>— Are you free tomorrow?</p>
                    <p>
                      — No, I <strong>am meeting</strong> Sarah at 5 PM.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Уже договорились, план на завтра
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">😤</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-3">
                  5. Выражение раздражения (с always)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Критика повторяющейся привычки
                </p>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-semibold mb-2">Жалоба:</p>
                  <div className="space-y-2 text-sm">
                    <p>— Where are my keys?</p>
                    <p>
                      — You <strong>are always losing</strong> your keys!
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      Выражает раздражение от постоянного повторения
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Одна ситуация — два времени">
        <div className="bg-zinc-100 rounded-lg p-6">
          <p className="font-semibold text-zinc-900 mb-4">
            Иногда можно использовать оба времени, но СМЫСЛ будет РАЗНЫМ:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="font-semibold text-blue-900 mb-2">
                  Present Perfect
                </p>
                <p className="text-sm mb-2">I have read this book.</p>
                <p className="text-xs text-zinc-600">
                  ✓ Я прочитал (знаю содержание, факт)
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="font-semibold text-green-900 mb-2">
                  Present Continuous
                </p>
                <p className="text-sm mb-2">I am reading this book.</p>
                <p className="text-xs text-zinc-600">
                  ▶ Я читаю (сейчас в процессе)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="font-semibold text-blue-900 mb-2">
                  Present Perfect
                </p>
                <p className="text-sm mb-2">She has lived here for 5 years.</p>
                <p className="text-xs text-zinc-600">
                  ✓ Живёт постоянно (5 лет и продолжает)
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="font-semibold text-green-900 mb-2">
                  Present Continuous
                </p>
                <p className="text-sm mb-2">She is living here this month.</p>
                <p className="text-xs text-zinc-600">
                  ▶ Живёт временно (только этот месяц)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="font-semibold text-blue-900 mb-2">
                  Present Perfect
                </p>
                <p className="text-sm mb-2">What have you done today?</p>
                <p className="text-xs text-zinc-600">
                  ✓ Что ты сделал? (результаты за день)
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="font-semibold text-green-900 mb-2">
                  Present Continuous
                </p>
                <p className="text-sm mb-2">What are you doing right now?</p>
                <p className="text-xs text-zinc-600">
                  ▶ Что ты делаешь? (в данную секунду)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Практические ситуации ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. Look! The sun",
      right: ". (rise - восходить)",
      answers: ["is rising"],
      explanation: "Look! = Continuous → is rising (видим процесс сейчас)",
    },
    {
      left: "2. I",
      right: "three cups of coffee today. (drink)",
      answers: ["have drunk", "have had"],
      explanation: "today = незавершённый период → Present Perfect",
    },
    {
      left: "3. She",
      right: "in London since 2020. (work)",
      answers: ["has worked"],
      explanation: "since + точка времени → Present Perfect",
    },
    {
      left: "4. They",
      right: "a new house at the moment. (build)",
      answers: ["are building"],
      explanation: "at the moment = Continuous → are building",
    },
    {
      left: "5. We",
      right: "this movie before. (see)",
      answers: ["have seen"],
      explanation: "before = опыт в жизни → Present Perfect",
    },
    {
      left: "6. Listen! Someone",
      right: "at the door. (knock)",
      answers: ["is knocking"],
      explanation: "Listen! = Continuous → is knocking",
    },
  ];

  return (
    <>
      <UiSection title="Практические ситуации и упражнения">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Теперь попрактикуемся в выборе правильного времени в реальных
            ситуациях.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Выберите правильное время по контексту"
        instruction="Вставьте глагол в правильной форме (Present Perfect или Present Continuous)."
        items={exercise1}
      />

      <UiSection title="Типичные пары предложений для сравнения">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-4">Пара 1: Работа</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm mb-2">
                  I <strong>have finished</strong> the project.
                </p>
                <p className="text-xs text-zinc-600">
                  Проект готов (результат виден)
                </p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm mb-2">
                  I <strong>am finishing</strong> the project.
                </p>
                <p className="text-xs text-zinc-600">
                  Сейчас заканчиваю (в процессе)
                </p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-4">Пара 2: Книга</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm mb-2">
                  She <strong>has written</strong> 5 books.
                </p>
                <p className="text-xs text-zinc-600">Факт: у неё есть 5 книг</p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm mb-2">
                  She <strong>is writing</strong> a new book.
                </p>
                <p className="text-xs text-zinc-600">
                  Сейчас пишет (книга не готова)
                </p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-4">Пара 3: Обед</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm mb-2">
                  I <strong>have already had</strong> lunch.
                </p>
                <p className="text-xs text-zinc-600">
                  Уже пообедал (не голоден)
                </p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm mb-2">
                  I <strong>am having</strong> lunch.
                </p>
                <p className="text-xs text-zinc-600">
                  Обедаю сейчас (за столом)
                </p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-4">Пара 4: Дождь</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm mb-2">
                  It <strong>has rained</strong> a lot this week.
                </p>
                <p className="text-xs text-zinc-600">
                  Много раз за неделю (факт)
                </p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm mb-2">
                  It <strong>is raining</strong> now.
                </p>
                <p className="text-xs text-zinc-600">
                  Идёт прямо сейчас (смотрю в окно)
                </p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-4">Пара 5: Изучение</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded p-4">
                <p className="text-sm mb-2">
                  I <strong>have studied</strong> English for 3 years.
                </p>
                <p className="text-xs text-zinc-600">
                  Учу 3 года (начал в прошлом, продолжаю)
                </p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm mb-2">
                  I <strong>am studying</strong> English now.
                </p>
                <p className="text-xs text-zinc-600">
                  Учу прямо сейчас (делаю упражнения)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Алгоритм выбора времени">
        <div className="bg-zinc-100 rounded-lg p-6">
          <h4 className="font-bold text-zinc-900 mb-4 text-center">
            Как выбрать правильное время?
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div className="flex-1 bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Есть now/right now/Look/Listen?
                </p>
                <p className="text-xs text-zinc-600">
                  → Скорее всего <strong>Present Continuous</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div className="flex-1 bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Есть just/already/yet/ever/never?
                </p>
                <p className="text-xs text-zinc-600">
                  → Скорее всего <strong>Present Perfect</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div className="flex-1 bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Есть for/since + период?
                </p>
                <p className="text-xs text-zinc-600">
                  → Скорее всего <strong>Present Perfect</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div className="flex-1 bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Действие происходит В ДАННЫЙ МОМЕНТ?
                </p>
                <p className="text-xs text-zinc-600">
                  → <strong>Present Continuous</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                5
              </div>
              <div className="flex-1 bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Важен РЕЗУЛЬТАТ или ФАКТ?
                </p>
                <p className="text-xs text-zinc-600">
                  → <strong>Present Perfect</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                6
              </div>
              <div className="flex-1 bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Это state verb (know, love, have)?
                </p>
                <p className="text-xs text-zinc-600">
                  → НЕ Continuous! Используйте Simple
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Дополнительные упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. — Where is Tom? — He",
      right: "his room. (clean)",
      answers: ["is cleaning"],
      explanation: "Действие происходит сейчас → is cleaning",
    },
    {
      left: "2. I",
      right: "to Paris three times. (be)",
      answers: ["have been"],
      explanation: "Опыт в жизни → have been",
    },
    {
      left: "3. She",
      right: "in this company since 2015. (work)",
      answers: ["has worked"],
      explanation: "since + год → Present Perfect",
    },
    {
      left: "4. Look! The children",
      right: "in the garden. (play)",
      answers: ["are playing"],
      explanation: "Look! → Present Continuous",
    },
    {
      left: "5. We",
      right: "our homework yet. (not finish)",
      answers: ["haven't finished", "have not finished"],
      explanation: "yet → Present Perfect negative",
    },
    {
      left: "6. They",
      right: "a new house this year. (buy)",
      answers: ["are buying"],
      explanation: "this year как временная ситуация → Continuous",
    },
    {
      left: "7. I",
      right: "just",
      right2: "my breakfast. (have)",
      answers: ["have", "had"],
      explanation: "just → Present Perfect",
    },
    {
      left: "8. — What are you doing? — I",
      right: "a book. (read)",
      answers: ["am reading"],
      explanation: "Вопрос What are you doing? → Continuous",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. My parents",
      right: "for 25 years. (be married)",
      answers: ["have been married"],
      explanation: "for + период → Present Perfect",
    },
    {
      left: "2. Shh! The baby",
      right: ". (sleep)",
      answers: ["is sleeping"],
      explanation: "Shh! = действие сейчас → Continuous",
    },
    {
      left: "3. I",
      right: "him since Monday. (not see)",
      answers: ["haven't seen", "have not seen"],
      explanation: "since Monday → Present Perfect negative",
    },
    {
      left: "4. She",
      right: "always",
      right2: "her keys! (lose)",
      answers: ["is", "losing"],
      explanation: "always с раздражением → Continuous",
    },
  ];

  return (
    <>
      <UiSection title="Комплексные упражнения">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Пришло время закрепить знания с помощью разнообразных упражнений.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Общая практика"
        instruction="Вставьте глагол в правильной форме."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Сложные случаи"
        instruction="Обратите внимание на контекст и маркеры."
        items={exercise2}
      />

      <UiSection title="Переведите на английский">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <p className="font-semibold text-zinc-900 mb-3">
              1. Я уже закончил эту работу.
            </p>
            <div className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-600 mb-2">Правильный ответ:</p>
              <p className="text-sm font-mono">
                I have already finished this work.
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                <strong>Почему Perfect?</strong> Результат важен сейчас +
                already
              </p>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <p className="font-semibold text-zinc-900 mb-3">
              2. Что ты делаешь прямо сейчас?
            </p>
            <div className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-600 mb-2">Правильный ответ:</p>
              <p className="text-sm font-mono">What are you doing right now?</p>
              <p className="text-xs text-zinc-500 mt-2">
                <strong>Почему Continuous?</strong> right now = в данный момент
              </p>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <p className="font-semibold text-zinc-900 mb-3">
              3. Она живёт здесь с 2010 года.
            </p>
            <div className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-600 mb-2">Правильный ответ:</p>
              <p className="text-sm font-mono">
                She has lived here since 2010.
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                <strong>Почему Perfect?</strong> since + точка времени,
                длительность до сейчас
              </p>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <p className="font-semibold text-zinc-900 mb-3">
              4. Смотри! Идёт снег!
            </p>
            <div className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-600 mb-2">Правильный ответ:</p>
              <p className="text-sm font-mono">Look! It is snowing!</p>
              <p className="text-xs text-zinc-500 mt-2">
                <strong>Почему Continuous?</strong> Look! = маркер, процесс
                сейчас
              </p>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <p className="font-semibold text-zinc-900 mb-3">
              5. Я никогда не был в Лондоне.
            </p>
            <div className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-600 mb-2">Правильный ответ:</p>
              <p className="text-sm font-mono">I have never been to London.</p>
              <p className="text-xs text-zinc-500 mt-2">
                <strong>Почему Perfect?</strong> never = опыт в жизни
              </p>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <p className="font-semibold text-zinc-900 mb-3">
              6. Он работает над новым проектом в эти дни.
            </p>
            <div className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-600 mb-2">Правильный ответ:</p>
              <p className="text-sm font-mono">
                He is working on a new project these days.
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                <strong>Почему Continuous?</strong> these days = временная
                ситуация
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Найдите и исправьте ошибки">
        <div className="space-y-4">
          <div className="border border-red-200 rounded-lg p-5">
            <p className="font-semibold text-red-900 mb-3">
              ❌ I am knowing this person for 5 years.
            </p>
            <div className="bg-green-50 rounded p-3">
              <p className="text-sm text-green-700 mb-2">✓ Правильно:</p>
              <p className="text-sm font-mono">
                I have known this person for 5 years.
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                know = state verb (НЕ Continuous) + for → Perfect
              </p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5">
            <p className="font-semibold text-red-900 mb-3">
              ❌ She has worked right now.
            </p>
            <div className="bg-green-50 rounded p-3">
              <p className="text-sm text-green-700 mb-2">✓ Правильно:</p>
              <p className="text-sm font-mono">She is working right now.</p>
              <p className="text-xs text-zinc-600 mt-2">
                right now → Continuous (действие в момент речи)
              </p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5">
            <p className="font-semibold text-red-900 mb-3">
              ❌ Look! I have found my keys.
            </p>
            <div className="bg-green-50 rounded p-3">
              <p className="text-sm text-green-700 mb-2">✓ Это правильно!</p>
              <p className="text-xs text-zinc-600 mt-2">
                Look может использоваться с Perfect, если привлекаем внимание к
                результату
              </p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5">
            <p className="font-semibold text-red-900 mb-3">
              ❌ I am living here for 10 years.
            </p>
            <div className="bg-green-50 rounded p-3">
              <p className="text-sm text-green-700 mb-2">✓ Правильно:</p>
              <p className="text-sm font-mono">
                I have lived here for 10 years.
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                for + длительность → Perfect (не временная ситуация)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговый тест ===== */
function Step10() {
  const finalTest: FillItem[] = [
    {
      left: "1. I",
      right: "my keys. Can you help me find them? (lose)",
      answers: ["have lost"],
      explanation: "Результат виден сейчас: ключей нет → Present Perfect",
    },
    {
      left: "2. She",
      right: "on the phone right now. (talk)",
      answers: ["is talking"],
      explanation: "right now → Present Continuous",
    },
    {
      left: "3. How long",
      right: "you",
      right2: "English? (study)",
      answers: ["have", "studied"],
      explanation: "How long + длительность → Present Perfect",
    },
    {
      left: "4. Listen! Someone",
      right: "the piano. (play)",
      answers: ["is playing"],
      explanation: "Listen! → Present Continuous",
    },
    {
      left: "5. I",
      right: "never",
      right2: "sushi. (eat)",
      answers: ["have", "eaten"],
      explanation: "never → Present Perfect (опыт)",
    },
    {
      left: "6. What",
      right: "you",
      right2: "? You look busy. (do)",
      answers: ["are", "doing"],
      explanation: "Вопрос о текущем действии → Continuous",
    },
    {
      left: "7. They",
      right: "here since 2018. (live)",
      answers: ["have lived"],
      explanation: "since + год → Present Perfect",
    },
    {
      left: "8. It",
      right: "heavily. Let's stay inside. (rain)",
      answers: ["is raining"],
      explanation: "Погода сейчас → Present Continuous",
    },
    {
      left: "9. I",
      right: "this movie three times already. (see)",
      answers: ["have seen"],
      explanation: "already + подсчёт → Present Perfect",
    },
    {
      left: "10. Why",
      right: "you always",
      right2: "? (complain)",
      answers: ["are", "complaining"],
      explanation: "always с критикой → Present Continuous",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-3">
            Проверьте свои знания!
          </h3>
          <p className="text-zinc-700 leading-relaxed">
            Этот тест проверит, насколько хорошо вы научились различать Present
            Perfect и Present Continuous. Внимательно читайте контекст каждого
            предложения.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальное упражнение"
        instruction="Вставьте глагол в правильной форме (Present Perfect или Present Continuous)."
        items={finalTest}
      />

      <UiSection title="Итоговая таблица различий">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-200">
                <th className="border border-zinc-400 p-3 text-left font-bold">
                  Критерий
                </th>
                <th className="border border-zinc-400 p-3 text-left font-bold">
                  Present Perfect
                </th>
                <th className="border border-zinc-400 p-3 text-left font-bold">
                  Present Continuous
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Формула
                </td>
                <td className="border border-zinc-300 p-3">have/has + V3</td>
                <td className="border border-zinc-300 p-3">
                  am/is/are + V-ing
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Главная идея
                </td>
                <td className="border border-zinc-300 p-3">
                  Результат или факт
                </td>
                <td className="border border-zinc-300 p-3">Процесс сейчас</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Когда?
                </td>
                <td className="border border-zinc-300 p-3">
                  Прошлое → связь → Настоящее
                </td>
                <td className="border border-zinc-300 p-3">В момент речи</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Завершённость
                </td>
                <td className="border border-zinc-300 p-3">Часто завершено</td>
                <td className="border border-zinc-300 p-3">
                  В процессе (НЕ завершено)
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Маркеры
                </td>
                <td className="border border-zinc-300 p-3">
                  just, already, yet, ever, never, for, since
                </td>
                <td className="border border-zinc-300 p-3">
                  now, right now, Look!, Listen!, at the moment
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Пример
                </td>
                <td className="border border-zinc-300 p-3">
                  I have finished my work.
                </td>
                <td className="border border-zinc-300 p-3">
                  I am finishing my work.
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Когда НЕ использовать
                </td>
                <td className="border border-zinc-300 p-3">
                  С точным временем (yesterday, last week)
                </td>
                <td className="border border-zinc-300 p-3">
                  Со state verbs (know, love, want)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Ключевые выводы">
        <div className="bg-zinc-50 rounded-lg p-6">
          <h4 className="font-bold text-zinc-900 mb-4">Что важно запомнить:</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                1
              </div>
              <p className="text-sm text-zinc-700">
                <strong>Present Perfect</strong> — это мост между прошлым и
                настоящим. Фокус на <strong>результате</strong>, а не на времени
                действия.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                2
              </div>
              <p className="text-sm text-zinc-700">
                <strong>Present Continuous</strong> описывает{" "}
                <strong>процесс</strong>, который происходит СЕЙЧАС или в
                текущий период.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                3
              </div>
              <p className="text-sm text-zinc-700">
                Слова-маркеры — ваши лучшие помощники. Запомните их и
                используйте как подсказки.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                4
              </div>
              <p className="text-sm text-zinc-700">
                State verbs (know, love, want, have) НЕ используются в
                Continuous. Это состояния, а не действия.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                5
              </div>
              <p className="text-sm text-zinc-700">
                Всегда спрашивайте себя: &quot;Что важнее —{" "}
                <strong>процесс</strong> или
                <strong>результат</strong>?&quot; Это главный ключ к выбору
                времени.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 rounded-lg p-8 text-center">
        <p className="text-2xl font-bold text-zinc-900 mb-3">
          Отличная работа!
        </p>
        <p className="text-zinc-700 mb-4">
          Вы освоили различия между Present Perfect и Present Continuous.
        </p>
        <p className="text-sm text-zinc-600">
          Продолжайте практиковаться, и скоро выбор правильного времени станет
          для вас автоматическим!
        </p>
      </div>
    </>
  );
}
