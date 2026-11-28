'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github, Layers, ShieldAlert, BarChart3, Code2, Database, Activity } from 'lucide-react'
import { projects } from '@/content/data'
import { projectEvidence } from '@/content/projectEvidence'
import { useLang } from './LanguageProvider'
import { useMode } from './ModeProvider'

type RoleKey = 'backend' | 'devops' | 'ai' | 'network' | 'bank' | 'erp'

const roleLabels: Record<RoleKey, { en: string; vi: string }> = {
  backend: { en: 'Backend / Software Engineer', vi: 'Backend / Kỹ sư Phần mềm' },
  devops: { en: 'DevOps / Cloud Engineer', vi: 'DevOps / Kỹ sư Đám mây' },
  ai: { en: 'AI / GenAI Engineer', vi: 'Kỹ sư AI / GenAI' },
  network: { en: 'Network / Infrastructure Engineer', vi: 'Kỹ sư Mạng / Hạ tầng' },
  bank: { en: 'Banking Technology Engineer', vi: 'Kỹ sư Công nghệ Ngân hàng' },
  erp: { en: 'ERP / Manufacturing IT', vi: 'ERP / IT Sản xuất' },
}

const roleColors: Record<RoleKey, string> = {
  backend: 'border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20',
  devops: 'border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20',
  ai: 'border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20',
  network: 'border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
  bank: 'border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20',
  erp: 'border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20',
}

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 90, rotateY: direction * -7, scale: .975 }),
  center: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -90, rotateY: direction * 7, scale: .975 }),
}

export function FeaturedProjects() {
  const { lang } = useLang()
  const reducedMotion = useReducedMotion()
  const { isTechnicalLead } = useMode()
  const featured = projects.filter(p => p.featured).sort((a, b) => (a as any).order - (b as any).order)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const project = featured[index]

  function select(next: number) {
    if (next === index) return
    setDirection(next > index ? 1 : -1)
    setIndex((next + featured.length) % featured.length)
  }

  if (!project) return null

  const evidence = projectEvidence[project.id]

  return (
    <section id="projects" className="section project-deck-section">
      <div className="container-custom">
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {(['backend', 'devops', 'ai', 'network', 'bank', 'erp'] as RoleKey[]).map((role) => (
            <a
              key={role}
              href={`/roles/${role}`}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${roleColors[role]}`}
            >
              {roleLabels[role][lang]}
            </a>
          ))}
        </div>
        <motion.div className="deck-heading" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
          <div>
            <p className="eyebrow">05 / {lang === 'en' ? 'FLAGSHIP PROJECTS' : 'DỰ ÁN CHỦ LỰC'}</p>
            <h2>{lang === 'en' ? 'ENGINEERING WITH EVIDENCE' : 'KỸ THUẬT VỚI BẰNG CHỨNG'}</h2>
          </div>
          <p>{lang === 'en' ? 'Each case study links to its repository, evidence documents and verified status. CI results are snapshots, not guarantees.' : 'Mỗi case study dẫn đến repo, bằng chứng và trạng thái đã kiểm chứng. Kết quả CI là chấm dứt thời điểm, không phải cam kết.'}</p>
        </motion.div>
        <div className="deck-layout">
          <div className="deck-main">
            <div className="deck-stack">
              <div className="deck-shadow deck-shadow-back" aria-hidden="true" />
              <div className="deck-shadow deck-shadow-mid" aria-hidden="true" />
              <motion.div
                custom={direction}
                initial={'enter'}
                animate="center"
                exit="exit"
                variants={slide}
                transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 230, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) setDirection(-1)
                  else if (info.offset.x > 80) setDirection(1)
                }}
              >
                <article key={project.id} className="deck-card">
                  <div className="deck-card-top">
                    <span className="deck-badge">{project.category[lang]}</span>
                    <span>{String(index + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}</span>
                  </div>
                  <div className="deck-card-content" aria-live="polite">
                    <div className="deck-title-row">
                      <p className="deck-category">{project.category[lang]}</p>
                      <span>{lang === 'en' ? 'Reviewed 25 Oct 2026' : 'Đối chiếu 25/10/2026'}</span>
                    </div>
                    <h3><Link href={`/projects/${project.id}`} className="hover:underline">{project.title[lang]}</Link></h3>
                    <p className="deck-description">{project.description[lang]}</p>
                  </div>
                  <div className="deck-proof-grid">
                    <div className="deck-proof-main">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers size={16} className="text-muted-foreground" />
                        <span className="deck-field-label">{lang === 'en' ? '01 — WHAT THE REPOSITORY SHOWS' : '01 — REPOSITORY GHI NHẬN'}</span>
                      </div>
                      <p>{lang === 'en' ? project.problem : project.problemVi || project.description[lang]}</p>
                      <div className="deck-sources mt-4">
                        {project.evidence.map((src, i) => (
                          <a key={i} href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline text-sm">{src.label} <ExternalLink size={14} /></a>
                        ))}
                        {evidence && (
                          <a href={`/evidence/${project.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-sm hover:underline">
                            {lang === 'en' ? 'Full evidence report →' : 'Báo cáo bằng chứng đầy đủ →'} <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="deck-boundary">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldAlert size={16} className="text-muted-foreground" />
                        <span className="deck-field-label">{lang === 'en' ? '02 — VERIFICATION LIMIT' : '02 — GIỚI HẠN KIỂM CHỨNG'}</span>
                      </div>
                      <p>{project.limitations}</p>
                    </div>
                  </div>
                  <div className="deck-tech mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 size={16} className="text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'TECHNOLOGY STACK' : 'CÔNG NGHỂ SỬ DỤNG'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded border border-border/60 bg-background text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {isTechnicalLead && project.engineeringDecisions && (
                    <div className="deck-decisions mt-6 pt-6 border-t border-border/40">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 size={16} className="text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'ENGINEERING DECISIONS' : 'QUYẾT ĐỊNH KỸ THUẬT'}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {project.engineeringDecisions.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isTechnicalLead && (
                    <div className="deck-role-fit mt-6 pt-6 border-t border-border/40">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity size={16} className="text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'ROLE FIT' : 'MỨC ĐỘ PHÙ HỢP VỊ TRÍ'}</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {Object.entries(project.roleFit).map(([role, score]) => (
                          <div key={role} className="p-3 rounded border border-border/60 bg-background">
                            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block">{role}</span>
                            <span className="text-xl font-bold text-foreground">{score}</span>
                            <span className="text-[10px] text-muted-foreground">/ 5</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="deck-card-footer mt-6 flex items-center justify-between pt-6 border-t border-border/40">
                    <div className="flex items-center gap-3">
                      <a href={project.github} className="deck-repo inline-flex items-center gap-2 text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> {project.github.split('/').pop()}
                      </a>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{project.status}</span>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
          <div className="deck-controls">
            <button type="button" onClick={() => { setDirection(-1); setIndex(current => (current - 1 + featured.length) % featured.length); }} aria-label={lang === 'en' ? 'Previous project' : 'Dự án trước'}>
              <ArrowLeft size={19} /> {lang === 'en' ? 'Previous' : 'Trước'}
            </button>
            <span>{String(index + 1).padStart(2, '0')} — {String(featured.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => { setDirection(1); setIndex(current => (current + 1) % featured.length); }} aria-label={lang === 'en' ? 'Next project' : 'Dự án tiếp'}>
              {lang === 'en' ? 'Next' : 'Tiếp'} <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
