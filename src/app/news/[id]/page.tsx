import NewsDetailPage from '@/page/NewsDetailPage';
import { POSTS } from '@/data/post';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { cookies } from 'next/headers';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = POSTS.find((p) => p.id === parseInt(resolvedParams.id));

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${post.id}`,
    },
    openGraph: {
      type: 'article',
      url: `/news/${post.id}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const post = POSTS.find((p) => p.id === parseInt(id));

  if (!post) notFound();

  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value || 'id') as Locale;
  const dict = await getDictionary(locale);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.wartiwanindustri.com${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'PT. Wartiwan Industri Nusantara',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.wartiwanindustri.com/assets/logo/logo-wartiwan.png',
      },
    },
    mainEntityOfPage: `https://www.wartiwanindustri.com/news/${post.id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NewsDetailPage id={id} dict={dict} />
    </>
  );
}
