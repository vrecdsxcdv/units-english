"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ReportedStatements({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="💬 Reported Speech — Косвенная речь (Statements)">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-300">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Что такое Reported Speech?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              **Reported Speech** (косвенная речь) — это способ пересказать
              слова другого человека **не дословно**, а **своими словами**, без
              использования кавычек.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">
                  📣 Direct Speech (Прямая речь)
                </h4>
                <p className="text-sm mb-2">
                  John says: "<strong>I am happy</strong>."
                </p>
                <p className="text-xs text-zinc-600">
                  Джон говорит: "Я счастлив." (в кавычках, дословно)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2">
                  💭 Reported Speech (Косвенная речь)
                </h4>
                <p className="text-sm mb-2">
                  John said (that) <strong>he was happy</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Джон сказал, что он счастлив. (пересказ, без кавычек)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
              <p className="font-bold text-amber-900 mb-2">
                💡 Зачем нужна косвенная речь?
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• Пересказать слова другого человека</li>
                <li>• Передать информацию, которую услышали ранее</li>
                <li>• В новостях, статьях, докладах</li>
                <li>• В повседневной беседе ("Он сказал, что...")</li>
                <li>• В деловой переписке и отчётах</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-5 border-2 border-rose-300">
              <h4 className="font-bold text-rose-900 mb-3">
                🔄 Что меняется в Reported Speech?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-700">
                <p>
                  • <strong>Времена глаголов</strong> (сдвигаются назад)
                </p>
                <p>
                  • <strong>Местоимения</strong> (I → he/she, you → I/we)
                </p>
                <p>
                  • <strong>Указатели времени</strong> (today → that day)
                </p>
                <p>
                  • <strong>Указатели места</strong> (here → there)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 Mary: "I <strong>like</strong> coffee."
              </p>
              <p className="text-sm text-purple-700">
                💭 Mary said she <strong>liked</strong> coffee.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 Tom: "I <strong>am working</strong>."
              </p>
              <p className="text-sm text-purple-700">
                💭 Tom said he <strong>was working</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 Lisa: "I <strong>have finished</strong>."
              </p>
              <p className="text-sm text-purple-700">
                💭 Lisa said she <strong>had finished</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 John: "I <strong>will help</strong> you."
              </p>
              <p className="text-sm text-purple-700">
                💭 John said he <strong>would help</strong> me.
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="📐 SAY vs TELL — Критическая разница!">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
              SAY или TELL? Как не ошибиться?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-5 border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-900 mb-3 text-lg">
                  SAY — БЕЗ дополнения
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  После <strong>SAY</strong> НЕ ставим me/you/him/her/us/them
                </p>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ He <strong>said</strong> he was tired.
                    </p>
                    <p className="text-xs text-zinc-600">Правильно!</p>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ She <strong>said</strong> that she liked it.
                    </p>
                    <p className="text-xs text-zinc-600">Правильно!</p>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ They <strong>said to me</strong> that...
                    </p>
                    <p className="text-xs text-zinc-600">
                      Можно "said to me" (но редко)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-l-4 border-rose-400">
                <h4 className="font-bold text-rose-900 mb-3 text-lg">
                  TELL — С дополнением
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  После <strong>TELL</strong> ОБЯЗАТЕЛЬНО:
                  me/you/him/her/us/them
                </p>
                <div className="space-y-2">
                  <div className="bg-rose-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ He <strong>told me</strong> he was tired.
                    </p>
                    <p className="text-xs text-zinc-600">Правильно!</p>
                  </div>
                  <div className="bg-rose-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ She <strong>told him</strong> that she liked it.
                    </p>
                    <p className="text-xs text-zinc-600">Правильно!</p>
                  </div>
                  <div className="bg-rose-50 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ They <strong>told us</strong> that...
                    </p>
                    <p className="text-xs text-zinc-600">
                      TELL всегда с объектом!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-100 rounded-lg p-5 border-2 border-red-400">
              <p className="font-bold text-red-900 mb-3 text-center text-lg">
                ❌ САМАЯ ЧАСТАЯ ОШИБКА РУССКОГОВОРЯЩИХ!
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-red-700 mb-2">
                    ❌ He <strong className="underline">said me</strong> that he
                    was tired.
                  </p>
                  <p className="text-xs text-zinc-600 mb-3">
                    В русском мы говорим "сказал мне", но в английском это
                    ОШИБКА!
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm text-green-700">
                      ✅ He <strong>told me</strong> that he was tired.
                    </p>
                    <p className="text-sm text-green-700">
                      ✅ He <strong>said</strong> that he was tired.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-2">
                ✅ She <strong>said</strong> she was busy.
              </p>
              <p className="text-xs text-zinc-600">SAY без дополнения</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-2">
                ✅ He <strong>told us</strong> he would come.
              </p>
              <p className="text-xs text-zinc-600">TELL с "us"</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-2">
                ✅ They <strong>said</strong> it was ready.
              </p>
              <p className="text-xs text-zinc-600">SAY без дополнения</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-2">
                ✅ She <strong>told them</strong> she had finished.
              </p>
              <p className="text-xs text-zinc-600">TELL с "them"</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-sm mb-2">
                ✅ I <strong>said</strong> I didn't know.
              </p>
              <p className="text-xs text-zinc-600">SAY без дополнения</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <p className="text-sm mb-2">
                ✅ We <strong>told him</strong> we were sorry.
              </p>
              <p className="text-xs text-zinc-600">TELL с "him"</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="⏰ Backshift — Сдвиг времён назад">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              Главное правило: времена сдвигаются на шаг НАЗАД
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда главный глагол (said/told) в **прошедшем времени**, времена
              в косвенной речи **сдвигаются назад** (backshift).
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                1️⃣ Present Simple → Past Simple
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "I <strong className="text-blue-700">work</strong> here."
                  </p>
                  <p className="text-xs text-zinc-600">Прямая речь</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 He said he{" "}
                    <strong className="text-blue-700">worked</strong> there.
                  </p>
                  <p className="text-xs text-zinc-600">Косвенная речь</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2 text-lg">
                2️⃣ Present Continuous → Past Continuous
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "I <strong className="text-green-700">am reading</strong>{" "}
                    a book."
                  </p>
                  <p className="text-xs text-zinc-600">am/is/are + -ing</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 She said she{" "}
                    <strong className="text-green-700">was reading</strong> a
                    book.
                  </p>
                  <p className="text-xs text-zinc-600">was/were + -ing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                3️⃣ Present Perfect → Past Perfect
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "I{" "}
                    <strong className="text-purple-700">have finished</strong>{" "}
                    my work."
                  </p>
                  <p className="text-xs text-zinc-600">have/has + V3</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 He said he{" "}
                    <strong className="text-purple-700">had finished</strong>{" "}
                    his work.
                  </p>
                  <p className="text-xs text-zinc-600">had + V3</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                4️⃣ Past Simple → Past Perfect
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "I <strong className="text-orange-700">saw</strong> him
                    yesterday."
                  </p>
                  <p className="text-xs text-zinc-600">V2 (прошедшее)</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 She said she{" "}
                    <strong className="text-orange-700">had seen</strong> him
                    the day before.
                  </p>
                  <p className="text-xs text-zinc-600">had + V3</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
              <h4 className="font-semibold text-rose-900 mb-2 text-lg">
                5️⃣ Will → Would
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "I <strong className="text-rose-700">will</strong> help
                    you."
                  </p>
                  <p className="text-xs text-zinc-600">will + V1</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 She said she{" "}
                    <strong className="text-rose-700">would</strong> help me.
                  </p>
                  <p className="text-xs text-zinc-600">would + V1</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2 text-lg">
                6️⃣ Can → Could
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "I <strong className="text-teal-700">can</strong> swim."
                  </p>
                  <p className="text-xs text-zinc-600">can + V1</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 He said he{" "}
                    <strong className="text-teal-700">could</strong> swim.
                  </p>
                  <p className="text-xs text-zinc-600">could + V1</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-900 mb-2 text-lg">
                7️⃣ May → Might | Must → Had to
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <p className="text-sm">
                    📣 "I <strong className="text-indigo-700">may</strong> be
                    late."
                  </p>
                  <p className="text-sm">
                    📣 "I <strong className="text-indigo-700">must</strong> go."
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">
                    💭 She said she{" "}
                    <strong className="text-indigo-700">might</strong> be late.
                  </p>
                  <p className="text-sm">
                    💭 He said he{" "}
                    <strong className="text-indigo-700">had to</strong> go.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <p className="font-bold text-amber-900 mb-2">
              💡 Важно: Когда НЕ нужен backshift?
            </p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • Если утверждение всё ещё правда: "The Earth is round" → He
                said the Earth is round.
              </li>
              <li>
                • Если главный глагол в Present: He says he is tired. (без
                изменений!)
              </li>
              <li>
                • Past Perfect, would, could, should, might — не меняются (уже в
                прошлом)
              </li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="🔄 Изменение слов-указателей">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border-2 border-pink-300 mb-4">
            <h3 className="text-xl font-bold text-rose-900 mb-4">
              Указатели времени, места и местоимения меняются!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда мы пересказываем слова, мы говорим о **прошлом** и,
              возможно, в **другом месте**. Поэтому многие слова меняются.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <h4 className="font-semibold text-blue-900 mb-3 text-lg">
                ⏰ Указатели времени
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">today</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">that day</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">yesterday</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">
                    the day before
                  </span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">tomorrow</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">
                    the next day
                  </span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">now</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">then</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">this week</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">that week</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">last week</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">
                    the week before
                  </span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">next week</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">
                    the following week
                  </span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 rounded p-2">
                  <span className="font-medium">ago</span>
                  <span>→</span>
                  <span className="text-blue-700 font-medium">before</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <h4 className="font-semibold text-green-900 mb-3 text-lg">
                📍 Указатели места
              </h4>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between items-center bg-green-50 rounded p-2">
                  <span className="font-medium">here</span>
                  <span>→</span>
                  <span className="text-green-700 font-medium">there</span>
                </div>
                <div className="flex justify-between items-center bg-green-50 rounded p-2">
                  <span className="font-medium">this</span>
                  <span>→</span>
                  <span className="text-green-700 font-medium">that</span>
                </div>
                <div className="flex justify-between items-center bg-green-50 rounded p-2">
                  <span className="font-medium">these</span>
                  <span>→</span>
                  <span className="text-green-700 font-medium">those</span>
                </div>
              </div>

              <h4 className="font-semibold text-purple-900 mb-3 text-lg mt-4">
                👤 Местоимения
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="font-medium">I</span>
                  <span>→</span>
                  <span className="text-purple-700 font-medium">he/she</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="font-medium">my</span>
                  <span>→</span>
                  <span className="text-purple-700 font-medium">his/her</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="font-medium">me</span>
                  <span>→</span>
                  <span className="text-purple-700 font-medium">him/her</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="font-medium">we</span>
                  <span>→</span>
                  <span className="text-purple-700 font-medium">they</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-300">
            <h4 className="font-bold text-orange-900 mb-3 text-lg">
              💡 Примеры полной трансформации:
            </h4>
            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="text-sm mb-2">
                  📣 "I'll see you <strong>tomorrow here</strong>."
                </p>
                <p className="text-sm text-orange-700">
                  💭 He said he would see me <strong>the next day there</strong>
                  .
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="text-sm mb-2">
                  📣 "I was <strong>here yesterday</strong> with{" "}
                  <strong>my</strong> friend."
                </p>
                <p className="text-sm text-orange-700">
                  💭 She said she had been <strong>there the day before</strong>{" "}
                  with <strong>her</strong> friend.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="text-sm mb-2">
                  📣 "<strong>This</strong> book is interesting{" "}
                  <strong>now</strong>
                  ."
                </p>
                <p className="text-sm text-orange-700">
                  💭 He said <strong>that</strong> book was interesting{" "}
                  <strong>then</strong>.
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
        left: "",
        answers: [
          "He said he was tired",
          "He said that he was tired",
          "He said he was tired.",
          "He said that he was tired.",
        ],
        right: "",
        explanation:
          'Direct: "I am tired" → Reported: He said (that) he was tired. (am → was, I → he)',
      },
      {
        left: "",
        answers: [
          "She said she was working",
          "She said that she was working",
          "She said she was working.",
          "She said that she was working.",
        ],
        right: "",
        explanation:
          'Direct: "I am working" → Reported: She said (that) she was working. (am working → was working)',
      },
      {
        left: "",
        answers: [
          "He said he liked coffee",
          "He said that he liked coffee",
          "He said he liked coffee.",
          "He said that he liked coffee.",
        ],
        right: "",
        explanation:
          'Direct: "I like coffee" → Reported: He said (that) he liked coffee. (like → liked)',
      },
      {
        left: "",
        answers: [
          "She said she had finished her homework",
          "She said that she had finished her homework",
          "She said she had finished her homework.",
          "She said that she had finished her homework.",
        ],
        right: "",
        explanation:
          'Direct: "I have finished my homework" → Reported: She said she had finished her homework. (have finished → had finished)',
      },
      {
        left: "",
        answers: [
          "He said he would call me",
          "He said that he would call me",
          "He said he would call me.",
          "He said that he would call me.",
        ],
        right: "",
        explanation:
          'Direct: "I will call you" → Reported: He said he would call me. (will → would, you → me)',
      },
      {
        left: "",
        answers: [
          "She said she could swim",
          "She said that she could swim",
          "She said she could swim.",
          "She said that she could swim.",
        ],
        right: "",
        explanation:
          'Direct: "I can swim" → Reported: She said she could swim. (can → could)',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Преобразуй прямую речь">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <p className="font-bold text-indigo-900 mb-2 text-lg">
              📣 → 💭 Преобразуй прямую речь в косвенную
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дана прямая речь. Напиши её в косвенной речи, используя структуру:
              <strong> He/She said (that) ...</strong>
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: меняй времена, местоимения и указатели!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Direct speech: "I am tired." (He said...)
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
                2️⃣ Direct speech: "I am working." (She said...)
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
                3️⃣ Direct speech: "I like coffee." (He said...)
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
                4️⃣ Direct speech: "I have finished my homework." (She said...)
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
                5️⃣ Direct speech: "I will call you." (He said...)
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
                6️⃣ Direct speech: "I can swim." (She said...)
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

  if (step === 6) {
    return (
      <>
        <Section title="📊 Детальный разбор: Present → Past">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Present Simple → Past Simple
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Самое частое изменение! Действие в настоящем становится действием
              в прошлом при пересказе.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>work</strong> at a bank."
                </p>
                <p className="text-sm text-blue-700">
                  💭 He said he <strong>worked</strong> at a bank.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm mb-2">
                  📣 "She <strong>lives</strong> in London."
                </p>
                <p className="text-sm text-blue-700">
                  💭 He said she <strong>lived</strong> in London.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>don't like</strong> tea."
                </p>
                <p className="text-sm text-blue-700">
                  💭 She said she <strong>didn't like</strong> tea.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <p className="text-sm mb-2">
                  📣 "We <strong>have</strong> a dog."
                </p>
                <p className="text-sm text-blue-700">
                  💭 They said they <strong>had</strong> a dog.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Present Continuous → Past Continuous
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Процесс, который происходит "сейчас", становится процессом,
              который происходил "тогда".
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>am reading</strong> a book."
                </p>
                <p className="text-sm text-green-700">
                  💭 She said she <strong>was reading</strong> a book.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="text-sm mb-2">
                  📣 "We <strong>are studying</strong> English."
                </p>
                <p className="text-sm text-green-700">
                  💭 They said they <strong>were studying</strong> English.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="text-sm mb-2">
                  📣 "She <strong>is not working</strong> today."
                </p>
                <p className="text-sm text-green-700">
                  💭 He said she <strong>was not working</strong> that day.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>am watching</strong> TV."
                </p>
                <p className="text-sm text-green-700">
                  💭 He said he <strong>was watching</strong> TV.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Present Perfect → Past Perfect
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Результат в настоящем становится результатом в прошлом.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>have finished</strong> my work."
                </p>
                <p className="text-sm text-purple-700">
                  💭 He said he <strong>had finished</strong> his work.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="text-sm mb-2">
                  📣 "She <strong>has left</strong> already."
                </p>
                <p className="text-sm text-purple-700">
                  💭 He said she <strong>had left</strong> already.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>have never been</strong> there."
                </p>
                <p className="text-sm text-purple-700">
                  💭 She said she <strong>had never been</strong> there.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="text-sm mb-2">
                  📣 "We <strong>have just arrived</strong>."
                </p>
                <p className="text-sm text-purple-700">
                  💭 They said they <strong>had just arrived</strong>.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="🚀 Past & Future в Reported Speech">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-xl font-bold text-orange-900 mb-4">
              Past Simple → Past Perfect
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Действие в прошлом сдвигается ещё дальше в прошлое
              (предпрошедшее).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>saw</strong> him yesterday."
                </p>
                <p className="text-sm text-orange-700">
                  💭 She said she <strong>had seen</strong> him the day before.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>went</strong> to Paris last year."
                </p>
                <p className="text-sm text-orange-700">
                  💭 He said he <strong>had gone</strong> to Paris the year
                  before.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                <p className="text-sm mb-2">
                  📣 "She <strong>bought</strong> a new car."
                </p>
                <p className="text-sm text-orange-700">
                  💭 He said she <strong>had bought</strong> a new car.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                <p className="text-sm mb-2">
                  📣 "They <strong>left</strong> early."
                </p>
                <p className="text-sm text-orange-700">
                  💭 She said they <strong>had left</strong> early.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 rounded-lg p-6 border-2 border-sky-300 mb-4">
            <h3 className="text-xl font-bold text-sky-900 mb-4">
              Will → Would | Going to → Was/Were going to
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Будущее время в прямой речи становится "будущим в прошедшем".
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>will help</strong> you."
                </p>
                <p className="text-sm text-sky-700">
                  💭 She said she <strong>would help</strong> me.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
                <p className="text-sm mb-2">
                  📣 "It <strong>will rain</strong> tomorrow."
                </p>
                <p className="text-sm text-sky-700">
                  💭 He said it <strong>would rain</strong> the next day.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>am going to</strong> visit him."
                </p>
                <p className="text-sm text-sky-700">
                  💭 She said she <strong>was going to</strong> visit him.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-sky-200">
                <p className="text-sm mb-2">
                  📣 "We <strong>won't</strong> be late."
                </p>
                <p className="text-sm text-sky-700">
                  💭 They said they <strong>wouldn't</strong> be late.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-violet-50 rounded-lg p-6 border-2 border-violet-300">
            <h3 className="text-xl font-bold text-violet-900 mb-4">
              Модальные глаголы в Reported Speech
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
                <h5 className="font-semibold text-violet-900 mb-2">
                  Меняются:
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    • <strong>can</strong> → <strong>could</strong>
                  </p>
                  <p>
                    • <strong>may</strong> → <strong>might</strong>
                  </p>
                  <p>
                    • <strong>must</strong> → <strong>had to</strong>
                  </p>
                  <p>
                    • <strong>will</strong> → <strong>would</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
                <h5 className="font-semibold text-violet-900 mb-2">
                  НЕ меняются:
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    • <strong>could</strong> (остаётся could)
                  </p>
                  <p>
                    • <strong>would</strong> (остаётся would)
                  </p>
                  <p>
                    • <strong>should</strong> (остаётся should)
                  </p>
                  <p>
                    • <strong>might</strong> (остаётся might)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>can</strong> swim."
                </p>
                <p className="text-sm text-violet-700">
                  💭 He said he <strong>could</strong> swim.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
                <p className="text-sm mb-2">
                  📣 "I <strong>may</strong> be late."
                </p>
                <p className="text-sm text-violet-700">
                  💭 She said she <strong>might</strong> be late.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["She said she was tired", "She said that she was tired"],
        right: "",
        explanation: 'Исправлено: "I am" → "she was"',
      },
      {
        left: "",
        answers: [
          "He said he had finished his work",
          "He said that he had finished his work",
          "He told me he had finished his work",
          "He told me that he had finished his work",
        ],
        right: "",
        explanation:
          'Исправлено: "has finished" → "had finished", "my" → "his"',
      },
      {
        left: "",
        answers: [
          "She said she would call me",
          "She said that she would call me",
          "She told me she would call me",
          "She told me that she would call me",
        ],
        right: "",
        explanation: 'Исправлено: "will" → "would", "you" → "me"',
      },
      {
        left: "",
        answers: [
          "He said he could swim",
          "He said that he could swim",
          "He told me he could swim",
          "He told me that he could swim",
        ],
        right: "",
        explanation: 'Исправлено: "can" → "could"',
      },
      {
        left: "",
        answers: [
          "She said she worked in London",
          "She said that she worked in London",
          "She told me she worked in London",
          "She told me that she worked in London",
        ],
        right: "",
        explanation: 'Исправлено: "work" → "worked"',
      },
      {
        left: "",
        answers: [
          "He said he had seen the film",
          "He said that he had seen the film",
          "He told me he had seen the film",
          "He told me that he had seen the film",
        ],
        right: "",
        explanation: 'Исправлено: "saw" → "had seen"',
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 2: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-300 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибки!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Каждое предложение содержит ОШИБКИ в косвенной речи. Напиши
              ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Подсказка: проверяй времена глаголов, местоимения и SAY/TELL.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                She said <strong className="text-red-700">I am</strong> tired.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
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
              <p className="text-sm text-zinc-900 mb-3">
                He said I{" "}
                <strong className="text-red-700">has finished my</strong> work.
              </p>
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
                She <strong className="text-red-700">said me</strong> I{" "}
                <strong className="text-red-700">will call you</strong>.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
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
              <p className="text-sm text-zinc-900 mb-3">
                He said I <strong className="text-red-700">can</strong> swim.
              </p>
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
                She said I <strong className="text-red-700">work</strong> in
                London.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
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
                He said I <strong className="text-red-700">saw</strong> the
                film.
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

  if (step === 9) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки русскоговорящих">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Распространённые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 1: "Said me" вместо "told me"
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He <strong>said me</strong> that he was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      В русском: "Он сказал мне" — кажется логичным!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He <strong>told me</strong> (that) he was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      В английском: TELL + me/him/her
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 2: Забыть изменить время
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He said that he <strong>is</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">Время не изменили!</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He said that he <strong>was</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      is → was (backshift!)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 3: Не изменить местоимения
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He said <strong>I</strong> will call{" "}
                      <strong>you</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Местоимения не изменили!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He said <strong>he</strong> would call{" "}
                      <strong>me</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">I → he, you → me</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 4: Забыть изменить указатели времени
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He said he would come <strong>tomorrow</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      "Tomorrow" не изменили!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He said he would come <strong>the next day</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      tomorrow → the next day
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 5: Использовать TELL без дополнения
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He <strong>told</strong> that he was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      TELL требует me/him/her!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He <strong>said</strong> that he was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Или: He told me that...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 mb-3">
              🆚 Сравнение с русским языком
            </h4>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>
                • <strong>В русском:</strong> "Он сказал, что он устал" —
                времена часто не меняются
              </p>
              <p>
                • <strong>В английском:</strong> "He said that he was tired" —
                времена ОБЯЗАТЕЛЬНО меняются!
              </p>
              <p className="mt-3">
                • <strong>В русском:</strong> "Он сказал мне" — естественно
                звучит
              </p>
              <p>
                • <strong>В английском:</strong> "He told me" — НЕ "said me"!
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
        left: "",
        answers: [
          "He said he lived in Moscow",
          "He said that he lived in Moscow",
          "He said he lived in Moscow.",
          "He said that he lived in Moscow.",
        ],
        right: "",
        explanation: "Он сказал, что живёт в Москве — live → lived",
      },
      {
        left: "",
        answers: [
          "She said she was studying",
          "She said that she was studying",
          "She said she was studying.",
          "She said that she was studying.",
        ],
        right: "",
        explanation: "Она сказала, что учится — am studying → was studying",
      },
      {
        left: "",
        answers: [
          "He said he had finished his homework",
          "He said that he had finished his homework",
          "He told me he had finished his homework",
          "He told me that he had finished his homework",
        ],
        right: "",
        explanation:
          "Он сказал, что закончил домашнюю работу — have finished → had finished",
      },
      {
        left: "",
        answers: [
          "She said she would come tomorrow",
          "She said that she would come tomorrow",
          "She said she would come the next day",
          "She said that she would come the next day",
        ],
        right: "",
        explanation: "Она сказала, что придёт завтра — will → would",
      },
      {
        left: "",
        answers: [
          "He said he could speak English",
          "He said that he could speak English",
          "He told me he could speak English",
          "He told me that he could speak English",
        ],
        right: "",
        explanation: "Он сказал, что может говорить по-английски — can → could",
      },
      {
        left: "",
        answers: [
          "She said she had seen that film",
          "She said that she had seen that film",
          "She told me she had seen that film",
          "She told me that she had seen that film",
        ],
        right: "",
        explanation: "Она сказала, что видела этот фильм — saw → had seen",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи предложения на английский
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке в косвенной речи. Переведи его
              на английский, используя правильную структуру Reported Speech!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: SAY/TELL, backshift, местоимения, указатели времени!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Он сказал, что живёт в Москве.
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
                2️⃣ Она сказала, что учится.
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
                3️⃣ Он сказал, что закончил домашнюю работу.
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
                4️⃣ Она сказала, что придёт завтра.
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
                5️⃣ Он сказал, что может говорить по-английски.
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
                6️⃣ Она сказала, что видела этот фильм.
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

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "1. He said",
        answers: ["he was tired", "that he was tired"],
        right: '(Direct: "I am tired")',
        explanation: "Present Simple → Past Simple: am → was",
      },
      {
        left: "2. She told me",
        answers: [
          "she had finished her work",
          "that she had finished her work",
        ],
        right: '(Direct: "I have finished my work")',
        explanation:
          "Present Perfect → Past Perfect: have finished → had finished",
      },
      {
        left: "3. He said",
        answers: ["he would call me", "that he would call me"],
        right: '(Direct: "I will call you")',
        explanation: "Will → Would, you → me",
      },
      {
        left: "4. She said",
        answers: ["she was working", "that she was working"],
        right: '(Direct: "I am working")',
        explanation: "Present Continuous → Past Continuous",
      },
      {
        left: "5. He told us",
        answers: ["he could swim", "that he could swim"],
        right: '(Direct: "I can swim")',
        explanation: "Can → Could",
      },
      {
        left: "6. She said",
        answers: ["she lived in London", "that she lived in London"],
        right: '(Direct: "I live in London")',
        explanation: "Present Simple → Past Simple: live → lived",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-400 mb-4">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">
              Финальная проверка знаний!
            </h3>
            <p className="text-sm text-zinc-700 mb-2">
              6 предложений на **ВСЕ аспекты Reported Statements**. Преобразуй
              прямую речь в косвенную!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Преобразуй прямую речь в косвенную."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Reported Statements! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Преобразовывать прямую речь в косвенную</li>
              <li>✅ Правильно использовать SAY и TELL</li>
              <li>✅ Делать backshift (сдвиг времён)</li>
              <li>✅ Менять местоимения (I → he/she, you → me)</li>
              <li>
                ✅ Менять указатели времени (today → that day, tomorrow → the
                next day)
              </li>
              <li>✅ Работать со всеми временами</li>
              <li>✅ Работать с модальными глаголами</li>
              <li>✅ Избегать типичных ошибок русскоговорящих</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Vocabulary — 20 важных слов">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              Полезные слова для Reported Speech
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  1. report — сообщать, докладывать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>reported</strong> that sales were increasing.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  2. mention — упоминать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>mentioned</strong> that she was leaving.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  3. explain — объяснять
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>explained</strong> that he couldn't come.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  4. add — добавлять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>added</strong> that it was important.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  5. claim — утверждать, заявлять
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>claimed</strong> that he was innocent.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  6. admit — признавать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>admitted</strong> that she had made a mistake.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  7. deny — отрицать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>denied</strong> that he had stolen it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  8. insist — настаивать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>insisted</strong> that she was right.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  9. announce — объявлять
                </p>
                <p className="text-xs text-zinc-600">
                  They <strong>announced</strong> that the meeting was
                  cancelled.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  10. inform — информировать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>informed</strong> us that he was leaving.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  11. promise — обещать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>promised</strong> that she would help.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  12. complain — жаловаться
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>complained</strong> that it was too expensive.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  13. suggest — предлагать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>suggested</strong> that we should go.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  14. reply — отвечать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>replied</strong> that he didn't know.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  15. remark — замечать, отмечать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>remarked</strong> that it was getting late.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  16. state — заявлять, утверждать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>stated</strong> that he disagreed.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  17. confirm — подтверждать
                </p>
                <p className="text-xs text-zinc-600">
                  They <strong>confirmed</strong> that the booking was made.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  18. assure — уверять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>assured</strong> me that everything was fine.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  19. boast — хвастаться
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>boasted</strong> that he had won.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  20. declare — заявлять, объявлять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>declared</strong> that she was ready.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center text-lg">
              Таблица сдвига времён (Backshift)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="bg-white rounded p-3">
                Present Simple → <strong>Past Simple</strong>
              </div>
              <div className="bg-white rounded p-3">
                Present Continuous → <strong>Past Continuous</strong>
              </div>
              <div className="bg-white rounded p-3">
                Present Perfect → <strong>Past Perfect</strong>
              </div>
              <div className="bg-white rounded p-3">
                Past Simple → <strong>Past Perfect</strong>
              </div>
              <div className="bg-white rounded p-3">
                Will → <strong>Would</strong>
              </div>
              <div className="bg-white rounded p-3">
                Can → <strong>Could</strong>
              </div>
              <div className="bg-white rounded p-3">
                May → <strong>Might</strong>
              </div>
              <div className="bg-white rounded p-3">
                Must → <strong>Had to</strong>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <h4 className="font-bold text-amber-900 mb-2 text-center">
              🔑 Ключевые правила:
            </h4>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • <strong>SAY</strong> — без дополнения (He said...)
              </li>
              <li>
                • <strong>TELL</strong> — с дополнением (He told me...)
              </li>
              <li>• Времена сдвигаются назад (backshift)</li>
              <li>• Местоимения меняются (I → he/she, you → me)</li>
              <li>• Указатели времени меняются (today → that day)</li>
              <li>• Указатели места меняются (here → there)</li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
