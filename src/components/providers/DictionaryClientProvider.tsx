'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { Dictionary, Locale } from '@/lib/dictionary';
import { useRouter } from 'next/navigation';

const DictionaryContext = createContext<Dictionary | null>(null);
const LocaleContext = createContext<Locale | null>(null);
const SetLocaleContext = createContext<((lang: Locale) => void) | null>(null);

export function DictionaryClientProvider({
  children,
  dictionary,
  locale,
}: {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) {
  const router = useRouter();

  const handleSetLocale = (lang: Locale) => {
    // Set cookie for Next.js to pick up on the server
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    // Refresh the page to trigger server-side re-render with new locale
    router.refresh();
  };

  return (
    <LocaleContext.Provider value={locale}>
      <SetLocaleContext.Provider value={handleSetLocale}>
        <DictionaryContext.Provider value={dictionary}>
          {children}
        </DictionaryContext.Provider>
      </SetLocaleContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useDict() {
  const context = useContext(DictionaryContext);
  if (!context)
    throw new Error('useDict must be used within DictionaryClientProvider');
  return context;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context)
    throw new Error('useLocale must be used within DictionaryClientProvider');
  return context;
}

export function useSetLocale() {
  const context = useContext(SetLocaleContext);
  if (!context)
    throw new Error('useSetLocale must be used within DictionaryClientProvider');
  return context;
}
