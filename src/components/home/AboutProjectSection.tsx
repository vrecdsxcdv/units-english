"use client";

import { motion } from "framer-motion";

interface AboutProjectConfig {
  quote: {
    text: string;
    author: string;
  };
  magazine: {
    headline: string;
    coverLines: string[];
    authorPhoto: string;
    authorPhotoAlt: string;
  };
}

const config: AboutProjectConfig = {
  quote: {
    text: "О проекте\n\nОбразовательная платформа для изучения английского языка с акцентом на преодоление языковых барьеров в программировании и цифровых технологиях.\n\nАвтор: Рагулин Матвей, ученик 9 класса Д\nМАОУ СОШ №2, МО Динской район\nНаучный руководитель: Супрунова Валентина Александровна\n\n© 2025 Units English",
    author: "",
  },
  magazine: {
    headline: "TO BE OR NOT TO BE",
    coverLines: [
      "Автор: Рагулин Матвей, ученик 9 класса Д",
      "МАОУ СОШ №2, МО Динской район",
      "Науч. рук.: Супрунова Валентина Александровна",
    ],
    authorPhoto: "/author-photo.jpg",
    authorPhotoAlt: "Рагулин Матвей, автор проекта Units English",
  },
};

export default function AboutProjectSection() {
  return (
    <section
      id="about-project"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl w-full"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)", letterSpacing: "-0.02em" }}
          >
            О проекте
          </h2>
          <p
            className="text-lg text-white font-black"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)", letterSpacing: "-0.01em" }}
          >
            История создания и философия Units English
          </p>
        </div>

        {/* Two-column layout: Quote + Magazine Cover */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Vertical Quote (mobile: horizontal on small screens) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center order-2 md:order-1"
          >
            <div
              className="relative p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              {/* Quote mark decoration */}
              <div
                className="absolute top-6 left-6 text-6xl font-serif text-white/20"
                aria-hidden="true"
              >
                "
              </div>

              {/* Quote text with proper formatting */}
              <blockquote className="relative z-10">
                <p
                  className="text-base md:text-lg font-black text-white leading-relaxed whitespace-pre-line"
                  style={{
                    textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {config.quote.text}
                </p>
                {config.quote.author && (
                  <footer className="text-white/70 text-sm font-medium mt-4">
                    {config.quote.author}
                  </footer>
                )}
              </blockquote>

              {/* Decorative line */}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-t from-white/30 to-transparent md:hidden"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Right Column: Forbes-style Magazine Cover */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div
              className="relative p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                border: "2px solid rgba(255,255,255,0.3)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                minHeight: "500px",
              }}
            >
              {/* Magazine-style header */}
              <div className="mb-6">
                <div className="text-xs font-bold text-white/60 tracking-widest mb-2">
                  UNITS ENGLISH MAGAZINE
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/40 via-white/20 to-transparent mb-6" />
              </div>

              {/* Main Headline */}
              <div className="flex-1 flex flex-col justify-center mb-8">
                <h3
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-8"
                  style={{
                    textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {config.magazine.headline}
                </h3>

                {/* Cover Lines */}
                <div className="space-y-3">
                  {config.magazine.coverLines.map((line, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                      style={{
                        animation: `fadeIn 0.6s ease-out ${0.6 + i * 0.1}s both`,
                      }}
                    >
                      <div className="w-8 h-px bg-white/40" />
                      <p className="text-sm md:text-base text-white/85 font-medium">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Photo Circle - Bottom Right */}
              <div className="flex justify-end items-end">
                <div
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <img
                    src={config.magazine.authorPhoto}
                    alt={config.magazine.authorPhotoAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center text-5xl">👨‍💻</div>';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.3), transparent)",
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Inline keyframes for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
