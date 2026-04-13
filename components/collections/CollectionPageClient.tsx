"use client";

import { useState, useCallback, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FilterSidebar } from "./FilterSidebar";
import { ProductGrid } from "./ProductGrid";
import { SortOption } from "@/app/collections/[slug]/page";
import { SlidersHorizontal, Loader2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  metal: string;
  moq: string;    
  badge?: string;
  purity: string | null;
}

interface Filters {
  minPrice: number;
  maxPrice: number;
  metals: string[];
  sortBy: SortOption;
}

export default function CollectionPageClient({
  initialProducts,
  currentFilters,
}: {
  initialProducts: Product[];
  categoryTitle: string;
  currentFilters: Filters;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition(); // Smooths data updates
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Define metal options based on input image
  const metalOptions = [
    { label: "24K Gold", value: "GOLD_24K" },
    { label: "22K Gold", value: "GOLD_22K" },
    { label: "18K Gold", value: "GOLD_18K" },
    { label: "Silver", value: "SILVER" },
  ];

  // Function to update URL when filters change
  const updateFilters = useCallback(
    (newFilters: Partial<Filters>) => {
      startTransition(() => {
        // Create a new URLSearchParams object based on current URL
        const params = new URLSearchParams(searchParams.toString());
        const mergedFilters = { ...currentFilters, ...newFilters };

        // Set Price Params
        params.set("minPrice", mergedFilters.minPrice.toString());
        params.set("maxPrice", mergedFilters.maxPrice.toString());

        // Set Metals Params (comma-separated string)
        if (mergedFilters.metals.length > 0) {
          params.set("metal", mergedFilters.metals.join(","));
        } else {
          params.delete("metal");
        }

        // Set Sorting
        params.set("sort", mergedFilters.sortBy);

        // Update the URL without reloading the full page (soft navigation)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [router, pathname, searchParams, currentFilters]
  );

  return (
    <div className="flex flex-col lg:flex-row gap-x-10 gap-y-8 relative">
      
      {/* Loading Overlay when filters are processing */}
      {isPending && (
        <div className="absolute inset-0 bg-white/60 z-50 flex items-center justify-center backdrop-blur-[2px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#C9A84C]" />
        </div>
      )}

      {/* Mobile Filter Button */}
      <button 
        onClick={() => setMobileFiltersOpen(true)}
        className="lg:hidden inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-md w-full justify-center bg-white shadow-sm font-medium text-sm"
      >
        <SlidersHorizontal className="w-4 h-4 text-[#C9A84C]" />
        Filter & Sort
      </button>

      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden lg:block w-[260px] flex-shrink-0">
        <FilterSidebar
          filters={currentFilters}
          onChange={updateFilters}
          metalOptions={metalOptions}
        />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Top Bar (Results count + Sorting) */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-5">
          <p className="text-sm text-gray-500 tracking-wide">
            Showing <span className="font-semibold text-gray-900">{initialProducts.length}</span> results
          </p>
          
          <select 
            value={currentFilters.sortBy}
            onChange={(e) => updateFilters({ sortBy: e.target.value as SortOption })}
            className="text-sm border-none focus:ring-0 text-gray-900 font-medium pl-0 pr-8 bg-transparent"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <ProductGrid products={initialProducts} />
      </main>

      {/* Mobile Filter Drawer (Future improvement if needed) */}
      {/* For now we just stack them, but this is where drawer logic would go */}
    </div>
  );
}