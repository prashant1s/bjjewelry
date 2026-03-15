import * as cheerio from "cheerio";

export interface MetalRates {
  gold24k: number;
  gold22k: number;
  gold18k: number;
  silver: number;
  platinum: number;
  mcxGold: number;
  updatedAt: string;
  changes: {
    gold24k: number;
    gold22k: number;
    gold18k: number;
    silver: number;
    platinum: number;
  };
}

let cachedRates: MetalRates | null = null;
let lastFetch = 0;
const CACHE_DURATION = 15 * 60 * 1000;

export async function getMetalRates(): Promise<MetalRates> {
  const now = Date.now();

  if (cachedRates && now - lastFetch < CACHE_DURATION) {
    return cachedRates;
  }

  try {
    const response = await fetch("http://www.kjpl.in/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Cache-Control": "no-cache",
      },
      next: { revalidate: 0 } 
    });

    if (!response.ok) throw new Error(`Website blocked request! HTTP status: ${response.status}`);

    const html = await response.text();
    const $ = cheerio.load(html);
    
    let finalGold = 0;
    let finalSilver = 0;

    // STRATEGY 1: Specifically target the "MJDTA RATE (Without GST)" table
    $("table").each((_, table) => {
      const tableText = $(table).text().toUpperCase();
      if (tableText.includes("MJDTA RATE") && tableText.includes("WITHOUT GST")) {
        $(table).find("tr").each((_, tr) => {
          const rowText = $(tr).text().toUpperCase();
          if (rowText.includes("GOLD:")) {
            const num = Number($(tr).text().replace(/[^0-9.]/g, ""));
            if (num > 1000) finalGold = num;
          }
          if (rowText.includes("SILVER:")) {
            const num = Number($(tr).text().replace(/[^0-9.]/g, ""));
            if (num > 10) finalSilver = num;
          }
        });
      }
    });

    // STRATEGY 2: Fallback to the top-right mini banner (e.g., "GOLD 14760  SILVER 280")
    if (finalGold === 0 || finalSilver === 0) {
      // Look at small divs/spans that contain both words
      $("div, span, td").each((_, el) => {
        const text = $(el).text().toUpperCase().replace(/\s+/g, " ");
        if (text.includes("GOLD") && text.includes("SILVER") && text.length < 60) {
           const goldMatch = text.match(/GOLD\s*([\d,]+)/);
           if (goldMatch && finalGold === 0) finalGold = Number(goldMatch[1].replace(/,/g, ""));
           
           const silverMatch = text.match(/SILVER\s*([\d,]+)/);
           if (silverMatch && finalSilver === 0) finalSilver = Number(silverMatch[1].replace(/,/g, ""));
        }
      });
    }

    if (finalGold === 0 || finalSilver === 0) {
        throw new Error(`Scraping blocked. Found Gold: ${finalGold}, Silver: ${finalSilver}`);
    }

    // We map the final scraped numbers directly to the output.
    const result: MetalRates = {
      gold24k: finalGold,  // 14760
      gold22k: finalGold,  // Keeping them the same since MJDTA is a single board rate
      gold18k: finalGold,
      silver: finalSilver, // 280
      platinum: 0, 
      mcxGold: 0, 
      updatedAt: new Date().toISOString(),
      changes: { gold24k: 0, gold22k: 0, gold18k: 0, silver: 0, platinum: 0 },
    };

    cachedRates = result;
    lastFetch = now;
    return result;
    
  } catch (error) {
    console.error("KJPL scrape failed:", error);
    if (cachedRates) return cachedRates;
    throw error;
  }
}

// import * as cheerio from "cheerio";

// export interface MetalRates {
//   gold24k: number;
//   gold22k: number;
//   gold18k: number;
//   silver: number;
//   platinum: number;
//   mcxGold: number;
//   updatedAt: string;
//   changes: {
//     gold24k: number;
//     gold22k: number;
//     gold18k: number;
//     silver: number;
//     platinum: number;
//   };
// }

// let cachedRates: MetalRates | null = null;
// let lastFetch = 0;
// const CACHE_DURATION = 15 * 60 * 1000;

// export async function getMetalRates(): Promise<MetalRates> {
//   const now = Date.now();

//   if (cachedRates && now - lastFetch < CACHE_DURATION) {
//     return cachedRates;
//   }

//   try {
//     // 1. Using native fetch with strict browser headers to bypass bot-blocks
//     const response = await fetch("http://www.kjpl.in/", {
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.5",
//         "Cache-Control": "no-cache",
//         "Pragma": "no-cache",
//       },
//       next: { revalidate: 0 } 
//     });

