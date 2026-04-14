"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type WishlistContextType = {
  wishlist: any[];
  toggleWishlist: (product: any) => void;
  isInWishlist: (product: any) => boolean;
  isMounted: boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// 👇 Aggressive ID Finder: If _id is missing, it tries id, then slug, then name!
const getSafeId = (item: any) => {
  if (!item) return null;
  return item._id || item.id || item.slug?.current || item.slug || item.name;
};

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem("bj_wishlist");
      if (stored) {
        // Only keep items that actually have a safe ID
        const parsed = JSON.parse(stored).filter((item: any) => getSafeId(item));
        setWishlist(parsed);
      }
    } catch (error) {
      console.error("Failed to load wishlist", error);
    }
  }, []);

  const toggleWishlist = (product: any) => {
    if (!product) return;
    
    const productId = getSafeId(product);
    
    if (!productId) {
      console.error("🚨 WISHLIST ERROR: This product has no ID, Slug, or Name!", product);
      alert("Error: Product data is missing identifiers.");
      return;
    }

    setWishlist((currentList) => {
      const exists = currentList.find((item) => getSafeId(item) === productId);
      let newList;
      
      if (exists) {
        newList = currentList.filter((item) => getSafeId(item) !== productId);
        console.log("🗑️ Removed from Wishlist:", productId);
      } else {
        newList = [...currentList, product];
        console.log("✅ Added to Wishlist:", productId);
      }

      localStorage.setItem("bj_wishlist", JSON.stringify(newList));
      return newList; 
    });
  };

  const isInWishlist = (product: any) => {
    if (!product) return false;
    const idToCheck = typeof product === 'string' ? product : getSafeId(product);
    return wishlist.some((item) => getSafeId(item) === idToCheck);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, isMounted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}