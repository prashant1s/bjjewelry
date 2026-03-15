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

    return NextResponse.json({
      gold24k: 0,
      gold22k: 0,
      gold18k: 0,
      silver: 0,
      platinum: 0,
      mcxGold: 0,
      updatedAt: new Date().toISOString(),
      changes: {
        gold24k: 0,
        gold22k: 0,
        gold18k: 0,
        silver: 0,
        platinum: 0,
      },
      fallback: true,
    });
  }
}







// import { NextResponse } from "next/server";
// import { getMetalRates } from "@/lib/gold";

// export const runtime = "nodejs";
// export const revalidate = 900
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

//     // fallback values
//     return NextResponse.json({
//       gold24k:0.00,
//       gold22k:0.00,
//       gold18k:0.00,
//       silver:0.00,
//       platinum:0.00,
//       mcxGold:0.00,
//       updatedAt: new Date().toISOString(),
//       changes: {
//         gold24k: 0.32,
//         gold22k: 0.08,
//         gold18k: 0.21,
//         silver: -0.15,
//         platinum: 0.44,
//       },
//       fallback: true,
//     });
//   }
// }


