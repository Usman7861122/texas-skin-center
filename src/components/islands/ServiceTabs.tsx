import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Item { t: string; d: string; href: string; img: string; cat: string }
interface Tab { id: string; label: string; blurb: string }
interface Props { tabs: Tab[]; items: Item[] }

export default function ServiceTabs({ tabs, items }: Props) {
  const [active, setActive] = useState(tabs[0].id);
  const shown = active === 'all' ? items : items.filter((i) => i.cat === active);
  const tab = tabs.find((t) => t.id === active)!;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
    setActive(tabs[n].id);
    (document.getElementById(`tab-${tabs[n].id}`) as HTMLElement | null)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Service categories" className="mx-auto flex max-w-fit flex-wrap justify-center gap-2 rounded-[10px] border border-ink/10 bg-white/70 p-2 shadow-[0_20px_40px_-26px_rgba(10,34,57,.5)] backdrop-blur">
        {tabs.map((t, i) => {
          const on = t.id === active;
          const count = t.id === 'all' ? items.length : items.filter((x) => x.cat === t.id).length;
          return (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              aria-selected={on}
              aria-controls="service-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative inline-flex items-center gap-3 rounded-[7px] px-5 py-2.5 font-display text-[0.9rem] font-medium transition ${on ? 'text-white' : 'text-ink/70 hover:text-ink'}`}
            >
              {on && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-[7px] bg-sapphire shadow-[0_12px_24px_-12px_rgba(27,111,184,.9)]" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span className="relative">{t.label}</span>
              <span className={`relative inline-grid h-6 min-w-[1.6rem] place-items-center rounded-full px-2 text-[0.72rem] leading-none ${on ? 'bg-white/20 text-white' : 'bg-ink/10 text-ink/70'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-ink/70" aria-live="polite">{tab.blurb}</p>

      <div id="service-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-12">
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className={`grid gap-6 lg:gap-8 ${shown.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'mx-auto max-w-md grid-cols-1'}`}
          >
            {shown.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="service lift group block rounded-[6px]" aria-label={`${s.t}: ${s.d}`}>
                  <div className="sq">
                    <img src={s.img} alt={`${s.t} at Texas Skin Center`} loading="lazy" />
                    <div className="veil"></div>
                    <span className="go" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </span>
                    <div className="copy">
                      <h3 className="font-display text-[1.35rem] font-medium leading-tight">{s.t}</h3>
                      <p className="desc mt-2 text-[0.95rem] leading-snug text-white/85">{s.d}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
