"use client";
import * as React from "react";
import StepSquares from "./StepSquares";
import ArticleExercise from "@/components/lesson/ArticleExercise";
import CollocationsBoard, {
  CollocationGroup,
} from "@/components/lesson/CollocationsBoard";
import DragMatchArticles from "@/components/lesson/DragMatchArticles";
import ArticlePassageExercise from "@/components/lesson/ArticlePassageExercise";
import VocabBox, { VocabItem } from "./VocabBox";
import {
  GRAND_CANYON_PASSAGE,
  GRAND_CANYON_ANSWERS,
  GRAND_CANYON_HINTS,
  GRAND_CANYON_ACCEPT_ALTERNATIVES,
} from "@/lib/placement/articles/grandCanyonData";

type Step =
  | { kind: "theory"; html: string; vocab?: VocabItem[] }
  | {
      kind: "exercise-fill";
      items: { text: string; answers: string[]; explanation: string }[];
      vocab?: VocabItem[];
    }
  | {
      kind: "theory-match";
      html: string;
      match: { id: string; label: string; correct: "a" | "an" | "the" }[];
      vocab?: VocabItem[];
    }
  | { kind: "article-passage"; title?: string; vocab?: VocabItem[] }
  | { kind: "collocations"; groups: CollocationGroup[]; vocab?: VocabItem[] }
  | { kind: "blank"; vocab?: VocabItem[] };

const STORAGE_KEY = "units:a1:articles";

