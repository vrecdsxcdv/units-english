"use client";

import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = {
  step: number;
};

export default function ParenthesisApposition({ step }: Props) {
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
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Вводные конструкции и приложения
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Как добавлять дополнительную информацию в предложение элегантно и естественно
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">🎯 Что такое вводные конструкции и приложения?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-bold text-blue-700">Вводные конструкции (Parenthesis)</span> — это дополнительная информация, которая вставляется в предложение с помощью запятых, тире или скобок.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-bold text-purple-700">Приложение (Apposition)</span> — это существительное или именная группа, которая переименовывает или описывает другое существительное, стоя рядом с ним.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-2">✅ Примеры</p>
                <p className="text-gray-700 mb-2">My brother<span className="text-purple-700 font-bold">, a doctor,</span> lives in London.</p>
                <p className="text-xs text-gray-500 italic">Приложение: "a doctor" описывает "my brother"</p>
                <p className="text-gray-700 mt-3 mb-2">The concert<span className="text-blue-700 font-bold">, which was amazing,</span> lasted three hours.</p>
                <p className="text-xs text-gray-500 italic">Вводная конструкция: дополнительная информация о концерте</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Что вы изучите</h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-bold text-indigo-700 mb-1">Appositives (Приложения)</p>
                  <p className="text-sm text-gray-600">Paris, the capital of France, is beautiful.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold text-blue-700 mb-1">Parenthetical Commas</p>
                  <p className="text-sm text-gray-600">The book, surprisingly, was boring.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">Dashes for Emphasis</p>
                  <p className="text-sm text-gray-600">My sister — she's only 16 — won the race.</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="font-bold text-pink-700 mb-1">Parentheses (Brackets)</p>
                  <p className="text-sm text-gray-600">He lives in NYC (New York City).</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-700 mb-1">Relative Clauses</p>
                  <p className="text-sm text-gray-600">The man, who was tall, smiled.</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-bold text-orange-700 mb-1">Combining Techniques</p>
                  <p className="text-sm text-gray-600">Mix different methods naturally</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Зачем это нужно?</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-bold text-purple-700">Больше информации</p>
                  <p className="text-sm text-gray-600">Добавляйте детали без создания новых предложений</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <p className="font-bold text-purple-700">Акцент и стиль</p>
                  <p className="text-sm text-gray-600">Выделяйте важную информацию для читателя</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <p className="font-bold text-purple-700">Естественность</p>
                  <p className="text-sm text-gray-600">Звучите как носитель языка в письме и речи</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-bold text-purple-700">Академический стиль</p>
                  <p className="text-sm text-gray-600">Необходимо для эссе и формального письма (B1-B2)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl border-2 border-pink-300">
            <h4 className="font-bold text-lg mb-3 text-pink-900">🎯 Быстрый пример</h4>

            <div className="space-y-3">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-1">❌ Без вводных конструкций (скучно и длинно):</p>
                <p className="text-gray-700">My friend works in London. She is a teacher. She speaks five languages.</p>
              </div>

              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-1">✅ С вводными конструкциями (элегантно):</p>
                <p className="text-gray-700">My friend, <span className="text-purple-700 font-bold">a teacher who speaks five languages</span>, works in London.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Совет профессионала</h3>
        <p className="text-gray-700 leading-relaxed">
          Вводные конструкции и приложения — это ключ к естественному английскому!
          Носители языка постоянно используют их в разговорной и письменной речи.
          Освойте эти техники, и ваш английский станет намного более изощрённым и плавным!
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔤</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Appositives — Приложения</h2>
        <p className="text-lg text-gray-600">Переименование и описание существительных</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">Что такое Appositive?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Определение</p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Appositive (приложение)</span> — это существительное или именная группа, которая стоит рядом с другим существительным и переименовывает его или даёт дополнительную информацию.
            </p>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
              <p className="font-bold text-purple-800 mb-3">Структура:</p>
              <p className="text-gray-800">Существительное + <span className="font-bold text-purple-700">, appositive,</span> + продолжение предложения</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-800">Примеры приложений</h4>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">My brother, <span className="text-purple-700">a doctor</span>, lives in London.</p>
                <p className="text-sm text-gray-600 italic">Приложение: "a doctor" переименовывает "my brother"</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">Paris, <span className="text-purple-700">the capital of France</span>, is beautiful.</p>
                <p className="text-sm text-gray-600 italic">Приложение: "the capital of France" описывает Paris</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">My friend Sarah, <span className="text-purple-700">a talented musician</span>, performed last night.</p>
                <p className="text-sm text-gray-600 italic">Приложение: "a talented musician" описывает Sarah</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The iPhone, <span className="text-purple-700">Apple's flagship product</span>, sells millions yearly.</p>
                <p className="text-sm text-gray-600 italic">Приложение: "Apple's flagship product" описывает iPhone</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">Shakespeare, <span className="text-purple-700">the famous playwright</span>, wrote 37 plays.</p>
                <p className="text-sm text-gray-600 italic">Приложение: "the famous playwright" описывает Shakespeare</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-800">Типы приложений</h4>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">1. Профессия или род занятий</p>
                <p className="text-gray-700">My sister, <span className="font-bold">a lawyer</span>, works in New York.</p>
                <p className="text-gray-700 mt-1">Dr. Smith, <span className="font-bold">my dentist</span>, is very experienced.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">2. Местоположение</p>
                <p className="text-gray-700">Tokyo, <span className="font-bold">the capital of Japan</span>, is huge.</p>
                <p className="text-gray-700 mt-1">The Thames, <span className="font-bold">a river in England</span>, flows through London.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">3. Описание или характеристика</p>
                <p className="text-gray-700">Her car, <span className="font-bold">a red Ferrari</span>, is very fast.</p>
                <p className="text-gray-700 mt-1">The book, <span className="font-bold">a bestseller</span>, sold millions of copies.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">4. Уточнение имени</p>
                <p className="text-gray-700">My colleague Sarah, <span className="font-bold">the team leader</span>, organized the meeting.</p>
                <p className="text-gray-700 mt-1">The author J.K. Rowling, <span className="font-bold">creator of Harry Potter</span>, is British.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">⚠️ Важно: Запятые обязательны!</h4>

            <p className="text-gray-700 mb-4">Приложения ВСЕГДА выделяются запятыми с обеих сторон (или одной запятой, если в конце предложения):</p>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-1">✅ My teacher, <span className="underline">Mr. Brown</span>, is kind.</p>
                <p className="text-sm text-gray-600">Запятые до и после приложения</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-1">✅ I met John, <span className="underline">my old friend</span>.</p>
                <p className="text-sm text-gray-600">Одна запятая (приложение в конце)</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700 mb-1">❌ My teacher Mr. Brown is kind.</p>
                <p className="text-sm text-gray-600">Без запятых — неправильно!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-4 text-yellow-900">💡 Совет</h3>
        <p className="text-gray-700">
          Приложения делают вашу речь более информативной без создания дополнительных предложений.
          Вместо "My brother is a doctor. He lives in London" → "My brother, a doctor, lives in London."
        </p>
      </div>
    </div>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "My friend Sarah",
      answers: [","],
      right: "a talented singer, performed yesterday.",
    },
    {
      left: "London",
      answers: [","],
      right: "the capital of England, is a huge city.",
    },
    {
      left: "Dr. Smith",
      answers: [","],
      right: "my dentist, is very professional.",
    },
    {
      left: "The book",
      answers: [","],
      right: "a bestseller, was sold out in days.",
    },
    {
      left: "My sister Emma",
      answers: [","],
      right: "a lawyer, works in New York.",
    },
    {
      left: "Paris",
      answers: [","],
      right: "the city of love, attracts millions of tourists.",
    },
    {
      left: "His car",
      answers: [","],
      right: "a red Ferrari, is very expensive.",
    },
    {
      left: "My colleague Tom",
      answers: [","],
      right: "the team leader, organized the meeting.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Практика: Appositives</h2>
        <p className="text-lg text-gray-600">Вставьте запятые для приложений</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-purple-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Приложения ВСЕГДА выделяются запятыми</p>
          <p className="text-gray-700">• Приложение переименовывает или описывает существительное</p>
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
        <div className="text-7xl mb-4">📌</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Parenthetical Expressions</h2>
        <p className="text-lg text-gray-600">Вводные слова и фразы в запятых</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">Вводные выражения с запятыми</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Что это?</p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Parenthetical expressions</span> — это слова или фразы, которые добавляют комментарий, уточнение или акцент,
              но не обязательны для понимания основной мысли. Они выделяются запятыми.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Типы вводных выражений</h4>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">1. Мнение и отношение</p>
                <p className="text-gray-700">The movie, <span className="font-bold text-purple-700">in my opinion</span>, was boring.</p>
                <p className="text-gray-700 mt-1">She is, <span className="font-bold text-purple-700">I think</span>, the best candidate.</p>
                <p className="text-gray-700 mt-1">The plan, <span className="font-bold text-purple-700">unfortunately</span>, failed.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">2. Уточнение и дополнение</p>
                <p className="text-gray-700">The concert, <span className="font-bold text-blue-700">by the way</span>, starts at 7 PM.</p>
                <p className="text-gray-700 mt-1">This book, <span className="font-bold text-blue-700">for example</span>, is very useful.</p>
                <p className="text-gray-700 mt-1">He is, <span className="font-bold text-blue-700">of course</span>, very talented.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">3. Неожиданность и контраст</p>
                <p className="text-gray-700">The test, <span className="font-bold text-green-700">surprisingly</span>, was easy.</p>
                <p className="text-gray-700 mt-1">She is, <span className="font-bold text-green-700">however</span>, very busy today.</p>
                <p className="text-gray-700 mt-1">The weather, <span className="font-bold text-green-700">believe it or not</span>, was perfect.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">4. Подтверждение и согласие</p>
                <p className="text-gray-700">You are, <span className="font-bold text-pink-700">indeed</span>, correct.</p>
                <p className="text-gray-700 mt-1">This is, <span className="font-bold text-pink-700">no doubt</span>, the best solution.</p>
                <p className="text-gray-700 mt-1">He will, <span className="font-bold text-pink-700">without question</span>, win the race.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Распространённые вводные выражения</h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">I think</span> (я думаю)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">in my opinion</span> (по моему мнению)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">of course</span> (конечно)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">by the way</span> (кстати)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">for example</span> (например)</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">however</span> (однако)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">surprisingly</span> (на удивление)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">unfortunately</span> (к сожалению)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">indeed</span> (действительно)</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">to be honest</span> (честно говоря)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-800">Позиция в предложении</h4>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">В начале предложения</p>
                <p className="text-gray-700"><span className="font-bold text-green-700">In my opinion,</span> the movie was great.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">В середине предложения</p>
                <p className="text-gray-700">The movie, <span className="font-bold text-green-700">in my opinion</span>, was great.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">В конце предложения</p>
                <p className="text-gray-700">The movie was great, <span className="font-bold text-green-700">in my opinion</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">❌ Распространённые ошибки</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ The book I think is interesting.</p>
            <p className="font-bold text-green-700 mb-1">✅ The book, I think, is interesting.</p>
            <p className="text-sm text-gray-600">Нужны запятые с обеих сторон</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ She is however very talented.</p>
            <p className="font-bold text-green-700 mb-1">✅ She is, however, very talented.</p>
            <p className="text-sm text-gray-600">Вводное слово нужно выделить запятыми</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "The movie",
      answers: [","],
      right: "in my opinion, was boring.",
    },
    {
      left: "She is",
      answers: [","],
      right: "I think, the best candidate.",
    },
    {
      left: "The plan",
      answers: [","],
      right: "unfortunately, failed.",
    },
    {
      left: "The test",
      answers: [","],
      right: "surprisingly, was very easy.",
    },
    {
      left: "He is",
      answers: [","],
      right: "of course, very talented.",
    },
    {
      left: "The concert",
      answers: [","],
      right: "by the way, starts at 7 PM.",
    },
    {
      left: "She is",
      answers: [","],
      right: "however, very busy today.",
    },
    {
      left: "You are",
      answers: [","],
      right: "indeed, absolutely right.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📌</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Практика: Parenthetical Expressions</h2>
        <p className="text-lg text-gray-600">Вставьте запятые</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-blue-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Вводные выражения выделяются запятыми с обеих сторон</p>
          <p className="text-gray-700">• Они добавляют комментарий или акцент</p>
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
        <div className="text-7xl mb-4">➖</div>
        <h2 className="text-3xl font-bold mb-2 text-green-600">Dashes for Emphasis</h2>
        <p className="text-lg text-gray-600">Тире для акцента и драматичности</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">Использование тире (—)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-3">Когда использовать тире?</p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Тире (em dash —)</span> используются вместо запятых, когда вы хотите добавить БОЛЬШЕ акцента или драматичности вводной информации.
              Тире привлекают внимание и делают текст более выразительным.
            </p>

            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
              <p className="font-bold text-green-800 mb-3">Сравнение:</p>
              <p className="text-gray-800 mb-2">Запятые (нейтрально): My sister, a lawyer, works in NYC.</p>
              <p className="text-gray-800">Тире (акцент): My sister — a brilliant lawyer — works in NYC.</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-800">Примеры с тире</h4>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">My friend — the one I told you about — finally arrived.</p>
                <p className="text-sm text-gray-600 italic">Акцент на уточнении</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The weather — cold, rainy, and miserable — ruined our picnic.</p>
                <p className="text-sm text-gray-600 italic">Драматическое описание</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">My sister — she's only 16 — won the championship.</p>
                <p className="text-sm text-gray-600 italic">Неожиданная информация</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The movie — despite the terrible reviews — was actually great.</p>
                <p className="text-sm text-gray-600 italic">Контраст с ожиданиями</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">Three things — money, time, and effort — are needed for success.</p>
                <p className="text-sm text-gray-600 italic">Список с акцентом</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Тире vs Запятые vs Скобки</h4>

            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Запятые (нейтрально, обычная информация)</p>
                <p className="text-gray-700">The book, which I bought yesterday, is interesting.</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">Тире (акцент, драматичность)</p>
                <p className="text-gray-700">The book — the one everyone is talking about — is amazing.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">Скобки (менее важная информация)</p>
                <p className="text-gray-700">The book (published in 2023) is already a bestseller.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-orange-300">
            <h4 className="font-bold text-lg mb-4 text-orange-800">Когда использовать тире</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💥</span>
                <div>
                  <p className="font-bold text-orange-700">Для сильного акцента</p>
                  <p className="text-sm text-gray-600">My sister — she's only 10! — speaks four languages.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <p className="font-bold text-orange-700">Для драматического эффекта</p>
                  <p className="text-sm text-gray-600">The result — total disaster — shocked everyone.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-bold text-orange-700">Для неожиданной информации</p>
                  <p className="text-sm text-gray-600">The winner — believe it or not — was me!</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-bold text-orange-700">Для уточнения</p>
                  <p className="text-sm text-gray-600">The car — a vintage Mustang — belonged to my grandfather.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-4 text-yellow-900">💡 Совет профессионала</h3>
        <p className="text-gray-700">
          Используйте тире умеренно! Слишком много тире делают текст хаотичным.
          Тире — как восклицательный знак — теряют силу, если использовать их слишком часто!
        </p>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "My friend",
      answers: ["—"],
      right: "the one I told you about — finally arrived.",
    },
    {
      left: "The weather",
      answers: ["—"],
      right: "cold and rainy — ruined our plans.",
    },
    {
      left: "My sister",
      answers: ["—"],
      right: "she's only 16 — won the race.",
    },
    {
      left: "The movie",
      answers: ["—"],
      right: "despite bad reviews — was excellent.",
    },
    {
      left: "Three things",
      answers: ["—"],
      right: "money, time, effort — are crucial.",
    },
    {
      left: "The book",
      answers: ["—"],
      right: "a real masterpiece — sold millions.",
    },
    {
      left: "The result",
      answers: ["—"],
      right: "total success — surprised everyone.",
    },
    {
      left: "The car",
      answers: ["—"],
      right: "a vintage Ferrari — was beautiful.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">➖</div>
        <h2 className="text-3xl font-bold mb-2 text-green-600">Практика: Dashes</h2>
        <p className="text-lg text-gray-600">Вставьте тире для акцента</p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-green-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Тире добавляют АКЦЕНТ и драматичность</p>
          <p className="text-gray-700">• Тире сильнее, чем запятые</p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step8() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📎</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Parentheses (Brackets)</h2>
        <p className="text-lg text-gray-600">Скобки для дополнительной информации</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold mb-6 text-indigo-800">Использование скобок ( )</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <p className="text-lg font-bold text-indigo-900 mb-3">Когда использовать скобки?</p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Скобки (parentheses)</span> используются для добавления информации, которая МЕНЕЕ важна, чем основное содержание.
              Информация в скобках — это как тихое примечание "между прочим".
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-800">Типы информации в скобках</h4>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">1. Расшифровка аббревиатур</p>
                <p className="text-gray-700">He lives in NYC (New York City).</p>
                <p className="text-gray-700 mt-1">The UN (United Nations) was founded in 1945.</p>
                <p className="text-gray-700 mt-1">I work for NASA (National Aeronautics and Space Administration).</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">2. Даты и числа</p>
                <p className="text-gray-700">Shakespeare (1564-1616) wrote 37 plays.</p>
                <p className="text-gray-700 mt-1">The conference (June 15-17) will be in London.</p>
                <p className="text-gray-700 mt-1">The price (including tax) is $100.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">3. Примеры и уточнения</p>
                <p className="text-gray-700">Some fruits (e.g., apples, oranges) are rich in vitamins.</p>
                <p className="text-gray-700 mt-1">The main cities (London, Paris, Berlin) are expensive.</p>
                <p className="text-gray-700 mt-1">He speaks several languages (at least five).</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">4. Дополнительные комментарии</p>
                <p className="text-gray-700">The movie (which I saw yesterday) was great.</p>
                <p className="text-gray-700 mt-1">Her house (the one with the red door) is beautiful.</p>
                <p className="text-gray-700 mt-1">The test (surprisingly easy) took 30 minutes.</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">5. Переводы и альтернативные названия</p>
                <p className="text-gray-700">He said "bonjour" (hello in French).</p>
                <p className="text-gray-700 mt-1">Beijing (also known as Peking) is the capital of China.</p>
                <p className="text-gray-700 mt-1">The film "La Dolce Vita" (The Sweet Life) is Italian.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Сравнение: Запятые, Тире, Скобки</h4>

            <div className="space-y-4">
              <div className="bg-purple-50 p-5 rounded-lg">
                <p className="font-bold text-purple-700 mb-3">Та же информация — разный акцент:</p>

                <div className="space-y-2">
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-sm font-bold text-blue-600">ЗАПЯТЫЕ (нейтрально)</p>
                    <p className="text-gray-700">My friend, who lives in Paris, is visiting.</p>
                  </div>

                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-sm font-bold text-pink-600">ТИРЕ (акцент!)</p>
                    <p className="text-gray-700">My friend — who lives in Paris! — is visiting.</p>
                  </div>

                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-sm font-bold text-green-600">СКОБКИ (менее важно)</p>
                    <p className="text-gray-700">My friend (who lives in Paris) is visiting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-orange-300">
            <h4 className="font-bold text-lg mb-4 text-orange-800">Важные правила</h4>

            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">1. Пунктуация ВНЕ скобок</p>
                <p className="text-green-700">✅ The concert was great (I really enjoyed it).</p>
                <p className="text-red-700 mt-1">❌ The concert was great (I really enjoyed it.)</p>
                <p className="text-sm text-gray-600 mt-2">Точка идёт ПОСЛЕ закрывающей скобки</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">2. Полные предложения в скобках</p>
                <p className="text-gray-700">I went to the park. (It was a beautiful day.)</p>
                <p className="text-sm text-gray-600 mt-2">Если в скобках полное предложение, точка ВНУТРИ</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">3. Не злоупотребляйте!</p>
                <p className="text-gray-700">Слишком много скобок делают текст сложным для чтения</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-4 text-yellow-900">💡 Совет</h3>
        <p className="text-gray-700">
          Используйте скобки для информации, которую читатель может пропустить без потери смысла.
          Если информация важна — используйте запятые или тире!
        </p>
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "He lives in NYC",
      answers: ["("],
      right: "New York City).",
    },
    {
      left: "Shakespeare",
      answers: ["("],
      right: "1564-1616) wrote 37 plays.",
    },
    {
      left: "The UN",
      answers: ["("],
      right: "United Nations) was founded in 1945.",
    },
    {
      left: "The price",
      answers: ["("],
      right: "including tax) is $50.",
    },
    {
      left: "Some fruits",
      answers: ["("],
      right: "e.g., apples) are healthy.",
    },
    {
      left: "The conference",
      answers: ["("],
      right: "June 15-17) is in London.",
    },
    {
      left: "Her house",
      answers: ["("],
      right: "the one with the red door) is nice.",
    },
    {
      left: "Beijing",
      answers: ["("],
      right: "also known as Peking) is huge.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📎</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Практика: Parentheses</h2>
        <p className="text-lg text-gray-600">Вставьте скобки</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-indigo-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Скобки для менее важной информации</p>
          <p className="text-gray-700">• Часто используются для расшифровки и дат</p>
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
          Parenthesis & Apposition — Полный гид
        </h2>
        <p className="text-lg text-gray-600">Ваш справочник по вводным конструкциям</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 text-orange-900">📚 Полная шпаргалка</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
            <h4 className="font-bold text-xl mb-4 text-purple-800">1. APPOSITIVES (Приложения)</h4>

            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-1">Что это?</p>
                <p className="text-gray-700">Существительное, которое переименовывает другое существительное</p>
                <p className="text-sm text-gray-600 mt-2">Пример: My brother, <span className="font-bold">a doctor</span>, lives in London.</p>
                <p className="text-sm text-gray-600 mt-1">⚠️ Всегда выделяется запятыми!</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
            <h4 className="font-bold text-xl mb-4 text-blue-800">2. PARENTHETICAL EXPRESSIONS (Вводные выражения)</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-1">Что это?</p>
                <p className="text-gray-700">Слова/фразы, добавляющие комментарий или мнение</p>
                <p className="text-sm text-gray-600 mt-2">Примеры: I think, in my opinion, however, surprisingly</p>
                <p className="text-sm text-gray-600 mt-1">The book, <span className="font-bold">in my opinion</span>, was great.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-green-400">
            <h4 className="font-bold text-xl mb-4 text-green-800">3. DASHES (Тире) — для акцента</h4>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-1">Когда использовать?</p>
                <p className="text-gray-700">Для СИЛЬНОГО акцента или драматичности</p>
                <p className="text-sm text-gray-600 mt-2">My sister — she's only 16! — won the race.</p>
                <p className="text-sm text-gray-600 mt-1">⚠️ Используйте умеренно для сохранения эффекта</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-xl mb-4 text-indigo-800">4. PARENTHESES (Скобки) — менее важная информация</h4>

            <div className="space-y-3">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700 mb-1">Когда использовать?</p>
                <p className="text-gray-700">Для дополнительной информации, которую можно пропустить</p>
                <p className="text-sm text-gray-600 mt-2">He lives in NYC (New York City).</p>
                <p className="text-sm text-gray-600 mt-1">Shakespeare (1564-1616) was British.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 border-2 border-pink-300">
        <h3 className="text-2xl font-bold mb-6 text-pink-900">🎯 Как выбрать правильный вариант?</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-700 mb-2">ЗАПЯТЫЕ — нейтральная информация</p>
            <p className="text-gray-700">My friend, who lives in Paris, is visiting.</p>
            <p className="text-sm text-gray-600 mt-1">Обычное дополнение, без особого акцента</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-pink-500">
            <p className="font-bold text-pink-700 mb-2">ТИРЕ — акцент и драматичность!</p>
            <p className="text-gray-700">My friend — the one from Paris! — is visiting.</p>
            <p className="text-sm text-gray-600 mt-1">Привлекаем внимание, добавляем эмоции</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-700 mb-2">СКОБКИ — менее важно</p>
            <p className="text-gray-700">My friend (who lives in Paris) is visiting.</p>
            <p className="text-sm text-gray-600 mt-1">Можно пропустить без потери смысла</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-8 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-6 text-red-900">❌ Самые распространённые ошибки</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ My brother a doctor lives in London.</p>
            <p className="font-bold text-green-700 mb-2">✅ My brother, a doctor, lives in London.</p>
            <p className="text-sm text-gray-600">Приложения ВСЕГДА выделяются запятыми</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ The book I think is interesting.</p>
            <p className="font-bold text-green-700 mb-2">✅ The book, I think, is interesting.</p>
            <p className="text-sm text-gray-600">Вводные выражения нужно выделять запятыми</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ He lives in NYC (New York City.)</p>
            <p className="font-bold text-green-700 mb-2">✅ He lives in NYC (New York City).</p>
            <p className="text-sm text-gray-600">Точка идёт ПОСЛЕ закрывающей скобки</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-2">⚠️ Слишком много вводных конструкций</p>
            <p className="text-sm text-red-700">❌ My friend (Sarah), who lives in Paris, a teacher, is visiting.</p>
            <p className="text-sm text-green-700">✅ My friend Sarah, a teacher from Paris, is visiting.</p>
            <p className="text-sm text-gray-600">Не перегружайте предложение!</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl border-2 border-green-400">
        <h3 className="text-2xl font-bold mb-6 text-green-900">✨ Примеры в действии</h3>

        <div className="bg-white/80 p-6 rounded-lg space-y-4">
          <p className="text-gray-800 font-semibold mb-4">Пример абзаца с разными техниками:</p>

          <p className="text-gray-800">
            My friend Sarah, <span className="font-bold text-purple-700">a talented pianist</span>, recently moved to London.
            The city — <span className="font-bold text-pink-700">especially the cultural scene</span> — suits her perfectly.
            She now works at the Royal Academy of Music <span className="font-bold text-green-700">(founded in 1822)</span>
            and performs regularly. Her concerts are, <span className="font-bold text-blue-700">in my opinion</span>, absolutely brilliant.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 mb-2"><span className="font-bold text-purple-700">Приложение:</span> "a talented pianist" описывает Sarah</p>
            <p className="text-sm text-gray-700 mb-2"><span className="font-bold text-pink-700">Тире:</span> акцент на культурной сцене</p>
            <p className="text-sm text-gray-700 mb-2"><span className="font-bold text-green-700">Скобки:</span> менее важная информация о дате</p>
            <p className="text-sm text-gray-700"><span className="font-bold text-blue-700">Вводное выражение:</span> "in my opinion" добавляет личное мнение</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="font-bold text-xl mb-4 text-yellow-900">🏆 Мастерство достигнуто!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Вы освоили искусство вводных конструкций и приложений! Эти техники делают ваш английский более естественным, элегантным и изощрённым.
          Используйте их в эссе, письмах и повседневной речи для создания профессионального впечатления!
        </p>
        <div className="bg-white/60 p-4 rounded-lg">
          <p className="font-bold text-orange-700 mb-2">Финальные напоминания:</p>
          <p className="text-gray-700">• <span className="font-bold">Запятые</span> для нейтральной дополнительной информации</p>
          <p className="text-gray-700">• <span className="font-bold">Тире</span> для акцента и драматичности</p>
          <p className="text-gray-700">• <span className="font-bold">Скобки</span> для менее важной информации</p>
          <p className="text-gray-700">• <span className="font-bold">Приложения</span> ВСЕГДА выделяются запятыми</p>
          <p className="text-gray-700">• Не перегружайте предложения слишком большим количеством вводных конструкций!</p>
        </div>
      </div>
    </div>
  );
}