//     if (!response.ok) {
//         throw new Error(`Website blocked request! HTTP status: ${response.status}`);
//     }

//     const html = await response.text();
//     const $ = cheerio.load(html);
    
//     let rawGold = 0;
//     let rawSilver = 0;

//     // STRATEGY 1: Search all table rows and hoover up the numbers
//     $("table tr").each((_, el) => {
//       const text = $(el).text().toUpperCase();
      
//       // If row has GOLD but no $ sign
//       if (text.includes("GOLD") && !text.includes("$")) {
//         // Find all cells, strip text, keep only numbers > 1000
//         const numbers = $(el).find("td, th").map((i, cell) => {
//             const num = Number($(cell).text().replace(/,/g, "").replace(/[^0-9.]/g, ""));
//             return isNaN(num) ? 0 : num;
//         }).get().filter(n => n > 1000); 
        
//         if (numbers.length > 0 && rawGold === 0) {
//             // Grab the second number (Selling Rate) or first if only one exists
//             rawGold = numbers[1] || numbers[0]; 
//         }
//       }

//       // If row has SILVER but no $ sign
//       if (text.includes("SILVER") && !text.includes("$")) {
//         const numbers = $(el).find("td, th").map((i, cell) => {
//             const num = Number($(cell).text().replace(/,/g, "").replace(/[^0-9.]/g, ""));
//             return isNaN(num) ? 0 : num;
//         }).get().filter(n => n > 200); // Silver is cheaper, so filter > 200
        
//         if (numbers.length > 0 && rawSilver === 0) {
//             rawSilver = numbers[1] || numbers[0]; 
//         }
//       }
//     });

//     // STRATEGY 2: If the table was hidden, scan the raw text of the whole page
//     if (rawGold === 0 || rawSilver === 0) {
//         const bodyText = $("body").text().replace(/\s+/g, ' '); // Compress text
        
//         if (rawGold === 0) {
//             const goldMatch = bodyText.match(/GOLD\s*[:\-]?\s*(?:\(₹\))?\s*([\d,]{4,}(?:\.\d+)?)/i);
//             if (goldMatch) rawGold = Number(goldMatch[1].replace(/,/g, ''));
//         }
        
//         if (rawSilver === 0) {
//             const silverMatch = bodyText.match(/SILVER\s*[:\-]?\s*(?:\(₹\))?\s*([\d,]{3,}(?:\.\d+)?)/i);
//             if (silverMatch) rawSilver = Number(silverMatch[1].replace(/,/g, ''));
//         }
//     }

//     // If both strategies fail, throw to fallback
//     if (rawGold === 0 || rawSilver === 0) {
//         throw new Error(`Scraping blocked. Found Gold: ${rawGold}, Silver: ${rawSilver}`);
//     }

//     // --- MATH ADJUSTMENT (Auto-Unit Detection) ---
//     let gold24k = 0;
//     let silver = 0;

//     // Detect if Gold is priced per 10g (~158,000) or per 1g 22K (~14,700)
//     if (rawGold > 100000) {
//         gold24k = rawGold / 10; // Convert 10g to 1g
//     } else {
//         gold24k = rawGold / 0.916; // Convert 22K 1g to 24K 1g
//     }

//     // Detect if Silver is priced per 1kg (~259,000) or per 1g (~280)
//     if (rawSilver > 50000) {
//         silver = rawSilver / 1000; // Convert 1kg to 1g
//     } else {
//         silver = rawSilver; // Already 1g
//     }

//     const gold22k = gold24k * 0.916;
//     const gold18k = gold24k * 0.75;

//     const result: MetalRates = {
//       gold24k: Number(gold24k.toFixed(2)),
//       gold22k: Number(gold22k.toFixed(2)),
//       gold18k: Number(gold18k.toFixed(2)),
//       silver: Number(silver.toFixed(2)),
//       platinum: 9950, 
//       mcxGold: Math.round(gold24k * 10), 
//       updatedAt: new Date().toISOString(),
//       changes: { gold24k: 0, gold22k: 0, gold18k: 0, silver: 0, platinum: 0 },
//     };

//     cachedRates = result;
//     lastFetch = now;
//     return result;
    
//   } catch (error) {
//     console.error("KJPL scrape failed:", error);
//     if (cachedRates) return cachedRates;
//     throw error;
//   }
// }

// import axios from "axios";
// import * as cheerio from "cheerio";

