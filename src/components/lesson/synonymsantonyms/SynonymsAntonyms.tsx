"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

// Шкала интенсивности слов
function IntensityScale({
  words,
  label,
  color = "indigo",
}: {
  words: { word: string; level: number; translation: string }[];
  label: string;
  color?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colorClasses: Record<string, { bar: string; text: string; bg: string }> = {
    indigo: { bar: "bg-indigo-500", text: "text-indigo-700", bg: "bg-indigo-50" },
    emerald: { bar: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
    rose: { bar: "bg-rose-500", text: "text-rose-700", bg: "bg-rose-50" },
    amber: { bar: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50" },
    sky: { bar: "bg-sky-500", text: "text-sky-700", bg: "bg-sky-50" },
    violet: { bar: "bg-violet-500", text: "text-violet-700", bg: "bg-violet-50" },
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} rounded-2xl p-5 border border-slate-200`}>
      <p className="text-sm text-slate-500 mb-3">{label}</p>

      {/* Scale bar */}
      <div className="relative h-3 bg-slate-200 rounded-full mb-4">
        <div
          className={`absolute left-0 top-0 h-full ${colors.bar} rounded-full transition-all duration-300`}
          style={{ width: hoveredIndex !== null ? `${(hoveredIndex + 1) * (100 / words.length)}%` : "0%" }}
        />
      </div>

      {/* Words */}
      <div className="flex justify-between">
        {words.map((item, i) => (
          <div
            key={item.word}
            className="text-center cursor-pointer transition-transform hover:scale-110"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-4 h-4 rounded-full mx-auto mb-2 transition-all duration-200 ${
                hoveredIndex !== null && hoveredIndex >= i ? colors.bar : "bg-slate-300"
              }`}
            />
            <p className={`font-bold text-sm ${hoveredIndex === i ? colors.text : "text-slate-700"}`}>
              {item.word}
            </p>
            <p className={`text-xs transition-opacity duration-200 ${
              hoveredIndex === i ? "opacity-100 text-slate-600" : "opacity-0"
            }`}>
              {item.translation}
            </p>
          </div>
        ))}
      </div>

      {/* Arrow indicator */}
      <div className="flex justify-between mt-2 text-xs text-slate-400">
        <span>слабее →</span>
        <span>← сильнее</span>
      </div>
    </div>
  );
}

// Карточка антонимов
function AntonymPair({
  word1,
  word2,
  translation1,
  translation2,
  example1,
  example2,
}: {
  word1: string;
  word2: string;
  translation1: string;
  translation2: string;
  example1: string;
  example2: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flex">
        {/* Left side - word 1 */}
        <div className="flex-1 p-4 bg-gradient-to-br from-sky-50 to-blue-50 border-r border-slate-200">
          <p className="text-2xl font-black text-sky-700 mb-1">{word1}</p>
          <p className="text-sm text-slate-600">{translation1}</p>
        </div>

        {/* VS badge */}
        <div className="flex items-center justify-center px-3 bg-slate-100">
          <span className="text-xs font-bold text-slate-500 rotate-90">VS</span>
        </div>

        {/* Right side - word 2 */}
        <div className="flex-1 p-4 bg-gradient-to-br from-rose-50 to-pink-50">
          <p className="text-2xl font-black text-rose-700 mb-1">{word2}</p>
          <p className="text-sm text-slate-600">{translation2}</p>
        </div>
      </div>

      {/* Examples (shown when flipped) */}
      <div className={`overflow-hidden transition-all duration-300 ${flipped ? "max-h-40" : "max-h-0"}`}>
        <div className="grid grid-cols-2 gap-0 border-t border-slate-200">
          <div className="p-3 bg-sky-50/50 text-sm text-slate-700 italic border-r border-slate-200">
            &quot;{example1}&quot;
          </div>
          <div className="p-3 bg-rose-50/50 text-sm text-slate-700 italic">
            &quot;{example2}&quot;
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 py-1 bg-slate-50">
        {flipped ? "▲ скрыть примеры" : "▼ показать примеры"}
      </p>
    </div>
  );
}

