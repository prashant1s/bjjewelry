"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function WishlistPage() {
  // Dummy state - later you will replace this with real data from your database
  const wishlistItems: any[] = []; 

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <div className="relative bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">
            Your Personal
          </p>
          <h1
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-wide"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Wishlist
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
        </div>
      </div>

      {/* Wishlist Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {wishlistItems.length === 0 ? (
          /* --- EMPTY STATE --- */
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-24 h-24 bg-[#FAF7F2] rounded-full flex items-center justify-center mb-6 border border-[#f2d98a]/30">
              <Heart className="w-10 h-10 text-[#C9A84C] stroke-[1.5]" />
            </div>
            <h2 
              className="text-2xl text-[#1a1a1a] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Your wishlist is currently empty
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm">
              Explore our collections and save your favorite pieces to review them later or share them with loved ones.
            </p>
            <Link 
              href="/collections/new-arrivals"
              className="group flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3 rounded-sm text-[11px] uppercase tracking-[0.2em] hover:bg-[#C9A84C] transition-all duration-300"
            >
              Explore Collections
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          /* --- FILLED STATE --- */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <p className="text-gray-500">Your items will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
}