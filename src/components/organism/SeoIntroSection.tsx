import { Typography } from '@/components/ui/Typography';
import type { Dictionary } from '@/lib/dictionary';

/**
 * Section teks biasa (server component, tanpa animasi JS) supaya Google
 * mendapat konteks jelas: siapa kami, di mana, dan layanan apa yang ditawarkan.
 */
export default function SeoIntroSection({ dict }: { dict: Dictionary }) {
  const seo = dict.Seo;

  return (
    <section
      id="about"
      className="w-full bg-slate-50 px-6 py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Typography>
            <Typography.Kicker className="text-amber-500">
              {seo.kicker}
            </Typography.Kicker>
            <Typography.Title className="text-3xl md:text-4xl">
              <span id="about-heading">{seo.title}</span>{' '}
              <Typography.Highlight>{seo.titleHighlight}</Typography.Highlight>
            </Typography.Title>
          </Typography>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            {seo.intro}
          </p>

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            {seo.services.title}
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-600">
            {seo.services.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-slate-900">{seo.faqTitle}</h3>
          <div className="flex flex-col gap-3">
            {seo.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
