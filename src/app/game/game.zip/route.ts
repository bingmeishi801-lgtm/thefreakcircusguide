import { NextResponse } from "next/server";

const UPSTREAM = "https://html-classic.itch.zone/html/16572088/game.zip";

export async function GET() {
  const res = await fetch(UPSTREAM, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  if (!res.ok || !res.body) {
    return new NextResponse("Upstream error", { status: 502 });
  }

  return new NextResponse(res.body, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Cache-Control": "public, max-age=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
