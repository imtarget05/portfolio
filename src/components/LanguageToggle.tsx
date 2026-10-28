'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';

type Lang = 'en' | 'vi';

export function LanguageToggle({ currentLang, onChange }: { currentLang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-1.5 bg-background text-foreground">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <button
        onClick={() => onChange('en')}
        className={`text-xs font-medium rounded-md px-2 py-1.5 transition-colors ${
          currentLang === 'en' ? 'bg-cobalt-600 text-white' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange('vi')}
        className={`text-xs font-medium rounded-md px-2 py-1.5 transition-colors ${
          currentLang === 'vi' ? 'bg-cobalt-600 text-white' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
        }`}
      >
        VI
      </button>
    </div>
  );
}