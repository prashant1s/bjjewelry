import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Repair & Restore – BJ Jewelry',
  description: 'Expert jewellery repair and restoration. Antique care, master craftsmen.',
};

export default function RepairPage() {
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
            Repair & <span className="italic text-[#C9A84C]">Restore</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            Expert restoration of broken, damaged, or tarnished jewellery. Antique care specialists with master craftsmen ensuring your precious pieces are restored to original beauty.
          </p>
        </div>
      </div>

      {/* REPAIR SERVICES */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">What We Fix</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Comprehensive <span className="italic text-[#C9A84C]">Repairs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.06)]">
            {[
              { icon: '◆', title: 'Broken Stone Setting', desc: 'Re-secure loose or fallen gemstones safely.' },
              { icon: '⟷', title: 'Chain Repair', desc: 'Chain joining, extension, or complete restoration.' },
              { icon: '⟨→⟩', title: 'Ring Resizing', desc: 'Resize rings to your current size without damage.' },
              { icon: '★', title: 'Polishing & Cleaning', desc: 'Restore shine to tarnished or dull pieces.' },
              { icon: '▲', title: 'Antique Restoration', desc: 'Specialist care for heirloom and vintage jewellery.' },
              { icon: '↻', title: 'Metal Recasting', desc: 'Recast broken or damaged metal components.' },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-[rgba(201,168,76,0.08)] p-8">
                <div className="text-3xl mb-4 text-[#C9A84C] font-bold">{service.icon}</div>
                <h3 className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{service.title}</h3>
                <p className="text-[#7a7a7a] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Our <span className="italic text-[#C9A84C]">Process</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { num: 1, title: 'Free Assessment', desc: 'We evaluate damage and discuss restoration options.' },
              { num: 2, title: 'Quotation', desc: 'Detailed quote with timeline and warranty information.' },
              { num: 3, title: 'Expert Restoration', desc: 'Master craftsmen carefully restore your piece.' },
              { num: 4, title: 'Quality Check', desc: 'Complete inspection before returning to you.' },
              { num: 5, title: 'Safe Delivery', desc: 'Return with certificate and restoration guarantee.' },
            ].map((step) => (
              <div key={step.num} className="border border-[rgba(201,168,76,0.15)] p-6 flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C9A84C] rounded-full flex-shrink-0 bg-[#FAF6ED]">
                  <span className="font-serif text-lg font-light text-[#C9A84C]">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-light text-[#1a1a1a] mb-1">{step.title}</h4>
                  <p className="text-[#7a7a7a] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Estimated Costs</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Transparent <span className="italic text-[#C9A84C]">Pricing</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { service: 'Stone Resetting', price: '₹500 - ₹5,000', time: '3-5 days' },
              { service: 'Ring Resizing', price: '₹300 - ₹1,500', time: '2-3 days' },
              { service: 'Chain Repair/Extension', price: '₹1,000 - ₹5,000', time: '3-5 days' },
              { service: 'Complete Restoration', price: '₹5,000 - ₹50,000', time: '7-14 days' },
              { service: 'Polishing & Cleaning', price: '₹200 - ₹1,000', time: '1-2 days' },
            ].map((item, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-6 grid md:grid-cols-3 gap-4 items-center">
                <p className="font-light text-[#1a1a1a]">{item.service}</p>
                <p className="text-[#C9A84C] font-light">{item.price}</p>
                <p className="text-[#7a7a7a] text-sm text-right">≈ {item.time}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#7a7a7a] text-xs mt-8">*Final pricing after free assessment. These are approximate ranges based on common repairs.</p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Why Choose <span className="italic text-[#C9A84C]">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '●', title: 'Expert Craftsmen', desc: '20+ years of restoration experience.' },
              { icon: '★', title: 'Quality Guarantee', desc: 'Our work is guaranteed for 2 years.' },
              { icon: '■', title: 'Transparent Pricing', desc: 'No hidden charges, fixed quotes.' },
              { icon: '→', title: 'Fast Turnaround', desc: 'Many repairs completed in 2-7 days.' },
              { icon: '↓', title: 'Free Pickup & Delivery', desc: 'For items above ₹5,000.' },
              { icon: '✓', title: 'Purity Guaranteed', desc: 'All pieces re-hallmarked after repair.' },
            ].map((reason, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-6 text-center hover:border-[rgba(201,168,76,0.3)] transition-all">
                <div className="text-3xl mb-3 text-[#C9A84C] font-bold">{reason.icon}</div>
                <h3 className="font-serif text-sm font-light text-[#1a1a1a] mb-2">{reason.title}</h3>
                <p className="text-[#7a7a7a] text-xs">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-16 text-center">
            Repair <span className="italic text-[#C9A84C]">FAQ</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Do you offer free assessment?', a: 'Yes, free evaluation and quotation for all repairs.' },
              { q: 'How long do repairs typically take?', a: 'Simple repairs: 2-3 days. Complex restoration: 7-14 days.' },
              { q: 'Is purity guaranteed after repair?', a: 'Yes, all repaired pieces are re-hallmarked and certified.' },
              { q: 'Can you restore antique jewellery?', a: 'Absolutely—we specialize in heirloom restoration with extreme care.' },
              { q: 'Do you offer free pickup/delivery?', a: 'Yes, for items valued above ₹5,000.' },
            ].map((faq, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-6">
                <h4 className="font-light text-[#1a1a1a] mb-2">{faq.q}</h4>
                <p className="text-[#7a7a7a] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-[rgba(201,168,76,0.08)]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-4">
            Restore Your <span className="italic text-[#C9A84C]">Treasures</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Bring your damaged or precious jewellery for a free assessment today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Request Pickup
            </Link>
            <a href="https://wa.me/919676343210" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-[rgba(201,168,76,0.2)] text-[#1a1a1a] text-sm font-semibold tracking-[2px] uppercase hover:border-[#C9A84C] transition-all">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
