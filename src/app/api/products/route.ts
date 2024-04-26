import { Product } from "@/lib/types";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body: Product = await request.json();
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then(() => {
      return new Response("success", { status: 201 });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};
