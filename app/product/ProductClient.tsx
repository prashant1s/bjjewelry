"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShieldCheck, Truck, ChevronLeft } from "lucide-react";
import { WishlistButton } from "../../components/WishlistButton";

// Define the shape of the data coming from Sanity
interface SanityProduct {
  _id: string;
  name: string;
  slug: string;
  price: number;
  metal: string;
  purity: string;
  weight: string;
  moq: string;
  description: string;
  images: string[];
  category: string;
  sku: string;
}

export default function ProductClient({ product }: { product: SanityProduct }) {
  // Use the first image from Sanity, or a fallback if none exist
  const [activeImage, setActiveImage] = useState(product?.images?.[0] || "/placeholder.png");

  // WhatsApp Message Generator
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "919444963811"; 
    const message = `Hello BJ Jewelry! I am interested in inquiring about:\n\n*${product.name}*\nSKU: ${product.sku || 'N/A'}\nMOQ: ${product.moq || 'N/A'}\n\nCould you please share more details and current pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-[#FAF7F2] border-b border-[#f2d98a]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/collections" className="inline-flex items-center text-[10px] uppercase tracking-widest text-[#9a9a9a] hover:text-[#C9A84C] transition-colors">
            <ChevronLeft className="w-3 h-3 mr-1" /> Back to Collections
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: Image Gallery (Amazon Style) */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 md:items-start">
            
            {/* 1. Thumbnails (Bottom on Mobile, Left on Desktop) */}
            {product?.images && product.images.length > 1 && (
              <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto w-full md:w-20 flex-shrink-0 snap-x md:snap-y [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] order-2 md:order-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    onMouseEnter={() => setActiveImage(img)} // Amazon-style hover effect!
                    className={`relative aspect-square w-16 md:w-full flex-shrink-0 snap-start border-2 rounded-sm transition-all duration-200 overflow-hidden ${
                      activeImage === img ? "border-[#C9A84C] shadow-sm" : "border-gray-200 hover:border-[#f2d98a]"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}

            {/* 2. Main Big Image (Top on Mobile, Right on Desktop) */}
            <div className="relative aspect-square w-full bg-[#f8f8f8] border border-gray-100 rounded-sm overflow-hidden order-1 md:order-2">
              {activeImage && activeImage !== "/placeholder.png" ? (
                <Image src={activeImage} alt={product.name} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
              )}
              
              {/* Wishlist Button */}
              <div className="absolute top-4 right-4 z-10 scale-125">
                <WishlistButton product={product} />
              </div>
            </div>

          </div>

          {/* RIGHT: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-[11px] tracking-[0.2em] text-[#C9A84C] uppercase mb-2 font-semibold">
              {product.category || "Jewelry"}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] font-light mb-4 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              {product.name}
            </h1>
            
            <p className="text-2xl text-gray-800 mb-6">
              {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on Request"}
            </p>

            <div className="w-full h-px bg-gray-100 mb-8" />

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-y-4 mb-8">
              {product.metal && (
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Metal</p>
                  <p className="text-sm font-medium text-gray-800">{product.metal}</p>
                </div>
              )}
              {product.purity && (
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Purity</p>
                  <p className="text-sm font-medium text-gray-800">{product.purity}</p>
                </div>
              )}
              {product.weight && (
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Weight (Approx)</p>
                  <p className="text-sm font-medium text-gray-800">{product.weight}</p>
                </div>
              )}
              {product.sku && (
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">SKU</p>
                  <p className="text-sm font-medium text-gray-800">{product.sku}</p>
                </div>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="mb-10">
                <h3 className="text-[11px] uppercase tracking-widest text-[#1a1a1a] mb-3 font-semibold">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="bg-[#FAF7F2] border border-[#f2d98a]/50 p-6 rounded-sm mb-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-semibold">Minimum Order Qty</span>
                <span className="text-sm font-bold text-[#c41e3a]">{product.moq || "Contact Us"}</span>
              </div>
              
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 flex items-center justify-center gap-3 rounded-sm transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-[12px] uppercase tracking-[0.15em] font-bold">Inquire on WhatsApp</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#1a1a1a] font-semibold mb-0.5">100% Certified</p>
                  <p className="text-[10px] text-gray-500">BIS Hallmarked & Authentic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#1a1a1a] font-semibold mb-0.5">Secure Shipping</p>
                  <p className="text-[10px] text-gray-500">Fully insured delivery</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}