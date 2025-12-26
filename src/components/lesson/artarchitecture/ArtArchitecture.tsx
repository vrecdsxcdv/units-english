"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function ArtArchitecture({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Art & Architecture
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎨</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Art & Architecture
          </h2>
          <p className="text-xl text-gray-600">
            Терминология искусства и архитектуры
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
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Добро пожаловать в мир искусства и архитектуры!
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Этот урок посвящён{" "}
              <strong>терминологии искусства и архитектуры</strong> — языку, на
              котором говорят художники, архитекторы, критики и искусствоведы.
              Понимание этих терминов поможет вам обсуждать произведения
              искусства, архитектурные стили и художественные движения на
              профессиональном уровне.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="text-3xl mb-2">🖼️</div>
                <h4 className="font-bold text-purple-800">
                  Художественные стили
                </h4>
                <p className="text-gray-600 text-sm">
                  Авангард, барокко, ренессанс и другие направления
                </p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                <div className="text-3xl mb-2">🏛️</div>
                <h4 className="font-bold text-pink-800">Архитектура</h4>
                <p className="text-gray-600 text-sm">
                  Стили, элементы, техники строительства
                </p>
              </div>
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
                <div className="text-3xl mb-2">🎭</div>
                <h4 className="font-bold text-rose-800">Техники и материалы</h4>
                <p className="text-gray-600 text-sm">
                  Медиум, перспектива, композиция, техники живописи
                </p>
              </div>
              <div className="bg-fuchsia-50 rounded-xl p-4 border border-fuchsia-200">
                <div className="text-3xl mb-2">📐</div>
                <h4 className="font-bold text-fuchsia-800">
                  Критический анализ
                </h4>
                <p className="text-gray-600 text-sm">
                  Термины для описания и анализа произведений искусства
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-8">
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Зачем учить терминологию искусства и архитектуры?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <span className="text-3xl">🎨</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Посещение музеев и галерей
                  </h4>
                  <p className="text-gray-600">
                    Понимание терминов обогащает опыт посещения выставок и
                    позволяет глубже оценить произведения
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Академическое изучение
                  </h4>
                  <p className="text-gray-600">
                    Курсы истории искусства, архитектуры и дизайна требуют
                    знания профессиональной терминологии
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-rose-50 to-fuchsia-50 rounded-xl">
                <span className="text-3xl">💼</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Карьера в искусстве
                  </h4>
                  <p className="text-gray-600">
                    Художники, дизайнеры, архитекторы и кураторы используют эту
                    терминологию в работе
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-xl">
                <span className="text-3xl">🌍</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Культурная грамотность
                  </h4>
                  <p className="text-gray-600">
                    Обсуждение искусства и архитектуры на международном уровне
                    требует знания английской терминологии
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-rose-200 p-8">
            <h3 className="text-2xl font-bold text-rose-700 mb-4">
              Что мы изучим:
            </h3>
            <div className="grid gap-3">
              {[
                {
                  step: 2,
                  title: "Core Art Terms",
                  desc: "avant-garde, baroque, perspective, medium",
                },
                {
                  step: 3,
                  title: "Art Movements",
                  desc: "renaissance, impressionism, surrealism, modernism",
                },
                {
                  step: 4,
                  title: "Architectural Styles",
                  desc: "gothic, neoclassical, art deco, postmodern",
                },
                {
                  step: 5,
                  title: "Techniques & Methods",
                  desc: "fresco, chiaroscuro, collage, installation",
                },
                {
                  step: 6,
                  title: "Composition & Elements",
                  desc: "composition, balance, contrast, texture",
                },
                {
                  step: 7,
                  title: "Architectural Elements",
                  desc: "facade, arch, column, vault, dome",
                },
                {
                  step: 8,
                  title: "Critical Terms",
                  desc: "aesthetic, iconography, patronage, provenance",
                },
                {
                  step: 9,
                  title: "Phrases & Expressions",
                  desc: "устойчивые выражения искусства и архитектуры",
                },
                {
                  step: 10,
                  title: "Interactive Practice",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-rose-50 rounded-xl border border-rose-100"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
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
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-purple-800 mb-2">
                Интересный факт
              </h3>
              <p className="text-gray-700">
                Термин <strong>&quot;avant-garde&quot;</strong> происходит от
                французского военного термина, означающего &quot;передовой
                отряд&quot;. В искусстве он описывает художников и движения,
                которые опережают своё время и бросают вызов традициям. Авангард
                часто вызывает споры и переосмысление искусства.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Core Art Terms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const coreTerms = [
      {
        term: "Avant-garde",
        pronunciation: "/ˌævɒ̃ ˈɡɑːd/",
        translation: "авангард",
        definition:
          "Artistic works that are experimental, innovative, or ahead of their time, often challenging traditional norms",
        examples: [
          "The avant-garde movement of the early 20th century revolutionized art.",
          "Avant-garde artists often face criticism for breaking conventions.",
          "Her work is considered avant-garde for its use of unconventional materials.",
        ],
        relatedTerms: [
          "experimental",
          "innovative",
          "cutting-edge",
          "progressive",
        ],
      },
      {
        term: "Baroque",
        pronunciation: "/bəˈrɒk/",
        translation: "барокко",
        definition:
          "A highly ornate and elaborate style of art, architecture, and music that flourished in Europe from the early 17th to mid-18th century",
        examples: [
          "Baroque architecture is characterized by dramatic details and grandeur.",
          "The baroque period produced some of the most elaborate artworks.",
          "Baroque music features complex ornamentation and emotional expression.",
        ],
        relatedTerms: ["ornate", "elaborate", "rococo", "classical"],
      },
      {
        term: "Perspective",
        pronunciation: "/pəˈspektɪv/",
        translation: "перспектива",
        definition:
          "A technique in art that creates the illusion of depth and three-dimensionality on a flat surface",
        examples: [
          "Linear perspective was developed during the Renaissance.",
          "The artist used perspective to create depth in the painting.",
          "Understanding perspective is essential for realistic drawing.",
        ],
        relatedTerms: [
          "linear perspective",
          "atmospheric perspective",
          "vanishing point",
          "foreshortening",
        ],
      },
      {
        term: "Medium",
        pronunciation: "/ˈmiːdiəm/",
        translation: "медиум, материал",
        definition:
          "The material or technique used by an artist to create a work of art (e.g., oil paint, watercolor, sculpture, photography)",
        examples: [
          "Oil paint is a traditional medium for painting.",
          "The artist experimented with different mediums.",
          "Mixed media combines multiple artistic mediums.",
        ],
        relatedTerms: [
          "material",
          "technique",
          "media",
          "mixed media",
          "medium plural",
        ],
      },
      {
        term: "Composition",
        pronunciation: "/ˌkɒmpəˈzɪʃən/",
        translation: "композиция",
        definition:
          "The arrangement of elements within a work of art, including balance, harmony, and visual flow",
        examples: [
          "The composition guides the viewer's eye through the painting.",
          "Good composition is fundamental to successful artwork.",
          "The artist carefully planned the composition before painting.",
        ],
        relatedTerms: ["layout", "arrangement", "balance", "harmony", "design"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🖼️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Core Art Terms
          </h2>
          <p className="text-xl text-gray-600">Ключевые термины искусства</p>
        </div>

        <div className="space-y-6">
          {coreTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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

        {/* Tip */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h3 className="font-bold text-xl text-purple-800 mb-2">Совет</h3>
              <p className="text-gray-700">
                <strong>Medium</strong> имеет два значения в искусстве: 1)
                материал (oil paint, watercolor), 2) во множественном числе
                <strong> &quot;media&quot;</strong> означает различные формы
                искусства (painting, sculpture, photography).{" "}
                <strong>&quot;Mixed media&quot;</strong> — это использование
                нескольких материалов в одном произведении.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Art Movements
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const movements = [
      {
        term: "Renaissance",
        pronunciation: "/rɪˈneɪsəns/",
        translation: "ренессанс",
        definition:
          "A period of European cultural, artistic, and intellectual rebirth from the 14th to 17th centuries",
        examples: [
          "The Renaissance marked a shift from medieval to modern thinking.",
          "Renaissance art emphasized realism and humanism.",
          "Leonardo da Vinci was a key figure of the Renaissance.",
        ],
        relatedTerms: ["humanism", "classical", "rebirth", "renaissance art"],
      },
      {
        term: "Impressionism",
        pronunciation: "/ɪmˈpreʃənɪzəm/",
        translation: "импрессионизм",
        definition:
          "A 19th-century art movement characterized by visible brushstrokes, emphasis on light, and ordinary subject matter",
        examples: [
          "Monet and Renoir were leading impressionist painters.",
          "Impressionism captured the fleeting effects of light.",
          "The movement broke away from traditional academic painting.",
        ],
        relatedTerms: ["post-impressionism", "en plein air", "brushstroke"],
      },
      {
        term: "Surrealism",
        pronunciation: "/səˈrɪəlɪzəm/",
        translation: "сюрреализм",
        definition:
          "A 20th-century avant-garde movement that sought to release the creative potential of the unconscious mind",
        examples: [
          "Salvador Dalí was a famous surrealist artist.",
          "Surrealism combines dream imagery with realistic detail.",
          "The movement was influenced by Freud's theories.",
        ],
        relatedTerms: ["dreamlike", "unconscious", "fantasy", "dada"],
      },
      {
        term: "Modernism",
        pronunciation: "/ˈmɒdənɪzəm/",
        translation: "модернизм",
        definition:
          "A movement in art, literature, and architecture that rejected traditional forms and embraced innovation",
        examples: [
          "Modernism emerged in the late 19th and early 20th centuries.",
          "Modernist architecture emphasized function over ornament.",
          "The movement reflected rapid social and technological change.",
        ],
        relatedTerms: ["modern", "contemporary", "innovation", "abstraction"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎭</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Art Movements
          </h2>
          <p className="text-xl text-gray-600">Художественные движения</p>
        </div>

        <div className="space-y-6">
          {movements.map((item, index) => (
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
  // STEP 4: Architectural Styles
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const archStyles = [
      {
        term: "Gothic",
        pronunciation: "/ˈɡɒθɪk/",
        translation: "готика",
        definition:
          "A style of architecture that flourished in medieval Europe, characterized by pointed arches, ribbed vaults, and flying buttresses",
        examples: [
          "Notre-Dame Cathedral is a masterpiece of Gothic architecture.",
          "Gothic architecture emphasized height and light.",
          "The style evolved from Romanesque architecture.",
        ],
        relatedTerms: [
          "pointed arch",
          "flying buttress",
          "gargoyle",
          "stained glass",
        ],
      },
      {
        term: "Neoclassical",
        pronunciation: "/ˌniːəʊˈklæsɪkəl/",
        translation: "неоклассицизм",
        definition:
          "An architectural style that revived classical Greek and Roman forms, popular in the 18th and 19th centuries",
        examples: [
          "The White House features neoclassical architecture.",
          "Neoclassical buildings evoke ancient Greek temples.",
          "The style emphasized symmetry and proportion.",
        ],
        relatedTerms: ["classical", "columns", "symmetry", "pediment"],
      },
      {
        term: "Art Deco",
        pronunciation: "/ɑːt ˈdekoʊ/",
        translation: "ар-деко",
        definition:
          "A decorative style of the 1920s and 1930s characterized by geometric shapes, bold colors, and luxurious materials",
        examples: [
          "Art Deco influenced architecture, fashion, and design.",
          "The Chrysler Building is an Art Deco masterpiece.",
          "The style celebrated modernity and glamour.",
        ],
        relatedTerms: ["geometric", "streamlined", "luxury", "modern"],
      },
      {
        term: "Postmodern",
        pronunciation: "/ˌpəʊstˈmɒdən/",
        translation: "постмодерн",
        definition:
          "An architectural style that emerged in the late 20th century, rejecting modernist principles and embracing eclecticism",
        examples: [
          "Postmodern architecture often combines historical references.",
          "The style challenges the idea of a single architectural truth.",
          "Postmodern buildings can be playful and ironic.",
        ],
        relatedTerms: [
          "eclectic",
          "irony",
          "historical reference",
          "pluralism",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🏛️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Architectural Styles
          </h2>
          <p className="text-xl text-gray-600">Архитектурные стили</p>
        </div>

        <div className="space-y-6">
          {archStyles.map((item, index) => (
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
  // STEP 5: Techniques & Methods
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const techniques = [
      {
        term: "Fresco",
        pronunciation: "/ˈfreskoʊ/",
        translation: "фреска",
        definition:
          "A technique of painting on wet plaster, allowing the paint to become part of the wall",
        examples: [
          "Michelangelo painted the Sistine Chapel ceiling in fresco.",
          "Fresco painting requires speed and skill.",
          "The technique creates durable wall paintings.",
        ],
        relatedTerms: ["mural", "plaster", "wall painting", "buon fresco"],
      },
      {
        term: "Chiaroscuro",
        pronunciation: "/kiˌɑːrəˈskʊroʊ/",
        translation: "светотень",
        definition:
          "The use of strong contrasts between light and dark to create depth and drama",
        examples: [
          "Caravaggio was a master of chiaroscuro.",
          "The technique creates dramatic three-dimensional effects.",
          "Chiaroscuro emphasizes the play of light and shadow.",
        ],
        relatedTerms: ["light and shadow", "contrast", "dramatic lighting"],
      },
      {
        term: "Collage",
        pronunciation: "/kəˈlɑːʒ/",
        translation: "коллаж",
        definition:
          "An artistic technique of assembling different materials, such as paper, fabric, or photographs, into a composition",
        examples: [
          "Picasso and Braque pioneered collage in art.",
          "Collage allows artists to combine diverse elements.",
          "The technique challenges traditional notions of art.",
        ],
        relatedTerms: ["assemblage", "mixed media", "montage", "cut and paste"],
      },
      {
        term: "Installation",
        pronunciation: "/ˌɪnstəˈleɪʃən/",
        translation: "инсталляция",
        definition:
          "A three-dimensional artwork designed to transform a space and create an immersive experience",
        examples: [
          "The museum featured a large-scale installation.",
          "Installation art engages viewers in physical space.",
          "The artist created an interactive installation.",
        ],
        relatedTerms: [
          "site-specific",
          "immersive",
          "sculpture",
          "environmental art",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🖌️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Techniques & Methods
          </h2>
          <p className="text-xl text-gray-600">Техники и методы</p>
        </div>

        <div className="space-y-6">
          {techniques.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-fuchsia-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-fuchsia-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-fuchsia-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-fuchsia-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-fuchsia-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-fuchsia-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 6: Composition & Elements
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const elements = [
      {
        term: "Balance",
        pronunciation: "/ˈbæləns/",
        translation: "баланс",
        definition:
          "The distribution of visual weight in a composition, creating stability and harmony",
        examples: [
          "Symmetrical balance creates formal harmony.",
          "The composition achieves balance through color distribution.",
          "Balance can be symmetrical or asymmetrical.",
        ],
        relatedTerms: ["symmetry", "harmony", "equilibrium", "visual weight"],
      },
      {
        term: "Contrast",
        pronunciation: "/ˈkɒntrɑːst/",
        translation: "контраст",
        definition:
          "The difference between elements in a composition, such as light and dark, or color and texture",
        examples: [
          "High contrast creates dramatic visual impact.",
          "The artist used contrast to emphasize the focal point.",
          "Contrast adds visual interest to the composition.",
        ],
        relatedTerms: ["difference", "opposition", "juxtaposition", "emphasis"],
      },
      {
        term: "Texture",
        pronunciation: "/ˈtekstʃə/",
        translation: "текстура",
        definition:
          "The surface quality of an artwork, which can be actual (tactile) or implied (visual)",
        examples: [
          "The painting has a rough, impasto texture.",
          "Texture adds depth and interest to the surface.",
          "Smooth and rough textures create different moods.",
        ],
        relatedTerms: ["surface", "tactile", "impasto", "visual texture"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📐</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Composition & Elements
          </h2>
          <p className="text-xl text-gray-600">Композиция и элементы</p>
        </div>

        <div className="space-y-6">
          {elements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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
  // STEP 7: Architectural Elements
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const archElements = [
      {
        term: "Facade",
        pronunciation: "/fəˈsɑːd/",
        translation: "фасад",
        definition:
          "The front or exterior face of a building, often the most decorative and visible part",
        examples: [
          "The building's facade features intricate stone carvings.",
          "The neoclassical facade includes columns and pediments.",
          "Facade design reflects the building's style and period.",
        ],
        relatedTerms: ["exterior", "front", "elevation", "face"],
      },
      {
        term: "Arch",
        pronunciation: "/ɑːtʃ/",
        translation: "арка",
        definition:
          "A curved structural element that spans an opening and supports weight",
        examples: [
          "Roman arches revolutionized architecture.",
          "The triumphal arch commemorates military victories.",
          "Arches distribute weight efficiently.",
        ],
        relatedTerms: ["vault", "keystone", "voussoir", "arcade"],
      },
      {
        term: "Column",
        pronunciation: "/ˈkɒləm/",
        translation: "колонна",
        definition:
          "A vertical structural element that supports weight, often decorative in classical architecture",
        examples: [
          "Greek temples feature Doric, Ionic, and Corinthian columns.",
          "Columns can be structural or purely decorative.",
          "The building's entrance is flanked by marble columns.",
        ],
        relatedTerms: ["pillar", "capital", "base", "shaft"],
      },
      {
        term: "Vault",
        pronunciation: "/vɔːlt/",
        translation: "свод",
        definition:
          "An arched ceiling or roof structure, often used in Gothic architecture",
        examples: [
          "Gothic cathedrals feature ribbed vaults.",
          "The vault creates a sense of height and space.",
          "Barrel vaults are simpler than ribbed vaults.",
        ],
        relatedTerms: ["ceiling", "arch", "rib", "barrel vault"],
      },
      {
        term: "Dome",
        pronunciation: "/dəʊm/",
        translation: "купол",
        definition:
          "A rounded vault forming the roof of a building, often hemispherical",
        examples: [
          "The Pantheon features a magnificent dome.",
          "Domes symbolize power and grandeur.",
          "The dome's oculus allows light to enter.",
        ],
        relatedTerms: ["cupola", "hemisphere", "rotunda", "oculus"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🏗️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Architectural Elements
          </h2>
          <p className="text-xl text-gray-600">Архитектурные элементы</p>
        </div>

        <div className="space-y-6">
          {archElements.map((item, index) => (
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
  // STEP 8: Critical Terms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const criticalTerms = [
      {
        term: "Aesthetic",
        pronunciation: "/esˈθetɪk/",
        translation: "эстетика",
        definition:
          "Relating to beauty or artistic taste; the principles underlying the work of art",
        examples: [
          "The building's aesthetic combines modern and traditional elements.",
          "Aesthetic preferences vary across cultures.",
          "The minimalist aesthetic emphasizes simplicity.",
        ],
        relatedTerms: ["beauty", "taste", "style", "visual appeal"],
      },
      {
        term: "Iconography",
        pronunciation: "/ˌaɪkəˈnɒɡrəfi/",
        translation: "иконография",
        definition: "The study and interpretation of symbols and images in art",
        examples: [
          "Religious iconography is rich in symbolic meaning.",
          "The iconography of the painting reveals hidden messages.",
          "Understanding iconography helps interpret artworks.",
        ],
        relatedTerms: ["symbol", "imagery", "meaning", "representation"],
      },
      {
        term: "Patronage",
        pronunciation: "/ˈpætrənɪdʒ/",
        translation: "покровительство, меценатство",
        definition:
          "The support, encouragement, or financial backing given by a patron to an artist",
        examples: [
          "Renaissance art flourished under wealthy patronage.",
          "The Medici family provided patronage to many artists.",
          "Modern patronage comes from museums and collectors.",
        ],
        relatedTerms: ["sponsor", "patron", "support", "commission"],
      },
      {
        term: "Provenance",
        pronunciation: "/ˈprɒvənəns/",
        translation: "происхождение, провенанс",
        definition:
          "The history of ownership of a work of art, important for authentication and value",
        examples: [
          "The painting's provenance traces back to the 18th century.",
          "Provenance documentation is essential for art authentication.",
          "A clear provenance increases an artwork's value.",
        ],
        relatedTerms: ["provenance", "ownership", "history", "authenticity"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
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
  // STEP 9: Phrases & Collocations
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const collocations = {
      art: [
        { phrase: "work of art", translation: "произведение искусства" },
        { phrase: "art movement", translation: "художественное движение" },
        { phrase: "art gallery", translation: "художественная галерея" },
        {
          phrase: "art collector",
          translation: "коллекционер произведений искусства",
        },
        { phrase: "art exhibition", translation: "художественная выставка" },
      ],
      architecture: [
        { phrase: "architectural style", translation: "архитектурный стиль" },
        {
          phrase: "architectural element",
          translation: "архитектурный элемент",
        },
        { phrase: "architectural design", translation: "архитектурный дизайн" },
        {
          phrase: "architectural feature",
          translation: "архитектурная особенность",
        },
        {
          phrase: "architectural masterpiece",
          translation: "архитектурный шедевр",
        },
      ],
      technique: [
        { phrase: "artistic technique", translation: "художественная техника" },
        { phrase: "painting technique", translation: "техника живописи" },
        { phrase: "sculpting technique", translation: "техника скульптуры" },
        { phrase: "mixed media", translation: "смешанная техника" },
        {
          phrase: "traditional technique",
          translation: "традиционная техника",
        },
      ],
      analysis: [
        { phrase: "art criticism", translation: "критика искусства" },
        {
          phrase: "art analysis",
          translation: "анализ произведения искусства",
        },
        { phrase: "visual analysis", translation: "визуальный анализ" },
        {
          phrase: "artistic interpretation",
          translation: "художественная интерпретация",
        },
        { phrase: "aesthetic value", translation: "эстетическая ценность" },
      ],
    };

    const usefulPhrases = [
      {
        phrase: "in the style of",
        translation: "в стиле",
        example: "The building was designed in the style of neoclassicism.",
      },
      {
        phrase: "break new ground",
        translation: "открывать новые горизонты",
        example: "The artist broke new ground with her innovative techniques.",
      },
      {
        phrase: "stand the test of time",
        translation: "выдержать испытание временем",
        example: "Great architecture stands the test of time.",
      },
      {
        phrase: "aesthetic appeal",
        translation: "эстетическая привлекательность",
        example: "The sculpture's aesthetic appeal captivated viewers.",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔗</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Phrases & Collocations
          </h2>
          <p className="text-xl text-gray-600">
            Устойчивые выражения искусства и архитектуры
          </p>
        </div>

        {/* Collocations by category */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(collocations).map(([category, phrases]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
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
                      <span className="font-medium text-purple-700">
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6">
          <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
            <span>💬</span> Useful Expressions
          </h3>
          <div className="space-y-4">
            {usefulPhrases.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <span className="font-bold text-pink-700 text-lg">
                    {item.phrase}
                  </span>
                  <span className="text-gray-600 italic">
                    {item.translation}
                  </span>
                </div>
                <p className="text-gray-700 text-sm bg-white/50 p-2 rounded-lg">
                  <span className="text-pink-500">Example: </span>
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
          "Artistic works that are experimental and ahead of their time are called _____.",
        answers: ["avant-garde"],
        hint: "авангард",
      },
      {
        id: "q2",
        question:
          "The highly ornate style of the 17th-18th centuries is called _____.",
        answers: ["baroque"],
        hint: "барокко",
      },
      {
        id: "q3",
        question:
          "The technique that creates the illusion of depth is called _____.",
        answers: ["perspective"],
        hint: "перспектива",
      },
      {
        id: "q4",
        question:
          "The material used by an artist (e.g., oil paint) is called a _____.",
        answers: ["medium"],
        hint: "медиум",
      },
      {
        id: "q5",
        question: "The front exterior face of a building is called the _____.",
        answers: ["facade"],
        hint: "фасад",
      },
      {
        id: "q6",
        question:
          "A curved structural element that spans an opening is called an _____.",
        answers: ["arch"],
        hint: "арка",
      },
      {
        id: "q7",
        question: "A rounded vault forming a roof is called a _____.",
        answers: ["dome"],
        hint: "купол",
      },
      {
        id: "q8",
        question: "The study of symbols and images in art is called _____.",
        answers: ["iconography"],
        hint: "иконография",
      },
    ];

    const translationExercises = [
      {
        id: "t1",
        russian: "Авангард",
        answers: ["avant-garde"],
      },
      {
        id: "t2",
        russian: "Барокко",
        answers: ["baroque"],
      },
      {
        id: "t3",
        russian: "Перспектива",
        answers: ["perspective"],
      },
      {
        id: "t4",
        russian: "Медиум",
        answers: ["medium"],
      },
      {
        id: "t5",
        russian: "Фасад",
        answers: ["facade"],
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
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-purple-600">{i + 1}.</span>
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6">
          <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-pink-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-semibold"
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
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition font-bold text-xl shadow-lg"
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
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="font-bold text-xl text-purple-800 mb-2">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-700 text-lg">
                Вы изучили более{" "}
                <strong>30 терминов искусства и архитектуры</strong> и множество
                устойчивых выражений. Теперь вы можете:
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>
                  ✅ Обсуждать произведения искусства и архитектурные стили
                </li>
                <li>
                  ✅ Понимать искусствоведческую литературу и критические статьи
                </li>
                <li>
                  ✅ Использовать профессиональную терминологию в описании
                  искусства
                </li>
                <li>
                  ✅ Посещать музеи и галереи с глубоким пониманием терминологии
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
