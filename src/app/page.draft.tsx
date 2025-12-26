"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/wmremove-transformed-2.jpeg')" }}
    >
      {/* Hero - Full Height Centered */}
      <section className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20">
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

      {/* Minimal Footer */}
      <footer className="py-6 text-center">
        <p
          className="text-sm text-white/50 font-light"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.2)" }}
        >
          © 2025 Units English
        </p>
      </footer>
    </div>
  );
}
