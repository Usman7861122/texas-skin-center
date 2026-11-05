import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const fields = [
  { name: 'name', label: 'Full name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: false },
  { name: 'subject', label: 'Subject', type: 'text', required: false },
];

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    // TODO: connect to the form service (e.g. Formspree, Resend or your own endpoint).
    await new Promise((r) => setTimeout(r, 900));
    setState('sent');
  }

  return (
    <div className="relative rounded-[6px] bg-white/90 p-7 shadow-[0_50px_90px_-40px_rgba(10,34,57,.7)] backdrop-blur-xl md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {state === 'sent' ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="grid min-h-[26rem] place-items-center text-center" role="status">
            <div>
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-[6px] bg-sapphire text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12l5 5 9-10" /></svg>
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium">Message sent</h3>
              <p className="mx-auto mt-2 max-w-xs text-ink/65">Thank you. Our team will contact you soon. For urgent needs, call 346-888-4400.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.name} className="field">
                <input id={f.name} name={f.name} type={f.type} required={f.required} placeholder=" " autoComplete={f.name === 'name' ? 'name' : f.name} />
                <label htmlFor={f.name}>{f.label}{f.required ? ' *' : ''}</label>
              </div>
            ))}
            <div className="field sm:col-span-2">
              <textarea id="message" name="message" rows={5} required placeholder=" " />
              <label htmlFor="message">How can we help? *</label>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
              <p className="max-w-xs text-xs text-ink/50">Please do not include sensitive medical details. Call us for urgent concerns.</p>
              <button type="submit" disabled={state === 'sending'} className="btn btn-primary min-w-40 disabled:opacity-70">
                {state === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
