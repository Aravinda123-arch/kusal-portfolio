'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'contributions' | 'design' | 'results' | 'roadmap'>('overview');

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-slate-950 dark:bg-[#0c0f1c] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">
              Duration: {project.duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="text-xs text-slate-300 hover:text-violet-300 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={onClose}
              type="button"
              id="close-case-study-btn"
              aria-label="Close case study modal"
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Hero Banner */}
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-violet-300 font-medium">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-white/10 gap-1 sm:gap-2 pb-2">
            {[
              { id: 'overview', label: 'Overview & Problem' },
              { id: 'architecture', label: 'Architecture & Tech' },
              { id: 'contributions', label: 'My Contributions' },
              { id: 'design', label: 'UX Decisions' },
              { id: 'results', label: 'Evaluation & Results' },
              { id: 'roadmap', label: 'Limitations & Future' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="space-y-4 text-sm text-slate-300">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-white text-base">Project Summary</h4>
                  <p className="leading-relaxed">{project.overview}</p>
                </div>

                <div className="glass-panel p-4 rounded-xl space-y-2 border-amber-500/20">
                  <h4 className="font-semibold text-amber-300 text-base">The Problem & Audience</h4>
                  <p className="leading-relaxed">{project.problem}</p>
                  <div className="mt-3 space-y-1.5">
                    <span className="text-xs uppercase font-mono text-slate-400">Intended Users:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {project.targetAudience.map((aud, i) => (
                        <li key={i}>{aud}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white text-base">Confirmed Main Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <span className="font-medium text-slate-200 block text-xs">{feat.title}</span>
                        <p className="text-[12px] text-slate-400 leading-normal">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-white text-base">Technical Overview</h4>
                  <p className="leading-relaxed">{project.architecture.overview}</p>
                </div>

                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-sky-300 text-base">Verified Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.architecture.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-white text-base">Architectural Details</h4>
                  <ul className="space-y-2">
                    {project.architecture.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'contributions' && (
              <div className="space-y-4">
                <div className="glass-panel p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white text-base">My Verified Contributions</h4>
                    <span className="text-xs font-mono text-violet-400">Role: {project.role}</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Confirmed against source repository commits, design assets, and documented deliverables:
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {project.myContributions.map((contrib, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'design' && (
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-white text-base">Design Philosophy</h4>
                  <p className="leading-relaxed">{project.designAndUX.philosophy}</p>
                </div>

                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-violet-300 text-base">Key UX Decisions</h4>
                  <ul className="space-y-2">
                    {project.designAndUX.decisions.map((dec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                        <span>{dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.designAndUX.userFlows && (
                  <div className="glass-panel p-4 rounded-xl space-y-2">
                    <h4 className="font-semibold text-sky-300 text-base">Validated User Flow</h4>
                    {project.designAndUX.userFlows.map((flow, i) => (
                      <p key={i} className="font-mono text-xs text-slate-300 bg-white/5 p-2 rounded-lg">
                        {flow}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'results' && project.evaluationAndResults && (
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-white text-base">Evaluation Summary</h4>
                  <p className="leading-relaxed">{project.evaluationAndResults.metricsSummary}</p>
                </div>

                {project.evaluationAndResults.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.evaluationAndResults.metrics.map((m, i) => (
                      <div key={i} className="glass-panel p-4 rounded-xl text-center space-y-1">
                        <span className="text-xl font-bold text-violet-300 block">{m.value}</span>
                        <span className="text-xs font-semibold text-slate-200 block">{m.label}</span>
                        {m.subtext && <span className="text-[11px] text-slate-400 block">{m.subtext}</span>}
                      </div>
                    ))}
                  </div>
                )}

                <div className="glass-panel p-4 rounded-xl space-y-2">
                  <h4 className="font-semibold text-slate-200 text-base">Empirical Observations</h4>
                  <ul className="space-y-2">
                    {project.evaluationAndResults.observations.map((obs, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-xl space-y-2 border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <h4 className="font-semibold text-amber-300 text-base">Known Limitations & Responsible Interpretation</h4>
                  </div>
                  <ul className="space-y-2 pt-1">
                    {project.limitationsAndFuture.limitations.map((lim, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel p-4 rounded-xl space-y-2 border-violet-500/20">
                  <h4 className="font-semibold text-violet-300 text-base">Planned Future Improvements</h4>
                  <ul className="space-y-2 pt-1">
                    {project.limitationsAndFuture.futureRoadmap.map((road, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                        <span>{road}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer Call to Action in Modal */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}

            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/30 transition-all ml-auto"
            >
              <span>Explore Dedicated Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
