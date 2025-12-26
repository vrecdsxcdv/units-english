export default function Step9() {
  const phraseCategories = [
    {
      category: "Публикации и статьи",
      icon: "📰",
      color: "indigo",
      phrases: [
        {
          phrase: "to break a story",
          translation: "первым опубликовать новость",
          context: "The Times broke the story about the scandal.",
        },
        {
          phrase: "to run a story",
          translation: "опубликовать материал",
          context: "The newspaper decided not to run the story.",
        },
        {
          phrase: "to bury the lead",
          translation: "спрятать главное в середине статьи",
          context: "Don't bury the lead — put the most important news first.",
        },
        {
          phrase: "to spike a story",
          translation: "отклонить / не публиковать статью",
          context: "The editor spiked the story due to lack of evidence.",
        },
        {
          phrase: "to go to print",
          translation: "отправить в печать",
          context: "The article went to print at midnight.",
        },
      ],
    },
    {
      category: "Источники и информация",
      icon: "🔍",
      color: "purple",
      phrases: [
        {
          phrase: "to leak information",
          translation: "слить информацию",
          context: "Someone leaked information about the deal to the press.",
        },
        {
          phrase: "to cite sources",
          translation: "ссылаться на источники",
          context: "Always cite your sources when reporting facts.",
        },
        {
          phrase: "according to sources",
          translation: "по данным источников",
          context: "According to sources close to the matter, negotiations have stalled.",
        },
        {
          phrase: "to verify information",
          translation: "проверить информацию",
          context: "Journalists must verify information before publishing.",
        },
        {
          phrase: "to go on the record",
          translation: "согласиться на официальную цитату",
          context: "The official agreed to go on the record with the statement.",
        },
      ],
    },
    {
      category: "Медиа и освещение",
      icon: "📺",
      color: "blue",
      phrases: [
        {
          phrase: "to make headlines",
          translation: "попасть в заголовки",
          context: "The celebrity's arrest made headlines worldwide.",
        },
        {
          phrase: "to get coverage",
          translation: "получить освещение в СМИ",
          context: "The event got extensive media coverage.",
        },
        {
          phrase: "to dominate the news cycle",
          translation: "доминировать в новостной повестке",
          context: "The scandal dominated the news cycle for weeks.",
        },
        {
          phrase: "to spin a story",
          translation: "подать историю в выгодном свете",
          context: "The PR team tried to spin the story positively.",
        },
        {
          phrase: "to go viral",
          translation: "стать вирусным",
          context: "The video went viral within hours.",
        },
      ],
    },
    {
      category: "Расследования",
      icon: "🕵️",
      color: "green",
      phrases: [
        {
          phrase: "to conduct an investigation",
          translation: "провести расследование",
          context: "The newspaper conducted a months-long investigation.",
        },
        {
          phrase: "to uncover the truth",
          translation: "раскрыть правду",
          context: "Investigative journalists work to uncover the truth.",
        },
        {
          phrase: "to blow the whistle",
          translation: "разоблачить нарушения",
          context: "An employee blew the whistle on the company's fraud.",
        },
        {
          phrase: "to follow the money",
          translation: "следить за деньгами (в расследовании)",
          context: "\"Follow the money\" is classic advice for investigative reporters.",
        },
        {
          phrase: "to dig deeper",
          translation: "копать глубже",
          context: "The reporter decided to dig deeper into the allegations.",
        },
      ],
    },
    {
      category: "Критика и проблемы",
      icon: "⚠️",
      color: "orange",
      phrases: [
        {
          phrase: "to face backlash",
          translation: "столкнуться с негативной реакцией",
          context: "The network faced backlash over biased reporting.",
        },
        {
          phrase: "to issue a retraction",
          translation: "опубликовать опровержение",
          context: "The newspaper issued a retraction after errors were found.",
        },
        {
          phrase: "to take something out of context",
          translation: "вырвать из контекста",
          context: "His words were taken out of context by the media.",
        },
        {
          phrase: "to sensationalize",
          translation: "сенсационализировать",
          context: "Tabloids tend to sensationalize celebrity news.",
        },
        {
          phrase: "to call out fake news",
          translation: "разоблачить фейк",
          context: "Fact-checkers called out the fake news story.",
        },
      ],
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
    indigo: { bg: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", light: "bg-indigo-50" },
    purple: { bg: "bg-purple-500", border: "border-purple-200", text: "text-purple-700", light: "bg-purple-50" },
    blue: { bg: "bg-blue-500", border: "border-blue-200", text: "text-blue-700", light: "bg-blue-50" },
    green: { bg: "bg-green-500", border: "border-green-200", text: "text-green-700", light: "bg-green-50" },
    orange: { bg: "bg-orange-500", border: "border-orange-200", text: "text-orange-700", light: "bg-orange-50" },
  };

  return (
    <div className="space-y-8 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💬</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Media Phrases & Collocations</h2>
        <p className="text-xl text-gray-600">Устойчивые выражения и фразы</p>
      </div>

      <div className="space-y-8">
        {phraseCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border-2 ${colorClasses[category.color].border} p-6`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h3 className={`text-2xl font-bold ${colorClasses[category.color].text}`}>
                {category.category}
              </h3>
            </div>

            <div className="space-y-4">
              {category.phrases.map((item, i) => (
                <div
                  key={i}
                  className={`${colorClasses[category.color].light} rounded-xl p-4 border ${colorClasses[category.color].border}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <p className={`font-bold text-lg ${colorClasses[category.color].text}`}>
                      {item.phrase}
                    </p>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">
                      {item.translation}
                    </span>
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    &quot;{item.context}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Break vs Run a Story</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">To break a story</strong> — быть первым, кто публикует новость (эксклюзив).
              <br />
              <strong className="text-amber-700">To run a story</strong> — опубликовать историю (не обязательно первым).
              <br />
              <span className="text-sm text-gray-600 italic">&quot;The Post broke the story, and other papers ran it the next day.&quot;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
