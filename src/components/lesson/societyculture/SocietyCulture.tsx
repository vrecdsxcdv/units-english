"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function SocietyCulture({
  step,
  lessonKey,
}: {
  step: number;
  lessonKey: string;
}) {
  if (step === 1) {
    return (
      <>
        <Section title="🎭 Introduction + Traditions & Customs">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🌍 Society & Culture — Общество и культура
            </h3>

            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-purple-200">
              <p className="text-base leading-relaxed mb-3">
                Every society has its unique <strong>culture</strong> — a system
                of shared
                <strong>beliefs</strong>, <strong>values</strong>, and{" "}
                <strong>traditions</strong> that shape how people live,
                interact, and understand the world. From ancient
                <strong>customs</strong> passed down through generations to
                modern social
                <strong>norms</strong>, culture defines who we are and how we
                relate to others.
              </p>
              <p className="text-base leading-relaxed">
                In this lesson, we'll explore <strong>traditions</strong>,{" "}
                <strong>etiquette</strong>, the <strong>generation gap</strong>,{" "}
                <strong>diversity</strong>, and the challenges of
                <strong>prejudice</strong> in our multicultural world. 🌏✨
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300 mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              🎉 Traditions & Customs — Традиции и обычаи
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. tradition",
                    "традиция",
                    "Family <strong>traditions</strong> bring us together.",
                  ],
                  [
                    "2. custom",
                    "обычай",
                    "It's a local <strong>custom</strong> to bow when greeting.",
                  ],
                  [
                    "3. ritual",
                    "ритуал",
                    "Wedding <strong>rituals</strong> vary across cultures.",
                  ],
                  [
                    "4. ceremony",
                    "церемония",
                    "The graduation <strong>ceremony</strong> was emotional.",
                  ],
                  [
                    "5. celebration / festival",
                    "празднование / фестиваль",
                    "Christmas is a major <strong>celebration</strong>.",
                  ],
                  [
                    "6. heritage",
                    "наследие",
                    "We must preserve our cultural <strong>heritage</strong>.",
                  ],
                  [
                    "7. folklore",
                    "фольклор",
                    "<strong>Folklore</strong> includes myths and legends.",
                  ],
                  [
                    "8. ancestor / descendant",
                    "предок / потомок",
                    "My <strong>ancestors</strong> came from Italy.",
                  ],
                  [
                    "9. pass down / hand down",
                    "передавать (из поколения в поколение)",
                    "These recipes are <strong>passed down</strong> from grandmother.",
                  ],
                  [
                    "10. preserve / uphold",
                    "сохранять / поддерживать",
                    "We <strong>preserve</strong> ancient traditions.",
                  ],
                  [
                    "11. indigenous / native",
                    "коренной / местный",
                    "<strong>Indigenous</strong> peoples have unique cultures.",
                  ],
                  [
                    "12. ethnic group",
                    "этническая группа",
                    "Many <strong>ethnic groups</strong> live in harmony.",
                  ],
                  [
                    "13. cultural identity",
                    "культурная идентичность",
                    "Language shapes our <strong>cultural identity</strong>.",
                  ],
                  [
                    "14. assimilate / integrate",
                    "ассимилироваться / интегрироваться",
                    "Immigrants <strong>integrate</strong> into new societies.",
                  ],
                  [
                    "15. cultural exchange",
                    "культурный обмен",
                    "<strong>Cultural exchange</strong> promotes understanding.",
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

  if (step === 2) {
    return (
      <>
        <Section title="💎 Cultural Values">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              ⭐ Культурные ценности
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. value / belief",
                    "ценность / убеждение",
                    "Family <strong>values</strong> are important to us.",
                  ],
                  [
                    "2. individualism",
                    "индивидуализм",
                    "Western cultures emphasize <strong>individualism</strong>.",
                  ],
                  [
                    "3. collectivism",
                    "коллективизм",
                    "Asian cultures often value <strong>collectivism</strong>.",
                  ],
                  [
                    "4. hierarchy",
                    "иерархия",
                    "Respect for <strong>hierarchy</strong> is traditional.",
                  ],
                  [
                    "5. equality / egalitarian",
                    "равенство / эгалитарный",
                    "Scandinavian societies are <strong>egalitarian</strong>.",
                  ],
                  [
                    "6. honor / dignity",
                    "честь / достоинство",
                    "<strong>Honor</strong> is highly valued in some cultures.",
                  ],
                  [
                    "7. modesty / humility",
                    "скромность / смирение",
                    "<strong>Modesty</strong> is considered a virtue.",
                  ],
                  [
                    "8. hospitality",
                    "гостеприимство",
                    "Middle Eastern <strong>hospitality</strong> is legendary.",
                  ],
                  [
                    "9. punctuality",
                    "пунктуальность",
                    "Germans value <strong>punctuality</strong>.",
                  ],
                  [
                    "10. face-saving",
                    "сохранение лица",
                    "<strong>Face-saving</strong> is crucial in East Asia.",
                  ],
                  [
                    "11. direct / indirect communication",
                    "прямое / косвенное общение",
                    "Americans prefer <strong>direct communication</strong>.",
                  ],
                  [
                    "12. work ethic",
                    "трудовая этика",
                    "A strong <strong>work ethic</strong> is admired.",
                  ],
                  [
                    "13. family-oriented",
                    "ориентированный на семью",
                    "Latin cultures are very <strong>family-oriented</strong>.",
                  ],
                  [
                    "14. religious / secular",
                    "религиозный / светский",
                    "France is a <strong>secular</strong> state.",
                  ],
                  [
                    "15. materialism / spirituality",
                    "материализм / духовность",
                    "Some cultures prioritize <strong>spirituality</strong>.",
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

  if (step === 3) {
    return (
      <>
        <Section title="🤝 Social Norms & Etiquette">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🎩 Социальные нормы и этикет
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. social norm",
                    "социальная норма",
                    "<strong>Social norms</strong> guide behavior.",
                  ],
                  [
                    "2. etiquette / manners",
                    "этикет / манеры",
                    "Good <strong>manners</strong> show respect.",
                  ],
                  [
                    "3. polite / rude",
                    "вежливый / грубый",
                    "It's <strong>rude</strong> to interrupt.",
                  ],
                  [
                    "4. appropriate / inappropriate",
                    "уместный / неуместный",
                    "Casual dress is <strong>inappropriate</strong> here.",
                  ],
                  [
                    "5. taboo",
                    "табу",
                    "Some topics are <strong>taboo</strong> in conversation.",
                  ],
                  [
                    "6. personal space",
                    "личное пространство",
                    "Americans value <strong>personal space</strong>.",
                  ],
                  [
                    "7. eye contact",
                    "зрительный контакт",
                    "<strong>Eye contact</strong> shows confidence.",
                  ],
                  [
                    "8. handshake / bow / kiss",
                    "рукопожатие / поклон / поцелуй",
                    "A firm <strong>handshake</strong> is professional.",
                  ],
                  [
                    "9. small talk",
                    "светская беседа",
                    "<strong>Small talk</strong> breaks the ice.",
                  ],
                  [
                    "10. dress code",
                    "дресс-код",
                    "Follow the office <strong>dress code</strong>.",
                  ],
                  [
                    "11. gift-giving",
                    "дарение подарков",
                    "<strong>Gift-giving</strong> has cultural rules.",
                  ],
                  [
                    "12. table manners",
                    "манеры за столом",
                    "Good <strong>table manners</strong> are essential.",
                  ],
                  [
                    "13. tipping",
                    "чаевые",
                    "<strong>Tipping</strong> customs vary widely.",
                  ],
                  [
                    "14. queuing / cutting in line",
                    "стояние в очереди / влезание без очереди",
                    "<strong>Cutting in line</strong> is offensive.",
                  ],
                  [
                    "15. body language",
                    "язык тела",
                    "<strong>Body language</strong> communicates a lot.",
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

  if (step === 4) {
    return (
      <>
        <Section title="👵👶 Generation Gap">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border-2 border-pink-300 mb-6">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">
              ⏳ Разница поколений
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-pink-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. generation gap",
                    "разрыв поколений",
                    "The <strong>generation gap</strong> is widening.",
                  ],
                  [
                    "2. Baby Boomers",
                    "Бэби-бумеры (1946-1964)",
                    "<strong>Baby Boomers</strong> grew up post-WWII.",
                  ],
                  [
                    "3. Generation X",
                    "Поколение X (1965-1980)",
                    "<strong>Gen X</strong> witnessed the digital revolution.",
                  ],
                  [
                    "4. Millennials / Gen Y",
                    "Миллениалы (1981-1996)",
                    "<strong>Millennials</strong> are tech-savvy.",
                  ],
                  [
                    "5. Gen Z",
                    "Поколение Z (1997-2012)",
                    "<strong>Gen Z</strong> grew up with smartphones.",
                  ],
                  [
                    "6. elderly / senior",
                    "пожилой / старший",
                    "Respect <strong>elderly</strong> people.",
                  ],
                  [
                    "7. youth / teenager",
                    "молодёжь / подросток",
                    "<strong>Youth</strong> culture is influential.",
                  ],
                  [
                    "8. old-fashioned / outdated",
                    "старомодный / устаревший",
                    "Those ideas are <strong>old-fashioned</strong>.",
                  ],
                  [
                    "9. modern / progressive",
                    "современный / прогрессивный",
                    "Young people have <strong>progressive</strong> views.",
                  ],
                  [
                    "10. conservative / traditional",
                    "консервативный / традиционный",
                    "Older generations are more <strong>conservative</strong>.",
                  ],
                  [
                    "11. rebel / conform",
                    "бунтовать / соответствовать",
                    "Teenagers often <strong>rebel</strong>.",
                  ],
                  [
                    "12. clash / conflict",
                    "столкновение / конфликт",
                    "Values <strong>clash</strong> between generations.",
                  ],
                  [
                    "13. bridge the gap",
                    "преодолеть разрыв",
                    "We must <strong>bridge the gap</strong>.",
                  ],
                  [
                    "14. respect elders",
                    "уважать старших",
                    "Many cultures <strong>respect elders</strong>.",
                  ],
                  [
                    "15. digital native",
                    "цифровой абориген",
                    "Gen Z are <strong>digital natives</strong>.",
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

  if (step === 5) {
    return (
      <>
        <Section title="🌈 Diversity & Inclusion">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-6 border-2 border-violet-300 mb-6">
            <h3 className="text-2xl font-bold text-violet-900 mb-4">
              🤝 Разнообразие и инклюзия
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-violet-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. diversity",
                    "разнообразие",
                    "Cultural <strong>diversity</strong> enriches society.",
                  ],
                  [
                    "2. multicultural",
                    "мультикультурный",
                    "Canada is a <strong>multicultural</strong> nation.",
                  ],
                  [
                    "3. inclusion / inclusive",
                    "инклюзия / инклюзивный",
                    "We promote <strong>inclusive</strong> policies.",
                  ],
                  [
                    "4. tolerance / tolerant",
                    "толерантность / толерантный",
                    "<strong>Tolerance</strong> is a virtue.",
                  ],
                  [
                    "5. acceptance",
                    "принятие",
                    "We seek <strong>acceptance</strong> for all.",
                  ],
                  [
                    "6. minority / majority",
                    "меньшинство / большинство",
                    "Protect <strong>minority</strong> rights.",
                  ],
                  [
                    "7. immigrant / migrant",
                    "иммигрант / мигрант",
                    "<strong>Immigrants</strong> contribute to society.",
                  ],
                  [
                    "8. refugee",
                    "беженец",
                    "<strong>Refugees</strong> flee persecution.",
                  ],
                  [
                    "9. integration",
                    "интеграция",
                    "<strong>Integration</strong> benefits everyone.",
                  ],
                  [
                    "10. cultural sensitivity",
                    "культурная чувствительность",
                    "<strong>Cultural sensitivity</strong> prevents offense.",
                  ],
                  [
                    "11. open-minded",
                    "открытый (к новому)",
                    "Be <strong>open-minded</strong> to differences.",
                  ],
                  [
                    "12. cosmopolitan",
                    "космополитный",
                    "New York is a <strong>cosmopolitan</strong> city.",
                  ],
                  [
                    "13. melting pot",
                    "плавильный котёл",
                    "America is a cultural <strong>melting pot</strong>.",
                  ],
                  [
                    "14. cross-cultural",
                    "межкультурный",
                    "<strong>Cross-cultural</strong> understanding is key.",
                  ],
                  [
                    "15. celebrate differences",
                    "праздновать различия",
                    "We <strong>celebrate differences</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-violet-50 to-purple-50 rounded p-3"
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
        <Section title="⚠️ Prejudice & Discrimination">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🚫 Предрассудки и дискриминация
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. prejudice / bias",
                    "предрассудок / предвзятость",
                    "Fight against <strong>prejudice</strong>.",
                  ],
                  [
                    "2. discrimination",
                    "дискриминация",
                    "<strong>Discrimination</strong> is illegal.",
                  ],
                  [
                    "3. racism / racist",
                    "расизм / расист",
                    "<strong>Racism</strong> has no place here.",
                  ],
                  [
                    "4. sexism / sexist",
                    "сексизм / сексист",
                    "<strong>Sexism</strong> limits opportunities.",
                  ],
                  [
                    "5. ageism",
                    "дискриминация по возрасту",
                    "<strong>Ageism</strong> affects older workers.",
                  ],
                  [
                    "6. stereotype",
                    "стереотип",
                    "Don't believe in <strong>stereotypes</strong>.",
                  ],
                  [
                    "7. stigma / stigmatize",
                    "стигма / стигматизировать",
                    "Mental illness carries <strong>stigma</strong>.",
                  ],
                  [
                    "8. marginalize",
                    "маргинализировать",
                    "Society <strong>marginalizes</strong> the poor.",
                  ],
                  [
                    "9. oppression / oppress",
                    "угнетение / угнетать",
                    "Colonial <strong>oppression</strong> lasted centuries.",
                  ],
                  [
                    "10. xenophobia",
                    "ксенофобия",
                    "<strong>Xenophobia</strong> fears foreigners.",
                  ],
                  [
                    "11. hate crime",
                    "преступление на почве ненависти",
                    "<strong>Hate crimes</strong> target minorities.",
                  ],
                  [
                    "12. social injustice",
                    "социальная несправедливость",
                    "Protest <strong>social injustice</strong>.",
                  ],
                  [
                    "13. civil rights",
                    "гражданские права",
                    "<strong>Civil rights</strong> movements changed history.",
                  ],
                  [
                    "14. equality / equity",
                    "равенство / справедливость",
                    "Strive for <strong>equality</strong> for all.",
                  ],
                  [
                    "15. combat discrimination",
                    "бороться с дискриминацией",
                    "Laws <strong>combat discrimination</strong>.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-red-50 to-orange-50 rounded p-3"
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
        <Section title="💰 Social Classes & Inequality">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-2 border-yellow-300 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              📊 Социальные классы и неравенство
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-yellow-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. social class",
                    "социальный класс",
                    "<strong>Social class</strong> affects opportunities.",
                  ],
                  [
                    "2. upper class / elite",
                    "высший класс / элита",
                    "The <strong>elite</strong> control wealth.",
                  ],
                  [
                    "3. middle class",
                    "средний класс",
                    "The <strong>middle class</strong> is shrinking.",
                  ],
                  [
                    "4. working class",
                    "рабочий класс",
                    "The <strong>working class</strong> struggles.",
                  ],
                  [
                    "5. lower class / poverty",
                    "низший класс / бедность",
                    "<strong>Poverty</strong> is a serious issue.",
                  ],
                  [
                    "6. wealth gap / income inequality",
                    "разрыв в богатстве / неравенство доходов",
                    "The <strong>wealth gap</strong> is widening.",
                  ],
                  [
                    "7. privilege",
                    "привилегия",
                    "Check your <strong>privilege</strong>.",
                  ],
                  [
                    "8. disadvantaged",
                    "обделённый",
                    "Help <strong>disadvantaged</strong> communities.",
                  ],
                  [
                    "9. upward mobility",
                    "социальная мобильность вверх",
                    "<strong>Upward mobility</strong> is harder now.",
                  ],
                  [
                    "10. glass ceiling",
                    "стеклянный потолок",
                    "Women face a <strong>glass ceiling</strong>.",
                  ],
                  [
                    "11. meritocracy",
                    "меритократия",
                    "Is it truly a <strong>meritocracy</strong>?",
                  ],
                  [
                    "12. nepotism",
                    "кумовство",
                    "<strong>Nepotism</strong> is unfair.",
                  ],
                  [
                    "13. economic disparity",
                    "экономическое неравенство",
                    "<strong>Economic disparity</strong> grows.",
                  ],
                  [
                    "14. social mobility",
                    "социальная мобильность",
                    "Education enables <strong>social mobility</strong>.",
                  ],
                  [
                    "15. redistribution of wealth",
                    "перераспределение богатства",
                    "Taxes enable <strong>redistribution of wealth</strong>.",
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

  if (step === 8) {
    return (
      <>
        <Section title="📖 Reading: Cultural Shock">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🌏 Текст: Культурный шок
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-4">
              <h4 className="text-xl font-bold text-indigo-800 mb-3">
                Maria's Journey: From Mexico to Japan
              </h4>

              <p className="text-base leading-relaxed mb-4">
                When Maria, a Mexican exchange student, arrived in Tokyo, she
                experienced severe <strong>culture shock</strong>. Everything
                was different from her home country. The{" "}
                <strong>customs</strong>, <strong>social norms</strong>, and
                daily <strong>etiquette</strong> challenged her at every turn.
              </p>

              <p className="text-base leading-relaxed mb-4">
                In Mexico, Maria grew up in a <strong>collectivist</strong>{" "}
                culture where family bonds were paramount. People were warm,
                physically affectionate, and prioritized{" "}
                <strong>hospitality</strong>. <strong>Personal space</strong>{" "}
                was minimal — hugs and kisses were normal greetings even with
                acquaintances. Time was flexible; <strong>punctuality</strong>{" "}
                wasn't strictly enforced. If you arrived 30 minutes late to a
                gathering, no one minded.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Japan, however, operates differently. Japanese society values{" "}
                <strong>hierarchy</strong>, <strong>respect</strong>, and{" "}
                <strong>face-saving</strong>. Maria quickly learned that{" "}
                <strong>bowing</strong> was essential — the depth of the bow
                indicated respect levels. <strong>Direct communication</strong>{" "}
                was considered <strong>rude</strong>; instead, Japanese people
                used <strong>indirect</strong> language to avoid confrontation.
                When her professor said "That might be difficult," Maria didn't
                realize it meant "No."
              </p>

              <p className="text-base leading-relaxed mb-4">
                The <strong>dress code</strong> shocked her too. Everyone
                dressed conservatively and formally. Her colorful Mexican
                outfits stood out awkwardly. <strong>Table manners</strong> were
                elaborate — she had to learn proper chopstick{" "}
                <strong>etiquette</strong>, never to stick them vertically in
                rice (a funeral <strong>ritual</strong>), and to slurp noodles
                loudly as a compliment to the chef.
              </p>

              <p className="text-base leading-relaxed mb-4">
                The <strong>generation gap</strong> was fascinating. While{" "}
                <strong>elderly</strong> Japanese strictly followed{" "}
                <strong>traditions</strong>, young <strong>Gen Z</strong>{" "}
                Japanese were more <strong>progressive</strong> and open to
                Western influences. Still, even rebellious youth showed profound
                respect for <strong>elders</strong> — something Maria admired.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Maria also observed Japan's struggle with{" "}
                <strong>diversity</strong>. As a homogeneous society, Japan had
                limited experience with <strong>immigrants</strong> and{" "}
                <strong>minorities</strong>. She faced curious stares and
                occasional <strong>discrimination</strong>. Some landlords
                refused to rent to foreigners. While not malicious{" "}
                <strong>racism</strong>, these <strong>prejudices</strong>{" "}
                stemmed from unfamiliarity rather than hatred.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Through her Japanese friends, Maria learned about{" "}
                <strong>social class</strong> divisions. Japan's{" "}
                <strong>meritocracy</strong> praised hard work, but the{" "}
                <strong>glass ceiling</strong> for women remained. Corporate
                culture expected extreme dedication, contributing to the{" "}
                <strong>work ethic</strong> that both impressed and exhausted
                her.
              </p>

              <p className="text-base leading-relaxed">
                After a year, Maria had <strong>integrated</strong>{" "}
                successfully. She learned to balance her Mexican{" "}
                <strong>cultural identity</strong> with Japanese{" "}
                <strong>customs</strong>. She discovered that{" "}
                <strong>tolerance</strong>, <strong>open-mindedness</strong>,
                and <strong>cultural sensitivity</strong> were keys to
                navigating any society. The experience taught her that while
                cultures differ profoundly, the human desire for respect,{" "}
                <strong>acceptance</strong>, and belonging is universal. 🌏❤️
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What cultural differences did Maria notice first?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Bowing, indirect communication, strict punctuality, and
                    personal space.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. How do Mexican and Japanese cultures differ in
                    communication?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Mexico: direct, warm, physical. Japan: indirect,
                    face-saving, formal.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What table manner mistake must be avoided?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Never stick chopsticks vertically in rice (funeral
                    ritual).
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What discrimination did Maria face?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Curious stares, landlords refusing to rent to foreigners,
                    prejudice from unfamiliarity.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What lesson did Maria learn?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Tolerance, open-mindedness, and cultural sensitivity are
                    key to navigating any society.
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
              Complete the sentences with society & culture vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. Every society has its own",
                    answers: ["traditions", "customs"],
                    right: "and values.",
                    wide: true,
                  },
                  {
                    left: "2. The",
                    answers: ["generation gap"],
                    right: "causes conflicts between young and old.",
                    wide: true,
                  },
                  {
                    left: "3. Cultural",
                    answers: ["diversity"],
                    right: "makes cities more interesting.",
                    wide: true,
                  },
                  {
                    left: "4. We must fight",
                    answers: ["prejudice", "discrimination"],
                    right: "in all its forms.",
                    wide: true,
                  },
                  {
                    left: "5. Good",
                    answers: ["manners", "etiquette"],
                    right: "show respect for others.",
                    wide: true,
                  },
                  {
                    left: "6. Being",
                    answers: ["open-minded", "tolerant"],
                    right: "helps you understand other cultures.",
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
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🎓 Полный список: 150+ слов
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  🎭 Traditions (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• tradition / custom</li>
                  <li>• ritual / ceremony</li>
                  <li>• celebration / festival</li>
                  <li>• heritage / folklore</li>
                  <li>• ancestor / descendant</li>
                  <li>• pass down / hand down</li>
                  <li>• preserve / uphold</li>
                  <li>• indigenous / native</li>
                  <li>• ethnic group</li>
                  <li>• cultural identity</li>
                  <li>• assimilate / integrate</li>
                  <li>• cultural exchange</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <h4 className="font-bold text-lg text-blue-900 mb-2">
                  💎 Values (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• value / belief</li>
                  <li>• individualism</li>
                  <li>• collectivism</li>
                  <li>• hierarchy</li>
                  <li>• equality / egalitarian</li>
                  <li>• honor / dignity</li>
                  <li>• modesty / humility</li>
                  <li>• hospitality</li>
                  <li>• punctuality</li>
                  <li>• face-saving</li>
                  <li>• direct / indirect communication</li>
                  <li>• work ethic</li>
                  <li>• family-oriented</li>
                  <li>• religious / secular</li>
                  <li>• materialism / spirituality</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🤝 Etiquette (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• social norm</li>
                  <li>• etiquette / manners</li>
                  <li>• polite / rude</li>
                  <li>• appropriate / inappropriate</li>
                  <li>• taboo</li>
                  <li>• personal space</li>
                  <li>• eye contact</li>
                  <li>• handshake / bow / kiss</li>
                  <li>• small talk</li>
                  <li>• dress code</li>
                  <li>• gift-giving</li>
                  <li>• table manners</li>
                  <li>• tipping</li>
                  <li>• queuing / cutting in line</li>
                  <li>• body language</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-pink-300">
                <h4 className="font-bold text-lg text-pink-900 mb-2">
                  👵👶 Generations (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• generation gap</li>
                  <li>• Baby Boomers</li>
                  <li>• Generation X</li>
                  <li>• Millennials / Gen Y</li>
                  <li>• Gen Z</li>
                  <li>• elderly / senior</li>
                  <li>• youth / teenager</li>
                  <li>• old-fashioned / outdated</li>
                  <li>• modern / progressive</li>
                  <li>• conservative / traditional</li>
                  <li>• rebel / conform</li>
                  <li>• clash / conflict</li>
                  <li>• bridge the gap</li>
                  <li>• respect elders</li>
                  <li>• digital native</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-violet-300">
                <h4 className="font-bold text-lg text-violet-900 mb-2">
                  🌈 Diversity (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• diversity</li>
                  <li>• multicultural</li>
                  <li>• inclusion / inclusive</li>
                  <li>• tolerance / tolerant</li>
                  <li>• acceptance</li>
                  <li>• minority / majority</li>
                  <li>• immigrant / migrant</li>
                  <li>• refugee</li>
                  <li>• integration</li>
                  <li>• cultural sensitivity</li>
                  <li>• open-minded</li>
                  <li>• cosmopolitan</li>
                  <li>• melting pot</li>
                  <li>• cross-cultural</li>
                  <li>• celebrate differences</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  ⚠️ Prejudice (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• prejudice / bias</li>
                  <li>• discrimination</li>
                  <li>• racism / racist</li>
                  <li>• sexism / sexist</li>
                  <li>• ageism</li>
                  <li>• stereotype</li>
                  <li>• stigma / stigmatize</li>
                  <li>• marginalize</li>
                  <li>• oppression / oppress</li>
                  <li>• xenophobia</li>
                  <li>• hate crime</li>
                  <li>• social injustice</li>
                  <li>• civil rights</li>
                  <li>• equality / equity</li>
                  <li>• combat discrimination</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  💰 Social Class (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• social class</li>
                  <li>• upper class / elite</li>
                  <li>• middle class</li>
                  <li>• working class</li>
                  <li>• lower class / poverty</li>
                  <li>• wealth gap / income inequality</li>
                  <li>• privilege</li>
                  <li>• disadvantaged</li>
                  <li>• upward mobility</li>
                  <li>• glass ceiling</li>
                  <li>• meritocracy</li>
                  <li>• nepotism</li>
                  <li>• economic disparity</li>
                  <li>• social mobility</li>
                  <li>• redistribution of wealth</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  ➕ Additional (45+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• culture / society</li>
                  <li>• community</li>
                  <li>• social interaction</li>
                  <li>• conform / nonconformist</li>
                  <li>• mainstream / alternative</li>
                  <li>• subculture</li>
                  <li>• counterculture</li>
                  <li>• socialization</li>
                  <li>• peer pressure</li>
                  <li>• status symbol</li>
                  <li>• social status</li>
                  <li>• reputation</li>
                  <li>• respect / disrespect</li>
                  <li>• shame / guilt</li>
                  <li>• honor culture</li>
                  <li>• collectivist mentality</li>
                  <li>• individualist mindset</li>
                  <li>• cultural relativism</li>
                  <li>• ethnocentrism</li>
                  <li>• cultural appropriation</li>
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
                  🌍 <strong>Congratulations!</strong> You've mastered 150+
                  essential Society & Culture vocabulary words! From traditions
                  and etiquette to diversity and social justice — you're now
                  equipped to discuss cultural differences and social issues
                  with confidence! 🎭🤝✨
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


