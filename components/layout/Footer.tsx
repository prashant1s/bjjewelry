// import Link from "next/link";
// import { SocialIcon } from "react-social-icons";
// // import { MessageCircle } from "lucide-react";

// import {
//   Instagram,
//   Facebook,
//   Youtube,
//   Linkedin,
//   Twitter,
//   TwitterIcon,
// } from "lucide-react";

// const COLLECTIONS = [
//   { label: "New Arrivals", href: "/collections/new-arrivals" },
//   { label: "Gold Jewellery", href: "/collections/gold" },
//   { label: "Silver Jewellery", href: "/collections/silver" },
//   { label: "All Collections", href: "/collections" },
//   { label: "Corporate Gifting", href: "/collections/corporate-gifting" },
//   { label: "Book an Appointment", href: "/appointments" },
//   { label: "Video Call Shopping", href: "/appointments" },
// ];

// const TRADE = [
//   { label: "Payment", href: "/information/Payment" },
//   { label: "Careers", href: "/information/careers" },
//   { label: "B2B Partnership", href: "/trade/b2b" },
//   { label: "Bulk Ordering", href: "/trade/bulk" },
//   { label: "Export & Import", href: "/trade/export" },
//   { label: "Return & Refund", href: "/trade/return-refund" },
//   { label: "BJ Jewelry Club", href: "/trade/BJ-Jewelry-Club" },
//   { label: "Store Location", href: "/trade/Store-Location" },
// ];

// const INFORMATION = [
//   { label: "FAQ", href: "/#faq" },
//   { label: "Contact Us", href: "/contact" },
//   { label: "Certifications", href: "/information/certifications" },
//   { label: "Press & Media", href: "/information/Press-Media" },
//   { label: "Blog & Journal", href: "/information/blog" },
//   { label: "About BJ Jewelry", href: "/about" },
//   { label: "News & Events", href: "/information/Press-Media" },
//   { label: "Subscribe to Our Newsletter", href: "/information/Subscribe" },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-[#1a1a1a] text-white">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div>
//             <div className="mb-4">
//               <h3
//                 className="text-xl font-light tracking-[0.3em] uppercase"
//                 style={{ fontFamily: "var(--font-serif)" }}
//               >
//                 BJ <span className="gold-text">JEWELRY</span>
//               </h3>
//               <p className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase mt-1">
//                 Est. 2007 · Hyderabad & Chennai
//               </p>
//             </div>
//             <p className="text-white/50 text-sm leading-relaxed mb-6">
//               Gold, diamonds, silver, gemstones — every jewel, every occasion,
//               one unwavering commitment to beauty since 2007.
//             </p>
//             <div className="flex gap-2">
//               {[
//                 "https://wa.me/9444963811",
//                 "https://www.instagram.com/bjjewelryb2b/",
//                 "https://www.facebook.com/bjjewelryb2b",
//                 "https://www.linkedin.com/company/bjjewelry/",
//                 "https://pinterest.com/bjjewelryb2b",
//                 "https://youtube.com/",
//                 "https://twitter.com/",
//               ].map((url) => (
//                 <SocialIcon
//                   key={url}
//                   url={url}
//                   target="_blank"
//                   // 36px matches your original w-9 h-9 sizing exactly!
//                   style={{ height: 36, width: 36 }}
//                   // Keeps the smooth hover pop effect
//                   className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Collections */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Collections
//             </h4>
//             <ul className="space-y-2.5">
//               {COLLECTIONS.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Trade */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Trade & Services
//             </h4>
//             <ul className="space-y-2.5">
//               {TRADE.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Information */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Information
//             </h4>
//             <ul className="space-y-2.5">
//               {INFORMATION.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-white/30 text-xs">
//             © 2025 BJ Jewelry. All rights reserved. Est. 2007, Hyderabad · Now
//             in Chennai.
//           </p>
//           <div className="flex gap-6">
//             {[
//               { label: "Privacy Policy", href: "/about" },
//               { label: "Terms of Sale", href: "/about" },
//               { label: "Hallmark Policy", href: "/about" },
//               { label: "Sitemap", href: "/sitemap.xml" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { SocialIcon } from "react-social-icons";

