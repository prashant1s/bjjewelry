// "use client";
// import { WishlistButton } from "./WishlistButton";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Heart, Eye, ShoppingBag } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { formatPrice } from "@/lib/utils";

// interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   metal: string;
//   category: string;
//   images: string[];
//   purity?: string;
//   weight?: number;
// }

// interface ProductCardProps {
//   product: Product;
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const [wishlisted, setWishlisted] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   const mainImage = product.images[0] ?? "/images/placeholder-jewelry.jpg";
//   const hoverImage = product.images[1] ?? mainImage;

//   return (
//     <div
//       className="group relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="relative overflow-hidden bg-[#FAF7F2] aspect-square">
//         {/* Main image */}
//         <Image
//           src={hovered && product.images.length > 1 ? hoverImage : mainImage}
//           alt={product.name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//         />

//         {/* Overlay actions */}
//         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         {/* Quick actions */}
//         <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//           <button
//             className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-white transition-colors"
//             aria-label="Add to cart"
//           >
//             <ShoppingBag className="w-4 h-4" />
//           </button>
//           <Link
//             href={`/product/${product.slug}`}
//             className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-white transition-colors"
//             aria-label="Quick view"
//           >
//             <Eye className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* Wishlist */}
//         <button
//           className="absolute top-3 right-3 w-9 h-9 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
//           onClick={() => setWishlisted(!wishlisted)}
//           aria-label="Toggle wishlist"
//         >
//           <Heart
//             className={cn("w-4 h-4 transition-colors", wishlisted ? "fill-[#C9A84C] text-[#C9A84C]" : "text-[#9a9a9a]")}
//           />
//         </button>

//         {/* Category badge */}
//         <div className="absolute top-3 left-3">
//           <span className="text-[8px] tracking-[0.2em] uppercase bg-white/90 px-2 py-1 text-[#C9A84C]">
//             {product.metal}
//           </span>
//         </div>
//       </div>

//       {/* Details */}
//       <div className="pt-4 pb-2">
//         <Link href={`/product/${product.slug}`} className="block">
//           <h3
//             className="text-[#1a1a1a] font-light text-base mb-1 hover:text-[#C9A84C] transition-colors line-clamp-1"
//             style={{ fontFamily: "var(--font-serif)" }}
//           >
//             {product.name}
//           </h3>
//         </Link>
//         <div className="flex items-center justify-between">
//           <div>
//             {product.purity && (
//               <p className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-1">
//                 {product.purity} {product.weight && `· ${product.weight}g`}
//               </p>
//             )}
//             <p className="text-[#C9A84C] font-medium">{formatPrice(product.price)}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { WishlistButton } from "./WishlistButton"; // Correctly imported
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  metal: string;
  category: string;
  images: string[];
  purity?: string;
  weight?: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const mainImage = product.images[0] ?? "/images/placeholder-jewelry.jpg";
  const hoverImage = product.images[1] ?? mainImage;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#FAF7F2] aspect-square">
        {/* Main image */}
        <Image
          src={hovered && product.images.length > 1 ? hoverImage : mainImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-white transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>

        {/* ✅ UPDATED: Functional Wishlist Button */}
        {/* We replaced the old <button> with our new custom component */}
        <WishlistButton product={product} />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[8px] tracking-[0.2em] uppercase bg-white/90 px-2 py-1 text-[#C9A84C]">
            {product.metal}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="pt-4 pb-2">
        <Link href={`/product/${product.slug}`} className="block">
          <h3
            className="text-[#1a1a1a] font-light text-base mb-1 hover:text-[#C9A84C] transition-colors line-clamp-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            {product.purity && (
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-1">
                {product.purity} {product.weight && `· ${product.weight}g`}
              </p>
            )}
            <p className="text-[#C9A84C] font-medium">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}