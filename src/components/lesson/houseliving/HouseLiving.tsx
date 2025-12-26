"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function HouseLiving({
  step,
  lessonKey,
}: {
  step: number;
  lessonKey: string;
}) {
  if (step === 1) {
    return (
      <>
        <Section title="🏠 Introduction + Types of Housing">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🏡 House & Living — Дом и жильё
            </h3>

            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-blue-200">
              <p className="text-base leading-relaxed mb-3">
                A home is more than just four walls and a roof — it's where we
                live, rest, work, and create memories. Whether you{" "}
                <strong>rent</strong> an <strong>apartment</strong>, own a{" "}
                <strong>house</strong> with a <strong>mortgage</strong>, or
                share a flat with <strong>roommates</strong>, understanding
                housing vocabulary is essential for everyday life.
              </p>
              <p className="text-base leading-relaxed">
                In this lesson, we'll explore types of housing, home features,{" "}
                <strong>household chores</strong>, <strong>utilities</strong>,
                dealing with <strong>landlords</strong>, and everything you need
                to know about living comfortably at home! 🔑✨
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🏘️ Types of Housing — Типы жилья
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. house",
                    "дом (отдельный)",
                    "They live in a big <strong>house</strong>.",
                  ],
                  [
                    "2. apartment / flat",
                    "квартира",
                    "I rent an <strong>apartment</strong> downtown.",
                  ],
                  [
                    "3. studio apartment",
                    "квартира-студия",
                    "A <strong>studio apartment</strong> has one room.",
                  ],
                  [
                    "4. cottage",
                    "коттедж / дача",
                    "We have a <strong>cottage</strong> in the countryside.",
                  ],
                  [
                    "5. villa",
                    "вилла",
                    "They rented a <strong>villa</strong> by the sea.",
                  ],
                  [
                    "6. townhouse",
                    "таунхаус",
                    "A <strong>townhouse</strong> shares walls with neighbors.",
                  ],
                  [
                    "7. detached house",
                    "отдельно стоящий дом",
                    "A <strong>detached house</strong> has no shared walls.",
                  ],
                  [
                    "8. semi-detached house",
                    "двухквартирный дом",
                    "A <strong>semi-detached</strong> shares one wall.",
                  ],
                  [
                    "9. bungalow",
                    "одноэтажный дом",
                    "A <strong>bungalow</strong> is single-story.",
                  ],
                  [
                    "10. mansion",
                    "особняк",
                    "They own a huge <strong>mansion</strong>.",
                  ],
                  [
                    "11. penthouse",
                    "пентхаус",
                    "The <strong>penthouse</strong> is on the top floor.",
                  ],
                  [
                    "12. dormitory / dorm",
                    "общежитие",
                    "Students live in a <strong>dorm</strong>.",
                  ],
                  [
                    "13. shared flat / flatshare",
                    "съёмная квартира с соседями",
                    "I live in a <strong>shared flat</strong>.",
                  ],
                  [
                    "14. mobile home / trailer",
                    "мобильный дом / трейлер",
                    "They live in a <strong>mobile home</strong>.",
                  ],
                  [
                    "15. duplex",
                    "двухуровневая квартира",
                    "A <strong>duplex</strong> has two floors.",
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

  if (step === 2) {
    return (
      <>
        <Section title="🚪 Rooms & Parts of a House">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🛋️ Комнаты и части дома
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. living room / lounge",
                    "гостиная",
                    "We watch TV in the <strong>living room</strong>.",
                  ],
                  [
                    "2. bedroom",
                    "спальня",
                    "I sleep in my <strong>bedroom</strong>.",
                  ],
                  [
                    "3. kitchen",
                    "кухня",
                    "She's cooking in the <strong>kitchen</strong>.",
                  ],
                  [
                    "4. bathroom",
                    "ванная комната",
                    "The <strong>bathroom</strong> has a shower.",
                  ],
                  [
                    "5. toilet / restroom",
                    "туалет",
                    "Where's the <strong>toilet</strong>?",
                  ],
                  [
                    "6. dining room",
                    "столовая",
                    "We eat in the <strong>dining room</strong>.",
                  ],
                  [
                    "7. study / office",
                    "кабинет / офис",
                    "I work from home in my <strong>study</strong>.",
                  ],
                  [
                    "8. hallway / corridor",
                    "прихожая / коридор",
                    "Hang your coat in the <strong>hallway</strong>.",
                  ],
                  [
                    "9. basement / cellar",
                    "подвал",
                    "We store things in the <strong>basement</strong>.",
                  ],
                  [
                    "10. attic / loft",
                    "чердак / мансарда",
                    "The <strong>attic</strong> is dusty.",
                  ],
                  [
                    "11. garage",
                    "гараж",
                    "The car is in the <strong>garage</strong>.",
                  ],
                  [
                    "12. balcony / terrace",
                    "балкон / терраса",
                    "We have coffee on the <strong>balcony</strong>.",
                  ],
                  [
                    "13. garden / yard",
                    "сад / двор",
                    "Kids play in the <strong>garden</strong>.",
                  ],
                  [
                    "14. roof",
                    "крыша",
                    "The <strong>roof</strong> is leaking.",
                  ],
                  [
                    "15. porch",
                    "крыльцо",
                    "She sits on the <strong>porch</strong>.",
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
        <Section title="🪑 Furniture & Appliances">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300 mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              🛋️ Мебель и бытовая техника
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. sofa / couch",
                    "диван",
                    "We sit on the <strong>sofa</strong>.",
                  ],
                  [
                    "2. armchair",
                    "кресло",
                    "A comfortable <strong>armchair</strong>.",
                  ],
                  [
                    "3. coffee table",
                    "журнальный столик",
                    "Put it on the <strong>coffee table</strong>.",
                  ],
                  ["4. bed", "кровать", "I need a new <strong>bed</strong>."],
                  [
                    "5. wardrobe / closet",
                    "шкаф для одежды",
                    "Hang it in the <strong>wardrobe</strong>.",
                  ],
                  [
                    "6. desk",
                    "письменный стол",
                    "I work at my <strong>desk</strong>.",
                  ],
                  ["7. chair", "стул", "Pull up a <strong>chair</strong>."],
                  [
                    "8. bookshelf",
                    "книжная полка",
                    "Books are on the <strong>bookshelf</strong>.",
                  ],
                  [
                    "9. refrigerator / fridge",
                    "холодильник",
                    "Put milk in the <strong>fridge</strong>.",
                  ],
                  [
                    "10. oven / stove",
                    "духовка / плита",
                    "Bake it in the <strong>oven</strong>.",
                  ],
                  [
                    "11. dishwasher",
                    "посудомоечная машина",
                    "Load the <strong>dishwasher</strong>.",
                  ],
                  [
                    "12. washing machine",
                    "стиральная машина",
                    "Do laundry in the <strong>washing machine</strong>.",
                  ],
                  [
                    "13. dryer",
                    "сушилка",
                    "Dry clothes in the <strong>dryer</strong>.",
                  ],
                  [
                    "14. microwave",
                    "микроволновка",
                    "Heat it in the <strong>microwave</strong>.",
                  ],
                  [
                    "15. vacuum cleaner",
                    "пылесос",
                    "Use the <strong>vacuum cleaner</strong>.",
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
        <Section title="🧹 Household Chores">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🧽 Домашние дела
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. clean / tidy up",
                    "убирать / наводить порядок",
                    "I need to <strong>clean</strong> the house.",
                  ],
                  [
                    "2. vacuum",
                    "пылесосить",
                    "<strong>Vacuum</strong> the carpet.",
                  ],
                  [
                    "3. sweep / mop",
                    "подметать / мыть пол",
                    "<strong>Sweep</strong> the floor.",
                  ],
                  [
                    "4. dust",
                    "вытирать пыль",
                    "<strong>Dust</strong> the furniture.",
                  ],
                  [
                    "5. do the laundry",
                    "стирать",
                    "I need to <strong>do the laundry</strong>.",
                  ],
                  [
                    "6. wash / dry clothes",
                    "стирать / сушить одежду",
                    "<strong>Wash</strong> your clothes.",
                  ],
                  ["7. iron", "гладить", "<strong>Iron</strong> your shirt."],
                  [
                    "8. do the dishes / wash up",
                    "мыть посуду",
                    "<strong>Do the dishes</strong> after dinner.",
                  ],
                  [
                    "9. take out the trash / rubbish",
                    "выносить мусор",
                    "<strong>Take out the trash</strong>.",
                  ],
                  [
                    "10. make the bed",
                    "заправлять постель",
                    "<strong>Make your bed</strong> every morning.",
                  ],
                  [
                    "11. cook / prepare meals",
                    "готовить еду",
                    "I <strong>cook</strong> dinner.",
                  ],
                  [
                    "12. water the plants",
                    "поливать растения",
                    "<strong>Water the plants</strong> weekly.",
                  ],
                  [
                    "13. mow the lawn",
                    "косить газон",
                    "<strong>Mow the lawn</strong> on weekends.",
                  ],
                  [
                    "14. do the shopping / grocery shopping",
                    "делать покупки / покупать продукты",
                    "<strong>Do the shopping</strong> on Saturday.",
                  ],
                  [
                    "15. fold clothes",
                    "складывать одежду",
                    "<strong>Fold the clothes</strong> neatly.",
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

  if (step === 5) {
    return (
      <>
        <Section title="💰 Renting & Buying">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🏠 Аренда и покупка недвижимости
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. rent (v/n)",
                    "арендовать / аренда",
                    "I <strong>rent</strong> an apartment.",
                  ],
                  [
                    "2. rent out / lease",
                    "сдавать в аренду",
                    "She <strong>rents out</strong> her flat.",
                  ],
                  [
                    "3. landlord / landlady",
                    "хозяин / хозяйка (арендодатель)",
                    "My <strong>landlord</strong> is kind.",
                  ],
                  [
                    "4. tenant",
                    "арендатор / съёмщик",
                    "The <strong>tenant</strong> pays monthly.",
                  ],
                  [
                    "5. deposit / security deposit",
                    "залог / депозит",
                    "Pay a <strong>deposit</strong> upfront.",
                  ],
                  [
                    "6. lease / tenancy agreement",
                    "договор аренды",
                    "Sign the <strong>lease</strong>.",
                  ],
                  [
                    "7. mortgage",
                    "ипотека",
                    "They got a <strong>mortgage</strong>.",
                  ],
                  [
                    "8. down payment",
                    "первоначальный взнос",
                    "Save for a <strong>down payment</strong>.",
                  ],
                  [
                    "9. buy / purchase",
                    "покупать / приобретать",
                    "They want to <strong>buy</strong> a house.",
                  ],
                  [
                    "10. sell",
                    "продавать",
                    "<strong>Sell</strong> your old flat.",
                  ],
                  [
                    "11. move in / move out",
                    "въезжать / выезжать",
                    "We <strong>move in</strong> next week.",
                  ],
                  [
                    "12. roommate / flatmate",
                    "сосед по комнате / квартире",
                    "I live with a <strong>roommate</strong>.",
                  ],
                  [
                    "13. real estate agent / estate agent",
                    "риэлтор / агент по недвижимости",
                    "Contact a <strong>real estate agent</strong>.",
                  ],
                  [
                    "14. property",
                    "недвижимость / собственность",
                    "They own several <strong>properties</strong>.",
                  ],
                  [
                    "15. evict",
                    "выселять",
                    "The landlord can <strong>evict</strong> you.",
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

  if (step === 6) {
    return (
      <>
        <Section title="💡 Utilities & Bills">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-2 border-yellow-300 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              💸 Коммунальные услуги и счета
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. utilities",
                    "коммунальные услуги",
                    "<strong>Utilities</strong> are included.",
                  ],
                  [
                    "2. electricity / power",
                    "электричество",
                    "The <strong>electricity</strong> is expensive.",
                  ],
                  ["3. gas", "газ", "<strong>Gas</strong> heats the house."],
                  ["4. water", "вода", "Pay the <strong>water</strong> bill."],
                  [
                    "5. heating",
                    "отопление",
                    "<strong>Heating</strong> costs are high.",
                  ],
                  [
                    "6. internet / Wi-Fi",
                    "интернет / Wi-Fi",
                    "Is <strong>Wi-Fi</strong> included?",
                  ],
                  [
                    "7. cable TV",
                    "кабельное ТВ",
                    "We don't have <strong>cable TV</strong>.",
                  ],
                  [
                    "8. bill",
                    "счёт",
                    "Pay the <strong>bills</strong> on time.",
                  ],
                  [
                    "9. council tax (UK)",
                    "муниципальный налог",
                    "<strong>Council tax</strong> is mandatory.",
                  ],
                  [
                    "10. service charge",
                    "плата за обслуживание",
                    "Pay a monthly <strong>service charge</strong>.",
                  ],
                  [
                    "11. meter reading",
                    "показания счётчика",
                    "Take the <strong>meter reading</strong>.",
                  ],
                  [
                    "12. direct debit",
                    "автоплатёж",
                    "Set up a <strong>direct debit</strong>.",
                  ],
                  [
                    "13. overdue",
                    "просроченный",
                    "The bill is <strong>overdue</strong>.",
                  ],
                  [
                    "14. cut off / disconnect",
                    "отключить (услугу)",
                    "They'll <strong>cut off</strong> the power.",
                  ],
                  [
                    "15. included / excluded",
                    "включено / не включено",
                    "Is heating <strong>included</strong>?",
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

  if (step === 7) {
    return (
      <>
        <Section title="🔧 Repairs & Maintenance">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border-2 border-teal-300 mb-6">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">
              🛠️ Ремонт и обслуживание
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-teal-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. repair / fix",
                    "ремонтировать / чинить",
                    "<strong>Repair</strong> the broken window.",
                  ],
                  [
                    "2. break down",
                    "сломаться",
                    "The washing machine <strong>broke down</strong>.",
                  ],
                  [
                    "3. leak",
                    "протекать / течь",
                    "The roof is <strong>leaking</strong>.",
                  ],
                  [
                    "4. plumber",
                    "сантехник",
                    "Call a <strong>plumber</strong>.",
                  ],
                  [
                    "5. electrician",
                    "электрик",
                    "Hire an <strong>electrician</strong>.",
                  ],
                  [
                    "6. painter",
                    "маляр",
                    "The <strong>painter</strong> is coming.",
                  ],
                  [
                    "7. carpenter",
                    "плотник",
                    "A <strong>carpenter</strong> built the shelf.",
                  ],
                  [
                    "8. handyman",
                    "мастер на все руки",
                    "Hire a <strong>handyman</strong>.",
                  ],
                  [
                    "9. paint",
                    "красить",
                    "<strong>Paint</strong> the walls white.",
                  ],
                  [
                    "10. renovate / refurbish",
                    "ремонтировать / обновлять",
                    "<strong>Renovate</strong> the kitchen.",
                  ],
                  [
                    "11. replace",
                    "заменить",
                    "<strong>Replace</strong> the old boiler.",
                  ],
                  [
                    "12. install",
                    "устанавливать",
                    "<strong>Install</strong> a new shower.",
                  ],
                  [
                    "13. DIY (do it yourself)",
                    "сделай сам",
                    "He loves <strong>DIY</strong> projects.",
                  ],
                  [
                    "14. maintenance",
                    "обслуживание / уход",
                    "Regular <strong>maintenance</strong> is important.",
                  ],
                  [
                    "15. out of order",
                    "не работает",
                    "The lift is <strong>out of order</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded p-3"
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
        <Section title="📖 Reading: Finding the Perfect Home">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🏡 Текст: В поисках идеального жилья
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 mb-4">
              <h4 className="text-xl font-bold text-blue-800 mb-3">
                From Shared Flat Chaos to Dream Home
              </h4>

              <p className="text-base leading-relaxed mb-4">
                When Lisa moved to London three years ago, she had no choice but
                to <strong>rent</strong> a room in a{" "}
                <strong>shared flat</strong> with three{" "}
                <strong>roommates</strong>. The <strong>rent</strong> was
                affordable at £600 per month, but life was far from comfortable.
                Her <strong>landlord</strong> was unreliable, never responding
                to maintenance requests. When the <strong>heating</strong> broke
                down in winter, they waited two weeks for him to call a{" "}
                <strong>plumber</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                The <strong>household chores</strong> situation was a nightmare.
                Nobody wanted to <strong>do the dishes</strong>,{" "}
                <strong>take out the trash</strong>, or <strong>clean</strong>{" "}
                the <strong>bathroom</strong>. The <strong>kitchen</strong> was
                always messy, and they constantly argued about whose turn it was
                to <strong>vacuum</strong> the <strong>living room</strong>.
                Lisa found herself doing most chores just to maintain basic
                hygiene.
              </p>

              <div className="bg-red-50 rounded-lg p-4 mb-4 border border-red-200">
                <h5 className="font-bold text-lg text-red-900 mb-2">
                  ⚠️ The Problems:
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Utilities</strong> were <strong>excluded</strong>{" "}
                    from rent — they paid an extra £150 each for{" "}
                    <strong>electricity</strong>, <strong>gas</strong>,{" "}
                    <strong>water</strong>, and <strong>internet</strong>.
                  </li>
                  <li>
                    The <strong>washing machine</strong> kept{" "}
                    <strong>breaking down</strong>, forcing them to go to a
                    laundromat.
                  </li>
                  <li>
                    The <strong>roof</strong> was <strong>leaking</strong> in
                    her <strong>bedroom</strong>, causing mold.
                  </li>
                  <li>
                    One <strong>roommate</strong> never paid his share of the{" "}
                    <strong>bills</strong>, causing constant tension.
                  </li>
                  <li>
                    The <strong>landlord</strong> refused to{" "}
                    <strong>repair</strong> anything unless absolutely
                    necessary.
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-4">
                After two years of this chaos, Lisa got a promotion and decided
                enough was enough. She wanted her own place — a{" "}
                <strong>studio apartment</strong> or one-bedroom{" "}
                <strong>flat</strong> where she could live peacefully. She
                contacted a <strong>real estate agent</strong> and started
                viewing <strong>properties</strong>.
              </p>

              <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-200">
                <h5 className="font-bold text-lg text-green-900 mb-2">
                  ✅ Her Requirements:
                </h5>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Rent</strong> under £1,200/month (including{" "}
                    <strong>utilities</strong>).
                  </li>
                  <li>
                    A reliable <strong>landlord</strong> who responds to
                    maintenance issues.
                  </li>
                  <li>
                    Good <strong>heating</strong> and insulation.
                  </li>
                  <li>
                    Working <strong>appliances</strong>: <strong>oven</strong>,{" "}
                    <strong>fridge</strong>, <strong>washing machine</strong>.
                  </li>
                  <li>Close to public transport.</li>
                  <li>
                    A <strong>balcony</strong> or small outdoor space.
                  </li>
                  <li>
                    No <strong>roommates</strong>!
                  </li>
                </ol>
              </div>

              <p className="text-base leading-relaxed mb-4">
                After viewing 15 apartments, Lisa finally found the perfect
                place: a cozy one-bedroom <strong>flat</strong> in a quiet
                neighborhood. The <strong>rent</strong> was £1,100 per month
                with all <strong>utilities included</strong> except{" "}
                <strong>internet</strong>. The <strong>landlady</strong> was a
                kind retired teacher who maintained her{" "}
                <strong>properties</strong> well.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Lisa paid a <strong>deposit</strong> equal to one month's rent,
                signed the <strong>lease</strong>, and <strong>moved in</strong>{" "}
                immediately. The <strong>apartment</strong> had a modern{" "}
                <strong>kitchen</strong> with all <strong>appliances</strong>, a
                spacious <strong>bathroom</strong>, and a small{" "}
                <strong>balcony</strong> with a view of the park. Everything was
                freshly <strong>painted</strong>, and the{" "}
                <strong>heating</strong> worked perfectly.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                <h5 className="font-bold text-lg text-blue-900 mb-2">
                  🏡 Life in Her New Home:
                </h5>
                <p className="text-sm leading-relaxed mb-2">
                  Now Lisa controls her own space. She <strong>cleans</strong>{" "}
                  when she wants, decorates how she likes, and enjoys peaceful
                  evenings. She created a cleaning schedule:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Monday: <strong>Do the laundry</strong>
                  </li>
                  <li>
                    Tuesday: <strong>Vacuum</strong> and <strong>dust</strong>
                  </li>
                  <li>
                    Wednesday: <strong>Clean the bathroom</strong>
                  </li>
                  <li>
                    Thursday: <strong>Do the dishes</strong> and{" "}
                    <strong>tidy up</strong>
                  </li>
                  <li>
                    Friday: <strong>Take out the trash</strong>
                  </li>
                  <li>
                    Weekend: <strong>Water the plants</strong> and relax!
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
                Lisa's only regret? Not <strong>moving out</strong> sooner! She
                learned that paying a bit more for your own peaceful space is
                worth every penny. Now she's saving for a{" "}
                <strong>down payment</strong> to eventually <strong>buy</strong>{" "}
                her own <strong>property</strong> with a{" "}
                <strong>mortgage</strong>. But for now, she's perfectly happy{" "}
                <strong>renting</strong> her little sanctuary. 🏡✨
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What was the main problem in Lisa's shared flat?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Unreliable landlord, broken appliances, messy roommates,
                    and unfair chore distribution.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. How much was Lisa paying for rent and utilities in her
                    shared flat?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → £600 rent + £150 utilities = £750 total per month.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What utilities are included in her new apartment?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → All utilities (electricity, gas, water, heating) except
                    internet.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What does Lisa plan to do in the future?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Save for a down payment to buy her own property with a
                    mortgage.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What's the main lesson from Lisa's story?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Paying more for your own peaceful, well-maintained space
                    is worth it.
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
              ✍️ Упражнение 1: Fill in the Blanks
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Complete the sentences with house & living vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. I",
                    answers: ["rent"],
                    right: "an apartment for £1000 per month.",
                    wide: true,
                  },
                  {
                    left: "2. Please",
                    answers: ["take out the trash", "take out the rubbish"],
                    right: "before you leave.",
                    wide: true,
                  },
                  {
                    left: "3. The",
                    answers: ["landlord"],
                    right: "fixed the broken heating.",
                    wide: true,
                  },
                  {
                    left: "4. I need to",
                    answers: ["do the laundry"],
                    right: "— all my clothes are dirty.",
                    wide: true,
                  },
                  {
                    left: "5. Are",
                    answers: ["utilities"],
                    right: "included in the rent?",
                    wide: true,
                  },
                  {
                    left: "6. Call a",
                    answers: ["plumber"],
                    right: "— the sink is leaking!",
                    wide: true,
                  },
                ]}
              />
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              ✍️ Упражнение 2: Household Chores
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Match the correct chore verb:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <CheckableExercise
                items={[
                  {
                    left: "1.",
                    answers: ["Vacuum"],
                    right: "the carpet every week.",
                    wide: true,
                  },
                  {
                    left: "2.",
                    answers: ["Make"],
                    right: "the bed every morning.",
                    wide: true,
                  },
                  {
                    left: "3.",
                    answers: ["Water"],
                    right: "the plants twice a week.",
                    wide: true,
                  },
                  {
                    left: "4.",
                    answers: ["Iron"],
                    right: "your shirt before the meeting.",
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🎓 Полный список: 150+ слов
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🏘️ Housing Types (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• house</li>
                  <li>• apartment / flat</li>
                  <li>• studio apartment</li>
                  <li>• cottage / villa</li>
                  <li>• townhouse</li>
                  <li>• detached / semi-detached</li>
                  <li>• bungalow</li>
                  <li>• mansion / penthouse</li>
                  <li>• dormitory / dorm</li>
                  <li>• shared flat</li>
                  <li>• mobile home</li>
                  <li>• duplex</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  🚪 Rooms (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• living room / lounge</li>
                  <li>• bedroom</li>
                  <li>• kitchen</li>
                  <li>• bathroom / toilet</li>
                  <li>• dining room</li>
                  <li>• study / office</li>
                  <li>• hallway / corridor</li>
                  <li>• basement / cellar</li>
                  <li>• attic / loft</li>
                  <li>• garage</li>
                  <li>• balcony / terrace</li>
                  <li>• garden / yard</li>
                  <li>• roof / porch</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  🪑 Furniture & Appliances (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• sofa / couch</li>
                  <li>• armchair</li>
                  <li>• coffee table / desk</li>
                  <li>• bed / wardrobe</li>
                  <li>• chair / bookshelf</li>
                  <li>• fridge / oven</li>
                  <li>• dishwasher</li>
                  <li>• washing machine</li>
                  <li>• dryer / microwave</li>
                  <li>• vacuum cleaner</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  🧹 Household Chores (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• clean / tidy up</li>
                  <li>• vacuum</li>
                  <li>• sweep / mop</li>
                  <li>• dust</li>
                  <li>• do the laundry</li>
                  <li>• wash / dry clothes</li>
                  <li>• iron</li>
                  <li>• do the dishes</li>
                  <li>• take out the trash</li>
                  <li>• make the bed</li>
                  <li>• cook / prepare meals</li>
                  <li>• water the plants</li>
                  <li>• mow the lawn</li>
                  <li>• do the shopping</li>
                  <li>• fold clothes</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  💰 Renting & Buying (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• rent / rent out</li>
                  <li>• landlord / landlady</li>
                  <li>• tenant</li>
                  <li>• deposit / security deposit</li>
                  <li>• lease / tenancy agreement</li>
                  <li>• mortgage</li>
                  <li>• down payment</li>
                  <li>• buy / sell</li>
                  <li>• move in / move out</li>
                  <li>• roommate / flatmate</li>
                  <li>• real estate agent</li>
                  <li>• property</li>
                  <li>• evict</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  💡 Utilities & Bills (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• utilities</li>
                  <li>• electricity / power</li>
                  <li>• gas / water</li>
                  <li>• heating</li>
                  <li>• internet / Wi-Fi</li>
                  <li>• cable TV</li>
                  <li>• bill</li>
                  <li>• council tax</li>
                  <li>• service charge</li>
                  <li>• meter reading</li>
                  <li>• direct debit</li>
                  <li>• overdue</li>
                  <li>• cut off / disconnect</li>
                  <li>• included / excluded</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-teal-300">
                <h4 className="font-bold text-lg text-teal-900 mb-2">
                  🔧 Repairs (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• repair / fix</li>
                  <li>• break down</li>
                  <li>• leak</li>
                  <li>• plumber</li>
                  <li>• electrician</li>
                  <li>• painter / carpenter</li>
                  <li>• handyman</li>
                  <li>• paint</li>
                  <li>• renovate / refurbish</li>
                  <li>• replace / install</li>
                  <li>• DIY</li>
                  <li>• maintenance</li>
                  <li>• out of order</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-pink-300">
                <h4 className="font-bold text-lg text-pink-900 mb-2">
                  ➕ Additional (50+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• home / accommodation</li>
                  <li>• neighborhood</li>
                  <li>• furnished / unfurnished</li>
                  <li>• spacious / cramped</li>
                  <li>• cozy / comfortable</li>
                  <li>• modern / old-fashioned</li>
                  <li>• convenient location</li>
                  <li>• ground floor / top floor</li>
                  <li>• elevator / lift</li>
                  <li>• parking space</li>
                  <li>• storage room</li>
                  <li>• central heating</li>
                  <li>• air conditioning</li>
                  <li>• noise / noisy neighbors</li>
                  <li>• pets allowed / no pets</li>
                  <li>• viewing / inspection</li>
                  <li>• notice period</li>
                  <li>• references</li>
                  <li>• subletting</li>
                  <li>• housewarming party</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 mt-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">150+</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-purple-900">1</p>
                  <p className="text-sm text-gray-700">Story</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">2</p>
                  <p className="text-sm text-gray-700">Exercises</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  🏡 <strong>Congratulations!</strong> You've mastered 150+
                  essential House & Living vocabulary words! From renting and
                  mortgages to household chores and repairs — you're now ready
                  to talk about home, housing, and everything related to living
                  comfortably. Welcome home! 🏠✨
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


