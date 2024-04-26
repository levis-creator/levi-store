import { Banner } from "@/lib/types";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body: Banner = await request.json();
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/banners`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return new Response("success", { status: 201 });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};
