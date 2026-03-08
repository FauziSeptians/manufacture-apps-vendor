'use client';

import { Dialog } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { product } from '@/data/product';
import { AnimatePresence, motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react'; // Icon untuk No Data
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

// ... import lainnya

export default function ProductSection() {
  const [tab, setTab] = useState('waistbag');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-white py-24"
      id="product"
    >
      {/* Header Section */}
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
        </Typography>
      </motion.div>

      <div className="flex w-full max-w-7xl flex-col items-center px-6">
        <Tabs
          className="flex w-full flex-col items-center gap-12"
          value={tab}
          onValueChange={setTab}
        >
          {/* TabsList Responsif (Horizontal Scroll di Mobile) */}
          <TabsList className="no-scrollbar flex !h-12 w-full max-w-6xl items-center justify-start overflow-x-auto overflow-y-hidden rounded-full border border-slate-200 bg-slate-100/50 p-1 md:justify-center">
            {Object.keys(product).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="relative shrink-0 rounded-full px-6 py-2 text-sm capitalize transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm md:px-8 md:text-base"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(product).map(([category, items]) => (
              <TabsContent
                key={category}
                value={category}
                className="w-full outline-none"
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {items.length > 0 ? (
                    <Carousel opts={{ align: 'start' }} className="w-full">
                      <CarouselContent className="-ml-4">
                        {items.map((prod, index) => (
                          <CarouselItem
                            key={index}
                            className="basis-full pl-4 sm:basis-1/2 md:basis-1/3"
                          >
                            <Card
                              onClick={() =>
                                setSelectedProduct({ ...prod, category })
                              }
                              className="group !h-96 cursor-pointer overflow-hidden rounded-[2rem] border-none bg-slate-50 !p-0 shadow-none transition-all hover:bg-slate-100"
                            >
                              <CardContent className="flex h-full flex-col p-0">
                                <div className="flex-1 overflow-hidden">
                                  <SafeImage
                                    src={prod.url}
                                    alt={prod.title}
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
                                    {prod.title}
                                  </h4>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="mt-12 flex justify-center gap-4">
                        <CarouselPrevious className="relative inset-0 h-12 w-12 translate-y-0 border-slate-200 transition-colors hover:bg-slate-900 hover:text-white" />
                        <CarouselNext className="relative inset-0 h-12 w-12 translate-y-0 border-slate-200 transition-colors hover:bg-slate-900 hover:text-white" />
                      </div>
                    </Carousel>
                  ) : (
                    /* STATE: NO DATA */
                    <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
                      <div className="rounded-full bg-white p-4 shadow-sm">
                        <PackageOpen className="h-10 w-10 text-slate-300" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-slate-900">
                        Katalog Belum Tersedia
                      </h3>
                      <p className="mt-2 max-w-xs text-sm text-slate-500">
                        Maaf, produk untuk kategori{' '}
                        <span className="font-bold text-amber-500 capitalize">
                          {category}
                        </span>{' '}
                        sedang dalam proses pembaruan data.
                      </p>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>

      {/* MODAL DETAIL PRODUK (Tetap sama) */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      >
        {/* ... isi dialog ... */}
      </Dialog>
    </section>
  );
}
