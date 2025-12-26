import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

/**
 * Верификация email через токен из ссылки
 * Поддерживает два способа:
 * 1. GET /api/auth/verify-email?token=xxx (токен в ссылке - рекомендуется)
 * 2. POST /api/auth/verify-email { token } (для программного использования)
 */

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: "Токен верификации отсутствует" },
        { status: 400 }
      );
    }

    return await verifyToken(token);
  } catch (error) {
    console.error("/api/auth/verify-email GET error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: "Токен обязателен" },
        { status: 400 }
      );
    }

    return await verifyToken(token);
  } catch (error) {
    console.error("/api/auth/verify-email POST error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}

async function verifyToken(token: string) {
  console.log('[verify-email] Looking for token:', token);

  // Find pending registration with this token
  const pendingRegistration = await prisma.pendingRegistration.findFirst({
    where: {
      code: token, // Token is stored in the code field
    },
  });

  console.log('[verify-email] Found pending registration:', pendingRegistration ? 'YES' : 'NO');

  if (!pendingRegistration) {
    return NextResponse.json(
      { error: "Неверный или истёкший токен верификации" },
      { status: 400 }
    );
  }

  // Check if token is expired
  if (pendingRegistration.expires < new Date()) {
    // Delete expired pending registration
    await prisma.pendingRegistration.delete({
      where: { id: pendingRegistration.id },
    });
    return NextResponse.json(
      { error: "Срок действия ссылки истёк (15 минут). Пожалуйста, зарегистрируйтесь снова." },
      { status: 400 }
    );
  }

  const normalizedEmail = pendingRegistration.email;

  // Check if user already exists (shouldn't happen, but just in case)
  const existingUser = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  });

  if (existingUser) {
    // Delete pending registration
    await prisma.pendingRegistration.delete({
      where: { id: pendingRegistration.id },
    });
    return NextResponse.json(
      { error: "Пользователь уже существует. Вы можете войти." },
      { status: 409 }
    );
  }

  // Create the actual user with verified email
  console.log('[verify-email] Creating user for email:', pendingRegistration.email);

  try {
    await prisma.user.create({
      data: {
        email: pendingRegistration.email,
        password: pendingRegistration.password,
        name: pendingRegistration.name,
        emailVerified: new Date(), // Email is now verified!
      },
    });
    console.log('[verify-email] User created successfully');
  } catch (createError) {
    console.error('[verify-email] Error creating user:', createError);
    throw createError;
  }

  // Delete the pending registration
  await prisma.pendingRegistration.delete({
    where: { id: pendingRegistration.id },
  });

  console.log('[verify-email] Verification complete');

  return NextResponse.json({
    success: true,
    message: "Email успешно подтверждён! Теперь вы можете войти.",
  });
}
