'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target } from 'lucide-react';
import { useRef } from 'react';
import visi from '../../../public/assets/visi/visi.jpg';
import SafeImage from '@/components/atom/ImageOptimize';
import InformationCard from '@/components/atom/InformationCard';
import { Typography } from '@/components/ui/Typography';
import type { Dictionary } from '@/lib/dictionary';

export default function VissionMissionSection({ dict }: { dict: Dictionary }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Animasi (Tetap sama)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -50]);

  const cardOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  const cardScale = useTransform(scrollYProgress, [0.5, 0.7, 1], [0.9, 1, 1]);
  const cardY = useTransform(scrollYProgress, [0.5, 0.7, 1], [50, 0, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full"
      id="vission"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={visi.src}
            alt="Manufacturing Background"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-top opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="relative z-40 container mx-auto flex items-center justify-center px-6">
          {/* LAYER 1: Header Information */}
          <motion.div
            style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
            className="absolute flex flex-col items-center text-center"
          >
            <Typography>
              <Typography.Kicker className="text-amber-500">
                {dict.VisionMission.kicker}
              </Typography.Kicker>
              <Typography.Title className="text-5xl text-white md:text-7xl lg:text-8xl">
                {dict.VisionMission.title}{' '}
                <Typography.Highlight className="text-slate-300">
                  {dict.VisionMission.titleHighlight}
                </Typography.Highlight>
              </Typography.Title>
            </Typography>
            <div className="mt-8 h-1 w-24 rounded-full bg-amber-500" />
            <p className="mt-6 animate-bounce text-sm font-medium tracking-widest text-slate-400 uppercase">
              {dict.VisionMission.scrollHint}
            </p>
          </motion.div>

          {/* LAYER 2: Vision & Mission Cards */}
          <motion.div
            style={{ opacity: cardOpacity, scale: cardScale, y: cardY }}
            className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2"
          >
            <div className="group transition-transform hover:-translate-y-2">
              <InformationCard
                title={dict.VisionMission.vision.title}
                icon={Target}
                highlight={dict.VisionMission.vision.highlight}
                description={dict.VisionMission.vision.description}
              />
            </div>

            <div className="group transition-transform hover:-translate-y-2">
              <InformationCard
                title={dict.VisionMission.mission.title}
                icon={Rocket}
                highlight={dict.VisionMission.mission.highlight}
                description={dict.VisionMission.mission.description}
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>
    </section>
  );
}

