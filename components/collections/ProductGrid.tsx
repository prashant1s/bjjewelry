// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Heart } from "lucide-react";

// interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   images: string[];
//   metal: string;
//   purity: string | null;
// }

// export function ProductGrid({ products }: { products: Product[] }) {
  
//   // Clean Formatter
//   const formatCurrency = (value: number) => {
//     return `₹${value.toLocaleString("en-IN")}`;
//   };

//   // If Prisma returns zero results based on filters
//   if (products.length === 0) {
//     return (
//       <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100">
//         <p className="text-5xl mb-6">💎</p>
//         <h3 className="text-xl font-medium text-gray-900 mb-2">No items match your filters.</h3>
//         <p className="text-gray-500 max-w-sm mx-auto text-sm">
//           Try broadening your price range or selecting different metal types to see more of our collection.
//         </p>
//       </div>
//     );
//   }

//   // Render the actual grid
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
//       {products.map((product) => (
//         <div key={product.id} className="group relative">
          
//           {/* Wishlist Button */}
//           <button className="absolute top-3 right-3 z-10 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 hover:border-red-100 hover:text-red-500">
//             <Heart className="w-4 h-4" />
//           </button>

//           {/* Product Image */}
//           <Link href={`/product/${product.slug}`} className="block aspect-[1/1] overflow-hidden bg-gray-100 mb-4 border border-gray-100 group-hover:border-[#f2d98a] transition-colors">
//             {product.images?.[0] ? (
//               <Image
//                 src={product.images[0]}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">BJ Jewelry</div>
//             )}
//           </Link>
          
//           {/* Product Details (Styled for brand) */}
//           <div className="text-center">
//             <h4 
//               className="text-sm font-light text-gray-900 tracking-wide mb-1 whitespace-nowrap overflow-hidden text-ellipsis"
//               style={{ fontFamily: "var(--font-serif)" }}
//             >
//               {product.name}
//             </h4>
            
//             <p className="text-[11px] text-[#C9A84C] uppercase tracking-[0.15em] mb-2 font-medium">
//               {product.metal.replace('GOLD_', '')} {product.purity && `(${product.purity})`}
//             </p>
            
//             <p className="text-base font-medium text-gray-950">
//               {formatCurrency(product.price)}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
// import { Product } from "@/types/product";
interface Product {
  id: string;
  name: string;
  slug: string;
  images: string[];
  metal: string;
  purity: string | null;
  moq: string;
  badge?: string;
}

export function ProductGrid({ products }: { products: Product[] }) {
  
  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100">
        <p className="text-5xl mb-6">💎</p>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No items match your filters.</h3>
        <p className="text-gray-500 max-w-sm mx-auto text-sm">
          Try broadening your search or selecting different metal types to see more of our collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 items-start">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group flex flex-col bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow duration-300 h-full"
        >
          {/* --- Top Half: Image, Badge, and Wishlist --- */}
          <div className="relative aspect-square w-full bg-gray-50 overflow-hidden border-b border-gray-100 flex-shrink-0">
            
            {/* Dynamic Red Badge */}
            {product.badge && (
              <div className="absolute top-2 left-0 md:top-4 md:left-0 z-10 bg-[#c41e3a] text-white text-[8px] md:text-[9px] font-bold tracking-widest uppercase px-2 md:px-3 py-1">
                {product.badge}
              </div>
            )}

            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-1.5 md:p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 opacity-0 group-hover:opacity-100 hover:text-[#c41e3a] hover:bg-white transition-all shadow-sm">
              <Heart className="w-3 h-3 md:w-4 md:h-4" />
            </button>

            {/* Product Image */}
            <Link href={`/product/${product.slug}`} className="block w-full h-full">
              {product.images?.[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 tracking-widest uppercase">
                  BJ Jewelry
                </div>
              )}
            </Link>
          </div>

          {/* --- Bottom Half: Details & Button --- */}
          <div className="flex flex-col flex-grow p-3 md:p-5 justify-between bg-white">
            <div className="mb-3 md:mb-4 text-left">
              
              {/* Product Title */}
              <Link href={`/product/${product.slug}`}>
                <h4 
                  className="text-[13px] md:text-[15px] text-gray-900 mb-1.5 hover:text-[#c41e3a] transition-colors line-clamp-2 leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.name}
                </h4>
              </Link>

              {/* MOQ Label */}
              <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                MOQ: {product.moq || "Contact Us"}
              </p>
            </div>

            {/* Send Inquiry Button */}
            <button 
              className="w-full mt-auto bg-[#c41e3a] hover:bg-[#a01830] text-white text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase py-2.5 md:py-3.5 transition-colors duration-300 rounded-sm"
              onClick={() => {
                alert(`Opening inquiry form for ${product.name}`);
              }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
