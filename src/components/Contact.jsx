import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, PenTool, Send, Star } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-24 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold text-zinc-900 dark:text-white sm:text-4xl">Let’s build something unforgettable</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Drop a line about your brand, product, or vision. I typically reply within 24 hours.</p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 p-3 text-zinc-700 ring-1 ring-zinc-200 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 p-3 text-zinc-700 ring-1 ring-zinc-200 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">
              <PenTool className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 p-3 text-zinc-700 ring-1 ring-zinc-200 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Testimonials mini-carousel */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                “Avery transformed our brand into a living, breathing experience. Every touchpoint feels intentional and beautifully crafted.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                  alt="Client"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">Maya Patel</div>
                  <div className="text-sm text-zinc-500">CMO, Ember Cafe</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 md:order-2"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FloatingField label="Name">
                <input id="name" name="name" required className="field peer" placeholder=" " />
              </FloatingField>
              <FloatingField label="Email">
                <input id="email" name="email" type="email" required className="field peer" placeholder=" " />
              </FloatingField>
            </div>
            <div className="mt-6">
              <FloatingField label="Project type (Branding, UI, Illustration...)" >
                <input id="type" name="type" className="field peer" placeholder=" " />
              </FloatingField>
            </div>
            <div className="mt-6">
              <FloatingField label="Tell me about your vision">
                <textarea id="message" name="message" rows={5} className="field peer resize-none" placeholder=" " />
              </FloatingField>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-zinc-500">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@averyclarke.design</span>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 text-white shadow-lg shadow-rose-500/30 transition-transform duration-300 hover:scale-[1.02]">
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FloatingField({ label, children }) {
  return (
    <label className="group relative block">
      {children}
      <span className="pointer-events-none absolute left-3 top-3 origin-left select-none text-sm text-zinc-500 transition-all group-focus-within:-translate-y-3 group-focus-within:scale-90 group-focus-within:text-rose-500 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-rose-500">
        {label}
      </span>
      <style>{`
        .field { width: 100%; background-color: transparent; color: inherit; border-radius: 0.75rem; padding: 0.9rem 1rem; border: 1px solid rgb(228 228 231 / 1); }
        .dark .field { border-color: rgb(63 63 70 / 1); }
        .field:focus { outline: none; box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.25); border-color: rgb(244 63 94 / 1); }
      `}</style>
    </label>
  );
}
