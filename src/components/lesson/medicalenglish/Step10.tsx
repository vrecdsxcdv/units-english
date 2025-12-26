import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

export default function Step10() {
  const items: FillItem[] = [
    // Diagnosis & Prognosis
    { left: "The doctor made a", right: "of pneumonia.", answers: ["diagnosis", "diagnostic", "diagnose"] },
    { left: "The", right: "for this condition is generally good.", answers: ["prognosis", "diagnosis", "treatment"] },
    { left: "Common", right: "include fever and cough.", answers: ["symptoms", "signs", "conditions"] },
    { left: "This is a", right: "disease requiring lifelong management.", answers: ["chronic", "acute", "terminal"] },
    { left: "The patient presented with", right: "appendicitis.", answers: ["acute", "chronic", "severe"] },

    // Medical Conditions
    { left: "The tumor was found to be", right: "(non-cancerous).", answers: ["benign", "malignant", "cancerous"] },
    { left: "A", right: "tumor requires immediate treatment.", answers: ["malignant", "benign", "harmless"] },
    { left: "The disease is", right: ", spreading from person to person.", answers: ["infectious", "contagious", "spreading"] },
    { left: "Sickle cell disease is a", right: "disorder.", answers: ["hereditary", "acquired", "infectious"] },

    // Treatments & Procedures
    { left: "The patient underwent heart", right: ".", answers: ["surgery", "operation", "procedure"] },
    { left: "She completed six rounds of", right: "for cancer.", answers: ["chemotherapy", "therapy", "treatment"] },
    { left: "The patient is waiting for a kidney", right: ".", answers: ["transplant", "replacement", "transfer"] },
    { left: "The doctor ordered a", right: "to test the tissue.", answers: ["biopsy", "test", "sample"] },

    // Medications
    { left: "You need a", right: "to buy antibiotics.", answers: ["prescription", "recipe", "order"] },
    { left: "The", right: "for adults is two tablets daily.", answers: ["dosage", "dose", "amount"] },
    { left: "Common", right: "include nausea and dizziness.", answers: ["side effects", "effects", "reactions"] },
    { left: "The doctor prescribed", right: "for the infection.", answers: ["antibiotics", "antibiotic", "medicine"] },

    // Body Systems
    { left: "The", right: "delivers oxygen to all tissues.", answers: ["cardiovascular system", "heart system", "blood system"] },
    { left: "The", right: "enables oxygen intake.", answers: ["respiratory system", "breathing system", "lung system"] },
    { left: "The", right: "breaks down food.", answers: ["digestive system", "stomach system", "eating system"] },
    { left: "The", right: "controls all body functions.", answers: ["nervous system", "brain system", "nerve system"] },

    // Medical Professionals
    { left: "A", right: "specializes in heart diseases.", answers: ["cardiologist", "heart doctor", "cardiac specialist"] },
    { left: "A", right: "treats cancer patients.", answers: ["oncologist", "cancer doctor", "tumor specialist"] },
    { left: "A", right: "performs surgical operations.", answers: ["surgeon", "surgical doctor", "operator"] },
    { left: "A", right: "interprets X-rays and scans.", answers: ["radiologist", "X-ray doctor", "scan specialist"] },

    // Patient Care
    { left: "The patient was scheduled for", right: "to the hospital.", answers: ["admission", "entry", "hospitalization"] },
    { left: "Physical", right: "helped the patient regain mobility.", answers: ["rehabilitation", "therapy", "recovery"] },
    { left: "The patient was transferred to the", right: "(ICU).", answers: ["intensive care unit", "critical care", "emergency room"] },
    { left: "The nurse checks", right: "every four hours.", answers: ["vital signs", "vitals", "health signs"] },

    // Abbreviations
    { left: "BP stands for Blood", right: ".", answers: ["Pressure", "Rate", "Level"] },
    { left: "ECG is an", right: ".", answers: ["Electrocardiogram", "Heart test", "Cardio exam"] },
    { left: "Take medication", right: "(by mouth) twice daily.", answers: ["PO", "IV", "IM"] },
    { left: "BID means", right: "a day.", answers: ["twice", "three times", "once"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Practice Test</h2>
        <p className="text-xl text-gray-600">Проверка знаний терминологии</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Что мы изучили</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🩺 Diagnosis & Prognosis</p>
                <p className="text-sm text-gray-600">Диагностика и прогнозирование</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🦠 Medical Conditions</p>
                <p className="text-sm text-gray-600">Типы заболеваний и состояний</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">💉 Treatments & Procedures</p>
                <p className="text-sm text-gray-600">Методы лечения и процедуры</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">💊 Medications</p>
                <p className="text-sm text-gray-600">Лекарства и медикаменты</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🫀 Body Systems</p>
                <p className="text-sm text-gray-600">Системы организма и анатомия</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">👨‍⚕️ Medical Professionals</p>
                <p className="text-sm text-gray-600">Медицинские специалисты</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🏥 Patient Care</p>
                <p className="text-sm text-gray-600">Уход за пациентами</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">📝 Medical Abbreviations</p>
                <p className="text-sm text-gray-600">Медицинские сокращения</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-indigo-200 p-8">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 border-2 border-indigo-300 mb-6">
          <p className="text-center text-gray-700 font-semibold">
            <span className="text-indigo-700 text-xl">📝</span> Комплексный тест на все темы Medical English
          </p>
        </div>

        <CheckableExercise items={items} />
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">✅</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Отличная работа!</h3>
            <p className="text-gray-700 text-lg">
              Вы успешно освоили основную медицинскую терминологию! Впереди вас ждут практические
              занятия по общению с пациентами и разбор реальных медицинских случаев.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">➡️</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Что дальше?</h3>
            <p className="text-gray-700">
              В следующих шагах вы изучите:
            </p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">💬</span>
                <strong>Patient Communication</strong> — диалоги с пациентами
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📋</span>
                <strong>Medical Case Studies</strong> — разбор реальных случаев
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
