import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, X } from 'lucide-react';

const ALL_PROJECTS = [
  {
    id: 'p1',
    title: 'Ember Cafe — Brand Identity',
    category: 'Branding',
    cover: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1529336953121-c798a53dea0e?q=80&w=1400&auto=format&fit=crop'],
    description:
      'Warm, tactile identity with a modern logomark and expressive packaging system. Focused on texture, aroma, and community.',
    tags: ['Logo', 'Packaging', 'Guidelines'],
  },
  {
    id: 'p2',
    title: 'Astra UI — Design System',
    category: 'UI/UX',
    cover: 'https://images.unsplash.com/photo-1551281044-8a5d2a9b2f67?q=80&w=1400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop'],
    description:
      'Scalable component library with accessibility baked in. Built responsive layouts, tokens, and motion patterns.',
    tags: ['Design System', 'Accessibility', 'Prototype'],
  },
  {
    id: 'p3',
    title: 'Neon Frames — Motion Teasers',
    category: 'Motion',
    cover: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1545239705-5e537e14cd76?q=80&w=1400&auto=format&fit=crop'],
    description:
      'Short kinetic typography teasers for a film festival. Energetic gradients and rhythmic transitions.',
    tags: ['After Effects', 'Kinetic Type'],
  },
  {
    id: 'p4',
    title: 'Wander — Editorial Illustrations',
    category: 'Illustration',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop'],
    description:
      'A whimsical set of travel illustrations exploring texture and shape language in a limited palette.',
    tags: ['Procreate', 'Editorial'],
  },
];

const CATEGORIES = ['All', 'Branding', 'Illustration', 'UI/UX', 'Motion'];

export default function PortfolioGallery() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'All') return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="relative bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold text-zinc-900 dark:text-white">Selected Work</h2>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`${
                  active === cat
                    ? 'bg-gradient-to-r from-rose-500 to-orange-400 text-white'
                    : 'bg-white/70 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200'
                } rounded-full px-4 py-2 text-sm shadow-sm ring-1 ring-black/5 backdrop-blur transition-colors`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => setSelected(p)}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-100 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
            >
              <img
                src={p.cover}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left text-white">
                <div className="text-xs uppercase tracking-widest opacity-80">{p.category}</div>
                <div className="mt-1 text-lg font-semibold">{p.title}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 text-zinc-700 shadow ring-1 ring-black/5 backdrop-blur hover:bg-white dark:bg-zinc-800/80 dark:text-zinc-200 dark:ring-zinc-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img src={selected.cover} alt={selected.title} className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-orange-400/10" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-rose-500">{selected.category}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-zinc-900 dark:text-white">
                    {selected.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {selected.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">
                        <Tag className="h-3 w-3" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
