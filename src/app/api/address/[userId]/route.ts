import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/lib/prisma";

const GET = async (
  request: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { userId } = params;

    if (!userId || isNaN(parseInt(userId))) {
      return NextResponse.json(
        { error: "Valid userId is required" },
        { status: 400 }
      );
    }

    const address = await prisma.address.findMany({
      where: { userId: parseInt(userId) },
      select: {
        id: true,
        address: true,
        city: true,
        postalCode: true,
      },
    });

    return NextResponse.json(address);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
};

export { GET };
