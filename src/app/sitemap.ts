import { MetadataRoute } from 'next';
import { POSTS } from '@/data/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wartiwanindustri.com';

  const newsRoutes = POSTS.map((post) => ({
    url: `${baseUrl}/news/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...newsRoutes,
  ];
}
