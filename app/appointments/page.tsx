"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Video, Clock, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

type AppointmentType = "IN_STORE" | "VIDEO_CONSULTATION";

export default function AppointmentsPage() {
  const [type, setType] = useState<AppointmentType>("IN_STORE");
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: "", timeSlot: "", message: "",
    location: "Hyderabad",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Appointment Request – ${type === "IN_STORE" ? "In-Store" : "Video Consultation"}`,
          message: `Date: ${form.date}\nTime: ${form.timeSlot}\nLocation: ${form.location}\nType: ${type}\n\nMessage: ${form.message}`,
          category: "GENERAL",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Appointment Requested
          </h2>
          <p className="text-[#6a6a6a] leading-relaxed">
            Thank you, {form.name}! We&apos;ll confirm your {type === "IN_STORE" ? "in-store visit" : "video consultation"} via email within 2 hours.
          </p>
          <p className="text-[11px] tracking-widest uppercase text-[#C9A84C] mt-6">
            Check your inbox at {form.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">Personal Experience</p>
        <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "var(--font-serif)" }}>
          Book an Appointment
        </h1>
        <p className="text-[#6a6a6a] mt-4 max-w-sm mx-auto text-sm">
          Meet our experts in person or via video — at your convenience.
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {/* Type selector */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {([
            { key: "IN_STORE" as AppointmentType, label: "In-Store Visit", icon: Calendar },
            { key: "VIDEO_CONSULTATION" as AppointmentType, label: "Video Consultation", icon: Video },
          ] as const).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setType(key)}
              className={cn(
                "flex flex-col items-center gap-3 p-6 border transition-all duration-200",
                type === key
                  ? "border-[#C9A84C] bg-[#fdf8ec]"
                  : "border-[#f2d98a]/50 hover:border-[#C9A84C]/50"
              )}
            >
              <Icon className={cn("w-6 h-6", type === key ? "text-[#C9A84C]" : "text-[#9a9a9a]")} />
              <span className={cn("text-[11px] tracking-widest uppercase", type === key ? "text-[#C9A84C]" : "text-[#9a9a9a]")}>
                {label}
              </span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Full Name *</label>
              <input
                type="text" name="name" required value={form.name} onChange={handleChange}
                className="w-full border border-[#f2d98a] px-4 py-3 text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#C9A84C] transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Email *</label>
              <input
                type="email" name="email" required value={form.email} onChange={handleChange}
                className="w-full border border-[#f2d98a] px-4 py-3 text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#C9A84C] transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Phone *</label>
              <input
                type="tel" name="phone" required value={form.phone} onChange={handleChange}
                className="w-full border border-[#f2d98a] px-4 py-3 text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#C9A84C] transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            {type === "IN_STORE" && (
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Location *</label>
                <select
                  name="location" value={form.location} onChange={handleChange}
                  className="w-full border border-[#f2d98a] px-4 py-3 text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#C9A84C] transition-colors"
                >
                  <option value="Hyderabad">Hyderabad Showroom</option>
                  <option value="Chennai">Chennai Showroom</option>
                </select>
              </div>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Preferred Date *</label>
            <input
              type="date" name="date" required value={form.date} onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border border-[#f2d98a] px-4 py-3 text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#C9A84C] transition-colors"
            />
          </div>

          {/* Time slots */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-3">
              <Clock className="w-3 h-3 inline mr-1" /> Preferred Time Slot *
            </label>
            <div className="grid grid-cols-4 gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot} type="button"
                  onClick={() => setForm((p) => ({ ...p, timeSlot: slot }))}
                  className={cn(
                    "py-2 text-[11px] tracking-widest uppercase border transition-all",
                    form.timeSlot === slot
                      ? "border-[#C9A84C] bg-[#fdf8ec] text-[#C9A84C]"
                      : "border-[#f2d98a]/50 text-[#9a9a9a] hover:border-[#C9A84C]/50"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-2">Message / Purpose</label>
            <textarea
              name="message" value={form.message} onChange={handleChange} rows={4}
              className="w-full border border-[#f2d98a] px-4 py-3 text-sm text-[#1a1a1a] bg-white outline-none focus:border-[#C9A84C] transition-colors resize-none"
              placeholder="Tell us about the occasion, preferred collections, budget, or any special requests..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-gold w-full flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
            ) : (
              `Book ${type === "IN_STORE" ? "In-Store" : "Video"} Appointment`
            )}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong. Please try again or call us at +91 96763 43210.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
