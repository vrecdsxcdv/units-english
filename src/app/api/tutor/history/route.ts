import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// Get chat history for user
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Получаем все разговоры пользователя
    const conversations = await prisma.chatConversation.findMany({
      where: { userId: session.user.id },
      include: {
        messages: {
          orderBy: { timestamp: "desc" },
          take: 1, // Только последнее сообщение
        },
        _count: {
          select: { messages: true },
        },
      },
      orderBy: { updatedAt: "desc" },
      take: 50, // Последние 50 разговоров
    });

    const formattedConversations = conversations.map((conv) => ({
      id: conv.id,
      title: conv.title || "Без названия",
      mode: conv.mode,
      lastMessage: conv.messages[0]?.content || "",
      timestamp: conv.updatedAt.toISOString(),
      messageCount: conv._count.messages,
    }));

    return NextResponse.json({
      conversations: formattedConversations,
    });
  } catch (error) {
    console.error("History fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    );
  }
}

// Delete conversation
export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get("id");

    if (!conversationId) {
      return NextResponse.json(
        { error: "Conversation ID required" },
        { status: 400 }
      );
    }

    // Проверяем что разговор принадлежит пользователю
    const conversation = await prisma.chatConversation.findFirst({
      where: {
        id: conversationId,
        userId: session.user.id,
      },
    });

    if (!conversation) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Удаляем разговор (сообщения удалятся автоматически через onDelete: Cascade)
    await prisma.chatConversation.delete({
      where: { id: conversationId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete conversation" },
      { status: 500 }
    );
  }
}
