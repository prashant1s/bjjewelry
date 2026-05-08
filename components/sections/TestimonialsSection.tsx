"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Your Google Sheet CSV export URL ───
// Make sure your sheet is set to: Share → Anyone with the link → Viewer
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/14asxC9ZsU1mdMCk6giag5WPpUmVemaiXXX7ALDfIgds/export?format=csv&gid=0";

type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
};

// Parses CSV text → Testimonial array (handles commas inside quoted fields)
function parseCSV(csv: string): Testimonial[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0]
    .split(",")
    .map((h) => h.trim().toLowerCase().replace(/"/g, ""));

  return lines
    .slice(1)
    .map((line) => {
      const cols: string[] = [];
      let inQuotes = false;
      let current = "";
      for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') {
          inQuotes = !inQuotes;
        } else if (line[i] === "," && !inQuotes) {
          cols.push(current.trim());
          current = "";
        } else {
          current += line[i];
        }
      }
      cols.push(current.trim());

      const get = (key: string) => cols[headers.indexOf(key)] ?? "";

      return {
        name: get("name"),
        date: get("date"),
        rating: parseInt(get("rating")) || 5,
        text: get("text"),
        // If no avatar URL in sheet, generate a unique one from the name
        avatar:
          get("avatar") || `https://i.pravatar.cc/150?u=${encodeURIComponent(get("name"))}`,
      };
    })
    .filter((t) => t.name); // skip empty rows
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((res) => res.text())
      .then((csv) => setTestimonials(parseCSV(csv)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const renderCard = (t: Testimonial, i: number) => (
    <div
      key={`${t.name}-${i}`}
      style={{ width: "400px", whiteSpace: "normal" }}
      className="flex-shrink-0 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-5">
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: "56px", height: "56px" }}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-serif text-gray-900 text-lg leading-tight mb-1">
            {t.name}
          </h4>
          <p className="text-sm text-gray-500 font-medium">{t.date}</p>
        </div>
      </div>

      <div className="flex gap-1.5 mb-5">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} size={18} color="#C9A84C" fill="#C9A84C" className="text-[#C9A84C]" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed">{t.text}</p>
    </div>
  );

  if (loading) {
    return (
      <section className="bg-[#FAF7F2] py-24 flex items-center justify-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
          Loading reviews…
        </p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="bg-[#FAF7F2] py-24 flex items-center justify-center">
        <p className="text-gray-400 text-sm">
          No reviews found. Make sure your sheet is set to public.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#FAF7F2] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <p className="text-sm tracking-[0.2em] font-medium uppercase text-gray-500 mb-4">
          Client Stories
        </p>
        <h2
          className="text-4xl md:text-5xl text-gray-900"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          What people say
        </h2>
      </div>

      <div className="relative max-w-[1600px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit overflow-hidden">
          <motion.div
            className="flex gap-8 pr-8 shrink-0 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {testimonials.slice(0, 5).map((t, i) => renderCard(t, i))}
          </motion.div>

          <motion.div
            className="flex gap-8 pr-8 shrink-0 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }}
            aria-hidden="true"
          >
            {testimonials.slice(0, 5).map((t, i) => renderCard(t, i))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}