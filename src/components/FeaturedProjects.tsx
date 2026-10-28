'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '@/content/data'
import { useLang } from './LanguageProvider'

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 90, rotateY: direction * -7, scale: .975 }),
  center: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -90, rotateY: direction * 7, scale: .975 }),
}

export function FeaturedProjects() {
  const { lang } = useLang()
  const reducedMotion = useReducedMotion()
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

  return (
    <section id="projects" className="section project-deck-section">
      <div className="container-custom">
        <motion.div className="deck-heading" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
          <div>
            <p className="eyebrow">04 / {lang === 'en' ? 'SELECTED WORK' : 'DỰ ÁN CHỌN LỌC'}</p>
            <h2>{lang === 'en' ? 'BUILT WITH' : 'DỰ ÁN & BẰNG CHỨNG.'}</h2>
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
                    <span>{lang === 'en' ? 'REPOSITORY CASE STUDY' : 'HỒ SƠ DỰ ÁN'}</span>
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
                      <span className="deck-field-label">{lang === 'en' ? '01 — WHAT THE REPOSITORY SHOWS' : '01 — REPOSITORY GHI NHẬN'}</span>
                      <p>{lang === 'en' ? project.problem : project.problemVi || project.description[lang]}</p>
                      <div className="deck-sources">
                        {project.evidence.map((src, i) => (
                          <a key={i} href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">{src.label} <ExternalLink size={14} /></a>
                        ))}
                      </div>
                    </div>
                    <div className="deck-boundary">
                      <span className="deck-field-label">{lang === 'en' ? '02 — VERIFICATION LIMIT' : '02 — GIỚI HẠN KIỂM CHỨNG'}</span>
                      <p>{project.limitations}</p>
                    </div>
                  </div>
                  <div className="deck-tech">
                    {project.tech.map(tech => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="deck-card-footer">
                    <a href={project.github} className="deck-repo" target="_blank" rel="noopener noreferrer">
                      GitHub / {project.github.split('/').pop()} <ArrowUpRight size={14} />
                    </a>
                    <span>{project.status}</span>
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
