'use client';

import { TEAM_DATA } from '@/data/team';
import { motion } from 'framer-motion';
import CardPerson from '@/components/atom/CardPerson';
import { Typography } from '@/components/ui/Typography';
import type { Dictionary } from '@/lib/dictionary';

export default function OurTeamSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="flex w-full flex-col gap-16 bg-white py-24" id="team">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col items-center px-6 text-center"
      >
        <Typography>
          <Typography.Kicker className="text-amber-500">
            {dict.Team.kicker}
          </Typography.Kicker>
          <Typography.Title>
            {dict.Team.title}{' '}
            <Typography.Highlight>
              {dict.Team.titleHighlight}
            </Typography.Highlight>
          </Typography.Title>
          <Typography.P className="mx-auto mt-4 max-w-2xl">
            {dict.Team.description}
          </Typography.P>
        </Typography>
      </motion.div>

      {/* Grid Container */}
      <div className="flex w-full justify-center px-6">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_DATA.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <CardPerson
                name={member.name}
                role={member.role}
                image={member.image}
                imageClass={member.imageClass}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

