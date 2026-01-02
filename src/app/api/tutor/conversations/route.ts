import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

// GET /api/tutor/conversations - Get all conversations for current user
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const searchParams = req.nextUrl.searchParams;
    const status = searchParams.get("status") || "active";
    const limit = parseInt(searchParams.get("limit") || "20");

    const conversations = await prisma.chatConversation.findMany({
      where: {
        userId: session.user.id,
        status,
      },
      orderBy: { updatedAt: "desc" },
      take: limit,
      select: {
        id: true,
        title: true,
        mode: true,
        status: true,
        messageCount: true,
        sessionPhase: true,
        createdAt: true,
        updatedAt: true,
        messages: {
          orderBy: { seqNum: "desc" },
          take: 1,
          select: {
            content: true,
            role: true,
            timestamp: true,
          },
        },
      },
    });

    return NextResponse.json({
      conversations: conversations.map((c) => ({
        ...c,
        lastMessage: c.messages[0] || null,
        messages: undefined,
      })),
    });
  } catch (error: any) {
    console.error("Get conversations error:", error);
    return NextResponse.json(
      { error: "Failed to get conversations" },
      { status: 500 }
    );
  }
}

// POST /api/tutor/conversations - Create new conversation
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, mode = "general" } = body;

    const conversation = await prisma.chatConversation.create({
      data: {
        userId: session.user.id,
        title: title || "Новый чат",
        mode,
        sessionPhase: "ONBOARDING",
      },
    });

    return NextResponse.json({ conversation });
  } catch (error: any) {
    console.error("Create conversation error:", error);
    return NextResponse.json(
      { error: "Failed to create conversation" },
      { status: 500 }
    );
  }
}
