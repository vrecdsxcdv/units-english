"use client";

import { Section } from "@/components/ui/Section";

type Props = { step: number };

export default function EuphemismsDysphemisms({ step }: Props) {
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

/* ========== STEP 1: Introduction ========== */
function Step1() {
  return (
    <>
      <Section title="💀➡️😇 Euphemisms & Dysphemisms">
        <div className="bg-gradient-to-r from-fuchsia-50 via-pink-50 to-rose-50 rounded-lg p-8 mb-6 border-2 border-fuchsia-400">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🎭</div>
            <h2 className="text-3xl font-bold text-fuchsia-900 mb-3">
              Euphemisms & Dysphemisms
            </h2>
            <p className="text-xl text-fuchsia-700">
              Искусство говорить мягко и грубо
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-fuchsia-900 mb-3">
              🎯 Что это такое?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 border-2 border-green-400">
                <div className="text-4xl text-center mb-2">😇</div>
                <h4 className="font-bold text-green-900 text-center mb-2">
                  EUPHEMISM
                </h4>
                <p className="text-sm text-zinc-700 text-center mb-3">
                  Мягкая, вежливая замена "неприятного" слова
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-center">
                    <span className="line-through text-red-500">died</span> →{" "}
                    <strong className="text-green-600">passed away</strong>
                  </p>
                  <p className="text-xs text-center text-zinc-500 mt-1">
                    умер → ушёл из жизни
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-lg p-4 border-2 border-red-400">
                <div className="text-4xl text-center mb-2">😈</div>
                <h4 className="font-bold text-red-900 text-center mb-2">
                  DYSPHEMISM
                </h4>
                <p className="text-sm text-zinc-700 text-center mb-3">
                  Грубая, прямая замена "нейтрального" слова
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-center">
                    <span className="line-through text-gray-500">died</span> →{" "}
                    <strong className="text-red-600">kicked the bucket</strong>
                  </p>
                  <p className="text-xs text-center text-zinc-500 mt-1">
                    умер → сыграл в ящик
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-fuchsia-100 rounded-lg p-5 border-2 border-fuchsia-400">
            <p className="font-bold text-fuchsia-900 mb-2 text-lg text-center">
              💡 Зачем это знать?
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🗣️</div>
                <p className="text-zinc-700">
                  Звучать <strong>вежливо</strong> в формальных ситуациях
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🎬</div>
                <p className="text-zinc-700">
                  Понимать <strong>сленг</strong> в фильмах и сериалах
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">📰</div>
                <p className="text-zinc-700">
                  Читать между строк в <strong>новостях</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="📊 Шкала от мягкого к грубому">
        <div className="bg-gradient-to-r from-green-100 via-yellow-100 to-red-100 rounded-lg p-6 border-2 border-yellow-400">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-zinc-900">
              😇 ← НЕЙТРАЛЬНО → 😈
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="bg-green-200 px-3 py-2 rounded-full text-sm font-medium text-green-900">
                passed away
              </span>
              <span className="text-xl">←</span>
              <span className="bg-yellow-200 px-3 py-2 rounded-full text-sm font-medium text-yellow-900">
                died
              </span>
              <span className="text-xl">→</span>
              <span className="bg-red-200 px-3 py-2 rounded-full text-sm font-medium text-red-900">
                kicked the bucket
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="bg-green-200 px-3 py-2 rounded-full text-sm font-medium text-green-900">
                intoxicated
              </span>
              <span className="text-xl">←</span>
              <span className="bg-yellow-200 px-3 py-2 rounded-full text-sm font-medium text-yellow-900">
                drunk
              </span>
              <span className="text-xl">→</span>
              <span className="bg-red-200 px-3 py-2 rounded-full text-sm font-medium text-red-900">
                wasted
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="bg-green-200 px-3 py-2 rounded-full text-sm font-medium text-green-900">
                economically disadvantaged
              </span>
              <span className="text-xl">←</span>
              <span className="bg-yellow-200 px-3 py-2 rounded-full text-sm font-medium text-yellow-900">
                poor
              </span>
              <span className="text-xl">→</span>
              <span className="bg-red-200 px-3 py-2 rounded-full text-sm font-medium text-red-900">
                broke AF
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========== STEP 2: Death & Dying ========== */
function Step2() {
  return (
    <>
      <Section title="💀 Death & Dying — Смерть и умирание">
        <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 rounded-lg p-8 mb-6 border-2 border-purple-400">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">⚰️</div>
            <h2 className="text-2xl font-bold text-purple-900 mb-2">
              Самая табуированная тема
            </h2>
            <p className="text-purple-700">
              Именно здесь эвфемизмов больше всего!
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400 mb-4">
            <h3 className="font-bold text-green-900 mb-3 text-lg">
              😇 EUPHEMISMS (вежливо, формально):
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  en: "passed away",
                  ru: "ушёл из жизни",
                  note: "самый частый",
                },
                { en: "departed", ru: "покинул нас", note: "формальный" },
                {
                  en: "no longer with us",
                  ru: "больше не с нами",
                  note: "мягкий",
                },
                {
                  en: "lost (someone)",
                  ru: "потерять кого-то",
                  note: "'We lost him'",
                },
                { en: "at peace", ru: "обрёл покой", note: "религиозный" },
                {
                  en: "gone to a better place",
                  ru: "ушёл в лучший мир",
                  note: "утешительный",
                },
                {
                  en: "resting in peace (RIP)",
                  ru: "покоится с миром",
                  note: "на надгробиях",
                },
                {
                  en: "met their maker",
                  ru: "предстал перед создателем",
                  note: "религиозный",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3">
                  <p className="font-bold text-green-800">{item.en}</p>
                  <p className="text-sm text-zinc-600">{item.ru}</p>
                  <p className="text-xs text-green-600 italic">({item.note})</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-lg p-5 border-2 border-red-400">
            <h3 className="font-bold text-red-900 mb-3 text-lg">
              😈 DYSPHEMISMS (грубо, в разговоре):
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  en: "kicked the bucket",
                  ru: "сыграл в ящик",
                  note: "классика",
                },
                {
                  en: "bit the dust",
                  ru: "отбросил коньки",
                  note: "из песни Queen",
                },
                { en: "croaked", ru: "окочурился", note: "как лягушка" },
                {
                  en: "bought the farm",
                  ru: "откинулся",
                  note: "американский сленг",
                },
                {
                  en: "pushing up daisies",
                  ru: "кормит червей",
                  note: "на кладбище",
                },
                {
                  en: "six feet under",
                  ru: "под землёй",
                  note: "глубина могилы",
                },
                { en: "snuffed it", ru: "загнулся", note: "British slang" },
                { en: "checked out", ru: "съехал", note: "как из отеля" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3">
                  <p className="font-bold text-red-800">{item.en}</p>
                  <p className="text-sm text-zinc-600">{item.ru}</p>
                  <p className="text-xs text-red-600 italic">({item.note})</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="💬 Примеры в контексте">
        <div className="space-y-3">
          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <p className="text-sm text-zinc-700 mb-1">
              <strong className="text-green-800">
                Формальное соболезнование:
              </strong>
            </p>
            <p className="italic">
              "I'm so sorry to hear that your grandmother{" "}
              <strong className="text-green-700">passed away</strong>."
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
            <p className="text-sm text-zinc-700 mb-1">
              <strong className="text-yellow-800">Нейтрально:</strong>
            </p>
            <p className="italic">
              "Her grandfather <strong className="text-yellow-700">died</strong>{" "}
              last year."
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-sm text-zinc-700 mb-1">
              <strong className="text-red-800">
                Грубо/сленг (между друзьями):
              </strong>
            </p>
            <p className="italic">
              "Did you hear? Old man Jenkins finally{" "}
              <strong className="text-red-700">kicked the bucket</strong>."
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========== STEP 3: Feelings & Relationships ========== */
function Step3() {
  return (
    <>
      <Section title="💕 Feelings & Relationships — Чувства и отношения">
        <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-lg p-8 mb-6 border-2 border-pink-400">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold text-pink-900 mb-2">
              Как говорить о чувствах мягко
            </h2>
            <p className="text-pink-700">
              Эвфемизмы для деликатных тем в отношениях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
              <h3 className="font-bold text-green-900 mb-3 text-lg text-center">
                😇 EUPHEMISMS
              </h3>
              <div className="space-y-2">
                {[
                  {
                    en: "seeing someone",
                    alt: "dating",
                    ru: "встречаться с кем-то",
                  },
                  {
                    en: "it's complicated",
                    alt: "relationship problems",
                    ru: "всё сложно",
                  },
                  {
                    en: "taking a break",
                    alt: "breaking up temporarily",
                    ru: "взять паузу",
                  },
                  {
                    en: "growing apart",
                    alt: "losing interest",
                    ru: "отдаляться друг от друга",
                  },
                  {
                    en: "not on the same page",
                    alt: "disagree",
                    ru: "не сходимся во взглядах",
                  },
                  {
                    en: "had a falling out",
                    alt: "had a fight",
                    ru: "поссорились",
                  },
                  {
                    en: "parted ways",
                    alt: "broke up",
                    ru: "разошлись",
                  },
                  {
                    en: "moved on",
                    alt: "found someone new",
                    ru: "пошёл дальше",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-2 text-sm">
                    <p className="font-bold text-green-800">{item.en}</p>
                    <p className="text-xs text-zinc-500">
                      вместо: {item.alt} | {item.ru}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
              <h3 className="font-bold text-orange-900 mb-3 text-lg text-center">
                💬 Casual / Direct
              </h3>
              <div className="space-y-2">
                {[
                  {
                    en: "ghosted",
                    ru: "исчез без объяснений",
                    note: "перестал отвечать",
                  },
                  {
                    en: "got dumped",
                    ru: "бросили",
                    note: "прямо о расставании",
                  },
                  {
                    en: "on the rocks",
                    ru: "на грани разрыва",
                    note: "об отношениях",
                  },
                  {
                    en: "friend-zoned",
                    ru: "во френдзоне",
                    note: "отвергли романтически",
                  },
                  {
                    en: "rebound",
                    ru: "отношения на отскоке",
                    note: "после расставания",
                  },
                  {
                    en: "playing hard to get",
                    ru: "набивает себе цену",
                    note: "делает вид что не заинтересован",
                  },
                  {
                    en: "leading someone on",
                    ru: "водить за нос",
                    note: "давать ложную надежду",
                  },
                  {
                    en: "stringing along",
                    ru: "тянуть резину",
                    note: "не давать определённости",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-2 text-sm">
                    <p className="font-bold text-orange-800">{item.en}</p>
                    <p className="text-xs text-zinc-500">
                      {item.ru} ({item.note})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="💬 Как сказать о расставании">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-6 border-2 border-blue-400">
          <h3 className="font-bold text-blue-900 mb-4 text-center text-lg">
            Разные уровни мягкости:
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎩</span>
                <span className="font-bold text-blue-900">
                  Очень мягко (формально):
                </span>
              </div>
              <p className="text-sm italic ml-8">
                "We've decided to <strong>go our separate ways</strong>."
              </p>
              <p className="text-sm italic ml-8">
                "We <strong>mutually agreed to part</strong>."
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">👔</span>
                <span className="font-bold text-green-900">
                  Нейтрально (среди друзей):
                </span>
              </div>
              <p className="text-sm italic ml-8">
                "We <strong>broke up</strong> last month."
              </p>
              <p className="text-sm italic ml-8">
                "It <strong>didn't work out</strong>."
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🤙</span>
                <span className="font-bold text-orange-900">
                  Прямо (близкие друзья):
                </span>
              </div>
              <p className="text-sm italic ml-8">
                "She <strong>dumped</strong> me."
              </p>
              <p className="text-sm italic ml-8">
                "He <strong>ghosted</strong> me after two dates."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========== STEP 4: Work & Money ========== */
function Step4() {
  return (
    <>
      <Section title="💼 Work & Money — Работа и деньги">
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-lg p-8 mb-6 border-2 border-amber-400">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">💰</div>
            <h2 className="text-2xl font-bold text-amber-900 mb-2">
              Корпоративный язык
            </h2>
            <p className="text-amber-700">
              Как боссы говорят "ты уволен" без слова "уволен"
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400 mb-4">
            <h3 className="font-bold text-green-900 mb-3 text-lg">
              😇 Corporate Euphemisms (корпоративный новояз):
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { en: "let go", real: "fired", ru: "отпустить" },
                {
                  en: "downsizing",
                  real: "mass layoffs",
                  ru: "оптимизация штата",
                },
                {
                  en: "restructuring",
                  real: "people losing jobs",
                  ru: "реструктуризация",
                },
                { en: "made redundant", real: "fired", ru: "сокращён" },
                {
                  en: "career transition",
                  real: "unemployment",
                  ru: "карьерный переход",
                },
                {
                  en: "pursuing other opportunities",
                  real: "was fired",
                  ru: "ищет новые возможности",
                },
                {
                  en: "between jobs",
                  real: "unemployed",
                  ru: "между работами",
                },
                {
                  en: "negative growth",
                  real: "losses",
                  ru: "отрицательный рост",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3">
                  <p className="font-bold text-green-800">{item.en}</p>
                  <p className="text-xs text-zinc-600">
                    реально: <span className="text-red-600">{item.real}</span> |{" "}
                    {item.ru}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-lg p-5 border-2 border-red-400">
            <h3 className="font-bold text-red-900 mb-3 text-lg">
              😈 Slang Dysphemisms (как говорят реально):
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { en: "got canned", ru: "вылетел", note: "уволен" },
                { en: "got the axe", ru: "получил по шапке", note: "уволен" },
                { en: "got the boot", ru: "дали пинка", note: "уволен" },
                {
                  en: "pink-slipped",
                  ru: "получил розовый листок",
                  note: "уволен",
                },
                { en: "broke / busted", ru: "на мели", note: "без денег" },
                {
                  en: "dead-end job",
                  ru: "работа без перспектив",
                  note: "тупиковая работа",
                },
                {
                  en: "slave away",
                  ru: "пахать как раб",
                  note: "много работать",
                },
                {
                  en: "golden parachute",
                  ru: "золотой парашют",
                  note: "огромная компенсация",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3">
                  <p className="font-bold text-red-800">{item.en}</p>
                  <p className="text-xs text-zinc-600">
                    {item.ru} ({item.note})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="📢 Реальные примеры из корпораций">
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-4 border-2 border-blue-400">
            <p className="text-sm text-zinc-700 mb-2">
              <strong className="text-blue-900">
                Что написали в пресс-релизе:
              </strong>
            </p>
            <p className="italic text-sm mb-2">
              "We are <strong>right-sizing our workforce</strong> to better
              align with market conditions."
            </p>
            <p className="text-sm text-red-700">
              <strong>Что это значит:</strong> 5000 человек уволены 💀
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-4 border-2 border-purple-400">
            <p className="text-sm text-zinc-700 mb-2">
              <strong className="text-purple-900">На LinkedIn:</strong>
            </p>
            <p className="italic text-sm mb-2">
              "Excited to announce I'm{" "}
              <strong>exploring new opportunities</strong>!"
            </p>
            <p className="text-sm text-red-700">
              <strong>Что это значит:</strong> Меня уволили и я ищу работу 😢
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========== STEP 5: Age & Appearance ========== */
function Step5() {
  return (
    <>
      <Section title="👵 Age & Appearance — Возраст и внешность">
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 rounded-lg p-8 mb-6 border-2 border-pink-400">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🪞</div>
            <h2 className="text-2xl font-bold text-pink-900 mb-2">
              О чём не говорят прямо
            </h2>
            <p className="text-pink-700">
              Возраст, вес, внешность — минное поле!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
              <h3 className="font-bold text-green-900 mb-3 text-lg text-center">
                😇 Вежливо / PC
              </h3>
              <div className="space-y-2">
                {[
                  {
                    en: "senior citizen",
                    alt: "old person",
                    ru: "пожилой гражданин",
                  },
                  { en: "elderly", alt: "old", ru: "пожилой" },
                  { en: "mature", alt: "old", ru: "зрелый" },
                  { en: "getting on in years", alt: "old", ru: "в годах" },
                  {
                    en: "full-figured / curvy",
                    alt: "fat",
                    ru: "пышная фигура",
                  },
                  {
                    en: "vertically challenged",
                    alt: "short",
                    ru: "невысокий",
                  },
                  {
                    en: "follicly challenged",
                    alt: "bald",
                    ru: "с проблемами волос",
                  },
                  {
                    en: "cosmetically enhanced",
                    alt: "had plastic surgery",
                    ru: "с косметическими улучшениями",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-2 text-sm">
                    <p className="font-bold text-green-800">{item.en}</p>
                    <p className="text-xs text-zinc-500">
                      вместо: {item.alt} | {item.ru}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-lg p-5 border-2 border-red-400">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                😈 Грубо / Сленг
              </h3>
              <div className="space-y-2">
                {[
                  {
                    en: "old fart / geezer",
                    ru: "старпёр",
                    note: "про старого",
                  },
                  {
                    en: "over the hill",
                    ru: "уже не торт",
                    note: "слишком стар",
                  },
                  {
                    en: "fossil / dinosaur",
                    ru: "динозавр",
                    note: "очень старый",
                  },
                  { en: "whale / hippo", ru: "бегемот", note: "про толстого" },
                  { en: "bean pole / stick", ru: "спичка", note: "про худого" },
                  {
                    en: "baldie / chrome dome",
                    ru: "лысик",
                    note: "про лысого",
                  },
                  { en: "plastic", ru: "пластиковый", note: "много операций" },
                  {
                    en: "cradle robber",
                    ru: "малолеток",
                    note: "встречается с молодым",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-2 text-sm">
                    <p className="font-bold text-red-800">{item.en}</p>
                    <p className="text-xs text-zinc-500">
                      {item.ru} ({item.note})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-amber-100 rounded-lg p-4 border-2 border-amber-400">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⚠️</span>
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Осторожно!</h4>
                <p className="text-sm text-zinc-700">
                  Многие эвфемизмы для веса и возраста сами стали обидными.
                  "Plus-sized" когда-то было вежливым, теперь некоторые считают
                  это оскорблением. Лучше вообще не комментировать чью-то
                  внешность! 🤐
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========== STEP 6: Politics & War ========== */
function Step6() {
  return (
    <>
      <Section title="🎖️ Politics & War — Политика и война">
        <div className="bg-gradient-to-br from-slate-50 via-zinc-50 to-gray-100 rounded-lg p-8 mb-6 border-2 border-slate-400">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🏛️</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Язык власти
            </h2>
            <p className="text-slate-700">
              Как политики скрывают правду за красивыми словами
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400 mb-4">
            <h3 className="font-bold text-green-900 mb-3 text-lg">
              🏛️ Political Euphemisms:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  en: "collateral damage",
                  real: "civilian deaths",
                  ru: "сопутствующий ущерб",
                },
                {
                  en: "enhanced interrogation",
                  real: "torture",
                  ru: "усиленный допрос",
                },
                {
                  en: "friendly fire",
                  real: "killed by own troops",
                  ru: "дружественный огонь",
                },
                { en: "neutralize", real: "kill", ru: "нейтрализовать" },
                {
                  en: "ethnic cleansing",
                  real: "genocide",
                  ru: "этническая чистка",
                },
                {
                  en: "regime change",
                  real: "overthrowing a government",
                  ru: "смена режима",
                },
                {
                  en: "peacekeeping operation",
                  real: "military invasion",
                  ru: "миротворческая операция",
                },
                {
                  en: "surgical strike",
                  real: "bombing",
                  ru: "хирургический удар",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3">
                  <p className="font-bold text-green-800">{item.en}</p>
                  <p className="text-xs text-zinc-600">
                    реально: <span className="text-red-600">{item.real}</span>
                  </p>
                  <p className="text-xs text-zinc-500 italic">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-5 border-2 border-blue-400">
            <h3 className="font-bold text-blue-900 mb-3 text-lg">
              📊 Economic & Social Euphemisms:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  en: "developing country",
                  real: "poor country",
                  ru: "развивающаяся страна",
                },
                {
                  en: "underprivileged",
                  real: "poor",
                  ru: "недостаточно привилегированный",
                },
                {
                  en: "economically inactive",
                  real: "unemployed",
                  ru: "экономически неактивный",
                },
                {
                  en: "revenue enhancement",
                  real: "tax increase",
                  ru: "увеличение доходов",
                },
                {
                  en: "correctional facility",
                  real: "prison",
                  ru: "исправительное учреждение",
                },
                {
                  en: "pre-owned",
                  real: "used / second-hand",
                  ru: "б/у (pre-owned)",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3">
                  <p className="font-bold text-blue-800">{item.en}</p>
                  <p className="text-xs text-zinc-600">
                    реально: <span className="text-red-600">{item.real}</span> |{" "}
                    {item.ru}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="💡 Почему это важно понимать">
        <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-lg p-6 border-2 border-red-400">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🧠</div>
            <div>
              <h4 className="font-bold text-red-900 text-lg mb-2">
                George Orwell о языке политики:
              </h4>
              <blockquote className="text-zinc-700 italic border-l-4 border-red-400 pl-4">
                "Political language is designed to make lies sound truthful and
                murder respectable, and to give an appearance of solidity to
                pure wind."
              </blockquote>
              <p className="text-sm text-zinc-600 mt-2">
                — "Politics and the English Language" (1946)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========== STEP 7: Modern Slang & Internet ========== */
function Step7() {
  return (
    <>
      <Section title="📱 Modern Slang & Internet — Современный сленг">
        <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-lg p-8 mb-6 border-2 border-violet-400">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-violet-900 mb-2">
              Gen Z & Internet Culture
            </h2>
            <p className="text-violet-700">
              То, что вы услышите в TikTok и Discord
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                💅 Soft Euphemisms
              </h3>
              <div className="space-y-2">
                {[
                  {
                    en: "unalive",
                    real: "kill/die",
                    note: "для обхода модерации",
                  },
                  {
                    en: "grape",
                    real: "assault",
                    note: "серьёзные темы",
                  },
                  {
                    en: "mascara",
                    real: "violence",
                    note: "обход фильтров TikTok",
                  },
                  {
                    en: "blink twice",
                    real: "in danger",
                    note: "мем о помощи",
                  },
                  {
                    en: "accountant",
                    real: "boring job",
                    note: "ироничный мем",
                  },
                  {
                    en: "main character",
                    real: "attention seeker",
                    note: "про эгоцентричность",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-2 text-sm">
                    <p className="font-bold text-cyan-800">{item.en}</p>
                    <p className="text-xs text-zinc-500">
                      = {item.real} ({item.note})
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-lg p-5 border-2 border-red-400">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔥 Internet Dysphemisms
              </h3>
              <div className="space-y-2">
                {[
                  {
                    en: "touch grass",
                    ru: "выйди на улицу",
                    note: "ты слишком в интернете",
                  },
                  {
                    en: "ratio",
                    ru: "рацио",
                    note: "больше лайков чем у оригинала",
                  },
                  { en: "L / take the L", ru: "лузер", note: "ты проиграл" },
                  { en: "cope", ru: "справляйся", note: "твоя проблема" },
                  { en: "seethe", ru: "злись", note: "ты бесишься" },
                  {
                    en: "skill issue",
                    ru: "проблема с навыками",
                    note: "ты плохо играешь",
                  },
                  { en: "clapped", ru: "уничтожен", note: "разгромлен" },
                  { en: "NPC", ru: "НПС", note: "человек без мнения" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-2 text-sm">
                    <p className="font-bold text-red-800">{item.en}</p>
                    <p className="text-xs text-zinc-500">
                      {item.ru} ({item.note})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-violet-100 rounded-lg p-4 border-2 border-violet-400">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="font-bold text-violet-900 mb-1">
                  Почему это существует?
                </h4>
                <p className="text-sm text-zinc-700">
                  Социальные сети банят "чувствительные" слова. Поэтому
                  пользователи придумывают замены: "unalive" вместо "kill",
                  "mascara" вместо "violence". Алгоритмы не понимают, люди —
                  понимают!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="💬 Примеры в контексте">
        <div className="space-y-3">
          <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
            <p className="text-sm text-zinc-700 mb-1">
              <strong className="text-cyan-800">TikTok комментарий:</strong>
            </p>
            <p className="italic">
              "If you see mascara on TikTok, they're not talking about makeup
              💀"
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              = Если видишь "mascara" на TikTok, речь не о туши для ресниц
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-sm text-zinc-700 mb-1">
              <strong className="text-red-800">Twitter/X:</strong>
            </p>
            <p className="italic">
              "Bro really said that and expects us not to <strong>ratio</strong>{" "}
              him 💀"
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              = Он реально это сказал и думает мы не наберём больше лайков?
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <p className="text-sm text-zinc-700 mb-1">
              <strong className="text-purple-800">Gaming Discord:</strong>
            </p>
            <p className="italic">
              "You died again? <strong>Skill issue</strong> tbh 🤷"
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              = Опять умер? Руки кривые, честно говоря
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
