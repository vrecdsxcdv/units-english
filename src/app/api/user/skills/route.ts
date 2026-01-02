import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get or create skill vector
    let skillVector = await prisma.skillVector.findUnique({
      where: { userId: session.user.id },
    });

    if (!skillVector) {
      skillVector = await prisma.skillVector.create({
        data: { userId: session.user.id },
      });
    }

    return NextResponse.json({
      skills: {
        grammar: skillVector.grammar,
        vocabulary: skillVector.vocabulary,
        pronunciation: skillVector.pronunciation,
        listening: skillVector.listening,
        speaking: skillVector.speaking,
        slang: skillVector.slang,
        wordFormation: skillVector.wordFormation,
        fluency: skillVector.fluency,
        writing: skillVector.writing,
        comprehension: skillVector.comprehension,
      },
      lastAssessedAt: skillVector.lastAssessedAt,
    });
  } catch (error) {
    console.error("Skills fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}
