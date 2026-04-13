"use client";

import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const loadWishlist = () => {
      const stored = localStorage.getItem("bj_wishlist");
      if (stored) setWishlist(JSON.parse(stored));
    };

    loadWishlist();

    window.addEventListener("wishlist-updated", loadWishlist);
    return () => window.removeEventListener("wishlist-updated", loadWishlist);
  }, []);

  const toggleWishlist = (product: any) => {
    // 👇 Safely grab the Sanity _id
    const productId = product._id || product.id; 
    
    let current = JSON.parse(localStorage.getItem("bj_wishlist") || "[]");
    
    // 👇 Check using the safe ID
    const exists = current.find((item: any) => (item._id || item.id) === productId);

    if (exists) {
      // Remove it
      current = current.filter((item: any) => (item._id || item.id) !== productId);
    } else {
      // Add it
      current.push(product);
    }

    localStorage.setItem("bj_wishlist", JSON.stringify(current));
    window.dispatchEvent(new Event("wishlist-updated"));
  };

  const isInWishlist = (productId: string) => {
    // 👇 Check using the safe ID
    return wishlist.some((item) => (item._id || item.id) === productId);
  };

  return { wishlist, toggleWishlist, isInWishlist };
}