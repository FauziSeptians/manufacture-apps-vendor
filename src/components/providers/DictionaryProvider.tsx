import { ReactNode } from 'react';
import { getDictionary, Locale } from '@/lib/dictionary';
import { cookies } from 'next/headers';
import { DictionaryClientProvider } from './DictionaryClientProvider';

export default async function DictionaryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value || 'id') as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <DictionaryClientProvider dictionary={dictionary} locale={locale}>
      {children}
    </DictionaryClientProvider>
  );
}
