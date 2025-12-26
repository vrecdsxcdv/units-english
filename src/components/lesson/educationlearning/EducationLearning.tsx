"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function EducationLearning({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📚 Education & Learning Vocabulary">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              Education & Learning — Образование и обучение
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Лексика про **образование и обучение** необходима для учёбы за
              рубежом, академических дискуссий, и профессионального развития!
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400 mb-4">
              <h3 className="font-bold text-green-900 mb-3 text-lg text-center">
                🔑 Основные категории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    School & University
                  </p>
                  <p className="text-xs text-zinc-600">
                    curriculum, subject, semester, lecture, assignment
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900 text-center">
                    Exams & Assessment
                  </p>
                  <p className="text-xs text-zinc-600">
                    exam, test, pass, fail, grade, mark, certificate
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-pink-900 text-center">
                    Higher Education
                  </p>
                  <p className="text-xs text-zinc-600">
                    graduate, degree, research, thesis, doctorate
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
              <h3 className="font-bold text-orange-900 mb-3 text-lg text-center">
                ⚠️ Почему это важно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. Studying abroad
                  </p>
                  <p className="text-xs italic">
                    I need to <strong>enroll in</strong> a course before the
                    semester starts.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. Academic discussions
                  </p>
                  <p className="text-xs italic">
                    My <strong>thesis</strong> focuses on environmental science.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Professional development
                  </p>
                  <p className="text-xs italic">
                    I'm planning to <strong>pursue</strong> a Master's degree.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ 50+ слов про образование</p>
                  <p>✅ School, university, research vocabulary</p>
                  <p>✅ Collocations (take an exam, hand in homework)</p>
                </div>
                <div>
                  <p>✅ Тексты про студенческую жизнь</p>
                  <p>✅ Упражнения на понимание</p>
                  <p>✅ Academic & learning contexts</p>
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
        <Section title="🏫 School & University — Школа и университет">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Базовая лексика для школы и университета
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются в **школе** и **университете** для описания
              учебного процесса!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. curriculum
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      учебная программа
                    </p>
                    <p className="text-sm italic">
                      The school has introduced a new{" "}
                      <strong>curriculum</strong> this year.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Школа ввела новую учебную программу в этом году.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      2. subject
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">предмет</p>
                    <p className="text-sm italic">
                      My favorite <strong>subject</strong> is mathematics.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мой любимый предмет — математика.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. semester / term
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      семестр / триместр
                    </p>
                    <p className="text-sm italic">
                      The spring <strong>semester</strong> starts in January.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Весенний семестр начинается в январе.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. lecture
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">лекция</p>
                    <p className="text-sm italic">
                      I have a <strong>lecture</strong> on physics this
                      afternoon.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня сегодня днём лекция по физике.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. seminar / tutorial
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      семинар / практическое занятие
                    </p>
                    <p className="text-sm italic">
                      We discuss readings in our weekly <strong>seminar</strong>
                      .
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мы обсуждаем чтения на еженедельном семинаре.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. assignment / homework
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      задание / домашняя работа
                    </p>
                    <p className="text-sm italic">
                      I need to complete this <strong>assignment</strong> by
                      Friday.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно выполнить это задание к пятнице.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. enroll (in) / enrolment
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      записаться / регистрация
                    </p>
                    <p className="text-sm italic">
                      Students must <strong>enroll in</strong> courses before
                      the deadline.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Студенты должны записаться на курсы до крайнего срока.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. attend (classes)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      посещать (занятия)
                    </p>
                    <p className="text-sm italic">
                      You must <strong>attend</strong> at least 80% of classes.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Вы должны посещать минимум 80% занятий.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. professor / lecturer
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      профессор / преподаватель
                    </p>
                    <p className="text-sm italic">
                      My <strong>professor</strong> is an expert in
                      neuroscience.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мой профессор — эксперт в нейронауках.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. student / pupil
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      студент / ученик (pupil для школы)
                    </p>
                    <p className="text-sm italic">
                      There are 30 <strong>students</strong> in my class.
                    </p>
                    <p className="text-xs text-zinc-600">
                      В моём классе 30 студентов.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. campus
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      территория университета
                    </p>
                    <p className="text-sm italic">
                      The university <strong>campus</strong> is beautiful.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Территория университета красивая.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. dormitory / halls of residence
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">общежитие</p>
                    <p className="text-sm italic">
                      I live in a <strong>dormitory</strong> on campus.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я живу в общежитии в кампусе.
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

  if (step === 3) {
    return (
      <>
        <Section title="📝 Exams & Assessment — Экзамены и оценивание">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Vocabulary для экзаменов и оценок
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова и выражения используются в контексте **экзаменов** и
              **академической оценки**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      1. exam / examination
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">экзамен</p>
                    <p className="text-sm italic">
                      I have a final <strong>exam</strong> next week.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня финальный экзамен на следующей неделе.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. take / sit an exam
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сдавать экзамен
                    </p>
                    <p className="text-sm italic">
                      I'm going to <strong>take an exam</strong> tomorrow.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я собираюсь сдавать экзамен завтра.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. pass / fail (an exam)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сдать / провалить экзамен
                    </p>
                    <p className="text-sm italic">
                      I <strong>passed</strong> all my exams!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я сдал все свои экзамены!
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. grade / mark
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">оценка</p>
                    <p className="text-sm italic">
                      I got a good <strong>grade</strong> on my essay.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я получил хорошую оценку за эссе.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. test / quiz
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тест / небольшой тест
                    </p>
                    <p className="text-sm italic">
                      We have a <strong>quiz</strong> every Friday.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У нас тест каждую пятницу.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. revise (UK) / review (US)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      повторять материал
                    </p>
                    <p className="text-sm italic">
                      I need to <strong>revise</strong> for my history exam.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно повторить материал к экзамену по истории.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. retake (an exam)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пересдать экзамен
                    </p>
                    <p className="text-sm italic">
                      I have to <strong>retake</strong> the exam in September.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно пересдать экзамен в сентябре.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. certificate / diploma
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сертификат / диплом
                    </p>
                    <p className="text-sm italic">
                      She received a <strong>certificate</strong> in English.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она получила сертификат по английскому.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. coursework
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      курсовая работа, работа в течение курса
                    </p>
                    <p className="text-sm italic">
                      50% of the final grade is based on{" "}
                      <strong>coursework</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      50% итоговой оценки основано на курсовой работе.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. hand in / submit
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сдать (работу), отправить
                    </p>
                    <p className="text-sm italic">
                      You must <strong>hand in</strong> your essay by Monday.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Вы должны сдать своё эссе к понедельнику.
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

  if (step === 4) {
    return (
      <>
        <Section title="📖 Academic Life — Академическая жизнь">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Vocabulary для академической деятельности
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для описания **учебной деятельности** и
              **академических процессов**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-400">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. study
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      учиться, изучать
                    </p>
                    <p className="text-sm italic">
                      I <strong>study</strong> medicine at university.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я изучаю медицину в университете.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. learn
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      учиться, узнавать
                    </p>
                    <p className="text-sm italic">
                      I'm <strong>learning</strong> Spanish this year.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я учу испанский в этом году.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. library
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">библиотека</p>
                    <p className="text-sm italic">
                      I spend hours in the <strong>library</strong> studying.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я провожу часы в библиотеке за учёбой.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. textbook
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">учебник</p>
                    <p className="text-sm italic">
                      The <strong>textbook</strong> is required for this course.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Учебник обязателен для этого курса.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. notes
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">конспекты</p>
                    <p className="text-sm italic">
                      I always take <strong>notes</strong> during lectures.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я всегда делаю конспекты во время лекций.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. essay / paper
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">эссе / статья</p>
                    <p className="text-sm italic">
                      I'm writing an <strong>essay</strong> on climate change.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пишу эссе об изменении климата.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. presentation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">презентация</p>
                    <p className="text-sm italic">
                      I have to give a <strong>presentation</strong> next week.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно сделать презентацию на следующей неделе.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. scholarship
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">стипендия</p>
                    <p className="text-sm italic">
                      She won a <strong>scholarship</strong> to study abroad.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она получила стипендию для учёбы за границей.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. tuition fees
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      плата за обучение
                    </p>
                    <p className="text-sm italic">
                      The <strong>tuition fees</strong> are quite expensive.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Плата за обучение довольно дорогая.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. major / minor
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      основная специализация / дополнительная
                    </p>
                    <p className="text-sm italic">
                      My <strong>major</strong> is psychology.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Моя основная специализация — психология.
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

  if (step === 5) {
    return (
      <>
        <Section title="🎓 Higher Education & Research — Высшее образование">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Vocabulary для высшего образования и науки
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для **высшего образования**,
              **аспирантуры** и **научной работы**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-indigo-400">
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      1. graduate (verb & noun)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      окончить университет / выпускник
                    </p>
                    <p className="text-sm italic">
                      I <strong>graduated</strong> from university last year.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я окончил университет в прошлом году.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. undergraduate
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      студент бакалавриата
                    </p>
                    <p className="text-sm italic">
                      She's an <strong>undergraduate</strong> student studying
                      biology.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она студентка бакалавриата, изучающая биологию.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. postgraduate / graduate student
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      аспирант, студент магистратуры
                    </p>
                    <p className="text-sm italic">
                      I'm a <strong>postgraduate</strong> student doing a
                      Master's.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я аспирант, получаю степень магистра.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      4. degree
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      степень, диплом
                    </p>
                    <p className="text-sm italic">
                      I have a Bachelor's <strong>degree</strong> in
                      Engineering.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня степень бакалавра инженерных наук.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      5. Bachelor's / Master's / PhD
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      бакалавр / магистр / докторская степень
                    </p>
                    <p className="text-sm italic">
                      She's pursuing a <strong>PhD</strong> in physics.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она получает докторскую степень по физике.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      6. research
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">исследование</p>
                    <p className="text-sm italic">
                      I'm conducting <strong>research</strong> on renewable
                      energy.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я провожу исследование возобновляемой энергии.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      7. thesis / dissertation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      диссертация (thesis для Master's, dissertation для PhD)
                    </p>
                    <p className="text-sm italic">
                      I'm writing my <strong>thesis</strong> on artificial
                      intelligence.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пишу диссертацию об искусственном интеллекте.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      8. supervisor
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      научный руководитель
                    </p>
                    <p className="text-sm italic">
                      My <strong>supervisor</strong> is helping me with my
                      research.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мой научный руководитель помогает мне с исследованием.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      9. publish
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">публиковать</p>
                    <p className="text-sm italic">
                      She <strong>published</strong> her research in a
                      scientific journal.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она опубликовала своё исследование в научном журнале.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. pursue (a degree)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      получать (степень), стремиться к
                    </p>
                    <p className="text-sm italic">
                      I plan to <strong>pursue</strong> a Master's degree.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я планирую получить степень магистра.
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

  if (step === 6) {
    return (
      <>
        <Section title="📖 Reading: Academic Journey">
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Текст для чтения — Академический путь
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                "Dr. Martinez: From Student to Researcher"
              </h4>
              <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                <p>
                  Dr. Sofia Martinez is now a respected researcher in
                  neuroscience, but her journey began many years ago. When she
                  first <strong>enrolled in</strong> university as an{" "}
                  <strong>undergraduate</strong> student, she wasn't sure what
                  to <strong>major</strong> in. She loved science but found the{" "}
                  <strong>curriculum</strong> challenging and often struggled
                  with her <strong>assignments</strong>.
                </p>
                <p>
                  During her first <strong>semester</strong>, Sofia had to{" "}
                  <strong>attend</strong> lectures every day and spend hours in
                  the <strong>library</strong> studying from thick{" "}
                  <strong>textbooks</strong>. She always took detailed{" "}
                  <strong>notes</strong> during <strong>lectures</strong> and{" "}
                  <strong>seminars</strong>, and made sure to{" "}
                  <strong>hand in</strong> all her <strong>coursework</strong>{" "}
                  on time. When exam season arrived, she would{" "}
                  <strong>revise</strong> for weeks, determined to{" "}
                  <strong>pass</strong> all her <strong>exams</strong>.
                </p>
                <p>
                  Sofia's hard work paid off. She received excellent{" "}
                  <strong>grades</strong> and was awarded a{" "}
                  <strong>scholarship</strong> in her second year. This was
                  particularly helpful because <strong>tuition fees</strong>{" "}
                  were expensive, and her family struggled to afford them. The
                  scholarship covered most of her costs and allowed her to focus
                  entirely on her studies.
                </p>
                <p>
                  In her final year, Sofia wrote an <strong>essay</strong> on
                  brain plasticity that impressed her <strong>professor</strong>{" "}
                  so much that he encouraged her to consider{" "}
                  <strong>postgraduate</strong> study. Sofia{" "}
                  <strong>graduated</strong> with honors and decided to{" "}
                  <strong>pursue</strong> a Master's <strong>degree</strong> in
                  neuroscience.
                </p>
                <p>
                  As a <strong>postgraduate student</strong>, Sofia's workload
                  increased dramatically. She had to conduct{" "}
                  <strong>research</strong> for her <strong>thesis</strong>,
                  attend weekly meetings with her <strong>supervisor</strong>,
                  and give <strong>presentations</strong> at academic
                  conferences. Her <strong>thesis</strong> focused on memory
                  formation in the hippocampus, and it took her two years of
                  intensive work to complete.
                </p>
                <p>
                  After earning her Master's, Sofia was accepted into a{" "}
                  <strong>PhD</strong> program. The next four years were the
                  most challenging of her life. She spent countless hours on{" "}
                  <strong>campus</strong>, often working late in the laboratory
                  or in her small <strong>dormitory</strong> room. Her{" "}
                  <strong>dissertation</strong> explored new treatments for
                  Alzheimer's disease, and the <strong>research</strong>{" "}
                  required meticulous attention to detail.
                </p>
                <p>
                  There were difficult moments. Sofia had to{" "}
                  <strong>retake</strong> one qualification exam after{" "}
                  <strong>failing</strong> it the first time. She felt
                  discouraged, but her <strong>supervisor</strong> reminded her
                  that setbacks are a normal part of academic life. She
                  persevered, and eventually, her hard work was rewarded.
                </p>
                <p>
                  Today, Dr. Martinez has <strong>published</strong> numerous
                  papers in leading scientific journals and has received her{" "}
                  <strong>PhD certificate</strong>. She now works as a{" "}
                  <strong>lecturer</strong> at a prestigious university,
                  teaching <strong>subjects</strong> she's passionate about and
                  supervising her own <strong>PhD students</strong>. When
                  students ask her for advice, she always says: "Never give up,
                  even when the <strong>coursework</strong> seems overwhelming.
                  Every <strong>assignment</strong>, every <strong>exam</strong>
                  , every late night in the <strong>library</strong> is
                  preparing you for something greater."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400 mt-4">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                Comprehension Questions
              </h4>
              <CheckableExercise
                title="Answer the questions based on the text"
                instruction="Дай полный ответ на основе текста."
                items={[
                  {
                    left: "What subject did Sofia study for her PhD?",
                    answers: [
                      "neuroscience",
                      "Neuroscience",
                      "She studied neuroscience",
                    ],
                    right: "",
                    explanation: "Sofia studied neuroscience",
                    wide: true,
                  },
                  {
                    left: "What helped Sofia pay for her tuition fees?",
                    answers: [
                      "a scholarship",
                      "scholarship",
                      "A scholarship",
                      "She received a scholarship",
                    ],
                    right: "",
                    explanation: "Sofia received a scholarship",
                    wide: true,
                  },
                  {
                    left: "What happened when Sofia took a qualification exam?",
                    answers: [
                      "She failed",
                      "she failed",
                      "She failed it",
                      "She had to retake it",
                    ],
                    right: "",
                    explanation:
                      "Sofia failed it the first time and had to retake it",
                    wide: true,
                  },
                  {
                    left: "What does Dr. Martinez do now?",
                    answers: [
                      "She is a lecturer",
                      "she is a lecturer",
                      "lecturer",
                      "She works as a lecturer",
                      "She teaches",
                    ],
                    right: "",
                    explanation:
                      "She works as a lecturer at a university and supervises PhD students",
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

  if (step === 7) {
    return (
      <>
        <Section title="✏️ Practice & Complete Vocabulary List">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              Упражнение на закрепление
            </h3>
          </div>

          <CheckableExercise
            title="Complete the sentences with the correct word"
            instruction="Вставь правильное слово из списка."
            items={[
              {
                left: "I need to",
                answers: ["enroll in", "enrol in"],
                right: "this course before the deadline.",
                explanation: "enroll in = записаться на",
                wide: true,
              },
              {
                left: "She",
                answers: ["graduated"],
                right: "from university last year.",
                explanation: "graduate from = окончить",
                wide: true,
              },
              {
                left: "I'm going to",
                answers: ["take", "sit"],
                right: "my final exam next week.",
                explanation: "take/sit an exam = сдавать экзамен",
                wide: true,
              },
              {
                left: "I need to",
                answers: ["hand in", "submit"],
                right: "my assignment tomorrow.",
                explanation: "hand in = сдать (работу)",
                wide: true,
              },
              {
                left: "I'm conducting",
                answers: ["research"],
                right: "on climate change.",
                explanation: "conduct research = проводить исследование",
              },
              {
                left: "She's pursuing a",
                answers: ["PhD", "Master's", "degree"],
                right: "in biology.",
                explanation: "pursue a degree = получать степень",
              },
              {
                left: "I",
                answers: ["passed"],
                right: "all my exams!",
                explanation: "pass an exam = сдать экзамен",
              },
              {
                left: "My",
                answers: ["supervisor"],
                right: "is helping me with my thesis.",
                explanation: "supervisor = научный руководитель",
              },
            ]}
          />

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📚 Complete Vocabulary List — 50+ Words
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  🏫 School & University (12)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>1. curriculum — учебная программа</p>
                  <p>2. subject — предмет</p>
                  <p>3. semester / term — семестр</p>
                  <p>4. lecture — лекция</p>
                  <p>5. seminar — семинар</p>
                  <p>6. assignment / homework — задание</p>
                  <p>7. enroll in — записаться на</p>
                  <p>8. attend (classes) — посещать</p>
                  <p>9. professor / lecturer — профессор</p>
                  <p>10. student / pupil — студент/ученик</p>
                  <p>11. campus — территория университета</p>
                  <p>12. dormitory — общежитие</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  📝 Exams & Assessment (10)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>13. exam / examination — экзамен</p>
                  <p>14. take / sit an exam — сдавать экзамен</p>
                  <p>15. pass / fail — сдать/провалить</p>
                  <p>16. grade / mark — оценка</p>
                  <p>17. test / quiz — тест</p>
                  <p>18. revise / review — повторять материал</p>
                  <p>19. retake — пересдать</p>
                  <p>20. certificate / diploma — сертификат</p>
                  <p>21. coursework — курсовая работа</p>
                  <p>22. hand in / submit — сдать работу</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  📖 Academic Life (10)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>23. study — учиться, изучать</p>
                  <p>24. learn — учиться, узнавать</p>
                  <p>25. library — библиотека</p>
                  <p>26. textbook — учебник</p>
                  <p>27. notes — конспекты</p>
                  <p>28. essay / paper — эссе</p>
                  <p>29. presentation — презентация</p>
                  <p>30. scholarship — стипендия</p>
                  <p>31. tuition fees — плата за обучение</p>
                  <p>32. major / minor — специализация</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-indigo-900 mb-2">
                  🎓 Higher Education & Research (10)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>33. graduate — окончить/выпускник</p>
                  <p>34. undergraduate — студент бакалавриата</p>
                  <p>35. postgraduate — аспирант</p>
                  <p>36. degree — степень</p>
                  <p>37. Bachelor's — бакалавр</p>
                  <p>38. Master's — магистр</p>
                  <p>39. PhD — докторская степень</p>
                  <p>40. research — исследование</p>
                  <p>41. thesis / dissertation — диссертация</p>
                  <p>42. supervisor — научный руководитель</p>
                  <p>43. publish — публиковать</p>
                  <p>44. pursue (a degree) — получать степень</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">
                  ➕ Additional Useful Words (8+)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>45. study abroad — учиться за границей</p>
                  <p>46. academic year — учебный год</p>
                  <p>47. qualification — квалификация</p>
                  <p>48. field of study — область обучения</p>
                  <p>49. specialize in — специализироваться в</p>
                  <p>50. dropout — бросивший учёбу</p>
                  <p>51. alumni — выпускники</p>
                  <p>52. dean — декан</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-400 mt-4">
              <h4 className="font-bold text-green-900 mb-3 text-center">
                💡 Полезные collocations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-700">
                <p>
                  ✓ <strong>take notes</strong> — делать конспекты
                </p>
                <p>
                  ✓ <strong>attend classes</strong> — посещать занятия
                </p>
                <p>
                  ✓ <strong>meet a deadline</strong> — уложиться в срок
                </p>
                <p>
                  ✓ <strong>conduct research</strong> — проводить исследование
                </p>
                <p>
                  ✓ <strong>earn a degree</strong> — получить степень
                </p>
                <p>
                  ✓ <strong>write a thesis</strong> — писать диссертацию
                </p>
                <p>
                  ✓ <strong>give a presentation</strong> — делать презентацию
                </p>
                <p>
                  ✓ <strong>apply for a scholarship</strong> — подавать заявку
                  на стипендию
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}




