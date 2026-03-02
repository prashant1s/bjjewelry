"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Hyderabad",
    rating: 5,
    text: "Got my bridal set from BJ Jewelry and it was absolutely breathtaking. The kundan work is so intricate — everyone at my wedding was asking about it. Pure craftsmanship!",
    occasion: "Bridal Collection",
  },
  {
    name: "Rahul Mehta",
    location: "Chennai",
    rating: 5,
    text: "The custom ring I designed for my wife's anniversary exceeded every expectation. The team was patient, creative, and delivered exactly what I envisioned. Highly recommend!",
    occasion: "Custom Order",
  },
  {
    name: "Kavitha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "I've been buying from BJ for 10 years. The quality never disappoints. Their 22K hallmarked sets are exceptional value. My go-to jeweller for every family occasion.",
    occasion: "Gold Collection",
  },
  {
    name: "Arjun Nair",
    location: "Bangalore",
    rating: 5,
    text: "Ordered through the B2B catalogue for our corporate gifting. Excellent quality, timely delivery, and the packaging was stunning. Our clients were very impressed.",
    occasion: "B2B Corporate Gifting",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Words from Our{" "}
            <em
              className="not-italic gold-text"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Patrons
            </em>
          </motion.h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#f2d98a]/50 p-8 relative group hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1a1a1a] text-sm">{t.name}</p>
                  <p className="text-[11px] tracking-wider uppercase text-[#9a9a9a]">
                    {t.location}
                  </p>
                </div>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#C9A84C] border border-[#f2d98a] px-3 py-1">
                  {t.occasion}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
