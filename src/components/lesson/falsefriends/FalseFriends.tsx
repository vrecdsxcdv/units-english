"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function FalseFriends({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeTab, setActiveTab] = useState<"intro" | "danger" | "topics">("intro");

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-900 via-red-900 to-orange-900 p-8 rounded-3xl relative overflow-hidden">
        {/* Glassmorphism background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <span className="text-5xl">🎭</span>
            </div>
            <h2 className="text-5xl font-black mb-3 text-white drop-shadow-lg">
              False Friends: Advanced
            </h2>
            <p className="text-xl text-white/80">
              Слова-обманщики, которые ведут к недоразумениям
            </p>
          </div>

          {/* Navigation tabs */}
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { id: "intro", label: "Что это?", icon: "🤔" },
              { id: "danger", label: "Почему опасно", icon: "⚠️" },
              { id: "topics", label: "Темы урока", icon: "📋" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "intro" | "danger" | "topics")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-xl border ${
                  activeTab === tab.id
                    ? "bg-white/30 border-white/40 text-white shadow-lg shadow-white/10"
                    : "bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content sections */}
          {activeTab === "intro" && (
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Что такое False Friends?
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                <strong className="text-yellow-300">False friends</strong> (ложные друзья переводчика) —
                это слова в разных языках, которые выглядят или звучат похоже, но имеют
                <strong className="text-red-300"> совершенно разные значения</strong>.
                Они &quot;притворяются&quot; знакомыми, но на самом деле обманывают!
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="backdrop-blur-lg bg-red-500/20 rounded-2xl p-5 border border-red-400/30">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">❌</span>
                    <span className="text-red-300 font-bold text-lg">Ловушка</span>
                  </div>
                  <p className="text-white/80">
                    <strong className="text-white">Sensible</strong> похоже на &quot;сенсибельный&quot;...
                    <br />
                    <span className="text-red-300">Но значит &quot;разумный&quot;!</span>
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-green-500/20 rounded-2xl p-5 border border-green-400/30">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">✅</span>
                    <span className="text-green-300 font-bold text-lg">Правильно</span>
                  </div>
                  <p className="text-white/80">
                    <strong className="text-white">Sensitive</strong> = чувствительный
                    <br />
                    <span className="text-green-300">Вот это настоящий друг!</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white/70 text-center italic">
                  &quot;He made a <span className="text-red-400 line-through">sensible</span> <span className="text-green-400">sensible</span> decision&quot;
                  = Он принял <strong>разумное</strong> решение (не &quot;чувствительное&quot;!)
                </p>
              </div>
            </div>
          )}

          {activeTab === "danger" && (
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Почему это опасно?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "😳",
                    title: "Неловкие ситуации",
                    desc: "\"I became a physician\" звучит как \"Я стал физиком\", но на самом деле значит \"Я стал врачом\"!",
                    example: "Physician = врач, Physicist = физик"
                  },
                  {
                    icon: "💼",
                    title: "Бизнес-провалы",
                    desc: "\"Actually\" — не \"актуально\", а \"на самом деле\". Можно неправильно понять весь контекст!",
                    example: "Actually = на самом деле, Current = актуальный"
                  },
                  {
                    icon: "📝",
                    title: "Экзаменационные ошибки",
                    desc: "На IELTS/TOEFL false friends — частая причина потери баллов в Writing и Speaking.",
                    example: "Eventually ≠ в конце концов (это finally)"
                  },
                  {
                    icon: "🤝",
                    title: "Недопонимание",
                    desc: "\"Sympathetic\" — не \"симпатичный\", а \"сочувствующий\". Комплимент не получится!",
                    example: "Sympathetic = сочувствующий, Nice/Attractive = симпатичный"
                  },
                ].map((item, i) => (
                  <div key={i} className="backdrop-blur-lg bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-white/70 mb-2">{item.desc}</p>
                        <div className="text-sm text-cyan-300 bg-cyan-500/10 rounded-lg px-3 py-1 inline-block">
                          💡 {item.example}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "topics" && (
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Что мы изучим:
              </h3>
              <div className="grid gap-3">
                {[
                  { step: 2, title: "Classic False Friends", desc: "sensible/sensitive, actual/current, eventually/finally" },
                  { step: 3, title: "Academic & Formal", desc: "accurate/careful, pretend/claim, resume/summary" },
                  { step: 4, title: "People & Professions", desc: "chef/boss, physician/physicist, ingenious/ingenuous" },
                  { step: 5, title: "Emotions & Character", desc: "sympathetic/nice, pathetic/passionate, nervous/strong" },
                  { step: 6, title: "Actions & States", desc: "realize/implement, assist/attend, support/endure" },
                  { step: 7, title: "Objects & Places", desc: "fabric/factory, magazine/shop, cabin/office" },
                  { step: 8, title: "Why False Friends Exist", desc: "история и этимология слов-обманщиков" },
                  { step: 9, title: "Memory Tricks", desc: "мнемонические приёмы для запоминания" },
                  { step: 10, title: "Final Challenge", desc: "интерактивный тест на все false friends" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:bg-white/15 transition-all group"
                  >
                    <span className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warning card */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl p-6 border border-yellow-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚡</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Главное правило</h3>
                <p className="text-white/90">
                  Если слово <em>выглядит</em> знакомым — это повод <strong className="text-yellow-300">насторожиться</strong>,
                  а не расслабиться! Всегда проверяйте значение, даже если уверены на 99%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Classic False Friends
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const classicPairs = [
      {
        false_friend: "sensible",
        looks_like: "сенсибельный / чувствительный",
        actually_means: "разумный, здравомыслящий",
        true_friend: "sensitive",
        true_meaning: "чувствительный",
        example_wrong: "She is very sensible about criticism.",
        example_right: "She is very sensitive to criticism.",
        tip: "SenSIBLE = reSPONSIBLE (разумный)"
      },
      {
        false_friend: "actual",
        looks_like: "актуальный",
        actually_means: "фактический, настоящий",
        true_friend: "current / relevant",
        true_meaning: "актуальный, текущий",
        example_wrong: "This is an actual problem.",
        example_right: "This is a current/relevant problem.",
        tip: "ACTUAL = in FACT (фактически)"
      },
      {
        false_friend: "eventually",
        looks_like: "эвентуально / возможно",
        actually_means: "в конце концов, в итоге",
        true_friend: "possibly / perhaps",
        true_meaning: "возможно",
        example_wrong: "Eventually, it will rain tomorrow.",
        example_right: "Possibly, it will rain tomorrow.",
        tip: "EVENTUALLY = at the END (в конце)"
      },
      {
        false_friend: "accurate",
        looks_like: "аккуратный",
        actually_means: "точный, правильный",
        true_friend: "neat / tidy",
        true_meaning: "аккуратный, опрятный",
        example_wrong: "His room is very accurate.",
        example_right: "His room is very neat/tidy.",
        tip: "ACCURATE = EXACT (точный)"
      },
      {
        false_friend: "complexion",
        looks_like: "комплекция",
        actually_means: "цвет лица, кожа",
        true_friend: "build / physique",
        true_meaning: "телосложение, комплекция",
        example_wrong: "He has a strong complexion.",
        example_right: "He has a strong build/physique.",
        tip: "COMPLEXION = лицо (COMPLEX = кожа)"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Classic False Friends</h2>
            <p className="text-xl text-white/70">Самые коварные слова-обманщики</p>
          </div>

          <div className="space-y-6">
            {classicPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden"
              >
                {/* Header with false friend */}
                <div className="bg-gradient-to-r from-red-500/30 to-orange-500/30 p-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">❌</span>
                      <span className="text-2xl font-bold text-white">{item.false_friend}</span>
                    </div>
                    <span className="text-red-300 text-sm">≠ {item.looks_like}</span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {/* What it actually means */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📖</span>
                    <div>
                      <span className="text-white/60 text-sm">На самом деле означает:</span>
                      <p className="text-white font-semibold text-lg">{item.actually_means}</p>
                    </div>
                  </div>

                  {/* True friend */}
                  <div className="backdrop-blur-lg bg-green-500/20 rounded-xl p-4 border border-green-400/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">✅</span>
                      <span className="text-green-300 font-bold">Настоящий друг:</span>
                      <span className="text-white font-bold text-lg">{item.true_friend}</span>
                    </div>
                    <p className="text-white/70 ml-7">= {item.true_meaning}</p>
                  </div>

                  {/* Examples */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 rounded-xl p-3 border border-red-400/20">
                      <div className="text-red-300 text-xs mb-1">❌ Неправильно:</div>
                      <p className="text-white/80 text-sm italic">&quot;{item.example_wrong}&quot;</p>
                    </div>
                    <div className="bg-green-500/10 rounded-xl p-3 border border-green-400/20">
                      <div className="text-green-300 text-xs mb-1">✅ Правильно:</div>
                      <p className="text-white/80 text-sm italic">&quot;{item.example_right}&quot;</p>
                    </div>
                  </div>

                  {/* Memory tip */}
                  <div className="flex items-center gap-2 text-cyan-300 text-sm bg-cyan-500/10 rounded-lg p-2">
                    <span>💡</span>
                    <span>{item.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Academic & Formal
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const academicPairs = [
      {
        false_friend: "pretend",
        looks_like: "претендовать",
        actually_means: "притворяться",
        true_friend: "claim / apply for",
        example: "He pretends to be sick. (Он притворяется больным)",
        context: "На собеседовании: 'I claim this position' (не pretend!)"
      },
      {
        false_friend: "resume",
        looks_like: "резюме",
        actually_means: "возобновлять, продолжать",
        true_friend: "CV / résumé (с акцентом)",
        example: "Let's resume the meeting. (Давайте продолжим встречу)",
        context: "Résumé (с акцентом) = документ, resume = продолжить"
      },
      {
        false_friend: "prospect",
        looks_like: "проспект (улица)",
        actually_means: "перспектива, шанс",
        true_friend: "avenue / boulevard",
        example: "Job prospects are good. (Перспективы работы хорошие)",
        context: "Avenue = проспект, prospect = перспектива"
      },
      {
        false_friend: "data",
        looks_like: "дата",
        actually_means: "данные, информация",
        true_friend: "date",
        example: "The data shows growth. (Данные показывают рост)",
        context: "Data = данные (мн.ч. от datum), date = дата"
      },
      {
        false_friend: "expertise",
        looks_like: "экспертиза",
        actually_means: "компетентность, мастерство",
        true_friend: "expert examination",
        example: "She has expertise in marketing. (Она эксперт в маркетинге)",
        context: "Экспертиза = expert examination/analysis"
      },
      {
        false_friend: "instance",
        looks_like: "инстанция",
        actually_means: "пример, случай",
        true_friend: "authority / court",
        example: "For instance, take this case. (Например, возьмём этот случай)",
        context: "For instance = например, court = судебная инстанция"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🎓</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Academic & Formal</h2>
            <p className="text-xl text-white/70">False friends в академическом контексте</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {academicPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-white">{item.false_friend}</span>
                  <span className="text-red-300 text-sm">≠ {item.looks_like}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs">Означает:</span>
                    <p className="text-cyan-300 font-medium">{item.actually_means}</p>
                  </div>

                  <div className="bg-green-500/20 rounded-lg p-2 border border-green-400/20">
                    <span className="text-green-300 text-xs">✅ Используйте:</span>
                    <p className="text-white font-medium">{item.true_friend}</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/70 text-sm italic">&quot;{item.example}&quot;</p>
                  </div>

                  <div className="text-xs text-yellow-300/80 flex items-start gap-1">
                    <span>💡</span>
                    <span>{item.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic writing tip */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl p-6 border border-blue-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📝</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Совет для академического письма</h3>
                <p className="text-white/90">
                  В IELTS Writing особенно важно избегать false friends. Экзаменаторы сразу замечают
                  такие ошибки, как <span className="text-red-300">&quot;actual problems&quot;</span> вместо
                  <span className="text-green-300">&quot;current issues&quot;</span>. Это снижает балл за Lexical Resource!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: People & Professions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const professionPairs = [
      {
        word: "chef",
        false_meaning: "шеф, начальник",
        true_meaning: "шеф-повар",
        correct_word: "boss / chief",
        icon: "👨‍🍳",
        example: "The chef prepared a delicious meal.",
        memory: "CHEF = кухня (CHEFchen = кухонька)"
      },
      {
        word: "physician",
        false_meaning: "физик",
        true_meaning: "врач, терапевт",
        correct_word: "physicist",
        icon: "👨‍⚕️",
        example: "The physician examined the patient.",
        memory: "PHYSICIAN = PHYSICal health (физическое здоровье)"
      },
      {
        word: "artist",
        false_meaning: "артист (актёр)",
        true_meaning: "художник",
        correct_word: "actor / performer",
        icon: "🎨",
        example: "The artist painted a beautiful portrait.",
        memory: "ARTIST = ART (искусство, живопись)"
      },
      {
        word: "compositor",
        false_meaning: "композитор",
        true_meaning: "наборщик (типография)",
        correct_word: "composer",
        icon: "🎼",
        example: "Mozart was a famous composer.",
        memory: "COMPOSER = COMPOSE music"
      },
      {
        word: "ingenious",
        false_meaning: "инженер",
        true_meaning: "изобретательный, гениальный",
        correct_word: "engineer",
        icon: "💡",
        example: "What an ingenious solution!",
        memory: "INGENIOUS = GENIUS (гений)"
      },
      {
        word: "principal",
        false_meaning: "принципиальный",
        true_meaning: "директор школы / главный",
        correct_word: "principled",
        icon: "🏫",
        example: "The principal announced new rules.",
        memory: "PRINCIPAL = главный PAL (друг)"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">👥</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">People & Professions</h2>
            <p className="text-xl text-white/70">Профессии и люди — осторожно!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <span className="text-5xl">{item.icon}</span>
                </div>

                <div className="text-center mb-3">
                  <span className="text-2xl font-bold text-white">{item.word}</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-red-500/20 rounded-lg p-2 border border-red-400/20">
                    <span className="text-red-300 text-xs">❌ Не означает:</span>
                    <p className="text-white/80">{item.false_meaning}</p>
                  </div>

                  <div className="bg-green-500/20 rounded-lg p-2 border border-green-400/20">
                    <span className="text-green-300 text-xs">✅ Означает:</span>
                    <p className="text-white font-medium">{item.true_meaning}</p>
                  </div>

                  <div className="text-center">
                    <span className="text-white/50 text-xs">Правильное слово: </span>
                    <span className="text-cyan-300 font-medium">{item.correct_word}</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-white/60 text-xs italic">&quot;{item.example}&quot;</p>
                  </div>

                  <div className="text-xs text-yellow-300/80 text-center">
                    💡 {item.memory}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fun story */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-6 border border-purple-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">😄</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Забавная история</h3>
                <p className="text-white/90">
                  Русский турист в Лондоне спросил: <em className="text-cyan-300">&quot;Where can I find a good chef?&quot;</em>
                  Его отправили в ресторан, хотя он искал начальника отдела кадров!
                  Правильно было бы: <em className="text-green-300">&quot;Where can I find the HR manager?&quot;</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Emotions & Character
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const emotionPairs = [
      {
        word: "sympathetic",
        false_meaning: "симпатичный",
        true_meaning: "сочувствующий, понимающий",
        correct: "attractive / nice / likeable",
        example_bad: "She has a sympathetic face.",
        example_good: "She has an attractive face.",
        context: "Если хотите сделать комплимент — НЕ используйте sympathetic!"
      },
      {
        word: "pathetic",
        false_meaning: "патетичный, пафосный",
        true_meaning: "жалкий, убогий",
        correct: "dramatic / passionate",
        example_bad: "His speech was pathetic.",
        example_good: "His speech was dramatic/passionate.",
        context: "Pathetic — это оскорбление! Означает 'жалкий, ничтожный'"
      },
      {
        word: "nervous",
        false_meaning: "нервный (агрессивный)",
        true_meaning: "нервничающий, взволнованный",
        correct: "irritable / edgy / touchy",
        example_bad: "He's always nervous and shouts.",
        example_good: "He's always irritable and shouts.",
        context: "Nervous = волнение перед экзаменом, а не раздражительность"
      },
      {
        word: "delicate",
        false_meaning: "деликатный (тактичный)",
        true_meaning: "хрупкий, нежный, тонкий",
        correct: "tactful / considerate",
        example_bad: "Be delicate when telling her.",
        example_good: "Be tactful when telling her.",
        context: "Delicate = хрупкий (о вещах), деликатный вопрос = sensitive issue"
      },
      {
        word: "dramatic",
        false_meaning: "драматический (трагический)",
        true_meaning: "значительный, впечатляющий",
        correct: "tragic / devastating",
        example_bad: "The earthquake was dramatic.",
        example_good: "The earthquake was devastating.",
        context: "Dramatic change = значительное изменение, не трагедия"
      },
      {
        word: "extravagant",
        false_meaning: "экстравагантный (странный)",
        true_meaning: "расточительный, роскошный",
        correct: "eccentric / flamboyant",
        example_bad: "Her extravagant behavior surprised us.",
        example_good: "Her eccentric behavior surprised us.",
        context: "Extravagant = тратит много денег, а не ведёт себя странно"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-red-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">💭</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Emotions & Character</h2>
            <p className="text-xl text-white/70">Эмоции и характер — зона риска!</p>
          </div>

          {/* Warning */}
          <div className="backdrop-blur-xl bg-red-500/20 rounded-2xl p-4 border border-red-400/30">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              <p className="text-white">
                Эти слова особенно опасны — можно случайно оскорбить человека!
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {emotionPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-pink-500/30 to-rose-500/30 p-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-2xl font-bold text-white">{item.word}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-300 text-sm line-through">{item.false_meaning}</span>
                      <span className="text-white/50">→</span>
                      <span className="text-green-300 text-sm">{item.true_meaning}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-300 text-sm">✅ Используйте:</span>
                    <span className="text-white font-bold">{item.correct}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 rounded-xl p-3 border border-red-400/20">
                      <span className="text-red-300 text-xs">❌ Ошибка:</span>
                      <p className="text-white/70 text-sm italic mt-1">&quot;{item.example_bad}&quot;</p>
                    </div>
                    <div className="bg-green-500/10 rounded-xl p-3 border border-green-400/20">
                      <span className="text-green-300 text-xs">✅ Правильно:</span>
                      <p className="text-white/70 text-sm italic mt-1">&quot;{item.example_good}&quot;</p>
                    </div>
                  </div>

                  <div className="text-sm text-yellow-300/90 bg-yellow-500/10 rounded-lg p-2 flex items-start gap-2">
                    <span>💡</span>
                    <span>{item.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Actions & States
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const actionPairs = [
      {
        word: "realize",
        wrong: "реализовать (осуществить)",
        right: "осознать, понять",
        use_instead: "implement / carry out / achieve",
        example: "I realized my mistake. = Я осознал свою ошибку.",
        tip: "REALIZE = понять REALity (реальность)"
      },
      {
        word: "assist",
        wrong: "ассистировать (присутствовать)",
        right: "помогать",
        use_instead: "attend",
        example: "Can you assist me? = Можете помочь?",
        tip: "ASSIST = help, ATTEND = присутствовать"
      },
      {
        word: "support",
        wrong: "саппорт (терпеть)",
        right: "поддерживать",
        use_instead: "endure / stand / tolerate",
        example: "I support your decision. = Я поддерживаю твоё решение.",
        tip: "SUPPORT = держать SUP (наверху)"
      },
      {
        word: "control",
        wrong: "контролировать (проверять)",
        right: "управлять, владеть ситуацией",
        use_instead: "check / verify / inspect",
        example: "She controls the company. = Она управляет компанией.",
        tip: "CONTROL = власть, CHECK = проверка"
      },
      {
        word: "adopt",
        wrong: "адаптировать",
        right: "принять (закон), усыновить",
        use_instead: "adapt",
        example: "They adopted a new policy. = Они приняли новую политику.",
        tip: "ADOPT = принять, ADAPT = приспособить"
      },
      {
        word: "occupy",
        wrong: "оккупировать (военный захват)",
        right: "занимать (место, время)",
        use_instead: "invade (для военного значения)",
        example: "This work occupies my time. = Эта работа занимает моё время.",
        tip: "OCCUPY = просто занимать пространство/время"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">⚡</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Actions & States</h2>
            <p className="text-xl text-white/70">Действия и состояния</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {actionPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{item.word}</span>
                  <span className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded-full">verb</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">❌</span>
                    <div>
                      <span className="text-white/50 text-xs">Не означает:</span>
                      <p className="text-red-300">{item.wrong}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <div>
                      <span className="text-white/50 text-xs">Означает:</span>
                      <p className="text-green-300 font-medium">{item.right}</p>
                    </div>
                  </div>

                  <div className="bg-cyan-500/20 rounded-lg p-2 border border-cyan-400/20">
                    <span className="text-cyan-300 text-xs">Используйте вместо: </span>
                    <span className="text-white font-medium">{item.use_instead}</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/70 text-sm italic">{item.example}</p>
                  </div>

                  <div className="text-xs text-yellow-300/80 flex items-start gap-1">
                    <span>💡</span>
                    <span>{item.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Common mistake */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-6 border border-orange-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎯</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Типичная ошибка</h3>
                <p className="text-white/90">
                  <span className="text-red-300">&quot;I want to realize my dream&quot;</span> — звучит как
                  &quot;Я хочу осознать свою мечту&quot;. Правильно:
                  <span className="text-green-300">&quot;I want to achieve/fulfill my dream&quot;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Objects & Places
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const objectPairs = [
      {
        word: "fabric",
        wrong: "фабрика",
        right: "ткань, материал",
        correct: "factory",
        icon: "🧵",
        example: "The fabric is soft. (Ткань мягкая)"
      },
      {
        word: "magazine",
        wrong: "магазин",
        right: "журнал",
        correct: "shop / store",
        icon: "📖",
        example: "I read a fashion magazine. (Я читаю модный журнал)"
      },
      {
        word: "cabin",
        wrong: "кабинет (офис)",
        right: "хижина, каюта, кабина",
        correct: "office / study",
        icon: "🏠",
        example: "A cozy mountain cabin. (Уютная горная хижина)"
      },
      {
        word: "conductor",
        wrong: "кондуктор (в автобусе)",
        right: "дирижёр, проводник (электр.)",
        correct: "ticket inspector",
        icon: "🎼",
        example: "The orchestra conductor. (Дирижёр оркестра)"
      },
      {
        word: "baton",
        wrong: "батон (хлеб)",
        right: "дирижёрская палочка, жезл",
        correct: "baguette / loaf",
        icon: "🥖",
        example: "The conductor raised his baton. (Дирижёр поднял палочку)"
      },
      {
        word: "receipt",
        wrong: "рецепт",
        right: "чек, квитанция",
        correct: "recipe",
        icon: "🧾",
        example: "Keep the receipt. (Сохраните чек)"
      },
      {
        word: "aspirant",
        wrong: "аспирант",
        right: "претендент, кандидат",
        correct: "PhD student / postgraduate",
        icon: "🎓",
        example: "Presidential aspirant. (Кандидат в президенты)"
      },
      {
        word: "prospect",
        wrong: "проспект (улица)",
        right: "перспектива, вид",
        correct: "avenue / boulevard",
        icon: "🛤️",
        example: "Good career prospects. (Хорошие карьерные перспективы)"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-slate-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-zinc-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">📦</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Objects & Places</h2>
            <p className="text-xl text-white/70">Предметы и места</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {objectPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-4 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-center mb-3">
                  <span className="text-4xl">{item.icon}</span>
                </div>

                <div className="text-center mb-3">
                  <span className="text-xl font-bold text-white">{item.word}</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="bg-red-500/20 rounded-lg p-2 text-center">
                    <span className="text-red-300">❌ {item.wrong}</span>
                  </div>

                  <div className="bg-green-500/20 rounded-lg p-2 text-center">
                    <span className="text-green-300">✅ {item.right}</span>
                  </div>

                  <div className="text-center text-white/50 text-xs">
                    Правильно: <span className="text-cyan-300">{item.correct}</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-white/60 text-xs italic">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shopping story */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-6 border border-blue-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🛒</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Типичная ситуация в магазине</h3>
                <p className="text-white/90">
                  — <span className="text-red-300">&quot;Where is the magazine?&quot;</span> (Где журнал?)<br/>
                  — Продавец показывает на стойку с журналами...<br/>
                  — <span className="text-green-300">&quot;No, I mean where is the shop/store?&quot;</span> (Нет, я имею в виду где магазин!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Why False Friends Exist
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const reasons = [
      {
        title: "Общие латинские корни",
        description: "Многие слова пришли из латыни в оба языка, но развивались по-разному",
        example: "Латинское 'actualis' → English 'actual' (реальный) vs Русское 'актуальный' (current)",
        icon: "🏛️"
      },
      {
        title: "Французское влияние",
        description: "Французский повлиял и на английский (после 1066), и на русский (XVIII-XIX вв.)",
        example: "Французское 'sympathique' → разные значения в языках",
        icon: "🇫🇷"
      },
      {
        title: "Семантический дрейф",
        description: "Слова меняют значение со временем в разных направлениях",
        example: "'Magazine' изначально = склад → в англ. = журнал, в рус. = магазин",
        icon: "🌊"
      },
      {
        title: "Заимствования в разное время",
        description: "Слова заимствовались в разные эпохи с разными значениями",
        example: "'Chef' пришло в англ. как 'главный повар', в русский — как 'начальник'",
        icon: "⏳"
      },
    ];

    const etymology = [
      { word: "Actual", from: "Latin 'actualis' (действительный)", eng: "реальный, фактический", rus: "современный, актуальный" },
      { word: "Sympathy", from: "Greek 'sympatheia' (сочувствие)", eng: "сочувствие", rus: "привлекательность (симпатия)" },
      { word: "Magazine", from: "Arabic 'makhazin' (склад)", eng: "журнал", rus: "магазин" },
      { word: "Fabric", from: "Latin 'fabrica' (мастерская)", eng: "ткань", rus: "фабрика" },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">📜</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Why False Friends Exist</h2>
            <p className="text-xl text-white/70">История и этимология слов-обманщиков</p>
          </div>

          {/* Reasons */}
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/70 mb-3">{item.description}</p>
                <div className="bg-white/5 rounded-lg p-2 text-sm text-cyan-300">
                  💡 {item.example}
                </div>
              </div>
            ))}
          </div>

          {/* Etymology table */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Этимологическое сравнение</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-3 text-white/60">Слово</th>
                    <th className="text-left p-3 text-white/60">Происхождение</th>
                    <th className="text-left p-3 text-blue-300">🇬🇧 English</th>
                    <th className="text-left p-3 text-red-300">🇷🇺 Русский</th>
                  </tr>
                </thead>
                <tbody>
                  {etymology.map((item, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-3 text-white font-bold">{item.word}</td>
                      <td className="p-3 text-white/60 text-sm">{item.from}</td>
                      <td className="p-3 text-blue-300">{item.eng}</td>
                      <td className="p-3 text-red-300">{item.rus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fun fact */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-6 border border-purple-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🤓</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Интересный факт</h3>
                <p className="text-white/90">
                  Слово <strong className="text-cyan-300">&quot;magazine&quot;</strong> происходит от арабского &quot;makhazin&quot; (склад).
                  В английском оно стало означать &quot;склад информации&quot; → журнал.
                  В русском сохранилось значение &quot;место хранения товаров&quot; → магазин.
                  Оба значения логичны, но совершенно разные!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Memory Tricks
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const tricks = [
      {
        pair: "Sensible vs Sensitive",
        trick: "SensiBLE = ResponsiBLE (разумный, ответственный)",
        visual: "🧠 Sensible = думает головой",
        mnemonic: "Sensible people make responsible decisions"
      },
      {
        pair: "Actual vs Current",
        trick: "ACTUAL = in FACT (фактически, на самом деле)",
        visual: "📍 Actual = это факт!",
        mnemonic: "Actually, this is a fact!"
      },
      {
        pair: "Eventually vs Finally",
        trick: "EVENTUALLY = at the END (в конце концов, после долгого времени)",
        visual: "⏰ Eventually = долго ждали",
        mnemonic: "Eventually, at the end of events"
      },
      {
        pair: "Sympathetic vs Attractive",
        trick: "SYMPATHETIC = SYMPATHY (сочувствие)",
        visual: "💔 Sympathetic = сочувствует",
        mnemonic: "I feel sympathy, I'm sympathetic"
      },
      {
        pair: "Fabric vs Factory",
        trick: "FABRIC = что можно FABRICate (ткань, материал)",
        visual: "🧵 Fabric = из чего шьют",
        mnemonic: "Fabric is what you fabricate clothes from"
      },
      {
        pair: "Chef vs Boss",
        trick: "CHEF = CHicken, Eggs, Food (повар готовит еду)",
        visual: "👨‍🍳 Chef = на кухне",
        mnemonic: "The chef makes chicken and eggs"
      },
      {
        pair: "Realize vs Implement",
        trick: "REALIZE = see the REAL truth (осознать правду)",
        visual: "💡 Realize = понять реальность",
        mnemonic: "I realized the reality"
      },
      {
        pair: "Magazine vs Store",
        trick: "MAGAZINE = MAGAzine has PAGES (журнал со страницами)",
        visual: "📖 Magazine = читаем",
        mnemonic: "I read magazines, I shop at stores"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-violet-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🧠</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Memory Tricks</h2>
            <p className="text-xl text-white/70">Мнемонические приёмы для запоминания</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {tricks.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all group"
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{item.visual.split(' ')[0]}</span>
                </div>

                <h3 className="text-lg font-bold text-white text-center mb-3">{item.pair}</h3>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-3 border border-cyan-400/20">
                    <p className="text-cyan-300 font-medium text-center">{item.trick}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-2 text-center">
                    <p className="text-white/70 text-sm">{item.visual}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-yellow-300/80 text-xs italic">&quot;{item.mnemonic}&quot;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-6 border border-green-400/30">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
              <span>🎯</span> Стратегия запоминания
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <span className="text-3xl mb-2 block">1️⃣</span>
                <p className="text-white/80">Создайте <strong className="text-green-300">ассоциацию</strong> с английским словом</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <span className="text-3xl mb-2 block">2️⃣</span>
                <p className="text-white/80">Придумайте <strong className="text-green-300">смешную фразу</strong> для запоминания</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <span className="text-3xl mb-2 block">3️⃣</span>
                <p className="text-white/80">Используйте слово <strong className="text-green-300">в контексте</strong> 5+ раз</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Final Challenge
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
      {
        id: "q1",
        question: "She made a very _____ decision to save money. (разумное)",
        options: ["sensitive", "sensible", "sensual", "sensational"],
        correct: "sensible"
      },
      {
        id: "q2",
        question: "The _____ news is that the economy is growing. (актуальные)",
        options: ["actual", "current", "present", "modern"],
        correct: "current"
      },
      {
        id: "q3",
        question: "_____, he got the job after many interviews. (В конце концов)",
        options: ["Eventually", "Actually", "Finally", "Possibly"],
        correct: "Eventually"
      },
      {
        id: "q4",
        question: "The famous _____ prepared a delicious meal. (шеф-повар)",
        options: ["chief", "chef", "boss", "leader"],
        correct: "chef"
      },
      {
        id: "q5",
        question: "She was very _____ when I told her about my problems. (сочувствующая)",
        options: ["sympathetic", "nice", "attractive", "pathetic"],
        correct: "sympathetic"
      },
      {
        id: "q6",
        question: "I need to buy some _____ for my new dress. (ткань)",
        options: ["factory", "fabric", "manufacture", "textile"],
        correct: "fabric"
      },
      {
        id: "q7",
        question: "I _____ that I had made a mistake. (осознал)",
        options: ["realized", "implemented", "achieved", "accomplished"],
        correct: "realized"
      },
      {
        id: "q8",
        question: "Can you _____ me with this project? (помочь)",
        options: ["attend", "assist", "present", "support"],
        correct: "assist"
      },
      {
        id: "q9",
        question: "I read an interesting article in this _____. (журнал)",
        options: ["magazine", "store", "shop", "market"],
        correct: "magazine"
      },
      {
        id: "q10",
        question: "Your measurements need to be _____. (точными)",
        options: ["accurate", "neat", "tidy", "careful"],
        correct: "accurate"
      },
      {
        id: "q11",
        question: "The _____ examined the patient carefully. (врач)",
        options: ["physicist", "physician", "physical", "physique"],
        correct: "physician"
      },
      {
        id: "q12",
        question: "Mozart was a famous _____. (композитор)",
        options: ["compositor", "composer", "conductor", "constructor"],
        correct: "composer"
      },
    ];

    const handleAnswer = (questionId: string, answer: string) => {
      setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const checkAnswers = () => {
      let correct = 0;
      questions.forEach(q => {
        if (answers[q.id] === q.correct) correct++;
      });
      setScore(correct);
      setShowResults(true);
    };

    const resetQuiz = () => {
      setAnswers({});
      setShowResults(false);
      setScore(0);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🏆</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Final Challenge</h2>
            <p className="text-xl text-white/70">Проверь свои знания о false friends!</p>
          </div>

          {!showResults ? (
            <>
              <div className="space-y-4">
                {questions.map((q, index) => (
                  <div
                    key={q.id}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-white flex-1">{q.question}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ml-11">
                      {q.options.map(option => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(q.id, option)}
                          className={`p-3 rounded-xl text-sm transition-all border ${
                            answers[q.id] === option
                              ? "bg-pink-500/40 border-pink-400 text-white"
                              : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={checkAnswers}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-bold text-xl hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg shadow-rose-500/30"
                >
                  Проверить ответы
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              <div className={`backdrop-blur-xl rounded-3xl p-8 border-2 ${
                score >= 10 ? "bg-green-500/20 border-green-400/30" :
                score >= 7 ? "bg-yellow-500/20 border-yellow-400/30" :
                "bg-red-500/20 border-red-400/30"
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {score >= 10 ? "🎉" : score >= 7 ? "👍" : "📚"}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">
                    Результат: {score} из {questions.length}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {score >= 10 ? "Превосходно! Вы мастер false friends!" :
                     score >= 7 ? "Хорошо! Но есть над чем поработать." :
                     "Стоит повторить материал — false friends коварны!"}
                  </p>
                </div>
              </div>

              {/* Detailed results */}
              <div className="space-y-3">
                {questions.map((q, index) => {
                  const isCorrect = answers[q.id] === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`backdrop-blur-xl rounded-xl p-4 border ${
                        isCorrect ? "bg-green-500/10 border-green-400/30" : "bg-red-500/10 border-red-400/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl">{isCorrect ? "✅" : "❌"}</span>
                        <div className="flex-1">
                          <p className="text-white text-sm mb-1">{index + 1}. {q.question}</p>
                          {!isCorrect && (
                            <p className="text-sm">
                              <span className="text-red-300">Ваш ответ: {answers[q.id] || "—"}</span>
                              <span className="text-white/50 mx-2">→</span>
                              <span className="text-green-300">Правильно: {q.correct}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
                >
                  Пройти тест заново
                </button>
              </div>

              {/* Congratulations */}
              <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-6 border border-purple-400/30">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🎓</span>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2">Поздравляем с завершением урока!</h3>
                    <p className="text-white/90">
                      Теперь вы знаете самые коварные false friends и не попадётесь в их ловушки.
                      Помните: если слово кажется знакомым — это повод насторожиться!
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return null;
}
