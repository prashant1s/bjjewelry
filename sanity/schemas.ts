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
  options: {
    list: [

      // Anklets
      { title: "Classic Chain Anklets", value: "classic-chain-anklets" },
      { title: "Beaded Anklets", value: "beaded-anklets" },
      { title: "Charm Anklets", value: "charm-anklets" },
      { title: "Layered Anklets", value: "layered-anklets" },
      { title: "Adjustable Anklets", value: "adjustable-anklets" },
      { title: "Oxidised Anklets", value: "oxidised-anklets" },
      { title: "Temple Style Anklets", value: "temple-style-anklets" },
      { title: "Tribal Anklets", value: "tribal-anklets" },
      { title: "Bridal Heavy Anklets", value: "bridal-heavy-anklets" },
      { title: "Minimal Anklets", value: "minimal-anklets" },
      { title: "Personalized Anklets", value: "personalized-anklets" },

      // Bangles
      { title: "Classic Plain Bangles", value: "classic-plain-bangles" },
      { title: "Kada Bangles", value: "kada-bangles" },
      { title: "Openable Bangles", value: "openable-bangles" },
      { title: "Cuff Bangles", value: "cuff-bangles" },
      { title: "Stackable Bangles", value: "stackable-bangles" },
      { title: "Stone Studded Bangles", value: "stone-studded-bangles" },
      { title: "Temple Bangles", value: "temple-bangles" },
      { title: "Oxidised Bangles", value: "oxidised-bangles" },
      { title: "Meenakari Bangles", value: "meenakari-bangles" },
      { title: "Bridal Bangles", value: "bridal-bangles" },
      { title: "Minimal Bangles", value: "minimal-bangles" },

      // Belly Chains
      { title: "Classic Waist Chains", value: "classic-waist-chains" },
      { title: "Layered Belly Chains", value: "layered-belly-chains" },
      { title: "Charm Belly Chains", value: "charm-belly-chains" },
      { title: "Minimal Waist Chains", value: "minimal-waist-chains" },
      { title: "Bridal Kamarband", value: "bridal-kamarband" },
      { title: "Temple Kamarband", value: "temple-kamarband" },
      { title: "Beaded Waist Chains", value: "beaded-waist-chains" },
      { title: "Adjustable Belly Chains", value: "adjustable-belly-chains" },

      // Men's Bracelets
      { title: "Chain Bracelets", value: "men-chain-bracelets" },
      { title: "Cuban Link Bracelets", value: "cuban-link-bracelets" },
      { title: "Rope Bracelets", value: "rope-bracelets" },
      { title: "Leather + Silver Bracelets", value: "leather-silver-bracelets" },
      { title: "Kada Bracelets", value: "kada-bracelets" },
      { title: "Beaded Bracelets", value: "men-beaded-bracelets" },
      { title: "ID Plate Bracelets", value: "id-plate-bracelets" },

      // Women's Bracelets
      { title: "Charm Bracelets", value: "charm-bracelets" },
      { title: "Tennis Bracelets", value: "tennis-bracelets" },
      { title: "Cuff Bracelets", value: "cuff-bracelets" },
      { title: "Chain Bracelets", value: "women-chain-bracelets" },
      { title: "Adjustable Bracelets", value: "adjustable-bracelets" },
      { title: "Stone Studded Bracelets", value: "stone-studded-bracelets" },
      { title: "Minimal Bracelets", value: "minimal-bracelets" },

      // Chains
      { title: "Cuban Chain", value: "cuban-chain" },
      { title: "Rope Chain", value: "rope-chain" },
      { title: "Franco Chain", value: "franco-chain" },
      { title: "Figaro Chain", value: "figaro-chain" },
      { title: "Paperclip Chain", value: "paperclip-chain" },
      { title: "Snake Chain", value: "snake-chain" },
      { title: "Cable Chain", value: "cable-chain" },

      // Necklaces
      { title: "Pendant Necklaces", value: "pendant-necklaces" },
      { title: "Layered Necklaces", value: "layered-necklaces" },
      { title: "Choker Necklaces", value: "choker-necklaces" },
      { title: "Statement Necklaces", value: "statement-necklaces" },
      { title: "Temple Necklaces", value: "temple-necklaces" },
      { title: "Oxidised Necklaces", value: "oxidised-necklaces" },
      { title: "Bridal Necklaces", value: "bridal-necklaces" },
      { title: "Gemstone Necklaces", value: "gemstone-necklaces" },
      { title: "Minimal Necklaces", value: "minimal-necklaces" },
      { title: "Personalized Necklaces", value: "personalized-necklaces" },

      // Watches
      { title: "Metal Strap Watches", value: "metal-strap-watches" },
      { title: "Chronograph Watches", value: "chronograph-watches" },
      { title: "Fashion Watches", value: "fashion-watches" },
      { title: "Designer Watches", value: "designer-watches" },
      { title: "Skeleton Watches", value: "skeleton-watches" },

    ]
  }
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'images.0' // Shows the first Cloudinary image in the list
    },
    prepare({ title, subtitle, media }: { title: string; subtitle: number; media: any }) {
      return {
        title,
        subtitle: subtitle ? `₹${subtitle}` : 'No price set',
        media
      }
    }
  }
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
      media: 'image'
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
      of: [{ type: "block" }, { type: "cloudinary.asset" }],
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
    { name: "heroImage", title: "Hero Image", type: "cloudinary.asset" },
    { name: "announcementText", title: "Announcement Banner", type: "string" },
    { name: "featuredBanner", title: "Featured Banner Image", type: "image" },
  ],
};