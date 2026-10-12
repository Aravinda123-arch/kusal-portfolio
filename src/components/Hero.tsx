import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileDown, Sparkles, Brain, Layout, BarChart2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-violet-500/30 text-xs font-medium text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Data Science & UI/UX Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-widest font-mono text-violet-400 font-semibold">
                Kusal Aravinda
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-gradient block">Turning Data</span>
                <span className="text-gradient block">into Insights and Ideas</span>
                <span className="text-accent-gradient block">into Experiences.</span>
              </h1>
            </div>

            {/* Professional Identity Narrative */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-2xl leading-relaxed">
              Data Science undergraduate at <strong className="text-white font-semibold">SLTC Research University</strong> and 
              UI/UX designer. I synthesize <span className="text-sky-300 font-medium">analytical thinking</span>, 
              mathematical problem-solving, and <span className="text-violet-300 font-medium">creative interface design</span> to 
              create intuitive, data-driven digital solutions.
            </p>

            {/* Interactive Pillar Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
              <div className="glass-panel p-3 rounded-xl flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-200">Machine Learning</span>
                  <span className="text-[11px] text-slate-400">NLP & Analytics</span>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-xl flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <Layout className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-200">UI/UX Craft</span>
                  <span className="text-[11px] text-slate-400">Design Systems</span>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-xl flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-200">IEEE Leadership</span>
                  <span className="text-[11px] text-slate-400">SLTC Committee</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <Link
                href="#projects"
                id="hero-explore-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${personalInfo.cvUrl}`}
                download="Kusal_Aravinda_CV.pdf"
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 glass-panel hover:border-violet-500/40 hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download CV</span>
              </a>

              <Link
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Profile Visual & Floating Context Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-sky-500/20 to-purple-500/10 rounded-full blur-3xl transform scale-90 -z-10" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Stylized Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl overflow-hidden group">
                
                {/* Photo Container */}
                <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-black">
                  <Image
                    src="/images/kusal_profile_studio.png"
                    alt="Kusal Aravinda - Data Science undergraduate and UI/UX designer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    className="object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] via-transparent to-transparent opacity-30" />
                </div>

                {/* Caption / Identity bar */}
                <div className="p-3 bg-[#0a0c14]/90 backdrop-blur-md rounded-xl mt-2 border border-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">Kusal Aravinda</span>
                    <span className="text-[10px] text-sky-400 font-mono bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                      SLTC Research Univ.
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Data Analytics */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-panel p-2.5 sm:p-3 rounded-2xl shadow-xl border-violet-500/30 flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Evaluation</span>
                  <span className="text-xs font-bold text-slate-100">93.4% NLP Acc.</span>
                </div>
              </div>

              {/* Floating Badge 2: UI/UX Craft */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 glass-panel p-2.5 sm:p-3 rounded-2xl shadow-xl border-sky-500/30 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <Layout className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Specialization</span>
                  <span className="text-xs font-bold text-slate-100">Human-AI Design</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
