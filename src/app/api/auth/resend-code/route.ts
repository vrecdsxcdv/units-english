import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email обязателен" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if there's a pending registration for this email
    const pendingRegistration = await prisma.pendingRegistration.findUnique({
      where: { email: normalizedEmail },
    });

    if (!pendingRegistration) {
      return NextResponse.json(
        { error: "Регистрация не найдена. Пожалуйста, зарегистрируйтесь снова." },
        { status: 404 }
      );
    }

    // Generate new 6-digit code
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    const newExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Update pending registration with new code
    await prisma.pendingRegistration.update({
      where: { id: pendingRegistration.id },
      data: {
        code: newCode,
        expires: newExpires,
      },
    });

    // Send email
    try {
      await sendVerificationEmail(normalizedEmail, newCode);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      return NextResponse.json(
        { error: "Не удалось отправить email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Новый код отправлен на ваш email",
    });

  } catch (error) {
    console.error("/api/auth/resend-code error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
