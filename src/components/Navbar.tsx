'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

type Lang = 'en' | 'vi';

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

export function Navbar({ lang, setLang, t }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: .001 });

  const links = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.expertise', href: '#expertise' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.tech', href: '#tech' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.contact', href: '#contact' },
    { key: 'nav.apply', href: '#apply' },
  ];

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgb(var(--border)/0.4)]">
      <div className="container-custom flex items-center justify-between h-20">
        <Link
          href="#"
          className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight group"
          onClick={(e) => {
            e.preventDefault();
            router.push('/');
          }}
        >
          <span className="text-cobalt-600 dark:text-cobalt-400 drop-shadow-[0_0_10px_rgb(175_62_41/0.35)] group-hover:drop-shadow-[0_0_16px_rgb(175_62_41/0.55)] transition-all">MBT<span className="brand-dot">.</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-cobalt-600 dark:text-cobalt-400'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageToggle currentLang={lang} onChange={setLang} />
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle currentLang={lang} onChange={setLang} />
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 border border-border bg-background text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-x-0 top-0 h-screen z-[60] bg-background backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 border border-border bg-background text-foreground"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="container-custom py-20 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-cobalt-600 dark:hover:text-cobalt-400"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <ThemeToggle />
              <LanguageToggle currentLang={lang} onChange={setLang} />
            </div>
          </div>
        </div>
      )}
      <motion.div className="nav-progress" style={{ scaleX: reducedMotion ? 1 : progress }} aria-hidden="true" />
    </nav>
  );
}
