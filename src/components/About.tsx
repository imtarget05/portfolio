'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { about } from '@/content/data';

export function About() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();
  const firstLine = lang === 'en' ? 'BUILT WITH' : 'XÂY DỰNG';
  const secondLine = lang === 'en' ? 'INTENTION.' : 'CÓ CHỦ ĐÍCH.';
  return <section id="about" className="section statement-section">
    <div className="container-custom statement-layout">
      <p className="eyebrow">02 / {lang === 'en' ? 'THE APPROACH' : 'CÁCH TIẾP CẬN'}</p>
      <div>
        <motion.h2 className={`statement-heading ${lang === 'vi' ? 'statement-heading-vi' : ''}`} aria-label={`${firstLine} ${secondLine}`} initial={reducedMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: .2 }}>
          <span className="statement-line"><motion.span key={`${lang}-first`} variants={{ hidden: { opacity: 0, y: '85%' }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>{firstLine}</motion.span></span>
          <span className="statement-line statement-line-accent"><motion.span key={`${lang}-second`} variants={{ hidden: { opacity: 0, y: '85%' }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}>{secondLine}</motion.span></span>
        </motion.h2>
        <div className="statement-copy">
          <p>{lang === 'en' ? about.introEn : about.introVi}</p>
          <p>{lang === 'en' ? about.focusEn : about.focusVi}</p>
        </div>
        <div className="approach-strip"><span>01 / BACKEND</span><span>02 / {lang === 'en' ? 'CLOUD' : 'ĐÁM MÂY'}</span><span>03 / {lang === 'en' ? 'APPLIED AI' : 'AI ỨNG DỤNG'}</span></div>
      </div>
    </div>
  </section>;
}
