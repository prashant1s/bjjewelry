import { NextResponse } from "next/server";
import { getMetalRates } from "@/lib/gold";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  // Log the first few characters of the key to verify Vercel sees it securely
  const key = process.env.GOLD_API_KEY;
  console.log("API KEY LOADED:", key ? `${key.substring(0, 5)}...` : "UNDEFINED");

  try {
    const rates = await getMetalRates();
    
    return NextResponse.json(rates, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    // This will now print the exact reason GoldAPI rejected the request
    console.error("Metal rates fetch error details:", error);
    
    // Fallback indicative rates
    return NextResponse.json(
      {
        gold24k: 7180, 
        gold22k: 6582,
        gold18k: 5385,
        silver: 87.4,
        platinum: 9950,
        mcxGold: 71800,
        updatedAt: new Date().toISOString(),
        changes: { 
          gold24k: 0.32, 
          gold22k: 0.08, 
          gold18k: 0.21, 
          silver: -0.15, 
          platinum: 0.44 
        },
        fallback: true,
      },
      { 
        status: 200, 
        headers: {
            "Cache-Control": "no-store", 
        }
      }
    );
  }
}


// import { NextResponse } from "next/server";
// import { getMetalRates } from "@/lib/gold";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

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
//     // Fallback indicative rates
//     return NextResponse.json(
//       {
//         gold24k: 7180,
//         gold22k: 6582,
//         gold18k: 5385,
//         silver: 87.4,
//         platinum: 9950,
//         mcxGold: 71800,
//         updatedAt: new Date().toISOString(),
//         changes: { gold24k: 0.32, gold22k: 0.08, gold18k: 0.21, silver: -0.15, platinum: 0.44 },
//         fallback: true,
//       },
//       { status: 200 }
//     );
//   }
// }
