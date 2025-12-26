"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function TravelTourism({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="✈️ Travel & Tourism — Introduction">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🌍 Введение в Travel & Tourism
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                <strong>Travel & Tourism</strong> (Путешествия и туризм) — это
                не просто отдых, это исследование мира, новые культуры,
                невероятные приключения и незабываемые впечатления. От{" "}
                <strong>экотуризма</strong> в джунглях Амазонки до{" "}
                <strong>luxury resorts</strong> на Мальдивах, от{" "}
                <strong>backpacking</strong> по Европе до{" "}
                <strong>cruise</strong> по Средиземноморью — мир полон
                удивительных мест!
              </p>

              <p className="text-base leading-relaxed">
                В этом уроке вы освоите более <strong>150 слов</strong> о
                путешествиях: от бронирования билетов до незабываемых
                впечатлений, от планирования маршрута до решения проблем в пути.
                Plus интересные тексты о реальных путешествиях! 🗺️
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                🎯 Что вы освоите:
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>150+ слов о путешествиях и туризме</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Types of travel: backpacking, luxury, adventure, eco-tourism
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Accommodation: hotel, hostel, Airbnb, resort, camping
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Transportation: flight, train, cruise, road trip</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Planning: itinerary, booking, visa, insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Sightseeing: attractions, landmarks, museums</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Интересные тексты о путешествиях по миру</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🎒 Types of Travel — Типы путешествий
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. travel / trip / journey
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      путешествие / поездка / путь
                    </p>
                    <p className="text-sm italic">
                      I love to <strong>travel</strong> around the world.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      2. tourism / tourist
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      туризм / турист
                    </p>
                    <p className="text-sm italic">
                      <strong>Tourism</strong> is a major industry.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      3. vacation / holiday
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      отпуск / каникулы
                    </p>
                    <p className="text-sm italic">
                      I'm going on <strong>vacation</strong> to Greece.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. backpacking / backpacker
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      путешествие с рюкзаком / бэкпэкер
                    </p>
                    <p className="text-sm italic">
                      <strong>Backpacking</strong> through Europe is popular.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      5. luxury travel
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      роскошное путешествие
                    </p>
                    <p className="text-sm italic">
                      <strong>Luxury travel</strong> offers premium experiences.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      6. adventure travel
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      приключенческий туризм
                    </p>
                    <p className="text-sm italic">
                      <strong>Adventure travel</strong> includes hiking and
                      rafting.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      7. eco-tourism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">экотуризм</p>
                    <p className="text-sm italic">
                      <strong>Eco-tourism</strong> protects the environment.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. package tour
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      организованный тур
                    </p>
                    <p className="text-sm italic">
                      A <strong>package tour</strong> includes everything.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      9. solo travel
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      одиночное путешествие
                    </p>
                    <p className="text-sm italic">
                      <strong>Solo travel</strong> builds confidence.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      10. group tour
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">групповой тур</p>
                    <p className="text-sm italic">
                      <strong>Group tours</strong> are social and fun.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      11. cruise
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">круиз</p>
                    <p className="text-sm italic">
                      We went on a Mediterranean <strong>cruise</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      12. road trip
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      автопутешествие
                    </p>
                    <p className="text-sm italic">
                      A <strong>road trip</strong> across America is epic.
                    </p>
                  </div>

                  <div className="bg-fuchsia-50 rounded p-4">
                    <h4 className="font-bold text-fuchsia-900 text-lg mb-2">
                      13. city break
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      короткая поездка в город
                    </p>
                    <p className="text-sm italic">
                      A weekend <strong>city break</strong> in Paris.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. beach holiday
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">пляжный отдых</p>
                    <p className="text-sm italic">
                      <strong>Beach holidays</strong> are relaxing.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      15. cultural tourism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      культурный туризм
                    </p>
                    <p className="text-sm italic">
                      <strong>Cultural tourism</strong> explores history and
                      art.
                    </p>
                  </div>
                </div>
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
        <Section title="🏨 Accommodation">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🛏️ Размещение и проживание
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. accommodation",
                    "размещение",
                    "Book your <strong>accommodation</strong> in advance.",
                  ],
                  [
                    "2. hotel",
                    "отель",
                    "We stayed at a 5-star <strong>hotel</strong>.",
                  ],
                  [
                    "3. hostel",
                    "хостел",
                    "<strong>Hostels</strong> are budget-friendly.",
                  ],
                  [
                    "4. resort",
                    "курорт",
                    "The beach <strong>resort</strong> was amazing.",
                  ],
                  [
                    "5. Airbnb / vacation rental",
                    "Airbnb / аренда жилья",
                    "We rented an <strong>Airbnb</strong> apartment.",
                  ],
                  [
                    "6. bed and breakfast / B&B",
                    "мини-отель с завтраком",
                    "A cozy <strong>B&B</strong> in the countryside.",
                  ],
                  [
                    "7. campsite / camping",
                    "кемпинг",
                    "<strong>Camping</strong> is adventurous and cheap.",
                  ],
                  [
                    "8. check-in / check-out",
                    "регистрация заезда / выезда",
                    "<strong>Check-in</strong> is at 2 PM.",
                  ],
                  [
                    "9. reservation / booking",
                    "бронирование",
                    "Make a <strong>reservation</strong> online.",
                  ],
                  [
                    "10. room service",
                    "обслуживание в номер",
                    "We ordered <strong>room service</strong>.",
                  ],
                  [
                    "11. all-inclusive",
                    "всё включено",
                    "An <strong>all-inclusive</strong> package.",
                  ],
                  [
                    "12. half-board / full-board",
                    "полупансион / полный пансион",
                    "<strong>Full-board</strong> includes all meals.",
                  ],
                  [
                    "13. single/double/twin room",
                    "одноместный/двухместный номер",
                    "I booked a <strong>double room</strong>.",
                  ],
                  [
                    "14. suite",
                    "люкс",
                    "The presidential <strong>suite</strong> is huge.",
                  ],
                  [
                    "15. amenities",
                    "удобства",
                    "The hotel has great <strong>amenities</strong>.",
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
        <Section title="🚆 Transportation">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300 mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              🚗 Транспорт и передвижение
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. flight / airplane",
                    "полёт / самолёт",
                    "The <strong>flight</strong> takes 8 hours.",
                  ],
                  [
                    "2. train",
                    "поезд",
                    "Take the <strong>train</strong> to Paris.",
                  ],
                  [
                    "3. bus / coach",
                    "автобус / междугородный автобус",
                    "A <strong>bus</strong> tour around Europe.",
                  ],
                  [
                    "4. taxi / cab",
                    "такси",
                    "Call a <strong>taxi</strong> to the airport.",
                  ],
                  [
                    "5. rental car",
                    "арендованная машина",
                    "We got a <strong>rental car</strong>.",
                  ],
                  [
                    "6. public transport",
                    "общественный транспорт",
                    "Use <strong>public transport</strong> to save money.",
                  ],
                  [
                    "7. subway / metro / underground",
                    "метро",
                    "The <strong>subway</strong> is fastest.",
                  ],
                  [
                    "8. ferry / boat",
                    "паром / лодка",
                    "Take a <strong>ferry</strong> to the island.",
                  ],
                  [
                    "9. transfer",
                    "пересадка / трансфер",
                    "There's a <strong>transfer</strong> in Istanbul.",
                  ],
                  [
                    "10. direct flight",
                    "прямой рейс",
                    "Book a <strong>direct flight</strong>.",
                  ],
                  [
                    "11. layover / stopover",
                    "остановка / пересадка",
                    "We have a 3-hour <strong>layover</strong>.",
                  ],
                  [
                    "12. departure / arrival",
                    "отправление / прибытие",
                    "<strong>Departure</strong> time is 10 AM.",
                  ],
                  [
                    "13. boarding pass",
                    "посадочный талон",
                    "Show your <strong>boarding pass</strong>.",
                  ],
                  [
                    "14. luggage / baggage",
                    "багаж",
                    "Check your <strong>luggage</strong> at the counter.",
                  ],
                  [
                    "15. ticket",
                    "билет",
                    "Buy your <strong>ticket</strong> online.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-orange-50 to-amber-50 rounded p-3"
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
        <Section title="📋 Planning & Booking">
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              📝 Планирование и бронирование
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. itinerary",
                    "маршрут / план поездки",
                    "Create a detailed <strong>itinerary</strong>.",
                  ],
                  [
                    "2. destination",
                    "место назначения",
                    "What's your <strong>destination</strong>?",
                  ],
                  [
                    "3. book / reserve",
                    "забронировать",
                    "<strong>Book</strong> your hotel now.",
                  ],
                  [
                    "4. travel agency",
                    "туристическое агентство",
                    "Contact a <strong>travel agency</strong>.",
                  ],
                  ["5. visa", "виза", "Apply for a <strong>visa</strong>."],
                  [
                    "6. passport",
                    "паспорт",
                    "Your <strong>passport</strong> must be valid.",
                  ],
                  [
                    "7. travel insurance",
                    "страховка путешественника",
                    "Get <strong>travel insurance</strong>.",
                  ],
                  [
                    "8. budget",
                    "бюджет",
                    "Set a realistic <strong>budget</strong>.",
                  ],
                  [
                    "9. off-season / peak season",
                    "низкий/высокий сезон",
                    "Travel in <strong>off-season</strong> for deals.",
                  ],
                  [
                    "10. advance booking",
                    "раннее бронирование",
                    "<strong>Advance booking</strong> saves money.",
                  ],
                  [
                    "11. cancellation policy",
                    "правила отмены",
                    "Check the <strong>cancellation policy</strong>.",
                  ],
                  [
                    "12. travel guide / guidebook",
                    "путеводитель",
                    "Buy a <strong>travel guide</strong>.",
                  ],
                  [
                    "13. exchange rate",
                    "обменный курс",
                    "Check the <strong>exchange rate</strong>.",
                  ],
                  [
                    "14. currency",
                    "валюта",
                    "Exchange <strong>currency</strong> before you go.",
                  ],
                  [
                    "15. vaccination",
                    "прививка",
                    "Get required <strong>vaccinations</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-purple-50 to-violet-50 rounded p-3"
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
        <Section title="✈️ At the Airport & Hotel">
          <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg p-6 border-2 border-cyan-300 mb-6">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              🛫 В аэропорту и отеле
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. airport",
                    "аэропорт",
                    "Arrive at the <strong>airport</strong> 2 hours early.",
                  ],
                  [
                    "2. terminal",
                    "терминал",
                    "Go to <strong>terminal</strong> 2.",
                  ],
                  [
                    "3. gate",
                    "выход на посадку",
                    "Board at <strong>gate</strong> 12.",
                  ],
                  [
                    "4. security check",
                    "проверка безопасности",
                    "Pass <strong>security check</strong>.",
                  ],
                  [
                    "5. customs / immigration",
                    "таможня / иммиграция",
                    "Go through <strong>customs</strong>.",
                  ],
                  [
                    "6. duty-free",
                    "беспошлинная торговля",
                    "Shop at <strong>duty-free</strong>.",
                  ],
                  [
                    "7. baggage claim",
                    "выдача багажа",
                    "Collect bags at <strong>baggage claim</strong>.",
                  ],
                  [
                    "8. delayed / cancelled",
                    "задержан / отменён",
                    "The flight is <strong>delayed</strong>.",
                  ],
                  [
                    "9. hotel lobby",
                    "вестибюль отеля",
                    "Meet in the <strong>hotel lobby</strong>.",
                  ],
                  [
                    "10. reception / front desk",
                    "стойка регистрации",
                    "Ask at <strong>reception</strong>.",
                  ],
                  [
                    "11. concierge",
                    "консьерж",
                    "The <strong>concierge</strong> can help.",
                  ],
                  [
                    "12. room key / key card",
                    "ключ от номера",
                    "Here's your <strong>key card</strong>.",
                  ],
                  [
                    "13. Wi-Fi password",
                    "пароль Wi-Fi",
                    "What's the <strong>Wi-Fi password</strong>?",
                  ],
                  [
                    "14. wake-up call",
                    "побудка",
                    "Request a <strong>wake-up call</strong>.",
                  ],
                  [
                    "15. housekeeping",
                    "уборка номеров",
                    "<strong>Housekeeping</strong> comes daily.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded p-3"
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
        <Section title="🏛️ Sightseeing & Attractions">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border-2 border-pink-300 mb-6">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">
              📸 Осмотр достопримечательностей
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-pink-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. sightseeing",
                    "осмотр достопримечательностей",
                    "Let's go <strong>sightseeing</strong> today.",
                  ],
                  [
                    "2. landmark",
                    "достопримечательность",
                    "The Eiffel Tower is a famous <strong>landmark</strong>.",
                  ],
                  [
                    "3. attraction",
                    "аттракцион / место интереса",
                    "Top <strong>attractions</strong> in Rome.",
                  ],
                  [
                    "4. monument",
                    "памятник",
                    "Visit historical <strong>monuments</strong>.",
                  ],
                  [
                    "5. museum",
                    "музей",
                    "The Louvre <strong>museum</strong> is huge.",
                  ],
                  [
                    "6. gallery / art gallery",
                    "галерея",
                    "Explore modern art <strong>galleries</strong>.",
                  ],
                  [
                    "7. guided tour",
                    "экскурсия с гидом",
                    "Join a <strong>guided tour</strong>.",
                  ],
                  [
                    "8. audio guide",
                    "аудиогид",
                    "Rent an <strong>audio guide</strong>.",
                  ],
                  [
                    "9. entrance fee / admission",
                    "входная плата",
                    "The <strong>entrance fee</strong> is $10.",
                  ],
                  [
                    "10. souvenir",
                    "сувенир",
                    "Buy <strong>souvenirs</strong> for friends.",
                  ],
                  [
                    "11. viewpoint / scenic spot",
                    "смотровая площадка",
                    "Amazing <strong>viewpoint</strong> from the hill.",
                  ],
                  [
                    "12. take photos",
                    "фотографировать",
                    "<strong>Take photos</strong> at the beach.",
                  ],
                  [
                    "13. historic site",
                    "исторический объект",
                    "Explore <strong>historic sites</strong>.",
                  ],
                  [
                    "14. local market",
                    "местный рынок",
                    "Visit a <strong>local market</strong>.",
                  ],
                  [
                    "15. cathedral / temple / mosque",
                    "собор / храм / мечеть",
                    "The <strong>cathedral</strong> is stunning.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-pink-50 to-rose-50 rounded p-3"
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
        <Section title="🏄 Activities & Experiences">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              🎿 Активности и впечатления
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. hiking / trekking",
                    "пеший туризм / трекинг",
                    "<strong>Hiking</strong> in the mountains is amazing.",
                  ],
                  [
                    "2. snorkeling / diving",
                    "снорклинг / дайвинг",
                    "Go <strong>snorkeling</strong> in clear water.",
                  ],
                  [
                    "3. safari",
                    "сафари",
                    "An African <strong>safari</strong> adventure.",
                  ],
                  [
                    "4. skiing / snowboarding",
                    "лыжи / сноуборд",
                    "<strong>Skiing</strong> in the Alps.",
                  ],
                  [
                    "5. surfing",
                    "сёрфинг",
                    "Learn <strong>surfing</strong> in Bali.",
                  ],
                  [
                    "6. kayaking / canoeing",
                    "каякинг / гребля на каноэ",
                    "<strong>Kayaking</strong> down the river.",
                  ],
                  [
                    "7. zip-lining",
                    "полёт на зиплайне",
                    "<strong>Zip-lining</strong> through the jungle.",
                  ],
                  [
                    "8. rock climbing",
                    "скалолазание",
                    "Try <strong>rock climbing</strong>.",
                  ],
                  [
                    "9. bungee jumping",
                    "банджи-джампинг",
                    "<strong>Bungee jumping</strong> is thrilling.",
                  ],
                  [
                    "10. paragliding",
                    "параглайдинг",
                    "<strong>Paragliding</strong> over the coast.",
                  ],
                  [
                    "11. local cuisine",
                    "местная кухня",
                    "Try the <strong>local cuisine</strong>.",
                  ],
                  [
                    "12. nightlife",
                    "ночная жизнь",
                    "Experience the <strong>nightlife</strong>.",
                  ],
                  [
                    "13. festival / event",
                    "фестиваль / событие",
                    "Attend a local <strong>festival</strong>.",
                  ],
                  [
                    "14. relax / unwind",
                    "отдыхать / расслабляться",
                    "Just <strong>relax</strong> on the beach.",
                  ],
                  [
                    "15. immerse in culture",
                    "погрузиться в культуру",
                    "<strong>Immerse</strong> yourself in the culture.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded p-3"
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
        <Section title="⚠️ Travel Problems">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🚨 Проблемы в путешествии
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. lost / missing",
                    "потерян / пропал",
                    "My luggage is <strong>lost</strong>!",
                  ],
                  [
                    "2. stolen",
                    "украден",
                    "My wallet was <strong>stolen</strong>.",
                  ],
                  [
                    "3. delayed",
                    "задержан",
                    "The flight is <strong>delayed</strong> 3 hours.",
                  ],
                  [
                    "4. overbooked",
                    "перебронирован",
                    "The hotel is <strong>overbooked</strong>.",
                  ],
                  [
                    "5. food poisoning",
                    "пищевое отравление",
                    "I got <strong>food poisoning</strong>.",
                  ],
                  [
                    "6. jet lag",
                    "джетлаг",
                    "I'm suffering from <strong>jet lag</strong>.",
                  ],
                  [
                    "7. language barrier",
                    "языковой барьер",
                    "There's a <strong>language barrier</strong>.",
                  ],
                  [
                    "8. scam / tourist trap",
                    "мошенничество / ловушка для туристов",
                    "Avoid <strong>tourist traps</strong>.",
                  ],
                  [
                    "9. emergency",
                    "экстренная ситуация",
                    "Call in case of <strong>emergency</strong>.",
                  ],
                  [
                    "10. travel clinic",
                    "туристическая клиника",
                    "Visit a <strong>travel clinic</strong>.",
                  ],
                  [
                    "11. embassy / consulate",
                    "посольство / консульство",
                    "Contact the <strong>embassy</strong>.",
                  ],
                  [
                    "12. travel warning",
                    "предупреждение для путешественников",
                    "Check <strong>travel warnings</strong>.",
                  ],
                  [
                    "13. refund",
                    "возврат денег",
                    "Request a <strong>refund</strong>.",
                  ],
                  [
                    "14. complaint",
                    "жалоба",
                    "File a <strong>complaint</strong>.",
                  ],
                  [
                    "15. assistance",
                    "помощь",
                    "Ask for <strong>assistance</strong>.",
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

  if (step === 9) {
    return (
      <>
        <Section title="📖 Reading: An Unforgettable Journey">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              ✈️ Текст: Незабываемое путешествие
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-4">
              <h4 className="text-xl font-bold text-indigo-800 mb-3">
                Backpacking Through Southeast Asia
              </h4>

              <p className="text-base leading-relaxed mb-4">
                Last year, I embarked on an incredible{" "}
                <strong>solo travel</strong> adventure through Southeast Asia.
                My <strong>itinerary</strong> included Thailand, Vietnam,
                Cambodia, and Laos — four months of pure{" "}
                <strong>backpacking</strong> bliss. I <strong>booked</strong> my{" "}
                <strong>flight</strong> six months in advance to get a good
                deal, applied for my <strong>visa</strong>, and bought
                comprehensive <strong>travel insurance</strong>. My backpack
                contained everything I needed for the journey.
              </p>

              <p className="text-base leading-relaxed mb-4">
                I started in Bangkok, Thailand. The <strong>hostel</strong> I
                stayed at was full of other <strong>backpackers</strong> from
                around the world. We went <strong>sightseeing</strong> together,
                visiting magnificent <strong>temples</strong>, exploring{" "}
                <strong>local markets</strong>, and trying authentic{" "}
                <strong>local cuisine</strong> — pad thai, green curry, and
                mango sticky rice were my favorites. The{" "}
                <strong>nightlife</strong> in Bangkok was electric, but I also
                loved the peaceful moments at ancient <strong>landmarks</strong>
                .
              </p>

              <p className="text-base leading-relaxed mb-4">
                In Vietnam, I took an overnight <strong>train</strong> from
                Hanoi to Hoi An. The journey was an <strong>adventure</strong>{" "}
                itself. I stayed in a charming <strong>Airbnb</strong> and spent
                days <strong>hiking</strong> through rice terraces and{" "}
                <strong>kayaking</strong> in Ha Long Bay. The{" "}
                <strong>viewpoints</strong> were breathtaking — perfect for{" "}
                <strong>taking photos</strong>. I also joined a{" "}
                <strong>guided tour</strong> to learn about the Vietnam War
                history.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Cambodia was next. The magnificent temples of Angkor Wat left me
                speechless. I woke up at 5 AM for a sunrise{" "}
                <strong>guided tour</strong> — absolutely worth the early
                wake-up call. The <strong>entrance fee</strong> was steep, but
                this <strong>historic site</strong> is a UNESCO World Heritage
                treasure. I bought handmade <strong>souvenirs</strong> from
                local artisans to support their community — a principle of{" "}
                <strong>eco-tourism</strong> I believe in.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Of course, not everything went smoothly. In Laos, my bag got{" "}
                <strong>lost</strong> for two days, and I experienced some{" "}
                <strong>jet lag</strong> when crossing time zones. The{" "}
                <strong>language barrier</strong> was challenging at times, but
                locals were incredibly patient and helpful. These small{" "}
                <strong>problems</strong> became part of the adventure and
                taught me resilience.
              </p>

              <p className="text-base leading-relaxed">
                Looking back, this trip was life-changing.{" "}
                <strong>Backpacking</strong> taught me independence, opened my
                mind to different cultures, and showed me that the world is full
                of kind people. The <strong>local cuisine</strong>, stunning{" "}
                <strong>landmarks</strong>, thrilling{" "}
                <strong>activities</strong> like <strong>zip-lining</strong>{" "}
                through jungles, and meaningful connections with fellow
                travelers made this the most{" "}
                <strong>unforgettable journey</strong> of my life. I'm already
                planning my next <strong>adventure travel</strong> — maybe South
                America next time! 🌎
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. Which countries did the traveler visit?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Thailand, Vietnam, Cambodia, and Laos.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What type of accommodation did they mainly use?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Hostels and Airbnb.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What was the most impressive landmark?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → The temples of Angkor Wat in Cambodia.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What problems did the traveler encounter?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Lost luggage, jet lag, and language barriers.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What activities did they enjoy?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Hiking, kayaking, zip-lining, trying local cuisine, and
                    sightseeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="📚 Complete Vocabulary + Exercises">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              📝 Practice Exercise
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Fill in the blanks with the correct travel vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. I need to",
                    answers: ["book", "reserve"],
                    right: "a hotel room for next week.",
                    wide: true,
                  },
                  {
                    left: "2. The",
                    answers: ["flight"],
                    right: "was delayed for 3 hours.",
                    wide: true,
                  },
                  {
                    left: "3. We stayed at a budget",
                    answers: ["hostel"],
                    right: "in the city center.",
                    wide: true,
                  },
                  {
                    left: "4. Let's go",
                    answers: ["sightseeing"],
                    right: "and visit the main attractions.",
                    wide: true,
                  },
                  {
                    left: "5. I love",
                    answers: ["backpacking"],
                    right: "through Europe.",
                    wide: true,
                  },
                  {
                    left: "6. Don't forget your",
                    answers: ["passport"],
                    right: "at the airport!",
                    wide: true,
                  },
                ]}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🎓 Complete Vocabulary List (150+ Words)
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  🎒 Types of Travel (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• travel / trip / journey</li>
                  <li>• tourism / tourist</li>
                  <li>• vacation / holiday</li>
                  <li>• backpacking / backpacker</li>
                  <li>• luxury travel</li>
                  <li>• adventure travel</li>
                  <li>• eco-tourism</li>
                  <li>• package tour</li>
                  <li>• solo travel</li>
                  <li>• group tour</li>
                  <li>• cruise</li>
                  <li>• road trip</li>
                  <li>• city break</li>
                  <li>• beach holiday</li>
                  <li>• cultural tourism</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🏨 Accommodation (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• accommodation</li>
                  <li>• hotel</li>
                  <li>• hostel</li>
                  <li>• resort</li>
                  <li>• Airbnb / vacation rental</li>
                  <li>• B&B (bed and breakfast)</li>
                  <li>• campsite / camping</li>
                  <li>• check-in / check-out</li>
                  <li>• reservation / booking</li>
                  <li>• room service</li>
                  <li>• all-inclusive</li>
                  <li>• half-board / full-board</li>
                  <li>• single/double/twin room</li>
                  <li>• suite</li>
                  <li>• amenities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                <h4 className="font-bold text-lg text-orange-900 mb-2">
                  🚆 Transportation (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• flight / airplane</li>
                  <li>• train</li>
                  <li>• bus / coach</li>
                  <li>• taxi / cab</li>
                  <li>• rental car</li>
                  <li>• public transport</li>
                  <li>• subway / metro</li>
                  <li>• ferry / boat</li>
                  <li>• transfer</li>
                  <li>• direct flight</li>
                  <li>• layover / stopover</li>
                  <li>• departure / arrival</li>
                  <li>• boarding pass</li>
                  <li>• luggage / baggage</li>
                  <li>• ticket</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  📋 Planning (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• itinerary</li>
                  <li>• destination</li>
                  <li>• book / reserve</li>
                  <li>• travel agency</li>
                  <li>• visa</li>
                  <li>• passport</li>
                  <li>• travel insurance</li>
                  <li>• budget</li>
                  <li>• off-season / peak season</li>
                  <li>• advance booking</li>
                  <li>• cancellation policy</li>
                  <li>• travel guide / guidebook</li>
                  <li>• exchange rate</li>
                  <li>• currency</li>
                  <li>• vaccination</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-cyan-300">
                <h4 className="font-bold text-lg text-cyan-900 mb-2">
                  ✈️ Airport & Hotel (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• airport</li>
                  <li>• terminal</li>
                  <li>• gate</li>
                  <li>• security check</li>
                  <li>• customs / immigration</li>
                  <li>• duty-free</li>
                  <li>• baggage claim</li>
                  <li>• delayed / cancelled</li>
                  <li>• hotel lobby</li>
                  <li>• reception / front desk</li>
                  <li>• concierge</li>
                  <li>• room key / key card</li>
                  <li>• Wi-Fi password</li>
                  <li>• wake-up call</li>
                  <li>• housekeeping</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-pink-300">
                <h4 className="font-bold text-lg text-pink-900 mb-2">
                  🏛️ Sightseeing (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• sightseeing</li>
                  <li>• landmark</li>
                  <li>• attraction</li>
                  <li>• monument</li>
                  <li>• museum</li>
                  <li>• gallery / art gallery</li>
                  <li>• guided tour</li>
                  <li>• audio guide</li>
                  <li>• entrance fee / admission</li>
                  <li>• souvenir</li>
                  <li>• viewpoint / scenic spot</li>
                  <li>• take photos</li>
                  <li>• historic site</li>
                  <li>• local market</li>
                  <li>• cathedral / temple / mosque</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  🏄 Activities (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• hiking / trekking</li>
                  <li>• snorkeling / diving</li>
                  <li>• safari</li>
                  <li>• skiing / snowboarding</li>
                  <li>• surfing</li>
                  <li>• kayaking / canoeing</li>
                  <li>• zip-lining</li>
                  <li>• rock climbing</li>
                  <li>• bungee jumping</li>
                  <li>• paragliding</li>
                  <li>• local cuisine</li>
                  <li>• nightlife</li>
                  <li>• festival / event</li>
                  <li>• relax / unwind</li>
                  <li>• immerse in culture</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  ⚠️ Problems (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• lost / missing</li>
                  <li>• stolen</li>
                  <li>• delayed</li>
                  <li>• overbooked</li>
                  <li>• food poisoning</li>
                  <li>• jet lag</li>
                  <li>• language barrier</li>
                  <li>• scam / tourist trap</li>
                  <li>• emergency</li>
                  <li>• travel clinic</li>
                  <li>• embassy / consulate</li>
                  <li>• travel warning</li>
                  <li>• refund</li>
                  <li>• complaint</li>
                  <li>• assistance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  ➕ Additional (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• explore</li>
                  <li>• wander</li>
                  <li>• discover</li>
                  <li>• experience</li>
                  <li>• adventure</li>
                  <li>• memorable</li>
                  <li>• breathtaking</li>
                  <li>• stunning</li>
                  <li>• picturesque</li>
                  <li>• authentic</li>
                  <li>• off the beaten path</li>
                  <li>• hidden gem</li>
                  <li>• bucket list</li>
                  <li>• travel light</li>
                  <li>• wanderlust</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mt-6 border-2 border-blue-300">
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
                  <p className="text-sm text-gray-700">Reading Text</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">1</p>
                  <p className="text-sm text-gray-700">Exercise</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  ✈️ <strong>Congratulations!</strong> You've mastered 150+
                  essential Travel & Tourism vocabulary words! From planning
                  your trip to solving problems on the road, from booking
                  accommodation to experiencing adventures — you're now ready to
                  travel the world with confidence! 🌍🎒
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
