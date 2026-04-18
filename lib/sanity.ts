// Use next-sanity instead of @sanity/client for better Next.js App Router performance
import { createClient } from "next-sanity"; 
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-04-13", 
  useCdn: process.env.NODE_ENV === "production",
});

const builder = createImageUrlBuilder(sanityClient);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getFeaturedCollections() {
  return sanityClient.fetch(
    `*[_type == "collection" && featured == true] | order(order asc) {
      _id, 
      title, 
      "slug": slug.current, 
      description, 
      "image": image.secure_url,
      itemCount
    }`
  );
}
export async function getProducts(category?: string) {
  const filter = category
    ? `*[_type == "product" && category == $category]`
    : `*[_type == "product"]`;
    
  return sanityClient.fetch(
    `${filter} | order(_createdAt desc) {
      _id, name, "slug": slug.current, price, metal, category, description, weight, purity, featured,
      moq, badge, style, inStock,
      "images": images[].secure_url
    }`,
    { category }
  );
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, "slug": slug.current, price, metal, category, description, weight, purity, featured,
      moq, badge, style, inStock,
      "images": images[].secure_url,
      
      "related": *[_type == "product" && category == ^.category && slug.current != $slug][0..3] {
        _id, name, "slug": slug.current, price, moq, badge, "images": images[].secure_url
      }
    }`,
    { slug }
  );
}

export async function getBlogPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0..5] {
      _id, 
      title, 
      "slug": slug.current, 
      excerpt, 
      "mainImage": mainImage.secure_url,
      publishedAt, 
      author
    }`
  );
}

export async function getHomepageContent() {
  return sanityClient.fetch(
    `*[_type == "homepage"][0] {
      heroTitle, 
      heroSubtitle, 
      "heroImage": heroImage.secure_url,       
      "featuredBanner": featuredBanner.secure_url, 
      announcementText
    }`
  );
}

