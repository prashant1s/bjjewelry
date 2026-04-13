// // "use client"; // Fixed missing quote here
// // import { useEffect, useState, useRef } from "react";
// // import { usePathname } from "next/navigation";
// // interface MetalRates {
// //   gold24k: number | null;
// //   gold22k: number | null;
// //   gold18k: number | null;
// //   silver: number | null;
// //   changes?: Record<string, number>;
// // }

// // const DEFAULT_RATES: MetalRates = {
// //   gold24k: 0,
// //   gold22k: 0,
// //   gold18k: 0,
// //   silver: 0,
// //   changes: {
// //     gold24k: 0,
// //     gold22k: 0,
// //     gold18k: 0,
// //     silver: 0,
// //   },
// // };

// // // 1. Bulletproof safeFormat to explicitly reject null/undefined
// // function safeFormat(value: number | string | null | undefined) {
// //   if (value === null || value === undefined) return "0";
  
// //   const num = Number(value);
// //   // Prevent NaN crashes if the API returns a weird string
// //   if (isNaN(num)) return "0"; 
  
// //   return num.toLocaleString("en-IN");
// // }

// // // 2. Added defensive optional chaining (?.) to rates
// // const TICKER_ITEMS = (rates: MetalRates) => [
// //   {
// //     label: "24K Gold",
// //     value: `₹${safeFormat(rates?.gold24k)}/g`,
// //     change: rates?.changes?.gold24k ?? 0,
// //   },
// //   {
// //     label: "22K Gold",
// //     value: `₹${safeFormat(rates?.gold22k)}/g`,
// //     change: rates?.changes?.gold22k ?? 0,
// //   },
// //   {
// //     label: "18K Gold",
// //     value: `₹${safeFormat(rates?.gold18k)}/g`,
// //     change: rates?.changes?.gold18k ?? 0,
// //   },
// //   {
// //     label: "Silver",
// //     value: `₹${safeFormat(rates?.silver)}/g`,
// //     change: rates?.changes?.silver ?? 0,
// //   },
// //   {
// //     label: "Free Shipping on Orders Above ₹25,000",
// //     value: "",
// //     change: null,
// //   },
// //   {
// //     label: "BIS Hallmarked",
// //     value: "",
// //     change: null,
// //   },
// // ];

// // export default function MetalTicker() {
// //   const [rates, setRates] = useState<MetalRates>(DEFAULT_RATES);
// //   const intervalRef = useRef<NodeJS.Timeout | null>(null);
// //   async function fetchRates() {
// //     try {
// //       const res = await fetch("/api/metals", { cache: "no-store" });
// //       if (!res.ok) return;
// //       const data = await res.json();
// //       if (!data) return; 
// //       setRates({
// //         gold24k: data.gold24k ?? 0,
// //         gold22k: data.gold22k ?? 0,
// //         gold18k: data.gold18k ?? 0,
// //         silver: data.silver ?? 0,
// //         changes: {
// //           gold24k: data.changes?.gold24k ?? 0,
// //           gold22k: data.changes?.gold22k ?? 0,
// //           gold18k: data.changes?.gold18k ?? 0,
// //           silver: data.changes?.silver ?? 0,
// //         },
// //       });
// //     } catch (err) {
// //       console.warn("Ticker fetch failed:", err);
// //     }
// //   }
// //   useEffect(() => {
// //     fetchRates();

// //     intervalRef.current = setInterval(fetchRates, 15 * 60 * 1000);

// //     return () => {
// //       if (intervalRef.current) clearInterval(intervalRef.current);
// //     };
// //   }, []);
// //   const items = TICKER_ITEMS(rates || DEFAULT_RATES); 
// //   const doubled = [...items, ...items];
// //   const pathname = usePathname();
// // if (pathname.startsWith('/studio')) return null;
// //   return (
// //     <div className="bg-[#1a1a1a] text-white overflow-hidden relative h-9">
// //       <div className="flex animate-ticker whitespace-nowrap h-full items-center">
// //         {doubled.map((item, i) => (
// //           <span
// //             key={i}
// //             className="inline-flex items-center gap-1.5 px-6 text-[11px] tracking-widest uppercase font-medium"
// //           >
// //             {item.value ? (
// //               <>
// //                 <span className="text-[#C9A84C]">{item.label}</span>
// //                 <span className="text-white/80">·</span>
// //                 <span className="text-white font-semibold">{item.value}</span>
// //               </>
// //             ) : (
// //               <span className="text-white/60">{item.label}</span>
// //             )}

// //             <span className="text-[#C9A84C] mx-3">◆</span>
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// "use client"; 

