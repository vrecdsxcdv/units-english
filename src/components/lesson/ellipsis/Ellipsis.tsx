"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Ellipsis({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Ellipsis & Substitution">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Ellipsis & Substitution — Избегаем повторений
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              В английском языке **не принято повторять** одни и те же слова!
              Для этого используются **ellipsis** (пропуск слов) и
              **substitution** (замещение)!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Основные способы
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    ELLIPSIS (Эллипсис)
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Пропуск повторяющихся слов
                  </p>
                  <p className="text-xs text-zinc-600">
                    ❌ I can swim and she can <del>swim</del> too.
                  </p>
                  <p className="text-xs text-zinc-600 font-bold">
                    ✅ I can swim and she can too.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    SUBSTITUTION (Замещение)
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Замена повторяющихся слов
                  </p>
                  <p className="text-xs text-zinc-600">
                    ❌ I have a red car. She has a blue <del>car</del>.
                  </p>
                  <p className="text-xs text-zinc-600 font-bold">
                    ✅ I have a red car. She has a blue <strong>one</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Зачем это нужно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-red-900 mb-1">
                    ❌ Плохо (повторения):
                  </p>
                  <p className="text-xs italic">
                    I like coffee and my sister likes coffee too. My brother
                    doesn't like coffee, but my mother likes coffee.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    ✅ Хорошо (без повторений):
                  </p>
                  <p className="text-xs italic">
                    I like coffee and my sister <strong>does</strong> too. My
                    brother <strong>doesn't</strong>, but my mother{" "}
                    <strong>does</strong>.
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
                  <p>✅ Ellipsis с модальными глаголами (can, will, must)</p>
                  <p>✅ Substitution с DO/DOES/DID</p>
                  <p>✅ Substitution с ONE/ONES</p>
                </div>
                <div>
                  <p>✅ SO / NOT для замещения</p>
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
        <Section title="✂️ Ellipsis с модальными глаголами">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Ellipsis — пропуск после модальных глаголов
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              После **модальных глаголов** (can, will, must, should, may, might)
              можно **пропустить** основной глагол, если он уже упоминался!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. CAN — могу, умею
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Can you swim? B: Yes, I <strong>can</strong>. (can
                        swim)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        She can't dance, but I <strong>can</strong>. (can dance)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        He can drive and she <strong>can</strong> too. (can
                        drive)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I can't cook, but my sister <strong>can</strong>. (can
                        cook)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Can they speak French? B: Yes, they{" "}
                        <strong>can</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. WILL — буду, сделаю
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Will you come? B: Yes, I <strong>will</strong>. (will
                        come)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        She won't go, but I <strong>will</strong>. (will go)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        He'll help and I <strong>will</strong> too. (will help)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I won't tell, but she <strong>will</strong>. (will tell)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Will they join us? B: I hope they{" "}
                        <strong>will</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. SHOULD / MUST — следует, должен
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        A: Should I go? B: Yes, you <strong>should</strong>.
                        (should go)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        You must study and he <strong>must</strong> too. (must
                        study)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        I shouldn't eat sweets, but I want to. He{" "}
                        <strong>shouldn't</strong> either.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        A: Must we wait? B: Yes, you <strong>must</strong>.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        She should apologize and you <strong>should</strong>{" "}
                        too.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. MAY / MIGHT — может быть
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-orange-900 mb-2">10 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-orange-50 rounded p-2">
                      <p className="italic">
                        A: May I leave? B: Yes, you <strong>may</strong>.
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="italic">
                        She might come and he <strong>might</strong> too.
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="italic">
                        I may not go, but they <strong>may</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Золотое правило
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  После модального глагола **можно пропустить** основной глагол!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ❌ Can you swim? Yes, I can <del>swim</del>.
                </p>
                <p className="text-sm text-zinc-700 text-center font-bold">
                  ✅ Can you swim? Yes, I <strong>can</strong>.
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
        <Section title="🔄 Substitution с DO/DOES/DID">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              DO / DOES / DID — замещение глаголов
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **DO / DOES / DID** используются для **замещения** основных
              глаголов, чтобы избежать повторений!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. DO / DOES — Present Simple
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I like coffee and she <strong>does</strong> too. (likes
                        coffee)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        He works hard and I <strong>do</strong> too. (work hard)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Do you speak English? B: Yes, I <strong>do</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        She doesn't smoke and I <strong>don't</strong> either.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        He plays tennis and she <strong>does</strong> too.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I don't like it, but he <strong>does</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Does she know? B: Yes, she <strong>does</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        They live here and we <strong>do</strong> too.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I don't understand, but she <strong>does</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        He doesn't agree and I <strong>don't</strong> either.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. DID — Past Simple
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I went there and she <strong>did</strong> too. (went
                        there)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        He studied hard and I <strong>did</strong> too. (studied
                        hard)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Did you see it? B: Yes, I <strong>did</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        She didn't know and I <strong>didn't</strong> either.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        He called me and she <strong>did</strong> too.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I didn't go, but he <strong>did</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Did she tell you? B: Yes, she <strong>did</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        They left early and we <strong>did</strong> too.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I didn't believe it, but she <strong>did</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        He didn't pass and I <strong>didn't</strong> either.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическое правило!
                </h4>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    TOO — для утверждений | EITHER — для отрицаний
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I like it and she does <strong>too</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">(утверждение)</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I don't like it and she doesn't{" "}
                        <strong>either</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">(отрицание)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>DO/DOES/DID</strong> заменяют основной глагол!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ I like coffee and she <strong>does</strong> too.
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ❌ I like coffee and she <del>likes</del> too.
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
        <Section title="🔵 Substitution с ONE / ONES">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              ONE / ONES — замещение существительных
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **ONE / ONES** используются для **замещения исчисляемых
              существительных**, чтобы избежать повторений!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. ONE — единственное число
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I have a red car. She has a blue <strong>one</strong>.
                        (car)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        This book is boring. I need an interesting{" "}
                        <strong>one</strong>. (book)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I don't like this dress. I prefer the black{" "}
                        <strong>one</strong>. (dress)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        This phone is expensive. Do you have a cheaper{" "}
                        <strong>one</strong>? (phone)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I lost my pen. Can I borrow your <strong>one</strong>?
                        (pen)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        This bag is too small. I need a bigger{" "}
                        <strong>one</strong>. (bag)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I don't like the green shirt. I'll take the white{" "}
                        <strong>one</strong>. (shirt)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        This chair is broken. We need a new <strong>one</strong>
                        . (chair)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        I have a dog. She wants <strong>one</strong> too. (dog)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        This laptop is old. I'll buy a new <strong>one</strong>.
                        (laptop)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. ONES — множественное число
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I have red shoes. She has blue <strong>ones</strong>.
                        (shoes)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        These books are boring. I need interesting{" "}
                        <strong>ones</strong>. (books)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I don't like these jeans. I prefer the black{" "}
                        <strong>ones</strong>. (jeans)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        These phones are expensive. Do you have cheaper{" "}
                        <strong>ones</strong>? (phones)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I lost my gloves. Can I borrow your{" "}
                        <strong>ones</strong>? (gloves)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        These bags are too small. I need bigger{" "}
                        <strong>ones</strong>. (bags)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        I don't like the green curtains. I prefer the white{" "}
                        <strong>ones</strong>. (curtains)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        These chairs are broken. We need new{" "}
                        <strong>ones</strong>. (chairs)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическое правило!
                </h4>
                <div className="bg-white rounded p-3 mb-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    ONE/ONES ТОЛЬКО для исчисляемых существительных!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">
                        ❌ I like milk. She likes <del>one</del> too.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (milk — uncountable!)
                      </p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I like milk. She <strong>does</strong> too.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (используй DO/DOES!)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-2 text-center font-bold text-red-900">
                    ONE/ONES + прилагательное
                  </p>
                  <div className="space-y-2">
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I need a <strong>big one</strong>. (прилагательное +
                        one)
                      </p>
                    </div>
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">
                        ❌ I need <del>one big</del>. (неправильный порядок!)
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
                  <strong>ONE/ONES</strong> заменяют исчисляемые
                  существительные!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ I have a red car. She has a blue <strong>one</strong>.
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  ❌ She has a blue <del>car</del>. (повторение!)
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
        <Section title="💬 SO / NOT — замещение предложений">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              SO / NOT — замещение целых предложений
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **SO** и **NOT** используются для **замещения целых предложений**,
              чтобы избежать повторений!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. I think SO / I hope SO
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    SO заменяет утвердительное предложение
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    A: Will it rain? B: I think <strong>so</strong>. (it will
                    rain)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Will it rain? B: I think <strong>so</strong>. (it
                        will rain)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Is she coming? B: I hope <strong>so</strong>. (she is
                        coming)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Will he pass? B: I expect <strong>so</strong>. (he
                        will pass)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Are they late? B: I'm afraid <strong>so</strong>.
                        (they are late)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Is it expensive? B: I believe <strong>so</strong>.
                        (it is expensive)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Will she agree? B: I suppose <strong>so</strong>.
                        (she will agree)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Is he busy? B: I guess <strong>so</strong>. (he is
                        busy)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: Will they win? B: I assume <strong>so</strong>. (they
                        will win)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. I think NOT / I hope NOT
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    NOT заменяет отрицательное предложение
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    A: Will it rain? B: I hope <strong>not</strong>. (it won't
                    rain)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Will it rain? B: I hope <strong>not</strong>. (it
                        won't rain)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Is she coming? B: I hope <strong>not</strong>. (she
                        isn't coming)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Will he fail? B: I hope <strong>not</strong>. (he
                        won't fail)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Are they late? B: I hope <strong>not</strong>. (they
                        aren't late)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Is it expensive? B: I hope <strong>not</strong>. (it
                        isn't expensive)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Will she refuse? B: I hope <strong>not</strong>. (she
                        won't refuse)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Is he angry? B: I hope <strong>not</strong>. (he
                        isn't angry)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: Will they lose? B: I hope <strong>not</strong>. (they
                        won't lose)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Глаголы, с которыми используются SO / NOT
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">
                    Основные глаголы
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <p className="bg-purple-50 rounded p-2">
                      <strong>think</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>hope</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>expect</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>believe</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>suppose</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>guess</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>assume</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      <strong>imagine</strong> so/not
                    </p>
                    <p className="bg-purple-50 rounded p-2">
                      I'm <strong>afraid</strong> so/not
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
                    Некоторые глаголы используют ТОЛЬКО "I don't think so"
                  </p>
                  <div className="space-y-2">
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I <strong>don't think so</strong>. (НЕ "I think not")
                      </p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I <strong>don't believe so</strong>. (НЕ "I believe
                        not")
                      </p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I <strong>don't suppose so</strong>. (НЕ "I suppose
                        not")
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
                  <strong>SO</strong> заменяет утвердительное предложение!
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>NOT</strong> заменяет отрицательное предложение!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  ✅ I think so / I hope not
                </p>
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
              10 критических ошибок с Ellipsis & Substitution
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Ошибка 1: Повторение глагола с DO/DOES",
                  wrong: "I like coffee and she does likes too.",
                  correct: "I like coffee and she does too.",
                  rule: "DOES заменяет глагол, не нужно повторять!",
                },
                {
                  title: "Ошибка 2: ONE с неисчисляемыми",
                  wrong: "I like milk. She likes one too.",
                  correct: "I like milk. She does too.",
                  rule: "ONE только для исчисляемых существительных!",
                },
                {
                  title: "Ошибка 3: Порядок слов с ONE",
                  wrong: "I need one big.",
                  correct: "I need a big one.",
                  rule: "Прилагательное + ONE (НЕ наоборот)!",
                },
                {
                  title: "Ошибка 4: I think not",
                  wrong: "A: Will it rain? B: I think not.",
                  correct: "A: Will it rain? B: I don't think so.",
                  rule: "С THINK используй 'I don't think so' (НЕ 'I think not')!",
                },
                {
                  title: "Ошибка 5: TOO в отрицании",
                  wrong: "I don't like it and she doesn't too.",
                  correct: "I don't like it and she doesn't either.",
                  rule: "EITHER для отрицаний (НЕ too)!",
                },
                {
                  title: "Ошибка 6: Повторение существительного",
                  wrong: "I have a red car. She has a blue car.",
                  correct: "I have a red car. She has a blue one.",
                  rule: "Используй ONE, чтобы избежать повторения!",
                },
                {
                  title: "Ошибка 7: SO вместо DO",
                  wrong: "I like coffee and she so too.",
                  correct: "I like coffee and she does too.",
                  rule: "SO для замещения предложений, НЕ глаголов!",
                },
                {
                  title: "Ошибка 8: Пропуск TO после модального",
                  wrong: "Can you swim? Yes, I can to.",
                  correct: "Can you swim? Yes, I can.",
                  rule: "После модальных — инфинитив БЕЗ TO!",
                },
                {
                  title: "Ошибка 9: ONES в единственном числе",
                  wrong: "I have a red car. She has a blue ones.",
                  correct: "I have a red car. She has a blue one.",
                  rule: "ONE для единственного числа!",
                },
                {
                  title: "Ошибка 10: DO с модальными",
                  wrong: "Can you swim? Yes, I do.",
                  correct: "Can you swim? Yes, I can.",
                  rule: "С модальными используй сам модальный глагол!",
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
        left: "Can you swim? Yes, I",
        answers: ["can"],
        right: ". (ellipsis с модальным)",
        explanation: "Пропуск глагола после модального",
      },
      {
        left: "I like coffee and she",
        answers: ["does"],
        right: "too. (substitution с does)",
        explanation: "DOES заменяет 'likes coffee'",
      },
      {
        left: "I have a red car. She has a blue",
        answers: ["one"],
        right: ". (substitution с one)",
        explanation: "ONE заменяет 'car'",
      },
      {
        left: "A: Will it rain? B: I hope",
        answers: ["not"],
        right: ". (SO/NOT)",
        explanation: "NOT заменяет 'it won't rain'",
      },
      {
        left: "I don't like it and she doesn't",
        answers: ["either"],
        right: ". (either в отрицании)",
        explanation: "EITHER для отрицаний (НЕ too!)",
      },
      {
        left: "These books are boring. I need interesting",
        answers: ["ones"],
        right: ". (ones множественное)",
        explanation: "ONES заменяет 'books' (множественное число)",
        wide: true,
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: Ellipsis & Substitution
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильное слово."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Ellipsis & Substitution
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  1️⃣ ELLIPSIS с модальными
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Правило:</strong> Пропуск глагола после модального
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  Can you swim? Yes, I <strong>can</strong>. (can swim)
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  2️⃣ SUBSTITUTION с DO/DOES/DID
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Правило:</strong> Замена основных глаголов
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  I like coffee and she <strong>does</strong> too. (likes
                  coffee)
                </p>
                <p className="text-sm text-zinc-700 mt-2">
                  <strong>TOO</strong> — утверждение | <strong>EITHER</strong> —
                  отрицание
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  3️⃣ SUBSTITUTION с ONE/ONES
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Правило:</strong> Замена исчисляемых существительных
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  I have a red car. She has a blue <strong>one</strong>. (car)
                </p>
                <p className="text-sm text-zinc-700 mt-2">
                  <strong>ONE</strong> — единственное | <strong>ONES</strong> —
                  множественное
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">4️⃣ SO / NOT</p>
                <p className="text-sm text-zinc-700">
                  <strong>Правило:</strong> Замена целых предложений
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  A: Will it rain? B: I think <strong>so</strong>. (it will
                  rain)
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  A: Will it rain? B: I hope <strong>not</strong>. (it won't
                  rain)
                </p>
                <p className="text-sm text-zinc-700 mt-2 font-bold text-red-900">
                  ⚠️ I <strong>don't think so</strong> (НЕ "I think not")
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотые правила
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Используй <strong>ellipsis</strong> и{" "}
                  <strong>substitution</strong>, чтобы избежать повторений!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  <strong>Модальные:</strong> Can you? Yes, I{" "}
                  <strong>can</strong>.
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  <strong>Глаголы:</strong> She likes it and I{" "}
                  <strong>do</strong> too.
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  <strong>Существительные:</strong> A red car and a blue{" "}
                  <strong>one</strong>.
                </p>
                <p className="text-sm text-zinc-700 text-center mt-1">
                  <strong>Предложения:</strong> I think <strong>so</strong> / I
                  hope <strong>not</strong>.
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
