import { motion } from 'framer-motion';

type DotColor = 'gold' | 'default';

interface Point {
  date: string;
  event: string;
  color: DotColor;
}

const points: Point[] = [
  { date: 'Сейчас', event: 'Регистрация открыта', color: 'default' },
  { date: 'До форума', event: 'Мэтчинг с операторами', color: 'default' },
  { date: '11 июня', event: 'День 1 · Открытие, питчинг, B2B', color: 'gold' },
  { date: '12 июня', event: 'День 2 · B2B и подписание', color: 'gold' },
  { date: '12 июня', event: 'Гала-ужин · казахская кухня', color: 'gold' },
];

const dotClass: Record<DotColor, string> = {
  gold: 'bg-gold shadow-[0_0_22px_theme(colors.gold.DEFAULT)]',
  default: 'bg-navy',
};

const labelClass: Record<DotColor, string> = {
  gold: 'text-navy',
  default: 'text-navy',
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow inline-flex"
          >
            Дорожная карта 2026
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="display-2 mx-auto mt-5 max-w-3xl text-navy"
          >
            От <em className="italic text-gold">диалога</em>{' '}
            к <em className="italic text-gold">инвестициям</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mx-auto mt-5 mb-16 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
          >
            Пять ключевых вех на пути к Investment Forum в Астане. От открытой регистрации до подписания соглашений и гала-ужина.
          </motion.p>
        </div>

        <div className="relative mt-14">
          {/* Animated progress line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-0.5 origin-left bg-gradient-to-r from-navy via-navy to-gold md:block"
          />
          <div className="grid gap-y-10 md:flex md:justify-between md:gap-y-0">
            {points.map((p, i) => (
              <motion.div
                key={p.date}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="relative flex items-start gap-4 md:flex-1 md:flex-col md:items-center md:px-3 md:text-center"
              >
                <span
                  className={`relative z-10 h-4 w-4 shrink-0 rounded-full ring-2 ring-offset-4 ring-offset-paper md:mb-5 ${dotClass[p.color]} ${
                    p.color === 'gold' ? 'ring-gold' : 'ring-navy'
                  }`}
                />
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-ink/50">
                    {p.date}
                  </div>
                  <div
                    className={`font-display text-base font-semibold leading-tight ${labelClass[p.color]}`}
                  >
                    {p.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
