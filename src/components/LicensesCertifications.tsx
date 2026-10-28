'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { certifications } from '@/content/data';

export function LicensesCertifications() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  const title = lang === 'en' ? 'Licenses & Certifications' : 'Giấy phép & Chứng chỉ';
  const subtitle = lang === 'en' ? 'Verified credentials and language proficiency.' : 'Chứng chỉ đã xác thực và trình độ ngoại ngữ.';
  const issued = lang === 'en' ? 'Issued' : 'Cấp';
  const expires = lang === 'en' ? 'Expires' : 'HSL';
  const score = lang === 'en' ? 'Score' : 'Điểm';
  const credential = lang === 'en' ? 'Credential ID' : 'Mã chứng chỉ';
  const view = lang === 'en' ? 'View credential' : 'Xem chứng chỉ';

  const show = reducedMotion ? certifications : [...certifications, ...certifications];

  const renderCard = (cert: (typeof certifications)[number], idx: number) => (
    <div
      key={cert.id + '-' + idx}
      className={`cert-card-marquee ${reducedMotion ? 'motion-card' : ''}`}
    >
      <div className="cert-image-wrap relative overflow-hidden rounded-2xl border border-border/50 bg-gray-100 dark:bg-gray-800/50 aspect-[4/3]">
        {cert.image ? (
          <Image
            src={cert.image}
            alt={cert.name[lang]}
            fill
            className="cert-image-img object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 text-sm font-medium">
            <span className="mb-1">{lang === 'en' ? 'DIGITAL CERT' : 'CHỨNG CHỈ SỐ'}</span>
            <span className="text-xs">{cert.credentialId}</span>
          </div>
        )}
      </div>
      <div className="cert-content mt-3">
        <h3 className="cert-name font-bold text-foreground text-lg leading-tight">{cert.name[lang]}</h3>
        <p className="cert-issuer text-sm text-muted-foreground">{cert.issuer[lang]}</p>
        <div className="cert-meta mt-2 space-y-1">
          {cert.date && (
            <span className="cert-meta-item flex items-center gap-1 text-xs text-muted-foreground">
              <span className="meta-label font-semibold text-foreground">{issued}</span> {cert.date[lang]}
            </span>
          )}
          {cert.expiry && (
            <span className="cert-meta-item flex items-center gap-1 text-xs text-muted-foreground">
              <span className="meta-label font-semibold text-foreground">{expires}</span> {cert.expiry[lang]}
            </span>
          )}
          {cert.score && (
            <span className="cert-meta-item flex items-center gap-1 text-xs text-muted-foreground">
              <span className="meta-label font-semibold text-foreground">{score}</span> {cert.score[lang]}
            </span>
          )}
          {cert.credentialId && (
            <span className="cert-meta-item flex items-center gap-1 text-xs text-muted-foreground truncate">
              <span className="meta-label font-semibold text-foreground">{credential}</span> {cert.credentialId}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="licenses" className="section licenses-section">
      <div className="container-custom">
        <motion.div
          className="licenses-header reveal-3d"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">03 / {lang === 'en' ? 'LicensesCertifications' : 'CHỨNG CHỈ 03 / CHUYÊN MÔN'}</p>
          <motion.h2 className="section-title" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {title}
          </motion.h2>
          <motion.p className="section-subtitle" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Continuous horizontal marquee: 3 certificates at a time, looping */}
        <div className="cert-marquee">
          <div className="cert-marquee-track">
            {show.map((cert, idx) => renderCard(cert, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
