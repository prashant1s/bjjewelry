// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { Star, Quote } from "lucide-react";

// // // const TESTIMONIALS = [
// // //   {
// // //     name: "Priya Sharma",
// // //     location: "Hyderabad",
// // //     rating: 5,
// // //     text: "Got my bridal set from BJ Jewelry and it was absolutely breathtaking. The kundan work is so intricate — everyone at my wedding was asking about it. Pure craftsmanship!",
// // //     occasion: "Bridal Collection",
// // //   },
// // //   {
// // //     name: "Rahul Mehta",
// // //     location: "Chennai",
// // //     rating: 5,
// // //     text: "The custom ring I designed for my wife's anniversary exceeded every expectation. The team was patient, creative, and delivered exactly what I envisioned. Highly recommend!",
// // //     occasion: "Custom Order",
// // //   },
// // //   {
// // //     name: "Kavitha Reddy",
// // //     location: "Hyderabad",
// // //     rating: 5,
// // //     text: "I've been buying from BJ for 10 years. The quality never disappoints. Their 22K hallmarked sets are exceptional value. My go-to jeweller for every family occasion.",
// // //     occasion: "Gold Collection",
// // //   },
// // //   {
// // //     name: "Arjun Nair",
// // //     location: "Bangalore",
// // //     rating: 5,
// // //     text: "Ordered through the B2B catalogue for our corporate gifting. Excellent quality, timely delivery, and the packaging was stunning. Our clients were very impressed.",
// // //     occasion: "B2B Corporate Gifting",
// // //   },
// // // ];

