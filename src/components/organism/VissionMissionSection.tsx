'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target } from 'lucide-react';
import { useRef } from 'react';
import SafeImage from '../atom/ImageOptimize';
import InformationCard from '../atom/InformationCard';
import { Typography } from '../ui/Typography';

export default function VissionMissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Deteksi progres scroll di dalam container ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Animasi untuk Header (Text)
  // Saat scroll 0% -> 40%, text terlihat. Saat 50% -> 100%, text hilang.
  const headerOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -50]);

  // Animasi untuk Cards
  // Saat scroll 0% -> 0.5%, card sembunyi. Saat 0.6% -> 100%, card muncul.
  const cardOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  const cardScale = useTransform(scrollYProgress, [0.5, 0.7, 1], [0.9, 1, 1]);
  const cardY = useTransform(scrollYProgress, [0.5, 0.7, 1], [50, 0, 0]);

  return (
    // H-200vh memberikan ruang scroll agar animasi terasa "panjang"
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full"
      id="vission"
    >
      {/* Sticky Wrapper: Menjaga konten tetap di layar selama scroll h-[200vh] */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Background Layer (Tetap sama) */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://italianartisan.com/wp-content/uploads/2024/04/find-the-right-clothing-manufacturer.webp"
            alt="Manufacturing Background"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="relative z-40 container mx-auto flex items-center justify-center px-6">
          {/* LAYER 1: Header Information (Aspiration Text) */}
          <motion.div
            style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
            className="absolute flex flex-col items-center text-center"
          >
            <Typography>
              <Typography.Kicker className="text-amber-500">
                Aspiration
              </Typography.Kicker>
              <Typography.Title className="text-5xl text-white md:text-7xl lg:text-8xl">
                Our Vision &{' '}
                <Typography.Highlight className="text-slate-300">
                  Mission
                </Typography.Highlight>
              </Typography.Title>
            </Typography>
            <div className="mt-8 h-1 w-24 rounded-full bg-amber-500" />
            <p className="mt-6 animate-bounce text-sm font-medium tracking-widest text-slate-400 uppercase">
              Scroll to explore
            </p>
          </motion.div>

          {/* LAYER 2: Vision & Mission Cards */}
          <motion.div
            style={{ opacity: cardOpacity, scale: cardScale, y: cardY }}
            className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2"
          >
            <div className="group transition-transform hover:-translate-y-2">
              <InformationCard
                title="Vision"
                icon={Target}
                highlight="Menjadi Mitra Manufaktur Global"
                description="Menjadi manufaktur tas terpercaya yang menghadirkan kualitas unggul, inovasi berkelanjutan, serta sistem produksi efisien untuk mendukung pertumbuhan brand klien di pasar internasional secara konsisten."
              />
            </div>

            <div className="group transition-transform hover:-translate-y-2">
              <InformationCard
                title="Mission"
                icon={Rocket}
                highlight="Inovasi & Kualitas Konsisten"
                description="Berkomitmen pada pemberdayaan pengrajin lokal, penggunaan teknologi modern, dan standar kontrol kualitas yang ketat guna memastikan setiap produk memiliki nilai daya saing tinggi dan layanan yang kompetitif."
              />
            </div>
          </motion.div>
        </div>

        {/* Overlay Gradients */}
        <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>
    </section>
  );
}
