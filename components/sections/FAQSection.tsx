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
    category: "Partnership, Pricing & Ordering",
    items: [
         {
        question: "What products do you offer?",
        answer:
          "We offer a wide range of jewellery collections including- Anklets,Bangles,Bracelets (Men, Women, Unisex),Chains (Men, Women, Unisex),Necklaces,Belly Chains,Watches (Men, Women, Unisex),Jewellery Purses,Phone Covers (Jewellery Accessories).We also provide custom-designed jewellery based on your business requirements.",
      },
      {
        question: "What is the minimum order quantity (MOQ)?",
        answer:
          "Our standard MOQ is-500 grams per design,In special cases: 250 grams For OEM/custom designs-Minimum starts from 50 pieces or 500 grams per design",
      },
      {
        question: "Do you support small businesses?",
        answer:
          "Yes, we offer flexible MOQ (starting from 250g in special cases) to support growing businesses.",
      },
      {
        question: "Can I see products before ordering?",
        answer:
          "Yes, you can:Request catalogue access, Book a video call consultation",
      },
      {
        question: "Do you provide ready stock or only custom orders?",
        answer:
          "We offer both-Ready stock (fast-moving designs) & Made-to-order / custom manufacturing",
      },
      {
        question: "Do you offer bulk pricing advantages?",
        answer:
          "Yes, we provide competitive bulk pricing based on order volume and partnership level",
      },
      {
        question: "Are your products certified?",
        answer:
          "Yes, all our jewellery is BIS Hallmark Certified, ensuring purity and authenticity.",
      },
      {
        question: "Are you a manufacturer?",
        answer:
          "No, we are not direct manufacturers.We work with 150+ trusted manufacturing partners to deliver high-quality and scalable jewellery supply.",
      },
       {
        question: "What metals do you specialize in?",
        answer:
          "We specialize in::92.5 Silver Jewellery, 916 Gold Jewellery",
      },
      {
        question: "How can I access your catalogue and pricing?",
        answer:
          "You need to register for a B2B account.After approval, you will get access to:Full catalogue,Pricing details,Latest collections",
      },
    ],
  },
  {
    category: " OEM, Export & Delivery",
    items: [
       {
        question: " Do you offer private labeling?",
        answer:
          "Yes, we support private labeling and branding for businesses.",
      },
       {
        question: " How do you ensure quality?",
        answer:
          "We maintain quality through: Verified manufacturing partners, Strict quality checks, BIS Hallmark certification",
      },
        {
        question: " Can I request specific designs for my market?",
        answer:
          "Yes, we can develop market-specific collections based on your target audience and trends",
      },
      {
        question: " Do you export internationally?",
        answer:
          "Yes, we export to:North America,Europe & UK,Middle East,Asia-Pacific,South America",
      },
      {
        question: "Do you offer custom or OEM manufacturing?",
        answer:
          "Yes, we provide custom/OEM manufacturing services.You can share-CAD designs,Sketches,Reference images. We will develop a sample within 7–15 working days.",
      },
      {
        question: "What is the sample development timeline?",
        answer:"For custom/OEM designs:👉 Sample development take 7–15working days",
      },
       {
        question: "How long does order delivery take?",
        answer:
          "Delivery depends on-Order quantity,Product type,Location.We ensure timely dispatch and reliable delivery",
      },
      {
        question: "Do you deliver across India?",
        answer:
          "Yes, we offer Pan India delivery with reliable logistics.",
      },
        
      {
        question: "How do I start working with BJ Jewelry?",
        answer:
          "Simple steps👉Register on our website👉 Get approval👉 Access catalog & pricing 👉Start placing orders",
      },
         {
        question: "Why should I choose BJ Jewelry?",
        answer:
          "19+ years experience,150+ manufacturing partners,  Flexible MOQOEM & custom support, Pan India + global supply, Trust-driven B2B relationships.",
      },
   
    ],
  },
  
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className={cn(
            "text-sm md:text-base transition-colors duration-200 pr-8",
            isOpen ? "text-[#C9A84C]" : "text-white/80 group-hover:text-white",
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-200",
            isOpen
              ? "border-[#C9A84C] text-[#C9A84C] rotate-0"
              : "border-white/20 text-white/40 group-hover:border-white/50",
          )}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
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
  const rightGroups = [FAQ_DATA[1]];

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
            <p
              className="text-white font-light text-lg"
              style={{ fontFamily: "var(--font-serif)" }}
            >
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
            <a
              href="/trade/b2b"
              className="btn-outline-gold text-[10px] py-2.5 px-5"
            >
              B2B Partnership
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
