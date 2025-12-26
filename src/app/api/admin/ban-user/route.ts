import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Список email-адресов администраторов
const ADMIN_EMAILS = ["admin@units-english.ru", "lifematvej9@gmail.com", "bahanke678@gmail.com"];

export async function POST(request: NextRequest) {
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

    const body = await request.json();
    const { userId, isBanned } = body;

    if (!userId || typeof isBanned !== "boolean") {
      return NextResponse.json(
        { error: "Missing userId or isBanned" },
        { status: 400 }
      );
    }

    // Обновить статус бана пользователя
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { isBanned },
      select: {
        id: true,
        email: true,
        isBanned: true,
      },
    });

    console.log(
      `User ${updatedUser.email} ${isBanned ? "banned" : "unbanned"} by ${session.user.email}`
    );

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error banning user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
