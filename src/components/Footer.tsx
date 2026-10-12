import Link from 'next/link';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 dark:bg-[#070910]/90 backdrop-blur-md relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-sky-400 flex items-center justify-center font-bold text-xs text-white">
                KA
              </div>
              <span className="font-bold text-base text-slate-100">
                Kusal Aravinda
              </span>
            </div>

            <p className="text-sm text-violet-300 font-medium">
              &ldquo;Turning Data into Insights and Ideas into Experiences.&rdquo;
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Data Science undergraduate at Sri Lanka Technological Campus (SLTC Research University) & UI/UX designer. Bridging machine learning pipelines with human-centered product craft.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#about" className="hover:text-violet-300 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-violet-300 transition-colors">
                  Verified Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-violet-300 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-violet-300 transition-colors">
                  IEEE SLTC Experience
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="hover:text-violet-300 transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-violet-300 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & CV */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Connect & Assets
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-sky-400 border border-white/10 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-indigo-400 border border-white/10 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send direct email"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-violet-400 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${personalInfo.cvUrl}`}
                download="Kusal_Aravinda_CV.pdf"
                className="text-xs text-violet-400 hover:text-violet-300 underline font-mono"
              >
                Download Official CV (.PDF)
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            <span>© 2026 Kusal Aravinda. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>using Next.js & TypeScript.</span>
          </p>

          <a
            href="#home"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
