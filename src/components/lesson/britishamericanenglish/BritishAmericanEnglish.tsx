"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function BritishAmericanEnglish({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeTab, setActiveTab] = useState<"intro" | "why" | "topics">("intro");

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-8 rounded-3xl">
        {/* Glassmorphism background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <span className="text-5xl">🌍</span>
            </div>
            <h2 className="text-5xl font-black mb-3 text-white drop-shadow-lg">
              British vs American vs Global English
            </h2>
            <p className="text-xl text-white/80">
              Различия между вариантами английского языка
            </p>
          </div>

          {/* Navigation tabs - Glassmorphism style */}
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { id: "intro", label: "Введение", icon: "📚" },
              { id: "why", label: "Зачем изучать", icon: "🎯" },
              { id: "topics", label: "Темы урока", icon: "📋" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "intro" | "why" | "topics")}
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

          {/* Content sections - Glassmorphism cards */}
          {activeTab === "intro" && (
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Добро пожаловать в мир вариантов английского!
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Английский язык — это не один язык, а целое семейство вариантов!
                <strong className="text-cyan-300"> British English (BrE)</strong> и
                <strong className="text-pink-300"> American English (AmE)</strong> —
                два самых распространённых варианта, но существует также
                <strong className="text-yellow-300"> Global English</strong> —
                международный стандарт для глобальной коммуникации.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="backdrop-blur-lg bg-blue-500/20 rounded-2xl p-5 border border-blue-400/30 hover:bg-blue-500/30 transition-all">
                  <div className="text-4xl mb-3">🇬🇧</div>
                  <h4 className="font-bold text-white text-lg">British English</h4>
                  <p className="text-white/70 text-sm mt-2">
                    Классический вариант, основа литературного английского
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-red-500/20 rounded-2xl p-5 border border-red-400/30 hover:bg-red-500/30 transition-all">
                  <div className="text-4xl mb-3">🇺🇸</div>
                  <h4 className="font-bold text-white text-lg">American English</h4>
                  <p className="text-white/70 text-sm mt-2">
                    Самый распространённый в медиа и бизнесе
                  </p>
                </div>
                <div className="backdrop-blur-lg bg-green-500/20 rounded-2xl p-5 border border-green-400/30 hover:bg-green-500/30 transition-all">
                  <div className="text-4xl mb-3">🌐</div>
                  <h4 className="font-bold text-white text-lg">Global English</h4>
                  <p className="text-white/70 text-sm mt-2">
                    Упрощённый международный стандарт
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Зачем знать различия?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "💼", title: "Бизнес-коммуникация", desc: "Американский английский доминирует в бизнесе, но британский важен для работы с UK и Европой" },
                  { icon: "🎬", title: "Медиа и культура", desc: "Понимание обоих вариантов открывает доступ к фильмам, сериалам и литературе" },
                  { icon: "✈️", title: "Путешествия", desc: "Избежите недоразумений — chips в UK это картошка фри, а в USA — чипсы!" },
                  { icon: "📝", title: "Экзамены", desc: "IELTS использует британский, TOEFL — американский английский" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
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
                  { step: 2, title: "Everyday Vocabulary", desc: "flat/apartment, lorry/truck, rubbish/garbage" },
                  { step: 3, title: "Food & Drinks", desc: "chips/fries, biscuit/cookie, aubergine/eggplant" },
                  { step: 4, title: "Transport & Travel", desc: "underground/subway, petrol/gas, motorway/highway" },
                  { step: 5, title: "Spelling Differences", desc: "-our/-or, -ise/-ize, -re/-er" },
                  { step: 6, title: "Grammar Differences", desc: "have got/have, collective nouns, past tenses" },
                  { step: 7, title: "Pronunciation", desc: "различия в произношении и интонации" },
                  { step: 8, title: "Why These Differences Exist", desc: "история разделения языков" },
                  { step: 9, title: "Global English", desc: "международный стандарт коммуникации" },
                  { step: 10, title: "Interactive Quiz", desc: "проверь свои знания!" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 p-4 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:bg-white/15 transition-all group"
                  >
                    <span className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
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

          {/* Fun fact */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl p-6 border border-yellow-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Интересный факт</h3>
                <p className="text-white/90">
                  Джордж Бернард Шоу сказал: <em>&quot;England and America are two countries
                  separated by the same language&quot;</em> — &quot;Англия и Америка — две страны,
                  разделённые общим языком&quot;. Эта шутка отражает реальные различия,
                  которые иногда приводят к забавным недоразумениям!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Everyday Vocabulary
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const vocabularyPairs = [
      { british: "flat", american: "apartment", translation: "квартира", note: "AmE 'flat' означает 'спущенное колесо'" },
      { british: "lift", american: "elevator", translation: "лифт", note: "BrE также использует 'to give someone a lift' = подвезти" },
      { british: "lorry", american: "truck", translation: "грузовик", note: "'Truck' в BrE — тележка" },
      { british: "rubbish", american: "garbage/trash", translation: "мусор", note: "'Rubbish!' в BrE также означает 'Чепуха!'" },
      { british: "queue", american: "line", translation: "очередь", note: "BrE: to queue, AmE: to stand in line" },
      { british: "torch", american: "flashlight", translation: "фонарик", note: "'Torch' в AmE — факел" },
      { british: "pavement", american: "sidewalk", translation: "тротуар", note: "'Pavement' в AmE — асфальт" },
      { british: "postbox", american: "mailbox", translation: "почтовый ящик", note: "BrE: post, AmE: mail" },
      { british: "mobile phone", american: "cell phone", translation: "мобильный телефон", note: "Global: просто 'phone' или 'smartphone'" },
      { british: "holiday", american: "vacation", translation: "отпуск/каникулы", note: "'Holiday' в AmE — праздничный день" },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 rounded-3xl relative overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🏠</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Everyday Vocabulary</h2>
            <p className="text-xl text-white/70">Повседневная лексика</p>
          </div>

          <div className="space-y-4">
            {vocabularyPairs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* British */}
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-2xl">🇬🇧</span>
                      <div className="backdrop-blur-lg bg-blue-500/30 px-4 py-2 rounded-xl border border-blue-400/30">
                        <span className="text-xl font-bold text-white">{item.british}</span>
                      </div>
                    </div>

                    {/* VS */}
                    <div className="hidden md:flex items-center justify-center">
                      <span className="text-white/50 font-bold">VS</span>
                    </div>

                    {/* American */}
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-2xl">🇺🇸</span>
                      <div className="backdrop-blur-lg bg-red-500/30 px-4 py-2 rounded-xl border border-red-400/30">
                        <span className="text-xl font-bold text-white">{item.american}</span>
                      </div>
                    </div>

                    {/* Translation */}
                    <div className="flex-1">
                      <span className="text-white/70 italic">{item.translation}</span>
                    </div>
                  </div>

                  {/* Note - appears on hover */}
                  <div className="mt-3 pt-3 border-t border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-cyan-300 flex items-start gap-2">
                      <span>💡</span>
                      <span>{item.note}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Memory tip */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-6 border border-emerald-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🧠</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Совет для запоминания</h3>
                <p className="text-white/90">
                  Американский английский часто использует более короткие или упрощённые слова:
                  <strong className="text-emerald-300"> elevator</strong> вместо <strong className="text-blue-300">lift</strong>,
                  <strong className="text-emerald-300"> trash</strong> вместо <strong className="text-blue-300">rubbish</strong>.
                  Это связано с историческим стремлением к &quot;демократизации&quot; языка в США.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Food & Drinks
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const foodVocab = [
      { british: "chips", american: "fries", translation: "картофель фри", warning: "AmE 'chips' = чипсы!" },
      { british: "crisps", american: "chips", translation: "чипсы", warning: "Главный источник путаницы!" },
      { british: "biscuit", american: "cookie", translation: "печенье", warning: "AmE 'biscuit' = булочка" },
      { british: "aubergine", american: "eggplant", translation: "баклажан", warning: "BrE использует французское слово" },
      { british: "courgette", american: "zucchini", translation: "кабачок", warning: "BrE — французское, AmE — итальянское" },
      { british: "sweets", american: "candy", translation: "конфеты", warning: "'Sweet' в AmE — сладкий" },
      { british: "jam", american: "jelly", translation: "джем/варенье", warning: "'Jelly' в BrE — желе" },
      { british: "mince", american: "ground beef", translation: "фарш", warning: "AmE более описательный" },
      { british: "prawns", american: "shrimp", translation: "креветки", warning: "BrE различает prawns (крупные) и shrimp (мелкие)" },
      { british: "fizzy drink", american: "soda/pop", translation: "газировка", warning: "'Pop' чаще на севере США" },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🍔</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Food & Drinks</h2>
            <p className="text-xl text-white/70">Еда и напитки — осторожно, путаница!</p>
          </div>

          {/* Warning card */}
          <div className="backdrop-blur-xl bg-red-500/20 rounded-3xl p-6 border border-red-400/30 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">⚠️</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">Внимание!</h3>
                <p className="text-white/90">
                  Еда — самая опасная категория для путаницы. Если вы закажете
                  <strong className="text-yellow-300"> chips</strong> в США, вы получите пакетик чипсов,
                  а не картошку фри!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {foodVocab.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇬🇧</span>
                    <span className="font-bold text-lg text-blue-300">{item.british}</span>
                  </div>
                  <span className="text-white/40">=</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-red-300">{item.american}</span>
                    <span className="text-xl">🇺🇸</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mb-2">{item.translation}</p>
                <div className="flex items-start gap-2 text-xs text-yellow-300/80 bg-yellow-500/10 rounded-lg p-2">
                  <span>⚡</span>
                  <span>{item.warning}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Famous confusion story */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-6 border border-purple-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📖</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">История из жизни</h3>
                <p className="text-white/90">
                  Известный случай: британский турист в американском ресторане попросил
                  <em className="text-cyan-300">&quot;Could I have some chips with my burger?&quot;</em>
                  и был очень удивлён, получив пакетик Lay&apos;s вместо картошки фри.
                  Правильно было бы сказать: <em className="text-green-300">&quot;Could I have some fries?&quot;</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Transport & Travel
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const transportVocab = [
      { british: "underground/tube", american: "subway", translation: "метро", icon: "🚇" },
      { british: "petrol", american: "gas/gasoline", translation: "бензин", icon: "⛽" },
      { british: "motorway", american: "highway/freeway", translation: "автомагистраль", icon: "🛣️" },
      { british: "car park", american: "parking lot", translation: "парковка", icon: "🅿️" },
      { british: "boot", american: "trunk", translation: "багажник", icon: "🚗" },
      { british: "bonnet", american: "hood", translation: "капот", icon: "🔧" },
      { british: "windscreen", american: "windshield", translation: "лобовое стекло", icon: "🪟" },
      { british: "number plate", american: "license plate", translation: "номерной знак", icon: "🔢" },
      { british: "railway", american: "railroad", translation: "железная дорога", icon: "🚂" },
      { british: "return ticket", american: "round-trip ticket", translation: "билет туда-обратно", icon: "🎫" },
      { british: "single ticket", american: "one-way ticket", translation: "билет в одну сторону", icon: "🎟️" },
      { british: "timetable", american: "schedule", translation: "расписание", icon: "📅" },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🚗</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Transport & Travel</h2>
            <p className="text-xl text-white/70">Транспорт и путешествия</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transportVocab.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇬🇧</span>
                    <span className="font-bold text-cyan-300">{item.british}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇺🇸</span>
                    <span className="font-bold text-emerald-300">{item.american}</span>
                  </div>
                  <p className="text-white/60 text-sm pt-2 border-t border-white/10">{item.translation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Car parts diagram */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
              <span>🚙</span> Части автомобиля — главные различия
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-500/20 rounded-2xl p-4 border border-blue-400/30">
                <h4 className="font-bold text-blue-300 mb-3">🇬🇧 British</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• <strong>Boot</strong> — багажник</li>
                  <li>• <strong>Bonnet</strong> — капот</li>
                  <li>• <strong>Windscreen</strong> — лобовое стекло</li>
                  <li>• <strong>Wing</strong> — крыло</li>
                  <li>• <strong>Gear lever</strong> — рычаг переключения</li>
                </ul>
              </div>
              <div className="bg-red-500/20 rounded-2xl p-4 border border-red-400/30">
                <h4 className="font-bold text-red-300 mb-3">🇺🇸 American</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• <strong>Trunk</strong> — багажник</li>
                  <li>• <strong>Hood</strong> — капот</li>
                  <li>• <strong>Windshield</strong> — лобовое стекло</li>
                  <li>• <strong>Fender</strong> — крыло</li>
                  <li>• <strong>Stick shift</strong> — рычаг переключения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Spelling Differences
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const spellingRules = [
      {
        rule: "-our vs -or",
        british: ["colour", "favour", "honour", "labour", "behaviour"],
        american: ["color", "favor", "honor", "labor", "behavior"],
        explanation: "Американцы убрали 'u' под влиянием Ноя Вебстера, который хотел упростить орфографию"
      },
      {
        rule: "-ise vs -ize",
        british: ["organise", "realise", "recognise", "apologise"],
        american: ["organize", "realize", "recognize", "apologize"],
        explanation: "Оба варианта приемлемы в BrE, но AmE использует только -ize"
      },
      {
        rule: "-re vs -er",
        british: ["centre", "theatre", "metre", "litre"],
        american: ["center", "theater", "meter", "liter"],
        explanation: "BrE сохранил французское написание, AmE изменил на фонетическое"
      },
      {
        rule: "-ce vs -se",
        british: ["defence", "licence (n)", "offence", "pretence"],
        american: ["defense", "license", "offense", "pretense"],
        explanation: "AmE унифицировал написание существительных и глаголов"
      },
      {
        rule: "-ll vs -l",
        british: ["travelling", "cancelled", "jewellery", "modelling"],
        american: ["traveling", "canceled", "jewelry", "modeling"],
        explanation: "AmE не удваивает 'l' перед суффиксами"
      },
      {
        rule: "-ogue vs -og",
        british: ["dialogue", "catalogue", "analogue"],
        american: ["dialog", "catalog", "analog"],
        explanation: "AmE часто сокращает греческие окончания"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-fuchsia-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">✏️</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Spelling Differences</h2>
            <p className="text-xl text-white/70">Различия в написании</p>
          </div>

          {/* Noah Webster card */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl p-6 border border-amber-400/30 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-5xl">📚</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Ной Вебстер — отец американской орфографии</h3>
                <p className="text-white/90">
                  В 1828 году Ной Вебстер опубликовал &quot;American Dictionary of the English Language&quot;,
                  в котором намеренно изменил написание многих слов, чтобы сделать американский английский
                  более логичным и независимым от британского.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {spellingRules.map((rule, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 p-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">{rule.rule}</h3>
                </div>
                <div className="p-5">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span>🇬🇧</span>
                        <span className="font-bold text-blue-300">British</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {rule.british.map((word, i) => (
                          <span key={i} className="bg-white/10 px-3 py-1 rounded-lg text-white font-mono">
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-red-500/20 rounded-xl p-4 border border-red-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span>🇺🇸</span>
                        <span className="font-bold text-red-300">American</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {rule.american.map((word, i) => (
                          <span key={i} className="bg-white/10 px-3 py-1 rounded-lg text-white font-mono">
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm flex items-start gap-2">
                    <span>💡</span>
                    <span>{rule.explanation}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Grammar Differences
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const grammarDiffs = [
      {
        topic: "Have vs Have got",
        british: "I've got a car. / Have you got any brothers?",
        american: "I have a car. / Do you have any brothers?",
        explanation: "BrE предпочитает 'have got', AmE использует просто 'have' с do/does"
      },
      {
        topic: "Present Perfect vs Past Simple",
        british: "I've just eaten. / I've already done it.",
        american: "I just ate. / I already did it.",
        explanation: "AmE часто использует Past Simple там, где BrE требует Present Perfect"
      },
      {
        topic: "Collective nouns",
        british: "The team are playing well. (plural)",
        american: "The team is playing well. (singular)",
        explanation: "BrE может использовать мн.ч. для коллективных существительных, AmE — только ед.ч."
      },
      {
        topic: "Past participle of 'get'",
        british: "I've got a letter. (got)",
        american: "I've gotten better. (gotten)",
        explanation: "AmE сохранил старую форму 'gotten', BrE использует 'got' для обоих случаев"
      },
      {
        topic: "Shall vs Will",
        british: "Shall I open the window?",
        american: "Should I open the window?",
        explanation: "AmE практически не использует 'shall' (кроме юридического языка)"
      },
      {
        topic: "Needn't vs Don't need to",
        british: "You needn't worry.",
        american: "You don't need to worry.",
        explanation: "BrE использует 'needn't' как модальный глагол, AmE — как обычный"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">📐</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Grammar Differences</h2>
            <p className="text-xl text-white/70">Грамматические различия</p>
          </div>

          <div className="space-y-6">
            {grammarDiffs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="bg-gradient-to-r from-emerald-500/30 to-teal-500/30 p-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">{item.topic}</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="backdrop-blur-lg bg-blue-500/20 rounded-xl p-4 border border-blue-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span>🇬🇧</span>
                        <span className="font-semibold text-blue-300">British English</span>
                      </div>
                      <p className="text-white font-mono text-lg">&quot;{item.british}&quot;</p>
                    </div>
                    <div className="backdrop-blur-lg bg-red-500/20 rounded-xl p-4 border border-red-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span>🇺🇸</span>
                        <span className="font-semibold text-red-300">American English</span>
                      </div>
                      <p className="text-white font-mono text-lg">&quot;{item.american}&quot;</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-white/70 bg-white/5 rounded-xl p-3">
                    <span className="text-xl">📌</span>
                    <p>{item.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-3xl p-6 border border-yellow-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Совет для экзаменов</h3>
                <p className="text-white/90">
                  На IELTS принимаются оба варианта, но нужно быть последовательным — не смешивайте BrE и AmE в одном тексте.
                  TOEFL ориентирован на американский английский. Выберите один вариант и придерживайтесь его!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Pronunciation Differences
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const pronunciationDiffs = [
      { word: "schedule", british: "/ˈʃedjuːl/", american: "/ˈskedʒuːl/", note: "BrE: 'шедьюл', AmE: 'скеджул'" },
      { word: "advertisement", british: "/ədˈvɜːtɪsmənt/", american: "/ˌædvərˈtaɪzmənt/", note: "Разное ударение и звуки" },
      { word: "tomato", british: "/təˈmɑːtəʊ/", american: "/təˈmeɪtoʊ/", note: "Классический пример!" },
      { word: "either", british: "/ˈaɪðə/", american: "/ˈiːðər/", note: "BrE: 'айза', AmE: 'изер'" },
      { word: "privacy", british: "/ˈprɪvəsi/", american: "/ˈpraɪvəsi/", note: "Первый слог различается" },
      { word: "vitamin", british: "/ˈvɪtəmɪn/", american: "/ˈvaɪtəmɪn/", note: "BrE: 'витамин', AmE: 'вайтамин'" },
      { word: "herbs", british: "/hɜːbz/", american: "/ɜːrbz/", note: "AmE не произносит 'h'" },
      { word: "garage", british: "/ˈɡærɑːʒ/", american: "/ɡəˈrɑːʒ/", note: "Разное ударение" },
    ];

    const mainFeatures = [
      { feature: "Rhotic 'r'", british: "Не произносится в конце слов: car /kɑː/", american: "Произносится всегда: car /kɑːr/", icon: "🔊" },
      { feature: "Flap T", british: "'t' чёткое: better /ˈbetə/", american: "'t' как 'd': better /ˈbedər/", icon: "👅" },
      { feature: "A в словах типа 'bath'", british: "Долгий /ɑː/: bath /bɑːθ/", american: "Короткий /æ/: bath /bæθ/", icon: "🛁" },
      { feature: "O в словах типа 'hot'", british: "Округлённый /ɒ/: hot /hɒt/", american: "Неокруглённый /ɑː/: hot /hɑːt/", icon: "🔥" },
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
              <span className="text-4xl">🎤</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Pronunciation Differences</h2>
            <p className="text-xl text-white/70">Различия в произношении</p>
          </div>

          {/* Main phonetic features */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Главные фонетические особенности</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {mainFeatures.map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-bold text-white">{item.feature}</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span>🇬🇧</span>
                      <span className="text-blue-300">{item.british}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span className="text-red-300">{item.american}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Word by word comparison */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white mb-4">Примеры слов с разным произношением</h3>
            {pronunciationDiffs.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-4 hover:bg-white/15 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="font-bold text-xl text-white min-w-[120px]">{item.word}</div>
                  <div className="flex-1 grid md:grid-cols-2 gap-3">
                    <div className="bg-blue-500/20 rounded-xl px-4 py-2 border border-blue-400/30">
                      <span className="text-sm text-blue-300">🇬🇧 BrE: </span>
                      <span className="font-mono text-white">{item.british}</span>
                    </div>
                    <div className="bg-red-500/20 rounded-xl px-4 py-2 border border-red-400/30">
                      <span className="text-sm text-red-300">🇺🇸 AmE: </span>
                      <span className="font-mono text-white">{item.american}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Famous song reference */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-6 border border-purple-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎵</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">&quot;Let&apos;s Call the Whole Thing Off&quot;</h3>
                <p className="text-white/90">
                  Знаменитая песня Джорджа Гершвина: <em>&quot;You say tomato /təˈmeɪtoʊ/, I say tomato /təˈmɑːtəʊ/;
                  You say potato /pəˈteɪtoʊ/, I say potato /pəˈtɑːtəʊ/&quot;</em> — прекрасно иллюстрирует различия
                  в произношении!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Why These Differences Exist
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const timeline = [
      { year: "1607", event: "Основание Джеймстауна — первой английской колонии в Америке", icon: "🏴󐁧󐁢󐁥󐁮󐁧󐁿" },
      { year: "1620", event: "Пилигримы прибывают на Mayflower с елизаветинским английским", icon: "⛵" },
      { year: "1776", event: "Декларация независимости — начало культурного разделения", icon: "📜" },
      { year: "1828", event: "Ной Вебстер публикует американский словарь с новой орфографией", icon: "📚" },
      { year: "1900s", event: "Голливуд распространяет американский английский по миру", icon: "🎬" },
      { year: "Today", event: "Интернет смешивает варианты, рождая Global English", icon: "🌐" },
    ];

    const reasons = [
      {
        title: "Географическая изоляция",
        description: "Атлантический океан разделил носителей языка на 300+ лет, позволяя каждому варианту развиваться независимо.",
        icon: "🌊"
      },
      {
        title: "Влияние иммигрантов",
        description: "В США английский смешался с языками иммигрантов: немецким, голландским, испанским, французским.",
        icon: "🗽"
      },
      {
        title: "Консерватизм vs Инновация",
        description: "Интересно, что AmE сохранил некоторые старые формы (gotten, fall), а BrE их изменил!",
        icon: "⚖️"
      },
      {
        title: "Намеренная реформа",
        description: "Ной Вебстер сознательно упростил орфографию как символ независимости от Британии.",
        icon: "✊"
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">📜</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Why These Differences Exist</h2>
            <p className="text-xl text-white/70">История разделения языков</p>
          </div>

          {/* Timeline */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Хронология</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="font-bold text-amber-300 text-lg">{item.year}</div>
                    <p className="text-white/80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Surprising facts */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-6 border border-cyan-400/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🤯</span>
              <div>
                <h3 className="font-bold text-xl text-white mb-2">Удивительный факт</h3>
                <p className="text-white/90">
                  Некоторые &quot;американизмы&quot; на самом деле старше британских аналогов!
                  Слово <strong className="text-cyan-300">&quot;fall&quot;</strong> (осень) использовалось в Англии
                  ещё в XVI веке, но позже было заменено на <strong className="text-cyan-300">&quot;autumn&quot;</strong>.
                  Американцы сохранили оригинальное слово! То же с <strong className="text-cyan-300">&quot;gotten&quot;</strong> —
                  это старая британская форма, которую в Англии забыли.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Global English
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const globalFeatures = [
      { feature: "Упрощённая грамматика", example: "Меньше идиом, более прямые конструкции", icon: "📝" },
      { feature: "Нейтральная лексика", example: "Избегание специфичных BrE/AmE слов", icon: "🎯" },
      { feature: "Чёткое произношение", example: "Медленнее, без сильного акцента", icon: "🎤" },
      { feature: "Международные стандарты", example: "Бизнес-термины понятны всем", icon: "💼" },
    ];

    const tips = [
      "Избегайте идиом — они часто непонятны неносителям",
      "Используйте простые предложения и чёткую структуру",
      "Предпочитайте международные слова (email, internet, computer)",
      "Говорите медленнее и артикулируйте чётко",
      "Избегайте культурных отсылок, понятных только носителям",
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🌐</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Global English</h2>
            <p className="text-xl text-white/70">Международный английский для глобальной коммуникации</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 text-center">
              <div className="text-4xl font-black text-cyan-300">1.5B+</div>
              <p className="text-white/70">людей говорят на английском</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 text-center">
              <div className="text-4xl font-black text-cyan-300">80%</div>
              <p className="text-white/70">из них — неносители</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 text-center">
              <div className="text-4xl font-black text-cyan-300">#1</div>
              <p className="text-white/70">язык международного бизнеса</p>
            </div>
          </div>

          {/* What is Global English */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Что такое Global English?</h3>
            <p className="text-white/80 mb-6">
              Global English (также ELF — English as a Lingua Franca) — это упрощённый вариант английского,
              используемый для международной коммуникации между неносителями. Это не &quot;неправильный&quot; английский,
              а практичный инструмент для глобального общения.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {globalFeatures.map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-bold text-white">{item.feature}</h4>
                  </div>
                  <p className="text-white/60 text-sm">{item.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-6 border border-green-400/30">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
              <span>💡</span> Советы для Global English
            </h3>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When to use what */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Когда использовать какой вариант?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-500/20 rounded-2xl p-4 border border-blue-400/30">
                <h4 className="font-bold text-blue-300 mb-2">🇬🇧 British English</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• IELTS экзамен</li>
                  <li>• Работа в UK/Европе</li>
                  <li>• Академическое письмо (UK)</li>
                </ul>
              </div>
              <div className="bg-red-500/20 rounded-2xl p-4 border border-red-400/30">
                <h4 className="font-bold text-red-300 mb-2">🇺🇸 American English</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• TOEFL экзамен</li>
                  <li>• IT и технологии</li>
                  <li>• Работа в США</li>
                </ul>
              </div>
              <div className="bg-green-500/20 rounded-2xl p-4 border border-green-400/30">
                <h4 className="font-bold text-green-300 mb-2">🌐 Global English</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Международные переговоры</li>
                  <li>• Мультикультурные команды</li>
                  <li>• Неносители языка</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Interactive Quiz
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
      {
        id: "q1",
        question: "Как называется 'квартира' в американском английском?",
        options: ["flat", "apartment", "housing", "room"],
        correct: "apartment",
        explanation: "BrE: flat, AmE: apartment"
      },
      {
        id: "q2",
        question: "Что вы получите, если закажете 'chips' в британском ресторане?",
        options: ["Чипсы", "Картофель фри", "Начос", "Попкорн"],
        correct: "Картофель фри",
        explanation: "BrE chips = AmE fries (картофель фри)"
      },
      {
        id: "q3",
        question: "Какой вариант написания является американским?",
        options: ["colour", "color", "coloure", "coulor"],
        correct: "color",
        explanation: "AmE убирает 'u' в словах с -our: color, favor, honor"
      },
      {
        id: "q4",
        question: "Как американцы называют метро?",
        options: ["Underground", "Tube", "Subway", "Metro"],
        correct: "Subway",
        explanation: "BrE: underground/tube, AmE: subway"
      },
      {
        id: "q5",
        question: "'I've just eaten' — это более характерно для:",
        options: ["American English", "British English", "Global English", "Австралийского английского"],
        correct: "British English",
        explanation: "BrE использует Present Perfect с just/already, AmE предпочитает Past Simple"
      },
      {
        id: "q6",
        question: "Какое слово сохранилось в AmE из старого английского, но исчезло в BrE?",
        options: ["autumn", "fall", "spring", "winter"],
        correct: "fall",
        explanation: "'Fall' (осень) — старое английское слово, которое AmE сохранил"
      },
      {
        id: "q7",
        question: "Как пишется 'центр' в британском английском?",
        options: ["center", "centre", "centr", "sentre"],
        correct: "centre",
        explanation: "BrE: centre, AmE: center"
      },
      {
        id: "q8",
        question: "Что такое 'bonnet' на автомобиле в британском английском?",
        options: ["Багажник", "Капот", "Крыша", "Дверь"],
        correct: "Капот",
        explanation: "BrE: bonnet = AmE: hood (капот)"
      },
      {
        id: "q9",
        question: "Кто реформировал американскую орфографию в 1828 году?",
        options: ["Бенджамин Франклин", "Ной Вебстер", "Томас Джефферсон", "Джордж Вашингтон"],
        correct: "Ной Вебстер",
        explanation: "Ной Вебстер опубликовал американский словарь с упрощённой орфографией"
      },
      {
        id: "q10",
        question: "Global English рекомендует:",
        options: ["Использовать много идиом", "Говорить быстро", "Избегать сложных конструкций", "Всегда использовать BrE"],
        correct: "Избегать сложных конструкций",
        explanation: "Global English — это упрощённый международный вариант для неносителей"
      },
    ];

    const handleAnswer = (questionId: string, answer: string) => {
      setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };

    const checkAnswers = () => {
      let correct = 0;
      questions.forEach((q) => {
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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-4xl font-black mb-2 text-white">Interactive Quiz</h2>
            <p className="text-xl text-white/70">Проверь свои знания!</p>
          </div>

          {!showResults ? (
            <>
              <div className="space-y-6">
                {questions.map((q, index) => (
                  <div
                    key={q.id}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {index + 1}
                      </span>
                      <p className="text-white text-lg flex-1">{q.question}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 ml-14">
                      {q.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(q.id, option)}
                          className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                            answers[q.id] === option
                              ? "bg-purple-500/40 border-purple-400 text-white"
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
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/30"
                >
                  Проверить ответы
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              <div className={`backdrop-blur-xl rounded-3xl p-8 border-2 ${
                score >= 8 ? "bg-green-500/20 border-green-400/30" :
                score >= 5 ? "bg-yellow-500/20 border-yellow-400/30" :
                "bg-red-500/20 border-red-400/30"
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {score >= 8 ? "🎉" : score >= 5 ? "👍" : "📚"}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">
                    Результат: {score} из {questions.length}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {score >= 8 ? "Отлично! Вы прекрасно разбираетесь в вариантах английского!" :
                     score >= 5 ? "Хорошо! Есть над чем поработать, но базу вы знаете." :
                     "Стоит повторить материал. Различия важны для правильного общения!"}
                  </p>
                </div>
              </div>

              {/* Detailed results */}
              <div className="space-y-4">
                {questions.map((q, index) => {
                  const isCorrect = answers[q.id] === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`backdrop-blur-xl rounded-2xl p-5 border ${
                        isCorrect ? "bg-green-500/10 border-green-400/30" : "bg-red-500/10 border-red-400/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{isCorrect ? "✅" : "❌"}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium mb-2">{index + 1}. {q.question}</p>
                          <p className="text-sm">
                            <span className="text-white/60">Ваш ответ: </span>
                            <span className={isCorrect ? "text-green-300" : "text-red-300"}>
                              {answers[q.id] || "не отвечено"}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm">
                              <span className="text-white/60">Правильный ответ: </span>
                              <span className="text-green-300">{q.correct}</span>
                            </p>
                          )}
                          <p className="text-cyan-300/80 text-sm mt-2 bg-white/5 rounded-lg p-2">
                            💡 {q.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30"
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
                      Теперь вы знаете ключевые различия между British, American и Global English.
                      Помните: нет &quot;правильного&quot; или &quot;неправильного&quot; варианта — главное быть последовательным
                      и выбирать подходящий вариант для вашей аудитории!
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
