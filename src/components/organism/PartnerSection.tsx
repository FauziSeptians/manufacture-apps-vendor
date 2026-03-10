'use client';

import { useDict } from '@/components/providers/DictionaryProvider'; // Import hook
import { Card, CardContent } from '@/components/ui/card';
import { PARTNERS } from '@/data/partners';
import { motion } from 'framer-motion';
import ImageOptimize from '../atom/ImageOptimize';
import { Typography } from '../ui/Typography';

export default function PartnerSection() {
  const dict = useDict(); // Ambil dictionary

  return (
    <section className="bg-background py-24" id="partner">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <Typography>
            <Typography.Kicker className="text-amber-500">
              {dict.Partner.kicker}
            </Typography.Kicker>

            <Typography.Title className="text-3xl sm:text-4xl md:text-5xl">
              {dict.Partner.title}{' '}
              <Typography.Highlight>
                {dict.Partner.titleHighlight}
              </Typography.Highlight>
            </Typography.Title>

            <Typography.P className="mx-auto mt-4 max-w-xl">
              {dict.Partner.description}
            </Typography.P>
          </Typography>
        </motion.div>

        {/* LOGO GRID */}
        <div className="flex flex-wrap justify-center gap-6">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: [0.21, 1.11, 0.81, 0.99],
              }}
              className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
            >
              <Card className="group bg-secondary/10 hover:bg-secondary/30 border-none shadow-none transition-all duration-500">
                <CardContent className="flex h-32 items-center justify-center p-8">
                  <ImageOptimize
                    src={partner.logo}
                    alt={partner.name}
                    width={800} // Ukuran wajar untuk logo grid
                    height={400}
                    className="max-h-14 w-full object-contain opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
