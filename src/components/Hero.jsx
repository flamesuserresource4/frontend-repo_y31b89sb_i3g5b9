import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to enhance contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,50,0.35),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(255,0,90,0.25),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-rose-300" />
          <span className="text-sm text-rose-100">Available for select projects in 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-5xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          Avery Clarke
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-balance text-lg text-rose-100/90 sm:text-xl"
        >
          Creative Visual Storyteller • Branding, Illustration, UI/UX, and Motion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400 px-6 py-3 text-white shadow-lg shadow-rose-500/30 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur transition-colors hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Play className="h-4 w-4" /> About Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-rose-100/80">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="mt-2 h-10 w-5 rounded-full border border-white/30 p-1">
              <motion.div
                className="h-2 w-2 rounded-full bg-white"
                animate={{ y: [0, 20, 0], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
