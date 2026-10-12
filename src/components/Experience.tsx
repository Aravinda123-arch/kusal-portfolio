import { Award, Briefcase, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-indigo-500/30 text-xs font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>04 // Leadership & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Community & Academic Leadership
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified responsibilities at the IEEE Student Branch of SLTC and collaborative engineering initiatives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[29px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-start gap-6 group">
                
                {/* Timeline node icon */}
                <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl glass-panel border-violet-500/40 text-violet-400 shrink-0 group-hover:scale-110 group-hover:border-violet-400 transition-all shadow-lg shadow-violet-500/10">
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Experience card */}
                <div className="flex-1 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-300 space-y-5">
                  
                  {/* Top info */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-100">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-violet-400 mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                      Core Responsibilities
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  {exp.highlights.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {exp.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
