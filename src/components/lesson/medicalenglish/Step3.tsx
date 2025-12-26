export default function Step3() {
  const conditions = [
    {
      term: "benign",
      translation: "доброкачественный",
      definition: "Не злокачественный, не раковый; не представляющий угрозы для жизни.",
      example: "The tumor was benign and required no further treatment.",
    },
    {
      term: "malignant",
      translation: "злокачественный",
      definition: "Раковый, способный распространяться на другие части тела; опасный для жизни.",
      example: "The biopsy revealed malignant cells requiring immediate chemotherapy.",
    },
    {
      term: "infectious",
      translation: "инфекционный, заразный",
      definition: "Заболевание, которое может передаваться от одного человека к другому.",
      example: "COVID-19 is a highly infectious respiratory disease.",
    },
    {
      term: "congenital",
      translation: "врождённый",
      definition: "Присутствующий с рождения, но не обязательно наследственный.",
      example: "She was born with a congenital heart defect.",
    },
    {
      term: "hereditary",
      translation: "наследственный",
      definition: "Передающийся генетически от родителей к детям.",
      example: "Hemophilia is a hereditary bleeding disorder.",
    },
    {
      term: "degenerative",
      translation: "дегенеративный",
      definition: "Прогрессирующее ухудшение состояния органа или ткани.",
      example: "Alzheimer's is a degenerative brain disease.",
    },
    {
      term: "remission",
      translation: "ремиссия",
      definition: "Период, когда симптомы болезни уменьшаются или исчезают.",
      example: "The cancer is in remission after successful treatment.",
    },
    {
      term: "relapse",
      translation: "рецидив",
      definition: "Возвращение болезни после периода улучшения.",
      example: "The patient experienced a relapse six months after treatment.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🦠</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Medical Conditions</h2>
        <p className="text-xl text-gray-600">Типы медицинских состояний</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {conditions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-emerald-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-emerald-700 mb-2">{item.term}</h3>
            <p className="text-sm text-emerald-600 font-semibold mb-3">{item.translation}</p>
            <p className="text-gray-700 mb-3 text-sm">{item.definition}</p>
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="text-gray-800 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Ключевые различия</h3>
            <p className="text-gray-700">
              <strong>Benign</strong> (доброкачественный) vs <strong>Malignant</strong> (злокачественный)<br/>
              <strong>Congenital</strong> (врождённый) vs <strong>Hereditary</strong> (наследственный)<br/>
              <strong>Remission</strong> (ремиссия) vs <strong>Relapse</strong> (рецидив)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
