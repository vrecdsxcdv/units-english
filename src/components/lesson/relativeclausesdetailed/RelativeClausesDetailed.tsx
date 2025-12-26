"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function RelativeClausesDetailed({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Relative Clauses: Who, Which, Where">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔗</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-3">
                Относительные придаточные предложения
              </p>
              <p className="text-zinc-800 leading-relaxed">
                Relative Clauses помогают нам давать дополнительную информацию о
                людях, предметах и местах.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            What are Relative Clauses?
          </h4>
          <p className="text-zinc-800 mb-4 leading-relaxed">
            Relative Clauses (относительные придаточные предложения) — это части
            предложения, которые дают дополнительную информацию о
            существительном.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <p className="text-zinc-800 mb-2">
                <strong className="text-indigo-900">Пример:</strong>
              </p>
              <p className="text-lg text-zinc-900 mb-2">
                The woman{" "}
                <strong className="text-indigo-600">who lives next door</strong>{" "}
                is a teacher.
              </p>
              <p className="text-sm text-zinc-700">
                Женщина, <strong>которая живёт по соседству</strong>, — учитель.
              </p>
            </div>
            <div className="bg-sky-50 rounded-lg p-5">
              <p className="text-zinc-800 mb-2">
                <strong className="text-sky-900">Другой пример:</strong>
              </p>
              <p className="text-lg text-zinc-900 mb-2">
                The book{" "}
                <strong className="text-sky-600">
                  which I bought yesterday
                </strong>{" "}
                is very interesting.
              </p>
              <p className="text-sm text-zinc-700">
                Книга, <strong>которую я купил вчера</strong>, очень интересная.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Main Relative Pronouns — Основные относительные местоимения
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h5 className="text-xl font-bold text-green-900 mb-2">WHO</h5>
              <p className="text-sm text-zinc-800 mb-2">для людей</p>
              <p className="text-xs text-green-700 italic">
                The man <strong>who</strong> called you is my brother.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h5 className="text-xl font-bold text-blue-900 mb-2">WHICH</h5>
              <p className="text-sm text-zinc-800 mb-2">
                для предметов/животных
              </p>
              <p className="text-xs text-blue-700 italic">
                The car <strong>which</strong> I bought is red.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h5 className="text-xl font-bold text-purple-900 mb-2">WHERE</h5>
              <p className="text-sm text-zinc-800 mb-2">для мест</p>
              <p className="text-xs text-purple-700 italic">
                The hotel <strong>where</strong> we stayed was great.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Продолжение следует... */

