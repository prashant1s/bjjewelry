"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const COLLECTIONS = [
  {
    title: "Anklets",
    subtitle: "Delicate foot adornments",
    href: "/collections/anklets",
    emoji: "🦶",
    color: "#C9A84C",
    bg: "from-[#fdf6e3] to-[#f5e4b8]",
    ring: "#C9A84C",
  },
  {
    title: "Bangles",
    subtitle: "Stacked & statement",
    href: "/collections/bangles",
    emoji: "⭕",
    color: "#b8860b",
    bg: "from-[#fef9ec] to-[#fde8a0]",
    ring: "#d4a017",
  },
  {
    title: "Belly Chain",
    subtitle: "Bohemian waist wear",
    href: "/collections/belly-chain",
    emoji: "✨",
    color: "#c0874f",
    bg: "from-[#fdf0e8] to-[#f5d4b0]",
    ring: "#c0874f",
  },
  {
    title: "Bracelets",
    subtitle: "Everyday elegance",
    href: "/collections/bracelets",
    emoji: "💎",
    color: "#4a90b8",
    bg: "from-[#e8f4fd] to-[#cce4f5]",
    ring: "#4a90b8",
  },
  {
    title: "Chain — Female",
    subtitle: "Feminine gold chains",
    href: "/collections/chain-female",
    emoji: "📿",
    color: "#C9A84C",
    bg: "from-[#fffbf0] to-[#faefc8]",
    ring: "#C9A84C",
  },
  {
    title: "Chain — Male",
    subtitle: "Bold masculine chains",
    href: "/collections/chain-male",
    emoji: "⛓️",
    color: "#5a5a5a",
    bg: "from-[#f2f2f2] to-[#e0e0e0]",
    ring: "#888",
  },
  {
    title: "Necklace",
    subtitle: "Statement centrepieces",
    href: "/collections/necklace",
    emoji: "👑",
    color: "#9b4a9b",
    bg: "from-[#f8eeff] to-[#e8d0f5]",
    ring: "#9b4a9b",
  },
  {
    title: "Purse",
    subtitle: "Artisan clutches",
    href: "/collections/purse",
    emoji: "👜",
    color: "#8b5e3c",
    bg: "from-[#fdf0e6] to-[#f0d5b8]",
    ring: "#8b5e3c",
  },
  {
    title: "Watch",
    subtitle: "Timeless luxury",
    href: "/collections/watch",
    emoji: "⌚",
    color: "#2c6e8a",
    bg: "from-[#e8f5f8] to-[#c8e8f0]",
    ring: "#2c6e8a",
  },
];

export function CollectionsSection() {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3"
          >
            Our Collections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Explore by{" "}
            <em
              className="not-italic"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                color: "#C9A84C",
              }}
            >
              Category
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6a6a6a] mt-4 max-w-lg mx-auto text-sm leading-relaxed"
          >
            Every piece crafted with 18 years of mastery — find your perfect jewel
          </motion.p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Circles Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-y-10 gap-x-4 justify-items-center">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 group"
            >
              <Link href={col.href} className="flex flex-col items-center gap-3">
                {/* Circle */}
                <div
                  className={`
                    relative w-20 h-20 sm:w-24 sm:h-24 rounded-full
                    bg-gradient-to-br ${col.bg}
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-xl
                  `}
                  style={{
                    border: `2px solid ${col.ring}30`,
                    boxShadow: `0 0 0 0px ${col.ring}40`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 8px 30px ${col.ring}35, 0 0 0 4px ${col.ring}20`;
                    (e.currentTarget as HTMLDivElement).style.border =
                      `2px solid ${col.ring}80`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 0 0 0px ${col.ring}40`;
                    (e.currentTarget as HTMLDivElement).style.border =
                      `2px solid ${col.ring}30`;
                  }}
                >
                  {/* Inner ring */}
                  <div
                    className="absolute inset-2 rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                    style={{ border: `1px solid ${col.ring}` }}
                  />
                  {/* Emoji / Icon */}
                  <span className="text-3xl sm:text-4xl relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {col.emoji}
                  </span>
                </div>

                {/* Label */}
                <div className="text-center">
                  <p
                    className="text-[12px] sm:text-[13px] font-medium text-[#2a2a2a] tracking-wide leading-tight transition-colors duration-200 group-hover:text-[#C9A84C]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {col.title}
                  </p>
                  <p className="text-[9px] tracking-[0.12em] uppercase text-[#9a9a9a] mt-0.5">
                    {col.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <Link href="/collections" className="btn-outline-gold">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}