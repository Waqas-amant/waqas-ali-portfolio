import React from 'react';
import { GraduationCap, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CURRENTLY_EXPLORING } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            04 · Academics &amp; Research Directions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Learning
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Formal university degree studies alongside active self-directed exploration in computer vision and artificial intelligence.
          </p>
        </div>

        {/* Education Degree Container & Current Exploration Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1">
              <span>{EDUCATION.period}</span>
              <span aria-hidden="true">·</span>
              <span>{EDUCATION.status}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {EDUCATION.degree}
            </h3>

            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
              {EDUCATION.institution} · {EDUCATION.location}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Academic Scope &amp; Focus
              </h4>
              <ul className="space-y-2.5">
                {EDUCATION.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Currently Exploring Grid (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Currently Exploring
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Active learning interests &amp; technical self-study (Not claimed certifications)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CURRENTLY_EXPLORING.map((item, idx) => (
                <div
                  key={item.topic}
                  className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-1">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {item.topic}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <BookOpen className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Studying research papers, open-source architectures, and benchmark datasets.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
