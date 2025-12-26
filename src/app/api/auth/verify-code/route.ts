import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

/**
 * Верификация email через 6-значный код
 * POST /api/auth/verify-code
 * Body: { email, code }
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, code } = body;

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email и код обязательны" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedCode = code.trim();

    console.log('[verify-code] Looking for:', { email: normalizedEmail, code: normalizedCode });

    // Find pending registration with this email and code
    const pendingRegistration = await prisma.pendingRegistration.findFirst({
      where: {
        email: normalizedEmail,
        code: normalizedCode,
      },
    });

    console.log('[verify-code] Found pending registration:', pendingRegistration ? 'YES' : 'NO');

    if (!pendingRegistration) {
      return NextResponse.json(
        { error: "Неверный код верификации" },
        { status: 400 }
      );
    }

    // Check if code is expired
    if (pendingRegistration.expires < new Date()) {
      // Delete expired pending registration
      await prisma.pendingRegistration.delete({
        where: { id: pendingRegistration.id },
      });
      return NextResponse.json(
        { error: "Срок действия кода истёк (15 минут). Пожалуйста, зарегистрируйтесь снова." },
        { status: 400 }
      );
    }

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
    console.log('[verify-code] Creating user for email:', pendingRegistration.email);

    try {
      await prisma.user.create({
        data: {
          email: pendingRegistration.email,
          password: pendingRegistration.password,
          name: pendingRegistration.name,
          emailVerified: new Date(), // Email is now verified!
        },
      });
      console.log('[verify-code] User created successfully');
    } catch (createError) {
      console.error('[verify-code] Error creating user:', createError);
      throw createError;
    }

    // Delete the pending registration
    await prisma.pendingRegistration.delete({
      where: { id: pendingRegistration.id },
    });

    console.log('[verify-code] Verification complete');

    return NextResponse.json({
      success: true,
      message: "Email успешно подтверждён! Теперь вы можете войти.",
    });
  } catch (error: unknown) {
    console.error("/api/auth/verify-code error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
