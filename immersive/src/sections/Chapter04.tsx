'use client';

import { motion } from 'framer-motion';
import { SceneWrapper } from '@/experience/scene/SceneWrapper';
import { GlassButton } from '@/components/glass/GlassButton';
import { ArrowRight } from 'lucide-react';

export function Chapter04({ lang }: { lang: 'en' | 'vi' }) {
  const t = {
    en: {
      eyebrow: 'CHAPTER 04 / FINAL SCENE',
      heading: 'Ready to Begin?',
      sub: 'The journey continues beyond the glass. Build something meaningful.',
      cta: 'Start Building',
      footer: '© 2026 Immersive Experience · Premium Liquid Glass UI',
    },
    vi: {
      eyebrow: 'CHƯƠNG 04 / CẢNH CUỐI',
      heading: 'Sẵn sàng bắt đầu?',
      sub: 'Hành trình tiếp nối bên ngoài kính. Xây dựng điều ý nghĩa.',
      cta: 'Bắt đầu xây dựng',
      footer: '© 2026 Trải nghiệm tuần hoàn · UI Kính Mười cao cấp',
    },
  }[lang];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#020617] to-black">
      <SceneWrapper chapterIndex={3} />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl space-y-8"
        >
          <span className="text-xs font-medium tracking-widest text-cyan-400/80 uppercase">{t.eyebrow}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-white to-slate-200 leading-[0.95]">
            {t.heading}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">{t.sub}</p>
          <GlassButton variant="primary" size="lg" className="w-full md:w-auto px-10 py-4 flex items-center gap-2" asChild>
            <a href="/" className="flex items-center gap-2">
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </GlassButton>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-end px-8 pb-8 pointer-events-none">
        <div className="glass-panel rounded-xl px-6 py-3 border border-white/10 text-slate-400 text-xs tracking-wider">
          {t.footer}
        </div>
      </div>
    </section>
  );
}
