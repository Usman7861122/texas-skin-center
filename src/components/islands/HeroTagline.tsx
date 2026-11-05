import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface Line { word: string; sub: string; }
interface Props { lines: Line[]; bookUrl: string; phone: string; phoneHref: string; interval?: number; }

export default function HeroTagline({ lines, bookUrl, phone, phoneHref, interval = 4200 }: Props) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % lines.length), interval);
    return () => clearInterval(t);
  }, [lines.length, interval, reduce]);

  const line = lines[i];

  return (
    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="eyebrow on-dark mb-6"
      >
        Board-certified dermatology
      </motion.p>

      <h1 className="font-display text-[clamp(2.4rem,6.2vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(6,24,42,.55)]">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="block"
        >
          Expert dermatology
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-wrap items-baseline gap-x-[0.28em]"
        >
          <span>for every</span>
          {/* clipped window: the last word slides up and out */}
          <span className="relative inline-block h-[1.38em] -mb-[0.2em] overflow-hidden align-bottom" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={line.word}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.65, ease: [0.7, 0, 0.2, 1] }}
                className="block pb-[0.2em] pr-[0.2em] text-[1.08em] font-bold italic text-logo [font-family:var(--font-curvy)]"
              >
                {line.word}.
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.span>
      </h1>

      <div className="mt-6 min-h-[4.5rem] max-w-xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={line.sub}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-white/85"
          >
            {line.sub}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a href={bookUrl} className="btn btn-primary">Book Appointment</a>
        <a href={phoneHref} className="btn btn-ghost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
          </svg>
          {phone}
        </a>
      </motion.div>
    </div>
  );
}
