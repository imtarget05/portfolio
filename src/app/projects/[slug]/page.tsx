import { Project, projects } from '@/content/data';
import { projectEvidence } from '@/content/projectEvidence';
import { Metadata } from 'next';
import Link from 'next/link';
import { useLang } from '@/components/LanguageProvider';
import { ExternalLink, Github, Layers, ShieldAlert, Code2, Activity, Database, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Project Case Study',
};

interface ProjectDetailProps {
  params: { slug: string };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { lang } = useLang();
  const project: Project | undefined = projects.find((p) => p.id === params.slug);
  const evidence = projectEvidence[project!.id];

  if (!project) {
    return <h1 className="text-2xl font-bold">Project not found</h1>;
  }

  return (
    <section id="project-detail" className="section project-detail-section">
      <div className="container-custom">
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-[10px]">/</span>
          <Link href={`/roles/${Object.entries(project.roleFit).sort(([,a],[,b]) => (b as number) - (a as number))[0][0]}`} className="hover:underline">
            {project.category.en}
          </Link>
          <span className="text-[10px]">/</span>
          <span>{project.title.en}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Case study content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">{project.category.en}</span>
                <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-2">{project.title.en}</h1>
              </div>
              <span className="text-xs font-bold text-primary">{project.roleFit.backend + project.roleFit.devops + project.roleFit.ai}/15 total fit</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{project.description.en}</p>

            {/* Problem */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert size={18} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? '01 — PROBLEM' : '01 — VẤN ĐỀ'}</span>
              </div>
              <p className="text-muted-foreground">{lang === 'en' ? project.problem : project.problemVi}</p>
            </div>

            {/* Solution */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={18} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? '02 — SOLUTION' : '02 — GIẢI PHÁP'}</span>
              </div>
              <p className="text-muted-foreground">{lang === 'en' ? project.solution : project.solutionVi}</p>
            </div>

            {/* Architecture */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers size={18} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? '03 — ARCHITECTURE' : '03 — KIẾN TRÚC'}</span>
              </div>
              <div className="bg-secondary rounded-lg p-4 font-mono text-xs text-muted-foreground overflow-x-auto">
                {project.architecture}
              </div>
            </div>

            {/* Engineering decisions */}
            {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity size={18} className="text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? '04 — ENGINEERING DECISIONS' : '04 — QUYẾT ĐỊNH KỸ THUẬT'}</span>
                </div>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  {project.engineeringDecisions.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded border border-border/60 bg-background text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Evidence sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* GitHub link */}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:scale-[1.02]">
              <Github size={20} /> {lang === 'en' ? 'View on GitHub' : 'Xem trên GitHub'}
            </a>

            {/* Evidence links */}
            {project.evidence && project.evidence.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database size={18} className="text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'EVIDENCE' : 'BẰNG CHỨNG'}</span>
                </div>
                <ul className="space-y-3">
                  {project.evidence.map((src, i) => (
                    <li key={i}>
                      <a href={src.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:underline transition-colors">
                        <ExternalLink size={14} />
                        {src.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Evidence scope/proof/boundary */}
            {evidence && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert size={18} className="text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'VERIFICATION BOUNDARY' : 'RANH GIỚI KIỂM CHỨNG'}</span>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <span className="block text-[10px] font-medium text-muted-foreground uppercase mb-1">{lang === 'en' ? 'Scope' : 'Phạm vi'}</span>
                    <p>{lang === 'en' ? evidence.scope.en : evidence.scope.vi}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium text-muted-foreground uppercase mb-1">{lang === 'en' ? 'Proof' : 'Bằng chứng'}</span>
                    <p>{lang === 'en' ? evidence.proof.en : evidence.proof.vi}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium text-muted-foreground uppercase mb-1">{lang === 'en' ? 'Boundary' : 'Ràn giới'}</span>
                    <p>{lang === 'en' ? evidence.boundary.en : evidence.boundary.vi}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Status */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={18} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'STATUS' : 'TRẠNG THÁI'}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.status}</p>
            </div>

            {/* Limitations */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert size={18} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{lang === 'en' ? 'LIMITATIONS' : 'GIỚI HẠN'}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.limitations}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
