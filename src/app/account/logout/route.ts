import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logged out" },
    { status: 200 }
  );
  response.cookies.delete("token");

  return response;
}

export async function GET() {
  const response = NextResponse.json(
    { message: "Logged out" },
    { status: 200 }
  );
  response.cookies.delete("token");

  redirect("/");
}
