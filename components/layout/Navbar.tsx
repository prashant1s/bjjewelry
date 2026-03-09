"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "Trade & Services",
    href: "/trade",
  },
  { label: "Contact", href: "/contact" },
];

const SEARCH_DATA = [
  { name: 'Bridal Gold Set', cat: 'Bridal Splendour', icon: 'Crown' },
  { name: 'Diamond Necklace', cat: 'Diamond Reverie', icon: 'Gem' },
  { name: 'Temple Jewellery', cat: 'Sacred Geometry', icon: 'Star' },
  { name: 'Kundan Earrings', cat: 'Royal Meenakari', icon: 'Moon' },
  { name: 'Gold Bangles 22K', cat: 'Garden of Gold', icon: 'Ring' },
  { name: 'Silver Anklet', cat: 'Monsoon Botanicals', icon: 'Leaf' },
  { name: 'Men\'s Gold Chain', cat: 'The Masculine Line', icon: 'Link' },
  { name: 'Polki Necklace', cat: 'Royal Meenakari', icon: 'Moon' },
  { name: 'Gold Rings', cat: 'Garden of Gold', icon: 'Ring' },
  { name: 'Diamond Earrings', cat: 'Diamond Reverie', icon: 'Gem' },
  { name: 'Bridal Choker Set', cat: 'Bridal Splendour', icon: 'Crown' },
  { name: 'Custom Gold Design', cat: 'Bespoke', icon: 'Pencil' },
  { name: '24K Gold Investment Coins', cat: 'Investment Gold', icon: 'Coins' },
  { name: 'Hyderabad Collection', cat: 'BJ Jewelry', icon: 'MapPin' },
  { name: 'Chennai Store', cat: 'BJ Jewelry', icon: 'MapPin' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(SEARCH_DATA);
  const [mounted, setMounted] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        closeSearch();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [searchOpen]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    const q = value.trim().toLowerCase();
    if (!q) {
      setSearchResults(SEARCH_DATA);
    } else {
      const matches = SEARCH_DATA.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.cat.toLowerCase().includes(q)
      );
      setSearchResults(matches);
    }
  };

  const fillSearch = (term: string) => {
    setSearchQuery(term);
    handleSearch(term);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults(SEARCH_DATA);
    document.body.style.overflow = "";
  };

  const openSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#f2d98a]/40"
          : "bg-white border-b border-[#f2d98a]/30"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-serif)", color: "#1a1a1a" }}
            >
              BJ{" "}
              <span
                className="gold-text"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                JEWELRY
              </span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#4a4a4a] uppercase mt-0.5 flex items-center gap-1.5">
              <Gem className="w-3 h-3" style={{ color: "#C9A84C" }} />
              Since 2007 · Hyderabad & Chennai
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors",
                    "text-warm-gray hover:text-gold-500"
                  )}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-6">
            <button 
              onClick={openSearch}
              className="hidden md:flex text-[#4a4a4a] hover:text-[#C9A84C] transition-colors" 
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex text-[#4a4a4a] hover:text-[#C9A84C] transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-[#4a4a4a] hover:text-[#C9A84C] transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>

            <Link
              href="/appointments"
              className="hidden md:inline-flex btn-gold text-[10px] py-2.5 px-5"
            >
              Book Appointment
            </Link>

            <button
              className="md:hidden text-[#4a4a4a]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {mounted && searchOpen && (
        <div 
          className="search-overlay open"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeSearch();
            }
          }}
        >
          <div className="search-container">
            <button 
              onClick={closeSearch}
              className="absolute top-8 right-8 text-[#7a7a7a] hover:text-[#C9A84C] transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="search-label">Search BJ Jewelry</div>

            <div className="search-input-wrap">
              <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#7a7a7a" }} />
              <input
                ref={searchInputRef}
                type="text"
                className="search-input"
                placeholder="Search collections, jewellery, gold rates…"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            {searchQuery.trim() === "" ? (
              <div className="search-suggestions">
                <div className="search-suggest-label">Popular Searches</div>
                <div className="search-tags">
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Bridal Gold Set')}
                  >
                    Bridal Gold Set
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Diamond Necklace')}
                  >
                    Diamond Necklace
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('22K Bangles')}
                  >
                    22K Bangles
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Temple Jewellery')}
                  >
                    Temple Jewellery
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Gold Rings')}
                  >
                    Gold Rings
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Kundan Earrings')}
                  >
                    Kundan Earrings
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Silver Anklet')}
                  >
                    Silver Anklet
                  </button>
                  <button 
                    className="search-tag"
                    onClick={() => fillSearch('Custom Design')}
                  >
                    Custom Design
                  </button>
                </div>
              </div>
            ) : (
              <div className="search-results">
                {searchResults.length === 0 ? (
                  <div className="search-empty">
                    No results for "<em>{searchQuery}</em>" — try another term
                  </div>
                ) : (
                  searchResults.map((item, idx) => (
                    <div
                      key={idx}
                      className="search-result-item"
                      onClick={closeSearch}
                    >
                      <span className="search-result-icon">◆</span>
                      <span className="search-result-name">{item.name}</span>
                      <span className="search-result-cat">{item.cat}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}



      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#f2d98a]/40">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium text-[#4a4a4a] hover:text-[#C9A84C] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/appointments" className="btn-gold w-full text-center block text-[10px]" onClick={() => setMobileOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
