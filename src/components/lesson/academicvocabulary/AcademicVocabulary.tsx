"use client";

import { useState } from "react";
import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function AcademicVocabulary({ step }: Props) {
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
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    case 13:
      return <Step13 />;
    case 14:
      return <Step14 />;
    case 15:
      return <Step15 />;
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="text-8xl mb-4 animate-bounce">🎓</div>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Academic Vocabulary
          </h1>
          <p className="text-2xl text-cyan-300 font-light tracking-wide">
            Master 200+ Essential Terms for University Success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Научная лексика</h3>
            <p className="text-gray-300 leading-relaxed">
              Слова для исследований, экспериментов и научных статей
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">hypothesis</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">empirical</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">methodology</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Аналитическая лексика</h3>
            <p className="text-gray-300 leading-relaxed">
              Термины для анализа данных и критического мышления
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">paradigm</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">framework</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">correlation</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Что вы освоите
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/30">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="font-bold text-lg mb-2 text-cyan-400">200+ слов</h4>
              <p className="text-sm text-gray-400">Полный академический словарь</p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/30">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-lg mb-2 text-purple-400">15 категорий</h4>
              <p className="text-sm text-gray-400">От гипотез до заключений</p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/30">
              <div className="text-4xl mb-3">✍️</div>
              <h4 className="font-bold text-lg mb-2 text-pink-400">Практика</h4>
              <p className="text-sm text-gray-400">Упражнения с примерами</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-xl rounded-3xl p-8 border border-yellow-700/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-yellow-400">Зачем нужна академическая лексика?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Успешная учёба в англоязычных университетах</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Написание научных статей и диссертаций</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Участие в международных конференциях</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Чтение академической литературы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const words = [
    {
      word: "hypothesis",
      transcription: "/haɪˈpɒθəsɪs/",
      translation: "гипотеза",
      definition: "A proposed explanation for a phenomenon that can be tested",
      example: "The researchers formulated a hypothesis about climate change.",
      collocations: ["test a hypothesis", "formulate a hypothesis", "support/reject a hypothesis"],
      synonyms: ["theory", "assumption", "proposition"],
    },
    {
      word: "empirical",
      transcription: "/ɪmˈpɪrɪkəl/",
      translation: "эмпирический, основанный на опыте",
      definition: "Based on observation or experience rather than theory",
      example: "The study provides empirical evidence for the theory.",
      collocations: ["empirical evidence", "empirical data", "empirical research"],
      synonyms: ["experimental", "observed", "factual"],
    },
    {
      word: "methodology",
      transcription: "/ˌmeθəˈdɒlədʒi/",
      translation: "методология",
      definition: "A system of methods used in a particular area of study",
      example: "The methodology section describes how the research was conducted.",
      collocations: ["research methodology", "rigorous methodology", "quantitative/qualitative methodology"],
      synonyms: ["approach", "procedure", "technique"],
    },
    {
      word: "paradigm",
      transcription: "/ˈpærədaɪm/",
      translation: "парадигма, модель",
      definition: "A typical example or pattern of something; a model",
      example: "The discovery led to a paradigm shift in physics.",
      collocations: ["paradigm shift", "dominant paradigm", "theoretical paradigm"],
      synonyms: ["model", "pattern", "framework"],
    },
    {
      word: "validate",
      transcription: "/ˈvælɪdeɪt/",
      translation: "подтверждать, проверять",
      definition: "To demonstrate or support the truth or value of something",
      example: "Further research is needed to validate these findings.",
      collocations: ["validate findings", "validate results", "validate a theory"],
      synonyms: ["confirm", "verify", "substantiate"],
    },
    {
      word: "correlation",
      transcription: "/ˌkɒrəˈleɪʃən/",
      translation: "корреляция, взаимосвязь",
      definition: "A mutual relationship between two or more things",
      example: "There is a strong correlation between education and income.",
      collocations: ["positive/negative correlation", "strong/weak correlation", "correlation coefficient"],
      synonyms: ["connection", "relationship", "association"],
    },
    {
      word: "variable",
      transcription: "/ˈveəriəbəl/",
      translation: "переменная, фактор",
      definition: "An element that can change or be changed",
      example: "The researchers controlled all variables except temperature.",
      collocations: ["dependent/independent variable", "control variables", "confounding variable"],
      synonyms: ["factor", "element", "parameter"],
    },
    {
      word: "phenomenon",
      transcription: "/fəˈnɒmɪnən/",
      translation: "явление, феномен",
      definition: "A fact or situation that is observed to exist or happen",
      example: "Global warming is a complex phenomenon.",
      collocations: ["natural phenomenon", "social phenomenon", "study a phenomenon"],
      synonyms: ["occurrence", "event", "fact"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-semibold">Research & Experimentation</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Исследования и эксперименты
          </h2>
          <p className="text-xl text-gray-400">Базовая научная терминология</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedWord(selectedWord === item.word ? null : item.word)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedWord === item.word
                  ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400 scale-105"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50"
              } backdrop-blur-xl rounded-2xl p-6 border-2 shadow-xl hover:shadow-cyan-500/30`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">{item.word}</h3>
                  <p className="text-sm text-gray-400 font-mono">{item.transcription}</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400 border border-blue-500/30">
                  {item.translation}
                </span>
              </div>

              <p className="text-gray-300 mb-3 italic">{item.definition}</p>

              {selectedWord === item.word && (
                <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-4 animate-fadeIn">
                  <div>
                    <p className="text-sm font-semibold text-purple-400 mb-2">📝 Пример:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-400 mb-2">🔗 Коллокации:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.collocations.map((col, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-500/10 rounded-lg text-sm text-green-400 border border-green-500/20"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-yellow-400 mb-2">↔️ Синонимы:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.synonyms.map((syn, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-yellow-500/10 rounded-lg text-sm text-yellow-400 border border-yellow-500/20"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-700/30">
          <p className="text-center text-gray-300">
            <span className="text-purple-400 font-semibold">💡 Совет:</span> Нажмите на карточку, чтобы увидеть примеры, коллокации и синонимы
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "The scientists need to test their",
      right: "before publishing the results.",
      options: ["hypothesis", "paradigm", "correlation"],
    },
    {
      left: "The study is based on",
      right: "evidence collected over five years.",
      options: ["empirical", "theoretical", "conceptual"],
    },
    {
      left: "The research",
      right: "was clearly explained in Chapter 3.",
      options: ["methodology", "bibliography", "appendix"],
    },
    {
      left: "There is a strong",
      right: "between smoking and lung cancer.",
      options: ["correlation", "variable", "hypothesis"],
    },
    {
      left: "Temperature was the independent",
      right: "in the experiment.",
      options: ["variable", "correlation", "paradigm"],
    },
    {
      left: "Climate change is a complex",
      right: "that requires global cooperation.",
      options: ["phenomenon", "hypothesis", "methodology"],
    },
    {
      left: "The discovery caused a",
      right: "shift in scientific thinking.",
      options: ["paradigm", "empirical", "correlation"],
    },
    {
      left: "Further experiments are needed to",
      right: "these findings.",
      options: ["validate", "correlate", "hypothesize"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✍️</div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Практика: Исследовательская лексика
          </h2>
          <p className="text-xl text-gray-400">Выберите правильное слово</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          <CheckableExercise items={items} />
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-6 border border-blue-700/30">
          <p className="text-center text-gray-300">
            <span className="text-cyan-400 font-semibold">💡 Подсказка:</span> Думайте о контексте — какое слово логически подходит к смыслу предложения
          </p>
        </div>
      </div>
    </div>
  );
}

function Step4() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const words = [
    {
      word: "analyze",
      transcription: "/ˈænəlaɪz/",
      translation: "анализировать",
      definition: "To examine methodically by separating into parts",
      example: "We need to analyze the data before drawing conclusions.",
      collocations: ["analyze data", "analyze results", "critically analyze"],
      derivatives: "analysis (n), analytical (adj), analyst (n)",
    },
    {
      word: "synthesize",
      transcription: "/ˈsɪnθəsaɪz/",
      translation: "синтезировать, объединять",
      definition: "To combine separate elements to form a whole",
      example: "The paper synthesizes findings from multiple studies.",
      collocations: ["synthesize information", "synthesize evidence", "synthesize ideas"],
      derivatives: "synthesis (n), synthetic (adj)",
    },
    {
      word: "evaluate",
      transcription: "/ɪˈvæljueɪt/",
      translation: "оценивать",
      definition: "To assess the value, significance, or quality of something",
      example: "Students must evaluate the strengths and weaknesses of each argument.",
      collocations: ["evaluate effectiveness", "evaluate critically", "evaluate evidence"],
      derivatives: "evaluation (n), evaluative (adj)",
    },
    {
      word: "interpret",
      transcription: "/ɪnˈtɜːprɪt/",
      translation: "интерпретировать, толковать",
      definition: "To explain the meaning of information or actions",
      example: "Different scholars interpret the data differently.",
      collocations: ["interpret findings", "interpret results", "interpret data"],
      derivatives: "interpretation (n), interpretive (adj)",
    },
    {
      word: "critique",
      transcription: "/krɪˈtiːk/",
      translation: "критиковать, давать критический анализ",
      definition: "To evaluate in a detailed and analytical way",
      example: "The article critiques current educational policies.",
      collocations: ["critique an argument", "critique a theory", "offer a critique"],
      derivatives: "critical (adj), criticism (n), critic (n)",
    },
    {
      word: "infer",
      transcription: "/ɪnˈfɜː/",
      translation: "делать вывод, выводить",
      definition: "To deduce or conclude from evidence and reasoning",
      example: "From the results, we can infer that the treatment is effective.",
      collocations: ["infer from data", "reasonably infer", "infer causation"],
      derivatives: "inference (n), inferential (adj)",
    },
    {
      word: "deduce",
      transcription: "/dɪˈdjuːs/",
      translation: "выводить, делать вывод",
      definition: "To arrive at a conclusion by reasoning",
      example: "Scientists deduced that the species evolved separately.",
      collocations: ["deduce from evidence", "logically deduce", "deduce conclusions"],
      derivatives: "deduction (n), deductive (adj)",
    },
    {
      word: "substantiate",
      transcription: "/səbˈstænʃieɪt/",
      translation: "обосновывать, подтверждать",
      definition: "To provide evidence to support or prove the truth of",
      example: "The theory is substantiated by experimental evidence.",
      collocations: ["substantiate claims", "substantiate arguments", "fail to substantiate"],
      derivatives: "substantiation (n), substantive (adj)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-semibold">Critical Thinking</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Анализ и критическое мышление
          </h2>
          <p className="text-xl text-gray-400">Глаголы академического дискурса</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedWord(selectedWord === item.word ? null : item.word)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedWord === item.word
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400 scale-105"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50"
              } backdrop-blur-xl rounded-2xl p-6 border-2 shadow-xl hover:shadow-purple-500/30`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-1">{item.word}</h3>
                  <p className="text-sm text-gray-400 font-mono">{item.transcription}</p>
                </div>
                <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm text-pink-400 border border-pink-500/30">
                  {item.translation}
                </span>
              </div>

              <p className="text-gray-300 mb-3 italic">{item.definition}</p>

              {selectedWord === item.word && (
                <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-4 animate-fadeIn">
                  <div>
                    <p className="text-sm font-semibold text-cyan-400 mb-2">📝 Пример:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-400 mb-2">🔗 Коллокации:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.collocations.map((col, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-500/10 rounded-lg text-sm text-green-400 border border-green-500/20"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-yellow-400 mb-2">📐 Однокоренные слова:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30 text-sm">
                      {item.derivatives}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "The researchers will",
      right: "the survey responses to identify patterns.",
      options: ["analyze", "synthesize", "critique"],
    },
    {
      left: "The literature review aims to",
      right: "findings from various sources.",
      options: ["synthesize", "deduce", "infer"],
    },
    {
      left: "We must",
      right: "the effectiveness of the new policy.",
      options: ["evaluate", "substantiate", "interpret"],
    },
    {
      left: "How do you",
      right: "these statistical results?",
      options: ["interpret", "critique", "deduce"],
    },
    {
      left: "The essay should",
      right: "both the strengths and limitations of the theory.",
      options: ["critique", "infer", "substantiate"],
    },
    {
      left: "From this evidence, we can",
      right: "that the program was successful.",
      options: ["infer", "synthesize", "evaluate"],
    },
    {
      left: "The detective was able to",
      right: "who committed the crime from the clues.",
      options: ["deduce", "critique", "analyze"],
    },
    {
      left: "The author failed to",
      right: "his controversial claims with evidence.",
      options: ["substantiate", "interpret", "synthesize"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧠</div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Практика: Аналитические глаголы
          </h2>
          <p className="text-xl text-gray-400">Выберите правильный глагол</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          <CheckableExercise items={items} />
        </div>
      </div>
    </div>
  );
}

function Step6() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const words = [
    {
      word: "framework",
      transcription: "/ˈfreɪmwɜːk/",
      translation: "структура, рамки, система",
      definition: "A basic structure underlying a system or concept",
      example: "The study uses a theoretical framework based on cognitive psychology.",
      collocations: ["theoretical framework", "conceptual framework", "analytical framework", "within this framework"],
    },
    {
      word: "coherent",
      transcription: "/kəʊˈhɪərənt/",
      translation: "связный, последовательный",
      definition: "Logical and consistent; forming a unified whole",
      example: "The argument must be coherent and well-structured.",
      collocations: ["coherent argument", "coherent theory", "remain coherent", "lack coherence"],
    },
    {
      word: "comprehensive",
      transcription: "/ˌkɒmprɪˈhensɪv/",
      translation: "всесторонний, исчерпывающий",
      definition: "Complete and including all or nearly all elements",
      example: "The report provides a comprehensive analysis of the problem.",
      collocations: ["comprehensive study", "comprehensive review", "comprehensive approach", "comprehensive understanding"],
    },
    {
      word: "rigorous",
      transcription: "/ˈrɪɡərəs/",
      translation: "строгий, тщательный",
      definition: "Extremely thorough and careful",
      example: "The research methodology was rigorous and well-designed.",
      collocations: ["rigorous analysis", "rigorous testing", "rigorous methodology", "rigorous standards"],
    },
    {
      word: "systematic",
      transcription: "/ˌsɪstəˈmætɪk/",
      translation: "систематический, методичный",
      definition: "Done according to a system or plan; methodical",
      example: "We conducted a systematic review of the literature.",
      collocations: ["systematic approach", "systematic review", "systematic analysis", "systematic study"],
    },
    {
      word: "explicit",
      transcription: "/ɪkˈsplɪsɪt/",
      translation: "явный, чёткий",
      definition: "Stated clearly and in detail, leaving no room for confusion",
      example: "The author makes explicit references to previous research.",
      collocations: ["explicit statement", "make explicit", "explicit criteria", "explicit mention"],
    },
    {
      word: "implicit",
      transcription: "/ɪmˈplɪsɪt/",
      translation: "подразумеваемый, скрытый",
      definition: "Suggested though not directly expressed",
      example: "There is an implicit assumption in this argument.",
      collocations: ["implicit assumption", "implicit bias", "implicit meaning", "remain implicit"],
    },
    {
      word: "robust",
      transcription: "/rəʊˈbʌst/",
      translation: "надёжный, устойчивый",
      definition: "Strong and unlikely to fail or break; reliable",
      example: "The methodology is robust enough to handle large datasets.",
      collocations: ["robust evidence", "robust methodology", "robust findings", "robust system"],
    },
    {
      word: "ambiguous",
      transcription: "/æmˈbɪɡjuəs/",
      translation: "неоднозначный, двусмысленный",
      definition: "Open to more than one interpretation; unclear",
      example: "The results are ambiguous and require further investigation.",
      collocations: ["ambiguous results", "ambiguous statement", "remain ambiguous", "ambiguous findings"],
    },
    {
      word: "plausible",
      transcription: "/ˈplɔːzəbəl/",
      translation: "правдоподобный, вероятный",
      definition: "Seeming reasonable or probable",
      example: "This is the most plausible explanation for the observed phenomenon.",
      collocations: ["plausible explanation", "plausible theory", "seem plausible", "plausible alternative"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-semibold">Description & Evaluation</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Описание и оценка исследований
          </h2>
          <p className="text-xl text-gray-400">Прилагательные академического стиля</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedWord(selectedWord === item.word ? null : item.word)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedWord === item.word
                  ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400 scale-105"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50"
              } backdrop-blur-xl rounded-2xl p-6 border-2 shadow-xl hover:shadow-cyan-500/30`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">{item.word}</h3>
                  <p className="text-sm text-gray-400 font-mono">{item.transcription}</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400 border border-blue-500/30">
                  {item.translation}
                </span>
              </div>

              <p className="text-gray-300 mb-3 italic">{item.definition}</p>

              {selectedWord === item.word && (
                <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-4 animate-fadeIn">
                  <div>
                    <p className="text-sm font-semibold text-purple-400 mb-2">📝 Пример:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-400 mb-2">🔗 Коллокации:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.collocations.map((col, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-500/10 rounded-lg text-sm text-green-400 border border-green-500/20"
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "The study uses a theoretical",
      right: "based on social constructivism.",
      options: ["framework", "hypothesis", "paradigm"],
    },
    {
      left: "The argument is logical and",
      right: "throughout the paper.",
      options: ["coherent", "ambiguous", "implicit"],
    },
    {
      left: "The researchers conducted a",
      right: "review of over 500 studies.",
      options: ["comprehensive", "plausible", "explicit"],
    },
    {
      left: "The methodology must be",
      right: "to ensure valid results.",
      options: ["rigorous", "ambiguous", "implicit"],
    },
    {
      left: "We need a more",
      right: "approach to data collection.",
      options: ["systematic", "plausible", "coherent"],
    },
    {
      left: "The criteria for selection should be made",
      right: "in the methodology section.",
      options: ["explicit", "robust", "comprehensive"],
    },
    {
      left: "There is an",
      right: "assumption that participants are honest.",
      options: ["implicit", "explicit", "rigorous"],
    },
    {
      left: "The findings provide",
      right: "evidence for climate change.",
      options: ["robust", "ambiguous", "implicit"],
    },
    {
      left: "The results are",
      right: "and difficult to interpret.",
      options: ["ambiguous", "systematic", "explicit"],
    },
    {
      left: "This seems like the most",
      right: "explanation for the data.",
      options: ["plausible", "rigorous", "comprehensive"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Практика: Академические прилагательные
          </h2>
          <p className="text-xl text-gray-400">Выберите подходящее слово</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          <CheckableExercise items={items} />
        </div>
      </div>
    </div>
  );
}

function Step8() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const words = [
    {
      word: "furthermore",
      translation: "более того, кроме того",
      example: "The results were positive. Furthermore, they were statistically significant.",
      usage: "Добавляет дополнительную информацию, усиливающую аргумент",
    },
    {
      word: "moreover",
      translation: "более того, к тому же",
      example: "The method is efficient. Moreover, it is cost-effective.",
      usage: "Добавляет ещё один важный пункт к уже сказанному",
    },
    {
      word: "nevertheless",
      translation: "тем не менее, всё же",
      example: "The study has limitations. Nevertheless, the findings are valuable.",
      usage: "Вводит контрастную информацию, несмотря на предыдущее утверждение",
    },
    {
      word: "however",
      translation: "однако, тем не менее",
      example: "The theory is widely accepted. However, recent evidence challenges it.",
      usage: "Указывает на контраст или противоречие с предыдущим утверждением",
    },
    {
      word: "consequently",
      translation: "следовательно, в результате",
      example: "Funding was cut. Consequently, the project was delayed.",
      usage: "Показывает результат или следствие",
    },
    {
      word: "therefore",
      translation: "поэтому, следовательно",
      example: "The hypothesis was disproven. Therefore, we revised our approach.",
      usage: "Вводит логический вывод или заключение",
    },
    {
      word: "conversely",
      translation: "наоборот, напротив",
      example: "Group A improved significantly. Conversely, Group B showed no change.",
      usage: "Вводит противоположную ситуацию или точку зрения",
    },
    {
      word: "specifically",
      translation: "конкретно, в частности",
      example: "Several factors contributed, specifically temperature and humidity.",
      usage: "Уточняет или конкретизирует общее утверждение",
    },
    {
      word: "notably",
      translation: "в частности, особенно",
      example: "Many species are endangered, notably the polar bear.",
      usage: "Выделяет особенно важный или примечательный пример",
    },
    {
      word: "alternatively",
      translation: "в качестве альтернативы",
      example: "We can use method A. Alternatively, method B may be more suitable.",
      usage: "Предлагает другой вариант или возможность",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-semibold">Discourse Markers</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Связующие слова и выражения
          </h2>
          <p className="text-xl text-gray-400">Маркеры академического дискурса</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedWord(selectedWord === item.word ? null : item.word)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedWord === item.word
                  ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-400 scale-105"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50"
              } backdrop-blur-xl rounded-2xl p-6 border-2 shadow-xl hover:shadow-emerald-500/30`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-emerald-400">{item.word}</h3>
                <span className="px-3 py-1 bg-teal-500/20 rounded-full text-sm text-teal-400 border border-teal-500/30">
                  {item.translation}
                </span>
              </div>

              {selectedWord === item.word && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <p className="text-sm font-semibold text-purple-400 mb-2">📝 Пример:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-cyan-400 mb-2">💡 Использование:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.usage}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-xl rounded-2xl p-6 border border-yellow-700/30">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📌</div>
            <div>
              <h4 className="text-lg font-bold mb-2 text-yellow-400">Структура академического текста</h4>
              <p className="text-gray-300 text-sm">
                Связующие слова помогают создать логичную структуру текста, показывая отношения между идеями:
                добавление, контраст, причину-следствие, примеры.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "The method is effective.",
      right: ", it is easy to implement.",
      options: ["Furthermore", "However", "Conversely"],
    },
    {
      left: "The data is limited.",
      right: ", the conclusions are valid.",
      options: ["Nevertheless", "Therefore", "Moreover"],
    },
    {
      left: "The experiment failed.",
      right: ", we had to redesign the protocol.",
      options: ["Consequently", "Furthermore", "Specifically"],
    },
    {
      left: "The results were unexpected.",
      right: ", they require further investigation.",
      options: ["Therefore", "Conversely", "Alternatively"],
    },
    {
      left: "Group A improved significantly.",
      right: ", Group B showed decline.",
      options: ["Conversely", "Moreover", "Therefore"],
    },
    {
      left: "Several factors were important,",
      right: "temperature and pH level.",
      options: ["specifically", "however", "consequently"],
    },
    {
      left: "Many challenges emerged,",
      right: "funding shortages and equipment failures.",
      options: ["notably", "therefore", "conversely"],
    },
    {
      left: "We can use approach A.",
      right: ", approach B might be more efficient.",
      options: ["Alternatively", "Therefore", "Furthermore"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔗</div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Практика: Связующие слова
          </h2>
          <p className="text-xl text-gray-400">Выберите подходящий маркер дискурса</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          <CheckableExercise items={items} />
        </div>
      </div>
    </div>
  );
}

function Step10() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const words = [
    {
      word: "significant",
      translation: "значительный, существенный",
      example: "The study found a significant correlation between diet and health.",
      antonym: "insignificant, negligible",
      note: "Часто используется со статистическими данными",
    },
    {
      word: "substantial",
      translation: "значительный, существенный",
      example: "There has been substantial progress in renewable energy.",
      antonym: "minimal, negligible",
      note: "Подчёркивает важность или размер чего-либо",
    },
    {
      word: "considerable",
      translation: "значительный, немалый",
      example: "The project required considerable time and resources.",
      antonym: "insignificant, minor",
      note: "Используется для описания количества или степени",
    },
    {
      word: "marginal",
      translation: "незначительный, минимальный",
      example: "The improvements were only marginal.",
      antonym: "substantial, significant",
      note: "Указывает на небольшую степень изменения",
    },
    {
      word: "predominant",
      translation: "преобладающий, доминирующий",
      example: "The predominant view among scholars is that...",
      antonym: "minor, subordinate",
      note: "Описывает то, что является основным или главным",
    },
    {
      word: "inherent",
      translation: "присущий, неотъемлемый",
      example: "There are inherent risks in any experimental procedure.",
      antonym: "extrinsic, external",
      note: "Что-то существующее как естественная часть",
    },
    {
      word: "fundamental",
      translation: "фундаментальный, основной",
      example: "This is a fundamental principle of physics.",
      antonym: "superficial, peripheral",
      note: "Описывает базовые, основополагающие элементы",
    },
    {
      word: "preliminary",
      translation: "предварительный, вводный",
      example: "The preliminary results suggest a positive trend.",
      antonym: "final, conclusive",
      note: "Относится к ранним стадиям исследования",
    },
    {
      word: "subsequent",
      translation: "последующий, следующий",
      example: "Subsequent studies confirmed these findings.",
      antonym: "previous, prior",
      note: "Описывает то, что происходит после",
    },
    {
      word: "concurrent",
      translation: "одновременный, параллельный",
      example: "Several concurrent studies reached similar conclusions.",
      antonym: "sequential, successive",
      note: "События, происходящие в одно и то же время",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-rose-500/20 rounded-full border border-rose-500/30 mb-6">
            <span className="text-rose-400 font-semibold">Quantifying & Qualifying</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
            Степень и значимость
          </h2>
          <p className="text-xl text-gray-400">Слова для описания важности и масштаба</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {words.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedWord(selectedWord === item.word ? null : item.word)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedWord === item.word
                  ? "bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-rose-400 scale-105"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-rose-500/50"
              } backdrop-blur-xl rounded-2xl p-6 border-2 shadow-xl hover:shadow-rose-500/30`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-rose-400">{item.word}</h3>
                <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm text-pink-400 border border-pink-500/30">
                  {item.translation}
                </span>
              </div>

              {selectedWord === item.word && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <p className="text-sm font-semibold text-purple-400 mb-2">📝 Пример:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.example}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-yellow-400 mb-2">↔️ Антоним:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.antonym}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-cyan-400 mb-2">💡 Примечание:</p>
                    <p className="text-gray-300 bg-slate-900/50 p-3 rounded-lg border border-slate-700/30">
                      {item.note}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step11() {
  const items: FillItem[] = [
    {
      left: "The researchers found a",
      right: "increase in temperature over the past decade.",
      options: ["significant", "marginal", "preliminary"],
    },
    {
      left: "The government has made",
      right: "investments in education.",
      options: ["substantial", "marginal", "subsequent"],
    },
    {
      left: "The project requires",
      right: "time and effort to complete.",
      options: ["considerable", "concurrent", "marginal"],
    },
    {
      left: "The improvement in performance was only",
      right: ".",
      options: ["marginal", "substantial", "fundamental"],
    },
    {
      left: "The",
      right: "theory in the field is social constructivism.",
      options: ["predominant", "preliminary", "marginal"],
    },
    {
      left: "There are",
      right: "limitations in any research methodology.",
      options: ["inherent", "subsequent", "concurrent"],
    },
    {
      left: "Understanding this concept is",
      right: "to the entire course.",
      options: ["fundamental", "marginal", "preliminary"],
    },
    {
      left: "The",
      right: "findings suggest further research is needed.",
      options: ["preliminary", "fundamental", "predominant"],
    },
    {
      left: "research confirmed the initial hypothesis.",
      right: "",
      options: ["Subsequent", "Preliminary", "Concurrent"],
    },
    {
      left: "Several",
      right: "studies produced similar results.",
      options: ["concurrent", "subsequent", "marginal"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚖️</div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-rose-400 to-orange-500 bg-clip-text text-transparent">
            Практика: Степень и важность
          </h2>
          <p className="text-xl text-gray-400">Выберите слово с нужным значением</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          <CheckableExercise items={items} />
        </div>
      </div>
    </div>
  );
}

function Step12() {
  const phrases = [
    {
      category: "Введение темы",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      phrases: [
        "This paper examines...",
        "The aim of this study is to...",
        "This research investigates...",
        "The purpose of this article is to...",
        "This study seeks to...",
        "The present paper addresses...",
      ],
    },
    {
      category: "Обзор литературы",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      phrases: [
        "Previous research has shown that...",
        "According to Smith (2020)...",
        "Studies suggest that...",
        "It has been argued that...",
        "The literature indicates that...",
        "As noted by several scholars...",
      ],
    },
    {
      category: "Методология",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      phrases: [
        "The study employed a qualitative approach...",
        "Data was collected through...",
        "The sample consisted of...",
        "A mixed-methods approach was used...",
        "The research design involved...",
        "Participants were recruited via...",
      ],
    },
    {
      category: "Презентация результатов",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      phrases: [
        "The findings reveal that...",
        "The results indicate that...",
        "It was found that...",
        "The data shows that...",
        "Analysis revealed that...",
        "The evidence suggests that...",
      ],
    },
    {
      category: "Обсуждение",
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30",
      phrases: [
        "These findings are consistent with...",
        "One possible explanation is that...",
        "This result can be attributed to...",
        "The implications of these findings are...",
        "It is worth noting that...",
        "This suggests that...",
      ],
    },
    {
      category: "Заключение",
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      phrases: [
        "In conclusion, this study has...",
        "To summarize, the findings suggest...",
        "The research demonstrates that...",
        "Future studies should examine...",
        "Further research is needed to...",
        "In summary, the evidence indicates...",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-violet-500/20 rounded-full border border-violet-500/30 mb-6">
            <span className="text-violet-400 font-semibold">Academic Phrases</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Академические фразы и выражения
          </h2>
          <p className="text-xl text-gray-400">Готовые конструкции для научных текстов</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {phrases.map((section, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${section.color} backdrop-blur-xl rounded-2xl p-6 border ${section.borderColor} shadow-xl`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{section.category}</h3>
              <div className="space-y-3">
                {section.phrases.map((phrase, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all"
                  >
                    <p className="text-gray-300">{phrase}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-700/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📌</div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-cyan-400">Как использовать эти фразы</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Используйте эти конструкции как основу для своих предложений</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Адаптируйте фразы под контекст вашего исследования</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Комбинируйте их с изученной академической лексикой</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Соблюдайте формальный академический стиль</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step13() {
  const items: FillItem[] = [
    {
      left: "This paper",
      right: "the impact of social media on mental health.",
      options: ["examines", "looks at", "talks about"],
    },
    {
      left: "Previous research",
      right: "that exercise improves cognitive function.",
      options: ["has shown", "said", "thinks"],
    },
    {
      left: "The study",
      right: "a mixed-methods approach to data collection.",
      options: ["employed", "used", "did"],
    },
    {
      left: "The findings",
      right: "that there is a strong correlation between the variables.",
      options: ["reveal", "show", "say"],
    },
    {
      left: "These results are",
      right: "with previous studies in the field.",
      options: ["consistent", "same", "similar"],
    },
    {
      left: "One possible",
      right: "is that the sample size was too small.",
      options: ["explanation", "reason", "thing"],
    },
    {
      left: "The implications of these findings are",
      right: "for educational policy.",
      options: ["significant", "important", "big"],
    },
    {
      left: "Future studies should",
      right: "the long-term effects of the intervention.",
      options: ["examine", "look at", "check"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Практика: Академические фразы
          </h2>
          <p className="text-xl text-gray-400">Выберите академический вариант</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl mb-8">
          <div className="bg-yellow-900/30 rounded-xl p-4 border border-yellow-700/30 mb-6">
            <p className="text-gray-300 text-center">
              <span className="text-yellow-400 font-semibold">💡 Задание:</span> Выберите наиболее формальный и академический вариант
            </p>
          </div>
          <CheckableExercise items={items} />
        </div>
      </div>
    </div>
  );
}

function Step14() {
  const categories = [
    {
      title: "Причина и следствие",
      icon: "🔄",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      words: [
        { word: "result in", translation: "приводить к" },
        { word: "lead to", translation: "приводить к" },
        { word: "contribute to", translation: "способствовать" },
        { word: "stem from", translation: "происходить из" },
        { word: "attribute to", translation: "приписывать" },
        { word: "due to", translation: "благодаря, из-за" },
        { word: "owing to", translation: "вследствие" },
        { word: "consequently", translation: "следовательно" },
      ],
    },
    {
      title: "Сравнение и контраст",
      icon: "⚖️",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      words: [
        { word: "similarly", translation: "аналогично" },
        { word: "likewise", translation: "точно так же" },
        { word: "in contrast", translation: "в отличие" },
        { word: "whereas", translation: "тогда как" },
        { word: "on the other hand", translation: "с другой стороны" },
        { word: "differ from", translation: "отличаться от" },
        { word: "comparable to", translation: "сравнимый с" },
        { word: "in comparison", translation: "по сравнению" },
      ],
    },
    {
      title: "Примеры и иллюстрации",
      icon: "📌",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      words: [
        { word: "for instance", translation: "например" },
        { word: "such as", translation: "такой как" },
        { word: "namely", translation: "а именно" },
        { word: "to illustrate", translation: "для иллюстрации" },
        { word: "exemplify", translation: "служить примером" },
        { word: "in particular", translation: "в частности" },
        { word: "especially", translation: "особенно" },
        { word: "notably", translation: "в частности" },
      ],
    },
    {
      title: "Подчёркивание важности",
      icon: "⭐",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      words: [
        { word: "crucial", translation: "критически важный" },
        { word: "essential", translation: "необходимый" },
        { word: "vital", translation: "жизненно важный" },
        { word: "paramount", translation: "первостепенный" },
        { word: "pivotal", translation: "ключевой" },
        { word: "imperative", translation: "обязательный" },
        { word: "indispensable", translation: "незаменимый" },
        { word: "fundamental", translation: "фундаментальный" },
      ],
    },
    {
      title: "Ограничения и оговорки",
      icon: "⚠️",
      color: "from-rose-500/20 to-red-500/20",
      borderColor: "border-rose-500/30",
      words: [
        { word: "limitation", translation: "ограничение" },
        { word: "constraint", translation: "ограничение" },
        { word: "caveat", translation: "предостережение" },
        { word: "drawback", translation: "недостаток" },
        { word: "shortcoming", translation: "недостаток" },
        { word: "albeit", translation: "хотя" },
        { word: "notwithstanding", translation: "несмотря на" },
        { word: "tentatively", translation: "предварительно" },
      ],
    },
    {
      title: "Усиление аргумента",
      icon: "💪",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30",
      words: [
        { word: "indeed", translation: "действительно" },
        { word: "undoubtedly", translation: "несомненно" },
        { word: "certainly", translation: "безусловно" },
        { word: "clearly", translation: "очевидно" },
        { word: "evidently", translation: "очевидно" },
        { word: "undeniably", translation: "неоспоримо" },
        { word: "unquestionably", translation: "бесспорно" },
        { word: "manifestly", translation: "явно" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-semibold">Comprehensive List</span>
          </div>
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Полный список: 200+ слов
          </h2>
          <p className="text-xl text-gray-400">Академическая лексика по категориям</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-xl rounded-2xl p-6 border ${category.borderColor} shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.words.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all"
                  >
                    <span className="font-semibold text-white">{item.word}</span>
                    <span className="text-gray-400 text-sm">{item.translation}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-700/30">
          <div className="text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Вы освоили 200+ академических слов!</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Эта лексика — основа для успешной учёбы в англоязычных университетах, написания научных работ
              и участия в академических дискуссиях. Практикуйте их использование в контексте!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step15() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-8xl mb-6 animate-bounce">🏆</div>
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Поздравляем!
          </h1>
          <p className="text-2xl text-gray-400">Вы завершили курс Academic Vocabulary</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">200+</h3>
            <p className="text-gray-400">академических слов</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold text-purple-400 mb-2">15</h3>
            <p className="text-gray-400">тематических категорий</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 text-center">
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">60+</h3>
            <p className="text-gray-400">практических упражнений</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Что вы освоили
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔬</span>
                <div>
                  <h4 className="font-bold text-cyan-400 mb-1">Исследовательская лексика</h4>
                  <p className="text-gray-400 text-sm">hypothesis, empirical, methodology, paradigm, validate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h4 className="font-bold text-purple-400 mb-1">Аналитические глаголы</h4>
                  <p className="text-gray-400 text-sm">analyze, synthesize, evaluate, interpret, critique</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-bold text-blue-400 mb-1">Описательные прилагательные</h4>
                  <p className="text-gray-400 text-sm">rigorous, comprehensive, systematic, robust, coherent</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-bold text-emerald-400 mb-1">Связующие слова</h4>
                  <p className="text-gray-400 text-sm">furthermore, nevertheless, consequently, conversely</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h4 className="font-bold text-rose-400 mb-1">Степень и важность</h4>
                  <p className="text-gray-400 text-sm">significant, substantial, fundamental, predominant</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-1">Академические фразы</h4>
                  <p className="text-gray-400 text-sm">This study examines..., The findings reveal...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-xl rounded-3xl p-8 border border-yellow-700/30 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-5xl">💡</div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Следующие шаги</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Читайте академические статьи в вашей области, обращая внимание на использование изученной лексики</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Практикуйте письмо: пишите короткие рефераты и обзоры, используя академический стиль</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Создайте личный словарь с примерами из вашей специальности</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Участвуйте в академических дискуссиях и презентациях на английском</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-10 border border-indigo-500/30">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Вы готовы к академическому английскому!
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            С этим словарным запасом вы сможете уверенно читать научную литературу, писать академические тексты
            и участвовать в университетской жизни на английском языке. Продолжайте практиковать и расширять словарь!
          </p>
        </div>
      </div>
    </div>
  );
}
