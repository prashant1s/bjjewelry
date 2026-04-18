"use client";

import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const loadWishlist = () => {
      try {
        const stored = localStorage.getItem("bj_wishlist");
        if (stored) {
          // Parse the data AND filter out any corrupted/null items automatically
          const parsed = JSON.parse(stored).filter((item: any) => item && (item._id || item.id));
          setWishlist(parsed);
        }
      } catch (error) {
        console.error("Corrupted wishlist data found. Resetting...", error);
        setWishlist([]); // Reset if completely broken
      }
    };

    loadWishlist();
    window.addEventListener("wishlist-updated", loadWishlist);
    return () => window.removeEventListener("wishlist-updated", loadWishlist);
  }, []);

  const toggleWishlist = (product: any) => {
    if (!product) return;
    const productId = product._id || product.id;
    
    try {
      let current = JSON.parse(localStorage.getItem("bj_wishlist") || "[]");
      
      // Clean data before modifying
      current = current.filter((item: any) => item && (item._id || item.id));
      
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
    } catch (error) {
      console.error("Failed to toggle wishlist", error);
    }
  };

  const isInWishlist = (productOrId: any) => {
    if (!productOrId) return false;
    const idToCheck = typeof productOrId === 'string' ? productOrId : (productOrId._id || productOrId.id);
    return wishlist.some((item) => item && (item._id || item.id) === idToCheck);
  };

  return { wishlist, toggleWishlist, isInWishlist, isMounted };
}