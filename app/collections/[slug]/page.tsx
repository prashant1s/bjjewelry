import { notFound } from "next/navigation";
import CollectionPageClient from "@/components/collections/CollectionPageClient";
import { sanityClient } from "@/lib/sanity";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export type SortOption = "price_asc" | "price_desc" | "newest";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // 1. Resolve params
  const resolvedParams = await props.params;
  const resolvedSearchParams = await props.searchParams;

  // 2. Format the title for the header UI (e.g. "Belly Chains")
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
  let query = `*[_type == "product"`;
  const queryParams: Record<string, any> = {};

  // CATEGORY: Format to match Sanity schema exact values (e.g., 'Bangles' or 'Belly_Chains')
  if (resolvedParams.slug !== "new-arrivals") {
    const formattedCategory = resolvedParams.slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("_");
      
    query += ` && category == $category`;
    queryParams.category = formattedCategory;
  }

  // PRICE: We check if the price is within range, OR if the price hasn't been typed in yet
  query += ` && (!defined(price) || (price >= $minPrice && price <= $maxPrice))`;
  queryParams.minPrice = minPrice;
  queryParams.maxPrice = maxPrice;

  // INSTOCK: If you forgot to toggle 'inStock' in Sanity, it defaults to showing the product
  query += ` && (!defined(inStock) || inStock == true)`;

  // METAL: Only run if the user checks a metal filter box
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

  // 6. Shape the exact data
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