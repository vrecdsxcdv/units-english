"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function ShoppingAndMoney({ step }: Props) {
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

// Step 1: Shopping Basics
function Step1() {
  const basicWords = [
    { en: "buy", tr: "[baɪ]", ru: "покупать", emoji: "🛒" },
    { en: "shop", tr: "[ʃɒp]", ru: "магазин / делать покупки", emoji: "🏪" },
    { en: "price", tr: "[praɪs]", ru: "цена", emoji: "💰" },
    { en: "pay", tr: "[peɪ]", ru: "платить", emoji: "💳" },
    { en: "spend", tr: "[spend]", ru: "тратить", emoji: "💸" },
    { en: "cost", tr: "[kɒst]", ru: "стоить", emoji: "💵" },
    { en: "cheap", tr: "[tʃiːp]", ru: "дешёвый", emoji: "🏷️" },
    { en: "expensive", tr: "[ɪkˈspensɪv]", ru: "дорогой", emoji: "💎" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Shopping and Money — Покупки и деньги">
        <p className="text-gray-700 leading-relaxed mb-4">
          <b>Shopping</b> (покупки) — важная часть повседневной жизни. В этом
          уроке вы узнаете, как говорить о покупках, ценах, одежде и продуктах
          на английском языке.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-indigo-900 mb-2">
            📌 Основные глаголы:
          </p>
          <ul className="text-gray-800 space-y-1">
            <li>
              <b>Buy</b> — покупать (I buy clothes)
            </li>
            <li>
              <b>Shop</b> — ходить за покупками (I go shopping)
            </li>
            <li>
              <b>Pay</b> — платить (I pay for items)
            </li>
            <li>
              <b>Spend</b> — тратить (I spend money)
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Basic Vocabulary — Базовый словарь">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {basicWords.map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{word.emoji}</span>
                <div className="text-xl font-bold text-indigo-600">
                  {word.en}
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-1">{word.tr}</div>
              <div className="text-gray-800 font-semibold">{word.ru}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Examples — Примеры">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I want to buy new shoes.
            </p>
            <p className="text-sm text-gray-600">Я хочу купить новые туфли.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              This shirt is too expensive!
            </p>
            <p className="text-sm text-gray-600">
              Эта рубашка слишком дорогая!
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              How much does it cost?
            </p>
            <p className="text-sm text-gray-600">Сколько это стоит?</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I need to pay at the counter.
            </p>
            <p className="text-sm text-gray-600">
              Мне нужно заплатить на кассе.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Shopping Locations — Места для покупок">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              🏪 Clothing Store
            </h4>
            <p className="text-sm text-gray-700">
              Магазин одежды — здесь покупают одежду и обувь
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">
              🛒 Supermarket
            </h4>
            <p className="text-sm text-gray-700">
              Супермаркет — здесь покупают продукты питания
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">
              👗 Fashion Boutique
            </h4>
            <p className="text-sm text-gray-700">
              Модный бутик — магазин с дизайнерской одеждой
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">
              🛍️ Shopping Mall
            </h4>
            <p className="text-sm text-gray-700">
              Торговый центр — много магазинов в одном месте
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Clothes and Footwear
function Step2() {
  const clothingItems = [
    { item: "T-shirt", ru: "футболка", price: "$15" },
    { item: "Jeans", ru: "джинсы", price: "$50" },
    { item: "Dress", ru: "платье", price: "$60" },
    { item: "Jacket", ru: "куртка", price: "$80" },
    { item: "Shoes", ru: "туфли", price: "$70" },
    { item: "Sneakers", ru: "кроссовки", price: "$90" },
    { item: "Boots", ru: "ботинки", price: "$100" },
    { item: "Coat", ru: "пальто", price: "$150" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Clothes and Footwear — Одежда и обувь">
        <p className="text-gray-700 leading-relaxed mb-4">
          Когда вы покупаете одежду, важно знать названия предметов гардероба,
          размеры и как говорить о примерке.
        </p>

        <div className="bg-pink-50 border-l-4 border-pink-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-pink-900 mb-2">
            👕 Важные фразы:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>Try on clothes</b> — примерять одежду
            </li>
            <li>
              <b>Fitting room</b> — примерочная
            </li>
            <li>
              <b>Size chart</b> — таблица размеров
            </li>
            <li>
              <b>Fit perfectly</b> — идеально сидеть
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Clothing Items and Prices — Одежда и цены">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clothingItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-l-4 border-indigo-500 rounded-lg hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {item.item}
                  </div>
                  <div className="text-sm text-gray-600">{item.ru}</div>
                </div>
                <div className="text-xl font-bold text-green-600">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shopping for Clothes — Покупка одежды">
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-300">
            <p className="font-semibold text-gray-900 mb-2">
              Shop for shoes — покупать обувь
            </p>
            <p className="text-sm text-gray-700">
              I need to shop for new running shoes.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-300">
            <p className="font-semibold text-gray-900 mb-2">
              Pick out an outfit — выбрать наряд
            </p>
            <p className="text-sm text-gray-700">
              She is picking out an outfit for the party.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-300">
            <p className="font-semibold text-gray-900 mb-2">
              Try a different size — попробовать другой размер
            </p>
            <p className="text-sm text-gray-700">
              These jeans are too tight. Can I try a different size?
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-300">
            <p className="font-semibold text-gray-900 mb-2">
              Return an item — вернуть товар
            </p>
            <p className="text-sm text-gray-700">
              I want to return this shirt. It does not fit.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Dialogue: At the Clothing Store">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-200">
          <div className="space-y-3">
            <p className="text-gray-800">
              <b>Customer:</b> Hi, I am looking for a dress.
            </p>
            <p className="text-gray-800">
              <b>Shop assistant:</b> What size are you?
            </p>
            <p className="text-gray-800">
              <b>Customer:</b> I am a size medium.
            </p>
            <p className="text-gray-800">
              <b>Shop assistant:</b> Would you like to try it on?
            </p>
            <p className="text-gray-800">
              <b>Customer:</b> Yes, please. Where is the fitting room?
            </p>
            <p className="text-gray-800">
              <b>Shop assistant:</b> It is over there, on the left.
            </p>
          </div>
          <div className="mt-4 p-3 bg-white/70 rounded">
            <p className="text-sm text-gray-600">
              <b>Перевод:</b> Покупатель ищет платье, спрашивает размер и хочет
              примерить в примерочной.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 3: Money and Prices
function Step3() {
  return (
    <div className="space-y-8">
      <Section title="Money and Prices — Деньги и цены">
        <p className="text-gray-700 leading-relaxed mb-4">
          Чтобы совершать покупки, нужно уметь говорить о ценах, скидках и
          способах оплаты.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-green-900 mb-2">
            💰 Вопросы о цене:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>How much is it?</b> — Сколько это стоит?
            </li>
            <li>
              <b>How much does it cost?</b> — Сколько это стоит?
            </li>
            <li>
              <b>What is the price?</b> — Какая цена?
            </li>
            <li>
              <b>Can I get a discount?</b> — Могу ли я получить скидку?
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Price Expressions — Выражения о ценах">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <h4 className="font-bold text-yellow-900 mb-2">
              On sale — На распродаже
            </h4>
            <p className="text-sm text-gray-700">
              These shoes are on sale! — Эти туфли на распродаже!
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <h4 className="font-bold text-yellow-900 mb-2">
              Discounted price — Скидочная цена
            </h4>
            <p className="text-sm text-gray-700">
              The discounted price is $30. — Цена со скидкой $30.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <h4 className="font-bold text-yellow-900 mb-2">
              Affordable prices — Доступные цены
            </h4>
            <p className="text-sm text-gray-700">
              This store has affordable prices. — В этом магазине доступные
              цены.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <h4 className="font-bold text-yellow-900 mb-2">
              Find a bargain — Найти выгодную покупку
            </h4>
            <p className="text-sm text-gray-700">
              I found a bargain! — Я нашёл выгодную покупку!
            </p>
          </div>
        </div>
      </Section>

      <Section title="Payment Methods — Способы оплаты">
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-4">
            <div className="text-3xl">💳</div>
            <div>
              <p className="font-semibold text-gray-900">Pay by card</p>
              <p className="text-sm text-gray-600">Оплатить картой</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-4">
            <div className="text-3xl">💵</div>
            <div>
              <p className="font-semibold text-gray-900">Pay in cash</p>
              <p className="text-sm text-gray-600">Оплатить наличными</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-4">
            <div className="text-3xl">📱</div>
            <div>
              <p className="font-semibold text-gray-900">Pay online</p>
              <p className="text-sm text-gray-600">Оплатить онлайн</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-4">
            <div className="text-3xl">💰</div>
            <div>
              <p className="font-semibold text-gray-900">Pay in installments</p>
              <p className="text-sm text-gray-600">Платить в рассрочку</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="At the Checkout — На кассе">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              Check out at the register.
            </p>
            <p className="text-sm text-gray-600">Рассчитаться на кассе.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">Ring up a purchase.</p>
            <p className="text-sm text-gray-600">Пробить покупку.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">Get a refund.</p>
            <p className="text-sm text-gray-600">Получить возврат денег.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">Make a purchase.</p>
            <p className="text-sm text-gray-600">Совершить покупку.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 4: Grocery Shopping
function Step4() {
  return (
    <div className="space-y-8">
      <Section title="Grocery Shopping — Покупка продуктов">
        <p className="text-gray-700 leading-relaxed mb-4">
          Походы в супермаркет — регулярная часть жизни. Научимся говорить о
          покупке продуктов питания.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-orange-900 mb-2">
            🛒 Основные фразы:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>Go to the supermarket</b> — идти в супермаркет
            </li>
            <li>
              <b>Grab a basket</b> — взять корзину
            </li>
            <li>
              <b>Shopping cart</b> — тележка для покупок
            </li>
            <li>
              <b>Pick up groceries</b> — покупать продукты
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Supermarket Sections — Отделы супермаркета">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🥬</span>
              <h4 className="font-bold text-green-900">Fresh Produce</h4>
            </div>
            <p className="text-sm text-gray-700">
              Свежие овощи и фрукты (vegetables, fruits)
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🥛</span>
              <h4 className="font-bold text-blue-900">Dairy Section</h4>
            </div>
            <p className="text-sm text-gray-700">
              Молочные продукты (milk, cheese, yogurt)
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🍞</span>
              <h4 className="font-bold text-purple-900">Fresh Bakery Goods</h4>
            </div>
            <p className="text-sm text-gray-700">
              Хлебобулочные изделия (bread, pastries)
            </p>
          </div>
          <div className="p-4 bg-cyan-50 rounded-lg border-2 border-cyan-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">❄️</span>
              <h4 className="font-bold text-cyan-900">Frozen Food Section</h4>
            </div>
            <p className="text-sm text-gray-700">
              Замороженные продукты (ice cream, frozen vegetables)
            </p>
          </div>
        </div>
      </Section>

      <Section title="Shopping Expressions — Выражения о покупках">
        <div className="space-y-3">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900 mb-1">
              Stock up on groceries
            </p>
            <p className="text-sm text-gray-700">Запасаться продуктами</p>
            <p className="text-sm text-gray-600 italic mt-2">
              I need to stock up on groceries for the week.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900 mb-1">Buy in bulk</p>
            <p className="text-sm text-gray-700">Покупать оптом</p>
            <p className="text-sm text-gray-600 italic mt-2">
              It is cheaper to buy in bulk.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900 mb-1">
              Pick up some milk
            </p>
            <p className="text-sm text-gray-700">Купить молока</p>
            <p className="text-sm text-gray-600 italic mt-2">
              Can you pick up some milk on your way home?
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900 mb-1">Compare prices</p>
            <p className="text-sm text-gray-700">Сравнивать цены</p>
            <p className="text-sm text-gray-600 italic mt-2">
              I always compare prices before buying.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Healthy Shopping — Здоровые покупки">
        <div className="bg-green-50 p-5 rounded-lg border-2 border-green-400">
          <h4 className="font-bold text-green-900 mb-3 text-lg">
            Healthy Options 🥗
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Organic food</p>
              <p className="text-sm text-gray-600">Органическая еда</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Fresh produce</p>
              <p className="text-sm text-gray-600">Свежие продукты</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Low-fat products</p>
              <p className="text-sm text-gray-600">Низкожирные продукты</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Whole grain bread</p>
              <p className="text-sm text-gray-600">Цельнозерновой хлеб</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 5: Homework - Phrasal Verbs
function Step5() {
  const phrasalVerbs = [
    {
      phrase: "try on",
      meaning: "примерять",
      example: "Can I try on these jeans?",
      ru: "Могу я примерить эти джинсы?",
    },
    {
      phrase: "pick out",
      meaning: "выбирать",
      example: "She is picking out a new dress.",
      ru: "Она выбирает новое платье.",
    },
    {
      phrase: "look for",
      meaning: "искать",
      example: "I am looking for a bargain.",
      ru: "Я ищу выгодное предложение.",
    },
    {
      phrase: "shop around",
      meaning: "присматриваться к ценам",
      example: "You should shop around before buying.",
      ru: "Тебе стоит присмотреться к ценам перед покупкой.",
    },
    {
      phrase: "try out",
      meaning: "пробовать (новый товар)",
      example: "Let me try out this new phone.",
      ru: "Дай мне попробовать этот новый телефон.",
    },
    {
      phrase: "put back",
      meaning: "положить обратно",
      example: "Put back the item if you do not want it.",
      ru: "Положи товар обратно, если не хочешь его.",
    },
    {
      phrase: "take back",
      meaning: "вернуть (товар)",
      example: "I need to take back this shirt.",
      ru: "Мне нужно вернуть эту рубашку.",
    },
    {
      phrase: "splash out",
      meaning: "потратиться",
      example: "I splashed out on a new coat.",
      ru: "Я потратился на новое пальто.",
    },
    {
      phrase: "come across",
      meaning: "наткнуться (на выгодную сделку)",
      example: "I came across a great deal yesterday.",
      ru: "Я вчера наткнулся на отличное предложение.",
    },
    {
      phrase: "run out of",
      meaning: "закончиться",
      example: "We ran out of milk.",
      ru: "У нас закончилось молоко.",
    },
    {
      phrase: "stock up on",
      meaning: "запасаться",
      example: "Stock up on snacks for the party.",
      ru: "Запасись снэками для вечеринки.",
    },
    {
      phrase: "drop by",
      meaning: "заглянуть (в магазин)",
      example: "Drop by the store on your way home.",
      ru: "Загляни в магазин по дороге домой.",
    },
  ];

  return (
    <div className="space-y-8">
      <Section title="📚 Homework — Phrasal Verbs for Shopping">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-3">
            Домашнее задание: Фразовые глаголы
          </h3>
          <p className="text-gray-700 mb-3">
            Выучите эти фразовые глаголы, связанные с покупками. Они часто
            используются в разговорной речи!
          </p>
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              💡 Как учить фразовые глаголы:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Учите глагол вместе с примером</li>
              <li>✓ Придумайте своё предложение с каждым глаголом</li>
              <li>✓ Повторяйте примеры вслух</li>
              <li>✓ Используйте в реальных ситуациях</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Phrasal Verbs List — Список фразовых глаголов">
        <div className="space-y-4">
          {phrasalVerbs.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border-l-4 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold text-indigo-600 mb-1">
                    {item.phrase}
                  </h4>
                  <p className="text-gray-700 font-semibold">{item.meaning}</p>
                </div>
                <div className="text-2xl font-bold text-gray-300">
                  {idx + 1}
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-gray-900 font-medium">{item.example}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.ru}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Practice Exercise — Практическое упражнение">
        <div className="bg-yellow-50 border-2 border-yellow-400 p-5 rounded-lg">
          <h4 className="font-bold text-yellow-900 mb-3">
            Задание: Составьте предложения
          </h4>
          <p className="text-gray-700 mb-4">
            Используйте каждый фразовый глагол из списка в своём собственном
            предложении. Это поможет запомнить их!
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <b>Пример:</b> try on → <i>I need to try on this jacket.</i>
            </p>
            <p>
              <b>Ваша очередь:</b> pick out → <i>(ваше предложение)</i>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 6: Logic Task
function Step6() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="🧠 Logic Task — Задание на логику">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Ситуативные задачи о покупках
          </h3>
          <p className="text-gray-700">
            Решите логические задачи, связанные с покупками в магазинах.
          </p>
        </div>
      </Section>

      <Section title="Task 1: Shopping Budget — Бюджет на покупки">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg mb-4">
          <p className="font-bold text-lg text-gray-900 mb-3">
            У вас есть $200. Что вы можете купить?
          </p>
          <div className="space-y-3 ml-4">
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-semibold text-gray-800">Вариант A:</p>
              <p className="text-sm text-gray-700">
                Jacket ($150) + T-shirt ($30) + Socks ($10) = <b>$190</b>
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-semibold text-gray-800">Вариант B:</p>
              <p className="text-sm text-gray-700">
                Coat ($180) + Shoes ($100) = <b>$280</b> ❌ (слишком дорого!)
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-semibold text-gray-800">Вариант C:</p>
              <p className="text-sm text-gray-700">
                Jeans ($50) + Sneakers ($90) + Hat ($25) + Scarf ($20) ={" "}
                <b>$185</b>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ваш ответ (какие варианты правильные?):
            </label>
            <input
              type="text"
              value={answers.budget || ""}
              onChange={(e) => handleChange("budget", e.target.value)}
              placeholder="Введите ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Task 2: Best Deal — Лучшее предложение">
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              Вы хотите купить телевизор. Где выгоднее?
            </p>
            <div className="space-y-3 ml-4">
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold text-gray-800">Store A:</p>
                <p className="text-sm text-gray-700">
                  TV: $500, discount 20% = <b>$400</b>
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold text-gray-800">Store B:</p>
                <p className="text-sm text-gray-700">
                  TV: $450, discount 10% = <b>$405</b>
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold text-gray-800">Store C:</p>
                <p className="text-sm text-gray-700">
                  TV: $480, discount 15% = <b>$408</b>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ваш ответ (какой магазин выгоднее?):
              </label>
              <input
                type="text"
                value={answers.deal || ""}
                onChange={(e) => handleChange("deal", e.target.value)}
                placeholder="Введите ваш ответ..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 3: Return Policy — Политика возврата">
        <div className="p-5 bg-white border-2 border-orange-300 rounded-lg">
          <p className="font-bold text-lg text-gray-900 mb-3">
            Вы купили рубашку, но она не подошла. Можете ли вы её вернуть?
          </p>
          <div className="space-y-3 ml-4 mb-4">
            <div className="p-3 bg-orange-50 rounded">
              <p className="font-semibold text-gray-800">Ситуация 1:</p>
              <p className="text-sm text-gray-700">
                Вы купили рубашку 5 дней назад. Политика возврата: 7 дней.
              </p>
              <p className="text-sm text-green-700 mt-2">
                ✓ <b>Да</b>, вы можете вернуть (5 дней {"<"} 7 дней)
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="font-semibold text-gray-800">Ситуация 2:</p>
              <p className="text-sm text-gray-700">
                Вы купили рубашку 10 дней назад. Политика возврата: 7 дней.
              </p>
              <p className="text-sm text-red-700 mt-2">
                ✗ <b>Нет</b>, слишком поздно (10 дней {">"} 7 дней)
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="font-semibold text-gray-800">Ситуация 3:</p>
              <p className="text-sm text-gray-700">
                Вы купили рубашку вчера, но уже сняли бирку.
              </p>
              <p className="text-sm text-red-700 mt-2">
                ✗ <b>Нет</b>, без бирки возврат невозможен
              </p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Напишите свои выводы о политике возврата:
            </label>
            <textarea
              value={answers.returns || ""}
              onChange={(e) => handleChange("returns", e.target.value)}
              placeholder="Что вы поняли о правилах возврата товаров?"
              rows={3}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Task 4: Shopping List Priority">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <p className="font-bold text-lg text-gray-900 mb-3">
            Расставьте покупки по приоритету (что купить первым):
          </p>
          <div className="space-y-3 ml-4 mb-4">
            <div className="p-3 bg-green-50 rounded flex items-center gap-3">
              <span className="text-2xl font-bold text-green-700">1</span>
              <div>
                <p className="font-semibold text-gray-800">
                  Essential food (bread, milk, eggs)
                </p>
                <p className="text-sm text-gray-600">
                  Необходимые продукты — самое важное!
                </p>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded flex items-center gap-3">
              <span className="text-2xl font-bold text-green-700">2</span>
              <div>
                <p className="font-semibold text-gray-800">Cleaning supplies</p>
                <p className="text-sm text-gray-600">
                  Средства для уборки — нужны для дома
                </p>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded flex items-center gap-3">
              <span className="text-2xl font-bold text-green-700">3</span>
              <div>
                <p className="font-semibold text-gray-800">New clothes</p>
                <p className="text-sm text-gray-600">
                  Новая одежда — можно подождать
                </p>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded flex items-center gap-3">
              <span className="text-2xl font-bold text-green-700">4</span>
              <div>
                <p className="font-semibold text-gray-800">
                  Designer sunglasses
                </p>
                <p className="text-sm text-gray-600">
                  Дизайнерские очки — роскошь, не необходимость
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-300 rounded">
            <p className="text-sm text-blue-800">
              <b>💡 Совет:</b> Всегда покупайте сначала то, что вам
              действительно нужно, а потом то, что хочется!
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 7: Final Reading + Exercises
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="📖 Reading: My Shopping Day">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <p className="text-gray-800 leading-relaxed mb-4">
            <b>My name is Sarah and I love shopping!</b> Last Saturday, I went
            to the shopping mall with my friend Emma. We had a great time!
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            First, we went to a <b>clothing store</b>. I was looking for a new
            dress for a party. The <b>shop assistant</b> was very friendly. She
            helped me <b>pick out</b> a beautiful blue dress. I tried it on in
            the <b>fitting room</b>, and it <b>fit perfectly</b>! The price was
            $80, but it was <b>on sale</b> with a 20% discount. I paid only $64!
            What a <b>bargain</b>!
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Emma bought <b>brand-new shoes</b>. She loves{" "}
            <b>designer footwear</b>, so she <b>splashed out</b> and spent $150
            on beautiful black boots. She tried <b>a different size</b> because
            the first pair was too small. The new size was perfect!
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            After shopping for clothes, we went to the <b>supermarket</b>. I
            needed to <b>stock up on groceries</b> for the week. I{" "}
            <b>grabbed a basket</b> and started shopping. I went to the{" "}
            <b>fresh produce</b> section and bought apples, bananas, and
            tomatoes. Then I <b>picked up some milk</b> from the{" "}
            <b>dairy section</b>. I also bought <b>fresh bakery goods</b> —
            delicious bread that smells amazing!
          </p>
          <p className="text-gray-800 leading-relaxed">
            At the end, we <b>checked out at the register</b>. I paid by card,
            and Emma paid in cash. We spent about three hours shopping, and it
            was a fun day! I love finding <b>affordable prices</b> and good
            deals.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <b>Перевод:</b> Сара и её подруга Эмма провели день в торговом
            центре. Сара купила платье на распродаже за $64 (со скидкой 20%).
            Эмма потратилась на дизайнерские ботинки за $150. Потом они пошли в
            супермаркет за продуктами: фрукты, молоко и свежий хлеб. День был
            удачным!
          </p>
        </div>
      </Section>

      <Section title="Exercise 1: True or False?">
        <p className="text-gray-700 mb-4">Правда или ложь?</p>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. Sarah bought a red dress. (Сара купила красное платье)
            </p>
            <input
              type="text"
              value={answers.tf1 || ""}
              onChange={(e) => handleChange("tf1", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. The dress was on sale. (Платье было на распродаже)
            </p>
            <input
              type="text"
              value={answers.tf2 || ""}
              onChange={(e) => handleChange("tf2", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              3. Emma spent $150 on boots. (Эмма потратила $150 на ботинки)
            </p>
            <input
              type="text"
              value={answers.tf3 || ""}
              onChange={(e) => handleChange("tf3", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. They did not go to the supermarket. (Они не пошли в
              супермаркет)
            </p>
            <input
              type="text"
              value={answers.tf4 || ""}
              onChange={(e) => handleChange("tf4", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              5. Sarah paid in cash. (Сара платила наличными)
            </p>
            <input
              type="text"
              value={answers.tf5 || ""}
              onChange={(e) => handleChange("tf5", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 2: Answer the Questions">
        <p className="text-gray-700 mb-4">Ответьте на вопросы:</p>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              1. How much did Sarah pay for the dress after the discount?
            </p>
            <textarea
              value={answers.quest1 || ""}
              onChange={(e) => handleChange("quest1", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              2. Why did Emma try a different size?
            </p>
            <textarea
              value={answers.quest2 || ""}
              onChange={(e) => handleChange("quest2", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              3. What did Sarah buy at the supermarket?
            </p>
            <textarea
              value={answers.quest3 || ""}
              onChange={(e) => handleChange("quest3", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              4. How long did they spend shopping?
            </p>
            <textarea
              value={answers.quest4 || ""}
              onChange={(e) => handleChange("quest4", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 3: Fill in the Blanks">
        <p className="text-gray-700 mb-4">Вставьте пропущенные слова:</p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. Sarah went to a _______ store to buy a dress.
            </p>
            <input
              type="text"
              value={answers.fill1 || ""}
              onChange={(e) => handleChange("fill1", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. The dress _______ perfectly.
            </p>
            <input
              type="text"
              value={answers.fill2 || ""}
              onChange={(e) => handleChange("fill2", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              3. Emma bought _______ footwear.
            </p>
            <input
              type="text"
              value={answers.fill3 || ""}
              onChange={(e) => handleChange("fill3", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. They _______ at the register at the end.
            </p>
            <input
              type="text"
              value={answers.fill4 || ""}
              onChange={(e) => handleChange("fill4", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Congratulations!
          </h3>
          <p className="text-gray-700 mb-4">
            Вы завершили тему <b>Shopping and Money</b>! Теперь вы можете
            уверенно говорить о покупках, ценах, одежде и продуктах на
            английском языке.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold">
            <span>✓</span>
            <span>Тема завершена</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
