"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
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
  { label: "Blog", href: "/blog" },
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
    <>
      <style>{`
        .nav-gold-underline {
          position: relative;
          white-space: nowrap;
        }
        .nav-gold-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: ${GOLD};
          transition: width 0.3s ease;
        }
        .nav-gold-underline:hover::after {
          width: 100%;
        }
      `}</style>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-yellow-200/40"
            : "bg-white border-b border-yellow-200/30"
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 md:h-24 gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
              <video
                src="/bj-jwelery-logo.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ height: "68px", width: "auto", objectFit: "contain" }}
              />
              <div className="flex flex-col items-start justify-center">
                <span
                  className="text-base lg:text-xl font-light tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-serif)", color: "#1a1a1a" }}
                >
                  BJ{" "}
                  <span style={{ fontFamily: "var(--font-serif)", color: GOLD }}>
                    JEWELRY
                  </span>
                </span>
                <span
                  className="hidden lg:block text-[8px] tracking-[0.22em] uppercase mt-0.5"
                  style={{ color: GOLD }}
                >
                  Founded 2007 · Hyderabad & Chennai
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 flex-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="nav-gold-underline flex items-center gap-0.5 text-[10px] tracking-[0.13em] uppercase font-medium transition-colors"
                    style={{ color: activeDropdown === link.label ? GOLD : NAV_TEXT }}
                    aria-haspopup={link.children ? "true" : undefined}
                    aria-expanded={link.children ? activeDropdown === link.label : undefined}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200 shrink-0",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                      <div className="bg-white border border-yellow-200 shadow-xl min-w-[210px] py-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-[10px] tracking-widest uppercase text-neutral-500 transition-colors hover:bg-yellow-50"
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

          {/* Right Actions */}
          <div className="flex items-center gap-4">
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
            <button
              className="transition-colors"
              style={{ color: NAV_TEXT }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = NAV_TEXT)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>

              {/* Divider */}
              <div className="hidden lg:block w-px h-5 bg-yellow-200 mx-1" />

              {/* Login */}
              <Link
                href="/login"
                className="hidden lg:inline-flex items-center gap-1.5 text-[10px] tracking-[0.13em] uppercase font-medium border rounded-full py-2 px-4 transition-all duration-200"
                style={{ color: GOLD, borderColor: GOLD }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GOLD;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
                }}
              >
                {/* <User className="w-3.5 h-3.5" /> */}
                Login
              </Link>

              {/* Book Appointment */}
              <Link
                href="/appointments"
                className="hidden lg:inline-flex btn-gold text-[10px] py-2 px-4 rounded-full whitespace-nowrap"
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
          <div className="lg:hidden bg-white border-t border-yellow-200/40">
            <nav className="px-5 py-6 space-y-1" aria-label="Mobile navigation">
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
                    <div className="pl-4 space-y-1 mt-1 mb-2">
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

              <div className="flex items-center gap-5 pt-4 pb-2 border-t border-yellow-100">
                <button style={{ color: NAV_TEXT }} aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
                <button style={{ color: NAV_TEXT }} aria-label="Wishlist">
                  <Heart className="w-5 h-5" />
                </button>
                <button style={{ color: NAV_TEXT }} aria-label="Cart">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-3 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="w-full text-center block text-[10px] tracking-[0.15em] uppercase font-medium border py-2.5 px-5 rounded-full"
                  style={{ color: GOLD, borderColor: GOLD }}
                  onClick={closeMobile}
                >
                  Login
                </Link>
                <Link
                  href="/appointments"
                  className="btn-gold w-full text-center block text-[10px] rounded-full"
                  onClick={closeMobile}
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}