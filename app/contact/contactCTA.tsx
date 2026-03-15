"use client";

import { FloatingGoldLine } from "@/components/sections/Float";
import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative py-24 h-[350px] border-b border-[#f2d98a]/50 overflow-hidden bg-[#1a1a1a]">

      {/* Layer 1 — dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Layer 2 — floating gold line */}
      <div className="absolute inset-0 z-[1]">
        <FloatingGoldLine />
      </div>

      {/* Layer 3 — gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[160px] z-[2] bg-[#C9A84C]/10 blur-[80px] rounded-full" />

      {/* Layer 4 — content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Subscribe to Our Newsletter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#a0a0a0] text-base md:text-lg leading-relaxed mb-10"
        >
          Get the latest updates, trends, and exclusive offers delivered to your inbox
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          {!submitted ? (
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-[#666] text-sm outline-none focus:border-[#C9A84C] transition-colors duration-200"
              />
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #d4a832 0%, #C9A84C 50%, #b8941f 100%)",
                }}
              >
                Subscribe
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-[#C9A84C]"
            >
              <span className="text-xl">✦</span>
              <p className="text-base tracking-wide" style={{ fontFamily: "var(--font-serif)" }}>
                Thank you for subscribing!
              </p>
              <span className="text-xl">✦</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}