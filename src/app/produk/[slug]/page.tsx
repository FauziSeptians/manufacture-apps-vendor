import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { product } from '@/data/product';
import {
  PRODUCT_PAGES,
  getProductPage,
  type ProductPage,
} from '@/data/productPages';

type Props = { params: Promise<{ slug: string }> };

const BASE_URL = 'https://www.wartiwanindustri.com';
const WA_URL = 'https://wa.me/6281220709584';

export function generateStaticParams() {
  return PRODUCT_PAGES.map((p) => ({ slug: p.slug }));
}

function getDescription(page: ProductPage) {
  return product[page.key][0].description.id;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) return {};

  const items = product[page.key];
  const description = `${page.heading}. Konveksi ${page.name.toLowerCase()} B2B & OEM dengan minimal order 50 pcs, bordir dan sablon logo. Pilihan ${items.length} model di katalog Wartiwan Industri Nusantara.`;

  return {
    title: { absolute: page.metaTitle },
    description,
    alternates: { canonical: `/produk/${page.slug}` },
    openGraph: {
      type: 'website',
      url: `/produk/${page.slug}`,
      title: { absolute: page.metaTitle },
      description,
      images: [items[0].url],
    },
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) notFound();

  const items = product[page.key];
  const others = PRODUCT_PAGES.filter((p) => p.slug !== page.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.name,
            item: `${BASE_URL}/produk/${page.slug}`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: page.heading,
        url: `${BASE_URL}/produk/${page.slug}`,
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: `${page.name} custom OEM`,
        provider: { '@id': `${BASE_URL}/#organization` },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-6 pt-32 pb-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="font-semibold text-amber-600">
            Beranda
          </Link>{' '}
          / <span>{page.name}</span>
        </nav>

        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.4em] text-amber-500 uppercase">
            Konveksi Tas B2B &amp; OEM
          </p>
          <h1 className="mt-4 text-4xl leading-[1.1] font-bold text-slate-900 uppercase md:text-6xl">
            {page.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {getDescription(page)}
          </p>

          <ul className="mt-8 flex flex-col gap-2 text-slate-700">
            <li>Minimal order 50 pcs per artikel</li>
            <li>Branding kustom: bordir dan sablon logo</li>
            <li>Produksi di Cibiru, Kota Bandung</li>
          </ul>

          <a
            href={WA_URL}
            className="mt-10 inline-block rounded-full bg-slate-900 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase hover:bg-slate-700"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>

      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          Katalog {page.name} ({items.length} model)
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <figure
              key={item.url}
              className="overflow-hidden rounded-3xl bg-slate-50"
            >
              <Image
                src={item.url}
                alt={`${item.title} - ${page.name} custom produksi OEM Wartiwan Industri Bandung`}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="p-4 text-sm font-semibold text-slate-800">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Jenis tas lainnya
        </h2>
        <ul className="flex flex-wrap gap-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/produk/${p.slug}`}
                className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-amber-500 hover:text-amber-600"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
