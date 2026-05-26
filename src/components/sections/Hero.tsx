import { motion, type Variants } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { ItalyFlag, KazakhstanFlag } from '../ui/Flag';

// Lazy-load the Three.js scene so it ships in a separate chunk
const ParticleScene = lazy(() => import('../three/ParticleScene'));

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
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy pb-28 pt-20 text-cream"
    >
      {/* 3D particle background — lazy chunk */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <Suspense fallback={null}>
          <ParticleScene count={2500} />
        </Suspense>
      </div>

      {/* Soft radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy/80" />

      <div className="container-x relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/40 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-gold-light"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_12px_currentColor]" />
          Флагманское событие · Астана · 11–12 июня 2026
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-10 flex items-center justify-center gap-6"
        >
          <ItalyFlag className="h-[52px] w-20" />
          <span className="font-display text-3xl italic text-gold">×</span>
          <KazakhstanFlag className="h-[52px] w-20" />
        </motion.div>

        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="display-1 mx-auto mb-4 max-w-5xl text-balance"
        >
          <TitleLine words={lineA} />
          <TitleLine words={lineB} />
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto my-8 h-0.5 w-16 origin-center bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
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
          transition={{ duration: 0.7, delay: 1.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#form" className="btn btn-primary">
            Подать заявку
          </a>
          <a href="#roadmap" className="btn btn-ghost">
            Программа →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
