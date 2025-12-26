"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function GerundsInfinitives({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🎯 Gerunds & Infinitives — Продвинутые паттерны">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Герундий или Инфинитив? Вот в чём вопрос!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Gerund** (-ing форма) и **Infinitive** (to + глагол) — одна из
              самых сложных тем в английском! Некоторые глаголы **МЕНЯЮТ
              ЗНАЧЕНИЕ** в зависимости от того, что идёт после них. Другие берут
              **ТОЛЬКО** герундий или **ТОЛЬКО** инфинитив.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔑 Ключевая идея
              </h3>
              <p className="text-center text-lg font-semibold text-red-900 mb-2">
                Значение МЕНЯЕТСЯ!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    I stopped{" "}
                    <strong className="text-green-700">to smoke</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я остановился, ЧТОБЫ ПОКУРИТЬ
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    I stopped <strong className="text-blue-700">smoking</strong>
                    .
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я БРОСИЛ КУРИТЬ (перестал)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-lg font-bold text-green-900 mb-3 text-center">
                  Gerund (-ing)
                </h3>
                <p className="text-sm mb-2 text-center">
                  Когда действие уже началось
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I enjoy <strong className="text-green-700">reading</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Мне нравится читать (процесс)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h3 className="text-lg font-bold text-blue-900 mb-3 text-center">
                  Infinitive (to + V)
                </h3>
                <p className="text-sm mb-2 text-center">
                  Цель или будущее действие
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I want <strong className="text-blue-700">to read</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я хочу почитать (цель)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ Глаголы, меняющие значение</p>
                  <p>✅ Только герундий</p>
                  <p>✅ Только инфинитив</p>
                </div>
                <div>
                  <p>✅ Сложные паттерны</p>
                  <p>✅ Типичные ошибки</p>
                  <p>✅ Практические упражнения</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="🔄 STOP: to do vs doing — Критическая разница!">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              STOP — самый ВАЖНЫЙ глагол!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **STOP** — это глагол, который **РАДИКАЛЬНО** меняет значение в
              зависимости от того, что идёт после него!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  STOP + TO + глагол
                </h3>
                <p className="text-sm mb-3 text-center font-semibold">
                  Остановиться, ЧТОБЫ сделать что-то
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I stopped{" "}
                      <strong className="text-blue-700">to smoke</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я остановился, ЧТОБЫ ПОКУРИТЬ (цель остановки)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She stopped{" "}
                      <strong className="text-blue-700">to talk</strong> to me.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она остановилась, ЧТОБЫ ПОГОВОРИТЬ со мной
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      We stopped{" "}
                      <strong className="text-blue-700">to rest</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мы остановились, ЧТОБЫ ОТДОХНУТЬ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">
                  STOP + глагол-ing
                </h3>
                <p className="text-sm mb-3 text-center font-semibold">
                  ПРЕКРАТИТЬ делать что-то
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I stopped{" "}
                      <strong className="text-green-700">smoking</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я БРОСИЛ КУРИТЬ (перестал курить навсегда)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She stopped{" "}
                      <strong className="text-green-700">talking</strong> to me.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она ПЕРЕСТАЛА СО МНОЙ РАЗГОВАРИВАТЬ
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      We stopped{" "}
                      <strong className="text-green-700">working</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мы ПРЕКРАТИЛИ РАБОТАТЬ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
              <h4 className="font-bold text-purple-900 mb-3 text-center">
                🎯 Как запомнить?
              </h4>
              <div className="space-y-2 text-sm text-zinc-700">
                <p className="text-center font-semibold text-lg">
                  <strong className="text-blue-700">TO</strong> = ЦЕЛЬ (зачем
                  остановился)
                </p>
                <p className="text-center font-semibold text-lg">
                  <strong className="text-green-700">-ING</strong> = БРОСИТЬ
                  (перестать делать)
                </p>
                <div className="bg-yellow-50 rounded p-3 mt-3">
                  <p className="text-xs font-semibold text-yellow-900">
                    💡 Совет: Думай о TO как о стрелке → цель!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="🧠 REMEMBER & FORGET: to do vs doing">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              REMEMBER & FORGET — Прошлое или Будущее?
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти глаголы тоже **МЕНЯЮТ ЗНАЧЕНИЕ**! Выбор формы зависит от того,
              о **прошлом** или **будущем** действии вы говорите!
            </p>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  REMEMBER / FORGET + TO + глагол
                </h3>
                <p className="text-sm mb-3 font-semibold text-center">
                  Помнить/Забыть сделать что-то (БУДУЩЕЕ действие)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I remembered{" "}
                      <strong className="text-green-700">to call</strong> him.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я вспомнил, что нужно ПОЗВОНИТЬ (и позвонил)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I forgot{" "}
                      <strong className="text-green-700">to buy</strong> milk.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я забыл КУПИТЬ молоко (не купил)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Remember{" "}
                      <strong className="text-green-700">to lock</strong> the
                      door!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Не забудь ЗАКРЫТЬ дверь! (будущее действие)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Don't forget{" "}
                      <strong className="text-green-700">to call</strong> me!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Не забудь МНЕ ПОЗВОНИТЬ! (будущее)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  REMEMBER / FORGET + глагол-ing
                </h3>
                <p className="text-sm mb-3 font-semibold text-center">
                  Помнить/Забыть, КАК делал что-то (ПРОШЛОЕ действие)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I remember{" "}
                      <strong className="text-purple-700">calling</strong> him.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я помню, КАК ЗВОНИЛ ему (прошлое воспоминание)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I'll never forget{" "}
                      <strong className="text-purple-700">meeting</strong> you.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я никогда не забуду нашу ВСТРЕЧУ (прошлое)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I remember{" "}
                      <strong className="text-purple-700">locking</strong> the
                      door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я помню, что ЗАКРЫЛ дверь (прошлое)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I forgot{" "}
                      <strong className="text-purple-700">buying</strong> this!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я забыл, что ПОКУПАЛ это! (прошлое)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                🔑 Как запомнить?
              </h4>
              <div className="space-y-2 text-sm text-zinc-700">
                <p className="text-center font-semibold text-lg">
                  <strong className="text-green-700">TO</strong> = БУДУЩЕЕ (что
                  нужно сделать)
                </p>
                <p className="text-center font-semibold text-lg">
                  <strong className="text-purple-700">-ING</strong> = ПРОШЛОЕ
                  (что уже делал)
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="🔬 TRY & REGRET: to do vs doing">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              TRY & REGRET — Ещё два важных глагола!
            </h3>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  TRY + TO vs TRY + -ING
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      TRY + TO (попытаться)
                    </p>
                    <p className="text-sm mb-1">
                      I tried <strong className="text-blue-700">to open</strong>{" "}
                      the door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пытался открыть дверь (но не смог)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="font-semibold text-green-900 mb-2">
                      TRY + -ING (попробовать)
                    </p>
                    <p className="text-sm mb-1">
                      Try <strong className="text-green-700">opening</strong>{" "}
                      the window!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Попробуй открыть окно! (как эксперимент)
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded p-3">
                  <p className="text-sm font-semibold text-yellow-900">
                    💡 Разница:
                  </p>
                  <p className="text-sm text-zinc-700">
                    • <strong>TRY TO</strong> = приложить усилия (серьёзная
                    попытка)
                  </p>
                  <p className="text-sm text-zinc-700">
                    • <strong>TRY -ING</strong> = попробовать как эксперимент
                    (другой метод)
                  </p>
                </div>

                <div className="space-y-2 mt-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I tried <strong>to sleep</strong>, but I couldn't.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пытался уснуть (прилагал усилия)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Try <strong>drinking</strong> warm milk before bed!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Попробуй пить тёплое молоко! (как эксперимент)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-lg p-5 border-2 border-red-400">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  REGRET + TO vs REGRET + -ING
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      REGRET + TO (сожалеть, сообщая)
                    </p>
                    <p className="text-sm mb-1">
                      I regret{" "}
                      <strong className="text-blue-700">to tell</strong> you
                      this.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне жаль сообщать тебе это (формально)
                    </p>
                  </div>

                  <div className="bg-white rounded p-3 border-l-4 border-red-500">
                    <p className="font-semibold text-red-900 mb-2">
                      REGRET + -ING (сожалеть о прошлом)
                    </p>
                    <p className="text-sm mb-1">
                      I regret <strong className="text-red-700">telling</strong>{" "}
                      him.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я жалею, что сказал ему (прошлое)
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded p-3">
                  <p className="text-sm font-semibold text-yellow-900">
                    💡 Разница:
                  </p>
                  <p className="text-sm text-zinc-700">
                    • <strong>REGRET TO</strong> = сожалеть, СООБЩАЯ что-то
                    (формально)
                  </p>
                  <p className="text-sm text-zinc-700">
                    • <strong>REGRET -ING</strong> = сожалеть О ТОМ, ЧТО СДЕЛАЛ
                    (прошлое)
                  </p>
                </div>

                <div className="space-y-2 mt-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I regret <strong>to inform</strong> you that...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Сожалею сообщить вам, что... (формально)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I regret <strong>buying</strong> this car.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я жалею, что купил эту машину (прошлое)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="💚 Только GERUND (-ing) — Глаголы-исключения">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Эти глаголы берут ТОЛЬКО Gerund!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Некоторые глаголы **ВСЕГДА** требуют герундий (-ing). Их нужно
              просто **ЗАПОМНИТЬ**!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  1. ENJOY (наслаждаться)
                </h4>
                <p className="text-sm">
                  I <strong>enjoy</strong> reading.
                </p>
                <p className="text-xs text-zinc-600">Мне нравится читать</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  2. AVOID (избегать)
                </h4>
                <p className="text-sm">
                  I <strong>avoid</strong> driving at night.
                </p>
                <p className="text-xs text-zinc-600">Я избегаю ездить ночью</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  3. MIND (возражать)
                </h4>
                <p className="text-sm">
                  Do you <strong>mind</strong> waiting?
                </p>
                <p className="text-xs text-zinc-600">
                  Не возражаете подождать?
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  4. SUGGEST (предлагать)
                </h4>
                <p className="text-sm">
                  I <strong>suggest</strong> going home.
                </p>
                <p className="text-xs text-zinc-600">Я предлагаю пойти домой</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  5. FINISH (закончить)
                </h4>
                <p className="text-sm">
                  I <strong>finished</strong> working.
                </p>
                <p className="text-xs text-zinc-600">Я закончил работать</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  6. CONSIDER (рассматривать)
                </h4>
                <p className="text-sm">
                  I'm <strong>considering</strong> moving.
                </p>
                <p className="text-xs text-zinc-600">Я рассматриваю переезд</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  7. PRACTICE (практиковать)
                </h4>
                <p className="text-sm">
                  I <strong>practice</strong> speaking English.
                </p>
                <p className="text-xs text-zinc-600">
                  Я практикуюсь говорить по-английски
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  8. DENY (отрицать)
                </h4>
                <p className="text-sm">
                  He <strong>denied</strong> stealing.
                </p>
                <p className="text-xs text-zinc-600">Он отрицал, что крал</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  9. ADMIT (признавать)
                </h4>
                <p className="text-sm">
                  I <strong>admit</strong> making a mistake.
                </p>
                <p className="text-xs text-zinc-600">
                  Я признаю, что сделал ошибку
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  10. QUIT / GIVE UP (бросить)
                </h4>
                <p className="text-sm">
                  I <strong>quit</strong> smoking.
                </p>
                <p className="text-xs text-zinc-600">Я бросил курить</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔥 Полный список "Gerund-only" глаголов:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-zinc-700">
                <p>✅ enjoy</p>
                <p>✅ avoid</p>
                <p>✅ mind</p>
                <p>✅ suggest</p>
                <p>✅ finish</p>
                <p>✅ consider</p>
                <p>✅ practice</p>
                <p>✅ deny</p>
                <p>✅ admit</p>
                <p>✅ quit</p>
                <p>✅ give up</p>
                <p>✅ keep (on)</p>
                <p>✅ can't stand</p>
                <p>✅ miss</p>
                <p>✅ postpone</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="💙 Только INFINITIVE (to + V) — Глаголы-исключения">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Эти глаголы берут ТОЛЬКО Infinitive!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Другие глаголы **ВСЕГДА** требуют инфинитив (to + V). Их тоже
              нужно **ЗАПОМНИТЬ**!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  1. WANT (хотеть)
                </h4>
                <p className="text-sm">
                  I <strong>want</strong> to go home.
                </p>
                <p className="text-xs text-zinc-600">Я хочу пойти домой</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  2. DECIDE (решить)
                </h4>
                <p className="text-sm">
                  I <strong>decided</strong> to stay.
                </p>
                <p className="text-xs text-zinc-600">Я решил остаться</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  3. PROMISE (обещать)
                </h4>
                <p className="text-sm">
                  I <strong>promise</strong> to help.
                </p>
                <p className="text-xs text-zinc-600">Я обещаю помочь</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  4. HOPE (надеяться)
                </h4>
                <p className="text-sm">
                  I <strong>hope</strong> to see you.
                </p>
                <p className="text-xs text-zinc-600">Надеюсь увидеть тебя</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  5. PLAN (планировать)
                </h4>
                <p className="text-sm">
                  I <strong>plan</strong> to travel.
                </p>
                <p className="text-xs text-zinc-600">
                  Я планирую путешествовать
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  6. AGREE (соглашаться)
                </h4>
                <p className="text-sm">
                  I <strong>agree</strong> to help.
                </p>
                <p className="text-xs text-zinc-600">Я согласен помочь</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  7. REFUSE (отказываться)
                </h4>
                <p className="text-sm">
                  I <strong>refused</strong> to go.
                </p>
                <p className="text-xs text-zinc-600">Я отказался идти</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  8. OFFER (предлагать)
                </h4>
                <p className="text-sm">
                  I <strong>offered</strong> to help.
                </p>
                <p className="text-xs text-zinc-600">Я предложил помочь</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  9. MANAGE (удаваться)
                </h4>
                <p className="text-sm">
                  I <strong>managed</strong> to finish.
                </p>
                <p className="text-xs text-zinc-600">Мне удалось закончить</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  10. EXPECT (ожидать)
                </h4>
                <p className="text-sm">
                  I <strong>expect</strong> to win.
                </p>
                <p className="text-xs text-zinc-600">Я ожидаю победить</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔥 Полный список "Infinitive-only" глаголов:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-zinc-700">
                <p>✅ want</p>
                <p>✅ decide</p>
                <p>✅ promise</p>
                <p>✅ hope</p>
                <p>✅ plan</p>
                <p>✅ agree</p>
                <p>✅ refuse</p>
                <p>✅ offer</p>
                <p>✅ manage</p>
                <p>✅ expect</p>
                <p>✅ seem</p>
                <p>✅ appear</p>
                <p>✅ afford</p>
                <p>✅ fail</p>
                <p>✅ learn</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["I stopped to smoke", "I stopped to smoke."],
        right: "",
        explanation: "Остановился, ЧТОБЫ покурить → TO (цель остановки)",
      },
      {
        left: "",
        answers: ["I stopped smoking", "I stopped smoking."],
        right: "",
        explanation: "Бросил курить → -ING (прекратить делать)",
      },
      {
        left: "",
        answers: ["I remembered to call him", "I remembered to call him."],
        right: "",
        explanation: "Вспомнил, что нужно позвонить (будущее) → TO",
      },
      {
        left: "",
        answers: ["I remember calling him", "I remember calling him."],
        right: "",
        explanation: "Помню, как звонил (прошлое) → -ING",
      },
      {
        left: "",
        answers: ["I enjoy reading", "I enjoy reading."],
        right: "",
        explanation: "ENJOY всегда берёт -ING!",
      },
      {
        left: "",
        answers: ["I want to go", "I want to go."],
        right: "",
        explanation: "WANT всегда берёт TO!",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Выбери правильную форму">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              🎯 TO или -ING? Напиши полное предложение!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано начало предложения и глагол. Напиши ПОЛНОЕ предложение с
              правильной формой!
            </p>
            <p className="text-xs text-zinc-600">
              Определи: STOP, REMEMBER/FORGET (прошлое/будущее), или специальный
              глагол
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Я остановился, чтобы покурить. (stop + smoke)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши полное предложение:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                2️⃣ Я бросил курить. (stop + smoke)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши полное предложение:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                3️⃣ Я вспомнил, что нужно ему позвонить. (remember + call him)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши полное предложение:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                4️⃣ Я помню, как звонил ему. (remember + call him)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши полное предложение:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                5️⃣ Мне нравится читать. (enjoy + read)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши полное предложение:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                6️⃣ Я хочу пойти. (want + go)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши полное предложение:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="💎 Сложные паттерны — Продвинутый уровень!">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Специальные конструкции с Gerund
            </h3>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-lg p-5 border-2 border-red-400">
                <h4 className="text-xl font-bold text-red-900 mb-3">
                  1. NEED / WANT + -ING (пассивное значение!)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Когда **объект** нуждается в действии НАД НИМ!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      The car <strong>needs washing</strong>. = The car needs{" "}
                      <strong>to be washed</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Машину нужно помыть (пассив!)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      My hair <strong>needs cutting</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно постричься (волосы нужно подстричь)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. WORTH + -ING (стоящий)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  "Стоит того, чтобы..." — всегда с -ING!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      This book is <strong>worth reading</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Эту книгу стоит прочитать
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      It's <strong>worth trying</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Это стоит попробовать
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  3. CAN'T HELP + -ING (не могу не...)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  "Не могу удержаться, чтобы не..." — идиома!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I <strong>can't help laughing</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я не могу не смеяться
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I <strong>couldn't help thinking</strong> about it.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я не мог не думать об этом
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. IT'S NO USE / GOOD + -ING (бесполезно)
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  "Нет смысла..." — устойчивые выражения!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      It's <strong>no use crying</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Бесполезно плакать</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      It's <strong>no good worrying</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нет смысла беспокоиться
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-100 rounded-lg p-5 border-2 border-pink-400">
                <h4 className="text-xl font-bold text-pink-900 mb-3">
                  5. SPEND / WASTE time + -ING
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Проводить/тратить время на что-то!
                </p>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      I <strong>spent</strong> 2 hours <strong>reading</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я провёл 2 часа за чтением
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Don't <strong>waste</strong> time{" "}
                      <strong>watching</strong> TV!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Не трать время на просмотр TV!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["I stopped to buy milk", "I stopped to buy milk."],
        right: "",
        explanation:
          'Исправлено: "buying" → "to buy" (остановился, ЧТОБЫ купить - цель!)',
      },
      {
        left: "",
        answers: ["I enjoy reading", "I enjoy reading."],
        right: "",
        explanation:
          'Исправлено: "to read" → "reading" (ENJOY всегда берёт -ING!)',
      },
      {
        left: "",
        answers: [
          "I remembered to lock the door",
          "I remembered to lock the door.",
        ],
        right: "",
        explanation:
          'Исправлено: "locking" → "to lock" (вспомнил, что НУЖНО закрыть - будущее!)',
      },
      {
        left: "",
        answers: ["I want to go home", "I want to go home."],
        right: "",
        explanation: 'Исправлено: "going" → "to go" (WANT всегда берёт TO!)',
      },
      {
        left: "",
        answers: ["The car needs washing", "The car needs washing."],
        right: "",
        explanation:
          'Исправлено: "to wash" → "washing" (машину НУЖНО помыть - пассив!)',
      },
      {
        left: "",
        answers: ["I can't help laughing", "I can't help laughing."],
        right: "",
        explanation:
          'Исправлено: "to laugh" → "laughing" (CAN\'T HELP всегда с -ING!)',
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 2: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибку!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Каждое предложение содержит ОШИБКУ в выборе Gerund/Infinitive.
              Напиши ПРАВИЛЬНЫЙ вариант!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: STOP (цель/прекратить), специальные глаголы, сложные
              паттерны
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I stopped buying milk.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (остановился, чтобы купить):
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">I enjoy to read.</p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I remembered locking the door. (но забыл закрыть!)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (вспомнил, что НУЖНО закрыть):
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">I want going home.</p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                The car needs to wash.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант (пассивное значение!):
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I can't help to laugh.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="⚠️ 10 КРИТИЧЕСКИХ ошибок">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
              Типичные ошибки с Gerund/Infinitive
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: "I enjoy to read"
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I enjoy <strong>to read</strong>.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    ENJOY всегда берёт -ING!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I enjoy <strong>reading</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: "I want going"
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I want <strong>going</strong> home.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    WANT всегда берёт TO!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I want <strong>to go</strong> home.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: Перепутали STOP TO / STOP -ING
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I stopped smoking. (хотел сказать "остановился, чтобы
                    покурить")
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Это означает "БРОСИЛ КУРИТЬ"!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I stopped <strong>to smoke</strong>. (остановился, чтобы
                    покурить)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: REMEMBER TO vs REMEMBER -ING
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I remember to lock the door. (но не закрыл!)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    TO = помнить, что НУЖНО сделать (и СДЕЛАЛ!)
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I remember <strong>locking</strong> the door. (помню, что
                    закрывал)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: "This book is worth to read"
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ This book is worth <strong>to read</strong>.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    WORTH всегда с -ING!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ This book is worth <strong>reading</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
            <h4 className="font-bold text-blue-900 mb-3 text-center">
              🔑 Как не ошибаться?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                <strong>1. STOP:</strong> TO = цель, -ING = бросить
              </p>
              <p>
                <strong>2. REMEMBER/FORGET:</strong> TO = будущее, -ING =
                прошлое
              </p>
              <p>
                <strong>3. TRY:</strong> TO = попытка, -ING = эксперимент
              </p>
              <p>
                <strong>4. Gerund-only:</strong> enjoy, avoid, mind, suggest,
                finish
              </p>
              <p>
                <strong>5. Infinitive-only:</strong> want, decide, promise,
                hope, plan
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "1. I stopped",
        answers: ["to smoke", "to smoke."],
        right: "",
        explanation: "Остановился, чтобы покурить (цель) → TO",
      },
      {
        left: "2. I enjoy",
        answers: ["reading", "reading."],
        right: "",
        explanation: "ENJOY всегда берёт -ING",
      },
      {
        left: "3. I remembered",
        answers: ["to call", "to call him"],
        right: "him.",
        explanation: "Вспомнил, что нужно позвонить (будущее) → TO",
      },
      {
        left: "4. I want",
        answers: ["to go", "to go home"],
        right: "home.",
        explanation: "WANT всегда берёт TO",
      },
      {
        left: "5. The car needs",
        answers: ["washing", "washing."],
        right: "",
        explanation: "Пассивное значение → -ING",
      },
      {
        left: "6. It's worth",
        answers: ["trying", "trying."],
        right: "",
        explanation: "WORTH всегда с -ING",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-500 mb-4">
            <h3 className="text-3xl font-bold text-yellow-900 mb-3 text-center">
              Финальная проверка знаний!
            </h3>
            <p className="text-sm text-zinc-700 mb-2 text-center">
              6 вопросов на **ВСЕ паттерны Gerund/Infinitive**. Заполни
              пропуски!
            </p>
            <p className="text-sm font-semibold text-yellow-900 text-center">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Заполни пропуски правильной формой: TO + V или Verb-ING."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-6 border-2 border-green-500 mt-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3 text-center">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Gerunds & Infinitives! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ БЕЗОШИБОЧНО выбирать между TO и -ING</li>
              <li>✅ Понимать разницу STOP TO / STOP -ING</li>
              <li>
                ✅ Различать REMEMBER TO (будущее) / REMEMBER -ING (прошлое)
              </li>
              <li>✅ Использовать TRY TO / TRY -ING правильно</li>
              <li>✅ Знать глаголы, берущие ТОЛЬКО герундий</li>
              <li>✅ Знать глаголы, берущие ТОЛЬКО инфинитив</li>
              <li>✅ Использовать сложные паттерны (need -ing, worth -ing)</li>
              <li>✅ Избегать 10 критических ошибок!</li>
            </ul>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-indigo-900 mb-4 text-center text-xl">
              Gerunds & Infinitives — Все правила
            </h4>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-2 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg text-center">
                  Глаголы, меняющие значение
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <p>
                      • <strong>STOP TO</strong> = цель
                    </p>
                    <p>
                      • <strong>STOP -ING</strong> = бросить
                    </p>
                  </div>
                  <div>
                    <p>
                      • <strong>REMEMBER TO</strong> = будущее
                    </p>
                    <p>
                      • <strong>REMEMBER -ING</strong> = прошлое
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-400">
                <p className="font-semibold text-green-900 mb-2 text-lg text-center">
                  Только Gerund (-ING)
                </p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <p>• enjoy</p>
                  <p>• avoid</p>
                  <p>• mind</p>
                  <p>• suggest</p>
                  <p>• finish</p>
                  <p>• practice</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-400">
                <p className="font-semibold text-blue-900 mb-2 text-lg text-center">
                  Только Infinitive (TO)
                </p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <p>• want</p>
                  <p>• decide</p>
                  <p>• promise</p>
                  <p>• hope</p>
                  <p>• plan</p>
                  <p>• agree</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-400">
                <p className="font-semibold text-purple-900 mb-2 text-lg text-center">
                  Специальные паттерны
                </p>
                <div className="text-sm space-y-1">
                  <p>
                    • <strong>need -ing</strong> (пассив)
                  </p>
                  <p>
                    • <strong>worth -ing</strong> (стоящий)
                  </p>
                  <p>
                    • <strong>can't help -ing</strong> (не могу не...)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
