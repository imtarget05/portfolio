'use client';

import { motion } from 'framer-motion';
import { useLang } from './LanguageProvider';

interface SkillNodeProps {
  skill: string;
  level: number;
  lang: 'en' | 'vi';
  className?: string;
}

export function SkillNode3D({ skill, level, lang, className }: SkillNodeProps) {
  const labels: Record<string, Record<'en' | 'vi', string>> = {
    'C#': { en: 'C#', vi: 'C#' },
    '.NET 10': { en: '.NET 10', vi: '.NET 10' },
    'ASP.NET Core': { en: 'ASP.NET Core', vi: 'ASP.NET Core' },
    'Java Spring Boot': { en: 'Java Spring Boot', vi: 'Java Spring Boot' },
    Python: { en: 'Python', vi: 'Python' },
    FastAPI: { en: 'FastAPI', vi: 'FastAPI' },
    'Node.js': { en: 'Node.js', vi: 'Node.js' },
    PostgreSQL: { en: 'PostgreSQL', vi: 'PostgreSQL' },
    Redis: { en: 'Redis', vi: 'Redis' },
    MongoDB: { en: 'MongoDB', vi: 'MongoDB' },
    React: { en: 'React', vi: 'React' },
    'Next.js': { en: 'Next.js', vi: 'Next.js' },
    TypeScript: { en: 'TypeScript', vi: 'TypeScript' },
    'Tailwind CSS': { en: 'Tailwind CSS', vi: 'Tailwind CSS' },
    Flutter: { en: 'Flutter', vi: 'Flutter' },
    'Framer Motion': { en: 'Framer Motion', vi: 'Framer Motion' },
    Azure: { en: 'Azure', vi: 'Azure' },
    AKS: { en: 'AKS', vi: 'AKS' },
    AWS: { en: 'AWS', vi: 'AWS' },
    Docker: { en: 'Docker', vi: 'Docker' },
    Kubernetes: { en: 'Kubernetes', vi: 'Kubernetes' },
    Terraform: { en: 'Terraform', vi: 'Terraform' },
    'Argo CD': { en: 'Argo CD', vi: 'Argo CD' },
    'GitHub Actions': { en: 'GitHub Actions', vi: 'GitHub Actions' },
    'Azure Monitor': { en: 'Azure Monitor', vi: 'Azure Monitor' },
    LLM: { en: 'LLM', vi: 'LLM' },
    RAG: { en: 'RAG', vi: 'RAG' },
    LangGraph: { en: 'LangGraph', vi: 'LangGraph' },
    Qdrant: { en: 'Qdrant', vi: 'Qdrant' },
    Ollama: { en: 'Ollama', vi: 'Ollama' },
    MLflow: { en: 'MLflow', vi: 'MLflow' },
    'Apache Airflow': { en: 'Apache Airflow', vi: 'Apache Airflow' },
    'Corrective RAG': { en: 'Corrective RAG', vi: 'Corrective RAG' },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`card-3d p-6 rounded-xl border border-border bg-card text-foreground hover:border-primary/30 transition-all duration-300 ${className ?? ''}`}
    >
      <div className="card-3d-inner preserve-3d h-full flex flex-col items-center justify-center text-center group">
        <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase mb-2 block">
          {level}%
        </span>
        <h3 className="text-sm font-semibold text-foreground leading-tight">
          {labels[skill]?.[lang] ?? skill}
        </h3>
      </div>
    </motion.div>
  );
}
