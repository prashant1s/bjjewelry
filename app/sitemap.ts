import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Fetch all collection slugs from Sanity
  const query = `*[_type == "collection"] { "slug": slug.current }`;
  const collections = await sanityClient.fetch(query);

  const collectionEntries = collections.map((col: any) => ({
    url: `https://bjjewelry.in/collections/${col.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: 'https://bjjewelry.in',
      lastModified: new Date(),
      priority: 1,
    },
    ...collectionEntries,
  ];
}