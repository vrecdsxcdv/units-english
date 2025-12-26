"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function QuestionTags({ step }: Props) {
  if (step === 1) {
  return (
    <>
        <Section title="❓ Question Tags: Advanced">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Question Tags — Разделительные вопросы (продвинутый уровень)
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Question Tags** = короткие вопросы в конце предложения для
              **подтверждения** информации! В этой теме мы изучим **продвинутые
              случаи**: повелительное наклонение, Let's, отрицательные глаголы,
              модальные глаголы и сложные конструкции!
            </p>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔑 Золотое правило
              </h3>
              <p className="text-center text-lg font-semibold text-red-900 mb-2">
                Утвердительное → отрицательный tag
              </p>
              <p className="text-center text-lg font-semibold text-red-900 mb-3">
                Отрицательное → утвердительный tag
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    You <strong className="text-blue-700">are</strong> a
                    teacher, <strong className="text-red-700">aren't</strong>{" "}
                    you?
                </p>
                <p className="text-xs text-zinc-600">
                    Утвердительное → отрицательный tag
                </p>
              </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    You <strong className="text-red-700">aren't</strong> a
                    teacher, <strong className="text-blue-700">are</strong> you?
                </p>
                <p className="text-xs text-zinc-600">
                    Отрицательное → утвердительный tag
                </p>
              </div>
            </div>
          </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🎯 Продвинутые случаи
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    Imperatives (приказы)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Close the door, <strong>will you?</strong>
                  </p>
                  <p className="text-xs text-zinc-600">
                    Используем <strong>will you?</strong>
                </p>
              </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    Let's (предложения)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Let's go, <strong>shall we?</strong>
                  </p>
                  <p className="text-xs text-zinc-600">
                    Используем <strong>shall we?</strong>
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900">
                    Negative verbs (hardly, never)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    She hardly ever calls, <strong>does she?</strong>
                  </p>
                  <p className="text-xs text-zinc-600">
                    Hardly = отрицание → утвердительный tag!
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
                  <p>✅ Imperatives: will you? / won't you? / can you?</p>
                  <p>✅ Let's: shall we?</p>
                  <p>✅ Negative verbs: hardly, never, rarely, seldom</p>
                </div>
                <div>
                  <p>✅ Modal verbs: can, could, should, must, might</p>
                  <p>✅ 100+ примеров</p>
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
        <Section title="👉 Imperatives — Повелительное наклонение">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Question Tags для приказов и просьб
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда основное предложение — **приказ или просьба** (императив),
              мы используем **will you?** или **won't you?** в зависимости от
              **вежливости**!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  1. WILL YOU? — нейтральная просьба
                </h4>
              <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      Основная формула
                    </p>
                    <p className="text-sm italic mb-2">
                      Close the door,{" "}
                      <strong className="text-blue-700">will you?</strong>
                  </p>
                  <p className="text-xs text-zinc-600">
                      Закрой дверь, ладно? (нейтральная просьба)
                  </p>
                </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">20 примеров</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        Open the window, will you?
                      </p>
                      <p className="text-sm italic">
                        Pass me the salt, will you?
                      </p>
                      <p className="text-sm italic">
                        Turn off the lights, will you?
                      </p>
                      <p className="text-sm italic">Wait here, will you?</p>
                      <p className="text-sm italic">Be quiet, will you?</p>
                      <p className="text-sm italic">Hurry up, will you?</p>
                      <p className="text-sm italic">Stop that, will you?</p>
                      <p className="text-sm italic">Listen to me, will you?</p>
                      <p className="text-sm italic">Call me later, will you?</p>
                      <p className="text-sm italic">
                        Help me with this, will you?
                      </p>
                      <p className="text-sm italic">Sit down, will you?</p>
                      <p className="text-sm italic">Come here, will you?</p>
                      <p className="text-sm italic">Move aside, will you?</p>
                      <p className="text-sm italic">Take this, will you?</p>
                      <p className="text-sm italic">Hold this, will you?</p>
                      <p className="text-sm italic">Read this, will you?</p>
                      <p className="text-sm italic">Sign here, will you?</p>
                      <p className="text-sm italic">Check this, will you?</p>
                      <p className="text-sm italic">Fix this, will you?</p>
                      <p className="text-sm italic">Lock the door, will you?</p>
                </div>
              </div>
            </div>
          </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  2. WON'T YOU? — более вежливая просьба
                </h4>
                <div className="space-y-3">
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      Вежливая формула
                    </p>
                    <p className="text-sm italic mb-2">
                      Sit down,{" "}
                      <strong className="text-green-700">won't you?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Садитесь, пожалуйста. (более вежливо!)
                    </p>
          </div>

              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">15 примеров</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">Have a seat, won't you?</p>
                      <p className="text-sm italic">Come in, won't you?</p>
                      <p className="text-sm italic">
                        Try this cake, won't you?
                      </p>
                      <p className="text-sm italic">Take a look, won't you?</p>
                      <p className="text-sm italic">Join us, won't you?</p>
                      <p className="text-sm italic">
                        Stay for dinner, won't you?
                      </p>
                      <p className="text-sm italic">
                        Make yourself comfortable, won't you?
                      </p>
                      <p className="text-sm italic">
                        Have some tea, won't you?
                      </p>
                      <p className="text-sm italic">Consider it, won't you?</p>
                      <p className="text-sm italic">
                        Think about it, won't you?
                      </p>
                      <p className="text-sm italic">
                        Give it a try, won't you?
                      </p>
                      <p className="text-sm italic">Be careful, won't you?</p>
                      <p className="text-sm italic">Take care, won't you?</p>
                      <p className="text-sm italic">Let me know, won't you?</p>
                      <p className="text-sm italic">
                        Keep in touch, won't you?
                      </p>
                    </div>
              </div>
            </div>
          </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. CAN YOU? / COULD YOU? — просьба о помощи
                </h4>
                <div className="space-y-3">
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      Просьба о помощи
                    </p>
                    <p className="text-sm italic mb-2">
                      Help me with this,{" "}
                      <strong className="text-purple-700">can you?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Помоги мне с этим, можешь? (просьба о помощи)
                    </p>
          </div>

              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">10 примеров</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        Lend me some money, can you?
                      </p>
                      <p className="text-sm italic">Give me a hand, can you?</p>
                      <p className="text-sm italic">
                        Answer the phone, can you?
                      </p>
                      <p className="text-sm italic">
                        Tell me the time, can you?
                      </p>
                      <p className="text-sm italic">Show me how, can you?</p>
                      <p className="text-sm italic">Explain this, could you?</p>
                      <p className="text-sm italic">Repeat that, could you?</p>
                      <p className="text-sm italic">Speak louder, could you?</p>
                      <p className="text-sm italic">
                        Write it down, could you?
                      </p>
                      <p className="text-sm italic">Spell that, could you?</p>
              </div>
            </div>
          </div>
        </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Ключевое различие
        </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>will you?</strong> = нейтральная просьба (обычная)
                  </p>
                  <p>
                    <strong>won't you?</strong> = вежливая просьба (приглашение)
                  </p>
                  <p>
                    <strong>can you? / could you?</strong> = просьба о помощи
                    (можешь?)
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    💡 <strong>Важно:</strong> для императивов (приказов) НЕ
                    используем обычные правила! Всегда will you / won't you /
                    can you!
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
        <Section title="💭 Let's — Предложения совместного действия">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Let's → SHALL WE?
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда предложение начинается с **Let's** (давайте...), мы
              **всегда** используем **shall we?** в конце! Это **единственный**
              вариант для Let's!
            </p>

        <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Основная формула
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-2xl font-bold text-green-900 mb-2">
                    Let's + V,{" "}
                    <strong className="text-blue-700">shall we?</strong>
                  </p>
                  <p className="text-center text-sm text-zinc-600">
                    Давайте..., хорошо?
                  </p>
          </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Let's go,{" "}
                      <strong className="text-blue-700">shall we?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Давайте пойдём, хорошо?
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Let's eat,{" "}
                      <strong className="text-blue-700">shall we?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Давайте поедим, хорошо?
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Let's dance,{" "}
                      <strong className="text-blue-700">shall we?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Давайте потанцуем, хорошо?
                    </p>
                </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      Let's start,{" "}
                      <strong className="text-blue-700">shall we?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Давайте начнём, хорошо?
                    </p>
              </div>
            </div>
          </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  30 примеров Let's + shall we?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-sm italic">Let's go home, shall we?</p>
                  <p className="text-sm italic">
                    Let's take a break, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's have a coffee, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's watch a movie, shall we?
                  </p>
                  <p className="text-sm italic">Let's play a game, shall we?</p>
                  <p className="text-sm italic">Let's order pizza, shall we?</p>
                  <p className="text-sm italic">
                    Let's call it a day, shall we?
                  </p>
                  <p className="text-sm italic">Let's get started, shall we?</p>
                  <p className="text-sm italic">Let's be honest, shall we?</p>
                  <p className="text-sm italic">Let's be serious, shall we?</p>
                  <p className="text-sm italic">Let's celebrate, shall we?</p>
                  <p className="text-sm italic">Let's go shopping, shall we?</p>
                  <p className="text-sm italic">
                    Let's meet tomorrow, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's discuss this, shall we?
                  </p>
                  <p className="text-sm italic">Let's move on, shall we?</p>
                  <p className="text-sm italic">Let's try again, shall we?</p>
                  <p className="text-sm italic">Let's forget it, shall we?</p>
                  <p className="text-sm italic">
                    Let's change the subject, shall we?
                  </p>
                  <p className="text-sm italic">Let's make a deal, shall we?</p>
                  <p className="text-sm italic">
                    Let's keep this simple, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's stay focused, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's be realistic, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's think about it, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's wait and see, shall we?
                  </p>
                  <p className="text-sm italic">
                    Let's agree to disagree, shall we?
                  </p>
                  <p className="text-sm italic">Let's leave now, shall we?</p>
                  <p className="text-sm italic">Let's hurry up, shall we?</p>
                  <p className="text-sm italic">Let's relax, shall we?</p>
                  <p className="text-sm italic">Let's sit down, shall we?</p>
                  <p className="text-sm italic">Let's begin, shall we?</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическая ошибка!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ Let's go,{" "}
                      <strong className="text-red-700">will we?</strong>
                </p>
                <p className="text-xs text-zinc-600">
                      Неправильно! Для Let's ТОЛЬКО shall we!
                </p>
              </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ Let's go,{" "}
                      <strong className="text-green-700">shall we?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Всегда shall we!
                    </p>
              </div>
            </div>
          </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Запомни навсегда!
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p className="text-center text-xl font-bold text-green-900">
                    Let's → <strong className="text-blue-700">SHALL WE?</strong>
                  </p>
                  <p className="text-center">
                    Это **единственный** правильный вариант!
                  </p>
                  <p className="text-center text-xs text-zinc-600 mt-2">
                    💡 Никогда не используй will we, can we, do we с Let's!
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
        <Section title="🚫 Negative Verbs — Отрицательные глаголы">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Hardly, Never, Rarely, Seldom — скрытое отрицание!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Слова **hardly, never, rarely, seldom, barely, scarcely** =
              **отрицание**! Поэтому после них используем **утвердительный**
              tag!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="text-xl font-bold text-red-900 mb-3">
                  🔑 Золотое правило
                </h4>
                <div className="bg-white rounded p-4">
                  <p className="text-center text-xl font-bold text-red-900 mb-2">
                    Hardly / Never / Rarely = ОТРИЦАНИЕ
                  </p>
                  <p className="text-center text-lg font-semibold text-blue-900">
                    → Утвердительный tag!
                  </p>
            </div>
          </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  1. HARDLY (EVER) — едва / почти никогда
                </h4>
            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She <strong className="text-red-700">hardly ever</strong>{" "}
                      calls,{" "}
                      <strong className="text-blue-700">does she?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она почти никогда не звонит, правда? (hardly = отрицание →
                      does she)
                </p>
              </div>
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      He can <strong className="text-red-700">hardly</strong>{" "}
                      walk, <strong className="text-blue-700">can he?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он едва может ходить, правда?
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      They <strong className="text-red-700">hardly</strong> know
                      each other,{" "}
                      <strong className="text-blue-700">do they?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Они едва знают друг друга, правда?
                </p>
              </div>
            </div>
          </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  2. NEVER — никогда
                </h4>
            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      You've <strong className="text-red-700">never</strong>{" "}
                      been there,{" "}
                      <strong className="text-blue-700">have you?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ты никогда там не был, правда? (never = отрицание → have
                      you)
                </p>
              </div>
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She <strong className="text-red-700">never</strong>{" "}
                      smiles,{" "}
                      <strong className="text-blue-700">does she?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она никогда не улыбается, правда?
                </p>
              </div>
              <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      They <strong className="text-red-700">never</strong>{" "}
                      listen,{" "}
                      <strong className="text-blue-700">do they?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Они никогда не слушают, правда?
                </p>
              </div>
            </div>
          </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. RARELY / SELDOM — редко
        </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      He <strong className="text-red-700">rarely</strong> comes
                      here, <strong className="text-blue-700">does he?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он редко приходит сюда, правда?
              </p>
            </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1">
                      She <strong className="text-red-700">seldom</strong>{" "}
                      cooks,{" "}
                      <strong className="text-blue-700">does she?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она редко готовит, правда?
                    </p>
            </div>
          </div>
        </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  4. BARELY / SCARCELY — едва
          </h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3">
              <p className="text-sm mb-1">
                      We <strong className="text-red-700">barely</strong> know
                      him, <strong className="text-blue-700">do we?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мы едва его знаем, правда?
                    </p>
            </div>
                  <div className="bg-white rounded p-3">
              <p className="text-sm mb-1">
                      She could{" "}
                      <strong className="text-red-700">scarcely</strong> believe
                      it, <strong className="text-blue-700">could she?</strong>
              </p>
              <p className="text-xs text-zinc-600">
                      Она едва могла в это поверить, правда?
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
                      ❌ She never calls,{" "}
                      <strong className="text-red-700">doesn't she?</strong>
              </p>
              <p className="text-xs text-zinc-600">
                      Неправильно! Never = отрицание!
              </p>
            </div>
                  <div className="bg-green-100 rounded p-3">
              <p className="text-sm mb-1">
                      ✅ She never calls,{" "}
                      <strong className="text-green-700">does she?</strong>
              </p>
              <p className="text-xs text-zinc-600">
                      Правильно! Never = отрицание → утвердительный tag!
              </p>
            </div>
          </div>
        </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Список отрицательных слов
          </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-zinc-700">
                  <p>
                    <strong>hardly</strong> (едва)
                  </p>
                  <p>
                    <strong>hardly ever</strong> (почти никогда)
                  </p>
                  <p>
                    <strong>never</strong> (никогда)
                  </p>
                  <p>
                    <strong>rarely</strong> (редко)
                  </p>
                  <p>
                    <strong>seldom</strong> (редко)
                  </p>
                  <p>
                    <strong>barely</strong> (едва)
                  </p>
                  <p>
                    <strong>scarcely</strong> (едва)
                  </p>
                  <p>
                    <strong>no one</strong> (никто)
                  </p>
                  <p>
                    <strong>nobody</strong> (никто)
                  </p>
                  <p>
                    <strong>nothing</strong> (ничто)
                  </p>
                  <p>
                    <strong>nowhere</strong> (нигде)
                  </p>
                  <p>
                    <strong>neither</strong> (ни один)
                  </p>
            </div>
                <p className="text-xs text-zinc-600 mt-3 text-center">
                  💡 Все эти слова = **отрицание** → используй утвердительный
                  tag!
                </p>
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
        left: "Close the door,",
        answers: ["will you", "will you?"],
        right: "?",
        explanation: "Императив → will you? (нейтральная просьба)",
      },
      {
        left: "Let's go,",
        answers: ["shall we", "shall we?"],
        right: "?",
        explanation: "Let's → shall we? (ТОЛЬКО этот вариант!)",
      },
      {
        left: "She never calls,",
        answers: ["does she", "does she?"],
        right: "?",
        explanation: "Never = отрицание → does she? (утвердительный tag!)",
      },
      {
        left: "Sit down,",
        answers: ["won't you", "won't you?"],
        right: "?",
        explanation: "Императив → won't you? (вежливая просьба)",
      },
      {
        left: "He hardly ever works,",
        answers: ["does he", "does he?"],
        right: "?",
        explanation: "Hardly ever = отрицание → does he? (утвердительный!)",
      },
      {
        left: "Let's start,",
        answers: ["shall we", "shall we?"],
        right: "?",
        explanation: "Let's → shall we? (всегда!)",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Продвинутые случаи">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              🎯 Добавь правильный question tag!
            </p>
            <p className="text-sm text-zinc-700">
              Imperatives, Let's, Negative verbs — используй правильные правила!
            </p>
            </div>

          <CheckableExercise
            title="Question Tags Advanced — 6 вопросов"
            instruction="Напиши правильный question tag."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="🎭 Modal Verbs — Модальные глаголы">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              Question Tags с модальными глаголами
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              С **модальными глаголами** (can, could, should, must, might, may,
              would) мы **повторяем** модальный глагол в tag!
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Основная формула
                </h4>
                <div className="bg-white rounded p-4 mb-3">
                  <p className="text-center text-xl font-bold text-blue-900 mb-2">
                    Утверждение + modal → Отрицание + same modal
                  </p>
                  <p className="text-center text-sm italic">
                    You <strong>can</strong> swim, <strong>can't</strong> you?
                  </p>
          </div>
        </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  CAN / COULD
          </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      You can swim, <strong>can't you?</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      You can't drive, <strong>can you?</strong>
                    </p>
            </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      He could help, <strong>couldn't he?</strong>
                    </p>
            </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      She couldn't come, <strong>could she?</strong>
                    </p>
            </div>
          </div>
        </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  SHOULD / WOULD
          </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      We should go, <strong>shouldn't we?</strong>
                    </p>
              </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      It shouldn't take long, <strong>should it?</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      You would help, <strong>wouldn't you?</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      He wouldn't lie, <strong>would he?</strong>
                    </p>
                  </div>
              </div>
            </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  MUST / MIGHT / MAY
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      We must hurry, <strong>mustn't we?</strong>
                    </p>
              </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      You mustn't tell, <strong>must you?</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      She might know, <strong>mightn't she?</strong>
                </p>
              </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      It may rain, <strong>mayn't it?</strong>
                    </p>
          </div>
        </div>
      </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Правило для модальных глаголов
        </h4>
                <p className="text-sm text-zinc-700 text-center">
                  **Повторяем модальный глагол** в tag + меняем на
                  утверждение/отрицание!
                </p>
                <p className="text-sm text-zinc-700 text-center mt-2">
                  You <strong>can</strong> swim → <strong>can't</strong> you?
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  You <strong>can't</strong> swim → <strong>can</strong> you?
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
        left: "You can swim,",
        answers: ["can't you", "can't you?"],
        right: "?",
        explanation: "Modal verb can → can't you? (повторяем модальный!)",
      },
      {
        left: "He rarely comes here,",
        answers: ["does he", "does he?"],
        right: "?",
        explanation: "Rarely = отрицание → does he? (утвердительный tag!)",
      },
      {
        left: "We should go,",
        answers: ["shouldn't we", "shouldn't we?"],
        right: "?",
        explanation: "Modal verb should → shouldn't we?",
      },
      {
        left: "She would help,",
        answers: ["wouldn't she", "wouldn't she?"],
        right: "?",
        explanation: "Modal verb would → wouldn't she?",
      },
      {
        left: "They've never been there,",
        answers: ["have they", "have they?"],
        right: "?",
        explanation: "Never = отрицание → have they? (утвердительный!)",
      },
      {
        left: "You mustn't tell,",
        answers: ["must you", "must you?"],
        right: "?",
        explanation: "Mustn't (отрицание) → must you? (утвердительный!)",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Modal + Negative verbs">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🎯 Добавь правильный question tag!
            </p>
            <p className="text-sm text-zinc-700">
              Модальные глаголы + отрицательные слова — используй правильные
              правила!
            </p>
          </div>

          <CheckableExercise
            title="Modals + Negative verbs — 6 вопросов"
            instruction="Напиши правильный question tag."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["Close the door, will you?", "Close the door, will you"],
        right: "",
        explanation:
          "Правильно: Close the door, will you? (императив → will you)",
        wide: true,
      },
      {
        left: "",
        answers: ["Let's go, shall we?", "Let's go, shall we"],
        right: "",
        explanation: "Правильно: Let's go, shall we? (Let's → shall we)",
        wide: true,
      },
      {
        left: "",
        answers: ["She never calls, does she?", "She never calls, does she"],
        right: "",
        explanation:
          "Правильно: She never calls, does she? (never = отрицание)",
        wide: true,
      },
      {
        left: "",
        answers: ["You can swim, can't you?", "You can swim, can't you"],
        right: "",
        explanation: "Правильно: You can swim, can't you? (modal verb can)",
        wide: true,
      },
      {
        left: "",
        answers: [
          "He hardly ever works, does he?",
          "He hardly ever works, does he",
        ],
        right: "",
        explanation:
          "Правильно: He hardly ever works, does he? (hardly = отрицание)",
        wide: true,
      },
      {
        left: "",
        answers: [
          "Let's have dinner, shall we?",
          "Let's have dinner, shall we",
        ],
        right: "",
        explanation:
          "Правильно: Let's have dinner, shall we? (Let's → shall we)",
        wide: true,
    },
  ];

  return (
    <>
        <Section title="🔧 Упражнение 3: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-5 border-2 border-red-400 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ Исправь неправильные предложения!
            </p>
            <p className="text-sm text-zinc-700 mb-3">
              В каждом предложении есть **ошибка** в question tag. Напиши
              **правильный вариант** целиком!
            </p>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2 font-semibold">
                Неправильные предложения:
              </p>
              <div className="space-y-1 text-sm text-zinc-700">
                <p>
                  1. Close the door,{" "}
                  <span className="text-red-700">don't you?</span>
                </p>
                <p>
                  2. Let's go, <span className="text-red-700">will we?</span>
                </p>
                <p>
                  3. She never calls,{" "}
                  <span className="text-red-700">doesn't she?</span>
                </p>
                <p>
                  4. You can swim, <span className="text-red-700">do you?</span>
                </p>
                <p>
                  5. He hardly ever works,{" "}
                  <span className="text-red-700">doesn't he?</span>
                </p>
                <p>
                  6. Let's have dinner,{" "}
                  <span className="text-red-700">won't we?</span>
          </p>
        </div>
            </div>
          </div>

      <CheckableExercise
            title="Исправь ошибки — 6 предложений"
            instruction="Напиши правильное предложение целиком."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 9) {
    return (
      <>
        <Section title="⚠️ 10 критических ошибок">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Типичные ошибки русскоговорящих
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Русские студенты часто делают **эти 10 ошибок** с question tags!
              Изучи их внимательно!
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 1: Let's + will we?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ Let's go,{" "}
                      <strong className="text-red-700">will we?</strong>
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ Let's go,{" "}
                      <strong className="text-green-700">shall we?</strong>
              </p>
            </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 С Let's **всегда** используй shall we! Никаких других
                  вариантов!
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 2: Never + doesn't/didn't
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ She never calls,{" "}
                      <strong className="text-red-700">doesn't she?</strong>
              </p>
            </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ She never calls,{" "}
                      <strong className="text-green-700">does she?</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Never = отрицание → утвердительный tag!
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 3: Императив + don't you?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ Close the door,{" "}
                      <strong className="text-red-700">don't you?</strong>
              </p>
            </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ Close the door,{" "}
                      <strong className="text-green-700">will you?</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Императив → will you / won't you / can you!
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 4: Hardly + doesn't
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ He hardly works,{" "}
                      <strong className="text-red-700">doesn't he?</strong>
              </p>
            </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ He hardly works,{" "}
                      <strong className="text-green-700">does he?</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Hardly = отрицание → утвердительный tag!
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 5: Modal verb + do/does/did
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ You can swim,{" "}
                      <strong className="text-red-700">do you?</strong>
              </p>
            </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ You can swim,{" "}
                      <strong className="text-green-700">can't you?</strong>
                    </p>
          </div>
        </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 С модальными глаголами повторяем модальный!
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 6: Rarely + doesn't
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ He rarely calls,{" "}
                      <strong className="text-red-700">doesn't he?</strong>
              </p>
            </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ He rarely calls,{" "}
                      <strong className="text-green-700">does he?</strong>
              </p>
            </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Rarely = отрицание → утвердительный tag!
              </p>
            </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 7: Seldom + doesn't
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ She seldom cooks,{" "}
                      <strong className="text-red-700">doesn't she?</strong>
              </p>
            </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ She seldom cooks,{" "}
                      <strong className="text-green-700">does she?</strong>
              </p>
            </div>
          </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Seldom = отрицание → утвердительный tag!
                </p>
        </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 8: Barely + doesn't
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ We barely know him,{" "}
                      <strong className="text-red-700">don't we?</strong>
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ We barely know him,{" "}
                      <strong className="text-green-700">do we?</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Barely = отрицание → утвердительный tag!
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 9: Should + do you?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ We should go,{" "}
                      <strong className="text-red-700">do we?</strong>
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ We should go,{" "}
                      <strong className="text-green-700">shouldn't we?</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Should → shouldn't (повторяем модальный!)
                </p>
              </div>

              <div className="bg-white rounded p-4 border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">
                  ❌ Ошибка 10: Mustn't + do you?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-red-100 rounded p-2">
                    <p className="text-sm">
                      ❌ You mustn't tell,{" "}
                      <strong className="text-red-700">do you?</strong>
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-2">
                    <p className="text-sm">
                      ✅ You mustn't tell,{" "}
                      <strong className="text-green-700">must you?</strong>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 mt-2">
                  💡 Mustn't (отрицание) → must you (утвердительный!)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-5 border-2 border-yellow-400 mt-4">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                🔑 Главное правило
        </h4>
              <p className="text-sm text-zinc-700 text-center">
                Если в основном предложении есть **отрицательное слово** (never,
                hardly, rarely, seldom, barely, scarcely, no one, nobody,
                nothing) → используй **утвердительный** tag!
              </p>
      </div>
          </div>
        </Section>
    </>
  );
}

  if (step === 10) {
    const items: FillItem[] = [
      {
        left: "Open the window,",
        answers: ["will you", "will you?"],
        right: "?",
        explanation: "Императив → will you?",
      },
      {
        left: "Let's have a break,",
        answers: ["shall we", "shall we?"],
        right: "?",
        explanation: "Let's → shall we?",
      },
      {
        left: "She's never been there,",
        answers: ["has she", "has she?"],
        right: "?",
        explanation: "Never = отрицание → has she?",
      },
      {
        left: "You could help,",
        answers: ["couldn't you", "couldn't you?"],
        right: "?",
        explanation: "Could → couldn't you?",
      },
      {
        left: "He hardly ever eats,",
        answers: ["does he", "does he?"],
        right: "?",
        explanation: "Hardly ever = отрицание → does he?",
      },
      {
        left: "Let's start now,",
        answers: ["shall we", "shall we?"],
        right: "?",
      explanation: "Let's → shall we?",
    },
    {
        left: "They rarely visit,",
        answers: ["do they", "do they?"],
        right: "?",
        explanation: "Rarely = отрицание → do they?",
      },
      {
        left: "We should hurry,",
        answers: ["shouldn't we", "shouldn't we?"],
        right: "?",
        explanation: "Should → shouldn't we?",
    },
  ];

  return (
    <>
        <Section title="🎯 Финальный тест">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Мега-тест: Question Tags Advanced
              </h3>
            <p className="text-sm text-zinc-700 mb-3 text-center">
              Проверь, насколько хорошо ты усвоил **продвинутые** правила
              question tags! 8 вопросов на все темы!
              </p>
            </div>

      <CheckableExercise
            title="Финальный тест — 8 вопросов"
            instruction="Добавь правильный question tag."
            items={items}
          />

          <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400 mt-6">
            <h4 className="font-bold text-green-900 mb-3 text-center text-lg">
              🎉 Поздравляю!
            </h4>
            <p className="text-sm text-zinc-700 text-center">
              Если ты прошёл тест без ошибок — ты **освоил** продвинутые правила
              question tags! Ты теперь знаешь, как работать с императивами,
              Let's, отрицательными словами и модальными глаголами!
            </p>
        </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    return (
      <>
        <Section title="📚 Словарь + Шпаргалка">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-blue-400 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Новый словарь — 15 выражений
            </h3>
            <p className="text-sm text-zinc-700 mb-4 text-center">
              Полезные выражения с question tags для продвинутого уровня!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  1. will you? / won't you?
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  Question tag для императивов
                </p>
                <p className="text-xs text-zinc-700">
                  Close the door, will you?
                </p>
        </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">2. shall we?</p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  Question tag для Let's
                </p>
                <p className="text-xs text-zinc-700">Let's go, shall we?</p>
        </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">3. hardly</p>
                <p className="text-xs text-zinc-600 italic mb-1">едва</p>
                <p className="text-xs text-zinc-700">He can hardly walk.</p>
      </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  4. hardly ever
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  почти никогда
                </p>
                <p className="text-xs text-zinc-700">She hardly ever calls.</p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">5. never</p>
                <p className="text-xs text-zinc-600 italic mb-1">никогда</p>
                <p className="text-xs text-zinc-700">
                  You've never been there.
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">6. rarely</p>
                <p className="text-xs text-zinc-600 italic mb-1">редко</p>
                <p className="text-xs text-zinc-700">He rarely comes here.</p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">7. seldom</p>
                <p className="text-xs text-zinc-600 italic mb-1">редко</p>
                <p className="text-xs text-zinc-700">She seldom cooks.</p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">8. barely</p>
                <p className="text-xs text-zinc-600 italic mb-1">едва</p>
                <p className="text-xs text-zinc-700">We barely know him.</p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">9. scarcely</p>
                <p className="text-xs text-zinc-600 italic mb-1">едва</p>
                <p className="text-xs text-zinc-700">
                  She could scarcely believe it.
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  10. imperative
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  повелительное наклонение
                </p>
                <p className="text-xs text-zinc-700">Close the door!</p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  11. modal verb
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  модальный глагол
                </p>
                <p className="text-xs text-zinc-700">
                  You can swim, can't you?
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  12. negative word
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  отрицательное слово
                </p>
                <p className="text-xs text-zinc-700">
                  Never, hardly, rarely, seldom
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  13. polite request
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  вежливая просьба
                </p>
                <p className="text-xs text-zinc-700">Sit down, won't you?</p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  14. neutral request
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">
                  нейтральная просьба
                </p>
                <p className="text-xs text-zinc-700">
                  Close the door, will you?
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-900 text-sm">
                  15. suggestion
                </p>
                <p className="text-xs text-zinc-600 italic mb-1">предложение</p>
                <p className="text-xs text-zinc-700">Let's go, shall we?</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Question Tags Advanced
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  1️⃣ Императивы (Close, Open, Wait)
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>will you?</strong> = нейтральная просьба
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>won't you?</strong> = вежливая просьба
                </p>
                <p className="text-sm text-zinc-700">
                  <strong>can you?</strong> = просьба о помощи
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">2️⃣ Let's</p>
                <p className="text-sm text-zinc-700">
                  Let's + V → <strong>shall we?</strong> (ТОЛЬКО этот вариант!)
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  3️⃣ Отрицательные слова
                </p>
                <p className="text-sm text-zinc-700">
                  hardly, never, rarely, seldom, barely, scarcely →
                  **утвердительный tag**
                </p>
                <p className="text-xs text-zinc-600 italic mt-1">
                  She never calls → does she? (НЕ doesn't she!)
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">
                  4️⃣ Модальные глаголы
                </p>
                <p className="text-sm text-zinc-700">
                  **Повторяем** модальный глагол в tag!
                </p>
                <p className="text-xs text-zinc-600 italic mt-1">
                  You can swim → can't you? (НЕ do you!)
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-center">
                  🔑 Золотое правило
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Утвердительное → отрицательный tag
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Отрицательное → утвердительный tag
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
