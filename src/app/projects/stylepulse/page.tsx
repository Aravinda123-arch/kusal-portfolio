import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, Calendar, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon } from '../../../components/SocialIcons';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BackgroundCanvas from '../../../components/BackgroundCanvas';
import { projectsData } from '../../../data/portfolioData';

export const metadata = {
  title: 'StylePulse Case Study | Kusal Aravinda Portfolio',
  description: 'Detailed UI/UX and Frontend case study for StylePulse — Salon Services Discovery & Booking Platform.',
};

export default function StylePulsePage() {
  const project = projectsData.find((p) => p.slug === 'stylepulse')!;

  return (
    <div className="relative min-h-screen bg-slate-950 dark:bg-[#0a0c14] text-slate-100 flex flex-col">
      <BackgroundCanvas />
      <Navbar />

      <main className="flex-1 relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-violet-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Featured Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Duration: {project.duration}
            </span>
            <span className="text-xs font-mono text-violet-400">
              Role: {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-violet-300 font-medium max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-3 flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all hover:border-violet-500/40"
              >
                <GithubIcon className="w-4 h-4 text-violet-400" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* High Resolution Showcase Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-14 bg-slate-900">
          <Image
            src={project.image}
            alt="StylePulse platform interface design"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-12">
          
          {/* 1. Problem & Intended Users */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-4 border border-white/10">
            <div className="flex items-center gap-2.5 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">1. Problem & Target Audience</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.problem}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Target User Groups:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.targetAudience.map((aud, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300">
                    {aud}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Platform Main Features */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
            <div className="flex items-center gap-2.5 text-violet-400">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">2. Platform Main Features</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <h3 className="text-sm font-semibold text-violet-300">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Technical Architecture */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
            <div className="flex items-center gap-2.5 text-sky-400">
              <Layers className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">3. Technical Architecture & Technologies</h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.architecture.overview}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.architecture.techStack.map((tech, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Architectural Decisions:
              </span>
              <ul className="space-y-2.5">
                {project.architecture.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Individual Contributions */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-violet-500/30">
            <div className="flex items-center gap-2.5 text-violet-400">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">4. My Verified Contributions</h2>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Individual contributions verified directly against repository history and design workspace:
            </p>

            <ul className="space-y-3">
              {project.myContributions.map((contrib, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Design & User Experience Decisions */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
            <h2 className="text-xl font-bold text-slate-100">5. Design & User Experience Decisions</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.designAndUX.philosophy}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Strategic Decisions:
              </span>
              <ul className="space-y-2">
                {project.designAndUX.decisions.map((dec, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.designAndUX.userFlows && (
              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 block font-semibold mb-2">
                  Mapped User Journey:
                </span>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 font-mono text-xs text-violet-300">
                  {project.designAndUX.userFlows[0]}
                </div>
              </div>
            )}
          </section>

          {/* 6. Evaluation & Results */}
          {project.evaluationAndResults && (
            <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
              <h2 className="text-xl font-bold text-slate-100">6. Usability Testing & Measurable Results</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.evaluationAndResults.metricsSummary}
              </p>

              {project.evaluationAndResults.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.evaluationAndResults.metrics.map((m, i) => (
                    <div key={i} className="glass-panel p-5 rounded-2xl text-center space-y-1">
                      <span className="text-2xl font-bold text-violet-300 block">{m.value}</span>
                      <span className="text-xs font-semibold text-slate-200 block">{m.label}</span>
                      {m.subtext && <span className="text-[11px] text-slate-400 block">{m.subtext}</span>}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 7. Limitations & Future Roadmap */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
            <h2 className="text-xl font-bold text-slate-100">7. Honest Limitations & Future Roadmap</h2>
            
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-amber-400 block font-semibold">
                Current Limitations (Honest Disclosure):
              </span>
              <ul className="space-y-2">
                {project.limitationsAndFuture.limitations.map((lim, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-3 border-t border-white/10">
              <span className="text-xs font-mono uppercase text-violet-400 block font-semibold">
                Planned Future Improvements:
              </span>
              <ul className="space-y-2">
                {project.limitationsAndFuture.futureRoadmap.map((road, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{road}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
