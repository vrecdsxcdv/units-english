export default function Step5() {
  const operations = [
    {
      term: "leverage",
      pronunciation: "/ˈliːvərɪdʒ/",
      translation: "использовать, задействовать (ресурсы)",
      definition: "Использовать что-то (ресурсы, технологии, отношения) для достижения максимального эффекта или преимущества.",
      examples: [
        "We can leverage our existing customer base to launch new products.",
        "The company is leveraging AI to improve customer service.",
        "They leveraged their brand reputation to enter new markets.",
      ],
      icon: "🎯",
      usage: "Очень популярный глагол в бизнес-контексте для описания эффективного использования ресурсов.",
    },
    {
      term: "optimize",
      pronunciation: "/ˈɒptɪmaɪz/",
      translation: "оптимизировать",
      definition: "Улучшить что-то настолько, насколько это возможно, чтобы сделать максимально эффективным.",
      examples: [
        "We're optimizing our supply chain to reduce costs.",
        "The team optimized the website for better user experience.",
        "Companies constantly optimize their processes for efficiency.",
      ],
      icon: "⚙️",
      relatedTerms: ["optimization", "optimized", "optimizer"],
    },
    {
      term: "streamline",
      pronunciation: "/ˈstriːmlaɪn/",
      translation: "упростить, рационализировать",
      definition: "Сделать процесс более эффективным, удалив ненужные этапы или сложности.",
      examples: [
        "We need to streamline our approval process.",
        "The new software streamlines project management.",
        "Streamlining operations can significantly reduce costs.",
      ],
      icon: "🚀",
      usage: "Фокус на упрощении и ускорении процессов.",
    },
    {
      term: "scale (up/down)",
      pronunciation: "/skeɪl/",
      translation: "масштабировать (увеличивать/уменьшать)",
      definition: "Увеличивать (scale up) или уменьшать (scale down) размер бизнеса или операций.",
      examples: [
        "The startup is ready to scale up operations globally.",
        "We had to scale down production due to reduced demand.",
        "Cloud services make it easy to scale your infrastructure.",
      ],
      icon: "📊",
      relatedTerms: ["scalable", "scalability", "scaling"],
    },
    {
      term: "outsource",
      pronunciation: "/ˈaʊtsɔːs/",
      translation: "передавать на аутсорсинг",
      definition: "Передавать выполнение определённых функций внешним поставщикам услуг вместо выполнения внутри компании.",
      examples: [
        "Many companies outsource their IT support to India.",
        "We decided to outsource accounting to reduce costs.",
        "Outsourcing allows us to focus on core business activities.",
      ],
      icon: "🌐",
      opposite: "insource (выполнять внутри компании)",
    },
    {
      term: "benchmark",
      pronunciation: "/ˈbentʃmɑːk/",
      translation: "сравнивать с эталоном, оценивать",
      definition: "Сравнивать показатели компании с лучшими практиками в отрасли или с конкурентами.",
      examples: [
        "We benchmark our performance against industry leaders.",
        "The report benchmarks our customer satisfaction scores.",
        "Benchmarking helps identify areas for improvement.",
      ],
      icon: "📏",
      usage: "Как глагол и существительное: to benchmark (сравнивать) и a benchmark (эталон).",
    },
    {
      term: "implement",
      pronunciation: "/ˈɪmplɪment/",
      translation: "внедрять, реализовывать",
      definition: "Вводить в действие план, систему или изменение.",
      examples: [
        "We're implementing a new CRM system next month.",
        "The company implemented strict cost-cutting measures.",
        "It took six months to implement the changes.",
      ],
      icon: "✅",
      relatedTerms: ["implementation", "implemented"],
    },
    {
      term: "delegate",
      pronunciation: "/ˈdelɪɡeɪt/",
      translation: "делегировать, поручать",
      definition: "Передавать задачи или ответственность другим людям.",
      examples: [
        "Good managers know how to delegate effectively.",
        "You need to delegate more tasks to your team.",
        "She delegated the project to her assistant.",
      ],
      icon: "👥",
      usage: "Ключевой навык в менеджменте.",
    },
    {
      term: "automate",
      pronunciation: "/ˈɔːtəmeɪt/",
      translation: "автоматизировать",
      definition: "Заменить ручной труд автоматическими системами или технологиями.",
      examples: [
        "We automated our invoicing process to save time.",
        "The factory automated production lines in 2020.",
        "Automation can reduce human errors significantly.",
      ],
      icon: "🤖",
      relatedTerms: ["automation", "automated", "automating"],
    },
    {
      term: "pivot",
      pronunciation: "/ˈpɪvət/",
      translation: "кардинально изменить направление",
      definition: "Существенно изменить бизнес-стратегию или направление деятельности компании.",
      examples: [
        "The startup pivoted from B2C to B2B model.",
        "Twitter pivoted several times before finding success.",
        "We may need to pivot our strategy if results don't improve.",
      ],
      icon: "🔄",
      usage: "Популярный термин в стартап-культуре.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚙️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Business Operations</h2>
        <p className="text-xl text-gray-600">Операционная лексика и процессы</p>
      </div>

      <div className="space-y-6">
        {operations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-700">{item.term}</h3>
                  <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm text-center max-w-xs">
                {item.translation}
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            {item.usage && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span> Особенности использования:
                </h4>
                <p className="text-gray-700">{item.usage}</p>
              </div>
            )}

            {item.relatedTerms && (
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">🔗</span> Связанные слова:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.relatedTerms.map((term, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 border border-purple-300 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.opposite && (
              <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">↔️</span> Противоположность:
                </h4>
                <p className="text-gray-700">{item.opposite}</p>
              </div>
            )}

            <div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Примеры использования:
              </h4>
              <div className="space-y-2">
                {item.examples.map((example, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-cyan-600 font-semibold mr-2">{i + 1}.</span>
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Ключевая тенденция</h3>
            <p className="text-gray-700 text-lg">
              Современные компании фокусируются на: <strong>optimize</strong> (оптимизация процессов),
              <strong> streamline</strong> (упрощение), <strong>automate</strong> (автоматизация) и
              <strong> leverage</strong> (максимальное использование имеющихся ресурсов).
              <br />
              <span className="text-sm text-gray-600 italic mt-2 block">
                Эти четыре термина — основа современной операционной эффективности.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
