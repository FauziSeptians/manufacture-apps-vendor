'use client';

import { useDict, useLocale } from '@/components/providers/DictionaryProvider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { product } from '@/data/product';
import { classNames } from '@/utils/classNames';
import { AnimatePresence, motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';
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
  const dict = useDict();
  const locale = useLocale();

  const [tab, setTab] = useState('backpack');
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
            {dict.Product.kicker}
          </Typography.Kicker>
          <Typography.Title className="text-4xl md:text-5xl">
            {dict.Product.title}{' '}
            <Typography.Highlight>
              {dict.Product.titleHighlight}
            </Typography.Highlight>
          </Typography.Title>
        </Typography>
      </motion.div>

      <div className="flex w-full max-w-7xl flex-col items-center px-6">
        <Tabs
          className="flex w-full flex-col items-center gap-12"
          value={tab}
          onValueChange={setTab}
        >
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
                                <div className="relative flex-1 overflow-hidden">
                                  {/* Label Modern: Glassmorphism Style */}
                                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 overflow-hidden rounded-xl border border-white/40 bg-white/70 p-1 pl-3 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-500 group-hover:translate-y-[-2px] group-hover:shadow-xl">
                                    <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase">
                                      {dict.Product.minOrder}
                                    </span>
                                    <div className="rounded-lg bg-slate-900 px-2 py-1 text-[10px] font-bold text-white">
                                      50 {dict.Product.pcs}
                                    </div>
                                  </div>

                                  <SafeImage
                                    src={prod.url}
                                    alt={prod.title}
                                    className={classNames(
                                      prod?.imageClass || 'object-cover',
                                      !prod?.imageClass?.includes('object-') &&
                                        'object-center',
                                      'h-full w-full transition-transform duration-[1.5s] ease-out group-hover:scale-110'
                                    )}
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
                        <CarouselPrevious className="relative inset-0 h-12 w-12 translate-y-0 border-slate-200" />
                        <CarouselNext className="relative inset-0 h-12 w-12 translate-y-0 border-slate-200" />
                      </div>
                    </Carousel>
                  ) : (
                    <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
                      <div className="rounded-full bg-white p-4 shadow-sm">
                        <PackageOpen className="h-10 w-10 text-slate-300" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-slate-900">
                        {dict.Product.noDataTitle}
                      </h3>
                      <p className="mt-2 max-w-xs text-center text-sm text-slate-500">
                        {dict.Product.noDataDesc.replace(
                          '{category}',
                          category
                        )}
                      </p>
                    </div>
                  )}
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
        <DialogContent className="w-[90%] !max-w-5xl overflow-hidden rounded-xl border-none p-0 sm:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-80 w-full md:h-[500px]">
              {selectedProduct && (
                <SafeImage
                  src={selectedProduct.url}
                  alt={selectedProduct.title[locale]}
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-8">
              <DialogHeader>
                <span className="mb-2 text-xs font-bold tracking-widest text-amber-500 uppercase">
                  {selectedProduct?.category} Series
                </span>
                <DialogTitle className="text-3xl font-bold text-slate-900">
                  {selectedProduct?.title[locale]}
                </DialogTitle>
                <div className="my-4 h-1 w-12 bg-amber-500" />
                <DialogDescription className="mt-4 text-base leading-relaxed text-slate-600">
                  {selectedProduct?.description?.[locale]}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  {dict.Product.modal.readyStatus}
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  {dict.Product.modal.customStatus}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
