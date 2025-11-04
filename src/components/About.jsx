import { motion } from 'framer-motion';
import { Award, Briefcase, Palette, User } from 'lucide-react';

const timeline = [
  {
    year: '2018',
    title: 'Graduated in Visual Communication',
    icon: <Award className="h-5 w-5" />,
    desc: 'Built a strong foundation in typography, color, and composition.',
  },
  {
    year: '2019-2021',
    title: 'Brand Designer at Studio Nova',
    icon: <Briefcase className="h-5 w-5" />,
    desc: 'Crafted identities for startups and cultural institutions.',
  },
  {
    year: '2022-2024',
    title: 'Senior Visual Designer (Freelance)',
    icon: <Palette className="h-5 w-5" />,
    desc: 'Expanded into UI/UX, motion graphics, and 3D visualizations.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 p-2 text-white">
            <User className="h-5 w-5" />
          </div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">About the Designer</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Stylized portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto aspect-square w-72 overflow-hidden rounded-3xl md:w-96"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#fb7185_0deg,#f97316_120deg,#f59e0b_240deg,#fb7185_360deg)] opacity-80" />
            <div className="absolute inset-2 rounded-2xl bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-hard-light" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20" />
          </motion.div>

          {/* Bio + timeline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300"
            >
              I turn bold ideas into striking visuals. My approach blends research, narrative, and playful experimentation to craft identities and interfaces that feel alive.
            </motion.p>

            <div className="mt-10 space-y-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-rose-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-rose-300 dark:ring-zinc-800">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{item.year}</div>
                    <div className="font-medium">{item.title}</div>
                    <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
