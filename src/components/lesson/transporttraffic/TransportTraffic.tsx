"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function TransportTraffic({
  step,
  lessonKey,
}: {
  step: number;
  lessonKey: string;
}) {
  if (step === 1) {
    return (
      <>
        <Section title="🚗 Introduction + Types of Transport">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🚦 Transport & Traffic — Транспорт и дорожное движение
            </h3>

            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-blue-200">
              <p className="text-base leading-relaxed mb-3">
                Transportation is essential to modern life! Whether you{" "}
                <strong>drive</strong> a car, take{" "}
                <strong>public transport</strong>, or cycle to work,
                understanding transport vocabulary helps you navigate cities,
                avoid <strong>traffic jams</strong>, and travel safely.
              </p>
              <p className="text-base leading-relaxed">
                In this lesson, we'll explore types of transport, driving
                vocabulary, traffic problems like <strong>congestion</strong>,
                and everything you need to know about getting from point A to
                point B! 🚙✨
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🚌 Types of Transport — Виды транспорта
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. car / vehicle",
                    "машина / транспортное средство",
                    "I drive a <strong>car</strong> to work.",
                  ],
                  [
                    "2. bus",
                    "автобус",
                    "Take the <strong>bus</strong> downtown.",
                  ],
                  [
                    "3. train / subway / metro / underground",
                    "поезд / метро",
                    "The <strong>train</strong> is faster.",
                  ],
                  [
                    "4. tram / streetcar",
                    "трамвай",
                    "A <strong>tram</strong> runs through the city.",
                  ],
                  ["5. taxi / cab", "такси", "Call a <strong>taxi</strong>."],
                  [
                    "6. bicycle / bike",
                    "велосипед",
                    "I <strong>cycle</strong> to work.",
                  ],
                  [
                    "7. motorcycle / motorbike",
                    "мотоцикл",
                    "He rides a <strong>motorcycle</strong>.",
                  ],
                  [
                    "8. scooter",
                    "скутер / самокат",
                    "Electric <strong>scooters</strong> are popular.",
                  ],
                  [
                    "9. truck / lorry",
                    "грузовик",
                    "A <strong>truck</strong> delivers goods.",
                  ],
                  ["10. van", "фургон", "A delivery <strong>van</strong>."],
                  [
                    "11. coach",
                    "междугородний автобус",
                    "Travel by <strong>coach</strong>.",
                  ],
                  [
                    "12. ferry",
                    "паром",
                    "Take the <strong>ferry</strong> across the river.",
                  ],
                  [
                    "13. plane / aircraft",
                    "самолёт",
                    "Fly by <strong>plane</strong>.",
                  ],
                  [
                    "14. ship / boat",
                    "корабль / лодка",
                    "Travel by <strong>ship</strong>.",
                  ],
                  [
                    "15. public transport",
                    "общественный транспорт",
                    "<strong>Public transport</strong> is cheaper.",
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
        <Section title="🚗 Driving & On the Road">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🛣️ Вождение и дорога
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. drive",
                    "водить / ехать (на машине)",
                    "I <strong>drive</strong> carefully.",
                  ],
                  [
                    "2. driver",
                    "водитель",
                    "The <strong>driver</strong> is experienced.",
                  ],
                  [
                    "3. passenger",
                    "пассажир",
                    "I'm a <strong>passenger</strong> today.",
                  ],
                  [
                    "4. speed / speed limit",
                    "скорость / ограничение скорости",
                    "The <strong>speed limit</strong> is 60 km/h.",
                  ],
                  [
                    "5. accelerate / speed up",
                    "ускоряться / разгоняться",
                    "<strong>Accelerate</strong> slowly.",
                  ],
                  [
                    "6. slow down / brake",
                    "замедляться / тормозить",
                    "<strong>Slow down</strong> at the corner.",
                  ],
                  [
                    "7. overtake / pass",
                    "обгонять",
                    "Don't <strong>overtake</strong> on a curve.",
                  ],
                  [
                    "8. park / parking",
                    "парковать(ся) / парковка",
                    "Where can I <strong>park</strong>?",
                  ],
                  [
                    "9. petrol / gas / fuel",
                    "бензин / топливо",
                    "Fill up with <strong>petrol</strong>.",
                  ],
                  [
                    "10. petrol station / gas station",
                    "заправка",
                    "Stop at the <strong>petrol station</strong>.",
                  ],
                  [
                    "11. breakdown",
                    "поломка",
                    "My car had a <strong>breakdown</strong>.",
                  ],
                  [
                    "12. break down",
                    "сломаться",
                    "The car <strong>broke down</strong>.",
                  ],
                  [
                    "13. mechanic / garage",
                    "механик / автосервис",
                    "Take it to the <strong>garage</strong>.",
                  ],
                  [
                    "14. license / driving license",
                    "права / водительское удостоверение",
                    "Show your <strong>license</strong>.",
                  ],
                  [
                    "15. insurance",
                    "страховка",
                    "Car <strong>insurance</strong> is mandatory.",
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
        <Section title="🚌 Public Transport">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300 mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              🚉 Общественный транспорт
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. ticket / fare",
                    "билет / стоимость проезда",
                    "Buy a <strong>ticket</strong>.",
                  ],
                  [
                    "2. single / return (ticket)",
                    "в одну сторону / туда-обратно",
                    "A <strong>return ticket</strong> to London.",
                  ],
                  [
                    "3. platform",
                    "платформа / перрон",
                    "The train leaves from <strong>platform</strong> 3.",
                  ],
                  [
                    "4. station / stop",
                    "станция / остановка",
                    "Get off at the next <strong>stop</strong>.",
                  ],
                  [
                    "5. timetable / schedule",
                    "расписание",
                    "Check the <strong>timetable</strong>.",
                  ],
                  [
                    "6. on time / delayed",
                    "вовремя / с задержкой",
                    "The train is <strong>delayed</strong>.",
                  ],
                  [
                    "7. rush hour",
                    "час пик",
                    "Avoid traveling during <strong>rush hour</strong>.",
                  ],
                  [
                    "8. commute / commuter",
                    "добираться на работу / пассажир",
                    "I <strong>commute</strong> by train.",
                  ],
                  [
                    "9. crowded",
                    "переполненный",
                    "The bus is <strong>crowded</strong>.",
                  ],
                  [
                    "10. get on / get off",
                    "садиться / выходить (из транспорта)",
                    "<strong>Get on</strong> the bus here.",
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
        <Section title="🚦 Traffic Problems">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🚧 Проблемы на дорогах
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. traffic / traffic jam",
                    "движение / пробка",
                    "There's a <strong>traffic jam</strong>.",
                  ],
                  [
                    "2. congestion",
                    "затор / пробки",
                    "Heavy <strong>congestion</strong> downtown.",
                  ],
                  [
                    "3. stuck (in traffic)",
                    "застрять (в пробке)",
                    "I'm <strong>stuck in traffic</strong>.",
                  ],
                  [
                    "4. accident / crash",
                    "авария / ДТП",
                    "There was an <strong>accident</strong>.",
                  ],
                  [
                    "5. roadworks / road construction",
                    "дорожные работы",
                    "<strong>Roadworks</strong> cause delays.",
                  ],
                  [
                    "6. detour / diversion",
                    "объезд",
                    "Take the <strong>detour</strong>.",
                  ],
                  [
                    "7. speeding",
                    "превышение скорости",
                    "He got a fine for <strong>speeding</strong>.",
                  ],
                  [
                    "8. fine / ticket (penalty)",
                    "штраф",
                    "Pay the <strong>fine</strong>.",
                  ],
                  [
                    "9. run out of fuel",
                    "закончилось топливо",
                    "I <strong>ran out of fuel</strong>.",
                  ],
                  [
                    "10. flat tire / puncture",
                    "спущенное колесо",
                    "I have a <strong>flat tire</strong>.",
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
        <Section title="🛣️ Roads & Traffic Features">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🚏 Дороги и дорожные элементы
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. road / street",
                    "дорога / улица",
                    "Cross the <strong>road</strong>.",
                  ],
                  [
                    "2. highway / motorway",
                    "шоссе / автомагистраль",
                    "Drive on the <strong>highway</strong>.",
                  ],
                  [
                    "3. lane",
                    "полоса движения",
                    "Stay in your <strong>lane</strong>.",
                  ],
                  [
                    "4. intersection / crossroads",
                    "перекрёсток",
                    "Turn left at the <strong>intersection</strong>.",
                  ],
                  [
                    "5. roundabout / traffic circle",
                    "круговое движение",
                    "Enter the <strong>roundabout</strong>.",
                  ],
                  [
                    "6. traffic lights",
                    "светофор",
                    "Stop at red <strong>traffic lights</strong>.",
                  ],
                  [
                    "7. pedestrian crossing / crosswalk",
                    "пешеходный переход",
                    "Use the <strong>pedestrian crossing</strong>.",
                  ],
                  [
                    "8. pavement / sidewalk",
                    "тротуар",
                    "Walk on the <strong>pavement</strong>.",
                  ],
                  [
                    "9. bridge / tunnel",
                    "мост / туннель",
                    "Drive through the <strong>tunnel</strong>.",
                  ],
                  [
                    "10. toll road",
                    "платная дорога",
                    "Pay at the <strong>toll road</strong>.",
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
        <Section title="📖 Reading + Exercises">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border-2 border-teal-300 mb-6">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">
              🚗 Текст: Commuting Nightmare
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-teal-200 mb-4">
              <h4 className="text-xl font-bold text-teal-800 mb-3">
                A Typical Monday Morning
              </h4>

              <p className="text-base leading-relaxed mb-4">
                Mark's alarm went off at 6:30 AM. He needed to{" "}
                <strong>commute</strong> 30 kilometers to work, and Monday
                mornings were always difficult because of{" "}
                <strong>rush hour</strong>. He quickly got ready and drove to
                the <strong>petrol station</strong> to fill up with{" "}
                <strong>fuel</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                As he entered the <strong>highway</strong>, he noticed heavy{" "}
                <strong>traffic</strong>. Within minutes, he was{" "}
                <strong>stuck in a traffic jam</strong>. The{" "}
                <strong>congestion</strong> was terrible — all three{" "}
                <strong>lanes</strong> were completely blocked. There had been
                an <strong>accident</strong> near the{" "}
                <strong>intersection</strong>, and police were redirecting cars
                through a <strong>detour</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Mark tried to <strong>overtake</strong> slower cars, but it was
                impossible. The <strong>traffic lights</strong> at every
                intersection seemed to stay red forever. Then, disaster struck —
                his car started making strange noises and suddenly{" "}
                <strong>broke down</strong>! He had to pull over and call a{" "}
                <strong>mechanic</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                While waiting, Mark realized he should have taken{" "}
                <strong>public transport</strong> instead. The{" "}
                <strong>train</strong> might be <strong>crowded</strong> during{" "}
                <strong>rush hour</strong>, but at least it's reliable and
                doesn't have <strong>breakdowns</strong>. He decided that
                tomorrow, he'd <strong>commute</strong> by train! 🚆
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. Why was Mark's commute difficult?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → It was rush hour on Monday morning with heavy traffic.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What caused the traffic jam?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → There was an accident near the intersection.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What happened to Mark's car?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → It broke down and he had to call a mechanic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              ✍️ Practice Exercise
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Complete the sentences with transport vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. I'm",
                    answers: ["stuck in traffic", "stuck in a traffic jam"],
                    right: "— I'll be late!",
                    wide: true,
                  },
                  {
                    left: "2. My car",
                    answers: ["broke down"],
                    right: "on the highway.",
                    wide: true,
                  },
                  {
                    left: "3. The train is",
                    answers: ["delayed"],
                    right: "by 15 minutes.",
                    wide: true,
                  },
                  {
                    left: "4. I",
                    answers: ["commute"],
                    right: "to work by bus every day.",
                    wide: true,
                  },
                  {
                    left: "5. Don't",
                    answers: ["overtake"],
                    right: "on this dangerous road!",
                    wide: true,
                  },
                  {
                    left: "6. There's heavy",
                    answers: ["congestion"],
                    right: "downtown today.",
                    wide: true,
                  },
                ]}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              📚 Complete Vocabulary (70 Words)
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🚌 Transport Types (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• car / vehicle</li>
                  <li>• bus / coach</li>
                  <li>• train / subway</li>
                  <li>• tram</li>
                  <li>• taxi / cab</li>
                  <li>• bicycle / bike</li>
                  <li>• motorcycle</li>
                  <li>• scooter</li>
                  <li>• truck / van</li>
                  <li>• ferry</li>
                  <li>• plane / ship</li>
                  <li>• public transport</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  🚗 Driving (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• drive / driver</li>
                  <li>• passenger</li>
                  <li>• speed / speed limit</li>
                  <li>• accelerate</li>
                  <li>• slow down / brake</li>
                  <li>• overtake / pass</li>
                  <li>• park / parking</li>
                  <li>• petrol / fuel</li>
                  <li>• petrol station</li>
                  <li>• breakdown</li>
                  <li>• mechanic / garage</li>
                  <li>• license</li>
                  <li>• insurance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  🚌 Public Transport (10)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• ticket / fare</li>
                  <li>• single / return</li>
                  <li>• platform / station</li>
                  <li>• timetable / schedule</li>
                  <li>• on time / delayed</li>
                  <li>• rush hour</li>
                  <li>• commute / commuter</li>
                  <li>• crowded</li>
                  <li>• get on / get off</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  🚦 Traffic Problems (10)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• traffic / traffic jam</li>
                  <li>• congestion</li>
                  <li>• stuck (in traffic)</li>
                  <li>• accident / crash</li>
                  <li>• roadworks</li>
                  <li>• detour / diversion</li>
                  <li>• speeding</li>
                  <li>• fine / ticket</li>
                  <li>• run out of fuel</li>
                  <li>• flat tire</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  🛣️ Roads (10)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• road / street</li>
                  <li>• highway / motorway</li>
                  <li>• lane</li>
                  <li>• intersection</li>
                  <li>• roundabout</li>
                  <li>• traffic lights</li>
                  <li>• pedestrian crossing</li>
                  <li>• pavement / sidewalk</li>
                  <li>• bridge / tunnel</li>
                  <li>• toll road</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-teal-300">
                <h4 className="font-bold text-lg text-teal-900 mb-2">
                  ➕ Additional (10+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• journey / trip</li>
                  <li>• commuter</li>
                  <li>• carpool / rideshare</li>
                  <li>• pedestrian</li>
                  <li>• cyclist</li>
                  <li>• road sign</li>
                  <li>• GPS / navigation</li>
                  <li>• route</li>
                  <li>• transport system</li>
                  <li>• eco-friendly transport</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 mt-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">70</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-purple-900">1</p>
                  <p className="text-sm text-gray-700">Story</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">1</p>
                  <p className="text-sm text-gray-700">Exercise</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  🚗 <strong>Congratulations!</strong> You've mastered 70
                  essential Transport & Traffic vocabulary words! From driving
                  and public transport to traffic problems and road features —
                  you're now ready to navigate any city like a pro! Safe
                  travels! 🚦✨
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


