"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FoodAndDrinks({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение и базовая лексика ===== */
function Step1() {
  return (
    <>
      <UiSection title="Food and Drinks: Еда и напитки">
        <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Добро пожаловать в мир еды и напитков!
          </p>
          <p className="text-zinc-800 leading-relaxed mb-4">
            В этой теме мы изучим основную лексику, связанную с едой и
            напитками, научимся говорить о своих предпочтениях и прочитаем
            интересный текст о профессии повара.
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Умение говорить о еде — одна из самых важных бытовых тем в
            английском языке!
          </p>
        </div>
      </UiSection>

      <UiSection title="Базовая лексика: Основные продукты">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🍎</span>
              <span>Фрукты (Fruits):</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["apple", "/ˈæpl/", "яблоко"],
                ["banana", "/bəˈnɑːnə/", "банан"],
                ["orange", "/ˈɒrɪndʒ/", "апельсин"],
                ["strawberry", "/ˈstrɔːbəri/", "клубника"],
                ["grape", "/ɡreɪp/", "виноград"],
                ["watermelon", "/ˈwɔːtəmelən/", "арбуз"],
                ["lemon", "/ˈlemən/", "лимон"],
                ["cherry", "/ˈtʃeri/", "вишня"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
                >
                  <p className="font-bold text-indigo-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🥕</span>
              <span>Овощи (Vegetables):</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["tomato", "/təˈmɑːtəʊ/", "помидор"],
                ["potato", "/pəˈteɪtəʊ/", "картофель"],
                ["carrot", "/ˈkærət/", "морковь"],
                ["cucumber", "/ˈkjuːkʌmbə/", "огурец"],
                ["onion", "/ˈʌnjən/", "лук"],
                ["pepper", "/ˈpepə/", "перец"],
                ["cabbage", "/ˈkæbɪdʒ/", "капуста"],
                ["broccoli", "/ˈbrɒkəli/", "брокколи"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
                >
                  <p className="font-bold text-sky-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
          <span>✨</span>
          <span>Совет для запоминания:</span>
        </h4>
        <p className="text-sm text-zinc-800">
          Создайте карточки со словами и повторяйте их каждый день. Попробуйте
          называть продукты на английском, когда готовите или ходите по
          магазинам!
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Мясо, рыба и молочные продукты ===== */
function Step2() {
  return (
    <>
      <UiSection title="Мясо, рыба и молочные продукты">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Продолжаем изучать основные продукты питания. Эти слова необходимы
            для повседневного общения.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🥩</span>
            <span>Мясо (Meat):</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["meat", "/miːt/", "мясо"],
              ["beef", "/biːf/", "говядина"],
              ["pork", "/pɔːk/", "свинина"],
              ["chicken", "/ˈtʃɪkɪn/", "курица"],
              ["turkey", "/ˈtɜːki/", "индейка"],
              ["lamb", "/læm/", "баранина"],
              ["bacon", "/ˈbeɪkən/", "бекон"],
              ["sausage", "/ˈsɒsɪdʒ/", "колбаса"],
            ].map(([word, transcr, translation]) => (
              <div
                key={word}
                className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-700">{word}</p>
                <p className="text-sm text-zinc-600">{transcr}</p>
                <p className="text-sm text-zinc-800">{translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🐟</span>
            <span>Рыба и морепродукты (Fish & Seafood):</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["fish", "/fɪʃ/", "рыба"],
              ["salmon", "/ˈsæmən/", "лосось"],
              ["tuna", "/ˈtuːnə/", "тунец"],
              ["shrimp", "/ʃrɪmp/", "креветка"],
              ["crab", "/kræb/", "краб"],
              ["oyster", "/ˈɔɪstə/", "устрица"],
            ].map(([word, transcr, translation]) => (
              <div
                key={word}
                className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
              >
                <p className="font-bold text-sky-700">{word}</p>
                <p className="text-sm text-zinc-600">{transcr}</p>
                <p className="text-sm text-zinc-800">{translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🥛</span>
            <span>Молочные продукты (Dairy Products):</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["milk", "/mɪlk/", "молоко"],
              ["cheese", "/tʃiːz/", "сыр"],
              ["butter", "/ˈbʌtə/", "масло"],
              ["yogurt", "/ˈjɒɡət/", "йогурт"],
              ["cream", "/kriːm/", "сливки"],
              ["ice cream", "/ˈaɪs kriːm/", "мороженое"],
            ].map(([word, transcr, translation]) => (
              <div
                key={word}
                className="bg-white rounded-lg p-4 border-l-4 border-slate-400"
              >
                <p className="font-bold text-slate-700">{word}</p>
                <p className="text-sm text-zinc-600">{transcr}</p>
                <p className="text-sm text-zinc-800">{translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Напитки и выпечка ===== */
function Step3() {
  return (
    <>
      <UiSection title="Напитки и выпечка">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">☕</span>
              <span>Напитки (Drinks/Beverages):</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["water", "/ˈwɔːtə/", "вода"],
                ["tea", "/tiː/", "чай"],
                ["coffee", "/ˈkɒfi/", "кофе"],
                ["juice", "/dʒuːs/", "сок"],
                ["soda", "/ˈsəʊdə/", "газировка"],
                ["beer", "/bɪə/", "пиво"],
                ["wine", "/waɪn/", "вино"],
                ["cocktail", "/ˈkɒkteɪl/", "коктейль"],
                ["milkshake", "/ˈmɪlkʃeɪk/", "молочный коктейль"],
                ["smoothie", "/ˈsmuːði/", "смузи"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
                >
                  <p className="font-bold text-indigo-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🍞</span>
              <span>Выпечка и десерты (Bakery & Desserts):</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["bread", "/bred/", "хлеб"],
                ["cake", "/keɪk/", "торт"],
                ["cookie", "/ˈkʊki/", "печенье"],
                ["pie", "/paɪ/", "пирог"],
                ["donut", "/ˈdəʊnʌt/", "пончик"],
                ["muffin", "/ˈmʌfɪn/", "маффин"],
                ["croissant", "/ˈkrwʌsɒ̃/", "круассан"],
                ["chocolate", "/ˈtʃɒklət/", "шоколад"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
                >
                  <p className="font-bold text-sky-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3">
          📊 Итого слов изучено: 46
        </h4>
        <p className="text-sm text-zinc-800">
          Отличная работа! Вы уже знаете почти 50 слов на тему еды и напитков.
          Продолжайте в том же духе!
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Выражение предпочтений ===== */
function Step4() {
  return (
    <>
      <UiSection title="Как выразить свои предпочтения в еде">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Научимся говорить, что нам нравится и не нравится, используя
            правильные конструкции.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Положительные предложения:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                I like...
              </p>
              <p className="text-sm text-zinc-700 mb-2">Мне нравится...</p>
              <p className="text-xs text-zinc-600 italic">
                I like apples. / I like chocolate.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                I love...
              </p>
              <p className="text-sm text-zinc-700 mb-2">Я люблю...</p>
              <p className="text-xs text-zinc-600 italic">
                I love pizza. / I love ice cream.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                I prefer...
              </p>
              <p className="text-sm text-zinc-700 mb-2">Я предпочитаю...</p>
              <p className="text-xs text-zinc-600 italic">
                I prefer tea to coffee.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                My favourite food/drink is...
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                Моя любимая еда/напиток...
              </p>
              <p className="text-xs text-zinc-600 italic">
                My favourite food is pasta.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-zinc-50 border border-zinc-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Отрицательные предложения:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-slate-700">
                I don&apos;t like...
              </p>
              <p className="text-sm text-zinc-700 mb-2">Мне не нравится...</p>
              <p className="text-xs text-zinc-600 italic">
                I don&apos;t like onions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-slate-700">
                I hate...
              </p>
              <p className="text-sm text-zinc-700 mb-2">Я ненавижу...</p>
              <p className="text-xs text-zinc-600 italic">I hate spicy food.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-slate-700">
                I can&apos;t stand...
              </p>
              <p className="text-sm text-zinc-700 mb-2">Терпеть не могу...</p>
              <p className="text-xs text-zinc-600 italic">
                I can&apos;t stand mushrooms.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            Вопросы о предпочтениях:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm mb-1">
                <strong className="text-sky-700">
                  What&apos;s your favourite food?
                </strong>
              </p>
              <p className="text-xs text-zinc-600">Какая твоя любимая еда?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm mb-1">
                <strong className="text-sky-700">Do you like...?</strong>
              </p>
              <p className="text-xs text-zinc-600">Тебе нравится...?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm mb-1">
                <strong className="text-sky-700">
                  Would you like some...?
                </strong>
              </p>
              <p className="text-xs text-zinc-600">
                Хотите немного...? (предложение)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Упражнения на предпочтения ===== */
function Step5() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "pizza very much.",
      answers: ["like", "love"],
      explanation: "I like/love pizza.",
    },
    {
      left: "2. She doesn't",
      right: "vegetables.",
      answers: ["like"],
      explanation: "She doesn't like vegetables.",
    },
    {
      left: "3. My favourite",
      right: "is chocolate cake.",
      answers: ["food", "dessert"],
      explanation: "My favourite food/dessert is chocolate cake.",
    },
    {
      left: "4. Do you",
      right: "coffee or tea?",
      answers: ["prefer"],
      explanation: "Do you prefer coffee or tea?",
    },
    {
      left: "5. I can't",
      right: "spicy food.",
      answers: ["stand"],
      explanation: "I can't stand spicy food.",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Выражаем предпочтения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Давайте потренируемся говорить о том, что нам нравится и не нравится
            в еде!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Заполните пропуски"
        instruction="Используйте подходящие слова для выражения предпочтений."
        items={exercise1}
      />

      <UiSection title="Полезные фразы для ресторана">
        <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-sky-700">
                I&apos;ll have...
              </p>
              <p className="text-xs text-zinc-600">Я возьму...</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-sky-700">
                Can I get...?
              </p>
              <p className="text-xs text-zinc-600">Могу я получить...?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-sky-700">
                What do you recommend?
              </p>
              <p className="text-xs text-zinc-600">Что вы рекомендуете?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-sky-700">
                The bill, please.
              </p>
              <p className="text-xs text-zinc-600">Счёт, пожалуйста.</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Текст про поваров (часть 1) ===== */
function Step6() {
  return (
    <>
      <UiSection title="Чтение: Профессия повара">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Прочитайте текст о профессии повара и мире кулинарии.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          The World of Chefs and Cooking
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            A chef is a professional cook who prepares delicious meals in
            restaurants, hotels, or catering companies. Being a chef is not just
            a job — it&apos;s an art form that requires creativity, skill, and
            passion for food.
          </p>

          <p>
            Every day, chefs wake up early in the morning to prepare fresh
            ingredients. They go to the market to buy vegetables, meat, fish,
            and spices. Quality ingredients are the foundation of excellent
            cuisine. A good chef always chooses the best products for their
            dishes.
          </p>

          <p>
            In the kitchen, chefs use many different cooking techniques. They
            can <strong>boil</strong> (варить), <strong>fry</strong> (жарить),{" "}
            <strong>bake</strong> (печь), <strong>grill</strong> (готовить на
            гриле), <strong>steam</strong> (готовить на пару), and{" "}
            <strong>roast</strong> (запекать) food. Each method gives a unique
            flavor and texture to the dish.
          </p>

          <p>
            Professional kitchens are very organized places. There is a head
            chef (also called <strong>&quot;chef de cuisine&quot;</strong>) who
            leads the team. Under the head chef, there are several specialized
            chefs: the <strong>sous chef</strong> (second-in-command), the{" "}
            <strong>pastry chef</strong> who makes desserts, and{" "}
            <strong>line cooks</strong> who prepare specific dishes.
          </p>

          <p>
            Chefs need to work quickly and efficiently, especially during busy
            hours when the restaurant is full of customers. They must prepare
            multiple dishes at the same time while maintaining high quality
            standards. It&apos;s a demanding job that requires excellent time
            management skills.
          </p>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Текст про поваров (часть 2) + словарь ===== */
function Step7() {
  return (
    <>
      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          The World of Chefs and Cooking (continued)
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Famous chefs become celebrities and open their own restaurants
            around the world. They create signature dishes that reflect their
            unique style and culinary philosophy. Some chefs write cookbooks and
            appear on television cooking shows to share their knowledge with
            home cooks.
          </p>

          <p>
            Modern chefs also pay attention to food presentation. They say that
            &quot;we eat with our eyes first,&quot; so a beautiful plate can
            make the dining experience even more enjoyable. Chefs use colorful
            vegetables, elegant sauces, and creative garnishes to make their
            dishes look like works of art.
          </p>

          <p>
            Many chefs specialize in different cuisines: Italian, French,
            Japanese, Mexican, Indian, and many others. Each cuisine has its own
            traditions, ingredients, and cooking methods. Learning about
            different culinary cultures is an exciting part of being a chef.
          </p>

          <p>
            Today, there is also a growing trend toward healthy cooking. Chefs
            create nutritious meals using organic ingredients, whole grains, and
            fresh vegetables. They focus on balanced dishes that are both
            delicious and good for health.
          </p>

          <p>
            Being a chef is challenging but rewarding. When customers enjoy
            their meal and leave positive reviews, it brings great satisfaction.
            For true chefs, cooking is not just work — it&apos;s their passion
            and way of life.
          </p>
        </div>
      </div>

      <UiSection title="Словарь к тексту">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["chef", "/ʃef/", "повар, шеф-повар"],
              ["cook (v)", "/kʊk/", "готовить"],
              ["prepare", "/prɪˈpeə/", "готовить, подготавливать"],
              ["ingredient", "/ɪnˈɡriːdiənt/", "ингредиент"],
              ["recipe", "/ˈresəpi/", "рецепт"],
              ["kitchen", "/ˈkɪtʃɪn/", "кухня"],
              ["dish", "/dɪʃ/", "блюдо"],
              ["meal", "/miːl/", "прием пищи"],
              ["flavor", "/ˈfleɪvə/", "вкус"],
              ["spice", "/spaɪs/", "специя"],
              ["technique", "/tekˈniːk/", "техника"],
              ["cuisine", "/kwɪˈziːn/", "кухня (кулинарная)"],
            ].map(([word, transcr, translation]) => (
              <div
                key={word}
                className="bg-white rounded-lg p-3 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-700">{word}</p>
                <p className="text-xs text-zinc-600">{transcr}</p>
                <p className="text-sm text-zinc-800">{translation}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Задания на текст (True/False) ===== */
function Step8() {
  return (
    <>
      <UiSection title="Задания на понимание текста">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Проверьте, насколько хорошо вы поняли текст о поварах.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border border-indigo-200">
          <h4 className="text-lg font-bold text-indigo-900 mb-4">
            Задание 1: True or False?
          </h4>
          <p className="text-sm text-zinc-700 mb-4">
            Прочитайте утверждения и определите, правда это или ложь:
          </p>
          <div className="space-y-4">
            {[
              {
                statement: "A chef is a professional cook.",
                answer: "True",
                explanation:
                  "Верно. В тексте сказано: 'A chef is a professional cook...'",
              },
              {
                statement: "Chefs only work in restaurants.",
                answer: "False",
                explanation:
                  "Неверно. Повара работают 'in restaurants, hotels, or catering companies'.",
              },
              {
                statement:
                  "Quality ingredients are important for good cuisine.",
                answer: "True",
                explanation:
                  "Верно. 'Quality ingredients are the foundation of excellent cuisine.'",
              },
              {
                statement: "All chefs specialize in French cuisine.",
                answer: "False",
                explanation:
                  "Неверно. Повара специализируются в разных кухнях: итальянской, французской, японской и т.д.",
              },
              {
                statement: "Being a chef requires creativity and passion.",
                answer: "True",
                explanation:
                  "Верно. В тексте говорится: '...requires creativity, skill, and passion for food.'",
              },
              {
                statement: "Modern chefs don't care about food presentation.",
                answer: "False",
                explanation:
                  "Неверно. Современные повара уделяют внимание презентации: 'we eat with our eyes first'.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">
                  {idx + 1}. {item.statement}
                </p>
                <p className="text-sm text-indigo-700 mb-1">
                  <strong>Ответ:</strong> {item.answer}
                </p>
                <p className="text-xs text-zinc-600">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Задания на текст (вопросы и заполнение) ===== */
function Step9() {
  const fillExercise: FillItem[] = [
    {
      left: "1. A good chef always chooses the best",
      right: "for their dishes.",
      answers: ["products", "ingredients"],
      explanation: "products/ingredients - из текста",
    },
    {
      left: "2. Professional kitchens are very",
      right: "places.",
      answers: ["organized"],
      explanation: "organized - из текста",
    },
    {
      left: "3. Chefs can boil, fry, bake, and",
      right: "food.",
      answers: ["grill", "roast", "steam"],
      explanation: "grill/roast/steam - методы готовки из текста",
    },
    {
      left: "4. The head chef is also called",
      right: "",
      answers: ["chef de cuisine"],
      explanation: "chef de cuisine - из текста",
    },
    {
      left: "5. For true chefs, cooking is their",
      right: "and way of life.",
      answers: ["passion"],
      explanation: "passion - из последнего предложения текста",
    },
  ];

  return (
    <>
      <UiSection title="Задание 2: Ответьте на вопросы">
        <div className="bg-white rounded-lg p-6 border border-indigo-200">
          <div className="space-y-4">
            {[
              {
                q: "What do chefs do every morning?",
                a: "They wake up early to prepare fresh ingredients and go to the market.",
              },
              {
                q: "Name at least three cooking techniques mentioned in the text.",
                a: "Boil, fry, bake, grill, steam, roast (любые три).",
              },
              {
                q: "Who is the second-in-command in a professional kitchen?",
                a: "The sous chef.",
              },
              {
                q: "Why is food presentation important?",
                a: "Because 'we eat with our eyes first' - beautiful presentation makes the dining experience more enjoyable.",
              },
              {
                q: "What is the trend in modern cooking?",
                a: "Healthy cooking with organic ingredients, whole grains, and fresh vegetables.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2 text-indigo-900">
                  {idx + 1}. {item.q}
                </p>
                <p className="text-sm text-zinc-700">
                  <strong className="text-indigo-700">Ответ:</strong> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Задание 3: Заполните пропуски"
        instruction="Используйте слова из текста."
        items={fillExercise}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговое задание и заключение ===== */
function Step10() {
  return (
    <>
      <UiSection title="Итоговое задание: Создайте свой рецепт">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🍳</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Творческое задание!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Используя изученную лексику, опишите своё любимое блюдо или
                придумайте простой рецепт на английском языке.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h4 className="text-lg font-bold text-indigo-900 mb-4">
          Пример рецепта:
        </h4>
        <div className="bg-zinc-50 rounded-lg p-4">
          <h5 className="font-bold text-indigo-700 mb-3">
            Simple Vegetable Salad
          </h5>
          <p className="text-sm text-zinc-800 mb-3">
            <strong>Ingredients:</strong>
          </p>
          <ul className="text-sm text-zinc-700 space-y-1 mb-3 ml-4">
            <li>• 2 tomatoes</li>
            <li>• 1 cucumber</li>
            <li>• 1 onion</li>
            <li>• Olive oil</li>
            <li>• Salt and pepper</li>
          </ul>
          <p className="text-sm text-zinc-800 mb-2">
            <strong>Instructions:</strong>
          </p>
          <ol className="text-sm text-zinc-700 space-y-1 ml-4">
            <li>1. Wash all the vegetables.</li>
            <li>2. Cut the tomatoes and cucumber into small pieces.</li>
            <li>3. Chop the onion.</li>
            <li>4. Mix everything in a bowl.</li>
            <li>5. Add olive oil, salt, and pepper.</li>
            <li>6. Enjoy your fresh salad!</li>
          </ol>
        </div>
      </div>

      <UiSection title="Итоговая таблица: Полезные фразы">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Фраза
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Перевод
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Использование
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["I like...", "Мне нравится...", "Предпочтения"],
                ["I prefer...", "Я предпочитаю...", "Выбор"],
                ["My favourite is...", "Мой любимый...", "Любимое"],
                ["I can't stand...", "Терпеть не могу...", "Антипатия"],
                ["Would you like...?", "Хотите...?", "Предложение"],
                ["I'll have...", "Я возьму...", "Заказ"],
              ].map(([phrase, translation, usage], idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-indigo-50"}
                >
                  <td className="border border-indigo-200 p-3 font-semibold text-indigo-700">
                    {phrase}
                  </td>
                  <td className="border border-indigo-200 p-3">
                    {translation}
                  </td>
                  <td className="border border-indigo-200 p-3 text-zinc-600">
                    {usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Что вы изучили:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>46+ слов</strong> на тему еды и напитков
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Как выражать <strong>предпочтения</strong> в еде
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Методы приготовления</strong> (boil, fry, bake, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Полезные <strong>фразы для ресторана</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Прочитали текст о <strong>профессии повара</strong>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 border border-sky-200">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800">
            Теперь вы можете уверенно говорить о еде на английском языке! Эта
            лексика пригодится вам в ресторанах, супермаркетах и повседневном
            общении. Продолжайте практиковаться, называя продукты на английском
            каждый день!
          </p>
        </div>
      </div>
    </>
  );
}

