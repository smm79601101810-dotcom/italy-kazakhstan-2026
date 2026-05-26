import { useState, type ReactNode } from 'react';
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

// Inline SVG icons (Lucide-style outline, 1.4px stroke, gold color)
// — no external deps, ~2 KB total in bundle
const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-[26px] w-[26px]',
};

const icons: ReactNode[] = [
  // 01 — Investors / TrendingUp with arrow
  <svg key="investors" {...svgProps}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>,
  // 02 — Handshake (B2B negotiations)
  <svg key="b2b" {...svgProps}>
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>,
  // 03 — Rocket (investment pitching)
  <svg key="pitch" {...svgProps}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // 04 — Landmark (financial institutions)
  <svg key="finance" {...svgProps}>
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>,
  // 05 — Globe (new markets / supply chains)
  <svg key="markets" {...svgProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>,
];

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
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-gold/40 text-gold transition-all group-hover:border-gold group-hover:bg-gold/5 group-hover:scale-105">
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
