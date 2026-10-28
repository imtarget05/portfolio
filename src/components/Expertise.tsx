'use client';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { expertise } from '@/content/data';

export function Expertise() {
  const { lang } = useLang();
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] });
  const headingX = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return <section id="expertise" ref={section} className="section decode-section">
    <div className="container-custom">
      <div className="decode-intro"><p className="eyebrow">03 / {lang === 'en' ? 'THE PRACTICE' : 'CHUYÊN MÔN'}</p><p>{lang === 'en' ? 'Four connected disciplines. One focus: systems that work beyond the demo.' : 'Bốn lĩnh vực liên kết. Một mục tiêu: hệ thống vận hành được ngoài bản demo.'}</p></div>
      <motion.h2 style={{ x: reduced ? 0 : headingX }} className="decode-heading" aria-label={lang === 'en' ? 'Engineering' : 'Kỹ thuật'}>{lang === 'en' ? 'ENGINEERING' : 'KỸ THUẬT'}</motion.h2>
      <div className="decode-grid">{expertise.items.map((item, index) => <motion.article key={index} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55, delay: index * .08 }}>
        <span>0{index + 1}</span><h3>{item.title[lang]}</h3><p>{item.desc[lang]}</p>
      </motion.article>)}</div>
    </div>
  </section>;
}
