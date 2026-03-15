'use client';

import { useDict } from '@/components/providers/DictionaryProvider';
import { MATERIALS } from '@/data/materials';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ImageOptimize from '../atom/ImageOptimize';
import { Typography } from '../ui/Typography';

export default function MaterialSection() {
  const dict = useDict();
  const [indices, setIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices((prev) => prev.map((idx) => (idx + 1) % MATERIALS.length));
    }, 50000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MATERIALS.length]);

  // Layout logic: Mengikuti gaya asimetris namun tetap rapi
  const gridConfigs = [
    'md:col-span-7 md:row-span-2 h-[400px] md:h-full', // Hero Material
    'md:col-span-5 md:row-span-1 h-[250px] md:h-full', // Side Material 1
    'md:col-span-5 md:row-span-1 h-[250px] md:h-full', // Side Material 2
  ];

  // Kita hanya ambil 3 slot agar grid asimetris 7:5 terlihat konsisten dengan Facility
  const displayIndices = indices.slice(0, 3);

  return (
    <section className="overflow-hidden bg-white py-24" id="materials">
      <div className="container mx-auto px-6">
        {/* Header Section: Persis gaya Facility Section */}
        <div className="mb-16">
          <Typography>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-amber-500"></div>
              <span className="text-sm font-bold tracking-widest text-amber-500 uppercase">
                {dict.Material.kicker}
              </span>
            </motion.div>

            <Typography.Title className="text-4xl font-black tracking-tighter text-slate-900 uppercase md:text-6xl">
              {dict.Material.title} <br />
              <span className="text-amber-500">
                {dict.Material.titleHighlight}
              </span>
            </Typography.Title>

            <Typography.P className="mt-6 max-w-2xl text-lg text-slate-500">
              {dict.Material.description}
            </Typography.P>
          </Typography>
        </div>

        {/* Bento Grid: Konsisten dengan 12-kolom Facility Section */}
        <div className="grid grid-cols-1 gap-6 md:h-[700px] md:grid-cols-12">
          {displayIndices.map((materialIdx, gridIdx) => (
            <motion.div
              key={gridIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: gridIdx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm ${gridConfigs[gridIdx] || 'md:col-span-4'}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={MATERIALS[materialIdx].src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <ImageOptimize
                    src={MATERIALS[materialIdx].src}
                    alt={MATERIALS[materialIdx].title}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Gradient: Gelap di bawah agar teks putih terbaca */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <span className="mb-2 font-mono text-xs tracking-widest text-white/50 uppercase">
                  Selected Fabric
                </span>
                <h3
                  className={`font-bold text-white uppercase ${gridIdx === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}
                >
                  {MATERIALS[materialIdx].title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
