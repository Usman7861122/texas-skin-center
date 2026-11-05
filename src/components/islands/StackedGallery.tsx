import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useReducedMotion, type MotionValue, type PanInfo } from 'framer-motion';

export type Slide = { image: string; title: string; description: string; badge: string; pos?: string };

type Cfg = { distanceDivisor: number; velocityDivisor: number; sensitivity: number; x: number; y: number; rot: number; scale: number };
const cfgFor = (w: number): Cfg =>
  w < 640
    ? { distanceDivisor: 120, velocityDivisor: 500, sensitivity: 180, x: 100, y: 20, rot: 8, scale: 0.06 }
    : w < 1024
      ? { distanceDivisor: 160, velocityDivisor: 650, sensitivity: 220, x: 170, y: 30, rot: 10, scale: 0.09 }
      : { distanceDivisor: 200, velocityDivisor: 800, sensitivity: 250, x: 250, y: 40, rot: 12, scale: 0.11 };

export default function StackedGallery({ slides }: { slides: Slide[] }) {
  const progress = useMotionValue(0);
  const start = useRef(0);
  const target = useRef(0);
  const [w, setW] = useState(1200);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const total = slides.length;

  useEffect(() => {
    const on = () => setW(window.innerWidth);
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  useEffect(() => progress.on('change', (p) => setActive((((Math.round(p) % total) + total) % total))), [progress, total]);

  const cfg = useMemo(() => cfgFor(w), [w]);

  const go = (to: number) => {
    target.current = to;
    animate(progress, to, reduce ? { duration: 0 } : { type: 'spring', stiffness: 200, damping: 30 });
  };
  const onEnd = (_: unknown, info: PanInfo) => {
    const shift = Math.max(-3, Math.min(3, Math.round(-info.offset.x / cfg.distanceDivisor - info.velocity.x / cfg.velocityDivisor)));
    go(Math.round(start.current) + shift);
  };

  // gentle auto-advance; pauses while the person is dragging or hovering
  const paused = useRef(false);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => { if (!paused.current && !document.hidden) go(Math.round(progress.get()) + 1); }, 4200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div
      className="select-none"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="relative mx-auto flex h-[27rem] w-full max-w-[84rem] items-center justify-center sm:h-[34rem] lg:h-[40rem]">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragStart={() => { start.current = progress.get(); paused.current = true; }}
          onDrag={(_, i) => progress.set(progress.get() - i.delta.x / cfg.sensitivity)}
          onDragEnd={onEnd}
          className="absolute inset-0 z-50 cursor-grab touch-pan-y active:cursor-grabbing"
          aria-hidden
        />
        {slides.map((s, i) => (
          <GalleryCard key={s.image} slide={s} index={i} total={total} progress={progress} cfg={cfg} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button type="button" className="btn btn-dark-ghost btn-sm" onClick={() => go(Math.round(progress.get()) - 1)} aria-label="Previous photo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          Previous
        </button>
        <p className="min-w-[9rem] text-center font-display text-[0.8rem] uppercase tracking-[0.2em] text-ink/70" aria-live="polite">
          {slides[active].title}
        </p>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => go(Math.round(progress.get()) + 1)} aria-label="Next photo">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}

function GalleryCard({ slide, index, total, progress, cfg }: { slide: Slide; index: number; total: number; progress: MotionValue<number>; cfg: Cfg }) {
  const offset = useTransform(progress, (p) => {
    let d = (index - p) % total;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  });
  const x = useTransform(offset, (o) => o * cfg.x);
  const rotate = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : o * cfg.rot));
  const y = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : Math.abs(o) * cfg.y));
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * cfg.scale);
  const opacity = useTransform(offset, [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2], [0, 1, 1, 1, 0]);
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));
  const shade = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.55, 0.22, 0, 0.22, 0.55]);
  const textOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className="pointer-events-none absolute h-[22rem] w-[15rem] overflow-hidden rounded-[8px] bg-ink shadow-[0_40px_70px_-30px_rgba(10,34,57,.7)] ring-1 ring-white/40 sm:h-[29rem] sm:w-[20rem] lg:h-[34rem] lg:w-[24rem]"
    >
      <img src={slide.image} alt={slide.title} draggable={false} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: slide.pos ?? '50% 30%' }} loading="lazy" />
      <motion.div style={{ opacity: shade }} className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
      <span className="absolute right-4 top-4 rounded-[4px] bg-white/90 px-2.5 py-1 font-display text-[0.66rem] font-medium uppercase tracking-[0.14em] text-ink">{slide.badge}</span>
      <motion.div style={{ opacity: textOpacity }} className="absolute inset-x-5 bottom-6 text-white">
        <p className="font-display text-lg font-medium leading-tight sm:text-xl">{slide.title}</p>
        <p className="mt-1 hidden text-sm leading-snug text-white/75 sm:block">{slide.description}</p>
      </motion.div>
    </motion.div>
  );
}
