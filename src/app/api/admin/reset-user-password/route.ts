import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

// Список email-адресов администраторов
const ADMIN_EMAILS = ["admin@units-english.ru", "lifematvej9@gmail.com", "bahanke678@gmail.com"];

// Генерация случайного пароля
function generatePassword(length = 12): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Проверка авторизации
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Проверка прав администратора
    if (!ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Найти пользователя
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Генерировать новый пароль
    const newPassword = generatePassword(12);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Обновить пароль в базе
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    // TODO: Отправить email пользователю (опционально)
    // await sendPasswordResetEmail(user.email, newPassword);

    return NextResponse.json({
      success: true,
      message: "Пароль успешно сброшен",
      temporaryPassword: newPassword,
      userEmail: user.email,
    });
  } catch (error) {
    console.error("Error resetting user password:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
