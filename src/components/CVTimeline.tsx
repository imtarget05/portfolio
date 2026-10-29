'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { Layers, GraduationCap } from 'lucide-react';
import { education } from '@/content/data';

const milestones = [
  {
    id: 'fullstack-intern',
    icon: Layers,
    title: { en: 'Fullstack Intern', vi: 'Thực tập sinh Fullstack' },
    subtitle: { en: 'Frontend and backend features, API integration and UI components.', vi: 'Tính năng frontend và backend, tích hợp API và thành phần giao diện.' },
    tech: { en: 'React · Next.js · TypeScript · Tailwind CSS · Node.js · PostgreSQL', vi: 'React · Next.js · TypeScript · Tailwind CSS · Node.js · PostgreSQL' },
    work: { en: 'Internship — 3 months', vi: 'Thực tập — 3 tháng' },
  },
];

export function CVTimeline() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="section cv-section">
      <div className="container-custom">
        <motion.div className="cv-header reveal-3d" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">01 / {lang === 'en' ? 'CANDIDATE PROFILE' : 'HỒ SƠ ỨNG VIÊN'}</p>
          <motion.h2 className="section-title" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {lang === 'en' ? <>Engineering<br /><span className="gradient-text">Journey.</span></> : <>Hành trình<br /><span className="gradient-text">Kỹ thuật.</span></>}
          </motion.h2>
          <motion.p className="section-subtitle" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {lang === 'en' ? 'From backend systems to cloud platforms and applied AI — each stage documented with repository evidence.' : 'Từ hệ thống backend đến nền tảng cloud và AI ứng dụng — mỗi giai đoạn đều có bằng chứng từ repository.'}
          </motion.p>
        </motion.div>

        <div className="cv-timeline">
          {milestones.map((m, index) => (
            <motion.div key={m.id} className="cv-timeline-item" initial={reducedMotion ? false : { opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.12 }}>
              <div className="flex items-start gap-4">
                <div className="mt-2 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary border border-primary/20 shadow-lg preserve-3d card-3d-inner">
                  <m.icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{m.title[lang]}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{m.subtitle[lang]}</p>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground mb-2">
                    <span>{m.tech[lang]}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.work[lang]}</p>
                </div>
              </div>
            </motion.div>
          ))}
          {education.map((e, index) => (
            <motion.div key={e.id} className="cv-timeline-item" initial={reducedMotion ? false : { opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: (milestones.length + index) * 0.12 }}>
              <div className="flex items-start gap-4">
                <div className="mt-2 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary border border-primary/20 shadow-lg preserve-3d card-3d-inner">
                  <GraduationCap size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{e.school[lang]}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{e.degree[lang]}</p>
                  <p className="text-sm text-muted-foreground">{e.period[lang]} · {e.location[lang]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
