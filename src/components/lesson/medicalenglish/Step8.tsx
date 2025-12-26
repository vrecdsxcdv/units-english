export default function Step8() {
  const patientCare = [
    {
      term: "admission",
      translation: "госпитализация, приём",
      definition: "Процесс поступления пациента в больницу для лечения.",
      example: "The patient was scheduled for admission to the cardiology ward.",
      relatedTerms: ["admit (verb)", "discharge (opposite)"],
    },
    {
      term: "discharge",
      translation: "выписка из больницы",
      definition: "Разрешение пациенту покинуть больницу после завершения лечения.",
      example: "The doctor signed the discharge papers after confirming the patient's recovery.",
      relatedTerms: ["discharge summary", "discharge instructions"],
    },
    {
      term: "rehabilitation",
      translation: "реабилитация",
      definition: "Процесс восстановления функций и навыков после болезни или травмы.",
      example: "Physical rehabilitation helped the stroke patient regain mobility.",
      relatedTerms: ["physical therapy", "occupational therapy", "rehab"],
    },
    {
      term: "hospice care",
      translation: "хосписная помощь",
      definition: "Уход за неизлечимо больными пациентами в конце жизни для обеспечения комфорта.",
      example: "Hospice care focuses on quality of life rather than curative treatment.",
      relatedTerms: ["palliative care", "end-of-life care", "comfort care"],
    },
    {
      term: "intensive care unit (ICU)",
      translation: "отделение реанимации и интенсивной терапии (ОРИТ)",
      definition: "Специализированное отделение для пациентов в критическом состоянии.",
      example: "The patient was transferred to the ICU after the cardiac arrest.",
      relatedTerms: ["critical care", "life support", "ventilator"],
    },
    {
      term: "outpatient",
      translation: "амбулаторный пациент",
      definition: "Пациент, получающий лечение без госпитализации.",
      example: "The procedure can be done on an outpatient basis without overnight stay.",
      relatedTerms: ["outpatient clinic", "day surgery", "ambulatory care"],
    },
    {
      term: "inpatient",
      translation: "стационарный пациент",
      definition: "Пациент, находящийся в больнице на лечении.",
      example: "Inpatient care is necessary for major surgical procedures.",
      relatedTerms: ["hospitalization", "ward", "bed rest"],
    },
    {
      term: "vital signs",
      translation: "жизненные показатели",
      definition: "Основные показатели состояния организма: пульс, давление, температура, дыхание.",
      example: "The nurse checks vital signs every four hours.",
      relatedTerms: ["blood pressure", "pulse", "temperature", "respiration rate"],
    },
    {
      term: "informed consent",
      translation: "информированное согласие",
      definition: "Разрешение пациента на медицинскую процедуру после объяснения рисков и пользы.",
      example: "The surgeon obtained informed consent before the operation.",
      relatedTerms: ["consent form", "patient rights", "medical ethics"],
    },
    {
      term: "medical history",
      translation: "медицинская история, анамнез",
      definition: "Запись всех прошлых заболеваний, операций и лечения пациента.",
      example: "The doctor reviewed the patient's medical history before prescribing medication.",
      relatedTerms: ["patient history", "medical records", "health records"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏥</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Patient Care</h2>
        <p className="text-xl text-gray-600">Уход за пациентами</p>
      </div>

      <div className="space-y-6">
        {patientCare.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-green-700">{item.term}</h3>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <p className="text-gray-800 italic">
                <span className="text-blue-600 font-semibold mr-2">Example:</span>
                {item.example}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-xl">🔗</span> Related terms:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.relatedTerms.map((term, i) => (
                  <span
                    key={i}
                    className="bg-emerald-100 border border-emerald-300 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Ключевые концепции</h3>
            <p className="text-gray-700">
              <strong>Inpatient</strong> vs <strong>Outpatient</strong> — стационар vs амбулаторное лечение<br/>
              <strong>Admission</strong> vs <strong>Discharge</strong> — поступление vs выписка<br/>
              <strong>Hospice</strong> vs <strong>Rehabilitation</strong> — паллиативная помощь vs восстановление<br/>
              <strong>Informed Consent</strong> — обязательное требование для всех медицинских процедур
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
