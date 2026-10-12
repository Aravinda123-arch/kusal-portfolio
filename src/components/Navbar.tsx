'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section observer
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 dark:bg-[#0a0c14]/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 shadow-lg shadow-black/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-sky-400 p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0a0c14] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-sm tracking-wider bg-gradient-to-r from-violet-300 to-sky-200 bg-clip-text text-transparent">
                  KA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-violet-400 transition-colors">
                Kusal Aravinda
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono">
                Data & UX
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-sm shadow-violet-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/cv/Kusal_Aravinda_CV.pdf"
              download="Kusal_Aravinda_CV.pdf"
              id="download-cv-nav-btn"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-violet-400" />
              <span>CV</span>
            </a>

            <ThemeToggle />

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3 h-3 text-sky-200" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-btn"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white glass-panel focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="relative glass-panel bg-slate-950/95 dark:bg-[#0c0f1c]/95 border-b border-white/10 px-6 py-6 space-y-4 max-h-[calc(100vh-60px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="/cv/Kusal_Aravinda_CV.pdf"
                download="Kusal_Aravinda_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download CV</span>
              </a>

              <Link
                href="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 text-xs text-slate-400 hover:text-violet-300"
              >
                <span>View Printable CV</span>
              </Link>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-600/20"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