// export interface MetalRates {
//   gold24k: number;
//   gold22k: number;
//   gold18k: number;
//   silver: number;
//   platinum: number;
//   mcxGold: number;
//   updatedAt: string;
//   changes: {
//     gold24k: number;
//     gold22k: number;
//     gold18k: number;
//     silver: number;
//     platinum: number;
//   };
// }

// let cachedRates: MetalRates | null = null;
// let lastFetch = 0;

// const CACHE_DURATION = 15 * 60 * 1000;

// export async function getMetalRates(): Promise<MetalRates> {
//   const now = Date.now();

//   if (cachedRates && now - lastFetch < CACHE_DURATION) {
//     return cachedRates;
//   }

//   try {
//     const { data } = await axios.get("http://www.kjpl.in/", {
//       headers: {
//         "User-Agent": "Mozilla/5.0",
//       },
//     });

//     const $ = cheerio.load(data);

//     let goldKg = 0;
//     let silverKg = 0;

//     $("table tr").each((_, el) => {
//       const cols = $(el).find("td");

//       const label = $(cols[0]).text().trim();
//       const selling = $(cols[2]).text().trim();

//       if (label === "GOLD") {
//         goldKg = Number(selling.replace(/,/g, ""));
//       }

//       if (label === "SILVER") {
//         silverKg = Number(selling.replace(/,/g, ""));
//       }
//     });

//     const gold24k = goldKg / 1000;
//     const silver = silverKg / 1000;

//     const gold22k = gold24k * 0.916;
//     const gold18k = gold24k * 0.75;

//     const result: MetalRates = {
//       gold24k: Number(gold24k.toFixed(2)),
//       gold22k: Number(gold22k.toFixed(2)),
//       gold18k: Number(gold18k.toFixed(2)),
//       silver: Number(silver.toFixed(2)),
//       platinum: 9950,
//       mcxGold: Math.round(gold24k * 10),
//       updatedAt: new Date().toISOString(),
//       changes: {
//         gold24k: 0,
//         gold22k: 0,
//         gold18k: 0,
//         silver: 0,
//         platinum: 0,
//       },
//     };

//     cachedRates = result;
//     lastFetch = now;

//     return result;
//   } catch (error) {
//     console.error("KJPL scrape failed:", error);

//     if (cachedRates) return cachedRates;

//     throw error;
//   }
// }



// export interface MetalRates {
//   gold24k: number;
//   gold22k: number;
//   gold18k: number;
//   silver: number;
//   platinum: number;
//   mcxGold: number;
//   updatedAt: string;
//   changes: {
//     gold24k: number;
//     gold22k: number;
//     gold18k: number;
//     silver: number;
//     platinum: number;
//   };
// }

// // In-memory cache variables
// let cachedRates: MetalRates | null = null;
// let lastFetchTime = 0;

// const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

// export async function getMetalRates(): Promise<MetalRates> {
//   const now = Date.now();

//   // Return cached data if still valid
//   if (cachedRates && now - lastFetchTime < CACHE_DURATION) {
//     return cachedRates;
//   }

//   const apiKey = process.env.GOLD_API_KEY;

//   if (!apiKey) {
//     throw new Error("GOLD_API_KEY not configured");
//   }

//   // 1. Fetch Gold price (USD per ounce)
//   const goldRes = await fetch("https://www.goldapi.io/api/XAU/USD", {
//     headers: {
//       "x-access-token": apiKey,
//       "Content-Type": "application/json",
//     },
//   });

//   if (!goldRes.ok) {
//     const err = await goldRes.text();
//     throw new Error(`Gold API fetch failed! Status: ${goldRes.status}. Message: ${err}`);
//   }

//   const goldData = await goldRes.json();

//   // 2. Fetch Silver price (USD per ounce) sequentially to avoid 429 errors
//   const silverRes = await fetch("https://www.goldapi.io/api/XAG/USD", {
//     headers: {
//       "x-access-token": apiKey,
//       "Content-Type": "application/json",
//     },
//   });

//   const silverData = await silverRes.json();

//   // 3. USD → INR conversion
//   const forexRes = await fetch(
//     "https://api.exchangerate.host/latest?base=USD&symbols=INR"
//   );

//   const forex = await forexRes.json();
//   // Using an optional chain and fallback in case the free forex API fails
//   const usdInr = forex.rates?.INR || 83.5; 

//   // 4. Calculations
//   const gold24k = (goldData.price * usdInr) / 31.1035;
//   const silver = (silverData.price * usdInr) / 31.1035;

//   const gold22k = gold24k * 0.916;
//   const gold18k = gold24k * 0.75;

