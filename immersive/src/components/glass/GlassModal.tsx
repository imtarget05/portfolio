'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GlassCard } from './GlassCard';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function GlassModal({ isOpen, onClose, title, children, className = '' }: GlassModalProps) {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          'glass-panel rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-all',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
        <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-slate-200 transition-colors">
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface GlassCarouselProps {
  items: { label: string; value: string; accent?: string }[];
}

export function GlassCarousel({ items }: GlassCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const item = items[index];
  return (
    <GlassCard hover padding="lg" className="text-center">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setIndex((i) => (i === 0 ? items.length - 1 : i - 1))}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors disabled:opacity-50"
          disabled={index === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs text-slate-400">{index + 1} / {items.length}</span>
        <button
          onClick={() => setIndex((i) => (i === items.length - 1 ? 0 : i + 1))}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors disabled:opacity-50"
          disabled={index === items.length - 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className={cn('text-4xl font-bold mb-2', item.accent === 'cyan-400' ? 'text-cyan-400' : 'text-white')}>
        {item.value}
      </div>
      <div className="text-sm text-slate-300">{item.label}</div>
    </GlassCard>
  );
}
