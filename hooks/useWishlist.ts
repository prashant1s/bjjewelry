// hooks/useWishlist.ts
"use client";

import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Load wishlist on mount and listen for changes across the app
  useEffect(() => {
    const loadWishlist = () => {
      const stored = localStorage.getItem("bj_wishlist");
      if (stored) setWishlist(JSON.parse(stored));
    };

    loadWishlist();

    // Listen for our custom event so pages update instantly
    window.addEventListener("wishlist-updated", loadWishlist);
    return () => window.removeEventListener("wishlist-updated", loadWishlist);
  }, []);

  const toggleWishlist = (product: any) => {
    let current = JSON.parse(localStorage.getItem("bj_wishlist") || "[]");
    
    // Check if product is already in wishlist
    const exists = current.find((item: any) => item.id === product.id);

    if (exists) {
      // Remove it
      current = current.filter((item: any) => item.id !== product.id);
    } else {
      // Add it
      current.push(product);
    }

    // Save back to local storage
    localStorage.setItem("bj_wishlist", JSON.stringify(current));
    
    // Dispatch event so the WishlistPage and Header icons update instantly
    window.dispatchEvent(new Event("wishlist-updated"));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  return { wishlist, toggleWishlist, isInWishlist };
}