import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Sanitize text to prevent XSS
function sanitizeText(text: string): string {
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

// GET /api/reviews - Get all approved reviews
export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      where: { isTrue: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        userName: true,
        text: true,
        rating: true,
        isTrue: true,
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/reviews - Create a new review
export async function POST(req: NextRequest) {
  try {
    const { id, text, rating } = await req.json();

    // Validation
    if (!id || typeof id !== "string" || id.length < 2 || id.length > 40) {
      return NextResponse.json(
        { error: "Invalid id: must be 2-40 characters" },
        { status: 400 }
      );
    }

    if (!text || typeof text !== "string" || text.length < 10 || text.length > 500) {
      return NextResponse.json(
        { error: "Invalid text: must be 10-500 characters" },
        { status: 400 }
      );
    }

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Invalid rating: must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedUserName = sanitizeText(id);
    const sanitizedText = sanitizeText(text);

    // Create review
    const review = await prisma.review.create({
      data: {
        userName: sanitizedUserName,
        text: sanitizedText,
        rating: rating,
        isTrue: false,
      },
    });

    return NextResponse.json(
      {
        id: review.id,
        userName: review.userName,
        text: review.text,
        rating: review.rating,
        isTrue: review.isTrue,
        message: "Review submitted for moderation",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
