// "use client";
// import { useEffect, useState, useRef } from "react";
// interface MetalRates {
//   gold24k: number | null;
//   gold22k: number | null;
//   gold18k: number | null;
//   silver: number | null;
//   platinum: number | null;
//   mcxGold: number | null;
//   changes?: {
//     gold24k: number | null;
//     gold22k: number | null;
//     gold18k: number | null;
//     silver: number | null;
//     platinum: number | null;
//   };
// }

// function safeFormat(value: number | string | null | undefined) {
//   if (value === null || value === undefined) return "0";
//   const num = Number(value);
//   if (isNaN(num)) return "0"; 
//   return num.toLocaleString("en-IN");
// }

// const TICKER_ITEMS = (rates: MetalRates) => [
//   { 
//     label: "Gold Rate", 
//     value: `₹${safeFormat(rates?.gold24k)}/g`, 
//     change: rates?.changes?.gold24k ?? 0 
//   },
//   { 
//     label: "Silver Rate", 
//     value: `₹${safeFormat(rates?.silver)}/g`, 
//     change: rates?.changes?.silver ?? 0 
//   },
// ];

// export function MetalTicker() {
//   const [rates, setRates] = useState<MetalRates | null>(null);
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   async function fetchRates() {
//     try {
//       const res = await fetch("/api/metals", { cache: "no-store" });
//       if (res.ok) {
//         const data = await res.json();
//         if (data) setRates(data); 
//       }
//     } catch {
//       // Silently fail — fallback will render
//     }
//   }

//   useEffect(() => {
//     fetchRates();
//     intervalRef.current = setInterval(fetchRates, 15 * 60 * 1000);
//     return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
//   }, []);

//   const defaultRates: MetalRates = {
//     gold24k: 7380, gold22k: 6760, gold18k: 5535,
//     silver: 87.4, platinum: 9950, mcxGold: 73800,
//     changes: { gold24k: 0, gold22k: 0, gold18k: 0, silver: 0, platinum: 0 },
//   };

//   const items = TICKER_ITEMS(rates ?? defaultRates);
//   const doubled = [...items, ...items];

//   return (
//     <div className="bg-[#1a1a1a] text-white overflow-hidden relative h-9" role="marquee" aria-label="Live metal rates">
//       <div className="flex animate-ticker whitespace-nowrap h-full items-center ticker-fade">
//         {doubled.map((item, i) => (
//           <span key={i} className="inline-flex items-center gap-1.5 px-6 text-[11px] tracking-widest uppercase font-medium">
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

