import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGallery from './components/PortfolioGallery';
import Contact from './components/Contact';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    // Respect system preference on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Theme toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        className="fixed right-6 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span className="hidden text-sm sm:inline">{dark ? 'Light' : 'Dark'} Mode</span>
      </button>

      <Hero />
      <About />
      <PortfolioGallery />
      <Contact />

      <footer className="border-t border-zinc-200/60 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Avery Clarke — All rights reserved.
      </footer>
    </div>
  );
}
