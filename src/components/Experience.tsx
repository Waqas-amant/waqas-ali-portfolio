import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES, ExperienceEntry } from '../data/portfolioData.ts';

/**
 * Optional Experience Section
 * Per requirement: Remains completely hidden when no verified professional experience entries have been configured.
 * When real internships or roles are added to EXPERIENCES in `portfolioData.ts`, this section activates automatically.
 */
export const Experience: React.FC = () => {
  if (!EXPERIENCES || EXPERIENCES.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience &amp; Internships
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp: ExperienceEntry) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500">
                <span>TECH:</span>
                {exp.technologies.map((t, idx) => (
                  <span key={t}>
                    {t}{idx < exp.technologies.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
