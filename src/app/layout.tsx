import DictionaryProvider from '@/components/providers/DictionaryProvider';
import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import LayoutTemplates from '@/components/templates/LayoutTemplates';
import { getDictionary, Locale } from '@/lib/dictionary';
import '@/styles/globals.css';
import { classNames } from '@/utils/classNames';
import { HeroUIProvider } from '@heroui/system';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wartiwanindustri.com/'),
  title: {
    default:
      'PT. Wartiwan Industri Nusantara | Manufaktur Tas & Partner Brand Fashion',
    template: '%s | Wartiwan Industri',
  },
  description:
    'Pabrik manufaktur tas spesialis B2B & OEM sejak 2001. Kapasitas 10.000 unit/bulan. Partner resmi 3Second, Greenlight, dan Mills. Kualitas ekspor dengan pengerjaan presisi.',
  keywords: [
    'Pabrik Tas Bandung',
    'Vendor Tas 3Second',
    'Supplier Tas Mills',
    'Konveksi Tas B2B',
    'Manufaktur Tas Lokal Kualitas Ekspor',
    'Custom Backpack Manufacturer Indonesia',
    'Jasa Pembuatan Tas Custom',
    'Produksi Tas Skala Besar',
    'Original Equipment Manufacturer Tas',
    'Wartiwan Industri Nusantara',
    'Wartiwan Industrial',
    'Wartiwan Industri',
  ],
  // 1. Tambahkan Robots untuk memastikan Google mengindeks halaman ini
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7182l0rzGamHxCiQcAhUU1dXF6KMBDy0eDoOT7sfMRA',
  },
  // 2. Perkuat OpenGraph untuk Rich Snippets
  openGraph: {
    type: 'website',
    url: 'https://www.wartiwanindustri.com/',
    title: 'PT. Wartiwan Industri Nusantara - Industrial Excellence since 2001',
    description:
      'Penyedia solusi produksi tas skala besar (OEM/B2B) dengan standar internasional. Kapasitas 10rb+ unit per bulan.',
    siteName: 'Wartiwan Industri Nusantara',
    locale: 'id_ID',
    images: [
      {
        url: '/assets/hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fasilitas Produksi PT. Wartiwan Industri Nusantara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Wartiwan Industri Nusantara | Pabrik Tas Berkualitas',
    description: 'Expertise in Bag Manufacturing & Supply Chain since 2001.',
    images: ['/assets/hero.jpeg'], // Pastikan path image konsisten
  },
  // 3. Tambahkan Category dan Alternates
  category: 'manufacturing',
  alternates: {
    canonical: 'https://www.wartiwanindustri.com/',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value || 'id') as Locale;

  const dict = await getDictionary(locale);

  return (
    <html lang="en">
      <body className={classNames('antialiased', 'font-custom')}>
        <HeroUIProvider>
          <ReactQueryProvider>
            <DictionaryProvider>
              <LayoutTemplates>{children}</LayoutTemplates>
            </DictionaryProvider>
          </ReactQueryProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
