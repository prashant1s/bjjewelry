import { NextResponse } from "next/server";
import { getMetalRates } from "@/lib/gold";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  console.log("API KEY:", process.env.GOLD_API_KEY);
  try {
    const rates = await getMetalRates();
    return NextResponse.json(rates, {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Metal rates fetch error:", error);
    // Fallback indicative rates
    return NextResponse.json(
      {
        gold24k:0.0,
        gold22k:0.0,
        gold18k:0.0,
        silver:0.0,
        platinum:0.0,
        mcxGold: 0.0,
        updatedAt: new Date().toISOString(),
        changes: { gold24k: 0.32, gold22k: 0.08, gold18k: 0.21, silver: -0.15, platinum: 0.44 },
        fallback: true,
      },
      { status: 200 }
    );
  }
  
}
