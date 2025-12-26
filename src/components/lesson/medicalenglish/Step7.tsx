export default function Step7() {
  const professionals = [
    {
      profession: "cardiologist",
      translation: "кардиолог",
      specialty: "Specializes in heart and cardiovascular diseases",
      treats: ["heart attack", "arrhythmia", "heart failure", "hypertension"],
      example: "The cardiologist performed an angioplasty to open the blocked artery.",
    },
    {
      profession: "neurologist",
      translation: "невролог",
      specialty: "Specializes in disorders of the nervous system",
      treats: ["stroke", "epilepsy", "Parkinson's disease", "migraine"],
      example: "The neurologist ordered an MRI to investigate the persistent headaches.",
    },
    {
      profession: "oncologist",
      translation: "онколог",
      specialty: "Specializes in cancer diagnosis and treatment",
      treats: ["breast cancer", "lung cancer", "leukemia", "lymphoma"],
      example: "The oncologist developed a chemotherapy treatment plan for the patient.",
    },
    {
      profession: "pediatrician",
      translation: "педиатр",
      specialty: "Specializes in medical care for children",
      treats: ["childhood illnesses", "vaccinations", "growth disorders", "infections"],
      example: "The pediatrician monitored the child's development during regular check-ups.",
    },
    {
      profession: "psychiatrist",
      translation: "психиатр",
      specialty: "Specializes in mental health disorders and can prescribe medication",
      treats: ["depression", "anxiety", "schizophrenia", "bipolar disorder"],
      example: "The psychiatrist prescribed antidepressants for the patient's severe depression.",
    },
    {
      profession: "surgeon",
      translation: "хирург",
      specialty: "Performs surgical operations to treat diseases or injuries",
      treats: ["appendicitis", "fractures", "tumors", "organ transplants"],
      example: "The surgeon successfully removed the tumor during a five-hour operation.",
    },
    {
      profession: "anesthesiologist",
      translation: "анестезиолог",
      specialty: "Administers anesthesia and monitors patients during surgery",
      treats: ["pain management", "sedation", "perioperative care"],
      example: "The anesthesiologist ensured the patient remained unconscious and pain-free during surgery.",
    },
    {
      profession: "radiologist",
      translation: "рентгенолог/радиолог",
      specialty: "Interprets medical imaging (X-rays, CT scans, MRI)",
      treats: ["diagnostic imaging", "interventional procedures", "cancer detection"],
      example: "The radiologist detected a fracture on the X-ray that wasn't visible to the naked eye.",
    },
    {
      profession: "dermatologist",
      translation: "дерматолог",
      specialty: "Specializes in skin, hair, and nail conditions",
      treats: ["acne", "eczema", "skin cancer", "psoriasis"],
      example: "The dermatologist performed a biopsy to check for melanoma.",
    },
    {
      profession: "orthopedic surgeon",
      translation: "ортопед",
      specialty: "Specializes in musculoskeletal system surgery",
      treats: ["joint replacement", "fractures", "sports injuries", "arthritis"],
      example: "The orthopedic surgeon replaced the patient's damaged knee joint.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👨‍⚕️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Medical Professionals</h2>
        <p className="text-xl text-gray-600">Медицинские специалисты</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {professionals.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-sky-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-sky-700 mb-1">{item.profession}</h3>
            <p className="text-sm text-sky-600 font-semibold mb-3">{item.translation}</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg mb-3">
              <p className="text-gray-700 text-sm">{item.specialty}</p>
            </div>

            <div className="mb-3">
              <h4 className="font-bold text-gray-800 text-sm mb-2">🩺 Treats:</h4>
              <div className="flex flex-wrap gap-1.5">
                {item.treats.map((condition, i) => (
                  <span
                    key={i}
                    className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-2.5">
              <p className="text-gray-800 text-xs italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Полезные различия</h3>
            <p className="text-gray-700">
              <strong>Psychiatrist</strong> (психиатр) — медицинский врач, может выписывать лекарства<br/>
              <strong>Psychologist</strong> (психолог) — специалист по психологии, не выписывает лекарства<br/>
              <strong>Surgeon</strong> (хирург) — оперирует пациентов<br/>
              <strong>Physician</strong> (терапевт) — занимается нехирургическим лечением
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
