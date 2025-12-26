"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function TechnologyScience({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🔬 Technology & Science — Introduction">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🚀 Введение в Technology & Science
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                <strong>Technology & Science</strong> (Технологии и наука) —
                одна из самых динамичных и захватывающих тем современности. От{" "}
                <strong>искусственного интеллекта</strong> до{" "}
                <strong>квантовых компьютеров</strong>, от{" "}
                <strong>генной инженерии</strong> до{" "}
                <strong>космических путешествий</strong> — наука и технологии
                меняют наш мир каждый день.
              </p>

              <p className="text-base leading-relaxed">
                В этом уроке вы освоите более <strong>200 слов</strong>,
                связанных с технологиями, наукой, инновациями и прорывами. Эта
                лексика критически важна для понимания современных новостей,
                работы в IT и научных областях, и обсуждения будущего
                человечества.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                🎯 Что вы освоите:
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>200+ ключевых слов по технологиям и науке</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>AI, Machine Learning, Neural Networks, Robotics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Космос, астрономия, физика, химия, биология</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Gadgets, devices, computing, internet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Innovation, breakthrough, research, discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Renewable energy, biotechnology, nanotechnology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Познавательные тексты и упражнения</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              💻 General Technology Terms
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. technology / tech
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">технология</p>
                    <p className="text-sm italic">
                      <strong>Technology</strong> is advancing rapidly.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      2. science
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">наука</p>
                    <p className="text-sm italic">
                      <strong>Science</strong> helps us understand the world.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      3. innovation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">инновация</p>
                    <p className="text-sm italic">
                      Silicon Valley is a hub of <strong>innovation</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. breakthrough
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">прорыв</p>
                    <p className="text-sm italic">
                      Scientists made a major <strong>breakthrough</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      5. invention
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">изобретение</p>
                    <p className="text-sm italic">
                      The smartphone was a revolutionary{" "}
                      <strong>invention</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      6. discover / discovery
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      открыть / открытие
                    </p>
                    <p className="text-sm italic">
                      They <strong>discovered</strong> a new planet.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      7. research
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">исследование</p>
                    <p className="text-sm italic">
                      <strong>Research</strong> is crucial for progress.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. develop / development
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разрабатывать / разработка
                    </p>
                    <p className="text-sm italic">
                      They're <strong>developing</strong> new vaccines.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      9. experiment
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">эксперимент</p>
                    <p className="text-sm italic">
                      The <strong>experiment</strong> was successful.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      10. laboratory / lab
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">лаборатория</p>
                    <p className="text-sm italic">
                      Scientists work in a <strong>laboratory</strong>.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      11. gadget / device
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      гаджет / устройство
                    </p>
                    <p className="text-sm italic">
                      Smart <strong>gadgets</strong> are everywhere.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      12. cutting-edge / state-of-the-art
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      передовой / современнейший
                    </p>
                    <p className="text-sm italic">
                      <strong>Cutting-edge</strong> technology changes
                      everything.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. advanced / sophisticated
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      продвинутый / сложный
                    </p>
                    <p className="text-sm italic">
                      <strong>Advanced</strong> systems require expertise.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      14. obsolete / outdated
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      устаревший / устаревший
                    </p>
                    <p className="text-sm italic">
                      Old technology becomes <strong>obsolete</strong> quickly.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. upgrade
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      обновить / модернизировать
                    </p>
                    <p className="text-sm italic">
                      I need to <strong>upgrade</strong> my computer.
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded p-4">
                    <h4 className="font-bold text-emerald-900 text-lg mb-2">
                      16. prototype
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">прототип</p>
                    <p className="text-sm italic">
                      They built a <strong>prototype</strong> of the robot.
                    </p>
                  </div>

                  <div className="bg-fuchsia-50 rounded p-4">
                    <h4 className="font-bold text-fuchsia-900 text-lg mb-2">
                      17. patent
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">патент</p>
                    <p className="text-sm italic">
                      The company filed a <strong>patent</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded p-4">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">
                      18. revolutionize
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      революционизировать
                    </p>
                    <p className="text-sm italic">
                      AI will <strong>revolutionize</strong> healthcare.
                    </p>
                  </div>

                  <div className="bg-zinc-50 rounded p-4">
                    <h4 className="font-bold text-zinc-900 text-lg mb-2">
                      19. disruptive technology
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      подрывная технология
                    </p>
                    <p className="text-sm italic">
                      Blockchain is a <strong>disruptive technology</strong>.
                    </p>
                  </div>

                  <div className="bg-stone-50 rounded p-4">
                    <h4 className="font-bold text-stone-900 text-lg mb-2">
                      20. automation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">автоматизация</p>
                    <p className="text-sm italic">
                      <strong>Automation</strong> increases efficiency.
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
        <Section title="💻 Computing & Internet">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🌐 Компьютеры и интернет
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      1. computer / PC
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">компьютер</p>
                    <p className="text-sm italic">
                      I work on a powerful <strong>computer</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      2. laptop / notebook
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">ноутбук</p>
                    <p className="text-sm italic">
                      My <strong>laptop</strong> is very portable.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      3. smartphone
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">смартфон</p>
                    <p className="text-sm italic">
                      <strong>Smartphones</strong> have replaced cameras.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      4. tablet
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">планшет</p>
                    <p className="text-sm italic">
                      I read on my <strong>tablet</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      5. software / application / app
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      программное обеспечение / приложение
                    </p>
                    <p className="text-sm italic">
                      Download the <strong>app</strong> from the store.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      6. hardware
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      аппаратное обеспечение
                    </p>
                    <p className="text-sm italic">
                      The <strong>hardware</strong> needs upgrading.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      7. processor / CPU
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">процессор</p>
                    <p className="text-sm italic">
                      A fast <strong>processor</strong> improves performance.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      8. memory / RAM
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">память / ОЗУ</p>
                    <p className="text-sm italic">
                      16GB of <strong>RAM</strong> is standard now.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      9. storage / hard drive
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      хранилище / жёсткий диск
                    </p>
                    <p className="text-sm italic">
                      I need more <strong>storage</strong> space.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      10. cloud computing / cloud storage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      облачные вычисления / облачное хранилище
                    </p>
                    <p className="text-sm italic">
                      <strong>Cloud storage</strong> is convenient and secure.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      11. internet / web
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">интернет</p>
                    <p className="text-sm italic">
                      The <strong>internet</strong> connects the world.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      12. website / webpage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      веб-сайт / веб-страница
                    </p>
                    <p className="text-sm italic">
                      I designed a new <strong>website</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      13. browser
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">браузер</p>
                    <p className="text-sm italic">
                      Chrome is a popular <strong>browser</strong>.
                    </p>
                  </div>

                  <div className="bg-fuchsia-50 rounded p-4">
                    <h4 className="font-bold text-fuchsia-900 text-lg mb-2">
                      14. search engine
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      поисковая система
                    </p>
                    <p className="text-sm italic">
                      Google is the dominant <strong>search engine</strong>.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      15. download / upload
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      скачать / загрузить
                    </p>
                    <p className="text-sm italic">
                      <strong>Download</strong> the file to your computer.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      16. cybersecurity
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      кибербезопасность
                    </p>
                    <p className="text-sm italic">
                      <strong>Cybersecurity</strong> is crucial today.
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded p-4">
                    <h4 className="font-bold text-emerald-900 text-lg mb-2">
                      17. encryption
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">шифрование</p>
                    <p className="text-sm italic">
                      <strong>Encryption</strong> protects your data.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded p-4">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">
                      18. hacker / cyberattack
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      хакер / кибератака
                    </p>
                    <p className="text-sm italic">
                      <strong>Hackers</strong> target vulnerable systems.
                    </p>
                  </div>

                  <div className="bg-stone-50 rounded p-4">
                    <h4 className="font-bold text-stone-900 text-lg mb-2">
                      19. bandwidth
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пропускная способность
                    </p>
                    <p className="text-sm italic">
                      High <strong>bandwidth</strong> enables fast streaming.
                    </p>
                  </div>

                  <div className="bg-zinc-50 rounded p-4">
                    <h4 className="font-bold text-zinc-900 text-lg mb-2">
                      20. virtual reality / VR
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      виртуальная реальность
                    </p>
                    <p className="text-sm italic">
                      <strong>VR</strong> creates immersive experiences.
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
        <Section title="🤖 AI & Machine Learning">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🧠 Искусственный интеллект и машинное обучение
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-purple-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                <strong>Artificial Intelligence (AI)</strong> — одна из самых
                революционных технологий XXI века. От голосовых ассистентов до
                автономных автомобилей, AI меняет каждую индустрию.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-purple-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      1. artificial intelligence / AI
                    </h4>
                    <p className="text-xs mb-1">искусственный интеллект</p>
                    <p className="text-xs italic">
                      <strong>AI</strong> can recognize faces.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      2. machine learning / ML
                    </h4>
                    <p className="text-xs mb-1">машинное обучение</p>
                    <p className="text-xs italic">
                      <strong>Machine learning</strong> improves with data.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">3. deep learning</h4>
                    <p className="text-xs mb-1">глубокое обучение</p>
                    <p className="text-xs italic">
                      <strong>Deep learning</strong> uses neural networks.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      4. neural network
                    </h4>
                    <p className="text-xs mb-1">нейронная сеть</p>
                    <p className="text-xs italic">
                      <strong>Neural networks</strong> mimic the brain.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">5. algorithm</h4>
                    <p className="text-xs mb-1">алгоритм</p>
                    <p className="text-xs italic">
                      The <strong>algorithm</strong> predicts outcomes.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">6. big data</h4>
                    <p className="text-xs mb-1">большие данные</p>
                    <p className="text-xs italic">
                      <strong>Big data</strong> drives AI development.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">7. data science</h4>
                    <p className="text-xs mb-1">наука о данных</p>
                    <p className="text-xs italic">
                      <strong>Data science</strong> extracts insights.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      8. natural language processing / NLP
                    </h4>
                    <p className="text-xs mb-1">
                      обработка естественного языка
                    </p>
                    <p className="text-xs italic">
                      <strong>NLP</strong> powers chatbots.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      9. computer vision
                    </h4>
                    <p className="text-xs mb-1">компьютерное зрение</p>
                    <p className="text-xs italic">
                      <strong>Computer vision</strong> recognizes objects.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      10. robotics / robot
                    </h4>
                    <p className="text-xs mb-1">робототехника / робот</p>
                    <p className="text-xs italic">
                      <strong>Robots</strong> work in factories.
                    </p>
                  </div>

                  <div className="bg-fuchsia-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">11. automation</h4>
                    <p className="text-xs mb-1">автоматизация</p>
                    <p className="text-xs italic">
                      <strong>Automation</strong> replaces manual tasks.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      12. autonomous vehicle
                    </h4>
                    <p className="text-xs mb-1">
                      автономное транспортное средство
                    </p>
                    <p className="text-xs italic">
                      <strong>Autonomous vehicles</strong> drive themselves.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">13. drone</h4>
                    <p className="text-xs mb-1">дрон / беспилотник</p>
                    <p className="text-xs italic">
                      <strong>Drones</strong> deliver packages.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      14. facial recognition
                    </h4>
                    <p className="text-xs mb-1">распознавание лиц</p>
                    <p className="text-xs italic">
                      <strong>Facial recognition</strong> unlocks phones.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      15. voice assistant
                    </h4>
                    <p className="text-xs mb-1">голосовой ассистент</p>
                    <p className="text-xs italic">
                      Siri is a <strong>voice assistant</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">16. chatbot</h4>
                    <p className="text-xs mb-1">чат-бот</p>
                    <p className="text-xs italic">
                      <strong>Chatbots</strong> answer customer questions.
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      17. generative AI
                    </h4>
                    <p className="text-xs mb-1">генеративный ИИ</p>
                    <p className="text-xs italic">
                      <strong>Generative AI</strong> creates images.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      18. large language model / LLM
                    </h4>
                    <p className="text-xs mb-1">большая языковая модель</p>
                    <p className="text-xs italic">
                      ChatGPT is an <strong>LLM</strong>.
                    </p>
                  </div>

                  <div className="bg-stone-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">
                      19. training data
                    </h4>
                    <p className="text-xs mb-1">обучающие данные</p>
                    <p className="text-xs italic">
                      AI needs <strong>training data</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-50 rounded p-3">
                    <h4 className="font-bold text-sm mb-1">20. ethical AI</h4>
                    <p className="text-xs mb-1">этичный ИИ</p>
                    <p className="text-xs italic">
                      <strong>Ethical AI</strong> prevents bias.
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
        <Section title="🌌 Space & Astronomy">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🚀 Космос и астрономия
            </h3>

            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. space / outer space",
                    "космос",
                    "<strong>Space</strong> exploration is advancing rapidly.",
                  ],
                  [
                    "2. astronomy",
                    "астрономия",
                    "<strong>Astronomy</strong> studies celestial objects.",
                  ],
                  [
                    "3. planet",
                    "планета",
                    "Mars is the fourth <strong>planet</strong> from the Sun.",
                  ],
                  ["4. star", "звезда", "Our Sun is a <strong>star</strong>."],
                  [
                    "5. galaxy",
                    "галактика",
                    "The Milky Way is our <strong>galaxy</strong>.",
                  ],
                  [
                    "6. solar system",
                    "солнечная система",
                    "Earth is in the <strong>solar system</strong>.",
                  ],
                  [
                    "7. universe",
                    "вселенная",
                    "The <strong>universe</strong> is expanding.",
                  ],
                  [
                    "8. rocket / spacecraft",
                    "ракета / космический корабль",
                    "The <strong>rocket</strong> launched successfully.",
                  ],
                  [
                    "9. satellite",
                    "спутник",
                    "GPS uses <strong>satellites</strong>.",
                  ],
                  [
                    "10. telescope",
                    "телескоп",
                    "The Hubble <strong>telescope</strong> captures amazing images.",
                  ],
                  [
                    "11. astronaut / cosmonaut",
                    "астронавт / космонавт",
                    "<strong>Astronauts</strong> train for space missions.",
                  ],
                  [
                    "12. space station",
                    "космическая станция",
                    "The ISS is a <strong>space station</strong>.",
                  ],
                  [
                    "13. gravity",
                    "гравитация",
                    "<strong>Gravity</strong> keeps us on Earth.",
                  ],
                  [
                    "14. orbit",
                    "орбита",
                    "The Moon <strong>orbits</strong> Earth.",
                  ],
                  [
                    "15. black hole",
                    "чёрная дыра",
                    "<strong>Black holes</strong> have extreme gravity.",
                  ],
                  [
                    "16. constellation",
                    "созвездие",
                    "Orion is a famous <strong>constellation</strong>.",
                  ],
                  [
                    "17. asteroid / comet",
                    "астероид / комета",
                    "<strong>Asteroids</strong> orbit the Sun.",
                  ],
                  [
                    "18. lunar / solar eclipse",
                    "лунное / солнечное затмение",
                    "A <strong>solar eclipse</strong> is spectacular.",
                  ],
                  [
                    "19. Mars rover",
                    "марсоход",
                    "The <strong>Mars rover</strong> explores the red planet.",
                  ],
                  [
                    "20. exoplanet",
                    "экзопланета",
                    "Scientists discover new <strong>exoplanets</strong>.",
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

  if (step === 5) {
    return (
      <>
        <Section title="🔬 Scientific Fields">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🧪 Научные области
            </h3>
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. physics",
                    "физика",
                    "<strong>Physics</strong> studies matter and energy.",
                  ],
                  [
                    "2. chemistry",
                    "химия",
                    "<strong>Chemistry</strong> studies substances.",
                  ],
                  [
                    "3. biology",
                    "биология",
                    "<strong>Biology</strong> is the study of life.",
                  ],
                  [
                    "4. mathematics",
                    "математика",
                    "<strong>Mathematics</strong> is the science of numbers.",
                  ],
                  [
                    "5. genetics",
                    "генетика",
                    "<strong>Genetics</strong> studies genes and heredity.",
                  ],
                  [
                    "6. ecology",
                    "экология",
                    "<strong>Ecology</strong> studies ecosystems.",
                  ],
                  [
                    "7. geology",
                    "геология",
                    "<strong>Geology</strong> studies the Earth.",
                  ],
                  [
                    "8. meteorology",
                    "метеорология",
                    "<strong>Meteorology</strong> predicts weather.",
                  ],
                  [
                    "9. neuroscience",
                    "нейронаука",
                    "<strong>Neuroscience</strong> studies the brain.",
                  ],
                  [
                    "10. quantum physics",
                    "квантовая физика",
                    "<strong>Quantum physics</strong> is complex.",
                  ],
                  [
                    "11. particle",
                    "частица",
                    "Atoms are made of <strong>particles</strong>.",
                  ],
                  [
                    "12. molecule",
                    "молекула",
                    "Water is a <strong>molecule</strong>.",
                  ],
                  [
                    "13. atom",
                    "атом",
                    "An <strong>atom</strong> is the smallest unit.",
                  ],
                  [
                    "14. electron / proton / neutron",
                    "электрон / протон / нейтрон",
                    "<strong>Electrons</strong> orbit the nucleus.",
                  ],
                  [
                    "15. element",
                    "элемент",
                    "Oxygen is a chemical <strong>element</strong>.",
                  ],
                  [
                    "16. compound",
                    "соединение",
                    "Salt is a <strong>compound</strong>.",
                  ],
                  [
                    "17. periodic table",
                    "периодическая таблица",
                    "The <strong>periodic table</strong> organizes elements.",
                  ],
                  [
                    "18. theory",
                    "теория",
                    "Einstein's <strong>theory</strong> of relativity.",
                  ],
                  [
                    "19. hypothesis",
                    "гипотеза",
                    "Scientists test the <strong>hypothesis</strong>.",
                  ],
                  [
                    "20. scientific method",
                    "научный метод",
                    "The <strong>scientific method</strong> guides research.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-green-50 to-teal-50 rounded p-3"
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
        <Section title="🧬 Biology & Medicine">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              💊 Биология и медицина
            </h3>
            <div className="bg-white rounded-lg p-4 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. DNA",
                    "ДНК",
                    "<strong>DNA</strong> contains genetic information.",
                  ],
                  [
                    "2. gene / genome",
                    "ген / геном",
                    "<strong>Genes</strong> determine traits.",
                  ],
                  [
                    "3. cell",
                    "клетка",
                    "The <strong>cell</strong> is the basic unit of life.",
                  ],
                  [
                    "4. organism",
                    "организм",
                    "Humans are complex <strong>organisms</strong>.",
                  ],
                  [
                    "5. evolution",
                    "эволюция",
                    "<strong>Evolution</strong> explains life's diversity.",
                  ],
                  [
                    "6. vaccine",
                    "вакцина",
                    "<strong>Vaccines</strong> prevent diseases.",
                  ],
                  [
                    "7. virus / bacteria",
                    "вирус / бактерия",
                    "<strong>Viruses</strong> cause infections.",
                  ],
                  [
                    "8. antibiotic",
                    "антибиотик",
                    "<strong>Antibiotics</strong> fight bacteria.",
                  ],
                  [
                    "9. immune system",
                    "иммунная система",
                    "The <strong>immune system</strong> protects us.",
                  ],
                  [
                    "10. stem cell",
                    "стволовая клетка",
                    "<strong>Stem cells</strong> can become any cell type.",
                  ],
                  [
                    "11. genetic engineering",
                    "генная инженерия",
                    "<strong>Genetic engineering</strong> modifies DNA.",
                  ],
                  [
                    "12. CRISPR",
                    "CRISPR",
                    "<strong>CRISPR</strong> edits genes precisely.",
                  ],
                  [
                    "13. clone / cloning",
                    "клон / клонирование",
                    "<strong>Cloning</strong> creates identical copies.",
                  ],
                  [
                    "14. transplant",
                    "трансплантация",
                    "Heart <strong>transplants</strong> save lives.",
                  ],
                  [
                    "15. diagnosis",
                    "диагноз",
                    "Doctors make a <strong>diagnosis</strong>.",
                  ],
                  [
                    "16. treatment / cure",
                    "лечение / лекарство",
                    "There's no <strong>cure</strong> for some diseases.",
                  ],
                  [
                    "17. clinical trial",
                    "клиническое испытание",
                    "New drugs undergo <strong>clinical trials</strong>.",
                  ],
                  [
                    "18. surgery / operation",
                    "хирургия / операция",
                    "Robotic <strong>surgery</strong> is precise.",
                  ],
                  [
                    "19. telemedicine",
                    "телемедицина",
                    "<strong>Telemedicine</strong> provides remote care.",
                  ],
                  [
                    "20. personalized medicine",
                    "персонализированная медицина",
                    "<strong>Personalized medicine</strong> tailors treatment.",
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

  if (step === 7) {
    return (
      <>
        <Section title="🌱 Energy & Environment">
          <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-lg p-6 border-2 border-green-300 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              ⚡ Энергия и окружающая среда
            </h3>
            <div className="bg-white rounded-lg p-4 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. renewable energy",
                    "возобновляемая энергия",
                    "<strong>Renewable energy</strong> is sustainable.",
                  ],
                  [
                    "2. solar panel / solar power",
                    "солнечная панель / солнечная энергия",
                    "<strong>Solar panels</strong> generate electricity.",
                  ],
                  [
                    "3. wind turbine / wind power",
                    "ветряная турбина / энергия ветра",
                    "<strong>Wind turbines</strong> produce clean energy.",
                  ],
                  [
                    "4. hydroelectric power",
                    "гидроэлектроэнергия",
                    "<strong>Hydroelectric power</strong> uses water.",
                  ],
                  [
                    "5. nuclear energy",
                    "ядерная энергия",
                    "<strong>Nuclear energy</strong> is powerful.",
                  ],
                  [
                    "6. fossil fuel",
                    "ископаемое топливо",
                    "<strong>Fossil fuels</strong> pollute the environment.",
                  ],
                  [
                    "7. carbon footprint",
                    "углеродный след",
                    "Reduce your <strong>carbon footprint</strong>.",
                  ],
                  [
                    "8. greenhouse gas",
                    "парниковый газ",
                    "<strong>Greenhouse gases</strong> trap heat.",
                  ],
                  [
                    "9. climate change",
                    "изменение климата",
                    "<strong>Climate change</strong> is urgent.",
                  ],
                  [
                    "10. global warming",
                    "глобальное потепление",
                    "<strong>Global warming</strong> melts ice caps.",
                  ],
                  [
                    "11. sustainability",
                    "устойчивость",
                    "<strong>Sustainability</strong> protects our future.",
                  ],
                  [
                    "12. biodiversity",
                    "биоразнообразие",
                    "<strong>Biodiversity</strong> is declining.",
                  ],
                  [
                    "13. carbon neutral",
                    "углеродно-нейтральный",
                    "Companies aim to be <strong>carbon neutral</strong>.",
                  ],
                  [
                    "14. electric vehicle / EV",
                    "электромобиль",
                    "<strong>Electric vehicles</strong> reduce emissions.",
                  ],
                  [
                    "15. battery technology",
                    "аккумуляторная технология",
                    "<strong>Battery technology</strong> is improving.",
                  ],
                  [
                    "16. smart grid",
                    "умная сеть",
                    "A <strong>smart grid</strong> optimizes energy.",
                  ],
                  [
                    "17. energy efficiency",
                    "энергоэффективность",
                    "Improve <strong>energy efficiency</strong>.",
                  ],
                  [
                    "18. recycling",
                    "переработка",
                    "<strong>Recycling</strong> reduces waste.",
                  ],
                  [
                    "19. pollution",
                    "загрязнение",
                    "<strong>Pollution</strong> harms the planet.",
                  ],
                  [
                    "20. conservation",
                    "сохранение",
                    "<strong>Conservation</strong> protects nature.",
                  ],
                ].map(([term, translation, example], i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-green-50 to-lime-50 rounded p-3"
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
        <Section title="📱 Gadgets & Emerging Tech">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              💎 Гаджеты и новые технологии
            </h3>
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  [
                    "1. smartwatch",
                    "умные часы",
                    "My <strong>smartwatch</strong> tracks fitness.",
                  ],
                  [
                    "2. fitness tracker",
                    "фитнес-трекер",
                    "A <strong>fitness tracker</strong> counts steps.",
                  ],
                  [
                    "3. wireless earbuds",
                    "беспроводные наушники",
                    "<strong>Wireless earbuds</strong> are convenient.",
                  ],
                  [
                    "4. smart home",
                    "умный дом",
                    "A <strong>smart home</strong> automates everything.",
                  ],
                  [
                    "5. voice-activated",
                    "голосовое управление",
                    "<strong>Voice-activated</strong> devices respond to commands.",
                  ],
                  [
                    "6. Internet of Things / IoT",
                    "интернет вещей",
                    "<strong>IoT</strong> connects devices.",
                  ],
                  [
                    "7. 3D printing",
                    "3D-печать",
                    "<strong>3D printing</strong> creates objects layer by layer.",
                  ],
                  [
                    "8. blockchain",
                    "блокчейн",
                    "<strong>Blockchain</strong> powers cryptocurrencies.",
                  ],
                  [
                    "9. cryptocurrency / Bitcoin",
                    "криптовалюта / биткоин",
                    "<strong>Bitcoin</strong> is digital money.",
                  ],
                  [
                    "10. augmented reality / AR",
                    "дополненная реальность",
                    "<strong>AR</strong> overlays digital information.",
                  ],
                  [
                    "11. mixed reality",
                    "смешанная реальность",
                    "<strong>Mixed reality</strong> blends VR and AR.",
                  ],
                  [
                    "12. wearable technology",
                    "носимые технологии",
                    "<strong>Wearable technology</strong> monitors health.",
                  ],
                  [
                    "13. quantum computing",
                    "квантовые вычисления",
                    "<strong>Quantum computing</strong> is revolutionary.",
                  ],
                  [
                    "14. nanotechnology",
                    "нанотехнология",
                    "<strong>Nanotechnology</strong> works at atomic scale.",
                  ],
                  [
                    "15. biotechnology",
                    "биотехнология",
                    "<strong>Biotechnology</strong> combines biology and tech.",
                  ],
                  [
                    "16. 5G network",
                    "сеть 5G",
                    "<strong>5G networks</strong> are super fast.",
                  ],
                  [
                    "17. edge computing",
                    "периферийные вычисления",
                    "<strong>Edge computing</strong> processes data locally.",
                  ],
                  [
                    "18. digital twin",
                    "цифровой двойник",
                    "A <strong>digital twin</strong> simulates real systems.",
                  ],
                  [
                    "19. hologram",
                    "голограмма",
                    "<strong>Holograms</strong> create 3D images.",
                  ],
                  [
                    "20. neural interface",
                    "нейроинтерфейс",
                    "<strong>Neural interfaces</strong> connect brains to computers.",
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

  if (step === 9) {
    return (
      <>
        <Section title="📖 Reading: The Tech Revolution">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🚀 Текст: Технологическая революция
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 mb-4">
              <h4 className="text-xl font-bold text-indigo-800 mb-3">
                How AI and Technology Are Changing Our World
              </h4>

              <p className="text-base leading-relaxed mb-4">
                We live in an era of unprecedented technological{" "}
                <strong>innovation</strong>.{" "}
                <strong>Artificial intelligence</strong>, once confined to
                science fiction, is now part of our daily lives. Your{" "}
                <strong>smartphone</strong> uses{" "}
                <strong>machine learning algorithms</strong> to recognize your
                face, <strong>voice assistants</strong> like Siri and Alexa
                understand natural language, and{" "}
                <strong>autonomous vehicles</strong> navigate city streets. This
                is the reality of 2024, and it's only the beginning.
              </p>

              <p className="text-base leading-relaxed mb-4">
                The <strong>computing</strong> revolution has been remarkable.
                Modern <strong>laptops</strong> are more powerful than
                supercomputers from decades ago. <strong>Cloud storage</strong>{" "}
                lets us access our data anywhere, while{" "}
                <strong>5G networks</strong> provide lightning-fast{" "}
                <strong>internet</strong> speeds.{" "}
                <strong>Quantum computing</strong>, still in its infancy,
                promises to solve problems that current computers can't handle
                in millions of years.
              </p>

              <p className="text-base leading-relaxed mb-4">
                In <strong>space exploration</strong>, we're witnessing a new
                golden age. Private companies launch <strong>rockets</strong>{" "}
                regularly, <strong>Mars rovers</strong> search for signs of
                ancient life, and the James Webb <strong>telescope</strong>{" "}
                reveals the earliest moments of our <strong>universe</strong>.{" "}
                <strong>Astronauts</strong> live aboard the International{" "}
                <strong>Space Station</strong>, conducting{" "}
                <strong>experiments</strong> in zero <strong>gravity</strong>.
                We're seriously discussing <strong>colonizing Mars</strong>{" "}
                within our lifetime.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Medical science</strong> is experiencing its own
                revolution. <strong>CRISPR gene editing</strong> can potentially{" "}
                <strong>cure</strong> genetic diseases.{" "}
                <strong>Personalized medicine</strong> tailors{" "}
                <strong>treatments</strong> to individual <strong>DNA</strong>.{" "}
                <strong>Telemedicine</strong> brings healthcare to remote areas,
                while <strong>robotic surgery</strong> performs precise{" "}
                <strong>operations</strong>. <strong>AI</strong> can{" "}
                <strong>diagnose</strong> diseases faster than human doctors,
                analyzing medical images with superhuman accuracy.
              </p>

              <p className="text-base leading-relaxed mb-4">
                The <strong>renewable energy</strong> sector is transforming how
                we power civilization. <strong>Solar panels</strong> and{" "}
                <strong>wind turbines</strong> are now cheaper than{" "}
                <strong>fossil fuels</strong> in many regions.{" "}
                <strong>Electric vehicles</strong> are replacing gas-powered
                cars, with <strong>battery technology</strong> improving every
                year. <strong>Smart grids</strong> optimize{" "}
                <strong>energy efficiency</strong>, and we're working toward
                becoming <strong>carbon neutral</strong> to combat{" "}
                <strong>climate change</strong> and{" "}
                <strong>global warming</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Biotechnology</strong> and{" "}
                <strong>nanotechnology</strong> are opening new frontiers.{" "}
                <strong>3D printing</strong> creates everything from prosthetic
                limbs to houses. <strong>Blockchain</strong> technology
                underpins <strong>cryptocurrencies</strong> and promises to
                revolutionize how we handle data.{" "}
                <strong>Augmented reality</strong> overlays digital information
                on the real world, while <strong>virtual reality</strong>{" "}
                transports us to entirely new environments.
              </p>

              <p className="text-base leading-relaxed">
                But with great power comes great responsibility. We must address{" "}
                <strong>cybersecurity</strong> threats, ensure{" "}
                <strong>ethical AI</strong> that doesn't discriminate, and
                protect our <strong>privacy</strong> in an increasingly
                connected world. The <strong>automation</strong> revolution will
                eliminate many jobs while creating new ones. As we develop these
                powerful <strong>technologies</strong>, we must ensure they
                benefit all of humanity, not just the privileged few. The future
                is being written now, and we all have a role to play in shaping
                it. 🌟
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What are some examples of AI in our daily lives?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Face recognition, voice assistants (Siri/Alexa), and
                    autonomous vehicles.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What is CRISPR used for?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Gene editing to potentially cure genetic diseases.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. How is renewable energy changing?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Solar and wind are now cheaper than fossil fuels in many
                    regions.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What challenges must we address?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Cybersecurity, ethical AI, privacy, and job displacement
                    from automation.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What promise does quantum computing hold?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Solving problems current computers can't handle in
                    millions of years.
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
        <Section title="📝 Practice Exercise 1">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              ✍️ Упражнение 1: Fill in the Blanks
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Complete the sentences with technology vocabulary:
            </p>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <CheckableExercise
                items={[
                  {
                    left: "1. AI uses",
                    answers: ["machine learning", "algorithms"],
                    right: "to improve with data.",
                    wide: true,
                  },
                  {
                    left: "2. The",
                    answers: ["robot"],
                    right: "works in the factory.",
                    wide: true,
                  },
                  {
                    left: "3.",
                    answers: ["Solar panels", "Solar power"],
                    right: "generate clean energy.",
                    wide: true,
                  },
                  {
                    left: "4. We need to reduce our",
                    answers: ["carbon footprint"],
                    right: "to fight climate change.",
                    wide: true,
                  },
                  {
                    left: "5. The",
                    answers: ["spacecraft", "rocket"],
                    right: "launched to Mars.",
                    wide: true,
                  },
                  {
                    left: "6.",
                    answers: ["CRISPR"],
                    right: "can edit genes precisely.",
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

  if (step === 11) {
    return (
      <>
        <Section title="📝 Practice Exercise 2">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              ✍️ Упражнение 2: Match Terms
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">
                  1. Artificial Intelligence
                </p>
                <p className="text-sm text-gray-700 italic">
                  → Machines that can learn and make decisions
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">2. Virtual Reality</p>
                <p className="text-sm text-gray-700 italic">
                  → Immersive digital environment
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">3. Renewable Energy</p>
                <p className="text-sm text-gray-700 italic">
                  → Sustainable power from sun, wind, water
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">4. Quantum Computing</p>
                <p className="text-sm text-gray-700 italic">
                  → Revolutionary computing using quantum mechanics
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">5. Biotechnology</p>
                <p className="text-sm text-gray-700 italic">
                  → Combining biology and technology
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">6. Internet of Things</p>
                <p className="text-sm text-gray-700 italic">
                  → Connected devices communicating with each other
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 12) {
    return (
      <>
        <Section title="📚 Complete Vocabulary (200+ Words)">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🎓 Полный список: 200+ слов
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  💻 General Tech (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• technology / science</li>
                  <li>• innovation / breakthrough</li>
                  <li>• invention / discovery</li>
                  <li>• research / development</li>
                  <li>• experiment / laboratory</li>
                  <li>• gadget / device</li>
                  <li>• cutting-edge / advanced</li>
                  <li>• obsolete / upgrade</li>
                  <li>• prototype / patent</li>
                  <li>• revolutionize</li>
                  <li>• disruptive technology</li>
                  <li>• automation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  🌐 Computing (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• computer / laptop</li>
                  <li>• smartphone / tablet</li>
                  <li>• software / app</li>
                  <li>• hardware</li>
                  <li>• processor / RAM</li>
                  <li>• storage / hard drive</li>
                  <li>• cloud computing</li>
                  <li>• internet / web</li>
                  <li>• website / browser</li>
                  <li>• search engine</li>
                  <li>• download / upload</li>
                  <li>• cybersecurity</li>
                  <li>• encryption / hacker</li>
                  <li>• bandwidth</li>
                  <li>• virtual reality (VR)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  🤖 AI & ML (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• artificial intelligence</li>
                  <li>• machine learning</li>
                  <li>• deep learning</li>
                  <li>• neural network</li>
                  <li>• algorithm</li>
                  <li>• big data</li>
                  <li>• data science</li>
                  <li>• NLP</li>
                  <li>• computer vision</li>
                  <li>• robotics / robot</li>
                  <li>• automation</li>
                  <li>• autonomous vehicle</li>
                  <li>• drone</li>
                  <li>• facial recognition</li>
                  <li>• voice assistant</li>
                  <li>• chatbot</li>
                  <li>• generative AI</li>
                  <li>• LLM</li>
                  <li>• training data</li>
                  <li>• ethical AI</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  🌌 Space (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• space / outer space</li>
                  <li>• astronomy</li>
                  <li>• planet / star</li>
                  <li>• galaxy</li>
                  <li>• solar system</li>
                  <li>• universe</li>
                  <li>• rocket / spacecraft</li>
                  <li>• satellite</li>
                  <li>• telescope</li>
                  <li>• astronaut / cosmonaut</li>
                  <li>• space station</li>
                  <li>• gravity / orbit</li>
                  <li>• black hole</li>
                  <li>• constellation</li>
                  <li>• asteroid / comet</li>
                  <li>• lunar / solar eclipse</li>
                  <li>• Mars rover</li>
                  <li>• exoplanet</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🔬 Science (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• physics / chemistry</li>
                  <li>• biology / mathematics</li>
                  <li>• genetics / ecology</li>
                  <li>• geology / meteorology</li>
                  <li>• neuroscience</li>
                  <li>• quantum physics</li>
                  <li>• particle / molecule</li>
                  <li>• atom</li>
                  <li>• electron / proton</li>
                  <li>• element / compound</li>
                  <li>• periodic table</li>
                  <li>• theory / hypothesis</li>
                  <li>• scientific method</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  🧬 Bio & Medicine (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• DNA / gene / genome</li>
                  <li>• cell / organism</li>
                  <li>• evolution</li>
                  <li>• vaccine</li>
                  <li>• virus / bacteria</li>
                  <li>• antibiotic</li>
                  <li>• immune system</li>
                  <li>• stem cell</li>
                  <li>• genetic engineering</li>
                  <li>• CRISPR</li>
                  <li>• clone / cloning</li>
                  <li>• transplant</li>
                  <li>• diagnosis</li>
                  <li>• treatment / cure</li>
                  <li>• clinical trial</li>
                  <li>• surgery / operation</li>
                  <li>• telemedicine</li>
                  <li>• personalized medicine</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  🌱 Energy (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• renewable energy</li>
                  <li>• solar panel / solar power</li>
                  <li>• wind turbine / wind power</li>
                  <li>• hydroelectric power</li>
                  <li>• nuclear energy</li>
                  <li>• fossil fuel</li>
                  <li>• carbon footprint</li>
                  <li>• greenhouse gas</li>
                  <li>• climate change</li>
                  <li>• global warming</li>
                  <li>• sustainability</li>
                  <li>• biodiversity</li>
                  <li>• carbon neutral</li>
                  <li>• electric vehicle (EV)</li>
                  <li>• battery technology</li>
                  <li>• smart grid</li>
                  <li>• energy efficiency</li>
                  <li>• recycling</li>
                  <li>• pollution</li>
                  <li>• conservation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  📱 Gadgets (20)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• smartwatch</li>
                  <li>• fitness tracker</li>
                  <li>• wireless earbuds</li>
                  <li>• smart home</li>
                  <li>• voice-activated</li>
                  <li>• Internet of Things (IoT)</li>
                  <li>• 3D printing</li>
                  <li>• blockchain</li>
                  <li>• cryptocurrency / Bitcoin</li>
                  <li>• augmented reality (AR)</li>
                  <li>• mixed reality</li>
                  <li>• wearable technology</li>
                  <li>• quantum computing</li>
                  <li>• nanotechnology</li>
                  <li>• biotechnology</li>
                  <li>• 5G network</li>
                  <li>• edge computing</li>
                  <li>• digital twin</li>
                  <li>• hologram</li>
                  <li>• neural interface</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  ➕ Additional (40+)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• code / programming</li>
                  <li>• database / server</li>
                  <li>• network / wireless</li>
                  <li>• Wi-Fi / Bluetooth</li>
                  <li>• GPS / navigation</li>
                  <li>• touchscreen</li>
                  <li>• biometric / sensor</li>
                  <li>• microchip</li>
                  <li>• semiconductor</li>
                  <li>• transistor / circuit</li>
                  <li>• laser / scanner</li>
                  <li>• monitor / display</li>
                  <li>• keyboard / mouse</li>
                  <li>• interface</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mt-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">200+</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-purple-900">1</p>
                  <p className="text-sm text-gray-700">Reading Text</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">2</p>
                  <p className="text-sm text-gray-700">Exercises</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  🚀 <strong>Congratulations!</strong> You've mastered 200+
                  comprehensive Technology & Science vocabulary words! From AI
                  and space to biology and renewable energy — you're now
                  equipped to discuss the future of humanity! 🌟💻🔬
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
