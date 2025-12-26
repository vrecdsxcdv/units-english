"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PersonalityAdjectives({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Personality Adjectives">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Personality Adjectives — Описание характера
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Personality adjectives** — прилагательные для описания черт
              характера человека. Это одна из самых важных лексических тем для
              общения!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Основные категории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Positive (Позитивные)
                  </p>
                  <p className="text-xs text-zinc-600">
                    outgoing, reliable, easy-going, friendly, generous, kind
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-red-900 text-center">
                    Negative (Негативные)
                  </p>
                  <p className="text-xs text-zinc-600">
                    stubborn, selfish, arrogant, lazy, rude, jealous
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Neutral (Нейтральные)
                  </p>
                  <p className="text-xs text-zinc-600">
                    quiet, talkative, shy, ambitious, serious, reserved
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Почему это важно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. Описание людей
                  </p>
                  <p className="text-xs italic">
                    She's very <strong>outgoing</strong> and{" "}
                    <strong>friendly</strong>. Everyone loves her!
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. Собеседования
                  </p>
                  <p className="text-xs italic">
                    I'm <strong>reliable</strong>, <strong>hard-working</strong>
                    , and <strong>punctual</strong>.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Письмо и Speaking
                  </p>
                  <p className="text-xs italic">
                    My best friend is <strong>easy-going</strong> and{" "}
                    <strong>down-to-earth</strong>.
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
                  <p>✅ 50+ personality adjectives</p>
                  <p>✅ Positive, negative, neutral traits</p>
                  <p>✅ Collocations (highly motivated, extremely stubborn)</p>
                </div>
                <div>
                  <p>✅ Тексты для чтения с описанием людей</p>
                  <p>✅ Упражнения на использование в контексте</p>
                  <p>✅ Идиомы и выражения о характере</p>
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
        <Section title="💚 Positive Personality Adjectives">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Позитивные черты характера
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти прилагательные описывают **хорошие качества** человека!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Social traits (Социальные качества)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        outgoing /ˌaʊtˈɡəʊɪŋ/
                      </p>
                      <p className="text-sm text-zinc-700">
                        общительный, открытый
                      </p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>outgoing</strong> and makes friends
                        easily.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она очень общительная и легко заводит друзей.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        friendly /ˈfrendli/
                      </p>
                      <p className="text-sm text-zinc-700">дружелюбный</p>
                      <p className="text-xs italic mt-1">
                        He's always <strong>friendly</strong> and welcoming.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он всегда дружелюбный и приветливый.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        sociable /ˈsəʊʃəbl/
                      </p>
                      <p className="text-sm text-zinc-700">
                        общительный, компанейский
                      </p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>sociable</strong> and loves parties.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она очень общительная и любит вечеринки.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        easy-going /ˌiːzi ˈɡəʊɪŋ/
                      </p>
                      <p className="text-sm text-zinc-700">
                        спокойный, покладистый
                      </p>
                      <p className="text-xs italic mt-1">
                        He's really <strong>easy-going</strong> and never gets
                        stressed.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он очень спокойный и никогда не нервничает.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        warm-hearted /ˌwɔːm ˈhɑːtɪd/
                      </p>
                      <p className="text-sm text-zinc-700">сердечный, добрый</p>
                      <p className="text-xs italic mt-1">
                        She's a <strong>warm-hearted</strong> person who cares
                        about everyone.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она сердечный человек, который заботится о всех.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. Reliability & Work ethic (Надёжность и работа)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-bold text-green-900">
                        reliable /rɪˈlaɪəbl/
                      </p>
                      <p className="text-sm text-zinc-700">надёжный</p>
                      <p className="text-xs italic mt-1">
                        He's extremely <strong>reliable</strong> — you can
                        always count on him.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он очень надёжный — на него всегда можно положиться.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded p-3">
                      <p className="font-bold text-green-900">
                        responsible /rɪˈspɒnsəbl/
                      </p>
                      <p className="text-sm text-zinc-700">ответственный</p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>responsible</strong> and always meets
                        deadlines.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она очень ответственная и всегда соблюдает сроки.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded p-3">
                      <p className="font-bold text-green-900">
                        hard-working /ˌhɑːd ˈwɜːkɪŋ/
                      </p>
                      <p className="text-sm text-zinc-700">трудолюбивый</p>
                      <p className="text-xs italic mt-1">
                        He's incredibly <strong>hard-working</strong> and never
                        gives up.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он невероятно трудолюбивый и никогда не сдаётся.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded p-3">
                      <p className="font-bold text-green-900">
                        punctual /ˈpʌŋktʃuəl/
                      </p>
                      <p className="text-sm text-zinc-700">пунктуальный</p>
                      <p className="text-xs italic mt-1">
                        She's always <strong>punctual</strong> and never late.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она всегда пунктуальная и никогда не опаздывает.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded p-3">
                      <p className="font-bold text-green-900">
                        ambitious /æmˈbɪʃəs/
                      </p>
                      <p className="text-sm text-zinc-700">
                        амбициозный, целеустремлённый
                      </p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>ambitious</strong> and wants to
                        succeed.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он очень амбициозный и хочет добиться успеха.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Kindness & Generosity (Доброта и щедрость)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        generous /ˈdʒenərəs/
                      </p>
                      <p className="text-sm text-zinc-700">щедрый</p>
                      <p className="text-xs italic mt-1">
                        She's extremely <strong>generous</strong> and always
                        helps others.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она очень щедрая и всегда помогает другим.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">kind /kaɪnd/</p>
                      <p className="text-sm text-zinc-700">добрый</p>
                      <p className="text-xs italic mt-1">
                        He's so <strong>kind</strong> — he never says a bad word
                        about anyone.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он такой добрый — никогда ни о ком плохо не говорит.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        caring /ˈkeərɪŋ/
                      </p>
                      <p className="text-sm text-zinc-700">заботливый</p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>caring</strong> and always thinks of
                        others.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она очень заботливая и всегда думает о других.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        compassionate /kəmˈpæʃənət/
                      </p>
                      <p className="text-sm text-zinc-700">сострадательный</p>
                      <p className="text-xs italic mt-1">
                        He's deeply <strong>compassionate</strong> and
                        understands people's pain.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он глубоко сострадательный и понимает боль людей.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        thoughtful /ˈθɔːtfl/
                      </p>
                      <p className="text-sm text-zinc-700">
                        внимательный, заботливый
                      </p>
                      <p className="text-xs italic mt-1">
                        She's so <strong>thoughtful</strong> — she always
                        remembers birthdays.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она такая внимательная — всегда помнит дни рождения.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. Intelligence & Creativity (Ум и креативность)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">
                        intelligent /ɪnˈtelɪdʒənt/
                      </p>
                      <p className="text-sm text-zinc-700">умный</p>
                      <p className="text-xs italic mt-1">
                        She's highly <strong>intelligent</strong> and learns
                        quickly.
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">
                        creative /kriˈeɪtɪv/
                      </p>
                      <p className="text-sm text-zinc-700">креативный</p>
                      <p className="text-xs italic mt-1">
                        He's incredibly <strong>creative</strong> and full of
                        ideas.
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">wise /waɪz/</p>
                      <p className="text-sm text-zinc-700">мудрый</p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>wise</strong> and gives great advice.
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">
                        open-minded /ˌəʊpən ˈmaɪndɪd/
                      </p>
                      <p className="text-sm text-zinc-700">
                        открытый (к новому)
                      </p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>open-minded</strong> and accepts
                        different views.
                      </p>
                    </div>
                  </div>
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
        <Section title="❤️ Negative Personality Adjectives">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Негативные черты характера
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти прилагательные описывают **плохие качества** человека. Важно
              знать их для полноценного описания!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Selfishness & Pride (Эгоизм и гордыня)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        selfish /ˈselfɪʃ/
                      </p>
                      <p className="text-sm text-zinc-700">эгоистичный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>selfish</strong> and only thinks about
                        himself.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он очень эгоистичный и думает только о себе.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        arrogant /ˈærəɡənt/
                      </p>
                      <p className="text-sm text-zinc-700">
                        высокомерный, надменный
                      </p>
                      <p className="text-xs italic mt-1">
                        She's quite <strong>arrogant</strong> and looks down on
                        others.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она довольно высокомерная и смотрит на других свысока.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        conceited /kənˈsiːtɪd/
                      </p>
                      <p className="text-sm text-zinc-700">самовлюблённый</p>
                      <p className="text-xs italic mt-1">
                        He's so <strong>conceited</strong> — he thinks he's
                        perfect.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он такой самовлюблённый — думает, что он идеален.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">vain /veɪn/</p>
                      <p className="text-sm text-zinc-700">тщеславный</p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>vain</strong> and always checks her
                        appearance.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она очень тщеславная и постоянно проверяет свою
                        внешность.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">greedy /ˈɡriːdi/</p>
                      <p className="text-sm text-zinc-700">жадный</p>
                      <p className="text-xs italic mt-1">
                        He's extremely <strong>greedy</strong> and wants
                        everything for himself.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он крайне жадный и хочет всё для себя.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. Stubbornness & Inflexibility (Упрямство)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        stubborn /ˈstʌbən/
                      </p>
                      <p className="text-sm text-zinc-700">упрямый</p>
                      <p className="text-xs italic mt-1">
                        She's incredibly <strong>stubborn</strong> and never
                        changes her mind.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она невероятно упрямая и никогда не меняет своё мнение.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        narrow-minded /ˌnærəʊ ˈmaɪndɪd/
                      </p>
                      <p className="text-sm text-zinc-700">узколобый</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>narrow-minded</strong> and refuses to
                        listen to others.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он очень узколобый и отказывается слушать других.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        inflexible /ɪnˈfleksəbl/
                      </p>
                      <p className="text-sm text-zinc-700">негибкий</p>
                      <p className="text-xs italic mt-1">
                        She's too <strong>inflexible</strong> and can't
                        compromise.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она слишком негибкая и не умеет идти на компромисс.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Negativity & Pessimism (Негативность)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        pessimistic /ˌpesɪˈmɪstɪk/
                      </p>
                      <p className="text-sm text-zinc-700">пессимистичный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>pessimistic</strong> and always
                        expects the worst.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">moody /ˈmuːdi/</p>
                      <p className="text-sm text-zinc-700">
                        капризный, с перепадами настроения
                      </p>
                      <p className="text-xs italic mt-1">
                        She's quite <strong>moody</strong> — her mood changes
                        constantly.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        jealous /ˈdʒeləs/
                      </p>
                      <p className="text-sm text-zinc-700">
                        завистливый, ревнивый
                      </p>
                      <p className="text-xs italic mt-1">
                        He's so <strong>jealous</strong> of other people's
                        success.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        envious /ˈenviəs/
                      </p>
                      <p className="text-sm text-zinc-700">завистливый</p>
                      <p className="text-xs italic mt-1">
                        She's <strong>envious</strong> of her friend's
                        achievements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. Laziness & Unreliability (Лень и ненадёжность)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">lazy /ˈleɪzi/</p>
                      <p className="text-sm text-zinc-700">ленивый</p>
                      <p className="text-xs italic mt-1">
                        He's too <strong>lazy</strong> and never does his work.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        unreliable /ˌʌnrɪˈlaɪəbl/
                      </p>
                      <p className="text-sm text-zinc-700">ненадёжный</p>
                      <p className="text-xs italic mt-1">
                        She's completely <strong>unreliable</strong> — you can't
                        count on her.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        irresponsible /ˌɪrɪˈspɒnsəbl/
                      </p>
                      <p className="text-sm text-zinc-700">безответственный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>irresponsible</strong> and never takes
                        things seriously.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        careless /ˈkeələs/
                      </p>
                      <p className="text-sm text-zinc-700">
                        небрежный, невнимательный
                      </p>
                      <p className="text-xs italic mt-1">
                        She's quite <strong>careless</strong> and makes many
                        mistakes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-100 rounded-lg p-5 border-2 border-pink-400">
                <h4 className="text-xl font-bold text-pink-900 mb-3">
                  5. Rudeness & Aggressiveness (Грубость и агрессия)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">rude /ruːd/</p>
                      <p className="text-sm text-zinc-700">грубый</p>
                      <p className="text-xs italic mt-1">
                        He was so <strong>rude</strong> to the waiter!
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">
                        aggressive /əˈɡresɪv/
                      </p>
                      <p className="text-sm text-zinc-700">агрессивный</p>
                      <p className="text-xs italic mt-1">
                        She becomes <strong>aggressive</strong> when she's
                        angry.
                      </p>
                    </div>

                    <div className="bg-red-50 rounded p-3">
                      <p className="font-bold text-red-900">mean /miːn/</p>
                      <p className="text-sm text-zinc-700">злой, подлый</p>
                      <p className="text-xs italic mt-1">
                        Don't be so <strong>mean</strong> to your little sister!
                      </p>
                    </div>
                  </div>
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
        <Section title="🔵 Neutral & Complex Traits">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Нейтральные и сложные черты характера
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти прилагательные **не являются однозначно позитивными или
              негативными** — всё зависит от контекста!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. Social behavior (Социальное поведение)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">quiet /ˈkwaɪət/</p>
                      <p className="text-sm text-zinc-700">тихий, спокойный</p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>quiet</strong> and prefers listening.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (может быть + или -)
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        talkative /ˈtɔːkətɪv/
                      </p>
                      <p className="text-sm text-zinc-700">разговорчивый</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>talkative</strong> and loves chatting.
                      </p>
                      <p className="text-xs text-zinc-600">
                        (может быть + или -)
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">shy /ʃaɪ/</p>
                      <p className="text-sm text-zinc-700">застенчивый</p>
                      <p className="text-xs italic mt-1">
                        She's quite <strong>shy</strong> with strangers.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        reserved /rɪˈzɜːvd/
                      </p>
                      <p className="text-sm text-zinc-700">
                        сдержанный, замкнутый
                      </p>
                      <p className="text-xs italic mt-1">
                        He's quite <strong>reserved</strong> and doesn't share
                        much.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        introverted /ˌɪntrəˈvɜːtɪd/
                      </p>
                      <p className="text-sm text-zinc-700">интровертный</p>
                      <p className="text-xs italic mt-1">
                        She's <strong>introverted</strong> and prefers small
                        groups.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-blue-900">
                        extroverted /ˈekstrəvɜːtɪd/
                      </p>
                      <p className="text-sm text-zinc-700">экстравертный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>extroverted</strong> and loves big
                        parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  2. Attitude & Approach (Отношение и подход)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        serious /ˈsɪəriəs/
                      </p>
                      <p className="text-sm text-zinc-700">серьёзный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>serious</strong> and rarely jokes.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        sensitive /ˈsensətɪv/
                      </p>
                      <p className="text-sm text-zinc-700">чувствительный</p>
                      <p className="text-xs italic mt-1">
                        She's quite <strong>sensitive</strong> and takes things
                        to heart.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        competitive /kəmˈpetətɪv/
                      </p>
                      <p className="text-sm text-zinc-700">соревновательный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>competitive</strong> and always wants
                        to win.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        independent /ˌɪndɪˈpendənt/
                      </p>
                      <p className="text-sm text-zinc-700">независимый</p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>independent</strong> and doesn't need
                        help.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        cautious /ˈkɔːʃəs/
                      </p>
                      <p className="text-sm text-zinc-700">осторожный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>cautious</strong> and thinks before
                        acting.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded p-3">
                      <p className="font-bold text-purple-900">
                        impulsive /ɪmˈpʌlsɪv/
                      </p>
                      <p className="text-sm text-zinc-700">импульсивный</p>
                      <p className="text-xs italic mt-1">
                        She's quite <strong>impulsive</strong> and acts without
                        thinking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  3. Complex traits (Сложные черты)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-3">
                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">
                        down-to-earth /ˌdaʊn tʊ ˈɜːθ/
                      </p>
                      <p className="text-sm text-zinc-700">
                        приземлённый, простой
                      </p>
                      <p className="text-xs italic mt-1">
                        She's very <strong>down-to-earth</strong> despite being
                        famous.
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">
                        laid-back /ˌleɪd ˈbæk/
                      </p>
                      <p className="text-sm text-zinc-700">
                        расслабленный, спокойный
                      </p>
                      <p className="text-xs italic mt-1">
                        He's really <strong>laid-back</strong> and never
                        stresses.
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">witty /ˈwɪti/</p>
                      <p className="text-sm text-zinc-700">остроумный</p>
                      <p className="text-xs italic mt-1">
                        She's so <strong>witty</strong> — her jokes are always
                        funny!
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded p-3">
                      <p className="font-bold text-orange-900">
                        modest /ˈmɒdɪst/
                      </p>
                      <p className="text-sm text-zinc-700">скромный</p>
                      <p className="text-xs italic mt-1">
                        He's very <strong>modest</strong> and never brags.
                      </p>
                    </div>
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
        <Section title="🔗 Collocations & Intensifiers">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Коллокации и усилители с personality adjectives
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Collocations** — устойчивые словосочетания. **Intensifiers** —
              усилители для прилагательных!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. Strong intensifiers (Сильные усилители)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-sm font-bold">extremely +</p>
                      <p className="text-xs italic">
                        <strong>extremely</strong> reliable
                      </p>
                      <p className="text-xs italic">
                        <strong>extremely</strong> stubborn
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-sm font-bold">highly +</p>
                      <p className="text-xs italic">
                        <strong>highly</strong> intelligent
                      </p>
                      <p className="text-xs italic">
                        <strong>highly</strong> motivated
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-sm font-bold">incredibly +</p>
                      <p className="text-xs italic">
                        <strong>incredibly</strong> creative
                      </p>
                      <p className="text-xs italic">
                        <strong>incredibly</strong> generous
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-sm font-bold">remarkably +</p>
                      <p className="text-xs italic">
                        <strong>remarkably</strong> patient
                      </p>
                      <p className="text-xs italic">
                        <strong>remarkably</strong> calm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. Moderate intensifiers (Умеренные усилители)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded p-2">
                      <p className="text-sm font-bold">very +</p>
                      <p className="text-xs italic">
                        <strong>very</strong> kind
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="text-sm font-bold">quite +</p>
                      <p className="text-xs italic">
                        <strong>quite</strong> shy
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="text-sm font-bold">rather +</p>
                      <p className="text-xs italic">
                        <strong>rather</strong> serious
                      </p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="text-sm font-bold">fairly +</p>
                      <p className="text-xs italic">
                        <strong>fairly</strong> confident
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Common collocations (Устойчивые сочетания)
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      • <strong>painfully shy</strong> (мучительно застенчивый)
                    </p>
                    <p className="italic">
                      • <strong>fiercely independent</strong> (яростно
                      независимый)
                    </p>
                    <p className="italic">
                      • <strong>deeply compassionate</strong> (глубоко
                      сострадательный)
                    </p>
                    <p className="italic">
                      • <strong>genuinely kind</strong> (искренне добрый)
                    </p>
                    <p className="italic">
                      • <strong>brutally honest</strong> (жестоко честный)
                    </p>
                    <p className="italic">
                      • <strong>fiercely loyal</strong> (яростно преданный)
                    </p>
                    <p className="italic">
                      • <strong>naturally gifted</strong> (от природы одарённый)
                    </p>
                    <p className="italic">
                      • <strong>inherently good</strong> (по своей сути хороший)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. Expressions with personality adjectives
                </h4>
                <div className="bg-white rounded p-4">
                  <div className="space-y-2 text-sm">
                    <p className="italic">
                      • She's <strong>the life and soul of the party</strong>{" "}
                      (душа компании)
                    </p>
                    <p className="italic">
                      • He's <strong>as stubborn as a mule</strong> (упрямый как
                      осёл)
                    </p>
                    <p className="italic">
                      • She has <strong>a heart of gold</strong> (золотое
                      сердце)
                    </p>
                    <p className="italic">
                      • He's <strong>as cool as a cucumber</strong> (спокоен как
                      удав)
                    </p>
                    <p className="italic">
                      • She's <strong>a people person</strong> (общительный
                      человек)
                    </p>
                    <p className="italic">
                      • He's <strong>set in his ways</strong> (устоявшийся в
                      привычках)
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
        <Section title="📖 Reading: Character Descriptions">
          <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-lg p-6 border-2 border-blue-400 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Тексты для чтения — Описание характеров
            </h3>
            <p className="text-sm text-zinc-700 mb-4 text-center">
              Прочитайте тексты и обратите внимание на использование personality
              adjectives!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Text 1: My Best Friend Sarah
                </h4>
                <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                  <p>
                    I've known Sarah for over ten years, and she's honestly one
                    of the most{" "}
                    <strong className="text-green-700">amazing</strong> people
                    I've ever met. She's incredibly{" "}
                    <strong className="text-green-700">outgoing</strong> and has
                    this natural ability to make everyone feel comfortable. At
                    parties, she's always the{" "}
                    <strong className="text-green-700">life and soul</strong> —
                    people are drawn to her positive energy.
                  </p>
                  <p>
                    What I admire most about Sarah is how genuinely{" "}
                    <strong className="text-green-700">kind</strong> and{" "}
                    <strong className="text-green-700">caring</strong> she is.
                    She's the type of person who will drop everything to help a
                    friend in need. Last month, when I was going through a tough
                    time, she was incredibly{" "}
                    <strong className="text-green-700">supportive</strong> and
                    never once complained about my constant phone calls.
                  </p>
                  <p>
                    She's also remarkably{" "}
                    <strong className="text-green-700">hard-working</strong> and{" "}
                    <strong className="text-green-700">ambitious</strong>. She
                    recently got promoted at work because she's so{" "}
                    <strong className="text-green-700">reliable</strong> and{" "}
                    <strong className="text-green-700">dedicated</strong>.
                    Despite her success, she remains very{" "}
                    <strong className="text-green-700">down-to-earth</strong>{" "}
                    and <strong className="text-green-700">modest</strong> — she
                    never brags about her achievements.
                  </p>
                  <p>
                    If I had to describe Sarah in three words, I'd say she's{" "}
                    <strong className="text-green-700">warm-hearted</strong>,{" "}
                    <strong className="text-green-700">easy-going</strong>, and{" "}
                    <strong className="text-green-700">loyal</strong>. She's the
                    kind of friend everyone wishes they had.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-red-400">
                <h4 className="text-xl font-bold text-red-900 mb-3">
                  Text 2: Dealing with a Difficult Colleague
                </h4>
                <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                  <p>
                    Working with Mark has been one of the biggest challenges of
                    my career. He's extremely{" "}
                    <strong className="text-red-700">stubborn</strong> and
                    refuses to listen to anyone else's ideas. During team
                    meetings, he's often quite{" "}
                    <strong className="text-red-700">rude</strong> and
                    dismissive of other people's suggestions.
                  </p>
                  <p>
                    What makes it worse is that he's incredibly{" "}
                    <strong className="text-red-700">arrogant</strong> — he
                    genuinely believes he's the smartest person in the room.
                    He's also very{" "}
                    <strong className="text-red-700">selfish</strong> and only
                    cares about his own projects and career advancement. When
                    someone asks for help, he's too{" "}
                    <strong className="text-red-700">lazy</strong> to assist and
                    always has an excuse.
                  </p>
                  <p>
                    Mark is also remarkably{" "}
                    <strong className="text-red-700">unreliable</strong>. He
                    constantly misses deadlines and is completely{" "}
                    <strong className="text-red-700">irresponsible</strong>{" "}
                    about his commitments. Last week, he forgot about an
                    important client meeting because he's so{" "}
                    <strong className="text-red-700">careless</strong> with his
                    calendar.
                  </p>
                  <p>
                    Despite all this, I try to remain professional. However, his{" "}
                    <strong className="text-red-700">narrow-minded</strong>{" "}
                    attitude makes collaboration nearly impossible.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  Text 3: My Brother's Unique Personality
                </h4>
                <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                  <p>
                    My younger brother Tom is quite an interesting character.
                    He's very{" "}
                    <strong className="text-purple-700">introverted</strong> and{" "}
                    <strong className="text-purple-700">reserved</strong>, which
                    surprises people because I'm so{" "}
                    <strong className="text-purple-700">extroverted</strong>.
                    While I love big parties, he's perfectly content spending
                    evenings at home with a good book.
                  </p>
                  <p>
                    Tom is remarkably{" "}
                    <strong className="text-purple-700">intelligent</strong> and
                    highly <strong className="text-purple-700">creative</strong>
                    . He's working on a novel and his writing is absolutely
                    brilliant. He's also very{" "}
                    <strong className="text-purple-700">ambitious</strong> — he
                    has clear goals and works hard to achieve them.
                  </p>
                  <p>
                    However, he can be quite{" "}
                    <strong className="text-purple-700">sensitive</strong> and
                    takes criticism personally. He's also rather{" "}
                    <strong className="text-purple-700">serious</strong> and
                    doesn't joke around much. Some people find him a bit{" "}
                    <strong className="text-purple-700">shy</strong> when they
                    first meet him, but once you get to know him, you discover
                    how <strong className="text-purple-700">thoughtful</strong>{" "}
                    and <strong className="text-purple-700">witty</strong> he
                    really is.
                  </p>
                  <p>
                    What I appreciate most about Tom is that he's fiercely{" "}
                    <strong className="text-purple-700">independent</strong> and{" "}
                    <strong className="text-purple-700">open-minded</strong>.
                    He's always willing to consider different perspectives and
                    never judges people. He's also incredibly{" "}
                    <strong className="text-purple-700">loyal</strong> — once
                    you're his friend, he'll stand by you no matter what.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CheckableExercise
            title="Comprehension Exercise"
            instruction="Вставь правильное прилагательное из текстов."
            items={[
              {
                left: "Sarah is the",
                answers: ["life and soul"],
                right: "of the party.",
                explanation: "Из Text 1: Sarah — душа компании",
                wide: true,
              },
              {
                left: "Mark is extremely",
                answers: ["stubborn"],
                right: "and never listens.",
                explanation: "Из Text 2: Mark упрямый",
              },
              {
                left: "Tom is very",
                answers: ["introverted", "reserved"],
                right: "and prefers staying home.",
                explanation: "Из Text 3: Tom интроверт",
                wide: true,
              },
            ]}
          />
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="🎯 Vocabulary List + Final Test">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📚 Complete Vocabulary List — 50+ Words
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  ✅ Positive Traits (20)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <p>outgoing — общительный</p>
                  <p>friendly — дружелюбный</p>
                  <p>sociable — компанейский</p>
                  <p>easy-going — спокойный</p>
                  <p>warm-hearted — сердечный</p>
                  <p>reliable — надёжный</p>
                  <p>responsible — ответственный</p>
                  <p>hard-working — трудолюбивый</p>
                  <p>punctual — пунктуальный</p>
                  <p>ambitious — амбициозный</p>
                  <p>generous — щедрый</p>
                  <p>kind — добрый</p>
                  <p>caring — заботливый</p>
                  <p>compassionate — сострадательный</p>
                  <p>thoughtful — внимательный</p>
                  <p>intelligent — умный</p>
                  <p>creative — креативный</p>
                  <p>wise — мудрый</p>
                  <p>open-minded — открытый</p>
                  <p>loyal — преданный</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Negative Traits (18)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <p>selfish — эгоистичный</p>
                  <p>arrogant — высокомерный</p>
                  <p>conceited — самовлюблённый</p>
                  <p>vain — тщеславный</p>
                  <p>greedy — жадный</p>
                  <p>stubborn — упрямый</p>
                  <p>narrow-minded — узколобый</p>
                  <p>inflexible — негибкий</p>
                  <p>pessimistic — пессимистичный</p>
                  <p>moody — капризный</p>
                  <p>jealous — завистливый</p>
                  <p>envious — завидующий</p>
                  <p>lazy — ленивый</p>
                  <p>unreliable — ненадёжный</p>
                  <p>irresponsible — безответственный</p>
                  <p>careless — небрежный</p>
                  <p>rude — грубый</p>
                  <p>aggressive — агрессивный</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  🔵 Neutral Traits (15)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <p>quiet — тихий</p>
                  <p>talkative — разговорчивый</p>
                  <p>shy — застенчивый</p>
                  <p>reserved — сдержанный</p>
                  <p>introverted — интроверт</p>
                  <p>extroverted — экстраверт</p>
                  <p>serious — серьёзный</p>
                  <p>sensitive — чувствительный</p>
                  <p>competitive — соревновательный</p>
                  <p>independent — независимый</p>
                  <p>cautious — осторожный</p>
                  <p>impulsive — импульсивный</p>
                  <p>down-to-earth — приземлённый</p>
                  <p>laid-back — расслабленный</p>
                  <p>witty — остроумный</p>
                </div>
              </div>
            </div>
          </div>

          <CheckableExercise
            title="Final Test — 6 Questions"
            instruction="Вставь правильное прилагательное."
            items={[
              {
                left: "She's very",
                answers: ["outgoing", "sociable", "friendly"],
                right: "and makes friends easily.",
                explanation: "Положительное социальное качество",
                wide: true,
              },
              {
                left: "He's extremely",
                answers: ["reliable"],
                right: "— you can always count on him.",
                explanation: "Надёжный",
              },
              {
                left: "She's so",
                answers: ["stubborn"],
                right: "— she never changes her mind.",
                explanation: "Упрямая (негативное)",
              },
              {
                left: "He's quite",
                answers: ["shy", "reserved", "introverted"],
                right: "and doesn't talk much.",
                explanation: "Нейтральное — тихий/застенчивый",
                wide: true,
              },
              {
                left: "She's incredibly",
                answers: ["generous", "kind", "caring"],
                right: "and always helps others.",
                explanation: "Щедрая/добрая",
                wide: true,
              },
              {
                left: "He's very",
                answers: ["down-to-earth", "modest"],
                right: "despite being famous.",
                explanation: "Приземлённый/скромный",
                wide: true,
              },
            ]}
          />

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mt-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              🎯 Key Expressions & Idioms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-bold">• the life and soul of the party</p>
                <p className="text-xs text-zinc-600">душа компании</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold">• as stubborn as a mule</p>
                <p className="text-xs text-zinc-600">упрямый как осёл</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold">• a heart of gold</p>
                <p className="text-xs text-zinc-600">золотое сердце</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold">• as cool as a cucumber</p>
                <p className="text-xs text-zinc-600">спокоен как удав</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold">• set in his/her ways</p>
                <p className="text-xs text-zinc-600">устоявшийся в привычках</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold">• a people person</p>
                <p className="text-xs text-zinc-600">общительный человек</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}
