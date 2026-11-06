'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { SceneWrapper } from '@/experience/scene/SceneWrapper';
import { GlassButton } from '@/components/glass/GlassButton';
import { ArrowRight } from 'lucide-react';

export function Chapter01({ lang }: { lang: 'en' | 'vi' }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const t = {
    en: {
      eyebrow: 'CHAPTER 01 / INTRODUCTION',
      heading: 'Digital\nExperiences',
      sub: 'Step into an immersive world where glass meets light, and architecture meets code.',
      cta: 'Begin Journey',
    },
    vi: {
      eyebrow: 'CHƯƠNG 01 / GIỚI THIỆU',
      heading: 'Trải nghiệm\nSố',
      sub: 'Bước vào thế giới tuần hoàn nơi kính gặp ánh sáng, và kiến trúc gặp mã.',
      cta: 'Bắt đầu hành trình',
    },
  }[lang];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <SceneWrapper chapterIndex={0} />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
          className="text-center space-y-6 max-w-2xl"
        >
          <span className="text-xs font-medium tracking-widest text-cyan-400/80 uppercase">
            {t.eyebrow}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-white to-slate-200 leading-[0.9]"
          >
            {t.heading.replace('\n', ' ')}
          </motion.h1>
          <p
            className="text-lg text-slate-300 max-w-lg leading-relaxed"
          >
            {t.sub}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ opacity }}
          className="mt-auto mb-20"
        >
          <GlassButton variant="primary" size="lg" className="w-full md:w-auto px-10 py-4 flex items-center gap-2" asChild>
            <a href="#explore" className="flex items-center gap-2">
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
}
