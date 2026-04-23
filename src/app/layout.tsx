import DictionaryProvider from '@/components/providers/DictionaryProvider';
import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import LayoutTemplates from '@/components/templates/LayoutTemplates';
import { getDictionary, Locale } from '@/lib/dictionary';
import '@/styles/globals.css';
import { classNames } from '@/utils/classNames';
import { HeroUIProvider } from '@heroui/system';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';

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
    'Wartiwan Industri Nusantara Tas',
    'Tas Custom Bandung',
    'Konveksi Tas Terbaik',
  ],
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
    images: ['/assets/hero.jpeg'],
  },
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

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT. Wartiwan Industri Nusantara',
    alternateName: 'Wartiwan Industri',
    url: 'https://www.wartiwanindustri.com/',
    logo: 'https://www.wartiwanindustri.com/assets/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-XXX-XXXX-XXXX',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [
      'https://www.instagram.com/wartiwanindustri/',
      'https://www.linkedin.com/company/pt-wartiwan-industri-nusantara/',
    ],
    description: metadata.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ganti dengan alamat lengkap',
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      postalCode: 'XXXXX',
      addressCountry: 'ID',
    },
  };

  return (
    <html lang={locale}>
      <body className={classNames('antialiased', 'font-custom')}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroUIProvider>
          <ReactQueryProvider>
            <DictionaryProvider>
              <LayoutTemplates dict={dict}>{children}</LayoutTemplates>
            </DictionaryProvider>
          </ReactQueryProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
