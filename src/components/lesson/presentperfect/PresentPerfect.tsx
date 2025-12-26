"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentPerfect({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в Present Perfect ===== */
function Step1() {
  return (
    <>
      <UiSection title="⏰ Present Perfect — Настоящее совершённое время">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="text-lg font-semibold text-purple-900 mb-3">
            Одно из самых важных времён в английском языке!
          </p>
          <p className="text-zinc-700 mb-2">
            Present Perfect (настоящее совершённое время) — это время, которое
            соединяет <strong>прошлое с настоящим</strong>.
          </p>
          <p className="text-zinc-700">
            Оно показывает действия, которые произошли в прошлом, но{" "}
            <strong>их результат важен СЕЙЧАС</strong>!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎯 Что такое Present Perfect?">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 mb-4 border-2 border-blue-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">🔗</div>
            <div>
              <p className="text-2xl font-bold text-blue-900">
                Мост между прошлым и настоящим
              </p>
              <p className="text-sm text-blue-700">
                The bridge between past and present
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-900 mb-3 text-lg">
              📍 Главная идея:
            </p>
            <p className="text-zinc-700 mb-2">
              Present Perfect используется, когда действие произошло в{" "}
              <strong>прошлом</strong>, но результат или последствия этого
              действия важны <strong>в настоящем</strong>.
            </p>
            <p className="text-zinc-700">
              Мы НЕ говорим точно, КОГДА это произошло — важен сам факт и его
              связь с настоящим!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="font-bold text-blue-900 mb-2">📚 Пример 1:</p>
              <p className="text-sm mb-2">
                <strong className="text-blue-600">I have finished</strong> my
                homework.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Я закончил домашнюю работу.
              </p>
              <p className="text-xs text-blue-700 italic">
                💡 Когда точно? Неважно! Важно, что СЕЙЧАС она готова!
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="font-bold text-blue-900 mb-2">📚 Пример 2:</p>
              <p className="text-sm mb-2">
                <strong className="text-blue-600">She has lost</strong> her
                keys.
              </p>
              <p className="text-xs text-zinc-600 mb-2">Она потеряла ключи.</p>
              <p className="text-xs text-blue-700 italic">
                💡 Результат СЕЙЧАС: у неё нет ключей!
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🆚 Present Perfect vs Past Simple">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <p className="font-bold text-yellow-900 text-lg mb-4">
            ⚠️ В чём разница? Это ОЧЕНЬ важно понять!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">✅</div>
                <div>
                  <p className="font-bold text-purple-900 text-lg">
                    Present Perfect
                  </p>
                  <p className="text-sm text-purple-700">Связь с настоящим</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm font-bold mb-1">
                    I <strong>have lost</strong> my keys.
                  </p>
                  <p className="text-xs text-zinc-600 mb-1">Я потерял ключи.</p>
                  <p className="text-xs text-purple-700">
                    → Когда? Неважно! Результат СЕЙЧАС: нет ключей!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">⏰</div>
                <div>
                  <p className="font-bold text-orange-900 text-lg">
                    Past Simple
                  </p>
                  <p className="text-sm text-orange-700">Законченное прошлое</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm font-bold mb-1">
                    I <strong>lost</strong> my keys <u>yesterday</u>.
                  </p>
                  <p className="text-xs text-zinc-600 mb-1">
                    Я потерял ключи вчера.
                  </p>
                  <p className="text-xs text-orange-700">
                    → Когда? ВЧЕРА! Указано точное время в прошлом.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 rounded-lg p-4 mt-4">
            <p className="font-bold text-yellow-900 mb-2">
              💡 Простое правило:
            </p>
            <p className="text-sm text-zinc-700 mb-1">
              • Есть <strong>точное время</strong> (yesterday, last week, in
              2020)? → <strong>Past Simple</strong>
            </p>
            <p className="text-sm text-zinc-700">
              • Важен <strong>результат СЕЙЧАС</strong>? Когда — неважно? →{" "}
              <strong>Present Perfect</strong>
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎨 5 основных значений Present Perfect">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
            <div className="text-4xl mb-3">✅</div>
            <p className="font-bold text-green-900 text-lg mb-2">
              1. Результат действия
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Действие завершено, результат виден СЕЙЧАС
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm">
                I <strong>have cleaned</strong> the room.
              </p>
              <p className="text-xs text-zinc-600">
                Я убрал комнату (и она чистая!)
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-200">
            <div className="text-4xl mb-3">🌍</div>
            <p className="font-bold text-blue-900 text-lg mb-2">
              2. Опыт в жизни
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              &quot;Я делал это в своей жизни&quot;
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm">
                I <strong>have been</strong> to Paris.
              </p>
              <p className="text-xs text-zinc-600">
                Я был в Париже (в своей жизни)
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200">
            <div className="text-4xl mb-3">🔢</div>
            <p className="font-bold text-purple-900 text-lg mb-2">
              3. Подсчёт действий
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Сколько раз делал до сейчас
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm">
                I <strong>have watched</strong> this film three times.
              </p>
              <p className="text-xs text-zinc-600">
                Я смотрел этот фильм три раза
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-200">
            <div className="text-4xl mb-3">⏰</div>
            <p className="font-bold text-amber-900 text-lg mb-2">
              4. Незавершённый период
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              today, this week, this year
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm">
                I <strong>haven&apos;t seen</strong> him today.
              </p>
              <p className="text-xs text-zinc-600">
                Я не видел его сегодня (день ещё не закончился!)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-5 border-2 border-purple-300">
        <p className="font-bold text-purple-900 text-lg mb-3">
          💡 Запомни главное:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-3">
            <p className="text-sm font-bold text-purple-900 mb-1">
              ✅ Когда использовать?
            </p>
            <p className="text-xs text-zinc-600">
              Действие в прошлом + результат/связь с настоящим
            </p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="text-sm font-bold text-purple-900 mb-1">
              ❌ Когда НЕ использовать?
            </p>
            <p className="text-xs text-zinc-600">
              Если есть точное время в прошлом (yesterday, last week)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Образование Present Perfect ===== */
function Step2() {
  return (
    <>
      <UiSection title="🔨 Как образуется Present Perfect?">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-bold text-indigo-900 mb-3">
            📐 Формула Present Perfect
          </p>
          <div className="bg-white rounded-lg p-5">
            <p className="text-center text-2xl font-bold text-indigo-900 mb-2">
              HAVE / HAS + V3 (Past Participle)
            </p>
            <p className="text-center text-sm text-zinc-600">
              вспомогательный глагол + третья форма глагола
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="👥 HAVE vs HAS">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">👥</div>
              <div>
                <p className="text-2xl font-bold text-blue-900">HAVE</p>
                <p className="text-sm text-blue-700">I, You, We, They + HAVE</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-blue-600">I have</strong> finished
                </p>
                <p className="text-xs text-zinc-600">Я закончил</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-blue-600">You have</strong> seen
                </p>
                <p className="text-xs text-zinc-600">Ты видел</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-blue-600">We have</strong> done
                </p>
                <p className="text-xs text-zinc-600">Мы сделали</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-blue-600">They have</strong> gone
                </p>
                <p className="text-xs text-zinc-600">Они ушли</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">👤</div>
              <div>
                <p className="text-2xl font-bold text-green-900">HAS</p>
                <p className="text-sm text-green-700">He, She, It + HAS</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-green-600">He has</strong> finished
                </p>
                <p className="text-xs text-zinc-600">Он закончил</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-green-600">She has</strong> seen
                </p>
                <p className="text-xs text-zinc-600">Она видела</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-green-600">It has</strong> done
                </p>
                <p className="text-xs text-zinc-600">Оно сделало</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-green-600">Tom has</strong> gone
                </p>
                <p className="text-xs text-zinc-600">Том ушёл</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 V3 — Третья форма глагола (Past Participle)">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="font-bold text-purple-900 text-lg mb-4">
            🎯 Два типа глаголов:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">✅</div>
                <div>
                  <p className="font-bold text-green-900 text-lg">
                    Правильные глаголы
                  </p>
                  <p className="text-sm text-green-700">V + ED</p>
                </div>
              </div>

              <div className="bg-green-50 rounded p-4 mb-3">
                <p className="text-sm font-bold text-green-900 mb-2">
                  Формула: V + ED
                </p>
                <p className="text-xs text-zinc-600">
                  Добавляем окончание -ED к глаголу
                </p>
              </div>

              <div className="space-y-2">
                <div className="bg-green-50 rounded p-2">
                  <p className="text-sm">
                    work → work<strong>ed</strong>
                  </p>
                  <p className="text-xs text-zinc-600">работать → работал</p>
                </div>
                <div className="bg-green-50 rounded p-2">
                  <p className="text-sm">
                    play → play<strong>ed</strong>
                  </p>
                  <p className="text-xs text-zinc-600">играть → играл</p>
                </div>
                <div className="bg-green-50 rounded p-2">
                  <p className="text-sm">
                    finish → finish<strong>ed</strong>
                  </p>
                  <p className="text-xs text-zinc-600">закончить → закончил</p>
                </div>
                <div className="bg-green-50 rounded p-2">
                  <p className="text-sm">
                    clean → clean<strong>ed</strong>
                  </p>
                  <p className="text-xs text-zinc-600">убирать → убрал</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">⚠️</div>
                <div>
                  <p className="font-bold text-red-900 text-lg">
                    Неправильные глаголы
                  </p>
                  <p className="text-sm text-red-700">Нужно учить!</p>
                </div>
              </div>

              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm font-bold text-red-900 mb-2">
                  Особые формы!
                </p>
                <p className="text-xs text-zinc-600">
                  Нет правила — нужно запоминать 3-ю форму
                </p>
              </div>

              <div className="space-y-2">
                <div className="bg-red-50 rounded p-2">
                  <p className="text-sm">
                    go → <strong>gone</strong>
                  </p>
                  <p className="text-xs text-zinc-600">идти → ушёл</p>
                </div>
                <div className="bg-red-50 rounded p-2">
                  <p className="text-sm">
                    see → <strong>seen</strong>
                  </p>
                  <p className="text-xs text-zinc-600">видеть → видел</p>
                </div>
                <div className="bg-red-50 rounded p-2">
                  <p className="text-sm">
                    do → <strong>done</strong>
                  </p>
                  <p className="text-xs text-zinc-600">делать → сделал</p>
                </div>
                <div className="bg-red-50 rounded p-2">
                  <p className="text-sm">
                    write → <strong>written</strong>
                  </p>
                  <p className="text-xs text-zinc-600">писать → написал</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Типы предложений">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">✅</div>
              <p className="font-bold text-green-900 text-xl">
                Утверждение (+)
              </p>
            </div>
            <div className="bg-white rounded p-4 mb-3">
              <p className="text-sm font-bold text-green-900 mb-2">
                Формула: Subject + have/has + V3
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  I <strong className="text-green-600">have finished</strong> my
                  work.
                </p>
                <p className="text-xs text-zinc-600">Я закончил свою работу.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  She <strong className="text-green-600">has visited</strong>{" "}
                  Paris.
                </p>
                <p className="text-xs text-zinc-600">Она посетила Париж.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">❌</div>
              <p className="font-bold text-red-900 text-xl">Отрицание (-)</p>
            </div>
            <div className="bg-white rounded p-4 mb-3">
              <p className="text-sm font-bold text-red-900 mb-2">
                Формула: Subject + have/has + NOT + V3
              </p>
              <p className="text-xs text-zinc-600">
                Сокращения: haven&apos;t / hasn&apos;t
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  I{" "}
                  <strong className="text-red-600">
                    haven&apos;t finished
                  </strong>{" "}
                  yet.
                </p>
                <p className="text-xs text-zinc-600">Я ещё не закончил.</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  She <strong className="text-red-600">hasn&apos;t seen</strong>{" "}
                  him.
                </p>
                <p className="text-xs text-zinc-600">Она не видела его.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">❓</div>
              <p className="font-bold text-blue-900 text-xl">Вопрос (?)</p>
            </div>
            <div className="bg-white rounded p-4 mb-3">
              <p className="text-sm font-bold text-blue-900 mb-2">
                Формула: Have/Has + Subject + V3?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  <strong className="text-blue-600">Have</strong> you{" "}
                  <strong className="text-blue-600">finished</strong>?
                </p>
                <p className="text-xs text-zinc-600">Ты закончил?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  <strong className="text-blue-600">Has</strong> she{" "}
                  <strong className="text-blue-600">arrived</strong>?
                </p>
                <p className="text-xs text-zinc-600">Она приехала?</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-5 border-2 border-indigo-300">
        <p className="font-bold text-indigo-900 text-lg mb-3">
          💡 Совет для запоминания:
        </p>
        <div className="bg-white rounded p-4">
          <p className="text-sm text-zinc-700 mb-2">
            <strong>HAVE/HAS</strong> = вспомогательный глагол (как "помощник")
          </p>
          <p className="text-sm text-zinc-700">
            <strong>V3</strong> = смысловой глагол (показывает действие)
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: 30 самых важных неправильных глаголов ===== */
function Step3() {
  const irregularVerbs = [
    {
      v1: "be",
      v2: "was/were",
      v3: "been",
      translation: "быть",
      example: "I have been to London",
    },
    {
      v1: "go",
      v2: "went",
      v3: "gone",
      translation: "идти",
      example: "She has gone home",
    },
    {
      v1: "do",
      v2: "did",
      v3: "done",
      translation: "делать",
      example: "I have done my homework",
    },
    {
      v1: "have",
      v2: "had",
      v3: "had",
      translation: "иметь",
      example: "He has had lunch",
    },
    {
      v1: "see",
      v2: "saw",
      v3: "seen",
      translation: "видеть",
      example: "I have seen this film",
    },
    {
      v1: "make",
      v2: "made",
      v3: "made",
      translation: "делать/создавать",
      example: "She has made a cake",
    },
    {
      v1: "come",
      v2: "came",
      v3: "come",
      translation: "приходить",
      example: "They have come back",
    },
    {
      v1: "take",
      v2: "took",
      v3: "taken",
      translation: "брать",
      example: "He has taken my pen",
    },
    {
      v1: "get",
      v2: "got",
      v3: "got/gotten",
      translation: "получать",
      example: "I have got a letter",
    },
    {
      v1: "give",
      v2: "gave",
      v3: "given",
      translation: "давать",
      example: "She has given me a gift",
    },
    {
      v1: "find",
      v2: "found",
      v3: "found",
      translation: "находить",
      example: "We have found the keys",
    },
    {
      v1: "write",
      v2: "wrote",
      v3: "written",
      translation: "писать",
      example: "He has written a book",
    },
    {
      v1: "read",
      v2: "read",
      v3: "read",
      translation: "читать",
      example: "I have read this article",
    },
    {
      v1: "speak",
      v2: "spoke",
      v3: "spoken",
      translation: "говорить",
      example: "She has spoken to him",
    },
    {
      v1: "know",
      v2: "knew",
      v3: "known",
      translation: "знать",
      example: "I have known him for years",
    },
    {
      v1: "eat",
      v2: "ate",
      v3: "eaten",
      translation: "есть",
      example: "They have eaten breakfast",
    },
    {
      v1: "drink",
      v2: "drank",
      v3: "drunk",
      translation: "пить",
      example: "He has drunk all the water",
    },
    {
      v1: "buy",
      v2: "bought",
      v3: "bought",
      translation: "покупать",
      example: "I have bought a new car",
    },
    {
      v1: "bring",
      v2: "brought",
      v3: "brought",
      translation: "приносить",
      example: "She has brought flowers",
    },
    {
      v1: "think",
      v2: "thought",
      v3: "thought",
      translation: "думать",
      example: "I have thought about it",
    },
    {
      v1: "tell",
      v2: "told",
      v3: "told",
      translation: "рассказывать",
      example: "He has told me the truth",
    },
    {
      v1: "feel",
      v2: "felt",
      v3: "felt",
      translation: "чувствовать",
      example: "I have felt tired lately",
    },
    {
      v1: "hear",
      v2: "heard",
      v3: "heard",
      translation: "слышать",
      example: "She has heard the news",
    },
    {
      v1: "leave",
      v2: "left",
      v3: "left",
      translation: "уходить",
      example: "They have left the office",
    },
    {
      v1: "lose",
      v2: "lost",
      v3: "lost",
      translation: "терять",
      example: "I have lost my wallet",
    },
    {
      v1: "meet",
      v2: "met",
      v3: "met",
      translation: "встречать",
      example: "We have met before",
    },
    {
      v1: "send",
      v2: "sent",
      v3: "sent",
      translation: "отправлять",
      example: "He has sent an email",
    },
    {
      v1: "spend",
      v2: "spent",
      v3: "spent",
      translation: "тратить",
      example: "I have spent all my money",
    },
    {
      v1: "win",
      v2: "won",
      v3: "won",
      translation: "выигрывать",
      example: "They have won the game",
    },
    {
      v1: "break",
      v2: "broke",
      v3: "broken",
      translation: "ломать",
      example: "She has broken her phone",
    },
  ];

  return (
    <>
      <UiSection title="📚 30 самых важных неправильных глаголов">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="text-lg font-semibold text-purple-900 mb-3">
            🎯 Эти 30 глаголов покрывают 80% всех ситуаций!
          </p>
          <p className="text-zinc-700 mb-2">
            Для Present Perfect нужна <strong>третья форма (V3)</strong> — Past
            Participle.
          </p>
          <p className="text-zinc-700">
            Учи их постепенно — по 5-10 в день. Используй карточки или
            приложения!
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 gap-3">
        {irregularVerbs.map((verb, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-zinc-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-900">
                {idx + 1}
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">V1 (Base)</p>
                  <p className="font-bold text-zinc-900">{verb.v1}</p>
                  <p className="text-xs text-zinc-600">{verb.translation}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">V2 (Past Simple)</p>
                  <p className="font-semibold text-zinc-700">{verb.v2}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">
                    V3 (Past Participle)
                  </p>
                  <p className="font-bold text-indigo-600">{verb.v3}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">
                    Пример в Present Perfect
                  </p>
                  <p className="text-sm italic text-zinc-700">{verb.example}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-300">
        <p className="font-bold text-amber-900 text-lg mb-3">
          💡 Как запоминать неправильные глаголы?
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-zinc-700">
          <li>
            <strong>Группируй по похожести:</strong> know-known, grow-grown,
            throw-thrown
          </li>
          <li>
            <strong>Используй карточки:</strong> на одной стороне V1, на другой
            — V3
          </li>
          <li>
            <strong>Составляй предложения:</strong> I have seen, She has gone,
            We have done
          </li>
          <li>
            <strong>Учи по 5-10 в день:</strong> не пытайся выучить все сразу!
          </li>
          <li>
            <strong>Практикуй регулярно:</strong> повторение — мать учения!
          </li>
        </ol>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Слова-маркеры Present Perfect ===== */
function Step4() {
  const exercise1: FillItem[] = [
    {
      left: "1. I have",
      right: "finished my work. (только что)",
      answers: ["just"],
      explanation: "JUST = только что (ставится между have/has и V3)",
    },
    {
      left: "2. She has",
      right: "arrived. (уже)",
      answers: ["already"],
      explanation: "ALREADY = уже (в утверждениях)",
    },
    {
      left: "3. Have you finished",
      right: "? (ещё/уже)",
      answers: ["yet"],
      explanation: "YET = ещё/уже (в вопросах и отрицаниях, в конце)",
    },
    {
      left: "4. I haven't seen him",
      right: ". (ещё)",
      answers: ["yet"],
      explanation: "YET в отрицании = ещё (не)",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Слова-маркеры Present Perfect">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-4 border-2 border-blue-300">
          <p className="text-lg font-semibold text-blue-900 mb-3">
            Эти слова помогают понять, что нужен Present Perfect!
          </p>
          <p className="text-zinc-700">
            Запомни эти маркеры — они подскажут, когда использовать Present
            Perfect.
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
          <div className="text-4xl mb-3">✨</div>
          <p className="font-bold text-green-900 text-xl mb-3">JUST</p>
          <p className="text-sm text-zinc-700 mb-3">Только что (недавно)</p>

          <div className="bg-white rounded p-4 mb-3">
            <p className="text-sm font-bold text-green-900 mb-2">
              Место: между have/has и V3
            </p>
            <p className="text-sm mb-1">
              I have <strong className="text-green-600">just</strong> finished.
            </p>
            <p className="text-xs text-zinc-600">Я только что закончил.</p>
          </div>

          <div className="bg-green-100 rounded p-3">
            <p className="text-sm">
              • She has <strong>just</strong> arrived.
              <br />• We have <strong>just</strong> eaten.
              <br />• He has <strong>just</strong> left.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-200">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-bold text-blue-900 text-xl mb-3">ALREADY</p>
          <p className="text-sm text-zinc-700 mb-3">Уже (раньше ожидаемого)</p>

          <div className="bg-white rounded p-4 mb-3">
            <p className="text-sm font-bold text-blue-900 mb-2">
              Место: между have/has и V3
            </p>
            <p className="text-sm mb-1">
              I have <strong className="text-blue-600">already</strong> done it.
            </p>
            <p className="text-xs text-zinc-600">Я уже это сделал.</p>
          </div>

          <div className="bg-blue-100 rounded p-3">
            <p className="text-sm">
              • She has <strong>already</strong> left.
              <br />• They have <strong>already</strong> seen it.
              <br />• We have <strong>already</strong> finished.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200">
          <div className="text-4xl mb-3">❓</div>
          <p className="font-bold text-purple-900 text-xl mb-3">YET</p>
          <p className="text-sm text-zinc-700 mb-3">
            Ещё/уже (в вопросах и отрицаниях)
          </p>

          <div className="bg-white rounded p-4 mb-3">
            <p className="text-sm font-bold text-purple-900 mb-2">
              Место: В КОНЦЕ предложения
            </p>
            <p className="text-sm mb-1">
              Have you finished <strong className="text-purple-600">yet</strong>
              ?
            </p>
            <p className="text-xs text-zinc-600 mb-2">Ты уже закончил?</p>
            <p className="text-sm mb-1">
              I haven&apos;t finished{" "}
              <strong className="text-purple-600">yet</strong>.
            </p>
            <p className="text-xs text-zinc-600">Я ещё не закончил.</p>
          </div>

          <div className="bg-purple-100 rounded p-3">
            <p className="text-sm">
              ❓ Has she arrived <strong>yet</strong>?<br />❌ I haven&apos;t
              seen him <strong>yet</strong>.<br />❓ Have they called{" "}
              <strong>yet</strong>?
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-200">
          <div className="text-4xl mb-3">🔄</div>
          <p className="font-bold text-amber-900 text-xl mb-3">EVER / NEVER</p>
          <p className="text-sm text-zinc-700 mb-3">Когда-либо / Никогда</p>

          <div className="bg-white rounded p-4 mb-3">
            <p className="text-sm font-bold text-amber-900 mb-2">
              EVER — в вопросах
            </p>
            <p className="text-sm mb-1">
              Have you <strong className="text-amber-600">ever</strong> been to
              Paris?
            </p>
            <p className="text-xs text-zinc-600 mb-3">
              Ты когда-нибудь был в Париже?
            </p>

            <p className="text-sm font-bold text-amber-900 mb-2">
              NEVER — в утверждениях (= отрицание)
            </p>
            <p className="text-sm mb-1">
              I have <strong className="text-amber-600">never</strong> been to
              Paris.
            </p>
            <p className="text-xs text-zinc-600">Я никогда не был в Париже.</p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: JUST, ALREADY, YET"
        instruction="Вставьте правильное слово."
        items={exercise1}
      />

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
        <p className="font-bold text-indigo-900 text-lg mb-3">
          📊 Другие маркеры Present Perfect:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4">
            <p className="font-bold text-indigo-900 mb-2">
              Незавершённые периоды:
            </p>
            <p className="text-sm text-zinc-700">
              • <strong>today</strong> (сегодня)
              <br />• <strong>this week/month/year</strong>
              <br />• <strong>recently</strong> (недавно)
              <br />• <strong>lately</strong> (в последнее время)
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="font-bold text-indigo-900 mb-2">Опыт в жизни:</p>
            <p className="text-sm text-zinc-700">
              • <strong>ever</strong> (когда-либо)
              <br />• <strong>never</strong> (никогда)
              <br />• <strong>before</strong> (раньше)
              <br />• <strong>so far</strong> (до сих пор)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: FOR и SINCE ===== */
function Step5() {
  const exercise2: FillItem[] = [
    {
      left: "1. I have lived here",
      right: "2015. (с)",
      answers: ["since"],
      explanation: "SINCE + точка начала (2015 = конкретный момент)",
    },
    {
      left: "2. She has worked there",
      right: "five years. (в течение)",
      answers: ["for"],
      explanation: "FOR + период времени (five years = длительность)",
    },
    {
      left: "3. We have known each other",
      right: "childhood. (с)",
      answers: ["since"],
      explanation: "SINCE + точка начала (childhood = начало)",
    },
    {
      left: "4. He has been sick",
      right: "a week. (в течение)",
      answers: ["for"],
      explanation: "FOR + период (a week = длительность)",
    },
  ];

  return (
    <>
      <UiSection title="⏰ FOR и SINCE — как долго?">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
          <p className="text-lg font-semibold text-purple-900 mb-3">
            Самые важные слова для Present Perfect!
          </p>
          <p className="text-zinc-700 mb-2">
            FOR и SINCE помогают сказать, <strong>КАК ДОЛГО</strong> длится
            действие.
          </p>
          <p className="text-zinc-700">
            Действие началось в прошлом и{" "}
            <strong>продолжается до СЕЙЧАС</strong>!
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">📏</div>
            <div>
              <p className="text-3xl font-bold text-blue-900">FOR</p>
              <p className="text-lg text-blue-700">Период времени</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-900 mb-3">
              FOR = В ТЕЧЕНИЕ (период, длительность)
            </p>
            <p className="text-sm text-zinc-700 mb-3">
              Используем FOR, когда говорим о <strong>длительности</strong>:
              сколько времени прошло.
            </p>
            <div className="bg-blue-50 rounded p-3">
              <p className="text-xs text-blue-800 font-bold mb-2">
                С FOR используем:
              </p>
              <p className="text-sm">
                • <strong>for 2 hours</strong> (2 часа)
                <br />• <strong>for 3 days</strong> (3 дня)
                <br />• <strong>for a week</strong> (неделю)
                <br />• <strong>for a long time</strong> (долгое время)
                <br />• <strong>for years</strong> (годы)
                <br />• <strong>for ages</strong> (целую вечность)
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-1">
                I have lived here{" "}
                <strong className="text-blue-600">for 5 years</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я живу здесь (в течение) 5 лет. (и продолжаю!)
              </p>
            </div>
            <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-1">
                She has worked here{" "}
                <strong className="text-blue-600">for a month</strong>.
              </p>
              <p className="text-xs text-zinc-600">Она работает здесь месяц.</p>
            </div>
            <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-500">
              <p className="text-sm font-bold mb-1">
                We haven&apos;t seen them{" "}
                <strong className="text-blue-600">for ages</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Мы не видели их целую вечность.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">📍</div>
            <div>
              <p className="text-3xl font-bold text-purple-900">SINCE</p>
              <p className="text-lg text-purple-700">Точка начала</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-purple-900 mb-3">
              SINCE = С (момента, точки начала)
            </p>
            <p className="text-sm text-zinc-700 mb-3">
              Используем SINCE, когда указываем <strong>момент начала</strong>:
              когда началось.
            </p>
            <div className="bg-purple-50 rounded p-3">
              <p className="text-xs text-purple-800 font-bold mb-2">
                С SINCE используем:
              </p>
              <p className="text-sm">
                • <strong>since 2020</strong> (с 2020 года)
                <br />• <strong>since Monday</strong> (с понедельника)
                <br />• <strong>since January</strong> (с января)
                <br />• <strong>since morning</strong> (с утра)
                <br />• <strong>since childhood</strong> (с детства)
                <br />• <strong>since I was a child</strong> (с тех пор как...)
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-purple-50 rounded p-4 border-l-4 border-purple-500">
              <p className="text-sm font-bold mb-1">
                I have lived here{" "}
                <strong className="text-purple-600">since 2020</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я живу здесь с 2020 года. (начал в 2020 → сейчас)
              </p>
            </div>
            <div className="bg-purple-50 rounded p-4 border-l-4 border-purple-500">
              <p className="text-sm font-bold mb-1">
                She has worked here{" "}
                <strong className="text-purple-600">since Monday</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Она работает здесь с понедельника.
              </p>
            </div>
            <div className="bg-purple-50 rounded p-4 border-l-4 border-purple-500">
              <p className="text-sm font-bold mb-1">
                I haven&apos;t seen him{" "}
                <strong className="text-purple-600">since yesterday</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я не видел его со вчерашнего дня.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
        <p className="font-bold text-yellow-900 text-xl mb-4">
          ⚖️ КАК ВЫБРАТЬ: FOR или SINCE?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-5">
            <p className="font-bold text-blue-600 text-lg mb-3">
              FOR = длительность
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Ответ на вопрос: &quot;Сколько времени?&quot;
            </p>
            <div className="bg-blue-50 rounded p-3">
              <p className="text-sm mb-1">✓ 2 hours, 3 days, a week</p>
              <p className="text-xs text-zinc-600">Можно посчитать период!</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-5">
            <p className="font-bold text-purple-600 text-lg mb-3">
              SINCE = начало
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Ответ на вопрос: &quot;С какого момента?&quot;
            </p>
            <div className="bg-purple-50 rounded p-3">
              <p className="text-sm mb-1">✓ 2020, Monday, morning</p>
              <p className="text-xs text-zinc-600">
                Конкретная точка на шкале времени!
              </p>
            </div>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: FOR или SINCE?"
        instruction="Вставьте FOR или SINCE."
        items={exercise2}
      />

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
        <p className="font-bold text-indigo-900 text-lg mb-3">
          💡 Лайфхак для запоминания:
        </p>
        <div className="bg-white rounded p-4">
          <p className="text-sm text-zinc-700 mb-2">
            <strong className="text-blue-600">FOR</strong> → можно{" "}
            <strong>посчитать</strong> (for 2 hours)
          </p>
          <p className="text-sm text-zinc-700">
            <strong className="text-purple-600">SINCE</strong> → нельзя
            посчитать, это <strong>точка</strong> (since Monday)
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: EVER, NEVER, BEFORE ===== */
function Step6() {
  const exercise3: FillItem[] = [
    {
      left: "1. Have you",
      right: "been to London? (когда-либо)",
      answers: ["ever"],
      explanation: "EVER = когда-либо (в вопросах о жизненном опыте)",
    },
    {
      left: "2. I have",
      right: "seen such a beautiful sunset! (никогда)",
      answers: ["never"],
      explanation:
        "NEVER = никогда (в утверждениях, но со значением отрицания)",
    },
    {
      left: "3. Have we met",
      right: "? (раньше)",
      answers: ["before"],
      explanation: "BEFORE = раньше (в конце вопроса)",
    },
    {
      left: "4. She has",
      right: "tried sushi. (никогда)",
      answers: ["never"],
      explanation: "NEVER с Present Perfect = никогда в жизни",
    },
  ];

  return (
    <>
      <UiSection title="🌟 EVER, NEVER, BEFORE — говорим о жизненном опыте">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Эти слова используются для обсуждения опыта в жизни!
          </p>
          <p className="text-zinc-700">
            Present Perfect идеально подходит для разговора о том, что ты делал
            или не делал в своей жизни до настоящего момента.
          </p>
        </div>
      </UiSection>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">❓</div>
            <div>
              <p className="text-3xl font-bold text-blue-900">EVER</p>
              <p className="text-lg text-blue-700">Когда-либо, когда-нибудь</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-blue-900 mb-3 text-lg">
              Используется в ВОПРОСАХ о жизненном опыте
            </p>
            <p className="text-sm text-zinc-700 mb-3">
              EVER = когда-либо в жизни
              <br />
              Место: между <strong>have/has</strong> и <strong>V3</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                Have you <strong className="text-blue-600">ever</strong> been to
                Paris?
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Ты когда-нибудь был в Париже?
              </p>
              <p className="text-xs text-blue-700 italic">
                💬 Спрашиваем о жизненном опыте
              </p>
            </div>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                Have you <strong className="text-blue-600">ever</strong> eaten
                sushi?
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Ты когда-нибудь ел суши?
              </p>
              <p className="text-xs text-blue-700 italic">
                💬 Опыт: пробовал ли ты это?
              </p>
            </div>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                Has she <strong className="text-blue-600">ever</strong> seen
                snow?
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Она когда-нибудь видела снег?
              </p>
              <p className="text-xs text-blue-700 italic">
                💬 В жизни видела или нет?
              </p>
            </div>
            <div className="bg-blue-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                Have they <strong className="text-blue-600">ever</strong> won a
                prize?
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Они когда-нибудь выигрывали приз?
              </p>
              <p className="text-xs text-blue-700 italic">
                💬 Был ли такой опыт?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-6 border-2 border-red-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">🚫</div>
            <div>
              <p className="text-3xl font-bold text-red-900">NEVER</p>
              <p className="text-lg text-red-700">Никогда</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-red-900 mb-3 text-lg">
              Используется в УТВЕРЖДЕНИЯХ (но имеет отрицательное значение!)
            </p>
            <p className="text-sm text-zinc-700 mb-3">
              NEVER = никогда в жизни
              <br />
              Место: между <strong>have/has</strong> и <strong>V3</strong>
            </p>
            <div className="bg-red-50 rounded p-3">
              <p className="text-sm font-bold text-red-900 mb-2">⚠️ Важно:</p>
              <p className="text-sm text-zinc-700">
                NEVER уже содержит отрицание, поэтому НЕ используем NOT!
                <br />✓ I have <strong>never</strong> been...
                <br />✗ I have <del>not never</del> been... (двойное отрицание!)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                I have <strong className="text-red-600">never</strong> been to
                Paris.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Я никогда не был в Париже.
              </p>
              <p className="text-xs text-red-700 italic">
                💬 Нет такого опыта в жизни
              </p>
            </div>
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                She has <strong className="text-red-600">never</strong> eaten
                sushi.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Она никогда не ела суши.
              </p>
              <p className="text-xs text-red-700 italic">
                💬 Никогда в жизни не пробовала
              </p>
            </div>
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                He has <strong className="text-red-600">never</strong> seen
                snow.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Он никогда не видел снег.
              </p>
              <p className="text-xs text-red-700 italic">
                💬 В жизни не было такого опыта
              </p>
            </div>
            <div className="bg-red-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                We have <strong className="text-red-600">never</strong> met
                before.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                Мы никогда раньше не встречались.
              </p>
              <p className="text-xs text-red-700 italic">💬 Первая встреча</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">⏮️</div>
            <div>
              <p className="text-3xl font-bold text-purple-900">BEFORE</p>
              <p className="text-lg text-purple-700">Раньше, прежде</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-purple-900 mb-3 text-lg">
              Используется для указания на прошлый опыт
            </p>
            <p className="text-sm text-zinc-700 mb-3">
              BEFORE = раньше, до этого момента
              <br />
              Место: обычно В КОНЦЕ предложения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                I have seen this film{" "}
                <strong className="text-purple-600">before</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Я видел этот фильм раньше.
              </p>
            </div>
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                Have we met <strong className="text-purple-600">before</strong>?
              </p>
              <p className="text-xs text-zinc-600">Мы встречались раньше?</p>
            </div>
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                She has done this{" "}
                <strong className="text-purple-600">before</strong>.
              </p>
              <p className="text-xs text-zinc-600">Она делала это раньше.</p>
            </div>
            <div className="bg-purple-50 rounded p-4">
              <p className="text-sm font-bold mb-2">
                I haven&apos;t been here{" "}
                <strong className="text-purple-600">before</strong>.
              </p>
              <p className="text-xs text-zinc-600">Я не был здесь раньше.</p>
            </div>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: EVER, NEVER, BEFORE"
        instruction="Вставьте правильное слово."
        items={exercise3}
      />

      <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
        <p className="font-bold text-yellow-900 text-xl mb-4">
          💡 Как их различать?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded p-4">
            <p className="font-bold text-blue-600 mb-2">EVER</p>
            <p className="text-sm text-zinc-700">
              ❓ В вопросах
              <br />
              💭 &quot;Ты когда-нибудь...?&quot;
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="font-bold text-red-600 mb-2">NEVER</p>
            <p className="text-sm text-zinc-700">
              ✅ В утверждениях
              <br />
              💭 &quot;Я никогда не...&quot;
            </p>
          </div>
          <div className="bg-white rounded p-4">
            <p className="font-bold text-purple-600 mb-2">BEFORE</p>
            <p className="text-sm text-zinc-700">
              🕐 В конце
              <br />
              💭 &quot;...раньше&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Типичные ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="⚠️ 10 типичных ошибок русскоязычных студентов">
        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 mb-4 border-2 border-red-300">
          <p className="text-lg font-semibold text-red-900 mb-3">
            Разберём самые частые ошибки и научимся их избегать!
          </p>
          <p className="text-zinc-700">
            Эти ошибки делают почти все — изучи их, чтобы говорить правильно!
          </p>
        </div>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 1: Present Perfect с точным временем
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I have seen him <del>yesterday</del>.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I <strong>saw</strong> him yesterday.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> Yesterday = точное время → нужен Past
                Simple!
                <br />
                Present Perfect НЕ используется с yesterday, last week, in 2020,
                etc.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 2: Забывают HAVE/HAS
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I <del>finished</del> my work.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I <strong>have finished</strong> my work.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> Без have/has это Past Simple!
                <br />
                Present Perfect = HAVE/HAS + V3
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 3: Неправильная третья форма
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I have <del>saw</del> this film.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I have <strong>seen</strong> this film.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> Saw = V2 (Past Simple), нужна V3 =
                seen!
                <br />
                see → saw → <strong>seen</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 4: HAS с I/You/We/They
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I <del>has</del> finished.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I <strong>have</strong> finished.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> HAS только с he/she/it!
                <br />
                I, you, we, they → <strong>HAVE</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 5: YET не в конце
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I <del>yet</del> haven&apos;t finished.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I haven&apos;t finished <strong>yet</strong>.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> YET всегда В КОНЦЕ предложения!
                <br />
                JUST/ALREADY — между have и V3, YET — в конце
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 6: FOR вместо SINCE
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I have lived here <del>for</del> 2020.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I have lived here <strong>since</strong> 2020.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> 2020 = точка начала → SINCE!
                <br />
                FOR = период (5 years), SINCE = момент (2020)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 7: Двойное отрицание с NEVER
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I <del>haven&apos;t never</del> been there.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ I have <strong>never</strong> been there.
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> NEVER уже = отрицание!
                <br />
                Не нужно добавлять NOT
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 8: GONE вместо BEEN (и наоборот)
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ I have <del>gone</del> to Paris. (я сейчас здесь!)
                </p>
                <p className="text-sm text-green-700 font-semibold mb-3">
                  ✅ I have <strong>been</strong> to Paris. (был и вернулся)
                </p>
                <p className="text-sm text-green-700">
                  ✓ She has <strong>gone</strong> to Paris. (она уехала и там!)
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>BEEN</strong> = был и вернулся (опыт)
                <br />
                <strong>GONE</strong> = ушёл и сейчас там
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 9: Порядок слов в вопросе
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ You <del>have finished</del>?
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  ✅ <strong>Have</strong> you finished?
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                <strong>Почему?</strong> В вопросах HAVE/HAS на первое место!
                <br />
                Have/Has + subject + V3?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-red-200 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">❌</div>
            <div className="flex-1">
              <p className="font-bold text-red-900 text-lg mb-3">
                Ошибка 10: Не понимают разницу с Past Simple
              </p>
              <div className="bg-red-50 rounded p-4 mb-3">
                <p className="text-sm text-zinc-700 mb-2">
                  Когда <strong>важен результат СЕЙЧАС</strong> → Present
                  Perfect
                </p>
                <p className="text-sm text-green-700 mb-2">
                  ✅ I have lost my keys. (у меня нет ключей СЕЙЧАС!)
                </p>
                <p className="text-sm text-zinc-700 mb-2">
                  Когда <strong>точное время в прошлом</strong> → Past Simple
                </p>
                <p className="text-sm text-green-700">
                  ✅ I lost my keys yesterday. (когда? вчера!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
        <p className="font-bold text-green-900 text-xl mb-4">
          ✅ Как избежать ошибок?
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
          <li>
            Всегда проверяй: есть ли точное время? (yesterday, last week) → Past
            Simple
          </li>
          <li>Помни формулу: HAVE/HAS + V3</li>
          <li>Учи неправильные глаголы — особенно 3-ю форму!</li>
          <li>YET — всегда в конце!</li>
          <li>FOR = период, SINCE = точка начала</li>
          <li>NEVER = уже отрицание, не добавляй NOT</li>
        </ol>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения ===== */
function Step8() {
  const exercise4: FillItem[] = [
    {
      left: "1. I",
      right: "finished my homework. (have/has)",
      answers: ["have"],
      explanation: "I → HAVE",
    },
    {
      left: "2. She",
      right: "to London. (been/went)",
      answers: ["has been", "been"],
      explanation: "Present Perfect: has been (опыт в жизни)",
    },
    {
      left: "3. Have you",
      right: "seen this film? (ever/never)",
      answers: ["ever"],
      explanation: "В вопросе → EVER",
    },
    {
      left: "4. I have lived here",
      right: "2020. (for/since)",
      answers: ["since"],
      explanation: "2020 = точка начала → SINCE",
    },
    {
      left: "5. He has worked there",
      right: "five years. (for/since)",
      answers: ["for"],
      explanation: "Five years = период → FOR",
    },
    {
      left: "6. I have",
      right: "finished yet. (not/never)",
      answers: ["not"],
      explanation: "С YET используем NOT (haven't)",
    },
    {
      left: "7. She has",
      right: "arrived. (just/yet)",
      answers: ["just"],
      explanation: "Только что = JUST (между has и V3)",
    },
    {
      left: "8. I have",
      right: "been to Japan. (ever/never)",
      answers: ["never"],
      explanation: "Никогда = NEVER (в утверждении)",
    },
  ];

  return (
    <>
      <UiSection title="📝 Практика Present Perfect">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Проверь, насколько хорошо ты усвоил материал!
          </p>
          <p className="text-zinc-700">
            Эти упражнения охватывают все основные темы Present Perfect.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Основы Present Perfect"
        instruction="Вставьте правильное слово или форму."
        items={exercise4}
      />

      <UiSection title="✍️ Дополнительные задания">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="font-bold text-blue-900 mb-4 text-lg">
              Задание 1: Переведите на английский
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
              <li>Я только что закончил работу.</li>
              <li>Она уже приехала.</li>
              <li>Ты видел этот фильм?</li>
              <li>Мы живём здесь с 2015 года.</li>
              <li>Он работает там 5 лет.</li>
              <li>Я никогда не был в Париже.</li>
              <li>Вы когда-нибудь ели суши?</li>
              <li>Они ещё не закончили.</li>
            </ol>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <p className="font-bold text-green-900 mb-4 text-lg">
              Задание 2: Исправьте ошибки
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
              <li>I have saw this film. →</li>
              <li>She has finish her work. →</li>
              <li>Have you ever been to Paris yesterday? →</li>
              <li>He has lived here for 2020. →</li>
              <li>I haven&apos;t never been there. →</li>
              <li>You have finished? →</li>
              <li>I have yet finished. →</li>
              <li>She have gone to London. →</li>
            </ol>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
        <p className="font-bold text-purple-900 text-lg mb-4">
          🎯 Задание 3: Составьте предложения
        </p>
        <p className="text-sm text-zinc-700 mb-4">
          Используя Present Perfect, расскажите о своём жизненном опыте:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-700">
          <li>3 страны или города, где вы были</li>
          <li>3 вещи, которые вы никогда не делали</li>
          <li>Что вы делали сегодня (используя just/already)</li>
          <li>Как долго вы учите английский (for/since)</li>
          <li>Самое интересное, что вы делали в жизни</li>
        </ol>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Диалоги ===== */
function Step9() {
  return (
    <>
      <UiSection title="💬 Диалоги с Present Perfect">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-4 border-2 border-blue-300">
          <p className="text-lg font-semibold text-blue-900 mb-3">
            Практикуйте Present Perfect в реальных разговорах!
          </p>
          <p className="text-zinc-700">
            Эти диалоги помогут вам научиться использовать время естественно.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
          <p className="font-bold text-blue-900 text-lg mb-4">
            Диалог 1: О путешествиях
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Have you <strong>ever been</strong> to Japan?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                Yes, I have. I <strong>visited</strong> Tokyo last year.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Lucky you! I have <strong>never been</strong> there, but
                I&apos;d love to go!
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                You should! It&apos;s amazing. Have you{" "}
                <strong>travelled</strong> anywhere interesting recently?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Actually, I have <strong>just come back</strong> from Spain!
              </p>
            </div>
          </div>
          <div className="mt-4 bg-blue-50 rounded p-3">
            <p className="text-xs text-blue-800">
              <strong>Обратите внимание:</strong> В диалоге смешиваются Present
              Perfect (опыт, результат) и Past Simple (конкретное время: last
              year). Это нормально!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-green-200 p-6">
          <p className="font-bold text-green-900 text-lg mb-4">
            Диалог 2: На работе
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Hi! Have you <strong>finished</strong> the report{" "}
                <strong>yet</strong>?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                I have <strong>already done</strong> most of it, but I
                haven&apos;t <strong>checked</strong> it <strong>yet</strong>.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Great! How long have you <strong>been working</strong> on it?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                I have <strong>been working</strong> on it{" "}
                <strong>since</strong> Monday.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                That&apos;s <strong>for</strong> three days! You&apos;ve{" "}
                <strong>done</strong> a lot!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-purple-200 p-6">
          <p className="font-bold text-purple-900 text-lg mb-4">
            Диалог 3: Встреча друзей
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Hey! I haven&apos;t <strong>seen</strong> you{" "}
                <strong>for ages</strong>! How have you <strong>been</strong>?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                I&apos;ve <strong>been</strong> great! I have{" "}
                <strong>just got</strong> a new job!
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>Congratulations! Where are you working now?</p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                At Google! I have <strong>wanted</strong> to work there{" "}
                <strong>for years</strong>!
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                That&apos;s amazing! Have you <strong>started</strong>{" "}
                <strong>already</strong>?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                Not <strong>yet</strong>. I start next Monday!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-amber-200 p-6">
          <p className="font-bold text-amber-900 text-lg mb-4">
            Диалог 4: В ресторане
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Have you <strong>ever eaten</strong> Thai food?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                Yes, I have <strong>tried</strong> it <strong>before</strong>. I
                love it!
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-600 min-w-[30px]">A:</span>
              <p>
                Perfect! I have <strong>never been</strong> to a Thai
                restaurant. What do you recommend?
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-600 min-w-[30px]">B:</span>
              <p>
                Try Pad Thai! I have <strong>ordered</strong> it many times.
                It&apos;s delicious!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
        <p className="font-bold text-purple-900 text-lg mb-4">
          🎯 Задание: Создайте свой диалог
        </p>
        <p className="text-sm text-zinc-700 mb-4">
          Напишите короткий диалог (5-7 реплик) на одну из тем:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
          <li>
            <strong>Тема 1:</strong> Обсуждение фильма, который вы смотрели
          </li>
          <li>
            <strong>Тема 2:</strong> Разговор о планах на сегодня (уже сделано /
            ещё нет)
          </li>
          <li>
            <strong>Тема 3:</strong> Обсуждение жизненного опыта (страны, хобби)
          </li>
          <li>
            <strong>Тема 4:</strong> Встреча со старым другом (как давно не
            виделись)
          </li>
        </ul>
        <p className="text-sm text-zinc-700 mt-4">
          Используйте минимум 5 примеров Present Perfect с разными
          словами-маркерами!
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговый тест ===== */
function Step10() {
  const finalTest: FillItem[] = [
    {
      left: "1. I",
      right: "my homework. (just/finish)",
      answers: ["have just finished"],
      explanation: "Present Perfect: have + just + V3 (finished)",
    },
    {
      left: "2. She",
      right: "to Paris. (never/be)",
      answers: ["has never been"],
      explanation: "Has + never + V3 (been)",
    },
    {
      left: "3. Have you",
      right: "? (finish/yet)",
      answers: ["finished yet"],
      explanation: "V3 (finished) + yet в конце",
    },
    {
      left: "4. He",
      right: "here for 5 years. (live)",
      answers: ["has lived"],
      explanation: "Has + V3 + for (период)",
    },
    {
      left: "5. I",
      right: "him since Monday. (not/see)",
      answers: ["haven't seen", "have not seen"],
      explanation: "Haven't + V3 + since (точка начала)",
    },
    {
      left: "6.",
      right: "you ever been to Japan? (have)",
      answers: ["Have"],
      explanation: "Have + you + ever + been (опыт в жизни)",
    },
    {
      left: "7. They",
      right: "arrived. (already)",
      answers: ["have already"],
      explanation: "Have + already (между have и V3)",
    },
    {
      left: "8. I",
      right: "this film before. (see)",
      answers: ["have seen"],
      explanation: "Have + V3 (seen) + before",
    },
    {
      left: "9. She has worked there",
      right: "2020. (for/since)",
      answers: ["since"],
      explanation: "2020 = точка начала → since",
    },
    {
      left: "10. We",
      right: "met before. Have we? (never)",
      answers: ["have never", "haven't"],
      explanation: "Have never или haven't (отрицание опыта)",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Итоговый тест: Present Perfect">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Финальная проверка знаний!
          </p>
          <p className="text-zinc-700">
            Пройдите тест, чтобы убедиться, что вы освоили Present Perfect.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Финальный тест: 10 вопросов"
        instruction="Составьте предложение, используя данные слова."
        items={finalTest}
      />

      <UiSection title="📊 Сводная таблица Present Perfect">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 p-3 text-left">Аспект</th>
                <th className="border border-zinc-300 p-3 text-left">
                  Правило
                </th>
                <th className="border border-zinc-300 p-3 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Формула</strong>
                </td>
                <td className="border border-zinc-300 p-3">have/has + V3</td>
                <td className="border border-zinc-300 p-3">I have finished</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>Когда?</strong>
                </td>
                <td className="border border-zinc-300 p-3">Результат СЕЙЧАС</td>
                <td className="border border-zinc-300 p-3">
                  I have lost my keys
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>JUST</strong>
                </td>
                <td className="border border-zinc-300 p-3">Только что</td>
                <td className="border border-zinc-300 p-3">
                  I have just finished
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>ALREADY</strong>
                </td>
                <td className="border border-zinc-300 p-3">Уже</td>
                <td className="border border-zinc-300 p-3">
                  She has already left
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>YET</strong>
                </td>
                <td className="border border-zinc-300 p-3">
                  Ещё/уже (в конце)
                </td>
                <td className="border border-zinc-300 p-3">
                  Haven&apos;t finished yet
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>FOR</strong>
                </td>
                <td className="border border-zinc-300 p-3">Период</td>
                <td className="border border-zinc-300 p-3">For 5 years</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>SINCE</strong>
                </td>
                <td className="border border-zinc-300 p-3">Точка начала</td>
                <td className="border border-zinc-300 p-3">Since 2020</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>EVER</strong>
                </td>
                <td className="border border-zinc-300 p-3">Когда-либо (в ?)</td>
                <td className="border border-zinc-300 p-3">
                  Have you ever been?
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>NEVER</strong>
                </td>
                <td className="border border-zinc-300 p-3">Никогда</td>
                <td className="border border-zinc-300 p-3">
                  I have never been
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center border-2 border-green-200">
        <p className="text-4xl mb-4">🎉</p>
        <p className="text-3xl font-bold text-green-900 mb-3">Поздравляем!</p>
        <p className="text-lg text-zinc-700 mb-4">
          Вы завершили изучение <strong>Present Perfect</strong>!
        </p>
        <div className="bg-white rounded-lg p-6 inline-block text-left max-w-2xl">
          <p className="text-sm text-zinc-600 mb-3">Теперь вы знаете:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Как образуется Present Perfect (have/has + V3)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>30 самых важных неправильных глаголов</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                Все слова-маркеры (just, already, yet, for, since, ever, never)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Разницу между Present Perfect и Past Simple</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>5 основных значений времени</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Как избегать типичных ошибок</span>
            </li>
          </ul>
        </div>
        <p className="text-sm text-zinc-600 mt-6">
          💪 Продолжайте практиковаться — чем больше используете, тем лучше
          запомните!
        </p>
      </div>
    </>
  );
}
