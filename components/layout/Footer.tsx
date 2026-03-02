import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const COLLECTIONS = [
  { label: "Bridal Jewellery", href: "/collections/bridal" },
  { label: "Diamond Collection", href: "/collections/diamond" },
  { label: "Temple Jewellery", href: "/collections/temple" },
  { label: "Kundan & Polki", href: "/collections/kundan-polki" },
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
  { label: "Gold Investment", href: "/trade/investment" },
  { label: "Repair & Restore", href: "/trade/repair" },
];

const INFORMATION = [
  { label: "About BJ Jewelry", href: "/about" },
  { label: "Certifications", href: "/certifications" },
  { label: "Gold Rate Today", href: "/gold-rate" },
  { label: "Blog & Journal", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Press & Media", href: "/press" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
            Visit Us In Person
          </p>
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Experience the Craft. Feel the Legacy.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/appointments" className="btn-gold">
              📅 Book Appointment
            </Link>
            <Link
              href="https://wa.me/919676343210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              📹 Video Consultation
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-white/60">
            <a href="tel:+919676343210" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
              <span>📞</span> +91 96763 43210
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <a href="mailto:hello@bjjewelry.in" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
              <span>✉️</span> hello@bjjewelry.in
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <span>📍</span> Hyderabad & Chennai
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <a
              href="https://wa.me/919676343210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

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
                { icon: Linkedin, href: "#", label: "LinkedIn" },
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
