import { product } from '@/data/product';

type ProductKey = keyof typeof product;

export type ProductPage = {
  slug: string;
  key: ProductKey;
  /** Nama jenis tas sebagaimana dicari orang, mis. "Tote Bag" */
  name: string;
  /** Judul H1 halaman */
  heading: string;
  /** Title tag (tanpa suffix, suffix ditambah template layout) */
  metaTitle: string;
};

export const PRODUCT_PAGES: ProductPage[] = [
  { slug: 'backpack', key: 'backpack', name: 'Backpack' },
  { slug: 'tote-bag', key: 'totebag', name: 'Tote Bag' },
  { slug: 'sling-bag', key: 'slingbag', name: 'Sling Bag' },
  { slug: 'waist-bag', key: 'waistbag', name: 'Waist Bag' },
  { slug: 'travel-bag', key: 'travelbag', name: 'Travel Bag' },
  { slug: 'shoes-bag', key: 'shoesbag', name: 'Shoes Bag' },
  { slug: 'totepack', key: 'totepack', name: 'Totepack' },
  { slug: 'pouch', key: 'pouch', name: 'Pouch' },
].map((p) => ({
  ...p,
  key: p.key as ProductKey,
  heading: `Pabrik ${p.name} Custom di Bandung`,
  metaTitle: `Produksi ${p.name} Custom Bandung | Konveksi OEM - Wartiwan Industri`,
}));

export const getProductPage = (slug: string) =>
  PRODUCT_PAGES.find((p) => p.slug === slug);
