"use client";

import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Required styles for rc-slider
import { X } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    metals: string[];
  };
  onChange: (newFilters: any) => void;
  metalOptions: { label: string; value: string }[];
}

export function FilterSidebar({ filters, onChange, metalOptions }: FilterSidebarProps) {
  // Define absolute price limits for the slider
  const PRICE_ABS_MIN = 0;
  const PRICE_ABS_MAX = 200000; // 2 Lakh as absolute max for slider range

  // 1. Local state for price range (Stops URL updates while sliding)
  const [localPriceRange, setLocalPriceRange] = useState([
    filters.minPrice,
    filters.maxPrice || PRICE_ABS_MAX,
  ]);

  // Sync local state when URL changes (e.g., reset)
  useEffect(() => {
    setLocalPriceRange([filters.minPrice, filters.maxPrice || PRICE_ABS_MAX]);
  }, [filters.minPrice, filters.maxPrice]);

  // Handle Metal Checkbox Changes
  const handleMetalChange = (metalValue: string) => {
    let newMetals = [...filters.metals];
    if (newMetals.includes(metalValue)) {
      newMetals = newMetals.filter((m) => m !== metalValue); // Uncheck
    } else {
      newMetals.push(metalValue); // Check
    }
    onChange({ metals: newMetals });
  };

  // Safe Number Formatter (Rupees)
  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  return (
    <div className="space-y-10 bg-white p-6 lg:p-0 rounded-lg lg:rounded-none border lg:border-none border-gray-100">
      
      {/* 2. PRICE RANGE Section (Matches image) */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-6">
          Price Range
        </h3>
        
        {/* rc-slider dual handle */}
        <div className="px-1.5 mb-5">
          <Slider
            range
            min={PRICE_ABS_MIN}
            max={PRICE_ABS_MAX}
            step={1000}
            value={localPriceRange}
            onChange={(value: any) => setLocalPriceRange(value)} // Updates local state
            onAfterChange={(value: any) => // Updates URL only when finished sliding
              onChange({ minPrice: value[0], maxPrice: value[1] })
            }
            trackStyle={[{ backgroundColor: "#C9A84C", height: 2 }]} // Gold track
            handleStyle={[
              { borderColor: "#C9A84C", height: 16, width: 16, marginTop: -7, backgroundColor: "#fff", boxShadow: 'none' },
              { borderColor: "#C9A84C", height: 16, width: 16, marginTop: -7, backgroundColor: "#fff", boxShadow: 'none' },
            ]}
            railStyle={{ backgroundColor: "#e5e7eb", height: 2 }} // Gray rail
          />
        </div>

        {/* Min/Max Input display */}
        <div className="flex items-center justify-between gap-3 text-sm">
          <div className="w-1/2 p-3 border border-gray-200 bg-gray-50 rounded text-center text-gray-900 font-medium">
            {formatCurrency(localPriceRange[0])}
          </div>
          <span className="text-gray-400">—</span>
          <div className="w-1/2 p-3 border border-gray-200 bg-gray-50 rounded text-center text-gray-900 font-medium">
            {formatCurrency(localPriceRange[1])}
          </div>
        </div>
      </div>

      {/* 3. METAL PURITY Section (Matches image) */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">
          Metal Purity
        </h3>
        <div className="space-y-3.5">
          {metalOptions.map((option) => (
            <div key={option.value} className="flex items-center justify-between group">
              <label 
                htmlFor={option.value}
                className="text-[13px] text-gray-700 tracking-wide font-medium cursor-pointer flex-1"
              >
                {option.label}
              </label>
              <input
                type="checkbox"
                id={option.value}
                checked={filters.metals.includes(option.value)}
                onChange={() => handleMetalChange(option.value)}
                className="w-4 h-4 border-gray-300 rounded text-[#C9A84C] focus:ring-[#C9A84C] cursor-pointer transition-colors"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Active Filters (Clear button) */}
      {(filters.metals.length > 0 || filters.minPrice > PRICE_ABS_MIN || filters.maxPrice < PRICE_ABS_MAX) && (
        <button 
          onClick={() => onChange({ minPrice: PRICE_ABS_MIN, maxPrice: PRICE_ABS_MAX, metals: [] })}
          className="w-full text-center text-xs text-[#C9A84C] hover:text-gray-900 font-medium uppercase tracking-widest pt-6 border-t border-gray-100 flex items-center justify-center gap-2"
        >
          <X className="w-3.5 h-3.5" />
          Clear All Filters
        </button>
      )}
    </div>
  );
}