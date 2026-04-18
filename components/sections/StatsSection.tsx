"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 18, suffix: "+", label: "Years of Excellence", prefix: "" },
  { value: 1, suffix: "L+", label: "Pieces Crafted", prefix: "" },
  { value: 50, suffix: "K+", label: "Happy Families", prefix: "" },
  { value: 99, suffix: ".9%", label: "Purity Guaranteed", prefix: "" },
];

function CountUp({ end, suffix, prefix }: { end: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          let start = 0;
          const step = end / 50;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {i < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
              <div
                className="text-4xl md:text-5xl font-light mb-2 gold-text"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
