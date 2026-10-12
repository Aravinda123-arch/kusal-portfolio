import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, Cpu, BarChart3, Binary, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon } from '../../../components/SocialIcons';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BackgroundCanvas from '../../../components/BackgroundCanvas';
import { projectsData } from '../../../data/portfolioData';

export const metadata = {
  title: 'NLP Fake News Detection Case Study | Kusal Aravinda Portfolio',
  description: 'Machine Learning and Deep Learning NLP case study classifying misinformation using Logistic Regression and LSTM architectures.',
};

export default function NLPFakeNewsPage() {
  const project = projectsData.find((p) => p.slug === 'nlp-fake-news')!;

  return (
    <div className="relative min-h-screen bg-slate-950 dark:bg-[#0a0c14] text-slate-100 flex flex-col">
      <BackgroundCanvas />
      <Navbar />

      <main className="flex-1 relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Featured Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Duration: {project.duration}
            </span>
            <span className="text-xs font-mono text-sky-400">
              Role: {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-sky-300 font-medium max-w-3xl">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all hover:border-sky-500/40"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* High Resolution Showcase Image (Dashboard with Metrics) */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-14 bg-slate-900">
          <Image
            src={project.image}
            alt="NLP Fake News Detection analytics dashboard"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-12">
          
          {/* 1. Problem & Motivation */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-4 border border-white/10">
            <div className="flex items-center gap-2.5 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">1. Misinformation Problem & Threat Model</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.problem}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Applications & Beneficiaries:
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

          {/* 2. Dataset Preparation & NLP Preprocessing */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
            <div className="flex items-center gap-2.5 text-sky-400">
              <Binary className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">2. Dataset Preparation & NLP Pipeline</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <h3 className="text-sm font-semibold text-sky-300">Data Corpus & Splits</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Trained on an aggregated corpus of 14,582 labeled news articles. Cleaned and split into 70% training, 15% validation, and 15% held-out test datasets to prevent data leakage.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <h3 className="text-sm font-semibold text-sky-300">Text Normalization</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Deterministic tokenization, lowercasing, punctuation stripping, regex URL cleaning, and NLTK stopword pruning with lemmatization via spaCy to normalize grammatical inflection.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                Feature Representation:
              </span>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2 text-xs font-mono text-slate-300">
                <div>• TF-IDF Vectorizer: Max features 10,000, n-gram range (1, 2), sublinear term frequency scaling.</div>
                <div>• Sequence Embeddings: Token index sequences truncated/padded to 300 tokens, fed into 128-dim trainable embedding vectors.</div>
              </div>
            </div>
          </section>

          {/* 3. Machine Learning & Deep Learning Architectures */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
            <div className="flex items-center gap-2.5 text-violet-400">
              <Cpu className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">3. Comparative Model Architectures</h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              To rigorously assess tradeoffs between computational efficiency and classification capability, two distinct paradigms were benchmarked:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-5 rounded-2xl border border-sky-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sky-300 text-sm">Baseline: Logistic Regression</h3>
                  <span className="text-xs font-mono text-emerald-400">91.2% Acc.</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  L2-regularized linear model on TF-IDF features. Highly interpretable; coefficients directly reveal lexical tokens with highest influence on class probabilities. Exceptionally fast inference (&lt;5ms).
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-violet-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-violet-300 text-sm">Deep Learning: Bi-LSTM</h3>
                  <span className="text-xs font-mono text-emerald-400">93.4% Acc.</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bidirectional Long Short-Term Memory neural network with dropout (0.3). Captures sequential sentence flow and semantic context, reducing false positives caused by isolated words.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Model Evaluation & Verified Metrics */}
          {project.evaluationAndResults && (
            <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-white/10">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <BarChart3 className="w-5 h-5" />
                <h2 className="text-xl font-bold text-slate-100">4. Model Evaluation & Empirical Results</h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {project.evaluationAndResults.metricsSummary}
              </p>

              {/* Metrics cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.evaluationAndResults.metrics?.map((m, i) => (
                  <div key={i} className="glass-panel p-4 rounded-xl text-center space-y-1">
                    <span className="text-2xl font-bold text-sky-300 block">{m.value}</span>
                    <span className="text-xs font-semibold text-slate-200 block">{m.label}</span>
                    {m.subtext && <span className="text-[10px] text-slate-400 block">{m.subtext}</span>}
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                  Experimental Findings:
                </span>
                <ul className="space-y-2">
                  {project.evaluationAndResults.observations.map((obs, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* 5. Individual Contributions */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-sky-500/30">
            <div className="flex items-center gap-2.5 text-sky-400">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">5. My Verified Implementation Work</h2>
            </div>

            <ul className="space-y-3">
              {project.myContributions.map((contrib, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Limitations & Responsible Interpretation */}
          <section className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border border-amber-500/25">
            <div className="flex items-center gap-2.5 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-100">6. Limitations & Responsible Interpretation</h2>
            </div>
            
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 leading-relaxed">
              <strong>Critical Ethics Principle:</strong> Natural language models detect stylistic, sensational, or rhetorical framing—they do not possess real-time world knowledge. Predictions must serve as analytical decision aids, never as unilateral truth authorities.
            </div>

            <ul className="space-y-2.5 pt-1">
              {project.limitationsAndFuture.limitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-3 border-t border-white/10">
              <span className="text-xs font-mono uppercase text-sky-400 block font-semibold">
                Future Engineering Roadmap:
              </span>
              <ul className="space-y-2">
                {project.limitationsAndFuture.futureRoadmap.map((road, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
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
