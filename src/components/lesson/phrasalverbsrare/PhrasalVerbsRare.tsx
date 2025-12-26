"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function PhrasalVerbsRare({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔤</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Phrasal Verbs: Rare & Nuanced
          </h2>
          <p className="text-xl text-gray-600">
            Редкие и нюансированные фразовые глаголы
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { id: "intro", label: "Введение", icon: "📚" },
            { id: "why", label: "Зачем изучать", icon: "🎯" },
            { id: "topics", label: "Темы урока", icon: "📋" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveSection(tab.id as "intro" | "why" | "topics")
              }
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeSection === tab.id
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-8">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">
              Редкие фразовые глаголы: тонкости английского языка
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Этот урок посвящён <strong>редким и нюансированным фразовым глаголам</strong> —
              выражениям, которые не часто встречаются в учебниках, но широко используются
              носителями языка в повседневной речи. Эти глаголы передают тонкие оттенки
              значения и делают речь более естественной и выразительной.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                <div className="text-3xl mb-2">🎭</div>
                <h4 className="font-bold text-teal-800">
                  Обман и манипуляции
                </h4>
                <p className="text-gray-600 text-sm">
                  fob off, palm off, fob onto, put one over on
                </p>
              </div>
              <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-bold text-cyan-800">Бизнес и коммерция</h4>
                <p className="text-gray-600 text-sm">
                  drum up, eke out, wangle out, fob off
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-bold text-blue-800">
                  Общение и социальные отношения
                </h4>
                <p className="text-gray-600 text-sm">
                  butter up, cozy up to, cotton on to, latch onto
                </p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold text-indigo-800">
                  Усилия и борьба
                </h4>
                <p className="text-gray-600 text-sm">
                  eke out, scrape by, muddle through, soldier on
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-8">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Зачем изучать редкие фразовые глаголы?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Точность выражения
                  </h4>
                  <p className="text-gray-600">
                    Редкие фразовые глаголы передают тонкие оттенки значения,
                    которые невозможно выразить простыми словами
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                <span className="text-3xl">🗣️</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Естественная речь
                  </h4>
                  <p className="text-gray-600">
                    Использование этих глаголов делает речь более естественной
                    и приближает её к речи носителей языка
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Понимание нюансов
                  </h4>
                  <p className="text-gray-600">
                    Знание редких фразовых глаголов помогает лучше понимать
                    литературу, фильмы и повседневную речь носителей
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-teal-50 rounded-xl">
                <span className="text-3xl">💎</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Продвинутый уровень
                  </h4>
                  <p className="text-gray-600">
                    Владение редкими фразовыми глаголами демонстрирует высокий
                    уровень владения языком
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Структура курса:
            </h3>
            <div className="grid gap-3">
              {[
                {
                  step: 2,
                  title: "Deception & Manipulation",
                  desc: "fob off, palm off, fob onto, put one over on, pull the wool over",
                },
                {
                  step: 3,
                  title: "Business & Commerce",
                  desc: "drum up, eke out, wangle out, fob off, fudge up",
                },
                {
                  step: 4,
                  title: "Social & Communication",
                  desc: "butter up, cozy up to, cotton on to, latch onto, chime in",
                },
                {
                  step: 5,
                  title: "Effort & Struggle",
                  desc: "eke out, scrape by, muddle through, soldier on, plod along",
                },
                {
                  step: 6,
                  title: "Time & Process",
                  desc: "tide over, while away, fritter away, eke out, drag on",
                },
                {
                  step: 7,
                  title: "Emotions & Attitudes",
                  desc: "mope about, perk up, chafe at, bristle at, warm to",
                },
                {
                  step: 8,
                  title: "Movement & Position",
                  desc: "hunker down, hole up, hightail it, leg it, scarper",
                },
                {
                  step: 9,
                  title: "More Nuanced Verbs",
                  desc: "fizzle out, peter out, taper off, fudge up, cobble together",
                },
                {
                  step: 10,
                  title: "Practice & Exercises",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl border border-teal-100"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick facts */}
        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6 border-2 border-teal-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-teal-800 mb-2">
                Важно помнить
              </h3>
              <p className="text-gray-700">
                Редкие фразовые глаголы часто имеют <strong>специфические контексты</strong> использования.
                Например, &quot;fob off&quot; и &quot;palm off&quot; оба означают &quot;обмануть&quot;,
                но &quot;fob off&quot; чаще используется с отговорками, а &quot;palm off&quot; —
                с продажей некачественного товара. Понимание этих нюансов критично для правильного использования.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Deception & Manipulation
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const verbs = [
      {
        verb: "fob off",
        pronunciation: "/fɒb ɒf/",
        translation: "отделаться, отговориться",
        definition:
          "To deceive someone by giving them something inferior or by making excuses",
        examples: [
          "He tried to fob me off with excuses about why the project was delayed.",
          "Don't let them fob you off with that cheap replacement.",
          "She fobbed off her responsibilities onto her assistant.",
        ],
        nuance:
          "Often implies using excuses or inferior substitutes to avoid responsibility",
        relatedVerbs: ["palm off", "put off", "brush off"],
      },
      {
        verb: "palm off",
        pronunciation: "/pɑːm ɒf/",
        translation: "всучить, подсунуть",
        definition:
          "To sell or give something inferior to someone, often by deception",
        examples: [
          "The salesman tried to palm off a defective product on me.",
          "They palmed off the old stock as new merchandise.",
          "Don't let them palm that off on you.",
        ],
        nuance:
          "Specifically refers to selling or giving inferior goods, often with deception",
        relatedVerbs: ["fob off", "foist off", "pass off"],
      },
      {
        verb: "fob onto",
        pronunciation: "/fɒb ˈɒntuː/",
        translation: "свалить на кого-то",
        definition:
          "To shift responsibility or blame onto someone else",
        examples: [
          "He fobbed the problem onto his colleague.",
          "They're trying to fob the blame onto us.",
          "Don't let them fob that onto you.",
        ],
        nuance: "Emphasizes shifting responsibility or blame to another person",
        relatedVerbs: ["pass off", "shift onto", "blame on"],
      },
      {
        verb: "put one over on",
        pronunciation: "/pʊt wʌn ˈəʊvər ɒn/",
        translation: "обвести вокруг пальца",
        definition:
          "To deceive or trick someone successfully",
        examples: [
          "He really put one over on us with that story.",
          "I can't believe they put one over on the entire committee.",
          "She thought she could put one over on me, but I knew better.",
        ],
        nuance: "Implies successful deception, often with a sense of cleverness",
        relatedVerbs: ["pull the wool over", "hoodwink", "deceive"],
      },
      {
        verb: "pull the wool over",
        pronunciation: "/pʊl ðə wʊl ˈəʊvə/",
        translation: "обмануть, ввести в заблуждение",
        definition:
          "To deceive someone, especially by hiding the truth",
        examples: [
          "You can't pull the wool over my eyes that easily.",
          "They tried to pull the wool over the investors' eyes.",
          "Don't think you can pull the wool over me.",
        ],
        nuance:
          "Often used in the phrase 'pull the wool over someone's eyes'",
        relatedVerbs: ["put one over on", "deceive", "hoodwink"],
      },
      {
        verb: "foist off",
        pronunciation: "/fɔɪst ɒf/",
        translation: "навязать, всучить",
        definition:
          "To force something unwanted on someone",
        examples: [
          "They tried to foist their old furniture off on us.",
          "Don't let them foist that responsibility off on you.",
          "The company foisted the problem off onto its customers.",
        ],
        nuance: "Emphasizes forcing something unwanted onto someone",
        relatedVerbs: ["palm off", "fob off", "impose on"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎭</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Deception & Manipulation
          </h2>
          <p className="text-xl text-gray-600">
            Обман и манипуляции
          </p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-teal-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-teal-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-teal-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Business & Commerce
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const verbs = [
      {
        verb: "drum up",
        pronunciation: "/drʌm ʌp/",
        translation: "создать, привлечь, организовать",
        definition:
          "To create or generate something, especially business or support, through effort",
        examples: [
          "We need to drum up more support for the project.",
          "The company is trying to drum up new business.",
          "They managed to drum up interest in the product.",
        ],
        nuance:
          "Often used in business contexts to mean generating interest or support",
        relatedVerbs: ["generate", "attract", "create"],
      },
      {
        verb: "eke out",
        pronunciation: "/iːk aʊt/",
        translation: "с трудом добывать, сводить концы с концами",
        definition:
          "To make something last longer by using it carefully; to obtain something with difficulty",
        examples: [
          "They eked out a living by selling vegetables.",
          "We need to eke out our savings until next month.",
          "She eked out a victory in the final seconds.",
        ],
        nuance:
          "Implies making something last or obtaining something with great difficulty",
        relatedVerbs: ["scrape by", "make do", "survive"],
      },
      {
        verb: "wangle out",
        pronunciation: "/ˈwæŋɡəl aʊt/",
        translation: "выкрутиться, вывернуться",
        definition:
          "To obtain something through clever or devious means",
        examples: [
          "He managed to wangle out of the meeting.",
          "She wangled a promotion out of her boss.",
          "They wangled free tickets out of the promoter.",
        ],
        nuance: "Implies using cleverness or manipulation to get something",
        relatedVerbs: ["obtain", "get", "extract"],
      },
      {
        verb: "fudge up",
        pronunciation: "/fʌdʒ ʌp/",
        translation: "сделать кое-как, наскоро",
        definition:
          "To do something carelessly or make a mess of something",
        examples: [
          "He fudged up the report and had to redo it.",
          "Don't fudge up the presentation.",
          "They fudged up the entire project.",
        ],
        nuance: "Implies doing something poorly or carelessly",
        relatedVerbs: ["mess up", "botch", "screw up"],
      },
      {
        verb: "cobble together",
        pronunciation: "/ˈkɒbəl təˈɡeðə/",
        translation: "собрать на скорую руку",
        definition:
          "To make or assemble something quickly and roughly",
        examples: [
          "We cobbled together a solution from spare parts.",
          "They cobbled together a plan at the last minute.",
          "I cobbled together a meal from what was in the fridge.",
        ],
        nuance: "Implies creating something quickly from available materials",
        relatedVerbs: ["put together", "assemble", "improvise"],
      },
      {
        verb: "hash out",
        pronunciation: "/hæʃ aʊt/",
        translation: "обсудить детально, договориться",
        definition:
          "To discuss something thoroughly in order to reach an agreement",
        examples: [
          "We need to hash out the details of the contract.",
          "Let's hash out our differences.",
          "They hashed out a compromise.",
        ],
        nuance: "Implies thorough discussion to resolve differences",
        relatedVerbs: ["discuss", "negotiate", "work out"],
      },
      {
        verb: "hammer out",
        pronunciation: "/ˈhæmər aʊt/",
        translation: "выработать, договориться",
        definition:
          "To work hard to reach an agreement or solution",
        examples: [
          "They hammered out a deal after hours of negotiation.",
          "We need to hammer out the details.",
          "The team hammered out a solution.",
        ],
        nuance: "Emphasizes the effort required to reach an agreement",
        relatedVerbs: ["work out", "negotiate", "resolve"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">💼</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Business & Commerce
          </h2>
          <p className="text-xl text-gray-600">Бизнес и коммерция</p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-cyan-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Social & Communication
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const verbs = [
      {
        verb: "butter up",
        pronunciation: "/ˈbʌtər ʌp/",
        translation: "подлизываться, льстить",
        definition:
          "To flatter someone, especially to gain favor",
        examples: [
          "He's been buttering up the boss all week.",
          "Don't try to butter me up — I know what you want.",
          "She buttered up her in-laws before asking for a loan.",
        ],
        nuance: "Implies insincere flattery to gain something",
        relatedVerbs: ["flatter", "suck up to", "brown-nose"],
      },
      {
        verb: "cozy up to",
        pronunciation: "/ˈkəʊzi ʌp tuː/",
        translation: "подлизываться, сближаться",
        definition:
          "To try to become friendly with someone, especially for personal gain",
        examples: [
          "He's been cozying up to the new manager.",
          "She cozied up to the wealthy investors.",
          "They're cozying up to the wrong people.",
        ],
        nuance: "Implies trying to get close to someone for advantage",
        relatedVerbs: ["butter up", "suck up to", "ingratiate"],
      },
      {
        verb: "cotton on to",
        pronunciation: "/ˈkɒtən ɒn tuː/",
        translation: "понять, смекнуть",
        definition:
          "To begin to understand or realize something",
        examples: [
          "I finally cottoned on to what they were planning.",
          "She cottoned on to the scam quickly.",
          "It took him a while to cotton on to the joke.",
        ],
        nuance: "Informal, implies gradual understanding",
        relatedVerbs: ["catch on", "understand", "realize"],
      },
      {
        verb: "latch onto",
        pronunciation: "/lætʃ ˈɒntuː/",
        translation: "прицепиться, ухватиться",
        definition:
          "To become attached to someone or something; to understand and remember",
        examples: [
          "The child latched onto his mother's leg.",
          "She latched onto the idea immediately.",
          "He latched onto the wrong conclusion.",
        ],
        nuance: "Can mean physical attachment or mental grasp",
        relatedVerbs: ["attach to", "grasp", "cling to"],
      },
      {
        verb: "chime in",
        pronunciation: "/tʃaɪm ɪn/",
        translation: "вставить слово, вклиниться",
        definition:
          "To join in a conversation or activity, especially by interrupting",
        examples: [
          "He chimed in with his opinion.",
          "Don't chime in when adults are talking.",
          "She chimed in at the perfect moment.",
        ],
        nuance: "Often implies interrupting or adding to an ongoing conversation",
        relatedVerbs: ["interrupt", "join in", "contribute"],
      },
      {
        verb: "pipe up",
        pronunciation: "/paɪp ʌp/",
        translation: "вставить слово, высказаться",
        definition:
          "To speak up, especially suddenly or unexpectedly",
        examples: [
          "She piped up with a suggestion.",
          "He finally piped up about the problem.",
          "Someone piped up from the back of the room.",
        ],
        nuance: "Implies speaking up suddenly, often unexpectedly",
        relatedVerbs: ["speak up", "chime in", "interject"],
      },
      {
        verb: "tune out",
        pronunciation: "/tjuːn aʊt/",
        translation: "отключиться, перестать слушать",
        definition:
          "To stop paying attention; to ignore",
        examples: [
          "I tuned out during the boring lecture.",
          "He tunes out when his parents lecture him.",
          "She tuned out the background noise.",
        ],
        nuance: "Implies deliberately ignoring or not paying attention",
        relatedVerbs: ["ignore", "zone out", "disregard"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">💬</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Social & Communication
          </h2>
          <p className="text-xl text-gray-600">
            Общение и социальные отношения
          </p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-blue-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Effort & Struggle
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const verbs = [
      {
        verb: "scrape by",
        pronunciation: "/skreɪp baɪ/",
        translation: "с трудом сводить концы с концами",
        definition:
          "To manage to survive or succeed with difficulty",
        examples: [
          "They're scraping by on minimum wage.",
          "We scraped by with just enough money.",
          "She scraped by in the exam.",
        ],
        nuance: "Implies barely managing to survive or succeed",
        relatedVerbs: ["eke out", "get by", "survive"],
      },
      {
        verb: "muddle through",
        pronunciation: "/ˈmʌdəl θruː/",
        translation: "кое-как справиться",
        definition:
          "To succeed in doing something despite lack of skill or planning",
        examples: [
          "We'll just have to muddle through somehow.",
          "He muddled through the presentation.",
          "They muddled through without proper training.",
        ],
        nuance: "Implies succeeding despite confusion or lack of preparation",
        relatedVerbs: ["get by", "manage", "cope"],
      },
      {
        verb: "soldier on",
        pronunciation: "/ˈsəʊldʒər ɒn/",
        translation: "продолжать упорно, не сдаваться",
        definition:
          "To continue doing something despite difficulties",
        examples: [
          "Despite the setbacks, we soldiered on.",
          "She soldiered on through the pain.",
          "They soldiered on despite the criticism.",
        ],
        nuance: "Emphasizes persistence and determination despite obstacles",
        relatedVerbs: ["persevere", "continue", "persist"],
      },
      {
        verb: "plod along",
        pronunciation: "/plɒd əˈlɒŋ/",
        translation: "плестись, медленно продвигаться",
        definition:
          "To progress slowly and steadily, often with effort",
        examples: [
          "The project is plodding along slowly.",
          "He plodded along through the book.",
          "We're plodding along with the renovations.",
        ],
        nuance: "Implies slow, steady progress, often laborious",
        relatedVerbs: ["trudge", "plod", "progress slowly"],
      },
      {
        verb: "tough out",
        pronunciation: "/tʌf aʊt/",
        translation: "выдержать, перетерпеть",
        definition:
          "To endure something difficult",
        examples: [
          "We'll have to tough out the winter.",
          "He toughed out the training program.",
          "They're toughing out the difficult times.",
        ],
        nuance: "Emphasizes enduring hardship with determination",
        relatedVerbs: ["endure", "persevere", "stick it out"],
      },
      {
        verb: "grind away",
        pronunciation: "/ɡraɪnd əˈweɪ/",
        translation: "упорно работать, вкалывать",
        definition:
          "To work hard and persistently at something",
        examples: [
          "He's been grinding away at his studies.",
          "They're grinding away at the project.",
          "She ground away for hours on the report.",
        ],
        nuance: "Implies hard, persistent work, often tedious",
        relatedVerbs: ["work hard", "persevere", "toil"],
      },
      {
        verb: "slug away",
        pronunciation: "/slʌɡ əˈweɪ/",
        translation: "упорно работать, вкалывать",
        definition:
          "To work hard and persistently",
        examples: [
          "He's been slugging away at the problem.",
          "They slugged away for hours.",
          "She slugged away until she finished.",
        ],
        nuance: "Similar to 'grind away', implies hard persistent work",
        relatedVerbs: ["grind away", "work hard", "persevere"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚡</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Effort & Struggle
          </h2>
          <p className="text-xl text-gray-600">Усилия и борьба</p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-indigo-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Time & Process
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const verbs = [
      {
        verb: "tide over",
        pronunciation: "/taɪd ˈəʊvə/",
        translation: "пережить, переждать",
        definition:
          "To help someone through a difficult period",
        examples: [
          "This money will tide us over until payday.",
          "Can you tide me over until next week?",
          "The loan tided them over the crisis.",
        ],
        nuance: "Implies temporary help to get through a difficult period",
        relatedVerbs: ["help through", "sustain", "support"],
      },
      {
        verb: "while away",
        pronunciation: "/waɪl əˈweɪ/",
        translation: "коротать время",
        definition:
          "To spend time in a relaxed or leisurely way",
        examples: [
          "We whiled away the afternoon reading.",
          "He whiled away the hours playing games.",
          "They whiled away the evening chatting.",
        ],
        nuance: "Implies passing time pleasantly or idly",
        relatedVerbs: ["pass time", "spend time", "kill time"],
      },
      {
        verb: "fritter away",
        pronunciation: "/ˈfrɪtər əˈweɪ/",
        translation: "растрачивать, тратить впустую",
        definition:
          "To waste something, especially time or money, gradually",
        examples: [
          "He frittered away his inheritance.",
          "Don't fritter away your time on social media.",
          "She frittered away the opportunity.",
        ],
        nuance: "Implies gradual, wasteful spending",
        relatedVerbs: ["waste", "squander", "spend unwisely"],
      },
      {
        verb: "drag on",
        pronunciation: "/dræɡ ɒn/",
        translation: "затягиваться, тянуться",
        definition:
          "To continue for too long; to seem to pass slowly",
        examples: [
          "The meeting dragged on for hours.",
          "The day dragged on endlessly.",
          "The negotiations dragged on for months.",
        ],
        nuance: "Implies something continuing longer than desired",
        relatedVerbs: ["continue", "last", "persist"],
      },
      {
        verb: "tick away",
        pronunciation: "/tɪk əˈweɪ/",
        translation: "тикать, проходить (о времени)",
        definition:
          "To pass, especially time",
        examples: [
          "The minutes ticked away slowly.",
          "Time is ticking away.",
          "The deadline ticked away.",
        ],
        nuance: "Often used with time, implies steady passing",
        relatedVerbs: ["pass", "elapse", "go by"],
      },
      {
        verb: "wear on",
        pronunciation: "/weər ɒn/",
        translation: "тянуться, изматывать",
        definition:
          "To pass slowly and tediously; to become tiring",
        examples: [
          "As the day wore on, we grew tired.",
          "The winter wore on interminably.",
          "The meeting wore on and on.",
        ],
        nuance: "Implies time passing slowly and becoming tiring",
        relatedVerbs: ["drag on", "pass slowly", "become tiring"],
      },
      {
        verb: "bide one's time",
        pronunciation: "/baɪd wʌnz taɪm/",
        translation: "выжидать, ждать подходящего момента",
        definition:
          "To wait patiently for the right moment",
        examples: [
          "He's biding his time before making a move.",
          "We'll bide our time until the right opportunity.",
          "She bided her time before speaking.",
        ],
        nuance: "Implies waiting patiently for the right moment",
        relatedVerbs: ["wait", "be patient", "hold back"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⏰</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Time & Process
          </h2>
          <p className="text-xl text-gray-600">Время и процесс</p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-purple-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Emotions & Attitudes
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const verbs = [
      {
        verb: "mope about",
        pronunciation: "/məʊp əˈbaʊt/",
        translation: "унывать, ходить с понурым видом",
        definition:
          "To be gloomy and dejected; to move around listlessly",
        examples: [
          "He's been moping about since he lost his job.",
          "Stop moping about and do something!",
          "She moped about the house all day.",
        ],
        nuance: "Implies being in a depressed or listless state",
        relatedVerbs: ["brood", "sulk", "be depressed"],
      },
      {
        verb: "perk up",
        pronunciation: "/pɜːk ʌp/",
        translation: "взбодриться, оживиться",
        definition:
          "To become more cheerful or energetic",
        examples: [
          "She perked up when she heard the news.",
          "The coffee perked him up.",
          "The team perked up after the break.",
        ],
        nuance: "Implies sudden improvement in mood or energy",
        relatedVerbs: ["cheer up", "brighten", "revive"],
      },
      {
        verb: "chafe at",
        pronunciation: "/tʃeɪf æt/",
        translation: "раздражаться, злиться",
        definition:
          "To feel irritated or annoyed by something",
        examples: [
          "He chafed at the restrictions.",
          "She chafed at being told what to do.",
          "They chafed at the delay.",
        ],
        nuance: "Implies irritation or impatience with restrictions",
        relatedVerbs: ["irritate", "annoy", "fret"],
      },
      {
        verb: "bristle at",
        pronunciation: "/ˈbrɪsəl æt/",
        translation: "взъерешиться, возмутиться",
        definition:
          "To react defensively or angrily to something",
        examples: [
          "He bristled at the criticism.",
          "She bristled at the suggestion.",
          "They bristled at the accusation.",
        ],
        nuance: "Implies defensive or angry reaction",
        relatedVerbs: ["react angrily", "take offense", "be defensive"],
      },
      {
        verb: "warm to",
        pronunciation: "/wɔːm tuː/",
        translation: "расположиться, проникнуться симпатией",
        definition:
          "To become more friendly or enthusiastic about something",
        examples: [
          "I'm warming to the idea.",
          "She warmed to him after their conversation.",
          "They warmed to the proposal.",
        ],
        nuance: "Implies gradual increase in liking or enthusiasm",
        relatedVerbs: ["like more", "become friendly", "take to"],
      },
      {
        verb: "cool off",
        pronunciation: "/kuːl ɒf/",
        translation: "остыть, успокоиться",
        definition:
          "To become less angry or excited",
        examples: [
          "Let him cool off before we talk.",
          "She needs to cool off after the argument.",
          "Things will cool off eventually.",
        ],
        nuance: "Implies calming down from anger or excitement",
        relatedVerbs: ["calm down", "settle", "relax"],
      },
      {
        verb: "fret over",
        pronunciation: "/fret ˈəʊvə/",
        translation: "беспокоиться, переживать",
        definition:
          "To worry or be anxious about something",
        examples: [
          "Don't fret over small things.",
          "She frets over her children constantly.",
          "He's fretting over the exam results.",
        ],
        nuance: "Implies excessive worry or anxiety",
        relatedVerbs: ["worry", "anxious", "concern"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">💭</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Emotions & Attitudes
          </h2>
          <p className="text-xl text-gray-600">Эмоции и отношения</p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-pink-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-rose-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-pink-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Movement & Position
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const verbs = [
      {
        verb: "hunker down",
        pronunciation: "/ˈhʌŋkə daʊn/",
        translation: "засесть, укрыться",
        definition:
          "To settle in and prepare for a difficult situation",
        examples: [
          "We'll hunker down for the storm.",
          "They hunkered down for the long winter.",
          "Let's hunker down and finish this project.",
        ],
        nuance: "Implies preparing for something difficult or waiting it out",
        relatedVerbs: ["settle in", "prepare", "wait"],
      },
      {
        verb: "hole up",
        pronunciation: "/həʊl ʌp/",
        translation: "засесть, спрятаться",
        definition:
          "To hide or take shelter somewhere",
        examples: [
          "They holed up in a cabin for the weekend.",
          "He holed up in his room studying.",
          "The criminals holed up in an abandoned building.",
        ],
        nuance: "Implies hiding or staying in a place, often secretly",
        relatedVerbs: ["hide", "take shelter", "seclude"],
      },
      {
        verb: "hightail it",
        pronunciation: "/ˈhaɪteɪl ɪt/",
        translation: "унести ноги, смыться",
        definition:
          "To leave quickly; to run away",
        examples: [
          "We'd better hightail it out of here.",
          "He hightailed it when he saw the police.",
          "They hightailed it home before the storm.",
        ],
        nuance: "Informal, implies leaving very quickly",
        relatedVerbs: ["run away", "flee", "leave quickly"],
      },
      {
        verb: "leg it",
        pronunciation: "/leɡ ɪt/",
        translation: "убежать, унести ноги",
        definition:
          "To run away quickly",
        examples: [
          "We'd better leg it!",
          "He legged it when he saw trouble.",
          "They legged it out of there.",
        ],
        nuance: "British informal, means to run away quickly",
        relatedVerbs: ["run away", "flee", "hightail it"],
      },
      {
        verb: "scarper",
        pronunciation: "/ˈskɑːpə/",
        translation: "смыться, удрать",
        definition:
          "To run away quickly",
        examples: [
          "The thieves scarpered when they heard the alarm.",
          "He scarpered before anyone noticed.",
          "They scarpered at the first sign of trouble.",
        ],
        nuance: "British informal, means to run away quickly",
        relatedVerbs: ["run away", "flee", "escape"],
      },
      {
        verb: "nip out",
        pronunciation: "/nɪp aʊt/",
        translation: "выскочить, быстро выйти",
        definition:
          "To leave briefly and quickly",
        examples: [
          "I'll nip out to get some milk.",
          "She nipped out for a cigarette.",
          "He nipped out to make a phone call.",
        ],
        nuance: "British informal, implies a very brief absence",
        relatedVerbs: ["pop out", "dash out", "go quickly"],
      },
      {
        verb: "pop in",
        pronunciation: "/pɒp ɪn/",
        translation: "заскочить, зайти ненадолго",
        definition:
          "To visit briefly",
        examples: [
          "I'll pop in later to see how you are.",
          "She popped in for a quick chat.",
          "He popped in to say hello.",
        ],
        nuance: "Informal, implies a brief, casual visit",
        relatedVerbs: ["drop in", "visit briefly", "call"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🚶</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Movement & Position
          </h2>
          <p className="text-xl text-gray-600">Движение и положение</p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-rose-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-rose-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-rose-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: More Nuanced Verbs
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const verbs = [
      {
        verb: "fizzle out",
        pronunciation: "/ˈfɪzəl aʊt/",
        translation: "затухнуть, провалиться",
        definition:
          "To end or fail gradually and disappointingly",
        examples: [
          "The party fizzled out early.",
          "The project fizzled out due to lack of funding.",
          "Their relationship fizzled out.",
        ],
        nuance: "Implies gradual, disappointing failure or ending",
        relatedVerbs: ["fail", "end", "die out"],
      },
      {
        verb: "peter out",
        pronunciation: "/ˈpiːtər aʊt/",
        translation: "затухнуть, иссякнуть",
        definition:
          "To gradually decrease and come to an end",
        examples: [
          "The conversation petered out.",
          "The rain petered out by evening.",
          "Their enthusiasm petered out.",
        ],
        nuance: "Implies gradual decrease to nothing",
        relatedVerbs: ["fade out", "die out", "diminish"],
      },
      {
        verb: "taper off",
        pronunciation: "/ˈteɪpər ɒf/",
        translation: "постепенно уменьшаться",
        definition:
          "To gradually decrease",
        examples: [
          "The noise tapered off.",
          "Sales tapered off after the holidays.",
          "The medication should taper off gradually.",
        ],
        nuance: "Implies gradual decrease, often intentionally",
        relatedVerbs: ["decrease", "diminish", "reduce"],
      },
      {
        verb: "whip up",
        pronunciation: "/wɪp ʌp/",
        translation: "быстро приготовить, разжечь",
        definition:
          "To create something quickly; to stir up emotions",
        examples: [
          "I'll whip up a quick meal.",
          "He whipped up support for the cause.",
          "She whipped up enthusiasm among the crowd.",
        ],
        nuance: "Can mean quick creation or stirring up emotions",
        relatedVerbs: ["create quickly", "stir up", "generate"],
      },
      {
        verb: "winkle out",
        pronunciation: "/ˈwɪŋkəl aʊt/",
        translation: "выведать, вытащить",
        definition:
          "To extract information or something from someone with difficulty",
        examples: [
          "I managed to winkle out the truth.",
          "They winkled out the secret.",
          "She winkled out the information.",
        ],
        nuance: "Implies extracting something with difficulty or persistence",
        relatedVerbs: ["extract", "get out", "elicit"],
      },
      {
        verb: "wriggle out",
        pronunciation: "/ˈrɪɡəl aʊt/",
        translation: "вывернуться, увильнуть",
        definition:
          "To avoid something, especially a responsibility",
        examples: [
          "He tried to wriggle out of the commitment.",
          "Don't try to wriggle out of this.",
          "She wriggled out of paying.",
        ],
        nuance: "Implies avoiding something through cleverness or evasion",
        relatedVerbs: ["avoid", "escape", "evade"],
      },
      {
        verb: "zero in on",
        pronunciation: "/ˈzɪərəʊ ɪn ɒn/",
        translation: "сосредоточиться на, нацелиться",
        definition:
          "To focus attention on something",
        examples: [
          "The investigation zeroed in on the suspect.",
          "Let's zero in on the main problem.",
          "She zeroed in on the key issue.",
        ],
        nuance: "Implies precise focusing or targeting",
        relatedVerbs: ["focus on", "target", "concentrate on"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">✨</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            More Nuanced Verbs
          </h2>
          <p className="text-xl text-gray-600">
            Дополнительные нюансированные глаголы
          </p>
        </div>

        <div className="space-y-6">
          {verbs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.verb}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-orange-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">
                    💡 Nuance:
                  </h4>
                  <p className="text-gray-700">{item.nuance}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Related verbs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedVerbs.map((related, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Practice & Exercises
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [results, setResults] = useState<Record<string, boolean | null>>({});
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (id: string, value: string) => {
      setAnswers((prev) => ({ ...prev, [id]: value }));
      setResults((prev) => ({ ...prev, [id]: null }));
    };

    const checkAnswer = (id: string, correctAnswers: string[]) => {
      const userAnswer = (answers[id] || "").toLowerCase().trim();
      const isCorrect = correctAnswers.some(
        (correct) => correct.toLowerCase() === userAnswer
      );
      setResults((prev) => ({ ...prev, [id]: isCorrect }));
    };

    const checkAllAnswers = () => {
      fillInTheBlank.forEach((item) => {
        const userAnswer = (answers[item.id] || "").toLowerCase().trim();
        const isCorrect = item.answers.some(
          (correct) => correct.toLowerCase() === userAnswer
        );
        setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
      });
      translationExercises.forEach((item) => {
        const userAnswer = (answers[item.id] || "").toLowerCase().trim();
        const isCorrect = item.answers.some(
          (correct) => correct.toLowerCase() === userAnswer
        );
        setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
      });
      setShowResults(true);
    };

    const fillInTheBlank = [
      {
        id: "q1",
        question: "He tried to _____ me off with excuses.",
        answers: ["fob"],
        hint: "отделаться",
      },
      {
        id: "q2",
        question: "We need to _____ up more support.",
        answers: ["drum"],
        hint: "создать, привлечь",
      },
      {
        id: "q3",
        question: "They _____ out a living by selling vegetables.",
        answers: ["eke", "eked"],
        hint: "с трудом добывать",
      },
      {
        id: "q4",
        question: "He's been _____ up the boss all week.",
        answers: ["buttering"],
        hint: "подлизываться",
      },
      {
        id: "q5",
        question: "I finally _____ on to what they were planning.",
        answers: ["cottoned"],
        hint: "понять",
      },
      {
        id: "q6",
        question: "They're _____ by on minimum wage.",
        answers: ["scraping"],
        hint: "с трудом сводить концы с концами",
      },
      {
        id: "q7",
        question: "The meeting _____ on for hours.",
        answers: ["dragged"],
        hint: "затягиваться",
      },
      {
        id: "q8",
        question: "He _____ at the criticism.",
        answers: ["bristled"],
        hint: "возмутиться",
      },
    ];

    const translationExercises = [
      {
        id: "t1",
        russian: "отделаться, отговориться",
        answers: ["fob off"],
      },
      {
        id: "t2",
        russian: "всучить, подсунуть",
        answers: ["palm off"],
      },
      {
        id: "t3",
        russian: "создать, привлечь",
        answers: ["drum up"],
      },
      {
        id: "t4",
        russian: "с трудом добывать",
        answers: ["eke out"],
      },
      {
        id: "t5",
        russian: "подлизываться",
        answers: ["butter up"],
      },
    ];

    const getResultColor = (id: string) => {
      if (results[id] === null) return "border-gray-300";
      return results[id]
        ? "border-green-500 bg-green-50"
        : "border-red-500 bg-red-50";
    };

    const getResultIcon = (id: string) => {
      if (results[id] === null) return null;
      return results[id] ? "✅" : "❌";
    };

    const correctCount = Object.values(results).filter(
      (r) => r === true
    ).length;
    const totalQuestions = fillInTheBlank.length + translationExercises.length;

    return (
      <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-6">
          <h3 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            <span>✏️</span> Fill in the Blanks
          </h3>
          <p className="text-gray-600 mb-6">
            Заполните пропуски подходящими фразовыми глаголами и нажмите
            &quot;Проверить&quot;:
          </p>

          <div className="space-y-4">
            {fillInTheBlank.map((item, i) => (
              <div
                key={item.id}
                className={`rounded-xl p-4 border-2 ${getResultColor(
                  item.id
                )} transition-all`}
              >
                <div className="flex items-start gap-2 mb-3">
                  <span className="font-bold text-teal-600">{i + 1}.</span>
                  <p className="text-gray-800 flex-1">{item.question}</p>
                  {getResultIcon(item.id) && (
                    <span className="text-xl">{getResultIcon(item.id)}</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={answers[item.id] || ""}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    placeholder="Введите ответ..."
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition font-semibold"
                  >
                    Проверить
                  </button>
                </div>
                <p className="text-sm text-gray-500 italic mt-2">
                  Подсказка: {item.hint}
                </p>
                {results[item.id] === false && (
                  <p className="text-sm text-red-600 mt-2">
                    Правильный ответ: <strong>{item.answers[0]}</strong>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Translation exercise */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-6">
          <h3 className="text-2xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
            <span>🌐</span> Translate to English
          </h3>
          <p className="text-gray-600 mb-6">Переведите на английский:</p>

          <div className="space-y-4">
            {translationExercises.map((item, i) => (
              <div
                key={item.id}
                className={`rounded-xl p-4 border-2 ${getResultColor(
                  item.id
                )} transition-all`}
              >
                <div className="flex items-start gap-2 mb-3">
                  <span className="font-bold text-cyan-600">{i + 1}.</span>
                  <p className="text-gray-800 font-medium flex-1">
                    {item.russian}
                  </p>
                  {getResultIcon(item.id) && (
                    <span className="text-xl">{getResultIcon(item.id)}</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={answers[item.id] || ""}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    placeholder="Enter phrasal verb..."
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-semibold"
                  >
                    Проверить
                  </button>
                </div>
                {results[item.id] === false && (
                  <p className="text-sm text-red-600 mt-2">
                    Правильный ответ: <strong>{item.answers[0]}</strong>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Check all button */}
        <div className="flex justify-center">
          <button
            onClick={checkAllAnswers}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl hover:from-teal-600 hover:to-cyan-600 transition font-bold text-xl shadow-lg"
          >
            Проверить все ответы
          </button>
        </div>

        {/* Results summary */}
        {showResults && (
          <div
            className={`rounded-2xl p-6 border-2 shadow-lg ${
              correctCount === totalQuestions
                ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-300"
                : correctCount >= totalQuestions * 0.7
                ? "bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300"
                : "bg-gradient-to-r from-red-100 to-rose-100 border-red-300"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-5xl">
                {correctCount === totalQuestions
                  ? "🎉"
                  : correctCount >= totalQuestions * 0.7
                  ? "👍"
                  : "📚"}
              </span>
              <div>
                <h3 className="font-bold text-2xl text-gray-800 mb-1">
                  Результат: {correctCount} из {totalQuestions}
                </h3>
                <p className="text-gray-700">
                  {correctCount === totalQuestions
                    ? "Отлично! Вы справились со всеми заданиями!"
                    : correctCount >= totalQuestions * 0.7
                    ? "Хороший результат! Повторите ошибки и попробуйте снова."
                    : "Стоит повторить материал и попробовать ещё раз."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6 border-2 border-teal-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="font-bold text-xl text-teal-800 mb-2">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-700 text-lg">
                Вы изучили более <strong>50 редких и нюансированных фразовых глаголов</strong> с
                их тонкими значениями и контекстами использования. Теперь вы можете:
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>
                  ✅ Использовать редкие фразовые глаголы для более точного выражения мыслей
                </li>
                <li>
                  ✅ Понимать нюансы между похожими фразовыми глаголами
                </li>
                <li>
                  ✅ Говорить более естественно, как носители языка
                </li>
                <li>
                  ✅ Демонстрировать продвинутый уровень владения английским языком
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null; // Fallback if step is out of range
}


