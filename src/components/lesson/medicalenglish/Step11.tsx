"use client";

import { useState } from "react";

export default function Step11() {
  const [activeDialogue, setActiveDialogue] = useState(0);

  const dialogues = [
    {
      title: "Taking Medical History",
      icon: "📋",
      situation: "Врач собирает анамнез у нового пациента",
      dialogue: [
        { speaker: "Doctor", text: "Good morning. What brings you in today?" },
        { speaker: "Patient", text: "I've been having severe chest pain for the past two days." },
        { speaker: "Doctor", text: "I see. Can you describe the pain? Is it sharp or dull?" },
        { speaker: "Patient", text: "It's a sharp pain, especially when I breathe deeply." },
        { speaker: "Doctor", text: "Do you have any history of heart disease in your family?" },
        { speaker: "Patient", text: "Yes, my father had a heart attack at age 55." },
        { speaker: "Doctor", text: "I understand. Let me check your vital signs and order some tests." },
      ],
      keyPhrases: [
        "What brings you in today? — Что привело вас сюда?",
        "Can you describe the pain? — Можете описать боль?",
        "Do you have any history of...? — Есть ли у вас история...?",
        "Let me check your vital signs — Позвольте проверить ваши жизненные показатели",
      ],
    },
    {
      title: "Explaining Diagnosis",
      icon: "🩺",
      situation: "Врач объясняет диагноз пациенту",
      dialogue: [
        { speaker: "Doctor", text: "I have your test results. You have type 2 diabetes." },
        { speaker: "Patient", text: "Diabetes? Is it serious?" },
        { speaker: "Doctor", text: "It's a chronic condition, but it's manageable with proper treatment." },
        { speaker: "Patient", text: "What caused it?" },
        { speaker: "Doctor", text: "It's often related to lifestyle factors like diet and exercise, combined with genetic predisposition." },
        { speaker: "Patient", text: "What do I need to do?" },
        { speaker: "Doctor", text: "We'll start you on medication and I'll refer you to a nutritionist for dietary guidance." },
      ],
      keyPhrases: [
        "I have your test results — У меня есть результаты ваших анализов",
        "It's a chronic condition — Это хроническое заболевание",
        "It's manageable with treatment — Это поддаётся лечению",
        "I'll refer you to... — Я направлю вас к...",
      ],
    },
    {
      title: "Prescribing Medication",
      icon: "💊",
      situation: "Врач выписывает рецепт и объясняет дозировку",
      dialogue: [
        { speaker: "Doctor", text: "I'm prescribing antibiotics for your infection." },
        { speaker: "Patient", text: "How should I take them?" },
        { speaker: "Doctor", text: "Take one tablet twice daily with food for seven days." },
        { speaker: "Patient", text: "Are there any side effects I should know about?" },
        { speaker: "Doctor", text: "You may experience mild nausea or dizziness. If symptoms worsen, call me immediately." },
        { speaker: "Patient", text: "What if I miss a dose?" },
        { speaker: "Doctor", text: "Take it as soon as you remember, but don't double up on doses." },
      ],
      keyPhrases: [
        "I'm prescribing... — Я выписываю...",
        "Take one tablet twice daily — Принимайте одну таблетку два раза в день",
        "Are there any side effects? — Есть ли побочные эффекты?",
        "If symptoms worsen — Если симптомы ухудшатся",
      ],
    },
    {
      title: "Emergency Situation",
      icon: "🚨",
      situation: "Пациент поступает в отделение неотложной помощи",
      dialogue: [
        { speaker: "Nurse", text: "What's the emergency?" },
        { speaker: "Patient", text: "I fell and I think I broke my arm. The pain is unbearable." },
        { speaker: "Nurse", text: "When did this happen?" },
        { speaker: "Patient", text: "About 30 minutes ago." },
        { speaker: "Nurse", text: "Are you allergic to any medications?" },
        { speaker: "Patient", text: "No, no allergies." },
        { speaker: "Nurse", text: "Okay, we'll give you pain medication and take you for an X-ray immediately." },
      ],
      keyPhrases: [
        "What's the emergency? — В чём неотложная ситуация?",
        "The pain is unbearable — Боль невыносимая",
        "Are you allergic to...? — У вас аллергия на...?",
        "We'll take you for an X-ray — Мы отправим вас на рентген",
      ],
    },
    {
      title: "Post-Surgery Follow-up",
      icon: "🏥",
      situation: "Врач проверяет состояние пациента после операции",
      dialogue: [
        { speaker: "Doctor", text: "How are you feeling after the surgery?" },
        { speaker: "Patient", text: "Much better, but I still have some pain at the incision site." },
        { speaker: "Doctor", text: "That's normal. The pain should decrease gradually over the next few days." },
        { speaker: "Patient", text: "When can I go home?" },
        { speaker: "Doctor", text: "If your recovery continues well, we can discharge you tomorrow." },
        { speaker: "Patient", text: "What restrictions will I have?" },
        { speaker: "Doctor", text: "No heavy lifting for six weeks, and you'll need to attend physical therapy sessions." },
      ],
      keyPhrases: [
        "How are you feeling? — Как вы себя чувствуете?",
        "That's normal — Это нормально",
        "We can discharge you — Мы можем вас выписать",
        "No heavy lifting — Никаких тяжёлых нагрузок",
      ],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💬</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Patient Communication</h2>
        <p className="text-xl text-gray-600">Общение с пациентами</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Важность коммуникации</h3>
            <p className="text-gray-700">
              Эффективное общение с пациентами — ключевой навык медицинского работника.
              Правильная коммуникация помогает установить доверие, точно собрать анамнез
              и обеспечить понимание диагноза и плана лечения.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-cyan-200 overflow-hidden">
        <div className="flex border-b-2 border-cyan-200 overflow-x-auto">
          {dialogues.map((dialogue, index) => (
            <button
              key={index}
              onClick={() => setActiveDialogue(index)}
              className={`flex-shrink-0 p-4 font-semibold transition-all min-w-[150px] ${
                activeDialogue === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="text-2xl mb-1">{dialogue.icon}</div>
              <div className="text-sm">{dialogue.title}</div>
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-4 border-2 border-cyan-300 mb-6">
            <p className="text-gray-800 font-semibold">
              <span className="text-cyan-700">📍 Ситуация:</span> {dialogues[activeDialogue].situation}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {dialogues[activeDialogue].dialogue.map((line, index) => (
              <div
                key={index}
                className={`flex ${line.speaker === "Doctor" || line.speaker === "Nurse" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    line.speaker === "Doctor" || line.speaker === "Nurse"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="font-bold text-sm mb-1 opacity-90">{line.speaker}</p>
                  <p className="text-base">{line.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border-2 border-amber-300">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔑</span> Ключевые фразы:
            </h4>
            <div className="space-y-2">
              {dialogues[activeDialogue].keyPhrases.map((phrase, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="text-gray-800 text-sm">{phrase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Советы по коммуникации</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">✓ Делайте:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Используйте простой язык</li>
                  <li>• Проявляйте эмпатию</li>
                  <li>• Задавайте открытые вопросы</li>
                  <li>• Проверяйте понимание</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-red-700 mb-2">✗ Избегайте:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Сложной медицинской терминологии</li>
                  <li>• Прерывания пациента</li>
                  <li>• Поспешных выводов</li>
                  <li>• Игнорирования эмоций пациента</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
