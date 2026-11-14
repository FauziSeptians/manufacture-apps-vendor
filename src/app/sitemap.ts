import { MetadataRoute } from 'next';
import { POSTS } from '@/data/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wartiwanindustri.com';

  const newsRoutes = POSTS.map((post) => ({
    url: `${baseUrl}/news/${post.id}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Halaman utama: lastModified = tanggal artikel terbaru, bukan waktu build,
  // supaya Google tidak menerima sinyal "berubah terus" yang tidak akurat.
  const latestPost = POSTS.reduce(
    (latest, post) => (post.publishedAt > latest ? post.publishedAt : latest),
    POSTS[0].publishedAt
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(latestPost),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...newsRoutes,
  ];
}