export default function StepController({
  onFinish,
}: { onFinish?: () => void } = {}) {
  // Добавляем dev-логирование для отладки
  React.useEffect(() => {
    const handler = (event: ErrorEvent) => {
      console.error("[window.onerror]", event?.error ?? event);
    };
    window.addEventListener("error", handler);
    return () => window.removeEventListener("error", handler);
  }, []);

  const collocationGroups: CollocationGroup[] = [
    {
      title: "Время суток",
      subtitle:
        "Артикль the с morning/afternoon/evening; с night — без артикля (at night)",
      items: [
        "in the morning",
        "in the afternoon",
        "in the evening",
        "at night",
      ],
      examples: [
        { en: "I study in the morning.", ru: "Я занимаюсь утром." },
        { en: "We read in the evening.", ru: "Мы читаем вечером." },
        { en: "I sleep at night.", ru: "Я сплю по ночам." },
      ],
    },
    {
      title: "Идти/быть: школа, работа, кровать — без артикля",
      subtitle: "to go to + school / work / bed",
      items: ["to go to school", "to go to work", "to go to bed"],
    },
    {
      title: "Дом — без артикля после go/come/leave",
      items: [
        "to go home",
        "to come home",
        "to leave home for work (for school)",
      ],
    },
    {
      title: "Фиксированное время",
      items: ["at half past five", "at a quarter past five"],
    },
    {
      title: "Месяцы и дни недели — без артикля; с порядковыми — the",
      items: [
        "in September",
        "on Sunday",
        "the second floor",
        "the tenth of May",
      ],
      note: [
        "Перед месяцами и днями недели артикль не употребляется.",
        "Перед порядковыми числительными ставим the: the first, the second…",
      ],
    },
    {
      title: "После/из работы/школы — без артикля",
      items: ["after work", "from work", "after school", "from school"],
    },
  ];

  const steps: Step[] = [
    {
      kind: "theory",
      html: `
<h2 class="text-3xl font-bold mt-6 mb-8">Что такое артикль в английском языке и зачем он нужен?</h2>

<p class="text-lg leading-relaxed mb-8">
Артикль — это особое служебное слово, которое ставится перед существительным и показывает,
о каком именно предмете или понятии идёт речь. В английском языке всего три типа артиклей,
каждый из которых выполняет свою функцию.
</p>

<h3 class="text-2xl font-semibold mt-10 mb-4">Неопределённый артикль (a/an)</h3>
<p class="mb-6">
Используется, когда речь идёт о чём-то неопределённом, общем или впервые упоминаемом.<br/>
<em>I saw a bracelet in the store.</em> — Я увидела какой-то браслет в магазине.
</p>

<h3 class="text-2xl font-semibold mt-10 mb-4">Определённый артикль (the)</h3>
<p class="mb-6">
Указывает на конкретный объект, который уже известен или был упомянут ранее.<br/>
<em>I saw the bracelet again and bought it.</em> — Я снова увидела тот браслет и купила его.
</p>

<h3 class="text-2xl font-semibold mt-10 mb-4">Нулевой артикль</h3>
<p class="mb-6">
Используется, когда говорят о чём-то в общем смысле, абстрактно или когда контекст
подразумевает, что артикль не нужен.<br/>
<em>Bracelets are great accessories for women.</em> — Браслеты — отличные аксессуары для женщин.
</p>

<p class="text-lg leading-relaxed mt-8">
Хотя в русском языке артиклей нет, в английском без них никак не обойтись. Они помогают уточнить
смысл высказывания, делают речь грамматически правильной и могут менять значения слов.
</p>

<!-- ——— NEW plain-text explanation from the book ——— -->
<hr class="my-8" />
<p class="mb-3">
  Неопределённый артикль <strong>a (an)</strong> может употребляться только с
  <em>исчисляемыми</em> существительными, стоящими в <em>единственном</em> числе.
  Перед <em>неисчисляемыми</em> существительными или существительными во
  <em>множественном</em> числе неопределённый артикль опускается.
  </p>
<p class="mb-3">
  Определённый артикль <strong>the</strong> употребляется как с исчисляемыми, так и
  с неисчисляемыми существительными — как в единственном, так и во множественном числе.
  </p>

<!-- ——— Examples box (border only, no grey background) ——— -->
<div class="mt-4 rounded-lg border border-zinc-200">
  <div class="p-3 sm:p-4">
    <p class="mb-1"><strong>E.g.</strong> <strong>This is a book.</strong> <em>The book</em> is interesting.</p>
    <p class="text-zinc-500 text-sm">исчисляемое в единственном числе</p>
  </div>
  <div class="border-t border-zinc-200 p-3 sm:p-4">
    <p class="mb-1"><strong>This is ✓ meat.</strong> <em>The meat</em> is fresh.</p>
    <p class="text-zinc-500 text-sm">неисчисляемое</p>
  </div>
  <div class="border-t border-zinc-200 p-3 sm:p-4">
    <p class="mb-1"><strong>These are ✓ books.</strong> <em>The books</em> are good.</p>
    <p class="text-zinc-500 text-sm">множественное число</p>
  </div>
</div>
      `,
      vocab: [
        { word: "girl", ipa: "/ɡɜːl/", ru: "девочка" },
        { word: "boy", ipa: "/bɔɪ/", ru: "мальчик" },
        { word: "bag", ipa: "/bæɡ/", ru: "сумка" },
        { word: "store", ipa: "/stɔː/", ru: "магазин" },
        { word: "bracelet", ipa: "/ˈbreɪslət/", ru: "браслет" },
      ],
    },
    {
      kind: "theory",
      html: `
<h2 class="text-3xl font-bold mt-6 mb-8">Общие правила употребления артиклей</h2>

<p class="text-lg leading-relaxed mb-8">
Основная функция артикля — указать на <strong>определённость/неопределённость</strong> существительного.
Поэтому в английском языке используются:
<strong>a/an</strong> (неопределённый), <strong>the</strong> (определённый) и <strong>нулевой артикль</strong>.
</p>

<h3 class="text-2xl font-semibold mt-10 mb-4">Исчисляемость и выбор артикля</h3>
<ul class="mb-6">
  <li><strong>a/an</strong> — с <u>исчисляемыми</u> существительными в <u>единственном</u> числе.<br/>
    <em>I heard a story.</em> — Я услышал историю.</li>
  <li><strong>the</strong> — с исчисляемыми (ед./мн. ч.) и с неисчисляемыми, когда речь о конкретном/известном.<br/>
    <em>I liked the films.</em> — Мне понравились фильмы.</li>
  <li><strong>нулевой</strong> — с <u>неисчисляемыми</u> или с исчисляемыми во <u>множественном</u> числе (в общем смысле).<br/>
    <em>It is good advice.</em> — Это хороший совет.</li>
</ul>

<h3 class="text-2xl font-semibold mt-10 mb-4">Артикль и прилагательное</h3>
<p class="mb-6">
Артикль ставится <strong>перед прилагательным</strong>:
</p>
<ul class="mb-6">
  <li><em>It is a hot day.</em> — Сегодня жаркий день.</li>
  <li><em>It is the hottest day of this week.</em> — Это самый жаркий день на этой неделе.</li>
</ul>

<h3 class="text-2xl font-semibold mt-10 mb-4">Когда артикль не нужен</h3>
<p class="mb-4">
Не ставим <code>a/an/the</code>, если перед существительным уже стоит:
</p>
<ul class="mb-6">
  <li>притяжательное местоимение: <em>my, his…</em> — <em>This is my house.</em></li>
  <li>указательное местоимение: <em>this, that…</em></li>
  <li>числительное: <em>one, two…</em> — <em>I have one sister.</em></li>
</ul>

<h3 class="text-2xl font-semibold mt-10 mb-4">Три типичные ошибки</h3>
<ol class="mb-2 space-y-3">
  <li><strong>a/an</strong> с исчисляемыми во <u>множественном</u> числе — ошибка:<br/>
    <em>I’d like to buy a books.</em> ✗ → <em>I’d like to buy books.</em> ✓</li>
  <li><strong>a/an</strong> с <u>неисчисляемыми</u> — ошибка:<br/>
    <em>I love a modern furniture.</em> ✗ → <em>I love modern furniture.</em> ✓</li>
  <li>Единственное исчисляемое <u>без</u> артикля — ошибка:<br/>
    <em>You should visit doctor.</em> ✗ → <em>You should visit a doctor.</em> ✓<br/>
    <em>Give this toy to dog.</em> ✗ → <em>Give this toy to the dog.</em> ✓</li>
</ol>
      `,
      vocab: [
        { word: "story", ipa: "/ˈstɔːri/", ru: "история" },
        { word: "film", ipa: "/fɪlm/", ru: "фильм" },
        { word: "advice", ipa: "/ədˈvaɪs/", ru: "совет" },
        { word: "pencil", ipa: "/ˈpensəl/", ru: "карандаш" },
        { word: "book", ipa: "/bʊk/", ru: "книга" },
      ],
    },
    {
      kind: "exercise-fill",
      items: [
        {
          text: "This is ... pen. That is ... pencil.",
          answers: ["a", "a"],
          explanation:
            "Первое упоминание предметов — неопределённый артикль a.",
        },
        {
          text: "This is ... book. It is my ... book.",
          answers: ["a", "—"],
          explanation: "Второе — с притяжательным my, артикль не нужен.",
        },
        {
          text: "Is this your ... pencil? - No, it isn't my ... pencil, it is my sister's ... pencil.",
          answers: ["—", "—", "—"],
          explanation:
            "Перед притяжательными (your/my/sister's) артикль не ставится.",
        },
        {
          text: "I have ... sister. My ... sister is ... engineer. My sister's ... husband is ... doctor. They have got two ... children.",
          answers: ["a", "—", "an", "a", "—"],
          explanation:
            "sister впервые → a; с профессией обычно a/an; children (мн. ч.) → без артикля.",
        },
        {
          text: "This is ... girl. This ... girl is their ... daughter. Their daughter's ... name is Vera.",
          answers: ["a", "—", "—"],
          explanation:
            "Первое упоминание → a; далее конкретная дочь и имя — без артикля.",
        },
        {
          text: "This is ... pineapple. ... pineapple is delicious.",
          answers: ["a", "the"],
          explanation:
            "Сначала неопределённый (a), затем конкретный уже известный объект (the).",
        },
        {
          text: "Elaine, ... apples are good for you!",
          answers: ["—"],
          explanation:
            "Общее утверждение во множественном числе → нулевой артикль.",
        },
        {
          text: "My ... cousin is upset. He's got ... sore throat.",
          answers: ["—", "a"],
          explanation:
            "С притяжательным my — без артикля; устойчивое a sore throat.",
        },
        {
          text: "This is ... cottage cheese. ... cottage cheese is fresh.",
          answers: ["—", "—"],
          explanation: "cottage cheese — неисчисляемое, нулевой артикль.",
        },
        {
          text: "She bought ... meat, ... butter and potatoes yesterday. She also bought ... cake. ... cake was ... delicious. We ate ... cake and drank ... tea.",
          answers: ["—", "—", "a", "the", "—", "—"],
          explanation:
            "meat/butter/potatoes → без артикля; cake впервые a, затем конкретный the.",
        },
        {
          text: "This is my ... table. On ... table I have ... books, two ... pencils, ... pen and ... paper.",
          answers: ["—", "the", "—", "—", "a", "—"],
          explanation:
            "my table — без артикля; the table — конкретный; books/pencils мн. ч., paper неисчисл.",
        },
        {
          text: "This is ... bag. ... bag is brown. It is my sister's ... bag.",
          answers: ["a", "the", "—"],
          explanation:
            "Первое упоминание a; затем конкретный the; с притяжательным — без артикля.",
        },
      ],
      vocab: [
        { word: "sister", ipa: "/ˈsɪstə/", ru: "сестра" },
        { word: "engineer", ipa: "/ˌendʒɪˈnɪə/", ru: "инженер" },
        { word: "doctor", ipa: "/ˈdɒktə/", ru: "доктор" },
        { word: "children", ipa: "/ˈtʃɪldrən/", ru: "дети" },
        { word: "daughter", ipa: "/ˈdɔːtə/", ru: "дочь" },
      ],
    },
    {
      kind: "collocations",
      groups: collocationGroups,
      vocab: [
        { word: "meat", ipa: "/miːt/", ru: "мясо" },
        { word: "butter", ipa: "/ˈbʌtə/", ru: "масло" },
        { word: "cake", ipa: "/keɪk/", ru: "торт" },
        { word: "tea", ipa: "/tiː/", ru: "чай" },
        { word: "table", ipa: "/ˈteɪbəl/", ru: "стол" },
      ],
    },
    {
      kind: "exercise-fill",
      items: [
        {
          text: "We usually meet ... the evening, but Kate studies ... night.",
          answers: ["in", "at"],
          explanation:
            "in the evening / at night — устойчивые сочетания (только at night).",
        },
        {
          text: "I always get up early ... the morning and take a nap ... the afternoon.",
          answers: ["in", "in"],
          explanation: "in the morning / in the afternoon — c артиклем the.",
        },
        {
          text: "The kids go ... school at 8 and their father goes ... work at 9.",
          answers: ["to", "to"],
          explanation:
            "to go to school / to go to work — без артикля перед school/work.",
        },
        {
          text: "It's late. Let's go ... bed. We'll talk ... the morning.",
          answers: ["to", "in"],
          explanation:
            "to go to bed — устойчиво; in the morning — время суток с the.",
        },
        {
          text: "What time is it? — It's ... half past five. See you ... a quarter past five tomorrow.",
          answers: ["at", "at"],
          explanation: "at half past five; at a quarter past five — всегда at.",
        },
        {
          text: "I left ... home ... work at 7:30.",
          answers: ["—", "for"],
          explanation:
            "to leave home for work — home без предлога to/артикля; for work.",
        },
        {
          text: "She came ... home late ... night.",
          answers: ["—", "at"],
          explanation: "to come home — без to/артикля; at night — устойчиво.",
        },
        {
          text: "School begins ... September, and our open day is ... Sunday.",
          answers: ["in", "on"],
          explanation:
            "Месяцы: in September; дни недели: on Sunday; артикли не нужны.",
        },
        {
          text: "Our classroom is on ... second floor.",
          answers: ["the"],
          explanation: "Перед порядковыми числительными — the second floor.",
        },
        {
          text: "Today is ... tenth of May.",
          answers: ["the"],
          explanation: "Даты: the tenth of May — определённый артикль the.",
        },
        {
          text: "We usually relax ... work, but today I'm going straight ... work after lunch.",
          answers: ["after", "to"],
          explanation:
            "after work — устойчиво; go to work — предлог to, без артикля.",
        },
        {
          text: "He's just come ... work; she is returning ... school.",
          answers: ["from", "from"],
          explanation: "from work / from school — устойчивые сочетания.",
        },
        {
          text: "They often study ... the evening and play games ... night.",
          answers: ["in", "at"],
          explanation: "in the evening; at night.",
        },
        {
          text: "Where are the children? — They've already gone ... school.",
          answers: ["to"],
          explanation: "to go to school — без артикля перед school.",
        },
        {
          text: "Let's meet ... the entrance ... a quarter past five.",
          answers: ["at", "at"],
          explanation: "Место/время: at the entrance; at a quarter past five.",
        },
        {
          text: "He left ... home ... school very early today.",
          answers: ["—", "for"],
          explanation:
            "leave home — без артикля/предлога; for school — направление.",
        },
      ],
      vocab: [
        { word: "apple", ipa: "/ˈæpəl/", ru: "яблоко" },
        { word: "cottage cheese", ipa: "/ˈkɒtɪdʒ tʃiːz/", ru: "творог" },
        { word: "pineapple", ipa: "/ˈpaɪnæpəl/", ru: "ананас" },
        { word: "evening", ipa: "/ˈiːvnɪŋ/", ru: "вечер" },
        { word: "morning", ipa: "/ˈmɔːnɪŋ/", ru: "утро" },
      ],
    },
    {
      kind: "theory-match",
      html: `
<h2 class="text-3xl font-bold mt-6 mb-6">Устойчивые словосочетания — запомните</h2>

<div class="grid md:grid-cols-2 gap-4">
  <div class="rounded-lg border border-zinc-200 p-4">
    <h4 class="font-semibold mb-2">Транспорт и поверхности</h4>
    <ul class="list-disc pl-5 space-y-1">
      <li><code>on horseback</code></li>
      <li><code>on board a ship</code></li>
      <li><code>by bus / by train / by car / by tram</code></li>
    </ul>
  </div>
  <div class="rounded-lg border border-zinc-200 p-4">
    <h4 class="font-semibold mb-2">Факты и одинаковость</h4>
    <ul class="list-disc pl-5 space-y-1">
      <li><code>in fact</code></li>
      <li><code>the same</code></li>
    </ul>
  </div>

  <div class="rounded-lg border border-zinc-200 p-4">
    <h4 class="font-semibold mb-2">Восклицательные с <code>what</code></h4>
    <ul class="list-disc pl-5 space-y-1">
      <li><code>What a good boy!</code></li>
      <li><code>What a smart girl!</code></li>
      <li><code>What a day!</code></li>
      <li><em>Также:</em> <code>What an idea!</code> (перед гласным)</li>
    </ul>
  </div>
  <div class="rounded-lg border border-zinc-200 p-4">
    <h4 class="font-semibold mb-2">Шаблоны</h4>
    <ul class="list-disc pl-5 space-y-1">
      <li><code>such a ...</code></li>
      <li><code>it's high time</code></li>
      <li><code>to take care of</code></li>
    </ul>
  </div>

  <div class="rounded-lg border border-zinc-200 p-4">
    <h4 class="font-semibold mb-2">Время года</h4>
    <ul class="list-disc pl-5 space-y-1">
      <li><code>in spring / in summer / in autumn / in winter</code></li>
    </ul>
  </div>
  <div class="rounded-lg border border-zinc-200 p-4">
    <h4 class="font-semibold mb-2">Город/деревня</h4>
    <ul class="list-disc pl-5 space-y-1">
      <li><code>in the country / to the country</code></li>
      <li><code>in town / to town</code> (без артикля)</li>
    </ul>
  </div>
</div>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-2 mb-3">Упражнение: соотнесите словосочетания и артикли</h3>
<p class="text-zinc-600 mb-4">Перетащите карточки к колонкам <strong>A</strong>, <strong>AN</strong> или <strong>THE</strong>. Используются правила и примеры из рамочек выше.</p>
`,
      match: [
        // только те, где действительно нужен a/an/the
        { id: "m1", label: "What a good boy!", correct: "a" },
        { id: "m2", label: "What a smart girl!", correct: "a" },
        { id: "m3", label: "What a day!", correct: "a" },
        { id: "m4", label: "What an idea!", correct: "an" },
        { id: "m5", label: "such a story", correct: "a" },
        { id: "m6", label: "on board a ship", correct: "a" },
        { id: "m7", label: "the same", correct: "the" },
        { id: "m8", label: "in the country", correct: "the" },
        { id: "m9", label: "to the country", correct: "the" },
        { id: "m10", label: "the famous English writer", correct: "the" },
      ],
      vocab: [
        { word: "spring", ipa: "/sprɪŋ/", ru: "весна" },
        { word: "summer", ipa: "/ˈsʌmə/", ru: "лето" },
        { word: "autumn", ipa: "/ˈɔːtəm/", ru: "осень" },
        { word: "winter", ipa: "/ˈwɪntə/", ru: "зима" },
        { word: "country", ipa: "/ˈkʌntri/", ru: "страна; деревня" },
      ],
    },
    {
      kind: "article-passage",
      title: "Задание с повышенной сложностью 🌶️",
      vocab: [
        { word: "canyon", ipa: "/ˈkænjən/", ru: "каньон" },
        { word: "river", ipa: "/ˈrɪvə/", ru: "река" },
        { word: "history", ipa: "/ˈhɪstəri/", ru: "история" },
        { word: "layer", ipa: "/ˈleɪə/", ru: "слой" },
        { word: "species", ipa: "/ˈspiːʃiːz/", ru: "вид (биологический)" },
      ],
    },
  ];

  const [step, setStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<boolean[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Защита от некорректных данных
  const totalSteps = Array.isArray(steps) ? steps.length : 0;

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { step: s, completed: c } = JSON.parse(raw);
        if (typeof s === "number")
          setStep(Math.min(Math.max(0, s), totalSteps - 1));
        if (Array.isArray(c)) setCompleted(c.slice(0, totalSteps));
      }
    } catch {}
    setIsLoading(false);
  }, [totalSteps]);

  // Инициализируем completed с правильной длиной
  React.useEffect(() => {
    if (completed.length !== totalSteps && totalSteps > 0) {
      setCompleted(Array(totalSteps).fill(false));
    }
  }, [totalSteps, completed.length]);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, completed }));
    }
  }, [step, completed, isLoading]);

  // Если нет шагов — аккуратный fallback
  if (totalSteps === 0) {
    return (
      <section className="mt-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          В этой теме пока нет шагов. Попробуйте обновить страницу.
        </div>
      </section>
    );
  }

  function markDone(i: number) {
    setCompleted((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  }
  const canPrev = step > 0;
  const canNext = step < totalSteps - 1;

  return (
    <section className="mt-3">
      <StepSquares
        total={totalSteps}
        value={step}
        onChange={setStep}
        completed={completed}
      />
      <div className="mt-2">
        <StepBody s={steps[step] || { kind: "blank" }} />
        <VocabBox items={steps[step]?.vocab ?? []} />
        <div className="mt-8 flex items-center justify-between">
          <button
            className="rounded-md border border-zinc-200 bg-white px-4 py-2 disabled:opacity-50"
            disabled={!canPrev}
            onClick={() => setStep(step - 1)}
          >
            Назад
          </button>
          <button
            className="rounded-md bg-indigo-600 text-white px-5 py-2"
            onClick={() => {
              markDone(step);
              if (canNext) {
                setStep(step + 1);
              } else {
                // Last step - call onFinish if provided
                onFinish?.();
              }
            }}
          >
            {canNext ? "Далее" : "Завершить тему"}
          </button>
        </div>
      </div>
    </section>
  );
}

function StepBody({ s }: { s: Step }) {
  if (s.kind === "blank") {
    return <div className="prose prose-zinc max-w-none min-h-[24px]"></div>;
  }
  if (s.kind === "theory") {
    return (
      <div
        className="
          prose prose-zinc max-w-none
          prose-p:my-4
          prose-li:my-2
          prose-ul:my-4 prose-ol:my-4
          prose-strong:font-semibold
          prose-a:text-indigo-700
          prose-hr:my-8
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-2 prose-h2:mb-5
          prose-h3:text-xl  prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
        "
        dangerouslySetInnerHTML={{ __html: s.html }}
      />
    );
  }
  if (s.kind === "collocations") {
    return <CollocationsBoard groups={s.groups} />;
  }
  if (s.kind === "exercise-fill") {
    return (
      <div className="space-y-4">
        <ArticleExercise items={s.items} />
      </div>
    );
  }
  if (s.kind === "theory-match") {
    return (
      <div className="prose prose-zinc max-w-none">
        <div
          className="not-prose"
          dangerouslySetInnerHTML={{ __html: s.html }}
        />
        <div className="not-prose mt-6">
          <DragMatchArticles
            items={s.match}
            onComplete={() => {
              /* можно подсвечивать шаг как выполненный во внешней кнопке,
                 здесь просто оставим коллбек на будущее */
            }}
          />
        </div>
      </div>
    );
  }
  if (s.kind === "article-passage") {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">
            Задание с повышенной сложностью
          </h2>
          <span className="text-lg" aria-hidden>
            🌶️
          </span>
        </div>
        <p className="text-zinc-600">
          Вставьте артикли прямо в текст: <b>a</b>, <b>an</b>, <b>the</b> или
          оставьте пусто (нулевой артикль).
        </p>

        <ArticlePassageExercise
          passage={GRAND_CANYON_PASSAGE}
          answers={GRAND_CANYON_ANSWERS}
          hints={GRAND_CANYON_HINTS}
          storageKey="units:a1:articles:grand-canyon:v2"
          accept={GRAND_CANYON_ACCEPT_ALTERNATIVES}
        />
      </div>
    );
  }
  return null;
}
