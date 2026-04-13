import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";

// Import all the schemas we wrote earlier!
import { productSchema, collectionSchema, postSchema, homepageSchema } from "./sanity/schemas"; 

export default defineConfig({
  basePath: "/studio", // This tells it where the dashboard lives
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "BJ Jewelry Admin",

  plugins: [
    structureTool(), 
    cloudinarySchemaPlugin()
  ],

  schema: {
    types: [
      productSchema, 
      collectionSchema, 
      postSchema, 
      homepageSchema
    ],
  },
});