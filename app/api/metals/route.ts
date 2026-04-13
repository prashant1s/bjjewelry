// import { NextResponse } from "next/server";
// import { getMetalRates } from "@/lib/gold";

// export const runtime = "nodejs";
// export const revalidate = 900;

// export async function GET() {
//   try {
//     const rates = await getMetalRates();

//     return NextResponse.json(rates, {
//       headers: {
//         "Cache-Control": "public, s-maxage=900, stale-while-revalidate=300",
//       },
//     });
//   } catch (error) {
//     console.error("Metal rates fetch error:", error);

//     return NextResponse.json({
//       gold24k: 0,
//       gold22k: 0,
//       gold18k: 0,
//       silver: 0,
     
      
//       updatedAt: new Date().toISOString(),
//       changes: {
//         gold24k: 0,
//         gold22k: 0,
//         gold18k: 0,
//         silver: 0,
        
//       },
//       fallback: true,
//     });
//   }
// }


import { NextResponse } from "next/server";
import { getMetalRates } from "@/lib/gold";

export const runtime = "nodejs";
export const revalidate = 900;

export async function GET() {
  try {
    const rates = await getMetalRates();

    return NextResponse.json(rates, {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Metal rates fetch error:", error);

    // Provide default fallback with new USD fields
    return NextResponse.json({
      gold24k: 0,
      gold22k: 0,
      gold18k: 0,
      silver: 0,
      gold24kUsd: 0,
      gold22kUsd: 0,
      gold18kUsd: 0,
      silverUsd: 0,
      updatedAt: new Date().toISOString(),
      changes: {
        gold24k: 0,
        gold22k: 0,
        gold18k: 0,
        silver: 0,
      },
      fallback: true,
    });
  }
}