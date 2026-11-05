import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Loc { id: string; city: string; line1: string; line2: string; img: string; }
interface Props { locations: Loc[]; phone: string; phoneHref: string; bookUrl: string; }

export default function LocationTabs({ locations, phone, phoneHref, bookUrl }: Props) {
  const [id, setId] = useState(locations[0].id);
  const loc = locations.find((l) => l.id === id)!;
  const q = encodeURIComponent(`Texas Skin Center, ${loc.line1}, ${loc.line2}`);

  return (
    <div>
      {/* tabs */}
      <div role="tablist" aria-label="Clinic locations" className="mx-auto flex w-fit gap-1 rounded-[8px] bg-white/70 p-1.5 shadow-[0_20px_40px_-24px_rgba(10,34,57,.5)] backdrop-blur">
        {locations.map((l) => {
          const on = l.id === id;
          return (
            <button
              key={l.id}
              role="tab"
              id={`tab-${l.id}`}
              aria-selected={on}
              aria-controls={`panel-${l.id}`}
              onClick={() => setId(l.id)}
              className={`relative rounded-[6px] px-5 py-3 font-display text-[0.85rem] font-medium tracking-wide transition-colors sm:px-8 ${on ? 'text-white' : 'text-ink/70 hover:text-ink'}`}
            >
              {on && <motion.span layoutId="loc-pill" className="absolute inset-0 rounded-[6px] bg-sapphire shadow-lg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative">{l.city}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={loc.id}
          role="tabpanel"
          id={`panel-${loc.id}`}
          aria-labelledby={`tab-${loc.id}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr]"
        >
          <div className="grid gap-6 sm:grid-cols-[14rem_1fr] sm:items-start lg:grid-cols-1">
            <div className="plate max-w-[26rem]">
              <div className="sq shadow-[0_30px_50px_-30px_rgba(10,34,57,.7)]">
                <img src={loc.img} alt={`${loc.city} clinic reception`} loading="lazy" />
              </div>
            </div>
            <div className="rounded-[6px] bg-white p-7 shadow-[0_30px_60px_-34px_rgba(10,34,57,.55)]">
              <p className="eyebrow">{loc.city} clinic</p>
              <address className="mt-4 font-display text-xl font-light not-italic leading-snug">
                {loc.line1}
                <br />
                {loc.line2}
              </address>
              <a href={phoneHref} className="btn btn-dark-ghost btn-sm mt-4">{phone}</a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={bookUrl} className="btn btn-primary !px-5 !py-3">Book here</a>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener" className="btn btn-line !px-5 !py-3">Directions</a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[6px] shadow-[0_40px_70px_-36px_rgba(10,34,57,.7)] lg:min-h-full">
            <iframe
              title={`Map of the ${loc.city} clinic`}
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
