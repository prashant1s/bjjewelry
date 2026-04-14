import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CustomDesignCTA } from "./CollectionCTA";
import { FloatingGoldLine } from "@/components/sections/Float";
import { sanityClient } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Collections – Fine Jewellery",
  description: "Explore BJ Jewelry's curated collections — bridal, diamond, temple, kundan, silver and more.",
};

// 1. Your existing hardcoded collections
const STATIC_COLLECTIONS = [
  {
    slug: "anklets",
    title: "Anklets",
    subtitle: "Complete sets for your most special day",
    badge: "Most Popular",
    items: "200+ designs",
    image: "/images/collections/anklets.jpg",
  },
  {
    slug: "bangles",
    title: "Bangles Collection",
    subtitle: "GIA certified diamonds in every cut and setting",
    badge: "Premium",
    items: "150+ designs",
    image: "/images/collections/bangles.jpeg",
  },
  {
    title: "Chain — Female",
    subtitle: "Feminine gold chains",
    href: "/collections/chain-female",
    image: "/images/collections/chainfemale.jpg",
    items: "100+ designs",
  },
  {
    slug: "bracelets-men",
    title: "Bracelets - Men",
    subtitle: "Bold and refined jewellery for the modern man",
    badge: "Heritage",
    items: "80+ designs",
    image: "/images/collections/chainmales.jpg",
  },
  {
    slug: "bracelets-women",
    title: "Bracelets - women",
    subtitle: "Royal Hyderabadi craftsmanship with uncut diamonds",
    badge: "Heritage",
    items: "80+ designs",
    image: "/images/collections/bracelets.jpg",
  },
  {
    slug: "belly-chains",
    title: "Belly Chain Collection",
    subtitle: "925 sterling silver in contemporary and classic styles",
    badge: "",
    items: "60+ designs",
    image: "/images/collections/bellychain.webp",
  },
  {
    slug: "necklace",
    title: "Necklace Jewellery",
    subtitle: "925 sterling silver in contemporary and classic styles",
    badge: "Best Value",
    items: "120+ designs",
    image: "/images/collections/necklace.jpg",
  },
  {
    slug: "purse",
    title: "Purse Collection",
    subtitle: "925 sterling silver in contemporary and classic styles",
    badge: "Best Value",
    items: "120+ designs",
    image: "/images/collections/pursefemale.jpg",
  },
  {
    slug: "Watch ",
    title: "Watch Collection",
    subtitle: "The latest additions to our atelier — season 2026",
    badge: "New",
    items: "40+ designs",
    image: "/images/collections/watch.webp",
  },
];

// 2. Fetch function for Sanity
async function getSanityCollections() {
  const query = `*[_type == "collection"] | order(_createdAt desc) {
    title,
    "subtitle": description,
    "slug": slug.current,
    "image": coverImage.asset->url,
    badge,
    items
  }`;

  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return [];
  }
}

export default async function CollectionsPage() {
  const liveCollections = await getSanityCollections();

  // 3. Combine them: Sanity items first, then static items
  const allCollections = [...liveCollections, ...STATIC_COLLECTIONS];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center overflow-hidden">
        <FloatingGoldLine />
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">
            Our Atelier
          </p>
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
          {allCollections.map((col: any, index: number) => {
            // Logic to handle different URL formats
            const destination = col.href || `/collections/${col.slug}`;

            return (
              <Link key={col.slug || index} href={destination} className="block group">
                <div className="border border-[#f2d98a]/50 p-8 relative hover:border-[#C9A84C] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
                  {col.badge && (
                    <span className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase border border-[#C9A84C] text-[#C9A84C] px-2 py-0.5 bg-white z-10">
                      {col.badge}
                    </span>
                  )}

                  {/* Small Image Thumbnail */}
                  <div className="w-16 h-16 relative mb-6 rounded-full overflow-hidden border border-[#f2d98a]/40 shadow-sm group-hover:border-[#C9A84C] transition-colors duration-300">
                    <Image
                      src={col.image || "/images/placeholder.jpg"}
                      alt={col.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="64px"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h2
                    className="text-xl font-light text-[#1a1a1a] mb-2 group-hover:text-[#C9A84C] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {col.title}
                  </h2>

                  <p className="text-[#6a6a6a] text-sm leading-relaxed mb-6 flex-grow">
                    {col.subtitle}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] tracking-widest uppercase text-[#9a9a9a]">
                      {col.items || "Explore"}
                    </span>
                    <span className="flex items-center gap-1 text-[#C9A84C] text-[11px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <CustomDesignCTA />
    </div>
  );
}