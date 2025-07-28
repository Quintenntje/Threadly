import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/lib/prisma";

export async function getCurrentUser(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}


export const checkUserAuth = async () => {
  try {
    const response = await fetch("/api/auth", {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("User is logged in:", data.user);
      console.log("User ID:", data.user.id);
      return data.user;
    } else {
      console.log("User is not logged in");
      return null;
    }
  } catch (error) {
    console.error("Error checking auth:", error);
    return null;
  }
};