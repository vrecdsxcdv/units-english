export default function Step4() {
  const treatments = [
    {
      term: "surgery",
      translation: "хирургическая операция",
      definition: "Медицинская процедура, включающая разрез тканей для лечения болезни или травмы.",
      example: "He underwent heart surgery to repair a blocked artery.",
    },
    {
      term: "chemotherapy",
      translation: "химиотерапия",
      definition: "Лечение рака с помощью химических препаратов.",
      example: "She completed six rounds of chemotherapy for breast cancer.",
    },
    {
      term: "radiation therapy",
      translation: "лучевая терапия",
      definition: "Использование радиации для уничтожения раковых клеток.",
      example: "Radiation therapy is often combined with surgery for cancer treatment.",
    },
    {
      term: "transplant",
      translation: "трансплантация",
      definition: "Хирургическая процедура по замене больного органа здоровым.",
      example: "The patient is waiting for a kidney transplant.",
    },
    {
      term: "dialysis",
      translation: "диализ",
      definition: "Процедура очищения крови при почечной недостаточности.",
      example: "Patients with kidney failure require regular dialysis sessions.",
    },
    {
      term: "physical therapy",
      translation: "физиотерапия",
      definition: "Лечебные упражнения для восстановления движения и функций.",
      example: "Physical therapy helped him regain mobility after the accident.",
    },
    {
      term: "immunotherapy",
      translation: "иммунотерапия",
      definition: "Лечение, стимулирующее иммунную систему для борьбы с болезнью.",
      example: "Immunotherapy has shown promising results in treating certain cancers.",
    },
    {
      term: "biopsy",
      translation: "биопсия",
      definition: "Процедура взятия образца ткани для исследования.",
      example: "The doctor ordered a biopsy to determine if the lump was cancerous.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💉</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Treatments & Procedures</h2>
        <p className="text-xl text-gray-600">Методы лечения и процедуры</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {treatments.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-violet-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-violet-700 mb-2">{item.term}</h3>
            <p className="text-sm text-violet-600 font-semibold mb-3">{item.translation}</p>
            <p className="text-gray-700 mb-3 text-sm">{item.definition}</p>
            <div className="bg-purple-50 border border-purple-200 rounded p-3">
              <p className="text-gray-800 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Виды лечения</h3>
            <p className="text-gray-700">
              <strong>Surgery</strong> — хирургическое вмешательство<br/>
              <strong>Chemotherapy/Radiation</strong> — лечение рака<br/>
              <strong>Transplant</strong> — замена органа<br/>
              <strong>Physical therapy</strong> — восстановление функций
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
