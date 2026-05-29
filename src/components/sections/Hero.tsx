import { motion, type Variants } from 'framer-motion';
import { ItalyFlag, KazakhstanFlag } from '../ui/Flag';

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

const titleContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.45 },
  },
};

const titleWord: Variants = {
  hidden: { y: 48, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

interface WordSpec {
  text: string;
  highlight?: boolean;
}

const lineA: WordSpec[] = [
  { text: 'Италия' },
  { text: '×', highlight: true },
  { text: 'Казахстан' },
];
const lineB: WordSpec[] = [
  { text: 'Инвестиционный', highlight: true },
  { text: 'форум', highlight: true },
];

function TitleLine({ words }: { words: WordSpec[] }) {
  return (
    <span className="block">
      {words.map((w, i) => (
        <motion.span
          key={`${w.text}-${i}`}
          variants={titleWord}
          className={`inline-block ${w.highlight ? 'italic text-gold-light' : ''} ${i > 0 ? 'ml-[0.3em]' : ''}`}
        >
          {w.text}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy pb-24 pt-16 text-cream"
    >
      {/* Video background — autoplay loop muted (browser autoplay req'd) */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark navy overlay for text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-navy/55" />

      {/* Soft radial overlay (gold tint) */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy" />

      <div className="container-x relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-gold-light"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_12px_currentColor]" />
          Флагманское событие 2026 · Астана
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-8 flex items-center justify-center gap-6"
        >
          <ItalyFlag className="h-[52px] w-20" />
          <span className="font-display text-3xl italic text-gold">×</span>
          <KazakhstanFlag className="h-[52px] w-20" />
        </motion.div>

        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="display-1 mx-auto max-w-5xl text-balance"
        >
          <TitleLine words={lineA} />
          <TitleLine words={lineB} />
        </motion.h1>

        {/* ★ BIG DATE BLOCK ★ */}
        <div className="my-10 md:my-14">
          {/* Top hairline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.3, ease: EASE_OUT_EXPO }}
            className="mx-auto h-px w-24 origin-center bg-gold/70"
          />

          {/* The huge numbers */}
          <motion.div
            initial={{ y: 40, opacity: 0, filter: 'blur(14px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 1.4, ease: EASE_OUT_EXPO }}
            className="mt-6 font-display font-bold leading-[0.85] tracking-[-0.04em] text-gold"
            style={{ fontSize: 'clamp(88px, 14vw, 232px)' }}
          >
            <span className="inline-block">29</span>
            <span className="mx-3 inline-block align-middle text-cream/60 md:mx-6">
              —
            </span>
            <span className="inline-block">30</span>
          </motion.div>

          {/* Month + year */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
            className="mt-3 font-display text-xl font-medium uppercase tracking-[0.45em] text-cream md:mt-5 md:text-3xl"
          >
            Июня · 2026
          </motion.div>

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.85 }}
            className="mt-4 text-[11px] uppercase tracking-[0.3em] text-cream/60 md:text-xs"
          >
            AIFC · Astana International Financial Centre
          </motion.div>

          {/* Bottom hairline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.95, ease: EASE_OUT_EXPO }}
            className="mx-auto mt-6 h-px w-24 origin-center bg-gold/70"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0 }}
          className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-cream/85"
        >
          Главное событие двустороннего экономического сотрудничества. Платформа
          прямого диалога между правительствами, корпорациями и инвесторами —
          прямые B2B-встречи итальянских корпораций с казахстанскими
          операторами и подписание соглашений в AIFC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#form" className="btn btn-primary">
            Подать заявку
          </a>
          <a href="#benefits" className="btn btn-ghost">
            Преимущества →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
