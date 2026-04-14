"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
};
const TESTIMONIALS = [
  {
    name: "Aarav",
    date: "2025-07-22",
    rating: 5,
    text: "I'm so glad to be a client of Mango Digital! As a small business owner, having a trusted team to handle my digital marketing and website needs is incredible.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Rahul",
    date: "2023-04-01",
    rating: 5,
    text: "Awesome management, food, music night, and locals. Very walkable and close to many restaurants and bars. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Arjun",
    date: "2025-11-16",
    rating: 5,
    text: "Very walkable and close to many restaurants and bars. The market across the street was our go to! The home itself felt very clean and was well maintained.",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Sarah Jenkins",
    date: "2024-02-14",
    rating: 5,
    text: "The communication was stellar from start to finish. They truly understood our vision and executed it flawlessly.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export function TestimonialsSection() {
const renderCard = (t: Testimonial, i: number) => (
      <div
      key={`${t.name}-${i}`}
      // Hardcoding width to prevent squeezing and ensuring text wraps normally
      style={{ width: '400px', whiteSpace: 'normal' }}
      className="flex-shrink-0 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col"
    >
      {/* Removed the social icons and simplified the header layout */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: '56px', height: '56px' }}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-serif text-gray-900 text-lg leading-tight mb-1">{t.name}</h4>
          <p className="text-sm text-gray-500 font-medium">{t.date}</p>
        </div>
      </div>

      <div className="flex gap-1.5 mb-5">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star 
             key={j} 
             size={18} 
             color="#C9A84C" 
             fill="#C9A84C" 
             className="text-[#C9A84C]" 
          />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed">
        {t.text}
      </p>
    </div>
  );

  return (
    <section className="bg-[#FAF7F2] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <p className="text-sm tracking-[0.2em] font-medium uppercase text-gray-500 mb-4">
          Client Stories
        </p>
        <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: "var(--font-serif), serif" }}>
          What people say
        </h2>
      </div>

      <div className="relative max-w-[1600px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit overflow-hidden">
          {/* Increased gap from 6 to 8, and pr from 6 to 8 for perfect spacing */}
          <motion.div
            className="flex gap-8 pr-8 shrink-0 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 35, 
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {TESTIMONIALS.map((t, i) => renderCard(t, i))}
          </motion.div>

          <motion.div
            className="flex gap-8 pr-8 shrink-0 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
            aria-hidden="true"
          >
            {TESTIMONIALS.map((t, i) => renderCard(t, i))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}