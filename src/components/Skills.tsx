import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Search,
  CheckCircle2,
  FolderGit2,
  Sparkles,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillHighlight, setActiveSkillHighlight] = useState<{ name: string; projects: string } | null>({
    name: 'PyTorch',
    projects: 'Oral Cancer Swin Classifier · StyleMind AI · Chest X-Ray Deep Learning'
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend': <Code className="w-4 h-4 text-cyan-500" />,
    'Backend': <Server className="w-4 h-4 text-blue-500" />,
    'Databases': <Database className="w-4 h-4 text-emerald-500" />,
    'AI & Machine Learning': <BrainCircuit className="w-4 h-4 text-purple-500" />,
    'Tools & DevOps': <Wrench className="w-4 h-4 text-amber-500" />,
  };

  const skillProjectMap: Record<string, string> = {
    'React': 'Grocery E-Commerce · Employee Management · Portfolio · Builder AI',
    'TypeScript': 'Grocery E-Commerce Platform · Portfolio · Builder AI Scaffolder',
    'Tailwind CSS': 'All responsive interfaces · StyleMind UI · Component systems',
    'HTML5': 'Semantic document architecture · Web accessibility',
    'CSS3': 'Modern layouts · CSS Grid · Fluid typography and responsive design',
    'JavaScript': 'Interactive DOM scripting · Client-side event orchestration',
    'Node.js': 'Employee Management API · Grocery Server · REST routing',
    'Express.js': 'RESTful microservices · Middleware auth · API contracts',
    'Python': 'StyleMind AI · Swin Transformer · Chest X-Ray · Builder AI',
    'Flask': 'PyTorch model serving · Multimodal endpoints · Inference APIs',
    'REST APIs': 'Cross-platform JSON contracts · Client/Server data integration',
    'MongoDB': 'Employee Management System (Document schemas & queries)',
    'PostgreSQL': 'Grocery E-Commerce Management (Relational schema & stock tables)',
    'Database Design': 'Normalization, indexing, relational keys, and ACID compliance',
    'Python for Data Science': 'NumPy tensor math, Pandas dataframes, Matplotlib plots',
    'NumPy': 'Matrix projections, cosine distance tensors, image array operations',
    'Pandas': 'Apparel catalog metadata cleaning & clinical dataset labeling',
    'Scikit-learn': 'Model validation curves, precision-recall metrics, confusion matrices',
    'Deep Learning fundamentals': 'Backpropagation, cross-entropy loss, gradient descent',
    'Computer Vision': 'Shifted window attention, feature extraction, Grad-CAM',
    'Transformers': 'Swin Transformer (patch4_window7_224) & CLIP ViT-B/32',
    'LLM Applications': 'Prompt orchestration, structured JSON outputs, developer tooling',
    'RAG concepts': 'Vector retrieval, nearest neighbor search, contextual grounding',
    'AI Automation': 'Scaffolding pipelines, automated data pre-processing scripts',
    'Git': 'Branch management, semantic versioning, pull requests',
    'GitHub': 'Open-source code repositories, portfolio code hosting',
    'VS Code': 'Primary development environment with Python & TS toolchains',
    'Jupyter Notebook': 'Experimental training notebooks & exploratory data analysis',
    'Google Colab': 'GPU-accelerated transformer training (T4/V100 instances)',
    'Docker fundamentals': 'Containerizing Flask and Node services for reproducibility',
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.name)];

  const filteredCategories = SKILL_CATEGORIES.filter(cat => {
    if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
      return false;
    }
    return true;
  }).map(cat => {
    if (!searchQuery.trim()) return cat;
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter(cat => cat.skills.length > 0);

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  const handleSkillSelect = (skillName: string) => {
    const projects = skillProjectMap[skillName] || 'Applied across core coursework and academic projects';
    setActiveSkillHighlight({ name: skillName, projects });
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              02 · Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              A structured overview of technical skills developed through hands-on coursework, projects, and machine learning experiments. Click any skill to see its implementation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. PyTorch)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Live Project Connection Banner */}
        {activeSkillHighlight && (
          <div className="mb-10 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-50/80 dark:bg-cyan-950/30 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500 text-white shadow-xs">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-900 dark:text-cyan-200">
                  {activeSkillHighlight.name} in Production / Projects:
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 font-medium">
                  {activeSkillHighlight.projects}
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Explore Projects</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl mb-10 w-fit border border-slate-200 dark:border-slate-800 shadow-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {categoryIcons[cat.name] || <Code className="w-4 h-4 text-cyan-500" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List with click-to-inspect */}
                <ul className="space-y-2">
                  {cat.skills.map((skill) => {
                    const isSelected = activeSkillHighlight?.name === skill.name;
                    return (
                      <li
                        key={skill.name}
                        onClick={() => handleSkillSelect(skill.name)}
                        className={`group flex items-center justify-between text-xs py-1.5 px-2 rounded-lg cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200 border border-cyan-500/30'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-cyan-500' : 'text-slate-400 group-hover:text-cyan-500'}`} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-500">
                          {isSelected ? 'selected' : 'inspect'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Domain</span>
                <span className="text-cyan-600 dark:text-cyan-400">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No skills found matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-cyan-600 dark:text-cyan-400 underline font-medium"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
