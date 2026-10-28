'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLang } from './LanguageProvider';
import { contact } from '@/content/data';

export function Contact() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();
  return <section id="contact" className="section contact-editorial"><div className="container-custom">
    <div className="contact-top"><p className="eyebrow">07 / {lang === 'en' ? 'LET’S TALK' : 'LIÊN HỆ'}</p><p>{contact.location[lang]}</p></div>
    <motion.h2 initial={reducedMotion ? false : { opacity: 0, y: 54 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>{lang === 'en' ? <>LET’S MAKE<br/><em>IT WORK.</em></> : <>CÙNG TẠO<br/><em>GIẢI PHÁP.</em></>}</motion.h2>
    <motion.div className="contact-bottom" initial={reducedMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, delay: .1 }}><div><p>{contact.subtitle[lang]}</p><a href={`mailto:${contact.email}`} className="contact-email"><Mail size={22}/>{contact.email}<ArrowUpRight size={22}/></a></div><div className="contact-links"><a href={contact.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={17}/></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={17}/></a><a href="#projects">{lang === 'en' ? 'Selected work' : 'Xem dự án'} <ArrowUpRight size={17}/></a></div></motion.div>
  </div></section>;
}
