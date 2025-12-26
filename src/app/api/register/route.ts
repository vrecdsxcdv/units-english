import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/email-resend"; // Resend version

export const runtime = "nodejs";

type RegisterBody = {
  name?: string;
  email?: string;
  password?: string;
};

function badRequest(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return badRequest("Content-Type must be application/json", 415);
    }

    const body = (await request.json()) as RegisterBody | null;
    if (!body) return badRequest("Empty body");

    const { name, email, password } = body;
    if (!email || !password || !name)
      return badRequest("Name, email and password are required");

    // Basic validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) return badRequest("Invalid email format");
    if (password.length < 6)
      return badRequest("Password must be at least 6 characters");
    if (name.trim().length < 2)
      return badRequest("Name must be at least 2 characters");

    const normalizedEmail = email.toLowerCase().trim();

    // Check if verified user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Пользователь с таким email уже зарегистрирован" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    console.log('[register] Generated verification code:', code, 'for email:', normalizedEmail);

    // Delete any existing pending registration for this email
    await prisma.pendingRegistration.deleteMany({
      where: { email: normalizedEmail }
    });

    // Create pending registration (NOT a real user yet!)
    await prisma.pendingRegistration.create({
      data: {
        email: normalizedEmail,
        password: hashedPassword,
        name: name.trim(),
        code: code, // 6-digit verification code
        expires,
      },
    });

    // Send verification email with code
    try {
      await sendVerificationEmail(normalizedEmail, code);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      // Delete pending registration if email fails
      await prisma.pendingRegistration.deleteMany({
        where: { email: normalizedEmail }
      });
      return NextResponse.json(
        { error: "Не удалось отправить письмо. Попробуйте снова." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Проверьте email для подтверждения регистрации",
      email: normalizedEmail,
    }, { status: 200 });

  } catch (error: unknown) {
    console.error("/api/register error:", error);

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Пользователь с таким email уже зарегистрирован" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
