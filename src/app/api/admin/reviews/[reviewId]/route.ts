import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PATCH /api/admin/reviews/[reviewId] - Approve/reject review
export async function PATCH(
  req: NextRequest,
  { params }: { params: { reviewId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { reviewId } = params;
    const { action } = await req.json();

    if (action === "approve") {
      const review = await prisma.review.update({
        where: { id: reviewId },
        data: { isTrue: true },
      });

      return NextResponse.json({
        message: "Review approved",
        review,
      });
    } else if (action === "reject") {
      const review = await prisma.review.update({
        where: { id: reviewId },
        data: { isTrue: false },
      });

      return NextResponse.json({
        message: "Review rejected",
        review,
      });
    } else {
      return NextResponse.json(
        { error: "Invalid action. Use 'approve' or 'reject'" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/reviews/[reviewId] - Delete review
export async function DELETE(
  req: NextRequest,
  { params }: { params: { reviewId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { reviewId } = params;

    await prisma.review.delete({
      where: { id: reviewId },
    });

    return NextResponse.json({
      message: "Review deleted",
      reviewId,
    });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
