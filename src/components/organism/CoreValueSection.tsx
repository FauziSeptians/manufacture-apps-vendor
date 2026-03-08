'use client';

import { Marquee } from '@/components/ui/marquee';

const CORE_VALUES = [
  'Custom Design Manufacturing',
  'Military Grade Materials',
  'Eco-Friendly Production',
  'High-Precision Stitching',
  'International Supply Chain',
  '20+ Years Experience',
  'Global Quality Standard',
  'Sustainable Sourcing',
  'High-Capacity Production',
  'Advanced Textile Tech',
];

export default function CoreValueSection() {
  return (
    /* Menambahkan -mb-[1px] untuk memastikan tidak ada celah antara section ini dan section bawahnya */
    <section className="relative -mb-[1px] w-full overflow-hidden border-none bg-slate-950 py-8 outline-none">
      {/* Garis Aksen Tipis Atas - Dibuat sangat subtle agar tidak terlihat seperti border kaku */}
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Marquee
        pauseOnHover
        /* Menghilangkan semua border dan padding bawaan component */
        className="!border-0 !border-none shadow-none [--duration:40s]"
      >
        {CORE_VALUES.map((value, idx) => (
          <div key={idx} className="mx-8 flex items-center gap-6 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />

            <span className="text-xs font-bold tracking-[0.4em] text-white/90 uppercase sm:text-sm">
              {value}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Garis Aksen Tipis Bawah - Dihilangkan atau diganti gradasi agar tidak memotong flow ke VisionMission */}
      <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Masking di sisi kiri & kanan agar teks muncul/hilang perlahan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-slate-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l from-slate-900 to-transparent" />
    </section>
  );
}
