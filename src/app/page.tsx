import HomePage from '@/page/HomePage';
import { getDictionary, Locale } from '@/lib/dictionary';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value || 'id') as Locale;
  const dict = await getDictionary(locale);

  return <HomePage dict={dict} locale={locale} />;
}
