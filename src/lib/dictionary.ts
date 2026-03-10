import 'server-only';

const dictionaries = {
  id: () => import('../dictionary/id.json').then((module) => module.default),
  en: () => import('../dictionary/en.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  // Jika locale tidak ditemukan, default ke 'id'
  return dictionaries[locale]?.() ?? dictionaries.id();
};

// Ini adalah kunci agar kita punya IntelliSense/Auto-complete
export type Dictionary = Awaited<ReturnType<typeof dictionaries.id>>;
