// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export function CTASection() {
//   return (
//     <section className="relative py-24 h-[350px] border-b border-[#f2d98a]/50 overflow-hidden bg-[#1a1a1a]">
//       {/* Dot grid texture */}
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Gold glow behind button */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-[#C9A84C]/15 blur-[80px] rounded-full" />

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight"
//           style={{ fontFamily: "var(--font-serif)" }}
//         >
//           Become Part of Our Story
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="text-[#b0b0b0] text-base md:text-lg leading-relaxed mb-10"
//         >
//           Explore our collections and discover the perfect piece for your special moments
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.28 }}
//         >
//           <Link
//             href="/collections"
//             className="inline-flex items-center justify-center px-10 py-4 text-white font-medium text-[13px] tracking-[0.12em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(201,168,76,0.45)]"
//             style={{
//               background: "linear-gradient(135deg, #d4a832 0%, #C9A84C 50%, #b8941f 100%)",
//             }}
//           >
//             View Collections
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-24 h-[350px] border-b border-[#f2d98a]/50 overflow-hidden bg-[#1a1a1a]">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold glow behind button */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-[#C9A84C]/15 blur-[80px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Become Part of Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#b0b0b0] text-base md:text-lg leading-relaxed mb-10"
        >
          Explore our collections and discover the perfect piece for your special moments
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-10 py-4 text-white font-medium text-[13px] tracking-[0.12em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(201,168,76,0.45)]"
            style={{
              background: "linear-gradient(135deg, #d4a832 0%, #C9A84C 50%, #b8941f 100%)",
            }}
          >
            View Collections
          </Link>
        </motion.div>
      </div>
    </section>
  );
}