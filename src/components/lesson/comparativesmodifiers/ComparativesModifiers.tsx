"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ComparativesModifiers({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Comparatives & Superlatives: Modifiers">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Модификаторы для сравнений
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Modifiers** = слова, которые **усиливают** или **ослабляют**
              сравнительную и превосходную степень! Much better, far worse, a
              bit faster, by far the best!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Категории модификаторов
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    Strong (сильные)
                  </p>
                  <p className="text-xs text-zinc-600">much, far, a lot, way</p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    **Намного** лучше!
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    Slight (слабые)
                  </p>
                  <p className="text-xs text-zinc-600">
                    a bit, a little, slightly
                  </p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    **Немного** лучше
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900">
                    Superlative
                  </p>
                  <p className="text-xs text-zinc-600">by far, easily, much</p>
                  <p className="text-xs text-zinc-600 italic mt-1">
                    **Намного** лучший!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Критическое правило
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <p className="text-center">
                  Модификаторы **ПЕРЕД** сравнительной степенью:
                </p>
                <p className="text-center text-lg font-bold text-blue-900">
                  <strong className="text-red-700">much</strong> better
                </p>
                <p className="text-center text-lg font-bold text-green-900">
                  <strong className="text-red-700">far</strong> more expensive
                </p>
                <p className="text-center text-lg font-bold text-purple-900">
                  <strong className="text-red-700">a bit</strong> faster
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ Strong modifiers (much, far, a lot, way)</p>
                  <p>✅ Slight modifiers (a bit, a little, slightly)</p>
                  <p>✅ Superlative modifiers (by far, easily)</p>
                </div>
                <div>
                  <p>✅ 60+ примеров использования</p>
                  <p>✅ Различия formal vs informal</p>
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
        <Section title="💪 Strong Modifiers — Сильные усилители">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              MUCH / FAR / A LOT / WAY — Намного!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти модификаторы показывают **большую разницу** в сравнении! Они
              означают "**намного**" или "**гораздо**"!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. MUCH — намного (formal & informal)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    Much + Comparative
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Универсальный модификатор для любой ситуации!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> better
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> worse
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> faster
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> slower
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> more
                      expensive
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> less
                      important
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> bigger
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> smaller
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> easier
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> harder
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> more
                      difficult
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> more
                      interesting
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> more
                      comfortable
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> younger
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> older
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> cheaper
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> more
                      efficient
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> more
                      powerful
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> warmer
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">Much</strong> colder
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. FAR — намного (более формально)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> better
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> more
                      expensive
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> superior
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> more
                      complex
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> more
                      advanced
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> more
                      effective
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> worse
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> more
                      serious
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> more
                      complicated
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">Far</strong> greater
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. A LOT — намного (informal)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">10 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> better
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> faster
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> cheaper
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> more
                      fun
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> easier
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> nicer
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> bigger
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">A lot</strong> warmer
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. WAY — намного (very informal!)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-orange-900 mb-2">
                    10 примеров (разговорные!)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-orange-700">Way</strong> better
                    </p>
                    <p className="italic">
                      <strong className="text-orange-700">Way</strong> cooler
                    </p>
                    <p className="italic">
                      <strong className="text-orange-700">Way</strong> faster
                    </p>
                    <p className="italic">
                      <strong className="text-orange-700">Way</strong> more fun
                    </p>
                    <p className="italic">
                      <strong className="text-orange-700">Way</strong> more
                      interesting
                    </p>
                    <p className="italic">
                      <strong className="text-orange-700">Way</strong> bigger
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Когда использовать?
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>Much</strong> = универсальный (formal & informal)
                  </p>
                  <p>
                    <strong>Far</strong> = формальный (официальные тексты,
                    презентации)
                  </p>
                  <p>
                    <strong>A lot</strong> = неформальный (разговорная речь)
                  </p>
                  <p>
                    <strong>Way</strong> = очень неформальный (с друзьями, в
                    чатах)
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
        <Section title="🎯 Slight Modifiers — Слабые усилители">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              A BIT / A LITTLE / SLIGHTLY — Немного
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти модификаторы показывают **небольшую разницу** в сравнении! Они
              означают "**немного**" или "**чуть-чуть**"!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. A BIT — немного (informal)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> better
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> faster
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> cheaper
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> warmer
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> colder
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> older
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> younger
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> more
                      expensive
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> more
                      difficult
                    </p>
                    <p className="italic">
                      <strong className="text-blue-700">A bit</strong> easier
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. A LITTLE — немного (более вежливо)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">10 примеров</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-green-700">A little</strong>{" "}
                      better
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">A little</strong> more
                      expensive
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">A little</strong>{" "}
                      warmer
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">A little</strong> more
                      complicated
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">A little</strong> more
                      difficult
                    </p>
                    <p className="italic">
                      <strong className="text-green-700">A little</strong> older
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. SLIGHTLY — немного (formal)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">
                    15 примеров (формальные!)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong>{" "}
                      better
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong> more
                      expensive
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong>{" "}
                      higher
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong>{" "}
                      lower
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong> more
                      complex
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong> more
                      advanced
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong>{" "}
                      warmer
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong>{" "}
                      faster
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong> more
                      efficient
                    </p>
                    <p className="italic">
                      <strong className="text-purple-700">Slightly</strong> more
                      effective
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Различия
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>A bit</strong> = неформальный (разговорная речь)
                  </p>
                  <p>
                    <strong>A little</strong> = нейтральный (более вежливо)
                  </p>
                  <p>
                    <strong>Slightly</strong> = формальный (официальные тексты,
                    отчёты)
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    💡 Все три означают "**немного**" — маленькую разницу!
                  </p>
                </div>
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
        <Section title="👑 Superlative Modifiers">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              BY FAR / EASILY / MUCH — Усилители для превосходной степени
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти модификаторы используются с **превосходной степенью** (the
              best, the worst, the biggest), чтобы сказать "**намного** лучший"
              или "**безусловно** лучший"!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  BY FAR — намного (самый сильный!)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    By far + THE + Superlative
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Показывает **огромное** превосходство!
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      This is <strong className="text-blue-700">by far</strong>{" "}
                      the best option.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Это **намного** лучший вариант
                    </p>
                    <p className="italic mt-2">
                      She's <strong className="text-blue-700">by far</strong>{" "}
                      the most talented.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она **намного** самая талантливая
                    </p>
                    <p className="italic mt-2">
                      It's <strong className="text-blue-700">by far</strong> the
                      most expensive.
                    </p>
                    <p className="italic mt-2">
                      He's <strong className="text-blue-700">by far</strong> the
                      fastest runner.
                    </p>
                    <p className="italic mt-2">
                      This is <strong className="text-blue-700">by far</strong>{" "}
                      the worst decision.
                    </p>
                    <p className="italic mt-2">
                      It's <strong className="text-blue-700">by far</strong> the
                      biggest problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  EASILY — легко, безусловно
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">10 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      This is <strong className="text-green-700">easily</strong>{" "}
                      the best film.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Это **безусловно** лучший фильм
                    </p>
                    <p className="italic mt-2">
                      She's <strong className="text-green-700">easily</strong>{" "}
                      the smartest.
                    </p>
                    <p className="italic mt-2">
                      He's <strong className="text-green-700">easily</strong>{" "}
                      the most experienced.
                    </p>
                    <p className="italic mt-2">
                      This is <strong className="text-green-700">easily</strong>{" "}
                      the hardest task.
                    </p>
                    <p className="italic mt-2">
                      It's <strong className="text-green-700">easily</strong>{" "}
                      the most interesting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  MUCH — намного (с превосходной степенью)
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">8 примеров</p>
                  <div className="space-y-1 text-sm">
                    <p className="italic">
                      This is <strong className="text-purple-700">much</strong>{" "}
                      the best.
                    </p>
                    <p className="italic">
                      She's <strong className="text-purple-700">much</strong>{" "}
                      the fastest.
                    </p>
                    <p className="italic">
                      It's <strong className="text-purple-700">much</strong> the
                      most expensive.
                    </p>
                    <p className="italic">
                      He's <strong className="text-purple-700">much</strong> the
                      oldest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическая ошибка!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ This is <strong className="text-red-700">very</strong>{" "}
                      the best.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! Very НЕ работает с превосходной степенью!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ This is{" "}
                      <strong className="text-green-700">by far</strong> the
                      best.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! By far / Easily / Much!
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
    const items: FillItem[] = [
      {
        left: "This book is",
        answers: ["much", "far", "a lot", "way"],
        right: "better than the other one.",
        explanation: "Strong modifier: much / far / a lot / way",
      },
      {
        left: "She's",
        answers: ["a bit", "a little", "slightly"],
        right: "taller than her sister.",
        explanation: "Slight modifier: a bit / a little / slightly",
      },
      {
        left: "This is",
        answers: ["by far", "easily", "much"],
        right: "the best option.",
        explanation: "Superlative modifier: by far / easily / much",
      },
      {
        left: "The weather is",
        answers: ["a bit", "a little", "slightly"],
        right: "warmer today.",
        explanation: "Slight difference: a bit / a little / slightly",
      },
      {
        left: "He's",
        answers: ["way", "much", "far", "a lot"],
        right: "faster than me.",
        explanation: "Strong difference: way / much / far / a lot",
      },
      {
        left: "This is",
        answers: ["by far", "easily"],
        right: "the most expensive hotel.",
        explanation: "Superlative: by far / easily",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение: Modifiers">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border-2 border-blue-400 mb-4">
            <p className="font-bold text-blue-900 mb-2 text-lg">
              🎯 Вставь подходящий modifier!
            </p>
            <p className="text-sm text-zinc-700">
              Выбери правильный модификатор в зависимости от контекста (strong /
              slight / superlative)!
            </p>
          </div>

          <CheckableExercise
            title="Comparatives Modifiers — 6 вопросов"
            instruction="Вставь подходящий modifier."
            items={items}
          />
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
              10 критических ошибок с Modifiers
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Ошибка 1: Very + сравнительная степень",
                  wrong: "This is very better.",
                  correct: "This is much better. / This is a lot better.",
                  rule: "Very НЕ работает со сравнительной степенью!",
                },
                {
                  title: "Ошибка 2: Very + the best",
                  wrong: "This is very the best.",
                  correct:
                    "This is by far the best. / This is easily the best.",
                  rule: "Very НЕ работает с превосходной степенью!",
                },
                {
                  title: "Ошибка 3: More + much",
                  wrong: "This is more much expensive.",
                  correct: "This is much more expensive.",
                  rule: "Much ПЕРЕД more, а не после!",
                },
                {
                  title: "Ошибка 4: Way в формальном контексте",
                  wrong: "The results are way better. (в научной статье)",
                  correct:
                    "The results are far better. / significantly better.",
                  rule: "Way — только для неформальной речи!",
                },
                {
                  title: "Ошибка 5: A bit в официальных текстах",
                  wrong: "The price is a bit higher. (в деловом отчёте)",
                  correct: "The price is slightly higher.",
                  rule: "A bit — неформальный, в официальных текстах — slightly!",
                },
                {
                  title: "Ошибка 6: More лучше вместо better",
                  wrong: "This is much more good.",
                  correct: "This is much better.",
                  rule: "Better — неправильная форма, не more good!",
                },
                {
                  title: "Ошибка 7: By far после the best",
                  wrong: "This is the best by far.",
                  correct: "This is by far the best.",
                  rule: "By far ПЕРЕД the + superlative!",
                },
                {
                  title: "Ошибка 8: Много модификаторов одновременно",
                  wrong: "This is much far better.",
                  correct: "This is much better. / This is far better.",
                  rule: "Используй ОДИН модификатор, не два!",
                },
                {
                  title: "Ошибка 9: More + односложные прилагательные",
                  wrong: "This is much more big.",
                  correct: "This is much bigger.",
                  rule: "Big → bigger (не more big)!",
                },
                {
                  title: "Ошибка 10: So вместо модификатора",
                  wrong: "This is so better.",
                  correct: "This is much better. / This is so much better.",
                  rule: 'So НЕ используется одно, нужно "so much better"!',
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
        left: "This car is",
        answers: ["much", "far", "a lot"],
        right: "more expensive than mine.",
        explanation: "Strong modifier для большой разницы",
      },
      {
        left: "She's",
        answers: ["slightly", "a little", "a bit"],
        right: "older than me.",
        explanation: "Slight modifier для маленькой разницы",
      },
      {
        left: "This is",
        answers: ["by far", "easily"],
        right: "the best restaurant in town.",
        explanation: "Superlative modifier: by far / easily",
      },
      {
        left: "The new version is",
        answers: ["way", "much", "a lot", "far"],
        right: "better.",
        explanation: "Strong modifier",
      },
      {
        left: "It's",
        answers: ["a bit", "slightly", "a little"],
        right: "colder today.",
        explanation: "Slight difference",
      },
      {
        left: "He's",
        answers: ["by far", "easily", "much"],
        right: "the fastest runner.",
        explanation: "Superlative: by far / easily / much",
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: Comparatives Modifiers
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильный modifier."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Comparatives Modifiers
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  1️⃣ Strong Modifiers (намного)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Much</strong> (universal) — much better
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Far</strong> (formal) — far more expensive
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A lot</strong> (informal) — a lot faster
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Way</strong> (very informal) — way cooler
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  2️⃣ Slight Modifiers (немного)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A bit</strong> (informal) — a bit warmer
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>A little</strong> (neutral) — a little more expensive
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Slightly</strong> (formal) — slightly higher
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  3️⃣ Superlative Modifiers
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>By far</strong> — by far the best
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Easily</strong> — easily the most interesting
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Much</strong> — much the fastest
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотые правила
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ❌ НЕ используй <strong>very</strong> со сравнительной и
                  превосходной степенью!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  ✅ Модификатор ВСЕГДА ПЕРЕД сравнительной степенью!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  ✅ By far ПЕРЕД the + superlative!
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
