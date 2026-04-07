"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQGroup {
  category: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQGroup[] = [
  {
    category: "Partnership & Ordering",
    items: [
      {
        question: "What is the minimum order for wholesale?",
        answer:
          "Our minimum wholesale order starts at ₹1,00,000 (approx. 1 lakh) for registered B2B partners. For first-time trade enquiries, we offer a trial order facility starting at ₹50,000 so you can assess quality before committing to larger volumes.",
      },
      {
        question: "How do I become a registered trade partner?",
        answer:
          "Submit your business details through our B2B Partnership page — we need your GST number, business registration, and showroom address. Our trade team reviews applications within 48 hours. Approved partners get a dedicated account manager, exclusive pricing tiers, and access to the B2B catalogue.",
      },
      {
        question: "Is credit available for B2B partners?",
        answer:
          "Yes. Verified trade partners with a minimum 3-month order history are eligible for 30-day net credit terms. Credit limits are set based on your average monthly order value and business verification. Contact your account manager to apply.",
      },
      {
        question: "What karat options are available for wholesale?",
        answer:
          "We supply 24K (99.9% pure), 22K (91.6%), 18K (75%), and 14K gold. All pieces are BIS hallmarked. We also offer 925 sterling silver, platinum, and custom alloy compositions for OEM orders. Karat options vary by product category.",
      },
    ],
  },
  {
    category: "OEM, Export & Delivery",
    items: [
      {
        question: "Do you offer custom / OEM manufacturing?",
        answer:
          "Yes — OEM is one of our core services. Share your CAD files, sketches, or reference photos and we'll produce a sample within 7–10 working days. Minimum OEM quantity starts at 50 pieces per design. We sign NDAs to protect your IP.",
      },
      {
        question: "Which countries do you export to?",
        answer:
          "We currently export to the UAE, USA, UK, Singapore, Malaysia, Australia, and Canada. All export shipments come with a BIS hallmark certificate, country-of-origin certificate, and are fully insured. Customs documentation is handled by us.",
      },
      {
        question: "How are wholesale orders shipped?",
        answer:
          "Domestic orders above ₹1 lakh ship free via insured courier (Brinks/Sequel). Delivery is 3–5 business days to metro cities, 5–7 days elsewhere. For export, we use FedEx International Priority with full insurance. Tracking is provided at dispatch.",
      },
      {
        question: "What is the exchange and buy-back policy for trade?",
        answer:
          "B2B partners enjoy a 90-day exchange policy on unsold stock (subject to a 2% handling fee). Buy-back is available at prevailing gold rates minus making charges. All exchange and buy-back requests must be initiated through your account manager.",
      },
    ],
  },
  {
    category: "Pricing & Certification",
    items: [
      {
        question: "How is the wholesale price calculated?",
        answer:
          "Wholesale pricing = (live gold rate × weight × purity) + making charges − trade discount. Trade discounts range from 8% to 20% depending on your partner tier (Silver, Gold, Platinum). Live rates are locked at the time of order confirmation.",
      },
      {
        question: "Are all pieces BIS hallmarked?",
        answer:
          "Every piece we supply carries a BIS (Bureau of Indian Standards) hallmark — the HUID number, karat mark, BIS logo, and year of hallmarking are stamped on each item. We never supply unmarked jewellery, regardless of order size.",
      },
      {
        question: "Do you provide a certificate of authenticity?",
        answer:
          "Yes. Each order ships with a product-wise certificate listing metal type, purity, weight, stone details (if any), and HUID. For diamond pieces, we include the GIA or IGI grading report per stone.",
      },
      {
        question: "Can prices be locked for large forward orders?",
        answer:
          "Yes — for orders above ₹25 lakh, we offer a price-lock facility against a 10% advance deposit. The rate is fixed at the MCX gold price on the day of booking for up to 60 days.",
      },
    ],
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className={cn(
            "text-sm md:text-base transition-colors duration-200 pr-8",
            isOpen ? "text-[#C9A84C]" : "text-white/80 group-hover:text-white"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-200",
            isOpen
              ? "border-[#C9A84C] text-[#C9A84C] rotate-0"
              : "border-white/20 text-white/40 group-hover:border-white/50"
          )}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/55 text-sm leading-relaxed pb-5 pr-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({
    "Partnership & Ordering": null,
    "OEM, Export & Delivery": null,
    "Pricing & Certification": null,
  });

  function toggle(category: string, index: number) {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  }

  // Split into two columns (first two groups left, last one right with second)
  const leftGroups = [FAQ_DATA[0]];
  const rightGroups = [FAQ_DATA[1], FAQ_DATA[2]];

  return (
    <section id="faq" className="bg-[#111111]  py-20 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Trade{" "}
            <em
              className="not-italic gold-text"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              FAQs
            </em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6"
          />
        </div>

        {/* Two-column FAQ layout */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left column */}
          <div className="space-y-10">
            {leftGroups.map((group) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3
                  className="text-[#C9A84C] text-lg font-light mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {group.category}
                </h3>
                <div>
                  {group.items.map((item, i) => (
                    <FAQItem
                      key={i}
                      item={item}
                      isOpen={openItems[group.category] === i}
                      onToggle={() => toggle(group.category, i)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {rightGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + gi * 0.05 }}
              >
                <h3
                  className="text-[#C9A84C] text-lg font-light mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {group.category}
                </h3>
                <div>
                  {group.items.map((item, i) => (
                    <FAQItem
                      key={i}
                      item={item}
                      isOpen={openItems[group.category] === i}
                      onToggle={() => toggle(group.category, i)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 border border-white/10 bg-white/[0.03] px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-light text-lg" style={{ fontFamily: "var(--font-serif)" }}>
              Still have questions about our trade programme?
            </p>
            <p className="text-white/40 text-sm mt-1">
              Our B2B team responds within 2 business hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919444963811?text=Hello,%20I%20have%20a%20B2B%20trade%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[10px] py-2.5 px-5"
            >
              WhatsApp Trade Team
            </a>
            <a href="/trade/b2b" className="btn-outline-gold text-[10px] py-2.5 px-5">
              B2B Partnership
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
