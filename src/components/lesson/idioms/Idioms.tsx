"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

// Карточка идиомы с иллюстрацией
function IdiomCard({
  idiom,
  literal,
  meaning,
  example,
  emoji,
  color = "indigo",
}: {
  idiom: string;
  literal: string;
  meaning: string;
  example: string;
  emoji: string;
  color?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
    rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700" },
    sky: { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700" },
    violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700" },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`relative cursor-pointer transition-all duration-300 ${
        flipped ? "scale-[1.02]" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`${colors.bg} rounded-2xl p-5 border-2 ${colors.border} shadow-sm hover:shadow-lg transition-shadow`}>
        {/* Emoji */}
        <div className="text-5xl mb-3 text-center">{emoji}</div>

        {/* Idiom */}
        <h3 className={`text-xl font-bold ${colors.text} text-center mb-2`}>
          &quot;{idiom}&quot;
        </h3>

        {/* Literal meaning crossed out */}
        <div className="text-center mb-3">
          <span className="text-slate-400 line-through text-sm">{literal}</span>
        </div>

        {/* Real meaning */}
        <div className="bg-white rounded-xl p-3 mb-3">
          <p className="text-slate-700 text-center font-medium">{meaning}</p>
        </div>

        {/* Example (shown when flipped) */}
        <div className={`overflow-hidden transition-all duration-300 ${flipped ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-slate-100 rounded-lg p-3 mt-2">
            <p className="text-sm text-slate-600 italic">&quot;{example}&quot;</p>
          </div>
        </div>

        {/* Tap hint */}
        <p className="text-xs text-slate-400 text-center mt-2">
          {flipped ? "Нажмите, чтобы скрыть" : "Нажмите для примера →"}
        </p>
      </div>
    </div>
  );
}

// Категория с заголовком
function Category({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="text-3xl">{icon}</span>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-8xl">🎭</div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-2">Idioms & Expressions</h1>
              <p className="text-xl text-slate-600 mb-4">Идиомы — секретный код носителей языка!</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  30+ идиом
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">
                  Реальные примеры
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Практика
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What are idioms */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🤔 Что такое идиомы?</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Идиома — это устойчивое выражение, значение которого <strong>нельзя понять</strong> по
            отдельным словам. Например, &quot;piece of cake&quot; не про торт, а про что-то очень лёгкое!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <p className="font-bold text-red-800 mb-1">❌ Буквально:</p>
              <p className="text-slate-700">&quot;It&apos;s raining cats and dogs&quot; = Идёт дождь из кошек и собак</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="font-bold text-green-800 mb-1">✅ На самом деле:</p>
              <p className="text-slate-700">&quot;It&apos;s raining cats and dogs&quot; = Льёт как из ведра</p>
            </div>
          </div>
        </div>

        {/* Easy Idioms */}
        <Category title="Лёгкие и частые" icon="⭐">
          <IdiomCard
            emoji="🍰"
            idiom="piece of cake"
            literal="кусок торта"
            meaning="Очень легко, проще простого"
            example="The exam was a piece of cake!"
            color="amber"
          />
          <IdiomCard
            emoji="🌧️"
            idiom="under the weather"
            literal="под погодой"
            meaning="Плохо себя чувствовать"
            example="I'm feeling a bit under the weather today."
            color="sky"
          />
          <IdiomCard
            emoji="📚"
            idiom="hit the books"
            literal="бить книги"
            meaning="Усердно учиться"
            example="I need to hit the books for my finals."
            color="indigo"
          />
          <IdiomCard
            emoji="🛏️"
            idiom="hit the sack"
            literal="ударить мешок"
            meaning="Пойти спать"
            example="I'm tired, time to hit the sack."
            color="violet"
          />
          <IdiomCard
            emoji="💸"
            idiom="cost an arm and a leg"
            literal="стоить руку и ногу"
            meaning="Стоить очень дорого"
            example="This car cost me an arm and a leg!"
            color="rose"
          />
          <IdiomCard
            emoji="🎯"
            idiom="break a leg"
            literal="сломай ногу"
            meaning="Удачи! (в театре)"
            example="Break a leg at your audition!"
            color="emerald"
          />
        </Category>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Идиомы о работе и усилиях</h1>
          <p className="text-slate-600">Выражения для описания труда, успеха и неудач</p>
        </div>

        <Category title="Работа и усилия" icon="💼">
          <IdiomCard
            emoji="🔥"
            idiom="burn the midnight oil"
            literal="жечь полуночное масло"
            meaning="Работать допоздна"
            example="She burned the midnight oil to finish the project."
            color="amber"
          />
          <IdiomCard
            emoji="⚡"
            idiom="go the extra mile"
            literal="пройти лишнюю милю"
            meaning="Сделать больше ожидаемого"
            example="He always goes the extra mile for his clients."
            color="indigo"
          />
          <IdiomCard
            emoji="🎪"
            idiom="learn the ropes"
            literal="изучить верёвки"
            meaning="Освоиться на новом месте"
            example="It took me a month to learn the ropes."
            color="emerald"
          />
          <IdiomCard
            emoji="🏆"
            idiom="call the shots"
            literal="делать выстрелы"
            meaning="Принимать решения, быть главным"
            example="Who calls the shots around here?"
            color="rose"
          />
          <IdiomCard
            emoji="⏰"
            idiom="in the nick of time"
            literal="в зарубке времени"
            meaning="В последний момент"
            example="We arrived in the nick of time."
            color="sky"
          />
          <IdiomCard
            emoji="🎸"
            idiom="play it by ear"
            literal="играть на слух"
            meaning="Действовать по обстоятельствам"
            example="Let's just play it by ear and see what happens."
            color="violet"
          />
        </Category>

        <div className="bg-indigo-50 rounded-2xl p-5 border border-indigo-200">
          <p className="flex items-start gap-2 text-indigo-800">
            <span className="text-2xl">💡</span>
            <span>
              <strong>Совет:</strong> Идиомы часто связаны с культурой. &quot;Burn the midnight oil&quot;
              появилась, когда люди работали при свечах или масляных лампах!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Идиомы об эмоциях</h1>
          <p className="text-slate-600">Как выражать чувства красочно и естественно</p>
        </div>

        <Category title="Эмоции и состояния" icon="💫">
          <IdiomCard
            emoji="☁️"
            idiom="on cloud nine"
            literal="на облаке номер 9"
            meaning="Быть невероятно счастливым"
            example="She was on cloud nine after the proposal."
            color="sky"
          />
          <IdiomCard
            emoji="😤"
            idiom="blow off steam"
            literal="выпустить пар"
            meaning="Выплеснуть эмоции, расслабиться"
            example="I go running to blow off steam."
            color="rose"
          />
          <IdiomCard
            emoji="🦋"
            idiom="butterflies in my stomach"
            literal="бабочки в животе"
            meaning="Волноваться (приятно)"
            example="I had butterflies in my stomach before the date."
            color="violet"
          />
          <IdiomCard
            emoji="❄️"
            idiom="get cold feet"
            literal="получить холодные ноги"
            meaning="Испугаться в последний момент"
            example="He got cold feet before the wedding."
            color="sky"
          />
          <IdiomCard
            emoji="🌈"
            idiom="over the moon"
            literal="над луной"
            meaning="Быть в восторге"
            example="They were over the moon about the news."
            color="amber"
          />
          <IdiomCard
            emoji="💔"
            idiom="down in the dumps"
            literal="внизу в свалках"
            meaning="Быть в депрессии, грустить"
            example="He's been down in the dumps lately."
            color="indigo"
          />
        </Category>

        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
          <h4 className="font-bold text-emerald-800 mb-2">🎭 Интересный факт</h4>
          <p className="text-slate-700">
            &quot;Butterflies in my stomach&quot; — одна из немногих идиом, которая переводится
            почти буквально на русский: &quot;бабочки в животе&quot;!
          </p>
        </div>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Идиомы об общении</h1>
          <p className="text-slate-600">Как говорить о разговорах и отношениях</p>
        </div>

        <Category title="Общение и отношения" icon="🗣️">
          <IdiomCard
            emoji="🫘"
            idiom="spill the beans"
            literal="рассыпать бобы"
            meaning="Выдать секрет"
            example="Who spilled the beans about the party?"
            color="amber"
          />
          <IdiomCard
            emoji="🧊"
            idiom="break the ice"
            literal="разбить лёд"
            meaning="Начать разговор, снять напряжение"
            example="His joke helped break the ice."
            color="sky"
          />
          <IdiomCard
            emoji="👀"
            idiom="see eye to eye"
            literal="видеть глаза в глаза"
            meaning="Быть согласным"
            example="We don't always see eye to eye."
            color="indigo"
          />
          <IdiomCard
            emoji="🤐"
            idiom="bite your tongue"
            literal="укусить язык"
            meaning="Сдержаться, промолчать"
            example="I had to bite my tongue to not say anything."
            color="rose"
          />
          <IdiomCard
            emoji="🎯"
            idiom="hit the nail on the head"
            literal="ударить гвоздь по шляпке"
            meaning="Попасть в точку"
            example="You hit the nail on the head with that analysis."
            color="emerald"
          />
          <IdiomCard
            emoji="🌲"
            idiom="beat around the bush"
            literal="бить вокруг куста"
            meaning="Ходить вокруг да около"
            example="Stop beating around the bush and tell me!"
            color="violet"
          />
        </Category>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">🇬🇧 British vs American</h4>
            <p className="text-sm text-slate-600">
              Некоторые идиомы отличаются: британцы говорят &quot;touch wood&quot;,
              американцы — &quot;knock on wood&quot; (постучать по дереву).
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">🌍 Универсальные идиомы</h4>
            <p className="text-sm text-slate-600">
              &quot;Break the ice&quot; существует во многих языках, включая русский
              (&quot;растопить лёд&quot;).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Ещё больше идиом!</h1>
          <p className="text-slate-600">Разные ситуации, разные выражения</p>
        </div>

        <Category title="Деньги и время" icon="💰">
          <IdiomCard
            emoji="💵"
            idiom="break the bank"
            literal="разбить банк"
            meaning="Потратить все деньги"
            example="This vacation won't break the bank."
            color="emerald"
          />
          <IdiomCard
            emoji="⏳"
            idiom="kill time"
            literal="убить время"
            meaning="Скоротать время"
            example="I'm just killing time until the meeting."
            color="amber"
          />
          <IdiomCard
            emoji="🤑"
            idiom="make a killing"
            literal="сделать убийство"
            meaning="Заработать много денег"
            example="He made a killing in the stock market."
            color="rose"
          />
        </Category>

        <Category title="Тело и здоровье" icon="🏃">
          <IdiomCard
            emoji="👂"
            idiom="keep an ear to the ground"
            literal="держать ухо у земли"
            meaning="Быть в курсе событий"
            example="Keep an ear to the ground for any news."
            color="indigo"
          />
          <IdiomCard
            emoji="💪"
            idiom="twist someone's arm"
            literal="выкрутить руку"
            meaning="Уговорить, убедить"
            example="You don't have to twist my arm!"
            color="sky"
          />
          <IdiomCard
            emoji="🦶"
            idiom="put your foot in your mouth"
            literal="засунуть ногу в рот"
            meaning="Сказать что-то неуместное"
            example="I really put my foot in my mouth there."
            color="violet"
          />
        </Category>

        <Category title="Животные" icon="🐾">
          <IdiomCard
            emoji="🐘"
            idiom="elephant in the room"
            literal="слон в комнате"
            meaning="Очевидная проблема, которую игнорируют"
            example="Let's address the elephant in the room."
            color="rose"
          />
          <IdiomCard
            emoji="🐎"
            idiom="straight from the horse's mouth"
            literal="прямо изо рта лошади"
            meaning="Из первоисточника"
            example="I heard it straight from the horse's mouth."
            color="amber"
          />
          <IdiomCard
            emoji="🐈"
            idiom="let the cat out of the bag"
            literal="выпустить кота из сумки"
            meaning="Раскрыть секрет случайно"
            example="Oops, I let the cat out of the bag!"
            color="emerald"
          />
        </Category>
      </div>
    </div>
  );
}

function Step6() {
  const items: FillItem[] = [
    {
      left: "The test was a",
      answers: ["piece of cake"],
      right: "— I finished in 20 minutes!",
      explanation: "piece of cake = очень легко",
    },
    {
      left: "I'm feeling",
      answers: ["under the weather"],
      right: "today, I think I caught a cold.",
      explanation: "under the weather = плохо себя чувствовать",
    },
    {
      left: "Time to",
      answers: ["hit the books"],
      right: "— exams are next week!",
      explanation: "hit the books = усердно учиться",
    },
    {
      left: "She was",
      answers: ["on cloud nine", "over the moon"],
      right: "when she got the promotion.",
      explanation: "on cloud nine / over the moon = очень счастливый",
    },
    {
      left: "Don't",
      answers: ["beat around the bush"],
      right: "— just tell me the truth!",
      explanation: "beat around the bush = ходить вокруг да около",
    },
    {
      left: "Who",
      answers: ["spilled the beans"],
      right: "about the surprise party?",
      explanation: "spill the beans = выдать секрет",
    },
    {
      left: "His joke helped",
      answers: ["break the ice"],
      right: "at the awkward dinner.",
      explanation: "break the ice = снять напряжение",
    },
    {
      left: "I need to",
      answers: ["blow off steam"],
      right: "after this stressful week.",
      explanation: "blow off steam = выплеснуть эмоции",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">✏️ Практика</h1>
          <p className="text-slate-600">Проверьте, как хорошо вы запомнили идиомы!</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <CheckableExercise
            title="Вставьте подходящую идиому"
            instruction="Используйте идиомы из урока в правильной форме"
            items={items}
            wideInputs={true}
          />
        </div>

        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <p className="flex items-start gap-2 text-amber-800">
            <span className="text-xl">💡</span>
            <span>
              <strong>Подсказка:</strong> Помните, что идиомы нужно использовать целиком —
              нельзя менять слова местами или заменять их синонимами!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const idiomCategories = [
    {
      title: "Лёгкость/Сложность",
      items: [
        { idiom: "piece of cake", meaning: "очень легко" },
        { idiom: "walk in the park", meaning: "проще простого" },
        { idiom: "no sweat", meaning: "без проблем" },
      ],
    },
    {
      title: "Эмоции",
      items: [
        { idiom: "on cloud nine", meaning: "на седьмом небе" },
        { idiom: "under the weather", meaning: "плохо себя чувствовать" },
        { idiom: "butterflies in my stomach", meaning: "волноваться" },
        { idiom: "over the moon", meaning: "в восторге" },
        { idiom: "down in the dumps", meaning: "в депрессии" },
      ],
    },
    {
      title: "Работа",
      items: [
        { idiom: "hit the books", meaning: "усердно учиться" },
        { idiom: "burn the midnight oil", meaning: "работать допоздна" },
        { idiom: "go the extra mile", meaning: "делать больше" },
        { idiom: "learn the ropes", meaning: "освоиться" },
      ],
    },
    {
      title: "Общение",
      items: [
        { idiom: "break the ice", meaning: "снять напряжение" },
        { idiom: "spill the beans", meaning: "выдать секрет" },
        { idiom: "beat around the bush", meaning: "ходить вокруг да около" },
        { idiom: "see eye to eye", meaning: "быть согласным" },
      ],
    },
    {
      title: "Деньги/Время",
      items: [
        { idiom: "cost an arm and a leg", meaning: "очень дорого" },
        { idiom: "break the bank", meaning: "разориться" },
        { idiom: "kill time", meaning: "скоротать время" },
        { idiom: "in the nick of time", meaning: "в последний момент" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Congratulations */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
          <div className="text-7xl mb-4">🎭</div>
          <h1 className="text-3xl font-bold mb-2">Поздравляем!</h1>
          <p className="text-xl opacity-90">
            Вы изучили 30+ популярных английских идиом!
          </p>
        </div>

        {/* Cheat sheet */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>📋</span> Шпаргалка
          </h2>

          <div className="space-y-6">
            {idiomCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="font-bold text-slate-700 mb-2">{cat.title}</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.idiom}
                      className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
                    >
                      <span className="font-medium text-indigo-700">{item.idiom}</span>
                      <span className="text-slate-500 text-sm">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">🎬</div>
            <h4 className="font-bold text-slate-800 mb-2">Смотрите</h4>
            <p className="text-sm text-slate-600">
              В сериалах и фильмах идиомы используются постоянно!
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">📝</div>
            <h4 className="font-bold text-slate-800 mb-2">Записывайте</h4>
            <p className="text-sm text-slate-600">
              Ведите словарик идиом с примерами использования
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">🗣️</div>
            <h4 className="font-bold text-slate-800 mb-2">Используйте</h4>
            <p className="text-sm text-slate-600">
              Попробуйте использовать 1 новую идиому каждый день
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 text-white text-center">
          <p className="text-lg font-semibold">
            Now you can speak like a native! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Idioms({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}
