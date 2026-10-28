'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Github } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLang } from './LanguageProvider';

export function Hero() {
  const { lang, t } = useLang();
  const reducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start start', 'end start'] });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 70, damping: 25 });
  const springY = useSpring(pointerY, { stiffness: 70, damping: 25 });
  const imageX = useTransform(springX, [-1, 1], [-10, 10]);
  const imageY = useTransform(springY, [-1, 1], [-8, 8]);
  const imageRotateX = useTransform(springY, [-1, 1], [1.1, -1.1]);
  const imageRotateY = useTransform(springX, [-1, 1], [-1.1, 1.1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.025, 1.085]);

  return (
    <section className="cinematic-hero" aria-labelledby="hero-name">
      <div
        ref={stageRef}
        className="cinematic-stage"
        onPointerMove={(event) => {
          if (reducedMotion || event.pointerType === 'touch') return;
          const bounds = event.currentTarget.getBoundingClientRect();
          pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1);
          pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1);
        }}
        onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      >
        <motion.div
          className="cinematic-visual"
          style={reducedMotion ? undefined : { x: imageX, y: imageY, rotateX: imageRotateX, rotateY: imageRotateY, scale: imageScale }}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <Image src="/images/cinematic-hero.jpg" alt="" fill priority className="cinematic-image" sizes="100vw" />
        </motion.div>
        <div className="cinematic-copy">
          <motion.p key={`overline-${lang}`} className="cinematic-overline" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
            {lang === 'en' ? 'SOFTWARE ENGINEER / PORTFOLIO' : 'KỸ SƯ PHẦN MỀM / HỒ SƠ DỰ ÁN'}
          </motion.p>
          <motion.h1 key={`name-${lang}`} id="hero-name" className={lang === 'vi' ? 'hero-name-vi' : undefined} initial={reducedMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3 }}>
            {lang === 'en' ? <>MAI NGUYEN<br />BINH TAN<span>.</span></> : <>MAI NGUYỄN<br />BÌNH TÂN<span>.</span></>}
          </motion.h1>
          <motion.p key={`role-${lang}`} className="cinematic-role" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }}>
            {lang === 'en' ? 'Software Engineer — Backend, Cloud Infrastructure & Applied AI' : 'Kỹ sư phần mềm — Backend, Hạ tầng đám mây & AI ứng dụng'}
          </motion.p>
          <motion.p className="cinematic-description" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .55 }}>
            {lang === 'en' ? 'Reliable backends. Thoughtful cloud systems. Applied AI built for real work.' : 'Backend tin cậy. Hạ tầng cloud có chiều sâu. AI ứng dụng cho công việc thực tế.'}
          </motion.p>
          <motion.div className="cinematic-actions" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .65 }}>
            <a href="#projects" className="cinematic-primary">{t('hero.buttonWork')} <ArrowDownRight size={18} /></a>
            <a href="#contact" className="cinematic-secondary">{lang === 'en' ? 'Get in touch' : 'Liên hệ'} <ArrowUpRight size={18} /></a>
          </motion.div>
        </div>
      </div>
      <div className="cinematic-foot container-custom">
        <span>{lang === 'en' ? 'MAI NGUYEN BINH TAN' : 'MAI NGUYỄN BÌNH TÂN'} © 2026</span>
        <a href="https://github.com/imtarget05" target="_blank" rel="noopener noreferrer"><Github size={15} /> GITHUB / IMTARGET05 <ArrowUpRight size={14} /></a>
        <a href="#projects">{lang === 'en' ? 'SCROLL TO WORK' : 'XEM DỰ ÁN'} <ArrowDownRight size={15} /></a>
      </div>
      <div className="hero-marquee" aria-hidden="true"><div className="hero-marquee-track">
        {Array.from({ length: 4 }, (_, index) => <span key={index}>{lang === 'en' ? 'BACKEND ENGINEERING' : 'KỸ THUẬT BACKEND'} <b>✦</b> {lang === 'en' ? 'CLOUD INFRASTRUCTURE' : 'HẠ TẦNG ĐÁM MÂY'} <b>✦</b> {lang === 'en' ? 'APPLIED AI' : 'AI ỨNG DỤNG'} <b>✦</b></span>)}
      </div></div>
    </section>
  );
}
