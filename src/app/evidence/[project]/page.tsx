import { projects } from '@/content/data';
import { projectEvidence } from '@/content/projectEvidence';
import { Metadata } from 'next';
import { useLang } from '@/components/LanguageProvider';
import { ShieldAlert, Layers, ExternalLink, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Evidence',
  description: 'Verified engineering evidence and limitations',
};

export default function EvidencePage({ params }: { params: { project: string } }) {
  const projectId = params.project as string;
  const { lang } = useLang();

  const project = projects.find((p) => p.id === projectId);
  const evidence = projectEvidence[projectId];

  if (!project) {
    return (
      <main className="flex-grow">
        <div className="container-custom py-20">
          <h1 className="text-2xl font-bold">Project not found</h1>
        </div>
      </main>
    );
  }

  if (!evidence) {
    return (
      <main className="flex-grow">
        <div className="container-custom py-20">
          <h1 className="text-2xl font-bold">No evidence record for this project</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow">
      <section className="py-16 border-b border-border/40">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <ShieldAlert size={20} className="text-cobalt-600 dark:text-cobalt-400" />
            <h1 className="text-3xl font-bold">{project.title[lang]}</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">{project.category[lang]}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-border/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Layers size={18} className="text-muted-foreground" />
                  <h2 className="text-lg font-bold">{lang === 'en' ? 'Scope' : 'Phạm vi'}</h2>
                </div>
                <p className="text-muted-foreground">{evidence.scope[lang]}</p>
              </div>
              <div className="border border-border/60 rounded-xl p-6 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert size={18} className="text-amber-600 dark:text-amber-400" />
                  <h2 className="text-lg font-bold">{lang === 'en' ? 'Verification Limit' : 'Giới hạn Kiểm chứng'}</h2>
                </div>
                <p className="text-muted-foreground">{evidence.boundary[lang]}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-border/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ExternalLink size={18} className="text-muted-foreground" />
                  <h2 className="text-lg font-bold">{lang === 'en' ? 'Proof Documents' : 'Tài liệu Bằng chứng'}</h2>
                </div>
                <ul className="space-y-3">
                  {evidence.proof[lang] ? (
                    <li key="proof" className="text-sm">
                      {evidence.proof[lang]}
                    </li>
                  ) : null}
                  {project.evidence.map((src, i) => (
                    <li key={i} className="text-sm">
                      <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-cobalt-600 dark:text-cobalt-400 hover:underline">
                        {src.label} <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowUpRight size={18} className="text-muted-foreground" />
                  <h2 className="text-lg font-bold">{lang === 'en' ? 'Source Repository' : 'Kho mã nguồn'}</h2>
                </div>
                <a
                  href={project.githubUrl}
                  className="text-cobalt-600 dark:text-cobalt-400 hover:underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.githubUrl} <ArrowUpRight size={14} />
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="mt-2 inline-block text-cobalt-600 dark:text-cobalt-400 hover:underline text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border/40 pt-8">
            <h2 className="text-lg font-bold mb-4">{lang === 'en' ? 'Project Status' : 'Trạng thái Dự án'}</h2>
            <p className="text-sm text-muted-foreground">{project.status}</p>
          </div>
        </div>
      </section>
    </main>
  );
}