// const COLLECTIONS = [
//   { label: "New Arrivals", href: "/collections/new-arrivals" },
//   { label: "Gold Jewellery", href: "/collections/gold" },
//   { label: "Silver Jewellery", href: "/collections/silver" },
//   { label: "All Collections", href: "/collections" },
//   { label: "Corporate Gifting", href: "/collections/corporate-gifting" },
//   { label: "Book an Appointment", href: "/appointments" },
//   { label: "Video Call Shopping", href: "/appointments" },
// ];

// const TRADE = [
//   { label: "Payment", href: "/information/Payment" },
//   { label: "Careers", href: "/information/careers" },
//   { label: "B2B Partnership", href: "/trade/b2b" },
//   { label: "Bulk Ordering", href: "/trade/bulk" },
//   { label: "Export & Import", href: "/trade/export" },
//   { label: "Return & Refund", href: "/trade/return-refund" },
//   { label: "BJ Jewelry Club", href: "/trade/BJ-Jewelry-Club" },
// ];

// const INFORMATION = [
//   { label: "FAQ", href: "/#faq" },
//   { label: "Contact Us", href: "/contact" },
//   { label: "Certifications", href: "/information/certifications" },
//   { label: "Press & Media", href: "/information/Press-Media" },
//   { label: "News & Events", href: "/information/Press-Media" },
//   { label: "Store Location", href: "/information/Store-Location" },
//   { label: "Blog & Journal", href: "/information/blog" },
//   { label: "About BJ Jewelry", href: "/about" },
// ];

// export function Footer() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !email.includes("@")) return;
//     setSubmitted(true);
//     setEmail("");
//   };

//   return (
//     <footer className="bg-[#1a1a1a] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 pt-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* 1. Brand & Newsletter */}
//           <div>
//             <div className="mb-4">
//               <h3
//                 className="text-xl font-light tracking-[0.3em] uppercase"
//                 style={{ fontFamily: "var(--font-serif)" }}
//               >
//                 BJ <span className="gold-text">JEWELRY</span>
//               </h3>
//               <p className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase mt-1">
//                 Est. 2007 · Hyderabad & Chennai
//               </p>
//             </div>
//             <p className="text-white/50 text-sm leading-relaxed mb-6">
//               Gold, diamonds, silver, gemstones — every jewel, every occasion,
//               one unwavering commitment to beauty since 2007.
//             </p>
//             <div className="flex gap-2 mb-10">
//               {[
//                 "https://wa.me/9444963811",
//                 "https://www.instagram.com/bjjewelryb2b/",
//                 "https://www.facebook.com/bjjewelryb2b",
//                 "https://www.linkedin.com/company/bjjewelry/",
//                 "https://pinterest.com/bjjewelryb2b",
//                 "https://youtube.com/",
//                 "https://twitter.com/",
//               ].map((url) => (
//                 <SocialIcon
//                   key={url}
//                   url={url}
//                   target="_blank"
//                   style={{ height: 36, width: 36 }}
//                   className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
//                 />
//               ))}
//             </div>

//             {/* Newsletter Section */}
//             <div className="pt-8 border-t border-white/10 w-full">
//               {/* This heading is ensured to be on one line */}
//               <h4 className="text-sm tracking-[0.2em] uppercase text-[#C9A84C] mb-4 text-center md:text-center whitespace-nowrap">
//                 Subscribe to our Newsletter
//               </h4>

