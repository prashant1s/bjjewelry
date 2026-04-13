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
        list: [
          { title: "24K Gold", value: "GOLD_24K" },
          { title: "22K Gold", value: "GOLD_22K" },
          { title: "18K Gold", value: "GOLD_18K" },
          { title: "Silver", value: "SILVER" }
        ],
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Gold", value: "Gold" },
          { title: "Silver", value: "Silver" },
          { title: "Corporate Gifting", value: "Corporate_Gifting" },
          { title: "Anklets", value: "Anklets" },
          { title: "Bangles", value: "Bangles" },
          { title: "Belly Chains", value: "Belly_Chains" },
          { title: "Necklaces", value: "Necklaces" },
          { title: "Jewellery Purses", value: "Jewellery_Purses" },
          { title: "Luxury Purses", value: "Luxury_Purses" },
          { title: "Phone Covers", value: "Phone_Covers" },
          { title: "Men's Bracelets", value: "Mens_Bracelets" },
          { title: "Women's Bracelets", value: "Womens_Bracelets" },
          { title: "Unisex Bracelets", value: "Unisex_Bracelets" },
          { title: "Unisex Styles", value: "Unisex_Styles" },
          { title: "Men's Chains", value: "Mens_Chains" },
          { title: "Women's Chains", value: "Womens_Chains" },
          { title: "Unisex Chains", value: "Unisex_Chains" },
          { title: "Men's Watches", value: "Mens_Watches" },
          { title: "Women's Watches", value: "Womens_Watches" },
          { title: "Unisex Watches", value: "Unisex_Watches" },
          { title: "Rings", value: "Rings" },
          { title: "Earrings", value: "Earrings" }
        ],
      },
    },
    { 
      name: "style", 
      title: "Style / Sub-category", 
      type: "string",
      description: "e.g., 'Cuban Link', 'Charm Bracelets', 'Bridal Heavy'" 
    },
    { 
      name: "moq", 
      title: "Minimum Order Quantity (MOQ)", 
      type: "string",
      initialValue: "Contact Us",
      description: "e.g., '100 pairs', '30 sets'" 
    },
    { 
      name: "badge", 
      title: "Badge (Optional)", 
      type: "string",
      description: "e.g., 'BESTSELLER', 'NEW', 'TRENDING'" 
    },
    { name: "images", title: "Images", type: "array", of: [{ type: "cloudinary.asset" }] },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "inStock", title: "In Stock", type: "boolean", initialValue: true },
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
  preview: {
    select: {
      title: 'title',
    }
  }
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