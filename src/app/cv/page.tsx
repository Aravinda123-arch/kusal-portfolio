'use client';

import Link from 'next/link';
import { ArrowLeft, Printer, FileDown, Mail, MapPin, Globe } from 'lucide-react';
import { GithubIcon } from '../../components/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-[#070910] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Screen Controls (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print Resume</span>
            </button>

            <a
              href="/cv/Kusal_Aravinda_CV.pdf"
              download="Kusal_Aravinda_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/30 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download .PDF</span>
            </a>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 print:border-none print:shadow-none print:p-0 print:bg-transparent space-y-8">
          
          {/* Header */}
          <div className="border-b border-white/10 print:border-slate-300 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-100 print:text-black tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-violet-400 print:text-slate-700">
              Data Science Undergraduate & UI/UX Designer
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400 print:text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-violet-400 print:text-black" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-violet-400 print:text-black" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-violet-400 print:text-black" />
                github.com/Aravinda123-arch
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-violet-400 print:text-black" />
                kusalaravinda.dev
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-violet-400 print:text-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Analytical and creative technologist combining mathematical data science with human-centered UI/UX design. Specialized in natural language processing (NLP), statistical classification pipelines, Figma design systems, and responsive Next.js frontends.
            </p>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-violet-400 print:text-black">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-slate-100 print:text-black">
                  B.Sc. (Hons) in Data Science
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  2022 - Present
                </span>
              </div>
              <p className="text-xs text-sky-400 print:text-slate-700 font-medium">
                Sri Lanka Technological Campus (SLTC Research University)
              </p>
              <p className="text-xs text-slate-400 print:text-slate-700">
                Key Focus: Machine Learning, Natural Language Processing, Statistical Computing, Human-Computer Interaction, Database Architectures.
              </p>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-4">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-violet-400 print:text-black">
              Featured Projects
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-slate-100 print:text-black">
                  StylePulse — Salon Services Platform
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  Next.js, TypeScript, Tailwind, Figma
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Designed complete high-fidelity Figma component library and interactive user flows.</li>
                <li>Implemented responsive appointment booking frontend with 3-step scheduling checkout.</li>
                <li>Created location-based salon discovery and stylist portfolio showcase pages.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-slate-100 print:text-black">
                  NLP Fake News Detection
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  Python, Scikit-learn, PyTorch/LSTM, TF-IDF
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Built automated preprocessing pipeline: tokenization, lemmatization, and TF-IDF extraction.</li>
                <li>Trained and benchmarked Logistic Regression (91.2% accuracy) and bidirectional LSTM (93.4% accuracy).</li>
                <li>Evaluated with precision, recall, F1-score (0.93), and ROC-AUC curve analysis (0.96).</li>
              </ul>
            </div>
          </section>

          {/* Leadership & Experience */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-violet-400 print:text-black">
              Leadership & Community Experience
            </h2>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-slate-100 print:text-black">
                  Executive Committee Contributor / Design Lead
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  2023 - Present
                </span>
              </div>
              <p className="text-xs text-violet-400 print:text-slate-700 font-medium">
                IEEE Student Branch of SLTC
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Led digital branding and UI design for student hackathons, seminars, and technical workshops.</li>
                <li>Co-organized peer bootcamps in programming and interface design for undergraduate members.</li>
                <li>Recipient of the Outstanding Executive Contributor recognition.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-violet-400 print:text-black">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              <div>
                <strong className="text-slate-200 print:text-black">Data Science & ML:</strong> Python, Scikit-learn, PyTorch, Pandas, NumPy, NLP, TF-IDF, EDA.
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">UI/UX & Web:</strong> Figma, Design Systems, Next.js, React, TypeScript, Tailwind CSS, WCAG A11y.
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">Tools:</strong> Git, GitHub, VS Code, Jupyter, REST APIs, SQL, PowerShell CLI.
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">Soft Skills:</strong> Cross-functional collaboration, Agile workflows, Technical documentation.
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
