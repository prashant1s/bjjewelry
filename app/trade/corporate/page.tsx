import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Gifting – BJ Jewelry',
  description: 'Bespoke gold gifts for corporate occasions. Custom engraving, luxury packaging.',
};

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative py-20 bg-gradient-to-b from-white via-white to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-[#C8963C] rounded-full opacity-[0.05] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <Link href="/trade" className="text-[10px] tracking-[2px] uppercase text-[#7a7a7a] hover:text-[#C9A84C] transition-all mb-6 inline-block">
            ← Back to Trade
          </Link>
          <h1 className="font-serif text-6xl font-light text-[#1a1a1a] mb-6 leading-tight">
            Corporate <span className="italic text-[#C9A84C]">Gifting</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            Bespoke gold and precious metal gifts for every corporate occasion. Custom engraving, luxury packaging, and branding from just 25 pieces.
          </p>
        </div>
      </div>

      {/* OCCASIONS */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Perfect For</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Every <span className="italic text-[#C9A84C]">Occasion</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.06)]">
            {[
              { icon: '●', title: 'Employee Recognition', desc: 'Celebrate milestones, retirements, and achievements.' },
              { icon: '→', title: 'Client Appreciation', desc: 'Premium gifts for top clients and business partners.' },
              { icon: '★', title: 'Milestone Celebrations', desc: 'Anniversaries, IPOs, and major business events.' },
              { icon: '◆', title: 'Seasonal Gifting', desc: 'Diwali hampers, festival gifts, and festive collections.' },
            ].map((occasion, i) => (
              <div key={i} className="bg-white border border-[rgba(201,168,76,0.08)] p-8">
                <div className="text-3xl mb-4 text-[#C9A84C] font-bold">{occasion.icon}</div>
                <h3 className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{occasion.title}</h3>
                <p className="text-[#7a7a7a] text-sm">{occasion.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Comprehensive <span className="italic text-[#C9A84C]">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✎', title: 'Custom Engraving', desc: 'Personalized messages, names, or logo on each piece.' },
              { icon: '◻', title: 'Premium Packaging', desc: 'Luxury gift boxes with silk lining and branded tags.' },
              { icon: '⚙', title: 'Bulk Coordination', desc: 'Expert handling of large orders with quality assurance.' },
              { icon: '▲', title: 'Design Curation', desc: 'Handpicked pieces matching your brand aesthetic.' },
              { icon: '→', title: 'Express Delivery', desc: 'Fast turnaround for last-minute gifting needs.' },
              { icon: '◆', title: 'Budget Flexibility', desc: 'Options from ₹1K to ₹500K+ per piece.' },
            ].map((service, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-6 hover:border-[rgba(201,168,76,0.3)] transition-all">
                <div className="text-2xl mb-3 text-[#C9A84C] font-bold">{service.icon}</div>
                <h3 className="font-serif text-sm font-light text-[#1a1a1a] mb-2">{service.title}</h3>
                <p className="text-[#7a7a7a] text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE RANGES */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Pricing</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Options for Every <span className="italic text-[#C9A84C]">Budget</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: 'Budget', range: '₹1K - ₹5K per unit', desc: 'Elegant gold-plated pieces perfect for larger groups.' },
              { tier: 'Premium', range: '₹5K - ₹25K per unit', desc: '22K Gold ornaments for valued employees and clients.' },
              { tier: 'Luxury', range: '₹25K+ per unit', desc: 'Bespoke diamond-studded pieces for VIP gifting.' },
            ].map((price, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-8 text-center">
                <p className="font-serif text-2xl font-light text-[#1a1a1a] mb-2">{price.tier}</p>
                <p className="text-[#C9A84C] font-light mb-3">{price.range}</p>
                <p className="text-[#7a7a7a] text-sm">{price.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Popular <span className="italic text-[#C9A84C]">Combinations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Executive Pendants', desc: '50 pieces of 22K gold pendants with custom engraving and luxury packaging.' },
              { title: 'Festival Hampers', desc: '100 pieces of assorted gold coins in premium gift boxes with branded tags.' },
              { title: 'Retirement Gifts', desc: '10 bespoke gold bracelets with personalized engraving certificates.' },
              { title: 'Client Appreciation', desc: '25 pieces of designer gold rings in custom-designed packaging.' },
            ].map((combo, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-8">
                <h3 className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{combo.title}</h3>
                <p className="text-[#7a7a7a] text-sm">{combo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAF6ED] border-t border-[rgba(201,168,76,0.08)]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-4">
            Get Your <span className="italic text-[#C9A84C]">Quote</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Share your gifting needs and we'll create the perfect solution.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Request Quote
            </Link>
            <a href="tel:+919676343210" className="px-10 py-4 border border-[rgba(201,168,76,0.2)] text-[#1a1a1a] text-sm font-semibold tracking-[2px] uppercase hover:border-[#C9A84C] transition-all">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
