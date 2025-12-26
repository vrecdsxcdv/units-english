"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function HealthLifestyle({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🏥 Health & Lifestyle Vocabulary">
          <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-lg p-6 border-2 border-green-400">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Health & Lifestyle — Здоровье и образ жизни
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Тема **здоровья и образа жизни** — одна из самых важных и
              практичных! Эта лексика необходима для разговоров о питании,
              фитнесе, медицине, стрессе и здоровых привычках.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-pink-100 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔑 Основные категории (150+ слов!)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Diet & Nutrition
                  </p>
                  <p className="text-xs text-zinc-600">
                    balanced diet, vitamins, calories, nutrients, protein
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Fitness & Exercise
                  </p>
                  <p className="text-xs text-zinc-600">
                    work out, cardio, strength training, endurance, flexibility
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900 text-center">
                    Health Problems
                  </p>
                  <p className="text-xs text-zinc-600">
                    illness, disease, symptoms, pain, injury, infection
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-orange-900 text-center">
                    Mental Health
                  </p>
                  <p className="text-xs text-zinc-600">
                    stress, anxiety, depression, burnout, well-being
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-cyan-900 text-center">
                    Medical Care
                  </p>
                  <p className="text-xs text-zinc-600">
                    treatment, medication, surgery, diagnosis, prescription
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-pink-900 text-center">
                    Bad Habits
                  </p>
                  <p className="text-xs text-zinc-600">
                    addiction, smoking, alcohol, quit, give up, recover
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
              <h3 className="font-bold text-orange-900 mb-3 text-lg text-center">
                ⚠️ Почему это крайне важно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    1. Забота о здоровье
                  </p>
                  <p className="text-xs italic">
                    I'm trying to maintain a <strong>balanced diet</strong> and{" "}
                    <strong>work out</strong> regularly.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    2. Визиты к врачу
                  </p>
                  <p className="text-xs italic">
                    The doctor prescribed me <strong>medication</strong> for my{" "}
                    <strong>symptoms</strong>.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Ментальное здоровье
                  </p>
                  <p className="text-xs italic">
                    I've been feeling <strong>stressed</strong> and need to work
                    on my <strong>mental health</strong>.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-red-900 mb-1">
                    4. Преодоление зависимостей
                  </p>
                  <p className="text-xs italic">
                    He decided to <strong>quit smoking</strong> and{" "}
                    <strong>recover</strong> from his <strong>addiction</strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
              <h4 className="font-bold text-yellow-900 mb-3 text-center">
                💡 В этой теме вы изучите:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ 150+ слов про здоровье и образ жизни</p>
                  <p>✅ Diet, fitness, mental health vocabulary</p>
                  <p>✅ Medical terminology (symptoms, treatment)</p>
                  <p>
                    ✅ Phrasal verbs (come down with, get over, cut down on)
                  </p>
                </div>
                <div>
                  <p>✅ Addiction & recovery vocabulary</p>
                  <p>✅ 3 больших текста про здоровый образ жизни</p>
                  <p>✅ Упражнения на понимание и закрепление</p>
                  <p>✅ Real-life health situations</p>
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
        <Section title="🥗 Diet & Nutrition — Питание">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Vocabulary про питание и диету
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для разговоров о **здоровом питании** и
              **диетах**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-400">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. balanced diet
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сбалансированная диета
                    </p>
                    <p className="text-sm italic">
                      It's important to maintain a{" "}
                      <strong>balanced diet</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Важно поддерживать сбалансированную диету.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. nutrition / nutrients
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      питание / питательные вещества
                    </p>
                    <p className="text-sm italic">
                      This food is rich in <strong>nutrients</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Эта еда богата питательными веществами.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. vitamins
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">витамины</p>
                    <p className="text-sm italic">
                      I take <strong>vitamins</strong> every morning.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я принимаю витамины каждое утро.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. protein / carbohydrates / fats
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      белки / углеводы / жиры
                    </p>
                    <p className="text-sm italic">
                      Athletes need a lot of <strong>protein</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Спортсменам нужно много белка.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. calories
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">калории</p>
                    <p className="text-sm italic">
                      I'm trying to <strong>cut down on calories</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пытаюсь сократить калории.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. vegetarian / vegan
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вегетарианец / веган
                    </p>
                    <p className="text-sm italic">
                      I've been <strong>vegetarian</strong> for five years.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я вегетарианец уже пять лет.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. organic food
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      органическая еда
                    </p>
                    <p className="text-sm italic">
                      I prefer to buy <strong>organic food</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я предпочитаю покупать органическую еду.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. processed food / junk food
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      обработанная еда / вредная еда
                    </p>
                    <p className="text-sm italic">
                      Avoid eating too much <strong>junk food</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Избегайте употребления слишком большого количества вредной
                      еды.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. sugar / salt
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">сахар / соль</p>
                    <p className="text-sm italic">
                      Too much <strong>sugar</strong> is bad for your health.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Слишком много сахара вредно для здоровья.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. lose weight / gain weight
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      худеть / набирать вес
                    </p>
                    <p className="text-sm italic">
                      I need to <strong>lose weight</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Мне нужно похудеть.</p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. be on a diet
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">быть на диете</p>
                    <p className="text-sm italic">
                      I've been <strong>on a diet</strong> for two months.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я на диете уже два месяца.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. portion size
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">размер порции</p>
                    <p className="text-sm italic">
                      Control your <strong>portion sizes</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Контролируйте размеры порций.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. hydration / stay hydrated
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      гидратация / оставаться гидратированным
                    </p>
                    <p className="text-sm italic">
                      Drink water to <strong>stay hydrated</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Пейте воду, чтобы оставаться гидратированным.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. metabolism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">метаболизм</p>
                    <p className="text-sm italic">
                      Exercise can boost your <strong>metabolism</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Упражнения могут ускорить ваш метаболизм.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. fiber
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">клетчатка</p>
                    <p className="text-sm italic">
                      Fruits and vegetables are high in <strong>fiber</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Фрукты и овощи содержат много клетчатки.
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
        <Section title="💪 Fitness & Exercise — Фитнес и упражнения">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Vocabulary про фитнес и физическую активность
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для разговоров о **тренировках** и
              **физических упражнениях**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. work out / exercise
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тренироваться / делать упражнения
                    </p>
                    <p className="text-sm italic">
                      I <strong>work out</strong> three times a week.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я тренируюсь три раза в неделю.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      2. gym / fitness center
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тренажёрный зал / фитнес-центр
                    </p>
                    <p className="text-sm italic">
                      I go to the <strong>gym</strong> every morning.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я хожу в зал каждое утро.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. cardio
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">кардио</p>
                    <p className="text-sm italic">
                      Running is a great <strong>cardio</strong> exercise.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Бег — отличное кардио упражнение.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. strength training / weightlifting
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      силовая тренировка / поднятие тяжестей
                    </p>
                    <p className="text-sm italic">
                      I focus on <strong>strength training</strong> twice a
                      week.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я фокусируюсь на силовых тренировках дважды в неделю.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. endurance / stamina
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выносливость / выдержка
                    </p>
                    <p className="text-sm italic">
                      Running builds <strong>endurance</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Бег развивает выносливость.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. flexibility
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">гибкость</p>
                    <p className="text-sm italic">
                      Yoga improves <strong>flexibility</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Йога улучшает гибкость.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. warm up / cool down
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разминка / заминка
                    </p>
                    <p className="text-sm italic">
                      Always <strong>warm up</strong> before exercising.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Всегда делайте разминку перед упражнениями.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. stretch / stretching
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      растягиваться / растяжка
                    </p>
                    <p className="text-sm italic">
                      <strong>Stretching</strong> prevents injuries.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Растяжка предотвращает травмы.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. personal trainer
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      персональный тренер
                    </p>
                    <p className="text-sm italic">
                      I hired a <strong>personal trainer</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я нанял персонального тренера.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. fitness goals
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">фитнес-цели</p>
                    <p className="text-sm italic">
                      I've set clear <strong>fitness goals</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я поставил чёткие фитнес-цели.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. get in shape / stay in shape
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      привести себя в форму / поддерживать форму
                    </p>
                    <p className="text-sm italic">
                      I want to <strong>get in shape</strong> this summer.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я хочу привести себя в форму этим летом.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. sweat
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">потеть / пот</p>
                    <p className="text-sm italic">
                      I <strong>sweat</strong> a lot when I exercise.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я сильно потею, когда тренируюсь.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. burn calories
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сжигать калории
                    </p>
                    <p className="text-sm italic">
                      Running helps you <strong>burn calories</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Бег помогает сжигать калории.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. muscle / build muscle
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      мышца / наращивать мышцы
                    </p>
                    <p className="text-sm italic">
                      Weight training helps <strong>build muscle</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Силовые тренировки помогают наращивать мышцы.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. injury / get injured
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      травма / получить травму
                    </p>
                    <p className="text-sm italic">
                      I <strong>got injured</strong> during training.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я получил травму во время тренировки.
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
        <Section title="🤒 Health Problems & Symptoms — Проблемы со здоровьем">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Vocabulary про болезни и симптомы
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для описания **болезней**, **симптомов** и
              **плохого самочувствия**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-red-400">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. illness / disease
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">болезнь</p>
                    <p className="text-sm italic">
                      He's recovering from a serious <strong>illness</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он восстанавливается после серьёзной болезни.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. symptom
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">симптом</p>
                    <p className="text-sm italic">
                      What are your <strong>symptoms</strong>?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Какие у вас симптомы?
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. pain / ache
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">боль</p>
                    <p className="text-sm italic">
                      I have a <strong>headache</strong> /{" "}
                      <strong>backache</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня болит голова / спина.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      4. fever / temperature
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      жар / температура
                    </p>
                    <p className="text-sm italic">
                      I have a <strong>high fever</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня высокая температура.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      5. cough / sore throat
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      кашель / боль в горле
                    </p>
                    <p className="text-sm italic">
                      I have a bad <strong>cough</strong> and a{" "}
                      <strong>sore throat</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня сильный кашель и болит горло.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      6. cold / flu
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      простуда / грипп
                    </p>
                    <p className="text-sm italic">
                      I've caught a <strong>cold</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я подхватил простуду.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      7. infection
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">инфекция</p>
                    <p className="text-sm italic">
                      The wound has an <strong>infection</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Рана инфицирована.</p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      8. allergy / allergic reaction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      аллергия / аллергическая реакция
                    </p>
                    <p className="text-sm italic">
                      I'm <strong>allergic to</strong> nuts.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня аллергия на орехи.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. nausea / vomit / throw up
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тошнота / рвота
                    </p>
                    <p className="text-sm italic">
                      I feel <strong>nauseous</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Меня тошнит.</p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. dizzy / dizziness
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">головокружение</p>
                    <p className="text-sm italic">
                      I feel <strong>dizzy</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня кружится голова.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. chronic condition
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      хроническое заболевание
                    </p>
                    <p className="text-sm italic">
                      He has a <strong>chronic condition</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У него хроническое заболевание.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. come down with (illness)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      заболеть (чем-то)
                    </p>
                    <p className="text-sm italic">
                      I've <strong>come down with</strong> the flu.
                    </p>
                    <p className="text-xs text-zinc-600">Я заболел гриппом.</p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. get over (illness)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">выздороветь от</p>
                    <p className="text-sm italic">
                      It took me a week to <strong>get over</strong> the cold.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне понадобилась неделя, чтобы выздороветь от простуды.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. be under the weather
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      плохо себя чувствовать
                    </p>
                    <p className="text-sm italic">
                      I'm feeling <strong>under the weather</strong> today.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я плохо себя чувствую сегодня.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. contagious
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">заразный</p>
                    <p className="text-sm italic">
                      The flu is highly <strong>contagious</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Грипп очень заразен.
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
        <Section title="🧠 Mental Health & Stress — Ментальное здоровье">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Vocabulary про ментальное здоровье и стресс
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для разговоров о **психическом здоровье**,
              **стрессе** и **эмоциональном благополучии**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      1. mental health
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      психическое здоровье
                    </p>
                    <p className="text-sm italic">
                      It's important to take care of your{" "}
                      <strong>mental health</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Важно заботиться о своём психическом здоровье.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. stress / stressed (out)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      стресс / в стрессе
                    </p>
                    <p className="text-sm italic">
                      I've been feeling really <strong>stressed out</strong>{" "}
                      lately.
                    </p>
                    <p className="text-xs text-zinc-600">
                      В последнее время я очень в стрессе.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. anxiety / anxious
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тревога / тревожный
                    </p>
                    <p className="text-sm italic">
                      I suffer from <strong>anxiety</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я страдаю от тревоги.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. depression / depressed
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      депрессия / в депрессии
                    </p>
                    <p className="text-sm italic">
                      She's been <strong>depressed</strong> for months.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она в депрессии уже месяцы.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. burnout
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">выгорание</p>
                    <p className="text-sm italic">
                      I'm experiencing <strong>burnout</strong> from work.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я испытываю выгорание от работы.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. well-being / wellness
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      благополучие / хорошее самочувствие
                    </p>
                    <p className="text-sm italic">
                      Focus on your overall <strong>well-being</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Фокусируйтесь на вашем общем благополучии.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. cope with / deal with
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">справляться с</p>
                    <p className="text-sm italic">
                      I'm learning to <strong>cope with</strong> stress.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я учусь справляться со стрессом.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. overwhelmed
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      перегруженный, подавленный
                    </p>
                    <p className="text-sm italic">
                      I feel <strong>overwhelmed</strong> by everything.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я чувствую себя подавленным всем этим.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. meditation / mindfulness
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      медитация / осознанность
                    </p>
                    <p className="text-sm italic">
                      I practice <strong>meditation</strong> daily.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я практикую медитацию ежедневно.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. therapy / therapist
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      терапия / терапевт
                    </p>
                    <p className="text-sm italic">
                      I'm seeing a <strong>therapist</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Я хожу к терапевту.</p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. self-care
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">забота о себе</p>
                    <p className="text-sm italic">
                      <strong>Self-care</strong> is crucial for mental health.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Забота о себе критически важна для психического здоровья.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. panic attack
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      паническая атака
                    </p>
                    <p className="text-sm italic">
                      She had a <strong>panic attack</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У неё была паническая атака.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. insomnia / sleep disorder
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      бессонница / расстройство сна
                    </p>
                    <p className="text-sm italic">
                      I've been suffering from <strong>insomnia</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я страдаю от бессонницы.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. relax / relaxation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      расслабляться / расслабление
                    </p>
                    <p className="text-sm italic">
                      I need time to <strong>relax</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно время, чтобы расслабиться.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. resilience / resilient
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      устойчивость / устойчивый
                    </p>
                    <p className="text-sm italic">
                      Building <strong>resilience</strong> helps you overcome
                      challenges.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Развитие устойчивости помогает преодолевать трудности.
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
        <Section title="💊 Medical Care & Treatment — Медицинская помощь">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              Vocabulary про медицинскую помощь и лечение
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются в контексте **врачей**, **лечения** и
              **медицинских процедур**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-cyan-400">
                <div className="space-y-4">
                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      1. doctor / physician
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">врач</p>
                    <p className="text-sm italic">
                      I need to see a <strong>doctor</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">Мне нужно к врачу.</p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. specialist
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">специалист</p>
                    <p className="text-sm italic">
                      I was referred to a <strong>specialist</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Меня направили к специалисту.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. diagnosis / diagnose
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      диагноз / диагностировать
                    </p>
                    <p className="text-sm italic">
                      The doctor <strong>diagnosed</strong> me with the flu.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Врач диагностировал у меня грипп.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      4. treatment / treat
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      лечение / лечить
                    </p>
                    <p className="text-sm italic">
                      The <strong>treatment</strong> is working well.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Лечение работает хорошо.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      5. medication / medicine
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">лекарство</p>
                    <p className="text-sm italic">
                      The doctor prescribed <strong>medication</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Врач прописал лекарство.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      6. prescription
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">рецепт</p>
                    <p className="text-sm italic">
                      I need a <strong>prescription</strong> for antibiotics.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужен рецепт на антибиотики.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. surgery / operation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">операция</p>
                    <p className="text-sm italic">
                      He needs <strong>surgery</strong> on his knee.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Ему нужна операция на колене.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. recover / recovery
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выздоравливать / выздоровление
                    </p>
                    <p className="text-sm italic">
                      She's <strong>recovering</strong> from surgery.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она восстанавливается после операции.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. hospital / clinic
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      больница / клиника
                    </p>
                    <p className="text-sm italic">
                      He was admitted to <strong>hospital</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Его положили в больницу.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. appointment
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      запись на приём
                    </p>
                    <p className="text-sm italic">
                      I have an <strong>appointment</strong> with the doctor.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У меня запись к врачу.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. check-up / examination
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      осмотр / обследование
                    </p>
                    <p className="text-sm italic">
                      I went for a regular <strong>check-up</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пошёл на плановый осмотр.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. cure / heal
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вылечить / заживать
                    </p>
                    <p className="text-sm italic">
                      There's no <strong>cure</strong> for this disease.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Нет лекарства от этой болезни.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. side effects
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      побочные эффекты
                    </p>
                    <p className="text-sm italic">
                      This medication has <strong>side effects</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У этого лекарства есть побочные эффекты.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. vaccination / vaccine
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вакцинация / вакцина
                    </p>
                    <p className="text-sm italic">
                      I got a flu <strong>vaccine</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я сделал прививку от гриппа.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. emergency / first aid
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      скорая помощь / первая помощь
                    </p>
                    <p className="text-sm italic">
                      Call an <strong>ambulance</strong> — it's an{" "}
                      <strong>emergency</strong>!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Вызовите скорую — это срочно!
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

  if (step === 7) {
    return (
      <>
        <Section title="📖 Reading: A Journey to Health">
          <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-lg p-6 border-2 border-green-400 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
              Большой текст для чтения — Путь к здоровью
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <h4 className="text-xl font-bold text-green-900 mb-3">
                "From Unhealthy to Thriving: Sarah's Transformation"
              </h4>
              <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                <p>
                  Three years ago, Sarah was the definition of unhealthy. She
                  worked long hours at a high-stress job, ate primarily{" "}
                  <strong>junk food</strong>, and never found time to{" "}
                  <strong>work out</strong>. Her <strong>diet</strong> consisted
                  of <strong>processed food</strong>, and she consumed far too
                  much <strong>sugar</strong> and <strong>salt</strong>. She had{" "}
                  <strong>gained weight</strong> steadily over five years and
                  was now 30 kilograms overweight.
                </p>
                <p>
                  But it wasn't just her physical health that was suffering.
                  Sarah was experiencing severe <strong>stress</strong> and{" "}
                  <strong>anxiety</strong>. She was constantly feeling{" "}
                  <strong>overwhelmed</strong> by work and personal
                  responsibilities. She had frequent <strong>headaches</strong>,{" "}
                  <strong>insomnia</strong>, and digestive problems. Her{" "}
                  <strong>mental health</strong> was deteriorating, and she knew
                  something had to change.
                </p>
                <p>
                  The wake-up call came when Sarah{" "}
                  <strong>came down with</strong> a severe{" "}
                  <strong>illness</strong>. She developed a{" "}
                  <strong>chronic condition</strong> that required immediate{" "}
                  <strong>medical care</strong>. Her <strong>doctor</strong>{" "}
                  told her bluntly: if she didn't change her{" "}
                  <strong>lifestyle</strong>, she would face serious health
                  consequences. She was at risk of developing diabetes, heart
                  disease, and other life-threatening conditions.
                </p>
                <p>
                  That conversation changed everything. Sarah made an{" "}
                  <strong>appointment</strong> with a nutritionist and began
                  learning about <strong>nutrition</strong> and{" "}
                  <strong>balanced diets</strong>. She discovered that she had
                  been severely lacking in essential <strong>nutrients</strong>,{" "}
                  <strong>vitamins</strong>, and <strong>protein</strong>. The
                  nutritionist helped her create a meal plan that included{" "}
                  <strong>organic food</strong>, plenty of vegetables, and
                  proper <strong>portion sizes</strong>. Sarah learned to{" "}
                  <strong>cut down on calories</strong> without starving
                  herself.
                </p>
                <p>
                  Alongside improving her <strong>diet</strong>, Sarah joined a{" "}
                  <strong>gym</strong>. At first, even basic{" "}
                  <strong>exercise</strong> was difficult. She was out of breath
                  after just five minutes of <strong>cardio</strong>. But she
                  persisted. She hired a <strong>personal trainer</strong> who
                  designed a program combining <strong>cardio</strong>,{" "}
                  <strong>strength training</strong>, and{" "}
                  <strong>stretching</strong>. She learned the importance of{" "}
                  <strong>warming up</strong> and <strong>cooling down</strong>{" "}
                  to prevent <strong>injuries</strong>.
                </p>
                <p>
                  Sarah also set clear <strong>fitness goals</strong>. She
                  wanted to <strong>lose weight</strong>, build{" "}
                  <strong>muscle</strong>, improve her{" "}
                  <strong>endurance</strong>, and increase her{" "}
                  <strong>flexibility</strong>. Most importantly, she wanted to
                  feel healthier and more energetic. She started{" "}
                  <strong>working out</strong> five days a week, gradually
                  increasing the intensity as her <strong>stamina</strong>{" "}
                  improved.
                </p>
                <p>
                  The changes weren't just physical. Sarah realized that her{" "}
                  <strong>mental health</strong> needed attention too. She
                  started seeing a <strong>therapist</strong> to{" "}
                  <strong>cope with</strong> her <strong>stress</strong> and{" "}
                  <strong>anxiety</strong>. She learned{" "}
                  <strong>meditation</strong> and <strong>mindfulness</strong>{" "}
                  techniques to help her <strong>relax</strong>. She practiced{" "}
                  <strong>self-care</strong> by setting boundaries at work,
                  taking regular breaks, and ensuring she got enough sleep to
                  combat her <strong>insomnia</strong>.
                </p>
                <p>
                  It wasn't easy. There were days when Sarah felt like giving
                  up. She experienced <strong>muscle</strong> soreness, fatigue,
                  and moments of doubt. But her <strong>resilience</strong> kept
                  her going. She focused on her <strong>well-being</strong> and
                  reminded herself why she started this journey.
                </p>
                <p>
                  After six months, Sarah had <strong>lost weight</strong>{" "}
                  significantly — 15 kilograms. More importantly, she felt
                  transformed. Her <strong>chronic condition</strong> had
                  improved dramatically with proper <strong>treatment</strong>{" "}
                  and lifestyle changes. Her doctor reduced her{" "}
                  <strong>medication</strong> dosage because her{" "}
                  <strong>symptoms</strong> had lessened. She no longer
                  experienced constant <strong>pain</strong>,{" "}
                  <strong>headaches</strong>, or digestive issues.
                </p>
                <p>
                  Today, three years later, Sarah is unrecognizable from her
                  former self. She maintains a <strong>balanced diet</strong>,{" "}
                  <strong>works out</strong> regularly, and prioritizes her{" "}
                  <strong>mental health</strong>. She's{" "}
                  <strong>in shape</strong>, full of energy, and rarely gets
                  sick. She goes for regular <strong>check-ups</strong> and has
                  learned to listen to her body. She's even become{" "}
                  <strong>vegetarian</strong> and feels better than ever.
                </p>
                <p>
                  Sarah's advice to others? "Your health is your wealth. Don't
                  wait for a wake-up call to make changes. Start small — improve
                  your <strong>diet</strong>, start <strong>exercising</strong>,
                  and take care of your <strong>mental health</strong>. It's
                  never too late to transform your life.{" "}
                  <strong>Recovery</strong> and transformation are possible for
                  everyone."
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
                    left: "What was Sarah's main problem three years ago?",
                    answers: [
                      "unhealthy lifestyle",
                      "she was unhealthy",
                      "She had an unhealthy lifestyle",
                      "stress and unhealthy diet",
                    ],
                    right: "",
                    explanation:
                      "Sarah had an unhealthy lifestyle with poor diet, no exercise, and stress",
                    wide: true,
                  },
                  {
                    left: "What did the doctor tell Sarah?",
                    answers: [
                      "to change her lifestyle",
                      "change her lifestyle",
                      "she needed to change her lifestyle",
                      "She would face serious health consequences",
                    ],
                    right: "",
                    explanation:
                      "The doctor told her to change her lifestyle or face serious consequences",
                    wide: true,
                  },
                  {
                    left: "How much weight did Sarah lose in six months?",
                    answers: [
                      "15 kilograms",
                      "15 kg",
                      "She lost 15 kilograms",
                      "15 kilos",
                    ],
                    right: "",
                    explanation: "Sarah lost 15 kilograms in six months",
                    wide: true,
                  },
                  {
                    left: "What does Sarah do now to maintain her health?",
                    answers: [
                      "balanced diet and exercise",
                      "she maintains a balanced diet and works out",
                      "She maintains a balanced diet, works out, and prioritizes mental health",
                    ],
                    right: "",
                    explanation:
                      "Sarah maintains a balanced diet, works out regularly, and prioritizes mental health",
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

  if (step === 8) {
    return (
      <>
        <Section title="🚬 Addiction & Bad Habits — Зависимости">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Vocabulary про зависимости и вредные привычки
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для разговоров о **зависимостях**,
              **вредных привычках** и **выздоровлении**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-orange-400">
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      1. addiction / addicted
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      зависимость / зависимый
                    </p>
                    <p className="text-sm italic">
                      He's struggling with <strong>addiction</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он борется с зависимостью.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      2. smoking / smoke
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      курение / курить
                    </p>
                    <p className="text-sm italic">
                      <strong>Smoking</strong> is harmful to your health.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Курение вредит вашему здоровью.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. alcohol / alcoholic
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      алкоголь / алкоголик
                    </p>
                    <p className="text-sm italic">
                      He's recovering from <strong>alcoholism</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он восстанавливается от алкоголизма.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. drugs / drug abuse
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      наркотики / злоупотребление наркотиками
                    </p>
                    <p className="text-sm italic">
                      <strong>Drug abuse</strong> is a serious problem.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Злоупотребление наркотиками — серьёзная проблема.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. quit / give up
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      бросить (привычку)
                    </p>
                    <p className="text-sm italic">
                      I'm trying to <strong>quit smoking</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я пытаюсь бросить курить.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      6. recover / recovery
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выздороветь / выздоровление (от зависимости)
                    </p>
                    <p className="text-sm italic">
                      She's in <strong>recovery</strong> from addiction.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Она восстанавливается от зависимости.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      7. rehab / rehabilitation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">реабилитация</p>
                    <p className="text-sm italic">
                      He went to <strong>rehab</strong> for three months.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он прошёл реабилитацию в течение трёх месяцев.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      8. withdrawal symptoms
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      симптомы отмены
                    </p>
                    <p className="text-sm italic">
                      He experienced severe <strong>withdrawal symptoms</strong>
                      .
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он испытывал сильные симптомы отмены.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. relapse
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">рецидив</p>
                    <p className="text-sm italic">
                      He had a <strong>relapse</strong> after six months sober.
                    </p>
                    <p className="text-xs text-zinc-600">
                      У него был рецидив после шести месяцев трезвости.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. sober
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">трезвый</p>
                    <p className="text-sm italic">
                      I've been <strong>sober</strong> for two years.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я трезв уже два года.
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

  if (step === 9) {
    return (
      <>
        <Section title="✏️ Practice Exercises">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400 mb-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              Упражнения на закрепление
            </h3>
          </div>

          <CheckableExercise
            title="Complete the sentences with the correct word"
            instruction="Вставь правильное слово."
            items={[
              {
                left: "I'm trying to maintain a",
                answers: ["balanced diet"],
                right: ".",
                explanation: "balanced diet = сбалансированная диета",
                wide: true,
              },
              {
                left: "I",
                answers: ["work out", "exercise"],
                right: "three times a week at the gym.",
                explanation: "work out / exercise = тренироваться",
                wide: true,
              },
              {
                left: "I've",
                answers: ["come down with"],
                right: "the flu and need to rest.",
                explanation: "come down with = заболеть (чем-то)",
                wide: true,
              },
              {
                left: "It took me a week to",
                answers: ["get over"],
                right: "the cold.",
                explanation: "get over = выздороветь от",
                wide: true,
              },
              {
                left: "I'm feeling very",
                answers: ["stressed out", "stressed"],
                right: "because of work.",
                explanation: "stressed out = в стрессе",
                wide: true,
              },
              {
                left: "The doctor",
                answers: ["prescribed"],
                right: "medication for my symptoms.",
                explanation: "prescribe = прописать",
              },
              {
                left: "I need to",
                answers: ["quit smoking", "quit"],
                right: "for my health.",
                explanation: "quit smoking = бросить курить",
                wide: true,
              },
              {
                left: "She's",
                answers: ["recovering"],
                right: "from surgery.",
                explanation: "recover = восстанавливаться",
              },
            ]}
          />
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="📚 Complete Vocabulary List — 150+ Words">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
              Полный список слов по теме Health & Lifestyle
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2 text-lg">
                  🥗 Diet & Nutrition (15 words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>1. balanced diet — сбалансированная диета</p>
                  <p>
                    2. nutrition / nutrients — питание / питательные вещества
                  </p>
                  <p>3. vitamins — витамины</p>
                  <p>
                    4. protein / carbohydrates / fats — белки / углеводы / жиры
                  </p>
                  <p>5. calories — калории</p>
                  <p>6. vegetarian / vegan — вегетарианец / веган</p>
                  <p>7. organic food — органическая еда</p>
                  <p>
                    8. processed food / junk food — обработанная / вредная еда
                  </p>
                  <p>9. sugar / salt — сахар / соль</p>
                  <p>10. lose weight / gain weight — худеть / набирать вес</p>
                  <p>11. be on a diet — быть на диете</p>
                  <p>12. portion size — размер порции</p>
                  <p>13. hydration / stay hydrated — гидратация</p>
                  <p>14. metabolism — метаболизм</p>
                  <p>15. fiber — клетчатка</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2 text-lg">
                  💪 Fitness & Exercise (15 words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>16. work out / exercise — тренироваться</p>
                  <p>17. gym / fitness center — зал</p>
                  <p>18. cardio — кардио</p>
                  <p>
                    19. strength training / weightlifting — силовая тренировка
                  </p>
                  <p>20. endurance / stamina — выносливость</p>
                  <p>21. flexibility — гибкость</p>
                  <p>22. warm up / cool down — разминка / заминка</p>
                  <p>23. stretch / stretching — растягиваться</p>
                  <p>24. personal trainer — персональный тренер</p>
                  <p>25. fitness goals — фитнес-цели</p>
                  <p>
                    26. get in shape / stay in shape — привести себя в форму
                  </p>
                  <p>27. sweat — потеть</p>
                  <p>28. burn calories — сжигать калории</p>
                  <p>29. muscle / build muscle — мышца / наращивать мышцы</p>
                  <p>30. injury / get injured — травма / получить травму</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2 text-lg">
                  🤒 Health Problems & Symptoms (15 words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>31. illness / disease — болезнь</p>
                  <p>32. symptom — симптом</p>
                  <p>33. pain / ache — боль</p>
                  <p>34. fever / temperature — жар / температура</p>
                  <p>35. cough / sore throat — кашель / боль в горле</p>
                  <p>36. cold / flu — простуда / грипп</p>
                  <p>37. infection — инфекция</p>
                  <p>38. allergy / allergic reaction — аллергия</p>
                  <p>39. nausea / vomit / throw up — тошнота / рвота</p>
                  <p>40. dizzy / dizziness — головокружение</p>
                  <p>41. chronic condition — хроническое заболевание</p>
                  <p>42. come down with (illness) — заболеть</p>
                  <p>43. get over (illness) — выздороветь от</p>
                  <p>44. be under the weather — плохо себя чувствовать</p>
                  <p>45. contagious — заразный</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2 text-lg">
                  🧠 Mental Health & Stress (15 words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>46. mental health — психическое здоровье</p>
                  <p>47. stress / stressed (out) — стресс / в стрессе</p>
                  <p>48. anxiety / anxious — тревога / тревожный</p>
                  <p>49. depression / depressed — депрессия</p>
                  <p>50. burnout — выгорание</p>
                  <p>51. well-being / wellness — благополучие</p>
                  <p>52. cope with / deal with — справляться с</p>
                  <p>53. overwhelmed — перегруженный</p>
                  <p>54. meditation / mindfulness — медитация / осознанность</p>
                  <p>55. therapy / therapist — терапия / терапевт</p>
                  <p>56. self-care — забота о себе</p>
                  <p>57. panic attack — паническая атака</p>
                  <p>58. insomnia / sleep disorder — бессонница</p>
                  <p>59. relax / relaxation — расслабляться</p>
                  <p>60. resilience / resilient — устойчивость</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-cyan-900 mb-2 text-lg">
                  💊 Medical Care & Treatment (15 words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>61. doctor / physician — врач</p>
                  <p>62. specialist — специалист</p>
                  <p>63. diagnosis / diagnose — диагноз / диагностировать</p>
                  <p>64. treatment / treat — лечение / лечить</p>
                  <p>65. medication / medicine — лекарство</p>
                  <p>66. prescription — рецепт</p>
                  <p>67. surgery / operation — операция</p>
                  <p>68. recover / recovery — выздоравливать</p>
                  <p>69. hospital / clinic — больница / клиника</p>
                  <p>70. appointment — запись на приём</p>
                  <p>71. check-up / examination — осмотр</p>
                  <p>72. cure / heal — вылечить / заживать</p>
                  <p>73. side effects — побочные эффекты</p>
                  <p>74. vaccination / vaccine — вакцинация / вакцина</p>
                  <p>75. emergency / first aid — скорая помощь</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2 text-lg">
                  🚬 Addiction & Bad Habits (10 words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>76. addiction / addicted — зависимость / зависимый</p>
                  <p>77. smoking / smoke — курение / курить</p>
                  <p>78. alcohol / alcoholic — алкоголь / алкоголик</p>
                  <p>79. drugs / drug abuse — наркотики / злоупотребление</p>
                  <p>80. quit / give up — бросить</p>
                  <p>81. recover / recovery — выздороветь от зависимости</p>
                  <p>82. rehab / rehabilitation — реабилитация</p>
                  <p>83. withdrawal symptoms — симптомы отмены</p>
                  <p>84. relapse — рецидив</p>
                  <p>85. sober — трезвый</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-indigo-900 mb-2 text-lg">
                  ➕ Additional Health Terms (15+ words)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>86. immune system — иммунная система</p>
                  <p>87. blood pressure — кровяное давление</p>
                  <p>88. heart rate — пульс</p>
                  <p>89. BMI (Body Mass Index) — индекс массы тела</p>
                  <p>90. obese / obesity — страдающий ожирением / ожирение</p>
                  <p>91. anemia — анемия</p>
                  <p>92. diabetes — диабет</p>
                  <p>93. asthma — астма</p>
                  <p>94. arthritis — артрит</p>
                  <p>95. cancer — рак</p>
                  <p>96. stroke — инсульт</p>
                  <p>97. heart attack — сердечный приступ</p>
                  <p>98. dehydration — обезвоживание</p>
                  <p>99. exhaustion / fatigue — истощение / усталость</p>
                  <p>100. life expectancy — продолжительность жизни</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-5 border-2 border-amber-400 mt-6">
              <h4 className="font-bold text-amber-900 mb-3 text-center text-lg">
                💡 Useful Collocations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-700">
                <p>
                  ✓ <strong>maintain a balanced diet</strong> — поддерживать
                  сбалансированную диету
                </p>
                <p>
                  ✓ <strong>work out regularly</strong> — тренироваться
                  регулярно
                </p>
                <p>
                  ✓ <strong>take medication</strong> — принимать лекарства
                </p>
                <p>
                  ✓ <strong>see a doctor</strong> — посетить врача
                </p>
                <p>
                  ✓ <strong>make an appointment</strong> — записаться на приём
                </p>
                <p>
                  ✓ <strong>cope with stress</strong> — справляться со стрессом
                </p>
                <p>
                  ✓ <strong>get in shape</strong> — привести себя в форму
                </p>
                <p>
                  ✓ <strong>quit smoking</strong> — бросить курить
                </p>
              </div>
            </div>

            <div className="bg-green-100 rounded-lg p-5 border-2 border-green-500 mt-4">
              <p className="text-center text-green-900 font-bold text-lg">
                🎉 Поздравляю! Вы изучили 100+ слов про здоровье и образ жизни!
              </p>
              <p className="text-center text-sm text-zinc-700 mt-2">
                Эта лексика поможет вам говорить о питании, фитнесе, здоровье,
                стрессе и медицинских вопросах!
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Step {step} not found</div>;
}
