"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
// import { NewsletterSection } from "./contactCTA";

const CATEGORIES = [
  { value: "ORDER", label: "Order Query" },
  { value: "PRODUCT", label: "Product Enquiry" },
  { value: "REPAIR", label: "Repair & Restore" },
  { value: "CERTIFICATION", label: "Certification" },
  { value: "GENERAL", label: "General" },
] as const;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    subject: "", message: "", category: "GENERAL",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setStatus("loading");

  try {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET!;
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // ✅ Direct success (no response available)
    setStatus("success");

  } catch {
    setStatus("error");
  }
}

  if (status === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle className="w-16 h-16 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Message Received
          </h2>
          <p className="text-[#6a6a6a] leading-relaxed">
            Thank you, {form.name}! Our team will respond within 24 hours.
          </p>
          {ticketId && (
            <div className="mt-6 border border-[#f2d98a] inline-block px-6 py-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a]">Ticket Reference</p>
              <p className="text-lg font-medium text-[#C9A84C] mt-1">#{ticketId}</p>
            </div>
          )}
          <div className="mt-8">
            <Link href="/" className="btn-gold">Back to Home</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "var(--font-serif)" }}>
          Contact Us
        </h1>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left – Info */}
          <div>
            <h2 className="text-2xl font-light text-[#1a1a1a] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              We&apos;re Here to Help
            </h2>

            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: "Phone", value: "+91 9444963811", href: "tel:+919444963811" },
                { icon: Mail, label: "Email", value: "Info@bjjewelry.in", href: "mailto:Info@bjjewelry.in" },
                { icon: MapPin, label: "Telangana Showroom", value: "Station Road, Pot Market, Monda Market, Shivaji Nagar, Secunderabad, Telangana  – 500003", href: "#" },
                { icon: MapPin, label: "Chennai Showroom", value: "Anna Nagar, Chennai – 600040", href: "#" },
                { icon: Clock, label: "Store Hours", value: "Mon–Sat: 10 AM – 8 PM | Sun: 11 AM – 6 PM", href: "" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 border border-[#f2d98a] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[#1a1a1a] hover:text-[#C9A84C] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#1a1a1a]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#f2d98a]/50 bg-[#FAF7F2] p-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-3">WhatsApp Priority Support</p>
              <p className="text-sm text-[#6a6a6a] leading-relaxed mb-4">
                Get instant responses on WhatsApp. Share product photos, track orders, or ask about custom designs.
              </p>
              <a
                href="https://wa.me/919444963811?text=Hello%20BJ%20Jewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            <h2 className="text-2xl font-light text-[#1a1a1a] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Name *</label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    className="w-full border border-[#f2d98a] px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Phone</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-[#f2d98a] px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Email *</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  className="w-full border border-[#f2d98a] px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Category</label>
                <select
                  name="category" value={form.category} onChange={handleChange}
                  className="w-full border border-[#f2d98a] px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Subject *</label>
                <input
                  type="text" name="subject" required value={form.subject} onChange={handleChange}
                  className="w-full border border-[#f2d98a] px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Message *</label>
                <textarea
                  name="message" required value={form.message} onChange={handleChange} rows={5}
                  className="w-full border border-[#f2d98a] px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* <NewsletterSection /> */}
    </div>
  );
}
