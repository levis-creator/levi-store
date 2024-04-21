import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    return NextResponse.json({
      message: "success",
      body,
    });
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: "error",
      error,
    });
  }
};
