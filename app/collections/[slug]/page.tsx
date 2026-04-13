// import { prisma } from "@/lib/prisma";
// import { notFound } from "next/navigation";
// import CollectionPageClient from "@/components/collections/CollectionPageClient";
// import { MetalType, Category } from "@prisma/client";

// // Define possible sort options
// export type SortOption = "price_asc" | "price_desc" | "newest";

// export default async function Page(props: {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   // 1. Resolve params and searchParams (Next.js 16 requirements)
//   const resolvedParams = await props.params;
//   const resolvedSearchParams = await props.searchParams;

//   // 2. Format the title (e.g. "Kundan Polki")
//   const title = resolvedParams.slug
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");

//   // 3. Parse Filter Parameters from URL
//   const minPrice = Number(resolvedSearchParams.minPrice) || 0;
//   const maxPrice = Number(resolvedSearchParams.maxPrice) || 1000000; // 10 Lakh fallback
//   const metals = (resolvedSearchParams.metal as string)?.split(",") || [];
//   const sortBy = (resolvedSearchParams.sort as SortOption) || "newest";

//   // 4. Build Prisma Query based on active filters
//   const whereClause: any = {
//     price: {
//       gte: minPrice,
//       lte: maxPrice,
//     },
//     inStock: true,
//   };

//   // 👇 PERFECTED LOGIC: Only filter by category if it's NOT the "new-arrivals" page
//   if (resolvedParams.slug !== "new-arrivals") {
//     // Transforms "kundan-polki" -> "Kundan_Polki"
//     const dbCategory = resolvedParams.slug
//       .split("-")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join("_") as Category;
      
//     whereClause.category = dbCategory;
//   }
//   // 👆 ======================================================= 👆

//   // Add metal filtering if any are selected
//   if (metals.length > 0) {
//     whereClause.metal = {
//       in: metals as MetalType[],
//     };
//   }

//   // Define sorting logic
//   const orderByClause: any = {};
//   if (sortBy === "price_asc") orderByClause.price = "asc";
//   if (sortBy === "price_desc") orderByClause.price = "desc";
//   if (sortBy === "newest") orderByClause.createdAt = "desc";

//   // 5. Fetch Products (Server-side)
//   const products = await prisma.product.findMany({
//     where: whereClause,
//     orderBy: orderByClause,
//   });

//   // Serialize dates for Client Component safety
//   const safeProducts = products.map((product) => ({
//     ...product,
//     createdAt: product.createdAt.toISOString(),
//     updatedAt: product.updatedAt.toISOString(),
//   }));

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Dynamic Header */}
//       <div className="relative bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center overflow-hidden">
//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">Collection</p>
//           <h1
//             className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-wide"
//             style={{ fontFamily: "var(--font-serif)" }}
//           >
//             Explore <span className="gold-text">{title}</span> Jewellery
//           </h1>
//           <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
//         </div>
//       </div>

//       {/* 6. Render the Client Brain (Sidebar & Grid) */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <CollectionPageClient 
//           initialProducts={safeProducts}
//           categoryTitle={title}
//           currentFilters={{ minPrice, maxPrice, metals, sortBy }}
//         />
//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { sanityClient } from "@/lib/sanity";
export const revalidate = 30;
export type SortOption = "price_asc" | "price_desc" | "newest";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // 1. Resolve params
  const resolvedParams = await props.params;
  const resolvedSearchParams = await props.searchParams;

  // 2. Format the title
  const title = resolvedParams.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // 3. Parse Filter Parameters
  const minPrice = Number(resolvedSearchParams.minPrice) || 0;
  const maxPrice = Number(resolvedSearchParams.maxPrice) || 1000000;
  const metals = (resolvedSearchParams.metal as string)?.split(",") || [];
  const sortBy = (resolvedSearchParams.sort as SortOption) || "newest";

  // 4. Construct the Sanity GROQ Query
  // We start with the base requirements: It must be a product, in stock, and within the price range.
  let query = `*[_type == "product" && inStock == true && price >= $minPrice && price <= $maxPrice`;
  
  // Create an object to hold our dynamic variables safely
  const queryParams: Record<string, any> = { minPrice, maxPrice };

  // Category Filtering
 if (resolvedParams.slug !== "new-arrivals") {
    query += ` && category == $category`;
    queryParams.category = resolvedParams.slug;
  }
  // Metal Filtering
  if (metals.length > 0) {
    query += ` && metal in $metals`;
    queryParams.metals = metals;
  }

  // Close the filter block
  query += `]`;

  // 5. Add Sorting
  if (sortBy === "price_asc") query += ` | order(price asc)`;
  else if (sortBy === "price_desc") query += ` | order(price desc)`;
  else if (sortBy === "newest") query += ` | order(_createdAt desc)`;

  // 6. Shape the exact data we want back (Projection)
  // This ensures the data perfectly matches your CollectionPageClient expectations
  query += ` {
    "id": _id,
    name,
    "slug": slug.current,
    price,
    metal,
    purity,
    moq,
    badge,
    "images": images[].secure_url, 
    "createdAt": _createdAt,
    "updatedAt": _updatedAt
  }`;

  // 7. Fetch Products from Sanity
  const products = await sanityClient.fetch(query, queryParams);

  // Fallback check if nothing exists
  if (!products) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <div className="relative bg-[#FAF7F2] border-b border-[#f2d98a]/50 py-16 text-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-3">Collection</p>
          <h1
            className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-wide"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Explore <span className="gold-text">{title}</span> Jewellery
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-6" />
        </div>
      </div>

      {/* Render the Client Brain */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CollectionPageClient 
          initialProducts={products}
          categoryTitle={title}
          currentFilters={{ minPrice, maxPrice, metals, sortBy }}
        />
      </div>
    </div>
  );
}