//   const result: MetalRates = {
//     gold24k: Number(gold24k.toFixed(2)),
//     gold22k: Number(gold22k.toFixed(2)),
//     gold18k: Number(gold18k.toFixed(2)),
//     silver: Number(silver.toFixed(2)),
//     platinum: 9950,
//     mcxGold: Number((gold24k * 10).toFixed(0)),
//     updatedAt: new Date().toISOString(),
//     changes: {
//       gold24k: 0.32,
//       gold22k: 0.08,
//       gold18k: 0.21,
//       silver: -0.15,
//       platinum: 0.44,
//     },
//   };

//   // 5. Save to cache
//   cachedRates = result;
//   lastFetchTime = now;

//   return result;
// }

// export function formatINR(value: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }



// import { redis, METAL_RATES_KEY, METAL_RATES_TTL } from "./redis";

// export interface MetalRates {
//   gold24k: number;
//   gold22k: number;
//   gold18k: number;
//   silver: number;
//   platinum: number;
//   mcxGold: number;
//   updatedAt: string;
//   changes: {
//     gold24k: number;
//     gold22k: number;
//     gold18k: number;
//     silver: number;
//     platinum: number;
//   };
// }

// const TROY_OUNCE_TO_GRAM = 31.1035;

// // Purity multipliers
// const PURITY = {
//   gold24k: 1.0,
//   gold22k: 22 / 24,
//   gold18k: 18 / 24,
// };

// async function fetchFromGoldAPI(): Promise<MetalRates> {
//   const apiKey = process.env.GOLD_API_KEY;

//   if (!apiKey) {
//     throw new Error("GOLD_API_KEY is missing from environment variables!");
//   }

//   const [goldRes, silverRes, platinumRes] = await Promise.all([
//     fetch(`https://www.goldapi.io/api/XAU/INR`, {
//       headers: { "x-access-token": apiKey, "Content-Type": "application/json" },
//       next: { revalidate: 0 },
//     }),
//     fetch(`https://www.goldapi.io/api/XAG/INR`, {
//       headers: { "x-access-token": apiKey, "Content-Type": "application/json" },
//       next: { revalidate: 0 },
//     }),
//     fetch(`https://www.goldapi.io/api/XPT/INR`, {
//       headers: { "x-access-token": apiKey, "Content-Type": "application/json" },
//       next: { revalidate: 0 },
//     }),
//   ]);

//   // Detailed error logging to catch exact Vercel/GoldAPI issues
//   if (!goldRes.ok) {
//     const errorText = await goldRes.text();
//     throw new Error(`Gold API fetch failed! Status: ${goldRes.status}. Message: ${errorText}`);
//   }

//   const goldData = await goldRes.json();
//   const silverData = silverRes.ok ? await silverRes.json() : null;
//   const platinumData = platinumRes.ok ? await platinumRes.json() : null;

//   const goldPerGram = goldData.price / TROY_OUNCE_TO_GRAM;
//   const silverPerGram = silverData ? silverData.price / TROY_OUNCE_TO_GRAM : 87;
//   const platinumPerGram = platinumData ? platinumData.price / TROY_OUNCE_TO_GRAM : 9950;

//   return {
//     gold24k: Math.round(goldPerGram * PURITY.gold24k),
//     gold22k: Math.round(goldPerGram * PURITY.gold22k),
//     gold18k: Math.round(goldPerGram * PURITY.gold18k),
//     silver: Math.round(silverPerGram * 100) / 100,
//     platinum: Math.round(platinumPerGram),
//     mcxGold: Math.round(goldData.price * 10) / 10,
//     updatedAt: new Date().toISOString(),
//     changes: {
//       gold24k: goldData.ch ?? 0,
//       gold22k: goldData.ch ?? 0,
//       gold18k: goldData.ch ?? 0,
//       silver: silverData?.ch ?? 0,
//       platinum: platinumData?.ch ?? 0,
//     },
//   };
// }

// export async function getMetalRates(): Promise<MetalRates> {
//   try {
//     const cached = await redis.get<MetalRates>(METAL_RATES_KEY);
//     if (cached) return cached;
//   } catch {
//     // Redis unavailable — fall through to API
//     console.warn("Redis cache unavailable, falling back to direct API fetch.");
//   }

//   const rates = await fetchFromGoldAPI();

//   try {
//     await redis.setex(METAL_RATES_KEY, METAL_RATES_TTL, JSON.stringify(rates));
//   } catch {
//     // Cache write failure is non-fatal
//     console.warn("Failed to write to Redis cache.");
//   }

//   return rates;
// }

// export function formatINR(value: number): string {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value);
// }
