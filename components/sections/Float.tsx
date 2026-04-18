"use client";

import { motion } from "framer-motion";

export function FloatingGoldLine() {
  return (
    <div className="absolute inset-x-0 top-8 overflow-hidden pointer-events-none select-none">
      <motion.svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Main sweeping line */}
        <motion.path
          d="M 0 35 Q 200 20, 400 32 Q 600 44, 720 30 Q 840 16, 1040 34 Q 1240 48, 1440 28"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.6"
          strokeOpacity="0.55"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Floating dots along the line */}
        {[
          { cx: 180,  cy: 24, r: 1.8, delay: 0.4 },
          { cx: 340,  cy: 31, r: 1.2, delay: 0.7 },
          { cx: 520,  cy: 40, r: 2.2, delay: 1.0 },
          { cx: 720,  cy: 30, r: 1.5, delay: 1.2 },
          { cx: 900,  cy: 22, r: 1.8, delay: 1.4 },
          { cx: 1100, cy: 36, r: 1.2, delay: 1.6 },
          { cx: 1300, cy: 26, r: 2.0, delay: 1.8 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#C9A84C"
            fillOpacity="0.6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0.4, 0.7],
              scale: [0, 1, 0.8, 1],
              cy: [dot.cy, dot.cy - 3, dot.cy + 2, dot.cy],
            }}
            transition={{
              delay: dot.delay,
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}