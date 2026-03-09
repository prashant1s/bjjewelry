import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Ordering – BJ Jewelry',
  description: 'Bulk gold ordering with tiered discounts, priority manufacturing, and flexible payment terms.',
};

export default function BulkPage() {
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
            Bulk Order <span className="italic text-[#C9A84C]">Program</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            Tiered pricing, priority manufacturing slots, and flexible payment terms for large orders. Perfect for retailers looking to scale their inventory with confidence.
          </p>
        </div>
      </div>

      {/* PRICING TIERS */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Volume Advantages</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Bulk <span className="italic text-[#C9A84C]">Discounts</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { volume: '500g - 999g', discount: '3-5% Off', features: 'Standard lead time' },
              { volume: '1kg - 4.99kg', discount: '6-9% Off', features: 'Priority manufacturing' },
              { volume: '5kg - 9.99kg', discount: '10-12% Off', features: 'Expedited delivery' },
              { volume: '10kg+', discount: 'Custom Pricing', features: 'Dedicated manufacturing team' },
            ].map((tier, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-8 flex justify-between items-center hover:border-[rgba(201,168,76,0.3)] transition-all md:flex-row flex-col gap-4">
                <div className="flex-1">
                  <p className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{tier.volume}</p>
                  <p className="text-[#7a7a7a] text-sm">{tier.features}</p>
                </div>
                <p className="font-serif text-3xl font-light text-[#C9A84C]">{tier.discount}</p>
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
              The <span className="italic text-[#C9A84C]">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {[
              { num: 1, title: 'Share Requirements', icon: '▪' },
              { num: 2, title: 'Get Quote', icon: '○' },
              { num: 3, title: 'Confirm Order', icon: '✓' },
              { num: 4, title: 'Manufacturing', icon: '⚙' },
              { num: 5, title: 'Safe Delivery', icon: '↓' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 border border-[rgba(201,168,76,0.15)] rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FAF6ED] text-3xl font-bold text-[#C9A84C] hover:border-[#C9A84C] transition-all group">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#C9A84C] text-white text-xs font-bold flex items-center justify-center rounded-full">{step.num}</span>
                </div>
                <p className="font-serif text-sm font-light text-[#1a1a1a]">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⏱', title: 'Fast Turnaround', desc: '2-6 weeks depending on volume and complexity.' },
              { icon: '✎', title: 'Customization', desc: 'Specify exact designs, weights, and finish.' },
              { icon: '■', title: 'Flexible Payment', desc: '30-day credit terms available for partners.' },
              { icon: '→', title: 'Live Updates', desc: 'Real-time manufacturing and delivery tracking.' },
            ].map((feature, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-8 hover:border-[rgba(201,168,76,0.3)] transition-all">
                <div className="text-3xl mb-4 text-[#C9A84C] font-bold">{feature.icon}</div>
                <h3 className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{feature.title}</h3>
                <p className="text-[#7a7a7a] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-16 text-center">
            <span className="italic text-[#C9A84C]">FAQ</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'What is the minimum bulk order?', a: '500g gold value. Larger orders unlock better pricing.' },
              { q: 'How long does bulk manufacturing take?', a: '2-6 weeks based on complexity. Expedited options available.' },
              { q: 'Can I mix designs in one order?', a: 'Yes, combine any designs available in our catalogue.' },
              { q: 'Do you offer financing?', a: 'Yes, 30-day credit for registered bulk order partners.' },
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
      <section className="py-24 bg-[#FAF6ED] border-t border-[rgba(201,168,76,0.08)]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-4">
            Get Your <span className="italic text-[#C9A84C]">Quote</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Share your requirements and get a customized quote within 48 hours.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Request Quote
            </Link>
            <a href="tel:+919676343210" className="px-10 py-4 border border-[rgba(201,168,76,0.2)] text-[#1a1a1a] text-sm font-semibold tracking-[2px] uppercase hover:border-[#C9A84C] transition-all">
              Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
