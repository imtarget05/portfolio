'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { Code, Cloud, Layers, Zap } from 'lucide-react';

const milestones = [
  {
    id: 'fullstack-intern',
    icon: Layers,
    title: { en: 'Fullstack Intern', vi: 'Thực tập sinh Fullstack' },
    subtitle: { en: 'Frontend and backend features, API integration and UI components.', vi: 'Tính năng frontend và backend, tích hợp API và thành phần giao diện.' },
    tech: { en: 'React · Next.js · TypeScript · Tailwind CSS · Node.js · PostgreSQL', vi: 'React · Next.js · TypeScript · Tailwind CSS · Node.js · PostgreSQL' },
    work: { en: 'Internship — 3 months', vi: 'Thực tập — 3 tháng' },
  },
  {
    id: 'backend',
    icon: Code,
    title: { en: 'Backend & Distributed Systems', vi: 'Backend & Hệ thống Phân tán' },
    subtitle: { en: 'Concurrency, transactional boundaries, recoverable workflows.', vi: 'Xử lý đồng thời, ranh giới giao dịch, quy trình phục hồi.' },
    tech: { en: '.NET · C# · FastAPI · PostgreSQL · Redis', vi: '.NET · C# · FastAPI · PostgreSQL · Redis' },
    work: { en: 'FlashSale / OpsBridge', vi: 'FlashSale / OpsBridge' },
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: { en: 'Cloud & Platform Engineering', vi: 'Cloud & Kỹ thuật Nền tảng' },
    subtitle: { en: 'IaC, GitOps, Kubernetes, observability and incident recovery.', vi: 'IaC, GitOps, Kubernetes, quan sát hệ thống và khôi phục sự cố.' },
    tech: { en: 'Azure · AKS · Terraform · Argo CD · Docker', vi: 'Azure · AKS · Terraform · Argo CD · Docker' },
    work: { en: 'AKS SRE Platform', vi: 'Nền tảng AKS SRE' },
  },
  {
    id: 'ai',
    icon: Zap,
    title: { en: 'Applied AI & Business Applications', vi: 'AI Ứng dụng & Phần mềm N nghiệp vụ' },
    subtitle: { en: 'RAG, agentic AI, document intelligence and human-review workflows.', vi: 'RAG, agentic AI, trí tuệ tài liệu và quy trình kiểm duyệt con người.' },
    tech: { en: 'LangGraph · Qdrant · MLflow · Ollama · Airflow', vi: 'LangGraph · Qdrant · MLflow · Ollama · Airflow' },
    work: { en: 'Doc Intelligence / QuanLyKho', vi: 'Doc Intelligence / QuanLyKho' },
  },
];

export function CVTimeline() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="section cv-section">
      <div className="container-custom">
        <motion.div className="cv-header reveal-3d" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">01 / {lang === 'en' ? 'CANDIDATE PROFILE' : 'HỒ SƠ ỨNG VIÊN'}</p>
          <motion.h2 className="section-title" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
            {lang === 'en' ? <>Engineering<br /><span className="gradient-text">Journey.</span></> : <>Hành trình<br /><span className="gradient-text">Kỹ thuật.</span></>}
          </motion.h2>
          <motion.p className="section-subtitle" initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.2 }}>
            {lang === 'en' ? 'From backend systems to cloud platforms and applied AI — each stage documented with repository evidence.' : 'Từ hệ thống backend đến nền tảng cloud và AI ứng dụng — mỗi giai đoạn đều có bằng chứng từ repository.'}
          </motion.p>
        </motion.div>

        <div className="cv-timeline">
          {milestones.map((m, index) => (
            <motion.div key={m.id} className="cv-timeline-item" initial={reducedMotion ? false : { opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.12 }}>
              <div className="flex items-start gap-4">
                <div className="mt-2 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary border border-primary/20 shadow-lg preserve-3d card-3d-inner">
                  <m.icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{m.title[lang]}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{m.subtitle[lang]}</p>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground mb-2">
                    <span>{m.tech[lang]}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.work[lang]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}