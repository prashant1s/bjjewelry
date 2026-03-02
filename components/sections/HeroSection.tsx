"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] bg-white flex items-center overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-medium">
                Est. 2007 · Hyderabad · Now in Chennai
              </span>
              <span className="h-px w-12 bg-[#C9A84C]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#1a1a1a] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Where Every
              <br />
              <em
                className="not-italic gold-text"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                Jewel
              </em>
              <br />
              Tells a Story
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#6a6a6a] text-base leading-relaxed max-w-md mb-10"
            >
              From radiant gold to shimmering diamonds, lustrous silver to precious gemstones — BJ Jewelry has been Hyderabad&apos;s destination for every kind of beauty since 2007, now expanding to Chennai.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/collections" className="btn-gold flex items-center gap-2">
                Explore Collections <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/trade/b2b" className="btn-outline-gold flex items-center gap-2">
                <FileText className="w-4 h-4" /> B2B Catalogue
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {[
                { label: "BIS Hallmarked", icon: "✦" },
                { label: "18 Years Legacy", icon: "✦" },
                { label: "99.9% Certified", icon: "✦" },
                { label: "Export Quality", icon: "✦" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-[#C9A84C] text-xs">{badge.icon}</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Diamond icon with glow */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-transparent blur-3xl scale-150" />
              <div className="relative">
                {/* Ornamental circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full border border-[#C9A84C]/15" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border border-[#C9A84C]/25" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border border-[#C9A84C]/35" />
                </div>

                {/* Main diamond SVG */}
                <div className="relative flex items-center justify-center w-80 h-80">
                  <svg viewBox="0 0 120 120" className="w-40 h-40 drop-shadow-2xl">
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e8c04a" />
                        <stop offset="40%" stopColor="#C9A84C" />
                        <stop offset="100%" stopColor="#7c5c1a" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="60,10 100,45 60,110 20,45"
                      fill="url(#goldGrad)"
                      opacity="0.95"
                    />
                    <polygon
                      points="60,10 100,45 60,60 20,45"
                      fill="rgba(255,255,255,0.15)"
                    />
                    <line x1="20" y1="45" x2="100" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  </svg>
                  <p
                    className="absolute bottom-6 text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Where Gold Becomes Legacy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9A84C]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.div>
    </section>
  );
}
