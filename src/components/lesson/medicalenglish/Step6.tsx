export default function Step6() {
  const systems = [
    {
      system: "cardiovascular system",
      translation: "сердечно-сосудистая система",
      definition: "Система органов, обеспечивающая циркуляцию крови по организму.",
      keyOrgans: ["heart", "arteries", "veins", "capillaries"],
      commonConditions: ["hypertension", "coronary artery disease", "heart failure"],
      example: "The cardiovascular system delivers oxygen and nutrients to all body tissues.",
    },
    {
      system: "respiratory system",
      translation: "дыхательная система",
      definition: "Система органов, отвечающая за газообмен (кислород и углекислый газ).",
      keyOrgans: ["lungs", "trachea", "bronchi", "diaphragm"],
      commonConditions: ["asthma", "pneumonia", "COPD"],
      example: "The respiratory system enables oxygen intake and carbon dioxide removal.",
    },
    {
      system: "digestive system",
      translation: "пищеварительная система",
      definition: "Система органов для переваривания пищи и всасывания питательных веществ.",
      keyOrgans: ["stomach", "intestines", "liver", "pancreas"],
      commonConditions: ["gastritis", "ulcer", "irritable bowel syndrome"],
      example: "The digestive system breaks down food into nutrients the body can absorb.",
    },
    {
      system: "nervous system",
      translation: "нервная система",
      definition: "Система, контролирующая все функции организма через нервные импульсы.",
      keyOrgans: ["brain", "spinal cord", "nerves"],
      commonConditions: ["stroke", "Parkinson's disease", "multiple sclerosis"],
      example: "The nervous system coordinates voluntary and involuntary actions.",
    },
    {
      system: "musculoskeletal system",
      translation: "опорно-двигательная система",
      definition: "Система костей, мышц, суставов и связок, обеспечивающая движение и поддержку.",
      keyOrgans: ["bones", "muscles", "joints", "ligaments", "tendons"],
      commonConditions: ["arthritis", "osteoporosis", "fracture"],
      example: "The musculoskeletal system provides structure, support, and movement.",
    },
    {
      system: "endocrine system",
      translation: "эндокринная система",
      definition: "Система желез, вырабатывающих гормоны для регуляции функций организма.",
      keyOrgans: ["thyroid", "pancreas", "adrenal glands", "pituitary gland"],
      commonConditions: ["diabetes", "hypothyroidism", "Cushing's syndrome"],
      example: "The endocrine system regulates metabolism, growth, and reproduction.",
    },
    {
      system: "urinary system",
      translation: "мочевыделительная система",
      definition: "Система для фильтрации крови и выведения отходов в виде мочи.",
      keyOrgans: ["kidneys", "bladder", "ureters", "urethra"],
      commonConditions: ["kidney stones", "urinary tract infection", "kidney failure"],
      example: "The urinary system removes waste products from the bloodstream.",
    },
    {
      system: "immune system",
      translation: "иммунная система",
      definition: "Система защиты организма от инфекций и болезней.",
      keyOrgans: ["white blood cells", "lymph nodes", "spleen", "bone marrow"],
      commonConditions: ["autoimmune disorders", "immunodeficiency", "allergies"],
      example: "The immune system protects the body from harmful pathogens.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🫀</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Body Systems & Anatomy</h2>
        <p className="text-xl text-gray-600">Системы организма и анатомия</p>
      </div>

      <div className="space-y-6">
        {systems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 capitalize">{item.system}</h3>
                <p className="text-indigo-600 font-semibold mt-1">{item.translation}</p>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-2">🔬 Key Organs:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.keyOrgans.map((organ, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {organ}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-bold text-pink-800 mb-2">⚕️ Common Conditions:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.commonConditions.map((condition, i) => (
                    <span
                      key={i}
                      className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-gray-800 italic">
                <span className="text-green-600 font-semibold mr-2">Example:</span>
                {item.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важно помнить</h3>
            <p className="text-gray-700">
              Каждая система организма работает во взаимосвязи с другими системами.<br/>
              Например, <strong>cardiovascular</strong> и <strong>respiratory</strong> системы работают вместе для доставки кислорода.<br/>
              Понимание анатомии критично для медицинской коммуникации.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
