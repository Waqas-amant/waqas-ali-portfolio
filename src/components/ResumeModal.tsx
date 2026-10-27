import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Linkedin, Github, ExternalLink, Check } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              · Verified Candidate Profile
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 print:max-h-none print:p-0">
          
          {/* Header with Photo */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 id="resume-title" className="text-3xl font-extrabold tracking-tight mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                {PERSONAL_INFO.title}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span aria-hidden="true">·</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  LinkedIn Profile
                </a>
                <span aria-hidden="true">·</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  GitHub Portfolio
                </a>
              </div>
            </div>

            {PERSONAL_INFO.avatar && (
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 bg-white dark:bg-slate-900 shadow-xs">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>

          {/* Professional Profile */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 mb-2">
              Professional Profile
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.bio}
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {EDUCATION.degree}
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {EDUCATION.period}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">
              {EDUCATION.institution} · {EDUCATION.location}
            </p>
            <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              {EDUCATION.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-cyan-500 font-mono">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                  <span className="font-bold text-slate-900 dark:text-slate-200 block mb-1">
                    {cat.name}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Engineering Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 mb-3">
              Selected Technical Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 4).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {proj.title}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">
                      {proj.category} · {proj.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400">
                    Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer note in document */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Waqas Ali · Portfolio Resume</span>
            <span>Available for Internships &amp; Junior Roles</span>
          </div>

        </div>

      </div>
    </div>
  );
};
