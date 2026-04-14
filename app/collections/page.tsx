import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CustomDesignCTA } from "./CollectionCTA";
import { FloatingGoldLine } from "@/components/sections/Float";

export const metadata: Metadata = {
  title: "Collections – Fine Jewellery",
  description: "Explore BJ Jewelry's curated collections — bridal, diamond, temple, kundan, silver and more.",
};

const COLLECTIONS = [
  {
    slug: "bridal",
    title: "Bridal Jewellery",
    subtitle: "Complete trousseau sets for your most special day",
    badge: "Most Popular",
    items: "200+ designs",
    icon: "👑",
  },
  {
    slug: "diamond",
    title: "Diamond Collection",
    subtitle: "GIA certified diamonds in every cut and setting",
    badge: "Premium",
    items: "150+ designs",
    icon: "💎",
  },
  {
    slug: "temple",
    title: "Temple Jewellery",
    subtitle: "Sacred heritage pieces in traditional South Indian style",
    badge: "",
    items: "100+ designs",
    icon: "🏛️",
  },
  {
    slug: "kundan-polki",
    title: "Kundan & Polki",
    subtitle: "Royal Hyderabadi craftsmanship with uncut diamonds",
    badge: "Heritage",
    items: "80+ designs",
    icon: "✨",
  },
  {
    slug: "mens",
    title: "Men's Collection",
    subtitle: "Bold and refined jewellery for the modern man",
    badge: "",
    items: "60+ designs",
    icon: "⚔️",
  },
  {
    slug: "silver",
    title: "Silver Jewellery",
    subtitle: "925 sterling silver in contemporary and classic styles",
    badge: "Best Value",
    items: "120+ designs",
    icon: "🌙",
  },
  {
    slug: "new-arrivals",
    title: "New Arrivals",
    subtitle: "The latest additions to our atelier — season 2025",
    badge: "New",
    items: "40+ designs",
    icon: "⭐",
  },
];

export default function CollectionsPage() {
  console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  return (
    <div className="min-h-screen bg-white">

      {/* Header — relative + overflow-hidden so line stays inside */}
      <div className="relative bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center overflow-hidden">
        
        {/* ✅ Line first, behind everything */}
        <FloatingGoldLine />

        {/* ✅ Content above the line */}
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">Our Atelier</p>
          <h1
            className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            All Collections
          </h1>
          <p className="text-[#6a6a6a] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            18 years of craft. Every piece tells a story of heritage, skill, and beauty.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS.map((col) => (
            <Link key={col.slug} href={`/collections/${col.slug}`} className="block group">
              <div className="border border-[#f2d98a]/50 p-8 relative hover:border-[#C9A84C] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {col.badge && (
                  <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase border border-[#C9A84C] text-[#C9A84C] px-2 py-0.5">
                    {col.badge}
                  </span>
                )}
                <div className="text-4xl mb-5">{col.icon}</div>
                <h2
                  className="text-xl font-light text-[#1a1a1a] mb-2 group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {col.title}
                </h2>
                <p className="text-[#6a6a6a] text-sm leading-relaxed mb-5">{col.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest uppercase text-[#9a9a9a]">
                    {col.items}
                  </span>
                  <span className="flex items-center gap-1 text-[#C9A84C] text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CustomDesignCTA />
    </div>
  );
}