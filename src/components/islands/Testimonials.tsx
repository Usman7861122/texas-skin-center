import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface T { quote: string; name: string; }

export default function Testimonials({ items }: { items: T[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [paused, reduce, items.length]);

  const go = (d: number) => setI((n) => (n + d + items.length) % items.length);
  const t = items[i];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative rounded-[6px] border border-white bg-white p-8 text-ink shadow-[0_50px_90px_-40px_rgba(10,34,57,.8)] backdrop-blur-2xl md:p-12"
    >
      <svg className="absolute -top-6 left-8 h-14 w-14 rounded-[6px] bg-sapphire p-3.5 text-white shadow-lg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6h-3c0-2 1-3.3 3-4zM19.5 6c-3 1-5 3.6-5 7v5h6v-6h-3c0-2 1-3.3 3-4z" />
      </svg>

      <div className="min-h-[12rem] pt-4" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <blockquote className="font-display text-[clamp(1.2rem,2.2vw,1.65rem)] font-light leading-snug text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-[6px] bg-gradient-to-br from-sapphire to-navy font-display font-medium text-white">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-display font-medium">{t.name}</span>
                <span className="text-sm text-ink/55">Texas Skin Center patient</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {items.map((x, n) => (
            <button
              key={x.name}
              role="tab"
              aria-selected={n === i}
              aria-label={`Testimonial from ${x.name}`}
              onClick={() => setI(n)}
              className={`h-1.5 rounded-full transition-all duration-500 ${n === i ? 'w-10 bg-sapphire' : 'w-4 bg-ink/20 hover:bg-ink/40'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {[{ d: -1, l: 'Previous', p: 'M15 6l-6 6 6 6' }, { d: 1, l: 'Next', p: 'M9 6l6 6-6 6' }].map((b) => (
            <button key={b.l} aria-label={b.l} onClick={() => go(b.d)} className="grid h-11 w-11 place-items-center rounded-[6px] border border-ink/15 text-ink transition hover:-translate-y-0.5 hover:border-sapphire hover:bg-sapphire hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d={b.p} /></svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
