import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!.trim(),
  token: process.env.UPSTASH_REDIS_REST_TOKEN!.trim(),
});

export const METAL_RATES_KEY = "bj:metal_rates";
export const METAL_RATES_TTL = 60 * 15; // 15 minutes
