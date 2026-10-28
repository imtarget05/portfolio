'use client';
import { motion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { techStack } from '@/content/data';

export function TechStack() {
  const { lang } = useLang();
  return <section id="tech" className="section stack-section"><div className="container-custom">
    <div className="stack-head"><p className="eyebrow">06 / {lang === 'en' ? 'THE TOOLKIT' : 'BỘ CÔNG CỤ'}</p><motion.h2 initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>STACK<span>.</span></motion.h2><p>{lang === 'en' ? 'Technology is a means to build reliable, maintainable systems.' : 'Công nghệ là công cụ để tạo ra hệ thống tin cậy, dễ bảo trì.'}</p></div>
    <div className="stack-list">{techStack.categories.map((category, index) => <motion.div key={index} className="stack-row" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .08 }}><span>0{index + 1}</span><h3>{category.name[lang]}</h3><p>{category.items.join(' · ')}</p></motion.div>)}</div>
  </div></section>;
}
