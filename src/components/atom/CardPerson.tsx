'use client';

import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '../ui/card';

// Definisi Interface untuk Props
interface CardPersonProps {
  name: string;
  role: string;
  image?: string | StaticImageData; // Opsional jika belum ada foto semua
}

export function CardDescription({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <div
      className={cn(
        'absolute bottom-6 left-0 z-20 w-full px-6 transition-all duration-500 ease-out',
        // DESKTOP: Sembunyi dulu, muncul pas hover
        'md:pointer-events-none md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100',
        // MOBILE: Selalu muncul, tanpa efek gerak/transparan
        'max-md:pointer-events-auto max-md:translate-y-0 max-md:opacity-100'
      )}
    >
      <Card className="rounded-xl border-none bg-white/90 shadow-2xl backdrop-blur-md">
        <CardContent className="p-4 text-center text-slate-800">
          {' '}
          {/* p-4 agar lebih rapi */}
          <p className="text-lg leading-tight font-bold">{name}</p>
          <p className="text-sm font-medium text-slate-500">{role}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CardPerson({ name, role, image }: CardPersonProps) {
  return (
    <div className="group relative w-full">
      <CardDescription name={name} role={role} />

      <Card className="relative h-[24rem] cursor-pointer overflow-hidden rounded-2xl border-none bg-slate-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        <CardContent className="h-full p-0">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-300 text-xs text-slate-500 italic">
              No Photo
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </CardContent>
      </Card>
    </div>
  );
}
