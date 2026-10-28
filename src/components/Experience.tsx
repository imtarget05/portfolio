'use client';

import { useLang } from './LanguageProvider';
import { experience } from '@/content/data';

export function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <p className="eyebrow">08 / {lang === 'en' ? 'EXPERIENCE' : 'KINH NGHIỆM'}</p>
        <h2 className="section-title">
          {lang === 'en' ? 'Professional Experience' : 'Kinh nghiệm làm việc'}
        </h2>
        <div className="experience-list">
          {experience.items.map((item) => (
            <div className="experience-item" key={item.id}>
              <div className="experience-header">
                <h3>{item.role[lang]}</h3>
                <span className="experience-period">{item.period[lang]}</span>
              </div>
              <p className="experience-company">{item.company[lang]}</p>
              <p className="experience-description">{item.description[lang]}</p>
              <div className="experience-tech">
                {item.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
