"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, FileText, Gift, Truck, X } from "lucide-react";
import Link from "next/link";

export function StickyPartnerBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait 1.5 seconds before sliding up to grab attention
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 w-full z-50 bg-[#111111] border-t border-[#C9A84C]/30 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left Side: Icon & Text */}
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="flex-shrink-0 bg-[#C9A84C]/10 p-2 rounded-full">
                <Lock className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div>
                <h4 className="text-[#C9A84C] text-sm md:text-sm font-semibold tracking-wide">
                  Unlock B2B Partner Benefits!
                </h4>
                <p className="text-gray-400 text-[10px] md:text-xs mt-0.5">
                  Login to access wholesale catalogue, exclusive deals & order tracking
                </p>
              </div>
            </div>

            {/* Middle: Feature Pills (Hidden on Mobile for space) */}
            <div className="hidden lg:flex items-center gap-3">
              {[
                { icon: FileText, label: "Full Catalogue" },
                { icon: Gift, label: "Exclusive Deals" },
                { icon: Truck, label: "Order Tracking" },
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50"
                >
                  <feature.icon className="w-3 h-3 text-[#C9A84C]" />
                  <span className="text-[10px] text-gray-300 uppercase tracking-wider">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Right Side: CTA & Close */}
            <div className="flex items-center  justify-center w-full md:w-auto gap-8">
              <Link 
                href="/login" 
                className="w-fit md:flex-none text-center bg-[#C9A84C] hover:bg-[#b5953e] text-[#1a1a1a] font-semibold text-[11px] uppercase tracking-widest py-2 px-10 rounded-sm transition-colors"
              >
                Login / Register
              </Link>
              <button 
                onClick={() => setIsVisible(false)}
                className=" text-gray-500 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

