"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function FashionAppearance({
  step,
  lessonKey,
}: {
  step: number;
  lessonKey: string;
}) {
  if (step === 1) {
    return (
      <>
        <Section title="👗 Introduction + Clothing & Styles">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border-2 border-pink-300 mb-6">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">
              👔 Fashion & Appearance — Мода и внешность
            </h3>

            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-pink-200">
              <p className="text-base leading-relaxed mb-3">
                Fashion is not just about following trends — it's about
                expressing yourself and feeling comfortable in your own skin! In
                today's world, <strong>personal style</strong> matters more than
                ever. Whether you prefer <strong>casual</strong> comfort or{" "}
                <strong>formal</strong> elegance, the key is finding what{" "}
                <strong>suits</strong> you and makes you feel confident.
              </p>
              <p className="text-base leading-relaxed">
                In this lesson, we'll explore clothing vocabulary, style
                descriptions, colors, patterns, and most importantly — how to
                balance fashion with <strong>comfort</strong>. Because looking
                good should never mean sacrificing how you feel! 👗✨
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 border-2 border-purple-300">
              <h4 className="font-bold text-lg text-purple-900 mb-2">
                💡 Modern Fashion Philosophy:
              </h4>
              <ul className="text-sm space-y-1">
                <li>✅ Comfort comes first!</li>
                <li>✅ Personal style &gt; Following trends blindly</li>
                <li>✅ Quality over quantity</li>
                <li>✅ Sustainable and ethical fashion</li>
                <li>✅ Confidence is the best accessory</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              👕 Clothing Items — Одежда
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. shirt / blouse",
                    "рубашка / блузка",
                    "A <strong>cotton shirt</strong> is comfortable.",
                  ],
                  [
                    "2. T-shirt / top",
                    "футболка / топ",
                    "I wear a <strong>T-shirt</strong> every day.",
                  ],
                  [
                    "3. sweater / jumper",
                    "свитер / джемпер",
                    "This <strong>sweater</strong> is so cozy!",
                  ],
                  [
                    "4. hoodie",
                    "худи",
                    "A <strong>hoodie</strong> is perfect for casual days.",
                  ],
                  [
                    "5. jacket / coat",
                    "куртка / пальто",
                    "Wear a warm <strong>coat</strong> in winter.",
                  ],
                  [
                    "6. jeans / trousers / pants",
                    "джинсы / брюки",
                    "<strong>Jeans</strong> never go out of style.",
                  ],
                  [
                    "7. shorts / skirt",
                    "шорты / юбка",
                    "She's wearing a <strong>skirt</strong>.",
                  ],
                  [
                    "8. dress",
                    "платье",
                    "A simple <strong>dress</strong> is elegant.",
                  ],
                  [
                    "9. suit",
                    "костюм",
                    "He wore a <strong>suit</strong> to the interview.",
                  ],
                  [
                    "10. tie / bow tie",
                    "галстук / бабочка",
                    "A <strong>tie</strong> makes you look professional.",
                  ],
                  [
                    "11. shoes / sneakers",
                    "обувь / кроссовки",
                    "<strong>Sneakers</strong> are comfortable.",
                  ],
                  [
                    "12. boots / heels",
                    "ботинки / каблуки",
                    "She loves wearing <strong>heels</strong>.",
                  ],
                  [
                    "13. socks / tights",
                    "носки / колготки",
                    "Put on warm <strong>socks</strong>.",
                  ],
                  [
                    "14. underwear / lingerie",
                    "нижнее бельё",
                    "Comfortable <strong>underwear</strong> matters.",
                  ],
                  [
                    "15. scarf / gloves / hat",
                    "шарф / перчатки / шапка",
                    "Wear a <strong>scarf</strong> when it's cold.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded p-3"
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
        <Section title="🎨 Fashion Styles & Adjectives">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              ✨ Описание стиля
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. casual",
                    "повседневный / неформальный",
                    "I prefer <strong>casual</strong> clothes.",
                  ],
                  [
                    "2. formal / smart",
                    "официальный / элегантный",
                    "Wear something <strong>formal</strong> to the wedding.",
                  ],
                  [
                    "3. trendy / fashionable",
                    "модный / стильный",
                    "She always wears <strong>trendy</strong> outfits.",
                  ],
                  [
                    "4. stylish / chic",
                    "стильный / шикарный",
                    "That coat is so <strong>stylish</strong>!",
                  ],
                  [
                    "5. elegant / classy",
                    "элегантный / изысканный",
                    "An <strong>elegant</strong> dress for the gala.",
                  ],
                  [
                    "6. comfortable / cozy",
                    "удобный / уютный",
                    "These jeans are <strong>comfortable</strong>.",
                  ],
                  [
                    "7. scruffy / messy",
                    "неряшливый / неопрятный",
                    "He looks <strong>scruffy</strong> today.",
                  ],
                  [
                    "8. smart-casual",
                    "деловой-неформальный",
                    "The dress code is <strong>smart-casual</strong>.",
                  ],
                  [
                    "9. vintage / retro",
                    "винтажный / ретро",
                    "She loves <strong>vintage</strong> fashion.",
                  ],
                  [
                    "10. minimalist",
                    "минималистичный",
                    "A <strong>minimalist</strong> wardrobe is timeless.",
                  ],
                  [
                    "11. baggy / loose",
                    "мешковатый / свободный",
                    "<strong>Baggy</strong> jeans are comfortable.",
                  ],
                  [
                    "12. tight / fitted",
                    "обтягивающий / по фигуре",
                    "This shirt is too <strong>tight</strong>.",
                  ],
                  [
                    "13. oversized",
                    "очень большой / оверсайз",
                    "I love <strong>oversized</strong> hoodies.",
                  ],
                  [
                    "14. tacky / gaudy",
                    "безвкусный / вульгарный",
                    "That outfit is <strong>tacky</strong>.",
                  ],
                  [
                    "15. outdated / old-fashioned",
                    "устаревший / немодный",
                    "That style is <strong>outdated</strong>.",
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

  if (step === 3) {
    return (
      <>
        <Section title="👤 Physical Appearance">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300 mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              🙋 Описание внешности
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. attractive / good-looking",
                    "привлекательный",
                    "She's very <strong>attractive</strong>.",
                  ],
                  [
                    "2. handsome / beautiful",
                    "красивый (м) / красивая (ж)",
                    "He's <strong>handsome</strong>.",
                  ],
                  [
                    "3. pretty / cute",
                    "симпатичная / милый",
                    "What a <strong>cute</strong> baby!",
                  ],
                  [
                    "4. tall / short",
                    "высокий / низкий",
                    "He's very <strong>tall</strong>.",
                  ],
                  [
                    "5. slim / skinny",
                    "стройный / худой",
                    "She's <strong>slim</strong> and fit.",
                  ],
                  [
                    "6. overweight / chubby",
                    "с лишним весом / пухлый",
                    "Don't call people <strong>overweight</strong>.",
                  ],
                  [
                    "7. fit / athletic",
                    "в форме / спортивный",
                    "He looks <strong>fit</strong>.",
                  ],
                  [
                    "8. muscular / toned",
                    "мускулистый / подтянутый",
                    "She's <strong>toned</strong> from working out.",
                  ],
                  [
                    "9. well-dressed / well-groomed",
                    "хорошо одетый / ухоженный",
                    "He's always <strong>well-dressed</strong>.",
                  ],
                  [
                    "10. scruffy / unkempt",
                    "неопрятный / неухоженный",
                    "He looks <strong>scruffy</strong> today.",
                  ],
                  [
                    "11. blonde / brunette / redhead",
                    "блондин(ка) / брюнет(ка) / рыжий",
                    "She's a natural <strong>blonde</strong>.",
                  ],
                  [
                    "12. long hair / short hair",
                    "длинные / короткие волосы",
                    "He has <strong>short hair</strong>.",
                  ],
                  [
                    "13. curly / straight / wavy",
                    "кудрявые / прямые / волнистые",
                    "She has <strong>curly</strong> hair.",
                  ],
                  [
                    "14. bald / balding",
                    "лысый / лысеющий",
                    "He's going <strong>bald</strong>.",
                  ],
                  [
                    "15. beard / mustache",
                    "борода / усы",
                    "He grew a <strong>beard</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 rounded p-3"
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
        <Section title="🎨 Colors, Patterns & Materials">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🌈 Цвета и узоры
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. plain / solid color",
                    "однотонный",
                    "A <strong>plain</strong> white shirt.",
                  ],
                  [
                    "2. striped",
                    "в полоску",
                    "A <strong>striped</strong> T-shirt.",
                  ],
                  [
                    "3. checked / plaid",
                    "в клетку",
                    "A <strong>checked</strong> shirt.",
                  ],
                  [
                    "4. spotted / dotted",
                    "в горошек",
                    "A <strong>dotted</strong> dress.",
                  ],
                  [
                    "5. floral / flowery",
                    "с цветочным принтом",
                    "A <strong>floral</strong> pattern.",
                  ],
                  [
                    "6. patterned / printed",
                    "с узором / принтом",
                    "A <strong>patterned</strong> blouse.",
                  ],
                  [
                    "7. bright / vibrant",
                    "яркий",
                    "<strong>Bright</strong> colors stand out.",
                  ],
                  [
                    "8. dark / dull",
                    "тёмный / тусклый",
                    "<strong>Dark</strong> clothes are slimming.",
                  ],
                  [
                    "9. neutral / pastel",
                    "нейтральный / пастельный",
                    "<strong>Neutral</strong> tones are versatile.",
                  ],
                  [
                    "10. cotton",
                    "хлопок",
                    "<strong>Cotton</strong> is breathable.",
                  ],
                  [
                    "11. wool / cashmere",
                    "шерсть / кашемир",
                    "<strong>Wool</strong> is warm.",
                  ],
                  [
                    "12. silk / satin",
                    "шёлк / атлас",
                    "<strong>Silk</strong> feels luxurious.",
                  ],
                  [
                    "13. leather / suede",
                    "кожа / замша",
                    "A <strong>leather</strong> jacket.",
                  ],
                  [
                    "14. denim",
                    "джинсовая ткань",
                    "<strong>Denim</strong> jeans are durable.",
                  ],
                  [
                    "15. synthetic / polyester",
                    "синтетика / полиэстер",
                    "Avoid <strong>synthetic</strong> fabrics.",
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

  if (step === 5) {
    return (
      <>
        <Section title="💍 Accessories & Details">
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-lg p-6 border-2 border-rose-300 mb-6">
            <h3 className="text-2xl font-bold text-rose-900 mb-4">
              ✨ Аксессуары
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-rose-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. jewelry / jewellery",
                    "украшения",
                    "She loves <strong>jewelry</strong>.",
                  ],
                  [
                    "2. necklace / bracelet",
                    "ожерелье / браслет",
                    "A gold <strong>necklace</strong>.",
                  ],
                  [
                    "3. earrings / ring",
                    "серьги / кольцо",
                    "Diamond <strong>earrings</strong>.",
                  ],
                  ["4. watch", "часы", "A stylish <strong>watch</strong>."],
                  ["5. belt", "ремень", "A leather <strong>belt</strong>."],
                  [
                    "6. bag / handbag",
                    "сумка / дамская сумочка",
                    "A designer <strong>handbag</strong>.",
                  ],
                  [
                    "7. backpack",
                    "рюкзак",
                    "A comfortable <strong>backpack</strong>.",
                  ],
                  [
                    "8. sunglasses",
                    "солнцезащитные очки",
                    "Cool <strong>sunglasses</strong>.",
                  ],
                  [
                    "9. glasses / spectacles",
                    "очки",
                    "I need new <strong>glasses</strong>.",
                  ],
                  [
                    "10. cap / hat",
                    "кепка / шляпа",
                    "A baseball <strong>cap</strong>.",
                  ],
                  ["11. scarf", "шарф", "A warm <strong>scarf</strong>."],
                  [
                    "12. gloves",
                    "перчатки",
                    "Leather <strong>gloves</strong>.",
                  ],
                  [
                    "13. wallet / purse",
                    "бумажник / кошелёк",
                    "I lost my <strong>wallet</strong>.",
                  ],
                  [
                    "14. makeup / cosmetics",
                    "макияж / косметика",
                    "She wears minimal <strong>makeup</strong>.",
                  ],
                  [
                    "15. perfume / cologne",
                    "духи / одеколон",
                    "Expensive <strong>perfume</strong>.",
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

  if (step === 6) {
    return (
      <>
        <Section title="🛍️ Shopping & Verbs">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              👗 Покупки и глаголы
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. wear / put on",
                    "носить / надевать",
                    "I <strong>wear</strong> jeans every day.",
                  ],
                  [
                    "2. take off / remove",
                    "снимать",
                    "<strong>Take off</strong> your shoes.",
                  ],
                  [
                    "3. try on",
                    "примерять",
                    "Can I <strong>try on</strong> this dress?",
                  ],
                  [
                    "4. fit / suit",
                    "подходить по размеру / идти",
                    "This jacket <strong>fits</strong> perfectly.",
                  ],
                  [
                    "5. match / go with",
                    "сочетаться / подходить к",
                    "These shoes <strong>match</strong> your outfit.",
                  ],
                  [
                    "6. look good on",
                    "идти кому-то",
                    "That color <strong>looks good on</strong> you.",
                  ],
                  [
                    "7. get dressed / dress up",
                    "одеваться / наряжаться",
                    "<strong>Get dressed</strong> quickly!",
                  ],
                  [
                    "8. change clothes",
                    "переодеваться",
                    "I need to <strong>change clothes</strong>.",
                  ],
                  [
                    "9. wash / dry-clean",
                    "стирать / отдать в химчистку",
                    "<strong>Dry-clean</strong> this suit.",
                  ],
                  ["10. iron", "гладить", "<strong>Iron</strong> your shirt."],
                  [
                    "11. fold",
                    "складывать",
                    "<strong>Fold</strong> your clothes neatly.",
                  ],
                  [
                    "12. shop / browse",
                    "делать покупки / смотреть",
                    "Let's <strong>shop</strong> for clothes.",
                  ],
                  [
                    "13. buy / purchase",
                    "покупать / приобретать",
                    "I want to <strong>buy</strong> new shoes.",
                  ],
                  [
                    "14. return / exchange",
                    "вернуть / обменять",
                    "Can I <strong>return</strong> this?",
                  ],
                  [
                    "15. on sale / discount",
                    "на распродаже / скидка",
                    "These jeans are <strong>on sale</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded p-3"
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
        <Section title="💭 Fashion Idioms & Expressions">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-2 border-yellow-300 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              🗣️ Идиомы и выражения
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <div className="grid md:grid-cols-1 gap-3">
                {[
                  [
                    "1. Dressed to kill",
                    "Одет(а) на убой / Очень элегантно",
                    "She was <strong>dressed to kill</strong> at the party.",
                  ],
                  [
                    "2. Dressed to the nines",
                    "Очень нарядно одет(а)",
                    "He was <strong>dressed to the nines</strong> for the wedding.",
                  ],
                  [
                    "3. Look like a million dollars",
                    "Выглядеть на миллион",
                    "You <strong>look like a million dollars</strong> today!",
                  ],
                  [
                    "4. Suits you to a T",
                    "Идеально подходит",
                    "That dress <strong>suits you to a T</strong>.",
                  ],
                  [
                    "5. Fashion victim",
                    "Жертва моды (слепо следует трендам)",
                    "Don't be a <strong>fashion victim</strong>.",
                  ],
                  [
                    "6. All the rage",
                    "Последний писк моды",
                    "These shoes are <strong>all the rage</strong> now.",
                  ],
                  [
                    "7. Go out of style",
                    "Выйти из моды",
                    "Bell-bottoms <strong>went out of style</strong>.",
                  ],
                  [
                    "8. In fashion / Out of fashion",
                    "В моде / Не в моде",
                    "Oversized clothes are <strong>in fashion</strong>.",
                  ],
                  [
                    "9. Pull off (an outfit)",
                    "Носить с шиком / Уметь носить",
                    "Not everyone can <strong>pull off</strong> that look.",
                  ],
                  [
                    "10. Clothes make the man",
                    "Одежда красит человека",
                    "Remember: <strong>clothes make the man</strong>.",
                  ],
                  [
                    "11. Fit like a glove",
                    "Сидеть как влитое",
                    "This jacket <strong>fits like a glove</strong>!",
                  ],
                  [
                    "12. Dress for success",
                    "Одеваться для успеха",
                    "Always <strong>dress for success</strong> at work.",
                  ],
                  [
                    "13. Put together (well-dressed)",
                    "Хорошо скоординирован(а)",
                    "She always looks so <strong>put together</strong>.",
                  ],
                  [
                    "14. Throw on (casual)",
                    "Накинуть / Быстро надеть",
                    "I'll just <strong>throw on</strong> a hoodie.",
                  ],
                  [
                    "15. Comfortable in your own skin",
                    "Чувствовать себя комфортно в своей шкуре",
                    "Be <strong>comfortable in your own skin</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded p-4"
                  >
                    <h4 className="font-bold text-base mb-1">{term}</h4>
                    <p className="text-sm text-gray-700 mb-1">{translation}</p>
                    <p
                      className="text-sm italic"
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
        <Section title="📖 Reading: Comfort Over Trends">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border-2 border-teal-300 mb-6">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">
              👗 Текст: Мода и комфорт
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-teal-200 mb-4">
              <h4 className="text-xl font-bold text-teal-800 mb-3">
                From Fashion Victim to Style Icon: Emma's Journey
              </h4>

              <p className="text-base leading-relaxed mb-4">
                Emma used to be a <strong>fashion victim</strong>. Every month,
                she'd spend hundreds of dollars on <strong>trendy</strong>{" "}
                clothes that were <strong>all the rage</strong> on social media.
                She owned dozens of <strong>tight</strong> jeans that cut into
                her waist, <strong>heels</strong> that made her feet bleed, and{" "}
                <strong>synthetic</strong> fabrics that made her sweat. She
                looked <strong>stylish</strong> in photos, but in reality, she
                was miserable.
              </p>

              <p className="text-base leading-relaxed mb-4">
                One day, Emma had enough. She was at a party,{" "}
                <strong>dressed to the nines</strong> in a{" "}
                <strong>fitted</strong> dress and uncomfortable{" "}
                <strong>heels</strong>. While everyone complimented her outfit,
                she couldn't stop thinking about how much she wanted to{" "}
                <strong>take off</strong> those shoes and{" "}
                <strong>change clothes</strong>. Meanwhile, her friend Sarah sat
                comfortably in <strong>casual</strong> <strong>cotton</strong>{" "}
                jeans, an <strong>oversized</strong> <strong>hoodie</strong>,
                and <strong>sneakers</strong> — and she looked confident and
                happy.
              </p>

              <div className="bg-teal-50 rounded-lg p-4 mb-4 border border-teal-200">
                <h5 className="font-bold text-lg text-teal-900 mb-2">
                  💡 The Turning Point:
                </h5>
                <p className="text-sm leading-relaxed mb-2">
                  Emma realized something crucial: <strong>fashion</strong>{" "}
                  should enhance your life, not control it. She started building
                  a <strong>minimalist</strong> wardrobe focused on{" "}
                  <strong>comfort</strong> and <strong>quality</strong> over
                  quantity. Here's what changed:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Materials First:</strong> She replaced{" "}
                    <strong>synthetic</strong> fabrics with breathable{" "}
                    <strong>cotton</strong>, soft <strong>wool</strong>, and
                    natural <strong>linen</strong>. Her skin thanked her.
                  </li>
                  <li>
                    <strong>Fit Matters:</strong> Instead of{" "}
                    <strong>tight</strong> jeans, she bought{" "}
                    <strong>loose</strong> or <strong>fitted</strong> clothes
                    that actually <strong>fit</strong> her body type.
                  </li>
                  <li>
                    <strong>Capsule Wardrobe:</strong> She kept 30 versatile
                    pieces that all <strong>match</strong> and{" "}
                    <strong>go with</strong> each other — mostly in{" "}
                    <strong>neutral</strong> colors like black, white, beige,
                    and navy.
                  </li>
                  <li>
                    <strong>Shoes Revolution:</strong> She donated all her{" "}
                    <strong>heels</strong> and invested in quality{" "}
                    <strong>sneakers</strong>, <strong>boots</strong>, and flat{" "}
                    <strong>shoes</strong>.
                  </li>
                  <li>
                    <strong>Personal Style:</strong> She stopped following every
                    trend and focused on what <strong>suits</strong> her and
                    makes her feel good.
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-4">
                The result? Emma now looks <strong>put together</strong> without
                trying too hard. She can <strong>throw on</strong> any outfit in
                her closet and know it will <strong>look good on</strong> her.
                More importantly, she's <strong>comfortable</strong> all day
                long. She realized that being <strong>well-dressed</strong>{" "}
                doesn't mean sacrificing comfort — it means finding the balance.
              </p>

              <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-200">
                <h5 className="font-bold text-lg text-green-900 mb-2">
                  ✨ Emma's Fashion Rules Now:
                </h5>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Comfort comes first.</strong> If it doesn't feel
                    good, don't buy it.
                  </li>
                  <li>
                    <strong>Quality over quantity.</strong> One good{" "}
                    <strong>cotton</strong> shirt beats ten cheap{" "}
                    <strong>polyester</strong> ones.
                  </li>
                  <li>
                    <strong>Dress for yourself,</strong> not for Instagram
                    likes.
                  </li>
                  <li>
                    <strong>Build a capsule wardrobe</strong> — less is more.
                  </li>
                  <li>
                    <strong>Personal style &gt; trends.</strong> Don't be a{" "}
                    <strong>fashion victim</strong>.
                  </li>
                  <li>
                    <strong>Natural fabrics</strong> are worth the investment.
                  </li>
                  <li>
                    <strong>Confidence</strong> is the best accessory.
                  </li>
                </ol>
              </div>

              <p className="text-base leading-relaxed">
                Today, Emma still loves fashion, but on her own terms. She's{" "}
                <strong>comfortable in her own skin</strong> and has discovered
                that when you feel good, you <strong>look good</strong>. Her
                friends now come to her for style advice, and she always tells
                them: "Find what <strong>suits you to a T</strong>, not what's{" "}
                <strong>in fashion</strong> this week." 👗✨
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What was Emma's problem before?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → She was a fashion victim who bought trendy but
                    uncomfortable clothes.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What made Emma change her approach?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Seeing her friend Sarah comfortable in casual clothes
                    while she suffered in tight dress and heels.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What is a "capsule wardrobe"?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → A small collection of versatile pieces (about 30 items)
                    that all match and go with each other.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What materials does Emma prefer now?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Natural fabrics like cotton, wool, and linen instead of
                    synthetic materials.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What's Emma's main philosophy now?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Comfort comes first, quality over quantity, and personal
                    style matters more than following trends.
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
              Complete the sentences with fashion & appearance vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. This jacket",
                    answers: ["suits", "fits"],
                    right: "you perfectly — you should buy it!",
                    wide: true,
                  },
                  {
                    left: "2. I prefer",
                    answers: ["casual"],
                    right: "clothes like jeans and T-shirts.",
                    wide: true,
                  },
                  {
                    left: "3. Can I",
                    answers: ["try on"],
                    right: "these shoes before buying them?",
                    wide: true,
                  },
                  {
                    left: "4. He always looks",
                    answers: ["scruffy", "messy", "unkempt"],
                    right: "— his clothes are wrinkled.",
                    wide: true,
                  },
                  {
                    left: "5. These jeans are",
                    answers: ["on sale"],
                    right: "— 50% off!",
                    wide: true,
                  },
                  {
                    left: "6. She was",
                    answers: ["dressed to the nines", "dressed to kill"],
                    right: "at the wedding.",
                    wide: true,
                  },
                ]}
              />
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              ✍️ Упражнение: Match or Go with?
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Complete with "match" or "go with":
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. These shoes",
                    answers: ["match", "go with"],
                    right: "your bag perfectly!",
                    wide: true,
                  },
                  {
                    left: "2. Does this shirt",
                    answers: ["go with", "match"],
                    right: "my jeans?",
                    wide: true,
                  },
                  {
                    left: "3. Black",
                    answers: ["goes with", "matches"],
                    right: "everything.",
                    wide: true,
                  },
                  {
                    left: "4. Your belt doesn't",
                    answers: ["match", "go with"],
                    right: "your shoes.",
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
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border-2 border-pink-300">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">
              🎓 Полный список: 150+ слов
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <h4 className="font-bold text-lg text-blue-900 mb-2">
                  👕 Clothing (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• shirt / blouse</li>
                  <li>• T-shirt / top</li>
                  <li>• sweater / hoodie</li>
                  <li>• jacket / coat</li>
                  <li>• jeans / trousers</li>
                  <li>• shorts / skirt</li>
                  <li>• dress / suit</li>
                  <li>• tie / bow tie</li>
                  <li>• shoes / sneakers</li>
                  <li>• boots / heels</li>
                  <li>• socks / tights</li>
                  <li>• underwear</li>
                  <li>• scarf / gloves</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  ✨ Styles (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• casual</li>
                  <li>• formal / smart</li>
                  <li>• trendy / fashionable</li>
                  <li>• stylish / chic</li>
                  <li>• elegant / classy</li>
                  <li>• comfortable / cozy</li>
                  <li>• scruffy / messy</li>
                  <li>• smart-casual</li>
                  <li>• vintage / retro</li>
                  <li>• minimalist</li>
                  <li>• baggy / loose</li>
                  <li>• tight / fitted</li>
                  <li>• oversized</li>
                  <li>• tacky / gaudy</li>
                  <li>• outdated</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  👤 Appearance (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• attractive</li>
                  <li>• handsome / beautiful</li>
                  <li>• pretty / cute</li>
                  <li>• tall / short</li>
                  <li>• slim / skinny</li>
                  <li>• overweight / chubby</li>
                  <li>• fit / athletic</li>
                  <li>• muscular / toned</li>
                  <li>• well-dressed</li>
                  <li>• scruffy / unkempt</li>
                  <li>• blonde / brunette</li>
                  <li>• long / short hair</li>
                  <li>• curly / straight</li>
                  <li>• bald / balding</li>
                  <li>• beard / mustache</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🌈 Colors & Materials (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• plain / solid</li>
                  <li>• striped / checked</li>
                  <li>• spotted / dotted</li>
                  <li>• floral / patterned</li>
                  <li>• bright / dark</li>
                  <li>• neutral / pastel</li>
                  <li>• cotton</li>
                  <li>• wool / cashmere</li>
                  <li>• silk / satin</li>
                  <li>• leather / suede</li>
                  <li>• denim</li>
                  <li>• synthetic / polyester</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-rose-300">
                <h4 className="font-bold text-lg text-rose-900 mb-2">
                  💍 Accessories (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• jewelry</li>
                  <li>• necklace / bracelet</li>
                  <li>• earrings / ring</li>
                  <li>• watch</li>
                  <li>• belt</li>
                  <li>• bag / handbag</li>
                  <li>• backpack</li>
                  <li>• sunglasses</li>
                  <li>• glasses</li>
                  <li>• cap / hat</li>
                  <li>• scarf / gloves</li>
                  <li>• wallet / purse</li>
                  <li>• makeup</li>
                  <li>• perfume / cologne</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  🛍️ Verbs (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• wear / put on</li>
                  <li>• take off / remove</li>
                  <li>• try on</li>
                  <li>• fit / suit</li>
                  <li>• match / go with</li>
                  <li>• look good on</li>
                  <li>• get dressed / dress up</li>
                  <li>• change clothes</li>
                  <li>• wash / dry-clean</li>
                  <li>• iron / fold</li>
                  <li>• shop / browse</li>
                  <li>• buy / purchase</li>
                  <li>• return / exchange</li>
                  <li>• on sale / discount</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  🗣️ Idioms (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Dressed to kill</li>
                  <li>• Dressed to the nines</li>
                  <li>• Look like a million dollars</li>
                  <li>• Suits you to a T</li>
                  <li>• Fashion victim</li>
                  <li>• All the rage</li>
                  <li>• Go out of style</li>
                  <li>• In fashion / Out of fashion</li>
                  <li>• Pull off (an outfit)</li>
                  <li>• Clothes make the man</li>
                  <li>• Fit like a glove</li>
                  <li>• Dress for success</li>
                  <li>• Put together</li>
                  <li>• Throw on</li>
                  <li>• Comfortable in your own skin</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-teal-300">
                <h4 className="font-bold text-lg text-teal-900 mb-2">
                  ➕ Additional (50+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• outfit / ensemble</li>
                  <li>• wardrobe / closet</li>
                  <li>• capsule wardrobe</li>
                  <li>• designer / brand</li>
                  <li>• size / fit</li>
                  <li>• small / medium / large</li>
                  <li>• tight / loose / fitted</li>
                  <li>• fashion show</li>
                  <li>• runway / catwalk</li>
                  <li>• model / fashionista</li>
                  <li>• boutique / department store</li>
                  <li>• fitting room</li>
                  <li>• price tag</li>
                  <li>• receipt</li>
                  <li>• trend / fad</li>
                  <li>• vintage / second-hand</li>
                  <li>• sustainable fashion</li>
                  <li>• ethical fashion</li>
                  <li>• fast fashion</li>
                  <li>• personal style</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 mt-6 border-2 border-pink-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-pink-900">150+</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-purple-900">15</p>
                  <p className="text-sm text-gray-700">Idioms</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">2</p>
                  <p className="text-sm text-gray-700">Exercises</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  👗 <strong>Congratulations!</strong> You've mastered 150+
                  essential Fashion & Appearance vocabulary words! Remember:
                  comfort comes first, personal style matters more than trends,
                  and confidence is the best accessory. Now you're ready to talk
                  about fashion like a pro — on your own terms! ✨👔
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


