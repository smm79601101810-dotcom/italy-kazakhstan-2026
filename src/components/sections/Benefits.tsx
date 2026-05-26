import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { clsx } from 'clsx';

const LANGS = [
  { code: 'ru', short: 'RU', label: 'Русский' },
  { code: 'kz', short: 'KZ', label: 'Қазақша' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'it', short: 'IT', label: 'Italiano' },
] as const;

type Lang = (typeof LANGS)[number]['code'];

interface Content {
  eyebrow: string;
  title: string;
  bullets: string[];
  cta: string;
  apply: string;
}

const content: Record<Lang, Content> = {
  ru: {
    eyebrow: 'Что даёт участие',
    title: 'Преимущества участия',
    bullets: [
      'Инвесторы и оффтейк-партнёры',
      'B2B-переговоры',
      'Инвест-питчинг проектов',
      'Международные финансовые институты',
      'Новые рынки и цепочки поставок',
    ],
    cta: 'Подайте заявку и получите подбор потенциальных партнёров для Вашего бизнеса.',
    apply: 'Подать заявку',
  },
  kz: {
    eyebrow: 'Қатысу не береді',
    title: 'Қатысушыларға артықшылықтар',
    bullets: [
      'Инвесторлар мен оффтейк-серіктестер',
      'B2B келіссөздер',
      'Инвестициялық питчинг',
      'Халықаралық қаржы институттары',
      'Жаңа нарықтар мен жеткізу тізбектері',
    ],
    cta: 'Өтінім беріп, бизнесіңізге арналған әлеуетті серіктестер туралы ақпарат алыңыз.',
    apply: 'Өтінім беру',
  },
  en: {
    eyebrow: 'What participation gives you',
    title: 'Participant Benefits',
    bullets: [
      'Investors & offtake partners',
      'B2B networking meetings',
      'Investment pitching',
      'International financial institutions',
      'New markets & supply chains',
    ],
    cta: 'Apply now and receive potential partner matches for your business.',
    apply: 'Apply now',
  },
  it: {
    eyebrow: 'Cosa offre la partecipazione',
    title: 'Vantaggi per i partecipanti',
    bullets: [
      'Investitori e partner offtake',
      'Incontri B2B',
      'Pitching di investimento',
      'Istituzioni finanziarie internazionali',
      'Nuovi mercati e catene di approvvigionamento',
    ],
    cta: 'Candidati ora e ricevi una selezione di potenziali partner per il tuo business.',
    apply: 'Candidati ora',
  },
};

const icons = ['💼', '🤝', '🚀', '🏦', '🌐'];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

export default function Benefits() {
  const [lang, setLang] = useState<Lang>('ru');
  const c = content[lang];

  return (
    <section
      id="benefits"
      className="bg-gradient-to-b from-paper to-cream py-24 md:py-32"
    >
      <div className="container-x">
        {/* Header with language switcher */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <AnimatePresence mode="wait">
              <motion.span
                key={`eb-${lang}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="eyebrow inline-flex"
              >
                {c.eyebrow}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h2
                key={`h-${lang}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="display-2 mt-5 text-navy"
              >
                {c.title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Language pills */}
          <div
            role="tablist"
            aria-label="Язык / Language"
            className="flex items-center gap-1 rounded-full border border-ink/10 bg-white p-1 shadow-sm"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                role="tab"
                aria-selected={lang === l.code}
                onClick={() => setLang(l.code)}
                title={l.label}
                className={clsx(
                  'rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.12em] transition-colors',
                  lang === l.code
                    ? 'bg-navy text-cream shadow-md'
                    : 'text-ink/55 hover:text-navy',
                )}
              >
                {l.short}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits grid + CTA banner — animates on lang change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {c.bullets.map((b, i) => (
                <motion.div
                  key={`${lang}-${i}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  className="group flex flex-col rounded border border-ink/10 bg-white p-7 transition-all hover:-translate-y-1.5 hover:border-gold hover:shadow-2xl hover:shadow-navy/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-2xl transition-transform group-hover:scale-110">
                    {icons[i]}
                  </div>
                  <h4 className="font-display text-lg font-semibold leading-tight text-navy">
                    {b}
                  </h4>
                  <div className="mt-auto pt-5">
                    <span className="font-display text-xs font-semibold italic tracking-wide text-gold">
                      0{i + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA banner */}
            <div className="flex flex-col items-start justify-between gap-6 rounded bg-navy p-8 text-cream md:flex-row md:items-center md:gap-10 md:p-12">
              <p className="max-w-2xl font-display text-xl leading-snug text-cream/95 md:text-2xl">
                {c.cta}
              </p>
              <a href="#form" className="btn btn-primary whitespace-nowrap">
                {c.apply}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
