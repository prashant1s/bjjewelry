"use client";

import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

// ─── Subcategory data ────────────────────────────────────────────────────────
const CATEGORY_OPTIONS: { label: string; subcategories: { label: string; value: string }[] }[] = [
  {
    label: "Anklets",
    subcategories: [
      { label: "Classic Chain Anklets", value: "classic-chain-anklets" },
      { label: "Beaded Anklets", value: "beaded-anklets" },
      { label: "Charm Anklets", value: "charm-anklets" },
      { label: "Layered Anklets", value: "layered-anklets" },
      { label: "Adjustable Anklets", value: "adjustable-anklets" },
      { label: "Oxidised Anklets", value: "oxidised-anklets" },
      { label: "Temple Style Anklets", value: "temple-style-anklets" },
      { label: "Tribal Anklets", value: "tribal-anklets" },
      { label: "Bridal Heavy Anklets", value: "bridal-heavy-anklets" },
      { label: "Minimal Anklets", value: "minimal-anklets" },
      { label: "Personalized Anklets", value: "personalized-anklets" },
    ],
  },
  {
    label: "Bangles",
    subcategories: [
      { label: "Classic Plain Bangles", value: "classic-plain-bangles" },
      { label: "Kada Bangles", value: "kada-bangles" },
      { label: "Openable Bangles", value: "openable-bangles" },
      { label: "Cuff Bangles", value: "cuff-bangles" },
      { label: "Stackable Bangles", value: "stackable-bangles" },
      { label: "Stone Studded Bangles", value: "stone-studded-bangles" },
      { label: "Temple Bangles", value: "temple-bangles" },
      { label: "Oxidised Bangles", value: "oxidised-bangles" },
      { label: "Meenakari Bangles", value: "meenakari-bangles" },
      { label: "Bridal Bangles", value: "bridal-bangles" },
      { label: "Minimal Bangles", value: "minimal-bangles" },
    ],
  },
  {
    label: "Phone Covers",
    subcategories: [
      { label: "Chain Strap Phone Covers", value: "chain-strap-phone-covers" },
      { label: "Pearl Phone Covers", value: "pearl-phone-covers" },
      { label: "Metallic Finish Covers", value: "metallic-finish-covers" },
      { label: "Customized Logo Covers", value: "customized-logo-covers" },
      { label: "Designer Embellished Covers", value: "designer-embellished-covers" },
      { label: "Minimal Transparent Covers", value: "minimal-transparent-covers" },
      { label: "Luxury Decorative Covers", value: "luxury-decorative-covers" },
    ],
  },
  {
    label: "Belly Chain",
    subcategories: [
      { label: "Classic Waist Chains", value: "classic-waist-chains" },
      { label: "Layered Belly Chains", value: "layered-belly-chains" },
      { label: "Charm Belly Chains", value: "charm-belly-chains" },
      { label: "Minimal Waist Chains", value: "minimal-waist-chains" },
      { label: "Bridal Kamarband", value: "bridal-kamarband" },
      { label: "Temple Kamarband", value: "temple-kamarband" },
      { label: "Beaded Waist Chains", value: "beaded-waist-chains" },
      { label: "Adjustable Belly Chains", value: "adjustable-belly-chains" },
    ],
  },
  {
    label: "Bracelets - Men",
    subcategories: [
      { label: "Chain Bracelets", value: "men-chain-bracelets" },
      { label: "Cuban Link Bracelets", value: "cuban-link-bracelets" },
      { label: "Rope Bracelets", value: "rope-bracelets" },
      { label: "Leather + Silver Bracelets", value: "leather-silver-bracelets" },
      { label: "Kada Bracelets", value: "kada-bracelets" },
      { label: "Beaded Bracelets", value: "men-beaded-bracelets" },
      { label: "ID Plate Bracelets", value: "id-plate-bracelets" },
    ],
  },
  {
    label: "Bracelets - Women",
    subcategories: [
      { label: "Charm Bracelets", value: "charm-bracelets" },
      { label: "Tennis Bracelets", value: "tennis-bracelets" },
      { label: "Cuff Bracelets", value: "cuff-bracelets" },
      { label: "Chain Bracelets", value: "women-chain-bracelets" },
      { label: "Adjustable Bracelets", value: "adjustable-bracelets" },
      { label: "Stone Studded Bracelets", value: "stone-studded-bracelets" },
      { label: "Minimal Bracelets", value: "minimal-bracelets" },
    ],
  },
  {
    label: "Bracelets - Unisex",
    subcategories: [
      { label: "Personalized Bracelets", value: "personalized-bracelets" },
      { label: "Engraved Bracelets", value: "engraved-bracelets" },
    ],
  },
  {
    label: "Chains - Men",
    subcategories: [
      { label: "Cuban Chain", value: "cuban-chain" },
      { label: "Rope Chain", value: "rope-chain" },
      { label: "Franco Chain", value: "franco-chain" },
      { label: "Figaro Chain", value: "figaro-chain" },
      { label: "Box Chain", value: "men-box-chain" },
      { label: "Thick Statement Chains", value: "thick-statement-chains" },
    ],
  },
  {
    label: "Chains - Women",
    subcategories: [
      { label: "Cable Chain", value: "cable-chain" },
      { label: "Snake Chain", value: "snake-chain" },
      { label: "Box Chain", value: "women-box-chain" },
      { label: "Paperclip Chain", value: "paperclip-chain" },
      { label: "Bead Chain", value: "bead-chain" },
      { label: "Dainty Chains", value: "dainty-chains" },
    ],
  },
  {
    label: "Chains - Unisex",
    subcategories: [
      { label: "Pendant Chains", value: "pendant-chains" },
      { label: "Layering Chains", value: "layering-chains" },
    ],
  },
  {
    label: "Necklace",
    subcategories: [
      { label: "Pendant Necklaces", value: "pendant-necklaces" },
      { label: "Layered Necklaces", value: "layered-necklaces" },
      { label: "Choker Necklaces", value: "choker-necklaces" },
      { label: "Statement Necklaces", value: "statement-necklaces" },
      { label: "Temple Necklaces", value: "temple-necklaces" },
      { label: "Oxidised Necklaces", value: "oxidised-necklaces" },
      { label: "Bridal Necklaces", value: "bridal-necklaces" },
      { label: "Gemstone Necklaces", value: "gemstone-necklaces" },
      { label: "Minimal Necklaces", value: "minimal-necklaces" },
      { label: "Personalized Necklaces", value: "personalized-necklaces" },
    ],
  },
  {
    label: "Purse",
    subcategories: [
      { label: "Clutch Bags", value: "clutch-bags" },
      { label: "Evening Bags", value: "evening-bags" },
      { label: "Chain Strap Purses", value: "chain-strap-purses" },
      { label: "Beaded Purses", value: "beaded-purses" },
      { label: "Metallic Frame Purses", value: "metallic-frame-purses" },
      { label: "Designer Embellished Bags", value: "designer-embellished-bags" },
      { label: "Mini Handbags", value: "mini-handbags" },
      { label: "Customized Logo Bags", value: "customized-logo-bags" },
    ],
  },
  {
    label: "Watch - Men",
    subcategories: [
      { label: "Metal Strap Watches", value: "metal-strap-watches" },
      { label: "Chronograph Watches", value: "chronograph-watches" },
      { label: "Minimal Watches", value: "men-minimal-watches" },
      { label: "Luxury Statement Watches", value: "luxury-statement-watches" },
      { label: "Skeleton Watches", value: "skeleton-watches" },
    ],
  },
  {
    label: "Watch - Women",
    subcategories: [
      { label: "Bracelet Watches", value: "bracelet-watches" },
      { label: "Minimal Slim Watches", value: "minimal-slim-watches" },
      { label: "Stone Studded Watches", value: "stone-studded-watches" },
      { label: "Fashion Watches", value: "fashion-watches" },
      { label: "Designer Watches", value: "designer-watches" },
    ],
  },
  {
    label: "Watch - Unisex",
    subcategories: [
      { label: "Smart Casual Watches", value: "smart-casual-watches" },
      { label: "Custom Logo Watches", value: "custom-logo-watches" },
    ],
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────
interface FilterSidebarProps {
  filters: {
    subcategories: string[];
    metals: string[];
  };
  onChange: (newFilters: any) => void;
  metalOptions: { label: string; value: string }[];
}

export function FilterSidebar({ filters, onChange, metalOptions }: FilterSidebarProps) {
  // Which category groups are expanded
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) =>
      prev.includes(label) ? prev.filter((g) => g !== label) : [...prev, label]
    );
  };

  const handleSubcategoryChange = (value: string) => {
    let next = [...filters.subcategories];
    if (next.includes(value)) {
      next = next.filter((v) => v !== value);
    } else {
      next.push(value);
    }
    onChange({ subcategories: next });
  };

  const handleMetalChange = (metalValue: string) => {
    let newMetals = [...filters.metals];
    if (newMetals.includes(metalValue)) {
      newMetals = newMetals.filter((m) => m !== metalValue);
    } else {
      newMetals.push(metalValue);
    }
    onChange({ metals: newMetals });
  };

  const hasActiveFilters = filters.subcategories.length > 0 || filters.metals.length > 0;

  return (
    <div className="space-y-8 bg-white p-6 lg:p-0 rounded-lg lg:rounded-none border lg:border-none border-gray-100">

      {/* ── SUBCATEGORY Section ── */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
          Category
        </h3>

        <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
          {CATEGORY_OPTIONS.map((group) => {
            const isOpen = openGroups.includes(group.label);
            const activeInGroup = group.subcategories.filter((s) =>
              filters.subcategories.includes(s.value)
            ).length;

            return (
              <div key={group.label} className="border-b border-gray-100 last:border-none">
                {/* Group header */}
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="w-full flex items-center justify-between py-2.5 text-left"
                >
                  <span className="text-[13px] font-medium text-gray-800 tracking-wide">
                    {group.label}
                    {activeInGroup > 0 && (
                      <span className="ml-1.5 text-[11px] text-[#C9A84C] font-semibold">
                        ({activeInGroup})
                      </span>
                    )}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {/* Subcategory list */}
                {isOpen && (
                  <div className="pb-2 space-y-2 pl-1">
                    {group.subcategories.map((sub) => (
                      <div key={sub.value} className="flex items-center justify-between group">
                        <label
                          htmlFor={sub.value}
                          className="text-[12px] text-gray-600 tracking-wide cursor-pointer flex-1 leading-snug"
                        >
                          {sub.label}
                        </label>
                        <input
                          type="checkbox"
                          id={sub.value}
                          checked={filters.subcategories.includes(sub.value)}
                          onChange={() => handleSubcategoryChange(sub.value)}
                          className="w-3.5 h-3.5 border-gray-300 rounded text-[#C9A84C] focus:ring-[#C9A84C] cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── METAL PURITY Section (unchanged) ── */}
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
                className="w-4 h-4 border-gray-300 rounded text-[#C9A84C] focus:ring-[#C9A84C] cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Clear All Filters ── */}
      {hasActiveFilters && (
        <button
          onClick={() => onChange({ subcategories: [], metals: [] })}
          className="w-full text-center text-xs text-[#C9A84C] hover:text-gray-900 font-medium uppercase tracking-widest pt-6 border-t border-gray-100 flex items-center justify-center gap-2"
        >
          <X className="w-3.5 h-3.5" />
          Clear All Filters
        </button>
      )}
    </div>
  );
}