"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Gem, Truck, Headphones, Package, ChevronDown } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "BIS Hallmarked",
    desc: "Every piece certified by Bureau of Indian Standards for authentic purity you can trust.",
  },
  {
    icon: Award,
    title: "18 Years of Craft",
    desc: "Since 2007, our master artisans have shaped over a lakh pieces of jewellery with unmatched skill.",
  },
  {
    icon: Gem,
    title: "Hyderabadi Heritage",
    desc: "Rooted in the rich Nizami jewellery tradition — kundan, polki, temple art, and more.",
  },
  {
    icon: Package,
    title: "Custom Orders",
    desc: "Bespoke jewellery crafted to your vision — choose metal, design, stone, and finish.",
  },
  {
    icon: Truck,
    title: "Secure Insured Shipping",
    desc: "Free insured delivery across India on orders above ₹25,000. Export shipping available.",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    desc: "Free cleaning, polishing, and repair consultations for all BJ Jewelry purchases.",
  },
];

export function WhyBJSection() {
  // This state tracks which dropdown is currently open (null means all are closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    // If clicking the already-open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3"
          >
            The BJ Promise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why Choose{" "}
            <em
              className="not-italic gold-text"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              BJ Jewelry
            </em>
          </motion.h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Added items-start so grid rows don't stretch weirdly when one opens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {FEATURES.map((feature, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => toggleOpen(i)}
                className="flex gap-5 p-6 group cursor-pointer border border-transparent hover:border-[#f2d98a]/30 rounded-xl transition-all"
              >
                {/* Icon Box */}
                <div
                  className={`flex-shrink-0 w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "border-[#C9A84C] bg-[#fdf8ec]"
                      : "border-[#f2d98a] group-hover:border-[#C9A84C] group-hover:bg-[#fdf8ec]"
                  }`}
                >
                  <feature.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3
                      className="text-lg font-light text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {feature.title}
                    </h3>
                    {/* Arrow icon that rotates when open */}
                    <ChevronDown
                      className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Animated Dropdown Description */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#6a6a6a] text-sm leading-relaxed pb-2">
                          {feature.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
