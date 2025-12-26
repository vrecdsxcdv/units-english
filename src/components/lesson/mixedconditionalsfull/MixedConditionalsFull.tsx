"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function MixedConditionalsFull({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <>
      <UiSection title="🌀 Mixed Conditionals — Смешанные условия">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-10 mb-8 border-4 border-purple-300 shadow-xl">
          <div className="text-8xl mb-6 text-center animate-pulse">🤯</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Time Travel Grammar
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 text-center font-semibold">
            Представь: ты можешь смешивать прошлое с настоящим в одном предложении! 🚀
          </p>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-purple-300 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong className="text-purple-700">Mixed Conditionals</strong> — это когда условие в одном времени,
              а результат в другом. Это как машина времени в грамматике!
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg p-5 border-2 border-pink-300">
              <p className="text-xl font-bold text-gray-900 mb-2">
                If I had studied harder, I would be a doctor now.
              </p>
              <p className="text-base text-gray-700">
                🇷🇺 Если бы я учился усерднее (в прошлом), я был бы врачом сейчас (в настоящем).
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-300">
              <div className="text-4xl mb-2">⏪</div>
              <p className="font-bold text-blue-800 mb-2">Прошлое условие</p>
              <p className="text-sm text-gray-700">If I had done X...</p>
              <p className="text-xs text-gray-600 mt-1">(Past Perfect)</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300">
              <div className="text-4xl mb-2">⏩</div>
              <p className="font-bold text-green-800 mb-2">Настоящий результат</p>
              <p className="text-sm text-gray-700">...I would be Y now</p>
              <p className="text-xs text-gray-600 mt-1">(Would + infinitive)</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-8 mb-6 border-4 border-yellow-300">
          <div className="text-6xl mb-4 text-center">💡</div>
          <h3 className="text-2xl font-black text-center mb-4 text-orange-700">
            Зачем это нужно?
          </h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border-2 border-orange-300">
              <p className="font-bold text-gray-800 mb-2">😢 Сожаления о выборе в прошлом</p>
              <p className="text-gray-700 text-sm">
                &ldquo;If I had bought Bitcoin in 2010, I would be rich now.&rdquo;
              </p>
              <p className="text-xs text-gray-600 mt-1">
                🇷🇺 Если бы я купил Bitcoin в 2010, я был бы богат сейчас.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-orange-300">
              <p className="font-bold text-gray-800 mb-2">🎓 Объяснение текущей ситуации</p>
              <p className="text-gray-700 text-sm">
                &ldquo;If I hadn't skipped classes, I would understand this topic now.&rdquo;
              </p>
              <p className="text-xs text-gray-600 mt-1">
                🇷🇺 Если бы я не прогуливал занятия, я бы понимал эту тему сейчас.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-orange-300">
              <p className="font-bold text-gray-800 mb-2">🔄 Постоянное качество влияет на прошлое</p>
              <p className="text-gray-700 text-sm">
                &ldquo;If I weren't so lazy, I would have finished this yesterday.&rdquo;
              </p>
              <p className="text-xs text-gray-600 mt-1">
                🇷🇺 Если бы я не был таким ленивым, я бы закончил это вчера.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300">
          <div className="text-5xl mb-3">🎯</div>
          <p className="text-lg font-bold text-indigo-800 mb-3">Два типа Mixed Conditionals:</p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <p className="font-bold text-purple-700 mb-1">Type 1: Past → Present</p>
              <p className="text-sm text-gray-700 mb-1">
                If + Past Perfect, would/could/might + infinitive (now)
              </p>
              <p className="text-xs text-gray-600 italic">
                Прошлое действие влияет на настоящее
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <p className="font-bold text-pink-700 mb-1">Type 2: Present → Past</p>
              <p className="text-sm text-gray-700 mb-1">
                If + Past Simple, would/could/might + have + V3
              </p>
              <p className="text-xs text-gray-600 italic">
                Постоянное качество влияет на прошлое событие
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step2() {
  return (
    <>
      <UiSection title="⏪➡️ Type 1: Past Condition → Present Result">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-8 mb-8 border-4 border-purple-400">
          <div className="text-7xl mb-4 text-center">🕰️</div>
          <h2 className="text-2xl font-black text-center mb-6 text-purple-800">
            Прошлое определяет настоящее
          </h2>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-purple-300">
            <p className="text-xl font-bold text-purple-700 mb-3">Формула:</p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-lg font-mono text-gray-800 mb-2">
                If + subject + <strong className="text-blue-700">had + V3</strong>,
                subject + <strong className="text-green-700">would/could/might + V1</strong> (now)
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Используем, когда <strong>прошлое действие</strong> (или его отсутствие)
              объясняет <strong>текущую ситуацию</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-4 border-pink-300">
            <div className="text-5xl mb-3">📱</div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">Соцсети и лайфстайл</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had started my YouTube channel earlier, I would be famous now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я запустил свой YouTube-канал раньше, я был бы знаменит сейчас.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 mt-3 border border-pink-200">
                  <p className="text-xs text-gray-600">
                    ⏪ <strong>Past:</strong> didn't start earlier &nbsp;&nbsp;
                    ⏩ <strong>Now:</strong> not famous
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I hadn't deleted that viral TikTok, I would have millions of followers now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я не удалил тот вирусный ТикТок, у меня было бы миллионы фолловеров сейчас.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 mt-3 border border-pink-200">
                  <p className="text-xs text-gray-600">
                    ⏪ <strong>Past:</strong> deleted the video &nbsp;&nbsp;
                    ⏩ <strong>Now:</strong> not many followers
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had learned to edit videos properly, I would be a content creator now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я научился нормально монтировать видео, я был бы контент-креатором сейчас.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 mt-3 border border-pink-200">
                  <p className="text-xs text-gray-600">
                    ⏪ <strong>Past:</strong> didn't learn editing &nbsp;&nbsp;
                    ⏩ <strong>Now:</strong> not a content creator
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">🎮</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Гейминг и скиллы</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had practiced more in 2020, I would be a pro player now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я больше практиковался в 2020, я был бы про-игроком сейчас.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I hadn't spent all my money on skins, I would have a better PC now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я не потратил все деньги на скины, у меня был бы нормальный ПК сейчас.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had joined a team back then, I would be competing in tournaments now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я вступил в команду тогда, я участвовал бы в турнирах сейчас.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3">💰</div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Деньги и карьера</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had invested in crypto in 2015, I would be a millionaire now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я инвестировал в крипту в 2015, я был бы миллионером сейчас.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had finished university, I would have a stable job now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я закончил универ, у меня была бы стабильная работа сейчас.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had learned programming earlier, I could be working remotely now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я раньше выучил программирование, я мог бы работать удалённо сейчас.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-4 border-orange-300">
            <div className="text-5xl mb-3">❤️</div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">Отношения и дружба</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I hadn't ghosted her, we would still be together now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я не заигнорил её, мы были бы до сих пор вместе.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had told him the truth back then, he would trust me now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я сказал ему правду тогда, он доверял бы мне сейчас.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had moved to the same city as my friends, I wouldn't be lonely now.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я переехал в тот же город, что и мои друзья, я не был бы одинок сейчас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "If I",
      answers: ["had started", "had begun"],
      right: "(start) working out last year, I would be fit now.",
    },
    {
      left: "If she",
      answers: ["had saved", "had been saving"],
      right: "(save) money, she would have enough for a new iPhone now.",
    },
    {
      left: "If they",
      answers: ["hadn't broken up", "hadnt broken up"],
      right: "(not break up), they would be married now.",
    },
    {
      left: "If I",
      answers: ["had learned", "had learnt"],
      right: "(learn) Spanish in school, I could travel to Spain now.",
    },
    {
      left: "If he",
      answers: ["hadn't quit", "hadnt quit"],
      right: "(not quit) his job, he would be earning good money now.",
    },
    {
      left: "If we",
      answers: ["had bought"],
      right: "(buy) that apartment in 2018, we would own it now.",
    },
    {
      left: "If I",
      answers: ["hadn't been", "hadnt been"],
      right: "(not be) so shy in high school, I would have more confidence now.",
    },
    {
      left: "If she",
      answers: ["had taken"],
      right: "(take) that job offer, she would be living in London now.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Past → Present">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-2xl p-8 mb-6 border-4 border-purple-300">
          <div className="text-6xl mb-4 text-center">💪</div>
          <h3 className="text-2xl font-black text-center text-purple-800 mb-3">
            Time to Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Соедини прошлое с настоящим — используй Past Perfect в условии
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй Past Perfect (had + V3)"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step4() {
  return (
    <>
      <UiSection title="➡️⏪ Type 2: Present Condition → Past Result">
        <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-2xl p-8 mb-8 border-4 border-indigo-400">
          <div className="text-7xl mb-4 text-center">🔄</div>
          <h2 className="text-2xl font-black text-center mb-6 text-indigo-800">
            Постоянное качество влияет на прошлое
          </h2>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-indigo-300">
            <p className="text-xl font-bold text-indigo-700 mb-3">Формула:</p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-lg font-mono text-gray-800 mb-2">
                If + subject + <strong className="text-green-700">Past Simple</strong>,
                subject + <strong className="text-blue-700">would/could/might + have + V3</strong>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Используем, когда <strong>постоянная черта характера или ситуация</strong> (которая есть сейчас)
              объясняет, <strong>почему что-то случилось или не случилось в прошлом</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-6 border-4 border-rose-300">
            <div className="text-5xl mb-3">😴</div>
            <h3 className="text-xl font-bold text-rose-800 mb-4">Черты характера</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-rose-200 hover:border-rose-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I weren't so lazy, I would have finished the project yesterday.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я не был таким ленивым, я бы закончил проект вчера.
                </p>
                <div className="bg-rose-50 rounded-lg p-3 mt-3 border border-rose-200">
                  <p className="text-xs text-gray-600">
                    ⏩ <strong>Now:</strong> I'm lazy (постоянное качество) &nbsp;&nbsp;
                    ⏪ <strong>Past:</strong> didn't finish yesterday
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-rose-200 hover:border-rose-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I were more organized, I wouldn't have lost my keys last week.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я был более организованным, я бы не потерял ключи на прошлой неделе.
                </p>
                <div className="bg-rose-50 rounded-lg p-3 mt-3 border border-rose-200">
                  <p className="text-xs text-gray-600">
                    ⏩ <strong>Now:</strong> not organized &nbsp;&nbsp;
                    ⏪ <strong>Past:</strong> lost keys
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-rose-200 hover:border-rose-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I weren't so shy, I would have asked her out months ago.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я не был таким застенчивым, я бы позвал её на свидание месяцы назад.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Навыки и способности</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I knew how to code, I would have built that app last year.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я умел кодить, я бы сделал то приложение в прошлом году.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I spoke Spanish, I would have gotten that job in Barcelona.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я говорил по-испански, я бы получил ту работу в Барселоне.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I were good at math, I would have passed that exam easily.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я был силён в математике, я бы легко сдал тот экзамен.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border-4 border-purple-300">
            <div className="text-5xl mb-3">💸</div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">Финансовая ситуация</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I weren't broke, I would have bought those concert tickets.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я не был на мели, я бы купил те билеты на концерт.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I had a car, I would have driven to the festival last weekend.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы у меня была машина, я бы поехал на фестиваль в прошлые выходные.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I lived closer to the city, I would have gone to that event.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я жил ближе к центру, я бы пошёл на то мероприятие.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3">🏃</div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Физические возможности</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I were taller, I would have joined the basketball team.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я был выше ростом, я бы вступил в баскетбольную команду.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I weren't allergic to cats, I would have adopted that kitten.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы у меня не было аллергии на кошек, я бы взял того котёнка.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If I were more athletic, I would have won that race last month.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы я был более спортивным, я бы выиграл ту гонку в прошлом месяце.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "If I",
      answers: ["weren't", "wasnt", "were not"],
      right: "(not be) so introverted, I would have made more friends at the party.",
    },
    {
      left: "If she",
      answers: ["knew", "had known"],
      right: "(know) French, she would have applied for that job in Paris.",
    },
    {
      left: "If we",
      answers: ["lived"],
      right: "(live) in the same city, we would have met up last week.",
    },
    {
      left: "If I",
      answers: ["weren't", "wasnt"],
      right: "(not be) afraid of heights, I would have gone skydiving with you.",
    },
    {
      left: "If he",
      answers: ["had"],
      right: "(have) a driving license, he would have rented a car for the trip.",
    },
    {
      left: "If I",
      answers: ["were", "was"],
      right: "(be) braver, I would have confronted him yesterday.",
    },
    {
      left: "If they",
      answers: ["weren't", "wasnt"],
      right: "(not be) vegetarian, they would have tried that famous steak restaurant.",
    },
    {
      left: "If she",
      answers: ["weren't", "wasnt"],
      right: "(not be) so stubborn, she would have apologized last night.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Present → Past">
        <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-2xl p-8 mb-6 border-4 border-indigo-300">
          <div className="text-6xl mb-4 text-center">🎨</div>
          <h3 className="text-2xl font-black text-center text-indigo-800 mb-3">
            Reverse Time Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Постоянные качества объясняют прошлое — используй Past Simple в условии
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй Past Simple (was/were или V2)"
          items={items}
        />

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">🎯</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            Quick Recap: Два типа Mixed Conditionals
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-purple-300">
              <p className="font-bold text-purple-700 mb-2 text-lg">⏪➡️ Type 1: Past → Present</p>
              <p className="text-sm text-gray-700 mb-2 font-mono">
                If + Past Perfect, would + V1 (now)
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Прошлое действие влияет на настоящее
              </p>
              <div className="bg-purple-50 rounded p-2 text-xs">
                If I <strong>had studied</strong> harder, I <strong>would be</strong> a doctor now.
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-2 text-lg">➡️⏪ Type 2: Present → Past</p>
              <p className="text-sm text-gray-700 mb-2 font-mono">
                If + Past Simple, would + have + V3
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Постоянное качество влияет на прошлое
              </p>
              <div className="bg-blue-50 rounded p-2 text-xs">
                If I <strong>weren't</strong> lazy, I <strong>would have finished</strong> it.
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step6() {
  return (
    <>
      <UiSection title="🎭 Mixed Practice: Оба типа вместе">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-10 mb-8 border-4 border-purple-300 shadow-xl">
          <div className="text-8xl mb-6 text-center">🔀</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Time Travel Challenge
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold mb-6">
            Теперь смешаем оба типа! Определи, какой тип нужен в каждой ситуации 🚀
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 border-4 border-yellow-300">
            <div className="text-6xl mb-4 text-center">🎬</div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-6 text-center">Реальные жизненные ситуации</h3>

            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 border-3 border-purple-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">📚</div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      If I had paid attention in English class, I would speak fluently now.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      🇷🇺 Если бы я обращал внимание на уроках английского, я бы говорил свободно сейчас.
                    </p>
                    <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
                      <p className="text-xs font-semibold text-purple-800">
                        ⏪➡️ Type 1: Past → Present
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Прошлое действие (не обращал внимание) влияет на настоящую способность (не говорю свободно)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-3 border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">💪</div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      If I were more disciplined, I would have gone to the gym yesterday.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      🇷🇺 Если бы я был более дисциплинированным, я бы пошёл в зал вчера.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="text-xs font-semibold text-blue-800">
                        ➡️⏪ Type 2: Present → Past
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Постоянное качество (не дисциплинированный) объясняет прошлое действие (не пошёл в зал)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-3 border-green-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">💰</div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      If I hadn't spent all my money on sneakers, I would have savings now.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      🇷🇺 Если бы я не потратил все деньги на кроссовки, у меня были бы сбережения сейчас.
                    </p>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                      <p className="text-xs font-semibold text-green-800">
                        ⏪➡️ Type 1: Past → Present
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Прошлая трата денег влияет на текущую финансовую ситуацию
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-3 border-pink-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">🎨</div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      If I were more creative, I would have designed a better logo for my brand.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      🇷🇺 Если бы я был более креативным, я бы сделал лучший логотип для своего бренда.
                    </p>
                    <div className="bg-pink-50 rounded-lg p-3 border-l-4 border-pink-500">
                      <p className="text-xs font-semibold text-pink-800">
                        ➡️⏪ Type 2: Present → Past
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Текущая черта характера объясняет прошлый результат
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-3 border-orange-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">🎮</div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      If I had practiced harder last year, I would be on the esports team now.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      🇷🇺 Если бы я практиковался усерднее в прошлом году, я был бы в киберспортивной команде сейчас.
                    </p>
                    <div className="bg-orange-50 rounded-lg p-3 border-l-4 border-orange-500">
                      <p className="text-xs font-semibold text-orange-800">
                        ⏪➡️ Type 1: Past → Present
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Недостаток практики в прошлом влияет на текущий статус
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-3 border-indigo-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">🌍</div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      If I weren't afraid of flying, I would have visited Japan last summer.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      🇷🇺 Если бы я не боялся летать, я бы посетил Японию прошлым летом.
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-3 border-l-4 border-indigo-500">
                      <p className="text-xs font-semibold text-indigo-800">
                        ➡️⏪ Type 2: Present → Past
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Постоянный страх объясняет прошлое решение не ехать
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-6 border-4 border-cyan-300">
          <div className="text-5xl mb-3 text-center">💡</div>
          <h3 className="text-xl font-black text-center text-cyan-800 mb-4">
            Как определить, какой тип использовать?
          </h3>
          <div className="bg-white rounded-xl p-5 space-y-3">
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
              <div className="text-2xl">⏪➡️</div>
              <div>
                <p className="font-bold text-purple-800 mb-1">Type 1: Past → Present</p>
                <p className="text-sm text-gray-700">
                  Если говоришь о <strong>конкретном действии в прошлом</strong>, которое влияет на настоящее
                </p>
                <p className="text-xs text-gray-600 mt-1 italic">
                  "If I had done X in the past, Y would be different now"
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-2xl">➡️⏪</div>
              <div>
                <p className="font-bold text-blue-800 mb-1">Type 2: Present → Past</p>
                <p className="text-sm text-gray-700">
                  Если говоришь о <strong>постоянном качестве/состоянии сейчас</strong>, которое объясняет прошлое
                </p>
                <p className="text-xs text-gray-600 mt-1 italic">
                  "If I were X now, I would have done Y in the past"
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "If I",
      answers: ["had saved", "had been saving"],
      right: "(save) money last year, I would have a new laptop now. [Past → Present]",
    },
    {
      left: "If she",
      answers: ["weren't", "wasnt"],
      right: "(not be) so impatient, she would have waited for us yesterday. [Present → Past]",
    },
    {
      left: "If we",
      answers: ["had moved"],
      right: "(move) to that neighborhood, we would live near the beach now. [Past → Present]",
    },
    {
      left: "If I",
      answers: ["knew"],
      right: "(know) how to fix cars, I would have repaired it myself last week. [Present → Past]",
    },
    {
      left: "If they",
      answers: ["hadn't cancelled", "hadnt cancelled"],
      right: "(not cancel) the concert, we would be there right now. [Past → Present]",
    },
    {
      left: "If he",
      answers: ["weren't", "wasnt"],
      right: "(not be) so pessimistic, he would have taken that opportunity. [Present → Past]",
    },
    {
      left: "If I",
      answers: ["had listened"],
      right: "(listen) to her advice, I wouldn't be in this mess now. [Past → Present]",
    },
    {
      left: "If I",
      answers: ["had"],
      right: "(have) a bigger apartment, I would have hosted the party last weekend. [Present → Past]",
    },
    {
      left: "If she",
      answers: ["had accepted"],
      right: "(accept) that job offer, she would be working in Dubai now. [Past → Present]",
    },
    {
      left: "If I",
      answers: ["were", "was"],
      right: "(be) more outgoing, I would have made friends at the event. [Present → Past]",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Mixed Practice: Определи тип">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 mb-6 border-4 border-purple-300">
          <div className="text-7xl mb-4 text-center">🎯</div>
          <h3 className="text-2xl font-black text-center text-purple-800 mb-3">
            Ultimate Mixed Conditionals Challenge!
          </h3>
          <p className="text-center text-gray-700 font-semibold text-lg">
            Определи тип и заполни пропуски правильной формой глагола
          </p>
          <div className="mt-4 bg-white/80 backdrop-blur rounded-xl p-4 border-2 border-purple-300">
            <p className="text-sm text-gray-700 text-center">
              В конце каждого предложения указано, какой тип нужен: <br />
              <strong className="text-purple-700">Past → Present</strong> или <strong className="text-blue-700">Present → Past</strong>
            </p>
          </div>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй правильную форму глагола в зависимости от типа"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step8() {
  return (
    <>
      <UiSection title="⚠️ Common Mistakes — Типичные ошибки">
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-10 mb-8 border-4 border-red-300 shadow-xl">
          <div className="text-8xl mb-6 text-center">⚡</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Не попадись в эти ловушки!
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold">
            Разбираем самые частые ошибки в Mixed Conditionals 🚨
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border-4 border-red-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-red-800 mb-6">Mistake #1: Перепутал время в результате</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  If I had studied harder, I would have been a doctor now.
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 Ошибка: "would have been" — это прошлое, но "now" означает настоящее!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  If I had studied harder, I would be a doctor now.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ "would be" — настоящее время для результата в настоящем
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-4 border-orange-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Mistake #2: Использовал Past Perfect вместо Past Simple</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  If I had been lazier, I would have missed the deadline.
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 Ошибка: "had been" для постоянного качества — это слишком!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  If I were lazier, I would have missed the deadline.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ Past Simple для постоянной черты характера (Type 2)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-lime-50 rounded-2xl p-6 border-4 border-yellow-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-6">Mistake #3: Забыл про маркеры времени</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  If I had more money, I would buy a car yesterday.
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 "would buy" не сочетается с "yesterday" (прошлое время)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  If I had more money, I would have bought a car yesterday.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ "would have bought" для прошлого действия (Type 2)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Mistake #4: Использовал обычный 3rd Conditional вместо Mixed</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-yellow-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="font-bold text-yellow-700">НЕ СОВСЕМ ТО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2">
                  If I had bought Bitcoin, I would have been rich.
                </p>
                <div className="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-700 font-semibold">
                    ⚠️ Это обычный 3rd Conditional — оба времени в прошлом. Не показывает связь с настоящим!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">BETTER (Mixed):</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  If I had bought Bitcoin, I would be rich now.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ Mixed Conditional — показывает, что прошлое действие влияет на настоящее состояние
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-4 border-indigo-300">
          <div className="text-5xl mb-3 text-center">💎</div>
          <h3 className="text-xl font-black text-center text-indigo-800 mb-4">
            Golden Rules для Mixed Conditionals
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
              <p className="font-bold text-indigo-700 mb-2">🎯 Rule #1: Смотри на маркеры времени</p>
              <p className="text-sm text-gray-700">
                "now", "these days", "at the moment" → настоящее<br />
                "yesterday", "last year", "in 2020" → прошлое
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
              <p className="font-bold text-purple-700 mb-2">🎯 Rule #2: Определи, что причина, а что следствие</p>
              <p className="text-sm text-gray-700">
                Прошлое действие → настоящий результат (Type 1)<br />
                Постоянное качество → прошлое действие (Type 2)
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-pink-200">
              <p className="font-bold text-pink-700 mb-2">🎯 Rule #3: Проверь логику</p>
              <p className="text-sm text-gray-700">
                Предложение должно иметь смысл! Если звучит странно — возможно, перепутал времена.
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "If I",
      answers: ["had woken up", "had woken"],
      right: "(wake up) earlier, I wouldn't be late for work now.",
    },
    {
      left: "If she",
      answers: ["weren't", "wasnt"],
      right: "(not be) so picky, she would have found a boyfriend by now.",
    },
    {
      left: "If we",
      answers: ["had invested"],
      right: "(invest) in that startup, we would be millionaires today.",
    },
    {
      left: "If I",
      answers: ["had"],
      right: "(have) better social skills, I would have networked more at the conference.",
    },
    {
      left: "If they",
      answers: ["hadn't deleted", "hadnt deleted"],
      right: "(not delete) their Instagram account, they would have 100K followers now.",
    },
    {
      left: "If he",
      answers: ["weren't", "wasnt", "were not"],
      right: "(not be) so arrogant, people would have helped him when he needed it.",
    },
    {
      left: "If I",
      answers: ["had taken"],
      right: "(take) that internship, I would be working at Google now.",
    },
    {
      left: "If she",
      answers: ["knew"],
      right: "(know) how to negotiate, she would have gotten a better salary.",
    },
    {
      left: "If we",
      answers: ["had moved", "had relocated"],
      right: "(move) to the city center, we wouldn't have to commute so far now.",
    },
    {
      left: "If I",
      answers: ["were", "was"],
      right: "(be) more adventurous, I would have tried skydiving last summer.",
    },
    {
      left: "If he",
      answers: ["had learned", "had learnt"],
      right: "(learn) to play guitar back then, he could join the band now.",
    },
    {
      left: "If I",
      answers: ["weren't", "wasnt"],
      right: "(not be) addicted to social media, I would have finished my thesis months ago.",
    },
  ];

  return (
    <>
      <UiSection title="🔥 Advanced Practice: Реальные сценарии">
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 mb-6 border-4 border-red-300">
          <div className="text-7xl mb-4 text-center animate-bounce">🚀</div>
          <h3 className="text-3xl font-black text-center text-red-800 mb-3">
            Boss Level Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold text-lg mb-3">
            Сложные жизненные ситуации — покажи, что ты master of time travel! 💪
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border-2 border-orange-300">
            <p className="text-sm text-gray-700 text-center">
              Без подсказок! Сам определи, какой тип нужен в каждом случае 🎯
            </p>
          </div>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй правильную форму глагола (самостоятельно определи тип)"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step10() {
  const items: FillItem[] = [
    {
      left: "If I",
      answers: ["had started"],
      right: "(start) learning English at age 5, I would speak like a native now.",
    },
    {
      left: "If I",
      answers: ["weren't", "wasnt"],
      right: "(not be) so indecisive, I would have accepted that job offer immediately.",
    },
    {
      left: "If she",
      answers: ["had backed up", "had saved"],
      right: "(back up) her files, she wouldn't be panicking about losing her thesis now.",
    },
    {
      left: "If I",
      answers: ["knew"],
      right: "(know) Python, I would have automated this task years ago.",
    },
    {
      left: "If we",
      answers: ["hadn't sold", "hadnt sold"],
      right: "(not sell) our house in 2019, we would own valuable property now.",
    },
    {
      left: "If he",
      answers: ["weren't", "wasnt"],
      right: "(not be) so competitive, he would have enjoyed the game instead of arguing.",
    },
    {
      left: "If I",
      answers: ["had gone"],
      right: "(go) to university abroad, I would be fluent in another language now.",
    },
    {
      left: "If she",
      answers: ["had"],
      right: "(have) more confidence, she would have pitched her startup idea to investors.",
    },
    {
      left: "If they",
      answers: ["had bought"],
      right: "(buy) that domain name in 2010, they could sell it for millions now.",
    },
    {
      left: "If I",
      answers: ["weren't", "wasnt", "were not"],
      right: "(not be) afraid of public speaking, I would have given that TED talk.",
    },
  ];

  return (
    <>
      <UiSection title="🏆 Final Test + Cheat Sheet">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-10 mb-8 border-4 border-purple-400 shadow-xl">
          <div className="text-8xl mb-6 text-center">👑</div>
          <h2 className="text-4xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            You're a Time Lord now!
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold">
            Финальный тест на все типы Mixed Conditionals 🎯
          </p>
        </div>

        <CheckableExercise
          title="Финальный тест"
          instruction="Заполни пропуски правильной формой глагола"
          items={items}
        />

        <div className="mt-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 border-4 border-indigo-400 shadow-xl">
          <div className="text-7xl mb-6 text-center">📖</div>
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ultimate Mixed Conditionals Cheat Sheet
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-4 border-purple-300 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">⏪➡️</div>
                <h3 className="text-2xl font-black text-purple-700">Type 1: Past → Present</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-300">
                  <p className="font-bold text-purple-800 mb-2">📝 Formula:</p>
                  <p className="font-mono text-sm text-gray-800 mb-2">
                    If + <span className="text-purple-700 font-bold">Past Perfect</span>,
                  </p>
                  <p className="font-mono text-sm text-gray-800">
                    <span className="text-green-700 font-bold">would/could/might + V1</span> (now)
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 border-2 border-purple-200">
                  <p className="font-bold text-gray-800 mb-2">💡 Когда использовать:</p>
                  <p className="text-sm text-gray-700">
                    Когда <strong>прошлое действие</strong> (или его отсутствие) объясняет <strong>текущую ситуацию</strong>
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                  <p className="font-bold text-purple-700 mb-2">✨ Examples:</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-800">
                      • If I <strong>had studied</strong>, I <strong>would be</strong> a doctor <strong>now</strong>
                    </p>
                    <p className="text-gray-800">
                      • If I <strong>hadn't quit</strong>, I <strong>would be working</strong> there <strong>now</strong>
                    </p>
                    <p className="text-gray-800">
                      • If she <strong>had saved</strong> money, she <strong>could travel</strong> <strong>now</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-3 border-2 border-yellow-300">
                  <p className="text-xs font-semibold text-yellow-800">
                    🎯 Key markers: now, today, at the moment, these days, currently
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-blue-300 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">➡️⏪</div>
                <h3 className="text-2xl font-black text-blue-700">Type 2: Present → Past</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300">
                  <p className="font-bold text-blue-800 mb-2">📝 Formula:</p>
                  <p className="font-mono text-sm text-gray-800 mb-2">
                    If + <span className="text-blue-700 font-bold">Past Simple</span>,
                  </p>
                  <p className="font-mono text-sm text-gray-800">
                    <span className="text-green-700 font-bold">would/could/might + have + V3</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-4 border-2 border-blue-200">
                  <p className="font-bold text-gray-800 mb-2">💡 Когда использовать:</p>
                  <p className="text-sm text-gray-700">
                    Когда <strong>постоянная черта/ситуация сейчас</strong> объясняет, <strong>почему что-то случилось в прошлом</strong>
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
                  <p className="font-bold text-blue-700 mb-2">✨ Examples:</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-800">
                      • If I <strong>weren't</strong> lazy, I <strong>would have finished</strong> it <strong>yesterday</strong>
                    </p>
                    <p className="text-gray-800">
                      • If I <strong>knew</strong> coding, I <strong>would have built</strong> it <strong>last year</strong>
                    </p>
                    <p className="text-gray-800">
                      • If he <strong>had</strong> a car, he <strong>would have driven</strong> there <strong>then</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-3 border-2 border-yellow-300">
                  <p className="text-xs font-semibold text-yellow-800">
                    🎯 Key markers: yesterday, last week/year, ago, in 2020, months ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3 text-center">🧠</div>
            <h3 className="text-2xl font-black text-center text-green-800 mb-6">
              Quick Decision Guide
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <p className="font-bold text-green-800 mb-3 text-lg">❓ Как выбрать правильный тип?</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <span className="text-2xl">1️⃣</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Найди маркеры времени в результате:</p>
                      <p className="text-sm text-gray-700">
                        "now", "today" → настоящее<br />
                        "yesterday", "last year" → прошлое
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Определи причину и следствие:</p>
                      <p className="text-sm text-gray-700">
                        Прошлое действие → Type 1 (Past Perfect)<br />
                        Постоянное качество → Type 2 (Past Simple)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Проверь логику предложения:</p>
                      <p className="text-sm text-gray-700">
                        Предложение должно иметь смысл и показывать связь между временами!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border-4 border-pink-300">
            <div className="text-4xl mb-3 text-center">💪</div>
            <h3 className="text-xl font-black text-center text-pink-800 mb-4">
              Congratulations! 🎉
            </h3>
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              Ты прошёл все 10 страниц Mixed Conditionals! Теперь ты можешь свободно путешествовать
              между временами в английском языке. Keep practicing and you'll master it! 🚀
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
