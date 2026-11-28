'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLang } from './LanguageProvider';
import { useMode, PortfolioMode } from './ModeProvider';
import { Monitor, Code2 } from 'lucide-react';

const modeLabels: Record<PortfolioMode, { en: string; vi: string }> = {
  recruiter: { en: 'Recruiter Mode', vi: 'Chế độ Nhà tuyển dụng' },
  'technical-lead': { en: 'Technical Lead Mode', vi: 'Chế độ Trưởng Kỹ thuật' },
};

export function ModeToggle() {
  const { lang } = useLang();
  const { mode, setMode, isTechnicalLead } = useMode();
  const pathname = usePathname();

  // Don't show mode toggle on role pages or project detail pages
  if (pathname.startsWith('/roles/') || pathname.startsWith('/projects/') || pathname.startsWith('/cv') || pathname.startsWith('/immersive')) {
    return null;
  }

  const nextMode: PortfolioMode = mode === 'recruiter' ? 'technical-lead' : 'recruiter';

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col items-end gap-2">
      <button
        onClick={() => setMode(nextMode)}
        className={`p-3 rounded-lg border border-border bg-card text-foreground shadow-lg transition-all ${isTechnicalLead ? 'ring-2 ring-primary' : ''}`}
        aria-label={lang === 'en' ? 'Switch to Technical Lead Mode' : 'Chuyển sang Chế độ Trưởng Kỹ thuật'}
        title={isTechnicalLead
          ? (lang === 'en' ? 'Switch to Recruiter Mode' : 'Chuyển sang Chế độ Nhà tuyển dụng')
          : (lang === 'en' ? 'Switch to Technical Lead Mode' : 'Chuyển sang Chế độ Trưởng Kỹ thuật')}
      >
        {isTechnicalLead ? <Monitor size={18} /> : <Code2 size={18} />}
        <span className="ml-2 text-xs font-medium uppercase tracking-wider">{isTechnicalLead ? 'Recruiter' : 'Tech Lead'}</span>
      </button>
      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
        {modeLabels[mode][lang]}
      </span>
    </div>
  );
}
