import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/admin/'], // Keep Google out of your private dashboard
    },
    sitemap: 'https://bjjewelry.in/sitemap.xml',
  };
}