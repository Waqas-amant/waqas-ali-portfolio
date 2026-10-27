import React, { useEffect } from 'react';
import { X, Github, ExternalLink, AlertTriangle, Layers, Check, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.status}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* Visual Preview */}
          {project.image ? (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 mb-6 border border-slate-200 dark:border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center mb-6 border border-slate-800 text-slate-400">
              <Layers className="w-12 h-12 text-cyan-500 mb-2 opacity-80" />
              <span className="text-base font-bold text-white">{project.title}</span>
              <span className="text-xs font-mono text-slate-400">{project.status}</span>
            </div>
          )}

          {/* Title & Status */}
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
          </div>

          {/* Technology stack row (Clean unboxed inline metadata) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-6">
            <span className="text-slate-500 dark:text-slate-400">STACK:</span>
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < project.technologies.length - 1 && <span aria-hidden="true" className="text-slate-400">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Educational or Medical Disclaimer if present */}
          {project.disclaimer && (
            <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-3 mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{project.disclaimer}</p>
            </div>
          )}

          {/* Overview / Narrative */}
          <div className="space-y-3 mb-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
              Key Capabilities &amp; Features
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Learnings / Engineering Notes */}
          {project.keyLearnings && project.keyLearnings.length > 0 && (
            <div className="mb-8 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Technical Takeaways &amp; Learnings
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {project.keyLearnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-mono">›</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-mono">Repo configured locally</span>
              )}

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800">
                  Status: {project.status}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
