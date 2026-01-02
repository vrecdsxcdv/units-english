'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/stores/authStore';
import { authApi } from '@/lib/api/auth';
import { api } from '@/lib/api/client';
import { cn } from '@/lib/utils';
import { Home, MessageSquare, BarChart2, Settings, RefreshCw } from 'lucide-react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading, user, logout, setAuth } = useAuthStore();
  const [isAutoLogging, setIsAutoLogging] = useState(false);
  const [checkingOnboarding, setCheckingOnboarding] = useState(false);

  useEffect(() => {
    const autoLogin = async () => {
      if (!isLoading && !isAuthenticated && !isAutoLogging) {
        setIsAutoLogging(true);
        try {
          const { user, tokens } = await authApi.guestLogin();
          setAuth(tokens, user);
        } catch (error) {
          console.error('Auto login failed:', error);
          router.push('/');
        } finally {
          setIsAutoLogging(false);
        }
      }
    };
    autoLogin();
  }, [isLoading, isAuthenticated, isAutoLogging, setAuth, router]);

  // Check if user needs onboarding
  useEffect(() => {
    const checkOnboarding = async () => {
      if (isAuthenticated && !checkingOnboarding && pathname !== '/onboarding') {
        setCheckingOnboarding(true);
        try {
          const status = await api.get<{ completed: boolean }>('/onboarding/status');
          if (!status.completed) {
            router.push('/onboarding');
          }
        } catch (error) {
          console.error('Failed to check onboarding status:', error);
        } finally {
          setCheckingOnboarding(false);
        }
      }
    };
    checkOnboarding();
  }, [isAuthenticated, pathname, router, checkingOnboarding]);

  if (isLoading || isAutoLogging || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(var(--primary))] mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const handleNewSession = async () => {
    logout();
    try {
      const { user, tokens } = await authApi.guestLogin();
      setAuth(tokens, user);
    } catch (error) {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r-2 border-foreground hidden lg:block">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl tracking-tight">ENBAI</span>
          </Link>
        </div>

        <nav className="px-4 space-y-1">
          <NavLink href="/chat" icon={<MessageSquare className="w-5 h-5" />}>
            Чат
          </NavLink>
          <NavLink href="/dashboard" icon={<Home className="w-5 h-5" />}>
            Главная
          </NavLink>
          <NavLink href="/progress" icon={<BarChart2 className="w-5 h-5" />}>
            Прогресс
          </NavLink>
          <NavLink href="/settings" icon={<Settings className="w-5 h-5" />}>
            Настройки
          </NavLink>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
              <span className="text-black font-medium">
                G
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                Гость
              </p>
              <p className="text-xs text-muted-foreground">Бесплатная сессия</p>
            </div>
          </div>
          <button
            onClick={handleNewSession}
            className={cn(
              'w-full flex items-center gap-2 px-3 py-2 rounded-lg',
              'text-muted-foreground hover:bg-muted transition-colors text-sm'
            )}
          >
            <RefreshCw className="w-4 h-4" />
            Новая сессия
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:pl-64">
        <div className="p-6 lg:p-8">{children}</div>
      </main>

    </div>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2',
        'text-muted-foreground hover:bg-muted hover:text-foreground',
        'transition-colors uppercase text-sm tracking-wider'
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