//               <div className="w-full">
//                 {!submitted ? (
//                   <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-nowrap w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-full overflow-hidden focus-within:border-[#C9A84C] transition-colors"
//                   >
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email"
//                       required
//                       className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-[#666] focus:outline-none"
//                     />
//                     <button
//                       type="submit"
//                       className="flex-shrink-0 text-white px-2 py-3 text-sm font-medium transition-all hover:brightness-110 whitespace-nowrap"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, #d4a832 0%, #C9A84C 50%, #b8941f 100%)",
//                       }}
//                     >
//                       Subscribe
//                     </button>
//                   </form>
//                 ) : (
//                   <div className="flex items-center md:justify-start justify-center gap-2 text-[#C9A84C] animate-in fade-in zoom-in duration-500 py-2">
//                     <span className="text-xl">✦</span>
//                     <p
//                       className="text-md tracking-wide"
//                       style={{ fontFamily: "var(--font-serif)" }}
//                     >
//                       Thank you for subscribing!
//                     </p>
//                     <span className="text-xl">✦</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* 2. Collections */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Collections
//             </h4>
//             <ul className="space-y-2.5">
//               {COLLECTIONS.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 3. Trade */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Trade & Services
//             </h4>
//             <ul className="space-y-2.5">
//               {TRADE.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 4. Information */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Information
//             </h4>
//             <ul className="space-y-2.5">
//               {INFORMATION.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-white/30 text-xs">
//             © 2025 BJ Jewelry. All rights reserved. Est. 2007, Hyderabad · Now
//             in Chennai.
//           </p>
//           <div className="flex gap-6">
//             {[
//               { label: "Privacy Policy", href: "/about" },
//               { label: "Terms of Sale", href: "/about" },
//               { label: "Hallmark Policy", href: "/about" },
//               { label: "Sitemap", href: "/sitemap.xml" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { SocialIcon } from "react-social-icons";

// const COLLECTIONS = [
//   { label: "New Arrivals", href: "/collections/new-arrivals" },
//   { label: "Gold Jewellery", href: "/collections/gold" },
//   { label: "Silver Jewellery", href: "/collections/silver" },
//   { label: "All Collections", href: "/collections" },
//   { label: "Corporate Gifting", href: "/collections/corporate-gifting" },
//   { label: "Book an Appointment", href: "/appointments" },
//   { label: "Video Call Shopping", href: "/appointments" },
// ];

// const TRADE = [
//   { label: "Payment", href: "/information/Payment" },
//   { label: "Careers", href: "/information/careers" },
//   { label: "B2B Partnership", href: "/trade/b2b" },
//   { label: "Bulk Ordering", href: "/trade/bulk" },
//   { label: "Export & Import", href: "/trade/export" },
//   { label: "Return & Refund", href: "/trade/return-refund" },
//   { label: "BJ Jewelry Club", href: "/trade/BJ-Jewelry-Club" },
// ];

// const INFORMATION = [
//   { label: "FAQ", href: "/#faq" },
//   { label: "Contact Us", href: "/contact" },
//   { label: "Certifications", href: "/information/certifications" },
//   { label: "Press & Media", href: "/information/Press-Media" },
//   { label: "News & Events", href: "/information/Press-Media" },
//   { label: "Store Location", href: "/information/Store-Location" },
//   { label: "Blog & Journal", href: "/information/blog" },
//   { label: "About BJ Jewelry", href: "/about" },
// ];

// export function Footer() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !email.includes("@")) return;
//     setSubmitted(true);
//     setEmail("");
//   };

//   return (
//     <footer className="bg-[#1a1a1a] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 pt-20">
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
//           {/* 1. Brand & Newsletter */}
//           <div>
//             <div className="mb-4">
//               <h3
//                 className="text-xl font-light tracking-[0.3em] uppercase"
//                 style={{ fontFamily: "var(--font-serif)" }}
//               >
//                 BJ <span className="text-[#C9A84C]">JEWELRY</span>
//               </h3>
//               <p className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase mt-1">
//                 Est. 2007 · Hyderabad & Chennai
//               </p>
//             </div>
//             <p className="text-white/50 text-sm leading-relaxed mb-6">
//               Gold, diamonds, silver, gemstones — every jewel, every occasion,
//               one unwavering commitment to beauty since 2007.
//             </p>
//             <div className="flex gap-2 mb-10">
//               {[
//                 "https://wa.me/9444963811",
//                 "https://www.instagram.com/bjjewelryb2b/",
//                 "https://www.facebook.com/bjjewelryb2b",
//                 "https://www.linkedin.com/company/bjjewelry/",
//                 "https://pinterest.com/bjjewelryb2b",
//                 "https://youtube.com/",
//                 "https://twitter.com/",
//               ].map((url) => (
//                 <SocialIcon
//                   key={url}
//                   url={url}
//                   target="_blank"
//                   style={{ height: 36, width: 36 }}
//                   className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
//                 />
//               ))}
//             </div>

//             {/* Newsletter Section */}
//             <div className="pt-8 border-t border-white/10 w-full">
//               <h4 className="text-sm tracking-[0.2em] uppercase text-[#C9A84C] mb-4 text-center md:text-left whitespace-nowrap">
//                 Subscribe to our Newsletter
//               </h4>

