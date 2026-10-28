import { Project, projects } from '@/content/data';
import { Metadata } from 'next';

export const metadata = {
  title: 'Project Detail',
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project: Project | undefined = projects.find((p) => p.id === params.slug);
  
  if (!project) {
    return <h1 className="text-2xl font-bold">Project not found</h1>;
  }

  return (
    <section id="project-detail" className="section project-detail-section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6">{project.title.en}</h1>
          
          {project.category.en && <p className="text-gray-600 mb-8">{project.category.en}</p>}
          
          <p className="text-gray-800 text-lg leading-relaxed mb-8">{project.description.en}</p>
          
          {project.tech.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="inline-block bg-gray-200 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 inline-block text-primary hover:underline"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
