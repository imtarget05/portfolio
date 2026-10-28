'use client';
import { useLang } from './LanguageProvider';
import { footer } from '@/content/data';
export function Footer() { const { lang } = useLang(); return <footer className="editorial-footer"><div className="container-custom"><p>{footer.copyright[lang]}</p><p>BACKEND / CLOUD / APPLIED AI</p><a href="#" aria-label={lang === 'en' ? 'Back to top' : 'Về đầu trang'}>{lang === 'en' ? 'BACK TO TOP ↑' : 'VỀ ĐẦU TRANG ↑'}</a></div></footer> }
