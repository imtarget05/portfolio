'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type PortfolioMode = 'recruiter' | 'technical-lead';

interface ModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  isTechnicalLead: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>('recruiter');
  const isTechnicalLead = mode === 'technical-lead';

  const changeMode = useCallback((next: PortfolioMode) => {
    setMode(next);
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode: changeMode, isTechnicalLead }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used within ModeProvider');
  return ctx;
}
