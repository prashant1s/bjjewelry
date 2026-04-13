"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/WishlistContext";

export function WishlistButton({ product }: { product: any }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  // 👇 The Context handles the ID check automatically, so we just pass the product!
  const isLiked = isInWishlist(product);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevents clicking the heart from opening the product page
        e.stopPropagation(); 
        toggleWishlist(product);
      }}
      className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-110 transition-transform duration-200"
      aria-label="Add to wishlist"
    >
      <Heart
        className={`w-[18px] h-[18px] transition-colors duration-300 ${
          isLiked 
            ? "fill-red-500 text-red-500" // Red when liked
            : "text-gray-400 hover:text-gray-600" // Gray when unliked
        }`}
      />
    </button>
  );
}