"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Bridal Jewellery", href: "/collections/bridal" },
      { label: "Diamond Collection", href: "/collections/diamond" },
      { label: "Temple Jewellery", href: "/collections/temple" },
      { label: "Kundan & Polki", href: "/collections/kundan-polki" },
      { label: "Men's Collection", href: "/collections/mens" },
      { label: "Silver Jewellery", href: "/collections/silver" },
      { label: "New Arrivals", href: "/collections/new-arrivals" },
    ],
  },
  {
    label: "Trade & Services",
    href: "/trade",
    children: [
      { label: "B2B Partnership", href: "/trade/b2b" },
      { label: "Bulk Ordering", href: "/trade/bulk" },
      { label: "OEM Manufacturing", href: "/trade/oem" },
      { label: "Export Programme", href: "/trade/export" },
      { label: "Corporate Gifting", href: "/trade/corporate" },
      { label: "Gold Investment", href: "/trade/investment" },
      { label: "Repair & Restore", href: "/trade/repair" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
            <span className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase mt-0.5">
              Founded 2007 · Hyderabad & Chennai
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors",
                    "text-[#4a4a4a] hover:text-[#C9A84C]"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                    <div className="bg-white border border-[#f2d98a] shadow-xl min-w-[220px] py-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-[11px] tracking-widest uppercase text-[#4a4a4a] hover:text-[#C9A84C] hover:bg-[#fdf8ec] transition-colors"
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

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-[#4a4a4a] hover:text-[#C9A84C] transition-colors" aria-label="Search">
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#f2d98a]/40">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium text-[#4a4a4a] hover:text-[#C9A84C] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-[10px] tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
