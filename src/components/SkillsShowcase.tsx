'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { techStack } from '@/content/data';
import { SkillRadar } from './SkillRadar';
import { SkillNode3D } from './SkillNode3D';

export function SkillsShowcase() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();

  const headings: Record<'en' | 'vi', string> = {
    en: 'Skills & Capabilities',
    vi: 'Kỹ năng & Khả năng',
  };
  const subtitles: Record<'en' | 'vi', string> = {
    en: '2D radar visualization and 3D interactive skill nodes across backend, frontend, cloud, and AI.',
    vi: 'Biểu đồ radar 2D và nút kỹ năng tương tác 3D qua backend, frontend, cloud và AI.',
  };
  const radarLabels: Record<'en' | 'vi', string> = {
    en: '2D Skill Radar',
    vi: 'Radar Kỹ năng 2D',
  };
  const nodeLabels: Record<'en' | 'vi', string> = {
    en: '3D Skill Nodes',
    vi: 'Nút Kỹ năng 3D',
  };

  const allSkills = techStack.categories.flatMap((c) => c.items);

  return (
    <section id="skills" className="section bg-background">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">05 / {lang === 'en' ? 'SKILLS SHOWCASE' : 'TRÌNH TRÌNH KỸ NĂNG'}</p>
            <motion.h2
              className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-4"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {headings[lang]}
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              {subtitles[lang]}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">{radarLabels[lang]}</h3>
            <p className="text-sm text-muted-foreground">
              {lang === 'en'
                ? 'Proficiency radar per technology category. Each axis is a skill; distance from center shows level.'
                : 'Biểu đồ radar trình độ kỹ năng theo nhóm công nghệ. Mỗi trục là một kỹ năng; khoảng cách từ tâm cho thấy trình độ.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStack.categories.map((category) => (
                <div key={category.name[lang]} className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="text-base font-semibold text-foreground mb-6">{category.name[lang]}</h4>
                  <SkillRadar category={category.name[lang]} skills={category.items} lang={lang} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">{nodeLabels[lang]}</h3>
            <p className="text-sm text-muted-foreground">
              {lang === 'en'
                ? 'Interactive 3D skill nodes. Hover to tilt and inspect each technology in the stack.'
                : 'Nút kỹ năng tương tác 3D. Chuột qua để nghiêng và xem xét từng công nghệ trong bộ công cụ.'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 perspective-1000">
              {allSkills.map((skill) => {
                const category = techStack.categories.find((c) => c.items.includes(skill));
                const levelMap: Record<string, number> = {
                  'C#': 85, '.NET 10': 80, 'ASP.NET Core': 80, 'Java Spring Boot': 75,
                  Python: 85, FastAPI: 80, 'Node.js': 85, PostgreSQL: 85, Redis: 75, MongoDB: 70,
                  React: 85, 'Next.js': 90, TypeScript: 85, 'Tailwind CSS': 80, Flutter: 70, 'Framer Motion': 75,
                  Azure: 80, AKS: 75, AWS: 80, Docker: 85, Kubernetes: 75, Terraform: 70, 'Argo CD': 65, 'GitHub Actions': 80, 'Azure Monitor': 60,
                  LLM: 80, RAG: 85, LangGraph: 75, Qdrant: 70, Ollama: 70, MLflow: 65, 'Apache Airflow': 60, 'Corrective RAG': 70,
                };
                return (
                  <SkillNode3D
                    key={skill}
                    skill={skill}
                    level={levelMap[skill] ?? 50}
                    lang={lang}
                    className={category ? `group-hover:border-${getCategoryColor(category.name[lang])}/40` : ''}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getCategoryColor(name: string): string {
  const colors: Record<string, string> = {
    Backend: 'primary',
    Frontend: 'accent',
    'Cloud & DevOps': 'primary',
    'AI & Data': 'accent',
  };
  return colors[name] ?? 'primary';
}
