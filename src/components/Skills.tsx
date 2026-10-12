'use client';

import { useState } from 'react';
import { Sparkles, Terminal, Layers, Code, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [Terminal, Layers, Code, Wrench];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-sky-500/30 text-xs font-mono text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>02 // Verified Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Technical & Design Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Proficiencies confirmed through hands-on coursework, research implementations, and verified project deliverables.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = tabIcons[idx] || Terminal;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-violet-600/25 text-violet-300 border border-violet-500/50 shadow-md shadow-violet-600/20'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-violet-400' : 'text-slate-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>{skillCategories[activeTab].title}</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              {skillCategories[activeTab].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-violet-500/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-slate-200 group-hover:text-violet-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {skill.level}
                  </span>
                </div>

                <div className="text-[12px] text-slate-400 mb-3">
                  {skill.experience}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Verification note */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Verified in codebases & academic labs</span>
            <span className="font-mono text-violet-400">SLTC Research University</span>
          </div>

        </div>

      </div>
    </section>
  );
}
