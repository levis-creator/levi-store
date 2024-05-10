import { Farmer } from "@/lib/types";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body: Farmer = await request.json();
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/farmers`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return new Response("success", { status: res.status });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};
export const GET = async (request: Request) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/farmers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      return data.json();
    });
    return Response.json(data);
  } catch (error) {
    NextResponse.json({
      error,
    });
  }
};
