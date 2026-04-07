import Link from "next/link";
import { SocialIcon } from "react-social-icons";
// import { MessageCircle } from "lucide-react";

import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  TwitterIcon,
} from "lucide-react";

const COLLECTIONS = [
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Gold Jewellery", href: "/collections/gold" },
  { label: "Silver Jewellery", href: "/collections/silver" },
  { label: "All Collections", href: "/collections" },
  { label: "Corporate Gifting", href: "/collections/corporate-gifting" },
  { label: "Book an Appointment", href: "/appointments" },
  { label: "Video Call Shopping", href: "/appointments" },
];

const TRADE = [
  { label: "Payment", href: "/information/Payment" },
  { label: "Careers", href: "/information/careers" },
  { label: "B2B Partnership", href: "/trade/b2b" },
  { label: "Bulk Ordering", href: "/trade/bulk" },
  { label: "Export & Import", href: "/trade/export" },
  { label: "Return & Refund", href: "/trade/return-refund" },
  { label: "BJ Jewelry Club", href: "/trade/BJ-Jewelry-Club" },
  { label: "Store Location", href: "/trade/Store-Location" },
];

const INFORMATION = [
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Certifications", href: "/information/certifications" },
  { label: "Press & Media", href: "/information/Press-Media" },
  { label: "Blog & Journal", href: "/information/blog" },
  { label: "About BJ Jewelry", href: "/about" },
  { label: "News & Events", href: "/information/Press-Media" },
  { label: "Subscribe to Our Newsletter", href: "/information/Subscribe" },
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
            <div className="flex gap-2">
              {[
                "https://wa.me/9444963811",
                "https://www.instagram.com/bjjewelryb2b/",
                "https://www.facebook.com/bjjewelryb2b",
                "https://www.linkedin.com/company/bjjewelry/",
                "https://pinterest.com/bjjewelryb2b",
                "https://youtube.com/",
                "https://twitter.com/",
              ].map((url) => (
                <SocialIcon
                  key={url}
                  url={url}
                  target="_blank"
                  // 36px matches your original w-9 h-9 sizing exactly!
                  style={{ height: 36, width: 36 }}
                  // Keeps the smooth hover pop effect
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                />
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
                <li key={item.label}>
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
                <li key={item.label}>
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
