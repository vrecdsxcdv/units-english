"use client";

import { useState } from "react";
import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

export default function PsychologyEmotions({ step }: Props) {

  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Psychology & Emotions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
    {
      title: "Что такое Psychology English?",
      icon: "🧠",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-purple-700">Psychology & Emotions English</strong> — это специализированный английский язык,
            используемый в психологии, психиатрии и сфере эмоционального интеллекта.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              Он включает терминологию для описания психических процессов, эмоций,
              поведения, психических расстройств и методов терапии.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-4 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">📚 Где используется</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Научные статьи и исследования</li>
                <li>• Книги по саморазвитию</li>
                <li>• Психотерапия и консультирование</li>
                <li>• HR и корпоративные тренинги</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-xl border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">🎯 Кому нужен</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Психологам и психотерапевтам</li>
                <li>• HR-специалистам</li>
                <li>• Коучам и тренерам</li>
                <li>• Всем, кто интересуется психологией</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Ключевые области",
      icon: "🎯",
      content: (
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🧠</span>
                <div>
                  <h4 className="font-bold text-purple-800 text-lg mb-2">Cognitive Psychology</h4>
                  <p className="text-gray-700">
                    Когнитивные процессы: cognitive dissonance, perception, memory, attention
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💜</span>
                <div>
                  <h4 className="font-bold text-pink-800 text-lg mb-2">Emotions & Feelings</h4>
                  <p className="text-gray-700">
                    Эмоции: empathy, anxiety, grief, euphoria, resentment
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🏥</span>
                <div>
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Mental Health</h4>
                  <p className="text-gray-700">
                    Психическое здоровье: burnout, depression, resilience, trauma
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛋️</span>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-2">Therapy & Treatment</h4>
                  <p className="text-gray-700">
                    Терапия: CBT, mindfulness, psychoanalysis, coping mechanisms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Зачем учить Psychology English?",
      icon: "🚀",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📖</span>
              </div>
              <h4 className="font-bold text-purple-800 text-center mb-2">Чтение литературы</h4>
              <p className="text-gray-700 text-sm text-center">
                Доступ к мировым исследованиям, книгам
                и статьям по психологии на английском
              </p>
            </div>
            <div className="bg-white border-2 border-pink-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">💼</span>
              </div>
              <h4 className="font-bold text-pink-800 text-center mb-2">Профессиональный рост</h4>
              <p className="text-gray-700 text-sm text-center">
                Участие в международных конференциях,
                обучение за рубежом, работа с иностранцами
              </p>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🧘</span>
              </div>
              <h4 className="font-bold text-blue-800 text-center mb-2">Саморазвитие</h4>
              <p className="text-gray-700 text-sm text-center">
                Понимание книг и подкастов по психологии,
                самопомощи и эмоциональному интеллекту
              </p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🤝</span>
              </div>
              <h4 className="font-bold text-green-800 text-center mb-2">Коммуникация</h4>
              <p className="text-gray-700 text-sm text-center">
                Обсуждение эмоций и психологических тем
                на профессиональном уровне
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
            <p className="text-center text-gray-800 font-semibold">
              🧠 <strong>Факт:</strong> Термин &quot;emotional intelligence&quot; был популяризирован Дэниелом Гоулманом в 1995 году
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🧠</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Psychology & Emotions</h2>
        <p className="text-xl text-gray-600">Введение в психологический английский</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden">
        <div className="flex border-b-2 border-purple-200">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex-1 p-4 font-semibold transition-all ${
                activeSection === index
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="text-2xl mb-1">{section.icon}</div>
              <div className="text-sm">{section.title}</div>
            </button>
          ))}
        </div>

        <div className="p-8">
          {sections[activeSection].content}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-purple-800 mb-2">Структура курса</h3>
            <p className="text-gray-700 text-lg">
              В этом курсе вы изучите ключевую психологическую лексику: от базовых понятий
              (empathy, resilience) до профессиональных терминов (cognitive dissonance, burnout).
              Каждая тема содержит примеры, связанные термины и практические упражнения.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const vocabulary = [
        {
          term: "cognitive dissonance",
          pronunciation: "/ˈkɒɡnətɪv ˈdɪsənəns/",
          translation: "когнитивный диссонанс",
          definition: "Психологический дискомфорт, возникающий при одновременном удержании противоречивых убеждений или при несоответствии поведения убеждениям.",
          examples: [
            "She experienced cognitive dissonance when her actions contradicted her values.",
            "Cognitive dissonance can lead people to change their beliefs to match their behavior.",
            "Smokers often experience cognitive dissonance about the health risks.",
          ],
          relatedTerms: ["dissonance reduction", "confirmation bias", "rationalization"],
        },
        {
          term: "empathy",
          pronunciation: "/ˈempəθi/",
          translation: "эмпатия, сопереживание",
          definition: "Способность понимать и разделять чувства другого человека; эмоциональное отождествление с другим.",
          examples: [
            "Good therapists show empathy towards their clients.",
            "Empathy is essential for building strong relationships.",
            "The movie evoked deep empathy for the main character.",
          ],
          relatedTerms: ["empathetic", "sympathy", "compassion", "emotional intelligence"],
        },
        {
          term: "resilience",
          pronunciation: "/rɪˈzɪliəns/",
          translation: "психологическая устойчивость",
          definition: "Способность быстро восстанавливаться после трудностей; психологическая упругость и адаптивность.",
          examples: [
            "Children who develop resilience cope better with adversity.",
            "Building resilience is key to mental health.",
            "Her resilience helped her overcome the trauma.",
          ],
          relatedTerms: ["resilient", "grit", "mental toughness", "adaptability"],
        },
        {
          term: "burnout",
          pronunciation: "/ˈbɜːnaʊt/",
          translation: "эмоциональное выгорание",
          definition: "Состояние хронического стресса, приводящее к физическому и эмоциональному истощению, цинизму и снижению продуктивности.",
          examples: [
            "Many healthcare workers experienced burnout during the pandemic.",
            "Work-life balance is essential to prevent burnout.",
            "The company introduced wellness programs to address employee burnout.",
          ],
          relatedTerms: ["exhaustion", "chronic stress", "compassion fatigue"],
        },
        {
          term: "trauma",
          pronunciation: "/ˈtrɔːmə/",
          translation: "психологическая травма",
          definition: "Глубокое эмоциональное потрясение, вызванное крайне стрессовым событием, имеющее длительные психологические последствия.",
          examples: [
            "Childhood trauma can affect adult relationships.",
            "She is still processing the trauma of the accident.",
            "Trauma-informed care is becoming standard in healthcare.",
          ],
          relatedTerms: ["traumatic", "PTSD", "traumatize", "intergenerational trauma"],
        },
        {
          term: "subconscious",
          pronunciation: "/sʌbˈkɒnʃəs/",
          translation: "подсознание",
          definition: "Часть психики, содержащая мысли и чувства, которые человек не осознаёт, но которые влияют на поведение.",
          examples: [
            "Our subconscious mind influences many of our decisions.",
            "Subconscious fears can manifest in dreams.",
            "Therapy can help uncover subconscious patterns.",
          ],
          relatedTerms: ["unconscious", "subliminal", "repressed"],
        },
        {
          term: "self-esteem",
          pronunciation: "/self ɪˈstiːm/",
          translation: "самооценка",
          definition: "Общая оценка человеком собственной ценности; чувство уважения к себе.",
          examples: [
            "Low self-esteem can lead to depression and anxiety.",
            "Positive feedback can boost a child's self-esteem.",
            "She worked on building her self-esteem through therapy.",
          ],
          relatedTerms: ["self-worth", "self-confidence", "self-image"],
        },
        {
          term: "introspection",
          pronunciation: "/ˌɪntrəˈspekʃn/",
          translation: "интроспекция, самоанализ",
          definition: "Процесс изучения собственных мыслей, чувств и мотивов; самонаблюдение.",
          examples: [
            "Journaling encourages introspection and self-awareness.",
            "Some introspection is healthy, but too much can lead to rumination.",
            "The retreat offered time for introspection.",
          ],
          relatedTerms: ["self-reflection", "self-examination", "introspective"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🧠</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Core Psychology Terms</h2>
            <p className="text-xl text-gray-600">Базовые психологические понятия</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-violet-100 border border-violet-300 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Empathy vs Sympathy</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-700">Empathy</strong> — &quot;Я чувствую то же, что и ты&quot; (разделение эмоций).
                  <br />
                  <strong className="text-amber-700">Sympathy</strong> — &quot;Мне жаль тебя&quot; (сочувствие на расстоянии).
                  <br />
                  <span className="text-sm text-gray-600 italic">Empathy требует эмоционального участия, sympathy — нет.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const vocabulary = [
        {
          term: "anxiety",
          pronunciation: "/æŋˈzaɪəti/",
          translation: "тревожность",
          definition: "Чувство беспокойства, нервозности или страха, часто о неопределённом будущем; может быть нормальной реакцией или расстройством.",
          examples: [
            "Social anxiety makes it difficult to attend parties.",
            "She takes medication to manage her anxiety.",
            "Anxiety disorders are among the most common mental health conditions.",
          ],
          relatedTerms: ["anxious", "panic attack", "generalized anxiety disorder (GAD)"],
        },
        {
          term: "grief",
          pronunciation: "/ɡriːf/",
          translation: "горе, скорбь",
          definition: "Глубокая печаль, вызванная утратой, особенно смертью близкого человека.",
          examples: [
            "The five stages of grief include denial, anger, and acceptance.",
            "Grief counseling helped him cope with the loss.",
            "Everyone experiences grief differently.",
          ],
          relatedTerms: ["grieve", "mourning", "bereavement", "loss"],
        },
        {
          term: "euphoria",
          pronunciation: "/juːˈfɔːriə/",
          translation: "эйфория",
          definition: "Интенсивное чувство счастья и благополучия; состояние крайней радости.",
          examples: [
            "Runners sometimes experience euphoria after a long run.",
            "The euphoria of winning faded after a few days.",
            "Certain drugs can induce artificial euphoria.",
          ],
          relatedTerms: ["euphoric", "elation", "ecstasy", "bliss"],
        },
        {
          term: "resentment",
          pronunciation: "/rɪˈzentmənt/",
          translation: "обида, негодование",
          definition: "Чувство горечи или гнева из-за несправедливого обращения; затаённая злость.",
          examples: [
            "Years of resentment built up between the siblings.",
            "Holding onto resentment is harmful to mental health.",
            "She felt resentment towards her boss for the unfair treatment.",
          ],
          relatedTerms: ["resent", "bitterness", "grudge", "animosity"],
        },
        {
          term: "frustration",
          pronunciation: "/frʌˈstreɪʃn/",
          translation: "фрустрация, разочарование",
          definition: "Чувство раздражения при невозможности достичь цели или удовлетворить потребность.",
          examples: [
            "His frustration grew as the project faced more delays.",
            "Frustration can lead to aggressive behavior.",
            "Learning to manage frustration is an important life skill.",
          ],
          relatedTerms: ["frustrated", "exasperation", "irritation"],
        },
        {
          term: "ambivalence",
          pronunciation: "/æmˈbɪvələns/",
          translation: "амбивалентность",
          definition: "Наличие смешанных, противоречивых чувств или мнений по отношению к чему-либо.",
          examples: [
            "She felt ambivalence about accepting the job offer.",
            "Ambivalence is common when facing major life decisions.",
            "His ambivalence towards his parents complicated their relationship.",
          ],
          relatedTerms: ["ambivalent", "mixed feelings", "conflicted"],
        },
        {
          term: "apathy",
          pronunciation: "/ˈæpəθi/",
          translation: "апатия",
          definition: "Отсутствие интереса, энтузиазма или заботы; эмоциональное безразличие.",
          examples: [
            "Voter apathy leads to low election turnout.",
            "Depression can cause apathy towards previously enjoyed activities.",
            "His apathy about the situation worried his friends.",
          ],
          relatedTerms: ["apathetic", "indifference", "detachment"],
        },
        {
          term: "nostalgia",
          pronunciation: "/nɒˈstældʒə/",
          translation: "ностальгия",
          definition: "Сентиментальная тоска по прошлому; приятно-грустные воспоминания о былых временах.",
          examples: [
            "The song filled her with nostalgia for her childhood.",
            "Nostalgia marketing appeals to consumers' memories.",
            "He felt a wave of nostalgia looking at old photographs.",
          ],
          relatedTerms: ["nostalgic", "longing", "sentimentality", "reminiscence"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">💜</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Emotions & Feelings</h2>
            <p className="text-xl text-gray-600">Эмоции и чувства</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-rose-100 border border-rose-300 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Шкала эмоций</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-700">Positive:</strong> euphoria → happiness → contentment → calm
                  <br />
                  <strong className="text-amber-700">Negative:</strong> apathy → sadness → grief → despair
                  <br />
                  <span className="text-sm text-gray-600 italic">Понимание градации эмоций помогает точнее выражать свои чувства.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const vocabulary = [
        {
          term: "depression",
          pronunciation: "/dɪˈpreʃn/",
          translation: "депрессия",
          definition: "Психическое расстройство, характеризующееся стойким чувством печали, потерей интереса и энергии.",
          examples: [
            "Clinical depression requires professional treatment.",
            "She was diagnosed with depression after months of persistent sadness.",
            "Depression affects millions of people worldwide.",
          ],
          relatedTerms: ["depressed", "major depressive disorder", "antidepressant"],
        },
        {
          term: "PTSD",
          pronunciation: "/piː tiː es ˈdiː/",
          translation: "посттравматическое стрессовое расстройство",
          definition: "Post-Traumatic Stress Disorder — расстройство, развивающееся после травматического события, с симптомами флешбэков, кошмаров и тревоги.",
          examples: [
            "Many veterans suffer from PTSD after combat.",
            "PTSD can be triggered by sounds or smells associated with the trauma.",
            "Therapy is effective in treating PTSD symptoms.",
          ],
          relatedTerms: ["flashback", "trigger", "trauma response"],
        },
        {
          term: "addiction",
          pronunciation: "/əˈdɪkʃn/",
          translation: "зависимость",
          definition: "Хроническое заболевание, характеризующееся компульсивным употреблением вещества или поведением, несмотря на вредные последствия.",
          examples: [
            "Addiction is now recognized as a brain disorder.",
            "He struggled with alcohol addiction for years.",
            "Social media addiction is increasingly common among young people.",
          ],
          relatedTerms: ["addicted", "addictive", "substance abuse", "recovery"],
        },
        {
          term: "phobia",
          pronunciation: "/ˈfəʊbiə/",
          translation: "фобия",
          definition: "Иррациональный, чрезмерный страх перед определённым объектом, ситуацией или деятельностью.",
          examples: [
            "Arachnophobia is the fear of spiders.",
            "Her phobia of flying prevents her from traveling abroad.",
            "Exposure therapy is often used to treat phobias.",
          ],
          relatedTerms: ["phobic", "claustrophobia", "agoraphobia", "social phobia"],
        },
        {
          term: "OCD",
          pronunciation: "/əʊ siː ˈdiː/",
          translation: "обсессивно-компульсивное расстройство",
          definition: "Obsessive-Compulsive Disorder — расстройство с навязчивыми мыслями (обсессиями) и повторяющимися действиями (компульсиями).",
          examples: [
            "OCD is not just about being neat or organized.",
            "People with OCD may wash their hands repeatedly.",
            "Medication and therapy can help manage OCD symptoms.",
          ],
          relatedTerms: ["obsessive", "compulsive", "intrusive thoughts", "ritual"],
        },
        {
          term: "bipolar disorder",
          pronunciation: "/baɪˈpəʊlə dɪsˈɔːdə/",
          translation: "биполярное расстройство",
          definition: "Психическое расстройство с чередованием эпизодов мании (приподнятого настроения) и депрессии.",
          examples: [
            "Bipolar disorder requires lifelong treatment.",
            "Manic episodes can involve impulsive decisions and decreased sleep.",
            "Many successful artists have lived with bipolar disorder.",
          ],
          relatedTerms: ["manic", "mania", "mood swings", "mood stabilizer"],
        },
        {
          term: "panic attack",
          pronunciation: "/ˈpænɪk əˈtæk/",
          translation: "паническая атака",
          definition: "Внезапный эпизод интенсивного страха с физическими симптомами: учащённое сердцебиение, одышка, головокружение.",
          examples: [
            "She had her first panic attack in a crowded subway.",
            "Panic attacks can feel like a heart attack.",
            "Breathing exercises can help during a panic attack.",
          ],
          relatedTerms: ["panic disorder", "hyperventilation", "fight-or-flight"],
        },
        {
          term: "insomnia",
          pronunciation: "/ɪnˈsɒmniə/",
          translation: "бессонница",
          definition: "Расстройство сна: трудности с засыпанием, поддержанием сна или ранние пробуждения.",
          examples: [
            "Chronic insomnia affects quality of life.",
            "Stress and anxiety often cause insomnia.",
            "Cognitive behavioral therapy is effective for insomnia.",
          ],
          relatedTerms: ["insomniac", "sleep disorder", "sleep hygiene"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🏥</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Mental Health</h2>
            <p className="text-xl text-gray-600">Психическое здоровье и расстройства</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 border border-indigo-300 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Важно помнить</h3>
                <p className="text-gray-700 text-lg">
                  Психические расстройства — это медицинские состояния, а не слабость характера.
                  <br />
                  <strong className="text-amber-700">Stigma</strong> (стигма) — негативное отношение общества к психическим расстройствам.
                  <br />
                  <span className="text-sm text-gray-600 italic">Reducing mental health stigma = борьба со стигматизацией психических расстройств.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const vocabulary = [
        {
          term: "cognition",
          pronunciation: "/kɒɡˈnɪʃn/",
          translation: "когниция, познание",
          definition: "Умственные процессы получения знаний: восприятие, мышление, память, внимание, речь.",
          examples: [
            "Aging can affect cognition and memory.",
            "Cognitive psychology studies how people think and learn.",
            "Exercise has been shown to improve cognition.",
          ],
          relatedTerms: ["cognitive", "metacognition", "cognitive function"],
        },
        {
          term: "perception",
          pronunciation: "/pəˈsepʃn/",
          translation: "восприятие",
          definition: "Процесс интерпретации сенсорной информации; то, как мы понимаем и осмысляем окружающий мир.",
          examples: [
            "Perception can be influenced by expectations and beliefs.",
            "Visual perception involves complex brain processing.",
            "His perception of the situation was completely wrong.",
          ],
          relatedTerms: ["perceive", "perceptual", "sensory processing"],
        },
        {
          term: "confirmation bias",
          pronunciation: "/ˌkɒnfəˈmeɪʃn ˈbaɪəs/",
          translation: "предвзятость подтверждения",
          definition: "Склонность искать, интерпретировать и запоминать информацию, подтверждающую существующие убеждения.",
          examples: [
            "Confirmation bias makes people ignore contradicting evidence.",
            "Social media algorithms can reinforce confirmation bias.",
            "Scientists must be aware of confirmation bias in research.",
          ],
          relatedTerms: ["cognitive bias", "selective attention", "echo chamber"],
        },
        {
          term: "memory",
          pronunciation: "/ˈmeməri/",
          translation: "память",
          definition: "Способность кодировать, хранить и извлекать информацию и прошлый опыт.",
          examples: [
            "Short-term memory holds information for a few seconds.",
            "Traumatic events can cause memory suppression.",
            "Memory techniques can improve learning.",
          ],
          relatedTerms: ["short-term memory", "long-term memory", "working memory", "amnesia"],
        },
        {
          term: "attention",
          pronunciation: "/əˈtenʃn/",
          translation: "внимание",
          definition: "Когнитивный процесс избирательной концентрации на одном аспекте среды при игнорировании других.",
          examples: [
            "Attention deficit affects concentration and focus.",
            "Divided attention occurs when multitasking.",
            "Meditation can improve attention span.",
          ],
          relatedTerms: ["ADHD", "attention span", "focus", "concentration"],
        },
        {
          term: "heuristic",
          pronunciation: "/hjuːˈrɪstɪk/",
          translation: "эвристика",
          definition: "Мысленный ярлык или правило, позволяющее быстро принимать решения, иногда приводящее к ошибкам.",
          examples: [
            "The availability heuristic leads us to overestimate common events.",
            "Heuristics save mental energy but can cause biases.",
            "Marketers use heuristics to influence consumer decisions.",
          ],
          relatedTerms: ["mental shortcut", "rule of thumb", "cognitive bias"],
        },
        {
          term: "rationalization",
          pronunciation: "/ˌræʃnəlaɪˈzeɪʃn/",
          translation: "рационализация",
          definition: "Психологическая защита: создание логичных, но ложных объяснений для неприемлемого поведения или чувств.",
          examples: [
            "Rationalization helps people justify their mistakes.",
            "He rationalized his overspending as a necessary investment.",
            "Rationalization is a common defense mechanism.",
          ],
          relatedTerms: ["rationalize", "justification", "defense mechanism"],
        },
        {
          term: "projection",
          pronunciation: "/prəˈdʒekʃn/",
          translation: "проекция",
          definition: "Защитный механизм: приписывание собственных неприемлемых мыслей или чувств другим людям.",
          examples: [
            "He accused others of lying, but it was projection.",
            "Projection is an unconscious defense mechanism.",
            "Recognizing projection can improve self-awareness.",
          ],
          relatedTerms: ["defense mechanism", "displacement", "denial"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">💭</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Cognitive Processes</h2>
            <p className="text-xl text-gray-600">Когнитивные процессы и механизмы</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-teal-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 border border-emerald-300 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Защитные механизмы (Defense Mechanisms)</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-700">Denial</strong> — отрицание реальности
                  <br />
                  <strong className="text-amber-700">Projection</strong> — приписывание своих чувств другим
                  <br />
                  <strong className="text-amber-700">Rationalization</strong> — ложное объяснение поведения
                  <br />
                  <strong className="text-amber-700">Displacement</strong> — перенос эмоций на другой объект
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const vocabulary = [
        {
          term: "introvert",
          pronunciation: "/ˈɪntrəvɜːt/",
          translation: "интроверт",
          definition: "Человек, предпочитающий уединение и внутренний мир; восстанавливает энергию в одиночестве.",
          examples: [
            "As an introvert, she prefers small gatherings to large parties.",
            "Introverts often excel in roles requiring deep focus.",
            "Being an introvert doesn't mean being antisocial.",
          ],
          relatedTerms: ["introversion", "introverted", "extrovert"],
        },
        {
          term: "extrovert",
          pronunciation: "/ˈekstrəvɜːt/",
          translation: "экстраверт",
          definition: "Человек, получающий энергию от общения с другими; ориентирован на внешний мир.",
          examples: [
            "Extroverts thrive in social situations.",
            "The job requires an extrovert who enjoys networking.",
            "Even extroverts need alone time occasionally.",
          ],
          relatedTerms: ["extroversion", "extroverted", "outgoing"],
        },
        {
          term: "narcissism",
          pronunciation: "/ˈnɑːsɪsɪzəm/",
          translation: "нарциссизм",
          definition: "Чрезмерная любовь к себе, потребность в восхищении и недостаток эмпатии; как черта или расстройство личности.",
          examples: [
            "Narcissism exists on a spectrum from healthy to pathological.",
            "Social media has been linked to increased narcissism.",
            "Narcissistic personality disorder affects relationships.",
          ],
          relatedTerms: ["narcissist", "narcissistic", "grandiosity", "ego"],
        },
        {
          term: "assertiveness",
          pronunciation: "/əˈsɜːtɪvnəs/",
          translation: "ассертивность, уверенность",
          definition: "Способность уверенно выражать свои мнения и потребности, уважая при этом других.",
          examples: [
            "Assertiveness training helps people set boundaries.",
            "There's a difference between assertiveness and aggression.",
            "Assertive communication is direct but respectful.",
          ],
          relatedTerms: ["assertive", "assert", "self-advocacy", "boundaries"],
        },
        {
          term: "impulsivity",
          pronunciation: "/ɪmˈpʌlsɪvəti/",
          translation: "импульсивность",
          definition: "Склонность действовать немедленно, без обдумывания последствий.",
          examples: [
            "Impulsivity can lead to regrettable decisions.",
            "ADHD is often associated with impulsivity.",
            "Learning to manage impulsivity improves self-control.",
          ],
          relatedTerms: ["impulsive", "impulse control", "spontaneous"],
        },
        {
          term: "temperament",
          pronunciation: "/ˈtemprəmənt/",
          translation: "темперамент",
          definition: "Врождённые особенности личности, влияющие на эмоциональные реакции и поведение.",
          examples: [
            "Temperament is largely determined by genetics.",
            "Children show differences in temperament from birth.",
            "Understanding your temperament aids self-development.",
          ],
          relatedTerms: ["personality", "disposition", "nature vs nurture"],
        },
        {
          term: "procrastination",
          pronunciation: "/prəˌkræstɪˈneɪʃn/",
          translation: "прокрастинация",
          definition: "Откладывание дел на потом, особенно важных задач; хроническое промедление.",
          examples: [
            "Procrastination is often linked to fear of failure.",
            "Breaking tasks into smaller steps reduces procrastination.",
            "Procrastination can increase stress and anxiety.",
          ],
          relatedTerms: ["procrastinate", "procrastinator", "avoidance"],
        },
        {
          term: "perfectionism",
          pronunciation: "/pəˈfekʃənɪzəm/",
          translation: "перфекционизм",
          definition: "Стремление к безупречности и установление чрезмерно высоких стандартов для себя.",
          examples: [
            "Perfectionism can be both motivating and paralyzing.",
            "Maladaptive perfectionism is linked to anxiety and depression.",
            "She's learning to let go of her perfectionism.",
          ],
          relatedTerms: ["perfectionist", "high standards", "all-or-nothing thinking"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🎭</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Personality & Behavior</h2>
            <p className="text-xl text-gray-600">Личность и поведение</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-amber-100 border border-amber-300 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-purple-800 mb-2">Big Five (OCEAN) — Большая пятёрка</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-purple-700">O</strong>penness — открытость опыту
                  <br />
                  <strong className="text-purple-700">C</strong>onscientiousness — добросовестность
                  <br />
                  <strong className="text-purple-700">E</strong>xtraversion — экстраверсия
                  <br />
                  <strong className="text-purple-700">A</strong>greeableness — доброжелательность
                  <br />
                  <strong className="text-purple-700">N</strong>euroticism — нейротизм
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const vocabulary = [
        {
          term: "psychotherapy",
          pronunciation: "/ˌsaɪkəʊˈθerəpi/",
          translation: "психотерапия",
          definition: "Лечение психических проблем через разговор с квалифицированным специалистом; общий термин для различных методов терапии.",
          examples: [
            "Psychotherapy can help with depression and anxiety.",
            "Different forms of psychotherapy suit different people.",
            "She's been in psychotherapy for two years.",
          ],
          relatedTerms: ["therapist", "therapy", "talk therapy", "counseling"],
        },
        {
          term: "CBT",
          pronunciation: "/siː biː ˈtiː/",
          translation: "когнитивно-поведенческая терапия",
          definition: "Cognitive Behavioral Therapy — метод терапии, направленный на изменение негативных паттернов мышления и поведения.",
          examples: [
            "CBT is effective for treating anxiety disorders.",
            "CBT helps patients identify and challenge negative thoughts.",
            "The therapist uses CBT techniques in her practice.",
          ],
          relatedTerms: ["cognitive restructuring", "behavioral therapy", "exposure therapy"],
        },
        {
          term: "mindfulness",
          pronunciation: "/ˈmaɪndfʊlnəs/",
          translation: "осознанность, майндфулнес",
          definition: "Практика полного присутствия в моменте; безоценочное осознавание своих мыслей, чувств и ощущений.",
          examples: [
            "Mindfulness meditation reduces stress and anxiety.",
            "She practices mindfulness every morning.",
            "Mindfulness-based stress reduction is evidence-based.",
          ],
          relatedTerms: ["mindful", "meditation", "present moment awareness", "MBSR"],
        },
        {
          term: "coping mechanism",
          pronunciation: "/ˈkəʊpɪŋ ˈmekənɪzəm/",
          translation: "копинг-стратегия, механизм совладания",
          definition: "Стратегии и способы, которые люди используют для управления стрессом и трудными эмоциями.",
          examples: [
            "Exercise is a healthy coping mechanism for stress.",
            "Unhealthy coping mechanisms can include substance abuse.",
            "Therapy teaches adaptive coping mechanisms.",
          ],
          relatedTerms: ["coping strategy", "coping skills", "adaptive/maladaptive"],
        },
        {
          term: "psychoanalysis",
          pronunciation: "/ˌsaɪkəʊəˈnæləsɪs/",
          translation: "психоанализ",
          definition: "Метод терапии, разработанный Фрейдом, исследующий бессознательное и детские переживания.",
          examples: [
            "Psychoanalysis explores unconscious motivations.",
            "Classic psychoanalysis involves lying on a couch.",
            "Freud is the founder of psychoanalysis.",
          ],
          relatedTerms: ["psychoanalyst", "Freudian", "unconscious", "free association"],
        },
        {
          term: "intervention",
          pronunciation: "/ˌɪntəˈvenʃn/",
          translation: "интервенция, вмешательство",
          definition: "Организованная попытка помочь человеку с серьёзной проблемой (зависимость, кризис) осознать её и принять помощь.",
          examples: [
            "The family staged an intervention for his addiction.",
            "Early intervention improves outcomes for mental illness.",
            "Crisis intervention prevents immediate harm.",
          ],
          relatedTerms: ["early intervention", "crisis intervention", "treatment"],
        },
        {
          term: "rehabilitation",
          pronunciation: "/ˌriːəˌbɪlɪˈteɪʃn/",
          translation: "реабилитация",
          definition: "Процесс восстановления после зависимости, болезни или травмы; часто в специализированном центре.",
          examples: [
            "He spent three months in rehabilitation for alcohol addiction.",
            "Rehabilitation programs offer structured support.",
            "Rehab helped her rebuild her life.",
          ],
          relatedTerms: ["rehab", "recovery", "treatment center", "detox"],
        },
        {
          term: "support group",
          pronunciation: "/səˈpɔːt ɡruːp/",
          translation: "группа поддержки",
          definition: "Группа людей с общими проблемами, регулярно встречающихся для взаимной поддержки и обмена опытом.",
          examples: [
            "Support groups help people feel less alone.",
            "AA is the most well-known support group for addiction.",
            "Online support groups have become increasingly popular.",
          ],
          relatedTerms: ["peer support", "self-help group", "12-step program"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🛋️</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Therapy & Treatment</h2>
            <p className="text-xl text-gray-600">Терапия и лечение</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-emerald-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-teal-100 border border-teal-300 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Типы терапии</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-700">CBT</strong> — фокус на мыслях и поведении (краткосрочная)
                  <br />
                  <strong className="text-amber-700">Psychoanalysis</strong> — фокус на бессознательном (долгосрочная)
                  <br />
                  <strong className="text-amber-700">Humanistic therapy</strong> — фокус на самореализации
                  <br />
                  <strong className="text-amber-700">EMDR</strong> — для обработки травм
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const vocabulary = [
        {
          term: "conformity",
          pronunciation: "/kənˈfɔːməti/",
          translation: "конформность",
          definition: "Изменение поведения или мнения под влиянием группы; стремление соответствовать социальным нормам.",
          examples: [
            "Conformity pressure is stronger in collectivist cultures.",
            "The Asch experiment demonstrated the power of conformity.",
            "Peer pressure leads to conformity in adolescents.",
          ],
          relatedTerms: ["conform", "peer pressure", "groupthink", "social norm"],
        },
        {
          term: "groupthink",
          pronunciation: "/ˈɡruːpθɪŋk/",
          translation: "групповое мышление",
          definition: "Феномен, когда стремление к согласию в группе приводит к иррациональным или плохим решениям.",
          examples: [
            "Groupthink contributed to the failed Bay of Pigs invasion.",
            "Companies try to prevent groupthink by encouraging dissent.",
            "Groupthink silences minority opinions.",
          ],
          relatedTerms: ["conformity", "consensus", "devil's advocate"],
        },
        {
          term: "prejudice",
          pronunciation: "/ˈpredʒudɪs/",
          translation: "предубеждение",
          definition: "Негативное отношение к группе людей, основанное на стереотипах, а не на личном опыте.",
          examples: [
            "Prejudice can lead to discrimination and inequality.",
            "Education helps reduce prejudice against minorities.",
            "Implicit prejudice operates below conscious awareness.",
          ],
          relatedTerms: ["discrimination", "stereotype", "bias", "racism"],
        },
        {
          term: "stereotype",
          pronunciation: "/ˈsteriətaɪp/",
          translation: "стереотип",
          definition: "Упрощённое, обобщённое представление о группе людей, игнорирующее индивидуальные различия.",
          examples: [
            "Gender stereotypes affect career choices.",
            "Stereotypes can be positive or negative but are always oversimplified.",
            "The media often perpetuates harmful stereotypes.",
          ],
          relatedTerms: ["stereotypical", "generalization", "labeling"],
        },
        {
          term: "bystander effect",
          pronunciation: "/ˈbaɪstændə ɪˈfekt/",
          translation: "эффект свидетеля",
          definition: "Феномен, когда присутствие других людей снижает вероятность оказания помощи жертве.",
          examples: [
            "The bystander effect explains why people don't help in crowds.",
            "The Kitty Genovese case brought attention to the bystander effect.",
            "Training can help overcome the bystander effect.",
          ],
          relatedTerms: ["diffusion of responsibility", "prosocial behavior"],
        },
        {
          term: "social anxiety",
          pronunciation: "/ˈsəʊʃl æŋˈzaɪəti/",
          translation: "социальная тревожность",
          definition: "Интенсивный страх социальных ситуаций из-за боязни осуждения или смущения.",
          examples: [
            "Social anxiety makes job interviews extremely stressful.",
            "Therapy can help manage social anxiety symptoms.",
            "Social anxiety disorder affects about 7% of the population.",
          ],
          relatedTerms: ["social phobia", "shyness", "fear of judgment"],
        },
        {
          term: "attachment",
          pronunciation: "/əˈtætʃmənt/",
          translation: "привязанность",
          definition: "Эмоциональная связь между людьми, особенно между ребёнком и родителем; влияет на отношения всю жизнь.",
          examples: [
            "Secure attachment in childhood leads to healthier adult relationships.",
            "Attachment theory was developed by John Bowlby.",
            "Anxious attachment causes fear of abandonment.",
          ],
          relatedTerms: ["attachment style", "secure/anxious/avoidant attachment", "bonding"],
        },
        {
          term: "emotional intelligence",
          pronunciation: "/ɪˈməʊʃənl ɪnˈtelɪdʒəns/",
          translation: "эмоциональный интеллект",
          definition: "Способность распознавать, понимать и управлять своими и чужими эмоциями.",
          examples: [
            "Emotional intelligence is as important as IQ for success.",
            "Leaders with high emotional intelligence inspire their teams.",
            "EQ can be developed through practice and self-awareness.",
          ],
          relatedTerms: ["EQ", "self-awareness", "social skills", "empathy"],
        },
      ];

      return (
        <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">👥</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Social Psychology</h2>
            <p className="text-xl text-gray-600">Социальная психология</p>
          </div>

          <div className="space-y-6">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-700">{item.term}</h3>
                    <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {item.translation}
                  </div>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Примеры использования:
                  </h4>
                  <div className="space-y-2">
                    {item.examples.map((example, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-gray-800">
                          <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                          {example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-xl">🔗</span> Связанные термины:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedTerms.map((term, i) => (
                      <span
                        key={i}
                        className="bg-violet-100 border border-violet-300 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Стили привязанности (Attachment Styles)</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-700">Secure</strong> — комфорт с близостью и независимостью
                  <br />
                  <strong className="text-amber-700">Anxious</strong> — страх отвержения, потребность в постоянном подтверждении
                  <br />
                  <strong className="text-amber-700">Avoidant</strong> — дискомфорт с близостью, эмоциональная дистанция
                  <br />
                  <strong className="text-amber-700">Disorganized</strong> — непоследовательное поведение в отношениях
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const phraseCategories = [
        {
          category: "Эмоциональное состояние",
          icon: "💜",
          color: "purple",
          phrases: [
            {
              phrase: "to feel overwhelmed",
              translation: "чувствовать себя подавленным",
              context: "She felt overwhelmed by the amount of work.",
            },
            {
              phrase: "to bottle up emotions",
              translation: "подавлять эмоции",
              context: "Bottling up emotions can lead to health problems.",
            },
            {
              phrase: "to have a breakdown",
              translation: "пережить нервный срыв",
              context: "The stress caused him to have a breakdown.",
            },
            {
              phrase: "to be on edge",
              translation: "быть на взводе, нервничать",
              context: "She's been on edge since the argument.",
            },
            {
              phrase: "to let off steam",
              translation: "выпустить пар, снять напряжение",
              context: "Exercise helps me let off steam after work.",
            },
          ],
        },
        {
          category: "Психическое здоровье",
          icon: "🏥",
          color: "blue",
          phrases: [
            {
              phrase: "to seek help",
              translation: "обратиться за помощью",
              context: "It's important to seek help when struggling with mental health.",
            },
            {
              phrase: "to cope with stress",
              translation: "справляться со стрессом",
              context: "Meditation helps her cope with stress.",
            },
            {
              phrase: "to suffer from anxiety",
              translation: "страдать от тревожности",
              context: "Many people suffer from anxiety without realizing it.",
            },
            {
              phrase: "to be in recovery",
              translation: "находиться в процессе восстановления",
              context: "He's been in recovery from addiction for two years.",
            },
            {
              phrase: "to hit rock bottom",
              translation: "достичь дна",
              context: "She hit rock bottom before finally seeking treatment.",
            },
          ],
        },
        {
          category: "Отношения и общение",
          icon: "🤝",
          color: "green",
          phrases: [
            {
              phrase: "to set boundaries",
              translation: "устанавливать границы",
              context: "Learning to set boundaries improved her relationships.",
            },
            {
              phrase: "to open up to someone",
              translation: "открыться кому-то",
              context: "It took time for him to open up to his therapist.",
            },
            {
              phrase: "to be emotionally available",
              translation: "быть эмоционально доступным",
              context: "She needs a partner who is emotionally available.",
            },
            {
              phrase: "to work through issues",
              translation: "прорабатывать проблемы",
              context: "They're working through their issues in couples therapy.",
            },
            {
              phrase: "to have attachment issues",
              translation: "иметь проблемы с привязанностью",
              context: "His childhood experiences led to attachment issues.",
            },
          ],
        },
        {
          category: "Самопознание",
          icon: "🔍",
          color: "teal",
          phrases: [
            {
              phrase: "to be self-aware",
              translation: "обладать самосознанием",
              context: "Being self-aware is the first step to personal growth.",
            },
            {
              phrase: "to practice self-care",
              translation: "заниматься заботой о себе",
              context: "She practices self-care by taking regular breaks.",
            },
            {
              phrase: "to be in denial",
              translation: "находиться в отрицании",
              context: "He was in denial about his addiction for years.",
            },
            {
              phrase: "to come to terms with",
              translation: "смириться с, принять",
              context: "She's slowly coming to terms with her diagnosis.",
            },
            {
              phrase: "to have a breakthrough",
              translation: "совершить прорыв",
              context: "He had a breakthrough in therapy last week.",
            },
          ],
        },
        {
          category: "Когнитивные процессы",
          icon: "🧠",
          color: "orange",
          phrases: [
            {
              phrase: "to overthink things",
              translation: "слишком много думать, переанализировать",
              context: "She tends to overthink things and create unnecessary worry.",
            },
            {
              phrase: "to have a mental block",
              translation: "иметь ментальный блок",
              context: "I have a mental block when it comes to math.",
            },
            {
              phrase: "to be in a state of denial",
              translation: "находиться в состоянии отрицания",
              context: "Many people are in a state of denial about climate change.",
            },
            {
              phrase: "to experience cognitive dissonance",
              translation: "испытывать когнитивный диссонанс",
              context: "He experienced cognitive dissonance when his beliefs were challenged.",
            },
            {
              phrase: "to have a gut feeling",
              translation: "иметь интуитивное чувство",
              context: "I had a gut feeling something was wrong.",
            },
          ],
        },
      ];

      const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
        purple: { bg: "bg-purple-500", border: "border-purple-200", text: "text-purple-700", light: "bg-purple-50" },
        blue: { bg: "bg-blue-500", border: "border-blue-200", text: "text-blue-700", light: "bg-blue-50" },
        green: { bg: "bg-green-500", border: "border-green-200", text: "text-green-700", light: "bg-green-50" },
        teal: { bg: "bg-teal-500", border: "border-teal-200", text: "text-teal-700", light: "bg-teal-50" },
        orange: { bg: "bg-orange-500", border: "border-orange-200", text: "text-orange-700", light: "bg-orange-50" },
      };

      return (
        <div className="space-y-8 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">💬</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Psychology Phrases & Collocations</h2>
            <p className="text-xl text-gray-600">Психологические фразы и выражения</p>
          </div>

          <div className="space-y-8">
            {phraseCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 ${colorClasses[category.color].border} p-6`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className={`text-2xl font-bold ${colorClasses[category.color].text}`}>
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.phrases.map((item, i) => (
                    <div
                      key={i}
                      className={`${colorClasses[category.color].light} rounded-xl p-4 border ${colorClasses[category.color].border}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <p className={`font-bold text-lg ${colorClasses[category.color].text}`}>
                          {item.phrase}
                        </p>
                        <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">
                          {item.translation}
                        </span>
                      </div>
                      <p className="text-gray-600 italic text-sm">
                        &quot;{item.context}&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-bold text-xl text-amber-800 mb-2">Полезные выражения для терапии</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-700">&quot;I feel...&quot;</strong> — Я чувствую... (выражение эмоций)
                  <br />
                  <strong className="text-amber-700">&quot;I need...&quot;</strong> — Мне нужно... (выражение потребностей)
                  <br />
                  <strong className="text-amber-700">&quot;It triggers me when...&quot;</strong> — Меня триггерит, когда...
                  <br />
                  <strong className="text-amber-700">&quot;I'm working on...&quot;</strong> — Я работаю над...
                </p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
      const [results, setResults] = useState<Record<string, boolean | null>>({});
      const [showResults, setShowResults] = useState(false);

      const handleInputChange = (id: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [id]: value }));
        setResults((prev) => ({ ...prev, [id]: null }));
      };

      const checkAnswer = (id: string, correctAnswers: string[]) => {
        const userAnswer = (answers[id] || "").toLowerCase().trim();
        const isCorrect = correctAnswers.some(
          (correct) => correct.toLowerCase() === userAnswer
        );
        setResults((prev) => ({ ...prev, [id]: isCorrect }));
      };

      const checkAllAnswers = () => {
        fillInTheBlank.forEach((item) => {
          const userAnswer = (answers[item.id] || "").toLowerCase().trim();
          const isCorrect = item.answers.some(
            (correct) => correct.toLowerCase() === userAnswer
          );
          setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
        });
        translationExercises.forEach((item) => {
          const userAnswer = (answers[item.id] || "").toLowerCase().trim();
          const isCorrect = item.answers.some(
            (correct) => correct.toLowerCase() === userAnswer
          );
          setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
        });
        setShowResults(true);
      };

      const fillInTheBlank = [
        {
          id: "q1",
          question: "She experienced _____ when her actions contradicted her beliefs.",
          answers: ["cognitive dissonance"],
          hint: "когнитивный диссонанс",
        },
        {
          id: "q2",
          question: "After months of overwork, he was diagnosed with professional _____.",
          answers: ["burnout"],
          hint: "выгорание",
        },
        {
          id: "q3",
          question: "The therapist showed great _____ towards her patients' struggles.",
          answers: ["empathy"],
          hint: "эмпатия",
        },
        {
          id: "q4",
          question: "Building _____ helps people recover from difficult situations.",
          answers: ["resilience"],
          hint: "устойчивость, жизнестойкость",
        },
        {
          id: "q5",
          question: "She's been suffering from _____ after the traumatic event.",
          answers: ["PTSD", "ptsd"],
          hint: "посттравматическое стрессовое расстройство",
        },
        {
          id: "q6",
          question: "Cognitive Behavioral _____ is one of the most effective treatments.",
          answers: ["Therapy", "therapy"],
          hint: "когнитивно-поведенческая терапия",
        },
        {
          id: "q7",
          question: "People with narcissistic personality have an inflated sense of _____.",
          answers: ["self-importance", "self importance"],
          hint: "чувство собственной значимости",
        },
        {
          id: "q8",
          question: "Bottling up emotions can lead to a mental _____.",
          answers: ["breakdown"],
          hint: "нервный срыв",
        },
      ];

      const translationExercises = [
        {
          id: "t1",
          russian: "Эмоциональный интеллект",
          answers: ["emotional intelligence", "eq"],
        },
        {
          id: "t2",
          russian: "Осознанность",
          answers: ["mindfulness"],
        },
        {
          id: "t3",
          russian: "Механизмы защиты",
          answers: ["defense mechanisms", "defence mechanisms", "coping mechanisms"],
        },
        {
          id: "t4",
          russian: "Привязанность",
          answers: ["attachment"],
        },
        {
          id: "t5",
          russian: "Подсознание",
          answers: ["subconscious", "unconscious", "the subconscious", "the unconscious"],
        },
      ];

      const getResultColor = (id: string) => {
        if (results[id] === null) return "border-gray-300";
        return results[id] ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50";
      };

      const getResultIcon = (id: string) => {
        if (results[id] === null) return null;
        return results[id] ? "✅" : "❌";
      };

      const correctCount = Object.values(results).filter((r) => r === true).length;
      const totalQuestions = fillInTheBlank.length + translationExercises.length;

      return (
        <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">📝</div>
            <h2 className="text-4xl font-black mb-2 text-gray-800">Practice & Exercises</h2>
            <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
          </div>

          {/* Fill in the blanks */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
            <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <span>✏️</span> Fill in the Blanks
            </h3>
            <p className="text-gray-600 mb-6">Заполните пропуски подходящими словами и нажмите &quot;Проверить&quot;:</p>

            <div className="space-y-4">
              {fillInTheBlank.map((item, i) => (
                <div key={item.id} className={`rounded-xl p-4 border-2 ${getResultColor(item.id)} transition-all`}>
                  <div className="flex items-start gap-2 mb-3">
                    <span className="font-bold text-purple-600">{i + 1}.</span>
                    <p className="text-gray-800 flex-1">{item.question}</p>
                    {getResultIcon(item.id) && (
                      <span className="text-xl">{getResultIcon(item.id)}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={answers[item.id] || ""}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                      placeholder="Введите ответ..."
                      className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        results[item.id] === false ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answers)}
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-semibold"
                    >
                      Проверить
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 italic mt-2">Подсказка: {item.hint}</p>
                  {results[item.id] === false && (
                    <p className="text-sm text-red-600 mt-2">
                      Правильный ответ: <strong>{item.answers[0]}</strong>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Translation exercise */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6">
            <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
              <span>🌐</span> Translate to English
            </h3>
            <p className="text-gray-600 mb-6">Переведите на английский:</p>

            <div className="space-y-4">
              {translationExercises.map((item, i) => (
                <div key={item.id} className={`rounded-xl p-4 border-2 ${getResultColor(item.id)} transition-all`}>
                  <div className="flex items-start gap-2 mb-3">
                    <span className="font-bold text-pink-600">{i + 1}.</span>
                    <p className="text-gray-800 font-medium flex-1">{item.russian}</p>
                    {getResultIcon(item.id) && (
                      <span className="text-xl">{getResultIcon(item.id)}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={answers[item.id] || ""}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                      placeholder="Enter translation..."
                      className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                        results[item.id] === false ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answers)}
                      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-semibold"
                    >
                      Проверить
                    </button>
                  </div>
                  {results[item.id] === false && (
                    <p className="text-sm text-red-600 mt-2">
                      Правильный ответ: <strong>{item.answers[0]}</strong>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Check all button */}
          <div className="flex justify-center">
            <button
              onClick={checkAllAnswers}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition font-bold text-xl shadow-lg"
            >
              Проверить все ответы
            </button>
          </div>

          {/* Results summary */}
          {showResults && (
            <div className={`rounded-2xl p-6 border-2 shadow-lg ${
              correctCount === totalQuestions
                ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-300"
                : correctCount >= totalQuestions * 0.7
                ? "bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300"
                : "bg-gradient-to-r from-red-100 to-rose-100 border-red-300"
            }`}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">
                  {correctCount === totalQuestions ? "🎉" : correctCount >= totalQuestions * 0.7 ? "👍" : "📚"}
                </span>
                <div>
                  <h3 className="font-bold text-2xl text-gray-800 mb-1">
                    Результат: {correctCount} из {totalQuestions}
                  </h3>
                  <p className="text-gray-700">
                    {correctCount === totalQuestions
                      ? "Отлично! Вы справились со всеми заданиями!"
                      : correctCount >= totalQuestions * 0.7
                      ? "Хороший результат! Повторите ошибки и попробуйте снова."
                      : "Стоит повторить материал и попробовать ещё раз."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="font-bold text-xl text-purple-800 mb-2">Поздравляем с завершением курса!</h3>
                <p className="text-gray-700 text-lg">
                  Вы изучили более <strong>50 психологических терминов</strong> и множество устойчивых выражений.
                  Теперь вы можете:
                </p>
                <ul className="mt-3 space-y-1 text-gray-700">
                  <li>✅ Понимать психологическую литературу на английском</li>
                  <li>✅ Описывать эмоции и психические состояния</li>
                  <li>✅ Обсуждать темы психического здоровья</li>
                  <li>✅ Использовать профессиональную терминологию терапии</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }

  return null;
}
