import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/lib/prisma";

const GET = async (request: NextRequest) => {
  const { userId } = await request.json();

  const address = await prisma.address.findMany({
    where: { userId: userId },
    select: {
      id: true,
      address: true,
      city: true,
      postalCode: true,
    },
  });

  return NextResponse.json(address);
};

export { GET };
