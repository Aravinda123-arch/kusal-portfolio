import { CheckCircle2, Compass, Cpu, Palette, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: 'Analytical Rigor',
      icon: Cpu,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      description:
        'Applying statistical methods, exploratory data analysis, and machine learning architectures (Logistic Regression, LSTM) to decode complex datasets.',
    },
    {
      title: 'Human-Centered Design',
      icon: Palette,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      description:
        'Crafting intuitive user journeys, high-fidelity Figma design systems, and accessible interfaces that make advanced technical capabilities effortless for users.',
    },
    {
      title: 'Production Engineering',
      icon: Compass,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      description:
        'Translating prototypes into performant Next.js & TypeScript frontends, ensuring fast load times, responsive viewports, and WCAG accessibility standards.',
    },
  ];

  const highlights = [
    'Undergraduate at Sri Lanka Technological Campus (SLTC Research University)',
    'Dual expertise bridging Data Science pipelines and UI/UX design systems',
    'Active leadership as Executive Committee Contributor at IEEE Student Branch of SLTC',
    'Committed to ethical, transparent, and explainable AI interfaces',
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-violet-500/30 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>01 // About & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Where Data Meets Human Experience
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Exploring the nexus of algorithmic precision and empathetic interface design to create digital products people love to use.
          </p>
        </div>

        {/* Grid Layout: Editorial Narrative + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-semibold text-slate-100">
                Hi, I&apos;m Kusal Aravinda
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Data Science undergraduate studying at{' '}
                <strong className="text-white">Sri Lanka Technological Campus (SLTC Research University)</strong>. 
                My dual discipline enables me to bridge a common gap in technology: bridging deep statistical computing 
                and machine learning models with human-centered product design.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Too often, data systems remain opaque black boxes with clunky interfaces, while visually stunning apps lack 
                intelligent, predictive depth. My work focuses on fusing these worlds—turning complex data pipelines into 
                clear insights, and abstract ideas into seamless, memorable user experiences.
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider font-mono text-violet-400 font-semibold mb-3">
                  Core Foundations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.metrics.map((m, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl text-center">
                  <div className="text-sm sm:text-base font-bold text-violet-300 mb-1">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wide font-mono">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${pillar.color} shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-semibold text-slate-100">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Career Aspiration Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-950/40 via-indigo-950/30 to-slate-900/40 border border-violet-500/30 text-xs sm:text-sm text-slate-300 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-sky-400 font-semibold block">
                Career Objective
              </span>
              <p className="leading-relaxed">
                Currently actively seeking <strong className="text-white">Data Science</strong>, <strong className="text-white">Machine Learning</strong>, or <strong className="text-white">UI/UX Design internships</strong> where I can contribute to meaningful production software and grow alongside experienced engineering teams.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
