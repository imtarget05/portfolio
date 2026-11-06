'use client';

import { motion } from 'framer-motion';
import { SceneWrapper } from '@/experience/scene/SceneWrapper';

export function Chapter03({ lang }: { lang: 'en' | 'vi' }) {
  const t = {
    en: {
      eyebrow: 'CHAPTER 03 / EXPERIENCE',
      heading: 'Interactive Glass',
      sub: 'Hover over the glass cards below to experience the Liquid Glass UI with depth, transparency, and refraction-inspired highlights.',
      features: [
        { label: 'Backlit glass', desc: 'Translucent surfaces with subtle edge highlights.', accent: 'cyan-400' },
        { label: 'Backdrop blur', desc: 'Readable overlays over animated 3D scenes.', accent: 'emerald-500' },
        { label: 'Smooth motion', desc: 'GSAP-driven scroll transitions with ease.', accent: 'fuchsia-500' },
        { label: 'Responsive', desc: 'Desktop, tablet, and mobile-ready layouts.', accent: 'amber-400' },
      ],
    },
    vi: {
      eyebrow: 'CHƯƠNG 03 / TRẢI NGHIỆM',
      heading: 'Kính tương tác',
      sub: 'Di chuột qua các thẻ kính dưới đây để trải nghiệm UI Kính Mười với độ sâu, trong suốt và nhấn sáng hấp dẫn.',
      features: [
        { label: 'Kính sáng từ sau', desc: 'Bề mặt trong suốt với nhấn khép mảnh.', accent: 'cyan-400' },
        { label: 'Làm mờ nền', desc: 'Lớp phủ dễ đọc trên cảnh 3D chuyển động.', accent: 'emerald-500' },
        { label: 'Chuyển động mượt', desc: 'Cuộn GSAP-driven với độ mượt.', accent: 'fuchsia-500' },
        { label: 'Đáp ứng', desc: 'Bản máy tính, máy tính bảng và điện thoại.', accent: 'amber-400' },
      ],
    },
  }[lang];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <SceneWrapper chapterIndex={2} />
      <div className="absolute inset-0 z-20 px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
            <div>
              <span className="text-xs font-medium tracking-widest text-cyan-400/80 uppercase">{t.eyebrow}</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-white to-slate-200 mb-4">
                {t.heading}
              </h2>
              <p className="text-lg text-slate-300 max-w-xl">{t.sub}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.map((f, i) => (
              <motion.div
                key={f.label}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  'glass-panel rounded-2xl p-8 cursor-pointer border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all',
                  f.accent === 'cyan-400' ? 'border-cyan-400/20' : f.accent === 'emerald-500' ? 'border-emerald-500/20' : f.accent === 'fuchsia-500' ? 'border-fuchsia-500/20' : 'border-amber-400/20'
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <span className={cn('text-xl', f.accent === 'cyan-400' ? 'text-cyan-400' : f.accent === 'emerald-500' ? 'text-emerald-400' : f.accent === 'fuchsia-500' ? 'text-fuchsia-400' : 'text-amber-400')}>
                    ◆
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
