"use client";

import Image from "next/image";
import Link from "next/link";
// 👇 1. Import our smart WishlistButton instead of the dumb Heart icon
import { WishlistButton } from "@/components/WishlistButton";

interface Product {
  id: string;
  name: string;
  slug: string;
  images: string[];
  metal: string;
  purity: string | null;
  moq: string;
  badge?: string;
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100">
        <p className="text-5xl mb-6">💎</p>
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          No items match your filters.
        </h3>
        <p className="text-gray-500 max-w-sm mx-auto text-sm">
          Try broadening your search or selecting different metal types to see
          more of our collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 items-start">
      {products.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow duration-300 h-full"
        >
          {/* --- Top Half: Image, Badge, and Wishlist --- */}
          <div className="relative aspect-square w-full bg-gray-50 overflow-hidden border-b border-gray-100 flex-shrink-0">
            {/* Dynamic Red Badge */}
            {product.badge && (
              <div className="absolute top-2 left-0 md:top-4 md:left-0 z-10 bg-[#c41e3a] text-white text-[8px] md:text-[9px] font-bold tracking-widest uppercase px-2 md:px-3 py-1">
                {product.badge}
              </div>
            )}

            {/* 👇 2. USE THE SMART WISHLIST BUTTON 👇 */}
            {/* It handles the red/gray state and updates the Navbar automatically */}
            <WishlistButton product={product} />

            {/* Product Image */}
            <Link
              href={`/product/${product.slug}`}
              className="block w-full h-full"
            >
              {product.images?.[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 tracking-widest uppercase">
                  BJ Jewelry
                </div>
              )}
            </Link>
          </div>

          {/* --- Bottom Half: Details & Button --- */}
          <div className="flex flex-col flex-grow p-3 md:p-5 justify-between bg-white">
            <div className="mb-3 md:mb-4 text-left">
              {/* Product Title */}
              <Link href={`/product/${product.slug}`}>
                <h4
                  className="text-[13px] md:text-[15px] text-gray-900 mb-1.5 hover:text-[#c41e3a] transition-colors line-clamp-2 leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.name}
                </h4>
              </Link>

              {/* MOQ Label */}
              <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                MOQ: {product.moq || "Contact Us"}
              </p>
            </div>

            {/* Send Inquiry Button */}
            <button
              className="w-full mt-auto bg-[#c41e3a] hover:bg-[#a01830] text-white text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase py-2.5 md:py-3.5 transition-colors duration-300 rounded-sm"
              onClick={() => {
                alert(`Opening inquiry form for ${product.name}`);
              }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
