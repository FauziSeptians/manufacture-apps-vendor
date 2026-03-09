'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Logo = () => (
  <svg
    fill="none"
    height="32"
    viewBox="0 0 32 32"
    width="32"
    className="text-white"
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function NavbarComponent({
  menus,
  contactPerson,
}: {
  menus: { key: string; title: string; route: string }[];
  contactPerson: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Lock scroll body
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // 2. Handle scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppRedirect = () => {
    const cleanNumber = contactPerson.replace(/\D/g, '').replace(/^0/, '62');
    const url = `https://wa.me/${cleanNumber}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: string
  ) => {
    if (route.startsWith('#')) {
      e.preventDefault();
      const targetId = route.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 px-6 py-4 transition-all duration-300',
        // PERBAIKAN DI SINI:
        // Jika menu mobile terbuka, paksa background jadi solid slate-950
        // Jika tertutup, baru gunakan logika scroll (transparent -> slate-950/80)
        mobileMenuOpen
          ? 'bg-slate-950'
          : isScrolled
            ? 'border-b border-slate-800 bg-slate-950/60 py-3 backdrop-blur-md'
            : 'bg-slate-950'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group relative z-50 flex items-center gap-3"
        >
          <Logo />
          <div className="flex flex-col leading-tight">
            <span className="font-bold tracking-tight text-white uppercase">
              WARTIWAN
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Industrial
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <Link
              key={menu.key}
              href={menu.route}
              onClick={(e) => handleScrollTo(e, menu.route)}
              className="group relative text-sm font-medium text-slate-200 transition-colors hover:text-white"
            >
              {menu.title}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleWhatsAppRedirect}
            className="hidden rounded-full border-none bg-amber-500 px-6 text-white transition-colors hover:bg-amber-600 md:flex"
          >
            Hubungi Kami
          </Button>

          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50 text-white hover:bg-slate-800 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={cn(
          // Gunakan h-screen untuk memastikan tinggi penuh layar
          // Gunakan top-0 agar menutup area navbar sepenuhnya (karena navbar sudah di-handle oleh parent)
          'fixed inset-0 z-40 flex h-screen w-screen flex-col bg-slate-950 p-6 pt-24 transition-transform duration-500 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col">
          {menus.map((menu) => (
            <Link
              key={menu.key}
              href={menu.route}
              onClick={(e) => handleScrollTo(e, menu.route)}
              className="border-b border-slate-900 py-6 text-2xl font-bold text-slate-200 hover:bg-amber-500 active:text-amber-500"
            >
              {menu.title}
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-10">
          <Button
            onClick={handleWhatsAppRedirect}
            className="w-full bg-amber-500 py-7 text-lg font-bold text-white shadow-lg transition-all active:scale-95"
          >
            <Phone className="mr-2 h-6 w-6" /> Hubungi Kami
          </Button>
        </div>
      </div>
    </nav>
  );
}
