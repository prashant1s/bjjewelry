"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetalRates {
  gold24k: number;
  gold22k: number;
  gold18k: number;
  silver: number;
  platinum: number;
  mcxGold: number;
  updatedAt: string;
  changes: Record<string, number>;
}

const METALS = (r: MetalRates) => [
  {
    symbol: "24K",
    label: "Pure Gold / Per Gram",
    value: `₹${r.gold24k.toLocaleString("en-IN")}`,
    change: r.changes.gold24k,
    color: "#C9A84C",
  },
  {
    symbol: "22K",
    label: "Hallmark Gold / Per Gram",
    value: `₹${r.gold22k.toLocaleString("en-IN")}`,
    change: r.changes.gold22k,
    color: "#d4a017",
  },
  {
    symbol: "18K",
    label: "Diamond Setting / Per Gram",
    value: `₹${r.gold18k.toLocaleString("en-IN")}`,
    change: r.changes.gold18k,
    color: "#b8922e",
  },
  {
    symbol: "Ag",
    label: "Silver / Per Gram",
    value: `₹${r.silver}`,
    change: r.changes.silver,
    color: "#9a9a9a",
  },
  {
    symbol: "Pt",
    label: "Platinum / Per Gram",
    value: `₹${r.platinum.toLocaleString("en-IN")}`,
    change: r.changes.platinum,
    color: "#7a9db5",
  },
];

const DEFAULT_RATES: MetalRates = {
  gold24k: 7180, gold22k: 6582, gold18k: 5385,
  silver: 87.4, platinum: 9950, mcxGold: 71800,
  updatedAt: new Date().toISOString(),
  changes: { gold24k: 0.32, gold22k: 0.08, gold18k: 0.21, silver: -0.15, platinum: 0.44 },
};

export function MetalRatesSection() {
  const [rates, setRates] = useState<MetalRates>(DEFAULT_RATES);
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/metals", { cache: "no-store" });
      if (res.ok) setRates(await res.json());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  const metals = METALS(rates);
  const updatedTime = new Date(rates.updatedAt).toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", hour12: true,
  });

  return (
    <section className="bg-white border-y border-[#f2d98a]/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-1">Live Market Rates</p>
          <h2 className="text-2xl font-light text-[#1a1a1a]" style={{ fontFamily: "var(--font-serif)" }}>
            Today&apos;s Precious Metal Prices
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {metals.map((metal, i) => (
            <motion.div
              key={metal.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="luxury-card text-center p-5"
            >
              <div
                className="text-3xl font-light mb-1 tracking-wide"
                style={{ fontFamily: "var(--font-serif)", color: metal.color }}
              >
                {metal.symbol}
              </div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-3">
                {metal.label}
              </div>
              <div className="text-xl font-semibold text-[#1a1a1a] mb-2">
                {metal.value}
              </div>
              <div
                className={cn(
                  "flex items-center justify-center gap-1 text-[11px] font-medium",
                  metal.change >= 0 ? "text-emerald-600" : "text-red-500"
                )}
              >
                {metal.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {metal.change >= 0 ? "+" : ""}{metal.change.toFixed(2)}%
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 flex items-center justify-center gap-3">
          <p className="text-[11px] text-[#9a9a9a]">
            Last updated: Today, {updatedTime} IST · Rates are indicative and subject to change
          </p>
          <button
            onClick={refresh}
            className="text-[#C9A84C] hover:text-[#b8922e] transition-colors"
            disabled={loading}
            aria-label="Refresh rates"
          >
            <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          </button>
        </div>
      </div>
    </section>
  );
}
