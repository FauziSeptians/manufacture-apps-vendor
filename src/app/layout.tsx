import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import LayoutTemplates from '@/components/templates/LayoutTemplates';
import '@/styles/globals.css';
import { classNames } from '@/utils/classNames';
import { HeroUIProvider } from '@heroui/system';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wartiwan-industri.vercel.app'),
  title: {
    default:
      'PT. Wartiwan Industri Nusantara | Manufaktur Tas & Partner Brand Fashion',
    template: '%s | Wartiwan Industri',
  },
  description:
    'Pabrik manufaktur tas spesialis B2B & Original Equipment Manufacturer (OEM) sejak 2001. Kapasitas 10.000 unit/bulan. Partner resmi 3Second, Greenlight, dan Mills.',
  keywords: [
    'Pabrik Tas Bandung',
    'Vendor Tas 3Second',
    'Supplier Tas Mills',
    'Konveksi Tas B2B',
    'Manufaktur Tas Lokal Kualitas Ekspor',
    'Custom Backpack Manufacturer Indonesia',
  ],
  verification: {
    google: 'SKxQvi2n8LCqW5ZiauIQkF27Ha-OlFPfqWbLyHMSJBg',
  },
  openGraph: {
    type: 'website',
    url: 'https://wartiwan-industri.vercel.app',
    title: 'Wartiwan Industri Nusantara - Industrial Excellence since 2001',
    description:
      'Solusi produksi tas skala besar dengan standar kualitas internasional.',
    images: ['/og-pabrik.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wartiwan Industri Nusantara',
    description: 'Expertise in Bag Manufacturing & Supply Chain.',
    images: ['/og-pabrik.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames('antialiased', 'font-custom')}>
        <HeroUIProvider>
          <ReactQueryProvider>
            <LayoutTemplates>{children}</LayoutTemplates>
          </ReactQueryProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
