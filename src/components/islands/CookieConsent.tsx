import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Prefs = { necessary: true; preferences: boolean; analytics: boolean; marketing: boolean };
const KEY = 'tsc-consent-v1';
const none: Prefs = { necessary: true, preferences: false, analytics: false, marketing: false };
const all: Prefs = { necessary: true, preferences: true, analytics: true, marketing: true };

const cats: { id: keyof Omit<Prefs, 'necessary'>; title: string; text: string }[] = [
  { id: 'preferences', title: 'Preferences', text: 'Remember choices such as your language or the last clinic you looked at.' },
  { id: 'analytics', title: 'Analytics', text: 'Help us see which pages are useful, so we can improve the site. Data is grouped and does not name you.' },
  { id: 'marketing', title: 'Marketing', text: 'Let us and our partners measure ads and show you more relevant information.' },
];

function save(p: Prefs) {
  const data = { ...p, ts: Date.now() };
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
  document.cookie = `${KEY}=${encodeURIComponent(JSON.stringify(p))}; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent('tsc:consent', { detail: p }));
}
function load(): Prefs | null {
  try { const r = localStorage.getItem(KEY); return r ? (JSON.parse(r) as Prefs) : null; } catch { return null; }
}

function Toggle({ on, onChange, locked, label }: { on: boolean; onChange?: (v: boolean) => void; locked?: boolean; label: string }) {
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} disabled={locked} onClick={() => onChange?.(!on)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${on ? 'bg-sapphire' : 'bg-ink/20'} ${locked ? 'opacity-60' : ''}`}>
      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? 'left-6' : 'left-1'}`} />
    </button>
  );
}

export default function CookieConsent() {
  const [view, setView] = useState<'closed' | 'banner' | 'modal'>('closed');
  const [prefs, setPrefs] = useState<Prefs>(none);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = load();
    const gpc = (navigator as any).globalPrivacyControl === true;
    if (saved) { setPrefs(saved); }
    else {
      if (gpc) setPrefs({ ...none });
      const t = setTimeout(() => setView('banner'), 700);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const open = () => { setPrefs(load() ?? none); setView('modal'); };
    window.addEventListener('tsc:open-cookies', open);
    return () => window.removeEventListener('tsc:open-cookies', open);
  }, []);

  useEffect(() => {
    if (view !== 'modal') return;
    dialog.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setView(load() ? 'closed' : 'banner'); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [view]);

  const choose = (p: Prefs) => { setPrefs(p); save(p); setView('closed'); };

  return (
    <>
      <AnimatePresence>
        {view === 'banner' && (
          <motion.div key="b" role="region" aria-label="Cookie notice" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.45 }}
            className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-4xl rounded-[10px] bg-white p-6 shadow-[0_30px_80px_-20px_rgba(10,34,57,.55)] ring-1 ring-ink/10 md:bottom-5 md:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
              <div className="flex-1">
                <p className="font-display text-lg font-medium">We use cookies</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">Some are needed to run the site. Others help us improve it. You choose. Read our <a href="/cookie-policy" className="text-sapphire underline underline-offset-2">Cookie Policy</a>.</p>
              </div>
              <div className="flex flex-wrap gap-2.5 md:justify-end">
                <button className="btn btn-primary btn-sm" onClick={() => choose(all)}>Accept all</button>
                <button className="btn btn-dark-ghost btn-sm" onClick={() => choose(none)}>Reject non-essential</button>
                <button className="btn btn-dark-ghost btn-sm" onClick={() => setView('modal')}>Customize</button>
              </div>
            </div>
          </motion.div>
        )}
        {view === 'modal' && (
          <motion.div key="m" className="fixed inset-0 z-[95] grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setView(load() ? 'closed' : 'banner')} />
            <motion.div ref={dialog} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="ck-title" initial={{ y: 24, scale: 0.97 }} animate={{ y: 0, scale: 1 }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[10px] bg-white p-7 shadow-[0_50px_100px_-30px_rgba(10,34,57,.7)] outline-none md:p-9">
              <h2 id="ck-title" className="font-display text-2xl font-medium">Cookie settings</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">Choose which cookies we may use. You can change this at any time from the footer.</p>
              <ul className="mt-6 divide-y divide-ink/10">
                <li className="flex items-start justify-between gap-5 py-4">
                  <div><p className="font-display font-medium">Strictly necessary</p><p className="mt-1 text-sm text-ink/65">Needed for security, forms and saving this choice. Always on.</p></div>
                  <Toggle on locked label="Strictly necessary cookies, always on" />
                </li>
                {cats.map((c) => (
                  <li key={c.id} className="flex items-start justify-between gap-5 py-4">
                    <div><p className="font-display font-medium">{c.title}</p><p className="mt-1 text-sm text-ink/65">{c.text}</p></div>
                    <Toggle on={prefs[c.id]} onChange={(v) => setPrefs({ ...prefs, [c.id]: v })} label={`${c.title} cookies`} />
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-ink/50">Maps on our clinic pages come from Google and may set their own cookies.</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <button className="btn btn-primary btn-sm" onClick={() => choose(prefs)}>Save my choices</button>
                <button className="btn btn-dark-ghost btn-sm" onClick={() => choose(all)}>Accept all</button>
                <button className="btn btn-dark-ghost btn-sm" onClick={() => choose(none)}>Reject non-essential</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
