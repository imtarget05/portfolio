import { projects } from '@/content/data';
import { roleConfigs, RoleKey } from '@/content/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Role-Based Portfolio',
};

interface RolePageProps {
  params: { role: string };
}

export default function RolePage({ params }: RolePageProps) {
  const role = params.role as RoleKey;
  const config = roleConfigs[role];

  if (!Object.prototype.hasOwnProperty.call(roleConfigs, role)) notFound();

  // Filter projects that have roleFit >= 3 for this role, sorted by score desc
  const relevantProjects = projects
    .filter(p => p.roleFit[role] >= 3)
    .sort((a, b) => b.roleFit[role] - a.roleFit[role]);

  return (
    <section className="section" id="roles">
      <div className="container-custom">
        <div className="mb-12">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background text-xs font-semibold mb-4 ${config.primaryColor === 'primary' ? 'border-primary text-primary' : config.primaryColor === 'accent' ? 'border-accent text-accent' : 'border-neon-500 text-neon-500'}`}>
            {config.title.en} · {config.title.vi}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">{config.subtitle.en}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{config.description.en}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {relevantProjects.map((project) => {
            const score = project.roleFit[role];
            return (
              <article key={project.id} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mb-1">{project.category.en}</span>
                    <Link href={`/projects/${project.id}`} className="text-lg font-bold text-foreground hover:underline">
                      {project.title.en}
                    </Link>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-primary">{score}</span>
                    <span className="text-[10px] text-muted-foreground block">/ 5 fit</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description.en}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded border border-border/60 bg-background text-[10px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  View case study →
                </Link>
              </article>
            );
          })}
        </div>

        {relevantProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No featured projects match this role yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
