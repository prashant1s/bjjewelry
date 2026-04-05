"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown, User as UserIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "New Arrivals", href: "/collections/new-arrivals" },
      { label: "Gold Jewellery", href: "/collections/gold" },
      { label: "All Collections", href: "/collections" },
      { label: "Corporate Gifting", href: "/collections/corporate-gifting" },
      { label: "Book an Appointment", href: "/appointments" },
      { label: "Silver Jewellery", href: "/collections/silver" },
      { label: "Video Call Shopping", href: "/appointments" },
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

const GOLD = "#c9a030";
const NAV_TEXT = "#4a4a4a";

export function Navbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-yellow-200/40"
          : "bg-white border-b border-yellow-200/30"
      )}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo Section */}
          <Link href="/" className="flex items-center md:mt-2 gap-2 lg:gap-4">
            
            {/* Static Image Container */}
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
            
            {/* Professional Text Logo */}
            <div className="flex flex-col items-start justify-center mt-1">
              <span
                className="text-3xl md:text-3xl lg:text-4xl font-medium tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
              >
                BJ{" "}
                <span
                  className="ml-2"
                  style={{ fontFamily: "var(--font-display)", color: GOLD }}
                >
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
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors"
                  style={{ color: activeDropdown === link.label ? GOLD : NAV_TEXT }}
                  aria-haspopup={link.children ? "true" : undefined}
                  aria-expanded={link.children ? activeDropdown === link.label : undefined}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                    <div className="bg-white border border-yellow-200 shadow-xl min-w-[220px] py-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-[11px] tracking-widest uppercase text-neutral-500 transition-colors hover:bg-yellow-50"
                          style={{ color: undefined }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
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
          <div className="flex items-center gap-4">
            <Link
              href={session ? "/account" : "/login"}
              className="hidden md:flex text-[#4a4a4a] hover:text-[#C9A84C] transition-colors"
              aria-label="Account"
            >
              <UserIcon className="w-5 h-5" />
            </Link>
            <button
              className="hidden md:flex transition-colors"
              style={{ color: NAV_TEXT }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = NAV_TEXT)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="hidden md:flex transition-colors"
              style={{ color: NAV_TEXT }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = NAV_TEXT)}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href="/appointments"
              className="hidden md:inline-flex btn-gold text-[10px] py-2.5 px-5 rounded-full"
            >
              Book Appointment
            </Link>
            <button
              className="md:hidden"
              style={{ color: NAV_TEXT }}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-yellow-200/40">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="block py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors"
                    style={{ color: NAV_TEXT }}
                    onClick={!link.children ? closeMobile : undefined}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() => toggleMobileExpanded(link.label)}
                      aria-label={`Toggle ${link.label}`}
                      aria-expanded={mobileExpanded === link.label}
                      className="p-1"
                      style={{ color: NAV_TEXT }}
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileExpanded === link.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {link.children && mobileExpanded === link.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-[10px] tracking-widest uppercase text-neutral-400 transition-colors hover:text-yellow-600"
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/appointments"
                className="btn-gold w-full text-center block text-[10px]"
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
