import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const COLLECTIONS = [
  { label: "Bridal Jewellery", href: "/collections/bridal" },
  { label: "Men's Collection", href: "/collections/mens" },
  { label: "Silver Jewellery", href: "/collections/silver" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
];

const TRADE = [
  { label: "B2B Partnership", href: "/trade/b2b" },
  { label: "Bulk Ordering", href: "/trade/bulk" },
  { label: "OEM Manufacturing", href: "/trade/oem" },
  { label: "Export Programme", href: "/trade/export" },
  { label: "Corporate Gifting", href: "/trade/corporate" },
  { label: "Repair & Restore", href: "/trade/repair" },
];

const INFORMATION = [
  { label: "About BJ Jewelry", href: "/about" },
  { label: "Certifications", href: "/information/certifications" },
  { label: "Blog & Journal", href: "/information/blog" },
  { label: "Careers", href: "/information/careers" },
  { label: "Press & Media", href: "/information/press" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3
                className="text-xl font-light tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                BJ <span className="gold-text">JEWELRY</span>
              </h3>
              <p className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase mt-1">
                Est. 2007 · Hyderabad & Chennai
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Gold, diamonds, silver, gemstones — every jewel, every occasion, one unwavering commitment to beauty since 2007.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/bjjewelry/posts/?feedView=all", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">Collections</h4>
            <ul className="space-y-2.5">
              {COLLECTIONS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">Trade & Services</h4>
            <ul className="space-y-2.5">
              {TRADE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">Information</h4>
            <ul className="space-y-2.5">
              {INFORMATION.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 BJ Jewelry. All rights reserved. Est. 2007, Hyderabad · Now in Chennai.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Sale", href: "/terms" },
              { label: "Hallmark Policy", href: "/hallmark" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
