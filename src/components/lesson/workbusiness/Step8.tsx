export default function Step8() {
  const emailStructure = [
    {
      part: "Subject Line",
      translation: "Тема письма",
      icon: "📌",
      tips: [
        "Будьте конкретны и кратки",
        "Укажите действие, если требуется: 'Action Required: ...'",
        "Используйте ключевые слова: Meeting, Update, Request, Reminder",
      ],
      examples: [
        "Q4 Budget Review - Meeting Tomorrow at 2 PM",
        "Action Required: Approve Marketing Budget by Friday",
        "Follow-up: Client Meeting on March 15",
        "Reminder: Project Deadline Approaching",
      ],
    },
    {
      part: "Greeting",
      translation: "Приветствие",
      icon: "👋",
      formal: [
        "Dear Mr./Ms. [Last Name],",
        "Dear Sir/Madam, (если имя неизвестно)",
        "Dear Hiring Manager,",
      ],
      neutral: [
        "Hello [First Name],",
        "Hi [First Name],",
        "Good morning/afternoon [First Name],",
      ],
      tip: "Используйте 'Dear' для формальных писем, 'Hi/Hello' для менее формальных.",
    },
    {
      part: "Opening",
      translation: "Вступление",
      icon: "🎯",
      purposes: [
        {
          purpose: "Ссылка на предыдущую коммуникацию",
          examples: [
            "Thank you for your email regarding...",
            "Further to our conversation yesterday...",
            "Following up on our meeting last week...",
          ],
        },
        {
          purpose: "Представление себя (первый контакт)",
          examples: [
            "I'm writing to introduce myself...",
            "My name is [Name] and I'm the [Position] at [Company]...",
            "I was given your contact by [Name]...",
          ],
        },
        {
          purpose: "Сообщение цели письма",
          examples: [
            "I'm writing to inquire about...",
            "I'm reaching out to request...",
            "The purpose of this email is to...",
          ],
        },
      ],
    },
    {
      part: "Body",
      translation: "Основная часть",
      icon: "📝",
      tips: [
        "Используйте короткие параграфы (2-3 предложения)",
        "Один параграф = одна идея",
        "Используйте bullet points для списков",
        "Будьте конкретны и по делу",
      ],
      usefulPhrases: [
        "I would like to inform you that...",
        "Please find attached...",
        "I am pleased to announce...",
        "I would appreciate it if you could...",
        "Could you please provide...",
      ],
    },
    {
      part: "Closing",
      translation: "Заключение",
      icon: "🎬",
      callToAction: [
        "Please let me know if you need any further information.",
        "I look forward to hearing from you.",
        "Please confirm receipt of this email.",
        "Could you please respond by [date]?",
      ],
      formal: [
        "Best regards,",
        "Sincerely,",
        "Kind regards,",
      ],
      neutral: [
        "Best,",
        "Thanks,",
        "Regards,",
      ],
    },
  ];

  const emailTypes = [
    {
      type: "Request Email",
      translation: "Письмо-запрос",
      icon: "🙏",
      keyPhrases: [
        "I am writing to request...",
        "Would it be possible to...?",
        "I would appreciate it if you could...",
        "Could you please send me...?",
      ],
      example: `Subject: Request for Q3 Sales Data

Dear Ms. Johnson,

I am writing to request the Q3 sales data for our upcoming board meeting.

Could you please send me the following:
• Regional sales breakdown
• Product category performance
• Year-over-year comparison

I would appreciate it if you could provide this information by Friday, March 10.

Thank you for your assistance.

Best regards,
John Smith`,
    },
    {
      type: "Follow-up Email",
      translation: "Напоминание",
      icon: "🔔",
      keyPhrases: [
        "I'm following up on...",
        "Just wanted to check if...",
        "I wanted to remind you about...",
        "Have you had a chance to...?",
      ],
      example: `Subject: Follow-up: Marketing Proposal Review

Hi Sarah,

I wanted to follow up on the marketing proposal I sent last week.

Have you had a chance to review it? I'd be happy to discuss any questions or concerns you might have.

Please let me know if you need any additional information.

Thanks,
Mike`,
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✉️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Email & Business Correspondence</h2>
        <p className="text-xl text-gray-600">Деловая переписка по электронной почте</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">📊</span> Структура делового email
        </h3>

        <div className="space-y-6">
          {emailStructure.map((section, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-blue-200 p-5">
              <h4 className="font-bold text-lg text-blue-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">{section.icon}</span>
                {section.part} ({section.translation})
              </h4>

              {section.tips && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-blue-800 mb-2">💡 Советы:</p>
                  <ul className="space-y-1">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="text-gray-700 text-sm">
                        <span className="text-blue-600 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.examples && (
                <div className="space-y-2">
                  <p className="font-semibold text-gray-700 mb-2">Примеры:</p>
                  {section.examples.map((ex, i) => (
                    <div key={i} className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      {ex}
                    </div>
                  ))}
                </div>
              )}

              {section.formal && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Формальные:</p>
                    {section.formal.map((item, i) => (
                      <div key={i} className="bg-purple-50 border border-purple-200 rounded p-2 text-sm mb-2">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Нейтральные:</p>
                    {section.neutral?.map((item, i) => (
                      <div key={i} className="bg-cyan-50 border border-cyan-200 rounded p-2 text-sm mb-2">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.tip && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-amber-700">Совет:</span> {section.tip}
                  </p>
                </div>
              )}

              {section.purposes && (
                <div className="space-y-3">
                  {section.purposes.map((p, i) => (
                    <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                      <p className="font-semibold text-indigo-800 mb-2">{p.purpose}:</p>
                      {p.examples.map((ex, j) => (
                        <div key={j} className="bg-white border border-indigo-100 rounded p-2 text-sm mb-2">
                          {ex}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {section.usefulPhrases && (
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Полезные фразы:</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {section.usefulPhrases.map((phrase, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded p-2 text-sm">
                        {phrase}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.callToAction && (
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Call to Action:</p>
                  <div className="space-y-2">
                    {section.callToAction.map((cta, i) => (
                      <div key={i} className="bg-orange-50 border border-orange-200 rounded p-2 text-sm">
                        {cta}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
        <h3 className="font-bold text-xl text-purple-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">📧</span> Типы деловых писем
        </h3>

        <div className="space-y-6">
          {emailTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-purple-200 p-5">
              <h4 className="font-bold text-lg text-purple-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">{type.icon}</span>
                {type.type} ({type.translation})
              </h4>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-purple-800 mb-2">Ключевые фразы:</p>
                <div className="space-y-2">
                  {type.keyPhrases.map((phrase, i) => (
                    <div key={i} className="bg-white border border-purple-100 rounded p-2 text-sm">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                <p className="font-semibold text-gray-700 mb-3">Пример:</p>
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono bg-white p-4 rounded border border-gray-200">
                  {type.example}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-5xl">✅</span>
          </div>
          <h3 className="font-bold text-xl text-green-800 mb-3 text-center">Email Etiquette</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Отвечайте в течение 24 часов</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Используйте professional email signature</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Проверьте орфографию перед отправкой</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Используйте CC и BCC правильно</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Добавляйте вложения перед отправкой</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-5xl">❌</span>
          </div>
          <h3 className="font-bold text-xl text-red-800 mb-3 text-center">Избегайте</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>ALL CAPS (выглядит как крик)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Слишком много восклицательных знаков!!!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Неформальный язык (gonna, wanna, u)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Отправка без темы письма</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Reply All без необходимости</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Правило 3C</h3>
            <p className="text-gray-700 text-lg">
              Хороший деловой email должен быть:
              <br />
              <strong className="text-amber-700">Clear</strong> (ясным) — легко понять суть
              <br />
              <strong className="text-amber-700">Concise</strong> (кратким) — без лишних слов
              <br />
              <strong className="text-amber-700">Courteous</strong> (вежливым) — уважительный тон
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
