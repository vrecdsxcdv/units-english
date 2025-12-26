"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function LiteratureCriticism({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Literature & Criticism
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📚</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Literature & Criticism
          </h2>
          <p className="text-xl text-gray-600">
            Литературная терминология и критика
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
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-4">
              Добро пожаловать в мир литературы и критики!
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Этот урок посвящён <strong>литературной терминологии</strong> —
              языку, на котором говорят писатели, критики и литературоведы.
              Понимание этих терминов поможет вам читать и анализировать
              художественную литературу на более глубоком уровне.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="text-3xl mb-2">✍️</div>
                <h4 className="font-bold text-amber-800">
                  Литературные приёмы
                </h4>
                <p className="text-gray-600 text-sm">
                  Метафора, аллегория, предзнаменование и другие техники
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div className="text-3xl mb-2">🎭</div>
                <h4 className="font-bold text-orange-800">Жанры</h4>
                <p className="text-gray-600 text-sm">
                  Дистопия, утопия, сатира и другие литературные формы
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-bold text-red-800">Критический анализ</h4>
                <p className="text-gray-600 text-sm">
                  Термины для анализа текста и интерпретации смысла
                </p>
              </div>
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
                <div className="text-3xl mb-2">📖</div>
                <h4 className="font-bold text-rose-800">Повествование</h4>
                <p className="text-gray-600 text-sm">
                  Точка зрения, нарратив, структура произведения
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-8">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">
              Зачем учить литературную терминологию?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Глубокое понимание текстов
                  </h4>
                  <p className="text-gray-600">
                    Вы сможете видеть скрытые смыслы и литературные приёмы в
                    произведениях
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Академическое чтение
                  </h4>
                  <p className="text-gray-600">
                    Литературные курсы, эссе и критические статьи требуют знания
                    терминологии
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl">
                <span className="text-3xl">✍️</span>
                <div>
                  <h4 className="font-bold text-gray-800">Улучшение письма</h4>
                  <p className="text-gray-600">
                    Понимание приёмов поможет вам использовать их в собственном
                    творчестве
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Культурная грамотность
                  </h4>
                  <p className="text-gray-600">
                    Обсуждение книг, фильмов и искусства на продвинутом уровне
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-8">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              Что мы изучим:
            </h3>
            <div className="grid gap-3">
              {[
                {
                  step: 2,
                  title: "Core Literary Terms",
                  desc: "metaphor, allegory, dystopia, foreshadowing",
                },
                {
                  step: 3,
                  title: "Literary Devices",
                  desc: "simile, symbolism, irony, personification",
                },
                {
                  step: 4,
                  title: "Narrative Techniques",
                  desc: "point of view, narrator, flashback, stream of consciousness",
                },
                {
                  step: 5,
                  title: "Genres & Forms",
                  desc: "utopia, satire, tragedy, comedy, epic",
                },
                {
                  step: 6,
                  title: "Character & Plot",
                  desc: "protagonist, antagonist, climax, resolution",
                },
                {
                  step: 7,
                  title: "Style & Tone",
                  desc: "diction, syntax, mood, atmosphere",
                },
                {
                  step: 8,
                  title: "Critical Terms",
                  desc: "theme, motif, subtext, intertextuality",
                },
                {
                  step: 9,
                  title: "Phrases & Expressions",
                  desc: "устойчивые выражения литературной критики",
                },
                {
                  step: 10,
                  title: "Interactive Practice",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl border border-red-100"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold">
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
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-amber-800 mb-2">
                Интересный факт
              </h3>
              <p className="text-gray-700">
                Термин <strong>&quot;metaphor&quot;</strong> происходит от
                греческого слова, означающего &quot;перенос&quot;. Метафора
                переносит значение одного понятия на другое, создавая новые
                смысловые связи. Это один из самых мощных инструментов в
                литературе.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Core Literary Terms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const coreTerms = [
      {
        term: "Metaphor",
        pronunciation: "/ˈmetəfə/",
        translation: "метафора",
        definition:
          "A figure of speech that directly compares two unrelated things by stating one is the other, without using 'like' or 'as'",
        examples: [
          "Time is a thief that steals our moments.",
          "Her voice was music to his ears.",
          "The classroom was a zoo during recess.",
        ],
        relatedTerms: ["simile", "analogy", "figurative language", "imagery"],
      },
      {
        term: "Allegory",
        pronunciation: "/ˈæləɡəri/",
        translation: "аллегория",
        definition:
          "A narrative in which characters, events, and settings represent abstract ideas or moral qualities, often used to teach a lesson",
        examples: [
          "Animal Farm is an allegory for the Russian Revolution.",
          "The allegory of the cave represents the journey from ignorance to knowledge.",
          "Many religious texts use allegory to convey spiritual truths.",
        ],
        relatedTerms: ["symbolism", "parable", "fable", "metaphor"],
      },
      {
        term: "Dystopia",
        pronunciation: "/dɪsˈtəʊpiə/",
        translation: "дистопия",
        definition:
          "An imagined state or society in which there is great suffering or injustice, typically one that is totalitarian or post-apocalyptic",
        examples: [
          "1984 by George Orwell is a classic dystopian novel.",
          "The Handmaid's Tale depicts a dystopian future.",
          "Dystopian fiction often warns about the dangers of unchecked power.",
        ],
        relatedTerms: [
          "utopia",
          "dystopian",
          "post-apocalyptic",
          "totalitarian",
        ],
      },
      {
        term: "Foreshadowing",
        pronunciation: "/fɔːˈʃædəʊɪŋ/",
        translation: "предзнаменование, намёк",
        definition:
          "A literary device in which an author gives hints or clues about what will happen later in the story",
        examples: [
          "The dark clouds foreshadowed the coming storm.",
          "Early mentions of the character's illness foreshadowed their death.",
          "Foreshadowing creates suspense and prepares readers for future events.",
        ],
        relatedTerms: [
          "prolepsis",
          "flashforward",
          "hint",
          "omen",
          "premonition",
        ],
      },
      {
        term: "Symbolism",
        pronunciation: "/ˈsɪmbəlɪzəm/",
        translation: "символизм",
        definition:
          "The use of symbols to represent ideas or qualities, giving deeper meaning to objects, characters, or events",
        examples: [
          "The green light in The Great Gatsby symbolizes hope and the American Dream.",
          "Water often symbolizes purification or rebirth in literature.",
          "The use of symbolism adds layers of meaning to the text.",
        ],
        relatedTerms: ["symbol", "metaphor", "allegory", "imagery"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">✍️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Core Literary Terms
          </h2>
          <p className="text-xl text-gray-600">Ключевые литературные термины</p>
        </div>

        <div className="space-y-6">
          {coreTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-amber-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm"
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

        {/* Tip */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h3 className="font-bold text-xl text-amber-800 mb-2">Совет</h3>
              <p className="text-gray-700">
                <strong>Metaphor</strong> и <strong>simile</strong> — близкие
                понятия, но есть разница: метафора говорит &quot;A is B&quot;
                (время — вор), а сравнение использует &quot;like&quot; или
                &quot;as&quot; (время как вор). Оба приёма создают яркие образы,
                но метафора более сильная и прямая.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Literary Devices
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const devices = [
      {
        term: "Simile",
        pronunciation: "/ˈsɪməli/",
        translation: "сравнение",
        definition:
          "A figure of speech that compares two different things using 'like' or 'as'",
        examples: [
          "She sings like an angel.",
          "His words cut like a knife.",
          "As brave as a lion.",
        ],
        relatedTerms: ["metaphor", "comparison", "analogy"],
      },
      {
        term: "Irony",
        pronunciation: "/ˈaɪrəni/",
        translation: "ирония",
        definition:
          "A contrast between expectation and reality, often used for humorous or emphatic effect",
        examples: [
          "A fire station burns down — that's ironic.",
          "The irony was that he criticized laziness while being unemployed.",
          "Dramatic irony occurs when the audience knows something the characters don't.",
        ],
        relatedTerms: [
          "dramatic irony",
          "situational irony",
          "verbal irony",
          "sarcasm",
        ],
      },
      {
        term: "Personification",
        pronunciation: "/pəˌsɒnɪfɪˈkeɪʃən/",
        translation: "олицетворение",
        definition:
          "Giving human qualities to non-human things, animals, or abstract concepts",
        examples: [
          "The wind whispered through the trees.",
          "Time flies when you're having fun.",
          "The sun smiled down on the garden.",
        ],
        relatedTerms: ["anthropomorphism", "metaphor", "figurative language"],
      },
      {
        term: "Alliteration",
        pronunciation: "/əˌlɪtəˈreɪʃən/",
        translation: "аллитерация",
        definition:
          "The repetition of the same initial consonant sound in nearby words",
        examples: [
          "Peter Piper picked a peck of pickled peppers.",
          "She sells seashells by the seashore.",
          "The wild wind whipped through the willows.",
        ],
        relatedTerms: ["assonance", "consonance", "rhyme", "repetition"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎭</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Literary Devices
          </h2>
          <p className="text-xl text-gray-600">Литературные приёмы</p>
        </div>

        <div className="space-y-6">
          {devices.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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
  // STEP 4: Narrative Techniques
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const narrativeTerms = [
      {
        term: "Point of view",
        pronunciation: "/pɔɪnt əv vjuː/",
        translation: "точка зрения",
        definition:
          "The perspective from which a story is told (first person, third person, etc.)",
        examples: [
          "The novel is written from a first-person point of view.",
          "Third-person omniscient allows the narrator to know all characters' thoughts.",
          "Changing point of view can reveal different perspectives on events.",
        ],
        relatedTerms: ["narrator", "perspective", "voice", "omniscient"],
      },
      {
        term: "Flashback",
        pronunciation: "/ˈflæʃbæk/",
        translation: "ретроспектива, возврат в прошлое",
        definition:
          "A scene that interrupts the present narrative to show events from the past",
        examples: [
          "The flashback revealed the character's traumatic childhood.",
          "The author used flashbacks to explain the character's motivations.",
          "Flashbacks can provide crucial background information.",
        ],
        relatedTerms: ["flashforward", "backstory", "memory", "reminiscence"],
      },
      {
        term: "Stream of consciousness",
        pronunciation: "/striːm əv kənˈʃɒsnəs/",
        translation: "поток сознания",
        definition:
          "A narrative technique that presents thoughts and feelings as they flow through a character's mind",
        examples: [
          "Ulysses by James Joyce uses stream of consciousness extensively.",
          "The technique captures the chaotic nature of human thought.",
          "Stream of consciousness breaks traditional narrative structure.",
        ],
        relatedTerms: [
          "interior monologue",
          "free indirect speech",
          "narrative technique",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📖</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Narrative Techniques
          </h2>
          <p className="text-xl text-gray-600">Повествовательные техники</p>
        </div>

        <div className="space-y-6">
          {narrativeTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-red-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-red-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Examples:</h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-red-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 5: Genres & Forms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const genres = [
      {
        term: "Utopia",
        pronunciation: "/juːˈtəʊpiə/",
        translation: "утопия",
        definition:
          "An imagined perfect society or place where everything is ideal",
        examples: [
          "The novel describes a utopia where all people live in harmony.",
          "Utopian literature often critiques current society.",
          "Many utopias turn out to be dystopias in disguise.",
        ],
        relatedTerms: ["dystopia", "ideal society", "perfect world"],
      },
      {
        term: "Satire",
        pronunciation: "/ˈsætaɪə/",
        translation: "сатира",
        definition:
          "A genre that uses humor, irony, or exaggeration to criticize and expose flaws in society or individuals",
        examples: [
          "Animal Farm is a satire of totalitarian regimes.",
          "Satirical works often use exaggeration to make their point.",
          "The author's satire targets political corruption.",
        ],
        relatedTerms: ["parody", "irony", "sarcasm", "criticism"],
      },
      {
        term: "Tragedy",
        pronunciation: "/ˈtrædʒədi/",
        translation: "трагедия",
        definition:
          "A dramatic work in which the protagonist suffers a downfall, often due to a tragic flaw",
        examples: [
          "Hamlet is one of Shakespeare's greatest tragedies.",
          "Tragic heroes often have a fatal flaw.",
          "The tragedy ends with the death of the main character.",
        ],
        relatedTerms: ["comedy", "drama", "tragic hero", "catharsis"],
      },
      {
        term: "Epic",
        pronunciation: "/ˈepɪk/",
        translation: "эпос",
        definition:
          "A long narrative poem about heroic deeds and adventures, often involving gods and legendary figures",
        examples: [
          "The Iliad and The Odyssey are ancient Greek epics.",
          "Epic poems often begin in medias res (in the middle of things).",
          "Modern epics include works like Paradise Lost.",
        ],
        relatedTerms: ["epic poem", "heroic poem", "narrative", "legend"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📚</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Genres & Forms
          </h2>
          <p className="text-xl text-gray-600">Жанры и формы</p>
        </div>

        <div className="space-y-6">
          {genres.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-rose-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-rose-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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
  // STEP 6: Character & Plot
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const plotTerms = [
      {
        term: "Protagonist",
        pronunciation: "/prəʊˈtæɡənɪst/",
        translation: "протагонист, главный герой",
        definition:
          "The main character around whom the story revolves, often the hero",
        examples: [
          "Harry Potter is the protagonist of the series.",
          "The protagonist faces numerous challenges throughout the story.",
          "A well-developed protagonist drives the narrative forward.",
        ],
        relatedTerms: ["hero", "main character", "central character"],
      },
      {
        term: "Antagonist",
        pronunciation: "/ænˈtæɡənɪst/",
        translation: "антагонист, противник",
        definition: "The character or force that opposes the protagonist",
        examples: [
          "Voldemort is the antagonist in Harry Potter.",
          "The antagonist creates conflict and obstacles.",
          "Not all antagonists are villains — some are forces of nature.",
        ],
        relatedTerms: ["villain", "opponent", "adversary", "foil"],
      },
      {
        term: "Climax",
        pronunciation: "/ˈklaɪmæks/",
        translation: "кульминация",
        definition: "The turning point or highest point of tension in a story",
        examples: [
          "The climax occurs when the hero confronts the villain.",
          "The story builds tension until it reaches its climax.",
          "After the climax, the resolution begins.",
        ],
        relatedTerms: ["turning point", "crisis", "peak", "culmination"],
      },
      {
        term: "Resolution",
        pronunciation: "/ˌrezəˈluːʃən/",
        translation: "развязка",
        definition:
          "The final part of the story where conflicts are resolved and loose ends are tied up",
        examples: [
          "The resolution reveals the outcome of all conflicts.",
          "A satisfying resolution ties up all plot threads.",
          "Some stories have open-ended resolutions.",
        ],
        relatedTerms: ["denouement", "ending", "conclusion", "outcome"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎬</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Character & Plot
          </h2>
          <p className="text-xl text-gray-600">Персонажи и сюжет</p>
        </div>

        <div className="space-y-6">
          {plotTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-pink-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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
  // STEP 7: Style & Tone
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const styleTerms = [
      {
        term: "Diction",
        pronunciation: "/ˈdɪkʃən/",
        translation: "дикция, выбор слов",
        definition: "The author's choice of words and style of expression",
        examples: [
          "Formal diction is used in academic writing.",
          "The author's diction creates a specific atmosphere.",
          "Colloquial diction makes dialogue sound natural.",
        ],
        relatedTerms: ["word choice", "vocabulary", "style", "language"],
      },
      {
        term: "Tone",
        pronunciation: "/təʊn/",
        translation: "тон",
        definition:
          "The author's attitude toward the subject matter or audience",
        examples: [
          "The tone of the novel is somber and reflective.",
          "A sarcastic tone can indicate criticism.",
          "The author maintains a serious tone throughout.",
        ],
        relatedTerms: ["mood", "atmosphere", "attitude", "voice"],
      },
      {
        term: "Mood",
        pronunciation: "/muːd/",
        translation: "настроение",
        definition:
          "The emotional atmosphere or feeling that a work creates for the reader",
        examples: [
          "The dark mood of the story creates tension.",
          "The author establishes a melancholic mood.",
          "Mood differs from tone — it's what the reader feels.",
        ],
        relatedTerms: ["atmosphere", "ambiance", "feeling", "emotion"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">✒️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Style & Tone
          </h2>
          <p className="text-xl text-gray-600">Стиль и тон</p>
        </div>

        <div className="space-y-6">
          {styleTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-amber-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 8: Critical Terms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const criticalTerms = [
      {
        term: "Theme",
        pronunciation: "/θiːm/",
        translation: "тема",
        definition:
          "The central idea, message, or insight about life that a work conveys",
        examples: [
          "The theme of the novel is the corruption of power.",
          "Love and loss are recurring themes in her poetry.",
          "Themes are often universal and timeless.",
        ],
        relatedTerms: ["message", "main idea", "subject", "motif"],
      },
      {
        term: "Motif",
        pronunciation: "/məʊˈtiːf/",
        translation: "мотив",
        definition:
          "A recurring element, image, or idea that has symbolic significance",
        examples: [
          "The motif of water appears throughout the novel.",
          "Light and darkness are key motifs in the play.",
          "Motifs reinforce the work's themes.",
        ],
        relatedTerms: ["symbol", "pattern", "recurring element", "theme"],
      },
      {
        term: "Subtext",
        pronunciation: "/ˈsʌbtekst/",
        translation: "подтекст",
        definition:
          "The underlying or implicit meaning beneath the surface of the text",
        examples: [
          "The subtext suggests the character's true feelings.",
          "Reading between the lines reveals the subtext.",
          "The dialogue has a subtext of tension.",
        ],
        relatedTerms: ["implicit meaning", "underlying meaning", "implication"],
      },
      {
        term: "Intertextuality",
        pronunciation: "/ˌɪntətekstʃuˈælɪti/",
        translation: "интертекстуальность",
        definition:
          "The relationship between texts, where one text references or alludes to another",
        examples: [
          "The novel shows intertextuality by referencing Shakespeare.",
          "Understanding intertextuality enriches the reading experience.",
          "Postmodern literature often uses intertextuality extensively.",
        ],
        relatedTerms: ["allusion", "reference", "quotation", "influence"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔍</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Critical Terms
          </h2>
          <p className="text-xl text-gray-600">Критические термины</p>
        </div>

        <div className="space-y-6">
          {criticalTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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
  // STEP 9: Phrases & Collocations
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const collocations = {
      literary: [
        { phrase: "literary device", translation: "литературный приём" },
        { phrase: "literary analysis", translation: "литературный анализ" },
        { phrase: "literary criticism", translation: "литературная критика" },
        { phrase: "literary work", translation: "литературное произведение" },
        { phrase: "literary tradition", translation: "литературная традиция" },
      ],
      narrative: [
        {
          phrase: "narrative structure",
          translation: "повествовательная структура",
        },
        { phrase: "narrative voice", translation: "повествовательный голос" },
        {
          phrase: "narrative technique",
          translation: "повествовательная техника",
        },
        { phrase: "unreliable narrator", translation: "ненадёжный рассказчик" },
        { phrase: "narrative arc", translation: "повествовательная дуга" },
      ],
      character: [
        { phrase: "character development", translation: "развитие персонажа" },
        { phrase: "flat character", translation: "плоский персонаж" },
        { phrase: "round character", translation: "объёмный персонаж" },
        { phrase: "character arc", translation: "дуга персонажа" },
        { phrase: "foil character", translation: "персонаж-контраст" },
      ],
      analysis: [
        { phrase: "close reading", translation: "тщательное чтение" },
        { phrase: "textual analysis", translation: "текстовый анализ" },
        {
          phrase: "critical interpretation",
          translation: "критическая интерпретация",
        },
        { phrase: "literary theory", translation: "литературная теория" },
        { phrase: "deconstruct a text", translation: "деконструировать текст" },
      ],
    };

    const usefulPhrases = [
      {
        phrase: "read between the lines",
        translation: "читать между строк",
        example:
          "To understand the subtext, you need to read between the lines.",
      },
      {
        phrase: "a work of fiction",
        translation: "художественное произведение",
        example: "The novel is a work of fiction based on historical events.",
      },
      {
        phrase: "literary merit",
        translation: "литературная ценность",
        example: "The book's literary merit was recognized by critics.",
      },
      {
        phrase: "break the fourth wall",
        translation: "разрушить четвёртую стену",
        example:
          "The character breaks the fourth wall by addressing the audience directly.",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔗</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Phrases & Collocations
          </h2>
          <p className="text-xl text-gray-600">
            Устойчивые выражения литературной критики
          </p>
        </div>

        {/* Collocations by category */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(collocations).map(([category, phrases]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
                <h3 className="text-xl font-bold capitalize">
                  {category} Collocations
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {phrases.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-start gap-2 p-2 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium text-amber-700">
                        {item.phrase}
                      </span>
                      <span className="text-gray-600 text-sm text-right">
                        {item.translation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Useful phrases */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-6">
          <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <span>💬</span> Useful Expressions
          </h3>
          <div className="space-y-4">
            {usefulPhrases.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border border-red-100"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <span className="font-bold text-red-700 text-lg">
                    {item.phrase}
                  </span>
                  <span className="text-gray-600 italic">
                    {item.translation}
                  </span>
                </div>
                <p className="text-gray-700 text-sm bg-white/50 p-2 rounded-lg">
                  <span className="text-red-500">Example: </span>
                  {item.example}
                </p>
              </div>
            ))}
          </div>
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
        question:
          "A _____ directly compares two things without using 'like' or 'as'.",
        answers: ["metaphor"],
        hint: "метафора",
      },
      {
        id: "q2",
        question:
          "1984 is an example of a _____ novel, depicting a terrible future society.",
        answers: ["dystopian", "dystopia"],
        hint: "дистопия",
      },
      {
        id: "q3",
        question: "When an author hints at future events, it's called _____.",
        answers: ["foreshadowing"],
        hint: "предзнаменование",
      },
      {
        id: "q4",
        question:
          "An _____ uses characters and events to represent abstract ideas.",
        answers: ["allegory"],
        hint: "аллегория",
      },
      {
        id: "q5",
        question: "The main character in a story is called the _____.",
        answers: ["protagonist"],
        hint: "протагонист",
      },
      {
        id: "q6",
        question: "The highest point of tension in a story is the _____.",
        answers: ["climax"],
        hint: "кульминация",
      },
      {
        id: "q7",
        question: "A comparison using 'like' or 'as' is called a _____.",
        answers: ["simile"],
        hint: "сравнение",
      },
      {
        id: "q8",
        question: "The central message of a work is its _____.",
        answers: ["theme"],
        hint: "тема",
      },
    ];

    const translationExercises = [
      {
        id: "t1",
        russian: "Метафора",
        answers: ["metaphor"],
      },
      {
        id: "t2",
        russian: "Аллегория",
        answers: ["allegory"],
      },
      {
        id: "t3",
        russian: "Дистопия",
        answers: ["dystopia"],
      },
      {
        id: "t4",
        russian: "Предзнаменование",
        answers: ["foreshadowing"],
      },
      {
        id: "t5",
        russian: "Протагонист",
        answers: ["protagonist"],
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
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-6">
          <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-amber-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition font-semibold"
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-6">
          <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-orange-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
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
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl hover:from-amber-600 hover:to-orange-600 transition font-bold text-xl shadow-lg"
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
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="font-bold text-xl text-amber-800 mb-2">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-700 text-lg">
                Вы изучили более <strong>30 литературных терминов</strong> и
                множество устойчивых выражений. Теперь вы можете:
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>
                  ✅ Анализировать литературные произведения на глубоком уровне
                </li>
                <li>✅ Понимать критическую литературу и эссе</li>
                <li>
                  ✅ Использовать литературные термины в собственных работах
                </li>
                <li>
                  ✅ Обсуждать книги и фильмы с использованием профессиональной
                  терминологии
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