// import { useEffect, useState, useRef } from "react";
// import { usePathname } from "next/navigation";

// interface MetalRates {
//   gold24k: number | null;
//   gold22k: number | null;
//   gold18k: number | null;
//   silver: number | null;
//   // Add USD fields to local interface
//   gold24kUsd?: number | null;
//   gold22kUsd?: number | null;
//   gold18kUsd?: number | null;
//   silverUsd?: number | null;
//   changes?: Record<string, number>;
// }

// const DEFAULT_RATES: MetalRates = {
//   gold24k: 0,
//   gold22k: 0,
//   gold18k: 0,
//   silver: 0,
//   gold24kUsd: 0,
//   gold22kUsd: 0,
//   gold18kUsd: 0,
//   silverUsd: 0,
//   changes: {
//     gold24k: 0,
//     gold22k: 0,
//     gold18k: 0,
//     silver: 0,
//   },
// };

// // Formats numbers cleanly (adds decimals for USD)
// function safeFormat(value: number | string | null | undefined, isUsd = false) {
//   if (value === null || value === undefined) return "0";
//   const num = Number(value);
//   if (isNaN(num)) return "0"; 
  
//   return isUsd 
//     ? num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
//     : num.toLocaleString("en-IN");
// }

// // Builds the array using BOTH INR and USD formats
// const TICKER_ITEMS = (rates: MetalRates) => [
//   {
//     label: "24K Gold",
//     value: `₹${safeFormat(rates?.gold24k)} ($${safeFormat(rates?.gold24kUsd, true)}) /g`,
//     change: rates?.changes?.gold24k ?? 0,
//   },
//   {
//     label: "22K Gold",
//     value: `₹${safeFormat(rates?.gold22k)} ($${safeFormat(rates?.gold22kUsd, true)}) /g`,
//     change: rates?.changes?.gold22k ?? 0,
//   },
//   {
//     label: "18K Gold",
//     value: `₹${safeFormat(rates?.gold18k)} ($${safeFormat(rates?.gold18kUsd, true)}) /g`,
//     change: rates?.changes?.gold18k ?? 0,
//   },
//   {
//     label: "Silver",
//     value: `₹${safeFormat(rates?.silver)} ($${safeFormat(rates?.silverUsd, true)}) /g`,
//     change: rates?.changes?.silver ?? 0,
//   },
//   {
//     label: "Free Shipping on Orders Above ₹25,000",
//     value: "",
//     change: null,
//   },
//   {
//     label: "BIS Hallmarked",
//     value: "",
//     change: null,
//   },
// ];

// export default function MetalTicker() {
//   const [rates, setRates] = useState<MetalRates>(DEFAULT_RATES);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   async function fetchRates() {
//     try {
//       const res = await fetch("/api/metals", { cache: "no-store" });
//       if (!res.ok) return;
//       const data = await res.json();
//       if (!data) return; 

//       setRates({
//         gold24k: data.gold24k ?? 0,
//         gold22k: data.gold22k ?? 0,
//         gold18k: data.gold18k ?? 0,
//         silver: data.silver ?? 0,
//         gold24kUsd: data.gold24kUsd ?? 0,
//         gold22kUsd: data.gold22kUsd ?? 0,
//         gold18kUsd: data.gold18kUsd ?? 0,
//         silverUsd: data.silverUsd ?? 0,
//         changes: {
//           gold24k: data.changes?.gold24k ?? 0,
//           gold22k: data.changes?.gold22k ?? 0,
//           gold18k: data.changes?.gold18k ?? 0,
//           silver: data.changes?.silver ?? 0,
//         },
//       });
//     } catch (err) {
//       console.warn("Ticker fetch failed:", err);
//     }
//   }

//   useEffect(() => {
//     fetchRates();
//     intervalRef.current = setInterval(fetchRates, 15 * 60 * 1000);
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   const items = TICKER_ITEMS(rates || DEFAULT_RATES); 
//   const doubled = [...items, ...items];
//   const pathname = usePathname();

//   if (pathname.startsWith('/studio')) return null;

//   return (
//     <div className="bg-[#1a1a1a] text-white overflow-hidden relative h-9">
//       <div className="flex animate-ticker whitespace-nowrap h-full items-center">
//         {doubled.map((item, i) => (
//           <span
//             key={i}
//             className="inline-flex items-center gap-1.5 px-6 text-[11px] tracking-widest uppercase font-medium"
//           >
//             {item.value ? (
//               <>
//                 <span className="text-[#C9A84C]">{item.label}</span>
//                 <span className="text-white/80">·</span>
//                 <span className="text-white font-semibold">{item.value}</span>
//               </>
//             ) : (
//               <span className="text-white/60">{item.label}</span>
//             )}

