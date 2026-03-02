"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLLECTIONS = [
  {
    title: "Bridal Jewellery",
    subtitle: "Complete trousseau sets",
    href: "/collections/bridal",
    gradient: "from-[#C9A84C]/10 to-[#f2d98a]/20",
    icon: "👑",
  },
  {
    title: "Diamond Collection",
    subtitle: "GIA certified stones",
    href: "/collections/diamond",
    gradient: "from-[#e8f0f5]/80 to-[#cce0ee]/40",
    icon: "💎",
  },
  {
    title: "Temple Jewellery",
    subtitle: "Sacred heritage pieces",
    href: "/collections/temple",
    gradient: "from-[#C9A84C]/15 to-[#e8c04a]/10",
    icon: "🏛️",
  },
  {
    title: "Kundan & Polki",
    subtitle: "Royal Hyderabadi craft",
    href: "/collections/kundan-polki",
    gradient: "from-[#fdf3e7]/80 to-[#f5e4c0]/40",
    icon: "✨",
  },
  {
    title: "Men's Collection",
    subtitle: "Bold masculine design",
    href: "/collections/mens",
    gradient: "from-[#f0f0f0]/80 to-[#e0e0e0]/40",
    icon: "⚔️",
  },
  {
    title: "Silver Jewellery",
    subtitle: "925 sterling silver",
    href: "/collections/silver",
    gradient: "from-[#f0f4f8]/80 to-[#dce8f0]/40",
    icon: "🌙",
  },
];

export function CollectionsSection() {
  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
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
            Curated{" "}
            <em
              className="not-italic gold-text"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Masterpieces
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6a6a6a] mt-4 max-w-lg mx-auto text-sm leading-relaxed"
          >
            From bridal grandeur to everyday elegance — each collection is a chapter in our 18-year story of craftsmanship
          </motion.p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={col.href} className="block group">
                <div
                  className={`bg-gradient-to-br ${col.gradient} border border-[#f2d98a]/50 p-8 md:p-10 relative overflow-hidden transition-all duration-300 group-hover:border-[#C9A84C] group-hover:shadow-lg group-hover:-translate-y-1`}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C9A84C]/10 to-transparent" />

                  <div className="text-3xl mb-4">{col.icon}</div>
                  <h3
                    className="text-xl font-light text-[#1a1a1a] mb-1 group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {col.title}
                  </h3>
                  <p className="text-[11px] tracking-widest uppercase text-[#9a9a9a]">
                    {col.subtitle}
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-[#C9A84C] text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/collections" className="btn-outline-gold">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
