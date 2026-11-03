'use client';

import { useEffect, useRef } from 'react';
import { useLang } from './LanguageProvider';

interface SkillRadarProps {
  category: string;
  skills: string[];
  lang: 'en' | 'vi';
}

export function SkillRadar({ category, skills, lang }: SkillRadarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = Math.min(canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = size / 2 - 10;
    const axes = skills.length;
    const angleStep = (Math.PI * 2) / axes;

    const getLevel = (skill: string): number => {
      const levels: Record<string, number> = {
        'C#': 85, '.NET 10': 80, 'ASP.NET Core': 80, 'Java Spring Boot': 75,
        Python: 85, FastAPI: 80, 'Node.js': 85, PostgreSQL: 85, Redis: 75, MongoDB: 70,
        React: 85, 'Next.js': 90, TypeScript: 85, 'Tailwind CSS': 80, Flutter: 70, 'Framer Motion': 75,
        Azure: 80, AKS: 75, AWS: 80, Docker: 85, Kubernetes: 75, Terraform: 70, 'Argo CD': 65, 'GitHub Actions': 80, 'Azure Monitor': 60,
        LLM: 80, RAG: 85, LangGraph: 75, Qdrant: 70, Ollama: 70, MLflow: 65, 'Apache Airflow': 60, 'Corrective RAG': 70,
      };
      return levels[skill] ?? 50;
    };

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

    const labelLang = labels[skills[0]]?.[lang] ?? skills[0];

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw axes and grid
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgb(var(--border) / 0.5)';

    for (let ring = 1; ring <= 4; ring++) {
      ctx.beginPath();
      const r = (radius / 4) * ring;
      for (let i = 0; i < axes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw axes
    ctx.beginPath();
    for (let i = 0; i < axes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw skill polygon
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(var(--primary))';
    ctx.fillStyle = 'rgb(var(--primary) / 0.15)';
    ctx.beginPath();
    for (let i = 0; i < axes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const level = getLevel(skills[i]);
      const r = (level / 100) * radius;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw axis labels
    ctx.fillStyle = 'rgb(var(--muted-foreground))';
    ctx.font = '11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < axes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = cx + (radius + 18) * Math.cos(angle);
      const y = cy + (radius + 18) * Math.sin(angle);
      const label = labels[skills[i]]?.[lang] ?? skills[i];
      ctx.fillText(label, x, y);
    }
  }, [category, skills, lang]);

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={280}
      className="w-full max-w-[280px] h-[280px] mx-auto"
      aria-label={`${category} skill radar`}
    />
  );
}
