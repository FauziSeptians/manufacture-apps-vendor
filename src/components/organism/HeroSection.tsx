'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import * as React from 'react';
import ImageOptimize from '../atom/ImageOptimize';
import { Typography } from '../ui/Typography';

const STATS = [
  { title: '2001', description: 'Est. Year' },
  { title: '10.000+', description: 'Monthly Output' },
  { title: '30+', description: 'Skilled Artisans' },
  { title: 'Global', description: 'Supply Chain' },
];

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // --- 1. ANIMASI HERO TEXT (SCENE 1) ---
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0.8]);

  // --- ANIMASI ORNAMEN BACKGROUND (BARU) ---
  // Ornamen ikut memudar bersamaan dengan teks agar transisi ke gambar bersih
  const ornamentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [0.6, 0.6, 0]
  );

  // --- 2. ANIMASI GAMBAR (SCENE 2) ---
  const imgOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.6, 0.7],
    [0, 1, 1, 0.2]
  );
  const imgScale = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.6, 0.8],
    [1.2, 1, 1, 1.1]
  );
  const imgBlur = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ['blur(0px)', 'blur(10px)']
  );

  // --- 3. ANIMASI STATS (SCENE 3) ---
  const statsOpacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const statsY = useTransform(scrollYProgress, [0.65, 0.8], [100, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] w-full bg-slate-950"
      id="home"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* --- ORNAMEN BACKGROUND UNTUK SCENE 1 (BARU) --- */}
        <motion.div
          style={{ opacity: ornamentOpacity }}
          className="pointer-events-none absolute inset-0 z-0"
        >
          {/* 1. Pola Grid Titik Industrial (SVG Pattern) */}
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-20"
          >
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#f59e0b" />{' '}
                {/* Warna Amber */}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>

          {/* 2. Pendaran Cahaya Radial Amber di Tengah */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15)_0%,rgba(2,6,23,0)_70%)]" />

          {/* 3. Garis Aksen Halus (Opsional, untuk kesan teknis) */}
          <div className="absolute top-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
        </motion.div>

        {/* CONTAINER UTAMA */}
        <div className="relative z-10 container mx-auto flex h-full items-center justify-center px-6">
          {/* --- SCENE 1: HERO TEXT --- */}
          <motion.div
            style={{ opacity: textOpacity, scale: textScale }}
            className="pointer-events-none absolute z-30 flex flex-col items-center text-center"
          >
            <Typography>
              <Typography.Kicker className="text-amber-500">
                Industrial Excellence
              </Typography.Kicker>
              <Typography.Title className="text-5xl text-white md:text-7xl lg:text-8xl">
                Wartiwan <br />
                <Typography.Highlight>Industri Nusantara.</Typography.Highlight>
              </Typography.Title>
              <Typography.P className="mx-auto mt-6 max-w-2xl text-slate-300">
                {' '}
                {/* Sedikit diterangkan agar kontras di bg gelap */}
                Mitra manufaktur tas strategis yang mengintegrasikan pengalaman
                dua dekade dengan sistem produksi modern.
              </Typography.P>
            </Typography>
            <div className="mt-10 flex flex-col items-center gap-2">
              <div className="h-12 w-[1px] bg-gradient-to-b from-amber-500 to-transparent" />
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] font-bold tracking-[0.4em] text-amber-500 uppercase"
              >
                Scroll
              </motion.span>
            </div>
          </motion.div>

          {/* --- SCENE 2: FULL IMAGE REVEAL --- */}
          <motion.div
            style={{
              opacity: imgOpacity,
              scale: imgScale,
              filter: imgBlur,
            }}
            className="absolute inset-0 z-10 p-6 md:p-12 lg:p-20"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-white/10">
              <ImageOptimize
                src="https://static.vecteezy.com/system/resources/thumbnails/031/599/225/small_2x/of-inside-textile-factory-line-production-view-ai-generative-photo.jpg"
                alt="Industrial Factory"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />{' '}
              {/* Overlay sedikit digelapkan */}
            </div>
          </motion.div>

          {/* --- SCENE 3: STATS CARDS --- */}
          <motion.div
            style={{ opacity: statsOpacity, y: statsY }}
            className="absolute z-40 w-full max-w-5xl px-6"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white uppercase md:text-5xl">
                Proven <span className="text-amber-500">Track Record</span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-500" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all hover:border-amber-500/30 hover:bg-white/10"
                >
                  <span className="mb-2 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                    {stat.title}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BACKGROUND GRADIENTS (Tetap ada untuk nuansa dark) */}
        <div className="absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  );
}
