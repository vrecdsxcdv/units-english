export default function Step7() {
  const meetingPhrases = [
    {
      category: "Начало встречи",
      icon: "🎬",
      color: "blue",
      phrases: [
        {
          phrase: "Let's get started / Let's begin",
          translation: "Давайте начнём",
          context: "Формальное начало встречи",
        },
        {
          phrase: "Thank you all for coming / joining",
          translation: "Спасибо всем за то, что пришли / присоединились",
          context: "Благодарность участникам",
        },
        {
          phrase: "The purpose/goal of this meeting is to...",
          translation: "Цель этой встречи — ...",
          context: "Объявление цели",
        },
        {
          phrase: "Let's go over the agenda",
          translation: "Давайте пройдёмся по повестке дня",
          context: "Обзор плана встречи",
        },
      ],
    },
    {
      category: "Высказывание мнения",
      icon: "💭",
      color: "green",
      phrases: [
        {
          phrase: "In my opinion / From my perspective",
          translation: "По моему мнению / С моей точки зрения",
          context: "Выражение личного мнения",
        },
        {
          phrase: "I'd like to suggest / propose that...",
          translation: "Я хотел бы предложить, чтобы...",
          context: "Внесение предложения",
        },
        {
          phrase: "I strongly believe that...",
          translation: "Я твёрдо убеждён, что...",
          context: "Выражение сильной уверенности",
        },
        {
          phrase: "It seems to me that...",
          translation: "Мне кажется, что...",
          context: "Мягкое выражение мнения",
        },
      ],
    },
    {
      category: "Согласие и несогласие",
      icon: "✅",
      color: "purple",
      phrases: [
        {
          phrase: "I completely agree with...",
          translation: "Я полностью согласен с...",
          context: "Полное согласие",
        },
        {
          phrase: "That's a good point",
          translation: "Это хороший момент / замечание",
          context: "Признание ценности идеи",
        },
        {
          phrase: "I see your point, but / however...",
          translation: "Я понимаю вашу точку зрения, но...",
          context: "Вежливое несогласие",
        },
        {
          phrase: "I'm afraid I have to disagree",
          translation: "Боюсь, я должен не согласиться",
          context: "Формальное несогласие",
        },
      ],
    },
    {
      category: "Прерывание и уточнение",
      icon: "🤚",
      color: "orange",
      phrases: [
        {
          phrase: "Sorry to interrupt, but...",
          translation: "Извините, что перебиваю, но...",
          context: "Вежливое прерывание",
        },
        {
          phrase: "Could you clarify what you mean by...?",
          translation: "Могли бы вы уточнить, что вы имеете в виду под...?",
          context: "Просьба о пояснении",
        },
        {
          phrase: "Just to clarify...",
          translation: "Просто чтобы уточнить...",
          context: "Внесение ясности",
        },
        {
          phrase: "If I understand correctly...",
          translation: "Если я правильно понимаю...",
          context: "Проверка понимания",
        },
      ],
    },
    {
      category: "Завершение встречи",
      icon: "🏁",
      color: "indigo",
      phrases: [
        {
          phrase: "Let's wrap up / Let's summarize",
          translation: "Давайте подведём итоги",
          context: "Начало завершения",
        },
        {
          phrase: "To sum up, we've decided to...",
          translation: "Подводя итог, мы решили...",
          context: "Резюмирование решений",
        },
        {
          phrase: "The next steps are...",
          translation: "Следующие шаги — это...",
          context: "План действий",
        },
        {
          phrase: "Thank you for your time",
          translation: "Спасибо за ваше время",
          context: "Благодарность в конце",
        },
      ],
    },
  ];

  const presentationPhrases = [
    {
      category: "Введение",
      icon: "🎤",
      phrases: [
        "Good morning/afternoon everyone. Today I'm going to talk about...",
        "I'd like to welcome you all to this presentation on...",
        "The purpose of my presentation is to...",
        "I've divided my presentation into three parts...",
      ],
    },
    {
      category: "Переходы",
      icon: "➡️",
      phrases: [
        "Moving on to the next point...",
        "Let's turn our attention to...",
        "Now I'd like to focus on...",
        "This brings me to my next point...",
      ],
    },
    {
      category: "Данные и графики",
      icon: "📊",
      phrases: [
        "As you can see from this chart/graph...",
        "This data shows/indicates that...",
        "According to our research...",
        "The figures reveal a significant increase/decrease in...",
      ],
    },
    {
      category: "Заключение",
      icon: "🎯",
      phrases: [
        "To conclude / In conclusion...",
        "Let me summarize the key points...",
        "In summary, we've seen that...",
        "Thank you for your attention. Are there any questions?",
      ],
    },
  ];

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700" },
    green: { border: "border-green-200", bg: "bg-green-50", text: "text-green-700" },
    purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700" },
    orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700" },
    indigo: { border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-700" },
  };

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎤</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Meetings & Presentations</h2>
        <p className="text-xl text-gray-600">Язык встреч и презентаций</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">💼</span> Meeting Language
        </h3>
        <p className="text-gray-700 mb-6">
          Эффективное участие во встречах требует знания устойчивых фраз для начала, выражения мнения,
          согласия/несогласия и завершения обсуждения.
        </p>

        <div className="space-y-6">
          {meetingPhrases.map((section, index) => {
            const colors = colorClasses[section.color];
            return (
              <div key={index} className={`bg-white rounded-xl border-2 ${colors.border} p-5`}>
                <h4 className={`font-bold text-lg ${colors.text} mb-4 flex items-center gap-2`}>
                  <span className="text-2xl">{section.icon}</span>
                  {section.category}
                </h4>
                <div className="space-y-3">
                  {section.phrases.map((item, i) => (
                    <div key={i} className={`${colors.bg} border ${colors.border} rounded-lg p-4`}>
                      <p className="font-semibold text-gray-800 mb-1">{item.phrase}</p>
                      <p className="text-sm text-gray-600 italic mb-2">→ {item.translation}</p>
                      <p className="text-xs text-gray-500 bg-white rounded px-2 py-1 inline-block">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
        <h3 className="font-bold text-xl text-purple-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">📊</span> Presentation Language
        </h3>
        <p className="text-gray-700 mb-6">
          Структурированные фразы для проведения профессиональных презентаций.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {presentationPhrases.map((section, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-purple-200 p-5">
              <h4 className="font-bold text-lg text-purple-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">{section.icon}</span>
                {section.category}
              </h4>
              <ul className="space-y-2">
                {section.phrases.map((phrase, i) => (
                  <li key={i} className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                    <span className="text-purple-600 font-semibold mr-2">•</span>
                    {phrase}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-5xl">✅</span>
          </div>
          <h3 className="font-bold text-xl text-green-800 mb-3 text-center">Do's (Что делать)</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Speak clearly and at a moderate pace</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Make eye contact with participants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Use visual aids effectively</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Allow time for questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Prepare and practice beforehand</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-5xl">❌</span>
          </div>
          <h3 className="font-bold text-xl text-red-800 mb-3 text-center">Don'ts (Чего не делать)</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Read directly from slides</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Speak too fast or use jargon excessively</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Go over the allocated time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Ignore audience questions or feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Apologize for lack of preparation</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Золотое правило</h3>
            <p className="text-gray-700 text-lg">
              <strong>Структура встречи:</strong> Opening → Agenda → Discussion → Action Items → Closing
              <br />
              <strong>Структура презентации:</strong> Introduction → Main Points (2-3) → Conclusion → Q&A
              <br />
              <span className="text-sm text-gray-600 italic mt-2 block">
                Всегда объявляйте структуру в начале и придерживайтесь её!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
