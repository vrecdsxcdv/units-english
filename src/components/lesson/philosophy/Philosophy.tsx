"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function Philosophy({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Philosophy
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🧠</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">Philosophy</h2>
          <p className="text-xl text-gray-600">Философская терминология</p>
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
                  ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-700 mb-4">
              Философия: язык мысли
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Этот урок посвящён <strong>философской терминологии</strong> —
              точному языку, на котором формулируются фундаментальные вопросы о
              знании, существовании, этике и логике. Понимание этих терминов
              необходимо для чтения философских текстов и участия в
              академических дискуссиях.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-bold text-slate-800">Теория познания</h4>
                <p className="text-gray-600 text-sm">
                  Epistemology — природа знания и познания
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="text-3xl mb-2">⚖️</div>
                <h4 className="font-bold text-gray-800">Этическая философия</h4>
                <p className="text-gray-600 text-sm">
                  Utilitarianism, deontology, virtue ethics
                </p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
                <div className="text-3xl mb-2">🌌</div>
                <h4 className="font-bold text-zinc-800">Экзистенциализм</h4>
                <p className="text-gray-600 text-sm">
                  Существование, свобода, ответственность
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="text-3xl mb-2">💭</div>
                <h4 className="font-bold text-slate-800">Диалектика</h4>
                <p className="text-gray-600 text-sm">
                  Логический метод рассуждения и развития идей
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Зачем изучать философскую терминологию?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                <span className="text-3xl">📖</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Академическое чтение
                  </h4>
                  <p className="text-gray-600">
                    Философские тексты требуют точного понимания терминов для
                    корректной интерпретации
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-zinc-50 rounded-xl">
                <span className="text-3xl">🎓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Критическое мышление
                  </h4>
                  <p className="text-gray-600">
                    Философские концепции развивают способность к логическому
                    анализу и аргументации
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-zinc-50 to-slate-50 rounded-xl">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Академические дискуссии
                  </h4>
                  <p className="text-gray-600">
                    Участие в философских дебатах требует владения
                    профессиональной терминологией
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Международный академический язык
                  </h4>
                  <p className="text-gray-600">
                    Философия использует английский как основной язык
                    международного академического общения
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-zinc-200 p-8">
            <h3 className="text-2xl font-bold text-zinc-700 mb-4">
              Структура курса:
            </h3>
            <div className="grid gap-3">
              {[
                {
                  step: 2,
                  title: "Core Philosophical Terms",
                  desc: "epistemology, existentialism, utilitarianism, dialectic",
                },
                {
                  step: 3,
                  title: "Epistemology & Knowledge",
                  desc: "empiricism, rationalism, skepticism, truth",
                },
                {
                  step: 4,
                  title: "Ethical Theories",
                  desc: "deontology, virtue ethics, consequentialism",
                },
                {
                  step: 5,
                  title: "Metaphysics & Ontology",
                  desc: "being, existence, reality, substance",
                },
                {
                  step: 6,
                  title: "Logic & Reasoning",
                  desc: "syllogism, fallacy, argument, premise",
                },
                {
                  step: 7,
                  title: "Philosophical Movements",
                  desc: "stoicism, nihilism, pragmatism, idealism",
                },
                {
                  step: 8,
                  title: "Critical Concepts",
                  desc: "paradox, a priori, a posteriori, categorical imperative",
                },
                {
                  step: 9,
                  title: "Phrases & Expressions",
                  desc: "устойчивые выражения философского дискурса",
                },
                {
                  step: 10,
                  title: "Practice & Exercises",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-zinc-50 rounded-xl border border-zinc-100"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-slate-600 to-gray-700 text-white rounded-full flex items-center justify-center font-bold">
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
        <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-6 border-2 border-slate-300">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-2">Важно</h3>
              <p className="text-gray-700">
                Философские термины имеют <strong>точные определения</strong> и
                не допускают вольных интерпретаций.{" "}
                <strong>Epistemology</strong> — это строго теория познания, а не
                просто "знание о знании". Точность терминологии критична для
                философского дискурса.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Core Philosophical Terms
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const coreTerms = [
      {
        term: "Epistemology",
        pronunciation: "/ɪˌpɪstɪˈmɒlədʒi/",
        translation: "эпистемология, теория познания",
        definition:
          "The branch of philosophy concerned with the nature, scope, and limits of knowledge",
        examples: [
          "Epistemology asks: What is knowledge? How do we know what we know?",
          "The debate between empiricism and rationalism is central to epistemology.",
          "Epistemological questions concern the foundations of human understanding.",
        ],
        relatedTerms: [
          "knowledge",
          "justification",
          "belief",
          "truth",
          "epistemic",
        ],
      },
      {
        term: "Existentialism",
        pronunciation: "/ˌeɡzɪˈstenʃəlɪzəm/",
        translation: "экзистенциализм",
        definition:
          "A philosophical movement emphasizing individual existence, freedom, and choice, and the absence of inherent meaning",
        examples: [
          "Existentialism asserts that existence precedes essence.",
          "Sartre and Camus were key existentialist philosophers.",
          "Existentialist thought emphasizes personal responsibility and authenticity.",
        ],
        relatedTerms: [
          "existence",
          "freedom",
          "authenticity",
          "absurd",
          "angst",
        ],
      },
      {
        term: "Utilitarianism",
        pronunciation: "/juːˌtɪlɪˈteəriənɪzəm/",
        translation: "утилитаризм",
        definition:
          "An ethical theory that holds that the best action is the one that maximizes utility, typically defined as happiness or pleasure",
        examples: [
          "Utilitarianism evaluates actions based on their consequences.",
          "Bentham and Mill developed classical utilitarianism.",
          "The principle of utility guides utilitarian moral reasoning.",
        ],
        relatedTerms: [
          "consequentialism",
          "utility",
          "greatest good",
          "hedonism",
          "moral calculus",
        ],
      },
      {
        term: "Dialectic",
        pronunciation: "/ˌdaɪəˈlektɪk/",
        translation: "диалектика",
        definition:
          "A method of logical argumentation involving the resolution of contradictions through reasoned discourse",
        examples: [
          "Hegelian dialectic involves thesis, antithesis, and synthesis.",
          "Socratic dialectic uses questioning to arrive at truth.",
          "Dialectical reasoning resolves opposing viewpoints through synthesis.",
        ],
        relatedTerms: [
          "dialogue",
          "synthesis",
          "contradiction",
          "thesis",
          "antithesis",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🧠</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Core Philosophical Terms
          </h2>
          <p className="text-xl text-gray-600">Ключевые философские термины</p>
        </div>

        <div className="space-y-6">
          {coreTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-slate-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 3: Epistemology & Knowledge
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const epistemologyTerms = [
      {
        term: "Empiricism",
        pronunciation: "/ɪmˈpɪrɪsɪzəm/",
        translation: "эмпиризм",
        definition:
          "The theory that all knowledge derives from sense experience",
        examples: [
          "Locke and Hume were empiricist philosophers.",
          "Empiricism contrasts with rationalism.",
          "Empirical evidence is based on observation and experience.",
        ],
        relatedTerms: ["experience", "observation", "sensory", "a posteriori"],
      },
      {
        term: "Rationalism",
        pronunciation: "/ˈræʃənəlɪzəm/",
        translation: "рационализм",
        definition:
          "The theory that reason, rather than experience, is the foundation of knowledge",
        examples: [
          "Descartes and Leibniz were rationalist philosophers.",
          "Rationalism emphasizes a priori knowledge.",
          "Rationalist epistemology prioritizes logical deduction.",
        ],
        relatedTerms: ["reason", "a priori", "deduction", "innate ideas"],
      },
      {
        term: "Skepticism",
        pronunciation: "/ˈskeptɪsɪzəm/",
        translation: "скептицизм",
        definition:
          "The philosophical position that questions the possibility of certain knowledge",
        examples: [
          "Philosophical skepticism challenges claims to knowledge.",
          "Skeptical arguments question the reliability of perception.",
          "Moderate skepticism accepts fallibilism about knowledge.",
        ],
        relatedTerms: ["doubt", "uncertainty", "fallibilism", "agnosticism"],
      },
      {
        term: "Truth",
        pronunciation: "/truːθ/",
        translation: "истина",
        definition:
          "The property of being in accord with fact or reality; correspondence between belief and reality",
        examples: [
          "The correspondence theory of truth relates beliefs to facts.",
          "Truth conditions determine when a statement is true.",
          "Philosophers debate the nature of truth.",
        ],
        relatedTerms: [
          "correspondence",
          "coherence",
          "fact",
          "reality",
          "proposition",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔍</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Epistemology & Knowledge
          </h2>
          <p className="text-xl text-gray-600">Эпистемология и знание</p>
        </div>

        <div className="space-y-6">
          {epistemologyTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-gray-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 4: Ethical Theories
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const ethicalTerms = [
      {
        term: "Deontology",
        pronunciation: "/ˌdiːɒnˈtɒlədʒi/",
        translation: "деонтология",
        definition:
          "An ethical theory that judges the morality of actions based on adherence to rules or duties",
        examples: [
          "Kantian deontology emphasizes categorical imperatives.",
          "Deontological ethics focuses on duty rather than consequences.",
          "Deontology holds that certain actions are inherently right or wrong.",
        ],
        relatedTerms: [
          "duty",
          "categorical imperative",
          "moral law",
          "obligation",
        ],
      },
      {
        term: "Virtue ethics",
        pronunciation: "/ˈvɜːtʃuː ˈeθɪks/",
        translation: "этика добродетели",
        definition:
          "An ethical theory that emphasizes character and virtue rather than rules or consequences",
        examples: [
          "Aristotelian virtue ethics focuses on character development.",
          "Virtue ethics asks: What would a virtuous person do?",
          "The theory emphasizes moral character over actions.",
        ],
        relatedTerms: ["virtue", "character", "excellence", "eudaimonia"],
      },
      {
        term: "Consequentialism",
        pronunciation: "/ˌkɒnsɪˈkwenʃəlɪzəm/",
        translation: "консеквенциализм",
        definition:
          "An ethical theory that judges actions by their consequences",
        examples: [
          "Utilitarianism is a form of consequentialism.",
          "Consequentialist ethics evaluates outcomes, not intentions.",
          "The theory requires calculating the consequences of actions.",
        ],
        relatedTerms: [
          "consequences",
          "outcomes",
          "utility",
          "results",
          "effects",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚖️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Ethical Theories
          </h2>
          <p className="text-xl text-gray-600">Этические теории</p>
        </div>

        <div className="space-y-6">
          {ethicalTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-zinc-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-zinc-600 to-gray-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-zinc-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-zinc-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-zinc-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 5: Metaphysics & Ontology
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const metaphysicsTerms = [
      {
        term: "Metaphysics",
        pronunciation: "/ˌmetəˈfɪzɪks/",
        translation: "метафизика",
        definition:
          "The branch of philosophy concerned with the fundamental nature of reality and being",
        examples: [
          "Metaphysics addresses questions about existence, time, and space.",
          "The nature of reality is a central metaphysical question.",
          "Metaphysical inquiry goes beyond empirical observation.",
        ],
        relatedTerms: ["ontology", "reality", "being", "substance", "essence"],
      },
      {
        term: "Ontology",
        pronunciation: "/ɒnˈtɒlədʒi/",
        translation: "онтология",
        definition:
          "The branch of metaphysics dealing with the nature of being and existence",
        examples: [
          "Ontology asks: What exists? What is the nature of existence?",
          "The ontology of numbers is debated in philosophy of mathematics.",
          "Ontological questions concern what kinds of things exist.",
        ],
        relatedTerms: [
          "existence",
          "being",
          "entity",
          "reality",
          "what exists",
        ],
      },
      {
        term: "Substance",
        pronunciation: "/ˈsʌbstəns/",
        translation: "субстанция",
        definition:
          "In metaphysics, that which exists independently and persists through change",
        examples: [
          "Aristotelian metaphysics distinguishes substance from accidents.",
          "The concept of substance addresses what underlies change.",
          "Substance theory posits enduring entities.",
        ],
        relatedTerms: [
          "entity",
          "essence",
          "attribute",
          "property",
          "accident",
        ],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🌌</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Metaphysics & Ontology
          </h2>
          <p className="text-xl text-gray-600">Метафизика и онтология</p>
        </div>

        <div className="space-y-6">
          {metaphysicsTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-slate-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 6: Logic & Reasoning
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const logicTerms = [
      {
        term: "Syllogism",
        pronunciation: "/ˈsɪlədʒɪzəm/",
        translation: "силлогизм",
        definition:
          "A form of reasoning in which a conclusion is drawn from two premises",
        examples: [
          "All men are mortal. Socrates is a man. Therefore, Socrates is mortal.",
          "Syllogistic logic was developed by Aristotle.",
          "A valid syllogism follows logical rules.",
        ],
        relatedTerms: ["premise", "conclusion", "deduction", "validity"],
      },
      {
        term: "Fallacy",
        pronunciation: "/ˈfæləsi/",
        translation: "логическая ошибка",
        definition: "An error in reasoning that renders an argument invalid",
        examples: [
          "The ad hominem fallacy attacks the person rather than the argument.",
          "Recognizing fallacies is essential for critical thinking.",
          "Formal fallacies violate logical structure.",
        ],
        relatedTerms: [
          "error",
          "invalid",
          "reasoning",
          "argument",
          "logical error",
        ],
      },
      {
        term: "Argument",
        pronunciation: "/ˈɑːɡjumənt/",
        translation: "аргумент",
        definition:
          "A set of statements, including premises and a conclusion, intended to establish a claim",
        examples: [
          "A valid argument has true premises and a true conclusion.",
          "Philosophical arguments require logical structure.",
          "The argument's validity depends on its form.",
        ],
        relatedTerms: [
          "premise",
          "conclusion",
          "reasoning",
          "validity",
          "soundness",
        ],
      },
      {
        term: "Premise",
        pronunciation: "/ˈpremɪs/",
        translation: "посылка",
        definition:
          "A statement that serves as evidence or reason for a conclusion",
        examples: [
          "The argument's premises must be true for soundness.",
          "A valid argument can have false premises.",
          "Premises provide the foundation for reasoning.",
        ],
        relatedTerms: ["assumption", "proposition", "statement", "evidence"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">💭</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Logic & Reasoning
          </h2>
          <p className="text-xl text-gray-600">Логика и рассуждение</p>
        </div>

        <div className="space-y-6">
          {logicTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-gray-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 7: Philosophical Movements
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const movements = [
      {
        term: "Stoicism",
        pronunciation: "/ˈstəʊɪsɪzəm/",
        translation: "стоицизм",
        definition:
          "A school of philosophy that teaches virtue as the highest good and emphasizes acceptance of fate",
        examples: [
          "Stoic philosophy emphasizes emotional resilience.",
          "Marcus Aurelius was a Stoic philosopher-emperor.",
          "Stoicism teaches acceptance of what cannot be controlled.",
        ],
        relatedTerms: ["virtue", "resilience", "fate", "acceptance", "duty"],
      },
      {
        term: "Nihilism",
        pronunciation: "/ˈnaɪɪlɪzəm/",
        translation: "нигилизм",
        definition:
          "The philosophical position that life lacks objective meaning, purpose, or intrinsic value",
        examples: [
          "Nietzsche diagnosed nihilism as a cultural problem.",
          "Nihilism denies the existence of objective values.",
          "The movement questions traditional moral foundations.",
        ],
        relatedTerms: ["meaninglessness", "value", "purpose", "absurd"],
      },
      {
        term: "Pragmatism",
        pronunciation: "/ˈpræɡmətɪzəm/",
        translation: "прагматизм",
        definition:
          "A philosophical tradition that evaluates theories by their practical consequences",
        examples: [
          "Peirce and James developed pragmatism.",
          "Pragmatic truth is what works in practice.",
          "Pragmatism emphasizes practical outcomes over abstract principles.",
        ],
        relatedTerms: ["practical", "consequences", "utility", "experience"],
      },
      {
        term: "Idealism",
        pronunciation: "/aɪˈdiːəlɪzəm/",
        translation: "идеализм",
        definition:
          "The philosophical view that reality is fundamentally mental or spiritual",
        examples: [
          "Berkeley's idealism holds that to be is to be perceived.",
          "Hegelian idealism posits the primacy of mind.",
          "Idealism contrasts with materialism.",
        ],
        relatedTerms: ["mind", "spirit", "mental", "materialism", "reality"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📚</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Philosophical Movements
          </h2>
          <p className="text-xl text-gray-600">Философские движения</p>
        </div>

        <div className="space-y-6">
          {movements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-zinc-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-zinc-600 to-gray-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-zinc-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-zinc-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-zinc-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm"
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
  // STEP 8: Critical Concepts
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const criticalConcepts = [
      {
        term: "Paradox",
        pronunciation: "/ˈpærədɒks/",
        translation: "парадокс",
        definition:
          "A statement that appears contradictory but may express a truth",
        examples: [
          "The liar paradox: 'This statement is false.'",
          "Zeno's paradoxes challenge assumptions about motion.",
          "Paradoxes reveal logical tensions in concepts.",
        ],
        relatedTerms: ["contradiction", "logical", "apparent", "truth"],
      },
      {
        term: "A priori",
        pronunciation: "/eɪ praɪˈɔːraɪ/",
        translation: "априори",
        definition:
          "Knowledge that is independent of experience, known through reason alone",
        examples: [
          "Mathematical truths are often considered a priori.",
          "A priori knowledge contrasts with a posteriori knowledge.",
          "Kant distinguished a priori from empirical knowledge.",
        ],
        relatedTerms: [
          "a posteriori",
          "independent",
          "reason",
          "necessary",
          "analytic",
        ],
      },
      {
        term: "A posteriori",
        pronunciation: "/eɪ pɒˌsterɪˈɔːraɪ/",
        translation: "апостериори",
        definition:
          "Knowledge that depends on experience and empirical observation",
        examples: [
          "Scientific knowledge is typically a posteriori.",
          "A posteriori knowledge requires sensory experience.",
          "Empirical claims are a posteriori.",
        ],
        relatedTerms: [
          "a priori",
          "empirical",
          "experience",
          "sensory",
          "synthetic",
        ],
      },
      {
        term: "Categorical imperative",
        pronunciation: "/ˌkætɪˈɡɒrɪkəl ɪmˈperətɪv/",
        translation: "категорический императив",
        definition:
          "Kant's moral principle: act only according to maxims that could be universal law",
        examples: [
          "The categorical imperative is unconditional and universal.",
          "Kant's ethics centers on the categorical imperative.",
          "It contrasts with hypothetical imperatives.",
        ],
        relatedTerms: ["Kant", "moral law", "universal", "duty", "deontology"],
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔬</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Critical Concepts
          </h2>
          <p className="text-xl text-gray-600">Критические концепции</p>
        </div>

        <div className="space-y-6">
          {criticalConcepts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.term}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {item.pronunciation}
                  </span>
                </div>
                <p className="text-slate-100 mt-1">{item.translation}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Definition:
                  </h4>
                  <p className="text-gray-700">{item.definition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">▸</span>
                        <span className="text-gray-700 italic">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Related terms:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((related, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
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
      philosophical: [
        {
          phrase: "philosophical argument",
          translation: "философский аргумент",
        },
        {
          phrase: "philosophical inquiry",
          translation: "философское исследование",
        },
        {
          phrase: "philosophical tradition",
          translation: "философская традиция",
        },
        {
          phrase: "philosophical problem",
          translation: "философская проблема",
        },
        {
          phrase: "philosophical position",
          translation: "философская позиция",
        },
      ],
      knowledge: [
        { phrase: "knowledge claim", translation: "утверждение о знании" },
        { phrase: "justified belief", translation: "обоснованное убеждение" },
        { phrase: "empirical knowledge", translation: "эмпирическое знание" },
        { phrase: "a priori knowledge", translation: "априорное знание" },
        { phrase: "knowledge acquisition", translation: "приобретение знания" },
      ],
      ethical: [
        { phrase: "moral obligation", translation: "моральное обязательство" },
        { phrase: "ethical theory", translation: "этическая теория" },
        { phrase: "moral reasoning", translation: "моральное рассуждение" },
        { phrase: "ethical dilemma", translation: "этическая дилемма" },
        { phrase: "moral principle", translation: "моральный принцип" },
      ],
      reasoning: [
        { phrase: "logical argument", translation: "логический аргумент" },
        { phrase: "valid reasoning", translation: "валидное рассуждение" },
        { phrase: "sound argument", translation: "обоснованный аргумент" },
        { phrase: "logical fallacy", translation: "логическая ошибка" },
        {
          phrase: "deductive reasoning",
          translation: "дедуктивное рассуждение",
        },
      ],
    };

    const usefulPhrases = [
      {
        phrase: "beg the question",
        translation: "предполагать то, что нужно доказать",
        example:
          "The argument begs the question by assuming what it claims to prove.",
      },
      {
        phrase: "reductio ad absurdum",
        translation: "доведение до абсурда",
        example:
          "The philosopher used reductio ad absurdum to refute the claim.",
      },
      {
        phrase: "a priori / a posteriori",
        translation: "априори / апостериори",
        example:
          "Mathematical truths are a priori, while scientific facts are a posteriori.",
      },
      {
        phrase: "ceteris paribus",
        translation: "при прочих равных условиях",
        example: "Ceteris paribus, utilitarianism maximizes overall happiness.",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔗</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Phrases & Collocations
          </h2>
          <p className="text-xl text-gray-600">
            Устойчивые выражения философского дискурса
          </p>
        </div>

        {/* Collocations by category */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(collocations).map(([category, phrases]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white p-4">
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
                      <span className="font-medium text-slate-700">
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span>💬</span> Useful Expressions
          </h3>
          <div className="space-y-4">
            {usefulPhrases.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <span className="font-bold text-gray-700 text-lg">
                    {item.phrase}
                  </span>
                  <span className="text-gray-600 italic">
                    {item.translation}
                  </span>
                </div>
                <p className="text-gray-700 text-sm bg-white/50 p-2 rounded-lg">
                  <span className="text-gray-500">Example: </span>
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
          "The branch of philosophy concerned with knowledge is called _____.",
        answers: ["epistemology"],
        hint: "эпистемология",
      },
      {
        id: "q2",
        question:
          "The philosophical movement emphasizing individual freedom is _____.",
        answers: ["existentialism"],
        hint: "экзистенциализм",
      },
      {
        id: "q3",
        question: "The ethical theory that maximizes utility is _____.",
        answers: ["utilitarianism"],
        hint: "утилитаризм",
      },
      {
        id: "q4",
        question:
          "The method of resolving contradictions through reasoning is called _____.",
        answers: ["dialectic"],
        hint: "диалектика",
      },
      {
        id: "q5",
        question:
          "Knowledge independent of experience is called _____ knowledge.",
        answers: ["a priori"],
        hint: "априори",
      },
      {
        id: "q6",
        question:
          "A form of reasoning with two premises and a conclusion is a _____.",
        answers: ["syllogism"],
        hint: "силлогизм",
      },
      {
        id: "q7",
        question: "Kant's unconditional moral principle is the _____.",
        answers: ["categorical imperative"],
        hint: "категорический императив",
      },
      {
        id: "q8",
        question: "An error in reasoning is called a _____.",
        answers: ["fallacy"],
        hint: "логическая ошибка",
      },
    ];

    const translationExercises = [
      {
        id: "t1",
        russian: "Эпистемология",
        answers: ["epistemology"],
      },
      {
        id: "t2",
        russian: "Экзистенциализм",
        answers: ["existentialism"],
      },
      {
        id: "t3",
        russian: "Утилитаризм",
        answers: ["utilitarianism"],
      },
      {
        id: "t4",
        russian: "Диалектика",
        answers: ["dialectic"],
      },
      {
        id: "t5",
        russian: "Силлогизм",
        answers: ["syllogism"],
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
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6">
          <h3 className="text-2xl font-bold text-slate-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-slate-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition font-semibold"
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
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
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
                  <span className="font-bold text-gray-600">{i + 1}.</span>
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
                    className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
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
            className="px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-2xl hover:from-slate-700 hover:to-gray-800 transition font-bold text-xl shadow-lg"
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
        <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-6 border-2 border-slate-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-2">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-700 text-lg">
                Вы изучили более <strong>25 философских терминов</strong> и
                устойчивые выражения. Теперь вы можете:
              </p>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>✅ Читать философские тексты с пониманием терминологии</li>
                <li>✅ Участвовать в академических дискуссиях по философии</li>
                <li>✅ Анализировать философские аргументы и концепции</li>
                <li>
                  ✅ Использовать точную философскую терминологию в письменных
                  работах
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
