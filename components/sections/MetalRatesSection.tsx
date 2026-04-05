"use client"; // Fixed missing quote here
import { useEffect, useState, useRef } from "react";

interface MetalRates {
  gold24k: number | null;
  gold22k: number | null;
  gold18k: number | null;
  silver: number | null;
  platinum: number | null;
  mcxGold: number | null;
  changes?: Record<string, number>;
}

const DEFAULT_RATES: MetalRates = {
  gold24k: 0,
  gold22k: 0,
  gold18k: 0,
  silver: 0,
  platinum: 0,
  mcxGold: 0,
  changes: {
    gold24k: 0,
    gold22k: 0,
    gold18k: 0,
    silver: 0,
    platinum: 0,
  },
};

// 1. Bulletproof safeFormat to explicitly reject null/undefined
function safeFormat(value: number | string | null | undefined) {
  if (value === null || value === undefined) return "0";
  
  const num = Number(value);
  // Prevent NaN crashes if the API returns a weird string
  if (isNaN(num)) return "0"; 
  
  return num.toLocaleString("en-IN");
}

// 2. Added defensive optional chaining (?.) to rates
const TICKER_ITEMS = (rates: MetalRates) => [
  {
    label: "24K Gold",
    value: `₹${safeFormat(rates?.gold24k)}/g`,
    change: rates?.changes?.gold24k ?? 0,
  },
  {
    label: "22K Gold",
    value: `₹${safeFormat(rates?.gold22k)}/g`,
    change: rates?.changes?.gold22k ?? 0,
  },
  {
    label: "18K Gold",
    value: `₹${safeFormat(rates?.gold18k)}/g`,
    change: rates?.changes?.gold18k ?? 0,
  },
  {
    label: "Silver",
    value: `₹${safeFormat(rates?.silver)}/g`,
    change: rates?.changes?.silver ?? 0,
  },
  {
    label: "Platinum",
    value: `₹${safeFormat(rates?.platinum)}/g`,
    change: rates?.changes?.platinum ?? 0,
  },
  {
    label: "MCX Gold",
    value: `₹${safeFormat(rates?.mcxGold)}/10g`,
    change: rates?.changes?.gold24k ?? 0, 
  },
  {
    label: "Free Shipping on Orders Above ₹25,000",
    value: "",
    change: null,
  },
  {
    label: "BIS Hallmarked",
    value: "",
    change: null,
  },
];

export default function MetalTicker() {
  const [rates, setRates] = useState<MetalRates>(DEFAULT_RATES);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  async function fetchRates() {
    try {
      const res = await fetch("/api/metals", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      if (!data) return; 
      setRates({
        gold24k: data.gold24k ?? 0,
        gold22k: data.gold22k ?? 0,
        gold18k: data.gold18k ?? 0,
        silver: data.silver ?? 0,
        platinum: data.platinum ?? 0,
        mcxGold: data.mcxGold ?? 0,
        changes: {
          gold24k: data.changes?.gold24k ?? 0,
          gold22k: data.changes?.gold22k ?? 0,
          gold18k: data.changes?.gold18k ?? 0,
          silver: data.changes?.silver ?? 0,
          platinum: data.changes?.platinum ?? 0,
        },
      });
    } catch (err) {
      console.warn("Ticker fetch failed:", err);
    }
  }
  useEffect(() => {
    fetchRates();

    intervalRef.current = setInterval(fetchRates, 15 * 60 * 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  const items = TICKER_ITEMS(rates || DEFAULT_RATES); 
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#1a1a1a] text-white overflow-hidden relative h-9">
      <div className="flex animate-ticker whitespace-nowrap h-full items-center">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-6 text-[11px] tracking-widest uppercase font-medium"
          >
            {item.value ? (
              <>
                <span className="text-[#C9A84C]">{item.label}</span>
                <span className="text-white/80">·</span>
                <span className="text-white font-semibold">{item.value}</span>
              </>
            ) : (
              <span className="text-white/60">{item.label}</span>
            )}

            <span className="text-[#C9A84C] mx-3">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
