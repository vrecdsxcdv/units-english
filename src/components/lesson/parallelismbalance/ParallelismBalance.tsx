"use client";

import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function ParallelismBalance({ step }: Props) {
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
        <div className="text-8xl mb-6 animate-pulse">⚖️✨</div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Параллелизм и баланс
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Парные союзы и параллельные структуры для элегантного, мощного письма
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">🎯 Что такое параллелизм?</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-bold text-blue-700">Параллелизм</span> (также называемый <span className="font-bold">параллельной структурой</span>) — это использование одинаковой грамматической формы для элементов в списке или парных конструкциях.
              Это делает письмо более чётким, ритмичным и запоминающимся.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700 mb-2">❌ Без параллелизма</p>
                <p className="text-gray-700">I like swimming, to dance, and going hiking.</p>
                <p className="text-xs text-gray-500 italic mt-2">Разные формы: -ing, to + V, -ing</p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-2">✅ С параллелизмом</p>
                <p className="text-gray-700">I like swimming, dancing, and hiking.</p>
                <p className="text-xs text-gray-500 italic mt-2">Все формы -ing</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">Что вы изучите</h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-bold text-indigo-700 mb-1">NOT ONLY... BUT ALSO</p>
                  <p className="text-sm text-gray-600">He is not only smart but also hardworking.</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-bold text-indigo-700 mb-1">EITHER... OR</p>
                  <p className="text-sm text-gray-600">You can either stay or leave.</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-bold text-indigo-700 mb-1">NEITHER... NOR</p>
                  <p className="text-sm text-gray-600">She is neither rich nor famous.</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">BOTH... AND</p>
                  <p className="text-sm text-gray-600">The plan is both practical and affordable.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">WHETHER... OR</p>
                  <p className="text-sm text-gray-600">I don't know whether to stay or to go.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold text-purple-700 mb-1">THE... THE</p>
                  <p className="text-sm text-gray-600">The more you practice, the better you become.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Почему параллелизм важен</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-bold text-purple-700">Ясность</p>
                  <p className="text-sm text-gray-600">Делает сложные идеи понятнее</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <p className="font-bold text-purple-700">Ритм</p>
                  <p className="text-sm text-gray-600">Создаёт приятный, запоминающийся поток</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <div>
                  <p className="font-bold text-purple-700">Акцент</p>
                  <p className="text-sm text-gray-600">Усиливает ваше послание и делает его убедительным</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-bold text-purple-700">Изощрённость</p>
                  <p className="text-sm text-gray-600">Показывает продвинутые навыки письма (уровень C1-C2)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-xl border-2 border-pink-300">
            <h4 className="font-bold text-lg mb-3 text-pink-900">🎯 Знаменитые примеры</h4>

            <div className="space-y-3">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-1">"I came, I saw, I conquered." — Юлий Цезарь</p>
                <p className="text-sm text-gray-600 italic">Три параллельных предложения, одинаковая структура: подлежащее + глагол</p>
              </div>

              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-1">"Ask not what your country can do for you — ask what you can do for your country." — Джон Кеннеди</p>
                <p className="text-sm text-gray-600 italic">Два параллельных вопроса, идеально сбалансированы</p>
              </div>

              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-gray-800 mb-1">"It was the best of times, it was the worst of times..." — Чарльз Диккенс</p>
                <p className="text-sm text-gray-600 italic">Параллельная антитеза (противоположные идеи в параллельной структуре)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Совет профессионала</h3>
        <p className="text-gray-700 leading-relaxed">
          Параллелизм — один из самых мощных инструментов для создания запоминающегося, убедительного письма.
          Освойте эти структуры, и ваши эссе, речи и презентации будут звучать значительно более отточенно!
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">➕</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">NOT ONLY... BUT ALSO</h2>
        <p className="text-lg text-gray-600">Добавление акцента и дополнительной информации</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">Структура и значение</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">NOT ONLY A... BUT ALSO B</p>
            <p className="text-gray-700 mb-4">= A является истинным, и B также является истинным (B часто является неожиданным или дополнительным)</p>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
              <p className="font-bold text-blue-800 mb-3">Формула:</p>
              <p className="text-gray-800">Подлежащее + глагол + <span className="font-bold text-blue-700">not only</span> + [элемент A] + <span className="font-bold text-blue-700">but also</span> + [элемент B]</p>
              <p className="text-sm text-gray-600 italic mt-2">⚠️ Элементы A и B должны быть параллельны (одинаковая грамматическая форма)</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-800">Примеры</h4>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">She is <span className="text-blue-700">not only</span> intelligent <span className="text-blue-700">but also</span> creative.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: прилагательное + прилагательное</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The plan <span className="text-blue-700">not only</span> saves money <span className="text-blue-700">but also</span> improves efficiency.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: глагол + существительное + глагол + существительное</p>
              </div>

              <div className="bg-blue-50 p-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">He speaks <span className="text-blue-700">not only</span> English <span className="text-blue-700">but also</span> French and German.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: существительное + существительное + существительное</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The course teaches you <span className="text-blue-700">not only</span> what to do <span className="text-blue-700">but also</span> how to do it.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: вопросительное предложение + вопросительное предложение</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <h4 className="font-bold text-lg mb-4 text-indigo-800">⚡ ИНВЕРСИЯ (Продвинутый уровень)</h4>

            <p className="text-gray-700 mb-4">Когда "not only" начинает предложение, используйте <span className="font-bold">инверсию</span> (как в вопросе):</p>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-indigo-700">Not only</span> does she speak Spanish, <span className="text-indigo-700">but she also</span> teaches it.</p>
                <p className="text-sm text-gray-600 italic">Инверсия: does she speak (а не: she speaks)</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-indigo-700">Not only</span> did he arrive late, <span className="text-indigo-700">but he also</span> forgot the documents.</p>
                <p className="text-sm text-gray-600 italic">Инверсия: did he arrive (а не: he arrived)</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-indigo-700">Not only</span> is the product expensive, <span className="text-indigo-700">but it is also</span> difficult to use.</p>
                <p className="text-sm text-gray-600 italic">Инверсия: is the product (а не: the product is)</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">💡 Правило инверсии:</p>
              <p className="text-sm text-gray-700">Если "not only" стоит в <span className="font-bold">начале предложения</span>, меняйте местами подлежащее и вспомогательный глагол.</p>
              <p className="text-sm text-gray-700 mt-2">Если "not only" стоит в середине, инверсия не нужна.</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-800">Вариации</h4>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-1">NOT ONLY... BUT... AS WELL</p>
                <p className="text-gray-700">She is not only smart but kind as well.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-1">NOT JUST... BUT ALSO</p>
                <p className="text-gray-700">It's not just expensive but also ineffective.</p>
                <p className="text-xs text-gray-500 italic">(немного менее формально)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-2 border-red-300">
        <h3 className="font-bold text-lg mb-4 text-red-900">❌ Распространённые ошибки</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ He not only likes pizza but also hamburgers.</p>
            <p className="font-bold text-green-700 mb-1">✅ He likes not only pizza but also hamburgers.</p>
            <p className="text-sm text-gray-600">Соблюдайте структуру: существительное + существительное (не глагол + существительное)</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ Not only she is smart but also creative.</p>
            <p className="font-bold text-green-700 mb-1">✅ Not only IS she smart but she is also creative.</p>
            <p className="text-sm text-gray-600">Используйте инверсию, когда "not only" начинает предложение</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "The film was",
      answers: ["not only"],
      right: "entertaining but also educational.",
    },
    {
      left: "She",
      answers: ["not only"],
      right: "plays the piano but also composes music.",
    },
    {
      left: "",
      answers: ["Not only"],
      right: "did he apologize, but he also offered compensation.",
    },
    {
      left: "The restaurant serves",
      answers: ["not only"],
      right: "Italian food but also French cuisine.",
    },
    {
      left: "",
      answers: ["Not only"],
      right: "is the car fast, but it is also fuel-efficient.",
    },
    {
      left: "This software",
      answers: ["not only"],
      right: "saves time but also reduces errors.",
    },
    {
      left: "",
      answers: ["Not only"],
      right: "does she speak five languages, but she also teaches them.",
    },
    {
      left: "The course teaches",
      answers: ["not only"],
      right: "theory but also practical skills.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">Практика: NOT ONLY... BUT ALSO</h2>
        <p className="text-lg text-gray-600">Завершите предложения</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-blue-800 mb-2">Помните:</p>
          <p className="text-gray-700">• Если "not only" начинает предложение → используйте инверсию</p>
          <p className="text-gray-700">• Если "not only" в середине → инверсия не нужна</p>
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
        <div className="text-7xl mb-4">🔀</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">EITHER... OR / NEITHER... NOR</h2>
        <p className="text-lg text-gray-600">Представление альтернатив и отрицаний</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">EITHER... OR (или... или)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-3">Значение: один или другой (но не оба)</p>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">You can <span className="text-purple-700">either</span> stay here <span className="text-purple-700">or</span> come with me.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: глагол + глагол</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-purple-700">Either</span> you apologize <span className="text-purple-700">or</span> I'm leaving.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: предложение + предложение</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">The meeting will be <span className="text-purple-700">either</span> on Monday <span className="text-purple-700">or</span> on Tuesday.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: предложная фраза + предложная фраза</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 mb-1">We must <span className="text-purple-700">either</span> reduce costs <span className="text-purple-700">or</span> increase revenue.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: глагол + существительное + глагол + существительное</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Согласование подлежащего и глагола:</p>
              <p className="text-sm text-gray-700">Когда подлежащие соединены союзом "either...or", глагол согласуется с <span className="font-bold">ближайшим подлежащим</span>:</p>
              <p className="text-sm text-green-700 mt-2">✅ Either Tom or his brothers <span className="font-bold">are</span> coming. (ближайшее = brothers = множ. число)</p>
              <p className="text-sm text-green-700">✅ Either his brothers or Tom <span className="font-bold">is</span> coming. (ближайшее = Tom = ед. число)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">NEITHER... NOR (ни... ни)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Значение: ни то, ни другое (оба ложны/отрицательны)</p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">She is <span className="text-blue-700">neither</span> tall <span className="text-blue-700">nor</span> short — she's average height.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: прилагательное + прилагательное</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">He <span className="text-blue-700">neither</span> smokes <span className="text-blue-700">nor</span> drinks.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: глагол + глагол</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1">The plan is <span className="text-blue-700">neither</span> practical <span className="text-blue-700">nor</span> affordable.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: прилагательное + прилагательное</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">Neither</span> the manager <span className="text-blue-700">nor</span> the employees were aware of the problem.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: именная фраза + именная фраза</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">⚠️ Не используйте двойное отрицание:</p>
              <p className="text-sm text-red-700">❌ I don't like neither tea nor coffee.</p>
              <p className="text-sm text-green-700">✅ I like neither tea nor coffee.</p>
              <p className="text-sm text-green-700">✅ I don't like either tea or coffee.</p>
              <p className="text-sm text-gray-600 mt-2">"Neither...nor" уже является отрицанием, поэтому не используйте "not" перед ним!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">⚡ ИНВЕРСИЯ с NEITHER (Продвинутый уровень)</h3>

        <div className="space-y-4">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-gray-700 mb-4">Когда "neither" начинает предложение, используйте инверсию:</p>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800"><span className="text-green-700">Neither</span> does he speak French, <span className="text-green-700">nor</span> does he understand it.</p>
                <p className="text-sm text-gray-600 italic">Инверсия в обеих частях</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800"><span className="text-green-700">Neither</span> was the plan approved, <span className="text-green-700">nor</span> was it even discussed.</p>
                <p className="text-sm text-gray-600 italic">Инверсия с "was"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="font-bold text-lg mb-4 text-orange-900">🎯 Быстрое сравнение</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-purple-400">
            <p className="font-bold text-purple-700 mb-1">EITHER... OR</p>
            <p className="text-sm text-gray-600">Положительное: один вариант ИЛИ другой вариант</p>
            <p className="text-xs text-gray-500 italic mt-1">You can either go or stay.</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-bold text-blue-700 mb-1">NEITHER... NOR</p>
            <p className="text-sm text-gray-600">Отрицательное: НЕ это И НЕ то</p>
            <p className="text-xs text-gray-500 italic mt-1">I like neither tea nor coffee.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "You can",
      answers: ["either"],
      right: "call me or send an email.",
    },
    {
      left: "The solution is",
      answers: ["neither"],
      right: "quick nor easy.",
    },
    {
      left: "",
      answers: ["Either"],
      right: "you finish the work today, or we will miss the deadline.",
    },
    {
      left: "She speaks",
      answers: ["neither"],
      right: "Spanish nor Italian.",
    },
    {
      left: "We must",
      answers: ["either"],
      right: "accept the offer or reject it completely.",
    },
    {
      left: "The project was",
      answers: ["neither"],
      right: "on time nor within budget.",
    },
    {
      left: "",
      answers: ["Either"],
      right: "the manager or the team leader will attend the meeting.",
    },
    {
      left: "He is",
      answers: ["neither"],
      right: "friendly nor helpful.",
    },
    {
      left: "You can",
      answers: ["either"],
      right: "pay by card or pay in cash.",
    },
    {
      left: "The plan is",
      answers: ["neither"],
      right: "innovative nor practical.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔀</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Практика: EITHER... OR / NEITHER... NOR</h2>
        <p className="text-lg text-gray-600">Выберите правильный парный союз</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">➕</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">BOTH... AND</h2>
        <p className="text-lg text-gray-600">Объединение двух положительных элементов</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 border-2 border-pink-200">
        <h3 className="text-2xl font-bold mb-6 text-pink-800">Структура и использование</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <p className="text-lg font-bold text-pink-900 mb-3">BOTH... AND (и... и, как... так и)</p>
            <p className="text-gray-700 mb-4">Значение: включает две вещи (подчеркивает, что ОБЕ истинны)</p>

            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">The course is <span className="text-pink-700">both</span> informative <span className="text-pink-700">and</span> entertaining.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: прилагательное + прилагательное</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">She is <span className="text-pink-700">both</span> a teacher <span className="text-pink-700">and</span> a researcher.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: существительное + существительное</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">He <span className="text-pink-700">both</span> designs <span className="text-pink-700">and</span> develops software.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: глагол + глагол</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-pink-700">Both</span> the quality <span className="text-pink-700">and</span> the price are important.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: именная фраза + именная фраза</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 mb-1">The plan is <span className="text-pink-700">both</span> cost-effective <span className="text-pink-700">and</span> environmentally friendly.</p>
                <p className="text-sm text-gray-600 italic">Параллельно: составное прилагательное + составное прилагательное</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-800">Согласование подлежащего и глагола</h4>

            <p className="text-gray-700 mb-4">"Both...and" соединяет два подлежащих → всегда используйте <span className="font-bold text-blue-700">ГЛАГОЛ ВО МНОЖЕСТВЕННОМ ЧИСЛЕ</span>:</p>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-1">✅ Both Tom and Sarah ARE coming.</p>
                <p className="text-sm text-gray-600">(глагол во множ. числе "are")</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-700 mb-1">✅ Both the manager and the director HAVE approved the plan.</p>
                <p className="text-sm text-gray-600">(глагол во множ. числе "have")</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-700 mb-1">❌ Both Tom and Sarah IS coming.</p>
                <p className="text-sm text-gray-600">(неправильно — должно быть "are")</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Позиция в предложении</h4>

            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Паттерн 1: "Both" перед существительными</p>
                <p className="text-gray-700">Both <span className="underline">the students</span> and <span className="underline">the teachers</span> enjoyed the event.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Паттерн 2: "Both" после глагола "to be"</p>
                <p className="text-gray-700">The plan is both <span className="underline">practical</span> and <span className="underline">affordable</span>.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Паттерн 3: "Both" перед основным глаголом</p>
                <p className="text-gray-700">She both <span className="underline">writes</span> and <span className="underline">directs</span> films.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-4 text-yellow-900">❌ Распространённые ошибки</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ Both Tom and Sarah is here.</p>
            <p className="font-bold text-green-700 mb-1">✅ Both Tom and Sarah ARE here.</p>
            <p className="text-sm text-gray-600">Всегда используйте глагол во множ. числе с "both...and"</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ She both is smart and creative.</p>
            <p className="font-bold text-green-700 mb-1">✅ She is both smart and creative.</p>
            <p className="text-sm text-gray-600">"Both" идет после "to be", а не перед</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-bold text-red-700 mb-1">❌ He both likes pizza and hamburgers.</p>
            <p className="font-bold text-green-700 mb-1">✅ He likes both pizza and hamburgers.</p>
            <p className="text-sm text-gray-600">Соблюдайте структуру: существительное + существительное (не глагол + существительное)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "The software is",
      answers: ["both"],
      right: "powerful and user-friendly.",
    },
    {
      left: "",
      answers: ["Both"],
      right: "the CEO and the CFO attended the meeting.",
    },
    {
      left: "She",
      answers: ["both"],
      right: "teaches and does research.",
    },
    {
      left: "The proposal is",
      answers: ["both"],
      right: "innovative and practical.",
    },
    {
      left: "",
      answers: ["Both"],
      right: "my brother and my sister live abroad.",
    },
    {
      left: "The solution must be",
      answers: ["both"],
      right: "effective and affordable.",
    },
    {
      left: "He",
      answers: ["both"],
      right: "writes and edits articles.",
    },
    {
      left: "",
      answers: ["Both"],
      right: "the advantages and the disadvantages should be considered.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">➕</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Практика: BOTH... AND</h2>
        <p className="text-lg text-gray-600">Завершите предложения</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-2 border-pink-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-pink-800 mb-2">Помните:</p>
          <p className="text-gray-700">• "Both...and" всегда требует глагола во МНОЖЕСТВЕННОМ числе</p>
          <p className="text-gray-700">• Элементы должны быть параллельны</p>
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
        <div className="text-7xl mb-4">🔄</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Специальные паттерны</h2>
        <p className="text-lg text-gray-600">WHETHER... OR & THE... THE</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold mb-6 text-indigo-800">WHETHER... OR (ли... или)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-indigo-300">
            <p className="text-lg font-bold text-indigo-900 mb-3">Значение: вводит альтернативы в косвенных вопросах или неопределённости</p>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">I don't know <span className="text-indigo-700">whether</span> to stay <span className="text-indigo-700">or</span> to leave.</p>
                <p className="text-sm text-gray-600 italic">Косвенный вопрос: to + V1 / to + V1</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-indigo-700">Whether</span> you agree <span className="text-indigo-700">or</span> disagree, you must respect the decision.</p>
                <p className="text-sm text-gray-600 italic">Параллельные предложения</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">I'm not sure <span className="text-indigo-700">whether</span> the plan will succeed <span className="text-indigo-700">or</span> fail.</p>
                <p className="text-sm text-gray-600 italic">Параллельные глаголы</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-semibold text-gray-800 mb-1">The question is <span className="text-indigo-700">whether</span> to invest now <span className="text-indigo-700">or</span> wait for better conditions.</p>
                <p className="text-sm text-gray-600 italic">Параллельные инфинитивные фразы</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-300">
              <p className="font-bold text-blue-800 mb-2">WHETHER против IF:</p>
              <p className="text-sm text-gray-700">В конструкциях "whether...or" вы ДОЛЖНЫ использовать "whether" (а не "if"):</p>
              <p className="text-sm text-green-700 mt-2">✅ I don't know whether to go or stay.</p>
              <p className="text-sm text-red-700">❌ I don't know if to go or stay.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">THE... THE (чем... тем)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <p className="text-lg font-bold text-blue-900 mb-3">Значение: показывает пропорциональное отношение (чем больше/меньше X, тем больше/меньше Y)</p>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300 mb-4">
              <p className="font-bold text-blue-800 mb-2">Формула:</p>
              <p className="text-gray-800"><span className="font-bold text-blue-700">The</span> + сравнительная степень... <span className="font-bold text-blue-700">the</span> + сравнительная степень</p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">The more</span> you practice, <span className="text-blue-700">the better</span> you become.</p>
                <p className="text-sm text-gray-600 italic">The + more... the + better</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">The faster</span> we work, <span className="text-blue-700">the sooner</span> we'll finish.</p>
                <p className="text-sm text-gray-600 italic">The + faster... the + sooner</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">The more expensive</span> the product, <span className="text-blue-700">the higher</span> the quality.</p>
                <p className="text-sm text-gray-600 italic">Опускаем глагол для краткости</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">The less</span> you worry, <span className="text-blue-700">the happier</span> you'll be.</p>
                <p className="text-sm text-gray-600 italic">The + less... the + happier</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 mb-1"><span className="text-blue-700">The harder</span> the challenge, <span className="text-blue-700">the greater</span> the reward.</p>
                <p className="text-sm text-gray-600 italic">Краткая версия (без глаголов)</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4 border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">💡 Совет профессионала:</p>
              <p className="text-sm text-gray-700">Вы можете опустить глаголы во второй части для более краткого, изощрённого стиля:</p>
              <p className="text-sm text-gray-700 mt-2">Длинно: The more expensive the car is, the better the quality is.</p>
              <p className="text-sm text-green-700">Кратко: The more expensive the car, the better the quality.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="font-bold text-lg mb-4 text-purple-900">🎯 Краткое резюме</h3>

        <div className="space-y-3">
          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="font-bold text-indigo-700">WHETHER... OR</p>
            <p className="text-sm text-gray-600">= вводит альтернативы/неопределённость</p>
            <p className="text-xs text-gray-500 italic">I don't know whether to accept or decline.</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-bold text-blue-700">THE... THE</p>
            <p className="text-sm text-gray-600">= пропорциональное отношение (сравнит. степень...сравнит. степень)</p>
            <p className="text-xs text-gray-500 italic">The more you study, the smarter you become.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "I'm not sure",
      answers: ["whether"],
      right: "to accept the offer or reject it.",
    },
    {
      left: "",
      answers: ["The"],
      right: "more you practice, the better you get.",
    },
    {
      left: "The question is",
      answers: ["whether"],
      right: "to invest now or wait.",
    },
    {
      left: "",
      answers: ["The"],
      right: "harder you work, the more successful you'll be.",
    },
    {
      left: "",
      answers: ["Whether"],
      right: "you agree or disagree, the decision has been made.",
    },
    {
      left: "",
      answers: ["The"],
      right: "sooner we start, the faster we'll finish.",
    },
    {
      left: "I don't know",
      answers: ["whether"],
      right: "to stay here or move abroad.",
    },
    {
      left: "",
      answers: ["The"],
      right: "less you eat, the hungrier you feel.",
    },
    {
      left: "We must decide",
      answers: ["whether"],
      right: "to proceed with the plan or abandon it.",
    },
    {
      left: "",
      answers: ["The"],
      right: "more expensive the wine, the better the taste.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔄</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Практика: WHETHER... OR & THE... THE</h2>
        <p className="text-lg text-gray-600">Завершите паттерны</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
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
          Параллелизм и баланс — Полный гид
        </h2>
        <p className="text-lg text-gray-600">Ваш основной справочник по парным союзам</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 text-orange-900">📚 Полная шпаргалка</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
            <h4 className="font-bold text-xl mb-4 text-blue-800">NOT ONLY... BUT ALSO</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-1">Значение: добавляет акцент + дополнительную информацию</p>
                <p className="text-gray-700">She is not only smart but also hardworking.</p>
                <p className="text-sm text-gray-600 mt-2">⚠️ С инверсией (в начале): Not only IS she smart, but she's also kind.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
            <h4 className="font-bold text-xl mb-4 text-purple-800">EITHER... OR</h4>

            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-1">Значение: один вариант или другой (выбор)</p>
                <p className="text-gray-700">You can either stay or leave.</p>
                <p className="text-sm text-gray-600 mt-2">⚠️ Глагол согласуется с ближайшим подлежащим: Either Tom or his brothers ARE coming.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
            <h4 className="font-bold text-xl mb-4 text-blue-800">NEITHER... NOR</h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-1">Значение: ни то, ни другое (двойное отрицание)</p>
                <p className="text-gray-700">He is neither tall nor short.</p>
                <p className="text-sm text-gray-600 mt-2">⚠️ Не используйте с "not": ❌ I don't like neither. ✅ I like neither.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-pink-400">
            <h4 className="font-bold text-xl mb-4 text-pink-800">BOTH... AND</h4>

            <div className="space-y-3">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-1">Значение: включает две вещи (акцент на обеих)</p>
                <p className="text-gray-700">The plan is both practical and affordable.</p>
                <p className="text-sm text-gray-600 mt-2">⚠️ Всегда глагол во МНОЖЕСТВЕННОМ числе: Both Tom and Sarah ARE here.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-xl mb-4 text-indigo-800">WHETHER... OR</h4>

            <div className="space-y-3">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-bold text-indigo-700 mb-1">Значение: альтернативы в косвенных вопросах/неопределённости</p>
                <p className="text-gray-700">I don't know whether to stay or leave.</p>
                <p className="text-sm text-gray-600 mt-2">⚠️ Используйте "whether" (а не "if") в "whether...or"</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-cyan-400">
            <h4 className="font-bold text-xl mb-4 text-cyan-800">THE... THE (сравнительная степень)</h4>

            <div className="space-y-3">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="font-bold text-cyan-700 mb-1">Значение: пропорциональное отношение</p>
                <p className="text-gray-700">The more you practice, the better you become.</p>
                <p className="text-sm text-gray-600 mt-2">⚠️ Обе части используют сравнительную степень (more, less, faster и т.д.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 p-8 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-6 text-red-900">❌ Самые распространённые ошибки</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ Not only she is smart but also kind.</p>
            <p className="font-bold text-green-700 mb-2">✅ Not only IS she smart but she's also kind.</p>
            <p className="text-sm text-gray-600">Используйте инверсию, когда начинаете с "not only"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ Both Tom and Sarah is here.</p>
            <p className="font-bold text-green-700 mb-2">✅ Both Tom and Sarah ARE here.</p>
            <p className="text-sm text-gray-600">"Both...and" всегда требует глагола во множ. числе</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ I don't like neither pizza nor pasta.</p>
            <p className="font-bold text-green-700 mb-2">✅ I like neither pizza nor pasta.</p>
            <p className="text-sm text-gray-600">Не используйте двойное отрицание с "neither...nor"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ I don't know if to go or stay.</p>
            <p className="font-bold text-green-700 mb-2">✅ I don't know whether to go or stay.</p>
            <p className="text-sm text-gray-600">Используйте "whether" (а не "if") с "or"</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-2">⚠️ Непараллельные структуры</p>
            <p className="text-sm text-red-700">❌ She both teaches and a researcher.</p>
            <p className="text-sm text-green-700">✅ She is both a teacher and a researcher.</p>
            <p className="text-sm text-gray-600">Всегда соблюдайте грамматические формы (сущ. + сущ., глагол + глагол и т.д.)</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl border-2 border-green-400">
        <h3 className="text-2xl font-bold mb-6 text-green-900">✨ Параллелизм в действии</h3>

        <div className="bg-white/80 p-6 rounded-lg space-y-4">
          <p className="text-gray-800 font-semibold mb-4">Пример убедительного абзаца:</p>

          <p className="text-gray-800">
            The new policy is <span className="font-bold text-pink-700">both</span> practical <span className="font-bold text-pink-700">and</span> affordable.
            <span className="font-bold text-blue-700">Not only</span> does it reduce costs, <span className="font-bold text-blue-700">but it also</span> improves efficiency.
            Employees can <span className="font-bold text-purple-700">either</span> adopt the new system immediately <span className="font-bold text-purple-700">or</span> continue with the old one for three more months.
            However, the transition is <span className="font-bold text-blue-700">neither</span> difficult <span className="font-bold text-blue-700">nor</span> time-consuming.
          </p>

          <p className="text-gray-800">
            <span className="font-bold text-cyan-700">The sooner</span> we implement this change, <span className="font-bold text-cyan-700">the faster</span> we'll see results.
            <span className="font-bold text-indigo-700">Whether</span> you support the policy <span className="font-bold text-indigo-700">or</span> have concerns,
            your input is valuable. Remember: <span className="font-bold text-cyan-700">the more</span> we communicate, <span className="font-bold text-cyan-700">the better</span> our decisions will be.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="font-bold text-xl mb-4 text-yellow-900">🏆 Mastery Achieved!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Вы освоили искусство параллельных структур! Эти конструкции делают вашу речь и письмо более ритмичными, запоминающимися и убедительными.
          Используйте их в эссе, презентациях и формальной переписке для создания мощного эффекта.
        </p>
        <div className="bg-white/60 p-4 rounded-lg">
          <p className="font-bold text-orange-700 mb-2">Финальные напоминания:</p>
          <p className="text-gray-700">• Всегда соблюдайте <span className="font-bold">параллельную структуру</span> (одинаковые грамматические формы)</p>
          <p className="text-gray-700">• Используйте <span className="font-bold">инверсию</span> с "not only" в начале предложения</p>
          <p className="text-gray-700">• "<span className="font-bold">Both...and</span>" всегда требует глагола во множ. числе</p>
          <p className="text-gray-700">• Не используйте двойное отрицание с "<span className="font-bold">neither...nor</span>"</p>
        </div>
      </div>
    </div>
  );
}
