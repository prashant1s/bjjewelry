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

// In-memory cache variables
let cachedRates: MetalRates | null = null;
let lastFetchTime = 0;

const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

export async function getMetalRates(): Promise<MetalRates> {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedRates && now - lastFetchTime < CACHE_DURATION) {
    return cachedRates;
  }

  const apiKey = process.env.GOLD_API_KEY;

  if (!apiKey) {
    throw new Error("GOLD_API_KEY not configured");
  }

  // 1. Fetch Gold price (USD per ounce)
  const goldRes = await fetch("https://www.goldapi.io/api/XAU/USD", {
    headers: {
      "x-access-token": apiKey,
      "Content-Type": "application/json",
    },
  });

  if (!goldRes.ok) {
    const err = await goldRes.text();
    throw new Error(`Gold API fetch failed! Status: ${goldRes.status}. Message: ${err}`);
  }

  const goldData = await goldRes.json();

  // 2. Fetch Silver price (USD per ounce) sequentially to avoid 429 errors
  const silverRes = await fetch("https://www.goldapi.io/api/XAG/USD", {
    headers: {
      "x-access-token": apiKey,
      "Content-Type": "application/json",
    },
  });

  const silverData = await silverRes.json();

  // 3. USD → INR conversion
  const forexRes = await fetch(
    "https://api.exchangerate.host/latest?base=USD&symbols=INR"
  );

  const forex = await forexRes.json();
  // Using an optional chain and fallback in case the free forex API fails
  const usdInr = forex.rates?.INR || 83.5; 

  // 4. Calculations
  const gold24k = (goldData.price * usdInr) / 31.1035;
  const silver = (silverData.price * usdInr) / 31.1035;

  const gold22k = gold24k * 0.916;
  const gold18k = gold24k * 0.75;

  const result: MetalRates = {
    gold24k: Number(gold24k.toFixed(2)),
    gold22k: Number(gold22k.toFixed(2)),
    gold18k: Number(gold18k.toFixed(2)),
    silver: Number(silver.toFixed(2)),
    platinum: 9950,
    mcxGold: Number((gold24k * 10).toFixed(0)),
    updatedAt: new Date().toISOString(),
    changes: {
      gold24k: 0.32,
      gold22k: 0.08,
      gold18k: 0.21,
      silver: -0.15,
      platinum: 0.44,
    },
  };

  // 5. Save to cache
  cachedRates = result;
  lastFetchTime = now;

  return result;
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}



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