//               <div className="w-full">
//                 {!submitted ? (
//                   <form 
//                     onSubmit={handleSubmit} 
//                     className="flex flex-nowrap w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-full overflow-hidden focus-within:border-[#C9A84C] transition-colors"
//                   >
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email"
//                       required
//                       className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-[#666] focus:outline-none"
//                     />
//                     <button
//                       type="submit"
//                       className="flex-shrink-0 text-white px-4 py-3 text-sm font-medium transition-all hover:brightness-110 whitespace-nowrap"
//                       style={{
//                         background: "linear-gradient(135deg, #d4a832 0%, #C9A84C 50%, #b8941f 100%)",
//                       }}
//                     >
//                       Subscribe
//                     </button>
//                   </form>
//                 ) : (
//                   <div className="flex items-center md:justify-start justify-center gap-2 text-[#C9A84C] animate-in fade-in zoom-in duration-500 py-2">
//                     <span className="text-xl">✦</span>
//                     <p className="text-md tracking-wide" style={{ fontFamily: "var(--font-serif)" }}>
//                       Thank you for subscribing!
//                     </p>
//                     <span className="text-xl">✦</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* 2. Collections */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Collections
//             </h4>
//             <ul className="space-y-2.5">
//               {COLLECTIONS.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 3. Trade */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Trade & Services
//             </h4>
//             <ul className="space-y-2.5">
//               {TRADE.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 4. Information */}
//           <div>
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
//               Information
//             </h4>
//             <ul className="space-y-2.5">
//               {INFORMATION.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* 🌟 Payments Logos Section 🌟 */}
//         <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] text-center md:text-left">
//             Accepted Payment Methods
//           </h4>
//           <div className="flex flex-wrap gap-3 justify-center md:justify-end">
//             {[
//               { src: "/images/payments/amazon-pay.svg", alt: "Amazon Pay" },
//               { src: "/images/payments/american-express.svg", alt: "American Express" },
//               { src: "/images/payments/apple-pay.svg", alt: "Apple Pay" },
//               { src: "/images/payments/discover.svg", alt: "Discover" },
//               { src: "/images/payments/google-pay.svg", alt: "Google Pay" },
//               { src: "/images/payments/mastercard-alt.svg", alt: "Mastercard" },
//               { src: "/images/payments/paypal.svg", alt: "PayPal" },
//               { src: "/images/payments/visa.svg", alt: "Visa" },
//             ].map((logo) => (
//               <img
//                 key={logo.alt}
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-8 md:h-10 border border-white/10 rounded-lg p-1.5 bg-white/5 object-contain"
//               />
//             ))}
//           </div>
//         </div>
//         {/* 🌟 END Payments Logos Section 🌟 */}

//       </div>

//       {/* Bottom Copyright bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-white/30 text-xs">
//             © 2025 BJ Jewelry. All rights reserved. Est. 2007, Hyderabad · Now in Chennai.
//           </p>
//           <div className="flex flex-wrap gap-6 justify-center">
//             {[
//               { label: "Privacy Policy", href: "/about" },
//               { label: "Terms of Sale", href: "/about" },
//               { label: "Hallmark Policy", href: "/about" },
//               { label: "Sitemap", href: "/sitemap.xml" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const COLLECTIONS = [
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Gold Jewellery", href: "/collections/gold" },
  { label: "Silver Jewellery", href: "/collections/silver" },
  { label: "All Collections", href: "/collections" },
  { label: "Corporate Gifting", href: "/collections/corporate-gifting" },
  { label: "Book an Appointment", href: "/appointments" },
  { label: "Video Call Shopping", href: "/appointments" },
];

const TRADE = [
  { label: "Payment", href: "/information/Payment" },
  { label: "Careers", href: "/information/careers" },
  { label: "B2B Partnership", href: "/trade/b2b" },
  { label: "Bulk Ordering", href: "/trade/bulk" },
  { label: "Export & Import", href: "/trade/export" },
  { label: "Return & Refund", href: "/trade/return-refund" },
  { label: "BJ Jewelry Club", href: "/trade/BJ-Jewelry-Club" },
];

