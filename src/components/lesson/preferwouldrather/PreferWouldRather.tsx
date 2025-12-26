"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PreferWouldRather({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Prefer / Would Rather / Had Better">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Prefer / Would Rather / Had Better — Предпочтения и советы
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Эти три конструкции помогают выразить **предпочтения** (prefer,
              would rather) и **советы/рекомендации** (had better)!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Основные различия
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    PREFER
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Общие предпочтения
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    I <strong>prefer</strong> tea.
                  </p>
                  <p className="text-xs text-zinc-600">Я предпочитаю чай.</p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    I <strong>prefer</strong> tea <strong>to</strong> coffee.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я предпочитаю чай кофе.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    WOULD RATHER
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Конкретная ситуация
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    I <strong>would rather</strong> stay home.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я предпочёл бы остаться дома.
                  </p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    I'd <strong>rather</strong> stay <strong>than</strong> go.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я предпочёл бы остаться, чем идти.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900 text-center">
                    HAD BETTER
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Совет/предупреждение
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    You <strong>had better</strong> go now.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Тебе лучше идти сейчас.
                  </p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    You'd <strong>better</strong> not be late!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Тебе лучше не опаздывать!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Критические различия
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. PREFER — формально, общие предпочтения
                  </p>
                  <p className="text-xs italic">I prefer working from home.</p>
                  <p className="text-xs text-zinc-600">
                    (В целом, всегда предпочитаю)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. WOULD RATHER — неформально, конкретная ситуация
                  </p>
                  <p className="text-xs italic">
                    I'd rather work from home today.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Сегодня предпочёл бы)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. HAD BETTER — совет с предупреждением!
                  </p>
                  <p className="text-xs italic">
                    You'd better work hard, or you'll fail!
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Совет + предупреждение о последствиях)
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
                  <p>✅ PREFER + noun/to/ing (общие предпочтения)</p>
                  <p>✅ WOULD RATHER + infinitive (конкретная ситуация)</p>
                  <p>✅ HAD BETTER + infinitive (советы/предупреждения)</p>
                </div>
                <div>
                  <p>✅ Сравнение всех трёх конструкций</p>
                  <p>✅ 60+ примеров использования</p>
                  <p>✅ Типичные ошибки русскоговорящих</p>
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
        <Section title="💙 PREFER — Предпочитать (общие предпочтения)">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              PREFER — общие, постоянные предпочтения
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **PREFER** используется для выражения **общих, постоянных
              предпочтений**! Это более формальная конструкция!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. PREFER + существительное
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    PREFER + noun
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I prefer tea. = Я предпочитаю чай. (всегда)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      I <strong>prefer</strong> tea
                    </p>
                    <p className="italic">
                      She <strong>prefers</strong> coffee
                    </p>
                    <p className="italic">
                      He <strong>prefers</strong> summer
                    </p>
                    <p className="italic">
                      They <strong>prefer</strong> mountains
                    </p>
                    <p className="italic">
                      I <strong>prefer</strong> books
                    </p>
                    <p className="italic">
                      She <strong>prefers</strong> films
                    </p>
                    <p className="italic">
                      He <strong>prefers</strong> silence
                    </p>
                    <p className="italic">
                      We <strong>prefer</strong> action
                    </p>
                    <p className="italic">
                      I <strong>prefer</strong> honesty
                    </p>
                    <p className="italic">
                      She <strong>prefers</strong> simplicity
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. PREFER + TO + infinitive
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    PREFER + TO + infinitive
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I prefer to work alone. = Я предпочитаю работать один.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      I <strong>prefer to</strong> work alone
                    </p>
                    <p className="italic">
                      She <strong>prefers to</strong> study in the morning
                    </p>
                    <p className="italic">
                      He <strong>prefers to</strong> walk
                    </p>
                    <p className="italic">
                      They <strong>prefer to</strong> stay home
                    </p>
                    <p className="italic">
                      I <strong>prefer to</strong> cook
                    </p>
                    <p className="italic">
                      She <strong>prefers to</strong> read
                    </p>
                    <p className="italic">
                      He <strong>prefers to</strong> listen
                    </p>
                    <p className="italic">
                      We <strong>prefer to</strong> wait
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. PREFER + -ING
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-purple-900 mb-2">
                    PREFER + -ING
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I prefer working alone. = Я предпочитаю работать один.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      I <strong>prefer working</strong> alone
                    </p>
                    <p className="italic">
                      She <strong>prefers studying</strong> in the morning
                    </p>
                    <p className="italic">
                      He <strong>prefers walking</strong>
                    </p>
                    <p className="italic">
                      They <strong>prefer staying</strong> home
                    </p>
                    <p className="italic">
                      I <strong>prefer cooking</strong>
                    </p>
                    <p className="italic">
                      She <strong>prefers reading</strong>
                    </p>
                    <p className="italic">
                      He <strong>prefers listening</strong>
                    </p>
                    <p className="italic">
                      We <strong>prefer waiting</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. PREFER A TO B — сравнение
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-orange-900 mb-2">
                    PREFER A TO B
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I prefer tea <strong>to</strong> coffee. = Я предпочитаю чай
                    кофе.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-orange-900 mb-2">20 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      I prefer tea <strong>to</strong> coffee
                    </p>
                    <p className="italic">
                      She prefers summer <strong>to</strong> winter
                    </p>
                    <p className="italic">
                      He prefers books <strong>to</strong> films
                    </p>
                    <p className="italic">
                      They prefer mountains <strong>to</strong> beaches
                    </p>
                    <p className="italic">
                      I prefer reading <strong>to</strong> watching TV
                    </p>
                    <p className="italic">
                      She prefers walking <strong>to</strong> driving
                    </p>
                    <p className="italic">
                      He prefers working alone <strong>to</strong> working in a
                      team
                    </p>
                    <p className="italic">
                      We prefer staying home <strong>to</strong> going out
                    </p>
                    <p className="italic">
                      I prefer listening <strong>to</strong> talking
                    </p>
                    <p className="italic">
                      She prefers simplicity <strong>to</strong> complexity
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>PREFER</strong> — формальная конструкция для **общих**
                  предпочтений!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ prefer + noun / to + infinitive / -ing
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ✅ prefer A <strong>to</strong> B (НЕ "than"!)
                </p>
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
        <Section title="💚 WOULD RATHER — Предпочёл бы (конкретная ситуация)">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              WOULD RATHER — конкретная ситуация, неформально
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **WOULD RATHER** используется для выражения предпочтений в
              **конкретной ситуации**! Это более неформальная конструкция!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. WOULD RATHER + infinitive (без TO!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    WOULD RATHER + infinitive (БЕЗ TO!)
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I would rather stay home. = Я предпочёл бы остаться дома.
                  </p>
                  <p className="text-center text-sm text-zinc-600 mt-1">
                    I'd rather stay home. (сокращённо)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      I'd <strong>rather</strong> stay home
                    </p>
                    <p className="italic">
                      She'd <strong>rather</strong> work alone
                    </p>
                    <p className="italic">
                      He'd <strong>rather</strong> walk
                    </p>
                    <p className="italic">
                      They'd <strong>rather</strong> wait
                    </p>
                    <p className="italic">
                      I'd <strong>rather</strong> leave now
                    </p>
                    <p className="italic">
                      She'd <strong>rather</strong> go by train
                    </p>
                    <p className="italic">
                      He'd <strong>rather</strong> not talk about it
                    </p>
                    <p className="italic">
                      We'd <strong>rather</strong> stay
                    </p>
                    <p className="italic">
                      I'd <strong>rather</strong> cook
                    </p>
                    <p className="italic">
                      She'd <strong>rather</strong> read
                    </p>
                    <p className="italic">
                      He'd <strong>rather</strong> listen
                    </p>
                    <p className="italic">
                      They'd <strong>rather</strong> not go
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. WOULD RATHER A THAN B — сравнение
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    WOULD RATHER A THAN B
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I'd rather stay <strong>than</strong> go. = Я предпочёл бы
                    остаться, чем идти.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      I'd rather stay <strong>than</strong> go
                    </p>
                    <p className="italic">
                      She'd rather walk <strong>than</strong> drive
                    </p>
                    <p className="italic">
                      He'd rather work alone <strong>than</strong> in a team
                    </p>
                    <p className="italic">
                      They'd rather wait <strong>than</strong> rush
                    </p>
                    <p className="italic">
                      I'd rather cook <strong>than</strong> order takeout
                    </p>
                    <p className="italic">
                      She'd rather read <strong>than</strong> watch TV
                    </p>
                    <p className="italic">
                      He'd rather listen <strong>than</strong> talk
                    </p>
                    <p className="italic">
                      We'd rather stay home <strong>than</strong> go out
                    </p>
                    <p className="italic">
                      I'd rather die <strong>than</strong> betray you
                    </p>
                    <p className="italic">
                      She'd rather be honest <strong>than</strong> lie
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. WOULD RATHER NOT — негативная форма
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-purple-900 mb-2">
                    WOULD RATHER NOT + infinitive
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I'd rather not go. = Я предпочёл бы не идти.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      I'd <strong>rather not</strong> go
                    </p>
                    <p className="italic">
                      She'd <strong>rather not</strong> talk about it
                    </p>
                    <p className="italic">
                      He'd <strong>rather not</strong> say
                    </p>
                    <p className="italic">
                      They'd <strong>rather not</strong> discuss it
                    </p>
                    <p className="italic">
                      I'd <strong>rather not</strong> answer
                    </p>
                    <p className="italic">
                      She'd <strong>rather not</strong> explain
                    </p>
                    <p className="italic">
                      He'd <strong>rather not</strong> comment
                    </p>
                    <p className="italic">
                      We'd <strong>rather not</strong> interfere
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическое правило!
                </h4>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    WOULD RATHER + infinitive БЕЗ TO!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">
                        ❌ I'd rather <strong className="text-red-700">to</strong>{" "}
                        stay
                      </p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">✅ I'd rather stay</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2 text-center">
                    После WOULD RATHER — инфинитив БЕЗ TO!
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>WOULD RATHER</strong> — неформально, для **конкретной
                  ситуации**!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ would rather + infinitive (БЕЗ TO!)
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ✅ would rather A <strong>than</strong> B (НЕ "to"!)
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
        <Section title="💜 HAD BETTER — Лучше бы (совет/предупреждение)">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              HAD BETTER — совет с предупреждением!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **HAD BETTER** используется для **советов** и **предупреждений**!
              Означает "лучше бы", "тебе следует"! Часто подразумевает
              **негативные последствия**, если не послушаться!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. HAD BETTER + infinitive (без TO!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    HAD BETTER + infinitive (БЕЗ TO!)
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    You had better go now. = Тебе лучше идти сейчас.
                  </p>
                  <p className="text-center text-sm text-zinc-600 mt-1">
                    You'd better go now. (сокращённо)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">25 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      You'd <strong>better</strong> go now
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше идти сейчас
                    </p>
                    <p className="italic mt-2">
                      You'd <strong>better</strong> hurry up
                    </p>
                    <p className="text-xs text-zinc-600">Тебе лучше поспешить</p>
                    <p className="italic mt-2">
                      You'd <strong>better</strong> study hard
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше усердно учиться
                    </p>
                    <p className="italic mt-2">
                      We'd <strong>better</strong> leave now
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нам лучше уйти сейчас
                    </p>
                    <p className="italic mt-2">
                      She'd <strong>better</strong> apologize
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ей лучше извиниться
                    </p>
                    <p className="italic mt-2">
                      He'd <strong>better</strong> not be late
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ему лучше не опаздывать
                    </p>
                    <p className="italic mt-2">
                      You'd <strong>better</strong> call her
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше позвонить ей
                    </p>
                    <p className="italic mt-2">
                      I'd <strong>better</strong> go
                    </p>
                    <p className="text-xs text-zinc-600">Мне лучше идти</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  2. HAD BETTER NOT — негативная форма
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-purple-900 mb-2">
                    HAD BETTER NOT + infinitive
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    You'd better not be late! = Тебе лучше не опаздывать!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      You'd <strong>better not</strong> be late!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше не опаздывать!
                    </p>
                    <p className="italic mt-2">
                      You'd <strong>better not</strong> forget!
                    </p>
                    <p className="text-xs text-zinc-600">Тебе лучше не забыть!</p>
                    <p className="italic mt-2">
                      You'd <strong>better not</strong> tell anyone!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше никому не говорить!
                    </p>
                    <p className="italic mt-2">
                      He'd <strong>better not</strong> lie to me!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ему лучше не врать мне!
                    </p>
                    <p className="italic mt-2">
                      We'd <strong>better not</strong> wait!
                    </p>
                    <p className="text-xs text-zinc-600">Нам лучше не ждать!</p>
                    <p className="italic mt-2">
                      She'd <strong>better not</strong> fail!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ей лучше не провалиться!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  3. Совет с предупреждением
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-orange-900 mb-2">
                    HAD BETTER часто подразумевает последствия!
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      You'd better study hard, <strong>or</strong> you'll fail!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше усердно учиться, иначе провалишься!
                    </p>
                    <p className="italic mt-2">
                      You'd better hurry up, <strong>or</strong> you'll be late!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше поспешить, иначе опоздаешь!
                    </p>
                    <p className="italic mt-2">
                      You'd better not lie, <strong>or</strong> I'll find out!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше не врать, иначе я узнаю!
                    </p>
                    <p className="italic mt-2">
                      He'd better apologize, <strong>or</strong> she'll never
                      forgive him!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ему лучше извиниться, иначе она никогда его не простит!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическое правило!
                </h4>
                <div className="bg-white rounded p-3 mb-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    HAD BETTER + infinitive БЕЗ TO!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">
                        ❌ You'd better <strong className="text-red-700">to</strong>{" "}
                        go
                      </p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">✅ You'd better go</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    HAD BETTER ≠ IT WOULD BE BETTER!
                  </p>
                  <div className="space-y-2">
                    <div className="bg-blue-100 rounded p-2">
                      <p className="text-sm">
                        ✅ You'd <strong>better</strong> go (совет +
                        предупреждение!)
                      </p>
                      <p className="text-xs text-zinc-600">Тебе ЛУЧШЕ идти!</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ It <strong>would be</strong> better to go (мягкий совет)
                      </p>
                      <p className="text-xs text-zinc-600">
                        Было бы лучше пойти
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>HAD BETTER</strong> — совет с **предупреждением** о
                  последствиях!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ had better + infinitive (БЕЗ TO!)
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ✅ Часто подразумевает "иначе будет плохо"!
                </p>
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
        <Section title="🔄 Сравнение всех трёх конструкций">
          <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-lg p-6 border-2 border-blue-400 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Сравнительная таблица: Prefer / Would Rather / Had Better
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-100 to-purple-100">
                    <th className="border-2 border-blue-300 p-3 text-sm font-bold text-blue-900">
                      Конструкция
                    </th>
                    <th className="border-2 border-blue-300 p-3 text-sm font-bold text-blue-900">
                      Значение
                    </th>
                    <th className="border-2 border-blue-300 p-3 text-sm font-bold text-blue-900">
                      Формула
                    </th>
                    <th className="border-2 border-blue-300 p-3 text-sm font-bold text-blue-900">
                      Пример
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-blue-200 p-3 text-sm font-bold text-blue-900 text-center">
                      PREFER
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm">
                      Общие предпочтения (формально)
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm">
                      prefer + noun / to / -ing
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm italic">
                      I prefer tea to coffee
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border-2 border-blue-200 p-3 text-sm font-bold text-green-900 text-center">
                      WOULD RATHER
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm">
                      Конкретная ситуация (неформально)
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm">
                      would rather + infinitive (без TO)
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm italic">
                      I'd rather stay than go
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-blue-200 p-3 text-sm font-bold text-purple-900 text-center">
                      HAD BETTER
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm">
                      Совет + предупреждение
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm">
                      had better + infinitive (без TO)
                    </td>
                    <td className="border-2 border-blue-200 p-3 text-sm italic">
                      You'd better go now
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Одна и та же ситуация — разные конструкции
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-bold text-blue-900 mb-1">
                      1. Общее предпочтение
                    </p>
                    <p className="text-sm italic">
                      I <strong>prefer</strong> tea <strong>to</strong> coffee.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я (всегда) предпочитаю чай кофе.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-bold text-green-900 mb-1">
                      2. Конкретная ситуация
                    </p>
                    <p className="text-sm italic">
                      I'd <strong>rather</strong> have tea <strong>than</strong>{" "}
                      coffee.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я (сейчас) предпочёл бы чай, а не кофе.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-bold text-purple-900 mb-1">
                      3. Совет/рекомендация
                    </p>
                    <p className="text-sm italic">
                      You'd <strong>better</strong> drink tea, not coffee.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Тебе лучше пить чай, а не кофе. (иначе не уснёшь!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Ещё одна ситуация
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      I <strong>prefer working</strong> alone. (всегда)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      I'd <strong>rather work</strong> alone today. (сегодня)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      You'd <strong>better work</strong> alone, or you'll be
                      distracted!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3 text-center">
                  ⚠️ Критические различия
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-bold text-blue-900 mb-1 text-center">
                      PREFER
                    </p>
                    <p className="text-xs text-zinc-600 text-center">
                      prefer A <strong>TO</strong> B
                    </p>
                    <p className="text-xs text-zinc-600 text-center">
                      (НЕ "than"!)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-bold text-green-900 mb-1 text-center">
                      WOULD RATHER
                    </p>
                    <p className="text-xs text-zinc-600 text-center">
                      would rather A <strong>THAN</strong> B
                    </p>
                    <p className="text-xs text-zinc-600 text-center">
                      (НЕ "to"!)
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-bold text-purple-900 mb-1 text-center">
                      HAD BETTER
                    </p>
                    <p className="text-xs text-zinc-600 text-center">
                      + infinitive БЕЗ TO
                    </p>
                    <p className="text-xs text-zinc-600 text-center">
                      (как и would rather!)
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

  if (step === 6) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              10 критических ошибок с Prefer / Would Rather / Had Better
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Ошибка 1: Prefer A THAN B",
                  wrong: "I prefer tea than coffee.",
                  correct: "I prefer tea to coffee.",
                  rule: "PREFER A TO B (НЕ than!)!",
                },
                {
                  title: "Ошибка 2: Would rather + TO",
                  wrong: "I'd rather to stay.",
                  correct: "I'd rather stay.",
                  rule: "Would rather + infinitive БЕЗ TO!",
                },
                {
                  title: "Ошибка 3: Had better + TO",
                  wrong: "You'd better to go.",
                  correct: "You'd better go.",
                  rule: "Had better + infinitive БЕЗ TO!",
                },
                {
                  title: "Ошибка 4: Would rather A TO B",
                  wrong: "I'd rather stay to go.",
                  correct: "I'd rather stay than go.",
                  rule: "Would rather A THAN B (НЕ to!)!",
                },
                {
                  title: "Ошибка 5: Prefer + infinitive без TO",
                  wrong: "I prefer work alone.",
                  correct: "I prefer to work alone. / I prefer working alone.",
                  rule: "Prefer + TO infinitive / -ING!",
                },
                {
                  title: "Ошибка 6: Had better для вежливого совета",
                  wrong: "You'd better try this cake. (приглашение)",
                  correct:
                    "You should try this cake. / Why don't you try this cake?",
                  rule: "Had better — для СТРОГИХ советов с предупреждением!",
                },
                {
                  title: "Ошибка 7: Would rather в общих предпочтениях",
                  wrong: "I'd rather tea than coffee. (всегда)",
                  correct: "I prefer tea to coffee.",
                  rule: "Would rather — для КОНКРЕТНЫХ ситуаций!",
                },
                {
                  title: "Ошибка 8: Better вместо Had better",
                  wrong: "You better go.",
                  correct: "You'd better go. / You had better go.",
                  rule: "ПОЛНАЯ форма: HAD better (сокращённо: 'd better)!",
                },
                {
                  title: "Ошибка 9: Prefer + -ING vs TO (смысл)",
                  wrong: "I prefer to stay home. (но не остаюсь)",
                  correct: "I prefer staying home. (всегда так делаю)",
                  rule: "TO = теоретическое, -ING = привычное!",
                },
                {
                  title: "Ошибка 10: Would rather + Past Simple (без контекста)",
                  wrong: "I'd rather went. (без контекста)",
                  correct: "I'd rather go. / I'd rather she went.",
                  rule: "Would rather + Past Simple для ДРУГОГО лица!",
                },
              ].map((error, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded p-4 border-l-4 border-red-500"
                >
                  <p className="font-bold text-red-900 mb-2">
                    ❌ {error.title}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">❌ {error.wrong}</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">✅ {error.correct}</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">💡 {error.rule}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "I",
        answers: ["prefer"],
        right: "tea to coffee. (общее предпочтение)",
        explanation: "PREFER для общих предпочтений",
      },
      {
        left: "I'd",
        answers: ["rather"],
        right: "stay home today. (конкретная ситуация)",
        explanation: "WOULD RATHER для конкретной ситуации",
      },
      {
        left: "You'd",
        answers: ["better"],
        right: "go now, or you'll be late! (совет)",
        explanation: "HAD BETTER для советов с предупреждением",
      },
      {
        left: "She prefers reading",
        answers: ["to"],
        right: "watching TV.",
        explanation: "PREFER A TO B (НЕ than!)",
      },
      {
        left: "I'd rather walk",
        answers: ["than"],
        right: "drive.",
        explanation: "WOULD RATHER A THAN B (НЕ to!)",
      },
      {
        left: "You'd better not",
        answers: ["forget", "be late"],
        right: "! (негативная форма)",
        explanation: "HAD BETTER NOT + infinitive",
        wide: true,
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: Prefer / Would Rather / Had Better
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильное слово."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Prefer / Would Rather / Had Better
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">1️⃣ PREFER</p>
                <p className="text-sm text-zinc-700">
                  <strong>Значение:</strong> Общие, постоянные предпочтения
                  (формально)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Формула:</strong> prefer + noun / to infinitive / -ing
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Сравнение:</strong> prefer A <strong>TO</strong> B
                  (НЕ than!)
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  I prefer tea to coffee.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  2️⃣ WOULD RATHER
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Значение:</strong> Конкретная ситуация (неформально)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Формула:</strong> would rather + infinitive (БЕЗ TO!)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Сравнение:</strong> would rather A <strong>THAN</strong>{" "}
                  B (НЕ to!)
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  I'd rather stay than go.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">3️⃣ HAD BETTER</p>
                <p className="text-sm text-zinc-700">
                  <strong>Значение:</strong> Совет с предупреждением
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Формула:</strong> had better + infinitive (БЕЗ TO!)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Подразумевает:</strong> негативные последствия
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  You'd better go now, or you'll be late!
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотые правила
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>PREFER</strong> — общие предпочтения (формально)
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  <strong>WOULD RATHER</strong> — конкретная ситуация
                  (неформально)
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  <strong>HAD BETTER</strong> — совет + предупреждение
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2 font-bold">
                  PREFER A <strong className="text-red-700">TO</strong> B | WOULD
                  RATHER A <strong className="text-red-700">THAN</strong> B
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1 font-bold">
                  Would rather / Had better + infinitive{" "}
                  <strong className="text-red-700">БЕЗ TO</strong>!
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}

