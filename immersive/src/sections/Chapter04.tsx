'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlashSaleSimulation } from '@/experience/simulations/FlashSaleSimulation';
import { AKSSRESimulation } from '@/experience/simulations/AKSSRESimulation';
import { IncidentIQSimulation } from '@/experience/simulations/IncidentIQSimulation';

const simulations = [
  { id: 'flashsale', label: { en: 'FlashSale', vi: 'FlashSale' }, desc: { en: 'Distributed inventory locking with Redis and outbox pattern', vi: 'Khóa tồn kho phân tán với Redis và mẫu outbox' }, component: FlashSaleSimulation },
  { id: 'aks-sre', label: { en: 'AKS-SRE', vi: 'AKS-SRE' }, desc: { en: 'GitOps with Argo CD and blue-green deployment on AKS', vi: 'GitOps với Argo CD và triển khai xanh-xanh trên AKS' }, component: AKSSRESimulation },
  { id: 'incidentiq', label: { en: 'IncidentIQ', vi: 'IncidentIQ' }, desc: { en: 'AI-powered incident triage with RAG and LangGraph', vi: 'Phân loại sự cố bằng AI với RAG và LangGraph' }, component: IncidentIQSimulation },
];

export function Chapter04({ lang }: { lang: 'en' | 'vi' }) {
  const [activeId, setActiveId] = useState<string>('flashsale');

  const active = simulations.find((s) => s.id === activeId)!;
  const Component = active.component;

  const t = {
    en: {
      eyebrow: 'CHAPTER 04 / SYSTEM SIMULATIONS',
      heading: 'Engineering\nSimulations',
      cta: 'Back to Portfolio',
      footer: '© 2026 Engineering Universe · 3D System Simulations',
    },
    vi: {
      eyebrow: 'CHƯƠNG 04 / MÔ PHỎNG HỆ THỐNG',
      heading: 'Mô Phỏng\nKỹ Thuật',
      cta: 'Về Portfolio',
      footer: '© 2026 Engineering Universe · Mô Phỏng Hệ Thống 3D',
    },
  }[lang];

  return (
    <section className="relative h-screen w-full bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

      <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
        <span className="text-xs font-medium tracking-widest text-cyan-400/80 uppercase">
          {t.eyebrow}
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-white to-purple-400 leading-[0.95]">
          {t.heading.replace('\n', ' ')}
        </h2>
      </div>

      <div className="absolute top-24 left-8 z-10 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {simulations.map((sim) => (
          <button
            key={sim.id}
            onClick={() => setActiveId(sim.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeId === sim.id
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-white hover:border-slate-600'
            }`}
          >
            {sim.label[lang]}
          </button>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl h-[420px] mt-32 px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-8 z-10 max-w-xs">
        <p className="text-slate-400 text-sm leading-relaxed">
          {active.desc[lang]}
        </p>
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="glass-button px-6 py-3 rounded-full text-sm font-medium border border-slate-600/50 bg-slate-900/80 text-white backdrop-blur-sm"
          onClick={() => window.location.href = '/'}
        >
          {t.cta}
        </motion.button>
      </div>
    </section>
  );
}
