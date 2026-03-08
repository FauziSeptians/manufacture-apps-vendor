'use client';

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
    <div className="pointer-events-none absolute bottom-6 left-0 z-20 w-full translate-y-4 px-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
      <Card className="rounded-xl border-none bg-white/90 shadow-2xl backdrop-blur-md">
        <CardContent className="text-center text-sm font-bold text-slate-800">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm font-light">{role}</p>
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
