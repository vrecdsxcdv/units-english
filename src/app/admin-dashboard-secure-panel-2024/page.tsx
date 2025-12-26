"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GlassPanel from "@/components/ui/glass-panel";

type UserData = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  isBanned: boolean;
  createdAt: Date;
  progress: {
    a1: number;
    b1: number;
    b2: number;
  };
  streak: number;
  lastActive: Date | null;
};

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<UserData[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [resetPasswordData, setResetPasswordData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  // Проверка авторизации и прав администратора
  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user) {
      router.push("/login");
      return;
    }

    // Проверяем, является ли пользователь администратором
    // В вашем случае можно проверить по email или добавить поле isAdmin в базу
    const adminEmails = ["admin@units-english.ru", "lifematvej9@gmail.com", "bahanke678@gmail.com"];

    if (!adminEmails.includes(session.user.email || "")) {
      router.push("/");
      return;
    }

    loadUsers();
  }, [session, status]);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        setFilteredUsers(data.users);
      }
    } catch (error) {
      console.error("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (email: string) => {
    setSearchEmail(email);
    if (!email.trim()) {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleBanUser = async (userId: string, currentBanStatus: boolean) => {
    try {
      const response = await fetch("/api/admin/ban-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, isBanned: !currentBanStatus }),
      });

      if (response.ok) {
        await loadUsers();
        if (selectedUser?.id === userId) {
          setSelectedUser(null);
        }
      }
    } catch (error) {
      console.error("Error banning user:", error);
    }
  };

  const handleResetPassword = async (userId: string, userEmail: string) => {
    if (!confirm(`Сбросить пароль для ${userEmail}?`)) {
      return;
    }

    try {
      const response = await fetch("/api/admin/reset-user-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (response.ok) {
        setResetPasswordData({
          email: data.userEmail,
          password: data.temporaryPassword,
        });
        setSelectedUser(null);
      } else {
        alert(`Ошибка: ${data.error}`);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Ошибка при сбросе пароля");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600"></div>
          <p className="text-gray-600 dark:text-gray-400">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Админ Панель
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Управление пользователями Units English
          </p>
        </div>

        {/* Поиск */}
        <div className="mb-6">
          <GlassPanel title="Поиск пользователей" subtitle="" className="max-w-2xl">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Введите email для поиска..."
                value={searchEmail}
                onChange={(e) => handleSearch(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={() => handleSearch("")}
                variant="outline"
                className="whitespace-nowrap"
              >
                Сбросить
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Найдено пользователей: {filteredUsers.length}
            </p>
          </GlassPanel>
        </div>

        {/* Список пользователей */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="cursor-pointer rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              onClick={() => setSelectedUser(user)}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
                {user.isBanned && (
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                    Забанен
                  </span>
                )}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Streak:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {user.streak} 🔥
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">A1:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {user.progress.a1}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">B1:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {user.progress.b1}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">B2:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {user.progress.b2}%
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500">
                  Создан:{" "}
                  {new Date(user.createdAt).toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              Пользователи не найдены
            </p>
          </div>
        )}
      </div>

      {/* Модальное окно с деталями пользователя */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 dark:bg-gray-800">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedUser.email}
                </p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                  Информация
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      ID:
                    </span>
                    <span className="font-mono text-gray-900 dark:text-white">
                      {selectedUser.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Email подтверждён:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedUser.emailVerified ? "✓ Да" : "✗ Нет"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Статус:
                    </span>
                    <span
                      className={`font-medium ${
                        selectedUser.isBanned
                          ? "text-red-600 dark:text-red-400"
                          : "text-green-600 dark:text-green-400"
                      }`}
                    >
                      {selectedUser.isBanned ? "Забанен" : "Активен"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Дата регистрации:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {new Date(selectedUser.createdAt).toLocaleString("ru-RU")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                  Прогресс обучения
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Уровень A1
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedUser.progress.a1}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-full bg-indigo-600"
                        style={{ width: `${selectedUser.progress.a1}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Уровень B1
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedUser.progress.b1}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-full bg-indigo-600"
                        style={{ width: `${selectedUser.progress.b1}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Уровень B2
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedUser.progress.b2}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                      <div
                        className="h-full bg-indigo-600"
                        style={{ width: `${selectedUser.progress.b2}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                  Активность
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-4xl">🔥</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Streak: {selectedUser.streak} дней
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Дней подряд с активностью
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  onClick={() =>
                    handleResetPassword(selectedUser.id, selectedUser.email)
                  }
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  🔑 Сбросить пароль
                </Button>
                <Button
                  onClick={() =>
                    handleBanUser(selectedUser.id, selectedUser.isBanned)
                  }
                  className={`w-full ${
                    selectedUser.isBanned
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {selectedUser.isBanned
                    ? "Разблокировать пользователя"
                    : "Заблокировать пользователя"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно с временным паролем */}
      {resetPasswordData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-gray-800">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Пароль успешно сброшен!
              </h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Email пользователя:
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {resetPasswordData.email}
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Временный пароль:
                </p>
                <p className="font-mono text-lg font-bold text-orange-600 dark:text-orange-400">
                  {resetPasswordData.password}
                </p>
              </div>

              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <div className="flex gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-red-800 dark:text-red-300">
                    <strong>Важно!</strong> Сохраните этот пароль. Он показывается только один раз и не может быть восстановлен.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => setResetPasswordData(null)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