// // // export function TestimonialsSection() {
// // //   return (
// // //     <section className="bg-[#FAF7F2] py-20">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //         <div className="text-center mb-14">
// // //           <motion.p
// // //             initial={{ opacity: 0 }}
// // //             whileInView={{ opacity: 1 }}
// // //             viewport={{ once: true }}
// // //             className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3"
// // //           >
// // //             Client Stories
// // //           </motion.p>
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
// // //             style={{ fontFamily: "var(--font-serif)" }}
// // //           >
// // //             Words from Our{" "}
// // //             <em
// // //               className="not-italic gold-text"
// // //               style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
// // //             >
// // //               Patrons
// // //             </em>
// // //           </motion.h2>
// // //           <div className="section-divider mx-auto mt-6" />
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           {TESTIMONIALS.map((t, i) => (
// // //             <motion.div
// // //               key={t.name}
// // //               initial={{ opacity: 0, y: 24 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ delay: i * 0.1 }}
// // //               className="bg-white border border-[#f2d98a]/50 p-8 relative group hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300"
// // //             >
// // //               {/* Quote icon */}
// // //               <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors" />

// // //               {/* Stars */}
// // //               <div className="flex gap-1 mb-4">
// // //                 {Array.from({ length: t.rating }).map((_, j) => (
// // //                   <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
// // //                 ))}
// // //               </div>

// // //               <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6 italic">
// // //                 &ldquo;{t.text}&rdquo;
// // //               </p>

// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <p className="font-medium text-[#1a1a1a] text-sm">{t.name}</p>
// // //                   <p className="text-[11px] tracking-wider uppercase text-[#9a9a9a]">
// // //                     {t.location}
// // //                   </p>
// // //                 </div>
// // //                 <span className="text-[9px] tracking-[0.2em] uppercase text-[#C9A84C] border border-[#f2d98a] px-3 py-1">
// // //                   {t.occasion}
// // //                 </span>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { Star, Quote } from "lucide-react";

// // const TESTIMONIALS = [
// //   {
// //     name: "Priya Sharma",
// //     location: "Hyderabad",
// //     rating: 5,
// //     text: "Got my bridal set from BJ Jewelry and it was absolutely breathtaking. The kundan work is so intricate — everyone at my wedding was asking about it. Pure craftsmanship!",
// //     occasion: "Bridal Collection",
// //   },
// //   {
// //     name: "Rahul Mehta",
// //     location: "Chennai",
// //     rating: 5,
// //     text: "The custom ring I designed for my wife's anniversary exceeded every expectation. The team was patient, creative, and delivered exactly what I envisioned. Highly recommend!",
// //     occasion: "Custom Order",
// //   },
// //   {
// //     name: "Kavitha Reddy",
// //     location: "Hyderabad",
// //     rating: 5,
// //     text: "I've been buying from BJ for 10 years. The quality never disappoints. Their 22K hallmarked sets are exceptional value. My go-to jeweller for every family occasion.",
// //     occasion: "Gold Collection",
// //   },
// //   {
// //     name: "Arjun Nair",
// //     location: "Bangalore",
// //     rating: 5,
// //     text: "Ordered through the B2B catalogue for our corporate gifting. Excellent quality, timely delivery, and the packaging was stunning. Our clients were very impressed.",
// //     occasion: "B2B Corporate Gifting",
// //   },
// // ];

// // // Double the testimonials to create the infinite loop effect
// // const INFINITE_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

// // export function TestimonialsSection() {
// //   return (
// //     <section className="bg-[#FAF7F2] py-20 overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14 text-center">
// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3"
// //         >
// //           Client Stories
// //         </motion.p>
// //         <motion.h2
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-4xl md:text-5xl font-light text-[#1a1a1a]"
// //           style={{ fontFamily: "var(--font-serif)" }}
// //         >
// //           Words from Our{" "}
// //           <em className="not-italic gold-text" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
// //             Patrons
// //           </em>
// //         </motion.h2>
// //         <div className="section-divider mx-auto mt-6" />
// //       </div>

// //       {/* Marquee Container */}
// //       <div className="relative">
// //         {/* Soft edge fades for premium look */}
// //         <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
// //         <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

// //         <motion.div
// //           className="flex gap-6 cursor-grab active:cursor-grabbing"
// //           animate={{
// //             x: ["0%", "-50%"],
// //           }}
// //           transition={{
// //             ease: "linear",
// //             duration: 35, // Adjust speed here (higher = slower)
// //             repeat: Infinity,
// //           }}
// //           // Pause on hover so users can actually read a specific review
// //           whileHover={{ animationPlayState: "paused" }}
// //         >
// //           {INFINITE_TESTIMONIALS.map((t, i) => (
// //             <div
// //               key={`${t.name}-${i}`}
// //               className="flex-shrink-0 w-[350px] md:w-[450px] bg-white border border-[#f2d98a]/50 p-8 relative group hover:border-[#C9A84C] hover:shadow-xl transition-all duration-500"
// //             >
// //               <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors" />

// //               <div className="flex gap-1 mb-4">
// //                 {Array.from({ length: t.rating }).map((_, j) => (
// //                   <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
// //                 ))}
// //               </div>

// //               <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6 italic h-[80px] overflow-hidden">
// //                 &ldquo;{t.text}&rdquo;
// //               </p>

// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="font-medium text-[#1a1a1a] text-sm">{t.name}</p>
// //                   <p className="text-[11px] tracking-wider uppercase text-[#9a9a9a]">
// //                     {t.location}
// //                   </p>
// //                 </div>
// //                 <span className="text-[9px] tracking-[0.2em] uppercase text-[#C9A84C] border border-[#f2d98a] px-3 py-1">
// //                   {t.occasion}
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// // Platform Icon Components
// const GoogleIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//     <path fill="#fff" d="M16.671 15.542l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.002s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.637H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z" />
//   </svg>
// );

// const AirbnbIcon = () => (
//   <div className="w-5 h-5 bg-[#FF5A5F] rounded-full flex items-center justify-center">
//     <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
//       <path d="M11.996 2.005c-1.135 0-2.317.55-3.328 1.547L3.084 9.17A4.475 4.475 0 001.75 12.3c0 2.456 2.015 4.45 4.5 4.45 1.157 0 2.228-.426 3.036-1.127.34-.294.646-.62.915-.967.27.348.575.674.914.968.809.7 1.88 1.126 3.037 1.126 2.484 0 4.5-1.994 4.5-4.45 0-1.184-.486-2.315-1.334-3.13L15.324 3.552c-1.011-.997-2.193-1.547-3.328-1.547zm0 2.296c.636 0 1.25.323 1.83.896l5.54 5.485c.42.404.66.896.66 1.418 0 1.188-.95 2.15-2.126 2.15-1.066 0-1.878-.79-2.288-1.898-.106-.288-.344-.658-.707-.947-.694-.555-1.637-.555-2.332 0-.362.29-.602.66-.707.947-.41 1.107-1.222 1.898-2.288 1.898-1.176 0-2.126-.962-2.126-2.15 0-.522.24-1.014.66-1.418l5.54-5.485c.58-.573 1.194-.896 1.83-.896zm0 5.462a2.3 2.3 0 00-1.48.583c-.356.333-.538.77-.674 1.144-.222.613-.242 1.348.064 1.944.254.492.658.746 1.146.852.124.027.25.04.38.04h.02c1.07 0 1.97-.833 2.16-1.88.167-.923-.15-1.815-.758-2.336-.264-.226-.566-.347-.858-.347z"/>
//     </svg>
//   </div>
// );

// const TESTIMONIALS = [
//   {
//     name: "Roger Pierce",
//     date: "2025-07-22",
//     rating: 5,
//     text: "I'm so glad to be a client of Mango Digital! As a small business owner, having a trusted team to handle my digital marketing and website needs is incredible.",
//     avatar: "https://i.pravatar.cc/150?img=11",
//     platform: "google",
//   },
//   {
//     name: "Raymond Gerard",
//     date: "2023-04-01",
//     rating: 5,
//     text: "Awesome management, food, music night, and locals. Very walkable and close to many restaurants and bars. Highly recommended!",
//     avatar: "https://i.pravatar.cc/150?img=33",
//     platform: "facebook",
//   },
//   {
//     name: "Halle",
//     date: "2025-11-16",
//     rating: 5,
//     text: "Very walkable and close to many restaurants and bars. The market across the street was our go to! The home itself felt very clean and was well maintained.",
//     avatar: "https://i.pravatar.cc/150?img=44",
//     platform: "airbnb",
//   },
//   {
//     name: "Sarah Jenkins",
//     date: "2024-02-14",
//     rating: 5,
//     text: "The communication was stellar from start to finish. They truly understood our vision and executed it flawlessly.",
//     avatar: "https://i.pravatar.cc/150?img=5",
//     platform: "google",
//   },
// ];

// export function TestimonialsSection() {
//   const renderCard = (t, i) => (
//     <div
//       key={`${t.name}-${i}`}
//       // Hardcoding width and white-space to prevent the single-line breaking issue
//       style={{ width: '400px', whiteSpace: 'normal' }}
//       className="flex-shrink-0 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col"
//     >
//       <div className="flex justify-between items-start mb-5">
//         <div className="flex items-center gap-4">
//           <img
//             src={t.avatar}
//             alt={t.name}
//             // Hardcoding image dimensions to prevent massive scaling
//             style={{ width: '56px', height: '56px' }}
//             className="rounded-full object-cover"
//           />
//           <div>
//             <h4 className="font-serif text-gray-900 text-lg leading-tight mb-1">{t.name}</h4>
//             <p className="text-sm text-gray-500 font-medium">{t.date}</p>
//           </div>
//         </div>
//         <div>
//           {t.platform === "google" && <GoogleIcon />}
//           {t.platform === "facebook" && <FacebookIcon />}
//           {t.platform === "airbnb" && <AirbnbIcon />}
//         </div>
//       </div>

//       <div className="flex gap-1.5 mb-5">
//         {Array.from({ length: t.rating }).map((_, j) => (
//           // Explicit fill and color properties added here to stop them from being transparent
//           <Star 
//              key={j} 
//              size={18} 
//              color="#C9A84C" 
//              fill="#C9A84C" 
//              className="text-[#C9A84C]" 
//           />
//         ))}
//       </div>

//       <p className="text-gray-700 leading-relaxed">
//         {t.text}
//       </p>
//     </div>
//   );

//   return (
//     <section className="bg-[#FAF7F2] py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
//         <p className="text-sm tracking-[0.2em] font-medium uppercase text-gray-500 mb-4">
//           Client Stories
//         </p>
//         <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontFamily: "var(--font-serif), serif" }}>
//           What people say
//         </h2>
//       </div>

//       <div className="relative max-w-[1600px] mx-auto">
//         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

//         <div className="flex w-fit overflow-hidden">
//           <motion.div
//             className="flex gap-6 pr-6 shrink-0 cursor-grab active:cursor-grabbing"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{
//               ease: "linear",
//               duration: 35, 
//               repeat: Infinity,
//             }}
//             whileHover={{ animationPlayState: "paused" }}
//           >
//             {TESTIMONIALS.map((t, i) => renderCard(t, i))}
//           </motion.div>

//           <motion.div
//             className="flex gap-6 pr-6 shrink-0 cursor-grab active:cursor-grabbing"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{
//               ease: "linear",
//               duration: 35,
//               repeat: Infinity,
//             }}
//             whileHover={{ animationPlayState: "paused" }}
//             aria-hidden="true"
//           >
//             {TESTIMONIALS.map((t, i) => renderCard(t, i))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


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