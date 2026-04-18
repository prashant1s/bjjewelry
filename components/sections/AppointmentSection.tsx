"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Video, MapPin, Clock } from "lucide-react";

export function AppointmentSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3"
          >
            Personal Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Meet Our{" "}
            <em
              className="not-italic gold-text"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Craftsmen
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6a6a6a] mt-4 max-w-lg mx-auto text-sm leading-relaxed"
          >
            Book a private consultation with our jewellery experts. Explore our collection in person or connect via video from anywhere in the world.
          </motion.p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* In-Store */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-[#f2d98a] p-8 group hover:border-[#C9A84C] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 border border-[#f2d98a] flex items-center justify-center mb-6 group-hover:border-[#C9A84C] group-hover:bg-[#fdf8ec] transition-all">
              <Calendar className="w-6 h-6 text-[#C9A84C]" />
            </div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              In-Store Appointment
            </h3>
            <p className="text-[#6a6a6a] text-sm leading-relaxed mb-6">
              Visit our showroom in Hyderabad or Chennai. Touch and feel every piece while our experts guide you.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#9a9a9a]">
                <MapPin className="w-3 h-3 text-[#C9A84C]" /> Hyderabad & Chennai
              </div>
              <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#9a9a9a]">
                <Clock className="w-3 h-3 text-[#C9A84C]" /> Mon–Sat, 10 AM – 8 PM
              </div>
            </div>
            <Link href="/appointments?type=in-store" className="btn-gold inline-flex">
              Book In-Store
            </Link>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-[#f2d98a] p-8 group hover:border-[#C9A84C] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 border border-[#f2d98a] flex items-center justify-center mb-6 group-hover:border-[#C9A84C] group-hover:bg-[#fdf8ec] transition-all">
              <Video className="w-6 h-6 text-[#C9A84C]" />
            </div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              Video Consultation
            </h3>
            <p className="text-[#6a6a6a] text-sm leading-relaxed mb-6">
              Explore our collection from the comfort of your home. Our experts will walk you through every detail.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#9a9a9a]">
                <Video className="w-3 h-3 text-[#C9A84C]" /> Zoom / WhatsApp / Google Meet
              </div>
              <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#9a9a9a]">
                <Clock className="w-3 h-3 text-[#C9A84C]" /> Flexible slots available
              </div>
            </div>
            <Link href="/appointments?type=video" className="btn-outline-gold inline-flex">
              Book Video Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
