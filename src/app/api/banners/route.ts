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

export const GET = async (request: Request) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?
      sort=createdAt,desc`,
      // FIXME: Arrange data is being gotten from the server in ascending order according to createDate
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
