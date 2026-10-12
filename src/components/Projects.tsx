'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Eye, Cpu, Layout } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Data Science & ML' | 'UI/UX & Web'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-violet-500/30 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>03 // Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Engineered & Designed with Purpose
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            In-depth walkthroughs of verified implementations. Built from ground research to functional interfaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'UI/UX & Web', 'Data Science & ML'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
            >
              
              {/* Image Preview with interactive overlay */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.title} showcase visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md bg-slate-900/80 text-violet-300 border border-violet-500/30">
                    {project.category === 'UI/UX & Web' ? (
                      <Layout className="w-3.5 h-3.5" />
                    ) : (
                      <Cpu className="w-3.5 h-3.5" />
                    )}
                    <span>{project.category}</span>
                  </span>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full backdrop-blur-md bg-slate-900/80 text-slate-300 border border-white/10">
                    {project.duration}
                  </span>
                </div>

                {/* Quick View Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    <Eye className="w-4 h-4 text-violet-600" />
                    <span>Quick Preview Case Study</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-violet-400 font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors shrink-0"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>
                </div>

                {/* Tags & Key highlights */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      type="button"
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 py-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-violet-400" />
                      <span>Quick View</span>
                    </button>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600/30 hover:bg-violet-600 border border-violet-500/40 hover:border-violet-500 transition-all group/btn"
                    >
                      <span>Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
