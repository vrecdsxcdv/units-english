export default function Step2() {
  const vocabulary = [
    {
      term: "diagnosis",
      pronunciation: "/ˌdaɪəɡˈnəʊsɪs/",
      translation: "диагноз",
      definition: "Определение болезни или состояния на основе симптомов и медицинских тестов.",
      examples: [
        "The doctor made a diagnosis of pneumonia after reviewing the X-ray.",
        "Early diagnosis is crucial for successful treatment.",
        "The patient received a diagnosis of type 2 diabetes.",
      ],
      relatedTerms: ["diagnose (verb)", "diagnostic (adj)", "differential diagnosis"],
    },
    {
      term: "prognosis",
      pronunciation: "/prɒɡˈnəʊsɪs/",
      translation: "прогноз (течения болезни)",
      definition: "Предполагаемое развитие и исход заболевания; вероятность выздоровления.",
      examples: [
        "The prognosis for this type of cancer is generally good.",
        "With proper treatment, the patient has an excellent prognosis.",
        "The doctor gave a guarded prognosis due to complications.",
      ],
      relatedTerms: ["good prognosis", "poor prognosis", "favorable prognosis"],
    },
    {
      term: "symptom",
      pronunciation: "/ˈsɪmptəm/",
      translation: "симптом",
      definition: "Физическое или психическое проявление болезни, которое ощущает пациент.",
      examples: [
        "Common symptoms include fever, cough, and fatigue.",
        "The patient presented with symptoms of chest pain and shortness of breath.",
        "These symptoms may indicate a more serious condition.",
      ],
      relatedTerms: ["sign", "symptomatic", "asymptomatic"],
    },
    {
      term: "syndrome",
      pronunciation: "/ˈsɪndrəʊm/",
      translation: "синдром",
      definition: "Группа симптомов, которые появляются вместе и характеризуют определённое заболевание или состояние.",
      examples: [
        "Down syndrome is a genetic disorder.",
        "The patient was diagnosed with metabolic syndrome.",
        "Chronic fatigue syndrome affects millions of people worldwide.",
      ],
      relatedTerms: ["disease", "disorder", "condition"],
    },
    {
      term: "chronic",
      pronunciation: "/ˈkrɒnɪk/",
      translation: "хронический",
      definition: "Длительное заболевание или состояние, продолжающееся месяцы или годы.",
      examples: [
        "She suffers from chronic back pain.",
        "Chronic diseases require ongoing medical care.",
        "Diabetes is a chronic condition that needs lifelong management.",
      ],
      relatedTerms: ["acute", "persistent", "long-term"],
    },
    {
      term: "acute",
      pronunciation: "/əˈkjuːt/",
      translation: "острый (о болезни)",
      definition: "Внезапное и серьёзное заболевание или состояние, обычно кратковременное.",
      examples: [
        "The patient presented with acute appendicitis.",
        "Acute pain requires immediate medical attention.",
        "He was admitted to hospital with acute respiratory failure.",
      ],
      relatedTerms: ["chronic", "sudden onset", "severe"],
    },
    {
      term: "palliative",
      pronunciation: "/ˈpælɪətɪv/",
      translation: "паллиативный",
      definition: "Лечение, направленное на облегчение симптомов, но не на излечение болезни.",
      examples: [
        "Palliative care focuses on improving quality of life.",
        "The patient was transferred to palliative care.",
        "Palliative treatment can help manage pain and discomfort.",
      ],
      relatedTerms: ["hospice care", "end-of-life care", "comfort care"],
    },
    {
      term: "terminal",
      pronunciation: "/ˈtɜːmɪnl/",
      translation: "терминальный, неизлечимый",
      definition: "Неизлечимая болезнь, которая приведёт к смерти в обозримом будущем.",
      examples: [
        "The patient was diagnosed with terminal cancer.",
        "Terminal illness requires compassionate end-of-life care.",
        "Hospice provides support for patients with terminal conditions.",
      ],
      relatedTerms: ["incurable", "fatal", "life-limiting"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🩺</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Diagnosis & Prognosis</h2>
        <p className="text-xl text-gray-600">Диагностика и прогнозирование</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-teal-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Примеры использования:
              </h4>
              <div className="space-y-2">
                {item.examples.map((example, i) => (
                  <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-xl">🔗</span> Связанные термины:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.relatedTerms.map((term, i) => (
                  <span
                    key={i}
                    className="bg-cyan-100 border border-cyan-300 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важное различие</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Diagnosis</strong> — это определение болезни (что у пациента).
              <br />
              <strong className="text-amber-700">Prognosis</strong> — это предсказание исхода болезни (что будет с пациентом).
              <br />
              <strong className="text-amber-700">Chronic</strong> — длительное (годы), <strong className="text-amber-700">Acute</strong> — внезапное и кратковременное.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-teal-200 p-8">
        <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">📝 Quick Practice</h3>
        <div className="space-y-4">
          <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-5">
            <p className="text-gray-800 mb-3 font-semibold">Выберите правильное слово:</p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-gray-700 mb-2">1. The doctor made a <strong className="text-teal-700">_____</strong> of pneumonia.</p>
                <p className="text-sm text-gray-600">→ diagnosis (определение болезни)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-gray-700 mb-2">2. The <strong className="text-teal-700">_____</strong> for this cancer is good with early treatment.</p>
                <p className="text-sm text-gray-600">→ prognosis (предсказание исхода)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-gray-700 mb-2">3. She suffers from <strong className="text-teal-700">_____</strong> back pain that has lasted for years.</p>
                <p className="text-sm text-gray-600">→ chronic (длительное)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-gray-700 mb-2">4. The patient presented with <strong className="text-teal-700">_____</strong> appendicitis requiring immediate surgery.</p>
                <p className="text-sm text-gray-600">→ acute (внезапное и серьёзное)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-gray-700 mb-2">5. <strong className="text-teal-700">_____</strong> care focuses on comfort rather than cure.</p>
                <p className="text-sm text-gray-600">→ Palliative (паллиативная помощь)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
