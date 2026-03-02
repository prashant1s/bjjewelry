import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getFeaturedCollections() {
  return sanityClient.fetch(
    `*[_type == "collection" && featured == true] | order(order asc) {
      _id, title, slug, description, image, itemCount
    }`
  );
}

export async function getProducts(category?: string) {
  const filter = category
    ? `*[_type == "product" && category == $category]`
    : `*[_type == "product"]`;
  return sanityClient.fetch(
    `${filter} | order(createdAt desc) {
      _id, name, slug, price, metal, category, images, description, weight, purity, featured
    }`,
    { category }
  );
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, price, metal, category, images, description, weight, purity, featured,
      "related": *[_type == "product" && category == ^.category && slug.current != $slug][0..3] {
        _id, name, slug, price, images
      }
    }`,
    { slug }
  );
}

export async function getBlogPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0..5] {
      _id, title, slug, excerpt, mainImage, publishedAt, author
    }`
  );
}

export async function getHomepageContent() {
  return sanityClient.fetch(
    `*[_type == "homepage"][0] {
      heroTitle, heroSubtitle, heroImage,
      featuredBanner, announcementText
    }`
  );
}
