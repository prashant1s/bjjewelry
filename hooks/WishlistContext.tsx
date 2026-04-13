"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define what our brain knows and can do
type WishlistContextType = {
  wishlist: any[];
  toggleWishlist: (product: any) => void;
  isInWishlist: (product: any) => boolean;
  isMounted: boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load data when the app starts
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem("bj_wishlist");
      if (stored) {
        const parsed = JSON.parse(stored).filter((item: any) => item && (item._id || item.id));
        setWishlist(parsed);
      }
    } catch (error) {
      console.error("Failed to load wishlist", error);
      setWishlist([]);
    }
  }, []);

  // The function to add/remove items globally
  const toggleWishlist = (product: any) => {
    if (!product) return;
    const productId = product._id || product.id;

    setWishlist((currentList) => {
      const exists = currentList.find((item) => (item._id || item.id) === productId);
      let newList;
      
      if (exists) {
        // Remove it
        newList = currentList.filter((item) => (item._id || item.id) !== productId);
      } else {
        // Add it
        newList = [...currentList, product];
      }

      // Save to memory
      localStorage.setItem("bj_wishlist", JSON.stringify(newList));
      return newList; // This instantly triggers the Navbar to update!
    });
  };

  // Check if an item is liked
  const isInWishlist = (productOrId: any) => {
    if (!productOrId) return false;
    const idToCheck = typeof productOrId === 'string' ? productOrId : (productOrId._id || productOrId.id);
    return wishlist.some((item) => (item._id || item.id) === idToCheck);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, isMounted }}>
      {children}
    </WishlistContext.Provider>
  );
}

// Helper hook to use the brain anywhere
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}