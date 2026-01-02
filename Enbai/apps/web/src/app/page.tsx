'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authApi } from '@/lib/api/auth';
import { useAuthStore } from '@/stores/authStore';

export default function Home() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [isLoading, setIsLoading] = useState(false);

  const handleGuestLogin = async () => {
    setIsLoading(true);
    try {
      const { user, tokens } = await authApi.guestLogin();
      setAuth(tokens, user);
      router.push('/chat');
    } catch (error) {
      console.error('Guest login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const skills = [
    'ГРАММАТИКА',
    'СЛОВАРНЫЙ ЗАПАС',
    'ПРОИЗНОШЕНИЕ',
    'АУДИРОВАНИЕ',
    'РАЗГОВОРНЫЙ',
    'СЛЕНГ',
    'СЛОВООБРАЗОВАНИЕ',
    'БЕГЛОСТЬ',
    'ПИСЬМО',
    'ПОНИМАНИЕ',
  ];

  return (
    <main className="min-h-screen bg-background text-foreground noise">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[hsl(var(--primary))] flex items-center justify-center">
              <span className="text-black font-bold text-xl">E</span>
            </div>
            <span className="font-bold text-xl tracking-tight">ENBAI</span>
          </div>

          <nav className="flex items-center gap-4">
            <button
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="btn-brutal-primary text-sm py-2 px-4 disabled:opacity-50"
            >
              {isLoading ? 'ЗАГРУЗКА...' : 'НАЧАТЬ'}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-10 text-[20vw] font-bold text-foreground/5 select-none pointer-events-none leading-none">
          AI
        </div>
        <div className="absolute bottom-20 left-10 vertical-text text-muted-foreground text-sm tracking-widest">
          УЧИСЬ • ПРАКТИКУЙ • ВЛАДЕЙ
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[hsl(var(--primary))] uppercase tracking-[0.3em] text-sm font-medium">
                  Обучение на базе AI
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
                  УЧИСЬ
                  <br />
                  <span className="text-stroke">ENGLISH</span>
                  <br />
                  ПО-СВОЕМУ
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Персональный AI-репетитор, который адаптируется под твой уровень.
                Мгновенная обратная связь. 10 навыков под контролем.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGuestLogin}
                  disabled={isLoading}
                  className="btn-brutal-primary text-base disabled:opacity-50"
                >
                  {isLoading ? 'ЗАГРУЗКА...' : 'НАЧАТЬ БЕСПЛАТНО'}
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">10</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Навыков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--accent))]">AI</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Технология</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--secondary))]">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Доступно</div>
                </div>
              </div>
            </div>

            {/* Right column - Skills visualization */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="card-brutal p-4 group cursor-default"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold tracking-wider">{skill}</span>
                      <div
                        className="w-2 h-2"
                        style={{
                          backgroundColor: `hsl(${145 + index * 20}, 70%, 50%)`,
                        }}
                      />
                    </div>
                    <div className="mt-2 h-1 bg-muted overflow-hidden">
                      <div
                        className="h-full bg-foreground transition-all duration-500"
                        style={{ width: `${30 + Math.random() * 50}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee border-y-2 border-foreground py-4 bg-[hsl(var(--primary))] text-black">
        <div className="marquee-content">
          <span className="text-2xl font-bold tracking-wider mx-8">ГРАММАТИКА</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">СЛОВАРЬ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">ПРОИЗНОШЕНИЕ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">АУДИРОВАНИЕ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">РАЗГОВОРНЫЙ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">БЕГЛОСТЬ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">ГРАММАТИКА</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">СЛОВАРЬ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">ПРОИЗНОШЕНИЕ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">АУДИРОВАНИЕ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">РАЗГОВОРНЫЙ</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl font-bold tracking-wider mx-8">БЕГЛОСТЬ</span>
          <span className="text-2xl mx-4">•</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[hsl(var(--primary))] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                Возможности
              </p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
                ПОЧЕМУ<br />ENBAI?
              </h2>
            </div>
            <div className="text-right text-muted-foreground text-sm uppercase tracking-wider hidden md:block">
              Листай вниз
              <div className="mt-2 w-px h-12 bg-muted-foreground mx-auto animate-pulse" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              number="01"
              title="АДАПТИВНЫЙ AI"
              description="Наш AI анализирует твои навыки по 10 измерениям и создаёт персональный план обучения. Каждое упражнение нацелено на твои слабые места."
              color="primary"
            />
            <FeatureCard
              number="02"
              title="ЧАТ-РЕПЕТИТОР"
              description="Практикуй разговоры в любое время с AI-репетитором. Получай мгновенные исправления, объяснения и упражнения прямо в чате."
              color="secondary"
            />
            <FeatureCard
              number="03"
              title="ОТСЛЕЖИВАЙ ПРОГРЕСС"
              description="Смотри своё улучшение с детальной аналитикой. Ежедневные, еженедельные и ежемесячные срезы эволюции твоих навыков."
              color="accent"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 bg-card border-y-2 border-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-[hsl(var(--accent))] uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Как это работает
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16">
              ТРИ ШАГА<br />К СВОБОДЕ
            </h2>

            <div className="space-y-12">
              <StepItem
                number="01"
                title="ПРОЙДИ ТЕСТ"
                description="20-30 адаптивных вопросов для построения твоего профиля навыков. Займёт около 10 минут."
              />
              <StepItem
                number="02"
                title="ПРАКТИКУЙ КАЖДЫЙ ДЕНЬ"
                description="AI генерирует персональные упражнения на твои слабые зоны. Общайся с репетитором когда угодно."
              />
              <StepItem
                number="03"
                title="СЛЕДИ ЗА РОСТОМ"
                description="Наблюдай как растут твои навыки с детальной аналитикой. Отмечай серии и достижения."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--primary))] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              ГОТОВ<br />
              <span className="text-[hsl(var(--primary))]">ПРОКАЧАТЬСЯ?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Без регистрации. Начни практиковать английский с AI прямо сейчас.
            </p>
            <button
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="btn-brutal-primary text-lg px-12 py-4 disabled:opacity-50"
            >
              {isLoading ? 'ЗАГРУЗКА...' : 'НАЧАТЬ БЕСПЛАТНО'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[hsl(var(--primary))] flex items-center justify-center">
                <span className="text-black font-bold">E</span>
              </div>
              <span className="font-bold tracking-tight">ENBAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Enbai. Изучение английского на базе AI.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-muted-foreground uppercase tracking-wider">
                О нас
              </span>
              <span className="text-muted-foreground uppercase tracking-wider">
                Конфиденциальность
              </span>
              <span className="text-muted-foreground uppercase tracking-wider">
                Условия
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  number,
  title,
  description,
  color,
}: {
  number: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}) {
  const colorMap = {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
  };

  return (
    <div className="card-brutal group">
      <div
        className="text-6xl font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity"
        style={{ color: colorMap[color] }}
      >
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-wider">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <div
        className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: colorMap[color] }}
      />
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-8 items-start group">
      <div className="text-5xl font-bold text-muted-foreground group-hover:text-[hsl(var(--primary))] transition-colors">
        {number}
      </div>
      <div className="flex-1 border-b border-border pb-8">
        <h3 className="text-2xl font-bold mb-2 tracking-wider">{title}</h3>
        <p className="text-muted-foreground max-w-xl">{description}</p>
      </div>
    </div>
  );
}
