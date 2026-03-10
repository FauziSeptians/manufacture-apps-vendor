'use client';

import { useDict } from '@/components/providers/DictionaryProvider';
import { MATERIALS } from '@/data/materials';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ImageOptimize from '../atom/ImageOptimize';
import { Card, CardContent } from '../ui/card';
import { Typography } from '../ui/Typography';

export default function MaterialSection() {
  const dict = useDict();
  const [indices, setIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices((prev) => prev.map((idx) => (idx + 1) % MATERIALS.length));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="flex min-h-screen w-full flex-col overflow-hidden bg-[#fafafa] lg:flex-row"
      id="materials"
    >
      {/* SISI KIRI: Teks dengan Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto flex w-full items-center justify-center p-8 lg:w-1/2 lg:p-20"
      >
        <div className="flex max-w-lg flex-col gap-8">
          <Typography>
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[1.5px] bg-amber-500"
              />
              <Typography.Kicker className="text-amber-500">
                {dict.Material.kicker}
              </Typography.Kicker>
            </div>
            <Typography.Title className="text-3xl sm:text-4xl md:text-5xl">
              {dict.Material.title} <br />
              <Typography.Highlight>
                {dict.Material.titleHighlight}
              </Typography.Highlight>
            </Typography.Title>
            <Typography.P className="text-base leading-relaxed text-slate-500 italic">
              {dict.Material.description}
            </Typography.P>
          </Typography>
        </div>
      </motion.div>

      {/* SISI KANAN: Grid Carousel */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
        <div className="grid w-full max-w-2xl grid-cols-2 gap-4">
          {indices.map((materialIdx, gridIdx) => (
            <motion.div
              key={gridIdx}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: gridIdx * 0.15,
                ease: 'easeOut',
              }}
            >
              <Card className="group relative aspect-square overflow-hidden rounded-[2rem] border-none bg-slate-100 !p-0 shadow-md ring-1 ring-slate-200/50 transition-all duration-500 hover:shadow-2xl">
                <CardContent className="h-full w-full !p-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={materialIdx}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.8 }}
                      className="h-full w-full"
                    >
                      <ImageOptimize
                        alt={MATERIALS[materialIdx].title}
                        src={MATERIALS[materialIdx].src}
                        width={1920}
                        height={1080}
                        className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Overlay Nama Material */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.span
                      className="text-xs font-bold tracking-widest text-white uppercase"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {MATERIALS[materialIdx].title}
                    </motion.span>
                  </div>

                  <div className="absolute top-4 right-4 h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
