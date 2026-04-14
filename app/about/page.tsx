import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "./AboutCTA";
import { FloatingGoldLine } from "@/components/sections/Float";

export const metadata: Metadata = {
  title: "About BJ Jewelry – 18 Years of Craftsmanship",
  description:
    "Learn about BJ Jewelry's 18-year legacy of fine gold, diamond, and silver jewellery in Hyderabad and Chennai.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Header — FloatingGoldLine lives HERE, inside this div */}
      <div className="relative bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-20 text-center overflow-hidden">
        {/* ✅ Gold line is now behind the heading, same bg */}
        <FloatingGoldLine />

        {/* Content sits above the line */}
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">
            Our Story
          </p>
          <h1
            className="text-4xl md:text-6xl font-light text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            19 Years of{" "}
            <em
              className="not-italic gold-text"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Legacy
            </em>
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
        </div>
      </div>

      {/* Rest of page unchanged */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Story */}
        <div className="text-center mb-16">
          <p
            className="text-[#4a4a4a] text-lg leading-loose"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            BJ Jewelry, established in 2007, is a trusted B2B jewellery partner
            specializing in 92.5 silver and 916 gold jewellery. Built on strong
            values of trust, quality, and long-term relationships, we serve
            retailers, wholesalers, and distributors across India and global
            markets.
          </p>
          <p className="text-[#6a6a6a] mt-6 leading-relaxed">
            We collaborate with 150+ verified manufacturing partners, allowing
            us to offer a wide range of designs, consistent quality, and
            competitive pricing.All our products are BIS Hallmark Certified,
            ensuring authenticity and reliability in every order.Unlike
            traditional manufacturers, BJ Jewelry operates as a strategic
            sourcing and distribution partner.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-4 mb-20 ">
          {[
            {
              icon: "✦",
              title: "Authenticity",
              desc: (
                <span>
                  BIS Hallmarked Products
                  <br />
                  Access to diverse collections
                  <br />
                  Reliable quality control
                  <br />
                  Scalable bulk supply
                  <br />
                  Reliable & Transparent Business <br />
                  Competitive pricing.
                </span>
              ),
            },
            {
              icon: "◆",
              title: "International Markets",
              desc: (
                <span>
                  North America (USA, Canada, Mexico)
                  <br />
                  Europe & United Kingdom
                  <br />
                  Middle East (UAE, Saudi Arabia, Israel)
                  <br />
                  Asia-Pacific (Russia, Singapore, Thailand, Taiwan, Japan,
                  Australia, New Zealand)
                  <br />
                  South America (Brazil, Argentina, Colombia)
                </span>
              ),
            },
            {
              icon: "❋",
              title: "Heritage",
              desc: (
                <span>
                  Rooted in Hyderabad&aposs Nizami jewellery tradition since
                  2007.
                  <br />
                  19+ Years Industry Experience <br />
                  150+ Manufacturing Partners <br />
                  Pan India & Global Supply
                </span>
              ),
            },
          ].map((v) => (
            <div
              key={v.title}
              className="text-center p-8 border border-[#f2d98a]/50 hover:border-[#C9A84C] hover:shadow-lg transition-all"
            >
              <div className="text-2xl text-[#C9A84C] mb-4">{v.icon}</div>
              <h3
                className="text-lg font-light text-[#1a1a1a] mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {v.title}
              </h3>
              <p className="text-[#6a6a6a] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* 🌟 Leadership Team Section */}
        <div className="py-16 mt-10 border-t border-[#f2d98a]/30">
          <div className="text-center py-6 mb-12">
            <h2
              className="text-3xl font-light tracking-widest uppercase text-[#1a1a1a] mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Leadership Team
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Mr. Sukhdev",
                role: "Founder",
                bio: "30+ years in the jewellery industry. Founded BJ Jewelry in 2007 with a vision built on trust, quality, and long-term relationships.",
              },
              {
                name: "Mr. Prakash Patel",
                role: "CEO",
                bio: "25+ years in the B2B silver sector with deep market expertise and strategic business insight.",
              },
              {
                name: "Mr. Mahender Patel",
                role: "Manager",
                bio: "22+ years of experience specializing in silver jewellery craftsmanship and operational excellence.",
              },
              {
                name: "Mr. Sunil",
                role: "Sales & Business Development",
                bio: "5+ years of experience in client relations and scaling business development across multiple sectors.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="p-6 bg-[#FAF7F2] border-l-2 border-[#C9A84C]"
              >
                <h3 className="text-[#C9A84C] font-medium tracking-wide uppercase text-xs mb-1">
                  {member.role}
                </h3>
                <h4
                  className="text-xl font-light text-[#1a1a1a] mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {member.name}
                </h4>
                <p className="text-[#6a6a6a] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-[#f2d98a]/50 bg-[#FAF7F2] p-12">
          <h2
            className="text-2xl font-light text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Come, Experience the Craft
          </h2>
          <p className="text-[#6a6a6a] text-sm mb-8">
            Visit us in Hyderabad or Chennai. Every visit is a journey through
            craft, heritage, and beauty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/appointments" className="btn-gold">
              Book Appointment
            </Link>
            <Link href="/collections" className="btn-outline-gold">
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
