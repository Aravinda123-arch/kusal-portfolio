import { Trophy, Award, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Leadership':
        return Trophy;
      case 'Certification':
        return Award;
      case 'Competition':
        return Trophy;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-amber-500/30 text-xs font-mono text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>05 // Recognition & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Verified Milestones
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Certifications, awards, and contributions across data science, human-computer interaction, and student leadership.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {item.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-semibold block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-violet-300 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium mt-0.5">
                      {item.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                  <span className="font-mono text-slate-400">{item.issuer.split('&')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
