import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity"; 
import ProductClient from "../ProductClient";

const getProductQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    price,
    metal,
    purity,
    weight,
    moq,
    description,
    "images": images[].secure_url,
    category,
    sku
  }
`;

// 👇 1. Notice the type change here: params is now a Promise
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 👇 2. We MUST await the params before extracting the slug in Next.js 15+
  const { slug } = await params;

  // 3. Now we pass the safely unwrapped 'slug' to Sanity
  const product = await sanityClient.fetch(getProductQuery, { slug });

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}