import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

// Inline SVG props for Lucide-style outline icons
const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-[26px] w-[26px]',
};

interface Profile {
  icon: ReactNode;
  title: string;
  bullets: string[];
}

const profiles: Profile[] = [
  {
    // Zap / lightning — energy & transport
    icon: (
      <svg {...svgProps}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Энергетика, транспорт, инфраструктура',
    bullets: [
      'Энергопереход и зелёная энергетика',
      'Развитие транспортных коридоров',
      'Инфраструктурные проекты',
      'Партнёрства с операторами сетей',
    ],
  },
  {
    // Sprout — agro & food
    icon: (
      <svg {...svgProps}>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
    title: 'АПК и пищевая промышленность',
    bullets: [
      'Сельхозтехника и оборудование',
      'Food & Beverage производство',
      'Экспортные цепочки в ЕС',
      'Локализация переработки',
    ],
  },
  {
    // Sparkles — fashion, beauty, tourism
    icon: (
      <svg {...svgProps}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    ),
    title: 'Мода, красота, туризм, косметика',
    bullets: [
      'Made in Italy lifestyle-бренды',
      'Гостеприимство и туризм',
      'Косметика и парфюмерия',
      'Розничная экспансия в Центральной Азии',
    ],
  },
  {
    // Building2 — construction & manufacturing
    icon: (
      <svg {...svgProps}>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
    title: 'Строительство, обрабатывающая промышленность',
    bullets: [
      'Машиностроение и механика',
      'Строительные технологии',
      'Текстиль и обработка',
      'Локализация производства',
    ],
  },
  {
    // Landmark — finance, investment, government
    icon: (
      <svg {...svgProps}>
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
    title: 'Инвестиции, финансы, госорганы',
    bullets: [
      'Прямой G2G-диалог',
      'Совместный фонд с SIMEST',
      'Институциональные соглашения',
      'Финансовая инфраструктура',
    ],
  },
  {
    // GraduationCap — science, education, innovation
    icon: (
      <svg {...svgProps}>
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
    title: 'Наука, образование, инновации',
    bullets: [
      'Университетское партнёрство',
      'R&D и инновации',
      'Бизнес-школы (LUISS, Bocconi)',
      'Трансфер технологий',
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07 },
  }),
};

export default function Audience() {
  return (
    <section id="audience" className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Для кого этот форум</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Шесть отраслей,{' '}
          <em className="italic text-gold">один результат</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Программа форума спроектирована под конкретные индустрии. Каждое
          направление получает прямой доступ к релевантным контактам, проектам
          и инструментам — без посредников.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="group border-t-[3px] border-gold bg-white p-8 transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-gold/40 text-gold transition-all group-hover:border-gold group-hover:bg-gold/5 group-hover:scale-105">
                {p.icon}
              </div>
              <h4 className="mb-5 font-display text-xl font-semibold leading-tight text-navy min-h-[3.5rem]">
                {p.title}
              </h4>
              <ul className="space-y-1.5">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-[13px] leading-snug text-ink/70"
                  >
                    <span className="shrink-0 text-gold">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
