import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/email-elastic";

const prisma = new PrismaClient();

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

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Don't reveal if user exists for security
    if (!user) {
      return NextResponse.json({
        success: true,
        message: "Если аккаунт с таким email существует, на него отправлено письмо с инструкциями.",
      });
    }

    // Delete any existing reset tokens for this email
    await prisma.passwordResetToken.deleteMany({
      where: { email },
    });

    // Generate reset token
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Save token to database
    await prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    // Send reset email
    try {
      await sendPasswordResetEmail(email, token);
    } catch (emailError) {
      console.error("Failed to send password reset email:", emailError);
      return NextResponse.json(
        { error: "Не удалось отправить email. Попробуйте позже." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Письмо с инструкциями отправлено на ваш email.",
    });
  } catch (error) {
    console.error("/api/auth/forgot-password error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
