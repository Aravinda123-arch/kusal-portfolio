'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null;
    if (current) {
      setTheme(current);
    } else {
      const stored = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
      if (stored) {
        setTheme(stored);
        document.documentElement.setAttribute('data-theme', stored);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10" aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      id="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 glass-panel hover:border-violet-500/50 hover:scale-105 active:scale-95 text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-violet-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
