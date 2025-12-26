"use client";

import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Nouns({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Введение в существительные ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое существительные (Nouns)?">
        <div className="rounded-2xl p-6 mb-6 border"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 8px 32px rgba(99, 102, 241, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}>
          <p className="text-lg font-semibold mb-4"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            Определение
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>Существительное (Noun)</strong> — это слово, которое
            называет людей, животных, места, предметы, явления или идеи.
            Существительные — это основа любого предложения в английском языке.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            В английском языке существительные отвечают на вопросы{" "}
            <strong>Who? (Кто?)</strong> и <strong>What? (Что?)</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Типы существительных">
        <div className="space-y-4">
          <div className="rounded-2xl p-6 border transition-all hover:scale-[1.02]"
            style={{
              background: "rgba(239, 246, 255, 0.6)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderColor: "rgba(147, 197, 253, 0.4)",
              boxShadow: "0 8px 24px rgba(59, 130, 246, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
            }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                }}>
                <span>👤</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. Люди (People)
              </h3>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              Существительные, обозначающие людей и их профессии
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-xl p-3 border"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(147, 197, 253, 0.3)",
                }}>
                <p className="text-sm font-semibold text-blue-700">teacher</p>
                <p className="text-xs text-slate-600">учитель</p>
              </div>
              <div className="rounded-xl p-3 border"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(147, 197, 253, 0.3)",
                }}>
                <p className="text-sm font-semibold text-blue-700">doctor</p>
                <p className="text-xs text-slate-600">врач</p>
              </div>
              <div className="rounded-xl p-3 border"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(147, 197, 253, 0.3)",
                }}>
                <p className="text-sm font-semibold text-blue-700">student</p>
                <p className="text-xs text-slate-600">студент</p>
              </div>
              <div className="rounded-xl p-3 border"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(147, 197, 253, 0.3)",
                }}>
                <p className="text-sm font-semibold text-blue-700">friend</p>
                <p className="text-xs text-slate-600">друг</p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                <span className="text-xl">🏙️</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900">
                2. Места (Places)
              </h3>
            </div>
            <p className="text-sm text-zinc-700 mb-3">
              Существительные, обозначающие места и локации
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-green-50 rounded p-2">
                <p className="text-sm font-semibold">city</p>
                <p className="text-xs text-zinc-600">город</p>
              </div>
              <div className="bg-green-50 rounded p-2">
                <p className="text-sm font-semibold">school</p>
                <p className="text-xs text-zinc-600">школа</p>
              </div>
              <div className="bg-green-50 rounded p-2">
                <p className="text-sm font-semibold">park</p>
                <p className="text-xs text-zinc-600">парк</p>
              </div>
              <div className="bg-green-50 rounded p-2">
                <p className="text-sm font-semibold">home</p>
                <p className="text-xs text-zinc-600">дом</p>
              </div>
            </div>
          </div>

          <div className="border border-amber-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900">
                3. Предметы (Things)
              </h3>
            </div>
            <p className="text-sm text-zinc-700 mb-3">
              Существительные, обозначающие предметы и вещи
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-amber-50 rounded p-2">
                <p className="text-sm font-semibold">book</p>
                <p className="text-xs text-zinc-600">книга</p>
              </div>
              <div className="bg-amber-50 rounded p-2">
                <p className="text-sm font-semibold">phone</p>
                <p className="text-xs text-zinc-600">телефон</p>
              </div>
              <div className="bg-amber-50 rounded p-2">
                <p className="text-sm font-semibold">car</p>
                <p className="text-xs text-zinc-600">машина</p>
              </div>
              <div className="bg-amber-50 rounded p-2">
                <p className="text-sm font-semibold">computer</p>
                <p className="text-xs text-zinc-600">компьютер</p>
              </div>
            </div>
          </div>

          <div className="border border-purple-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                <span className="text-xl">💭</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900">
                4. Идеи и понятия (Ideas)
              </h3>
            </div>
            <p className="text-sm text-zinc-700 mb-3">
              Абстрактные существительные, обозначающие чувства, качества, идеи
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-purple-50 rounded p-2">
                <p className="text-sm font-semibold">love</p>
                <p className="text-xs text-zinc-600">любовь</p>
              </div>
              <div className="bg-purple-50 rounded p-2">
                <p className="text-sm font-semibold">happiness</p>
                <p className="text-xs text-zinc-600">счастье</p>
              </div>
              <div className="bg-purple-50 rounded p-2">
                <p className="text-sm font-semibold">idea</p>
                <p className="text-xs text-zinc-600">идея</p>
              </div>
              <div className="bg-purple-50 rounded p-2">
                <p className="text-sm font-semibold">time</p>
                <p className="text-xs text-zinc-600">время</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Конкретные и абстрактные существительные">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-50 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-3">
              Конкретные (Concrete)
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Можно увидеть, потрогать, услышать, понюхать или попробовать на
              вкус
            </p>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 border border-zinc-200">
                <p className="text-sm">
                  <strong>table</strong> (стол) — можно потрогать
                </p>
              </div>
              <div className="bg-white rounded p-2 border border-zinc-200">
                <p className="text-sm">
                  <strong>music</strong> (музыка) — можно услышать
                </p>
              </div>
              <div className="bg-white rounded p-2 border border-zinc-200">
                <p className="text-sm">
                  <strong>flower</strong> (цветок) — можно понюхать
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-lg p-5">
            <h4 className="font-bold text-zinc-900 mb-3">
              Абстрактные (Abstract)
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Нельзя воспринять органами чувств — это идеи, качества, эмоции
            </p>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 border border-zinc-200">
                <p className="text-sm">
                  <strong>freedom</strong> (свобода) — понятие
                </p>
              </div>
              <div className="bg-white rounded p-2 border border-zinc-200">
                <p className="text-sm">
                  <strong>anger</strong> (гнев) — эмоция
                </p>
              </div>
              <div className="bg-white rounded p-2 border border-zinc-200">
                <p className="text-sm">
                  <strong>knowledge</strong> (знание) — качество
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Собственные и нарицательные существительные">
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">
              Собственные (Proper Nouns)
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Называют конкретного человека, место или организацию.{" "}
              <strong>Всегда пишутся с большой буквы</strong>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">London</p>
                <p className="text-xs text-zinc-600">город Лондон</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">Apple</p>
                <p className="text-xs text-zinc-600">компания Apple</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">Shakespeare</p>
                <p className="text-xs text-zinc-600">имя Шекспир</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">Monday</p>
                <p className="text-xs text-zinc-600">день недели</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">Christmas</p>
                <p className="text-xs text-zinc-600">праздник</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">Russia</p>
                <p className="text-xs text-zinc-600">страна</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Нарицательные (Common Nouns)
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Называют общие предметы, людей или места.{" "}
              <strong>Пишутся с маленькой буквы</strong> (кроме начала
              предложения).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">city</p>
                <p className="text-xs text-zinc-600">любой город</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">company</p>
                <p className="text-xs text-zinc-600">любая компания</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">writer</p>
                <p className="text-xs text-zinc-600">любой писатель</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">day</p>
                <p className="text-xs text-zinc-600">любой день</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">holiday</p>
                <p className="text-xs text-zinc-600">любой праздник</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold">country</p>
                <p className="text-xs text-zinc-600">любая страна</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Слова для изучения (30 базовых существительных)">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
          <p className="text-sm text-amber-900">
            <strong>💡 Совет:</strong> Учите существительные группами по темам —
            так они лучше запоминаются. Повторяйте вслух с правильным
            произношением!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["man", "mæn", "мужчина"],
            ["woman", "ˈwʊmən", "женщина"],
            ["child", "tʃaɪld", "ребёнок"],
            ["person", "ˈpɜːrsn", "человек"],
            ["family", "ˈfæməli", "семья"],
            ["house", "haʊs", "дом"],
            ["room", "ruːm", "комната"],
            ["street", "striːt", "улица"],
            ["town", "taʊn", "город"],
            ["country", "ˈkʌntri", "страна"],
            ["water", "ˈwɔːtər", "вода"],
            ["food", "fuːd", "еда"],
            ["money", "ˈmʌni", "деньги"],
            ["work", "wɜːrk", "работа"],
            ["job", "dʒɒb", "должность"],
            ["year", "jɪər", "год"],
            ["week", "wiːk", "неделя"],
            ["day", "deɪ", "день"],
            ["time", "taɪm", "время"],
            ["life", "laɪf", "жизнь"],
            ["hand", "hænd", "рука"],
            ["eye", "aɪ", "глаз"],
            ["face", "feɪs", "лицо"],
            ["way", "weɪ", "путь, способ"],
            ["world", "wɜːrld", "мир"],
            ["school", "skuːl", "школа"],
            ["problem", "ˈprɒbləm", "проблема"],
            ["question", "ˈkwestʃən", "вопрос"],
            ["answer", "ˈɑːnsər", "ответ"],
            ["thing", "θɪŋ", "вещь"],
          ].map(([word, transcription, translation]) => (
            <div
              key={word}
              className="rounded-lg border border-zinc-200 bg-white p-3 hover:bg-zinc-50 transition"
            >
              <div className="font-semibold text-zinc-900">{word}</div>
              <div className="text-xs text-zinc-500 mt-1">
                [{transcription}]
              </div>
              <div className="text-sm text-zinc-700 mt-1">{translation}</div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Единственное и множественное число ===== */
function Step2() {
  const exercise1: FillItem[] = [
    {
      left: "1. book →",
      right: "",
      answers: ["books"],
      explanation: "Обычное правило: добавляем -s",
    },
    {
      left: "2. box →",
      right: "",
      answers: ["boxes"],
      explanation: "После -x добавляем -es",
    },
    {
      left: "3. city →",
      right: "",
      answers: ["cities"],
      explanation: "y после согласной → -ies",
    },
    {
      left: "4. child →",
      right: "",
      answers: ["children"],
      explanation: "Неправильная форма множественного числа",
    },
    {
      left: "5. knife →",
      right: "",
      answers: ["knives"],
      explanation: "f → v + es",
    },
  ];

  return (
    <>
      <UiSection title="Единственное и множественное число">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed mb-4">
            В английском языке существительные имеют две формы:{" "}
            <strong>единственное число (Singular)</strong> — один предмет, и{" "}
            <strong>множественное число (Plural)</strong> — два и больше
            предметов.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Большинство существительных образуют множественное число по
            правилам, но есть и исключения, которые нужно запомнить.
          </p>
        </div>
      </UiSection>

      <UiSection title="Правила образования множественного числа">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Обычное правило: + s
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  К большинству существительных просто добавляем{" "}
                  <strong>-s</strong>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      book → <strong>books</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      car → <strong>cars</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      dog → <strong>dogs</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      table → <strong>tables</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  После -s, -ss, -x, -ch, -sh: + es
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Если слово заканчивается на шипящий или свистящий звук,
                  добавляем <strong>-es</strong>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      bus → <strong>buses</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      glass → <strong>glasses</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      box → <strong>boxes</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      watch → <strong>watches</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      dish → <strong>dishes</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      class → <strong>classes</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Согласная + y: y → ies
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Если перед <strong>-y</strong> стоит согласная, меняем{" "}
                  <strong>y</strong> на <strong>ies</strong>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      city → <strong>cities</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      baby → <strong>babies</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      lady → <strong>ladies</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      country → <strong>countries</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-3 bg-amber-50 rounded p-3">
                  <p className="text-xs text-amber-900">
                    <strong>НО!</strong> Если перед -y стоит гласная, просто
                    добавляем -s:
                  </p>
                  <p className="text-sm mt-1">
                    boy → <strong>boys</strong>, day → <strong>days</strong>,
                    key → <strong>keys</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Окончание на -f/-fe: f → ves
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Меняем <strong>-f/-fe</strong> на <strong>-ves</strong>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      knife → <strong>knives</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      wife → <strong>wives</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      leaf → <strong>leaves</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      life → <strong>lives</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      shelf → <strong>shelves</strong>
                    </p>
                  </div>
                  <div className="bg-zinc-50 rounded p-2">
                    <p className="text-sm">
                      half → <strong>halves</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-3 bg-amber-50 rounded p-3">
                  <p className="text-xs text-amber-900">
                    <strong>Исключения:</strong> roof → <strong>roofs</strong>,
                    chief → <strong>chiefs</strong>, belief →{" "}
                    <strong>beliefs</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Окончание на -o: + es / + s
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Некоторые слова на -o принимают <strong>-es</strong>, другие —
                  просто <strong>-s</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-zinc-700 mb-2">
                      + es:
                    </p>
                    <div className="space-y-2">
                      <div className="bg-zinc-50 rounded p-2">
                        <p className="text-sm">
                          tomato → <strong>tomatoes</strong>
                        </p>
                      </div>
                      <div className="bg-zinc-50 rounded p-2">
                        <p className="text-sm">
                          potato → <strong>potatoes</strong>
                        </p>
                      </div>
                      <div className="bg-zinc-50 rounded p-2">
                        <p className="text-sm">
                          hero → <strong>heroes</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-700 mb-2">
                      + s:
                    </p>
                    <div className="space-y-2">
                      <div className="bg-zinc-50 rounded p-2">
                        <p className="text-sm">
                          photo → <strong>photos</strong>
                        </p>
                      </div>
                      <div className="bg-zinc-50 rounded p-2">
                        <p className="text-sm">
                          piano → <strong>pianos</strong>
                        </p>
                      </div>
                      <div className="bg-zinc-50 rounded p-2">
                        <p className="text-sm">
                          kilo → <strong>kilos</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Неправильные формы множественного числа (Irregular Plurals)">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h4 className="font-bold text-red-900 mb-4">
            Эти формы нужно запомнить!
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">man → men</p>
              <p className="text-xs text-zinc-600">мужчина → мужчины</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">woman → women</p>
              <p className="text-xs text-zinc-600">женщина → женщины</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">child → children</p>
              <p className="text-xs text-zinc-600">ребёнок → дети</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">person → people</p>
              <p className="text-xs text-zinc-600">человек → люди</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">tooth → teeth</p>
              <p className="text-xs text-zinc-600">зуб → зубы</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">foot → feet</p>
              <p className="text-xs text-zinc-600">нога → ноги</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">mouse → mice</p>
              <p className="text-xs text-zinc-600">мышь → мыши</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">goose → geese</p>
              <p className="text-xs text-zinc-600">гусь → гуси</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold">ox → oxen</p>
              <p className="text-xs text-zinc-600">бык → быки</p>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 rounded p-4">
            <h5 className="font-semibold text-blue-900 mb-2">
              Слова без изменений:
            </h5>
            <p className="text-sm text-zinc-700">
              Некоторые существительные имеют одинаковую форму в единственном и
              множественном числе:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <p className="text-sm">sheep → sheep</p>
              <p className="text-sm">fish → fish</p>
              <p className="text-sm">deer → deer</p>
              <p className="text-sm">aircraft → aircraft</p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Образуйте множественное число"
        instruction="Напишите форму множественного числа для каждого существительного."
        items={exercise1}
      />

      <UiSection title="Слова для изучения (20 существительных с формами множественного числа)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["cat", "cats", "кэт", "кэтс", "кот → коты"],
            ["pen", "pens", "пен", "пенз", "ручка → ручки"],
            ["glass", "glasses", "глас", "гласиз", "стакан → стаканы"],
            ["brush", "brushes", "браш", "брашиз", "щётка → щётки"],
            ["story", "stories", "стори", "сториз", "история → истории"],
            ["toy", "toys", "той", "тойз", "игрушка → игрушки"],
            ["wife", "wives", "уайф", "уайвз", "жена → жёны"],
            ["wolf", "wolves", "вулф", "вулвз", "волк → волки"],
            ["hero", "heroes", "хироу", "хироуз", "герой → герои"],
            ["video", "videos", "видеоу", "видеоуз", "видео → видео"],
            ["man", "men", "мэн", "мен", "мужчина → мужчины"],
            ["woman", "women", "вумэн", "вимин", "женщина → женщины"],
            ["child", "children", "чайлд", "чилдрен", "ребёнок → дети"],
            ["tooth", "teeth", "туθ", "тиθ", "зуб → зубы"],
            ["foot", "feet", "фут", "фит", "нога → ноги"],
            ["sheep", "sheep", "шип", "шип", "овца → овцы"],
            ["fish", "fish", "фиш", "фиш", "рыба → рыбы"],
            ["country", "countries", "кантри", "кантриз", "страна → страны"],
            ["city", "cities", "сити", "ситиз", "город → города"],
            ["knife", "knives", "найф", "найвз", "нож → ножи"],
          ].map(([singular, plural, tr1, tr2, translation]) => (
            <div
              key={singular}
              className="rounded-lg border border-zinc-200 bg-white p-3"
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zinc-500">Единственное:</p>
                  <p className="font-semibold text-zinc-900">{singular}</p>
                  <p className="text-xs text-zinc-500">[{tr1}]</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Множественное:</p>
                  <p className="font-semibold text-zinc-900">{plural}</p>
                  <p className="text-xs text-zinc-500">[{tr2}]</p>
                </div>
              </div>
              <p className="text-sm text-zinc-700 mt-2">{translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Исчисляемые и неисчисляемые ===== */
function Step3() {
  const exercise1: FillItem[] = [
    {
      left: "1. I need",
      right: "apple. (один предмет)",
      answers: ["an"],
      explanation: "Apple начинается с гласного звука → an",
    },
    {
      left: "2. There are three",
      right: "on the table. (book)",
      answers: ["books"],
      explanation: "Three = три → множественное число",
    },
    {
      left: "3. I don't have",
      right: "money. (много)",
      answers: ["much"],
      explanation: "Money = неисчисляемое → much",
    },
    {
      left: "4. How",
      right: "students are there? (сколько)",
      answers: ["many"],
      explanation: "Students = исчисляемое множ. → many",
    },
    {
      left: "5. Can I have some",
      right: "please? (water - вода)",
      answers: ["water"],
      explanation: "Water = неисчисляемое, без артикля",
    },
  ];

  return (
    <>
      <UiSection title="Исчисляемые и неисчисляемые существительные">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed mb-4">
            В английском языке все существительные делятся на две большие
            группы: <strong>исчисляемые (Countable)</strong> — те, которые можно
            посчитать, и <strong>неисчисляемые (Uncountable)</strong> — те,
            которые нельзя посчитать поштучно.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Это деление очень важно, потому что от него зависит, какие слова и
            артикли мы используем с существительным.
          </p>
        </div>
      </UiSection>

      <UiSection title="Исчисляемые существительные (Countable Nouns)">
        <div className="border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔢</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900">
                Можно посчитать!
              </h3>
              <p className="text-sm text-zinc-600">
                one apple, two apples, three apples...
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-zinc-900 mb-2">
                Характеристики:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    Имеют форму единственного и множественного числа
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    Используются с артиклями a/an (в ед. числе)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    Используются с числами: one, two, three...
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    С ними используем: many, few, a few, How many?
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold text-blue-900 mb-3">Примеры:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong>a book</strong> (одна книга)
                  </p>
                  <p className="text-sm">
                    <strong>three books</strong> (три книги)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong>an apple</strong> (одно яблоко)
                  </p>
                  <p className="text-sm">
                    <strong>many apples</strong> (много яблок)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong>a friend</strong> (один друг)
                  </p>
                  <p className="text-sm">
                    <strong>a few friends</strong> (несколько друзей)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong>How many cars?</strong>
                  </p>
                  <p className="text-xs text-zinc-600">Сколько машин?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Неисчисляемые существительные (Uncountable Nouns)">
        <div className="border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">∞</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900">
                Нельзя посчитать поштучно
              </h3>
              <p className="text-sm text-zinc-600">
                water, sugar, information...
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-zinc-900 mb-2">
                Характеристики:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    Имеют только форму единственного числа
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    НЕ используются с a/an
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    НЕ используются с числами напрямую
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-zinc-700">
                    С ними используем: much, little, a little, How much?
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold text-green-900 mb-3">
                Категории неисчисляемых:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-700 mb-1">
                    Жидкости и газы:
                  </p>
                  <p className="text-sm">
                    water, milk, coffee, tea, juice, air, oxygen
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-700 mb-1">
                    Материалы и вещества:
                  </p>
                  <p className="text-sm">
                    wood, metal, glass, plastic, paper, gold
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-700 mb-1">
                    Еда (некоторые виды):
                  </p>
                  <p className="text-sm">
                    bread, rice, sugar, salt, cheese, butter
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-700 mb-1">
                    Абстрактные понятия:
                  </p>
                  <p className="text-sm">
                    information, advice, knowledge, news, work, homework
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-700 mb-1">
                    Другие:
                  </p>
                  <p className="text-sm">money, furniture, luggage, weather</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded p-4">
              <p className="font-semibold text-amber-900 mb-2">
                Как посчитать неисчисляемое?
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Используйте слова-измерители (containers):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p className="text-sm">a glass of water (стакан воды)</p>
                <p className="text-sm">a cup of tea (чашка чая)</p>
                <p className="text-sm">a piece of bread (кусок хлеба)</p>
                <p className="text-sm">a bottle of milk (бутылка молока)</p>
                <p className="text-sm">a slice of cheese (ломтик сыра)</p>
                <p className="text-sm">a piece of advice (совет)</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Many vs Much, Few vs Little">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 p-3 text-left">Слово</th>
                <th className="border border-zinc-300 p-3 text-left">
                  С какими существительными
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  Значение
                </th>
                <th className="border border-zinc-300 p-3 text-left">Пример</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  many
                </td>
                <td className="border border-zinc-300 p-3">Исчисляемые</td>
                <td className="border border-zinc-300 p-3">много</td>
                <td className="border border-zinc-300 p-3">many books</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  much
                </td>
                <td className="border border-zinc-300 p-3">Неисчисляемые</td>
                <td className="border border-zinc-300 p-3">много</td>
                <td className="border border-zinc-300 p-3">much water</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  a few
                </td>
                <td className="border border-zinc-300 p-3">Исчисляемые</td>
                <td className="border border-zinc-300 p-3">несколько</td>
                <td className="border border-zinc-300 p-3">a few apples</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  a little
                </td>
                <td className="border border-zinc-300 p-3">Неисчисляемые</td>
                <td className="border border-zinc-300 p-3">немного</td>
                <td className="border border-zinc-300 p-3">a little sugar</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  few
                </td>
                <td className="border border-zinc-300 p-3">Исчисляемые</td>
                <td className="border border-zinc-300 p-3">
                  мало (недостаточно)
                </td>
                <td className="border border-zinc-300 p-3">few friends</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  little
                </td>
                <td className="border border-zinc-300 p-3">Неисчисляемые</td>
                <td className="border border-zinc-300 p-3">
                  мало (недостаточно)
                </td>
                <td className="border border-zinc-300 p-3">little time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Исчисляемые и неисчисляемые"
        instruction="Заполните пропуски правильными словами."
        items={exercise1}
      />

      <UiSection title="Слова для изучения (30 существительных: исчисляемые и неисчисляемые)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-blue-50 rounded-lg p-4 mb-3">
              <h4 className="font-bold text-blue-900 mb-2">
                Исчисляемые (Countable)
              </h4>
            </div>
            <div className="space-y-2">
              {[
                ["apple", "ˈæpl", "яблоко"],
                ["banana", "bəˈnɑːnə", "банан"],
                ["egg", "eɡ", "яйцо"],
                ["orange", "ˈɒrɪndʒ", "апельсин"],
                ["chair", "tʃeər", "стул"],
                ["table", "ˈteɪbl", "стол"],
                ["cup", "kʌp", "чашка"],
                ["plate", "pleɪt", "тарелка"],
                ["pen", "pen", "ручка"],
                ["pencil", "ˈpensl", "карандаш"],
                ["dog", "dɒɡ", "собака"],
                ["cat", "kæt", "кот"],
                ["tree", "triː", "дерево"],
                ["flower", "ˈflaʊər", "цветок"],
                ["house", "haʊs", "дом"],
              ].map(([word, tr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded border border-blue-100 p-2"
                >
                  <p className="text-sm font-semibold">{word}</p>
                  <p className="text-xs text-zinc-500">
                    [{tr}] - {translation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-green-50 rounded-lg p-4 mb-3">
              <h4 className="font-bold text-green-900 mb-2">
                Неисчисляемые (Uncountable)
              </h4>
            </div>
            <div className="space-y-2">
              {[
                ["water", "ˈwɔːtər", "вода"],
                ["milk", "mɪlk", "молоко"],
                ["coffee", "ˈkɒfi", "кофе"],
                ["tea", "tiː", "чай"],
                ["bread", "bred", "хлеб"],
                ["rice", "raɪs", "рис"],
                ["sugar", "ˈʃʊɡər", "сахар"],
                ["salt", "sɔːlt", "соль"],
                ["butter", "ˈbʌtər", "масло"],
                ["cheese", "tʃiːz", "сыр"],
                ["money", "ˈmʌni", "деньги"],
                ["information", "ˌɪnfərˈmeɪʃn", "информация"],
                ["advice", "ədˈvaɪs", "совет"],
                ["news", "njuːz", "новости"],
                ["furniture", "ˈfɜːrnɪtʃər", "мебель"],
              ].map(([word, tr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded border border-green-100 p-2"
                >
                  <p className="text-sm font-semibold">{word}</p>
                  <p className="text-xs text-zinc-500">
                    [{tr}] - {translation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Притяжательный падеж ===== */
function Step4() {
  const exercise1: FillItem[] = [
    {
      left: "1. This is",
      right: "book. (John)",
      answers: ["John's"],
      explanation: "Единственное число → 's",
    },
    {
      left: "2. The",
      right: "toys are in the box. (children)",
      answers: ["children's"],
      explanation: "Неправильное множественное → 's",
    },
    {
      left: "3. My",
      right: "car is red. (parents)",
      answers: ["parents'"],
      explanation: "Множественное на -s → только '",
    },
    {
      left: "4. Where is",
      right: "office? (the teacher)",
      answers: ["the teacher's"],
      explanation: "Единственное → 's",
    },
  ];

  return (
    <>
      <UiSection title="Притяжательный падеж существительных">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed mb-4">
            <strong>Притяжательный падеж (Possessive Case)</strong> показывает,
            что кому-то или чему-то что-то принадлежит. В английском языке это
            выражается с помощью <strong>апострофа (')</strong> и буквы{" "}
            <strong>s</strong>.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Вместо того чтобы сказать &quot;the book of John&quot;, мы говорим{" "}
            <strong>&quot;John&apos;s book&quot;</strong> (книга Джона).
          </p>
        </div>
      </UiSection>

      <UiSection title="Правила образования притяжательного падежа">
        <div className="space-y-4">
          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Единственное число: + &apos;s
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Для существительных в единственном числе добавляем{" "}
                  <strong>&apos;s</strong>
                </p>
                <div className="space-y-2">
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      the cat + &apos;s → the cat&apos;s tail
                    </p>
                    <p className="text-xs text-zinc-600">хвост кота</p>
                  </div>
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      Mary + &apos;s → Mary&apos;s phone
                    </p>
                    <p className="text-xs text-zinc-600">телефон Мэри</p>
                  </div>
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      my friend + &apos;s → my friend&apos;s house
                    </p>
                    <p className="text-xs text-zinc-600">дом моего друга</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Множественное число на -s: + &apos;
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Если множественное число заканчивается на <strong>-s</strong>,
                  добавляем только <strong>&apos;</strong>
                </p>
                <div className="space-y-2">
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      the cats + &apos; → the cats&apos; tails
                    </p>
                    <p className="text-xs text-zinc-600">хвосты котов</p>
                  </div>
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      my friends + &apos; → my friends&apos; houses
                    </p>
                    <p className="text-xs text-zinc-600">дома моих друзей</p>
                  </div>
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      the students + &apos; → the students&apos; books
                    </p>
                    <p className="text-xs text-zinc-600">книги студентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2">
                  Неправильное множественное число: + &apos;s
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  Если множественное число НЕ заканчивается на{" "}
                  <strong>-s</strong>, добавляем <strong>&apos;s</strong>
                </p>
                <div className="space-y-2">
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      children + &apos;s → children&apos;s toys
                    </p>
                    <p className="text-xs text-zinc-600">игрушки детей</p>
                  </div>
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      men + &apos;s → men&apos;s shoes
                    </p>
                    <p className="text-xs text-zinc-600">мужская обувь</p>
                  </div>
                  <div className="bg-zinc-50 rounded p-3">
                    <p className="text-sm font-semibold mb-1">
                      people + &apos;s → people&apos;s opinions
                    </p>
                    <p className="text-xs text-zinc-600">мнения людей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Особые случаи">
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h4 className="font-bold text-amber-900 mb-3">
              Имена на -s: можно двумя способами
            </h4>
            <p className="text-sm text-zinc-700 mb-3">
              Когда имя заканчивается на -s, можно добавить и &apos;s, и только
              &apos;
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                James&apos;s book ИЛИ James&apos; book (оба варианта верны)
              </p>
              <p className="text-sm">
                Charles&apos;s car ИЛИ Charles&apos; car
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">
              Несколько владельцев
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">
                  Общее владение (принадлежит всем вместе):
                </p>
                <p className="text-sm">
                  John and Mary&apos;s house (их общий дом)
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">
                  Раздельное владение (у каждого своё):
                </p>
                <p className="text-sm">
                  John&apos;s and Mary&apos;s cars (у каждого своя машина)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Устойчивые выражения
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-sm">
                a week&apos;s holiday (недельный отпуск)
              </p>
              <p className="text-sm">
                today&apos;s newspaper (сегодняшняя газета)
              </p>
              <p className="text-sm">
                yesterday&apos;s news (вчерашние новости)
              </p>
              <p className="text-sm">
                two hours&apos; drive (двухчасовая поездка)
              </p>
              <p className="text-sm">at the doctor&apos;s (у врача)</p>
              <p className="text-sm">at my mother&apos;s (у мамы)</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Of вместо 's">
        <div className="bg-zinc-100 rounded-lg p-5">
          <p className="text-zinc-700 mb-3">
            С неодушевлёнными предметами обычно используем <strong>of</strong>,
            а не &apos;s:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-green-700 mb-2">
                ✓ Правильно:
              </p>
              <div className="space-y-1">
                <p className="text-sm">the door of the house</p>
                <p className="text-sm">the name of the book</p>
                <p className="text-sm">the end of the street</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-red-700 mb-2">
                ✗ Неправильно:
              </p>
              <div className="space-y-1">
                <p className="text-sm text-zinc-500">the house&apos;s door</p>
                <p className="text-sm text-zinc-500">the book&apos;s name</p>
                <p className="text-sm text-zinc-500">the street&apos;s end</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Притяжательный падеж"
        instruction="Образуйте притяжательный падеж."
        items={exercise1}
      />

      <UiSection title="Слова для изучения (20 выражений с притяжательным падежом)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["my mother's car", "машина моей мамы"],
            ["the teacher's desk", "стол учителя"],
            ["Tom's book", "книга Тома"],
            ["the girl's dress", "платье девочки"],
            ["the dog's tail", "хвост собаки"],
            ["my sister's phone", "телефон моей сестры"],
            ["the children's room", "комната детей"],
            ["the women's clothes", "женская одежда"],
            ["my friends' houses", "дома моих друзей"],
            ["the students' bags", "сумки студентов"],
            ["today's news", "сегодняшние новости"],
            ["a week's holiday", "недельный отпуск"],
            ["John and Mary's house", "дом Джона и Мэри"],
            ["my parents' car", "машина моих родителей"],
            ["the cat's eyes", "глаза кота"],
            ["the baby's toy", "игрушка малыша"],
            ["the city's center", "центр города"],
            ["my boss's office", "офис моего начальника"],
            ["the company's rules", "правила компании"],
            ["the world's problems", "проблемы мира"],
          ].map(([english, russian]) => (
            <div
              key={english}
              className="rounded-lg border border-zinc-200 bg-white p-3"
            >
              <p className="font-semibold text-zinc-900 text-sm">{english}</p>
              <p className="text-sm text-zinc-600 mt-1">{russian}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Итоговая практика и тест ===== */
function Step5() {
  const finalTest: FillItem[] = [
    {
      left: "1. I have two",
      right: ". (cat)",
      answers: ["cats"],
      explanation: "Two = два → множественное число",
    },
    {
      left: "2. Can I have some",
      right: "? (water)",
      answers: ["water"],
      explanation: "Water = неисчисляемое, без изменений",
    },
    {
      left: "3. These are my",
      right: "toys. (children)",
      answers: ["children's"],
      explanation: "Неправильное множественное → 's",
    },
    {
      left: "4. There are many",
      right: "in the box. (box → множ.)",
      answers: ["boxes"],
      explanation: "После -x добавляем -es",
    },
    {
      left: "5. I need",
      right: "advice. (some/немного)",
      answers: ["some"],
      explanation: "Advice = неисчисляемое → some",
    },
    {
      left: "6. The",
      right: "leaves are green. (tree)",
      answers: ["tree's"],
      explanation: "Единственное число → 's",
    },
    {
      left: "7. How",
      right: "people are there? (много)",
      answers: ["many"],
      explanation: "People = исчисляемое → many",
    },
    {
      left: "8. The",
      right: "car is blue. (my parents)",
      answers: ["my parents'"],
      explanation: "Множественное на -s → только '",
    },
    {
      left: "9. A",
      right: "has four legs. (dog)",
      answers: ["dog"],
      explanation: "Единственное число с артиклем a",
    },
    {
      left: "10. I don't have much",
      right: ". (time)",
      answers: ["time"],
      explanation: "Time = неисчисляемое с much",
    },
  ];

  return (
    <>
      <UiSection title="Итоговая проверка знаний">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-zinc-900 mb-3">
            Проверьте, как вы усвоили материал!
          </h3>
          <p className="text-zinc-700 leading-relaxed">
            Этот финальный тест охватывает все темы, которые мы изучили:
            единственное и множественное число, исчисляемые и неисчисляемые
            существительные, притяжательный падеж.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Заполните пропуски правильными формами существительных."
        items={finalTest}
      />

      <UiSection title="Сводная таблица: Что мы изучили">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-200">
                <th className="border border-zinc-400 p-3 text-left font-bold">
                  Тема
                </th>
                <th className="border border-zinc-400 p-3 text-left font-bold">
                  Правило
                </th>
                <th className="border border-zinc-400 p-3 text-left font-bold">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Типы существительных
                </td>
                <td className="border border-zinc-300 p-3">
                  Люди, места, предметы, идеи
                </td>
                <td className="border border-zinc-300 p-3">
                  teacher, city, book, love
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Обычное множественное
                </td>
                <td className="border border-zinc-300 p-3">+ s</td>
                <td className="border border-zinc-300 p-3">books, cars</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  После -s, -x, -ch, -sh
                </td>
                <td className="border border-zinc-300 p-3">+ es</td>
                <td className="border border-zinc-300 p-3">
                  boxes, watches, dishes
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Согласная + y
                </td>
                <td className="border border-zinc-300 p-3">y → ies</td>
                <td className="border border-zinc-300 p-3">city → cities</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Окончание -f/-fe
                </td>
                <td className="border border-zinc-300 p-3">f → ves</td>
                <td className="border border-zinc-300 p-3">knife → knives</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Неправильные формы
                </td>
                <td className="border border-zinc-300 p-3">Запомнить!</td>
                <td className="border border-zinc-300 p-3">
                  man → men, child → children
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Исчисляемые
                </td>
                <td className="border border-zinc-300 p-3">
                  many, a few, How many?
                </td>
                <td className="border border-zinc-300 p-3">many books</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Неисчисляемые
                </td>
                <td className="border border-zinc-300 p-3">
                  much, a little, How much?
                </td>
                <td className="border border-zinc-300 p-3">much water</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3 font-semibold">
                  Притяжательный (ед.ч.)
                </td>
                <td className="border border-zinc-300 p-3">+ &apos;s</td>
                <td className="border border-zinc-300 p-3">John&apos;s book</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Притяжательный (мн.ч. на -s)
                </td>
                <td className="border border-zinc-300 p-3">+ &apos;</td>
                <td className="border border-zinc-300 p-3">
                  my parents&apos; car
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Слова для изучения (25 полезных существительных для повседневной жизни)">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["morning", "ˈmɔːrnɪŋ", "утро"],
            ["evening", "ˈiːvnɪŋ", "вечер"],
            ["night", "naɪt", "ночь"],
            ["breakfast", "ˈbrekfəst", "завтрак"],
            ["lunch", "lʌntʃ", "обед"],
            ["dinner", "ˈdɪnər", "ужин"],
            ["shop", "ʃɒp", "магазин"],
            ["market", "ˈmɑːrkɪt", "рынок"],
            ["office", "ˈɒfɪs", "офис"],
            ["hospital", "ˈhɒspɪtl", "больница"],
            ["station", "ˈsteɪʃn", "станция"],
            ["airport", "ˈeərpɔːrt", "аэропорт"],
            ["restaurant", "ˈrestrɒnt", "ресторан"],
            ["hotel", "həʊˈtel", "отель"],
            ["cinema", "ˈsɪnəmə", "кинотеатр"],
            ["museum", "mjuːˈziːəm", "музей"],
            ["library", "ˈlaɪbrəri", "библиотека"],
            ["bank", "bæŋk", "банк"],
            ["post office", "pəʊst ˈɒfɪs", "почта"],
            ["police", "pəˈliːs", "полиция"],
            ["teacher", "ˈtiːtʃər", "учитель"],
            ["doctor", "ˈdɒktər", "врач"],
            ["student", "ˈstjuːdnt", "студент"],
            ["worker", "ˈwɜːrkər", "рабочий"],
            ["manager", "ˈmænɪdʒər", "менеджер"],
          ].map(([word, transcription, translation]) => (
            <div
              key={word}
              className="rounded-lg border border-zinc-200 bg-white p-3 hover:bg-zinc-50 transition"
            >
              <div className="font-semibold text-zinc-900">{word}</div>
              <div className="text-xs text-zinc-500 mt-1">
                [{transcription}]
              </div>
              <div className="text-sm text-zinc-700 mt-1">{translation}</div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="Поздравляем!">
        <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-lg p-8 text-center">
          <p className="text-2xl font-bold text-zinc-900 mb-3">
            Отличная работа!
          </p>
          <p className="text-zinc-700 mb-4">
            Вы успешно изучили тему &quot;Существительные&quot;.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm font-semibold text-zinc-900 mb-2">
              Что вы теперь знаете:
            </p>
            <ul className="text-sm text-zinc-700 text-left space-y-1">
              <li>✓ Типы существительных</li>
              <li>✓ Правила образования множественного числа</li>
              <li>✓ Исчисляемые и неисчисляемые существительные</li>
              <li>✓ Притяжательный падеж</li>
              <li>✓ 125 новых слов!</li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}
