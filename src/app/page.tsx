"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AboutProjectSection from "@/components/home/AboutProjectSection";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen scroll-smooth">
      {/* Fixed background for all devices */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/wmremove-transformed-2.jpeg')",
          minHeight: '100dvh',
        }}
      />
      {/* Hero - Full Height Centered */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-2xl"
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.3), 0 0 60px rgba(255,255,255,0.2)",
            }}
          >
            Units English
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide"
            style={{
              textShadow: "0 2px 20px rgba(0,0,0,0.2)",
            }}
          >
            Учите английский легко и эффективно
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-10 md:mt-14"
          >
            <button
              onClick={() => router.push("/learn")}
              className="relative group px-10 py-4 md:px-14 md:py-5 text-lg md:text-xl font-semibold text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              <span className="relative z-10">Начать обучение</span>
            </button>
          </motion.div>

          {/* Features Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-16 md:mt-20 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: "📚", text: "Структурированные курсы" },
              { icon: "⭐", text: "Эффективная методика" },
              { icon: "🌍", text: "Учитесь где угодно" },
            ].map((feature, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-full text-sm md:text-base font-medium text-white/90 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            >
              Почему Units English?
            </h2>
            <p className="text-lg text-white/80"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
            >
              Всё необходимое для эффективного изучения английского
            </p>
          </div>

          <div className="flex flex-row gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide">
            {[
              { icon: "🎯", title: "Целевое обучение", desc: "Материалы подобраны под ваш уровень и цели" },
              { icon: "📊", title: "Отслеживание прогресса", desc: "Видьте свои достижения и слабые места" },
              { icon: "🏆", title: "Система достижений", desc: "Мотивация через награды и челленджи" },
              { icon: "💬", title: "Практика общения", desc: "Реальные диалоги и ситуации" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl flex-shrink-0 w-64 snap-center"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/75 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Additional Features Section 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            >
              Для кого эта платформа?
            </h2>
            <p className="text-lg text-white/80"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
            >
              Подходит для всех, кто хочет улучшить свой английский
            </p>
          </div>

          <div className="flex flex-row gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide">
            {[
              { icon: "👨‍🎓", title: "Студенты", desc: "Подготовка к экзаменам и академическому английскому" },
              { icon: "💼", title: "Профессионалы", desc: "Деловой английский для карьерного роста" },
              { icon: "👨‍💻", title: "IT-специалисты", desc: "Технический английский для работы с кодом и документацией" },
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="p-8 rounded-2xl text-center flex-shrink-0 w-72 snap-center"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <div className="text-5xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{audience.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Project Section - Magazine Style */}
      <AboutProjectSection />

      {/* Call to Action Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl w-full text-center"
        >
          <div
            className="p-12 md:p-16 rounded-3xl"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            >
              Готовы начать?
            </h2>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}
            >
              Присоединяйтесь к тысячам студентов, которые уже улучшают свой английский с Units English
            </p>
            <button
              onClick={() => router.push("/learn")}
              className="px-12 py-5 text-xl font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "2px solid rgba(255,255,255,0.4)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              Начать бесплатно
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer with Author Info */}
      <footer className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Left side - Project info as quote */}
            <div className="text-left flex-1">
              <div
                className="border-l-4 pl-4 py-2"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <h3 className="text-white/95 text-base font-bold mb-2">О проекте</h3>
                <p className="text-white/85 text-sm mb-2 italic leading-relaxed">
                  Образовательная платформа для изучения английского языка с акцентом на преодоление языковых барьеров в программировании и цифровых технологиях.
                </p>
                <p className="text-white/75 text-xs mb-1">
                  <span className="font-medium">Автор:</span> Рагулин Матвей, ученик 9 класса
                </p>
                <p className="text-white/70 text-xs mb-1">
                  МАОУ СОШ №2, МО Динской район
                </p>
                <p className="text-white/65 text-xs">
                  <span className="font-medium">Научный руководитель:</span> Супрунова Валентина Александровна
                </p>
                <p className="text-white/50 text-xs mt-3">
                  © 2025 Units English
                </p>
              </div>
            </div>

            {/* Right side - Author Photo */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <img
                  src="/author-photo.jpg"
                  alt="Рагулин Матвей"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👨‍💻</div>';
                  }}
                />
              </div>
              <p className="text-white/80 text-sm font-medium">Рагулин Матвей</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
