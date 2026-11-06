'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function GlassCard({ children, className = '', hover = true, padding = 'md' }: GlassCardProps) {
  const paddings: Record<string, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  return (
    <div
      className={cn(
        'glass-panel rounded-2xl transition-all duration-300',
        hover && 'hover:bg-white/20 hover:border-white/30 hover:shadow-xl',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

interface GlassStatCardProps {
  value: string;
  label: string;
  accent?: string;
}

export function GlassStatCard({ value, label, accent = 'cyan-400' }: GlassStatCardProps) {
  return (
    <GlassCard hover padding="sm" className="text-center">
      <div className={cn('text-3xl font-bold tracking-tight mb-1', accent === 'cyan-400' ? 'text-cyan-400' : 'text-white')}>
        {value}
      </div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</div>
    </GlassCard>
  );
}
