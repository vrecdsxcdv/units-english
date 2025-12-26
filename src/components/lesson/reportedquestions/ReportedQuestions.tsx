"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ReportedQuestions({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="❓ Reported Questions — Вопросы в косвенной речи">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Как передать вопросы в косвенной речи?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              **Reported Questions** — это способ пересказать вопрос, который
              кто-то задал. В косвенных вопросах **НЕТ** вопросительного знака и
              **МЕНЯЕТСЯ** порядок слов!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">
                  📣 Direct Question (Прямой вопрос)
                </h4>
                <p className="text-sm mb-2">
                  "Are you happy<strong>?</strong>"
                </p>
                <p className="text-xs text-zinc-600">
                  Прямой вопрос (с вопросительным знаком)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400">
                <h4 className="font-semibold text-cyan-900 mb-2">
                  💭 Reported Question (Косвенный вопрос)
                </h4>
                <p className="text-sm mb-2">
                  He asked if I was happy<strong>.</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Косвенный вопрос (БЕЗ вопросительного знака!)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
              <p className="font-bold text-amber-900 mb-2">
                💡 Главные отличия Reported Questions:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• НЕТ вопросительного знака (ставим точку!)</li>
                <li>• Прямой порядок слов (как в утверждении)</li>
                <li>• Используем IF/WHETHER для Yes/No вопросов</li>
                <li>• Используем WH-слова для WH-вопросов</li>
                <li>• Времена сдвигаются назад (backshift)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-5 border-2 border-rose-300">
              <h4 className="font-bold text-rose-900 mb-3">
                🔄 Два типа вопросов:
              </h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-blue-900 mb-1">
                    1️⃣ Yes/No Questions (Общие вопросы)
                  </p>
                  <p className="text-sm">
                    📣 "Do you like coffee?" → 💭 He asked <strong>if</strong> I
                    liked coffee.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-green-900 mb-1">
                    2️⃣ WH-Questions (Специальные вопросы)
                  </p>
                  <p className="text-sm">
                    📣 "Where do you live?" → 💭 He asked <strong>where</strong>{" "}
                    I lived.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "Are you busy<strong>?</strong>"
              </p>
              <p className="text-sm text-blue-700">
                💭 She asked if I was busy<strong>.</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "What are you doing<strong>?</strong>"
              </p>
              <p className="text-sm text-green-700">
                💭 He asked what I was doing<strong>.</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "Do you speak English<strong>?</strong>"
              </p>
              <p className="text-sm text-blue-700">
                💭 She asked if I spoke English<strong>.</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "Where is the station<strong>?</strong>"
              </p>
              <p className="text-sm text-green-700">
                💭 He asked where the station was<strong>.</strong>
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
        <Section title="📐 Yes/No Questions — IF/WHETHER">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              ASK + IF/WHETHER + прямой порядок слов
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200 mb-4">
              <h4 className="font-semibold text-indigo-900 mb-3">
                Формула для Yes/No вопросов:
              </h4>
              <div className="bg-indigo-50 rounded p-4">
                <p className="text-sm font-semibold text-indigo-900 mb-1">
                  <span className="text-green-700">He</span>{" "}
                  <span className="text-red-700">asked</span>{" "}
                  <span className="text-blue-700">if/whether</span>{" "}
                  <span className="text-purple-700">I was happy</span>
                  <span className="text-orange-700">.</span>
                </p>
                <div className="text-xs text-zinc-600 mt-3 space-y-1">
                  <p>
                    • <span className="text-green-700">He</span> — кто спросил
                  </p>
                  <p>
                    • <span className="text-red-700">asked</span> — глагол
                    "спросил"
                  </p>
                  <p>
                    • <span className="text-blue-700">if/whether</span> — "ли"
                    (для Yes/No)
                  </p>
                  <p>
                    • <span className="text-purple-700">I was happy</span> —
                    ПРЯМОЙ порядок слов!
                  </p>
                  <p>
                    • <span className="text-orange-700">.</span> — точка (НЕ
                    вопросительный знак!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300 mb-4">
              <h4 className="font-bold text-red-900 mb-3 text-center text-lg">
                ⚔️ IF vs WHETHER — В чём разница?
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                  <h5 className="font-semibold text-blue-900 mb-2">IF</h5>
                  <div className="space-y-2 text-sm">
                    <p className="mb-1">
                      ✅ He asked <strong>if</strong> I was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      IF — более разговорный вариант
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
                  <h5 className="font-semibold text-rose-900 mb-2">WHETHER</h5>
                  <div className="space-y-2 text-sm">
                    <p className="mb-1">
                      ✅ He asked <strong>whether</strong> I was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      WHETHER — более формальный
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-400">
                <p className="font-bold text-blue-900 mb-2 text-center">
                  💡 Когда ТОЛЬКО WHETHER?
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    ✅ He asked whether <strong>or not</strong> I was tired.
                  </p>
                  <p className="text-xs text-zinc-600">
                    С "or not" используем ТОЛЬКО WHETHER!
                  </p>
                  <p className="mt-2">
                    ❌ He asked if or not... (НЕПРАВИЛЬНО!)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              🔄 Порядок слов — КРИТИЧЕСКИ ВАЖНО!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              В косвенных вопросах используем **ПРЯМОЙ порядок слов**, как в
              утверждении (НЕ как в вопросе!)
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-sm mb-2">
                  📣 Direct: "Are you <strong>happy</strong>?"
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Вопросительный порядок: Are + you + happy?
                </p>
                <p className="text-sm text-green-700">
                  💭 Reported: He asked if I <strong>was happy</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Прямой порядок: I + was + happy (как в утверждении!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm mb-2">
                  📣 Direct: "Do you <strong>like</strong> coffee?"
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Вопросительный порядок: Do + you + like?
                </p>
                <p className="text-sm text-blue-700">
                  💭 Reported: She asked if I <strong>liked</strong> coffee.
                </p>
                <p className="text-xs text-zinc-600">
                  Прямой порядок: I + liked (убираем DO!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm mb-2">
                  📣 Direct: "Have you <strong>finished</strong>?"
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Вопросительный порядок: Have + you + finished?
                </p>
                <p className="text-sm text-purple-700">
                  💭 Reported: He asked if I <strong>had finished</strong>.
                </p>
                <p className="text-xs text-zinc-600">
                  Прямой порядок: I + had finished
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm mb-2">
                  📣 Direct: "Can you <strong>help</strong> me?"
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Вопросительный порядок: Can + you + help?
                </p>
                <p className="text-sm text-orange-700">
                  💭 Reported: She asked if I <strong>could help</strong> her.
                </p>
                <p className="text-xs text-zinc-600">
                  Прямой порядок: I + could help (can → could)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
            <p className="font-bold text-red-900 mb-3 text-center text-lg">
              ❌ САМАЯ ЧАСТАЯ ОШИБКА!
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ He asked if <strong>was I</strong> tired. (НЕПРАВИЛЬНО!)
                </p>
                <p className="text-xs text-zinc-600 mb-3">
                  Оставили вопросительный порядок — ОШИБКА!
                </p>
                <p className="text-sm text-green-700">
                  ✅ He asked if <strong>I was</strong> tired.
                </p>
                <p className="text-xs text-zinc-600">
                  Прямой порядок: I + was ✅
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
        <Section title="📐 WH-Questions — Специальные вопросы">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
              ASK + WH-word + прямой порядок слов
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-green-200 mb-4">
              <h4 className="font-semibold text-green-900 mb-3">
                Формула для WH-вопросов:
              </h4>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm font-semibold text-green-900 mb-1">
                  <span className="text-green-700">She</span>{" "}
                  <span className="text-red-700">asked</span>{" "}
                  <span className="text-blue-700">where</span>{" "}
                  <span className="text-purple-700">I lived</span>
                  <span className="text-orange-700">.</span>
                </p>
                <div className="text-xs text-zinc-600 mt-3 space-y-1">
                  <p>
                    • <span className="text-green-700">She</span> — кто спросил
                  </p>
                  <p>
                    • <span className="text-red-700">asked</span> — глагол
                    "спросил"
                  </p>
                  <p>
                    • <span className="text-blue-700">where</span> — WH-слово
                    (где)
                  </p>
                  <p>
                    • <span className="text-purple-700">I lived</span> — ПРЯМОЙ
                    порядок слов!
                  </p>
                  <p>
                    • <span className="text-orange-700">.</span> — точка (НЕ
                    вопросительный знак!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 rounded-lg p-5 border-2 border-sky-300 mb-4">
              <h4 className="font-bold text-sky-900 mb-3">
                📝 WH-слова остаются!
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                В отличие от Yes/No вопросов, WH-слова (what, where, when, why,
                how) **остаются** в косвенном вопросе!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong className="text-blue-700">Where</strong> do you
                    live?
                  </p>
                  <p className="text-xs text-zinc-600">
                    → asked <strong className="text-blue-700">where</strong> I
                    lived
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong className="text-green-700">What</strong> are you
                    doing?
                  </p>
                  <p className="text-xs text-zinc-600">
                    → asked <strong className="text-green-700">what</strong> I
                    was doing
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong className="text-purple-700">When</strong> did you
                    arrive?
                  </p>
                  <p className="text-xs text-zinc-600">
                    → asked <strong className="text-purple-700">when</strong> I
                    had arrived
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong className="text-orange-700">Why</strong> are you
                    late?
                  </p>
                  <p className="text-xs text-zinc-600">
                    → asked <strong className="text-orange-700">why</strong> I
                    was late
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong className="text-rose-700">How</strong> do you know?
                  </p>
                  <p className="text-xs text-zinc-600">
                    → asked <strong className="text-rose-700">how</strong> I
                    knew
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong className="text-teal-700">Who</strong> is he?
                  </p>
                  <p className="text-xs text-zinc-600">
                    → asked <strong className="text-teal-700">who</strong> he
                    was
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                WHERE — Где?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "<strong>Where</strong> do you live?"
                  </p>
                  <p className="text-xs text-zinc-600">
                    Вопросительный порядок
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 He asked <strong>where</strong> I lived.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Прямой порядок: where + I + lived
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2 text-lg">
                WHAT — Что?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "<strong>What</strong> are you doing?"
                  </p>
                  <p className="text-xs text-zinc-600">are + you + doing</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 She asked <strong>what</strong> I was doing.
                  </p>
                  <p className="text-xs text-zinc-600">what + I + was doing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                WHEN — Когда?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "<strong>When</strong> did you arrive?"
                  </p>
                  <p className="text-xs text-zinc-600">did + you + arrive</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 He asked <strong>when</strong> I had arrived.
                  </p>
                  <p className="text-xs text-zinc-600">
                    when + I + had arrived (убираем DID!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                WHY — Почему?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "<strong>Why</strong> are you late?"
                  </p>
                  <p className="text-xs text-zinc-600">are + you + late</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 She asked <strong>why</strong> I was late.
                  </p>
                  <p className="text-xs text-zinc-600">why + I + was late</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
              <h4 className="font-semibold text-rose-900 mb-2 text-lg">
                HOW — Как?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "<strong>How</strong> do you know?"
                  </p>
                  <p className="text-xs text-zinc-600">do + you + know</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 He asked <strong>how</strong> I knew.
                  </p>
                  <p className="text-xs text-zinc-600">
                    how + I + knew (убираем DO!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2 text-lg">
                WHO — Кто?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm mb-1">
                    📣 "<strong>Who</strong> is he?"
                  </p>
                  <p className="text-xs text-zinc-600">is + he</p>
                </div>
                <div>
                  <p className="text-sm mb-1">
                    💭 She asked <strong>who</strong> he was.
                  </p>
                  <p className="text-xs text-zinc-600">who + he + was</p>
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
        <Section title="🔄 Backshift + Изменения в вопросах">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              Времена сдвигаются так же, как в утверждениях!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              В косвенных вопросах применяются **ТЕ ЖЕ правила backshift**, что
              и в Reported Statements.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                Present Simple → Past Simple
              </h4>
              <div className="space-y-2">
                <p className="text-sm">
                  📣 "Do you <strong>work</strong> here?"
                </p>
                <p className="text-sm text-blue-700">
                  💭 He asked if I <strong>worked</strong> there.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2 text-lg">
                Present Continuous → Past Continuous
              </h4>
              <div className="space-y-2">
                <p className="text-sm">
                  📣 "What <strong>are you reading</strong>?"
                </p>
                <p className="text-sm text-green-700">
                  💭 She asked what I <strong>was reading</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                Present Perfect → Past Perfect
              </h4>
              <div className="space-y-2">
                <p className="text-sm">
                  📣 "Have you <strong>finished</strong>?"
                </p>
                <p className="text-sm text-purple-700">
                  💭 He asked if I <strong>had finished</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                Will → Would
              </h4>
              <div className="space-y-2">
                <p className="text-sm">
                  📣 "When <strong>will</strong> you come?"
                </p>
                <p className="text-sm text-orange-700">
                  💭 She asked when I <strong>would</strong> come.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
              <h4 className="font-semibold text-rose-900 mb-2 text-lg">
                Can → Could
              </h4>
              <div className="space-y-2">
                <p className="text-sm">
                  📣 "<strong>Can</strong> you help me?"
                </p>
                <p className="text-sm text-rose-700">
                  💭 He asked if I <strong>could</strong> help him.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-5 border-2 border-pink-300 mt-4">
            <h4 className="font-bold text-pink-900 mb-3">
              💡 Важно: Что ещё меняется?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • <strong>Местоимения:</strong> you → I/me, your → my, I →
                he/she
              </p>
              <p>
                • <strong>Указатели времени:</strong> today → that day, tomorrow
                → the next day
              </p>
              <p>
                • <strong>Указатели места:</strong> here → there, this → that
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 mt-3">
              <p className="text-sm mb-2">
                📣 "Where do you live <strong>now</strong>?"
              </p>
              <p className="text-sm text-pink-700">
                💭 He asked where I lived <strong>then</strong>.
              </p>
              <p className="text-xs text-zinc-600 mt-1">now → then, you → I</p>
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
          "He asked if I was tired",
          "He asked whether I was tired",
          "He asked if I was tired.",
          "He asked whether I was tired.",
        ],
        right: "",
        explanation:
          'Direct: "Are you tired?" → Reported: He asked if I was tired. (прямой порядок слов!)',
      },
      {
        left: "",
        answers: [
          "She asked if I liked coffee",
          "She asked whether I liked coffee",
          "She asked if I liked coffee.",
          "She asked whether I liked coffee.",
        ],
        right: "",
        explanation:
          'Direct: "Do you like coffee?" → Reported: She asked if I liked coffee.',
      },
      {
        left: "",
        answers: [
          "He asked if I had finished my work",
          "He asked whether I had finished my work",
          "He asked if I had finished my work.",
          "He asked whether I had finished my work.",
        ],
        right: "",
        explanation:
          'Direct: "Have you finished your work?" → Reported: He asked if I had finished my work.',
      },
      {
        left: "",
        answers: [
          "She asked if I could help her",
          "She asked whether I could help her",
          "She asked if I could help her.",
          "She asked whether I could help her.",
        ],
        right: "",
        explanation:
          'Direct: "Can you help me?" → Reported: She asked if I could help her.',
      },
      {
        left: "",
        answers: [
          "He asked if I was working",
          "He asked whether I was working",
          "He asked if I was working.",
          "He asked whether I was working.",
        ],
        right: "",
        explanation:
          'Direct: "Are you working?" → Reported: He asked if I was working.',
      },
      {
        left: "",
        answers: [
          "She asked if I would come",
          "She asked whether I would come",
          "She asked if I would come.",
          "She asked whether I would come.",
        ],
        right: "",
        explanation:
          'Direct: "Will you come?" → Reported: She asked if I would come.',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Yes/No Questions">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300 mb-4">
            <p className="font-bold text-indigo-900 mb-2 text-lg">
              📣 → 💭 Преобразуй Yes/No вопросы в косвенную речь
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дан прямой вопрос. Напиши его в косвенной речи, используя
              структуру: <strong>He/She asked if ...</strong>
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: прямой порядок слов, backshift, местоимения!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Direct: "Are you tired?" (He asked...)
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
                2️⃣ Direct: "Do you like coffee?" (She asked...)
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
                3️⃣ Direct: "Have you finished your work?" (He asked...)
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
                4️⃣ Direct: "Can you help me?" (She asked...)
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
                5️⃣ Direct: "Are you working?" (He asked...)
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
                6️⃣ Direct: "Will you come?" (She asked...)
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
    const items: FillItem[] = [
      {
        left: "",
        answers: ["He asked where I lived", "He asked where I lived."],
        right: "",
        explanation:
          'Direct: "Where do you live?" → Reported: He asked where I lived.',
      },
      {
        left: "",
        answers: ["She asked what I was doing", "She asked what I was doing."],
        right: "",
        explanation:
          'Direct: "What are you doing?" → Reported: She asked what I was doing.',
      },
      {
        left: "",
        answers: [
          "He asked when I had arrived",
          "He asked when I had arrived.",
        ],
        right: "",
        explanation:
          'Direct: "When did you arrive?" → Reported: He asked when I had arrived.',
      },
      {
        left: "",
        answers: ["She asked why I was late", "She asked why I was late."],
        right: "",
        explanation:
          'Direct: "Why are you late?" → Reported: She asked why I was late.',
      },
      {
        left: "",
        answers: ["He asked how I knew", "He asked how I knew."],
        right: "",
        explanation:
          'Direct: "How do you know?" → Reported: He asked how I knew.',
      },
      {
        left: "",
        answers: ["She asked who I was", "She asked who I was."],
        right: "",
        explanation: 'Direct: "Who are you?" → Reported: She asked who I was.',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: WH-Questions">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300 mb-4">
            <p className="font-bold text-green-900 mb-2 text-lg">
              📣 → 💭 Преобразуй WH-вопросы в косвенную речь
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дан прямой WH-вопрос. Напиши его в косвенной речи, используя
              структуру:{" "}
              <strong>He/She asked where/what/when/why/how ...</strong>
            </p>
            <p className="text-xs text-zinc-600">
              WH-слово остаётся! Прямой порядок слов!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Direct: "Where do you live?" (He asked...)
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
                2️⃣ Direct: "What are you doing?" (She asked...)
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
                3️⃣ Direct: "When did you arrive?" (He asked...)
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
                4️⃣ Direct: "Why are you late?" (She asked...)
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
                5️⃣ Direct: "How do you know?" (He asked...)
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
                6️⃣ Direct: "Who are you?" (She asked...)
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

  if (step === 7) {
    return (
      <>
        <Section title="🔍 WONDER — Интересоваться">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 border-2 border-violet-300 mb-4">
            <h3 className="text-xl font-bold text-violet-900 mb-4">
              WONDER — ещё один способ передать вопрос
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вместо <strong>ASK</strong> можно использовать{" "}
              <strong>WONDER</strong> (интересоваться, задаваться вопросом).
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-violet-200 mb-4">
              <h4 className="font-semibold text-violet-900 mb-3">
                Структура с WONDER:
              </h4>
              <div className="space-y-3">
                <div className="bg-violet-50 rounded p-3">
                  <p className="text-sm mb-2">
                    ✅ I <strong>wonder</strong> if he is tired.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Мне интересно, устал ли он.
                  </p>
                </div>

                <div className="bg-violet-50 rounded p-3">
                  <p className="text-sm mb-2">
                    ✅ She <strong>wondered</strong> where I lived.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Ей было интересно, где я живу.
                  </p>
                </div>

                <div className="bg-violet-50 rounded p-3">
                  <p className="text-sm mb-2">
                    ✅ He <strong>was wondering</strong> if I could help.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Он интересовался, могу ли я помочь.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">
                  С IF/WHETHER
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    I wonder <strong>if</strong> he will come.
                  </p>
                  <p>
                    She wondered <strong>whether</strong> it was true.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">
                  С WH-словами
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    I wonder <strong>where</strong> he is.
                  </p>
                  <p>
                    She wondered <strong>what</strong> I was doing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <h4 className="font-bold text-amber-900 mb-3">
              💡 ASK vs WONDER — В чём разница?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-blue-900 mb-2">ASK</p>
                <p className="text-sm mb-2">
                  He <strong>asked</strong> if I was tired.
                </p>
                <p className="text-xs text-zinc-600">
                  Он спросил (задал вопрос напрямую)
                </p>
              </div>

              <div className="bg-white rounded p-3">
                <p className="font-semibold text-purple-900 mb-2">WONDER</p>
                <p className="text-sm mb-2">
                  He <strong>wondered</strong> if I was tired.
                </p>
                <p className="text-xs text-zinc-600">
                  Ему было интересно (размышлял, задавался вопросом)
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="⚠️ Типичные ошибки в Reported Questions">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Самые частые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 1: Вопросительный порядок слов
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He asked if <strong>was I</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Оставили вопросительный порядок!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He asked if <strong>I was</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Прямой порядок слов: I + was ✅
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 2: Не убрали DO/DOES/DID
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She asked where <strong>do I</strong> live.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Оставили вспомогательный DO!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She asked where <strong>I lived</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Убрали DO, изменили время на Past Simple
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 3: Вопросительный знак в конце
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He asked if I was tired<strong>?</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Поставили вопросительный знак!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He asked if I was tired<strong>.</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      Косвенный вопрос — это утверждение! Ставим точку.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 4: Забыли IF/WHETHER для Yes/No
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He asked <strong>I was</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">Забыли IF/WHETHER!</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He asked <strong>if</strong> I was tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Для Yes/No вопросов ОБЯЗАТЕЛЬНО IF/WHETHER
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 5: Забыли изменить время (backshift)
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He asked if I <strong>am</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">Не изменили время!</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He asked if I <strong>was</strong> tired.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Present Simple → Past Simple (backshift!)
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
                • <strong>В русском:</strong> "Он спросил, устал ли я?" — можно
                вопросительный знак
              </p>
              <p>
                • <strong>В английском:</strong> "He asked if I was tired." —
                ТОЛЬКО точка!
              </p>
              <p className="mt-3">
                • <strong>В русском:</strong> Порядок слов часто как в вопросе
              </p>
              <p>
                • <strong>В английском:</strong> ТОЛЬКО прямой порядок слов!
              </p>
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
        answers: ["He asked if I was tired", "He asked whether I was tired"],
        right: "",
        explanation: 'Исправлено: "was I" → "I was" (прямой порядок)',
      },
      {
        left: "",
        answers: ["She asked where I lived"],
        right: "",
        explanation: 'Исправлено: убрали "do", "do I live" → "I lived"',
      },
      {
        left: "",
        answers: [
          "He asked if I could help him",
          "He asked whether I could help him",
        ],
        right: "",
        explanation: 'Исправлено: "can I" → "I could", "you" → "him"',
      },
      {
        left: "",
        answers: ["She asked what I was doing"],
        right: "",
        explanation: 'Исправлено: "are you doing" → "I was doing"',
      },
      {
        left: "",
        answers: [
          "He asked if I had finished",
          "He asked whether I had finished",
        ],
        right: "",
        explanation: 'Исправлено: убрали "?", добавили "if", "have" → "had"',
      },
      {
        left: "",
        answers: ["She asked when I would come"],
        right: "",
        explanation: 'Исправлено: "will you" → "I would"',
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 3: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-300 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибки!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Каждое предложение содержит ОШИБКИ в косвенном вопросе. Напиши
              ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: порядок слов, IF/WHETHER, backshift, DO/DOES/DID, знаки
              препинания!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                He asked if <strong className="text-red-700">was I</strong>{" "}
                tired.
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
                She asked where{" "}
                <strong className="text-red-700">do I live</strong>.
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
                He asked if{" "}
                <strong className="text-red-700">can I help you</strong>.
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
                She asked what{" "}
                <strong className="text-red-700">are you doing</strong>.
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
                He asked{" "}
                <strong className="text-red-700">have you finished?</strong>
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
                She asked when{" "}
                <strong className="text-red-700">will you come</strong>.
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
    const items: FillItem[] = [
      {
        left: "",
        answers: ["He asked if I was tired", "He asked whether I was tired"],
        right: "",
        explanation: "Он спросил, устал ли я",
      },
      {
        left: "",
        answers: ["She asked where I lived"],
        right: "",
        explanation: "Она спросила, где я живу",
      },
      {
        left: "",
        answers: ["He asked what I was doing"],
        right: "",
        explanation: "Он спросил, что я делаю",
      },
      {
        left: "",
        answers: [
          "She asked if I could help her",
          "She asked whether I could help her",
        ],
        right: "",
        explanation: "Она спросила, могу ли я ей помочь",
      },
      {
        left: "",
        answers: ["He asked when I would come"],
        right: "",
        explanation: "Он спросил, когда я приду",
      },
      {
        left: "",
        answers: [
          "She asked if I had finished my homework",
          "She asked whether I had finished my homework",
        ],
        right: "",
        explanation: "Она спросила, закончил ли я домашнюю работу",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 4: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи вопросы на английский
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке с косвенным вопросом. Переведи
              его на английский!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: IF/WHETHER для Yes/No, WH-слова для специальных, прямой
              порядок слов, backshift!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Он спросил, устал ли я.
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
                2️⃣ Она спросила, где я живу.
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
                3️⃣ Он спросил, что я делаю.
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
                4️⃣ Она спросила, могу ли я ей помочь.
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
                5️⃣ Он спросил, когда я приду.
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
                6️⃣ Она спросила, закончил ли я домашнюю работу.
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
        left: "1. He asked",
        answers: ["if I was tired", "whether I was tired"],
        right: '(Direct: "Are you tired?")',
        explanation: "Yes/No вопрос → if/whether + прямой порядок",
      },
      {
        left: "2. She asked",
        answers: ["where I lived"],
        right: '(Direct: "Where do you live?")',
        explanation: "WH-вопрос → where + прямой порядок, убираем DO",
      },
      {
        left: "3. He asked",
        answers: ["what I was doing"],
        right: '(Direct: "What are you doing?")',
        explanation: "Present Continuous → Past Continuous",
      },
      {
        left: "4. She asked",
        answers: ["if I could help her", "whether I could help her"],
        right: '(Direct: "Can you help me?")',
        explanation: "Can → Could, you → I, me → her",
      },
      {
        left: "5. He asked",
        answers: ["when I had arrived"],
        right: '(Direct: "When did you arrive?")',
        explanation: "Past Simple → Past Perfect, убираем DID",
      },
      {
        left: "6. She asked",
        answers: ["if I would come", "whether I would come"],
        right: '(Direct: "Will you come?")',
        explanation: "Will → Would",
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
              6 вопросов на **ВСЕ аспекты Reported Questions**. Преобразуй
              прямые вопросы в косвенные!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Преобразуй прямые вопросы в косвенные."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Reported Questions! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>
                ✅ Преобразовывать прямые вопросы в косвенные (Yes/No и WH)
              </li>
              <li>✅ Правильно использовать IF/WHETHER для Yes/No вопросов</li>
              <li>✅ Использовать WH-слова для специальных вопросов</li>
              <li>✅ Применять ПРЯМОЙ порядок слов (главная трудность!)</li>
              <li>✅ Убирать DO/DOES/DID из косвенных вопросов</li>
              <li>✅ Делать backshift (сдвиг времён)</li>
              <li>✅ Менять местоимения и указатели</li>
              <li>✅ Ставить ТОЧКУ, а не вопросительный знак</li>
              <li>✅ Использовать WONDER для косвенных вопросов</li>
              <li>✅ Избегать всех типичных ошибок</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Vocabulary — 15 важных слов">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              Полезные глаголы для вопросов
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  1. ask — спрашивать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>asked</strong> if I was ready.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  2. wonder — интересоваться
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>wondered</strong> where I lived.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  3. inquire — справляться, узнавать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>inquired</strong> if I needed help.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  4. question — допрашивать, расспрашивать
                </p>
                <p className="text-xs text-zinc-600">
                  They <strong>questioned</strong> him about the incident.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  5. request — запрашивать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>requested</strong> that he come early.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  6. demand — требовать (ответа)
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>demanded</strong> to know what happened.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  7. enquire — справляться (UK)
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>enquired</strong> about the price.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  8. query — задавать вопрос
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>queried</strong> whether it was correct.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  9. quiz — расспрашивать
                </p>
                <p className="text-xs text-zinc-600">
                  They <strong>quizzed</strong> him about his plans.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  10. probe — зондировать, выяснять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>probed</strong> into his background.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  11. interrogate — допрашивать
                </p>
                <p className="text-xs text-zinc-600">
                  Police <strong>interrogated</strong> the suspect.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  12. investigate — расследовать
                </p>
                <p className="text-xs text-zinc-600">
                  They <strong>investigated</strong> what had happened.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  13. check — проверять, уточнять
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>checked</strong> if the door was locked.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  14. clarify — уточнять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>clarified</strong> what he meant.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  15. verify — проверять, удостоверяться
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>verified</strong> whether it was true.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center text-lg">
              Reported Questions — Главные правила
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-blue-900 mb-2">
                  Yes/No Questions
                </h5>
                <div className="text-sm space-y-1">
                  <p>• Используй IF/WHETHER</p>
                  <p>• Прямой порядок слов</p>
                  <p>• Убери DO/DOES/DID</p>
                  <p>• Точка в конце (НЕ ?)</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2">
                  WH-Questions
                </h5>
                <div className="text-sm space-y-1">
                  <p>• WH-слово остаётся</p>
                  <p>• Прямой порядок слов</p>
                  <p>• Убери DO/DOES/DID</p>
                  <p>• Точка в конце (НЕ ?)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mt-4">
            <h4 className="font-bold text-amber-900 mb-2 text-center">
              🔑 Ключевые правила:
            </h4>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • <strong>ПРЯМОЙ порядок слов</strong> — как в утверждении!
              </li>
              <li>
                • <strong>IF/WHETHER</strong> для Yes/No вопросов
              </li>
              <li>
                • <strong>WH-слова</strong> остаются для специальных вопросов
              </li>
              <li>
                • <strong>Убирай DO/DOES/DID</strong> и меняй форму глагола
              </li>
              <li>
                • <strong>Backshift</strong> — времена сдвигаются назад
              </li>
              <li>
                • <strong>ТОЧКА</strong> в конце (НЕ вопросительный знак!)
              </li>
              <li>• Местоимения и указатели меняются</li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
