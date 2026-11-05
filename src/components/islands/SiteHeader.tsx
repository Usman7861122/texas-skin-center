import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

type Child = { label: string; href: string; desc?: string; img?: string };
type NavItem = { label: string; href: string; children?: Child[] };
interface Props {
  nav: NavItem[];
  bookUrl: string;
  payUrl: string;
  phone: string;
  phoneHref: string;
  logo: string;
  path: string;
}

const Chevron = ({ open }: { open?: boolean }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden>
    <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function SiteHeader({ nav, bookUrl, payUrl, phone, phoneHref, logo, path }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
  }, [mobile]);

  const light = !scrolled && !mobile; // transparent over hero → white text

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress */}
      <motion.div style={{ scaleX: bar }} className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left bg-gradient-to-r from-sapphire via-sky to-sand" />

      {/* top bar: appointment, phone, pay online (same structure as current site) */}
      <motion.div
        animate={{ height: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.35 }}
        className="hidden overflow-hidden bg-ink/90 text-white backdrop-blur md:block"
      >
        <div className="mx-auto flex h-11 max-w-[84rem] items-center justify-between px-6 text-[0.8rem]">
          <p className="font-display tracking-[0.14em] text-white/70">DERMATOLOGY · PEARLAND · HOUSTON · KINGWOOD</p>
          <div className="flex items-center gap-5">
            <a href={payUrl} className="btn btn-chip !px-3 !py-1 !text-[0.78rem]">Pay Online</a>
            <a href={phoneHref} className="btn btn-chip !px-3 !py-1 !text-[0.78rem]">{phone}</a>
            <a href="/contact-us" className="rounded-[6px] bg-sapphire px-4 py-1.5 font-display font-medium transition hover:bg-sky hover:text-ink">Contact</a>
          </div>
        </div>
      </motion.div>

      {/* main bar */}
      <div
        className={`relative transition-all duration-500 ${
          scrolled || mobile ? 'bg-white/90 shadow-[0_12px_40px_-18px_rgba(10,34,57,.45)] backdrop-blur-xl' : 'bg-gradient-to-b from-ink/55 to-transparent'
        }`}
      >
        <div className={`mx-auto flex max-w-[84rem] items-center justify-between px-6 transition-all duration-500 ${scrolled ? 'h-[4.25rem]' : 'h-24'}`}>
          <a href="/" aria-label="Texas Skin Center home" className="shrink-0">
            <img src={logo} alt="Texas Skin Center" className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-10'} w-auto ${light ? 'logo-white' : ''}`} />
          </a>

          <nav aria-label="Main" className="hidden h-full items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = item.href === '/' ? path === '/' : path.startsWith(item.href);
              return (
                <div
                  key={item.label}
                  className={`flex h-full items-center ${item.children && item.children.length <= 2 ? 'relative' : ''}`}
                  onMouseEnter={() => item.children && setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <a
                    href={item.href}
                    className={`group relative flex items-center gap-1.5 px-4 py-3 font-display text-[0.86rem] font-medium tracking-wide transition-colors ${
                      light ? 'text-white' : 'text-ink'
                    } hover:text-sapphire ${light ? 'hover:!text-sand' : ''}`}
                    aria-haspopup={item.children ? 'true' : undefined}
                    aria-expanded={item.children ? open === item.label : undefined}
                  >
                    {item.label}
                    {item.children && <Chevron open={open === item.label} />}
                    <span
                      className={`absolute inset-x-4 bottom-1.5 h-px origin-left bg-current transition-transform duration-500 ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                  <AnimatePresence>
                    {item.children && open === item.label && (
                      <MegaPanel item={item} bookUrl={bookUrl} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <a href={bookUrl} className="btn btn-primary ml-4 !py-2.5 !text-[0.82rem]">Book Appointment</a>
          </nav>

          <button
            className={`lg:hidden p-2 ${light ? 'text-white' : 'text-ink'}`}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            <span className="block w-7">
              <span className={`block h-0.5 bg-current transition ${mobile ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`mt-[5px] block h-0.5 bg-current transition ${mobile ? 'opacity-0' : ''}`} />
              <span className={`mt-[5px] block h-0.5 bg-current transition ${mobile ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-[4.25rem] overflow-y-auto bg-white px-6 pb-10 pt-4 lg:hidden"
          >
            {nav.map((item) => (
              <div key={item.label} className="border-b border-ink/10">
                <div className="flex items-center justify-between">
                  <a href={item.href} className="block flex-1 py-4 font-display text-lg" onClick={() => setMobile(false)}>{item.label}</a>
                  {item.children && (
                    <button aria-label={`Toggle ${item.label}`} className="p-3" onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}>
                      <Chevron open={mobileSub === item.label} />
                    </button>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {item.children && mobileSub === item.label && (
                    <motion.ul initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      {item.children.map((c) => (
                        <li key={c.label}><a href={c.href} className="block py-2.5 pl-4 text-ink/70" onClick={() => setMobile(false)}>{c.label}</a></li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="mt-8 grid gap-3">
              <a href={bookUrl} className="btn btn-primary">Book Appointment</a>
              <a href={phoneHref} className="btn btn-line">{phone}</a>
              <a href={payUrl} className="btn btn-line">Pay Online</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


const ICONS: Record<string, string> = {
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
  syringe: 'M18 3l3 3M16 5l3 3M14 7l3 3-8 8H6v-3zM6 18l-3 3',
  wave: 'M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0',
  shield: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
};
const iconFor = (href: string) => {
  const k = href.split('/').pop() ?? '';
  if (k === 'acne' || k === 'rosacea') return 'drop';
  if (k === 'actinic-keratosis') return 'sun';
  if (k === 'botox' || k === 'fillers') return 'syringe';
  if (k === 'eczema') return 'shield';
  if (k === 'hair-loss-prp') return 'wave';
  if (k === 'services') return 'arrow';
  return 'spark';
};
const Ico = ({ d }: { d: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={d} /></svg>
);
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d={ICONS.arrow} /></svg>
);

function MegaPanel({ item, bookUrl }: { item: NavItem; bookUrl: string }) {
  const people = item.label === 'Providers';
  const places = item.label === 'Locations';
  const kids = item.children ?? [];
  if (kids.length <= 2) {
    return (
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-full min-w-[12rem] rounded-[8px] border border-ink/5 bg-white p-2 shadow-[0_30px_60px_-20px_rgba(10,34,57,.45)]"
      >
        {kids.map((c) => (
          <li key={c.label}>
            <a href={c.href} className="block rounded-[4px] px-4 py-2.5 text-[0.9rem] text-ink transition hover:bg-ice hover:pl-5 hover:text-sapphire">{c.label}</a>
          </li>
        ))}
      </motion.ul>
    );
  }

  const card =
    'group relative flex h-full items-center gap-3.5 overflow-hidden rounded-[8px] border border-ink/[0.07] bg-white p-3.5 shadow-[0_1px_2px_rgba(10,34,57,.05)] transition duration-300 hover:-translate-y-0.5 hover:border-sapphire/35 hover:shadow-[0_18px_34px_-18px_rgba(27,111,184,.55)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.2 }}
      className={`absolute left-1/2 top-full -translate-x-1/2 ${places ? 'w-[46rem]' : people ? 'w-[54rem]' : 'w-[62rem]'} max-w-[calc(100vw-3rem)]`}
    >
      <div className="grid gap-3 rounded-[10px] border border-white/60 bg-gradient-to-br from-white to-mist p-3 shadow-[0_40px_80px_-24px_rgba(10,34,57,.55)] grid-cols-[15rem_1fr]">
        {/* feature card */}
        <div className="relative flex min-h-[15rem] flex-col justify-end overflow-hidden rounded-[8px] bg-ink p-5 text-white">
          <img
            src={places ? '/images/Reception-scaled-e1761820773898.jpg' : people ? '/images/DSC00535-scaled.jpg' : '/images/stock/peels.jpg'}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            style={{ objectPosition: people ? '50% 25%' : '50% 30%' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
          <div className="relative">
            <p className="font-display text-[0.66rem] uppercase tracking-[0.22em] text-sand">{places ? 'Our clinics' : people ? 'Our team' : 'Our services'}</p>
            <p className="mt-2 font-display text-[1.1rem] font-medium leading-snug">{places ? 'Three clinics, close to home' : people ? 'Meet the people who care for your skin' : 'Everything your skin needs, under one roof'}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={bookUrl} className="btn btn-primary btn-sm">Book a visit</a>
              <a href={item.href} className="btn btn-chip">{places ? 'All locations' : people ? 'Full team' : 'All services'}</a>
            </div>
          </div>
        </div>

        <ul className={`grid content-start gap-2.5 ${places ? 'grid-cols-1' : people ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {kids.map((c, i) => (
            <motion.li key={c.label} className={people && i === kids.length - 1 && kids.length % 2 ? 'col-span-2' : ''} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}>
              <a href={c.href} className={card}>
                {(people || places) && c.img ? (
                  <img src={c.img} alt="" className={`shrink-0 rounded-[6px] object-cover ${places ? 'h-14 w-20' : 'h-12 w-12 object-top'}`} loading="lazy" />
                ) : (
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-ice text-sapphire transition duration-300 group-hover:bg-sapphire group-hover:text-white">
                    <Ico d={ICONS[iconFor(c.href)]} />
                  </span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[0.86rem] font-medium leading-tight text-ink">{c.label}</span>
                  {c.desc && <span className="mt-1 block text-[0.75rem] leading-snug text-ink/55">{c.desc}</span>}
                </span>
                <span className="text-sapphire opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"><Arrow /></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
