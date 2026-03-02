import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const METAL_RATES_KEY = "bj:metal_rates";
export const METAL_RATES_TTL = 60 * 15; // 15 minutes
