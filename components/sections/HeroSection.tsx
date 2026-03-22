"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle gold vignette at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
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
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Where Every
              <br />
              <em
                className="not-italic gold-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "#C9A84C",
                }}
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
              className="text-white/70 text-base leading-relaxed max-w-md mb-10"
            >
              From radiant gold to shimmering diamonds, lustrous silver to
              precious gemstones — BJ Jewelry has been Hyderabad&apos;s
              destination for every kind of beauty since 2007, now expanding to
              Chennai.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/collections"
                className="btn-gold flex items-center gap-2"
              >
                Explore Collections <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/trade/b2b"
                className="flex items-center gap-2 border border-white/40 text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-[11px] tracking-[0.15em] uppercase px-6 py-3"
              >
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
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/60">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
