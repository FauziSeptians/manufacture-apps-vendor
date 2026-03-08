import { cn } from '@/lib/utils';
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// 1. Root Component (Container)
const Typography = ({ children, className }: TypographyProps) => {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
};

// 2. Kicker (Teks kecil di atas title)
const Kicker = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        'text-primary text-xs font-bold tracking-[0.4em] uppercase antialiased sm:text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

// 3. Title (Heading Utama)
const Title = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 uppercase sm:text-5xl',
        'dark:text-slate-50',
        className
      )}
    >
      {children}
    </h1>
  );
};

// 4. Highlight (Span untuk warna abu-abu/aksen di dalam title)
const Highlight = ({ children, className }: TypographyProps) => {
  return (
    <span className={cn('text-slate-400 dark:text-slate-500', className)}>
      {children}
    </span>
  );
};

// 5. Paragraph (Teks isi yang enak dibaca)
const P = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        'text-muted-foreground max-w-2xl leading-7 font-medium',
        'text-base [text-wrap:balance] md:text-lg',
        className
      )}
    >
      {children}
    </p>
  );
};

// Ekspos semua sub-komponen
Typography.Kicker = Kicker;
Typography.Title = Title;
Typography.Highlight = Highlight;
Typography.P = P;

export { Typography };
