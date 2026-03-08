'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion'; // Tambahkan ini
import { useState } from 'react';
import SafeImage from '../atom/ImageOptimize';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Typography } from '../ui/Typography';

export default function ProductSection() {
  const [tab, setTab] = useState('waistbag');

  const data = {
    waistbag: [
      {
        title: 'Waistbag Alpha',
        url: 'https://images.unsplash.com/photo-1544816153-199d82175e42?q=80&w=800',
      },
      {
        title: 'Waistbag Bravo',
        url: 'https://images.unsplash.com/photo-1544816153-199d82175e42?q=80&w=800',
      },
      {
        title: 'Waistbag Charlie',
        url: 'https://images.unsplash.com/photo-1544816153-199d82175e42?q=80&w=800',
      },
    ],
    backpack: [
      {
        title: 'Backpack Delta',
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
      },
      {
        title: 'Backpack Echo',
        url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
      },
    ],
    totepack: [
      { title: 'totepack-1', url: '/assets/product/totepack/totepack1.jpeg' },
      { title: 'totepack-2', url: '/assets/product/totepack/totepack2.jpeg' },
      { title: 'totepack-3', url: '/assets/product/totepack/totepack3.jpeg' },
      { title: 'totepack-4', url: '/assets/product/totepack/totepack4.jpeg' },
    ],
  };

  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-white py-24"
      id="product"
    >
      {/* Header dengan Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center px-6 text-center"
      >
        <Typography>
          <Typography.Kicker className="text-amber-500">
            Our Premium Catalog
          </Typography.Kicker>
          <Typography.Title className="text-4xl md:text-5xl">
            INDUSTRIAL{' '}
            <Typography.Highlight>CRAFTSMANSHIP.</Typography.Highlight>
          </Typography.Title>
          <Typography.P className="mx-auto mt-4 max-w-2xl">
            Koleksi produk manufaktur unggulan kami, mulai dari tas teknis
            hingga perlengkapan industrial yang dirancang dengan presisi tinggi.
          </Typography.P>
        </Typography>
      </motion.div>

      <div className="flex w-full max-w-7xl flex-col items-center px-6">
        <Tabs
          className="flex w-full flex-col items-center gap-12"
          value={tab}
          onValueChange={setTab}
        >
          <TabsList className="!h-12 w-full max-w-lg rounded-full border border-slate-200 bg-slate-100/50 p-1">
            {Object.keys(data).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="relative rounded-full px-8 py-2 capitalize transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(data).map(([category, items]) => (
              <TabsContent
                key={category}
                value={category}
                className="w-full focus-visible:outline-none"
                asChild // Menggunakan asChild agar tidak merusak layout TabsContent
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Carousel
                    opts={{ align: 'start', loop: items.length > 3 }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {items.length > 0 ? (
                        items.map((product, index) => (
                          <CarouselItem
                            key={index}
                            className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }} // Staggered effect
                            >
                              <Card className="group !h-96 overflow-hidden rounded-[2rem] border-none bg-slate-50 !p-0 shadow-none transition-all hover:bg-slate-100">
                                <CardContent className="flex h-full flex-col p-0">
                                  <div className="flex-1 overflow-hidden">
                                    <SafeImage
                                      src={product.url}
                                      alt={product.title}
                                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      width={800}
                                      height={1000}
                                    />
                                  </div>
                                  <div className="p-6">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase">
                                      {category} Series
                                    </span>
                                    <h4 className="mt-1 text-lg font-bold text-slate-900">
                                      {product.title}
                                    </h4>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          </CarouselItem>
                        ))
                      ) : (
                        <div className="flex h-64 w-full items-center justify-center text-slate-400">
                          No products available in this category.
                        </div>
                      )}
                    </CarouselContent>

                    {items.length > 0 && (
                      <div className="mt-12 flex justify-center gap-4">
                        <CarouselPrevious className="relative inset-0 h-12 w-12 translate-y-0 border-slate-200 transition-all hover:bg-slate-900 hover:text-white" />
                        <CarouselNext className="relative inset-0 h-12 w-12 translate-y-0 border-slate-200 transition-all hover:bg-slate-900 hover:text-white" />
                      </div>
                    )}
                  </Carousel>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
