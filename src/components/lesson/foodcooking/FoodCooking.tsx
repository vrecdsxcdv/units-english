"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function FoodCooking({
  step,
  lessonKey,
}: {
  step: number;
  lessonKey: string;
}) {
  if (step === 1) {
    return (
      <>
        <Section title="👨‍🍳 Introduction + Cooking Methods">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border-2 border-orange-300 mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              🍳 Food & Cooking — Еда и кулинария
            </h3>

            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-orange-200">
              <p className="text-base leading-relaxed mb-3">
                Cooking is both an art and a science! From selecting fresh{" "}
                <strong>ingredients</strong> to mastering different{" "}
                <strong>cooking methods</strong>, the kitchen is a place where
                creativity meets nutrition. Whether you follow a traditional{" "}
                <strong>recipe</strong> or improvise with what's in your fridge,
                cooking connects us to culture, health, and pleasure.
              </p>
              <p className="text-base leading-relaxed">
                In this lesson, we'll explore cooking techniques, food
                vocabulary, kitchen equipment, and how to describe dishes from{" "}
                <strong>bland</strong> to <strong>spicy</strong>, from{" "}
                <strong>undercooked</strong> to perfectly{" "}
                <strong>golden-brown</strong>! 🔥🍽️
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🔥 Cooking Methods — Способы приготовления
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. cook",
                    "готовить",
                    "I <strong>cook</strong> dinner every night.",
                  ],
                  [
                    "2. boil",
                    "варить (в кипятке)",
                    "<strong>Boil</strong> the pasta for 10 minutes.",
                  ],
                  [
                    "3. fry",
                    "жарить (на сковороде)",
                    "<strong>Fry</strong> the eggs in butter.",
                  ],
                  [
                    "4. bake",
                    "запекать (в духовке)",
                    "<strong>Bake</strong> the cake at 180°C.",
                  ],
                  [
                    "5. roast",
                    "запекать (мясо/овощи)",
                    "<strong>Roast</strong> the chicken for an hour.",
                  ],
                  [
                    "6. grill / barbecue",
                    "жарить на гриле",
                    "<strong>Grill</strong> the steak medium-rare.",
                  ],
                  [
                    "7. steam",
                    "готовить на пару",
                    "<strong>Steam</strong> the vegetables to keep nutrients.",
                  ],
                  [
                    "8. simmer",
                    "томить (на медленном огне)",
                    "<strong>Simmer</strong> the soup for 30 minutes.",
                  ],
                  [
                    "9. sauté",
                    "обжаривать (быстро на сковороде)",
                    "<strong>Sauté</strong> the onions until golden.",
                  ],
                  [
                    "10. stir-fry",
                    "жарить с помешиванием (по-азиатски)",
                    "<strong>Stir-fry</strong> the vegetables in a wok.",
                  ],
                  [
                    "11. deep-fry",
                    "жарить во фритюре",
                    "<strong>Deep-fry</strong> the chicken wings.",
                  ],
                  [
                    "12. poach",
                    "варить (яйца/рыбу в воде)",
                    "<strong>Poach</strong> the eggs for breakfast.",
                  ],
                  [
                    "13. blanch",
                    "бланшировать",
                    "<strong>Blanch</strong> the tomatoes before peeling.",
                  ],
                  [
                    "14. marinate",
                    "мариновать",
                    "<strong>Marinate</strong> the meat overnight.",
                  ],
                  [
                    "15. microwave",
                    "разогреть в микроволновке",
                    "<strong>Microwave</strong> the leftovers.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-red-50 to-pink-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="🥕 Ingredients & Food Types">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🛒 Ингредиенты и типы продуктов
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. ingredient",
                    "ингредиент",
                    "The <strong>ingredients</strong> are listed in the recipe.",
                  ],
                  [
                    "2. fresh / stale",
                    "свежий / несвежий",
                    "Buy <strong>fresh</strong> vegetables.",
                  ],
                  [
                    "3. organic",
                    "органический",
                    "<strong>Organic</strong> food is healthier.",
                  ],
                  [
                    "4. processed food",
                    "обработанная еда",
                    "Avoid <strong>processed food</strong>.",
                  ],
                  [
                    "5. raw / cooked",
                    "сырой / приготовленный",
                    "I prefer <strong>raw</strong> carrots.",
                  ],
                  [
                    "6. frozen",
                    "замороженный",
                    "<strong>Frozen</strong> vegetables are convenient.",
                  ],
                  [
                    "7. canned",
                    "консервированный",
                    "<strong>Canned</strong> beans save time.",
                  ],
                  [
                    "8. leftover",
                    "остатки еды",
                    "We ate <strong>leftovers</strong> for lunch.",
                  ],
                  [
                    "9. spice / herb",
                    "специя / трава",
                    "Add <strong>spices</strong> for flavor.",
                  ],
                  [
                    "10. seasoning",
                    "приправа",
                    "Salt is a basic <strong>seasoning</strong>.",
                  ],
                  [
                    "11. protein",
                    "белок",
                    "Chicken is a good source of <strong>protein</strong>.",
                  ],
                  [
                    "12. carbohydrate / carbs",
                    "углевод",
                    "Pasta is high in <strong>carbs</strong>.",
                  ],
                  [
                    "13. vegetarian / vegan",
                    "вегетарианский / веганский",
                    "She follows a <strong>vegan</strong> diet.",
                  ],
                  [
                    "14. dairy / dairy-free",
                    "молочные продукты / безмолочный",
                    "He's allergic to <strong>dairy</strong>.",
                  ],
                  [
                    "15. gluten-free",
                    "безглютеновый",
                    "<strong>Gluten-free</strong> bread is available.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="😋 Taste & Texture">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-2 border-yellow-300 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              👅 Вкус и текстура
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. delicious / tasty",
                    "вкусный",
                    "This pizza is <strong>delicious</strong>!",
                  ],
                  [
                    "2. bland / tasteless",
                    "пресный / безвкусный",
                    "The soup is too <strong>bland</strong>.",
                  ],
                  [
                    "3. spicy / hot",
                    "острый",
                    "Thai food is very <strong>spicy</strong>.",
                  ],
                  [
                    "4. sweet / sugary",
                    "сладкий",
                    "The cake is too <strong>sweet</strong>.",
                  ],
                  [
                    "5. salty",
                    "солёный",
                    "French fries are <strong>salty</strong>.",
                  ],
                  ["6. sour", "кислый", "Lemons taste <strong>sour</strong>."],
                  [
                    "7. bitter",
                    "горький",
                    "Dark chocolate is <strong>bitter</strong>.",
                  ],
                  [
                    "8. savory / umami",
                    "пикантный / умами",
                    "Mushrooms have a <strong>savory</strong> taste.",
                  ],
                  [
                    "9. crispy / crunchy",
                    "хрустящий",
                    "The bread is perfectly <strong>crispy</strong>.",
                  ],
                  [
                    "10. tender / soft",
                    "нежный / мягкий",
                    "The meat is <strong>tender</strong>.",
                  ],
                  [
                    "11. juicy",
                    "сочный",
                    "The steak is <strong>juicy</strong>.",
                  ],
                  [
                    "12. chewy",
                    "жевательный",
                    "The caramel is <strong>chewy</strong>.",
                  ],
                  [
                    "13. creamy",
                    "кремовый",
                    "The sauce is <strong>creamy</strong>.",
                  ],
                  [
                    "14. greasy / oily",
                    "жирный",
                    "Fast food is <strong>greasy</strong>.",
                  ],
                  [
                    "15. rich / heavy",
                    "насыщенный / тяжёлый",
                    "The dessert is too <strong>rich</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="🔪 Food Preparation">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              ✂️ Подготовка продуктов
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. chop / cut",
                    "рубить / резать",
                    "<strong>Chop</strong> the onions finely.",
                  ],
                  [
                    "2. slice",
                    "нарезать ломтиками",
                    "<strong>Slice</strong> the bread.",
                  ],
                  [
                    "3. dice",
                    "нарезать кубиками",
                    "<strong>Dice</strong> the tomatoes.",
                  ],
                  [
                    "4. mince / grind",
                    "измельчать / молоть",
                    "<strong>Mince</strong> the garlic.",
                  ],
                  [
                    "5. peel",
                    "чистить / очищать",
                    "<strong>Peel</strong> the potatoes.",
                  ],
                  [
                    "6. grate",
                    "тереть на тёрке",
                    "<strong>Grate</strong> the cheese.",
                  ],
                  [
                    "7. stir / mix",
                    "помешивать / смешивать",
                    "<strong>Stir</strong> the sauce constantly.",
                  ],
                  [
                    "8. whisk / beat",
                    "взбивать",
                    "<strong>Whisk</strong> the eggs.",
                  ],
                  [
                    "9. knead",
                    "месить (тесто)",
                    "<strong>Knead</strong> the dough.",
                  ],
                  [
                    "10. pour",
                    "наливать",
                    "<strong>Pour</strong> the milk slowly.",
                  ],
                  [
                    "11. drain",
                    "сливать воду",
                    "<strong>Drain</strong> the pasta.",
                  ],
                  [
                    "12. squeeze",
                    "выжимать",
                    "<strong>Squeeze</strong> the lemon.",
                  ],
                  [
                    "13. season / add seasoning",
                    "приправлять",
                    "<strong>Season</strong> with salt and pepper.",
                  ],
                  [
                    "14. garnish",
                    "украшать (блюдо)",
                    "<strong>Garnish</strong> with fresh herbs.",
                  ],
                  [
                    "15. taste / sample",
                    "пробовать",
                    "<strong>Taste</strong> before serving.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="🍳 Kitchen Equipment">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🔧 Кухонная утварь
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. stove / cooker",
                    "плита",
                    "Turn on the <strong>stove</strong>.",
                  ],
                  ["2. oven", "духовка", "Preheat the <strong>oven</strong>."],
                  [
                    "3. microwave",
                    "микроволновка",
                    "Heat it in the <strong>microwave</strong>.",
                  ],
                  [
                    "4. fridge / refrigerator",
                    "холодильник",
                    "Put milk in the <strong>fridge</strong>.",
                  ],
                  [
                    "5. freezer",
                    "морозилка",
                    "Store ice cream in the <strong>freezer</strong>.",
                  ],
                  [
                    "6. pan / frying pan",
                    "сковорода",
                    "Heat oil in a <strong>pan</strong>.",
                  ],
                  [
                    "7. pot / saucepan",
                    "кастрюля",
                    "Boil water in a <strong>pot</strong>.",
                  ],
                  [
                    "8. wok",
                    "вок (азиатская сковорода)",
                    "Use a <strong>wok</strong> for stir-frying.",
                  ],
                  ["9. knife", "нож", "Use a sharp <strong>knife</strong>."],
                  [
                    "10. cutting board",
                    "разделочная доска",
                    "Chop on a <strong>cutting board</strong>.",
                  ],
                  [
                    "11. mixing bowl",
                    "миска для смешивания",
                    "Put ingredients in a <strong>mixing bowl</strong>.",
                  ],
                  [
                    "12. whisk",
                    "венчик",
                    "Beat eggs with a <strong>whisk</strong>.",
                  ],
                  [
                    "13. spatula",
                    "лопатка",
                    "Flip the pancake with a <strong>spatula</strong>.",
                  ],
                  [
                    "14. grater",
                    "тёрка",
                    "Grate cheese with a <strong>grater</strong>.",
                  ],
                  [
                    "15. measuring cup / spoon",
                    "мерный стакан / ложка",
                    "Use a <strong>measuring cup</strong> for accuracy.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="📝 Recipe Instructions">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              📖 Рецепты и инструкции
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. recipe",
                    "рецепт",
                    "Follow the <strong>recipe</strong> carefully.",
                  ],
                  [
                    "2. instruction / step",
                    "инструкция / шаг",
                    "Read all <strong>instructions</strong> first.",
                  ],
                  [
                    "3. serving / portion",
                    "порция",
                    "This recipe makes 4 <strong>servings</strong>.",
                  ],
                  [
                    "4. measurement",
                    "измерение",
                    "Use precise <strong>measurements</strong>.",
                  ],
                  [
                    "5. preheat",
                    "предварительно разогреть",
                    "<strong>Preheat</strong> the oven to 180°C.",
                  ],
                  [
                    "6. add",
                    "добавить",
                    "<strong>Add</strong> sugar gradually.",
                  ],
                  [
                    "7. combine / mix together",
                    "соединить / смешать вместе",
                    "<strong>Combine</strong> all ingredients.",
                  ],
                  [
                    "8. bring to a boil",
                    "довести до кипения",
                    "<strong>Bring to a boil</strong> then reduce heat.",
                  ],
                  [
                    "9. reduce heat",
                    "уменьшить огонь",
                    "<strong>Reduce heat</strong> and simmer.",
                  ],
                  [
                    "10. cover / uncover",
                    "накрыть / открыть (крышку)",
                    "<strong>Cover</strong> and cook for 20 minutes.",
                  ],
                  [
                    "11. let it sit / rest",
                    "дать постоять",
                    "<strong>Let it rest</strong> before serving.",
                  ],
                  [
                    "12. serve hot / cold",
                    "подавать горячим / холодным",
                    "<strong>Serve hot</strong> with rice.",
                  ],
                  [
                    "13. undercooked / overcooked",
                    "недоваренный / переваренный",
                    "The pasta is <strong>overcooked</strong>.",
                  ],
                  [
                    "14. done / ready",
                    "готово",
                    "The meat is <strong>done</strong>.",
                  ],
                  [
                    "15. golden-brown",
                    "золотисто-коричневый",
                    "Fry until <strong>golden-brown</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="🍽️ Eating Out & Dining">
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-lg p-6 border-2 border-rose-300 mb-6">
            <h3 className="text-2xl font-bold text-rose-900 mb-4">
              🍴 Еда вне дома
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. restaurant / café",
                    "ресторан / кафе",
                    "Let's eat at that <strong>restaurant</strong>.",
                  ],
                  ["2. menu", "меню", "Can I see the <strong>menu</strong>?"],
                  [
                    "3. order / place an order",
                    "заказать",
                    "I'd like to <strong>order</strong> a pizza.",
                  ],
                  [
                    "4. main course / entrée",
                    "основное блюдо",
                    "What's your <strong>main course</strong>?",
                  ],
                  [
                    "5. appetizer / starter",
                    "закуска",
                    "We'll have soup as an <strong>appetizer</strong>.",
                  ],
                  [
                    "6. dessert",
                    "десерт",
                    "Save room for <strong>dessert</strong>!",
                  ],
                  [
                    "7. side dish",
                    "гарнир",
                    "Fries are a popular <strong>side dish</strong>.",
                  ],
                  [
                    "8. beverage / drink",
                    "напиток",
                    "What <strong>beverage</strong> would you like?",
                  ],
                  [
                    "9. waiter / waitress",
                    "официант / официантка",
                    "The <strong>waiter</strong> was very polite.",
                  ],
                  [
                    "10. bill / check",
                    "счёт",
                    "Can we have the <strong>bill</strong>, please?",
                  ],
                  ["11. tip", "чаевые", "Leave a 15% <strong>tip</strong>."],
                  [
                    "12. reservation / book a table",
                    "бронирование / забронировать столик",
                    "I made a <strong>reservation</strong> for 7 PM.",
                  ],
                  [
                    "13. take-out / take-away",
                    "еда на вынос",
                    "Let's get <strong>take-out</strong>.",
                  ],
                  [
                    "14. delivery",
                    "доставка",
                    "Order <strong>delivery</strong> online.",
                  ],
                  [
                    "15. specialty / signature dish",
                    "фирменное блюдо",
                    "Try their <strong>specialty</strong> pasta.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-rose-50 to-red-50 rounded p-3"
                  >
                    <h4 className="font-bold text-sm mb-1">{term}</h4>
                    <p className="text-xs text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-xs italic"
                      dangerouslySetInnerHTML={{ __html: example }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="👨‍🍳 Reading: Perfect Pasta Recipe">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 border-2 border-orange-300 mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              🍝 Текст: Идеальная паста
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-orange-200 mb-4">
              <h4 className="text-xl font-bold text-orange-800 mb-3">
                How to Make Perfect Spaghetti Carbonara
              </h4>

              <p className="text-base leading-relaxed mb-4">
                Spaghetti Carbonara is a classic Italian dish that's{" "}
                <strong>creamy</strong>, <strong>rich</strong>, and surprisingly
                simple. Many people <strong>overcook</strong> the pasta or make
                the sauce too <strong>greasy</strong>, but with the right{" "}
                <strong>technique</strong>, you can create restaurant-quality
                Carbonara at home.
              </p>

              <div className="bg-orange-50 rounded-lg p-4 mb-4 border border-orange-200">
                <h5 className="font-bold text-lg text-orange-900 mb-2">
                  🛒 Ingredients (4 servings):
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    400g <strong>spaghetti</strong>
                  </li>
                  <li>
                    200g <strong>pancetta</strong> or bacon, diced
                  </li>
                  <li>
                    4 large eggs (<strong>organic</strong> if possible)
                  </li>
                  <li>
                    100g Parmesan cheese, <strong>grated</strong>
                  </li>
                  <li>
                    Black pepper, <strong>freshly</strong> ground
                  </li>
                  <li>Salt for the pasta water</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h5 className="font-bold text-lg text-blue-900 mb-2">
                  📖 Instructions:
                </h5>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Boil</strong> a large pot of salted water.{" "}
                    <strong>Add</strong> the spaghetti and cook according to
                    package instructions (usually 8-10 minutes). The pasta
                    should be <strong>al dente</strong> — firm but not{" "}
                    <strong>undercooked</strong>.
                  </li>
                  <li>
                    While the pasta cooks, <strong>dice</strong> the pancetta
                    into small cubes. In a <strong>frying pan</strong>,{" "}
                    <strong>fry</strong> the pancetta over medium heat until{" "}
                    <strong>crispy</strong> and <strong>golden-brown</strong>.
                    Don't add oil — the pancetta has enough fat.
                  </li>
                  <li>
                    In a <strong>mixing bowl</strong>, <strong>whisk</strong>{" "}
                    together the eggs, <strong>grated</strong> Parmesan, and a
                    generous amount of black pepper. The mixture should be{" "}
                    <strong>creamy</strong>.
                  </li>
                  <li>
                    When the pasta is done, <strong>drain</strong> it BUT save
                    one cup of the starchy pasta water. This is crucial!
                  </li>
                  <li>
                    <strong>Turn off</strong> the heat under the pancetta. Add
                    the hot, drained pasta directly to the pan with pancetta and{" "}
                    <strong>toss</strong> to <strong>combine</strong>.
                  </li>
                  <li>
                    <strong>Pour</strong> the egg mixture over the pasta and{" "}
                    <strong>stir</strong> quickly. The heat from the pasta will
                    cook the eggs gently, creating a <strong>creamy</strong>{" "}
                    sauce. If it's too thick, add some reserved pasta water. If
                    the heat is too high, you'll get scrambled eggs — not what
                    we want!
                  </li>
                  <li>
                    <strong>Season</strong> with more black pepper and{" "}
                    <strong>garnish</strong> with extra Parmesan.{" "}
                    <strong>Serve immediately</strong> while hot.
                  </li>
                </ol>
              </div>

              <p className="text-base leading-relaxed mb-4">
                <strong className="text-red-600">⚠️ Common Mistakes:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>
                  <strong>Overcooking</strong> the pasta — it should be firm!
                </li>
                <li>
                  Adding the eggs when the pan is too hot — you'll get scrambled
                  eggs instead of a <strong>creamy</strong> sauce.
                </li>
                <li>
                  Using cream — traditional Carbonara has NO cream! The{" "}
                  <strong>creaminess</strong> comes from eggs and cheese only.
                </li>
                <li>
                  Not <strong>seasoning</strong> enough — black pepper is
                  essential!
                </li>
              </ul>

              <p className="text-base leading-relaxed">
                <strong className="text-green-600">💡 Pro Tips:</strong> For the
                best flavor, use <strong>organic</strong> eggs and{" "}
                <strong>freshly grated</strong> Parmesan, not the pre-grated
                kind from a can. <strong>Taste</strong> as you go and adjust{" "}
                <strong>seasoning</strong>. The result should be{" "}
                <strong>savory</strong>, <strong>rich</strong>, and absolutely{" "}
                <strong>delicious</strong>! Enjoy your perfect Carbonara! 🍝✨
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What are the main ingredients?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Spaghetti, pancetta/bacon, eggs, Parmesan cheese, black
                    pepper.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. Why should you save pasta water?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → To adjust the sauce consistency if it's too thick.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What's the biggest mistake people make?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Adding the eggs when the pan is too hot, creating
                    scrambled eggs instead of creamy sauce.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. Does traditional Carbonara contain cream?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → No! The creaminess comes from eggs and cheese only.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. How should the pasta be cooked?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Al dente — firm but not undercooked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    return (
      <>
        <Section title="📝 Practice Exercises">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              ✍️ Упражнение: Fill in the Blanks
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Complete the sentences with food & cooking vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. Please",
                    answers: ["chop", "cut", "dice"],
                    right: "the onions into small pieces.",
                    wide: true,
                  },
                  {
                    left: "2. The soup is too",
                    answers: ["bland", "tasteless"],
                    right: "— add more salt.",
                    wide: true,
                  },
                  {
                    left: "3.",
                    answers: ["Preheat"],
                    right: "the oven to 180 degrees.",
                    wide: true,
                  },
                  {
                    left: "4. I prefer",
                    answers: ["organic"],
                    right: "vegetables — they're healthier.",
                    wide: true,
                  },
                  {
                    left: "5. The meat is",
                    answers: ["overcooked"],
                    right: "— it's too dry.",
                    wide: true,
                  },
                  {
                    left: "6. This curry is very",
                    answers: ["spicy", "hot"],
                    right: "— I can't eat it!",
                    wide: true,
                  },
                ]}
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="📚 Complete Vocabulary (150+ Words)">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              🎓 Полный список: 150+ слов
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  🔥 Cooking Methods (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• cook</li>
                  <li>• boil</li>
                  <li>• fry</li>
                  <li>• bake / roast</li>
                  <li>• grill / barbecue</li>
                  <li>• steam</li>
                  <li>• simmer</li>
                  <li>• sauté</li>
                  <li>• stir-fry</li>
                  <li>• deep-fry</li>
                  <li>• poach</li>
                  <li>• blanch</li>
                  <li>• marinate</li>
                  <li>• microwave</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🥕 Ingredients (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• ingredient</li>
                  <li>• fresh / stale</li>
                  <li>• organic</li>
                  <li>• processed food</li>
                  <li>• raw / cooked</li>
                  <li>• frozen / canned</li>
                  <li>• leftover</li>
                  <li>• spice / herb</li>
                  <li>• seasoning</li>
                  <li>• protein</li>
                  <li>• carbohydrate / carbs</li>
                  <li>• vegetarian / vegan</li>
                  <li>• dairy / dairy-free</li>
                  <li>• gluten-free</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  😋 Taste & Texture (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• delicious / tasty</li>
                  <li>• bland / tasteless</li>
                  <li>• spicy / hot</li>
                  <li>• sweet / sugary</li>
                  <li>• salty / sour</li>
                  <li>• bitter</li>
                  <li>• savory / umami</li>
                  <li>• crispy / crunchy</li>
                  <li>• tender / soft</li>
                  <li>• juicy</li>
                  <li>• chewy</li>
                  <li>• creamy</li>
                  <li>• greasy / oily</li>
                  <li>• rich / heavy</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <h4 className="font-bold text-lg text-blue-900 mb-2">
                  🔪 Preparation (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• chop / cut</li>
                  <li>• slice / dice</li>
                  <li>• mince / grind</li>
                  <li>• peel</li>
                  <li>• grate</li>
                  <li>• stir / mix</li>
                  <li>• whisk / beat</li>
                  <li>• knead</li>
                  <li>• pour / drain</li>
                  <li>• squeeze</li>
                  <li>• season</li>
                  <li>• garnish</li>
                  <li>• taste / sample</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  🍳 Equipment (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• stove / oven</li>
                  <li>• microwave</li>
                  <li>• fridge / freezer</li>
                  <li>• pan / frying pan</li>
                  <li>• pot / saucepan</li>
                  <li>• wok</li>
                  <li>• knife</li>
                  <li>• cutting board</li>
                  <li>• mixing bowl</li>
                  <li>• whisk</li>
                  <li>• spatula</li>
                  <li>• grater</li>
                  <li>• measuring cup / spoon</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  📝 Recipes (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• recipe</li>
                  <li>• instruction / step</li>
                  <li>• serving / portion</li>
                  <li>• measurement</li>
                  <li>• preheat</li>
                  <li>• add / combine</li>
                  <li>• bring to a boil</li>
                  <li>• reduce heat</li>
                  <li>• cover / uncover</li>
                  <li>• let it rest</li>
                  <li>• serve hot / cold</li>
                  <li>• undercooked / overcooked</li>
                  <li>• done / ready</li>
                  <li>• golden-brown</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-rose-300">
                <h4 className="font-bold text-lg text-rose-900 mb-2">
                  🍽️ Eating Out (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• restaurant / café</li>
                  <li>• menu / order</li>
                  <li>• main course / entrée</li>
                  <li>• appetizer / starter</li>
                  <li>• dessert / side dish</li>
                  <li>• beverage / drink</li>
                  <li>• waiter / waitress</li>
                  <li>• bill / check / tip</li>
                  <li>• reservation</li>
                  <li>• take-out / take-away</li>
                  <li>• delivery</li>
                  <li>• specialty dish</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  ➕ Additional (45+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• dish / meal</li>
                  <li>• cuisine</li>
                  <li>• homemade</li>
                  <li>• fast food / junk food</li>
                  <li>• healthy / unhealthy</li>
                  <li>• nutritious</li>
                  <li>• calorie</li>
                  <li>• diet</li>
                  <li>• allergy / allergic</li>
                  <li>• edible / inedible</li>
                  <li>• spoiled / rotten</li>
                  <li>• expiration date</li>
                  <li>• portion control</li>
                  <li>• comfort food</li>
                  <li>• acquired taste</li>
                  <li>• appetizing</li>
                  <li>• mouthwatering</li>
                  <li>• filling / satisfying</li>
                  <li>• light / heavy</li>
                  <li>• balanced meal</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 mt-6 border-2 border-orange-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-orange-900">150+</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-red-900">1</p>
                  <p className="text-sm text-gray-700">Recipe</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">1</p>
                  <p className="text-sm text-gray-700">Exercise</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  👨‍🍳 <strong>Congratulations!</strong> You've mastered 150+
                  essential Food & Cooking vocabulary words! From cooking
                  methods and ingredients to recipes and dining out — you're now
                  ready to cook, order, and talk about food like a pro! Bon
                  appétit! 🍽️✨
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Step {step} not found</div>;
}


