import React from 'react';
import { Terminal, BrainCircuit, BookOpen, GraduationCap, MapPin, Mail, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS, EDUCATION } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const highlightIcons = [
    <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" key="fullstack" />,
    <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" key="aiml" />,
    <BookOpen className="w-5 h-5 text-violet-600 dark:text-violet-400" key="learning" />,
  ];

  const milestones = [
    {
      year: '2021 – 2023',
      title: 'Foundational CS & Web Engineering',
      desc: 'Mastered Data Structures, Algorithms, Object-Oriented Programming, and database schemas at Minhaj University Lahore.',
    },
    {
      year: '2023 – 2024',
      title: 'Modern Full-Stack Architectures',
      desc: 'Built production-minded applications with React, TypeScript, Node.js, Express, and PostgreSQL/MongoDB.',
    },
    {
      year: '2024 – 2025',
      title: 'Deep Learning & Computer Vision',
      desc: 'Fine-tuned Swin Transformers on histology biopsy datasets and built radiograph image classifiers in PyTorch.',
    },
    {
      year: '2025 – 2026',
      title: 'Multimodal AI & Production Systems',
      desc: 'Developing StyleMind AI (CLIP image embeddings) and exploring RAG architectures for intelligent automation.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            01 · Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* Story & Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am an Information Technology student at Minhaj University Lahore with a focused ambition: building software systems that merge modern, resilient web applications with practical artificial intelligence models.
            </p>
            <p>
              Rather than studying machine learning in isolation, I concentrate on building end-to-end architectures—from intuitive user interfaces in React and TypeScript to performant backend services in Node.js and Flask that run PyTorch inference models for computer vision and multimodal workflows.
            </p>
            <p>
              I am motivated by solving tangible, real-world problems. Whether training Vision Transformers on biomedical datasets or building full-stack management tools, I maintain an engineering discipline grounded in clean code, transparent limitations, and a commitment to continuous learning.
            </p>

            {/* Quick Context Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 block">Based in</span>
                  <span className="text-slate-500 dark:text-slate-400">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 block">Education</span>
                  <span className="text-slate-500 dark:text-slate-400">{EDUCATION.degree}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Box / Recruiter Summary (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>Engineering Principles &amp; Goals</span>
            </h3>
            
            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold font-mono">01</span>
                <span><strong>No Black Boxes:</strong> Deeply understanding mathematical foundations beneath deep learning algorithms—loss functions, backpropagation, and self-attention.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold font-mono">02</span>
                <span><strong>Production Mindset:</strong> Writing structured TypeScript, modular API routes, and maintainable schemas rather than ephemeral scripts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold font-mono">03</span>
                <span><strong>Open to Collaboration:</strong> Actively seeking early-career developer roles, internships, and research opportunities with engineering teams.</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Direct Inquiries:</span>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ABOUT_HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {highlightIcons[index]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                {item.subtitle}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Academic & Engineering Trajectory Strip */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
              Trajectory &amp; Growth
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Academic &amp; Practical Development Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="relative p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
                    <span>{m.year}</span>
                    <span className="text-slate-400">Phase 0{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
