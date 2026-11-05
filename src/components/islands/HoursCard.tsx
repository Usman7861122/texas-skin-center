import { useEffect, useState } from 'react';

interface Row { day: string; open: string | null; close: string | null }
interface Props { hours: Row[]; tz: string }

const fmt = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  const ap = h >= 12 ? 'PM' : 'AM';
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${ap}`;
};

export default function HoursCard({ hours, tz }: Props) {
  const [today, setToday] = useState<string | null>(null);
  const [openNow, setOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    const calc = () => {
      const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
      const day = get('weekday');
      const mins = (Number(get('hour')) % 24) * 60 + Number(get('minute'));
      const row = hours.find((r) => r.day === day);
      setToday(day);
      if (!row || !row.open || !row.close) return setOpenNow(false);
      const [oh, om] = row.open.split(':').map(Number);
      const [ch, cm] = row.close.split(':').map(Number);
      setOpenNow(mins >= oh * 60 + om && mins < ch * 60 + cm);
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, [hours, tz]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">Opening hours</p>
        {openNow !== null && (
          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-display text-[0.72rem] font-medium uppercase tracking-[0.14em] ${openNow ? 'bg-emerald-500/15 text-emerald-700' : 'bg-ink/10 text-ink/60'}`}>
            <span className={`h-2 w-2 rounded-full ${openNow ? 'bg-emerald-500' : 'bg-ink/40'}`} aria-hidden="true" />
            {openNow ? 'Open now' : 'Closed now'}
          </span>
        )}
      </div>
      <ul className="mt-5 divide-y divide-ink/10">
        {hours.map((r) => {
          const isToday = r.day === today;
          return (
            <li key={r.day} className={`flex items-center justify-between gap-4 py-3 ${isToday ? '-mx-3 rounded-[6px] bg-ice px-3' : ''}`}>
              <span className="flex items-center gap-3">
                <span className={`font-display text-[0.98rem] ${isToday ? 'font-semibold text-sapphire' : 'text-ink'}`}>{r.day}</span>
                {isToday && <span className="rounded-[4px] bg-sapphire px-2 py-0.5 font-display text-[0.66rem] font-medium uppercase tracking-[0.14em] text-white">Today</span>}
              </span>
              <span className={`text-[0.95rem] ${r.open ? (isToday ? 'font-medium text-ink' : 'text-ink/75') : 'text-ink/45'}`}>
                {r.open && r.close ? `${fmt(r.open)} – ${fmt(r.close)}` : 'Closed'}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
