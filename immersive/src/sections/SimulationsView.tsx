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

export function SimulationsView({ lang }: { lang: 'en' | 'vi' }) {
  const [activeId, setActiveId] = useState<string>('flashsale');

  const active = simulations.find((s) => s.id === activeId)!;
  const Component = active.component;

  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
      </div>

      <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
        <span className="text-xs font-medium tracking-widest text-cyan-400/80 uppercase">
          {lang === 'en' ? '3D SYSTEM SIMULATIONS' : 'MÔ PHỎNG HỆ THỐNG 3D'}
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-white to-purple-400">
          {lang === 'en' ? 'Engineering Simulations' : 'Mô Phỏng Kỹ Thuật'}
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

      <div className="relative z-10 mx-auto max-w-6xl h-[450px] mt-32 px-8">
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
    </section>
  );
}
