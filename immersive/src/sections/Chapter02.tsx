'use client';

import { SceneWrapper } from '@/experience/scene/SceneWrapper';
import { motion } from 'framer-motion';

export function Chapter02({ lang }: { lang: 'en' | 'vi' }) {
  const t = {
    en: {
      eyebrow: 'CHAPTER 02 / EXPLORE',
      heading: 'Go Deeper',
      sub: 'Floating glass panels reveal the architecture as the camera moves deeper into the torii gate environment.',
      cards: [
        { label: 'TORII GATE', value: 'Sacred entrance', accent: 'cyan-400' },
        { label: 'TERRAIN', value: 'Stylized landscape', accent: 'emerald-500' },
        { label: 'FOG', value: 'Atmospheric depth', accent: 'fuchsia-500' },
      ],
    },
    vi: {
      eyebrow: 'CHƯƠNG 02 / KHÁM PHÁ',
      heading: 'Sâu hơn nữa',
      sub: 'Các bảng kính floating tiết lộ kiến trúc khi camera di chuyển sâu hơn vào môi trường cổng torii.',
      cards: [
        { label: 'CỔNG TORII', value: 'Lối vào thần圣', accent: 'cyan-400' },
        { label: 'ĐỊNH HÌNH', value: 'Phong cách hóa', accent: 'emerald-500' },
        { label: 'Sương mù', value: 'Độ sâu không khí', accent: 'fuchsia-500' },
      ],
    },
  }[lang];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <SceneWrapper chapterIndex={1} />
      <div className="absolute inset-0 z-20 px-8 py-20 pointer-events-none">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel rounded-2xl p-8 text-center border border-white/10 hover:border-cyan-400/50 transition-all"
            >
              <span className="text-xs font-semibold tracking-wider text-cyan-400/70 uppercase mb-2 block">
                {card.label}
              </span>
              <div className="text-3xl font-bold text-white mb-1">{card.value}</div>
              <div className="text-xs text-slate-400">{card.accent === 'cyan-400' ? 'Architecture' : card.accent === 'emerald-500' ? 'Landscape' : 'Environment'}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="text-sm font-medium tracking-widest text-slate-400 uppercase">
            Scroll to continue journey
          </span>
        </motion.div>
      </div>
    </section>
  );
}
