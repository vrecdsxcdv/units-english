import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error("DB health error:", e);
    return new Response("db error", { status: 500 });
  }
}
