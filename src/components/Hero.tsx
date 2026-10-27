import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Sparkles, 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  Terminal as TerminalIcon,
  Cpu,
  GraduationCap,
  FolderGit2,
  Send,
  CornerDownLeft
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { NeuralBackground } from './NeuralBackground.tsx';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [imageError, setImageError] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeTab, setActiveTab] = useState<'terminal' | 'model' | 'api'>('terminal');

  // Interactive CLI State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    { 
      command: 'whoami', 
      output: 'Waqas Ali — Full-Stack Developer & AI/ML Developer based in Lahore, Pakistan.' 
    },
    { 
      command: 'skills --core', 
      output: 'Languages: Python, TypeScript, JavaScript · AI/ML: PyTorch, Swin Transformer, CLIP, OpenCV · Web: React, Node.js, Express, Tailwind' 
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response: string | React.ReactNode = '';

    if (cmd === 'help') {
      response = 'Available commands: whoami, skills, projects, eval, contact, resume, clear';
    } else if (cmd === 'whoami') {
      response = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}. Student of BS Information Technology at Minhaj University Lahore (2021–2026).`;
    } else if (cmd === 'skills') {
      response = 'Core Stack: React, TypeScript, Python, Flask, PyTorch, Transformers, MongoDB, PostgreSQL, Tailwind CSS.';
    } else if (cmd === 'projects') {
      response = 'Featured: StyleMind AI (CLIP), Oral Cancer Swin Classifier, Chest X-Ray Vision, Grocery E-Commerce, Employee Management System, Builder AI.';
    } else if (cmd === 'eval') {
      response = '>> Loading Swin Transformer (patch4_window7_224)... [DONE]\n>> Shifted Window Attention: OK\n>> Simulated Latency: 36.4ms\n>> Test Accuracy: 94.8%';
    } else if (cmd === 'contact') {
      response = `Email: ${PERSONAL_INFO.email} | GitHub: github.com/Waqas-amant | Location: Lahore, Pakistan`;
    } else if (cmd === 'resume') {
      onOpenResume();
      response = 'Opening verified curriculum vitae viewer modal...';
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      response = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setTerminalHistory((prev) => [...prev, { command: terminalInput, output: response }]);
    setTerminalInput('');
  };

  useEffect(() => {
    if (activeTab === 'terminal') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, activeTab]);

  const codeSnippets = {
    model: `# Swin Transformer Feature Projection
import torch
import timm

class OralLesionClassifier(torch.nn.Module):
    def __init__(self, num_classes=2):
        super().__init__()
        self.backbone = timm.create_model(
            'swin_base_patch4_window7_224',
            pretrained=True,
            num_classes=num_classes
        )
    
    def forward(self, x):
        # Shifted-window self-attention
        return self.backbone(x)`,
    api: `# Flask Multimodal Inference Endpoint
from flask import Flask, request, jsonify
import torch

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict_lesion():
    tensor = preprocess_image(request.files['image'])
    with torch.no_grad():
        logits = model(tensor)
        confidence = torch.softmax(logits, dim=1)
    return jsonify({
        "status": "success",
        "confidence": float(confidence[0][1])
    })`,
  };

  const copyCode = () => {
    const textToCopy = activeTab === 'terminal' 
      ? terminalHistory.map(h => `$ ${h.command}\n${h.output}`).join('\n')
      : codeSnippets[activeTab];
    navigator.clipboard.writeText(textToCopy);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Interactive Neural Background Canvas */}
      <NeuralBackground />

      {/* Atmospheric lighting glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-violet-600/15 blur-[120px] rounded-full dark:opacity-100 opacity-60" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Location Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-50/80 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true" className="text-cyan-400">·</span>
              <span>Available for Roles &amp; Internships</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.12] text-balance">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-violet-400">
                Intelligent Digital
              </span>{' '}
              Experiences.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.heroSupporting}
            </p>

            {/* Technology Stack Row (Clean typographic separators) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium mb-9">
              <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">STACK:</span>
              <span className="hover:text-cyan-500 transition-colors">React 19</span>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="hover:text-cyan-500 transition-colors">TypeScript</span>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="hover:text-cyan-500 transition-colors">Python</span>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="hover:text-cyan-500 transition-colors">Flask</span>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="hover:text-cyan-500 transition-colors">PyTorch</span>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="hover:text-cyan-500 transition-colors">Swin Transformer</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500 shadow-sm hover:shadow-cyan-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 whitespace-nowrap"
              >
                Explore My Work
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 whitespace-nowrap shadow-xs"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onOpenContact}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-4 decoration-slate-300 dark:decoration-slate-700 hover:decoration-cyan-500 transition-colors whitespace-nowrap"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Interactive Terminal Workbench (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Profile Lockup with Glow Border */}
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-900/80 p-5 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-4 sm:gap-5">
                
                {/* Profile Image with subtle gradient accent frame */}
                <div className="relative p-0.5 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-500 shrink-0 shadow-md">
                  <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
                    {!imageError && PERSONAL_INFO.avatar ? (
                      <img
                        src={PERSONAL_INFO.avatar}
                        alt={PERSONAL_INFO.name}
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-cyan-400">
                        <span className="text-2xl font-bold font-mono">WA</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Dev</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Profile Meta */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                      {PERSONAL_INFO.name}
                    </h2>
                  </div>
                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                    Full-Stack &amp; AI/ML Developer
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    Minhaj University Lahore (2021–2026)
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href="#interactive-lab"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-500" />
                      <span>Test Live AI Lab</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Engineering Terminal & Code Showcase */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 overflow-hidden shadow-xl">
              
              {/* Header Tabs */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('terminal')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'terminal'
                        ? 'bg-slate-800 text-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <TerminalIcon className="w-3 h-3" />
                    <span>interactive.sh</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('model')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                      activeTab === 'model'
                        ? 'bg-slate-800 text-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    model.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('api')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                      activeTab === 'api'
                        ? 'bg-slate-800 text-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    app.py
                  </button>
                </div>

                <button
                  type="button"
                  onClick={copyCode}
                  aria-label="Copy snippet"
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Copy snippet"
                >
                  {copiedSnippet ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Terminal View Content */}
              {activeTab === 'terminal' ? (
                <div className="p-4 font-mono text-xs text-slate-300">
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    <p className="text-slate-500 text-[11px]">
                      // Interactive shell session. Try: "whoami", "skills", "projects", "eval", "resume"
                    </p>
                    {terminalHistory.map((item, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-cyan-400">
                          <span className="text-slate-500">$</span>
                          <span>{item.command}</span>
                        </div>
                        <div className="text-slate-300 whitespace-pre-wrap pl-3 text-[11px] leading-relaxed">
                          {item.output}
                        </div>
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>

                  {/* Terminal Input Bar */}
                  <form onSubmit={handleCommandSubmit} className="mt-3 pt-2 border-t border-slate-800 flex items-center gap-2">
                    <span className="text-cyan-400">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type 'eval' or 'help'..."
                      className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs font-mono"
                    />
                    <button
                      type="submit"
                      aria-label="Execute command"
                      className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-300 max-h-56">
                  <pre>
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>
              )}

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Architecture: PyTorch · Swin · React 19</span>
                <span className="font-mono text-cyan-400">Interactive</span>
              </div>
            </div>

          </div>

        </div>

        {/* Verified Credential KPI Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Degree</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">BS IT (2021–2026)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Focus Area</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Full-Stack &amp; AI/ML</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Projects</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">6 Architectures</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Methodology</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Applied Engineering</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-colors"
          >
            <span>Explore background &amp; live demos</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