// Облако синонимов
function SynonymCloud({
  baseWord,
  synonyms,
  translation,
}: {
  baseWord: string;
  synonyms: { word: string; nuance: string }[];
  translation: string;
}) {
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const colors = [
    "bg-indigo-100 text-indigo-700 border-indigo-300",
    "bg-emerald-100 text-emerald-700 border-emerald-300",
    "bg-amber-100 text-amber-700 border-amber-300",
    "bg-rose-100 text-rose-700 border-rose-300",
    "bg-sky-100 text-sky-700 border-sky-300",
    "bg-violet-100 text-violet-700 border-violet-300",
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      {/* Base word in center */}
      <div className="text-center mb-4">
        <span className="text-4xl font-black text-slate-800">{baseWord}</span>
        <p className="text-sm text-slate-500 mt-1">{translation}</p>
      </div>

      {/* Synonym cloud */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {synonyms.map((syn, i) => (
          <button
            key={syn.word}
            className={`px-4 py-2 rounded-full font-medium border-2 transition-all hover:scale-105 ${
              colors[i % colors.length]
            } ${activeWord === syn.word ? "ring-2 ring-offset-2 ring-slate-400" : ""}`}
            onClick={() => setActiveWord(activeWord === syn.word ? null : syn.word)}
          >
            {syn.word}
          </button>
        ))}
      </div>

      {/* Nuance explanation */}
      <div className={`transition-all duration-300 overflow-hidden ${activeWord ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-slate-50 rounded-lg p-3 text-center">
          <p className="text-sm text-slate-700">
            <span className="font-bold">{activeWord}</span>
            {" — "}
            {synonyms.find(s => s.word === activeWord)?.nuance}
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-2">
        Нажмите на слово, чтобы увидеть нюанс
      </p>
    </div>
  );
}

function Step1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Hero */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-8xl">🔄</div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-2">Synonyms & Antonyms</h1>
              <p className="text-xl text-slate-600 mb-4">Обогащайте свой словарь точными словами!</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
                  Synonyms = похожие
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">
                  Antonyms = противоположные
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 Зачем учить синонимы?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">✍️ Письмо</p>
              <p className="text-sm text-slate-700">Избегайте повторений, текст становится богаче</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <p className="font-bold text-emerald-800 mb-2">🗣️ Речь</p>
              <p className="text-sm text-slate-700">Выражайте мысли точнее и естественнее</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <p className="font-bold text-amber-800 mb-2">📖 Понимание</p>
              <p className="text-sm text-slate-700">Лучше понимайте нюансы в текстах</p>
            </div>
          </div>
        </div>

        {/* Size scale */}
        <IntensityScale
          label="РАЗМЕР: от маленького к огромному"
          color="indigo"
          words={[
            { word: "tiny", level: 1, translation: "крошечный" },
            { word: "small", level: 2, translation: "маленький" },
            { word: "medium", level: 3, translation: "средний" },
            { word: "big", level: 4, translation: "большой" },
            { word: "large", level: 5, translation: "крупный" },
            { word: "huge", level: 6, translation: "огромный" },
            { word: "enormous", level: 7, translation: "гигантский" },
          ]}
        />

        {/* Important note */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="flex items-start gap-2 text-amber-800">
            <span className="text-xl">⚠️</span>
            <span>
              <strong>Важно:</strong> Синонимы — это НЕ одинаковые слова! Каждое имеет свой оттенок значения.
              &quot;Big&quot; — нейтральное, &quot;huge&quot; — эмоциональное, &quot;enormous&quot; — очень формальное.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Шкалы интенсивности</h1>
          <p className="text-slate-600">Слова расположены от слабого к сильному</p>
        </div>

        <IntensityScale
          label="ХОРОШО → ОТЛИЧНО"
          color="emerald"
          words={[
            { word: "okay", level: 1, translation: "нормально" },
            { word: "good", level: 2, translation: "хорошо" },
            { word: "great", level: 3, translation: "отлично" },
            { word: "amazing", level: 4, translation: "потрясающе" },
            { word: "fantastic", level: 5, translation: "фантастически" },
            { word: "incredible", level: 6, translation: "невероятно" },
          ]}
        />

        <IntensityScale
          label="ПЛОХО → УЖАСНО"
          color="rose"
          words={[
            { word: "not great", level: 1, translation: "не очень" },
            { word: "bad", level: 2, translation: "плохо" },
            { word: "awful", level: 3, translation: "ужасно" },
            { word: "terrible", level: 4, translation: "кошмарно" },
            { word: "horrible", level: 5, translation: "жутко" },
            { word: "dreadful", level: 6, translation: "отвратительно" },
          ]}
        />

        <IntensityScale
          label="КРАСИВЫЙ"
          color="violet"
          words={[
            { word: "nice", level: 1, translation: "милый" },
            { word: "pretty", level: 2, translation: "симпатичный" },
            { word: "beautiful", level: 3, translation: "красивый" },
            { word: "gorgeous", level: 4, translation: "великолепный" },
            { word: "stunning", level: 5, translation: "сногсшибательный" },
          ]}
        />

        <IntensityScale
          label="БЫСТРО"
          color="amber"
          words={[
            { word: "slow", level: 1, translation: "медленно" },
            { word: "moderate", level: 2, translation: "умеренно" },
            { word: "fast", level: 3, translation: "быстро" },
            { word: "quick", level: 4, translation: "скоро" },
            { word: "rapid", level: 5, translation: "стремительно" },
            { word: "lightning", level: 6, translation: "молниеносно" },
          ]}
        />
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Облака синонимов</h1>
          <p className="text-slate-600">Нажмите на слово, чтобы узнать его нюанс</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SynonymCloud
            baseWord="HAPPY"
            translation="счастливый"
            synonyms={[
              { word: "glad", nuance: "формальное, часто в ответах" },
              { word: "pleased", nuance: "довольный результатом" },
              { word: "delighted", nuance: "очень рад, формально" },
              { word: "thrilled", nuance: "в восторге, эмоционально" },
              { word: "ecstatic", nuance: "вне себя от радости" },
              { word: "content", nuance: "спокойно довольный" },
            ]}
          />

          <SynonymCloud
            baseWord="SAD"
            translation="грустный"
            synonyms={[
              { word: "unhappy", nuance: "несчастный, общее" },
              { word: "upset", nuance: "расстроенный чем-то" },
              { word: "miserable", nuance: "очень несчастный" },
              { word: "depressed", nuance: "подавленный, долго" },
              { word: "heartbroken", nuance: "убитый горем" },
              { word: "devastated", nuance: "опустошённый" },
            ]}
          />

          <SynonymCloud
            baseWord="ANGRY"
            translation="злой"
            synonyms={[
              { word: "annoyed", nuance: "раздражённый, слегка" },
              { word: "irritated", nuance: "раздражённый чем-то" },
              { word: "frustrated", nuance: "расстроенный неудачей" },
              { word: "furious", nuance: "в ярости" },
              { word: "livid", nuance: "вне себя от злости" },
              { word: "outraged", nuance: "возмущённый несправедливостью" },
            ]}
          />

          <SynonymCloud
            baseWord="SCARED"
            translation="напуганный"
            synonyms={[
              { word: "nervous", nuance: "нервничающий" },
              { word: "anxious", nuance: "тревожный" },
              { word: "worried", nuance: "обеспокоенный" },
              { word: "frightened", nuance: "испуганный" },
              { word: "terrified", nuance: "в ужасе" },
              { word: "petrified", nuance: "окаменевший от страха" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Антонимы</h1>
          <p className="text-slate-600">Слова с противоположным значением</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <AntonymPair
            word1="hot"
            word2="cold"
            translation1="горячий"
            translation2="холодный"
            example1="It's so hot today!"
            example2="The weather is cold in winter."
          />
          <AntonymPair
            word1="fast"
            word2="slow"
            translation1="быстрый"
            translation2="медленный"
            example1="He's a fast runner."
            example2="The traffic is so slow."
          />
          <AntonymPair
            word1="rich"
            word2="poor"
            translation1="богатый"
            translation2="бедный"
            example1="She became rich after the deal."
            example2="The country is very poor."
          />
          <AntonymPair
            word1="easy"
            word2="difficult"
            translation1="лёгкий"
            translation2="трудный"
            example1="The test was easy."
            example2="This problem is difficult to solve."
          />
          <AntonymPair
            word1="early"
            word2="late"
            translation1="ранний"
            translation2="поздний"
            example1="I wake up early every day."
            example2="Sorry, I'm late again!"
          />
          <AntonymPair
            word1="ancient"
            word2="modern"
            translation1="древний"
            translation2="современный"
            example1="Ancient Rome was powerful."
            example2="Modern technology is amazing."
          />
        </div>

        <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
          <p className="flex items-start gap-2 text-violet-800">
            <span className="text-xl">💡</span>
            <span>
              <strong>Совет:</strong> Учите антонимы парами! Это помогает запомнить оба слова
              и использовать их правильно.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Ещё антонимы</h1>
          <p className="text-slate-600">Прилагательные, глаголы и существительные</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <AntonymPair
            word1="success"
            word2="failure"
            translation1="успех"
            translation2="неудача"
            example1="The project was a huge success."
            example2="The experiment ended in failure."
          />
          <AntonymPair
            word1="accept"
            word2="reject"
            translation1="принять"
            translation2="отклонить"
            example1="I accept your offer."
            example2="They rejected my application."
          />
          <AntonymPair
            word1="increase"
            word2="decrease"
            translation1="увеличить"
            translation2="уменьшить"
            example1="Sales increased by 20%."
            example2="The temperature decreased overnight."
          />
          <AntonymPair
            word1="remember"
            word2="forget"
            translation1="помнить"
            translation2="забыть"
            example1="I remember our first meeting."
            example2="Don't forget to call me!"
          />
          <AntonymPair
            word1="polite"
            word2="rude"
            translation1="вежливый"
            translation2="грубый"
            example1="She was very polite to everyone."
            example2="His behavior was incredibly rude."
          />
          <AntonymPair
            word1="honest"
            word2="dishonest"
            translation1="честный"
            translation2="нечестный"
            example1="Be honest with me."
            example2="He was dishonest about his past."
          />
        </div>

        {/* Word formation antonyms */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">🔧 Антонимы через приставки</h3>
          <p className="text-slate-600 mb-4">
            Многие антонимы образуются добавлением приставок: un-, in-, im-, dis-
          </p>

          <div className="grid md:grid-cols-4 gap-3">
            {[
              { positive: "happy", negative: "unhappy" },
              { positive: "possible", negative: "impossible" },
              { positive: "patient", negative: "impatient" },
              { positive: "agree", negative: "disagree" },
              { positive: "honest", negative: "dishonest" },
              { positive: "certain", negative: "uncertain" },
              { positive: "visible", negative: "invisible" },
              { positive: "correct", negative: "incorrect" },
            ].map((pair) => (
              <div key={pair.positive} className="bg-slate-50 rounded-lg p-3 text-center">
                <p className="text-emerald-600 font-medium">{pair.positive}</p>
                <p className="text-slate-400 text-sm">↓</p>
                <p className="text-rose-600 font-medium">{pair.negative}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step6() {
  const items: FillItem[] = [
    {
      left: "The movie was not just good, it was absolutely",
      answers: ["amazing", "fantastic", "incredible", "wonderful"],
      right: "!",
      explanation: "Используем более сильное слово для эмфазы",
    },
    {
      left: "This apartment is too small. We need something",
      answers: ["bigger", "larger"],
      right: ".",
      explanation: "big/large — антонимы к small",
    },
    {
      left: "She was not just sad, she was completely",
      answers: ["devastated", "heartbroken", "miserable"],
      right: "after the news.",
      explanation: "Более сильные синонимы sad",
    },
    {
      left: "The test was easy, but the homework was very",
      answers: ["difficult", "hard", "challenging"],
      right: ".",
      explanation: "difficult/hard — антонимы к easy",
    },
    {
      left: "He was not angry, he was absolutely",
      answers: ["furious", "livid", "outraged"],
      right: "!",
      explanation: "Более сильные синонимы angry",
    },
    {
      left: "The weather today is hot, but yesterday it was",
      answers: ["cold", "freezing", "chilly"],
      right: ".",
      explanation: "cold — антоним к hot",
    },
    {
      left: "She's not just pretty, she's absolutely",
      answers: ["gorgeous", "stunning", "beautiful"],
      right: "!",
      explanation: "Более сильные синонимы pretty",
    },
    {
      left: "The project was a",
      answers: ["success", "triumph"],
      right: ", not a failure.",
      explanation: "success — антоним к failure",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">✏️ Практика</h1>
          <p className="text-slate-600">Выберите подходящий синоним или антоним</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <CheckableExercise
            title="Вставьте подходящее слово"
            instruction="Используйте синонимы или антонимы, чтобы завершить предложения"
            items={items}
          />
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <p className="flex items-start gap-2 text-purple-800">
            <span className="text-xl">💡</span>
            <span>
              <strong>Подсказка:</strong> Обращайте внимание на контекст! &quot;Not just... but...&quot;
              требует более сильного слова, а противопоставление требует антоним.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const wordGroups = [
    {
      category: "Размер",
      words: ["tiny → small → medium → big → large → huge → enormous"],
    },
    {
      category: "Качество",
      words: ["terrible → bad → okay → good → great → amazing → incredible"],
    },
    {
      category: "Красота",
      words: ["ugly → plain → nice → pretty → beautiful → gorgeous → stunning"],
    },
    {
      category: "Счастье",
      words: ["miserable → sad → okay → happy → glad → delighted → ecstatic"],
    },
    {
      category: "Злость",
      words: ["calm → annoyed → irritated → angry → furious → livid → outraged"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Congratulations */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
          <div className="text-7xl mb-4">🎨</div>
          <h1 className="text-3xl font-bold mb-2">Отлично!</h1>
          <p className="text-xl opacity-90">
            Теперь ваша речь станет богаче и точнее!
          </p>
        </div>

        {/* Intensity scales summary */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>📊</span> Шкалы интенсивности
          </h2>

          <div className="space-y-4">
            {wordGroups.map((group) => (
              <div key={group.category} className="bg-slate-50 rounded-lg p-4">
                <p className="font-bold text-slate-700 mb-2">{group.category}:</p>
                <p className="text-sm text-slate-600 font-mono">{group.words[0]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common antonyms */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">⚔️ Популярные антонимы</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              ["hot", "cold"],
              ["fast", "slow"],
              ["rich", "poor"],
              ["easy", "hard"],
              ["early", "late"],
              ["success", "failure"],
              ["accept", "reject"],
              ["remember", "forget"],
            ].map(([w1, w2]) => (
              <div key={w1} className="bg-slate-50 rounded-lg p-2 text-center">
                <span className="text-sky-600">{w1}</span>
                <span className="text-slate-400 mx-1">↔</span>
                <span className="text-rose-600">{w2}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="font-bold text-slate-800 mb-2">Thesaurus</h4>
            <p className="text-sm text-slate-600">
              Используйте тезаурус для поиска синонимов
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">📝</div>
            <h4 className="font-bold text-slate-800 mb-2">Контекст</h4>
            <p className="text-sm text-slate-600">
              Учитывайте оттенки значения и стиль
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-slate-800 mb-2">Практика</h4>
            <p className="text-sm text-slate-600">
              Пробуйте заменять слова в своих текстах
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 text-white text-center">
          <p className="text-lg font-semibold">
            Rich vocabulary = Powerful communication! 💪
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SynonymsAntonyms({ step }: Props) {
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
