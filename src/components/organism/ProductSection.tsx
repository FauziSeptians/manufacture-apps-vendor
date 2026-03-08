'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { product } from '@/data/product';
import { AnimatePresence, motion } from 'framer-motion';
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
  // State untuk menyimpan produk yang diklik
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
          <TabsList className="!h-12 w-full max-w-4xl rounded-full border border-slate-200 bg-slate-100/50 p-1">
            {Object.keys(product).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="relative rounded-full px-8 py-2 capitalize data-[state=active]:bg-white"
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
                className="w-full"
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Carousel opts={{ align: 'start' }} className="w-full">
                    <CarouselContent className="-ml-4">
                      {items.map((product, index) => (
                        <CarouselItem
                          key={index}
                          className="basis-full pl-4 sm:basis-1/2 md:basis-1/3"
                        >
                          {/* Card dengan onClick untuk set data ke Modal */}
                          <Card
                            onClick={() =>
                              setSelectedProduct({ ...product, category })
                            }
                            className="group !h-96 cursor-pointer overflow-hidden rounded-[2rem] border-none bg-slate-50 !p-0 shadow-none transition-all hover:bg-slate-100"
                          >
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
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="mt-12 flex justify-center gap-4">
                      <CarouselPrevious className="relative inset-0 h-12 w-12 translate-y-0" />
                      <CarouselNext className="relative inset-0 h-12 w-12 translate-y-0" />
                    </div>
                  </Carousel>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>

      {/* MODAL DETAIL PRODUK */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      >
        <DialogContent className="w-full !max-w-5xl overflow-hidden rounded-md border-none p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Sisi Gambar */}
            <div className="h-80 w-full md:h-[500px]">
              {selectedProduct && (
                <SafeImage
                  src={selectedProduct.url}
                  alt={selectedProduct.title}
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                />
              )}
            </div>

            {/* Sisi Informasi */}
            <div className="flex flex-col justify-center p-8">
              <DialogHeader>
                <span className="mb-2 text-xs font-bold tracking-widest text-amber-500 uppercase">
                  {selectedProduct?.category} Series
                </span>
                <DialogTitle className="text-3xl font-bold text-slate-900">
                  {selectedProduct?.title}
                </DialogTitle>
                <div className="my-4 h-1 w-12 bg-amber-500" />
                <DialogDescription className="mt-4 text-base leading-relaxed text-slate-600">
                  {selectedProduct?.description ||
                    'Produk industrial berkualitas tinggi yang diproduksi dengan standar presisi WARTIWAN Industrial. Menggunakan material pilihan untuk durabilitas maksimal.'}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  Ready Production
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  Custom Branding Available
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
