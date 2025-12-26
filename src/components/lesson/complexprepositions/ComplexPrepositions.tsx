"use client";

import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function ComplexPrepositions({ step }: Props) {
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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="text-8xl mb-6 animate-pulse">🎩📚</div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Complex Prepositions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Formal multi-word prepositions for C1-C2 level writing and speaking
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold mb-6 text-indigo-900">🎯 What Are Complex Prepositions?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Complex prepositions (also called <span className="font-bold">prepositional phrases</span>) are multi-word expressions that function as a single preposition.
              They are extremely common in <span className="font-bold text-indigo-700">formal writing, academic texts, business communication,</span> and advanced speech.
            </p>

            <div className="bg-indigo-50 p-5 rounded-lg">
              <p className="font-bold text-indigo-800 mb-3">Examples of Complex Prepositions:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <p className="text-gray-700">• <span className="font-bold">in light of</span> (учитывая)</p>
                  <p className="text-gray-700">• <span className="font-bold">with regard to</span> (относительно)</p>
                  <p className="text-gray-700">• <span className="font-bold">by virtue of</span> (благодаря)</p>
                  <p className="text-gray-700">• <span className="font-bold">in spite of</span> (несмотря на)</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-700">• <span className="font-bold">on behalf of</span> (от имени)</p>
                  <p className="text-gray-700">• <span className="font-bold">in accordance with</span> (в соответствии с)</p>
                  <p className="text-gray-700">• <span className="font-bold">for the sake of</span> (ради)</p>
                  <p className="text-gray-700">• <span className="font-bold">with reference to</span> (касательно)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Why Use Them?</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-bold text-purple-700">Academic Writing</p>
                  <p className="text-sm text-gray-600">They make your essays and research papers sound professional</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-bold text-purple-700">Business Communication</p>
                  <p className="text-sm text-gray-600">Essential for formal emails, reports, and presentations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🗣️</span>
                <div>
                  <p className="font-bold text-purple-700">Advanced Speaking</p>
                  <p className="text-sm text-gray-600">Show linguistic sophistication in IELTS, TOEFL, CAE exams</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <h4 className="font-bold text-lg mb-4 text-pink-800">📊 Formality Scale</h4>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700 mb-1">❌ Informal (разговорный)</p>
                <p className="text-gray-700">Because of the weather, we cancelled the trip.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-1">✅ Formal (формальный)</p>
                <p className="text-gray-700"><span className="font-bold">In light of</span> the adverse weather conditions, the excursion was postponed.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold text-lg mb-3 text-blue-900">🎯 What You'll Learn</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-700">✓ 20+ essential complex prepositions</p>
                <p className="text-gray-700">✓ Exact meanings and usage</p>
                <p className="text-gray-700">✓ Formal vs informal alternatives</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">✓ Real-world examples</p>
                <p className="text-gray-700">✓ Common collocations</p>
                <p className="text-gray-700">✓ Academic writing patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Pro Tip</h3>
        <p className="text-gray-700 leading-relaxed">
          Don't overuse complex prepositions in casual conversation — you'll sound overly formal or pretentious.
          Save them for <span className="font-bold">formal contexts</span>: academic writing, business emails, presentations, formal speeches.
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📌</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Group 1: Cause & Reason</h2>
        <p className="text-lg text-gray-600">Explaining why something happened</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">IN LIGHT OF (учитывая, в свете)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: considering new information or circumstances</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">In light of</span> recent events, we have decided to postpone the conference.</p>
                <p className="text-sm text-gray-600 italic">Учитывая недавние события, мы решили отложить конференцию.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">In light of</span> the new evidence, the jury reconsidered their verdict.</p>
                <p className="text-sm text-gray-600 italic">В свете новых доказательств, присяжные пересмотрели свой вердикт.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">In light of</span> your excellent performance, we are offering you a promotion.</p>
                <p className="text-sm text-gray-600 italic">Учитывая вашу отличную работу, мы предлагаем вам повышение.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">Alternative (British): IN THE LIGHT OF</p>
              <p className="text-sm text-gray-700">Both "in light of" and "in the light of" are correct. American English prefers "in light of".</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">BY VIRTUE OF (благодаря, в силу)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Meaning: because of, as a result of (often used with inherent qualities or status)</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">She became a citizen <span className="text-purple-700">by virtue of</span> her marriage.</p>
                <p className="text-sm text-gray-600 italic">Она стала гражданкой благодаря своему браку.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">By virtue of</span> his position, he has access to confidential information.</p>
                <p className="text-sm text-gray-600 italic">В силу своего положения, он имеет доступ к конфиденциальной информации.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The company succeeded <span className="text-purple-700">by virtue of</span> innovation and hard work.</p>
                <p className="text-sm text-gray-600 italic">Компания добилась успеха благодаря инновациям и упорному труду.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">ON ACCOUNT OF (из-за, по причине)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Meaning: because of (slightly more formal than "because of")</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The match was cancelled <span className="text-green-700">on account of</span> rain.</p>
                <p className="text-sm text-gray-600 italic">Матч был отменён из-за дождя.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">She was promoted <span className="text-green-700">on account of</span> her dedication.</p>
                <p className="text-sm text-gray-600 italic">Её повысили благодаря её преданности.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">On account of</span> budget constraints, the project was delayed.</p>
                <p className="text-sm text-gray-600 italic">Из-за бюджетных ограничений проект был отложен.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">🎯 Quick Comparison</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-blue-700">IN LIGHT OF</p>
            <p className="text-sm text-gray-600">= considering new information/circumstances</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-purple-700">BY VIRTUE OF</p>
            <p className="text-sm text-gray-600">= because of inherent quality/status/position</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-green-700">ON ACCOUNT OF</p>
            <p className="text-sm text-gray-600">= because of (formal alternative to "because of")</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "",
      answers: ["In light of"],
      right: "the recent financial crisis, many companies have reduced their workforce.",
    },
    {
      left: "She holds the position",
      answers: ["by virtue of"],
      right: "her extensive experience in the field.",
    },
    {
      left: "The event was postponed",
      answers: ["on account of"],
      right: "unforeseen circumstances.",
    },
    {
      left: "",
      answers: ["In light of"],
      right: "your qualifications, we would like to offer you the position.",
    },
    {
      left: "He is a member of the board",
      answers: ["by virtue of"],
      right: "his shareholding in the company.",
    },
    {
      left: "The flight was delayed",
      answers: ["on account of"],
      right: "severe weather conditions.",
    },
    {
      left: "",
      answers: ["In light of"],
      right: "the new regulations, we must update our procedures.",
    },
    {
      left: "They succeeded",
      answers: ["by virtue of"],
      right: "sheer determination and hard work.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Practice: Cause & Reason</h2>
        <p className="text-lg text-gray-600">in light of / by virtue of / on account of</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚖️</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Group 2: Contrast & Concession</h2>
        <p className="text-lg text-gray-600">Expressing "despite" and "although"</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-8 border-2 border-red-200">
        <h3 className="text-2xl font-bold mb-6 text-red-800">IN SPITE OF / DESPITE (несмотря на)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-red-300">
            <p className="text-lg font-bold text-red-900 mb-3">Meaning: although something is true, it doesn't prevent another thing</p>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-red-700">In spite of</span> the difficulties, they completed the project on time.</p>
                <p className="text-sm text-gray-600 italic">Несмотря на трудности, они завершили проект вовремя.</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-gray-800 mb-1">He succeeded <span className="text-red-700">in spite of</span> having no formal education.</p>
                <p className="text-sm text-gray-600 italic">Он добился успеха, несмотря на отсутствие формального образования.</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-red-700">Despite</span> the bad weather, the event went ahead as planned.</p>
                <p className="text-sm text-gray-600 italic">Несмотря на плохую погоду, мероприятие прошло по плану.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">Note: DESPITE = IN SPITE OF</p>
              <p className="text-sm text-gray-700">"Despite" is slightly more formal. Both are followed by a noun/gerund, NOT a clause.</p>
              <p className="text-sm text-green-700 mt-2">✅ Despite the rain...</p>
              <p className="text-sm text-red-700">❌ Despite that it was raining...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">REGARDLESS OF (независимо от)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: without being affected by; no matter what</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The rule applies to everyone, <span className="text-blue-700">regardless of</span> their position.</p>
                <p className="text-sm text-gray-600 italic">Правило применяется ко всем, независимо от их положения.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">She will continue her research <span className="text-blue-700">regardless of</span> the cost.</p>
                <p className="text-sm text-gray-600 italic">Она продолжит своё исследование независимо от стоимости.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">Regardless of</span> the outcome, we must try our best.</p>
                <p className="text-sm text-gray-600 italic">Независимо от результата, мы должны стараться изо всех сил.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">NOTWITHSTANDING (несмотря на, тем не менее)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Meaning: in spite of; despite (very formal, legal/academic)</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">Notwithstanding</span> the challenges, the team delivered excellent results.</p>
                <p className="text-sm text-gray-600 italic">Несмотря на трудности, команда добилась отличных результатов.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The contract remains valid, <span className="text-purple-700">notwithstanding</span> any prior agreements.</p>
                <p className="text-sm text-gray-600 italic">Контракт остаётся действительным, несмотря на любые предыдущие соглашения.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">Notwithstanding</span> his objections, the decision was made.</p>
                <p className="text-sm text-gray-600 italic">Несмотря на его возражения, решение было принято.</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4 border border-orange-300">
              <p className="font-bold text-orange-800 mb-2">⚠️ VERY FORMAL</p>
              <p className="text-sm text-gray-700">"Notwithstanding" is extremely formal and mostly used in legal documents, academic writing, and official communications.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
        <h3 className="font-bold text-lg mb-4 text-green-900">🎯 Formality Scale</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-red-400">
            <p className="font-bold text-red-700">IN SPITE OF / DESPITE</p>
            <p className="text-sm text-gray-600">Standard formal level — safe for any formal context</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-bold text-blue-700">REGARDLESS OF</p>
            <p className="text-sm text-gray-600">Emphasizes "no matter what" — slightly stronger</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-purple-400">
            <p className="font-bold text-purple-700">NOTWITHSTANDING</p>
            <p className="text-sm text-gray-600">Very formal — use in legal/academic contexts only</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "",
      answers: ["In spite of", "Despite"],
      right: "the rain, we enjoyed the outdoor concert.",
    },
    {
      left: "Everyone must attend,",
      answers: ["regardless of"],
      right: "their rank or position.",
    },
    {
      left: "",
      answers: ["Notwithstanding"],
      right: "the legal issues, the project will proceed as planned.",
    },
    {
      left: "She passed the exam",
      answers: ["in spite of", "despite"],
      right: "being ill during the preparation period.",
    },
    {
      left: "The company will continue operations,",
      answers: ["regardless of"],
      right: "the financial losses.",
    },
    {
      left: "",
      answers: ["Despite", "In spite of"],
      right: "his young age, he became the CEO.",
    },
    {
      left: "The policy applies to all employees,",
      answers: ["regardless of"],
      right: "how long they have been with the company.",
    },
    {
      left: "",
      answers: ["Notwithstanding"],
      right: "the provisions of the contract, the parties agreed to renegotiate.",
    },
    {
      left: "He remained calm",
      answers: ["despite", "in spite of"],
      right: "the chaos around him.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚡</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Practice: Contrast & Concession</h2>
        <p className="text-lg text-gray-600">in spite of / despite / regardless of / notwithstanding</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📋</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Group 3: Reference & Topic</h2>
        <p className="text-lg text-gray-600">Указание на тему разговора</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">WITH REGARD TO / WITH REFERENCE TO (относительно, касательно)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: about, concerning (formal way to introduce a topic)</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">With regard to</span> your request, we are pleased to inform you that it has been approved.</p>
                <p className="text-sm text-gray-600 italic">Относительно вашего запроса, мы рады сообщить, что он одобрен.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">With reference to</span> your email of March 15th, I would like to clarify the following points.</p>
                <p className="text-sm text-gray-600 italic">В отношении вашего письма от 15 марта, я хотел бы уточнить следующие моменты.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">With regard to</span> the budget, we need to make some adjustments.</p>
                <p className="text-sm text-gray-600 italic">Что касается бюджета, нам нужно внести некоторые коррективы.</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-300">
              <p className="font-bold text-green-800 mb-2">Alternatives (all mean the same):</p>
              <p className="text-sm text-gray-700">• <span className="font-bold">In regard to</span></p>
              <p className="text-sm text-gray-700">• <span className="font-bold">As regards</span></p>
              <p className="text-sm text-gray-700">• <span className="font-bold">Regarding</span> (simpler, still formal)</p>
              <p className="text-sm text-gray-700">• <span className="font-bold">Concerning</span> (simpler, still formal)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">IN RELATION TO / IN CONNECTION WITH (в связи с)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Meaning: about; connected with; concerning</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">In relation to</span> your complaint, we have investigated the matter thoroughly.</p>
                <p className="text-sm text-gray-600 italic">В связи с вашей жалобой, мы тщательно изучили этот вопрос.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The police arrested him <span className="text-green-700">in connection with</span> the robbery.</p>
                <p className="text-sm text-gray-600 italic">Полиция арестовала его в связи с ограблением.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">Several questions arose <span className="text-green-700">in relation to</span> the proposed changes.</p>
                <p className="text-sm text-gray-600 italic">Возникло несколько вопросов в связи с предлагаемыми изменениями.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">WITH RESPECT TO (что касается)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Meaning: concerning; about (very formal, often in academic/technical contexts)</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">With respect to</span> the data analysis, further research is required.</p>
                <p className="text-sm text-gray-600 italic">Что касается анализа данных, требуется дальнейшее исследование.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The policy is unclear <span className="text-purple-700">with respect to</span> remote workers.</p>
                <p className="text-sm text-gray-600 italic">Политика неясна в отношении удалённых работников.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">With respect to</span> your earlier question, I have consulted with the team.</p>
                <p className="text-sm text-gray-600 italic">Что касается вашего предыдущего вопроса, я проконсультировался с командой.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">📧 Business Email Starters</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-blue-700">With regard to your inquiry...</p>
            <p className="text-sm text-gray-600">Perfect for responding to customer questions</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-green-700">In connection with the upcoming meeting...</p>
            <p className="text-sm text-gray-600">Great for meeting-related emails</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-purple-700">With reference to your proposal...</p>
            <p className="text-sm text-gray-600">Ideal for discussing documents/proposals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "",
      answers: ["With regard to", "With reference to"],
      right: "your application, we regret to inform you that the position has been filled.",
    },
    {
      left: "The investigation is ongoing",
      answers: ["in connection with"],
      right: "the recent security breach.",
    },
    {
      left: "",
      answers: ["With respect to"],
      right: "the methodology, several improvements could be made.",
    },
    {
      left: "I am writing",
      answers: ["with reference to", "with regard to"],
      right: "your letter of complaint dated June 10th.",
    },
    {
      left: "Questions have arisen",
      answers: ["in relation to"],
      right: "the new tax regulations.",
    },
    {
      left: "",
      answers: ["With regard to", "In regard to"],
      right: "the budget, we need to reduce expenses by 15%.",
    },
    {
      left: "He was questioned",
      answers: ["in connection with"],
      right: "the disappearance of the funds.",
    },
    {
      left: "The law is ambiguous",
      answers: ["with respect to"],
      right: "digital assets.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Practice: Reference & Topic</h2>
        <p className="text-lg text-gray-600">with regard to / in connection with / with respect to</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step8() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Group 4: Purpose & Benefit</h2>
        <p className="text-lg text-gray-600">Цель и выгода</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 border-2 border-pink-200">
        <h3 className="text-2xl font-bold mb-6 text-pink-800">FOR THE SAKE OF (ради, во имя)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <p className="text-lg font-bold text-pink-900 mb-3">Meaning: in order to help/please someone; for the purpose of</p>

            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">She stayed in the marriage <span className="text-pink-700">for the sake of</span> the children.</p>
                <p className="text-sm text-gray-600 italic">Она сохранила брак ради детей.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-pink-700">For the sake of</span> clarity, let me explain this again.</p>
                <p className="text-sm text-gray-600 italic">Ради ясности, позвольте мне объяснить это ещё раз.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">He agreed to the compromise <span className="text-pink-700">for the sake of</span> peace.</p>
                <p className="text-sm text-gray-600 italic">Он согласился на компромисс ради мира.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Common collocations:</p>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-sm text-gray-700">• for the sake of argument</p>
                <p className="text-sm text-gray-700">• for the sake of simplicity</p>
                <p className="text-sm text-gray-700">• for the sake of clarity</p>
                <p className="text-sm text-gray-700">• for the sake of completeness</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">ON BEHALF OF (от имени, от лица)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: as the representative of; in the interests of</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">I am writing <span className="text-blue-700">on behalf of</span> the management team.</p>
                <p className="text-sm text-gray-600 italic">Я пишу от имени команды управления.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">He accepted the award <span className="text-blue-700">on behalf of</span> his late father.</p>
                <p className="text-sm text-gray-600 italic">Он принял награду от имени своего покойного отца.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The lawyer spoke <span className="text-blue-700">on behalf of</span> her client.</p>
                <p className="text-sm text-gray-600 italic">Адвокат говорил от имени своего клиента.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">British: ON BEHALF OF vs American: IN BEHALF OF</p>
              <p className="text-sm text-gray-700"><span className="font-bold">On behalf of</span> = as a representative (both UK/US)</p>
              <p className="text-sm text-gray-700"><span className="font-bold">In behalf of</span> = for the benefit of (rare, mainly US)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">IN ACCORDANCE WITH (в соответствии с)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Meaning: following rules/standards; as required by</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The building was constructed <span className="text-green-700">in accordance with</span> safety regulations.</p>
                <p className="text-sm text-gray-600 italic">Здание было построено в соответствии с правилами безопасности.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">In accordance with</span> company policy, all employees must attend.</p>
                <p className="text-sm text-gray-600 italic">В соответствии с политикой компании, все сотрудники должны присутствовать.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The tests were conducted <span className="text-green-700">in accordance with</span> international standards.</p>
                <p className="text-sm text-gray-600 italic">Тесты проводились в соответствии с международными стандартами.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">IN COMPLIANCE WITH (в соответствии с, в соблюдении)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Meaning: following rules/laws (emphasizes obedience to regulations)</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">All documents must be submitted <span className="text-purple-700">in compliance with</span> the deadline.</p>
                <p className="text-sm text-gray-600 italic">Все документы должны быть представлены в соответствии с крайним сроком.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The company operates <span className="text-purple-700">in compliance with</span> environmental laws.</p>
                <p className="text-sm text-gray-600 italic">Компания работает в соответствии с экологическим законодательством.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">🎯 Quick Comparison</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-pink-700">FOR THE SAKE OF</p>
            <p className="text-sm text-gray-600">= for the purpose/benefit of</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-blue-700">ON BEHALF OF</p>
            <p className="text-sm text-gray-600">= as a representative of</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-green-700">IN ACCORDANCE WITH</p>
            <p className="text-sm text-gray-600">= following rules/standards</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-purple-700">IN COMPLIANCE WITH</p>
            <p className="text-sm text-gray-600">= obeying regulations/laws</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "",
      answers: ["For the sake of"],
      right: "argument, let's assume you are correct.",
    },
    {
      left: "I would like to thank you",
      answers: ["on behalf of"],
      right: "the entire team.",
    },
    {
      left: "All procedures must be followed",
      answers: ["in accordance with"],
      right: "the safety manual.",
    },
    {
      left: "The data is collected",
      answers: ["in compliance with"],
      right: "privacy regulations.",
    },
    {
      left: "He sacrificed his career",
      answers: ["for the sake of"],
      right: "his family.",
    },
    {
      left: "She is speaking",
      answers: ["on behalf of"],
      right: "the victims.",
    },
    {
      left: "The contract was drafted",
      answers: ["in accordance with"],
      right: "international law.",
    },
    {
      left: "",
      answers: ["For the sake of"],
      right: "simplicity, we will focus on three main points.",
    },
    {
      left: "The company operates",
      answers: ["in compliance with"],
      right: "all relevant regulations.",
    },
    {
      left: "I am writing",
      answers: ["on behalf of"],
      right: "the board of directors.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Practice: Purpose & Benefit</h2>
        <p className="text-lg text-gray-600">for the sake of / on behalf of / in accordance with / in compliance with</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step10() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Complex Prepositions — Ultimate Cheat Sheet
        </h2>
        <p className="text-lg text-gray-600">Your complete formal writing toolkit</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 text-orange-900">📚 Complete Reference Guide</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
            <h4 className="font-bold text-xl mb-4 text-blue-800">🔹 CAUSE & REASON</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-700">IN LIGHT OF / IN THE LIGHT OF</p>
                <p className="text-sm text-gray-700">= considering new information/circumstances</p>
                <p className="text-xs text-gray-600 italic">In light of recent developments, we must reconsider our strategy.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-700">BY VIRTUE OF</p>
                <p className="text-sm text-gray-700">= because of; as a result of (inherent quality/status)</p>
                <p className="text-xs text-gray-600 italic">By virtue of her experience, she was promoted.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-700">ON ACCOUNT OF</p>
                <p className="text-sm text-gray-700">= because of (formal)</p>
                <p className="text-xs text-gray-600 italic">The event was cancelled on account of bad weather.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-red-400">
            <h4 className="font-bold text-xl mb-4 text-red-800">🔹 CONTRAST & CONCESSION</h4>

            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700">IN SPITE OF / DESPITE</p>
                <p className="text-sm text-gray-700">= although; even though (+ noun/gerund)</p>
                <p className="text-xs text-gray-600 italic">Despite the challenges, we succeeded.</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700">REGARDLESS OF</p>
                <p className="text-sm text-gray-700">= without being affected by; no matter what</p>
                <p className="text-xs text-gray-600 italic">The rule applies regardless of your position.</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700">NOTWITHSTANDING</p>
                <p className="text-sm text-gray-700">= despite (very formal, legal)</p>
                <p className="text-xs text-gray-600 italic">Notwithstanding the objections, the motion was passed.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-green-400">
            <h4 className="font-bold text-xl mb-4 text-green-800">🔹 REFERENCE & TOPIC</h4>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700">WITH REGARD TO / WITH REFERENCE TO / WITH RESPECT TO</p>
                <p className="text-sm text-gray-700">= about; concerning</p>
                <p className="text-xs text-gray-600 italic">With regard to your inquiry, we are pleased to assist.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700">IN RELATION TO / IN CONNECTION WITH</p>
                <p className="text-sm text-gray-700">= connected with; concerning</p>
                <p className="text-xs text-gray-600 italic">He was questioned in connection with the incident.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
            <h4 className="font-bold text-xl mb-4 text-purple-800">🔹 PURPOSE & BENEFIT</h4>

            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-700">FOR THE SAKE OF</p>
                <p className="text-sm text-gray-700">= in order to help/please; for the purpose of</p>
                <p className="text-xs text-gray-600 italic">For the sake of clarity, let me explain again.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-700">ON BEHALF OF</p>
                <p className="text-sm text-gray-700">= as a representative of</p>
                <p className="text-xs text-gray-600 italic">I am speaking on behalf of the committee.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-700">IN ACCORDANCE WITH / IN COMPLIANCE WITH</p>
                <p className="text-sm text-gray-700">= following rules/standards</p>
                <p className="text-xs text-gray-600 italic">All work must be done in accordance with regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 p-8 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-6 text-red-900">❌ Common Mistakes</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ Despite OF the rain...</p>
            <p className="font-bold text-green-700 mb-2">✅ Despite the rain... / In spite OF the rain...</p>
            <p className="text-sm text-gray-600">"Despite" is never followed by "of"!</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ In accordance of the rules...</p>
            <p className="font-bold text-green-700 mb-2">✅ In accordance WITH the rules...</p>
            <p className="text-sm text-gray-600">Always use "with" after "in accordance"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ For sake of simplicity...</p>
            <p className="font-bold text-green-700 mb-2">✅ For THE sake of simplicity...</p>
            <p className="text-sm text-gray-600">Never omit "the" in this phrase</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ In behalf of (American English for "as representative")</p>
            <p className="font-bold text-green-700 mb-2">✅ ON behalf of</p>
            <p className="text-sm text-gray-600">Use "on behalf of" in international/British English</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl border-2 border-green-400">
        <h3 className="text-2xl font-bold mb-6 text-green-900">📧 Sample Business Email</h3>

        <div className="bg-white/80 p-6 rounded-lg space-y-4">
          <p className="text-gray-800">Dear Mr. Johnson,</p>

          <p className="text-gray-800">
            <span className="font-bold text-blue-700">With reference to</span> your email of May 15th, I am writing <span className="font-bold text-purple-700">on behalf of</span> the executive team to address your concerns.
          </p>

          <p className="text-gray-800">
            <span className="font-bold text-green-700">In light of</span> recent market changes, we have reviewed our pricing structure. <span className="font-bold text-red-700">Despite</span> the challenging economic climate, we are committed to maintaining quality.
          </p>

          <p className="text-gray-800">
            All our processes operate <span className="font-bold text-purple-700">in accordance with</span> industry standards, and we have made adjustments <span className="font-bold text-pink-700">for the sake of</span> efficiency.
          </p>

          <p className="text-gray-800">
            <span className="font-bold text-green-700">With regard to</span> your specific request, we will respond within 48 hours.
          </p>

          <p className="text-gray-800">Best regards,<br />Sarah Williams</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="font-bold text-xl mb-4 text-yellow-900">🏆 You've Mastered Complex Prepositions!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Теперь вы владеете мощным инструментом формального английского! Эти конструкции сделают ваше письмо и речь на уровне C1-C2 намного более профессиональными и академичными.
        </p>
        <div className="bg-white/60 p-4 rounded-lg">
          <p className="font-bold text-orange-700 mb-2">Remember:</p>
          <p className="text-gray-700">• Use these in <span className="font-bold">formal contexts</span> only</p>
          <p className="text-gray-700">• They're perfect for essays, reports, business emails</p>
          <p className="text-gray-700">• Don't overuse in casual conversation</p>
        </div>
      </div>
    </div>
  );
}
