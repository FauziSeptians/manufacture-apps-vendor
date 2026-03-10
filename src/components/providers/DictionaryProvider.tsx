'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import en from '../../dictionary/en.json';
import id from '../../dictionary/id.json';

// Definisikan tipe dictionary berdasarkan salah satu file JSON
type Dictionary = typeof id;
type Locale = 'id' | 'en';

const dictionaries: Record<Locale, Dictionary> = { id, en };

// Buat Context-nya
const DictionaryContext = createContext<Dictionary | null>(null);
const LocaleContext = createContext<Locale | null>(null);
const SetLocaleContext = createContext<((lang: Locale) => void) | null>(null);

export default function DictionaryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>('id');

  // Opsional: Simpan pilihan bahasa di LocalStorage agar tidak reset saat refresh
  useEffect(() => {
    const saved = localStorage.getItem('pref-lang') as Locale;
    if (saved && (saved === 'id' || saved === 'en')) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (lang: Locale) => {
    setLocale(lang);
    localStorage.setItem('pref-lang', lang);
  };

  return (
    <LocaleContext.Provider value={locale}>
      <SetLocaleContext.Provider value={handleSetLocale}>
        <DictionaryContext.Provider value={dictionaries[locale]}>
          {children}
        </DictionaryContext.Provider>
      </SetLocaleContext.Provider>
    </LocaleContext.Provider>
  );
}

// Custom Hooks
export function useDict() {
  const context = useContext(DictionaryContext);
  if (!context)
    throw new Error('useDict must be used within DictionaryProvider');
  return context;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context)
    throw new Error('useLocale must be used within DictionaryProvider');
  return context;
}

export function useSetLocale() {
  const context = useContext(SetLocaleContext);
  if (!context)
    throw new Error('useSetLocale must be used within DictionaryProvider');
  return context;
}
