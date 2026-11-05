import { useEffect, useState } from 'react';

interface Row { day: string; open: string | null; close: string | null }
const fmt = (t: string) => { const [h, m] = t.split(':').map(Number); return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`; };

export default function OpenBadge({ hours, tz }: { hours: Row[]; tz: string }) {
  const [st, setSt] = useState<{ open: boolean; text: string } | null>(null);
  useEffect(() => {
    const calc = () => {
      const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
      const mins = (Number(get('hour')) % 24) * 60 + Number(get('minute'));
      const r = hours.find((x) => x.day === get('weekday'));
      if (!r || !r.open || !r.close) return setSt({ open: false, text: 'Closed today' });
      const [oh, om] = r.open.split(':').map(Number); const [ch, cm] = r.close.split(':').map(Number);
      setSt({ open: mins >= oh * 60 + om && mins < ch * 60 + cm, text: `Today ${fmt(r.open)} – ${fmt(r.close)}` });
    };
    calc(); const id = setInterval(calc, 60000); return () => clearInterval(id);
  }, [hours, tz]);
  if (!st) return <span className="inline-block h-6" />;
  return (
    <span className="inline-flex flex-wrap items-center gap-2 text-[0.85rem] text-white/80">
      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-display text-[0.68rem] font-medium uppercase tracking-[0.12em] ${st.open ? 'bg-emerald-400/20 text-emerald-300' : 'bg-white/10 text-white/60'}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${st.open ? 'bg-emerald-400' : 'bg-white/50'}`} aria-hidden="true" />{st.open ? 'Open now' : 'Closed now'}
      </span>
      <span>{st.text}</span>
    </span>
  );
}
