"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 

const COLLECTIONS = [
  {
    title: "Anklets",
    // subtitle: "Delicate foot adornments",
    href: "/collections/anklets",
    image: "/images/collections/anklets.jpg", 
    ring: "#C9A84C",
  },
  {
    title: "Bangles",
    // subtitle: "Stacked & statement",
    href: "/collections/bangles",
    image: "/images/collections/bangles.jpeg", 
    ring: "#d4a017",
  },
  {
    title: "Belly Chain",
    // subtitle: "Bohemian waist wear",
    href: "/collections/belly-chain",
    image: "/images/collections/bellychain.webp",
    ring: "#c0874f",
  },
  {
    title: "Bracelets",
    // subtitle: "Everyday elegance",
    href: "/collections/bracelets",
    image: "/images/collections/bracelets.jpg",
    ring: "#4a90b8",
  },
  {
    title: "Chain — Female",
    // subtitle: "Feminine gold chains",
    href: "/collections/chain-female",
    image: "/images/collections/chainfemale.jpg",
    ring: "#C9A84C",
  },
  {
    title: "Chain — Male",
    // subtitle: "Bold masculine chains",
    href: "/collections/chain-male",
    image: "/images/collections/chainmales.jpg",
    ring: "#888",
  },
  {
    title: "Necklace",
    // subtitle: "Statement centrepieces",
    href: "/collections/necklace",
    image: "/images/collections/necklace.jpg",
    ring: "#9b4a9b",
  },
  {
    title: "Purse",
    // subtitle: "Artisan clutches",
    href: "/collections/purse",
    image: "/images/collections/pursefemale.jpg",
    ring: "#8b5e3c",
  },
  {
    title: "Watch",
    // subtitle: "Timeless luxury",
    href: "/collections/watch",
    image: "/images/collections/watch.webp",
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
            Every piece crafted with 19 years of mastery — find your perfect jewel
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
              className="flex flex-col items-center gap-3 group w-full"
            >
              <Link href={col.href} className="flex flex-col items-center gap-3 w-full">
                
                {/* Image Circle Container */}
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-gray-100"
                  style={{
                    border: `1px solid ${col.ring}40`,
                    boxShadow: `0 0 0 0px ${col.ring}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 25px ${col.ring}30, 0 0 0 6px ${col.ring}15`;
                    e.currentTarget.style.borderColor = `${col.ring}90`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 0px ${col.ring}20`;
                    e.currentTarget.style.borderColor = `${col.ring}40`;
                  }}
                >
                  {/* Actual Product Image */}
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                  
                  {/* Subtle Dark Overlay on Hover for premium feel */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>

                {/* Label */}
                <div className="text-center w-full px-1">
                  <p
                    className="text-[12px] sm:text-[13px] font-medium text-[#2a2a2a] tracking-wide leading-tight transition-colors duration-200 group-hover:text-[#C9A84C]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {col.title}
                  </p>
                  <p className="text-[9px] tracking-[0.12em] uppercase text-[#9a9a9a] mt-1 line-clamp-2">
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