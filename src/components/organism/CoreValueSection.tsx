'use client';

import { useDict } from '@/components/providers/DictionaryProvider'; // Import hook
import { Marquee } from '@/components/ui/marquee';

export default function CoreValueSection() {
  const dict = useDict(); // Ambil dictionary

  return (
    <section className="relative -mb-[1px] w-full overflow-hidden border-none bg-slate-950 py-8 outline-none">
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Marquee
        pauseOnHover
        className="!border-0 !border-none shadow-none [--duration:40s]"
      >
        {/* Mapping langsung dari dictionary */}
        {dict.CoreValues.map((value, idx) => (
          <div key={idx} className="mx-8 flex items-center gap-6 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />

            <span className="text-xs font-bold tracking-[0.4em] text-white/90 uppercase sm:text-sm">
              {value}
            </span>
          </div>
        ))}
      </Marquee>

      <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l from-slate-950 to-transparent" />
    </section>
  );
}
