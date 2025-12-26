"use client";

import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function DiscourseMarkers({ step }: Props) {
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
        <div className="text-8xl mb-6 animate-pulse">🎓💬</div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Advanced Discourse Markers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sophisticated linking expressions for C1-C2 academic writing and formal speech
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">🎯 What Are Discourse Markers?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Discourse markers are words or phrases that help organize and connect ideas in writing and speech.
              Advanced discourse markers show <span className="font-bold text-blue-700">sophisticated thinking</span> and are essential for:
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-blue-800 mb-2">📝 Academic Writing</p>
                <p className="text-sm text-gray-600">Essays, research papers, dissertations</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <p className="font-bold text-indigo-800 mb-2">💼 Business Communication</p>
                <p className="text-sm text-gray-600">Reports, proposals, formal emails</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-bold text-purple-800 mb-2">🎤 Formal Presentations</p>
                <p className="text-sm text-gray-600">Conference talks, lectures</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <p className="font-bold text-pink-800 mb-2">📊 Exam Writing</p>
                <p className="text-sm text-gray-600">IELTS, TOEFL, CAE, CPE</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Examples of Advanced Discourse Markers</h4>

            <div className="space-y-3">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-700 mb-1">AS REGARDS (что касается)</p>
                <p className="text-sm text-gray-700">As regards your proposal, we have some concerns.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-700 mb-1">INSOFAR AS (поскольку, в той степени в которой)</p>
                <p className="text-sm text-gray-700">This approach works insofar as resources are available.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-700 mb-1">ALBEIT (хотя, пусть и)</p>
                <p className="text-sm text-gray-700">The results were positive, albeit slightly lower than expected.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-700 mb-1">WHEREBY (посредством чего, при котором)</p>
                <p className="text-sm text-gray-700">We have a system whereby employees can submit feedback anonymously.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">📊 Formality Comparison</h4>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="font-bold text-red-700 mb-2">❌ Informal</p>
                  <p className="text-gray-700">About your question...</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="font-bold text-green-700 mb-2">✅ Formal</p>
                  <p className="text-gray-700"><span className="font-bold">As regards</span> your question...</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="font-bold text-red-700 mb-2">❌ Informal</p>
                  <p className="text-gray-700">The plan is good, even though it's expensive.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="font-bold text-green-700 mb-2">✅ Formal</p>
                  <p className="text-gray-700">The plan is sound, <span className="font-bold">albeit</span> costly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold text-lg mb-3 text-blue-900">🎯 What You'll Learn</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-700">✓ 15+ sophisticated discourse markers</p>
                <p className="text-gray-700">✓ Exact meanings and nuances</p>
                <p className="text-gray-700">✓ Formal context usage</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">✓ Academic writing integration</p>
                <p className="text-gray-700">✓ Common collocations</p>
                <p className="text-gray-700">✓ Position in sentences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Important Note</h3>
        <p className="text-gray-700 leading-relaxed">
          These markers are <span className="font-bold">extremely formal</span>. Use them in academic essays, business reports, and formal presentations.
          In casual conversation, they will sound overly stiff and unnatural.
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📋</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Group 1: Reference & Topic</h2>
        <p className="text-lg text-gray-600">Introducing topics formally</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">AS REGARDS / AS TO (что касается)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: concerning; about; with reference to</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">As regards</span> the budget, further cuts will be necessary.</p>
                <p className="text-sm text-gray-600 italic">Что касается бюджета, потребуются дальнейшие сокращения.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">As to</span> whether this approach will work, only time will tell.</p>
                <p className="text-sm text-gray-600 italic">Что касается того, сработает ли этот подход, покажет только время.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">As regards</span> implementation, we have developed a three-phase plan.</p>
                <p className="text-sm text-gray-600 italic">Что касается реализации, мы разработали трёхфазный план.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">There is uncertainty <span className="text-blue-700">as to</span> the cause of the problem.</p>
                <p className="text-sm text-gray-600 italic">Существует неопределённость относительно причины проблемы.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">Usage Note:</p>
              <p className="text-sm text-gray-700"><span className="font-bold">AS REGARDS</span> is slightly more formal than <span className="font-bold">AS TO</span></p>
              <p className="text-sm text-gray-700"><span className="font-bold">AS TO</span> often introduces questions or uncertainty</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold mb-6 text-indigo-800">WITH RESPECT TO (что касается, в отношении)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <p className="text-lg font-bold text-indigo-900 mb-3">Meaning: concerning; regarding (very formal, academic/technical)</p>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-indigo-700">With respect to</span> your first question, the data suggests otherwise.</p>
                <p className="text-sm text-gray-600 italic">Что касается вашего первого вопроса, данные говорят об обратном.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The theory is problematic <span className="text-indigo-700">with respect to</span> its practical applications.</p>
                <p className="text-sm text-gray-600 italic">Теория проблематична в отношении её практического применения.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-indigo-700">With respect to</span> methodology, the researchers employed a mixed-methods approach.</p>
                <p className="text-sm text-gray-600 italic">Что касается методологии, исследователи использовали смешанный подход.</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4 border border-orange-300">
              <p className="font-bold text-orange-800 mb-2">⚠️ Very Formal</p>
              <p className="text-sm text-gray-700">Most common in academic papers, technical reports, and scientific writing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">IN TERMS OF (с точки зрения, в плане)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Meaning: from the perspective of; when considering (less formal than others, but still professional)</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">In terms of</span> cost, this option is the most affordable.</p>
                <p className="text-sm text-gray-600 italic">С точки зрения стоимости, этот вариант самый доступный.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The project was successful <span className="text-green-700">in terms of</span> meeting deadlines.</p>
                <p className="text-sm text-gray-600 italic">Проект был успешным с точки зрения соблюдения сроков.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">In terms of</span> environmental impact, renewable energy is superior.</p>
                <p className="text-sm text-gray-600 italic">В плане воздействия на окружающую среду, возобновляемая энергия превосходит.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">💡 Pro Tip</p>
              <p className="text-sm text-gray-700">"In terms of" is widely used and versatile. It's less stuffy than "with respect to" but still professional.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="font-bold text-lg mb-4 text-purple-900">🎯 Quick Comparison</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-bold text-blue-700">AS REGARDS / AS TO</p>
            <p className="text-sm text-gray-600">Very formal, academic/business writing</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="font-bold text-indigo-700">WITH RESPECT TO</p>
            <p className="text-sm text-gray-600">Extremely formal, technical/academic contexts</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-bold text-green-700">IN TERMS OF</p>
            <p className="text-sm text-gray-600">Professional but less formal, widely used</p>
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
      answers: ["As regards", "As to"],
      right: "the timeline, we expect completion by December.",
    },
    {
      left: "The policy is unclear",
      answers: ["with respect to"],
      right: "remote work arrangements.",
    },
    {
      left: "",
      answers: ["In terms of"],
      right: "efficiency, the new system is far superior.",
    },
    {
      left: "There is debate",
      answers: ["as to"],
      right: "whether the approach is ethical.",
    },
    {
      left: "",
      answers: ["As regards"],
      right: "funding, several options are being explored.",
    },
    {
      left: "The study is limited",
      answers: ["with respect to"],
      right: "sample size and diversity.",
    },
    {
      left: "",
      answers: ["In terms of"],
      right: "performance, the results exceeded expectations.",
    },
    {
      left: "Uncertainty remains",
      answers: ["as to"],
      right: "the long-term effects.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Practice: Reference & Topic</h2>
        <p className="text-lg text-gray-600">as regards / with respect to / in terms of</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
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
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Group 2: Limitation & Condition</h2>
        <p className="text-lg text-gray-600">Expressing constraints and conditions</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">INSOFAR AS (поскольку, в той степени в которой)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Meaning: to the extent that; to the degree that</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The plan will succeed <span className="text-purple-700">insofar as</span> adequate resources are provided.</p>
                <p className="text-sm text-gray-600 italic">План будет успешным в той степени, в которой будут предоставлены достаточные ресурсы.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">Insofar as</span> I can determine, the data is accurate.</p>
                <p className="text-sm text-gray-600 italic">Насколько я могу определить, данные точны.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">This approach is valid <span className="text-purple-700">insofar as</span> certain assumptions hold true.</p>
                <p className="text-sm text-gray-600 italic">Этот подход действителен постольку, поскольку определённые предположения верны.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The theory works <span className="text-purple-700">insofar as</span> variables remain constant.</p>
                <p className="text-sm text-gray-600 italic">Теория работает в той мере, в какой переменные остаются постоянными.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Structure:</p>
              <p className="text-sm text-gray-700">Statement + <span className="font-bold">INSOFAR AS</span> + condition/limitation</p>
              <p className="text-sm text-gray-700 mt-2">Means: "This is true, but only to the extent that [condition] applies"</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">INASMUCH AS (поскольку, так как)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: since; because; considering that (formal)</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">Inasmuch as</span> the evidence is inconclusive, we cannot make a definitive statement.</p>
                <p className="text-sm text-gray-600 italic">Поскольку доказательства неокончательные, мы не можем сделать определённое заявление.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The project failed, <span className="text-blue-700">inasmuch as</span> funding was insufficient.</p>
                <p className="text-sm text-gray-600 italic">Проект провалился, поскольку финансирование было недостаточным.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">Inasmuch as</span> these conditions exist, caution is warranted.</p>
                <p className="text-sm text-gray-600 italic">Поскольку эти условия существуют, необходима осторожность.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">⚠️ Rare & Very Formal</p>
              <p className="text-sm text-gray-700">"Inasmuch as" is less common than "insofar as" and mainly appears in legal or very formal academic writing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">TO THE EXTENT THAT (в той степени, в которой)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Meaning: insofar as (slightly less formal synonym)</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">To the extent that</span> resources allow, we will expand the program.</p>
                <p className="text-sm text-gray-600 italic">В той степени, в которой ресурсы позволяют, мы расширим программу.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The policy is effective <span className="text-green-700">to the extent that</span> it is properly enforced.</p>
                <p className="text-sm text-gray-600 italic">Политика эффективна в той мере, в какой она должным образом применяется.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-green-700">To the extent that</span> technology evolves, our methods must adapt.</p>
                <p className="text-sm text-gray-600 italic">По мере того как технология развивается, наши методы должны адаптироваться.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">🎯 Key Differences</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-purple-700">INSOFAR AS</p>
            <p className="text-sm text-gray-600">= to the degree/extent that (limitation/condition)</p>
            <p className="text-xs text-gray-500 italic">Most common of the three</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-blue-700">INASMUCH AS</p>
            <p className="text-sm text-gray-600">= because; since (reason/cause)</p>
            <p className="text-xs text-gray-500 italic">Rare, very formal/legal</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-green-700">TO THE EXTENT THAT</p>
            <p className="text-sm text-gray-600">= insofar as (synonym, slightly less formal)</p>
            <p className="text-xs text-gray-500 italic">More accessible than "insofar as"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "The method is effective",
      answers: ["insofar as"],
      right: "the sample size is large enough.",
    },
    {
      left: "",
      answers: ["Inasmuch as"],
      right: "the data is incomplete, we must exercise caution.",
    },
    {
      left: "The policy will work",
      answers: ["to the extent that"],
      right: "all stakeholders cooperate.",
    },
    {
      left: "This approach succeeds",
      answers: ["insofar as"],
      right: "certain assumptions remain valid.",
    },
    {
      left: "",
      answers: ["Inasmuch as"],
      right: "no alternative exists, we must proceed with the current plan.",
    },
    {
      left: "Improvements can be made",
      answers: ["to the extent that"],
      right: "budget constraints allow.",
    },
    {
      left: "The theory holds",
      answers: ["insofar as"],
      right: "environmental factors are controlled.",
    },
    {
      left: "",
      answers: ["Inasmuch as"],
      right: "the evidence supports this conclusion, we can move forward.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚖️</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Practice: Limitation & Condition</h2>
        <p className="text-lg text-gray-600">insofar as / inasmuch as / to the extent that</p>
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
        <div className="text-7xl mb-4">🔄</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Group 3: Concession & Contrast</h2>
        <p className="text-lg text-gray-600">Expressing "although" and "however"</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 border-2 border-pink-200">
        <h3 className="text-2xl font-bold mb-6 text-pink-800">ALBEIT (хотя, пусть и)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <p className="text-lg font-bold text-pink-900 mb-3">Meaning: although; even though (formal, elegant way to add contrast)</p>

            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">The results were positive, <span className="text-pink-700">albeit</span> modest.</p>
                <p className="text-sm text-gray-600 italic">Результаты были положительными, хотя и скромными.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">He is talented, <span className="text-pink-700">albeit</span> inexperienced.</p>
                <p className="text-sm text-gray-600 italic">Он талантлив, пусть и неопытен.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">The plan is ambitious, <span className="text-pink-700">albeit</span> risky.</p>
                <p className="text-sm text-gray-600 italic">План амбициозный, хотя и рискованный.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">Progress has been made, <span className="text-pink-700">albeit</span> slowly.</p>
                <p className="text-sm text-gray-600 italic">Прогресс был достигнут, хотя и медленно.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">💡 Structure:</p>
              <p className="text-sm text-gray-700">Statement, <span className="font-bold">ALBEIT</span> + adjective/adverb</p>
              <p className="text-sm text-gray-700 mt-2 text-green-700">✅ The plan is good, albeit expensive.</p>
              <p className="text-sm text-gray-700 text-red-700">❌ The plan is good, albeit it is expensive. (wrong — don't use "it is")</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">WHILST / WHILE (в то время как, тогда как)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: whereas; although (formal, especially "whilst" in British English)</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">Whilst</span> some improvements have been made, significant challenges remain.</p>
                <p className="text-sm text-gray-600 italic">Хотя некоторые улучшения были достигнуты, остаются существенные проблемы.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The approach is innovative, <span className="text-blue-700">while</span> the execution is flawed.</p>
                <p className="text-sm text-gray-600 italic">Подход инновационный, тогда как исполнение ошибочно.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">Whilst</span> acknowledging the limitations, we believe the study provides valuable insights.</p>
                <p className="text-sm text-gray-600 italic">Признавая ограничения, мы считаем, что исследование даёт ценные выводы.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">British vs American:</p>
              <p className="text-sm text-gray-700"><span className="font-bold">WHILST</span> = British English (formal)</p>
              <p className="text-sm text-gray-700"><span className="font-bold">WHILE</span> = Universal (both UK and US)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">NEVERTHELESS / NONETHELESS (тем не менее)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Meaning: however; in spite of that (formal transition)</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The challenges are substantial. <span className="text-purple-700">Nevertheless</span>, we remain optimistic.</p>
                <p className="text-sm text-gray-600 italic">Проблемы существенны. Тем не менее, мы остаёмся оптимистичными.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The evidence is limited. <span className="text-purple-700">Nonetheless</span>, certain trends are apparent.</p>
                <p className="text-sm text-gray-600 italic">Доказательства ограничены. Тем не менее, определённые тенденции очевидны.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">Funding was cut by 30%. <span className="text-purple-700">Nevertheless</span>, the project continued.</p>
                <p className="text-sm text-gray-600 italic">Финансирование было сокращено на 30%. Тем не менее, проект продолжился.</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-300">
              <p className="font-bold text-green-800 mb-2">Usage:</p>
              <p className="text-sm text-gray-700"><span className="font-bold">NEVERTHELESS</span> = <span className="font-bold">NONETHELESS</span> (completely interchangeable)</p>
              <p className="text-sm text-gray-700">Both are more formal than "however"</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-2 border-green-300">
        <h3 className="font-bold text-lg mb-4 text-green-900">🎯 Formality Scale</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-bold text-pink-700">ALBEIT</p>
            <p className="text-sm text-gray-600">Elegant, concise way to add contrast mid-sentence</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-bold text-blue-700">WHILST (British) / WHILE</p>
            <p className="text-sm text-gray-600">"Whilst" is formal (mainly British); "While" is universal</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-purple-400">
            <p className="font-bold text-purple-700">NEVERTHELESS / NONETHELESS</p>
            <p className="text-sm text-gray-600">More formal than "however", signals strong contrast</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "The experiment was successful,",
      answers: ["albeit"],
      right: "with some limitations.",
    },
    {
      left: "",
      answers: ["Whilst", "While"],
      right: "the theory is elegant, its practical application remains unclear.",
    },
    {
      left: "The budget was reduced significantly.",
      answers: ["Nevertheless", "Nonetheless"],
      right: ", the team delivered exceptional results.",
    },
    {
      left: "He is a skilled communicator,",
      answers: ["albeit"],
      right: "somewhat reserved in large groups.",
    },
    {
      left: "The findings are promising.",
      answers: ["Nevertheless", "Nonetheless"],
      right: ", further research is required.",
    },
    {
      left: "",
      answers: ["Whilst", "While"],
      right: "acknowledging these concerns, we must move forward.",
    },
    {
      left: "Progress has been made,",
      answers: ["albeit"],
      right: "at a slower pace than anticipated.",
    },
    {
      left: "The risks are considerable.",
      answers: ["Nevertheless", "Nonetheless"],
      right: ", the potential rewards justify proceeding.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔄</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Practice: Concession & Contrast</h2>
        <p className="text-lg text-gray-600">albeit / whilst / nevertheless / nonetheless</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step8() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔗</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Group 4: Process & Method</h2>
        <p className="text-lg text-gray-600">Describing how something works</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold mb-6 text-indigo-800">WHEREBY (посредством чего, при котором)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <p className="text-lg font-bold text-indigo-900 mb-3">Meaning: by which; through which (describes a process or system)</p>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">We have established a system <span className="text-indigo-700">whereby</span> employees can submit complaints anonymously.</p>
                <p className="text-sm text-gray-600 italic">Мы создали систему, посредством которой сотрудники могут подавать жалобы анонимно.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The company has a policy <span className="text-indigo-700">whereby</span> all decisions are documented.</p>
                <p className="text-sm text-gray-600 italic">У компании есть политика, согласно которой все решения документируются.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">They introduced a mechanism <span className="text-indigo-700">whereby</span> feedback is collected quarterly.</p>
                <p className="text-sm text-gray-600 italic">Они ввели механизм, при помощи которого обратная связь собирается ежеквартально.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">An agreement was reached <span className="text-indigo-700">whereby</span> both parties would share the costs.</p>
                <p className="text-sm text-gray-600 italic">Было достигнуто соглашение, согласно которому обе стороны разделят расходы.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Common collocations:</p>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-sm text-gray-700">• a system whereby...</p>
                <p className="text-sm text-gray-700">• a policy whereby...</p>
                <p className="text-sm text-gray-700">• a process whereby...</p>
                <p className="text-sm text-gray-700">• an agreement whereby...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">WHEREIN (в котором, где)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Meaning: in which; where (very formal, archaic feel)</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">This is a situation <span className="text-blue-700">wherein</span> caution is paramount.</p>
                <p className="text-sm text-gray-600 italic">Это ситуация, в которой осторожность первостепенна.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The study identified several areas <span className="text-blue-700">wherein</span> improvements could be made.</p>
                <p className="text-sm text-gray-600 italic">Исследование выявило несколько областей, в которых можно внести улучшения.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">We face a paradox <span className="text-blue-700">wherein</span> efficiency reduces quality.</p>
                <p className="text-sm text-gray-600 italic">Мы сталкиваемся с парадоксом, при котором эффективность снижает качество.</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4 border border-orange-300">
              <p className="font-bold text-orange-800 mb-2">⚠️ Very Formal/Archaic</p>
              <p className="text-sm text-gray-700">"Wherein" sounds old-fashioned. Most modern writers prefer "in which" or "where".</p>
              <p className="text-sm text-gray-700 mt-2">Use it sparingly in legal or very formal academic contexts only.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">THEREOF / THEREIN (его, этого / в этом, в том)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Meaning: of it/that; in it/that (legal/formal)</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The contract and all provisions <span className="text-green-700">thereof</span> remain in effect.</p>
                <p className="text-sm text-gray-600 italic">Контракт и все его положения остаются в силе.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The problem lies <span className="text-green-700">therein</span>.</p>
                <p className="text-sm text-gray-600 italic">Проблема заключается в этом.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The document or any part <span className="text-green-700">thereof</span> may not be reproduced.</p>
                <p className="text-sm text-gray-600 italic">Документ или любая его часть не могут быть воспроизведены.</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-4 border border-red-300">
              <p className="font-bold text-red-800 mb-2">⚠️ Legal/Archaic Language</p>
              <p className="text-sm text-gray-700">"Thereof" and "therein" are almost exclusively used in legal documents.</p>
              <p className="text-sm text-gray-700 mt-2">Avoid in academic or business writing — they sound too old-fashioned.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="font-bold text-lg mb-4 text-purple-900">🎯 Usage Recommendations</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="font-bold text-indigo-700">WHEREBY</p>
            <p className="text-sm text-gray-600">✅ Widely used in business/academic writing — safe to use</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-bold text-blue-700">WHEREIN</p>
            <p className="text-sm text-gray-600">⚠️ Archaic — prefer "in which" or "where"</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-bold text-green-700">THEREOF / THEREIN</p>
            <p className="text-sm text-gray-600">❌ Legal only — avoid in other contexts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "The university has a program",
      answers: ["whereby"],
      right: "students can study abroad for a semester.",
    },
    {
      left: "This is a case",
      answers: ["wherein"],
      right: "the traditional approach fails.",
    },
    {
      left: "We established a process",
      answers: ["whereby"],
      right: "all changes are reviewed by committee.",
    },
    {
      left: "The contract specifies the terms and conditions",
      answers: ["thereof"],
      right: ".",
    },
    {
      left: "They created a mechanism",
      answers: ["whereby"],
      right: "feedback is collected monthly.",
    },
    {
      left: "We face a dilemma",
      answers: ["wherein"],
      right: "both options have drawbacks.",
    },
    {
      left: "An arrangement was made",
      answers: ["whereby"],
      right: "costs would be shared equally.",
    },
    {
      left: "The beauty of the solution lies",
      answers: ["therein"],
      right: ".",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔗</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Practice: Process & Method</h2>
        <p className="text-lg text-gray-600">whereby / wherein / thereof / therein</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6 border border-orange-300">
          <p className="font-bold text-orange-800 mb-2">⚠️ Important Note:</p>
          <p className="text-gray-700 text-sm">"Wherein", "thereof", and "therein" are archaic. In modern writing, prefer simpler alternatives like "in which", "of it", "in it".</p>
        </div>

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
          Advanced Discourse Markers — Cheat Sheet
        </h2>
        <p className="text-lg text-gray-600">Your complete formal writing guide</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 text-orange-900">📚 Complete Reference</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
            <h4 className="font-bold text-xl mb-4 text-blue-800">📋 REFERENCE & TOPIC</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700">AS REGARDS / AS TO</p>
                <p className="text-sm text-gray-700">= concerning; about</p>
                <p className="text-xs text-gray-600 italic">As regards funding, alternatives are being explored.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700">WITH RESPECT TO</p>
                <p className="text-sm text-gray-700">= concerning (very formal, academic/technical)</p>
                <p className="text-xs text-gray-600 italic">With respect to methodology, a mixed approach was used.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700">IN TERMS OF</p>
                <p className="text-sm text-gray-700">= from the perspective of; when considering</p>
                <p className="text-xs text-gray-600 italic">In terms of cost, this is the best option.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
            <h4 className="font-bold text-xl mb-4 text-purple-800">⚖️ LIMITATION & CONDITION</h4>

            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700">INSOFAR AS</p>
                <p className="text-sm text-gray-700">= to the extent that; to the degree that</p>
                <p className="text-xs text-gray-600 italic">This works insofar as resources permit.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700">INASMUCH AS</p>
                <p className="text-sm text-gray-700">= since; because (very formal, rare)</p>
                <p className="text-xs text-gray-600 italic">Inasmuch as evidence is limited, caution is needed.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700">TO THE EXTENT THAT</p>
                <p className="text-sm text-gray-700">= insofar as (synonym)</p>
                <p className="text-xs text-gray-600 italic">To the extent that budget allows, we will expand.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-pink-400">
            <h4 className="font-bold text-xl mb-4 text-pink-800">🔄 CONCESSION & CONTRAST</h4>

            <div className="space-y-3">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700">ALBEIT</p>
                <p className="text-sm text-gray-700">= although; even though (+ adjective/adverb only)</p>
                <p className="text-xs text-gray-600 italic">Results were positive, albeit modest.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700">WHILST / WHILE</p>
                <p className="text-sm text-gray-700">= whereas; although ("whilst" = British formal)</p>
                <p className="text-xs text-gray-600 italic">Whilst progress was made, challenges remain.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700">NEVERTHELESS / NONETHELESS</p>
                <p className="text-sm text-gray-700">= however; in spite of that (formal)</p>
                <p className="text-xs text-gray-600 italic">The risks are high. Nevertheless, we proceed.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-xl mb-4 text-indigo-800">🔗 PROCESS & METHOD</h4>

            <div className="space-y-3">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700">WHEREBY</p>
                <p className="text-sm text-gray-700">= by which; through which (describes process)</p>
                <p className="text-xs text-gray-600 italic">A system whereby feedback is collected monthly.</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-orange-300">
                <p className="font-bold text-indigo-700">WHEREIN ⚠️</p>
                <p className="text-sm text-gray-700">= in which (archaic — avoid)</p>
                <p className="text-xs text-gray-600 italic">Prefer: "in which" or "where"</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-red-300">
                <p className="font-bold text-indigo-700">THEREOF / THEREIN ❌</p>
                <p className="text-sm text-gray-700">= of it / in it (legal only — don't use)</p>
                <p className="text-xs text-gray-600 italic">Too archaic for modern writing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 p-8 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-6 text-red-900">❌ Common Mistakes</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ The plan is good, albeit it is expensive.</p>
            <p className="font-bold text-green-700 mb-2">✅ The plan is good, albeit expensive.</p>
            <p className="text-sm text-gray-600">"Albeit" is followed by an adjective/adverb, NOT a clause!</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ As regards to the budget...</p>
            <p className="font-bold text-green-700 mb-2">✅ As regards the budget... / With regard TO the budget...</p>
            <p className="text-sm text-gray-600">"As regards" doesn't take "to" — don't confuse with "with regard to"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ Insofar the plan works...</p>
            <p className="font-bold text-green-700 mb-2">✅ Insofar AS the plan works...</p>
            <p className="text-sm text-gray-600">"Insofar" must be followed by "as"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-2">⚠️ Using archaic forms in modern writing</p>
            <p className="text-sm text-gray-700">Don't use: wherein, thereof, therein, heretofore, henceforth</p>
            <p className="text-sm text-gray-700">Use instead: in which, of it, in it, until now, from now on</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl border-2 border-green-400">
        <h3 className="text-2xl font-bold mb-6 text-green-900">📝 Sample Academic Paragraph</h3>

        <div className="bg-white/80 p-6 rounded-lg space-y-4">
          <p className="text-gray-800">
            <span className="font-bold text-blue-700">As regards</span> the research methodology, a mixed-methods approach was employed.
            The quantitative data, <span className="font-bold text-pink-700">albeit</span> limited in scope, revealed significant trends.
            <span className="font-bold text-purple-700">Insofar as</span> the qualitative findings are concerned, interviews provided valuable context.
          </p>

          <p className="text-gray-800">
            <span className="font-bold text-blue-700">Whilst</span> some scholars argue for a purely quantitative approach,
            the evidence suggests otherwise. <span className="font-bold text-pink-700">Nevertheless</span>, certain limitations must be acknowledged.
            The study established a framework <span className="font-bold text-indigo-700">whereby</span> future researchers can build upon these findings.
          </p>

          <p className="text-gray-800">
            <span className="font-bold text-green-700">In terms of</span> practical implications, the results have significant relevance for policy-makers.
            <span className="font-bold text-purple-700">To the extent that</span> resources permit, further investigation is warranted.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="font-bold text-xl mb-4 text-yellow-900">🏆 Congratulations!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Вы освоили продвинутые дискурсивные маркеры! Эти конструкции сделают ваш академический и деловой английский на уровне C1-C2 гораздо более изощрённым и профессиональным.
        </p>
        <div className="bg-white/60 p-4 rounded-lg">
          <p className="font-bold text-orange-700 mb-2">Final Tips:</p>
          <p className="text-gray-700">• Use these markers in <span className="font-bold">formal writing</span> (essays, reports, academic papers)</p>
          <p className="text-gray-700">• Don't overuse — mix with simpler connectors</p>
          <p className="text-gray-700">• Avoid archaic forms like "wherein", "thereof"</p>
          <p className="text-gray-700">• Practice using them in your own writing!</p>
        </div>
      </div>
    </div>
  );
}
