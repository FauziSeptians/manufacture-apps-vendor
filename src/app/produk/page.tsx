import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { product } from '@/data/product';
import { PRODUCT_PAGES } from '@/data/productPages';

export const metadata: Metadata = {
  title: {
    absolute:
      'Katalog Tas Custom Bandung | Backpack, Tote Bag, Sling Bag - Wartiwan Industri',
  },
  description:
    'Katalog produksi tas custom B2B & OEM di Bandung: backpack, tote bag, sling bag, waist bag, travel bag, shoes bag, totepack, dan pouch. Minimal order 50 pcs.',
  alternates: { canonical: '/produk' },
};

export default function ProductIndexPage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="container mx-auto px-6 pt-32 pb-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="font-semibold text-amber-600">
            Beranda
          </Link>{' '}
          / <span>Produk</span>
        </nav>
        <p className="text-xs font-bold tracking-[0.4em] text-amber-500 uppercase">
          Konveksi Tas B2B &amp; OEM
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-bold text-slate-900 uppercase md:text-6xl">
          Katalog Tas Custom Pabrik Bandung
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Pilih jenis tas yang ingin diproduksi. Semua produk tersedia dengan
          minimal order 50 pcs dan branding kustom (bordir &amp; sablon).
        </p>
      </div>

      <section className="container mx-auto px-6 py-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_PAGES.map((p) => {
            const items = product[p.key];
            return (
              <li key={p.slug}>
                <Link
                  href={`/produk/${p.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-slate-50 transition hover:bg-slate-100"
                >
                  <Image
                    src={items[0].url}
                    alt={`${p.name} custom produksi OEM Wartiwan Industri Bandung`}
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-slate-900">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {items.length} model
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
