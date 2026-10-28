'use client';
import { motion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { services } from '@/content/data';

export function Services() {
  const { lang } = useLang();
  return <section id="services" className="section delivery-section"><div className="container-custom">
    <div className="delivery-heading"><p className="eyebrow">06 / {lang === 'en' ? 'WHAT I BUILD' : 'GIẢI PHÁP'}</p><motion.h2 className={lang === 'vi' ? 'delivery-heading-vi' : undefined} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>{lang === 'en' ? <>FROM IDEA<br/><span>TO DELIVERY.</span></> : <>TỪ Ý TƯỞNG<br/><span>ĐẾN TRIỂN KHAI.</span></>}</motion.h2><p>{services.subtitle[lang]}</p></div>
    <div className="delivery-list">{services.items.map((service, index) => <motion.article key={service.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .07 }}><span>0{index + 1}</span><h3>{service.title[lang]}</h3><p>{service.desc[lang]}</p></motion.article>)}</div>
  </div></section>;
}
