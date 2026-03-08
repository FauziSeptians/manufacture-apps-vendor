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

  // --- LOGIKA REDIRECT WHATSAPP ---
  const handleWhatsAppRedirect = () => {
    // Membersihkan karakter non-angka dan mengubah awalan 0 menjadi 62
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 px-6 py-4 transition-all duration-300',
        isScrolled
          ? 'border-b border-slate-800 bg-slate-950/80 py-3 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group flex items-center gap-3"
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
          {/* Tombol Desktop */}
          <Button
            onClick={handleWhatsAppRedirect}
            className="hidden rounded-full border-none bg-amber-500 px-6 text-white transition-colors hover:bg-amber-600 md:flex"
          >
            Hubungi Kami
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-800 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col gap-6 bg-slate-950 p-6 transition-transform duration-500 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {menus.map((menu) => (
          <Link
            key={menu.key}
            href={menu.route}
            onClick={(e) => handleScrollTo(e, menu.route)}
            className="border-b border-slate-900 pb-4 text-xl font-semibold text-slate-200"
          >
            {menu.title}
          </Link>
        ))}
        {/* Tombol Mobile */}
        <Button
          onClick={handleWhatsAppRedirect}
          className="mt-auto w-full bg-amber-500 py-6 text-lg text-white"
        >
          <Phone className="mr-2 h-5 w-5" /> Hubungi Kami
        </Button>
      </div>
    </nav>
  );
}
