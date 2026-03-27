// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wartiwanindustri.com';

  // Daftar ID berita kamu (Sesuai slug yang kamu gunakan)
  const newsIds = [
    'perjalanan-bersama-3second',
    'kolaborasi-bersama-mills',
    'tantangan-masa-pandemi',
  ];

  // Map berita ke format sitemap
  const newsRoutes = newsIds.map((id) => ({
    url: `${baseUrl}/news/${id}`,
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
