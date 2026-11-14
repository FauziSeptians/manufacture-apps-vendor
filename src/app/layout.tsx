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

const SITE_DESCRIPTION =
  'Pabrik tas di Bandung untuk brand fashion & merchandise. Konveksi tas B2B & OEM: backpack, tote bag, sling bag, waistbag. Minimal order 50 pcs, kapasitas 10.000+ unit/bulan. Produksi custom bordir & sablon.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wartiwanindustri.com/'),
  title: {
    default:
      'Pabrik Tas Bandung | Konveksi Tas B2B & OEM - Wartiwan Industri Nusantara',
    template: '%s | Wartiwan Industri Nusantara',
  },
  description: SITE_DESCRIPTION,
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
    title: 'Pabrik Tas Bandung | Konveksi Tas B2B & OEM - Wartiwan Industri',
    description:
      'Penyedia solusi produksi tas skala besar (OEM/B2B) untuk brand fashion. Minimal order 50 pcs, kapasitas 10rb+ unit per bulan.',
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
    title: 'Pabrik Tas Bandung | Konveksi Tas B2B & OEM - Wartiwan Industri',
    description:
      'Konveksi tas B2B & OEM di Bandung. Backpack, tote bag, sling bag custom dengan minimal order 50 pcs.',
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

  // JSON-LD for SEO (data kontak diambil dari section Hubungi Kami di website)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.wartiwanindustri.com/#website',
        url: 'https://www.wartiwanindustri.com/',
        name: 'Wartiwan Industri Nusantara',
        alternateName: ['Wartiwan Industri', 'PT WIN', 'Wartiwan Industrial'],
        inLanguage: 'id-ID',
        publisher: { '@id': 'https://www.wartiwanindustri.com/#organization' },
      },
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': 'https://www.wartiwanindustri.com/#organization',
        name: 'PT. Wartiwan Industri Nusantara',
        alternateName: 'Wartiwan Industri',
        url: 'https://www.wartiwanindustri.com/',
        logo: 'https://www.wartiwanindustri.com/assets/logo/logo-wartiwan.png',
        image: 'https://www.wartiwanindustri.com/assets/hero.jpeg',
        description: SITE_DESCRIPTION,
        email: 'wartiwanindustrial@gmail.com',
        telephone: '+62-812-2070-9584',
        areaServed: 'ID',
        knowsAbout: [
          'Pabrik tas Bandung',
          'Konveksi tas B2B',
          'OEM tas custom',
          'Backpack',
          'Tote bag',
          'Sling bag',
          'Waistbag',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+62-812-2070-9584',
          contactType: 'sales',
          areaServed: 'ID',
          availableLanguage: ['Indonesian', 'English'],
        },
        sameAs: [
          'https://www.instagram.com/wartiwanindustri/',
          'https://www.tiktok.com/@wartiwanindustri',
          'https://www.linkedin.com/company/pt-wartiwan-industri-nusantara/',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Mekarjati RT 03 RW 05, Pasir Biru, Kec. Cibiru',
          addressLocality: 'Kota Bandung',
          addressRegion: 'Jawa Barat',
          postalCode: '40615',
          addressCountry: 'ID',
        },
      },
    ],
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
