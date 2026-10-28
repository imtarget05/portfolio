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
          <p className="eyebrow">03 / {lang === 'en' ? 'CREDENTIALS' : 'CHỨNG CHỈ'}</p>
          <motion.h2 className="section-title" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {title}
          </motion.h2>
          <motion.p className="section-subtitle" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: certifications.indexOf(cert) * 0.08 }}
            >
              <div className="cert-image">
                {cert.image ? (
                  <Image src={cert.image} alt={cert.name[lang]} fill className="cert-image-img" sizes="(max-width: 768px) 100vw, 50vw" />
                ) : (
                  <div className="cert-image-placeholder">
                    <span className="badge-text">{lang === 'en' ? 'DIGITAL' : 'SỐ'}</span>
                  </div>
                )}
              </div>
              <div className="cert-content">
                <h3 className="cert-name">{cert.name[lang]}</h3>
                <p className="cert-issuer">{cert.issuer[lang]}</p>
                <div className="cert-meta">
                  {cert.date && <span className="cert-meta-item"><span className="meta-label">{issued}</span> {cert.date[lang]}</span>}
                  {cert.expiry && <span className="cert-meta-item"><span className="meta-label">{expires}</span> {cert.expiry[lang]}</span>}
                  {cert.score && <span className="cert-meta-item"><span className="meta-label">{score}</span> {cert.score[lang]}</span>}
                  {cert.credentialId && <span className="cert-meta-item"><span className="meta-label">{credential}</span> {cert.credentialId}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
