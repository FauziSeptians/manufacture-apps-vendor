'use client';

import { useDict } from '@/components/providers/DictionaryProvider';
import { Copyright, Instagram, Linkedin, Music2, Phone } from 'lucide-react';
import { Typography } from '../ui/Typography';

export default function FooterSection() {
  const dict = useDict();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-16 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Typography>
              <Typography.Title className="mb-0 text-xl tracking-tight text-white normal-case sm:text-2xl">
                PT. WARTIWAN <br />
                <Typography.Highlight className="text-slate-500">
                  INDUSTRI NUSANTARA
                </Typography.Highlight>
              </Typography.Title>
              <Typography.P className="max-w-xs text-sm leading-relaxed text-slate-400">
                {dict.Footer.description}
              </Typography.P>
            </Typography>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <Typography.Kicker className="tracking-[0.2em] text-white">
              {dict.Footer.contactTitle}
            </Typography.Kicker>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/6281220709584"
                  className="group flex items-center gap-3 transition-all hover:text-amber-500"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-amber-500/10">
                    <Phone size={14} className="group-hover:text-amber-500" />
                  </div>
                  <span className="text-sm font-medium">0812-2070-9584</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-6">
            <Typography.Kicker className="tracking-[0.2em] text-white">
              {dict.Footer.socialTitle}
            </Typography.Kicker>
            <div className="flex gap-4">
              {[
                {
                  icon: <Instagram size={18} />,
                  href: 'https://instagram.com/wartiwanindustrial',
                },
                {
                  icon: <Music2 size={18} />,
                  href: 'https://tiktok.com/@wartiwanindustrial',
                },
                {
                  icon: <Linkedin size={18} />,
                  href: 'https://linkedin.com/company/pt-wartiwan-industri-nusantara',
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-widest text-slate-600 uppercase">
            <Copyright size={12} /> {currentYear}
            <span className="text-slate-500">
              PT. WARTIWAN INDUSTRI NUSANTARA.
            </span>
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] text-amber-500/80 uppercase">
            {dict.Footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