const INFORMATION = [
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Certifications", href: "/information/certifications" },
  { label: "Press & Media", href: "/information/Press-Media" },
  { label: "News & Events", href: "/information/Press-Media" },
  { label: "Store Location", href: "/information/Store-Location" },
  { label: "Blog & Journal", href: "/information/blog" },
  { label: "About BJ Jewelry", href: "/about" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 pt-20">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* 1. Brand & Newsletter */}
          <div>
            <div className="mb-4">
              <h3
                className="text-xl font-light tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                BJ <span className="text-[#C9A84C]">JEWELRY</span>
              </h3>
              <p className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase mt-1">
                Est. 2007 · Hyderabad & Chennai
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Gold, diamonds, silver, gemstones — every jewel, every occasion,
              one unwavering commitment to beauty since 2007.
            </p>
            <div className="flex gap-2 mb-10">
              {[
                "https://wa.me/9444963811",
                "https://www.instagram.com/bjjewelryb2b/",
                "https://www.facebook.com/bjjewelryb2b",
                "https://www.linkedin.com/company/bjjewelry/",
                "https://pinterest.com/bjjewelryb2b",
                "https://youtube.com/",
                "https://twitter.com/",
              ].map((url) => (
                <SocialIcon
                  key={url}
                  url={url}
                  target="_blank"
                  style={{ height: 36, width: 36 }}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="pt-8 border-t border-white/10 w-full">
              <h4 className="text-sm tracking-[0.2em] uppercase text-[#C9A84C] mb-4 text-center md:text-left whitespace-nowrap">
                Subscribe to our Newsletter
              </h4>

              <div className="w-full">
                {!submitted ? (
                  <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-nowrap w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-full overflow-hidden focus-within:border-[#C9A84C] transition-colors"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-[#666] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 text-white px-4 py-3 text-sm font-medium transition-all hover:brightness-110 whitespace-nowrap"
                      style={{
                        background: "linear-gradient(135deg, #d4a832 0%, #C9A84C 50%, #b8941f 100%)",
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center md:justify-start justify-center gap-2 text-[#C9A84C] animate-in fade-in zoom-in duration-500 py-2">
                    <span className="text-xl">✦</span>
                    <p className="text-md tracking-wide" style={{ fontFamily: "var(--font-serif)" }}>
                      Thank you for subscribing!
                    </p>
                    <span className="text-xl">✦</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2. Collections */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Collections
            </h4>
            <ul className="space-y-2.5">
              {COLLECTIONS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Trade */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Trade & Services
            </h4>
            <ul className="space-y-2.5">
              {TRADE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Information */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Information
            </h4>
            <ul className="space-y-2.5">
              {INFORMATION.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 🌟 Payments Logos Section 🌟 */}
        <div className="flex flex-wrap py-0 border-t border-white/10 flex flex-col md:flex-col items-center justify-between gap-3">
          <h4 className="mt-1 text-sm tracking-[0.3em] uppercase text-[#C9A84C] text-center md:text-left">
            Accepted Payment Methods
          </h4>
          <div className="flex flex-wrap gap-3 py-1.5 justify-center md:justify-center w-full">
            {[
              { src: "/images/payments/amazon-pay.svg", alt: "Amazon Pay" },
              { src: "/images/payments/american-express.svg", alt: "American Express" },
              { src: "/images/payments/apple-pay.svg", alt: "Apple Pay" },
              { src: "/images/payments/discover.svg", alt: "Discover" },
              { src: "/images/payments/google-pay.svg", alt: "Google Pay" },
              { src: "/images/payments/mastercard-alt.svg", alt: "Mastercard" },
              { src: "/images/payments/paypal.svg", alt: "PayPal" },
              { src: "/images/payments/visa.svg", alt: "Visa" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={50} // Added explicit width
                height={40} // Added explicit height
                className="h-2 md:h-10 w-auto border border-white/10 rounded-lg p-1.5 bg-white/5 object-contain"
              />
            ))}
          </div>
        </div>
        {/* 🌟 END Payments Logos Section 🌟 */}

      </div>

      {/* Bottom Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 BJ Jewelry. All rights reserved. Est. 2007, Hyderabad · Now in Chennai.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "Privacy Policy", href: "/about" },
              { label: "Terms of Sale", href: "/about" },
              { label: "Hallmark Policy", href: "/about" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}