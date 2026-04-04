import Link from "next/link";
import { MessageCircle } from "lucide-react";

import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  TwitterIcon,
} from "lucide-react";

const COLLECTIONS = [
  { label: "New Arrivals", href: "/collections/bridal" },
  { label: "Gold Jewellery", href: "/collections/bridal" },
  { label: "Silver Jewellery", href: "/collections/bridal" },
  { label: "All Collections", href: "/collections/bridal" },
  { label: "Corporate Gifting", href: "/collections/corporate" },
  { label: "Book an Appointment", href: "/collections/new-arrivals" },
  { label: "Video Call Shopping", href: "/collections/new-arrivals" },
];

const TRADE = [
  { label: "Payment", href: "/information/new-arrivals" },
  { label: "Careers", href: "/information/careers" },
  { label: "B2B Partnership", href: "/trade/b2b" },
  { label: "Bulk Ordering", href: "/trade/bulk" },
  { label: "Export & Import", href: "/trade/export" },
  { label: "Return & Refund", href: "/trade/repair" },
  { label: "BJ Jewelry Club", href: "/trade/new-arrivals" },
  { label: "Store Location", href: "/trade/new-arrivals" },
];

const INFORMATION = [
  { label: "FAQ", href: "/information/oem" },
  { label: "Contact Us", href: "/contact" },
  { label: "Certifications", href: "/information/certifications" },
  { label: "Press & Media", href: "/information/about" },
  { label: "Blog & Journal", href: "/information/blog" },
  { label: "About BJ Jewelry", href: "/about" },
  { label: "News & Events", href: "/information/new-arrivals" },
  { label: "Subscribe to Our Newsletter", href: "/information/new-arrivals" },
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
              Gold, diamonds, silver, gemstones — every jewel, every occasion,
              one unwavering commitment to beauty since 2007.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bjjewelryb2b/", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/bjjewelryb2b", label: "Facebook" },
                {
                  icon: MessageCircle,
                  href: "https://wa.me/91XXXXXXXXXX",
                  label: "WhatsApp",
                },

               
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Twitter, href: "#", label: "Twitter" },

                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/bjjewelry/posts/?feedView=all",
                  label: "LinkedIn",
                },
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
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Collections
            </h4>
            <ul className="space-y-2.5">
              {COLLECTIONS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Trade & Services
            </h4>
            <ul className="space-y-2.5">
              {TRADE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Information
            </h4>
            <ul className="space-y-2.5">
              {INFORMATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
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
            © 2025 BJ Jewelry. All rights reserved. Est. 2007, Hyderabad · Now
            in Chennai.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/about" },
              { label: "Terms of Sale", href: "/about" },
              { label: "Hallmark Policy", href: "/about" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
