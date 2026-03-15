'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SafeImage from '../atom/ImageOptimize';
import { useDict } from '../providers/DictionaryProvider';
import { Typography } from '../ui/Typography';

const FacilitySection = () => {
  const dict = useDict();

  const facilityData = [
    {
      id: 'embroidery',
      icon: '🪡',
      image: '/assets/facility/Bordir.png',
      tag: 'Machine Craft',
      title: dict.facility.embroidery.title,
      desc: dict.facility.embroidery.desc,
    },
    {
      id: 'production_process',
      icon: '🛠️',
      image: '/assets/facility/pengerjaan.png',
      tag: 'In Progress',
      title: dict.facility.production_process.title,
      desc: dict.facility.production_process.desc,
    },
    {
      id: 'guest_room',
      icon: '🤝',
      image: '/assets/facility/ruangan menerima tamu.png',
      tag: 'Hospitality',
      title: dict.facility.guest_room.title,
      desc: dict.facility.guest_room.desc,
    },
    {
      id: 'screen_printing',
      icon: '🎨',
      image: '/assets/facility/sablon.png',
      tag: 'Graphic Detail',
      title: dict.facility.screen_printing.title,
      desc: dict.facility.screen_printing.desc,
    },
    {
      id: 'sample_room',
      icon: '✨',
      image: '/assets/facility/sampel room.png',
      tag: 'Development',
      title: dict.facility.sample_room.title,
      desc: dict.facility.sample_room.desc,
    },
    {
      id: 'bartack',
      icon: '🧵',
      image: '/assets/facility/tempat bartax.png',
      tag: 'Reinforcement',
      title: dict.facility.bartack.title,
      desc: dict.facility.bartack.desc,
    },
    {
      id: 'main_production',
      icon: '🏭',
      image: '/assets/facility/tempat produksi.png',
      tag: 'Mass Production',
      title: dict.facility.main_production.title,
      desc: dict.facility.main_production.desc,
      isLarge: true,
    },
  ];

  const rotatingData = facilityData.filter((item) => !item.isLarge);
  const largeFacility = facilityData.find((item) => item.isLarge);

  const [indices, setIndices] = useState({ top: 0, bottom: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) => ({
        top: (prev.top + 1) % rotatingData.length,
        bottom: (prev.bottom + 1) % rotatingData.length,
      }));
    }, 50000);
    return () => clearInterval(interval);
  }, [rotatingData.length]);

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section dengan Typography Component */}
        <div className="mb-12 md:mb-16">
          <Typography>
            <Typography.Kicker className="text-amber-500">
              {dict.facility.header.kicker || 'Infrastructure'}
            </Typography.Kicker>
            <Typography.Title className="text-3xl tracking-tighter uppercase sm:text-4xl md:text-6xl">
              {dict.facility.header.title}
            </Typography.Title>
            <Typography.P className="mt-4 max-w-2xl text-slate-500">
              {dict.facility.header.subtitle}
            </Typography.P>
          </Typography>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:h-[600px]">
          {/* LEFT SIDE: Rotating Slots (Hidden on very small mobile if too crowded, or stacked) */}
          <div className="order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:order-1 md:col-span-5 md:grid-cols-1 md:grid-rows-2">
            {[indices.top, indices.bottom].map((dataIndex, idx) => {
              const item = rotatingData[dataIndex];
              return (
                <div
                  key={idx}
                  className="group relative h-[300px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm md:h-auto"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <SafeImage
                        src={item.image}
                        className="h-full w-full object-cover"
                        alt={item.id}
                        width={1280}
                        height={720}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                    <span className="mb-1 font-mono text-xs text-white/50">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 hidden max-w-xs text-sm text-white/70 opacity-100 transition-all duration-300 md:block">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Large Hero Card */}
          {largeFacility && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative order-1 h-[400px] overflow-hidden rounded-[2rem] md:order-2 md:col-span-7 md:h-auto md:rounded-[2.5rem]"
            >
              <SafeImage
                src={largeFacility.image}
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                alt={largeFacility.id}
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-tr from-black/95 via-black/30 to-transparent p-8 md:p-12">
                <div className="mb-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl backdrop-blur-md md:flex">
                  {largeFacility.icon}
                </div>
                <span className="mb-2 text-xs font-bold tracking-widest text-amber-500 uppercase">
                  {largeFacility.tag}
                </span>
                <h3 className="text-3xl leading-tight font-black text-white sm:text-4xl md:text-5xl">
                  {largeFacility.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                  {largeFacility.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
