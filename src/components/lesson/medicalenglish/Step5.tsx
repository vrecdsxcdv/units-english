export default function Step5() {
  const medications = [
    {
      term: "prescription",
      translation: "рецепт",
      definition: "Письменное распоряжение врача на выдачу лекарств.",
      example: "You need a prescription to buy antibiotics.",
    },
    {
      term: "dosage",
      translation: "дозировка",
      definition: "Количество лекарства, которое нужно принять за один раз.",
      example: "The dosage for adults is two tablets three times daily.",
    },
    {
      term: "side effects",
      translation: "побочные эффекты",
      definition: "Нежелательные реакции организма на лекарство.",
      example: "Common side effects include nausea and dizziness.",
    },
    {
      term: "contraindication",
      translation: "противопоказание",
      definition: "Состояние, при котором лекарство нельзя использовать.",
      example: "Pregnancy is a contraindication for this medication.",
    },
    {
      term: "antibiotic",
      translation: "антибиотик",
      definition: "Лекарство для борьбы с бактериальными инфекциями.",
      example: "The doctor prescribed antibiotics for the infection.",
    },
    {
      term: "painkiller / analgesic",
      translation: "обезболивающее",
      definition: "Лекарство для облегчения боли.",
      example: "Take a painkiller if the headache persists.",
    },
    {
      term: "vaccine",
      translation: "вакцина",
      definition: "Препарат для профилактики инфекционных заболеваний.",
      example: "The flu vaccine is recommended for elderly patients.",
    },
    {
      term: "placebo",
      translation: "плацебо",
      definition: "Неактивное вещество, используемое в исследованиях.",
      example: "Half the patients received the drug, the other half received a placebo.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💊</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Medications</h2>
        <p className="text-xl text-gray-600">Лекарства и медикаменты</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {medications.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-rose-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-rose-700 mb-2">{item.term}</h3>
            <p className="text-sm text-rose-600 font-semibold mb-3">{item.translation}</p>
            <p className="text-gray-700 mb-3 text-sm">{item.definition}</p>
            <div className="bg-pink-50 border border-pink-200 rounded p-3">
              <p className="text-gray-800 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚠️</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важно</h3>
            <p className="text-gray-700">
              <strong>Prescription</strong> — рецепт врача (обязателен для сильных лекарств)<br/>
              <strong>Dosage</strong> — сколько принимать<br/>
              <strong>Side effects</strong> — возможные нежелательные реакции<br/>
              <strong>Contraindication</strong> — когда нельзя принимать
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
