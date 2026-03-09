import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trade & Services | BJ Jewelry',
  description: 'Wholesale gold, B2B partnerships, OEM manufacturing, and corporate gifting from BJ Jewelry',
};

export default function TradePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative min-h-[600px] flex items-end overflow-hidden bg-gradient-to-b from-[#FAF6ED] via-white to-white">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-[#C8963C] rounded-full opacity-[0.05] blur-3xl"></div>
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#C8963C] rounded-full opacity-[0.03] blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-16">
          <div className="mb-6">
            <p className="text-[11px] tracking-[3px] uppercase text-[#7a7a7a] mb-4">India's Trusted Gold Wholesale Partner</p>
          </div>
          <h1 className="font-serif text-7xl font-light text-[#1a1a1a] mb-6 leading-tight">
            Trade &<br />
            <span className="italic text-[#C9A84C]">Services</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-relaxed max-w-2xl mb-12">
            From wholesale partnerships and bulk orders to OEM manufacturing and international exports — BJ Jewelry powers jewellers across India and beyond with 18 years of uncompromising quality.
          </p>

          {/* Stats */}
          <div className="flex gap-20 border-t border-[rgba(201,168,76,0.2)] pt-12">
            <div>
              <div className="font-serif text-5xl font-light text-[#C9A84C] leading-none mb-2">850+</div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#7a7a7a]">Trade Partners</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-light text-[#C9A84C] leading-none mb-2">12K+</div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#7a7a7a]">Wholesale Designs</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-light text-[#C9A84C] leading-none mb-2">18</div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#7a7a7a]">Years of Trust</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-light text-[#C9A84C] leading-none mb-2">6</div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#7a7a7a]">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="bg-[#C9A84C] text-white py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• 24K · ₹7,180/g</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• 22K · ₹6,582/g</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• 18K · ₹5,385/g</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• BIS Hallmarked</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• MOQ: 500g Gold Value</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• 30-Day Credit Available</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• 24K · ₹7,180/g</span>
          <span className="px-12 text-[11px] font-semibold tracking-[2px]">• 22K · ₹6,582/g</span>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Left */}
            <div>
              <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Why Partner With BJ</p>
              <h2 className="font-serif text-5xl font-light text-[#1a1a1a] mb-6 leading-tight">
                Built for <span className="italic text-[#C9A84C]">Jewellers</span>,
                <br />
                Trusted by All
              </h2>
              <p className="text-[#7a7a7a] text-sm leading-relaxed mb-8">
                Since 2007, BJ Jewelry has been the backbone for hundreds of jewellery retailers across India. Our wholesale programme is designed to give your business a competitive edge.
              </p>
              <ul className="space-y-4">
                {['100% BIS Hallmarked gold — every batch', 'Dedicated relationship manager for all partners', 'Flexible credit terms up to 30 days', 'Real-time order tracking and insured delivery', 'NDA-protected OEM and custom design manufacturing'].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-[#5a5a5a] text-sm">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-0 border border-[rgba(201,168,76,0.15)]">
              {[
                { icon: 'handshake', num: '850+', label: 'Active Retail Partners' },
                { icon: 'gem', num: '12K+', label: 'Wholesale Designs' },
                { icon: 'plane', num: '6', label: 'Countries Exported' },
                { icon: 'star', num: '18yr', label: 'Industry Experience' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`bg-white border border-[rgba(201,168,76,0.08)] p-8 text-center hover:border-[rgba(201,168,76,0.2)] transition-all ${
                    i % 2 === 1 ? 'bg-[#FAF6ED]' : ''
                  }`}
                >
                  <div className="text-2xl mb-2 text-[#C9A84C]">◆</div>
                  <div className="font-serif text-4xl font-light text-[#C9A84C] leading-none mb-1">{stat.num}</div>
                  <div className="text-[9px] tracking-[2px] uppercase text-[#7a7a7a]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B SERVICES GRID */}
      <section className="py-24 bg-[#FAF6ED] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="font-serif text-9xl font-light text-[#C9A84C] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">B2B</div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">For Trade Partners</p>
            <h2 className="font-serif text-5xl font-light text-[#1a1a1a] mb-2">
              Wholesale <span className="italic text-[#C9A84C]">Excellence</span>
            </h2>
            <p className="text-[#7a7a7a] text-sm max-w-2xl mx-auto">Six specialised services — built for every kind of trade partner</p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-[rgba(201,168,76,0.06)] p-px">
            {[
              { num: '01', title: 'Retailer Partnership', icon: '→', desc: 'Join our wholesale network. Access 12,000+ designs at trade prices with flexible minimums.' },
              { num: '02', title: 'Bulk Order Program', icon: '□', desc: 'Tiered pricing, priority manufacturing, and 30-day credit lines for registered partners.' },
              { num: '03', title: 'Corporate Gifting', icon: '■', desc: 'Bespoke gifts for employees and clients. Custom engraving from just 25 pieces.' },
              { num: '04', title: 'Export Division', icon: '↗', desc: 'We supply to UAE, Singapore, UK, USA, Australia. Complete documentation support.' },
              { num: '05', title: 'OEM / Custom Design', icon: '✎', desc: 'Manufacture to your designs under your brand. NDA-protected, 15–25 day lead time.' },
              { num: '06', title: 'Gold Investment', icon: '▲', desc: 'For institutions and HNI investors. Audited inventory, buy-back guarantee included.' },
            ].map((service, i) => (
              <Link
                key={i}
                href={`/trade/${['b2b', 'bulk', 'corporate', 'export', 'oem', 'investment'][i]}`}
                className="bg-white border border-[rgba(201,168,76,0.08)] p-12 relative group hover:border-[rgba(201,168,76,0.25)] hover:bg-[#FAF6ED] transition-all cursor-pointer"
              >
                <div className="absolute top-6 right-6 font-serif text-6xl font-light text-[rgba(201,168,76,0.05)] leading-none">{service.num}</div>
                  <div className="text-3xl mb-4 text-[#C9A84C] font-bold">{service.icon}</div>
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-3">{service.title}</h3>
                <p className="text-[#7a7a7a] text-sm leading-relaxed">{service.desc}</p>
                <div className="text-[#C9A84C] text-sm mt-6 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all"
            >
              Become a Trade Partner
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#C8963C] rounded-full opacity-[0.02] blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Simple Onboarding</p>
            <h2 className="font-serif text-5xl font-light text-[#1a1a1a] mb-2">
              How It <span className="italic text-[#C9A84C]">Works</span>
            </h2>
            <p className="text-[#7a7a7a] text-sm max-w-2xl mx-auto">Get started as a trade partner in five straightforward steps</p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] via-[0.2] to-transparent hidden md:block"></div>

            {[              { icon: '▪', title: 'Apply Online', desc: 'Fill the partnership form with your business details' },
              { icon: '☎', title: 'Verification Call', desc: 'Our team contacts you within 24 hours' },
              { icon: '✓', title: 'Get Approved', desc: 'Receive B2B login and catalogue access' },
              { icon: '□', title: 'Place First Order', desc: 'Order from 12,000+ designs instantly' },
              { icon: '↓', title: 'Receive & Grow', desc: 'Get hallmarked pieces delivered to your door' },
            ].map((process, i) => (
              <div key={i} className="text-center relative z-20">
                <div className="w-16 h-16 border border-[rgba(201,168,76,0.15)] rounded-full flex items-center justify-center mx-auto mb-6 bg-white group hover:border-[#C9A84C] hover:bg-[#FAF6ED] transition-all text-3xl font-bold text-[#C9A84C]">
                  {process.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#C9A84C] text-white text-xs font-bold flex items-center justify-center rounded-full">{i + 1}</span>
                </div>
                <h4 className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{process.title}</h4>
                <p className="text-[#7a7a7a] text-xs leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white border-y border-[rgba(201,168,76,0.08)] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#C8963C] rounded-full opacity-[0.03] blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Ready to Grow?</p>
          <h2 className="font-serif text-5xl font-light text-[#1a1a1a] mb-6">
            Let's Build Your <span className="italic text-[#C9A84C]">Success</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm leading-relaxed max-w-2xl mx-auto mb-12">
            Connect with our trade team for wholesale pricing, certifications, and logistics support. Get started in just 24 hours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all"
            >
              📧 Contact Trade Team
            </Link>
            <a
              href="tel:+919676343210"
              className="px-10 py-4 border border-[rgba(201,168,76,0.2)] text-[#1a1a1a] text-sm font-semibold tracking-[2px] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