/* ===== СТРАНИЦА 2: WHO — детальное изучение ===== */
function Step2() {
  return (
    <>
      <UiSection title="WHO — для людей">
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-sky-300">
          <p className="text-sky-900 leading-relaxed font-semibold">
            WHO используется для обозначения людей.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Правила использования WHO
          </h4>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-indigo-900 mb-3">
                1. WHO как подлежащее
              </h5>
              <p className="text-sm text-zinc-800 mb-3">
                WHO заменяет подлежащее (кто выполняет действие).
              </p>
              <div className="space-y-2">
                <p className="text-green-700">
                  The girl <strong>who lives next door</strong> is my friend.
                </p>
                <p className="text-green-700">
                  People <strong>who speak three languages</strong> are called
                  trilinguals.
                </p>
                <p className="text-green-700">
                  The student <strong>who passed the exam</strong> is very
                  happy.
                </p>
              </div>
            </div>

            <div className="bg-sky-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-sky-900 mb-3">
                2. WHO как дополнение
              </h5>
              <p className="text-sm text-zinc-800 mb-3">
                WHO заменяет дополнение (о ком идёт речь).
              </p>
              <div className="space-y-2">
                <p className="text-green-700">
                  The man <strong>who I met yesterday</strong> is a doctor.
                </p>
                <p className="text-green-700">
                  The teacher <strong>who we saw at the concert</strong> is very
                  talented.
                </p>
                <p className="text-green-700">
                  The person <strong>who you called</strong> is not available.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Примеры с WHO
          </h4>
          <div className="space-y-3">
            {[
              "The doctor who treated me was very kind. — Доктор, который меня лечил, был очень добрым.",
              "I know a girl who can speak five languages. — Я знаю девушку, которая говорит на пяти языках.",
              "The people who live upstairs are very noisy. — Люди, которые живут наверху, очень шумные.",
              "She's the woman who helped me yesterday. — Она та женщина, которая помогла мне вчера.",
              "The boy who sits next to me is from Italy. — Мальчик, который сидит рядом со мной, из Италии.",
              "Anyone who wants to join us is welcome. — Любой, кто хочет присоединиться к нам, приглашается.",
            ].map((example, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: WHICH — детальное изучение ===== */
function Step3() {
  return (
    <>
      <UiSection title="WHICH — для предметов и животных">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            WHICH используется для обозначения предметов и животных.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Правила использования WHICH
          </h4>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-blue-900 mb-3">
                1. WHICH как подлежащее
              </h5>
              <p className="text-sm text-zinc-800 mb-3">
                WHICH заменяет подлежащее (что выполняет действие).
              </p>
              <div className="space-y-2">
                <p className="text-green-700">
                  The book <strong>which is on the table</strong> is mine.
                </p>
                <p className="text-green-700">
                  The train <strong>which leaves at 6 pm</strong> goes to
                  London.
                </p>
                <p className="text-green-700">
                  The dog <strong>which barks all night</strong> belongs to my
                  neighbor.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-green-900 mb-3">
                2. WHICH как дополнение
              </h5>
              <p className="text-sm text-zinc-800 mb-3">
                WHICH заменяет дополнение (о чём идёт речь).
              </p>
              <div className="space-y-2">
                <p className="text-green-700">
                  The car <strong>which I bought last year</strong> is very
                  reliable.
                </p>
                <p className="text-green-700">
                  The film <strong>which we saw yesterday</strong> was boring.
                </p>
                <p className="text-green-700">
                  The phone <strong>which you gave me</strong> is broken.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
          <h4 className="text-2xl font-bold text-purple-900 mb-4">
            Примеры с WHICH
          </h4>
          <div className="space-y-3">
            {[
              "The house which has a red door is mine. — Дом, у которого красная дверь, мой.",
              "I lost the keys which were in my pocket. — Я потерял ключи, которые были в моём кармане.",
              "The cake which she made was delicious. — Торт, который она сделала, был вкусным.",
              "The computer which I use for work is very fast. — Компьютер, который я использую для работы, очень быстрый.",
              "The hotel which we stayed at was expensive. — Отель, в котором мы останавливались, был дорогим.",
              "The song which is playing now is my favorite. — Песня, которая сейчас играет, моя любимая.",
            ].map((example, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: WHERE — детальное изучение ===== */
function Step4() {
  return (
    <>
      <UiSection title="WHERE — для мест">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            WHERE используется для обозначения мест.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Правила использования WHERE
          </h4>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <p className="text-sm text-zinc-800 mb-3">
                <strong>WHERE</strong> = <strong>in/at/on which</strong> (где, в
                котором/которой)
              </p>
              <p className="text-sm text-zinc-800 mb-3">
                WHERE заменяет место и предлог (in, at, on).
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-zinc-900 font-semibold">Вместо:</p>
                  <p className="text-zinc-700">
                    The restaurant <strong>in which</strong> we ate was
                    excellent.
                  </p>
                </div>
                <div>
                  <p className="text-green-900 font-semibold">Говорим:</p>
                  <p className="text-green-700">
                    The restaurant <strong>where</strong> we ate was excellent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Примеры с WHERE
          </h4>
          <div className="space-y-3">
            {[
              "The city where I was born is very beautiful. — Город, где я родился, очень красивый.",
              "This is the school where I study. — Это школа, где я учусь.",
              "The park where we usually meet is closed today. — Парк, где мы обычно встречаемся, сегодня закрыт.",
              "The hotel where we stayed had a swimming pool. — В отеле, где мы останавливались, был бассейн.",
              "I want to visit the place where my grandparents lived. — Я хочу посетить место, где жили мои бабушка и дедушка.",
              "The country where she works is very far away. — Страна, где она работает, очень далеко.",
              "The café where they first met is still open. — Кафе, где они впервые встретились, всё ещё работает.",
              "This is the house where Shakespeare was born. — Это дом, где родился Шекспир.",
            ].map((example, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 Важно запомнить
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>
                WHERE используется только для мест (city, school, park, country,
                etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>После WHERE не ставится предлог (in, at, on)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>WHERE = in/at/on which (но мы говорим просто WHERE)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Упражнение 1 ===== */
function Step5() {
  const exercise1: FillItem[] = [
    {
      left: "1. The woman",
      right: "lives next door is a doctor. (кто)",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "2. The book",
      right: "I'm reading is very interesting. (который)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "3. This is the restaurant",
      right: "we had dinner last night. (где)",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "4. I know a man",
      right: "speaks six languages. (кто)",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "5. The car",
      right: "he bought is very expensive. (который)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "6. The hotel",
      right: "we stayed was very comfortable. (где)",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "7. People",
      right: "exercise regularly are healthier. (кто)",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "8. The film",
      right: "we saw yesterday was boring. (который)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "9. This is the place",
      right: "I was born. (где)",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "10. The girl",
      right: "sits next to me is from France. (кто)",
      answers: ["who"],
      explanation: "who — для людей",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 1: WHO, WHICH, WHERE">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Вставьте правильное относительное местоимение.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Заполните пропуски"
        instruction="Впишите who, which или where."
        items={exercise1}
      />
    </>
  );
}

/* ===== СТРАНИЦА 6: Упражнение 2 ===== */
function Step6() {
  const exercise2: FillItem[] = [
    {
      left: "1. The teacher",
      right: "taught me English has retired. (кто)",
      answers: ["who"],
      explanation: "who — для людей (учитель)",
    },
    {
      left: "2. The phone",
      right: "I lost was very expensive. (который)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов (телефон)",
    },
    {
      left: "3. This is the park",
      right: "we usually play football. (где)",
      answers: ["where"],
      explanation: "where — для мест (парк)",
    },
    {
      left: "4. The students",
      right: "passed the exam are very happy. (кто)",
      answers: ["who"],
      explanation: "who — для людей (студенты)",
    },
    {
      left: "5. The laptop",
      right: "she uses for work is broken. (который)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов (ноутбук)",
    },
    {
      left: "6. The city",
      right: "I want to live is Paris. (где)",
      answers: ["where"],
      explanation: "where — для мест (город)",
    },
    {
      left: "7. The doctor",
      right: "examined me was very kind. (кто)",
      answers: ["who"],
      explanation: "who — для людей (доктор)",
    },
    {
      left: "8. The house",
      right: "they bought has a big garden. (который)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов (дом)",
    },
    {
      left: "9. The café",
      right: "we met is near the station. (где)",
      answers: ["where"],
      explanation: "where — для мест (кафе)",
    },
    {
      left: "10. Anyone",
      right: "wants to join us is welcome. (кто)",
      answers: ["who"],
      explanation: "who — для людей (anyone = любой человек)",
    },
    {
      left: "11. The keys",
      right: "were on the table have disappeared. (которые)",
      answers: ["which", "that"],
      explanation: "which/that — для предметов (ключи)",
    },
    {
      left: "12. The library",
      right: "I study is very quiet. (где)",
      answers: ["where"],
      explanation: "where — для мест (библиотека)",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 2: Практика">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Продолжаем практиковать WHO, WHICH, WHERE.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Заполните пропуски"
        instruction="Впишите who, which или where."
        items={exercise2}
      />
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнение 3 — Соединение предложений ===== */
function Step7() {
  const exercise3: FillItem[] = [
    {
      left: "1. I met a woman. She can speak five languages. → I met a woman",
      right: "can speak five languages.",
      answers: ["who"],
      explanation: "Соединяем предложения с помощью who (для людей)",
    },
    {
      left: "2. This is the book. I bought it yesterday. → This is the book",
      right: "I bought yesterday.",
      answers: ["which", "that"],
      explanation: "Соединяем предложения с помощью which/that (для предметов)",
    },
    {
      left: "3. That's the house. I grew up there. → That's the house",
      right: "I grew up.",
      answers: ["where"],
      explanation: "Соединяем предложения с помощью where (для мест)",
    },
    {
      left: "4. The man is my uncle. He is wearing a blue suit. → The man",
      right: "is wearing a blue suit is my uncle.",
      answers: ["who"],
      explanation: "who — для людей (the man)",
    },
    {
      left: "5. I like the song. It is playing now. → I like the song",
      right: "is playing now.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов (песня)",
    },
    {
      left: "6. This is the hospital. My sister works there. → This is the hospital",
      right: "my sister works.",
      answers: ["where"],
      explanation: "where — для мест (больница)",
    },
    {
      left: "7. Do you know the girl? She is talking to John. → Do you know the girl",
      right: "is talking to John?",
      answers: ["who"],
      explanation: "who — для людей (девушка)",
    },
    {
      left: "8. The computer is broken. I bought it last year. → The computer",
      right: "I bought last year is broken.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов (компьютер)",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 3: Соединение предложений">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Соедините два предложения с помощью relative clauses.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Соедините предложения"
        instruction="Впишите who, which или where, чтобы соединить предложения."
        items={exercise3}
      />
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнение 4 — Перевод ===== */
function Step8() {
  const exercise4: FillItem[] = [
    {
      left: "1. Человек, который живёт рядом, очень дружелюбный. → The man",
      right: "lives next door is very friendly.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "2. Книга, которую я читаю, очень интересная. → The book",
      right: "I'm reading is very interesting.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "3. Это ресторан, где мы обедали вчера. → This is the restaurant",
      right: "we had lunch yesterday.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "4. Девушка, которая сидит там, моя сестра. → The girl",
      right: "is sitting there is my sister.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "5. Машина, которую он купил, красная. → The car",
      right: "he bought is red.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "6. Это город, где я родился. → This is the city",
      right: "I was born.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "7. Люди, которые курят, рискуют своим здоровьем. → People",
      right: "smoke risk their health.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "8. Фильм, который мы посмотрели, был скучным. → The film",
      right: "we watched was boring.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "9. Это парк, где дети играют. → This is the park",
      right: "children play.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "10. Студент, который ответил на вопрос, очень умный. → The student",
      right: "answered the question is very clever.",
      answers: ["who"],
      explanation: "who — для людей",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 4: Перевод">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Переведите предложения, используя relative clauses.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Переведите"
        instruction="Впишите who, which или where."
        items={exercise4}
      />
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнение 5 — Исправление ошибок ===== */
function Step9() {
  const exercise5: FillItem[] = [
    {
      left: "1. The man which lives next door is a teacher.",
      right: "",
      answers: [
        "The man who lives next door is a teacher.",
        "The man who lives next door is a teacher",
      ],
      explanation: "Для людей используем WHO, а не WHICH.",
    },
    {
      left: "2. The book who I bought is interesting.",
      right: "",
      answers: [
        "The book which I bought is interesting.",
        "The book that I bought is interesting.",
        "The book which I bought is interesting",
        "The book that I bought is interesting",
      ],
      explanation: "Для предметов используем WHICH/THAT, а не WHO.",
    },
    {
      left: "3. This is the place which I was born.",
      right: "",
      answers: [
        "This is the place where I was born.",
        "This is the place where I was born",
      ],
      explanation: "Для мест используем WHERE, а не WHICH.",
    },
    {
      left: "4. The woman where helped me was kind.",
      right: "",
      answers: [
        "The woman who helped me was kind.",
        "The woman who helped me was kind",
      ],
      explanation: "Для людей используем WHO, а не WHERE.",
    },
    {
      left: "5. The car who he bought is red.",
      right: "",
      answers: [
        "The car which he bought is red.",
        "The car that he bought is red.",
        "The car which he bought is red",
        "The car that he bought is red",
      ],
      explanation: "Для предметов используем WHICH/THAT, а не WHO.",
    },
    {
      left: "6. The hotel which we stayed was expensive.",
      right: "",
      answers: [
        "The hotel where we stayed was expensive.",
        "The hotel where we stayed was expensive",
      ],
      explanation: "Для мест используем WHERE, а не WHICH.",
    },
    {
      left: "7. People which exercise are healthier.",
      right: "",
      answers: [
        "People who exercise are healthier.",
        "People who exercise are healthier",
      ],
      explanation: "Для людей используем WHO, а не WHICH.",
    },
    {
      left: "8. The city who I live is beautiful.",
      right: "",
      answers: [
        "The city where I live is beautiful.",
        "The city where I live is beautiful",
      ],
      explanation: "Для мест используем WHERE, а не WHO.",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 5: Найди и исправь ошибку">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔍</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-2">
                Найдите и исправьте ошибку
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В каждом предложении есть ошибка. Перепишите предложение
                правильно.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Исправьте ошибки"
        instruction="Перепишите каждое предложение без ошибки."
        items={exercise5}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговый тест ===== */
function Step10() {
  const finalTest: FillItem[] = [
    {
      left: "1. The person",
      right: "answered the phone was very helpful.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "2. I've lost the keys",
      right: "were in my bag.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "3. This is the shop",
      right: "I bought my phone.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "4. The children",
      right: "live next door are very noisy.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "5. The film",
      right: "we saw last night was excellent.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "6. That's the restaurant",
      right: "they first met.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "7. A teacher is someone",
      right: "teaches students.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "8. The dog",
      right: "barks all night belongs to my neighbor.",
      answers: ["which", "that"],
      explanation: "which/that — для животных",
    },
    {
      left: "9. This is the house",
      right: "I grew up.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "10. The woman",
      right: "I met at the party is a doctor.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "11. The computer",
      right: "I use at work is very old.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "12. The country",
      right: "she was born is France.",
      answers: ["where"],
      explanation: "where — для мест",
    },
    {
      left: "13. Students",
      right: "study hard usually get good grades.",
      answers: ["who"],
      explanation: "who — для людей",
    },
    {
      left: "14. The songs",
      right: "she writes are very popular.",
      answers: ["which", "that"],
      explanation: "which/that — для предметов",
    },
    {
      left: "15. This is the place",
      right: "Shakespeare was born.",
      answers: ["where"],
      explanation: "where — для мест",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Проверьте свои знания Relative Clauses.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Впишите who, which или where."
        items={finalTest}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mt-6 mb-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Сводная таблица
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Местоимение
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Для кого/чего
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  WHO
                </td>
                <td className="border-2 border-indigo-200 p-3">Люди</td>
                <td className="border-2 border-indigo-200 p-3">
                  The man <strong>who</strong> lives here
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  WHICH
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  Предметы, животные
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  The book <strong>which</strong> I bought
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  WHERE
                </td>
                <td className="border-2 border-indigo-200 p-3">Места</td>
                <td className="border-2 border-indigo-200 p-3">
                  The hotel <strong>where</strong> we stayed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-300 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Что вы изучили:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>WHO</strong> — для людей (подлежащее и дополнение)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>WHICH</strong> — для предметов и животных
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>WHERE</strong> — для мест (= in/at/on which)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>Как соединять предложения с помощью Relative Clauses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>Типичные ошибки и как их избежать</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-sky-300">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800">
            Вы успешно освоили Relative Clauses с WHO, WHICH и WHERE! Теперь вы
            можете связывать предложения и давать дополнительную информацию о
            людях, предметах и местах. Продолжайте практиковаться!
          </p>
        </div>
      </div>
    </>
  );
}
