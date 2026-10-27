import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Cpu, 
  Layers, 
  Eye, 
  BarChart3, 
  RotateCw, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Sliders
} from 'lucide-react';

export const InteractiveLab: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'stylemind' | 'swin' | 'xray'>('stylemind');

  // StyleMind State
  const [selectedStyleQuery, setSelectedStyleQuery] = useState('Minimalist Techwear Trenchcoat');
  const [isSearchingEmbedding, setIsSearchingEmbedding] = useState(false);
  const [styleResults, setStyleResults] = useState([
    { id: 1, name: 'Obsidian Minimalist Wool Overcoat', similarity: 96.4, color: 'Charcoal', category: 'Outerwear' },
    { id: 2, name: 'Structured Oversized Technical Blazer', similarity: 92.1, color: 'Deep Navy', category: 'Jackets' },
    { id: 3, name: 'Tailored Linear Street Coat', similarity: 88.5, color: 'Black', category: 'Outerwear' },
    { id: 4, name: 'Architectural Hybrid Trench', similarity: 84.2, color: 'Slate', category: 'Apparel' },
  ]);

  // Oral Cancer Swin Transformer State
  const [selectedSlide, setSelectedSlide] = useState<'normal' | 'lesion'>('lesion');
  const [attentionOverlay, setAttentionOverlay] = useState(true);
  const [swinLayer, setSwinLayer] = useState<4 | 8 | 12>(8);
  const [isInferringSwin, setIsInferringSwin] = useState(false);

  // Chest X-Ray State
  const [xraySample, setXraySample] = useState<'normal' | 'pneumonia'>('pneumonia');
  const [camOverlay, setCamOverlay] = useState(true);

  const runStyleSearch = (query: string) => {
    setSelectedStyleQuery(query);
    setIsSearchingEmbedding(true);
    setTimeout(() => {
      setIsSearchingEmbedding(false);
      if (query.includes('Trenchcoat') || query.includes('Minimalist')) {
        setStyleResults([
          { id: 1, name: 'Obsidian Minimalist Wool Overcoat', similarity: 97.2, color: 'Charcoal', category: 'Outerwear' },
          { id: 2, name: 'Structured Oversized Technical Blazer', similarity: 92.8, color: 'Deep Navy', category: 'Jackets' },
          { id: 3, name: 'Tailored Linear Street Coat', similarity: 89.1, color: 'Black', category: 'Outerwear' },
          { id: 4, name: 'Architectural Hybrid Trench', similarity: 85.3, color: 'Slate', category: 'Apparel' },
        ]);
      } else if (query.includes('Sportswear') || query.includes('Hoodie')) {
        setStyleResults([
          { id: 1, name: 'Technical Seamless Performance Hoodie', similarity: 96.1, color: 'Gunmetal', category: 'Athletic' },
          { id: 2, name: 'Hydrophobic Track Pullover', similarity: 91.4, color: 'Black', category: 'Activewear' },
          { id: 3, name: 'Ergonomic Fleece Training Top', similarity: 87.9, color: 'Slate Heather', category: 'Athletic' },
          { id: 4, name: 'Minimalist Studio Layer', similarity: 82.5, color: 'Deep Olive', category: 'Apparel' },
        ]);
      } else {
        setStyleResults([
          { id: 1, name: 'Architectural Merino Turtleneck', similarity: 95.8, color: 'Ecru/Chalk', category: 'Knitwear' },
          { id: 2, name: 'Textured Ribbed Relaxed Crew', similarity: 91.2, color: 'Stone Grey', category: 'Sweaters' },
          { id: 3, name: 'Cashmere Blend Structured Top', similarity: 86.7, color: 'Sand', category: 'Apparel' },
          { id: 4, name: 'Japanese Raw Hem Cardigan', similarity: 83.9, color: 'Off-White', category: 'Knitwear' },
        ]);
      }
    }, 450);
  };

  const recomputeSwin = () => {
    setIsInferringSwin(true);
    setTimeout(() => {
      setIsInferringSwin(false);
    }, 350);
  };

  return (
    <section id="interactive-lab" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-transparent via-cyan-950/[0.03] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Engineering Playground</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Live AI &amp; Vision Lab
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Test-drive simulated inference engines from my featured AI/ML architectures. Real pipelines, vector embeddings, and attention maps.
            </p>
          </div>

          {/* Demo Selectors */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setActiveDemo('stylemind')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                activeDemo === 'stylemind'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-500" />
              <span>StyleMind (CLIP)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDemo('swin')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                activeDemo === 'swin'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>Swin Transformer</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDemo('xray')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                activeDemo === 'xray'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-violet-500" />
              <span>Chest X-Ray CAM</span>
            </button>
          </div>
        </div>

        {/* Workbench Frame */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-xl overflow-hidden backdrop-blur-md">
          
          {/* Top Workbench Status Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span>ACTIVE SIMULATOR:</span>
              </span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                {activeDemo === 'stylemind' ? 'StyleMind Vector Projection' : activeDemo === 'swin' ? 'Swin Transformer Attention (224x224)' : 'Chest X-Ray Grad-CAM'}
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span>LATENCY: ~38ms</span>
              <span>DEVICE: CPU/WASM</span>
            </div>
          </div>

          {/* DEMO 1: StyleMind AI Multimodal Search */}
          {activeDemo === 'stylemind' && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Controller (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      Multimodal Fashion Style Discovery
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Computes 512-dimension vector embeddings using vision-language models to find nearest-neighbor garments in a vector database.
                    </p>
                  </div>

                  {/* Sample Query Buttons */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase mb-2">
                      Select Input Style Query:
                    </label>
                    <div className="space-y-2">
                      {[
                        'Minimalist Techwear Trenchcoat',
                        'Sportswear Technical Hoodie',
                        'Monochrome Knitwear & Sweaters',
                      ].map((query) => (
                        <button
                          key={query}
                          type="button"
                          onClick={() => runStyleSearch(query)}
                          className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                            selectedStyleQuery === query
                              ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 text-cyan-900 dark:text-cyan-200 shadow-xs'
                              : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <span>{query}</span>
                          <Play className="w-3 h-3 text-cyan-500 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Vector Projection Telemetry */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 font-mono text-[11px] space-y-2 text-slate-600 dark:text-slate-400">
                    <div className="flex justify-between">
                      <span>Embedding Dimension:</span>
                      <span className="text-cyan-500 font-bold">512-D Normalized</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cosine Metric:</span>
                      <span className="text-slate-700 dark:text-slate-200">1 - (u·v / ||u||||v||)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Backbone Model:</span>
                      <span className="text-slate-700 dark:text-slate-200">ViT-B/32 CLIP</span>
                    </div>
                  </div>
                </div>

                {/* Right Results (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
                      Top Nearest-Neighbor Matches
                    </h4>
                    {isSearchingEmbedding && (
                      <span className="text-xs font-mono text-cyan-500 flex items-center gap-1.5 animate-pulse">
                        <RotateCw className="w-3 h-3 animate-spin" />
                        Calculating embeddings...
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {styleResults.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                            <span>Rank #0{idx + 1}</span>
                            <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                              {item.similarity}% Match
                            </span>
                          </div>

                          <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                            {item.name}
                          </h5>

                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {item.category} · {item.color}
                          </p>
                        </div>

                        {/* Progress similarity bar */}
                        <div className="mt-4">
                          <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500"
                              style={{ width: `${item.similarity}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Context notice */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs flex items-center justify-between">
                    <span>Extracted from StyleMind AI catalog vector indexing pipeline.</span>
                    <a href="#projects" className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline flex items-center gap-1">
                      <span>View Code</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* DEMO 2: Swin Transformer Attention Visualizer */}
          {activeDemo === 'swin' && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visualizer Frame (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center">
                    <img
                      src="/src/assets/images/project_oral_cancer_1793077767013.jpg"
                      alt="Histology slide sample"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Attention Heatmap Mask Simulation */}
                    {attentionOverlay && (
                      <div 
                        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none mix-blend-screen ${
                          selectedSlide === 'lesion' 
                            ? 'bg-gradient-to-tr from-cyan-500/40 via-purple-500/30 to-amber-500/40 opacity-80' 
                            : 'bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 opacity-40'
                        }`}
                      >
                        {/* Shifted window visual grid overlay */}
                        <div className="w-full h-full border border-cyan-400/30 grid grid-cols-4 grid-rows-4">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`border border-cyan-400/15 ${i === 5 || i === 6 || i === 9 || i === 10 ? 'bg-cyan-400/20' : ''}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-xs text-[11px] font-mono text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{selectedSlide === 'lesion' ? 'Specimen #OR-892 (Dysplastic)' : 'Specimen #NL-104 (Benign)'}</span>
                    </div>
                  </div>

                  {/* Toggle Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setAttentionOverlay(!attentionOverlay)}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                        attentionOverlay
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {attentionOverlay ? 'Attention Heatmap: ON' : 'Attention Heatmap: OFF'}
                    </button>

                    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                      <span>Shifted Window: 7x7</span>
                      <span>·</span>
                      <span>Layer {swinLayer}</span>
                    </div>
                  </div>
                </div>

                {/* Classification Panel (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      Swin Transformer Hierarchical Vision
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Processes histology patches via shifted window self-attention (W-MSA / SW-MSA), limiting computational complexity from quadratic to linear.
                    </p>
                  </div>

                  {/* Specimen Switcher */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { setSelectedSlide('lesion'); recomputeSwin(); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        selectedSlide === 'lesion'
                          ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>Specimen B (Lesion Slide)</span>
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">High Cellular Atypia</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setSelectedSlide('normal'); recomputeSwin(); }}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        selectedSlide === 'normal'
                          ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-950 dark:text-cyan-200'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>Specimen A (Normal Slide)</span>
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">Stratified Squamous</span>
                    </button>
                  </div>

                  {/* Inference Output Box */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-500">PREDICTION CLASS:</span>
                      <span className={`text-sm font-bold font-mono px-2.5 py-1 rounded ${
                        selectedSlide === 'lesion' 
                          ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400' 
                          : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {selectedSlide === 'lesion' ? 'CANCER / DYSPLASIA' : 'NON-CANCER / NORMAL'}
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-500">Model Confidence:</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {selectedSlide === 'lesion' ? '94.8%' : '97.2%'}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            selectedSlide === 'lesion' ? 'bg-indigo-500' : 'bg-cyan-500'
                          }`}
                          style={{ width: selectedSlide === 'lesion' ? '94.8%' : '97.2%' }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                      <div>
                        <span>Inference Latency:</span>
                        <span className="block text-slate-900 dark:text-white font-semibold">36.2 ms</span>
                      </div>
                      <div>
                        <span>Window Shift:</span>
                        <span className="block text-slate-900 dark:text-white font-semibold">M/2 = 3.5 px</span>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer notice */}
                  <div className="p-3 rounded-lg border border-amber-300 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Educational research demo only. Not clinically certified for medical diagnosis.</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* DEMO 3: Chest X-Ray Grad-CAM */}
          {activeDemo === 'xray' && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visualizer Frame */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center">
                    <img
                      src="/src/assets/images/project_chest_xray_1793077766595.jpg"
                      alt="Chest Radiograph visual"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Heatmap overlay */}
                    {camOverlay && (
                      <div 
                        className={`absolute inset-0 mix-blend-screen transition-opacity ${
                          xraySample === 'pneumonia' 
                            ? 'bg-radial from-amber-500/40 via-red-500/20 to-transparent opacity-85'
                            : 'bg-radial from-blue-500/20 to-transparent opacity-30'
                        }`}
                      />
                    )}

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-xs text-[11px] font-mono text-white">
                      <span>Pulmonary Scan #XR-504 · AP View</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setCamOverlay(!camOverlay)}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                        camOverlay
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {camOverlay ? 'Grad-CAM Overlay: ACTIVE' : 'Grad-CAM Overlay: OFF'}
                    </button>
                    <span className="font-mono text-slate-500 text-[11px]">Normalized Grayscale [0, 1]</span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      Deep Learning Radiograph Analysis
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Pretrained convolutional backbones with gradient-weighted Class Activation Mapping (Grad-CAM) to localize pulmonary opacities.
                    </p>
                  </div>

                  {/* Sample selection */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setXraySample('pneumonia')}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        xraySample === 'pneumonia'
                          ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-950 dark:text-cyan-200'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>Scan 1: Pneumonia</span>
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">Right Lower Consolidation</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setXraySample('normal')}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        xraySample === 'normal'
                          ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-950 dark:text-cyan-200'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>Scan 2: Normal</span>
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">Clear Lung Fields</span>
                    </button>
                  </div>

                  {/* Classification metric */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Output Diagnosis:</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {xraySample === 'pneumonia' ? 'PNEUMONIA DETECTED' : 'NORMAL / UNREMARKABLE'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-500">Predicted Confidence:</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                        {xraySample === 'pneumonia' ? '92.4%' : '98.1%'}
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 rounded-full"
                        style={{ width: xraySample === 'pneumonia' ? '92.4%' : '98.1%' }}
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
