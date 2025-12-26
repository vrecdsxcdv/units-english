"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ReportedCommands({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📢 Reported Commands — Команды в косвенной речи">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">
              Как передать команды, приказы и просьбы?
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              **Reported Commands** — это способ пересказать команду, приказ,
              просьбу или совет, используя структуру с **TO + infinitive**.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">
                  📣 Direct Command (Прямая команда)
                </h4>
                <p className="text-sm mb-2">
                  "Close the door<strong>!</strong>"
                </p>
                <p className="text-xs text-zinc-600">Прямая команда (с "!")</p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2">
                  💭 Reported Command (Косвенная команда)
                </h4>
                <p className="text-sm mb-2">
                  He told me <strong>to close</strong> the door
                  <strong>.</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Косвенная команда (to + infinitive)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
              <p className="font-bold text-amber-900 mb-2">
                💡 Типы команд в английском:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>• **Orders** (приказы) — сильные команды</li>
                <li>• **Requests** (просьбы) — вежливые команды</li>
                <li>• **Advice** (советы) — рекомендации</li>
                <li>• **Warnings** (предупреждения) — предостережения</li>
                <li>• **Invitations** (приглашения) — приглашения</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-5 border-2 border-rose-300">
              <h4 className="font-bold text-rose-900 mb-3">
                🔄 Главная формула:
              </h4>
              <div className="bg-white rounded-lg p-4">
                <p className="text-lg font-bold text-center text-rose-900 mb-2">
                  TELL/ASK/ORDER + object + (NOT) + TO + infinitive
                </p>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    • <strong>TELL/ASK me/him/her</strong> — кому (ОБЯЗАТЕЛЬНО!)
                  </p>
                  <p>
                    • <strong>TO + infinitive</strong> — что делать
                  </p>
                  <p>
                    • <strong>NOT TO</strong> — для отрицательных команд
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "Open the window<strong>!</strong>"
              </p>
              <p className="text-sm text-orange-700">
                💭 She told me <strong>to open</strong> the window
                <strong>.</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "Don't touch that<strong>!</strong>"
              </p>
              <p className="text-sm text-red-700">
                💭 He told me <strong>not to touch</strong> that
                <strong>.</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">📣 "Please help me."</p>
              <p className="text-sm text-blue-700">
                💭 She asked me <strong>to help</strong> her<strong>.</strong>
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-zinc-200">
              <p className="text-sm mb-2">
                📣 "Be careful<strong>!</strong>"
              </p>
              <p className="text-sm text-green-700">
                💭 He warned me <strong>to be</strong> careful
                <strong>.</strong>
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
        <Section title="📐 Структура Reported Commands">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              Verb + Object + TO + Infinitive
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200 mb-4">
              <h4 className="font-semibold text-indigo-900 mb-3">
                Основная структура:
              </h4>
              <div className="bg-indigo-50 rounded p-4">
                <p className="text-sm font-semibold text-indigo-900 mb-1">
                  <span className="text-green-700">She</span>{" "}
                  <span className="text-red-700">told</span>{" "}
                  <span className="text-blue-700">me</span>{" "}
                  <span className="text-purple-700">to close</span>{" "}
                  <span className="text-orange-700">the door</span>
                  <span className="text-zinc-900">.</span>
                </p>
                <div className="text-xs text-zinc-600 mt-3 space-y-1">
                  <p>
                    • <span className="text-green-700">She</span> — кто дал
                    команду
                  </p>
                  <p>
                    • <span className="text-red-700">told</span> — глагол
                    (приказал/попросил)
                  </p>
                  <p>
                    • <span className="text-blue-700">me</span> — кому
                    (ОБЯЗАТЕЛЬНО!)
                  </p>
                  <p>
                    • <span className="text-purple-700">to close</span> — TO +
                    инфинитив
                  </p>
                  <p>
                    • <span className="text-orange-700">the door</span> — объект
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300 mb-4">
              <h4 className="font-bold text-red-900 mb-3 text-center text-lg">
                ⚔️ TELL vs ASK в командах
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-900 mb-2">
                    TELL — приказывать
                  </h5>
                  <div className="space-y-2 text-sm">
                    <p className="mb-1">
                      ✅ He <strong>told me to</strong> close the door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      TELL — для приказов, более авторитетно
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                  <h5 className="font-semibold text-blue-900 mb-2">
                    ASK — просить
                  </h5>
                  <div className="space-y-2 text-sm">
                    <p className="mb-1">
                      ✅ She <strong>asked me to</strong> help her.
                    </p>
                    <p className="text-xs text-zinc-600">
                      ASK — для просьб, более вежливо
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 rounded-lg p-4 border-2 border-amber-400">
                <p className="font-bold text-amber-900 mb-2 text-center">
                  💡 Как выбрать TELL или ASK?
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    • Если в прямой речи есть <strong>"Please"</strong> →
                    используй <strong>ASK</strong>
                  </p>
                  <p>
                    • Если это приказ или команда → используй{" "}
                    <strong>TELL</strong>
                  </p>
                  <p className="mt-3 text-xs">
                    📣 "Please help me." → 💭 She <strong>asked</strong> me to
                    help her.
                  </p>
                  <p className="text-xs">
                    📣 "Close the door!" → 💭 He <strong>told</strong> me to
                    close the door.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-4">
              🔄 Отрицательные команды — NOT TO
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Для отрицательных команд ("Don't...") используем структуру{" "}
              <strong>NOT TO + infinitive</strong>
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="text-sm mb-2">
                  📣 Direct: "<strong>Don't</strong> touch that!"
                </p>
                <p className="text-sm text-red-700">
                  💭 Reported: He told me <strong>not to touch</strong> that.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Don't + V1 → NOT TO + infinitive
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <p className="text-sm mb-2">
                  📣 Direct: "<strong>Don't</strong> be late!"
                </p>
                <p className="text-sm text-orange-700">
                  💭 Reported: She told me <strong>not to be</strong> late.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Don't be → NOT TO BE
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <p className="text-sm mb-2">
                  📣 Direct: "<strong>Don't</strong> forget!"
                </p>
                <p className="text-sm text-purple-700">
                  💭 Reported: He told me <strong>not to forget</strong>.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Don't forget → NOT TO FORGET
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
            <p className="font-bold text-red-900 mb-3 text-center text-lg">
              ❌ КРИТИЧЕСКАЯ ОШИБКА!
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm text-red-700 mb-2">
                  ❌ He told <strong>to close</strong> the door. (БЕЗ me/him!)
                </p>
                <p className="text-xs text-zinc-600 mb-3">
                  Забыли дополнение (me/him/her) — ОШИБКА!
                </p>
                <p className="text-sm text-green-700">
                  ✅ He told <strong>me to close</strong> the door.
                </p>
                <p className="text-xs text-zinc-600">
                  После TELL/ASK ОБЯЗАТЕЛЬНО: me/him/her/us/them
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
        <Section title="🎯 Глаголы для Reported Commands">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Различные глаголы для разных типов команд
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вместо TELL/ASK можно использовать множество других глаголов,
              которые точнее передают смысл команды.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
              <h4 className="font-semibold text-red-900 mb-2 text-lg">
                📣 ORDER — приказывать (сильно)
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Leave now!"</p>
                <p className="text-sm text-red-700">
                  💭 The officer <strong>ordered</strong> me to leave.
                </p>
                <p className="text-xs text-zinc-600">Приказ (авторитетно)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                🙏 REQUEST — запрашивать (формально)
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Please send the report."</p>
                <p className="text-sm text-blue-700">
                  💭 The manager <strong>requested</strong> me to send the
                  report.
                </p>
                <p className="text-xs text-zinc-600">Формальная просьба</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2 text-lg">
                💡 ADVISE — советовать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "See a doctor."</p>
                <p className="text-sm text-green-700">
                  💭 She <strong>advised</strong> me to see a doctor.
                </p>
                <p className="text-xs text-zinc-600">Совет, рекомендация</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                ⚠️ WARN — предупреждать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Don't go there!"</p>
                <p className="text-sm text-orange-700">
                  💭 He <strong>warned</strong> me not to go there.
                </p>
                <p className="text-xs text-zinc-600">
                  Предупреждение об опасности
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                🔔 REMIND — напоминать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Don't forget to call."</p>
                <p className="text-sm text-purple-700">
                  💭 She <strong>reminded</strong> me to call.
                </p>
                <p className="text-xs text-zinc-600">Напоминание</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-400">
              <h4 className="font-semibold text-pink-900 mb-2 text-lg">
                🎉 INVITE — приглашать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Come to my party!"</p>
                <p className="text-sm text-pink-700">
                  💭 He <strong>invited</strong> me to come to his party.
                </p>
                <p className="text-xs text-zinc-600">Приглашение</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2 text-lg">
                💪 ENCOURAGE — подбадривать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Try again!"</p>
                <p className="text-sm text-teal-700">
                  💭 She <strong>encouraged</strong> me to try again.
                </p>
                <p className="text-xs text-zinc-600">Поощрение, ободрение</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
              <h4 className="font-semibold text-rose-900 mb-2 text-lg">
                🚫 FORBID — запрещать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Don't smoke here!"</p>
                <p className="text-sm text-rose-700">
                  💭 They <strong>forbade</strong> us to smoke there.
                </p>
                <p className="text-xs text-zinc-600">Строгий запрет</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-900 mb-2 text-lg">
                🙌 PERSUADE — убеждать
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Buy this car!"</p>
                <p className="text-sm text-indigo-700">
                  💭 The salesman <strong>persuaded</strong> me to buy the car.
                </p>
                <p className="text-xs text-zinc-600">Убеждение</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400">
              <h4 className="font-semibold text-cyan-900 mb-2 text-lg">
                🤝 BEG — умолять
              </h4>
              <div className="space-y-2">
                <p className="text-sm">📣 "Please don't go!"</p>
                <p className="text-sm text-cyan-700">
                  💭 She <strong>begged</strong> me not to go.
                </p>
                <p className="text-xs text-zinc-600">Умоление, мольба</p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "He told me to close the door",
          "He told me to close the door.",
        ],
        right: "",
        explanation: 'Direct: "Close the door!" → told me TO close',
      },
      {
        left: "",
        answers: ["She asked me to help her", "She asked me to help her."],
        right: "",
        explanation: 'Direct: "Please help me." → asked me TO help',
      },
      {
        left: "",
        answers: ["He told me not to be late", "He told me not to be late."],
        right: "",
        explanation: 'Direct: "Don\'t be late!" → told me NOT TO be late',
      },
      {
        left: "",
        answers: [
          "She advised me to see a doctor",
          "She advised me to see a doctor.",
        ],
        right: "",
        explanation: 'Direct: "See a doctor." → advised me TO see',
      },
      {
        left: "",
        answers: [
          "He warned me not to go there",
          "He warned me not to go there.",
        ],
        right: "",
        explanation: 'Direct: "Don\'t go there!" → warned me NOT TO go',
      },
      {
        left: "",
        answers: [
          "She reminded me to call",
          "She reminded me to call.",
          "She reminded me to call her",
          "She reminded me to call her.",
        ],
        right: "",
        explanation: 'Direct: "Don\'t forget to call!" → reminded me TO call',
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Преобразуй команды">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-300 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              📣 → 💭 Преобразуй прямые команды в косвенные
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дана прямая команда. Напиши её в косвенной речи, используя
              правильный глагол и структуру с <strong>TO + infinitive</strong>
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: глагол + me/him/her + (not) to + infinitive
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Direct: "Close the door!" (He told...)
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
                2️⃣ Direct: "Please help me." (She asked...)
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
                3️⃣ Direct: "Don't be late!" (He told...)
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
                4️⃣ Direct: "See a doctor." (She advised...)
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
                5️⃣ Direct: "Don't go there!" (He warned...)
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
                6️⃣ Direct: "Don't forget to call!" (She reminded...)
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

  if (step === 5) {
    return (
      <>
        <Section title="🔍 Особые случаи: LET'S, WHY DON'T, SHALL">
          <div className="bg-violet-50 rounded-lg p-6 border-2 border-violet-300 mb-4">
            <h3 className="text-xl font-bold text-violet-900 mb-4">
              Как передать предложения и приглашения?
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                  LET'S → SUGGEST + -ING
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Let's go to the cinema."</p>
                  <p className="text-sm text-blue-700">
                    💭 She <strong>suggested going</strong> to the cinema.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Let's → suggest + -ING (без TO!)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2 text-lg">
                  WHY DON'T YOU → SUGGEST + should/could
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Why don't you rest?"</p>
                  <p className="text-sm text-green-700">
                    💭 She <strong>suggested that I should rest</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Why don't you → suggest + should/could
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                  SHALL WE → SUGGEST + -ING
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Shall we meet tomorrow?"</p>
                  <p className="text-sm text-purple-700">
                    💭 He <strong>suggested meeting</strong> the next day.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Shall we → suggest + -ING
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                  WOULD YOU LIKE → INVITE + TO
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Would you like to come?"</p>
                  <p className="text-sm text-orange-700">
                    💭 She <strong>invited me to come</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Would you like → invite + TO
                  </p>
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
        <Section title="⚠️ Типичные ошибки в Reported Commands">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Самые частые ошибки и как их избежать
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 1: Забыли объект (me/him/her)
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He told <strong>to close</strong> the door.
                    </p>
                    <p className="text-xs text-zinc-600">Забыли "me"!</p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He told <strong>me to close</strong> the door.
                    </p>
                    <p className="text-xs text-zinc-600">Объект ОБЯЗАТЕЛЕН!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 2: Забыли TO перед глаголом
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She asked me <strong>help</strong> her.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Забыли TO перед help!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She asked me <strong>to help</strong> her.
                    </p>
                    <p className="text-xs text-zinc-600">
                      TO + infinitive обязательно!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 3: NOT в неправильном месте
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He told me to <strong>not go</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      NOT должен быть ПЕРЕД TO!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He told me <strong>not to go</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      NOT TO + infinitive ✅
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 4: Используем SAY вместо TELL
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ He <strong>said me to</strong> close the door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      SAY не используется с TO + infinitive!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ He <strong>told me to</strong> close the door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Для команд используй TELL/ASK, не SAY!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  ❌ Ошибка 5: Использовали -ING вместо TO
                </p>
                <div className="space-y-2">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm">
                      ❌ She told me <strong>closing</strong> the door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      После TELL используем TO, не -ING!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm">
                      ✅ She told me <strong>to close</strong> the door.
                    </p>
                    <p className="text-xs text-zinc-600">
                      TELL + object + TO + infinitive
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
                • <strong>В русском:</strong> "Он сказал мне закрыть дверь"
              </p>
              <p>
                • <strong>В английском:</strong> "He told me TO close the door"
                — TO обязательно!
              </p>
              <p className="mt-3">
                • <strong>В русском:</strong> порядок может быть разным
              </p>
              <p>
                • <strong>В английском:</strong> СТРОГИЙ порядок: verb + object
                + (not) to + infinitive
              </p>
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
        answers: [
          "He told me to close the door",
          "He told me to close the door.",
        ],
        right: "",
        explanation: 'Исправлено: добавили "me", "told to" → "told me to"',
      },
      {
        left: "",
        answers: ["She asked me to help her", "She asked me to help her."],
        right: "",
        explanation: 'Исправлено: добавили "to", "help" → "to help"',
      },
      {
        left: "",
        answers: ["He told me not to go", "He told me not to go."],
        right: "",
        explanation: 'Исправлено: "to not" → "not to" (NOT перед TO!)',
      },
      {
        left: "",
        answers: [
          "She told me to close the window",
          "She told me to close the window.",
        ],
        right: "",
        explanation: 'Исправлено: "said me" → "told me" (не SAY, а TELL!)',
      },
      {
        left: "",
        answers: [
          "He advised me to see a doctor",
          "He advised me to see a doctor.",
        ],
        right: "",
        explanation: 'Исправлено: "seeing" → "to see" (TO + infinitive!)',
      },
      {
        left: "",
        answers: [
          "She warned me not to touch that",
          "She warned me not to touch that.",
        ],
        right: "",
        explanation: 'Исправлено: добавили "me", "not touch" → "not to touch"',
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
              Каждое предложение содержит ОШИБКИ в косвенной команде. Напиши
              ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: объект (me/him/her), TO, порядок NOT, глагол!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                He told <strong className="text-red-700">to close</strong> the
                door.
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
                She asked me <strong className="text-red-700">help</strong> her.
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
                He told me <strong className="text-red-700">to not go</strong>.
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
                She <strong className="text-red-700">said me to</strong> close
                the window.
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
                He advised me <strong className="text-red-700">seeing</strong> a
                doctor.
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
                She warned <strong className="text-red-700">not touch</strong>{" "}
                that.
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

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "",
        answers: [
          "He told me to close the door",
          "He told me to close the door.",
        ],
        right: "",
        explanation: "Он сказал мне закрыть дверь",
      },
      {
        left: "",
        answers: ["She asked me to help her", "She asked me to help her."],
        right: "",
        explanation: "Она попросила меня помочь ей",
      },
      {
        left: "",
        answers: ["He told me not to be late", "He told me not to be late."],
        right: "",
        explanation: "Он сказал мне не опаздывать",
      },
      {
        left: "",
        answers: [
          "She advised me to see a doctor",
          "She advised me to see a doctor.",
        ],
        right: "",
        explanation: "Она посоветовала мне пойти к врачу",
      },
      {
        left: "",
        answers: [
          "He warned me not to go there",
          "He warned me not to go there.",
        ],
        right: "",
        explanation: "Он предупредил меня не ходить туда",
      },
      {
        left: "",
        answers: [
          "She invited me to come to her party",
          "She invited me to come to her party.",
          "She invited me to her party",
          "She invited me to her party.",
        ],
        right: "",
        explanation: "Она пригласила меня на свою вечеринку",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-300 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи команды на английский
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке с косвенной командой. Переведи
              его на английский!
            </p>
            <p className="text-xs text-zinc-600">
              Не забудь: verb + object + (not) to + infinitive
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Он сказал мне закрыть дверь.
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
                2️⃣ Она попросила меня помочь ей.
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
                3️⃣ Он сказал мне не опаздывать.
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
                4️⃣ Она посоветовала мне пойти к врачу.
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
                5️⃣ Он предупредил меня не ходить туда.
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
                6️⃣ Она пригласила меня на свою вечеринку.
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
        <Section title="📚 Категории команд">
          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-6 border-2 border-sky-300 mb-4">
            <h3 className="text-xl font-bold text-sky-900 mb-4">
              Глаголы по типам команд
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 border-2 border-red-200">
              <h4 className="font-bold text-red-900 mb-3 text-center">
                📣 Приказы / Orders
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>order</strong> — приказывать
                </p>
                <p>
                  • <strong>command</strong> — командовать
                </p>
                <p>
                  • <strong>tell</strong> — говорить (приказывать)
                </p>
                <p>
                  • <strong>instruct</strong> — инструктировать
                </p>
                <p>
                  • <strong>forbid</strong> — запрещать
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 text-center">
                🙏 Просьбы / Requests
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>ask</strong> — просить
                </p>
                <p>
                  • <strong>request</strong> — запрашивать
                </p>
                <p>
                  • <strong>beg</strong> — умолять
                </p>
                <p>
                  • <strong>implore</strong> — молить
                </p>
                <p>
                  • <strong>urge</strong> — настаивать
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-200">
              <h4 className="font-bold text-green-900 mb-3 text-center">
                💡 Советы / Advice
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>advise</strong> — советовать
                </p>
                <p>
                  • <strong>recommend</strong> — рекомендовать
                </p>
                <p>
                  • <strong>suggest</strong> — предлагать
                </p>
                <p>
                  • <strong>encourage</strong> — подбадривать
                </p>
                <p>
                  • <strong>persuade</strong> — убеждать
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 text-center">
                ⚠️ Предупреждения / Warnings
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>warn</strong> — предупреждать
                </p>
                <p>
                  • <strong>caution</strong> — предостерегать
                </p>
                <p>
                  • <strong>alert</strong> — извещать об опасности
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
              <h4 className="font-bold text-purple-900 mb-3 text-center">
                🔔 Напоминания / Reminders
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>remind</strong> — напоминать
                </p>
                <p>
                  • <strong>prompt</strong> — побуждать
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-pink-200">
              <h4 className="font-bold text-pink-900 mb-3 text-center">
                🎉 Приглашения / Invitations
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • <strong>invite</strong> — приглашать
                </p>
                <p>
                  • <strong>offer</strong> — предлагать
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="💡 Тонкости и нюансы">
          <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300 mb-4">
            <h3 className="text-xl font-bold text-amber-900 mb-4">
              Важные детали Reported Commands
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2 text-lg">
                  1️⃣ Изменение местоимений
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Help me!"</p>
                  <p className="text-sm text-blue-700">
                    💭 She asked me to help <strong>her</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    me → her (меняем местоимение!)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2 text-lg">
                  2️⃣ Изменение указателей времени
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Call me tomorrow!"</p>
                  <p className="text-sm text-green-700">
                    💭 He told me to call him <strong>the next day</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">
                    tomorrow → the next day, me → him
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2 text-lg">
                  3️⃣ Изменение указателей места
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">📣 "Come here!"</p>
                  <p className="text-sm text-purple-700">
                    💭 She told me to come <strong>there</strong>.
                  </p>
                  <p className="text-xs text-zinc-600">here → there</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2 text-lg">
                  4️⃣ "Please" = ASK
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">
                    📣 "<strong>Please</strong> wait."
                  </p>
                  <p className="text-sm text-orange-700">
                    💭 She <strong>asked</strong> me to wait.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Please → используем ASK, не TELL
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-rose-400">
                <h4 className="font-semibold text-rose-900 mb-2 text-lg">
                  5️⃣ Восклицательный знак "!" = TELL
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">
                    📣 "Go away<strong>!</strong>"
                  </p>
                  <p className="text-sm text-rose-700">
                    💭 He <strong>told</strong> me to go away.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Восклицательный знак → TELL (приказ)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "1. He told",
        answers: ["me to close the door"],
        right: '(Direct: "Close the door!")',
        explanation: "Приказ → told me TO close",
      },
      {
        left: "2. She asked",
        answers: ["me to help her"],
        right: '(Direct: "Please help me.")',
        explanation: "Просьба с Please → asked me TO help",
      },
      {
        left: "3. He told",
        answers: ["me not to be late"],
        right: '(Direct: "Don\'t be late!")',
        explanation: "Отрицательная команда → told me NOT TO be",
      },
      {
        left: "4. She advised",
        answers: ["me to see a doctor"],
        right: '(Direct: "See a doctor.")',
        explanation: "Совет → advised me TO see",
      },
      {
        left: "5. He warned",
        answers: ["me not to go there"],
        right: '(Direct: "Don\'t go there!")',
        explanation: "Предупреждение → warned me NOT TO go",
      },
      {
        left: "6. She invited",
        answers: ["me to come to her party", "me to her party"],
        right: '(Direct: "Come to my party!")',
        explanation: "Приглашение → invited me TO come",
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
              6 команд на **ВСЕ аспекты Reported Commands**. Преобразуй прямые
              команды в косвенные!
            </p>
            <p className="text-sm font-semibold text-yellow-900">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Преобразуй прямые команды в косвенные."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили Reported Commands! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>✅ Преобразовывать команды, приказы и просьбы</li>
              <li>✅ Правильно использовать TO + infinitive</li>
              <li>✅ Использовать NOT TO для отрицательных команд</li>
              <li>✅ Выбирать правильный глагол (tell/ask/order/advise)</li>
              <li>✅ Обязательно ставить объект (me/him/her/us/them)</li>
              <li>✅ Различать TELL (приказы) и ASK (просьбы)</li>
              <li>✅ Менять местоимения и указатели</li>
              <li>✅ Использовать 15+ различных глаголов для команд</li>
              <li>✅ Избегать всех типичных ошибок</li>
            </ul>
          </div>
        </Section>

        <Section title="📚 Vocabulary — 15 глаголов команд">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              Полезные глаголы для команд
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  1. tell — говорить, приказывать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>told</strong> me to go.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  2. ask — просить
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>asked</strong> me to help.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  3. order — приказывать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>ordered</strong> us to leave.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  4. advise — советовать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>advised</strong> me to rest.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  5. warn — предупреждать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>warned</strong> me not to go.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  6. remind — напоминать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>reminded</strong> me to call.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  7. invite — приглашать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>invited</strong> me to come.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  8. encourage — подбадривать
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>encouraged</strong> me to try.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  9. forbid — запрещать
                </p>
                <p className="text-xs text-zinc-600">
                  They <strong>forbade</strong> us to smoke.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  10. persuade — убеждать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>persuaded</strong> me to buy it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  11. beg — умолять
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>begged</strong> me to stay.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  12. command — командовать
                </p>
                <p className="text-xs text-zinc-600">
                  The general <strong>commanded</strong> them to attack.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  13. request — запрашивать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>requested</strong> us to wait.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  14. urge — настоятельно просить
                </p>
                <p className="text-xs text-zinc-600">
                  She <strong>urged</strong> me to hurry.
                </p>
              </div>

              <div className="bg-white rounded-lg p-3 border-l-4 border-indigo-400">
                <p className="text-sm font-semibold text-indigo-900">
                  15. instruct — инструктировать
                </p>
                <p className="text-xs text-zinc-600">
                  He <strong>instructed</strong> me to follow him.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3 text-center text-lg">
              Reported Commands — Главные правила
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-indigo-900 mb-2">
                  Основная формула:
                </h5>
                <p className="text-center font-bold text-lg text-indigo-900">
                  Verb + Object + (NOT) + TO + Infinitive
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-blue-900 mb-1">
                    Положительные:
                  </p>
                  <p className="text-sm">He told me TO close the door.</p>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-red-900 mb-1">
                    Отрицательные:
                  </p>
                  <p className="text-sm">He told me NOT TO go there.</p>
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
                • <strong>Объект ОБЯЗАТЕЛЕН</strong> — всегда me/him/her/us/them
              </li>
              <li>
                • <strong>TO + infinitive</strong> — НЕ -ING!
              </li>
              <li>
                • <strong>NOT TO</strong> для отрицания — NOT перед TO!
              </li>
              <li>
                • <strong>TELL</strong> для приказов, <strong>ASK</strong> для
                просьб
              </li>
              <li>
                • <strong>Please</strong> в прямой речи → ASK в косвенной
              </li>
              <li>
                • <strong>Don't</strong> → NOT TO
              </li>
              <li>• Меняй местоимения и указатели времени/места</li>
            </ul>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
