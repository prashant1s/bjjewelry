//19 years old in page add karo
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TRADE_SERVICES = [
  {
    title: "Payment",
    href: "/trade/payment",
    desc: "Collaborate with us for exclusive wholesale pricing and priority access to new collections.",
  },
  {
    title: "Careers",
    href: "/trade/careers",
    desc: "Streamlined processes for large volume orders with customized packaging solutions.",
  },
  {
    title: "B2B Partnership",
    href: "/trade/b2b",
    desc: "join us.",
  },
  {
    title: "Bulk Ordering",
    href: "/trade/bulk",
    desc: "Fully compliant international shipping, insurance, and export solutions.",
  },
  {
    title: "Export & Import",
    href: "/trade/export",
    desc: "Memorable, high-quality jewelry and gold coins for your employees or clients.",
  },
  {
    title: "Return & Refund",
    href: "/trade/return-refund",
    desc: "Secure your wealth with our verified gold bullion and investment programs.",
  },
  {
    title: "BJ Jewelry Club",
    href: "/trade/jewelry-club",
    desc: "Expert restoration and polishing services for heirloom and everyday pieces.",
  },
  {
    title: "Store Location",
    href: "/trade/store-location",
    desc: "Expert restoration and polishing services for heirloom and everyday pieces.",
  },
];

export default function TradeLandingPage() {
  return (
    <div className="min-h-[70vh] bg-[#FAF7F2] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Trade & <span className="text-[#C9A84C]">Services</span>
          </h1>
          <div className="h-px w-24 bg-[#C9A84C] mx-auto opacity-50 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            BJ Jewelry offers specialized services for businesses, investors,
            and bulk buyers. Explore our professional solutions designed to meet
            your exact specifications with absolute transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADE_SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-white p-8 border border-[#f2d98a]/40 hover:border-[#C9A84C] hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <h3
                className="text-xl font-medium text-gray-900 mb-4 group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="flex items-center text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">
                Explore Service
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
