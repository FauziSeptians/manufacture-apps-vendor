'use client';

import {
  useLocale,
  useSetLocale,
} from '@/components/providers/DictionaryClientProvider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../../../public/assets/logo/logo-wartiwan.png';
import ImageOptimize from '../atom/ImageOptimize';
import type { Dictionary } from '@/lib/dictionary';

export const Logo = () => (
  <ImageOptimize
    src={logo.src}
    width={1280}
    height={720}
    alt="logo"
    className="size-16"
  />
);

export default function NavbarComponent({
  menus,
  contactPerson,
  dict,
}: {
  menus: { key: string; title: string; route: string }[];
  contactPerson: string;
  dict: Dictionary;
}) {
  const setLocale = useSetLocale();
  const currentLocale = useLocale();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Lock scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppRedirect = () => {
    const cleanNumber = contactPerson.replace(/\D/g, '').replace(/^0/, '62');
    window.open(
      `https://wa.me/${cleanNumber}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const toggleLanguage = () => {
    setIsChanging(true);

    // Logic: Tampilkan loading dulu, baru ganti bahasa di tengah-tengah
    setTimeout(() => {
      setLocale(currentLocale === 'id' ? 'en' : 'id');

      // Berikan waktu sejenak agar user bisa melihat teks konfirmasi bahasa baru
      setTimeout(() => {
        setIsChanging(false);
      }, 800);
    }, 600);
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
        const elementPosition =
          element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* FULL SCREEN LOADING OVERLAY */}
      <AnimatePresence>
        {isChanging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative flex h-20 w-20 items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 rounded-full border-2 border-amber-500/20 border-t-amber-500"
                />
                <Globe className="h-10 w-10 text-amber-500" />
              </div>

              <div className="text-center">
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-sm font-bold tracking-[0.3em] text-white uppercase"
                >
                  {/* LOGIKA DIPERBAIKI: Jika current adalah ID, berarti tujuan adalah EN */}
                  {currentLocale !== 'id'
                    ? 'Switching to English'
                    : 'Mengganti ke Indonesia'}
                </motion.p>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mt-2 block text-[10px] tracking-widest text-slate-400 uppercase"
                >
                  Please wait...
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-50 px-6 py-4 transition-all duration-300',
          mobileMenuOpen
            ? 'bg-slate-950'
            : isScrolled
              ? 'border-b border-slate-800 bg-slate-950/80 py-3 backdrop-blur-md'
              : 'bg-transparent'
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
              <span className="text-sm font-bold tracking-tight text-white uppercase md:text-base">
                WARTIWAN
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-amber-500 uppercase">
                Industrial
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
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
            {/* LANGUAGE SWITCHER BUTTON */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-3 text-xs font-bold text-white hover:bg-white/10"
            >
              <Globe size={14} className="text-amber-500" />
              {currentLocale.toUpperCase()}
            </Button>

            {/* CTA BUTTON */}
            <Button
              onClick={handleWhatsAppRedirect}
              className="hidden cursor-pointer rounded-full border-none bg-amber-500 px-6 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-amber-600 active:scale-95 md:flex"
            >
              {dict.Navbar.cta}
            </Button>

            {/* MOBILE TOGGLE */}
            <Button
              variant="ghost"
              size="icon"
              className="relative z-50 cursor-pointer text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed inset-0 z-40 flex h-screen w-screen flex-col bg-slate-950 p-6 pt-24 md:hidden"
            >
              <div className="flex flex-col">
                {menus.map((menu) => (
                  <Link
                    key={menu.key}
                    href={menu.route}
                    onClick={(e) => handleScrollTo(e, menu.route)}
                    className="border-b border-slate-900 py-6 text-2xl font-bold text-slate-200 active:text-amber-500"
                  >
                    {menu.title}
                  </Link>
                ))}

                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-4 py-8 text-2xl font-bold text-amber-500"
                >
                  <Globe size={24} />
                  {currentLocale === 'id'
                    ? 'English Version'
                    : 'Versi Indonesia'}
                </button>
              </div>

              <div className="mt-auto pb-10">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-amber-500 py-7 text-lg font-bold text-white shadow-lg active:scale-95"
                >
                  <Phone className="mr-2 h-6 w-6" /> {dict.Navbar.cta}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
