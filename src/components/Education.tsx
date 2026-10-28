'use client';

import { useLang } from './LanguageProvider';
import { education } from '@/content/data';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const { lang } = useLang();

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <p className="eyebrow">02 / {lang === 'en' ? 'EDUCATION' : 'GIÁO DỤC'}</p>
        <h2 className="section-title">
          {lang === 'en' ? 'Education' : 'Giáo dục'}
        </h2>
        <div className="experience-list">
          {education.map((item) => (
            <div className="experience-item" key={item.id}>
              <div className="experience-header">
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary" />
                  <h3>{item.degree[lang]}</h3>
                </div>
                <span className="experience-period">{item.period[lang]}</span>
              </div>
              <p className="experience-company">{item.school[lang]}</p>
              <p className="experience-description">
                {item.location[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
