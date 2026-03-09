import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEM Manufacturing – BJ Jewelry',
  description: 'Custom jewellery manufacturing under your brand. NDA-protected, 15-25 day lead time.',
};

export default function OEMPage() {
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
            OEM & Custom <span className="italic text-[#C9A84C]">Design</span>
          </h1>
          <p className="text-[#7a7a7a] text-sm max-w-3xl leading-relaxed">
            Manufacture your own branded jewellery collections with our expert design team. Completely NDA-protected with full manufacturing control and 15–25 day lead times.
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[3px] uppercase text-[#C9A84C] mb-4">What We Offer</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a]">
              Full OEM <span className="italic text-[#C9A84C]">Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.06)]">
            {[
              { icon: '✎', title: 'Design Consultation', desc: 'Work with our expert team to conceptualize your collection.' },
              { icon: '◻', title: 'CAD Visualization', desc: 'See digital 3D renders before manufacturing begins.' },
              { icon: '●', title: 'Prototype Development', desc: 'Create sample pieces to perfect your design.' },
              { icon: '◉', title: 'Quality Control', desc: '100% inspection with zero-defect manufacturing.' },
              { icon: '✓', title: 'BIS Hallmarking', desc: 'Full hallmark certification on all pieces.' },
              { icon: '▲', title: 'Your Brand Label', desc: 'Pieces carry your branding exclusively.' },
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
              Manufacturing <span className="italic text-[#C9A84C]">Process</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { num: 1, title: 'Consultation & Concept', desc: 'Discuss your vision with our design team. NDA signed.' },
              { num: 2, title: 'Design Development', desc: 'Create detailed sketches and CAD models.' },
              { num: 3, title: 'Sample Creation', desc: 'Develop 1-2 prototypes for your approval.' },
              { num: 4, title: 'Approval & Finalization', desc: 'Sign off on final design and specifications.' },
              { num: 5, title: 'Production Setup', desc: 'Prepare tools and materials for full-scale manufacturing.' },
              { num: 6, title: 'Mass Manufacturing', desc: 'With 100% quality control and BIS hallmarking.' },
              { num: 7, title: 'Delivery & Support', desc: 'Insured delivery with ongoing partnership support.' },
            ].map((step, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-6 flex gap-6">
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

      {/* KEY STATS */}
      <section className="py-24 bg-[#FAF6ED]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '15-25', label: 'Typical Lead Time (Days)' },
              { num: '100%', label: 'Quality Inspection Rate' },
              { num: 'NDA', label: 'Complete Confidentiality' },
              { num: '12+', label: 'Years OEM Experience' },
            ].map((stat, i) => (
              <div key={i} className="border border-[rgba(201,168,76,0.15)] p-8 text-center">
                <p className="font-serif text-4xl font-light text-[#C9A84C] leading-none mb-2">{stat.num}</p>
                <p className="text-[#7a7a7a] text-sm">{stat.label}</p>
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
              { q: 'Is everything confidential?', a: 'Yes, we sign an NDA before every OEM project begins. Your designs remain completely protected.' },
              { q: 'What is the typical lead time?', a: '15-25 working days from approved samples to final delivery, depending on order complexity.' },
              { q: 'Do you handle design entirely?', a: 'You provide the concept, we execute. Or we can design from scratch based on your brief.' },
              { q: 'What is the minimum order?', a: 'Typically 500g+ gold value. Discuss custom MOQ during consultation.' },
              { q: 'Can I add my branding?', a: 'Absolutely. Custom packaging, hallmark stamps, and labels all available.' },
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
            Start Your <span className="italic text-[#C9A84C]">Project</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm mb-8">Schedule a consultation with our design team today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-[#C9A84C] text-white text-sm font-semibold tracking-[2px] uppercase hover:bg-[#B89840] transition-all">
              Schedule Consultation
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
