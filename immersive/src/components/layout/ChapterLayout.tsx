'use client';

import React from 'react';

interface ChapterLayoutProps {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
}

export function ChapterLayout({ children, className = '', eyebrow, heading }: ChapterLayoutProps) {
  return (
    <section className={cn('relative h-screen w-full flex flex-col', className)}>
      {eyebrow && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <span className="text-xs font-medium tracking-wider text-cyan-400/80 uppercase">{eyebrow}</span>
        </div>
      )}
      {heading && <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">{heading}</div>}
      <div className="relative z-10 flex-grow flex items-center justify-center px-6">{children}</div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export { cn };
