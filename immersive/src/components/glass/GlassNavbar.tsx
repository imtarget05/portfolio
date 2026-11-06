'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface GlassNavbarProps {
  lang: 'en' | 'vi';
  setLang: (lang: 'en' | 'vi') => void;
  chapters: { id: string; label: { en: string; vi: string } }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function GlassNavbar({ lang, setLang, chapters, activeIndex, setActiveIndex }: GlassNavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const brandLabel = lang === 'en' ? 'IMMERSIVE' : 'MẢNG TRÌNH';

  const navLinks = chapters.map((ch, i) => ({
    label: ch.label[lang],
    onClick: () => {
      setActiveIndex(i);
      setIsOpen(false);
    },
    active: i === activeIndex,
  }));

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        scrolled
          ? 'glass-panel border-b border-white/10 shadow-lg'
          : 'bg-black/20 backdrop-blur-md border-b border-white/5',
        'transition-all duration-300'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveIndex(0)}>
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgb(34,211,238,0.6)]" />
          <span className={cn('font-display font-bold tracking-tight', scrolled ? 'text-white' : 'text-cyan-400')}>
            {brandLabel}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.05 }}
              onClick={link.onClick}
              className={cn(
                'text-sm font-medium transition-colors cursor-pointer',
                link.active ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              )}
            >
              {link.label}
            </motion.div>
          ))}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="sr-only">{lang === 'en' ? 'Tiếng Việt' : 'English'}</span>
            </button>
            <button
              onClick={() => {
                const root = window.document.documentElement;
                root.classList.toggle('dark');
              }}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              aria-label="Toggle theme"
            >
              {rootThemeIsDark() ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              const root = window.document.documentElement;
              root.classList.toggle('dark');
            }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            aria-label="Toggle theme"
          >
            {rootThemeIsDark() ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute top-4 right-4 p-1">
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="container mx-auto pt-20 pb-12 px-6 space-y-8">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 4 }}
                  onClick={link.onClick}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-lg font-medium transition-colors',
                    link.active
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </motion.div>
              ))}
            </div>
            <div className="pt-8 space-y-4 border-t border-white/10">
              <button
                onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
                className="w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-left text-slate-200 transition-colors"
              >
                {lang === 'en' ? 'Tiếng Việt' : 'English'} <Globe className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => {
                  const root = window.document.documentElement;
                  root.classList.toggle('dark');
                }}
                className="w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-left text-slate-200 transition-colors"
              >
                {rootThemeIsDark() ? 'Light Mode' : 'Dark Mode'} {rootThemeIsDark() ? <Sun className="w-4 h-4 ml-2" /> : <Moon className="w-4 h-4 ml-2" />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function rootThemeIsDark(): boolean {
  if (typeof window === 'undefined') return false;
  return window.document.documentElement.classList.contains('dark');
}
