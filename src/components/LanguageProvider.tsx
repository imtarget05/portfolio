'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Navbar } from './Navbar';

type Lang = 'en' | 'vi';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  useEffect(() => { const saved = localStorage.getItem('portfolio-language'); if (saved === 'en' || saved === 'vi') setLang(saved); }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const changeLanguage = (value: Lang) => { localStorage.setItem('portfolio-language', value); setLang(value); };

  const t = useCallback(
    (key: string) => {
      const content: Record<string, Record<Lang, string>> = {
        'nav.about': { en: 'About', vi: 'Giới thiệu' },
        'nav.licenses': { en: 'LICENSESCERTIFICATIONS', vi: 'LICENSESCERTIFICATIONS' },
        'nav.expertise': { en: 'Expertise', vi: 'Chuyên môn' },
        'nav.projects': { en: 'Projects', vi: 'Dự án' },
        'nav.tech': { en: 'Tech Stack', vi: 'Công nghệ' },
        'nav.experience': { en: 'Experience', vi: 'Kinh nghiệm' },
        'nav.services': { en: 'Services', vi: 'Dịch vụ' },
        'nav.contact': { en: 'Contact', vi: 'Liên hệ' },
        'nav.apply': { en: 'Apply', vi: 'Ứng tuyển' },
        'hero.headline': {
          en: 'Building Scalable Software, Intelligent Applications & Reliable Cloud Systems.',
          vi: 'Xây dựng phần mềm mở rộng, ứng dụng thông minh và hệ thống đám mây tin cậy.',
        },
        'hero.subheadline': {
          en: "I'm a Fullstack Software Engineer specializing in backend development, cloud infrastructure, and AI-powered applications.",
          vi: "Tôi là kỹ sư phần mềm tập trung vào backend, hạ tầng đám mây và ứng dụng AI.",
        },
        'hero.cta': {
          en: 'Have a project in mind? Let’s build something great.',
          vi: 'Có dự án nào trong đầu? Hãy cùng xây dựng điều tuyệt vời.',
        },
        'hero.buttonWork': { en: 'View My Work', vi: 'Xem công việc của tôi' },
        'hero.buttonContact': { en: "Let's Work Together", vi: 'Hãy làm việc cùng nhau' },
        'about.title': { en: 'About Me', vi: 'Về Tôi' },
        'expertise.title': { en: 'Expertise', vi: 'Chuyên Môn' },
        'projects.title': { en: 'Featured Projects', vi: 'Dự án Nổi bật' },
        'tech.title': { en: 'Tech Stack', vi: 'Công Nghệ' },
        'experience.title': { en: 'Experience', vi: 'Kinh Nghiệm' },
        'services.title': { en: 'Services', vi: 'Dịch Vụ' },
        'contact.title': { en: 'Contact', vi: 'Liên Hệ' },
        'footer.copyright': { en: '© 2026 Mai Nguyen Binh Tan. All rights reserved.', vi: '© 2026 Mai Nguyễn Bình Tân. Bảo lưu mọi quyền.' },
        'footer.builtWith': { en: 'Built with Next.js, Tailwind CSS & Framer Motion', vi: 'Xây dựng bằng Next.js, Tailwind CSS & Framer Motion' },
      };
      const entry = content[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang: changeLanguage, t }}>
      <Navbar lang={lang} setLang={changeLanguage} t={t} />
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
