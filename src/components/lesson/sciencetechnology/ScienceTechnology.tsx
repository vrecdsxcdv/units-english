"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function ScienceTechnology({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Science & Technology
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔬</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Science & Technology
          </h2>
          <p className="text-xl text-gray-600">Научно-техническая лексика</p>
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
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-8">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Добро пожаловать в мир науки и технологий!
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Этот урок посвящён{" "}
              <strong>научно-технической терминологии</strong> — одной из самых
              динамично развивающихся областей английского языка. В современном
              мире технологии проникают во все сферы жизни, и владение
              соответствующей лексикой становится необходимостью.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
                <div className="text-3xl mb-2">🧬</div>
                <h4 className="font-bold text-cyan-800">Биотехнологии</h4>
                <p className="text-gray-600 text-sm">
                  От генной инженерии до персонализированной медицины
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-bold text-blue-800">
                  Искусственный интеллект
                </h4>
                <p className="text-gray-600 text-sm">
                  Нейросети, машинное обучение, автоматизация
                </p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <div className="text-3xl mb-2">⚛️</div>
                <h4 className="font-bold text-indigo-800">
                  Квантовые технологии
                </h4>
                <p className="text-gray-600 text-sm">
                  Квантовые вычисления и криптография
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold text-purple-800">Космос</h4>
                <p className="text-gray-600 text-sm">
                  Исследование космоса и астрономия
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Зачем учить научно-техническую лексику?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                <span className="text-3xl">💼</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Карьерные возможности
                  </h4>
                  <p className="text-gray-600">
                    IT, биотех, инженерия — самые быстрорастущие отрасли с
                    высокими зарплатами
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <span className="text-3xl">📰</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Понимание новостей
                  </h4>
                  <p className="text-gray-600">
                    Научные открытия и технологические прорывы обсуждаются
                    ежедневно
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Академическое чтение
                  </h4>
                  <p className="text-gray-600">
                    Научные статьи, исследования и документация — всё на
                    английском
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Глобальная коммуникация
                  </h4>
                  <p className="text-gray-600">
                    Английский — международный язык науки и технологий
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-8">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Что мы изучим:
            </h3>
            <div className="grid gap-3">
              {[
                {
                  step: 2,
                  title: "Core Science & Tech Terms",
                  desc: "quantum, algorithm, biotech, neural network",
                },
                {
                  step: 3,
                  title: "Physics & Chemistry",
                  desc: "particle, molecule, fusion, radiation",
                },
                {
                  step: 4,
                  title: "Biology & Genetics",
                  desc: "DNA, genome, mutation, stem cells",
                },
                {
                  step: 5,
                  title: "Computer Science & AI",
                  desc: "machine learning, big data, cloud computing",
                },
                {
                  step: 6,
                  title: "Engineering & Innovation",
                  desc: "prototype, automation, sustainable",
                },
                {
                  step: 7,
                  title: "Space & Astronomy",
                  desc: "satellite, orbit, black hole, exoplanet",
                },
                {
                  step: 8,
                  title: "Medical Technology",
                  desc: "MRI, prosthetics, telemedicine",
                },
                {
                  step: 9,
                  title: "Phrases & Collocations",
                  desc: "устойчивые выражения и словосочетания",
                },
                {
                  step: 10,
                  title: "Interactive Practice",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl border border-indigo-100"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold">
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
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-cyan-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-cyan-800 mb-2">
                Интересный факт
              </h3>
              <p className="text-gray-700">
                Более <strong>95% научных публикаций</strong> в мире пишутся на
                английском языке. Термины вроде &quot;algorithm&quot;,
                &quot;data&quot; и &quot;software&quot; используются без
                перевода во многих языках мира.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Core Science & Tech Terms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const coreTerms = [
      {
        term: "Quantum",
        pronunciation: "/ˈkwɒntəm/",
        translation: "квантовый",
        definition:
          "Relating to the smallest discrete unit of any physical property, involving phenomena at atomic and subatomic levels",
        examples: [
          "Quantum computing could revolutionize data encryption.",
          "The quantum world operates by different rules than classical physics.",
        ],
        relatedTerms: ["quantum mechanics", "quantum entanglement", "qubit"],
      },
      {
        term: "Algorithm",
        pronunciation: "/ˈælɡərɪðəm/",
        translation: "алгоритм",
        definition:
          "A step-by-step procedure or set of rules for solving a problem or accomplishing a task, especially by a computer",
        examples: [
          "Social media algorithms determine what content you see.",
          "The search algorithm processes millions of queries per second.",
        ],
        relatedTerms: [
          "machine learning algorithm",
          "sorting algorithm",
          "algorithmic",
        ],
      },
      {
        term: "Biotech / Biotechnology",
        pronunciation: "/ˈbaɪəʊtek/",
        translation: "биотехнологии",
        definition:
          "The use of living organisms or biological systems to develop products, especially in medicine, agriculture, and industry",
        examples: [
          "Biotech companies are developing new cancer treatments.",
          "The biotechnology sector has seen massive investment growth.",
        ],
        relatedTerms: [
          "genetic engineering",
          "biopharmaceutical",
          "biomedical",
        ],
      },
      {
        term: "Neural network",
        pronunciation: "/ˈnjʊərəl ˈnetwɜːk/",
        translation: "нейронная сеть",
        definition:
          "A computer system modeled on the human brain and nervous system, used in artificial intelligence and machine learning",
        examples: [
          "Neural networks can recognize faces in photographs.",
          "Deep neural networks power most modern AI applications.",
        ],
        relatedTerms: ["deep learning", "artificial neural network", "neurons"],
      },
      {
        term: "Innovation",
        pronunciation: "/ˌɪnəˈveɪʃən/",
        translation: "инновация",
        definition:
          "The introduction of new ideas, methods, or products; the process of making changes and improvements",
        examples: [
          "Technological innovation drives economic growth.",
          "The company is known for its culture of innovation.",
        ],
        relatedTerms: ["innovate", "innovative", "disruptive innovation"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚡</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Core Science & Tech Terms
          </h2>
          <p className="text-xl text-gray-600">
            Ключевые термины науки и технологий
          </p>
        </div>

        <div className="space-y-6">
          {coreTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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

        {/* Tip */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-cyan-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h3 className="font-bold text-xl text-cyan-800 mb-2">Совет</h3>
              <p className="text-gray-700">
                Многие научные термины имеют греческое или латинское
                происхождение. Например,
                <strong> &quot;quantum&quot;</strong> от латинского
                &quot;quantus&quot; (сколько),
                <strong> &quot;algorithm&quot;</strong> от имени математика
                аль-Хорезми. Знание корней поможет понимать новые термины!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Physics & Chemistry
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const physicsChemistryTerms = [
      {
        term: "Particle",
        pronunciation: "/ˈpɑːtɪkəl/",
        translation: "частица",
        definition:
          "A minute portion of matter; in physics, a fundamental unit such as an electron, proton, or photon",
        examples: [
          "The Large Hadron Collider accelerates particles to near light speed.",
          "Subatomic particles behave differently from everyday objects.",
        ],
        relatedTerms: [
          "subatomic particle",
          "elementary particle",
          "particle physics",
        ],
      },
      {
        term: "Molecule",
        pronunciation: "/ˈmɒlɪkjuːl/",
        translation: "молекула",
        definition:
          "The smallest unit of a chemical compound that retains its chemical properties, consisting of two or more atoms",
        examples: [
          "A water molecule consists of two hydrogen atoms and one oxygen atom.",
          "Scientists can now manipulate individual molecules.",
        ],
        relatedTerms: ["molecular", "macromolecule", "molecular structure"],
      },
      {
        term: "Fusion",
        pronunciation: "/ˈfjuːʒən/",
        translation: "термоядерный синтез",
        definition:
          "A nuclear reaction in which atomic nuclei combine to form heavier nuclei, releasing enormous energy",
        examples: [
          "Nuclear fusion powers the Sun and other stars.",
          "Scientists are working to achieve controlled fusion for clean energy.",
        ],
        relatedTerms: ["nuclear fusion", "fusion reactor", "cold fusion"],
      },
      {
        term: "Radiation",
        pronunciation: "/ˌreɪdiˈeɪʃən/",
        translation: "излучение, радиация",
        definition:
          "The emission of energy as electromagnetic waves or subatomic particles",
        examples: [
          "Radiation therapy is used to treat certain cancers.",
          "The Chernobyl disaster released dangerous levels of radiation.",
        ],
        relatedTerms: [
          "radioactive",
          "electromagnetic radiation",
          "ionizing radiation",
        ],
      },
      {
        term: "Catalyst",
        pronunciation: "/ˈkætəlɪst/",
        translation: "катализатор",
        definition:
          "A substance that speeds up a chemical reaction without being consumed in the process",
        examples: [
          "Enzymes act as biological catalysts in our bodies.",
          "Platinum is used as a catalyst in car exhaust systems.",
        ],
        relatedTerms: ["catalyze", "catalytic", "catalytic converter"],
      },
      {
        term: "Entropy",
        pronunciation: "/ˈentrəpi/",
        translation: "энтропия",
        definition:
          "A measure of disorder or randomness in a system; in thermodynamics, the unavailability of energy",
        examples: [
          "The second law of thermodynamics states that entropy always increases.",
          "Information entropy measures uncertainty in data.",
        ],
        relatedTerms: ["thermodynamics", "disorder", "entropic"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚛️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Physics & Chemistry
          </h2>
          <p className="text-xl text-gray-600">Физика и химия</p>
        </div>

        <div className="space-y-6">
          {physicsChemistryTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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

        {/* Formula box */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📐</span>
            <div>
              <h3 className="font-bold text-xl text-blue-800 mb-2">
                Знаменитые формулы
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="font-mono text-lg font-bold text-blue-600">
                    E = mc²
                  </p>
                  <p className="text-sm">
                    Эйнштейн: энергия равна массе, умноженной на скорость света
                    в квадрате
                  </p>
                </div>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="font-mono text-lg font-bold text-blue-600">
                    F = ma
                  </p>
                  <p className="text-sm">
                    Ньютон: сила равна массе, умноженной на ускорение
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Biology & Genetics
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const biologyTerms = [
      {
        term: "DNA (Deoxyribonucleic acid)",
        pronunciation: "/ˌdiː en ˈeɪ/",
        translation: "ДНК (дезоксирибонуклеиновая кислота)",
        definition:
          "The molecule that carries genetic instructions for development, functioning, and reproduction of all living organisms",
        examples: [
          "DNA testing can establish family relationships.",
          "Scientists have mapped the entire human DNA sequence.",
        ],
        relatedTerms: ["RNA", "double helix", "genetic code", "nucleotide"],
      },
      {
        term: "Genome",
        pronunciation: "/ˈdʒiːnəʊm/",
        translation: "геном",
        definition:
          "The complete set of genetic material (DNA) in an organism, including all of its genes",
        examples: [
          "The Human Genome Project was completed in 2003.",
          "Genome editing could eliminate hereditary diseases.",
        ],
        relatedTerms: ["genomics", "genomic sequencing", "human genome"],
      },
      {
        term: "Mutation",
        pronunciation: "/mjuːˈteɪʃən/",
        translation: "мутация",
        definition:
          "A permanent change in the DNA sequence that may affect how genes function",
        examples: [
          "Some mutations can lead to genetic disorders.",
          "Beneficial mutations drive evolution.",
        ],
        relatedTerms: ["mutate", "genetic mutation", "mutant", "mutagenic"],
      },
      {
        term: "Stem cells",
        pronunciation: "/stem selz/",
        translation: "стволовые клетки",
        definition:
          "Undifferentiated cells capable of developing into many different cell types in the body",
        examples: [
          "Stem cell research offers hope for treating degenerative diseases.",
          "Embryonic stem cells can become any type of cell.",
        ],
        relatedTerms: [
          "stem cell therapy",
          "pluripotent",
          "regenerative medicine",
        ],
      },
      {
        term: "CRISPR",
        pronunciation: "/ˈkrɪspər/",
        translation: "КРИСПР (технология редактирования генов)",
        definition:
          "A revolutionary gene-editing technology that allows scientists to modify DNA sequences with precision",
        examples: [
          "CRISPR could potentially cure genetic diseases.",
          "The scientists who developed CRISPR won the Nobel Prize.",
        ],
        relatedTerms: ["gene editing", "Cas9", "genetic engineering"],
      },
      {
        term: "Ecosystem",
        pronunciation: "/ˈiːkəʊsɪstəm/",
        translation: "экосистема",
        definition:
          "A biological community of interacting organisms and their physical environment",
        examples: [
          "Climate change is disrupting ecosystems worldwide.",
          "Coral reefs are among the most diverse ecosystems on Earth.",
        ],
        relatedTerms: ["biodiversity", "habitat", "ecological"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🧬</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Biology & Genetics
          </h2>
          <p className="text-xl text-gray-600">Биология и генетика</p>
        </div>

        <div className="space-y-6">
          {biologyTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-green-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-green-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-green-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
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

        {/* Info box */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6 border-2 border-green-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🔬</span>
            <div>
              <h3 className="font-bold text-xl text-green-800 mb-2">
                Революция в генетике
              </h3>
              <p className="text-gray-700">
                Технология <strong>CRISPR-Cas9</strong> произвела революцию в
                биологии. За её открытие Эммануэль Шарпантье и Дженнифер Дудна
                получили Нобелевскую премию по химии в 2020 году. Эта технология
                позволяет &quot;редактировать&quot; гены подобно тексту в
                документе.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Computer Science & AI
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const csTerms = [
      {
        term: "Machine learning",
        pronunciation: "/məˈʃiːn ˈlɜːnɪŋ/",
        translation: "машинное обучение",
        definition:
          "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed",
        examples: [
          "Machine learning algorithms power recommendation systems.",
          "Self-driving cars rely heavily on machine learning.",
        ],
        relatedTerms: [
          "deep learning",
          "supervised learning",
          "training data",
          "model",
        ],
      },
      {
        term: "Big data",
        pronunciation: "/bɪɡ ˈdeɪtə/",
        translation: "большие данные",
        definition:
          "Extremely large datasets that can be analyzed to reveal patterns, trends, and associations",
        examples: [
          "Big data analytics helps companies understand customer behavior.",
          "Healthcare is being transformed by big data insights.",
        ],
        relatedTerms: ["data mining", "data analytics", "data science"],
      },
      {
        term: "Cloud computing",
        pronunciation: "/klaʊd kəmˈpjuːtɪŋ/",
        translation: "облачные вычисления",
        definition:
          "The delivery of computing services over the internet, including storage, processing power, and software",
        examples: [
          "Most companies have migrated to cloud computing.",
          "Cloud computing allows remote work on any device.",
        ],
        relatedTerms: ["cloud storage", "SaaS", "AWS", "Azure"],
      },
      {
        term: "Artificial Intelligence (AI)",
        pronunciation: "/ˌɑːtɪˈfɪʃəl ɪnˈtelɪdʒəns/",
        translation: "искусственный интеллект (ИИ)",
        definition:
          "Computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, and decision-making",
        examples: [
          "AI assistants like Siri and Alexa use natural language processing.",
          "AI is transforming industries from healthcare to finance.",
        ],
        relatedTerms: ["AGI", "narrow AI", "generative AI", "LLM"],
      },
      {
        term: "Cybersecurity",
        pronunciation: "/ˈsaɪbəsɪˈkjʊərəti/",
        translation: "кибербезопасность",
        definition:
          "The practice of protecting systems, networks, and programs from digital attacks",
        examples: [
          "Cybersecurity threats are increasing globally.",
          "Companies invest billions in cybersecurity measures.",
        ],
        relatedTerms: ["hacking", "encryption", "firewall", "malware"],
      },
      {
        term: "Blockchain",
        pronunciation: "/ˈblɒktʃeɪn/",
        translation: "блокчейн",
        definition:
          "A decentralized, distributed digital ledger that records transactions across multiple computers",
        examples: [
          "Blockchain technology underpins cryptocurrencies like Bitcoin.",
          "Blockchain could revolutionize supply chain management.",
        ],
        relatedTerms: [
          "cryptocurrency",
          "decentralized",
          "smart contract",
          "NFT",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">💻</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Computer Science & AI
          </h2>
          <p className="text-xl text-gray-600">
            Информатика и искусственный интеллект
          </p>
        </div>

        <div className="space-y-6">
          {csTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-violet-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-violet-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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

        {/* AI Timeline */}
        <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl p-6 border-2 border-violet-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🤖</span>
            <div>
              <h3 className="font-bold text-xl text-violet-800 mb-2">
                Эволюция ИИ
              </h3>
              <div className="grid md:grid-cols-3 gap-3 text-gray-700">
                <div className="bg-white/50 p-3 rounded-lg text-center">
                  <p className="font-bold text-violet-600">1950s</p>
                  <p className="text-sm">Рождение концепции AI (Тьюринг)</p>
                </div>
                <div className="bg-white/50 p-3 rounded-lg text-center">
                  <p className="font-bold text-violet-600">2010s</p>
                  <p className="text-sm">Прорыв в deep learning</p>
                </div>
                <div className="bg-white/50 p-3 rounded-lg text-center">
                  <p className="font-bold text-violet-600">2020s</p>
                  <p className="text-sm">Эра генеративного AI (GPT, DALL-E)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Engineering & Innovation
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const engineeringTerms = [
      {
        term: "Prototype",
        pronunciation: "/ˈprəʊtətaɪp/",
        translation: "прототип",
        definition:
          "An original model or first version of a product from which other forms are developed or copied",
        examples: [
          "Engineers tested the prototype before mass production.",
          "The prototype revealed several design flaws.",
        ],
        relatedTerms: ["proof of concept", "MVP", "beta version", "iteration"],
      },
      {
        term: "Automation",
        pronunciation: "/ˌɔːtəˈmeɪʃən/",
        translation: "автоматизация",
        definition:
          "The use of technology to perform tasks with minimal human intervention",
        examples: [
          "Factory automation has increased productivity dramatically.",
          "Automation is reshaping the job market worldwide.",
        ],
        relatedTerms: [
          "automate",
          "automated",
          "robotic process automation",
          "RPA",
        ],
      },
      {
        term: "Sustainable",
        pronunciation: "/səˈsteɪnəbəl/",
        translation: "устойчивый, экологичный",
        definition:
          "Able to be maintained at a certain level without depleting natural resources or causing ecological damage",
        examples: [
          "Companies are adopting sustainable manufacturing practices.",
          "Sustainable energy sources include solar and wind power.",
        ],
        relatedTerms: [
          "sustainability",
          "renewable",
          "green technology",
          "eco-friendly",
        ],
      },
      {
        term: "Infrastructure",
        pronunciation: "/ˈɪnfrəstrʌktʃə/",
        translation: "инфраструктура",
        definition:
          "The basic physical and organizational structures needed for operation, such as roads, power supplies, and buildings",
        examples: [
          "5G infrastructure is being deployed globally.",
          "Aging infrastructure requires massive investment.",
        ],
        relatedTerms: [
          "digital infrastructure",
          "network infrastructure",
          "critical infrastructure",
        ],
      },
      {
        term: "Scalable",
        pronunciation: "/ˈskeɪləbəl/",
        translation: "масштабируемый",
        definition:
          "Able to be expanded or changed in size or scale to accommodate growth",
        examples: [
          "The software architecture must be scalable.",
          "They built a scalable business model.",
        ],
        relatedTerms: ["scalability", "scale up", "scaling", "elastic"],
      },
      {
        term: "Disruptive technology",
        pronunciation: "/dɪsˈrʌptɪv tekˈnɒlədʒi/",
        translation: "подрывная технология",
        definition:
          "An innovation that significantly alters how consumers, industries, or businesses operate, often displacing established technologies",
        examples: [
          "Smartphones were a disruptive technology for the camera industry.",
          "Electric vehicles are disrupting the automotive sector.",
        ],
        relatedTerms: [
          "disruption",
          "game-changer",
          "breakthrough",
          "paradigm shift",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚙️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Engineering & Innovation
          </h2>
          <p className="text-xl text-gray-600">Инженерия и инновации</p>
        </div>

        <div className="space-y-6">
          {engineeringTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4">
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

        {/* Innovation cycle */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 border-2 border-orange-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🔄</span>
            <div>
              <h3 className="font-bold text-xl text-orange-800 mb-2">
                Цикл инноваций
              </h3>
              <div className="flex flex-wrap justify-center gap-2 text-gray-700">
                {[
                  "Idea",
                  "→",
                  "Research",
                  "→",
                  "Prototype",
                  "→",
                  "Testing",
                  "→",
                  "Production",
                  "→",
                  "Market",
                ].map((step, i) => (
                  <span
                    key={i}
                    className={
                      step === "→"
                        ? "text-orange-400"
                        : "bg-white/50 px-3 py-1 rounded-lg font-medium"
                    }
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Space & Astronomy
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const spaceTerms = [
      {
        term: "Satellite",
        pronunciation: "/ˈsætəlaɪt/",
        translation: "спутник",
        definition:
          "An artificial body placed in orbit around the Earth or another planet to collect information or for communication",
        examples: [
          "GPS relies on a network of satellites.",
          "Thousands of satellites orbit the Earth.",
        ],
        relatedTerms: [
          "communication satellite",
          "spy satellite",
          "geostationary",
        ],
      },
      {
        term: "Orbit",
        pronunciation: "/ˈɔːbɪt/",
        translation: "орбита",
        definition:
          "The curved path of a celestial object or spacecraft around a star, planet, or moon",
        examples: [
          "The International Space Station orbits Earth every 90 minutes.",
          "Mars has a longer orbital period than Earth.",
        ],
        relatedTerms: ["orbital", "low Earth orbit", "geostationary orbit"],
      },
      {
        term: "Black hole",
        pronunciation: "/blæk həʊl/",
        translation: "чёрная дыра",
        definition:
          "A region of spacetime where gravity is so strong that nothing, not even light, can escape from it",
        examples: [
          "Scientists captured the first image of a black hole in 2019.",
          "Supermassive black holes exist at the centers of galaxies.",
        ],
        relatedTerms: ["event horizon", "singularity", "gravitational pull"],
      },
      {
        term: "Exoplanet",
        pronunciation: "/ˈeksəʊplænɪt/",
        translation: "экзопланета",
        definition: "A planet that orbits a star outside our solar system",
        examples: [
          "Thousands of exoplanets have been discovered.",
          "Some exoplanets may be habitable.",
        ],
        relatedTerms: ["habitable zone", "Kepler mission", "extrasolar"],
      },
      {
        term: "Light-year",
        pronunciation: "/laɪt jɪə/",
        translation: "световой год",
        definition:
          "A unit of distance equal to how far light travels in one year (about 9.46 trillion kilometers)",
        examples: [
          "The nearest star is about 4 light-years away.",
          "Our galaxy is 100,000 light-years across.",
        ],
        relatedTerms: ["parsec", "astronomical unit", "cosmic distance"],
      },
      {
        term: "Rocket",
        pronunciation: "/ˈrɒkɪt/",
        translation: "ракета",
        definition:
          "A vehicle that obtains thrust by ejecting mass, used to launch spacecraft",
        examples: [
          "SpaceX developed reusable rocket technology.",
          "The rocket launched successfully at dawn.",
        ],
        relatedTerms: ["launch", "booster", "propulsion", "spacecraft"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🚀</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Space & Astronomy
          </h2>
          <p className="text-xl text-gray-600">Космос и астрономия</p>
        </div>

        <div className="space-y-6">
          {spaceTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
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

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
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

        {/* Space facts */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-6 border-2 border-indigo-400 text-white">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌌</span>
            <div>
              <h3 className="font-bold text-xl text-indigo-200 mb-2">
                Удивительные факты о космосе
              </h3>
              <ul className="space-y-2 text-indigo-100">
                <li>• На Венере день длиннее года</li>
                <li>
                  • В космосе абсолютная тишина — звук не распространяется в
                  вакууме
                </li>
                <li>
                  • Масса Солнца составляет 99.86% массы всей Солнечной системы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Medical Technology
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const medTechTerms = [
      {
        term: "MRI (Magnetic Resonance Imaging)",
        pronunciation: "/ˌem ɑːr ˈaɪ/",
        translation: "МРТ (магнитно-резонансная томография)",
        definition:
          "A medical imaging technique that uses magnetic fields and radio waves to create detailed images of organs and tissues",
        examples: [
          "The doctor ordered an MRI to examine the patient's brain.",
          "MRI scans can detect tumors at early stages.",
        ],
        relatedTerms: ["CT scan", "medical imaging", "radiology", "diagnosis"],
      },
      {
        term: "Prosthetics",
        pronunciation: "/prɒsˈθetɪks/",
        translation: "протезирование, протезы",
        definition:
          "Artificial devices that replace missing body parts, such as limbs",
        examples: [
          "Modern prosthetics can be controlled by thought.",
          "3D printing has revolutionized prosthetics manufacturing.",
        ],
        relatedTerms: [
          "prosthetic limb",
          "bionic",
          "artificial limb",
          "orthopedic",
        ],
      },
      {
        term: "Telemedicine",
        pronunciation: "/ˌtelɪˈmedɪsɪn/",
        translation: "телемедицина",
        definition:
          "The remote diagnosis and treatment of patients using telecommunications technology",
        examples: [
          "Telemedicine expanded rapidly during the pandemic.",
          "Patients in rural areas benefit from telemedicine services.",
        ],
        relatedTerms: [
          "telehealth",
          "remote consultation",
          "virtual healthcare",
        ],
      },
      {
        term: "Vaccine",
        pronunciation: "/ˈvæksiːn/",
        translation: "вакцина",
        definition:
          "A biological preparation that provides immunity to a particular infectious disease",
        examples: [
          "mRNA vaccines represent a breakthrough in vaccine technology.",
          "Vaccines have eradicated smallpox worldwide.",
        ],
        relatedTerms: ["vaccination", "immunization", "mRNA", "antibodies"],
      },
      {
        term: "Nanotechnology",
        pronunciation: "/ˌnænəʊtekˈnɒlədʒi/",
        translation: "нанотехнологии",
        definition:
          "The manipulation of matter on an atomic and molecular scale, typically less than 100 nanometers",
        examples: [
          "Nanotechnology enables targeted drug delivery.",
          "Nanoparticles are used in cancer treatment.",
        ],
        relatedTerms: [
          "nanoparticle",
          "nanoscale",
          "nanomedicine",
          "nanomaterials",
        ],
      },
      {
        term: "Wearable technology",
        pronunciation: "/ˈweərəbəl tekˈnɒlədʒi/",
        translation: "носимые технологии",
        definition:
          "Electronic devices that can be worn on the body, often tracking health metrics",
        examples: [
          "Wearable technology monitors heart rate and sleep patterns.",
          "Smartwatches are the most popular wearable devices.",
        ],
        relatedTerms: [
          "fitness tracker",
          "smartwatch",
          "health monitoring",
          "IoT",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🏥</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Medical Technology
          </h2>
          <p className="text-xl text-gray-600">Медицинские технологии</p>
        </div>

        <div className="space-y-6">
          {medTechTerms.map((item, index) => (
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

        {/* Medical tech breakthroughs */}
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border-2 border-rose-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💊</span>
            <div>
              <h3 className="font-bold text-xl text-rose-800 mb-2">
                Прорывы в медицинских технологиях
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="font-bold text-rose-600">mRNA вакцины</p>
                  <p className="text-sm">
                    Новый тип вакцин, разработанный против COVID-19
                  </p>
                </div>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="font-bold text-rose-600">Бионические протезы</p>
                  <p className="text-sm">
                    Протезы, управляемые сигналами мозга
                  </p>
                </div>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="font-bold text-rose-600">Робот-хирург</p>
                  <p className="text-sm">
                    Высокоточные операции с минимальным вмешательством
                  </p>
                </div>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="font-bold text-rose-600">Органы на чипе</p>
                  <p className="text-sm">
                    Миниатюрные модели органов для тестирования лекарств
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Phrases & Collocations
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const collocations = {
      research: [
        { phrase: "conduct research", translation: "проводить исследование" },
        {
          phrase: "groundbreaking research",
          translation: "новаторское исследование",
        },
        {
          phrase: "peer-reviewed research",
          translation: "рецензируемое исследование",
        },
        { phrase: "research findings", translation: "результаты исследования" },
        {
          phrase: "research methodology",
          translation: "методология исследования",
        },
      ],
      technology: [
        {
          phrase: "cutting-edge technology",
          translation: "передовая технология",
        },
        {
          phrase: "emerging technology",
          translation: "зарождающаяся технология",
        },
        { phrase: "adopt technology", translation: "внедрять технологию" },
        {
          phrase: "leverage technology",
          translation: "использовать технологию",
        },
        {
          phrase: "technology-driven",
          translation: "основанный на технологиях",
        },
      ],
      data: [
        { phrase: "collect data", translation: "собирать данные" },
        { phrase: "analyze data", translation: "анализировать данные" },
        { phrase: "raw data", translation: "необработанные данные" },
        { phrase: "data breach", translation: "утечка данных" },
        {
          phrase: "data-driven decisions",
          translation: "решения на основе данных",
        },
      ],
      scientific: [
        { phrase: "scientific breakthrough", translation: "научный прорыв" },
        { phrase: "scientific method", translation: "научный метод" },
        {
          phrase: "scientific evidence",
          translation: "научные доказательства",
        },
        { phrase: "scientific community", translation: "научное сообщество" },
        { phrase: "peer review", translation: "рецензирование коллегами" },
      ],
      development: [
        {
          phrase: "sustainable development",
          translation: "устойчивое развитие",
        },
        { phrase: "product development", translation: "разработка продукта" },
        { phrase: "R&D (Research and Development)", translation: "НИОКР" },
        { phrase: "development cycle", translation: "цикл разработки" },
        { phrase: "rapid development", translation: "быстрая разработка" },
      ],
      computing: [
        { phrase: "cloud-based solution", translation: "облачное решение" },
        { phrase: "process data", translation: "обрабатывать данные" },
        { phrase: "run an algorithm", translation: "запустить алгоритм" },
        { phrase: "computing power", translation: "вычислительная мощность" },
        { phrase: "train a model", translation: "обучить модель" },
      ],
    };

    const usefulPhrases = [
      {
        phrase: "state-of-the-art",
        translation: "самый современный, передовой",
        example: "They use state-of-the-art equipment.",
      },
      {
        phrase: "proof of concept",
        translation: "подтверждение концепции",
        example: "We need a proof of concept before investing.",
      },
      {
        phrase: "push the boundaries",
        translation: "раздвигать границы",
        example: "Scientists are pushing the boundaries of what's possible.",
      },
      {
        phrase: "bridge the gap",
        translation: "преодолеть разрыв",
        example: "Technology can bridge the gap between theory and practice.",
      },
      {
        phrase: "at the forefront of",
        translation: "в авангарде",
        example: "Our lab is at the forefront of AI research.",
      },
      {
        phrase: "make a breakthrough",
        translation: "совершить прорыв",
        example: "Researchers made a breakthrough in cancer treatment.",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔗</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Phrases & Collocations
          </h2>
          <p className="text-xl text-gray-600">
            Устойчивые выражения и словосочетания
          </p>
        </div>

        {/* Collocations by category */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(collocations).map(([category, phrases]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
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
                      <span className="font-medium text-cyan-700">
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <span>💬</span> Useful Expressions
          </h3>
          <div className="space-y-4">
            {usefulPhrases.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <span className="font-bold text-indigo-700 text-lg">
                    {item.phrase}
                  </span>
                  <span className="text-gray-600 italic">
                    {item.translation}
                  </span>
                </div>
                <p className="text-gray-700 text-sm bg-white/50 p-2 rounded-lg">
                  <span className="text-indigo-500">Example: </span>
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Abbreviations */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-cyan-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📝</span>
            <div className="w-full">
              <h3 className="font-bold text-xl text-cyan-800 mb-4">
                Common Abbreviations
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { abbr: "AI", full: "Artificial Intelligence" },
                  { abbr: "IoT", full: "Internet of Things" },
                  { abbr: "VR/AR", full: "Virtual/Augmented Reality" },
                  { abbr: "API", full: "Application Programming Interface" },
                  { abbr: "GPU", full: "Graphics Processing Unit" },
                  { abbr: "SaaS", full: "Software as a Service" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/50 p-3 rounded-lg flex items-center gap-3"
                  >
                    <span className="font-bold text-cyan-600 text-lg">
                      {item.abbr}
                    </span>
                    <span className="text-gray-700">{item.full}</span>
                  </div>
                ))}
              </div>
            </div>
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
          "_____ computing uses principles of quantum mechanics to process information.",
        answers: ["quantum"],
        hint: "квантовый",
      },
      {
        id: "q2",
        question:
          "Social media platforms use _____ to recommend content to users.",
        answers: ["algorithms", "algorithm"],
        hint: "алгоритм(ы)",
      },
      {
        id: "q3",
        question:
          "A _____ network is a computer system modeled on the human brain.",
        answers: ["neural"],
        hint: "нейронная",
      },
      {
        id: "q4",
        question: "CRISPR is a revolutionary gene-_____ technology.",
        answers: ["editing"],
        hint: "редактирования",
      },
      {
        id: "q5",
        question: "Scientists study _____ — planets outside our solar system.",
        answers: ["exoplanets", "exoplanet"],
        hint: "экзопланеты",
      },
      {
        id: "q6",
        question:
          "_____ learning is a subset of AI that enables systems to learn from data.",
        answers: ["machine"],
        hint: "машинное",
      },
      {
        id: "q7",
        question:
          "The company developed a _____ before starting mass production.",
        answers: ["prototype"],
        hint: "прототип",
      },
      {
        id: "q8",
        question: "Nuclear _____ powers the Sun and other stars.",
        answers: ["fusion"],
        hint: "термоядерный синтез",
      },
    ];

    const translationExercises = [
      {
        id: "t1",
        russian: "Искусственный интеллект",
        answers: ["artificial intelligence", "ai"],
      },
      {
        id: "t2",
        russian: "Большие данные",
        answers: ["big data"],
      },
      {
        id: "t3",
        russian: "Облачные вычисления",
        answers: ["cloud computing"],
      },
      {
        id: "t4",
        russian: "Стволовые клетки",
        answers: ["stem cells"],
      },
      {
        id: "t5",
        russian: "Кибербезопасность",
        answers: ["cybersecurity", "cyber security"],
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
      <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-6">
          <h3 className="text-2xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-cyan-600">{i + 1}.</span>
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-blue-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
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
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition font-bold text-xl shadow-lg"
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
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-6 border-2 border-cyan-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="font-bold text-xl text-cyan-800 mb-2">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-700 text-lg">
                Вы изучили более <strong>50 научно-технических терминов</strong>{" "}
                и множество устойчивых выражений. Теперь вы можете:
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>✅ Читать научные статьи и техническую документацию</li>
                <li>✅ Обсуждать темы AI, биотехнологий и космоса</li>
                <li>✅ Понимать новости о технологических прорывах</li>
                <li>
                  ✅ Использовать профессиональную терминологию в IT и науке
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
