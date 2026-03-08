'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion'; // Tambah ini
import ImageOptimize from '../atom/ImageOptimize';
import { Typography } from '../ui/Typography';

const PARTNERS = [
  { id: 1, name: '3 Seconds', logo: '/assets/partner/1.png' },
  { id: 2, name: 'Tweely', logo: '/assets/partner/2.jpeg' },
  { id: 3, name: 'Torch', logo: '/assets/partner/3.png' },
  { id: 4, name: 'Wallt', logo: '/assets/partner/4.jpeg' },
  { id: 5, name: 'Fila', logo: '/assets/partner/5.png' },
  { id: 6, name: 'YKK', logo: '/assets/partner/6.png' },
  { id: 7, name: 'WNRS', logo: '/assets/partner/7.png' },
  { id: 8, name: 'Mills', logo: '/assets/partner/8.png' },
  { id: 9, name: 'Gurls Club', logo: '/assets/partner/9.png' },
];

export default function PartnerSection() {
  return (
    <section className="bg-background py-24" id="partner">
      <div className="container mx-auto px-6">
        {/* HEADER: Menggunakan Typography Component dengan Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <Typography>
            <Typography.Kicker className="text-amber-500">
              Trusted Network
            </Typography.Kicker>

            <Typography.Title className="text-3xl sm:text-4xl md:text-5xl">
              Partner{' '}
              <Typography.Highlight>Strategis Kami.</Typography.Highlight>
            </Typography.Title>

            <Typography.P className="mx-auto mt-4 max-w-xl">
              Kami berkolaborasi dengan perusahaan teknologi terkemuka untuk
              menghadirkan solusi manufaktur terbaik bagi pasar global.
            </Typography.P>
          </Typography>
        </motion.div>

        {/* LOGO GRID dengan Staggered pop-in */}
        <div className="flex flex-wrap justify-center gap-6">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05, // Efek muncul satu per satu yang cepat & modern
                ease: [0.21, 1.11, 0.81, 0.99], // Custom cubic-bezier untuk efek "bounce" kecil
              }}
              className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
            >
              <Card className="group bg-secondary/10 hover:bg-secondary/30 border-none shadow-none transition-all duration-500">
                <CardContent className="flex h-32 items-center justify-center p-8">
                  <ImageOptimize
                    src={partner.logo}
                    alt={partner.name}
                    width={1920}
                    height={1080}
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
