"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Search,
  Heart,
  ChevronDown,
  User as UserIcon,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

import { useWishlist } from "@/hooks/WishlistContext"; 

// --- Minimal Categorized Data ---
const MINIMAL_COLLECTIONS = [
  {
    title: "Fine Jewellery",
    items: [
      { label: "Anklets", href: "/collections/anklets" },
      { label: "Bangles", href: "/collections/bangles" },
      { label: "Necklaces", href: "/collections/necklaces" },
      { label: "Belly Chains", href: "/collections/belly-chains" },
    ],
  },
  {
    title: "Chains & Bracelets",
    items: [
      { label: "Men's Bracelets", href: "/collections/mens-bracelets" },
      { label: "Women's Bracelets", href: "/collections/womens-bracelets" },
      { label: "Men's Chains", href: "/collections/mens-chains" },
      { label: "Women's Chains", href: "/collections/womens-chains" },
      { label: "Unisex Styles", href: "/collections/unisex-styles" },
    ],
  },
  {
    title: "Accessories & Timepieces",
    items: [
      { label: "Men's Watches", href: "/collections/mens-watches" },
      { label: "Women's Watches", href: "/collections/womens-watches" },
      { label: "Luxury Purses", href: "/collections/luxury-purses" },
      { label: "Phone Covers", href: "/collections/phone-covers" },
    ],
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Collections", href: "/collections" },
  {
    label: "Trade & Services",
    href: "/trade",
    children: [
      { label: "B2B Partnership", href: "/trade/b2b" },
      { label: "Export & Import", href: "/trade/export" },
      { label: "Return & Refund", href: "/trade/return-refund" },
      { label: "BJ Jewelry Club", href: "/trade/BJ-Jewelry-Club" },
      { label: "Bulk Ordering", href: "/trade/bulk" },
      { label: "Careers", href: "/trade/careers" },
      { label: "Payment", href: "/trade/Payment" },
      { label: "Faq", href: "/#faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const GOLD = "#c9a030";
const NAV_TEXT = "#4a4a4a";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  const { wishlist, isMounted } = useWishlist();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  // Flatten collections so we can search through them easily
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const allItems = MINIMAL_COLLECTIONS.flatMap(group => group.items);
    return allItems.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-yellow-200/40"
          : "bg-white border-b border-yellow-200/30"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24 relative">
          {/* Logo Section */}
          <Link href="/" className="flex items-center md:mt-2 gap-2 lg:gap-4">
            <div className="w-[60px] md:w-[70px] min-w-[60px] md:min-w-[70px] flex-shrink-0">
              <Image
                src="/logo.png"
                alt="BJ Jewelry"
                width={70}
                height={70}
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-center mt-1">
              <span
                className="text-3xl md:text-3xl lg:text-4xl font-medium tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
              >
                BJ{" "}
                <span className="ml-2" style={{ color: GOLD }}>
                  JEWELRY
                </span>
              </span>
              <span
                className="hidden lg:block text-[10px] font-semibold tracking-[0.3em] uppercase mt-1 whitespace-nowrap"
                style={{ color: "#9ca3af" }}
              >
                Founded 2007 · Hyderabad & Chennai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center justify-center gap-6 lg:gap-10 h-full"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() =>
                  (link.children || link.label === "Collections") &&
                  setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors h-full px-2"
                  style={{
                    color: activeDropdown === link.label ? GOLD : NAV_TEXT,
                  }}
                >
                  {link.label}
                  {(link.children || link.label === "Collections") && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* MINIMAL COLLECTIONS DROPDOWN */}
                {link.label === "Collections" &&
                  activeDropdown === "Collections" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-auto transition-opacity duration-200">
                      <div className="bg-white border border-yellow-200 shadow-xl rounded-sm p-8 flex gap-12 w-max">
                        {MINIMAL_COLLECTIONS.map((colGroup) => (
                          <div key={colGroup.title} className="flex flex-col ">
                            <h3 className="text-[10px] py-0.5 font-bold text-[#1a1a1a] tracking-[0.2em] uppercase mb-4 border-b border-yellow-100 pb-2">
                              {colGroup.title}
                            </h3>
                            <div className="space-y-4">
                              {colGroup.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block text-[11px] tracking-widest uppercase text-neutral-500 hover:text-[#c9a030] transition-colors whitespace-nowrap"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* STANDARD DROPDOWN */}
                {link.children &&
                  link.label !== "Collections" &&
                  activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-opacity duration-200">
                      <div className="bg-white border border-yellow-200 shadow-xl min-w-[220px] py-2 rounded-sm">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-2 text-[11px] tracking-widest uppercase text-neutral-500 transition-colors hover:text-[#c9a030] hover:bg-yellow-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4 relative">
            <Link
              href={session ? "/account" : "/login"}
              className="hidden md:flex text-[#4a4a4a] hover:text-[#C9A84C] transition-colors"
            >
              <UserIcon className="w-5 h-5" />
            </Link>
            
            {/* Search Toggle Button */}
            <button 
              className="hidden md:flex text-[#4a4a4a] hover:text-[#C9A84C] transition-colors"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchQuery(""); // clear when closing
              }}
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>

            {/* Search Panel Dropdown */}
            {isSearchOpen && (
              <div className="absolute top-[150%] right-0 mt-2 w-[300px] md:w-[380px] lg:w-[450px] bg-white border border-[#f2d98a]/50 shadow-2xl rounded-sm p-5 z-50">
                <div className="flex items-center border-b border-gray-200 pb-3">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search collections (e.g. Bangles)..."
                    className="w-full text-sm outline-none placeholder:text-gray-400 text-gray-800 bg-transparent"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="mt-4 max-h-72 overflow-y-auto pr-1">
                  {searchQuery.trim() === "" ? (
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] text-center py-6">
                      Type to explore collections
                    </p>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-1">
                      {searchResults.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-[12px] uppercase tracking-widest text-gray-700 hover:text-[#c9a030] hover:bg-[#FAF7F2] py-2.5 px-3 rounded transition-colors"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] text-center py-6">
                      No collections found
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* WISHLIST BUTTON (Desktop) */}
            <Link
              href="/wishlist"
              className="hidden md:flex relative text-[#4a4a4a] hover:text-[#C9A84C] transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {/* Force badge to always render so we can confirm context is working */}
              {isMounted && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C9A84C] text-white text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              href="/appointments"
              className="hidden md:inline-flex btn-gold text-[10px] py-2.5 px-5 rounded-full"
            >
              Book Appointment
            </Link>
            <button
              className="md:hidden text-[#4a4a4a]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-yellow-200/40">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between border-b border-gray-50">
                  <Link
                    href={link.href}
                    className="block py-4 text-[11px] tracking-[0.15em] uppercase font-medium text-[#4a4a4a]"
                    onClick={
                      !link.children && link.label !== "Collections"
                        ? closeMobile
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                  {(link.children || link.label === "Collections") && (
                    <button
                      onClick={() => toggleMobileExpanded(link.label)}
                      className="p-4 text-[#4a4a4a]"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          mobileExpanded === link.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Collections Submenu */}
                {link.label === "Collections" &&
                  mobileExpanded === "Collections" && (
                    <div className="pl-4 py-2 space-y-4 bg-gray-50">
                      {MINIMAL_COLLECTIONS.map((colGroup) => (
                        <div key={colGroup.title}>
                          <p className="text-[10px] font-bold text-[#c9a030] uppercase mb-2">
                            {colGroup.title}
                          </p>
                          <div className="space-y-2 pl-2">
                            {colGroup.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="block text-[10px] text-gray-500 uppercase tracking-widest"
                                onClick={closeMobile}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                {/* Mobile Trade Submenu */}
                {link.children &&
                  link.label !== "Collections" &&
                  mobileExpanded === link.label && (
                    <div className="pl-6 py-2 space-y-3 bg-gray-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-[10px] text-gray-500 uppercase tracking-widest"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
            
            {/* WISHLIST BUTTON (Mobile) */}
            <div className="border-b border-gray-50">
              <Link
                href="/wishlist"
                className="flex items-center justify-between py-4 text-[11px] tracking-[0.15em] uppercase font-medium text-[#4a4a4a]"
                onClick={closeMobile}
              >
                Wishlist
                {isMounted && (
                  <span className="bg-[#C9A84C] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </div>

            <div className="pt-6">
              <Link
                href="/appointments"
                className="btn-gold w-full text-center block text-[10px] py-4"
                onClick={closeMobile}
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}