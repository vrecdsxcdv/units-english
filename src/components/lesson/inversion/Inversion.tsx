"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Inversion({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Inversion — Инверсия">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Inversion — Обратный порядок слов для эмфазы
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Инверсия** — это изменение обычного порядка слов для создания
              **эмфатического эффекта** или придания речи **формального стиля**!
              Используется в литературе, публичных выступлениях и формальном
              письме!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Что такое инверсия?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Обычный порядок
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Subject + Verb + Object
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    I have <strong>never</strong> seen such beauty.
                  </p>
                  <p className="text-xs text-zinc-600">(обычно)</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Инверсия
                  </p>
                  <p className="text-xs text-zinc-600 text-center mb-2">
                    Adverb + Auxiliary + Subject + Verb
                  </p>
                  <p className="text-xs text-zinc-600 italic font-bold">
                    <strong>Never</strong> have I seen such beauty.
                  </p>
                  <p className="text-xs text-zinc-600">(эмфаза!)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Зачем это нужно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. Эмфаза (усиление)
                  </p>
                  <p className="text-xs italic">
                    <strong>Never</strong> have I been so shocked!
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Никогда не был так шокирован! — сильнее!)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. Формальный стиль
                  </p>
                  <p className="text-xs italic">
                    <strong>Rarely</strong> do we see such dedication.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (В официальных речах, литературе)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Драматический эффект
                  </p>
                  <p className="text-xs italic">
                    <strong>No sooner</strong> had I arrived than it started to
                    rain.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (В повествовании, историях)
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
                  <p>
                    ✅ Negative adverbials (Never, Rarely, Seldom, Hardly, No
                    sooner)
                  </p>
                  <p>✅ Only / Not only</p>
                  <p>✅ SO / NEITHER / NOR для согласия</p>
                </div>
                <div>
                  <p>✅ Conditional inversion (Had I known, Were I rich)</p>
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
        <Section title="🔴 Negative Adverbials — Never, Rarely, Seldom">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Инверсия с отрицательными наречиями
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              После **отрицательных наречий** в начале предложения используется
              **инверсия**: auxiliary + subject + main verb!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. NEVER — никогда
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    NEVER + auxiliary + subject + verb
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Never <strong>have I</strong> seen such beauty.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (Обычно: I have never seen...)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Never have I</strong> been so shocked!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I have never been...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Never will I</strong> forget this day!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I will never forget...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Never did I</strong> expect such a result!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I never expected...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Never has she</strong> worked so hard!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (She has never worked...)
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Never had they</strong> seen such a sight!
                      </p>
                      <p className="text-xs text-zinc-600">
                        (They had never seen...)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. RARELY / SELDOM — редко
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Rarely do we</strong> see such dedication.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (We rarely see...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Seldom have I</strong> met anyone so kind.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I have seldom met...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Rarely does he</strong> complain.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (He rarely complains...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Seldom had they</strong> been so happy.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (They had seldom been...)
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Rarely will you</strong> find such quality.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (You will rarely find...)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. HARDLY / SCARCELY / BARELY — едва
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Hardly had I</strong> arrived when it started to
                        rain.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I had hardly arrived...)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Scarcely had she</strong> sat down when the
                        phone rang.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (She had scarcely sat...)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Barely had they</strong> met before they fell in
                        love.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (They had barely met...)
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Hardly do I</strong> ever go there.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (I hardly ever go...)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Формула
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>
                    Negative Adverb + auxiliary + subject + main verb
                  </strong>
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Never / Rarely / Seldom / Hardly / Scarcely / Barely +
                  have/has/had/do/does/did/will/would + subject + verb
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
        <Section title="⚡ NO SOONER / LITTLE — Сложные случаи">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              NO SOONER ... THAN / LITTLE did I know
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **NO SOONER** (едва...как) и **LITTLE** (мало) — особые случаи
              инверсии с отрицательным значением!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. NO SOONER ... THAN — Едва...как
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    NO SOONER + had + subject + V3 + THAN
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    No sooner <strong>had I</strong> arrived{" "}
                    <strong>than</strong> it started to rain.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    = Едва я приехал, как начался дождь.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>No sooner had I</strong> sat down{" "}
                        <strong>than</strong> the phone rang.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>No sooner had she</strong> left{" "}
                        <strong>than</strong> he arrived.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>No sooner had they</strong> started{" "}
                        <strong>than</strong> it began to snow.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>No sooner had he</strong> finished{" "}
                        <strong>than</strong> the bell rang.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>No sooner had we</strong> entered{" "}
                        <strong>than</strong> the show began.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>No sooner had I</strong> closed my eyes{" "}
                        <strong>than</strong> I fell asleep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. LITTLE — Мало (отрицательное значение)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    LITTLE + did/does + subject + know/realize/suspect
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Little <strong>did I know</strong> what was coming.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    = Я и не подозревал, что меня ждёт.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Little did I know</strong> it would change my
                        life.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Little did she realize</strong> the danger she
                        was in.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Little did they suspect</strong> what was about
                        to happen.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Little did he imagine</strong> he would become
                        famous.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Little did we expect</strong> such a warm
                        welcome.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Little does she know</strong> how much we care.
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
                    NO SOONER ... THAN (НЕ "when"!)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">
                        ❌ No sooner had I arrived <strong>when</strong>...
                      </p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ No sooner had I arrived <strong>than</strong>...
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2 text-center">
                    Используй THAN, НЕ when!
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни!
                </h4>
                <p className="text-sm text-zinc-700 text-center">
                  <strong>NO SOONER</strong> — всегда с Past Perfect (had + V3)!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  <strong>LITTLE</strong> — обычно с know/realize/suspect!
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
        <Section title="🔵 ONLY / NOT ONLY — Только/Не только">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Инверсия с ONLY и NOT ONLY
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              После **ONLY** и **NOT ONLY** в начале предложения используется
              **инверсия** для эмфазы!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. ONLY + time expression
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    ONLY + time + auxiliary + subject + verb
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Only <strong>then did I</strong> realize my mistake.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (I realized my mistake only then.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Only then did I</strong> understand the truth.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Only later did she</strong> realize her mistake.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Only yesterday did we</strong> hear the news.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Only after the meeting did he</strong> speak.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Only when I arrived did I</strong> see the
                        problem.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Only once have I</strong> been to Paris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. NOT ONLY ... BUT ALSO
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    NOT ONLY + auxiliary + subject + verb, BUT ALSO...
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Not only <strong>is she</strong> smart, but also beautiful.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Not only is she</strong> smart, but also kind.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Not only did he</strong> pass, but he got an A!
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Not only has she</strong> visited Paris, but
                        also London.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Not only was he</strong> late, but also rude.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Not only does she</strong> speak English, but
                        also French.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Not only can he</strong> sing, but also dance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. ONLY BY / ONLY IF / ONLY WHEN
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Only by working hard can you</strong> succeed.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Only if you try will you</strong> know.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Only when I left did I</strong> feel free.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Only through practice can we</strong> improve.
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
                  После <strong>ONLY + time/manner</strong> — инверсия!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  После <strong>NOT ONLY</strong> — инверсия в первой части!
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
        <Section title="🔄 SO / NEITHER / NOR — Согласие">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Инверсия для выражения согласия
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **SO**, **NEITHER**, **NOR** используются для выражения согласия с
              предыдущим утверждением, с инверсией!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. SO — согласие с утверждением
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    SO + auxiliary + subject
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I like coffee. — <strong>So do I</strong>. (Я тоже.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: I like coffee. B: <strong>So do I</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: She can swim. B: <strong>So can I</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: He has finished. B: <strong>So have I</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: They will come. B: <strong>So will we</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: I am tired. B: <strong>So am I</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: She was happy. B: <strong>So was I</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: I went there. B: <strong>So did I</strong>.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        A: He would help. B: <strong>So would I</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. NEITHER / NOR — согласие с отрицанием
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    NEITHER/NOR + auxiliary + subject
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    I don't like it. — <strong>Neither do I</strong>. (Я тоже.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">20 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: I don't like it. B: <strong>Neither do I</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: She can't swim. B: <strong>Neither can I</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: He hasn't finished. B:{" "}
                        <strong>Neither have I</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: They won't come. B: <strong>Neither will we</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: I'm not ready. B: <strong>Neither am I</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: She wasn't there. B: <strong>Neither was I</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: I didn't go. B: <strong>Nor did I</strong>.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        A: He wouldn't help. B: <strong>Nor would I</strong>.
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
                    SO — для утверждений | NEITHER/NOR — для отрицаний
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I like it. — <strong>So do I</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">(утверждение)</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">
                        ✅ I don't like it. — <strong>Neither do I</strong>.
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
                  Используй <strong>SO</strong> с утверждениями!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Используй <strong>NEITHER/NOR</strong> с отрицаниями!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Порядок: auxiliary + subject (инверсия!)
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
        <Section title="🔀 Conditional Inversion — Had I known...">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Инверсия в условных предложениях
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              В **условных предложениях** можно убрать **IF** и использовать
              **инверсию** для более формального стиля!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. HAD — Third Conditional (If I had known)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-blue-900 mb-2">
                    HAD + subject + V3, would have + V3
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    <strong>Had I known</strong>, I would have come.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (If I had known, I would have come.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-blue-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Had I known</strong>, I wouldn't have gone.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Had she studied</strong>, she would have passed.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Had they arrived earlier</strong>, they would
                        have seen it.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="italic">
                        <strong>Had we left sooner</strong>, we wouldn't have
                        missed the train.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. WERE — Second Conditional (If I were rich)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-green-900 mb-2">
                    WERE + subject + adjective/noun, would + V1
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    <strong>Were I rich</strong>, I would travel the world.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (If I were rich, I would travel the world.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-green-900 mb-2">15 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Were I you</strong>, I would apologize.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Were she here</strong>, she would help.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Were they rich</strong>, they would buy a house.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="italic">
                        <strong>Were it not for you</strong>, I would be lost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. SHOULD — First Conditional (If you should need)
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-lg font-bold text-purple-900 mb-2">
                    SHOULD + subject + V1, will + V1
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    <strong>Should you need</strong> help, call me.
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-1">
                    (If you should need help, call me.)
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-purple-900 mb-2">10 примеров</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Should you need</strong> anything, let me know.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Should she call</strong>, tell her I'm busy.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <p className="italic">
                        <strong>Should they arrive</strong> early, wait for me.
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
                  Conditional inversion — очень формальный стиль!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  <strong>HAD</strong> = If I had (Third) |{" "}
                  <strong>WERE</strong> = If I were (Second) |{" "}
                  <strong>SHOULD</strong> = If you should (First)
                </p>
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
        left: "Never",
        answers: ["have I"],
        right: "seen such beauty! (negative adverbial)",
        explanation: "Never + have + subject + V3 (инверсия)",
        wide: true,
      },
      {
        left: "No sooner had I arrived",
        answers: ["than"],
        right: "it started to rain. (no sooner...than)",
        explanation: "NO SOONER ... THAN (НЕ when!)",
      },
      {
        left: "Not only",
        answers: ["is she"],
        right: "smart, but also kind. (not only)",
        explanation: "Not only + is + subject + adjective",
      },
      {
        left: "I like coffee. —",
        answers: ["So do I", "So do I."],
        right: "(согласие)",
        explanation: "SO + do + subject (для утверждений)",
      },
      {
        left: "I don't like it. —",
        answers: ["Neither do I", "Neither do I.", "Nor do I", "Nor do I."],
        right: "(согласие)",
        explanation: "NEITHER/NOR + do + subject (для отрицаний)",
        wide: true,
      },
      {
        left: "",
        answers: ["Had I known", "Had I known,"],
        right: "I would have come. (conditional)",
        explanation: "HAD + subject + V3 = If I had known",
        wide: true,
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Финальный тест: Inversion
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь правильное слово/слова."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Inversion
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2">
                  1️⃣ Negative Adverbials
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>
                    Never / Rarely / Seldom / Hardly / Scarcely / Barely
                  </strong>{" "}
                  + auxiliary + subject + verb
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  Never <strong>have I</strong> seen such beauty!
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">
                  2️⃣ NO SOONER ... THAN
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>No sooner + had + subject + V3 + THAN</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  No sooner <strong>had I arrived</strong> than it started to
                  rain.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  3️⃣ ONLY / NOT ONLY
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>Only + time/manner + auxiliary + subject</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  Only then <strong>did I</strong> realize.
                </p>
                <p className="text-sm text-zinc-700 mt-2">
                  <strong>Not only + auxiliary + subject</strong>
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  Not only <strong>is she</strong> smart, but also kind.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  4️⃣ SO / NEITHER / NOR
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>SO</strong> — утверждение |{" "}
                  <strong>NEITHER/NOR</strong> — отрицание
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  I like it. — <strong>So do I</strong>.
                </p>
                <p className="text-sm text-zinc-700 italic mt-1">
                  I don't like it. — <strong>Neither do I</strong>.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  5️⃣ Conditional Inversion
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>HAD</strong> + subject + V3 = If I had (Third)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>WERE</strong> + subject = If I were (Second)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>SHOULD</strong> + subject + V1 = If you should (First)
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотое правило
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Инверсия — для <strong>эмфазы</strong> и{" "}
                  <strong>формального стиля</strong>!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  Формула:{" "}
                  <strong>Adverb/Negative + Auxiliary + Subject + Verb</strong>
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
