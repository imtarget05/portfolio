'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  asChild?: boolean;
}

const GlassButton = React.forwardRef<HTMLDivElement, GlassButtonProps>(
  ({ children, variant = 'glass', size = 'md', disabled = false, onClick, className, asChild = false, ...props }, ref) => {
    const variants: Record<string, string> = {
      primary: 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgb(6,182,212,0.5)]',
      ghost: 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white border border-white/10',
      glass: 'glass-panel text-white hover:bg-white/20 transition-all',
    };
    const sizes: Record<string, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3 text-lg',
    };

    return asChild ? (
      <motion.div
        ref={ref}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer',
          variants[variant],
          sizes[size],
          disabled && 'opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    ) : (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        disabled={disabled}
        {...props}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200',
          variants[variant],
          sizes[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

interface NavCardProps {
  label: string;
  active: boolean;
  onClick: () => void;
  index: number;
}

export function NavCard({ label, active, onClick, index }: NavCardProps) {
  return (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-xl p-4 text-center transition-all duration-300 border',
        active
          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgb(6,182,212,0.25)]'
          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
      )}
    >
      <span className="block text-xs font-medium opacity-70">{label}</span>
    </motion.div>
  );
}

export { GlassButton };
export { ArrowRight, ArrowLeft };
