import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Export Programme – BJ Jewelry',
  description: 'International jewellery export to 25+ countries. Complete documentation, certifications.',
};

export default function ExportPage() {
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
            Export <span className="italic text-[#C9A84C]">Programme</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            International jewellery distribution to 25+ countries. Complete export documentation, fully certified hallmarks, and customs support included.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">What We Provide</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Complete Export <span className="italic text-[#C9A84C]">Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.06)]">
            {[
              { icon: '▪', title: 'Documentation', items: ['Export licenses & permits', 'Customs paperwork', 'Currency conversion support'] },
              { icon: '★', title: 'Certifications', items: ['GIA certified diamonds', 'BIS hallmark', 'International assay reports'] },
              { icon: '↓', title: 'Logistics', items: ['Secure packaging', 'International courier', 'Full insurance'] },
              { icon: '→', title: 'Market Support', items: ['Bulk export pricing', 'Custom collections', 'Partnership terms'] },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-[rgba(201,168,76,0.08)] p-8">
                <div className="text-3xl mb-4 text-[#C9A84C] font-bold">{service.icon}</div>
                <h3 className="font-serif text-lg font-light text-[#1a1a1a] mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-[#7a7a7a] text-sm flex gap-2">
                      <span className="text-[#C9A84C]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Export <span className="italic text-[#C9A84C]">Markets</span>
            </h2>
            <p className="text-[#7a7a7a] text-sm mt-4">We successfully serve 25+ countries including:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['UAE', 'Singapore', 'USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Malaysia', 'Germany', 'France', 'Hong Kong', 'Japan'].map((country) => (
              <div key={country} className="border border-[rgba(201,168,76,0.15)] p-6 text-center hover:border-[#C9A84C] transition-all">
                <p className="text-[#5a5a5a] text-sm font-light">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Export <span className="italic text-[#C9A84C]">Process</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { num: 1, title: 'Documentation', desc: 'We prepare all export licenses, certificates, and customs documents' },
              { num: 2, title: 'Certification', desc: 'Full GIA and international hallmark certifications provided' },
              { num: 3, title: 'Packaging', desc: 'Secure, compliant packaging with complete insurance' },
              { num: 4, title: 'Shipping', desc: 'Direct shipment to your destination with tracking' },
            ].map((step) => (
              <div key={step.num} className="border border-[rgba(201,168,76,0.15)] p-6 flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-[#C9A84C] rounded-full flex-shrink-0 bg-white">
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-16 text-center">
            Export <span className="italic text-[#C9A84C]">FAQ</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Do you handle all export documentation?', a: 'Yes, we manage licenses, certifications, and customs paperwork.' },
              { q: 'What certifications are included?', a: 'GIA diamonds, BIS hallmark, and international assay certificates.' },
              { q: 'How long does international shipping take?', a: '5-15 business days with full insurance coverage.' },
              { q: 'What are the payment terms?', a: 'Typically FOB. We can arrange landed cost calculations.' },
              { q: 'Can you handle bulk exports?', a: 'Absolutely. We specialize in wholesale international shipments.' },
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
            Expand <span className="italic text-[#C9A84C]">Globally</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Contact our export team for pricing and logistics support.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Export Enquiry
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
