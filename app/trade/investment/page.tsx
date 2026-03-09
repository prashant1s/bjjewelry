import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Investment – BJ Jewelry',
  description: 'Investment-grade gold with guaranteed buyback. Live rates, expert guidance.',
};

export default function InvestmentPage() {
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
            Gold <span className="italic text-[#C9A84C]">Investment</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            Investment-grade gold with guaranteed buyback, transparent pricing, and expert guidance. Build long-term wealth with BJ Jewelry.
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Investment Options</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Precious Metal <span className="italic text-[#C9A84C]">Products</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '●', title: 'Gold Coins', purity: '999.9 Fineness', features: ['Certified authentic', 'Easy to trade', 'Fractional weights 1g-100g'] },
              { icon: '■', title: 'Gold Ingots', purity: '999.5 Fineness', features: ['Certified assay', 'Bulk investment', 'Transparent pricing'] },
              { icon: '◆', title: 'Investment Jewelry', purity: '22K Gold', features: ['Dual purpose', 'Wearable & tradeable', 'Design value included'] },
            ].map((product, i) => (
              <div key={i} className="border border-[rgba(200,150,60,0.15)] p-8">
                <div className="text-4xl mb-4 text-[#C9A84C] font-bold">{product.icon}</div>
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-1">{product.title}</h3>
                <p className="text-[#C9A84C] text-sm font-light mb-4">{product.purity}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, j) => (
                    <li key={j} className="text-[#9A8870] text-sm flex gap-2">
                      <span className="text-[#C8963C]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Why Invest With <span className="italic text-[#C9A84C]">Us</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { title: '18+ Years Trust', desc: 'Established track record in gold trading and bullion sales.' },
              { title: 'BIS Certified', desc: '100% hallmarked and certified gold with authenticity guarantee.' },
              { title: 'Live Market Rates', desc: 'Transparent pricing directly linked to current gold rates.' },
              { title: 'Guaranteed Buyback', desc: 'Flexible buyback program with no expiry or lock-in periods.' },
              { title: 'Expert Advisory', desc: 'Professional guidance on investment strategies and timing.' },
              { title: 'Secure Storage', desc: 'Optional secure storage solutions for bulk investments.' },
            ].map((reason, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-6 flex gap-6">
                <div className="w-10 h-10 flex items-center justify-center border border-[#C9A84C] rounded-full flex-shrink-0 bg-[#FAF6ED] text-[#C9A84C] font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-light text-[#1a1a1a] mb-1">{reason.title}</h4>
                  <p className="text-[#7a7a7a] text-sm">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES & PRICING */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Current Rates</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              See Live <span className="italic text-[#C9A84C]">Quotations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { purity: '24K Gold', rate: '₹7,180/g', desc: 'Pure investment gold' },
              { purity: '22K Gold Coins', rate: '₹6,582/g', desc: 'Popular investment choice' },
              { purity: '18K Gold', rate: '₹5,385/g', desc: 'Wearable + investment' },
            ].map((rate, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-8 text-center hover:border-[rgba(201,168,76,0.3)] transition-all">
                <p className="text-[#7a7a7a] text-sm mb-2">{rate.purity}</p>
                <p className="font-serif text-3xl font-light text-[#C9A84C] leading-none mb-2">{rate.rate}</p>
                <p className="text-[#7a7a7a] text-xs">{rate.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 border border-[rgba(201,168,76,0.15)] bg-white rounded">
            <p className="text-[#7a7a7a] text-sm mb-2">Rates update hourly with live market. </p>
            <p className="text-[#C9A84C] font-light">Contact our investment team for current quotations.</p>
          </div>
        </div>
      </section>

      {/* BUYBACK PROGRAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Guaranteed <span className="italic text-[#C9A84C]">Buyback</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  'No expiry period on buyback',
                  'Fair market valuation every time',
                  'Quick settlement in 24 hours',
                  'Flexible redemption anytime',
                  'Transparent pricing with zero markup',
                ].map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[#C9A84C] flex-shrink-0 text-xl">✓</span>
                    <span className="text-[#5a5a5a] text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[rgba(201,168,76,0.15)] p-12 bg-[#FAF6ED]">
              <p className="font-serif text-4xl font-light text-[#C9A84C] leading-none mb-4">Hassle-Free</p>
              <p className="text-[#7a7a7a] text-sm leading-relaxed">
                Redeem your investment anytime without conditions. We guarantee fair market pricing and instant settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-16 text-center">
            Investment <span className="italic text-[#C9A84C]">FAQ</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Is gold a safe investment?', a: 'Yes, gold is a time-tested hedge against inflation with consistent historical returns.' },
              { q: 'What are the purity standards?', a: '999.9 for coins and ingots, 24K/22K for jewellery—all BIS certified.' },
              { q: 'Can I buy fractional amounts?', a: 'Yes, from 1g coins to bulk ingots. Start investing with any budget.' },
              { q: 'How is buyback pricing determined?', a: 'Based on real-time market rates plus re-assay at the time of buyback.' },
              { q: 'Is secure storage available?', a: 'Yes, optional secure vault storage with insurance included.' },
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
            Start <span className="italic text-[#C9A84C]">Investing</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Get expert guidance and live market rates from our investment specialists.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Get Investment Guide
            </Link>
            <a href="tel:+919676343210" className="px-10 py-4 border border-[rgba(201,168,76,0.2)] text-[#1a1a1a] text-sm font-semibold tracking-[2px] uppercase hover:border-[#C9A84C] transition-all">
              Speak with Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
