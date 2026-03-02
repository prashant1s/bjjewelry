import { redis, METAL_RATES_KEY, METAL_RATES_TTL } from "./redis";

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

const TROY_OUNCE_TO_GRAM = 31.1035;

// Purity multipliers
const PURITY = {
  gold24k: 1.0,
  gold22k: 22 / 24,
  gold18k: 18 / 24,
};

async function fetchFromGoldAPI(): Promise<MetalRates> {
  const apiKey = process.env.GOLD_API_KEY!;

  const [goldRes, silverRes, platinumRes] = await Promise.all([
    fetch(`https://www.goldapi.io/api/XAU/INR`, {
      headers: { "x-access-token": apiKey, "Content-Type": "application/json" },
      next: { revalidate: 0 },
    }),
    fetch(`https://www.goldapi.io/api/XAG/INR`, {
      headers: { "x-access-token": apiKey, "Content-Type": "application/json" },
      next: { revalidate: 0 },
    }),
    fetch(`https://www.goldapi.io/api/XPT/INR`, {
      headers: { "x-access-token": apiKey, "Content-Type": "application/json" },
      next: { revalidate: 0 },
    }),
  ]);

  if (!goldRes.ok) throw new Error("Gold API fetch failed");

  const goldData = await goldRes.json();
  const silverData = silverRes.ok ? await silverRes.json() : null;
  const platinumData = platinumRes.ok ? await platinumRes.json() : null;

  const goldPerGram = goldData.price / TROY_OUNCE_TO_GRAM;
  const silverPerGram = silverData ? silverData.price / TROY_OUNCE_TO_GRAM : 87;
  const platinumPerGram = platinumData ? platinumData.price / TROY_OUNCE_TO_GRAM : 9950;

  return {
    gold24k: Math.round(goldPerGram * PURITY.gold24k),
    gold22k: Math.round(goldPerGram * PURITY.gold22k),
    gold18k: Math.round(goldPerGram * PURITY.gold18k),
    silver: Math.round(silverPerGram * 100) / 100,
    platinum: Math.round(platinumPerGram),
    mcxGold: Math.round(goldData.price * 10) / 10,
    updatedAt: new Date().toISOString(),
    changes: {
      gold24k: goldData.ch ?? 0,
      gold22k: goldData.ch ?? 0,
      gold18k: goldData.ch ?? 0,
      silver: silverData?.ch ?? 0,
      platinum: platinumData?.ch ?? 0,
    },
  };
}

export async function getMetalRates(): Promise<MetalRates> {
  try {
    const cached = await redis.get<MetalRates>(METAL_RATES_KEY);
    if (cached) return cached;
  } catch {
    // Redis unavailable — fall through to API
  }

  const rates = await fetchFromGoldAPI();

  try {
    await redis.setex(METAL_RATES_KEY, METAL_RATES_TTL, JSON.stringify(rates));
  } catch {
    // Cache write failure is non-fatal
  }

  return rates;
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
