'use client';

import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';

interface InformationCardProps {
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
}

export default function InformationCard({
  title,
  highlight,
  description,
  icon: Icon,
}: InformationCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/20">
      <CardHeader className="flex hidden flex-col items-center gap-4 space-y-0 p-8 pb-4 md:flex">
        {/* Icon di tengah */}
        <div className="hidden h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition-transform group-hover:scale-110 md:flex">
          <Icon size={32} />
        </div>
        {/* Title di tengah - ganti ke text-white jika background gelap */}
        <h3 className="hidden text-2xl font-bold tracking-tight text-white uppercase md:flex">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-4 p-8 pt-0 text-center">
        {/* Highlight di tengah */}
        <p className="text-sm font-bold tracking-widest text-amber-400 uppercase">
          {highlight}
        </p>
        {/* Deskripsi di tengah dengan warna yang kontras */}
        <p className="leading-relaxed text-slate-100">{description}</p>
      </CardContent>
    </Card>
  );
}
