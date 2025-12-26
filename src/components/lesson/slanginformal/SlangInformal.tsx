"use client";

import { useState } from "react";
import CheckableExercise, {
  type FillItem,
} from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

export default function SlangInformal({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Welcome to Gen Z English 🔥
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-8 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-9xl mb-6 animate-bounce-slow">🔥</div>
            <h1 className="text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Slang & Informal English
            </h1>
            <p className="text-2xl text-pink-100 font-semibold">
              No cap, this lesson is straight fire! 💯
            </p>
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-md px-8 py-3 rounded-full border-2 border-white/40">
              <p className="text-white font-bold text-lg">
                Let's get this bread! 🍞
              </p>
            </div>
          </div>

          {/* What is Slang? */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-6xl">🗣️</span>
              <div>
                <h2 className="text-3xl font-black text-gray-800 mb-4">
                  What is Slang?
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong className="text-purple-600">Slang</strong> — это
                  неформальный язык, который постоянно меняется и используется в
                  повседневном общении, особенно среди молодёжи. Это НЕ
                  академический English!
                </p>
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-l-4 border-pink-500 p-4 rounded-r-xl">
                  <p className="text-gray-700 font-medium">
                    ⚡ Сленг делает речь живой, современной и помогает звучать
                    как native speaker в casual conversation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Learn Slang? */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-6 text-white shadow-xl transform hover:rotate-2 transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Sound Natural</h3>
              <p className="text-pink-50">
                Звучи как настоящий носитель языка в casual разговорах с
                друзьями
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl p-6 text-white shadow-xl transform hover:rotate-2 transition-all">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-3">Understand Media</h3>
              <p className="text-purple-50">
                Понимай фильмы, сериалы, TikTok, YouTube и музыку без субтитров
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-6 text-white shadow-xl transform hover:rotate-2 transition-all">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Connect Better</h3>
              <p className="text-cyan-50">
                Общайся на одной волне с native speakers и заводи друзей легче
              </p>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-400 border-4 border-yellow-600 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">⚠️</span>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Important!
                </h3>
                <p className="text-gray-800 text-lg font-semibold">
                  Slang is{" "}
                  <span className="bg-red-500 text-white px-2 py-1 rounded">
                    INFORMAL
                  </span>
                  ! Don't use it in:
                </p>
                <ul className="mt-3 space-y-2 text-gray-800 font-medium">
                  <li>❌ Job interviews</li>
                  <li>❌ Academic essays</li>
                  <li>❌ Professional emails</li>
                  <li>❌ Formal presentations</li>
                </ul>
                <p className="mt-3 text-gray-800 font-bold">
                  ✅ Use it with: Friends, casual chats, social media, texting!
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mt-8 bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-gray-800 mb-6 text-center">
              🎓 What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  emoji: "🔥",
                  title: "Gen Z Classics",
                  desc: "lit, sus, no cap, lowkey, highkey",
                },
                {
                  emoji: "💯",
                  title: "Intensifiers",
                  desc: "hella, mad, crazy, insane, fire",
                },
                {
                  emoji: "😎",
                  title: "Reactions",
                  desc: "slay, savage, flex, vibe, mood",
                },
                {
                  emoji: "📱",
                  title: "Digital Culture",
                  desc: "ghosting, catfish, simp, stan",
                },
                {
                  emoji: "✂️",
                  title: "Shortened Forms",
                  desc: "gonna, wanna, gotta, kinda",
                },
                {
                  emoji: "🗣️",
                  title: "Expressions",
                  desc: "bet, facts, cap, tea, shade",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{item.emoji}</span>
                    <div>
                      <h4 className="font-bold text-purple-800">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Gen Z Classics 🔥
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const [flipped, setFlipped] = useState<number[]>([]);

    const slangTerms = [
      {
        term: "lit",
        emoji: "🔥",
        color: "from-orange-400 to-red-500",
        meaning: "Amazing, exciting, fire!",
        translation: "Крутой, зажигательный, огонь!",
        example: "That party was lit! 🎉",
        context: "Когда что-то очень круто или весело",
        usage: "positive",
      },
      {
        term: "sus",
        emoji: "🤨",
        color: "from-yellow-400 to-orange-500",
        meaning: "Suspicious, sketchy",
        translation: "Подозрительный, странный",
        example: "That guy looks sus...",
        context: "Когда что-то кажется подозрительным",
        usage: "negative/neutral",
      },
      {
        term: "no cap",
        emoji: "💯",
        color: "from-blue-400 to-indigo-500",
        meaning: "No lie, for real, seriously",
        translation: "Без шуток, серьёзно, правда",
        example: "This is the best pizza, no cap!",
        context: "Подчеркнуть, что ты говоришь правду",
        usage: "emphasis",
      },
      {
        term: "lowkey",
        emoji: "🤫",
        color: "from-purple-400 to-pink-500",
        meaning: "Secretly, kind of, a little bit",
        translation: "Втихаря, немного, по секрету",
        example: "I lowkey like that song...",
        context: "Когда признаёшь что-то скрытно",
        usage: "subtle",
      },
      {
        term: "highkey",
        emoji: "📢",
        color: "from-pink-400 to-rose-500",
        meaning: "Obviously, very much, clearly",
        translation: "Очевидно, явно, сильно",
        example: "I'm highkey obsessed with this show!",
        context: "Полная противоположность lowkey",
        usage: "obvious",
      },
      {
        term: "slaps",
        emoji: "💥",
        color: "from-green-400 to-teal-500",
        meaning: "Really good (usually music/food)",
        translation: "Очень классный (о музыке/еде)",
        example: "This song slaps! 🎵",
        context: "Про музыку или еду высшего качества",
        usage: "positive",
      },
    ];

    const toggleFlip = (index: number) => {
      if (flipped.includes(index)) {
        setFlipped(flipped.filter((i) => i !== index));
      } else {
        setFlipped([...flipped, index]);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🔥</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Gen Z Classics
            </h2>
            <p className="text-2xl text-white/90">
              Click cards to reveal meanings! 👇
            </p>
          </div>

          {/* Flip Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slangTerms.map((item, index) => {
              const isFlipped = flipped.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => toggleFlip(index)}
                  className="cursor-pointer h-64 perspective-1000"
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front */}
                    <div
                      className={`absolute w-full h-full backface-hidden bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center text-white`}
                    >
                      <div className="text-7xl mb-4">{item.emoji}</div>
                      <h3 className="text-4xl font-black uppercase tracking-wider">
                        {item.term}
                      </h3>
                      <p className="text-sm mt-3 bg-white/20 px-4 py-2 rounded-full">
                        Click to reveal
                      </p>
                    </div>

                    {/* Back */}
                    <div
                      className={`absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl p-6 shadow-2xl`}
                    >
                      <div className="h-full flex flex-col">
                        <div
                          className={`text-4xl mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.emoji}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">
                          {item.term}
                        </h4>
                        <p className="text-lg font-semibold text-purple-600 mb-2">
                          {item.meaning}
                        </p>
                        <p className="text-sm text-gray-600 italic mb-3">
                          {item.translation}
                        </p>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-3 rounded-r-lg mb-2">
                          <p className="text-sm text-gray-700 font-medium">
                            💬 {item.example}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                            {item.usage}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pro Tip */}
          <div className="mt-12 bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">💡</span>
              <div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">
                  Pro Tip
                </h3>
                <p className="text-lg text-gray-700">
                  <strong className="text-purple-600">Lowkey</strong> vs{" "}
                  <strong className="text-pink-600">Highkey</strong>: Используй
                  "lowkey" когда хочешь занизить важность чего-то, а "highkey" —
                  когда подчеркнуть!
                </p>
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                  <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Lowkey:</strong> I lowkey want pizza... (не так уж
                      сильно)
                    </p>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 p-3 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Highkey:</strong> I highkey NEED pizza! (очень
                      сильно!)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Intensifiers & Reactions 💯
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const intensifiers = [
      {
        word: "hella",
        emoji: "🌊",
        meaning: "Very, a lot (California slang)",
        translation: "Очень, куча (калифорнийский сленг)",
        example: "It's hella cold outside!",
        level: "super casual",
        color: "bg-gradient-to-r from-blue-400 to-cyan-500",
      },
      {
        word: "mad",
        emoji: "🔥",
        meaning: "Very, extremely (NY/UK slang)",
        translation: "Очень, крайне (нью-йоркский сленг)",
        example: "That's mad expensive!",
        level: "casual",
        color: "bg-gradient-to-r from-red-400 to-orange-500",
      },
      {
        word: "crazy",
        emoji: "🤯",
        meaning: "Very, really, extremely",
        translation: "Очень, реально, крайне",
        example: "This burger is crazy good!",
        level: "casual",
        color: "bg-gradient-to-r from-purple-400 to-pink-500",
      },
      {
        word: "insane",
        emoji: "💥",
        meaning: "Extremely, incredibly",
        translation: "Невероятно, безумно",
        example: "The view is insane!",
        level: "casual",
        color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      },
      {
        word: "fire",
        emoji: "🔥",
        meaning: "Excellent, awesome",
        translation: "Отличный, классный",
        example: "Your outfit is fire!",
        level: "trendy",
        color: "bg-gradient-to-r from-orange-500 to-red-500",
      },
      {
        word: "dead",
        emoji: "💀",
        meaning: "Extremely funny (laughing so hard)",
        translation: "Умираю от смеха (очень смешно)",
        example: "I'm dead! 💀 That joke killed me!",
        level: "gen z",
        color: "bg-gradient-to-r from-gray-600 to-gray-800",
      },
    ];

    const reactions = [
      {
        word: "slay",
        emoji: "👑",
        meaning: "To do something amazingly well",
        translation: "Сделать что-то офигенно круто",
        example: "You slayed that presentation!",
        color: "from-pink-500 to-purple-600",
      },
      {
        word: "savage",
        emoji: "😈",
        meaning: "Brutally honest, fierce, bold",
        translation: "Жестко честный, дерзкий, смелый",
        example: "That comeback was savage! 💀",
        color: "from-red-500 to-orange-600",
      },
      {
        word: "flex",
        emoji: "💪",
        meaning: "To show off, brag",
        translation: "Хвастаться, выпендриваться",
        example: "Stop flexing your new car!",
        color: "from-blue-500 to-indigo-600",
      },
      {
        word: "vibe",
        emoji: "✨",
        meaning: "Feeling, atmosphere, mood",
        translation: "Атмосфера, настроение, энергия",
        example: "I love the vibe of this place!",
        color: "from-purple-500 to-pink-600",
      },
      {
        word: "mood",
        emoji: "😌",
        meaning: "Relatable feeling (I feel that)",
        translation: "Понятно, со мной так же (я тебя понимаю)",
        example: "Staying in bed all day? Mood.",
        color: "from-cyan-500 to-blue-600",
      },
      {
        word: "salty",
        emoji: "😠",
        meaning: "Angry, bitter, upset",
        translation: "Злой, обиженный, раздраженный",
        example: "Why you so salty about it?",
        color: "from-yellow-500 to-orange-600",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">💯</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Intensifiers & Reactions
            </h2>
            <p className="text-2xl text-white/90">
              Make your English sound more expressive! 🔥
            </p>
          </div>

          {/* Intensifiers Section */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border-2 border-white/30">
              <h3 className="text-3xl font-black text-white mb-3">
                🌟 Intensifiers
              </h3>
              <p className="text-xl text-white/90">
                Words that make things sound MORE intense / extreme
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intensifiers.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.color} text-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all`}
                >
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <h4 className="text-3xl font-black uppercase mb-2">
                    {item.word}
                  </h4>
                  <p className="text-lg font-semibold mb-2 text-white/90">
                    {item.meaning}
                  </p>
                  <p className="text-sm italic mb-3 text-white/80">
                    {item.translation}
                  </p>
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium">💬 {item.example}</p>
                  </div>
                  <span className="inline-block bg-white/30 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reactions Section */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border-2 border-white/30">
              <h3 className="text-3xl font-black text-white mb-3">
                😎 Reactions
              </h3>
              <p className="text-xl text-white/90">
                Express your feelings like a native speaker
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reactions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all"
                >
                  <div
                    className={`text-6xl mb-3 bg-gradient-to-r ${item.color} bg-clip-text`}
                  >
                    {item.emoji}
                  </div>
                  <h4
                    className={`text-3xl font-black uppercase mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.word}
                  </h4>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {item.meaning}
                  </p>
                  <p className="text-sm italic text-gray-600 mb-3">
                    {item.translation}
                  </p>
                  <div
                    className={`bg-gradient-to-r ${item.color} bg-opacity-10 rounded-lg p-3`}
                  >
                    <p className="text-sm font-medium text-gray-800">
                      💬 {item.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Guide */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              📱 How to Use Them
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  DO Use:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ With friends and peers</li>
                  <li>✓ On social media</li>
                  <li>✓ In casual texting</li>
                  <li>✓ At parties / hangouts</li>
                  <li>✓ When you want to sound cool</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                <div className="text-4xl mb-3">❌</div>
                <h4 className="text-xl font-bold text-red-800 mb-3">
                  DON'T Use:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ In job interviews</li>
                  <li>✗ With your boss</li>
                  <li>✗ In academic papers</li>
                  <li>✗ In formal emails</li>
                  <li>✗ With older generations (maybe)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Digital Culture Slang 📱
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const digitalSlang = [
      {
        term: "ghosting",
        emoji: "👻",
        meaning: "Suddenly cutting off all communication",
        translation: "Внезапно прекратить общение (исчезнуть как призрак)",
        example: "He ghosted me after 3 dates... 😔",
        origin: "Dating/social media culture",
        color: "from-gray-400 to-gray-600",
      },
      {
        term: "catfish",
        emoji: "🎣",
        meaning: "Someone who pretends to be someone else online",
        translation: "Тот, кто притворяется другим человеком онлайн",
        example: "That profile pic was fake - total catfish!",
        origin: "Online dating / social media",
        color: "from-blue-400 to-cyan-600",
      },
      {
        term: "simp",
        emoji: "🥺",
        meaning: "Someone who does too much for someone they like",
        translation: "Тот, кто слишком старается для того, кто ему нравится",
        example: "Stop simping bro, she's not interested.",
        origin: "Internet meme culture",
        color: "from-pink-400 to-rose-600",
      },
      {
        term: "stan",
        emoji: "🤩",
        meaning: "An obsessive fan (verb: to be a huge fan)",
        translation: "Одержимый фанат (гл.: быть огромным фанатом)",
        example: "I stan BTS so hard! 💜",
        origin: "From Eminem's song 'Stan'",
        color: "from-purple-400 to-pink-600",
      },
      {
        term: "slide into DMs",
        emoji: "📩",
        meaning: "To privately message someone (usually flirting)",
        translation: "Написать в личку (обычно для флирта)",
        example: "He slid into my DMs last night!",
        origin: "Instagram / social media",
        color: "from-orange-400 to-red-600",
      },
      {
        term: "receipts",
        emoji: "🧾",
        meaning: "Proof, evidence (usually screenshots)",
        translation: "Доказательства (обычно скриншоты)",
        example: "She posted the receipts and exposed him!",
        origin: "Twitter drama culture",
        color: "from-yellow-400 to-orange-600",
      },
      {
        term: "tea",
        emoji: "☕",
        meaning: "Gossip, juicy information",
        translation: "Сплетни, пикантная информация",
        example: "Spill the tea! What happened?",
        origin: "Drag culture / social media",
        color: "from-amber-400 to-orange-500",
      },
      {
        term: "shade",
        emoji: "🕶️",
        meaning: "Subtle insult or disrespect",
        translation: "Скрытое оскорбление или неуважение",
        example: "Did you just throw shade at me?",
        origin: "Drag/LGBTQ+ culture",
        color: "from-gray-500 to-slate-700",
      },
      {
        term: "clout",
        emoji: "📈",
        meaning: "Fame, influence, popularity",
        translation: "Слава, влияние, популярность",
        example: "He's just doing it for the clout.",
        origin: "Hip-hop / internet culture",
        color: "from-indigo-400 to-purple-600",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">📱</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Digital Culture Slang
            </h2>
            <p className="text-2xl text-white/90">
              Born on the internet, used everywhere! 🌐
            </p>
          </div>

          {/* Slang Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {digitalSlang.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} p-6 text-white`}
                >
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <h3 className="text-3xl font-black uppercase">{item.term}</h3>
                </div>
                <div className="p-6">
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    {item.meaning}
                  </p>
                  <p className="text-sm italic text-gray-600 mb-3">
                    {item.translation}
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-3">
                    <p className="text-sm text-gray-700 font-medium">
                      💬 {item.example}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">📍 Origin:</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                      {item.origin}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Scenarios */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              📲 Real Social Media Scenarios
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💬</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-2">Group Chat:</p>
                    <p className="text-gray-700 mb-1">
                      "Did you see Jake's post? 👀"
                    </p>
                    <p className="text-gray-700 mb-1">
                      "OMG yes! Spill the tea! ☕"
                    </p>
                    <p className="text-gray-700">
                      "He's totally simping for Sarah again 🥺"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📸</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-2">
                      Instagram Comment:
                    </p>
                    <p className="text-gray-700 mb-1">"Your fit is fire! 🔥"</p>
                    <p className="text-gray-700">
                      "Not you flexing the new kicks! 💪"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">👻</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-2">
                      Dating App Drama:
                    </p>
                    <p className="text-gray-700 mb-1">
                      "He slid into my DMs last week 📩"
                    </p>
                    <p className="text-gray-700">
                      "Then he ghosted me after one date 👻😭"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="mt-8 bg-yellow-300 border-4 border-yellow-500 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">⚡</span>
              <div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">
                  Internet Slang Changes Fast!
                </h4>
                <p className="text-gray-800 text-lg">
                  Some slang terms become outdated quickly. What's trendy today
                  might be cringe tomorrow! Stay updated by watching content
                  creators, TikTok trends, and following meme culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Shortened Forms & Contractions ✂️
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const shortenedForms = [
      {
        formal: "going to",
        informal: "gonna",
        emoji: "🏃",
        example: "I'm gonna go to the store.",
        translation: "Я пойду в магазин",
        color: "from-green-400 to-emerald-500",
      },
      {
        formal: "want to",
        informal: "wanna",
        emoji: "🤔",
        example: "Do you wanna hang out?",
        translation: "Хочешь потусить?",
        color: "from-blue-400 to-cyan-500",
      },
      {
        formal: "have got to / have to",
        informal: "gotta",
        emoji: "⚡",
        example: "I gotta finish this homework!",
        translation: "Мне нужно закончить домашку!",
        color: "from-orange-400 to-red-500",
      },
      {
        formal: "kind of",
        informal: "kinda",
        emoji: "🤷",
        example: "It's kinda cold today.",
        translation: "Сегодня как-то холодно",
        color: "from-purple-400 to-pink-500",
      },
      {
        formal: "sort of",
        informal: "sorta",
        emoji: "😕",
        example: "I'm sorta tired...",
        translation: "Я как бы устал...",
        color: "from-indigo-400 to-purple-500",
      },
      {
        formal: "out of",
        informal: "outta",
        emoji: "🚪",
        example: "Get outta here!",
        translation: "Убирайся отсюда!",
        color: "from-red-400 to-rose-500",
      },
      {
        formal: "let me",
        informal: "lemme",
        emoji: "🙋",
        example: "Lemme know when you're ready.",
        translation: "Дай знать когда будешь готов",
        color: "from-yellow-400 to-orange-500",
      },
      {
        formal: "give me",
        informal: "gimme",
        emoji: "✋",
        example: "Gimme a second!",
        translation: "Дай мне секунду!",
        color: "from-pink-400 to-rose-500",
      },
      {
        formal: "because",
        informal: "'cause / cuz",
        emoji: "❓",
        example: "I'm tired 'cause I didn't sleep.",
        translation: "Я устал потому что не спал",
        color: "from-cyan-400 to-blue-500",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">✂️</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Shortened Forms
            </h2>
            <p className="text-2xl text-white/90">
              Speak faster & sound more casual! 🚀
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border-2 border-white/30">
            <div className="flex items-start gap-4">
              <span className="text-5xl">💡</span>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  What are Shortened Forms?
                </h3>
                <p className="text-xl text-white/90">
                  In casual speech, native speakers shorten words to speak
                  faster and sound more relaxed. These are SUPER common but
                  rarely taught in textbooks! 📚❌
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {shortenedForms.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} p-6 text-white text-center`}
                >
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg p-2">
                      <p className="text-sm opacity-75">Formal</p>
                      <p className="text-xl font-bold line-through">
                        {item.formal}
                      </p>
                    </div>
                    <div className="text-3xl font-black">↓</div>
                    <div className="bg-white/30 rounded-lg p-2">
                      <p className="text-sm opacity-75">Casual</p>
                      <p className="text-3xl font-black uppercase">
                        {item.informal}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-3 rounded-r-lg mb-3">
                    <p className="text-gray-700 font-medium">
                      💬 {item.example}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    {item.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Listening Practice */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              👂 Practice Listening
            </h3>
            <p className="text-lg text-gray-700 text-center mb-8">
              Try to catch these shortened forms in casual conversations!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  🎬 In Movies/Shows:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>"I'm gonna tell you something..."</li>
                  <li>"Wanna grab some food?"</li>
                  <li>"You gotta see this!"</li>
                  <li>"Lemme think about it..."</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-purple-800 mb-4">
                  💬 In Conversations:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>"It's kinda weird, right?"</li>
                  <li>"I'm sorta busy right now."</li>
                  <li>"Get outta my way!"</li>
                  <li>"I can't, cuz I have work."</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-8 bg-orange-300 border-4 border-orange-500 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">⚠️</span>
              <div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">
                  Don't Write These!
                </h4>
                <p className="text-gray-800 text-lg">
                  These are <strong>SPOKEN</strong> forms! In formal writing
                  (essays, emails, reports), always use the full forms: going
                  to, want to, have to, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Common Expressions 🗣️
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const expressions = [
      {
        expression: "bet",
        emoji: "🤝",
        meaning: "Okay, sure, agreed!",
        translation: "Окей, договорились!",
        usage: "Agreement",
        example: "A: Wanna meet at 5? B: Bet!",
        color: "from-blue-500 to-indigo-600",
      },
      {
        expression: "facts",
        emoji: "📠",
        meaning: "That's true, I agree 100%",
        translation: "Факты, полностью согласен",
        usage: "Agreement",
        example: "Pizza is the best food. Facts!",
        color: "from-green-500 to-emerald-600",
      },
      {
        expression: "cap / no cap",
        emoji: "🧢",
        meaning: "Lie / No lie",
        translation: "Враньё / Без вранья",
        usage: "Truth/Lie",
        example: "That's cap! (= That's a lie!) No cap! (= For real!)",
        color: "from-red-500 to-rose-600",
      },
      {
        expression: "slaps",
        emoji: "🎵",
        meaning: "Really good (music/food)",
        translation: "Реально круто (о музыке/еде)",
        usage: "Positive",
        example: "This song slaps! 🔥",
        color: "from-purple-500 to-pink-600",
      },
      {
        expression: "hits different",
        emoji: "✨",
        meaning: "Feels special/better in this context",
        translation: "По-особенному, по-другому воспринимается",
        usage: "Special feeling",
        example: "Coffee at 6am just hits different.",
        color: "from-orange-500 to-amber-600",
      },
      {
        expression: "rent free",
        emoji: "🧠",
        meaning: "Can't stop thinking about it",
        translation: "Не могу перестать об этом думать",
        usage: "Obsession",
        example: "That song is living in my head rent free!",
        color: "from-cyan-500 to-blue-600",
      },
      {
        expression: "main character energy",
        emoji: "⭐",
        meaning: "Acting confident, like you're the star",
        translation: "Вести себя уверенно, как главный герой",
        usage: "Confidence",
        example: "She walked in with main character energy!",
        color: "from-yellow-500 to-orange-600",
      },
      {
        expression: "it's giving...",
        emoji: "💅",
        meaning: "It has the vibe of...",
        translation: "Это даёт вайб чего-то...",
        usage: "Describing vibes",
        example: "This outfit is giving vintage vibes!",
        color: "from-pink-500 to-rose-600",
      },
      {
        expression: "periodt",
        emoji: "💅",
        meaning: "End of discussion, that's final!",
        translation: "Точка, обсуждение закрыто!",
        usage: "Emphasis",
        example: "She's the best artist, periodt!",
        color: "from-red-600 to-pink-600",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🗣️</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Common Expressions
            </h2>
            <p className="text-2xl text-white/90">
              Short phrases that everyone uses! 💬
            </p>
          </div>

          {/* Expression Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expressions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} p-6 text-white text-center`}
                >
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <h3 className="text-3xl font-black uppercase mb-2">
                    {item.expression}
                  </h3>
                  <span className="bg-white/30 px-3 py-1 rounded-full text-sm font-bold">
                    {item.usage}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    {item.meaning}
                  </p>
                  <p className="text-sm italic text-gray-600 mb-3">
                    {item.translation}
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-3 rounded-r-lg">
                    <p className="text-sm text-gray-700 font-medium">
                      {item.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conversation Examples */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              💬 Real Conversations
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-6">
                <h4 className="font-bold text-blue-800 mb-3 text-lg">
                  Making Plans:
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>A:</strong> Yo, wanna grab coffee later?
                  </p>
                  <p>
                    <strong>B:</strong> Bet! What time?
                  </p>
                  <p>
                    <strong>A:</strong> 4pm?
                  </p>
                  <p>
                    <strong>B:</strong> That works. No cap, I need caffeine!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-6">
                <h4 className="font-bold text-purple-800 mb-3 text-lg">
                  Talking About Music:
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>A:</strong> Have you heard the new Drake album?
                  </p>
                  <p>
                    <strong>B:</strong> Yes! It slaps! 🔥
                  </p>
                  <p>
                    <strong>A:</strong> Facts! That first track hits different.
                  </p>
                  <p>
                    <strong>B:</strong> It's living in my head rent free!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6">
                <h4 className="font-bold text-green-800 mb-3 text-lg">
                  Complimenting Someone:
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>A:</strong> Your outfit is giving main character
                    energy!
                  </p>
                  <p>
                    <strong>B:</strong> Aww thanks! 🥰
                  </p>
                  <p>
                    <strong>A:</strong> No cap, you look fire today!
                  </p>
                  <p>
                    <strong>B:</strong> You're the best, periodt! 💅
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-gradient-to-r from-yellow-300 to-orange-300 border-4 border-yellow-500 rounded-2xl p-6 shadow-xl">
            <h4 className="text-2xl font-black text-gray-900 mb-4 text-center">
              🎯 Quick Reference Guide
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4">
                <h5 className="font-bold text-green-700 mb-2">✅ Positive:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Slaps, Fire, Lit</li>
                  <li>• Slay, Facts</li>
                  <li>• Hits different</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h5 className="font-bold text-blue-700 mb-2">🤝 Agreement:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bet, Facts</li>
                  <li>• No cap, Periodt</li>
                  <li>• For sure</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h5 className="font-bold text-purple-700 mb-2">💯 Emphasis:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• No cap, Periodt</li>
                  <li>• Dead serious</li>
                  <li>• Lowkey/Highkey</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: When to Use Slang (Formality Levels) 📊
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const situations = [
      {
        title: "Super Casual ✅",
        emoji: "😎",
        color: "from-green-400 to-emerald-500",
        situations: [
          "Texting friends",
          "Group chats",
          "Social media posts",
          "Gaming with friends",
          "Parties / hangouts",
        ],
        examples: [
          "Yo! Wanna grab pizza? 🍕",
          "That's so fire! 🔥",
          "No cap, this game slaps!",
        ],
      },
      {
        title: "Casual (Be Careful) ⚠️",
        emoji: "🤔",
        color: "from-yellow-400 to-orange-500",
        situations: [
          "Talking to acquaintances",
          "First time meeting someone young",
          "Casual work chat (lunch break)",
          "Dating apps",
        ],
        examples: [
          "That's pretty cool!",
          "This place has good vibes.",
          "I'm kind of tired today.",
        ],
      },
      {
        title: "Formal (NO Slang!) ❌",
        emoji: "👔",
        color: "from-red-400 to-rose-500",
        situations: [
          "Job interviews",
          "Professional emails",
          "Academic papers",
          "Presentations",
          "Talking to professors/bosses",
        ],
        examples: [
          "Thank you for your time.",
          "I appreciate the opportunity.",
          "Please let me know if you need anything.",
        ],
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">📊</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              When to Use Slang
            </h2>
            <p className="text-2xl text-white/90">Context is EVERYTHING! 🎯</p>
          </div>

          {/* Formality Scale */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 border-2 border-white/30">
            <h3 className="text-3xl font-black text-white text-center mb-8">
              The Formality Scale
            </h3>
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-6xl mb-2">😎</div>
                <p className="text-white font-bold">Super Casual</p>
                <p className="text-white/70 text-sm">Friends</p>
              </div>
              <div className="flex-1 h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full mx-6"></div>
              <div className="text-center">
                <div className="text-6xl mb-2">👔</div>
                <p className="text-white font-bold">Formal</p>
                <p className="text-white/70 text-sm">Work/School</p>
              </div>
            </div>
          </div>

          {/* Situation Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {situations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} p-6 text-white text-center`}
                >
                  <div className="text-7xl mb-3">{item.emoji}</div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Situations:</h4>
                  <ul className="space-y-2 mb-6">
                    {item.situations.map((sit, i) => (
                      <li
                        key={i}
                        className="text-gray-700 flex items-center gap-2"
                      >
                        <span className="text-blue-500">•</span>
                        {sit}
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-bold text-gray-800 mb-3">Examples:</h4>
                  <div className="space-y-2">
                    {item.examples.map((ex, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-2"
                      >
                        <p className="text-sm text-gray-700">{ex}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real Scenarios */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              📝 Same Message, Different Formality
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Scenario: Asking someone to meet up
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                    <p className="font-bold text-green-800 mb-2">
                      😎 To Friend:
                    </p>
                    <p className="text-gray-700">
                      "Yo! Wanna grab coffee later? Lmk!"
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
                    <p className="font-bold text-yellow-800 mb-2">
                      🤔 To Classmate:
                    </p>
                    <p className="text-gray-700">
                      "Hey! Do you want to get coffee later?"
                    </p>
                  </div>
                  <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                    <p className="font-bold text-red-800 mb-2">
                      👔 To Professor:
                    </p>
                    <p className="text-gray-700">
                      "Would you be available to meet for coffee?"
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Scenario: Saying something is good
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                    <p className="font-bold text-green-800 mb-2">😎 Slang:</p>
                    <p className="text-gray-700">
                      "This is fire! / This slaps! / No cap, it's lit!"
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
                    <p className="font-bold text-yellow-800 mb-2">🤔 Casual:</p>
                    <p className="text-gray-700">
                      "This is really good! / This is great!"
                    </p>
                  </div>
                  <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                    <p className="font-bold text-red-800 mb-2">👔 Formal:</p>
                    <p className="text-gray-700">
                      "This is excellent. / This is of high quality."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Rule */}
          <div className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 border-4 border-yellow-500 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-start gap-4">
              <span className="text-6xl">⚡</span>
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  The Golden Rule
                </h3>
                <p className="text-xl text-gray-800 font-bold mb-3">
                  When in doubt → DON'T use slang!
                </p>
                <p className="text-lg text-gray-700">
                  It's better to sound a bit formal than to be inappropriate.
                  Once you know someone well and see they use slang, then you
                  can match their energy. Read the room! 👀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Practice & Matching Game 🎮
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const [selected, setSelected] = useState<{
      word?: string;
      meaning?: string;
    }>({});
    const [matched, setMatched] = useState<string[]>([]);

    const matchingPairs = [
      { word: "lit", meaning: "Amazing, exciting" },
      { word: "sus", meaning: "Suspicious" },
      { word: "flex", meaning: "Show off, brag" },
      { word: "ghosting", meaning: "Suddenly stop replying" },
      { word: "vibe", meaning: "Atmosphere, feeling" },
      { word: "bet", meaning: "Okay, agreed" },
      { word: "slay", meaning: "Do something amazingly" },
      { word: "tea", meaning: "Gossip" },
    ];

    const words = matchingPairs
      .map((p) => p.word)
      .sort(() => Math.random() - 0.5);
    const meanings = matchingPairs
      .map((p) => p.meaning)
      .sort(() => Math.random() - 0.5);

    const handleWordClick = (word: string) => {
      if (matched.includes(word)) return;

      const newSelected = { ...selected, word };
      setSelected(newSelected);

      if (newSelected.word && newSelected.meaning) {
        const pair = matchingPairs.find(
          (p) =>
            p.word === newSelected.word && p.meaning === newSelected.meaning
        );
        if (pair) {
          setMatched([...matched, pair.word]);
          setSelected({});
        } else {
          setTimeout(() => setSelected({}), 500);
        }
      }
    };

    const handleMeaningClick = (meaning: string) => {
      const matchedMeaning =
        matchingPairs.find((p) => matched.includes(p.word))?.meaning ===
        meaning;
      if (matchedMeaning) return;

      const newSelected = { ...selected, meaning };
      setSelected(newSelected);

      if (newSelected.word && newSelected.meaning) {
        const pair = matchingPairs.find(
          (p) =>
            p.word === newSelected.word && p.meaning === newSelected.meaning
        );
        if (pair) {
          setMatched([...matched, pair.word]);
          setSelected({});
        } else {
          setTimeout(() => setSelected({}), 500);
        }
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-8 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🎮</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Practice Time!
            </h2>
            <p className="text-2xl text-white/90">
              Match the slang with its meaning! 🎯
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border-2 border-white/30">
            <h3 className="text-2xl font-black text-white mb-3">
              How to Play:
            </h3>
            <p className="text-xl text-white/90">
              Click a slang word, then click its meaning. Match all pairs to
              win! 🏆
            </p>
            <div className="mt-4 text-white/90 text-lg">
              Progress: <strong>{matched.length}</strong> /{" "}
              {matchingPairs.length} matched!
            </div>
          </div>

          {/* Matching Game */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Words Column */}
            <div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                Slang Words
              </h3>
              <div className="space-y-3">
                {words.map((word, idx) => {
                  const isMatched = matched.includes(word);
                  const isSelected = selected.word === word;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleWordClick(word)}
                      disabled={isMatched}
                      className={`w-full p-4 rounded-xl font-black text-xl transition-all transform hover:scale-105 ${
                        isMatched
                          ? "bg-green-400 text-white cursor-not-allowed opacity-50"
                          : isSelected
                          ? "bg-yellow-300 text-gray-900 scale-105 shadow-2xl"
                          : "bg-white text-purple-600 hover:bg-purple-100 shadow-xl"
                      }`}
                    >
                      {isMatched && "✓ "}
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Meanings Column */}
            <div>
              <h3 className="text-2xl font-black text-white mb-4 text-center">
                Meanings
              </h3>
              <div className="space-y-3">
                {meanings.map((meaning, idx) => {
                  const matchedWord = matchingPairs.find(
                    (p) => p.meaning === meaning
                  )?.word;
                  const isMatched =
                    matchedWord && matched.includes(matchedWord);
                  const isSelected = selected.meaning === meaning;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleMeaningClick(meaning)}
                      disabled={!!isMatched}
                      className={`w-full p-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                        isMatched
                          ? "bg-green-400 text-white cursor-not-allowed opacity-50"
                          : isSelected
                          ? "bg-yellow-300 text-gray-900 scale-105 shadow-2xl"
                          : "bg-white text-gray-700 hover:bg-pink-100 shadow-xl"
                      }`}
                    >
                      {isMatched && "✓ "}
                      {meaning}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Success Message */}
          {matched.length === matchingPairs.length && (
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center animate-bounce-slow">
              <div className="text-8xl mb-4">🎉</div>
              <h3 className="text-4xl font-black text-gray-800 mb-3">
                You Did It!
              </h3>
              <p className="text-2xl text-gray-700 mb-6">
                You matched all the slang! No cap, you're fire! 🔥
              </p>
              <button
                onClick={() => setMatched([])}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl"
              >
                Play Again! 🔄
              </button>
            </div>
          )}

          {/* Fill in the Blanks Preview */}
          {matched.length < matchingPairs.length && (
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
                📝 Quick Quiz
              </h3>
              <p className="text-lg text-gray-700 text-center mb-6">
                Fill in the blanks with the correct slang:
              </p>
              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                  <p className="text-gray-800">
                    1. That party was _____ ! (amazing)
                  </p>
                  <p className="text-sm text-purple-600 mt-2">
                    Answer: lit / fire
                  </p>
                </div>
                <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4">
                  <p className="text-gray-800">
                    2. He's _____ for attention. (showing off)
                  </p>
                  <p className="text-sm text-pink-600 mt-2">Answer: flexing</p>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-gray-800">
                    3. This song _____! (is really good)
                  </p>
                  <p className="text-sm text-blue-600 mt-2">Answer: slaps</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Slang Evolution & Regional Differences 🌍
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const timeline = [
      {
        era: "2000s",
        emoji: "📼",
        slang: ["cool", "tight", "sick", "dope", "wicked"],
        status: "Still used but dated",
        color: "from-blue-400 to-cyan-500",
      },
      {
        era: "2010s",
        emoji: "📱",
        slang: ["swag", "YOLO", "bae", "on fleek", "turnt"],
        status: "Mostly outdated (cringe now)",
        color: "from-purple-400 to-pink-500",
      },
      {
        era: "Late 2010s",
        emoji: "🔥",
        slang: ["lit", "savage", "fire", "deadass", "lowkey"],
        status: "Still popular",
        color: "from-orange-400 to-red-500",
      },
      {
        era: "2020s (Gen Z)",
        emoji: "✨",
        slang: ["no cap", "bussin", "sus", "periodt", "slay"],
        status: "Currently trending",
        color: "from-green-400 to-emerald-500",
      },
    ];

    const regional = [
      {
        region: "🇺🇸 US (General)",
        slang: [
          { term: "dude", meaning: "guy, person" },
          { term: "cool", meaning: "good, nice" },
          { term: "awesome", meaning: "great, amazing" },
        ],
        color: "from-blue-500 to-indigo-600",
      },
      {
        region: "🗽 New York",
        slang: [
          { term: "mad", meaning: "very (mad good = very good)" },
          { term: "deadass", meaning: "seriously, for real" },
          { term: "bodega", meaning: "corner store" },
        ],
        color: "from-yellow-500 to-orange-600",
      },
      {
        region: "🌴 California",
        slang: [
          { term: "hella", meaning: "very, a lot" },
          { term: "dope", meaning: "cool, awesome" },
          { term: "gnarly", meaning: "cool (surf slang)" },
        ],
        color: "from-orange-500 to-red-600",
      },
      {
        region: "🇬🇧 UK",
        slang: [
          { term: "innit", meaning: "isn't it? (right?)" },
          { term: "cheeky", meaning: "playfully rude" },
          { term: "knackered", meaning: "very tired" },
        ],
        color: "from-red-500 to-rose-600",
      },
      {
        region: "🇦🇺 Australia",
        slang: [
          { term: "mate", meaning: "friend" },
          { term: "arvo", meaning: "afternoon" },
          { term: "heaps", meaning: "a lot, very" },
        ],
        color: "from-green-500 to-teal-600",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🌍</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Slang Evolution
            </h2>
            <p className="text-2xl text-white/90">
              How slang changes over time & place! ⏰
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border-2 border-white/30">
              <h3 className="text-3xl font-black text-white mb-3 text-center">
                📅 Slang Through the Decades
              </h3>
              <p className="text-xl text-white/90 text-center">
                What was cool then vs. what's cool now!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((period, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all"
                >
                  <div
                    className={`bg-gradient-to-r ${period.color} p-6 text-white text-center`}
                  >
                    <div className="text-6xl mb-3">{period.emoji}</div>
                    <h4 className="text-3xl font-black">{period.era}</h4>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-800 mb-3">
                      Popular Slang:
                    </h5>
                    <ul className="space-y-2 mb-4">
                      {period.slang.map((term, i) => (
                        <li
                          key={i}
                          className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-semibold"
                        >
                          {term}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`bg-gradient-to-r ${
                        period.color
                      } bg-opacity-10 border-l-4 ${period.color
                        .split(" ")[0]
                        .replace("from-", "border-")} p-3 rounded-r-lg`}
                    >
                      <p className="text-sm font-semibold text-gray-700">
                        {period.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning about dated slang */}
          <div className="bg-yellow-300 border-4 border-yellow-500 rounded-2xl p-6 mb-12 shadow-xl">
            <div className="flex items-start gap-4">
              <span className="text-5xl">😬</span>
              <div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">
                  Avoid Dated Slang!
                </h4>
                <p className="text-gray-800 text-lg">
                  Using outdated slang like "YOLO", "swag", or "on fleek" in
                  2024+ will make you sound out of touch. Stay current by
                  following social media trends and Gen Z content creators!
                </p>
              </div>
            </div>
          </div>

          {/* Regional Differences */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border-2 border-white/30">
              <h3 className="text-3xl font-black text-white mb-3 text-center">
                🗺️ Regional Slang
              </h3>
              <p className="text-xl text-white/90 text-center">
                Different places, different slang!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {regional.map((region, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all"
                >
                  <div
                    className={`bg-gradient-to-r ${region.color} p-6 text-white text-center`}
                  >
                    <h4 className="text-2xl font-black mb-2">
                      {region.region}
                    </h4>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {region.slang.map((item, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 border border-gray-200 rounded-lg p-3"
                        >
                          <p className="font-bold text-purple-600">
                            {item.term}
                          </p>
                          <p className="text-sm text-gray-700">
                            = {item.meaning}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Examples of Regional Usage */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              💬 Regional Slang in Action
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-5">
                <p className="font-bold text-blue-800 mb-2">🗽 New York:</p>
                <p className="text-gray-700">
                  "Yo, deadass that pizza was mad good!"
                </p>
                <p className="text-sm text-gray-600 italic mt-1">
                  (Seriously, that pizza was very good!)
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-5">
                <p className="font-bold text-orange-800 mb-2">🌴 California:</p>
                <p className="text-gray-700">
                  "Dude, that wave was hella gnarly!"
                </p>
                <p className="text-sm text-gray-600 italic mt-1">
                  (Man, that wave was very cool/intense!)
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 rounded-xl p-5">
                <p className="font-bold text-red-800 mb-2">🇬🇧 UK:</p>
                <p className="text-gray-700">"That's well cheeky, innit?"</p>
                <p className="text-sm text-gray-600 italic mt-1">
                  (That's quite playfully rude, isn't it?)
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
                <p className="font-bold text-green-800 mb-2">🇦🇺 Australia:</p>
                <p className="text-gray-700">"See ya this arvo, mate!"</p>
                <p className="text-sm text-gray-600 italic mt-1">
                  (See you this afternoon, friend!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Final Test 🎯
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const testItems: FillItem[] = [
      // Gen Z Classics
      {
        left: "That party was",
        right: "! Everyone had a great time.",
        answers: ["lit", "fire", "amazing"],
      },
      {
        left: "That guy looks",
        right: "... I don't trust him.",
        answers: ["sus", "suspicious", "sketchy"],
      },
      {
        left: "This is the best pizza,",
        right: "!",
        answers: ["no cap", "for real", "seriously"],
      },
      {
        left: "I",
        right: "want to go...",
        answers: ["lowkey", "kinda", "secretly"],
      },
      {
        left: "I'm",
        right: "obsessed with this show!",
        answers: ["highkey", "really", "very"],
      },

      // Intensifiers & Reactions
      {
        left: "It's",
        right: "cold outside! (California slang)",
        answers: ["hella", "very", "really"],
      },
      {
        left: "That's",
        right: "expensive! (NY slang)",
        answers: ["mad", "very", "really"],
      },
      {
        left: "You",
        right: "that presentation!",
        answers: ["slayed", "killed", "nailed"],
      },
      {
        left: "That comeback was",
        right: "! 💀",
        answers: ["savage", "brutal", "harsh"],
      },
      {
        left: "Stop",
        right: "your new car!",
        answers: ["flexing", "showing off", "bragging"],
      },
      {
        left: "I love the",
        right: "of this place!",
        answers: ["vibe", "atmosphere", "feeling"],
      },
      {
        left: "Staying in bed all day?",
        right: ".",
        answers: ["Mood", "Relatable", "Same"],
      },

      // Digital Culture
      {
        left: "He",
        right: "me after 3 dates...",
        answers: ["ghosted", "ignored", "disappeared on"],
      },
      {
        left: "That profile was fake - total",
        right: "!",
        answers: ["catfish", "fake", "fraud"],
      },
      {
        left: "Stop",
        right: "bro, she's not interested.",
        answers: ["simping", "trying too hard", "obsessing"],
      },
      {
        left: "I",
        right: "BTS so hard!",
        answers: ["stan", "love", "support"],
      },
      {
        left: "He",
        right: "into my DMs last night!",
        answers: ["slid", "messaged", "DM'd"],
      },
      {
        left: "Spill the",
        right: "! What happened?",
        answers: ["tea", "gossip", "details"],
      },
      {
        left: "Did you just throw",
        right: "at me?",
        answers: ["shade", "insult", "shade"],
      },

      // Shortened Forms
      {
        left: "I'm",
        right: "go to the store.",
        answers: ["gonna", "going to"],
      },
      { left: "Do you", right: "hang out?", answers: ["wanna", "want to"] },
      {
        left: "I",
        right: "finish this homework!",
        answers: ["gotta", "have to", "need to"],
      },
      {
        left: "It's",
        right: "cold today.",
        answers: ["kinda", "kind of", "sorta"],
      },
      { left: "Get", right: "here!", answers: ["outta", "out of"] },
      {
        left: "",
        right: "know when you're ready.",
        answers: ["Lemme", "Let me"],
      },
      { left: "", right: "a second!", answers: ["Gimme", "Give me"] },
      {
        left: "I'm tired",
        right: "I didn't sleep.",
        answers: ["'cause", "cuz", "because"],
      },

      // Common Expressions
      {
        left: "A: Wanna meet at 5? B:",
        right: "!",
        answers: ["Bet", "Sure", "Okay"],
      },
      {
        left: "Pizza is the best food.",
        right: "!",
        answers: ["Facts", "True", "Agreed"],
      },
      {
        left: "That's",
        right: "! (That's a lie!)",
        answers: ["cap", "fake", "false"],
      },
      {
        left: "This song",
        right: "! 🎵",
        answers: ["slaps", "rocks", "bangs"],
      },
      {
        left: "Coffee at 6am just",
        right: ".",
        answers: ["hits different", "feels different", "is different"],
      },
      {
        left: "That song is living in my head",
        right: "!",
        answers: ["rent free", "constantly"],
      },
      {
        left: "She walked in with",
        right: "energy!",
        answers: ["main character", "confident", "star"],
      },
      {
        left: "This outfit is",
        right: "vintage vibes!",
        answers: ["giving", "showing", "has"],
      },
      {
        left: "She's the best artist,",
        right: "!",
        answers: ["periodt", "period", "end of story"],
      },

      // Mixed Advanced
      {
        left: "I'm",
        right: "! 💀 That joke killed me!",
        answers: ["dead", "dying", "deceased"],
      },
      {
        left: "Your outfit is",
        right: "! 🔥",
        answers: ["fire", "lit", "amazing"],
      },
      {
        left: "Why you so",
        right: "about it?",
        answers: ["salty", "angry", "bitter"],
      },
      {
        left: "He's just doing it for the",
        right: ".",
        answers: ["clout", "fame", "attention"],
      },
      {
        left: "She posted the",
        right: "and exposed him!",
        answers: ["receipts", "proof", "evidence"],
      },
      {
        left: "This burger is",
        right: "good!",
        answers: ["crazy", "insane", "really"],
      },
      {
        left: "The view is",
        right: "!",
        answers: ["insane", "amazing", "incredible"],
      },
      {
        left: "That's",
        right: "good! (NY)",
        answers: ["mad", "very", "really"],
      },
      {
        left: "Not you",
        right: "the new kicks! 💪",
        answers: ["flexing", "showing off", "wearing"],
      },
      {
        left: "Your fit is",
        right: "! 🔥",
        answers: ["fire", "amazing", "great"],
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 p-8 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🎯</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Final Test
            </h2>
            <p className="text-2xl text-white/90">
              Let's see what you learned! No cap! 💯
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border-2 border-white/30">
            <div className="flex items-start gap-4">
              <span className="text-5xl">📝</span>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Test Instructions
                </h3>
                <p className="text-xl text-white/90">
                  Fill in the blanks with the correct slang terms. This test
                  covers everything from Gen Z classics to digital culture! Good
                  luck! 🍀
                </p>
              </div>
            </div>
          </div>

          {/* Test Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 border-2 border-pink-300 mb-6">
              <p className="text-center text-gray-700 font-semibold text-lg">
                <span className="text-purple-700 text-xl">🔥</span>{" "}
                Comprehensive Slang Test ({testItems.length} questions)
              </p>
            </div>

            <CheckableExercise
              title="Fill in the blanks with the correct slang"
              items={testItems}
            />
          </div>

          {/* Completion Message */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-7xl mb-4">🏆</div>
              <h3 className="text-4xl font-black text-gray-800 mb-4">
                Congratulations!
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                You've completed the Slang & Informal English course! No cap,
                you're now ready to talk like a native! 🔥
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 rounded-xl p-4">
                  <div className="text-4xl mb-2">🎓</div>
                  <h4 className="font-bold text-pink-800">What You Learned</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Gen Z slang, intensifiers, digital culture, expressions, and
                    more!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-4">
                  <div className="text-4xl mb-2">💬</div>
                  <h4 className="font-bold text-purple-800">Where to Use It</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    With friends, on social media, in casual texts - but NOT in
                    formal settings!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-xl p-4">
                  <div className="text-4xl mb-2">📱</div>
                  <h4 className="font-bold text-cyan-800">Stay Updated</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    Follow TikTok, YouTube creators, and meme culture to keep
                    your slang fresh!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-xl p-6">
                <h4 className="text-2xl font-bold text-green-800 mb-3">
                  📌 Key Takeaways
                </h4>
                <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
                  <li>✓ Slang makes your English sound natural and current</li>
                  <li>✓ Always match the formality level to the situation</li>
                  <li>✓ Regional slang varies (US, UK, Australia, etc.)</li>
                  <li>✓ Slang evolves quickly - stay updated!</li>
                  <li>
                    ✓ NEVER use slang in formal settings (work, school,
                    interviews)
                  </li>
                  <li>✓ When in doubt, use standard English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 11: Social Media Language 📱
  // ═══════════════════════════════════════════════════════════════════
  if (step === 11) {
    const socialMediaTerms = [
      {
        platform: "TikTok",
        emoji: "🎵",
        color: "from-black via-gray-800 to-pink-600",
        terms: [
          {
            term: "For You Page (FYP)",
            meaning: "Your personalized feed",
            example: "This video is on my FYP!",
          },
          {
            term: "POV",
            meaning: "Point of View",
            example: "POV: You just woke up late for work",
          },
          {
            term: "Duet",
            meaning: "Create video responding to another",
            example: "I dueted her dance video!",
          },
          {
            term: "Stitched",
            meaning: "Added to someone's video",
            example: "He stitched my video and roasted me 💀",
          },
          {
            term: "Ratio",
            meaning: "Getting more replies than likes (embarrassing)",
            example: "Bro got ratioed hard!",
          },
          {
            term: "Main Character",
            meaning: "Living your best life",
            example: "Main character energy today! ✨",
          },
        ],
      },
      {
        platform: "Instagram",
        emoji: "📸",
        color: "from-purple-500 via-pink-500 to-orange-500",
        terms: [
          {
            term: "Story",
            meaning: "24-hour temporary post",
            example: "I posted it on my story",
          },
          {
            term: "Reel",
            meaning: "Short video (like TikTok)",
            example: "Check out my new reel!",
          },
          {
            term: "Grid",
            meaning: "Main profile feed",
            example: "This photo doesn't fit my grid aesthetic",
          },
          {
            term: "Finsta",
            meaning: "Fake/private Instagram account",
            example: "I only post real stuff on my finsta",
          },
          {
            term: "Tag",
            meaning: "Mention someone in post",
            example: "Tag your friends who do this!",
          },
          {
            term: "Aesthetic",
            meaning: "Visual style/theme",
            example: "Her IG has such a cute aesthetic!",
          },
        ],
      },
      {
        platform: "Twitter/X",
        emoji: "🐦",
        color: "from-blue-400 to-cyan-600",
        terms: [
          {
            term: "Tweet",
            meaning: "A post on Twitter",
            example: "That tweet went viral!",
          },
          {
            term: "Thread",
            meaning: "Series of connected tweets",
            example: "Read this whole thread, it's crazy!",
          },
          {
            term: "Ratio",
            meaning: "More replies/quotes than likes (bad)",
            example: "He got ratioed by his own fans 😂",
          },
          {
            term: "QRT (Quote Retweet)",
            meaning: "Retweet with your comment",
            example: "Don't QRT me with that nonsense",
          },
          {
            term: "Main Character",
            meaning: "Being center of drama/attention",
            example: "Why is everyone main character today?",
          },
          {
            term: "Touch Grass",
            meaning: "Go outside, get off internet",
            example: "Y'all need to touch grass fr 💀",
          },
        ],
      },
      {
        platform: "Snapchat",
        emoji: "👻",
        color: "from-yellow-300 to-yellow-500",
        terms: [
          {
            term: "Snap",
            meaning: "Photo/video message",
            example: "Send me a snap!",
          },
          {
            term: "Streak",
            meaning: "Days of consecutive snapping",
            example: "Don't break our 500-day streak!",
          },
          {
            term: "Story",
            meaning: "24-hour public snap",
            example: "Did you see her story?",
          },
          {
            term: "Snap Score",
            meaning: "Total snaps sent/received",
            example: "Your snap score is insane!",
          },
          {
            term: "Left on Read",
            meaning: "Saw message but didn't reply",
            example: "He left me on read again 😤",
          },
          {
            term: "Snap Back",
            meaning: "Reply to a snap",
            example: "Why didn't you snap back?",
          },
        ],
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">📱</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Social Media Language
            </h2>
            <p className="text-2xl text-white/90">
              TikTok, Instagram, Twitter & more! 🌐
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 border-2 border-white/30">
            <div className="flex items-start gap-4">
              <span className="text-5xl">💬</span>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Why Learn Social Media Slang?
                </h3>
                <p className="text-xl text-white/90">
                  Each platform has its own language! Understanding these terms
                  helps you navigate social media like a native and understand
                  memes, trends, and viral content. 🔥
                </p>
              </div>
            </div>
          </div>

          {/* Platform Cards */}
          {socialMediaTerms.map((platform, idx) => (
            <div key={idx} className="mb-12">
              <div
                className={`bg-gradient-to-r ${platform.color} rounded-2xl p-6 mb-6 shadow-2xl`}
              >
                <div className="flex items-center gap-4 justify-center">
                  <span className="text-6xl">{platform.emoji}</span>
                  <h3 className="text-4xl font-black text-white">
                    {platform.platform}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platform.terms.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all"
                  >
                    <h4 className="text-xl font-black text-gray-800 mb-2">
                      {item.term}
                    </h4>
                    <p className="text-gray-600 mb-3 font-semibold">
                      {item.meaning}
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-3 rounded-r-lg">
                      <p className="text-sm text-gray-700 italic">
                        💬 {item.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Universal Social Media Terms */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              🌐 Universal Social Media Terms
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  term: "Viral",
                  meaning: "Spread rapidly online",
                  example: "That video went viral overnight!",
                },
                {
                  term: "Algorithm",
                  meaning: "System showing you content",
                  example: "The algorithm is not showing my posts 😤",
                },
                {
                  term: "Engagement",
                  meaning: "Likes, comments, shares",
                  example: "My engagement rate is down this week",
                },
                {
                  term: "Content Creator",
                  meaning: "Person making online content",
                  example: "She's a full-time content creator now",
                },
                {
                  term: "Influencer",
                  meaning: "Person with large following",
                  example: "That influencer has 2M followers!",
                },
                {
                  term: "Clout Chasing",
                  meaning: "Seeking fame/attention",
                  example: "He's just clout chasing, ignore him",
                },
                {
                  term: "Cancel Culture",
                  meaning: "Publicly rejecting someone",
                  example: "They tried to cancel him for that tweet",
                },
                {
                  term: "Doomscrolling",
                  meaning: "Endless scrolling negative news",
                  example: "I was doomscrolling all night 😞",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5"
                >
                  <h4 className="text-lg font-bold text-purple-800 mb-2">
                    {item.term}
                  </h4>
                  <p className="text-gray-700 mb-2">{item.meaning}</p>
                  <div className="bg-white border border-purple-200 rounded-lg p-2">
                    <p className="text-sm text-gray-600 italic">
                      {item.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 12: Text & Chat Abbreviations ✉️
  // ═══════════════════════════════════════════════════════════════════
  if (step === 12) {
    const abbreviations = {
      common: [
        {
          abbr: "LOL",
          full: "Laughing Out Loud / Laugh Out Loud",
          meaning: "Очень смешно",
          example: "That joke was hilarious! LOL 😂",
        },
        {
          abbr: "OMG",
          full: "Oh My God",
          meaning: "О Боже!",
          example: "OMG! Did you see that?!",
        },
        {
          abbr: "BRB",
          full: "Be Right Back",
          meaning: "Скоро вернусь",
          example: "BRB, getting food",
        },
        {
          abbr: "BTW",
          full: "By The Way",
          meaning: "Кстати",
          example: "BTW, did you finish the homework?",
        },
        {
          abbr: "IDK",
          full: "I Don't Know",
          meaning: "Я не знаю",
          example: "IDK what to wear today",
        },
        {
          abbr: "IMO/IMHO",
          full: "In My (Humble) Opinion",
          meaning: "По-моему / По моему скромному мнению",
          example: "IMO, that movie was boring",
        },
        {
          abbr: "TBH",
          full: "To Be Honest",
          meaning: "Честно говоря",
          example: "TBH, I don't really like it",
        },
        {
          abbr: "IRL",
          full: "In Real Life",
          meaning: "В реальной жизни",
          example: "I finally met him IRL!",
        },
        {
          abbr: "ASAP",
          full: "As Soon As Possible",
          meaning: "Как можно скорее",
          example: "Please reply ASAP!",
        },
        {
          abbr: "FYI",
          full: "For Your Information",
          meaning: "К твоему сведению",
          example: "FYI, the meeting is at 3pm",
        },
      ],
      reactions: [
        {
          abbr: "LMAO",
          full: "Laughing My Ass Off",
          meaning: "Умираю от смеха",
          example: "LMAO that's hilarious! 💀",
        },
        {
          abbr: "ROFL",
          full: "Rolling On Floor Laughing",
          meaning: "Катаюсь по полу от смеха",
          example: "ROFL I can't breathe! 😂",
        },
        {
          abbr: "SMH",
          full: "Shaking My Head",
          meaning: "Качаю головой (неодобрение)",
          example: "SMH, he did it again...",
        },
        {
          abbr: "WTF",
          full: "What The F***",
          meaning: "Что за...?!",
          example: "WTF just happened?!",
        },
        {
          abbr: "WTH",
          full: "What The Hell/Heck",
          meaning: "Что за черт?!",
          example: "WTH is going on here?",
        },
        {
          abbr: "OMW",
          full: "On My Way",
          meaning: "Уже иду / В пути",
          example: "OMW! Be there in 5 min",
        },
        {
          abbr: "NVM",
          full: "Never Mind",
          meaning: "Неважно / Забудь",
          example: "NVM, I found it",
        },
        {
          abbr: "JK",
          full: "Just Kidding",
          meaning: "Просто шучу",
          example: "I hate you! JK 😂",
        },
      ],
      modern: [
        {
          abbr: "FOMO",
          full: "Fear Of Missing Out",
          meaning: "Страх упустить что-то",
          example: "I have major FOMO seeing their trip photos",
        },
        {
          abbr: "YOLO",
          full: "You Only Live Once",
          meaning: "Живём один раз",
          example: "YOLO! Let's do it!",
        },
        {
          abbr: "GOAT",
          full: "Greatest Of All Time",
          meaning: "Лучший из лучших",
          example: "LeBron is the GOAT! 🐐",
        },
        {
          abbr: "ICYMI",
          full: "In Case You Missed It",
          meaning: "На случай если пропустил",
          example: "ICYMI, here's the news",
        },
        {
          abbr: "TL;DR",
          full: "Too Long; Didn't Read",
          meaning: "Слишком длинно; не читал",
          example: "TL;DR: The meeting was boring",
        },
        {
          abbr: "OOTD",
          full: "Outfit Of The Day",
          meaning: "Наряд дня",
          example: "Here's my OOTD! ✨",
        },
        {
          abbr: "IYKYK",
          full: "If You Know You Know",
          meaning: "Кто знает, тот поймёт",
          example: "That restaurant... IYKYK 😏",
        },
        {
          abbr: "NGL",
          full: "Not Gonna Lie",
          meaning: "Не буду врать",
          example: "NGL, I'm kinda nervous",
        },
      ],
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-8 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">✉️</div>
            <h2 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
              Text & Chat Abbreviations
            </h2>
            <p className="text-2xl text-white/90">
              LOL, BRB, FOMO, YOLO & more! 💬
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 border-2 border-white/30">
            <div className="flex items-start gap-4">
              <span className="text-5xl">📲</span>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Why Use Abbreviations?
                </h3>
                <p className="text-xl text-white/90">
                  Abbreviations make texting faster and more casual. They're
                  used in texts, social media, and online chats. Knowing them is
                  essential for understanding modern English communication!
                </p>
              </div>
            </div>
          </div>

          {/* Common Abbreviations */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 mb-6 shadow-2xl">
              <h3 className="text-3xl font-black text-white text-center">
                ✅ Common Abbreviations (Must Know!)
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {abbreviations.common.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl font-black text-green-600 bg-green-100 px-4 py-2 rounded-xl">
                      {item.abbr}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-semibold mb-1">
                        {item.full}
                      </p>
                      <p className="text-gray-700 italic">{item.meaning}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                    <p className="text-sm text-gray-700">💬 {item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reaction Abbreviations */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 mb-6 shadow-2xl">
              <h3 className="text-3xl font-black text-white text-center">
                😂 Reactions & Emotions
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {abbreviations.reactions.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl font-black text-orange-600 bg-orange-100 px-4 py-2 rounded-xl">
                      {item.abbr}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-semibold mb-1">
                        {item.full}
                      </p>
                      <p className="text-gray-700 italic">{item.meaning}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                    <p className="text-sm text-gray-700">💬 {item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Abbreviations */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 mb-6 shadow-2xl">
              <h3 className="text-3xl font-black text-white text-center">
                🔥 Modern & Trendy (2020s)
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {abbreviations.modern.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl font-black text-purple-600 bg-purple-100 px-4 py-2 rounded-xl">
                      {item.abbr}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-semibold mb-1">
                        {item.full}
                      </p>
                      <p className="text-gray-700 italic">{item.meaning}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-3 rounded-r-lg">
                    <p className="text-sm text-gray-700">💬 {item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Conversation */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-6 text-center">
              💬 Sample Text Conversation
            </h3>
            <div className="bg-gray-100 rounded-2xl p-6 max-w-3xl mx-auto space-y-4">
              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                  <p>Hey! Wanna hang out later?</p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p>IDK, I'm kinda tired TBH 😅</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                  <p>Aww come on! YOLO! 🎉</p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p>LOL true! BRB, let me check my schedule</p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p>OMG yes! I'm free after 6!</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                  <p>Perfect! OMW at 6. BTW, should I bring anything?</p>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p>NVM, we have everything! See you soon! 🙌</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                  <p>Bet! See ya! 😎</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 mb-3 text-lg">
                📚 Count the abbreviations!
              </h4>
              <p className="text-gray-700">
                This conversation used:{" "}
                <strong>
                  IDK, TBH, YOLO, LOL, BRB, OMG, OMW, BTW, NVM, Bet!
                </strong>
                <br />
                <span className="text-sm text-blue-600 mt-2 block">
                  That's 10 abbreviations in one short chat! 🔥
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 13: Final Congratulations & Resources 🎊
  // ═══════════════════════════════════════════════════════════════════
  if (step === 13) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-8 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-9xl mb-6">🎉</div>
            <h1 className="text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Congratulations!
            </h1>
            <p className="text-3xl text-pink-100 font-semibold">
              You've mastered Slang & Informal English! 💯
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center transform hover:scale-105 transition-all">
              <div className="text-7xl mb-4">🎓</div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                What You Learned
              </h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✓ 100+ slang terms</li>
                <li>✓ Gen Z language</li>
                <li>✓ Digital culture slang</li>
                <li>✓ Social media language</li>
                <li>✓ Text abbreviations</li>
                <li>✓ Regional differences</li>
                <li>✓ Formality levels</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center transform hover:scale-105 transition-all">
              <div className="text-7xl mb-4">💪</div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Skills Unlocked
              </h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✓ Sound like a native</li>
                <li>✓ Understand memes</li>
                <li>✓ Chat naturally</li>
                <li>✓ Get TikTok jokes</li>
                <li>✓ Navigate social media</li>
                <li>✓ Text like Gen Z</li>
                <li>✓ Know when NOT to use slang</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center transform hover:scale-105 transition-all">
              <div className="text-7xl mb-4">🌟</div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                You Can Now
              </h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✓ Understand viral content</li>
                <li>✓ Follow trends</li>
                <li>✓ Make English friends easier</li>
                <li>✓ Watch content without subs</li>
                <li>✓ Text naturally in English</li>
                <li>✓ Stay culturally relevant</li>
                <li>✓ Vibe with Gen Z 😎</li>
              </ul>
            </div>
          </div>

          {/* Level Up Section */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">📈</div>
              <h2 className="text-4xl font-black text-gray-800 mb-3">
                How to Level Up
              </h2>
              <p className="text-xl text-gray-600">
                Keep your slang fresh and stay updated!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 rounded-2xl p-6">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-bold text-pink-800 mb-3">
                  Follow on Social Media
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• TikTok creators (Gen Z content)</li>
                  <li>• Twitter/X trends & memes</li>
                  <li>• Instagram stories & reels</li>
                  <li>• YouTube shorts & vlogs</li>
                  <li>• Reddit communities (r/GenZ, r/slang)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-2xl p-6">
                <div className="text-4xl mb-3">🎬</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Watch & Listen
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Modern TV shows & movies</li>
                  <li>• YouTube vlogs & podcasts</li>
                  <li>• TikTok compilations</li>
                  <li>• Music lyrics (hip-hop, pop)</li>
                  <li>• Twitch streamers</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-2xl p-6">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-xl font-bold text-cyan-800 mb-3">
                  Practice Daily
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Text with native speakers</li>
                  <li>• Comment on social media</li>
                  <li>• Join Discord servers</li>
                  <li>• Play online games (voice chat)</li>
                  <li>• Make international friends</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Resources
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Urban Dictionary (slang definitions)</li>
                  <li>• Know Your Meme (meme origins)</li>
                  <li>• r/OutOfTheLoop (missed trends)</li>
                  <li>• English slang subreddits</li>
                  <li>• Gen Z slang accounts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 border-4 border-yellow-500 rounded-3xl p-10 shadow-2xl text-center">
            <div className="text-8xl mb-6">🔥</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              You're Fire, No Cap!
            </h2>
            <p className="text-2xl text-gray-800 mb-6 font-semibold">
              You've completed all 13 steps and learned 100+ slang terms,
              expressions, and abbreviations. Now go out there and use it! 💪
            </p>
            <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-xl text-gray-800 mb-4">
                <strong className="text-purple-600">Remember:</strong>
              </p>
              <ul className="text-left text-gray-700 space-y-2">
                <li>✅ Use slang with friends & on social media</li>
                <li>✅ Match the formality level to the situation</li>
                <li>✅ Stay updated - slang changes fast!</li>
                <li>✅ Listen to how natives use it</li>
                <li>❌ DON'T use slang in formal settings</li>
                <li>❌ DON'T force slang if it feels awkward</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                Keep Slaying, Main Character! ✨👑🔥
              </p>
              <p className="text-2xl text-gray-700 mt-4 font-bold">
                Periodt! 💯💅
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
