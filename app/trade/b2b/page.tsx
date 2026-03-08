import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B Partnership – BJ Jewelry',
  description: 'Wholesale partnership for retailers. 12,000+ designs, flexible terms, dedicated support, and BIS hallmarked gold.',
};

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative py-20 bg-gradient-to-b from-[#FAF6ED] via-white to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-[#C9A84C] rounded-full opacity-[0.05] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <Link href="/trade" className="text-[10px] tracking-[2px] uppercase text-[#7a7a7a] hover:text-[#C9A84C] transition-all mb-6 inline-block">
            ← Back to Trade
          </Link>
          <h1 className="font-serif text-6xl font-light text-[#1a1a1a] mb-6 leading-tight">
            Retailer <span className="italic text-[#C9A84C]">Partnership</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            Join India's most trusted wholesale gold network with access to 12,000+ designs, flexible minimums, dedicated account management, and transparent pricing designed to help your retail business thrive.
          </p>
        </div>
      </div>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">Partnership Benefits</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Why Join <span className="italic text-[#C9A84C]">BJ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[rgba(201,168,76,0.06)]">
            {[              { icon: '◆', title: 'Quality Guarantee', desc: '100% BIS hallmarked on every single piece, every time.' },
              { icon: '●', title: 'Dedicated Support', desc: 'Your own account manager who understands your business.' },
              { icon: '■', title: 'Flexible Terms', desc: 'Credit lines up to 30 days for qualified partners.' },
              { icon: '↔', title: 'Live Tracking', desc: 'Real-time order tracking with insured delivery.' },
              { icon: '✎', title: 'OEM Services', desc: 'Custom designs manufactured under your brand label.' },
              { icon: '∞', title: 'Exchange Programme', desc: 'Lifetime exchange on all gold pieces purchased.' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white border border-[rgba(201,168,76,0.08)] p-8 hover:border-[rgba(201,168,76,0.25)] transition-all">
                <div className="text-3xl mb-4 text-[#C9A84C] font-bold">{benefit.icon}</div>
                <h3 className="font-serif text-lg font-light text-[#1a1a1a] mb-2">{benefit.title}</h3>
                <p className="text-[#7a7a7a] text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Partner <span className="italic text-[#C9A84C]">Types</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Boutique Jewellers', desc: 'Premium retail stores with 2-10 locations seeking exclusive, curated collections.' },
              { title: 'Online Retailers', desc: 'E-commerce platforms offering D2C jewellery with demand-based ordering.' },
              { title: 'Department Stores', desc: 'Multi-brand retail chains with dedicated jewellery departments.' },
              { title: 'Wedding Planners', desc: 'Event companies integrating custom gold ornaments into wedding packages.' },
            ].map((type, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-10 hover:border-[rgba(201,168,76,0.3)] transition-all">
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-3">{type.title}</h3>
                <p className="text-[#7a7a7a] text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN CATALOGUE */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-4">
              12,000+ <span className="italic text-[#C9A84C]">Designs</span>
            </h2>
            <p className="text-[#7a7a7a] text-sm max-w-2xl mx-auto">
              From contemporary styles to traditional ornaments—handpicked designs updated quarterly to match market trends.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {['Rings', 'Earrings', 'Necklaces', 'Bangles', 'Bracelets', 'Pendants', 'Anklets', 'Brooches'].map((category) => (
              <div key={category} className="border border-[rgba(201,168,76,0.15)] p-6 text-center hover:border-[#C9A84C] transition-all">
                <p className="text-[#C4B49A] font-light">{category}</p>
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
              { q: 'What is the minimum order value?', a: '500g gold value per order for Silver Partners. Lower for established partners with credit lines.' },
              { q: 'How long does delivery take?', a: 'Typically 3-5 business days nationwide with full insurance coverage.' },
              { q: 'Do you offer credit terms?', a: 'Yes, up to 30 days for qualified Gold and Platinum Partners.' },
              { q: 'Can I customize designs?', a: 'Absolutely. Our OEM service allows you to create collections under your brand label.' },
              { q: 'Is all gold BIS hallmarked?', a: 'Yes, 100% of our gold pieces are BIS hallmarked without exception.' },
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
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-6">
            Ready to <span className="italic text-[#C9A84C]">Partner</span>?
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Apply now and get approved within 24 hours.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Apply Now
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
