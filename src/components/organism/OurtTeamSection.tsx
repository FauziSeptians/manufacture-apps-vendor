'use client';

import { motion } from 'framer-motion';
import Person from '../../../public/assets/person.png';
import CardPerson from '../atom/CardPerson';
import { Typography } from '../ui/Typography';

const TEAM_DATA = [
  { name: 'Wartiwan', role: 'President Director (CEO)' },
  { name: 'Aas Saadah', role: 'Head of Finance' },
  { name: 'Marwan', role: 'Head of Marketing' },
  { name: 'Abdul Kamal', role: 'Head of SCM' },
  { name: 'Dadang', role: 'Head of Production' },
  { name: 'Dendra', role: 'Head of Product Development' },
  { name: 'Ujang Jumad', role: 'Head of Quality Control' },
  { name: 'Insan Kamil', role: 'Head of Warehouse' },
  { name: 'Farid Shiddiq Ramadhan', role: 'Head of Social Media' },
];

export default function OurTeamSection() {
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
          <Typography.Kicker>Expertise Behind Wartiwan</Typography.Kicker>
          <Typography.Title>
            The Solid <Typography.Highlight>Backbone.</Typography.Highlight>
          </Typography.Title>
          <Typography.P className="mx-auto mt-4 max-w-2xl">
            Didukung oleh para profesional berpengalaman yang memastikan setiap
            aspek produksi dan distribusi berjalan dengan standar kualitas
            tertinggi.
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
                delay: idx * 0.1, // Ini trik stagger tanpa variabel variants
                ease: 'easeOut',
              }}
            >
              <CardPerson
                name={member.name}
                role={member.role}
                image={Person.src}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
