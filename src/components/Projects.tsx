import React, { useState } from 'react';
import { Github, ArrowRight, Layers, ExternalLink, Sparkles } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'AI & Machine Learning', 'Computer Vision', 'Full-Stack Web'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              03 · Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Practical applications across multimodal AI, deep learning computer vision, and responsive full-stack architectures.
            </p>
          </div>

          {/* Filter Tabs (Interactive controls are buttons with active state) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-900 rounded-xl w-fit border border-slate-200 dark:border-slate-800">
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid (Bento style: first 2 projects wider, others compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                {/* Visual Image container with fallback */}
                <div 
                  className="relative aspect-16/10 bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-400">
                      <Layers className="w-10 h-10 text-cyan-500/80 mb-2" />
                      <span className="text-sm font-semibold text-slate-300">{project.title}</span>
                      <span className="text-[11px] font-mono text-slate-500">{project.status}</span>
                    </div>
                  )}

                  {/* Scrim Overlay with quick view label */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold tracking-wide backdrop-blur-xs flex items-center gap-1.5">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category & Status (Clean unboxed text metadata) */}
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500 dark:text-slate-400">{project.status}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies row (Clean unboxed metadata separated by dots) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < Math.min(project.technologies.length, 4) - 1 && (
                          <span aria-hidden="true" className="text-slate-400">·</span>
                        )}
                      </React.Fragment>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-slate-400">+{project.technologies.length - 4} more</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {(project.id === 'stylemind-ai' || project.id === 'oral-cancer-classification' || project.id === 'chest-xray-classification') && (
                    <a
                      href="#interactive-lab"
                      className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-500" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                    title="View repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
