"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function IdiomsAdvanced({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Advanced & Literary Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📖</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Idioms: Advanced & Literary
          </h2>
          <p className="text-xl text-gray-600">
            Продвинутые и литературные идиомы
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
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-8">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Продвинутые идиомы: язык образованных людей
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Этот урок посвящён{" "}
              <strong>продвинутым и литературным идиомам</strong> — выражениям,
              которые встречаются в классической литературе, академических
              текстах и речи образованных носителей языка. Эти идиомы часто
              имеют историческое или литературное происхождение и требуют
              глубокого понимания контекста.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <div className="text-3xl mb-2">🏛️</div>
                <h4 className="font-bold text-indigo-800">
                  Исторические идиомы
                </h4>
                <p className="text-gray-600 text-sm">
                  Pyrrhic victory, crossing the Rubicon, meet one's Waterloo
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="text-3xl mb-2">📜</div>
                <h4 className="font-bold text-purple-800">
                  Литературные идиомы
                </h4>
                <p className="text-gray-600 text-sm">
                  Hoist with his own petard, a rose by any other name, the
                  green-eyed monster
                </p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                <div className="text-3xl mb-2">🎭</div>
                <h4 className="font-bold text-pink-800">
                  Шекспировские идиомы
                </h4>
                <p className="text-gray-600 text-sm">
                  Множество выражений из произведений Шекспира
                </p>
              </div>
              <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                <div className="text-3xl mb-2">💎</div>
                <h4 className="font-bold text-violet-800">
                  Академические идиомы
                </h4>
                <p className="text-gray-600 text-sm">
                  Выражения из научной и академической литературы
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Зачем изучать продвинутые идиомы?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Чтение классической литературы
                  </h4>
                  <p className="text-gray-600">
                    Понимание идиом необходимо для чтения Шекспира, Диккенса и
                    других классиков
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Академическое письмо
                  </h4>
                  <p className="text-gray-600">
                    Многие идиомы используются в эссе, научных статьях и
                    академических текстах
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl">
                <span className="text-3xl">💼</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Профессиональная речь
                  </h4>
                  <p className="text-gray-600">
                    Использование продвинутых идиом демонстрирует высокий
                    уровень владения языком
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl">
                <span className="text-3xl">🌍</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Культурная грамотность
                  </h4>
                  <p className="text-gray-600">
                    Идиомы отражают историю, литературу и культуру англоязычного
                    мира
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-8">
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Структура курса:
            </h3>
            <div className="grid gap-3">
              {[
                {
                  step: 2,
                  title: "Historical Idioms",
                  desc: "Pyrrhic victory, crossing the Rubicon, meet one's Waterloo",
                },
                {
                  step: 3,
                  title: "Shakespearean Idioms",
                  desc: "hoist with his own petard, green-eyed monster, a rose by any other name",
                },
                {
                  step: 4,
                  title: "Literary Idioms",
                  desc: "skeleton in the closet, white elephant, the writing on the wall",
                },
                {
                  step: 5,
                  title: "Mythological Idioms",
                  desc: "Achilles' heel, Pandora's box, Herculean task",
                },
                {
                  step: 6,
                  title: "Biblical & Classical Idioms",
                  desc: "the patience of Job, a voice in the wilderness, between Scylla and Charybdis",
                },
                {
                  step: 7,
                  title: "Academic & Formal Idioms",
                  desc: "beg the question, prima facie, ad hoc",
                },
                {
                  step: 8,
                  title: "Practice & Exercises",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl border border-pink-100"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
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
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-indigo-800 mb-2">
                Интересный факт
              </h3>
              <p className="text-gray-700">
                Шекспир ввёл в английский язык более <strong>1700 слов</strong>{" "}
                и множество идиом, которые используются до сих пор. Выражения
                вроде &quot;hoist with his own petard&quot; (из Гамлета) и
                &quot;the green-eyed monster&quot; (из Отелло) стали частью
                повседневного языка образованных людей.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Historical Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const historicalIdioms = [
      {
        idiom: "A Pyrrhic victory",
        pronunciation: "/ə ˈpɪrɪk ˈvɪktəri/",
        translation: "пиррова победа",
        origin:
          "Named after King Pyrrhus of Epirus, who defeated the Romans but suffered such heavy losses that he said 'Another such victory and I am undone'",
        definition:
          "Победа, которая достаётся такой высокой ценой, что по сути является поражением",
        examples: [
          "Winning the lawsuit was a Pyrrhic victory — the legal fees exceeded the settlement.",
          "The company's market dominance came at a Pyrrhic cost: massive debt and employee burnout.",
          "His promotion was a Pyrrhic victory; he lost all his friends in the process.",
        ],
        usage:
          "Часто используется в политическом, деловом или личном контексте для описания побед, которые обходятся слишком дорого",
        relatedIdioms: ["win the battle but lose the war", "hollow victory"],
      },
      {
        idiom: "Crossing the Rubicon",
        pronunciation: "/ˈkrɒsɪŋ ðə ˈruːbɪkən/",
        translation: "перейти Рубикон",
        origin:
          "Julius Caesar crossed the Rubicon river in 49 BC, committing to civil war. The phrase means 'the die is cast'",
        definition:
          "Принятие необратимого решения, которое запускает цепочку событий, ведущих к необратимым последствиям",
        examples: [
          "By quitting his job, he crossed the Rubicon — there was no going back.",
          "The company crossed the Rubicon when it filed for bankruptcy.",
          "She crossed the Rubicon by revealing the secret.",
        ],
        usage: "Используется для описания судьбоносных, необратимых решений",
        relatedIdioms: ["burn one's bridges", "point of no return"],
      },
      {
        idiom: "Meet one's Waterloo",
        pronunciation: "/miːt wʌnz ˌwɔːtəˈluː/",
        translation: "встретить свой Ватерлоо",
        origin:
          "Napoleon's final defeat at the Battle of Waterloo in 1815, ending his military career",
        definition:
          "Потерпеть решающее поражение или неудачу, особенно после периода успеха",
        examples: [
          "The chess champion met his Waterloo against the young prodigy.",
          "The company met its Waterloo when the new regulations were introduced.",
          "Every great leader eventually meets their Waterloo.",
        ],
        usage:
          "Описывает окончательное, сокрушительное поражение после предыдущих успехов",
        relatedIdioms: ["final defeat", "downfall", "nemesis"],
      },
      {
        idiom: "The die is cast",
        pronunciation: "/ðə daɪ ɪz kɑːst/",
        translation: "жребий брошен",
        origin:
          "Attributed to Julius Caesar when crossing the Rubicon. 'Alea iacta est' in Latin",
        definition:
          "Решение принято и не может быть изменено; события теперь неизбежны",
        examples: [
          "The die is cast — we've signed the contract and must proceed.",
          "Once the announcement was made, the die was cast.",
          "The die is cast; there's no turning back now.",
        ],
        usage: "Подчёркивает необратимый характер решения",
        relatedIdioms: ["crossing the Rubicon", "no turning back"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🏛️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Historical Idioms
          </h2>
          <p className="text-xl text-gray-600">Исторические идиомы</p>
        </div>

        <div className="space-y-6">
          {historicalIdioms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.idiom}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-indigo-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    📜 Origin:
                  </h4>
                  <p className="text-gray-700">{item.origin}</p>
                </div>

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
                    💬 Usage:
                  </h4>
                  <p className="text-gray-700">{item.usage}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Related idioms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedIdioms.map((related, i) => (
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
  // STEP 3: Shakespearean Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const shakespeareanIdioms = [
      {
        idiom: "Hoist with his own petard",
        pronunciation: "/hɔɪst wɪð hɪz əʊn pɪˈtɑːd/",
        translation: "взлететь на собственной петарде",
        origin:
          "From Hamlet (Act 3, Scene 4). A petard was a small bomb. The phrase means to be harmed by one's own scheme",
        definition:
          "Быть наказанным или побеждённым собственным планом или устройством, предназначенным для вреда другим",
        examples: [
          "The hacker was hoist with his own petard when his virus infected his own computer.",
          "The politician was hoist with his own petard when his scandalous recording was leaked.",
          "She was hoist with her own petard — her lies were exposed by her own evidence.",
        ],
        usage:
          "Описывает ситуации, когда чей-то план оборачивается против него самого",
        relatedIdioms: ["backfire", "blow up in one's face", "turn the tables"],
      },
      {
        idiom: "The green-eyed monster",
        pronunciation: "/ðə ɡriːn aɪd ˈmɒnstə/",
        translation: "зелёный монстр (ревность)",
        origin:
          "From Othello (Act 3, Scene 3). Iago warns Othello: 'O, beware, my lord, of jealousy; It is the green-eyed monster'",
        definition: "Ревность, особенно романтическая ревность",
        examples: [
          "The green-eyed monster consumed him when he saw his ex with someone else.",
          "She couldn't control the green-eyed monster when her colleague got promoted.",
          "The green-eyed monster made him suspicious of his partner's friendships.",
        ],
        usage:
          "Литературный способ описания ревности, особенно в романтических контекстах",
        relatedIdioms: ["jealousy", "envy", "covetousness"],
      },
      {
        idiom: "A rose by any other name",
        pronunciation: "/ə rəʊz baɪ ˈeni ˈʌðə neɪm/",
        translation: "роза под любым другим именем",
        origin:
          "From Romeo and Juliet (Act 2, Scene 2). Juliet says: 'What's in a name? That which we call a rose / By any other name would smell as sweet'",
        definition:
          "Название чего-либо не влияет на то, чем оно является на самом деле",
        examples: [
          "Call it 'restructuring' or 'downsizing' — it's a rose by any other name; people are still losing their jobs.",
          "Whether you call it 'tax' or 'contribution,' it's a rose by any other name.",
          "A dictatorship by any other name is still oppression.",
        ],
        usage: "Подчёркивает, что изменение названия не меняет сути",
        relatedIdioms: [
          "what's in a name",
          "same thing",
          "substance over form",
        ],
      },
      {
        idiom: "All the world's a stage",
        pronunciation: "/ɔːl ðə wɜːldz ə steɪdʒ/",
        translation: "весь мир — театр",
        origin:
          "From As You Like It (Act 2, Scene 7). Jaques' famous monologue begins: 'All the world's a stage, / And all the men and women merely players'",
        definition:
          "Жизнь подобна пьесе; люди играют разные роли в разное время",
        examples: [
          "All the world's a stage, and we are but players in this grand drama of life.",
          "In politics, all the world's a stage, and politicians are the actors.",
          "She understood that all the world's a stage, so she played her part with grace.",
        ],
        usage: "Философское наблюдение о театральной природе жизни",
        relatedIdioms: ["play a role", "life is a play", "theatrical"],
      },
      {
        idiom: "Break the ice",
        pronunciation: "/breɪk ðə aɪs/",
        translation: "растопить лёд, начать разговор",
        origin:
          "From The Taming of the Shrew. Originally meant to break ice on frozen rivers to allow ships to pass",
        definition:
          "Инициировать разговор в социальной обстановке; помочь людям почувствовать себя более комфортно",
        examples: [
          "He told a joke to break the ice at the meeting.",
          "The host broke the ice by introducing everyone.",
          "A good question can break the ice in any conversation.",
        ],
        usage:
          "Распространено как в формальных, так и в неформальных контекстах",
        relatedIdioms: ["get the ball rolling", "start the conversation"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎭</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Shakespearean Idioms
          </h2>
          <p className="text-xl text-gray-600">Шекспировские идиомы</p>
        </div>

        <div className="space-y-6">
          {shakespeareanIdioms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.idiom}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-purple-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    📜 Origin:
                  </h4>
                  <p className="text-gray-700">{item.origin}</p>
                </div>

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
                    💬 Usage:
                  </h4>
                  <p className="text-gray-700">{item.usage}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Related idioms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedIdioms.map((related, i) => (
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

        {/* Shakespeare fact */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📚</span>
            <div>
              <h3 className="font-bold text-xl text-purple-800 mb-2">
                Шекспир и английский язык
              </h3>
              <p className="text-gray-700">
                Уильям Шекспир не только создал множество идиом, но и ввёл в
                английский язык сотни новых слов, включая &quot;eyeball&quot;,
                &quot;swagger&quot;, &quot;lonely&quot; и &quot;gloomy&quot;.
                Его влияние на английский язык настолько велико, что многие
                выражения кажутся естественными, хотя они были созданы им более
                400 лет назад.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Literary Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const literaryIdioms = [
      {
        idiom: "Skeleton in the closet",
        pronunciation: "/ˈskelɪtən ɪn ðə ˈklɒzɪt/",
        translation: "скелет в шкафу",
        origin:
          "Popularized by 19th-century literature. Refers to a shameful family secret hidden away",
        definition: "Позорный или смущающий секрет, особенно семейный секрет",
        examples: [
          "Every family has a skeleton in the closet.",
          "The politician's skeleton in the closet was revealed before the election.",
          "She discovered a skeleton in the closet about her grandfather's past.",
        ],
        usage:
          "Распространено как в литературном, так и в повседневном контексте",
        relatedIdioms: ["dark secret", "family secret", "hidden truth"],
      },
      {
        idiom: "White elephant",
        pronunciation: "/waɪt ˈelɪfənt/",
        translation: "белый слон (обуза)",
        origin:
          "From Southeast Asian tradition where white elephants were sacred but expensive to maintain. Given as gifts to ruin recipients",
        definition:
          "Что-то дорогое или обременительное, от чего трудно избавиться",
        examples: [
          "The old factory became a white elephant for the city.",
          "The expensive gift was a white elephant — too valuable to use, too costly to maintain.",
          "The project turned into a white elephant, consuming resources without benefit.",
        ],
        usage: "Часто используется в деловом и политическом контексте",
        relatedIdioms: ["burden", "expensive mistake", "albatross"],
      },
      {
        idiom: "The writing on the wall",
        pronunciation: "/ðə ˈraɪtɪŋ ɒn ðə wɔːl/",
        translation: "письмена на стене",
        origin:
          "From the biblical story of Belshazzar's feast (Daniel 5), where mysterious writing appeared on the wall predicting doom",
        definition:
          "Знак или предупреждение о надвигающейся катастрофе или неудаче",
        examples: [
          "The declining sales were the writing on the wall for the company.",
          "She saw the writing on the wall and started looking for a new job.",
          "The writing was on the wall long before the collapse.",
        ],
        usage: "Описывает явные признаки будущих проблем",
        relatedIdioms: ["omen", "warning sign", "portent"],
      },
      {
        idiom: "Achilles' heel",
        pronunciation: "/əˈkɪliːz hiːl/",
        translation: "ахиллесова пята",
        origin:
          "From Greek mythology. Achilles was invulnerable except for his heel, where he was fatally wounded",
        definition: "Слабость или уязвимое место человека",
        examples: [
          "Mathematics was his Achilles' heel in school.",
          "The company's Achilles' heel was its dependence on a single supplier.",
          "Her Achilles' heel was her inability to say no.",
        ],
        usage: "Описывает критическую слабость, несмотря на общую силу",
        relatedIdioms: ["weakness", "vulnerability", "chink in the armor"],
      },
      {
        idiom: "Pandora's box",
        pronunciation: "/pænˈdɔːrəz bɒks/",
        translation: "ящик Пандоры",
        origin:
          "From Greek mythology. Pandora opened a box containing all evils, releasing them into the world",
        definition: "Источник обширных проблем или неприятностей",
        examples: [
          "Opening that investigation was like opening Pandora's box.",
          "The new policy opened a Pandora's box of legal issues.",
          "She didn't realize that question would open Pandora's box.",
        ],
        usage:
          "Предупреждает против действий, которые вызовут множество проблем",
        relatedIdioms: ["can of worms", "hornet's nest", "trouble"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📜</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Literary Idioms
          </h2>
          <p className="text-xl text-gray-600">Литературные идиомы</p>
        </div>

        <div className="space-y-6">
          {literaryIdioms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.idiom}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-pink-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">
                    📜 Origin:
                  </h4>
                  <p className="text-gray-700">{item.origin}</p>
                </div>

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
                    💬 Usage:
                  </h4>
                  <p className="text-gray-700">{item.usage}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-pink-700 mb-2">
                    Related idioms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedIdioms.map((related, i) => (
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
  // STEP 5: Mythological Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const mythologicalIdioms = [
      {
        idiom: "Achilles' heel",
        pronunciation: "/əˈkɪliːz hiːl/",
        translation: "ахиллесова пята",
        origin:
          "From Homer's Iliad. Achilles was dipped in the River Styx by his mother, making him invulnerable except for his heel, which she held",
        definition: "Смертельная слабость, несмотря на общую силу",
        examples: [
          "His pride was his Achilles' heel.",
          "The team's Achilles' heel was their weak defense.",
          "Every strategy has its Achilles' heel.",
        ],
        usage: "Описывает критическую уязвимость",
        relatedIdioms: ["weakness", "vulnerability", "fatal flaw"],
      },
      {
        idiom: "Pandora's box",
        pronunciation: "/pænˈdɔːrəz bɒks/",
        translation: "ящик Пандоры",
        origin:
          "From Greek mythology. Pandora, the first woman, opened a jar (later called a box) containing all evils, which escaped into the world",
        definition: "Источник обширных проблем или непредвиденных последствий",
        examples: [
          "The investigation opened a Pandora's box of corruption.",
          "Revealing the secret opened Pandora's box.",
          "The new technology opened a Pandora's box of ethical questions.",
        ],
        usage:
          "Предупреждает против действий с далеко идущими негативными последствиями",
        relatedIdioms: ["can of worms", "hornet's nest"],
      },
      {
        idiom: "Herculean task",
        pronunciation: "/ˌhɜːkjʊˈliːən tɑːsk/",
        translation: "геркулесов труд",
        origin:
          "From Greek mythology. Hercules (Heracles) performed twelve seemingly impossible labors",
        definition:
          "Невероятно трудная задача, требующая огромной силы или усилий",
        examples: [
          "Cleaning the entire house was a Herculean task.",
          "Reforming the education system is a Herculean task.",
          "It was a Herculean effort to finish the project on time.",
        ],
        usage: "Описывает задачи необычайной сложности",
        relatedIdioms: [
          "monumental task",
          "herculean effort",
          "Sisyphean task",
        ],
      },
      {
        idiom: "Between Scylla and Charybdis",
        pronunciation: "/bɪˈtwiːn ˈsɪlə ænd kəˈrɪbdɪs/",
        translation: "между Сциллой и Харибдой",
        origin:
          "From Homer's Odyssey. Scylla was a six-headed monster and Charybdis a whirlpool. Odysseus had to navigate between them",
        definition:
          "Оказаться перед выбором между двумя одинаково опасными альтернативами; дилемма",
        examples: [
          "The company was between Scylla and Charybdis: raise prices and lose customers, or keep prices and go bankrupt.",
          "She was caught between Scylla and Charybdis — tell the truth and hurt him, or lie and betray herself.",
          "The politician found himself between Scylla and Charybdis.",
        ],
        usage: "Описывает невозможный выбор между двумя плохими вариантами",
        relatedIdioms: [
          "between a rock and a hard place",
          "dilemma",
          "no-win situation",
        ],
      },
      {
        idiom: "Trojan horse",
        pronunciation: "/ˈtrəʊdʒən hɔːs/",
        translation: "троянский конь",
        origin:
          "From the Trojan War. Greeks hid soldiers inside a wooden horse, which the Trojans brought into their city",
        definition:
          "Что-то, что кажется безобидным, но на самом деле опасно или разрушительно",
        examples: [
          "The free software was a Trojan horse containing malware.",
          "The deal seemed good but was a Trojan horse.",
          "Beware of Trojan horses in business partnerships.",
        ],
        usage: "Распространено в технологическом и деловом контексте",
        relatedIdioms: [
          "wolf in sheep's clothing",
          "deceptive",
          "hidden danger",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚡</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Mythological Idioms
          </h2>
          <p className="text-xl text-gray-600">Мифологические идиомы</p>
        </div>

        <div className="space-y-6">
          {mythologicalIdioms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.idiom}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-violet-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-violet-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-violet-800 mb-2">
                    📜 Origin:
                  </h4>
                  <p className="text-gray-700">{item.origin}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-violet-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-violet-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-violet-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    💬 Usage:
                  </h4>
                  <p className="text-gray-700">{item.usage}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-violet-700 mb-2">
                    Related idioms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedIdioms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 6: Biblical & Classical Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const biblicalClassicalIdioms = [
      {
        idiom: "The patience of Job",
        pronunciation: "/ðə ˈpeɪʃəns əv dʒəʊb/",
        translation: "терпение Иова",
        origin:
          "From the Book of Job in the Bible. Job endured immense suffering with patience and faith",
        definition: "Необычайное терпение перед лицом невзгод",
        examples: [
          "She showed the patience of Job while waiting for the delayed flight.",
          "Teaching requires the patience of Job.",
          "He displayed the patience of Job during the lengthy negotiations.",
        ],
        usage: "Описывает исключительное терпение",
        relatedIdioms: ["infinite patience", "enduring patience"],
      },
      {
        idiom: "A voice in the wilderness",
        pronunciation: "/ə vɔɪs ɪn ðə ˈwɪldənəs/",
        translation: "глас вопиющего в пустыне",
        origin:
          "From the Bible (Isaiah 40:3, Matthew 3:3). Refers to John the Baptist preaching in the wilderness",
        definition:
          "Человек, выражающий непопулярное мнение или предупреждение, которое игнорируется",
        examples: [
          "She was a voice in the wilderness, warning about climate change decades ago.",
          "The scientist was a voice in the wilderness about the dangers.",
          "His warnings were a voice in the wilderness until the crisis hit.",
        ],
        usage: "Описывает неуслышанные предупреждения или непопулярные взгляды",
        relatedIdioms: ["crying in the wilderness", "unheeded warning"],
      },
      {
        idiom: "Between Scylla and Charybdis",
        pronunciation: "/bɪˈtwiːn ˈsɪlə ænd kəˈrɪbdɪs/",
        translation: "между Сциллой и Харибдой",
        origin:
          "From Homer's Odyssey. Two sea monsters on either side of a narrow strait",
        definition:
          "Оказаться перед выбором между двумя одинаково опасными альтернативами",
        examples: [
          "The government was between Scylla and Charybdis: raise taxes or cut services.",
          "She found herself between Scylla and Charybdis.",
          "The choice was between Scylla and Charybdis.",
        ],
        usage: "Описывает невозможные дилеммы",
        relatedIdioms: ["between a rock and a hard place", "dilemma"],
      },
      {
        idiom: "Sword of Damocles",
        pronunciation: "/sɔːd əv ˈdæməkliːz/",
        translation: "меч Дамокла",
        origin:
          "From Greek legend. Damocles envied King Dionysius, who suspended a sword by a hair above Damocles' head",
        definition: "Неминуемая опасность или угроза, нависшая над кем-то",
        examples: [
          "The threat of layoffs hung like a sword of Damocles over the employees.",
          "The deadline was a sword of Damocles.",
          "She felt the sword of Damocles hanging over her career.",
        ],
        usage: "Описывает постоянную угрозу или опасность",
        relatedIdioms: ["hanging threat", "imminent danger", "constant fear"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📿</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Biblical & Classical Idioms
          </h2>
          <p className="text-xl text-gray-600">
            Библейские и классические идиомы
          </p>
        </div>

        <div className="space-y-6">
          {biblicalClassicalIdioms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.idiom}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-indigo-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    📜 Origin:
                  </h4>
                  <p className="text-gray-700">{item.origin}</p>
                </div>

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
                    💬 Usage:
                  </h4>
                  <p className="text-gray-700">{item.usage}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Related idioms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedIdioms.map((related, i) => (
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
  // STEP 7: Academic & Formal Idioms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const academicIdioms = [
      {
        idiom: "Beg the question",
        pronunciation: "/beɡ ðə ˈkwestʃən/",
        translation: "предполагать то, что нужно доказать",
        origin:
          "From Latin 'petitio principii.' In logic, it means assuming the conclusion in the premises",
        definition:
          "Предполагать истинность того, что пытаешься доказать; круговое рассуждение",
        examples: [
          "His argument begs the question by assuming what it claims to prove.",
          "The statement 'God exists because the Bible says so' begs the question.",
          "You're begging the question when you assume your conclusion.",
        ],
        usage:
          "Распространено в академическом и логическом дискурсе. Часто неправильно используется в значении 'поднимать вопрос'",
        relatedIdioms: ["circular reasoning", "assume the conclusion"],
      },
      {
        idiom: "Prima facie",
        pronunciation: "/ˈpraɪmə ˈfeɪʃi/",
        translation: "на первый взгляд",
        origin: "From Latin, meaning 'at first sight' or 'on the face of it'",
        definition:
          "На первый взгляд; основано на первом впечатлении, до расследования",
        examples: [
          "There is prima facie evidence of wrongdoing.",
          "Prima facie, the case seems strong.",
          "The prima facie argument was compelling but flawed.",
        ],
        usage:
          "Юридический и академический термин, означающий 'на первый взгляд'",
        relatedIdioms: ["at first glance", "on the face of it", "initially"],
      },
      {
        idiom: "Ad hoc",
        pronunciation: "/æd hɒk/",
        translation: "специально для данного случая",
        origin:
          "From Latin, meaning 'for this' — created for a specific purpose",
        definition:
          "Созданное или сделанное только для конкретной цели; импровизированное",
        examples: [
          "An ad hoc committee was formed to address the crisis.",
          "The solution was ad hoc and not sustainable.",
          "They made ad hoc arrangements for the meeting.",
        ],
        usage:
          "Распространено в академическом, деловом и юридическом контексте",
        relatedIdioms: ["improvised", "temporary", "for this purpose"],
      },
      {
        idiom: "Ceteris paribus",
        pronunciation: "/ˈketərɪs ˈpærɪbəs/",
        translation: "при прочих равных условиях",
        origin: "From Latin, meaning 'all other things being equal'",
        definition:
          "При условии, что все остальные факторы остаются постоянными",
        examples: [
          "Ceteris paribus, higher prices lead to lower demand.",
          "The theory holds ceteris paribus.",
          "Ceteris paribus, the policy should work.",
        ],
        usage:
          "Академический и экономический термин для контролируемого анализа",
        relatedIdioms: ["all else equal", "other things constant"],
      },
      {
        idiom: "Ipso facto",
        pronunciation: "/ˈɪpsoʊ ˈfæktoʊ/",
        translation: "в силу самого факта",
        origin: "From Latin, meaning 'by the fact itself'",
        definition:
          "В силу самого этого факта или действия; как неизбежный результат",
        examples: [
          "Breaking the law ipso facto makes one a criminal.",
          "His admission ipso facto proved his guilt.",
          "The contradiction ipso facto invalidates the argument.",
        ],
        usage:
          "Формальный и академический термин, подчёркивающий логическое следствие",
        relatedIdioms: ["by that fact", "necessarily", "as a result"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎓</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Academic & Formal Idioms
          </h2>
          <p className="text-xl text-gray-600">
            Академические и формальные идиомы
          </p>
        </div>

        <div className="space-y-6">
          {academicIdioms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.idiom}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-purple-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    📜 Origin:
                  </h4>
                  <p className="text-gray-700">{item.origin}</p>
                </div>

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

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    💬 Usage:
                  </h4>
                  <p className="text-gray-700">{item.usage}</p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Related idioms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedIdioms.map((related, i) => (
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
  // STEP 8: Practice & Exercises
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
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
        question: "A victory that costs too much is called a _____ victory.",
        answers: ["Pyrrhic", "pyrrhic"],
        hint: "пиррова победа",
      },
      {
        id: "q2",
        question:
          "To be harmed by your own plan is to be _____ with your own petard.",
        answers: ["hoist", "hoisted"],
        hint: "взлететь на собственной петарде",
      },
      {
        id: "q3",
        question: "Jealousy is often called the _____ monster.",
        answers: ["green-eyed"],
        hint: "зелёный монстр",
      },
      {
        id: "q4",
        question: "A person's weakness is their _____ heel.",
        answers: ["Achilles'", "Achilles"],
        hint: "ахиллесова пята",
      },
      {
        id: "q5",
        question: "To open a source of many problems is to open _____ box.",
        answers: ["Pandora's", "Pandoras"],
        hint: "ящик Пандоры",
      },
      {
        id: "q6",
        question: "To make an irreversible decision is to cross the _____.",
        answers: ["Rubicon"],
        hint: "перейти Рубикон",
      },
      {
        id: "q7",
        question:
          "Assuming what you're trying to prove is to _____ the question.",
        answers: ["beg"],
        hint: "предполагать то, что нужно доказать",
      },
      {
        id: "q8",
        question: "At first sight is _____ facie.",
        answers: ["prima"],
        hint: "на первый взгляд",
      },
    ];

    const translationExercises = [
      {
        id: "t1",
        russian: "Пиррова победа",
        answers: ["Pyrrhic victory", "a Pyrrhic victory"],
      },
      {
        id: "t2",
        russian: "Взлететь на собственной петарде",
        answers: ["hoist with his own petard", "hoist with one's own petard"],
      },
      {
        id: "t3",
        russian: "Ахиллесова пята",
        answers: ["Achilles' heel", "Achilles heel"],
      },
      {
        id: "t4",
        russian: "Ящик Пандоры",
        answers: ["Pandora's box", "Pandoras box"],
      },
      {
        id: "t5",
        russian: "Перейти Рубикон",
        answers: ["cross the Rubicon", "crossing the Rubicon"],
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
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <span>✏️</span> Fill in the Blanks
          </h3>
          <p className="text-gray-600 mb-6">
            Заполните пропуски подходящими словами и нажмите
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
                  <span className="font-bold text-indigo-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition font-semibold"
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-purple-600">{i + 1}.</span>
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
                    placeholder="Enter translation..."
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-semibold"
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
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition font-bold text-xl shadow-lg"
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
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="font-bold text-xl text-indigo-800 mb-2">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-700 text-lg">
                Вы изучили более{" "}
                <strong>25 продвинутых и литературных идиом</strong> с их
                историческим и литературным происхождением. Теперь вы можете:
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>✅ Читать классическую литературу с пониманием идиом</li>
                <li>
                  ✅ Использовать продвинутые идиомы в академическом письме
                </li>
                <li>
                  ✅ Понимать исторические и литературные аллюзии в текстах
                </li>
                <li>
                  ✅ Демонстрировать высокий уровень владения английским языком
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
