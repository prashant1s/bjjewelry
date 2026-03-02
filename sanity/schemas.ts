// Sanity CMS Schema Definitions for BJ Jewelry
// Use these in your Sanity Studio project

export const productSchema = {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    { name: "name", title: "Product Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "description", title: "Description", type: "text" },
    { name: "price", title: "Price (₹)", type: "number" },
    { name: "weight", title: "Weight (grams)", type: "number" },
    { name: "purity", title: "Purity", type: "string" },
    {
      name: "metal",
      title: "Metal Type",
      type: "string",
      options: {
        list: ["24K Gold", "22K Gold", "18K Gold", "Silver", "Platinum", "Diamond", "Kundan", "Gemstone"],
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Bridal", "Diamond", "Temple", "Kundan & Polki", "Men's", "Silver", "New Arrivals"],
      },
    },
    { name: "images", title: "Images", type: "array", of: [{ type: "image" }] },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "inStock", title: "In Stock", type: "boolean" },
  ],
};

export const collectionSchema = {
  name: "collection",
  title: "Collections",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Cover Image", type: "image" },
    { name: "featured", title: "Featured on Homepage", type: "boolean" },
    { name: "order", title: "Display Order", type: "number" },
    { name: "itemCount", title: "Item Count Display", type: "string" },
  ],
};

export const postSchema = {
  name: "post",
  title: "Blog Posts",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "mainImage", title: "Main Image", type: "image" },
    { name: "author", title: "Author", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};

export const homepageSchema = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "text" },
    { name: "heroImage", title: "Hero Image", type: "image" },
    { name: "announcementText", title: "Announcement Banner", type: "string" },
    { name: "featuredBanner", title: "Featured Banner Image", type: "image" },
  ],
};