//             <span className="text-[#C9A84C] mx-3">◆</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client"; 

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // 👇 Imported Framer Motion

interface MetalRates {
  gold24k: number | null;
  gold22k: number | null;
  gold18k: number | null;
  silver: number | null;
  gold24kUsd?: number | null;
  gold22kUsd?: number | null;
  gold18kUsd?: number | null;
  silverUsd?: number | null;
  changes?: Record<string, number>;
}

const DEFAULT_RATES: MetalRates = {
  gold24k: 0,
  gold22k: 0,
  gold18k: 0,
  silver: 0,
  gold24kUsd: 0,
  gold22kUsd: 0,
  gold18kUsd: 0,
  silverUsd: 0,
  changes: {
    gold24k: 0,
    gold22k: 0,
    gold18k: 0,
    silver: 0,
  },
};

function safeFormat(value: number | string | null | undefined, isUsd = false) {
  if (value === null || value === undefined) return "0";
  const num = Number(value);
  if (isNaN(num)) return "0"; 
  
  return isUsd 
    ? num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
    : num.toLocaleString("en-IN");
}

const TICKER_ITEMS = (rates: MetalRates) => [
  {
    label: "24K Gold",
    value: `₹${safeFormat(rates?.gold24k)} ($${safeFormat(rates?.gold24kUsd, true)}) /g`,
    change: rates?.changes?.gold24k ?? 0,
  },
  {
    label: "22K Gold",
    value: `₹${safeFormat(rates?.gold22k)} ($${safeFormat(rates?.gold22kUsd, true)}) /g`,
    change: rates?.changes?.gold22k ?? 0,
  },
  {
    label: "18K Gold",
    value: `₹${safeFormat(rates?.gold18k)} ($${safeFormat(rates?.gold18kUsd, true)}) /g`,
    change: rates?.changes?.gold18k ?? 0,
  },
  {
    label: "Silver",
    value: `₹${safeFormat(rates?.silver)} ($${safeFormat(rates?.silverUsd, true)}) /g`,
    change: rates?.changes?.silver ?? 0,
  },
  {
    label: "Free Shipping on Orders Above ₹25,000",
    value: "",
    change: null,
  },
  {
    label: "BIS Hallmarked",
    value: "",
    change: null,
  },
];

export default function MetalTicker() {
  const [rates, setRates] = useState<MetalRates>(DEFAULT_RATES);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  async function fetchRates() {
    try {
      const res = await fetch("/api/metals", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      if (!data) return; 

      setRates({
        gold24k: data.gold24k ?? 0,
        gold22k: data.gold22k ?? 0,
        gold18k: data.gold18k ?? 0,
        silver: data.silver ?? 0,
        gold24kUsd: data.gold24kUsd ?? 0,
        gold22kUsd: data.gold22kUsd ?? 0,
        gold18kUsd: data.gold18kUsd ?? 0,
        silverUsd: data.silverUsd ?? 0,
        changes: {
          gold24k: data.changes?.gold24k ?? 0,
          gold22k: data.changes?.gold22k ?? 0,
          gold18k: data.changes?.gold18k ?? 0,
          silver: data.changes?.silver ?? 0,
        },
      });
    } catch (err) {
      console.warn("Ticker fetch failed:", err);
    }
  }

  useEffect(() => {
    fetchRates();
    intervalRef.current = setInterval(fetchRates, 15 * 60 * 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const items = TICKER_ITEMS(rates || DEFAULT_RATES); 
  // We double the items so the loop is seamless
  const doubled = [...items, ...items];
  const pathname = usePathname();

  if (pathname.startsWith('/studio')) return null;

  return (
    <div className="bg-[#1a1a1a] text-white overflow-hidden relative h-9 flex">
      {/* 👇 Replaced pure CSS with Framer Motion for a perfect infinite loop 👇 */}
      <motion.div 
        className="flex whitespace-nowrap h-full items-center w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 70, // Adjust speed here (higher number = slower)
          repeat: Infinity,
        }}
        // Pause when a user hovers to read the price
        whileHover={{ animationPlayState: "paused" }} 
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-6 text-[11px] tracking-widest uppercase font-medium"
          >
            {item.value ? (
              <>
                <span className="text-[#C9A84C]">{item.label}</span>
                <span className="text-white/80">·</span>
                <span className="text-white font-semibold">{item.value}</span>
              </>
            ) : (
              <span className="text-white/60">{item.label}</span>
            )}

            <span className="text-[#C9A84C] mx-3">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}