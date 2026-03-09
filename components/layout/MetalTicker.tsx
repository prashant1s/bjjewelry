"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface MetalRates {
  gold24k: number;
  gold22k: number;
  gold18k: number;
  silver: number;
  platinum: number;
  mcxGold: number;
  changes: {
    gold24k: number;
    gold22k: number;
    gold18k: number;
    silver: number;
    platinum: number;
  };
}

const TICKER_ITEMS = (rates: MetalRates) => [
  { label: "24K Gold", value: `₹${rates.gold24k.toLocaleString("en-IN")}/g`, change: rates.changes.gold24k },
  { label: "22K Gold", value: `₹${rates.gold22k.toLocaleString("en-IN")}/g`, change: rates.changes.gold22k },
  { label: "18K Gold", value: `₹${rates.gold18k.toLocaleString("en-IN")}/g`, change: rates.changes.gold18k },
  { label: "Silver", value: `₹${rates.silver}/g`, change: rates.changes.silver },
  { label: "Platinum", value: `₹${rates.platinum.toLocaleString("en-IN")}/g`, change: rates.changes.platinum },
  { label: "MCX Gold", value: `₹${rates.mcxGold.toLocaleString("en-IN")}/10g`, change: rates.changes.gold24k },
  { label: "Free Shipping on Orders Above ₹25,000", value: "", change: null },
  { label: "BIS Hallmarked", value: "", change: null },
];

export function MetalTicker() {
  const [rates, setRates] = useState<MetalRates | null>(null);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  async function fetchRates() {
    try {
      const res = await fetch("/api/metals", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setRates(data);
      }
    } catch {
      // Silently fail — fallback will render
    }
  }

  useEffect(() => {
    setMounted(true);
    fetchRates();
    intervalRef.current = setInterval(fetchRates, 15 * 60 * 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const defaultRates: MetalRates = {
    gold24k: 7180, gold22k: 6582, gold18k: 5385,
    silver: 87.4, platinum: 9950, mcxGold: 71800,
    changes: { gold24k: 0.32, gold22k: 0.08, gold18k: 0.21, silver: -0.15, platinum: 0.44 },
  };

  const items = TICKER_ITEMS(rates ?? defaultRates);
  const doubled = [...items, ...items];

  return (
    <div 
      className="bg-[#1a1a1a] text-white overflow-hidden relative h-9" 
      role="marquee" 
      aria-label="Live metal rates"
      suppressHydrationWarning
    >
      <div className="flex animate-[ticker_40s_linear_infinite] whitespace-nowrap h-full items-center ticker-fade">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 px-6 text-[11px] tracking-widest uppercase font-medium">
            {item.value ? (
              <>
                <span className="text-[#C9A84C]">{item.label}</span>
                <span className="text-white/80">·</span>
                <span className="text-white font-semibold">{item.value}</span>
                {item.change !== null && (
                  <span className={cn("text-[10px] font-medium", item.change >= 0 ? "text-emerald-400" : "text-red-400")}>
                    {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change).toFixed(2)}%
                  </span>
                )}
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
