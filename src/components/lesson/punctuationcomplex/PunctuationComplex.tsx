"use client";

import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function PunctuationComplex({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="text-8xl mb-6 animate-pulse">📝✨</div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Пунктуация в сложных предложениях
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Мастерство двоеточий, точек с запятой и тире для изощрённого письма
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">🎯 Зачем нужна сложная пунктуация?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              На уровне C1-C2 простых точек и запятых недостаточно. Чтобы ваше письмо звучало изощрённо и профессионально,
              вам нужно освоить три мощных инструмента пунктуации:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border-2 border-blue-300">
                <div className="text-4xl mb-3 text-center">:</div>
                <p className="font-bold text-blue-700 text-center mb-2">COLON (двоеточие)</p>
                <p className="text-sm text-gray-600 text-center">Вводит объяснения, списки и примеры</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-300">
                <div className="text-4xl mb-3 text-center">;</div>
                <p className="font-bold text-purple-700 text-center mb-2">SEMICOLON (точка с запятой)</p>
                <p className="text-sm text-gray-600 text-center">Соединяет связанные независимые предложения</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-5 rounded-lg border-2 border-pink-300">
                <div className="text-4xl mb-3 text-center">—</div>
                <p className="font-bold text-pink-700 text-center mb-2">DASH (тире)</p>
                <p className="text-sm text-gray-600 text-center">Добавляет акцент, пояснения или прерывания</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Почему это важно для C1-C2?</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-bold text-indigo-700">Изощрённость</p>
                  <p className="text-sm text-gray-600">Показывает продвинутое владение письменным английским</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-bold text-indigo-700">Точность</p>
                  <p className="text-sm text-gray-600">Передаёт точные оттенки значения и отношения между идеями</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-bold text-indigo-700">Академическое письмо</p>
                  <p className="text-sm text-gray-600">Необходимо для эссе, исследований и формальной переписки</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-bold text-indigo-700">Стилистическая вариативность</p>
                  <p className="text-sm text-gray-600">Позволяет создавать более разнообразные структуры предложений</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Краткое сравнение</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-700 mb-1">Colon (:)</p>
                <p className="text-gray-700 text-sm mb-2">There's one thing I need: time.</p>
                <p className="text-xs text-gray-500 italic">Предвосхищение — вводит что-то конкретное</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-700 mb-1">Semicolon (;)</p>
                <p className="text-gray-700 text-sm mb-2">I love reading; it relaxes me.</p>
                <p className="text-xs text-gray-500 italic">Связь — соединяет две связанные мысли</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-bold text-pink-700 mb-1">Dash (—)</p>
                <p className="text-gray-700 text-sm mb-2">The solution — if there is one — must be found soon.</p>
                <p className="text-xs text-gray-500 italic">Акцент — выделяет дополнительную информацию</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Совет профессионала</h3>
        <p className="text-gray-700 leading-relaxed">
          Эти знаки пунктуации — как специи в готовке: используйте их экономно, но стратегически.
          Слишком много тире или точек с запятой могут сделать текст перегруженным, но правильное использование
          добавит вашему письму элегантности и ясности.
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">:</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">COLON — Двоеточие</h2>
        <p className="text-lg text-gray-600">Введение и предвосхищение</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">Что делает двоеточие?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg text-gray-700 mb-4">
              Двоеточие говорит читателю: <span className="font-bold text-blue-700">"Обратите внимание — сейчас я объясню/покажу/перечислю"</span>.
              Оно создаёт ожидание и затем выполняет обещание.
            </p>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Основное правило:</p>
              <p className="text-gray-800">Перед двоеточием должно быть <span className="font-bold text-blue-700">полное независимое предложение</span> (может стоять само по себе).</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-800">Использование 1: Введение списка</h4>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">✅ We need three things<span className="text-blue-700 text-xl">:</span> patience, courage, and determination.</p>
                <p className="text-sm text-gray-600 italic">Полное предложение перед двоеточием</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">✅ The requirements are as follows<span className="text-blue-700 text-xl">:</span> a valid passport, two references, and proof of address.</p>
                <p className="text-sm text-gray-600 italic">"As follows" часто предшествует двоеточию</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-gray-800 mb-1">❌ We need: patience, courage, and determination.</p>
                <p className="text-sm text-gray-600 italic">Неполное предложение — не используйте двоеточие</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-gray-800 mb-1">❌ The ingredients are: flour, eggs, and sugar.</p>
                <p className="text-sm text-gray-600 italic">Не используйте двоеточие после "are", "is", "were"</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Использование 2: Объяснение или расширение</h4>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The situation is serious<span className="text-blue-700 text-xl">:</span> we're running out of time.</p>
                <p className="text-sm text-gray-600 italic">Вторая часть объясняет первую</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">There's one thing I need<span className="text-blue-700 text-xl">:</span> your support.</p>
                <p className="text-sm text-gray-600 italic">Двоеточие вводит конкретную информацию</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">She made a decision<span className="text-blue-700 text-xl">:</span> she would never return.</p>
                <p className="text-sm text-gray-600 italic">Вторая часть уточняет решение</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The evidence is clear<span className="text-blue-700 text-xl">:</span> climate change is accelerating.</p>
                <p className="text-sm text-gray-600 italic">Двоеточие вводит доказательство</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Использование 3: Введение цитаты</h4>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">Shakespeare wrote<span className="text-blue-700 text-xl">:</span> "To be or not to be, that is the question."</p>
                <p className="text-sm text-gray-600 italic">Формальное введение цитаты</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The sign read<span className="text-blue-700 text-xl">:</span> "No entry beyond this point."</p>
                <p className="text-sm text-gray-600 italic">Вводит точные слова</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-800">Использование 4: Соотношение и время</h4>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-1">The ratio is 3<span className="text-blue-700 text-xl">:</span>1</p>
                <p className="text-sm text-gray-600 italic">Соотношение</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-1">The meeting starts at 14<span className="text-blue-700 text-xl">:</span>30</p>
                <p className="text-sm text-gray-600 italic">Время (часы:минуты)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-1">Genesis 1<span className="text-blue-700 text-xl">:</span>1</p>
                <p className="text-sm text-gray-600 italic">Библейские ссылки (глава:стих)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-2 border-red-300">
        <h3 className="font-bold text-lg mb-4 text-red-900">❌ Распространённые ошибки</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ My favourite colours are: blue, green, and purple.</p>
            <p className="font-bold text-green-700 mb-1">✅ My favourite colours are blue, green, and purple.</p>
            <p className="text-sm text-gray-600">Не используйте двоеточие после "are"</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ She enjoys: reading, writing, and painting.</p>
            <p className="font-bold text-green-700 mb-1">✅ She enjoys three activities: reading, writing, and painting.</p>
            <p className="text-sm text-gray-600">Перед двоеточием должно быть полное предложение</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "I have one simple request",
      right: "please be on time.",
    },
    {
      left: "The recipe calls for the following ingredients",
      right: "flour, sugar, eggs, and butter.",
    },
    {
      left: "There's only one solution",
      right: "we must work together.",
    },
    {
      left: "She made her position clear",
      right: "she would not compromise.",
    },
    {
      left: "The report highlighted three problems",
      right: "poor communication, lack of resources, and inadequate training.",
    },
    {
      left: "The conclusion is obvious",
      right: "we need more data.",
    },
    {
      left: "He had a simple philosophy",
      right: "treat others as you wish to be treated.",
    },
    {
      left: "The study revealed an interesting fact",
      right: "most people prefer remote work.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">:</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Практика: Двоеточие</h2>
        <p className="text-lg text-gray-600">Вставьте двоеточие в правильное место</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-blue-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Перед двоеточием должно быть полное независимое предложение</p>
          <p className="text-gray-700">• Двоеточие вводит объяснение, список или конкретную информацию</p>
          <p className="text-gray-700">• Вводите только символ <span className="font-mono bg-gray-100 px-2 py-1 rounded">:</span></p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">;</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">SEMICOLON — Точка с запятой</h2>
        <p className="text-lg text-gray-600">Соединение связанных идей</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">Что делает точка с запятой?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg text-gray-700 mb-4">
              Точка с запятой — это <span className="font-bold text-purple-700">"средний уровень"</span> между точкой и запятой.
              Она сильнее запятой, но мягче точки. Используйте её для соединения двух тесно связанных независимых предложений.
            </p>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
              <p className="font-bold text-purple-800 mb-2">Основное правило:</p>
              <p className="text-gray-800">Обе части (до и после точки с запятой) должны быть <span className="font-bold text-purple-700">полными независимыми предложениями</span>.</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Использование 1: Соединение связанных идей</h4>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">I love reading<span className="text-purple-700 text-xl">;</span> it relaxes me.</p>
                <p className="text-sm text-gray-600 italic">Две связанные мысли о чтении</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The project failed<span className="text-purple-700 text-xl">;</span> we learned valuable lessons.</p>
                <p className="text-sm text-gray-600 italic">Контраст, но тесно связаны</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">She studied hard<span className="text-purple-700 text-xl">;</span> her efforts paid off.</p>
                <p className="text-sm text-gray-600 italic">Причина и следствие</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">Winter is coming<span className="text-purple-700 text-xl">;</span> we should prepare.</p>
                <p className="text-sm text-gray-600 italic">Ситуация и логический вывод</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">💡 Тест независимости:</p>
              <p className="text-sm text-gray-700">Если обе части могут стоять как отдельные предложения с точкой — вы можете использовать точку с запятой!</p>
              <p className="text-sm text-green-700 mt-2">✅ I love reading. It relaxes me. → I love reading; it relaxes me.</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Использование 2: С союзными наречиями</h4>

            <p className="text-gray-700 mb-4">Точка с запятой часто используется перед <span className="font-bold">союзными наречиями</span> (however, therefore, moreover, nevertheless и т.д.):</p>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The plan sounds good<span className="text-purple-700 text-xl">;</span> however, it's too expensive.</p>
                <p className="text-sm text-gray-600 italic">; + however + ,</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">We missed the deadline<span className="text-purple-700 text-xl">;</span> therefore, we lost the contract.</p>
                <p className="text-sm text-gray-600 italic">; + therefore + ,</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The weather was terrible<span className="text-purple-700 text-xl">;</span> nevertheless, the event was a success.</p>
                <p className="text-sm text-gray-600 italic">; + nevertheless + ,</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The book is excellent<span className="text-purple-700 text-xl">;</span> moreover, it's affordable.</p>
                <p className="text-sm text-gray-600 italic">; + moreover + ,</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Популярные союзные наречия:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <p>• however</p>
                <p>• therefore</p>
                <p>• moreover</p>
                <p>• nevertheless</p>
                <p>• furthermore</p>
                <p>• consequently</p>
                <p>• meanwhile</p>
                <p>• otherwise</p>
                <p>• thus</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-800">Использование 3: Сложные списки</h4>

            <p className="text-gray-700 mb-4">Когда элементы списка сами содержат запятые, используйте точки с запятой для разделения:</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The conference had attendees from Paris, France<span className="text-purple-700 text-xl">;</span> Berlin, Germany<span className="text-purple-700 text-xl">;</span> and Rome, Italy.</p>
                <p className="text-sm text-gray-600 italic">Точки с запятой разделяют города-страны</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">The team includes Sarah, the designer<span className="text-purple-700 text-xl">;</span> John, the developer<span className="text-purple-700 text-xl">;</span> and Emma, the manager.</p>
                <p className="text-sm text-gray-600 italic">Разделение имён и должностей</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-2 border-red-300">
        <h3 className="font-bold text-lg mb-4 text-red-900">❌ Распространённые ошибки</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ I love reading; because it relaxes me.</p>
            <p className="font-bold text-green-700 mb-1">✅ I love reading because it relaxes me.</p>
            <p className="text-sm text-gray-600">Не используйте ; перед "because" — это делает вторую часть зависимой</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ She is smart; and hardworking.</p>
            <p className="font-bold text-green-700 mb-1">✅ She is smart and hardworking.</p>
            <p className="text-sm text-gray-600">Не используйте ; с союзами "and", "but", "or"</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ Although it rained; we went hiking.</p>
            <p className="font-bold text-green-700 mb-1">✅ Although it rained, we went hiking.</p>
            <p className="text-sm text-gray-600">"Although" создаёт зависимое предложение — используйте запятую</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "The meeting was productive",
      right: "we made several important decisions.",
    },
    {
      left: "She wanted to attend",
      right: "however, she had another commitment.",
    },
    {
      left: "The project is complete",
      right: "we can now move to the next phase.",
    },
    {
      left: "I don't enjoy cooking",
      right: "my brother loves it.",
    },
    {
      left: "The data is incomplete",
      right: "therefore, we cannot draw conclusions.",
    },
    {
      left: "He studied medicine for years",
      right: "his knowledge is extensive.",
    },
    {
      left: "The plan failed",
      right: "nevertheless, we learned valuable lessons.",
    },
    {
      left: "It's getting late",
      right: "we should leave soon.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">;</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Практика: Точка с запятой</h2>
        <p className="text-lg text-gray-600">Соедините независимые предложения</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-purple-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Обе части должны быть полными независимыми предложениями</p>
          <p className="text-gray-700">• Предложения должны быть тесно связаны по смыслу</p>
          <p className="text-gray-700">• Вводите только символ <span className="font-mono bg-gray-100 px-2 py-1 rounded">;</span></p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">—</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">DASH — Тире</h2>
        <p className="text-lg text-gray-600">Акцент, прерывание и дополнительная информация</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 border-2 border-pink-200">
        <h3 className="text-2xl font-bold mb-6 text-pink-800">Что делает тире?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <p className="text-lg text-gray-700 mb-4">
              Тире (dash) — это самый <span className="font-bold text-pink-700">драматичный и гибкий</span> знак пунктуации.
              Оно добавляет акцент, выделяет дополнительную информацию или создаёт прерывание в мысли.
            </p>

            <div className="bg-pink-50 p-5 rounded-lg border-2 border-pink-300">
              <p className="font-bold text-pink-800 mb-3">Два типа тире:</p>
              <div className="space-y-2">
                <p className="text-gray-800"><span className="font-bold text-pink-700">Em dash (—)</span> — длинное тире (основное)</p>
                <p className="text-gray-800"><span className="font-bold text-pink-700">En dash (–)</span> — короткое тире (для диапазонов: 2020–2023)</p>
              </div>
              <p className="text-sm text-gray-600 italic mt-3">Мы сосредоточимся на em dash (—)</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <h4 className="font-bold text-lg mb-4 text-pink-800">Использование 1: Акцент и драма</h4>

            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">There's only one solution<span className="text-pink-700 text-xl">—</span>we must act now.</p>
                <p className="text-sm text-gray-600 italic">Создаёт драматическую паузу</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">The evidence was clear<span className="text-pink-700 text-xl">—</span>undeniable, in fact.</p>
                <p className="text-sm text-gray-600 italic">Усиливает утверждение</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">He had one goal<span className="text-pink-700 text-xl">—</span>victory.</p>
                <p className="text-sm text-gray-600 italic">Фокусирует внимание на одном слове</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Сравните с двоеточием:</p>
              <p className="text-sm text-gray-700">Двоеточие более формальное: "There's one solution: we must act."</p>
              <p className="text-sm text-gray-700 mt-2">Тире более драматичное и менее формальное: "There's one solution—we must act!"</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Использование 2: Дополнительная информация (парное тире)</h4>

            <p className="text-gray-700 mb-4">Используйте <span className="font-bold">пару тире</span> для выделения дополнительной информации внутри предложения:</p>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The solution<span className="text-pink-700 text-xl">—</span>if there is one<span className="text-pink-700 text-xl">—</span>must be found soon.</p>
                <p className="text-sm text-gray-600 italic">Дополнительное сомнение</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">My colleagues<span className="text-pink-700 text-xl">—</span>all experienced professionals<span className="text-pink-700 text-xl">—</span>agreed with the plan.</p>
                <p className="text-sm text-gray-600 italic">Описательная информация</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The project<span className="text-pink-700 text-xl">—</span>despite numerous setbacks<span className="text-pink-700 text-xl">—</span>was completed on time.</p>
                <p className="text-sm text-gray-600 italic">Контрастная информация</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">Three cities<span className="text-pink-700 text-xl">—</span>London, Paris, and Berlin<span className="text-pink-700 text-xl">—</span>were chosen as finalists.</p>
                <p className="text-sm text-gray-600 italic">Список примеров</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">💡 Сравните с запятыми и скобками:</p>
              <p className="text-sm text-gray-700">Запятые: The solution, if there is one, must be found. (нейтрально)</p>
              <p className="text-sm text-gray-700">Тире: The solution—if there is one—must be found. (акцент)</p>
              <p className="text-sm text-gray-700">Скобки: The solution (if there is one) must be found. (менее важно)</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Использование 3: Прерывание или изменение направления</h4>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">I was planning to go<span className="text-pink-700 text-xl">—</span>but then I changed my mind.</p>
                <p className="text-sm text-gray-600 italic">Резкое изменение мысли</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The answer is simple<span className="text-pink-700 text-xl">—</span>or is it?</p>
                <p className="text-sm text-gray-600 italic">Прерывание для вопроса</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">"I think we should<span className="text-pink-700 text-xl">—</span>" She paused, uncertain.</p>
                <p className="text-sm text-gray-600 italic">Прерванная речь</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-800">Использование 4: Итог или вывод</h4>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">Patience, courage, determination<span className="text-pink-700 text-xl">—</span>these are the keys to success.</p>
                <p className="text-sm text-gray-600 italic">Список, затем обобщение</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">Hard work, dedication, persistence<span className="text-pink-700 text-xl">—</span>all essential for achievement.</p>
                <p className="text-sm text-gray-600 italic">Список с итоговой фразой</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">⚠️ Не злоупотребляйте!</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-orange-700 mb-1">❌ Слишком много тире</p>
            <p className="text-sm text-gray-700">I went to the store—it was closed—so I went home—what a waste of time—I was so frustrated.</p>
            <p className="text-sm text-gray-600 italic mt-2">Становится хаотичным и трудным для чтения</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-green-700 mb-1">✅ Используйте экономно</p>
            <p className="text-sm text-gray-700">I went to the store, but it was closed, so I went home. What a waste of time!</p>
            <p className="text-sm text-gray-600 italic mt-2">Ясно и легко читать</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "There's only one person who can help",
      right: "you.",
    },
    {
      left: "The plan",
      right: "if approved—will save millions.",
    },
    {
      left: "My colleagues",
      right: "all experienced professionals—supported the proposal.",
    },
    {
      left: "I wanted to explain",
      right: "but she wouldn't listen.",
    },
    {
      left: "Three qualities matter most",
      right: "honesty, integrity, and loyalty.",
    },
    {
      left: "The solution",
      right: "if there is one—must be found quickly.",
    },
    {
      left: "Success, wealth, fame",
      right: "none of it matters without health.",
    },
    {
      left: "The deadline",
      right: "originally set for June—has been extended.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">—</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Практика: Тире</h2>
        <p className="text-lg text-gray-600">Добавьте тире для акцента</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-2 border-pink-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-pink-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Тире добавляет драму и акцент</p>
          <p className="text-gray-700">• Используйте парное тире (—text—) для дополнительной информации</p>
          <p className="text-gray-700">• Вводите символ <span className="font-mono bg-gray-100 px-2 py-1 rounded">—</span> (длинное тире)</p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step8() {
  const items: FillItem[] = [
    {
      left: "We need three things for the project",
      right: "funding, time, and expertise.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The proposal was rejected",
      right: "it was too expensive.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The report",
      right: "over 200 pages long—took months to complete.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "She loves travel",
      right: "however, she rarely has time.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "There's one word that describes him",
      right: "brilliant.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The meeting was productive",
      right: "we made several important decisions.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "My brother",
      right: "a professional chef—prepared the meal.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The instructions are clear",
      right: "read the manual first, then begin installation.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "I was ready to leave",
      right: "but then the phone rang.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The evidence is overwhelming",
      right: "therefore, we must accept the conclusion.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">:;—</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Смешанная практика</h2>
        <p className="text-lg text-gray-600">Выберите правильный знак пунктуации</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-indigo-800 mb-3">Краткое напоминание:</p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700"><span className="font-bold text-blue-700">: (colon)</span> — вводит объяснения, списки, конкретную информацию</p>
            <p className="text-gray-700"><span className="font-bold text-purple-700">; (semicolon)</span> — соединяет связанные независимые предложения</p>
            <p className="text-gray-700"><span className="font-bold text-pink-700">— (dash)</span> — добавляет акцент, дополнительную информацию, драму</p>
          </div>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "The research is incomplete",
      right: "we need more data before drawing conclusions.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "Success requires three elements",
      right: "preparation, execution, and perseverance.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The presentation",
      right: "scheduled for Tuesday—has been postponed.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The theory sounds plausible",
      right: "nevertheless, we need empirical evidence.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "There's one thing we cannot ignore",
      right: "the environmental impact.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "Innovation, collaboration, dedication",
      right: "these are our core values.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The conference was enlightening",
      right: "moreover, it was inspiring.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "Her argument was compelling",
      right: "in fact, it was irrefutable.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The committee",
      right: "comprising five senior members—will make the final decision.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The conclusion is clear",
      right: "climate action cannot be delayed.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "The experiment failed",
      right: "however, the data proved valuable.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
    {
      left: "One principle guides our work",
      right: "excellence in everything we do.",
      options: [": (colon)", "; (semicolon)", "— (dash)"],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Продвинутая практика</h2>
        <p className="text-lg text-gray-600">Более сложные контексты</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-xl border-2 border-indigo-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-indigo-800 mb-2">Подсказки для выбора:</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Если вторая часть объясняет или конкретизирует первую → подумайте о <span className="font-bold">: или —</span></p>
            <p>• Если есть союзное наречие (however, therefore) → скорее всего <span className="font-bold">;</span></p>
            <p>• Если нужна драма или акцент → подумайте о <span className="font-bold">—</span></p>
            <p>• Если формальное введение → скорее всего <span className="font-bold">:</span></p>
          </div>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step10() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Пунктуация в сложных предложениях — Полный гид
        </h2>
        <p className="text-lg text-gray-600">Ваш основной справочник</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 text-orange-900">📚 Полная шпаргалка</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
            <h4 className="font-bold text-xl mb-4 text-blue-800">COLON : (Двоеточие)</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">Функция: вводит объяснения, списки, конкретную информацию</p>
                <p className="text-gray-700 mb-2">✅ We need three things: time, money, and expertise.</p>
                <p className="text-gray-700 mb-2">✅ The answer is simple: we must work together.</p>
                <p className="text-sm text-gray-600 mt-3">⚠️ Перед двоеточием должно быть полное независимое предложение</p>
                <p className="text-sm text-red-600">❌ The ingredients are: flour, eggs, sugar. (неправильно)</p>
                <p className="text-sm text-green-600">✅ We need these ingredients: flour, eggs, sugar. (правильно)</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
            <h4 className="font-bold text-xl mb-4 text-purple-800">SEMICOLON ; (Точка с запятой)</h4>

            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Функция: соединяет связанные независимые предложения</p>
                <p className="text-gray-700 mb-2">✅ I love reading; it relaxes me.</p>
                <p className="text-gray-700 mb-2">✅ The plan sounds good; however, it's expensive.</p>
                <p className="text-sm text-gray-600 mt-3">⚠️ Обе части должны быть полными предложениями</p>
                <p className="text-sm text-red-600">❌ I love reading; because it relaxes me. (неправильно)</p>
                <p className="text-sm text-green-600">✅ I love reading because it relaxes me. (правильно)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mt-3">
                <p className="font-bold text-purple-700 mb-2">С союзными наречиями:</p>
                <p className="text-sm text-gray-700">however, therefore, moreover, nevertheless, furthermore, consequently, meanwhile, otherwise</p>
                <p className="text-sm text-gray-700 mt-2">Формула: <span className="font-mono bg-gray-100 px-2 py-1 rounded">предложение; наречие, предложение.</span></p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-pink-400">
            <h4 className="font-bold text-xl mb-4 text-pink-800">DASH — (Тире)</h4>

            <div className="space-y-3">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">Функция: акцент, драма, дополнительная информация</p>
                <p className="text-gray-700 mb-2">✅ There's only one solution—we must act now.</p>
                <p className="text-gray-700 mb-2">✅ My brother—a professional chef—prepared the meal.</p>
                <p className="text-gray-700 mb-2">✅ Patience, courage, dedication—these are essential.</p>
                <p className="text-sm text-gray-600 mt-3">⚠️ Не злоупотребляйте — используйте для максимального эффекта</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg mt-3">
                <p className="font-bold text-pink-700 mb-2">Парное тире для дополнительной информации:</p>
                <p className="text-sm text-gray-700">Используйте пару —текст— для вставки информации внутри предложения</p>
                <p className="text-sm text-gray-700 mt-2">The solution—if there is one—must be found soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border-2 border-indigo-300">
        <h3 className="text-2xl font-bold mb-6 text-indigo-900">🎯 Как выбрать правильный знак?</h3>

        <div className="space-y-4">
          <div className="bg-white/80 p-5 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-700 mb-2">Используйте COLON (:), когда...</p>
            <p className="text-sm text-gray-700">• Вводите список после полного предложения</p>
            <p className="text-sm text-gray-700">• Объясняете или конкретизируете что-то (формально)</p>
            <p className="text-sm text-gray-700">• Вводите длинную цитату</p>
            <p className="text-sm text-gray-700">• Хотите сказать "а именно" или "то есть"</p>
          </div>

          <div className="bg-white/80 p-5 rounded-lg border-l-4 border-purple-500">
            <p className="font-bold text-purple-700 mb-2">Используйте SEMICOLON (;), когда...</p>
            <p className="text-sm text-gray-700">• Соединяете два связанных независимых предложения</p>
            <p className="text-sm text-gray-700">• Есть союзное наречие (however, therefore и т.д.)</p>
            <p className="text-sm text-gray-700">• Элементы списка сами содержат запятые</p>
            <p className="text-sm text-gray-700">• Связь между предложениями очень тесная</p>
          </div>

          <div className="bg-white/80 p-5 rounded-lg border-l-4 border-pink-500">
            <p className="font-bold text-pink-700 mb-2">Используйте DASH (—), когда...</p>
            <p className="text-sm text-gray-700">• Хотите добавить драматический акцент</p>
            <p className="text-sm text-gray-700">• Вставляете дополнительную информацию (парное тире)</p>
            <p className="text-sm text-gray-700">• Показываете резкое изменение мысли</p>
            <p className="text-sm text-gray-700">• Обобщаете список (список—вывод)</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 p-8 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-6 text-red-900">❌ Самые распространённые ошибки</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ My hobbies are: reading, writing, and hiking.</p>
            <p className="font-bold text-green-700 mb-2">✅ My hobbies are reading, writing, and hiking.</p>
            <p className="text-sm text-gray-600">Не используйте двоеточие после "are"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ I love travel; because it broadens the mind.</p>
            <p className="font-bold text-green-700 mb-2">✅ I love travel because it broadens the mind.</p>
            <p className="text-sm text-gray-600">"Because" создаёт зависимое предложение — не используйте ;</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ She is smart; and creative.</p>
            <p className="font-bold text-green-700 mb-2">✅ She is smart and creative.</p>
            <p className="text-sm text-gray-600">Не используйте ; с обычными союзами (and, but, or)</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-2">⚠️ Слишком много тире</p>
            <p className="text-sm text-gray-700">Используйте тире экономно для максимального эффекта. Слишком много тире делает текст хаотичным.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl border-2 border-green-400">
        <h3 className="text-2xl font-bold mb-6 text-green-900">✨ Пример изощрённого письма</h3>

        <div className="bg-white/80 p-6 rounded-lg space-y-4">
          <p className="text-gray-800">
            The research presents a compelling argument<span className="text-blue-700 font-bold">:</span> climate change
            poses an existential threat. The evidence is overwhelming<span className="text-purple-700 font-bold">;</span> temperatures
            are rising, ice caps are melting, and extreme weather events are increasing. The solution<span className="text-pink-700 font-bold">—</span>if
            there is one<span className="text-pink-700 font-bold">—</span>requires immediate action. Three
            measures are essential<span className="text-blue-700 font-bold">:</span> reducing emissions, transitioning
            to renewable energy, and protecting natural habitats. The time for debate is over<span className="text-purple-700 font-bold">;</span> we
            must act now.
          </p>

          <div className="bg-indigo-50 p-4 rounded-lg mt-4">
            <p className="font-bold text-indigo-800 mb-2">Анализ пунктуации:</p>
            <p className="text-sm text-gray-700">• <span className="text-blue-700 font-bold">:</span> вводит главное утверждение и список мер</p>
            <p className="text-sm text-gray-700">• <span className="text-purple-700 font-bold">;</span> соединяет связанные независимые предложения</p>
            <p className="text-sm text-gray-700">• <span className="text-pink-700 font-bold">—</span> добавляет оговорку с акцентом</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="font-bold text-xl mb-4 text-yellow-900">🏆 Mastery Achieved!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Вы освоили искусство сложной пунктуации! Эти знаки — мощные инструменты для создания
          изощрённого, точного и выразительного письма на уровне C1-C2. Используйте их стратегически
          в эссе, исследованиях и профессиональной переписке.
        </p>
        <div className="bg-white/60 p-4 rounded-lg">
          <p className="font-bold text-orange-700 mb-2">Финальные напоминания:</p>
          <p className="text-gray-700">• <span className="font-bold">Двоеточие</span> — формальное введение (полное предложение + :)</p>
          <p className="text-gray-700">• <span className="font-bold">Точка с запятой</span> — связь двух независимых предложений</p>
          <p className="text-gray-700">• <span className="font-bold">Тире</span> — драма и акцент (используйте экономно!)</p>
          <p className="text-gray-700 mt-3">• Читайте качественные тексты и обращайте внимание на пунктуацию</p>
        </div>
      </div>
    </div>
  );
}
