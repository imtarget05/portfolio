'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Github } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLang } from './LanguageProvider';

export function Hero3D() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start start', 'end start'] });

  const pointerX = useRef(0);
  const pointerY = useRef(0);
  const pointerXValue = useRef(0);
  const pointerYValue = useRef(0);
  const rafRef = useRef<number>();

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.current = (event.clientX - bounds.left) / bounds.width * 2 - 1;
    pointerY.current = (event.clientY - bounds.top) / bounds.height * 2 - 1;
  };

  const springX = useSpring(pointerXValue.current, { stiffness: 60, damping: 22 });
  const springY = useSpring(pointerYValue.current, { stiffness: 60, damping: 22 });

  useEffect(() => {
    const animate = () => {
      pointerXValue.current += (pointerX.current - pointerXValue.current) * 0.08;
      pointerYValue.current += (pointerY.current - pointerYValue.current) * 0.08;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);

  const imageX = useTransform(springX, [-1, 1], [-10, 10]);
  const imageY = useTransform(springY, [-1, 1], [-8, 8]);
  const imageRotateX = useTransform(springY, [-1, 1], [1.2, -1.2]);
  const imageRotateY = useTransform(springX, [-1, 1], [-1.2, 1.2]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.06]);

  const particles = Array.from({ length: 14 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 4 + Math.random() * 10;
    const delay = Math.random() * 10;
    const duration = 10 + Math.random() * 15;
    return (
      <motion.div
        key={i}
        className="particle"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
          color: i % 2 === 0 ? 'rgb(var(--glow-c1))' : 'rgb(var(--glow-c2))',
        }}
      />
    );
  });
  return (
    <section className="cinematic-hero hero-3d-scene" aria-labelledby="hero-name">
      <div
        ref={stageRef}
        className="cinematic-stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => { pointerX.current = 0; pointerY.current = 0; }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ backgroundColor: 'rgb(var(--glow-c1) / 0.15)', opacity: reducedMotion ? 1 : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className="absolute bottom-0 right-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[90px]"
            style={{ backgroundColor: 'rgb(var(--glow-c2) / 0.12)', opacity: reducedMotion ? 1 : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          />
        </div>

        {particles}

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

        <div className="cinematic-copy relative z-10">
          <motion.p key={`overline-${lang}`} className="cinematic-overline badge-available" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
            {lang === 'en' ? 'AVAILABLE FOR HIRE' : 'SẴN SÀNG ỨNG TUYỂN'}
          </motion.p>
          <motion.p key={`overline2-${lang}`} className="cinematic-overline" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>
            {lang === 'en' ? 'SOFTWARE ENGINEER / CANDIDATE PORTFOLIO' : 'KỸ SƯ PHẦN MỀM / HỒ SƠ ỨNG VIÊN'}
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
            <a href="#projects" className="cinematic-primary">{lang === 'en' ? 'View My Work' : 'Xem công việc của tôi'} <ArrowDownRight size={18} /></a>
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