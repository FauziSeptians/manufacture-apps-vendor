'use client';

import { cn } from '@/lib/utils'; // Pastikan ada utility cn
import { Card, CardContent, CardHeader } from '../ui/card';
import { HyperText } from '../ui/hyper-text';
import { Typography } from '../ui/Typography';

export type HighlightCardProps = {
  title: string;
  description: string;
  variant?: 'default' | 'transparent'; // Tambahkan variant
};

export default function HighlightCard({
  title,
  description,
  variant = 'default',
}: HighlightCardProps) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden rounded-xl transition-all duration-500',
        // Logic Style Berdasarkan Variant
        variant === 'default'
          ? 'border-slate-100 bg-white p-2 shadow-sm'
          : 'border border-white/40 bg-white/20 p-1 shadow-2xl backdrop-blur-md'
      )}
    >
      {/* Efek Splash hanya untuk default */}
      {variant === 'default' && (
        <div className="absolute inset-0 z-0 origin-center scale-0 rounded-full bg-slate-900 transition-transform duration-500 ease-out group-hover:scale-[2.5]" />
      )}

      <div className="relative z-10 px-4 py-2">
        <CardHeader className="p-0">
          <Typography.Title
            className={cn(
              'mb-0 text-2xl tracking-normal normal-case sm:text-3xl',
              variant === 'transparent'
                ? 'text-slate-900'
                : 'group-hover:text-white'
            )}
          >
            <HyperText className="text-inherit">{title}</HyperText>
          </Typography.Title>
        </CardHeader>

        <CardContent className="p-0">
          <Typography.P
            className={cn(
              'mt-1 text-xs font-bold tracking-wider uppercase',
              variant === 'transparent'
                ? 'text-slate-700'
                : 'group-hover:text-slate-300'
            )}
          >
            {description}
          </Typography.P>
        </CardContent>
      </div>

      {variant === 'default' && (
        <div className="bg-primary absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full" />
      )}
    </Card>
  );
}
