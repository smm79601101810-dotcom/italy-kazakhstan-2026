import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

// Common SVG attrs for all sector icons (Lucide outline, gold, 1.4px stroke)
const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-[24px] w-[24px]',
};

interface Sector {
  icon: ReactNode;
  label: string;
}

const sectors: Sector[] = [
  {
    // Fuel pump
    icon: (
      <svg {...svgProps}>
        <line x1="3" x2="15" y1="22" y2="22" />
        <line x1="4" x2="14" y1="9" y2="9" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
      </svg>
    ),
    label: 'Нефть и газ',
  },
  {
    // Leaf
    icon: (
      <svg {...svgProps}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.8.5C20 16 17 22 11 22Z" />
        <path d="M2 22 17 7" />
      </svg>
    ),
    label: 'Зелёная энергетика',
  },
  {
    // Wheat
    icon: (
      <svg {...svgProps}>
        <path d="M2 22 16 8" />
        <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
        <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      </svg>
    ),
    label: 'АПК',
  },
  {
    // Wine glass
    icon: (
      <svg {...svgProps}>
        <path d="M8 22h8" />
        <path d="M7 10h10" />
        <path d="M12 15v7" />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
      </svg>
    ),
    label: 'Food & Beverage',
  },
  {
    // Tractor
    icon: (
      <svg {...svgProps}>
        <path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
        <path d="M16 18h-5" />
        <path d="M18 5a1 1 0 0 0-1 1v5.573" />
        <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
        <path d="M4 11V4" />
        <path d="M7 15h.01" />
        <path d="M8 10.1V4" />
        <circle cx="18" cy="18" r="2" />
        <circle cx="7" cy="15" r="5" />
      </svg>
    ),
    label: 'Сельхозтехника',
  },
  {
    // Cog
    icon: (
      <svg {...svgProps}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: 'Механика',
  },
  {
    // Sofa / Armchair
    icon: (
      <svg {...svgProps}>
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
        <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
        <path d="M4 18v2" />
        <path d="M20 18v2" />
        <path d="M12 4v9" />
      </svg>
    ),
    label: 'Мебель',
  },
  {
    // Atom (biotech)
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="1" />
        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
      </svg>
    ),
    label: 'Биотех',
  },
  {
    // Truck
    icon: (
      <svg {...svgProps}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
    label: 'Логистика',
  },
  {
    // Shirt
    icon: (
      <svg {...svgProps}>
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
    label: 'Текстиль',
  },
  {
    // Cpu
    icon: (
      <svg {...svgProps}>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    ),
    label: 'Технологии',
  },
  {
    // ShoppingBag
    icon: (
      <svg {...svgProps}>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    label: 'Ритейл',
  },
];

const day1 = [
  ['09:00', 'Регистрация · Atrium C3.3'],
  ['10:00', 'Торжественное открытие · Trading Hall'],
  ['10:45', 'Пленарная сессия: инвест-климат'],
  ['12:00', 'Тематические круглые столы'],
  ['13:30', 'Деловой обед'],
  ['15:00', 'Best Practices Italia'],
  ['16:00', 'B2B-сессии · Туркестан / Самарканд'],
  ['19:00', 'Networking-приём'],
];

const day2 = [
  ['09:30', 'Продолжение B2B-встреч'],
  ['11:00', 'Питч-сессии проектов'],
  ['12:30', 'Сессия с ритейлерами'],
  ['13:30', 'Деловой обед'],
  ['15:00', 'Финальные B2B'],
  ['17:00', 'Подписание соглашений'],
  ['18:30', 'Закрытие форума'],
  ['20:00', '★ Гала-ужин — высокая казахская кухня'],
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.04 },
  }),
};

export default function B2B() {
  return (
    <section
      id="b2b"
      className="relative overflow-hidden bg-navy py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute -right-12 top-16 select-none font-display text-[18rem] font-medium leading-none text-gold/[0.05]">
        B2B·26
      </div>

      <div className="container-x relative">
        {/* Header */}
        <div className="mb-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow">Программа форума</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="display-2 mt-5 text-cream"
            >
              Инвестиционный форум{' '}
              <em className="italic text-gold-light">Италия–Казахстан</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 text-lg font-light leading-relaxed text-cream/75"
            >
              Ключевое событие двустороннего экономического сотрудничества. Платформа для прямого диалога между государствами, корпорациями и инвесторами. Главная миссия — превращение Казахстана в стратегический деловой хаб между Европой, Азией и США.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded bg-gradient-to-br from-gold to-amber-700 p-10 text-navy-deep shadow-2xl shadow-gold/20"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-white/15" />
            <div className="relative z-10">
              <div className="mb-6 text-xs uppercase tracking-[0.2em] opacity-85">
                Четверг–Пятница
              </div>
              <div className="mb-2 font-display text-5xl font-medium leading-none">
                11–12 <span className="text-xl font-normal opacity-85">июня</span>
              </div>
              <dl className="mt-8 divide-y divide-navy-deep/20">
                {[
                  ['Место', 'AIFC, Астана'],
                  ['Делегатов', '300+'],
                  ['Взнос', '€1.000'],
                  ['Регистрация', 'Открыта'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-4 text-sm">
                    <dt className="text-xs uppercase tracking-[0.1em] opacity-70">
                      {k}
                    </dt>
                    <dd className="font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Sectors */}
        <div className="mt-12">
          <span className="eyebrow">Приоритетные секторы</span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 mt-4 font-display text-3xl font-semibold text-cream"
          >
            12 отраслей в фокусе форума
          </motion.h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {sectors.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                className="group flex flex-col items-center rounded border border-gold/20 bg-white/[0.04] p-5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:bg-gold/[0.06]"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-gold/40 text-gold transition-all group-hover:border-gold group-hover:bg-gold/10 group-hover:scale-105">
                  {s.icon}
                </div>
                <h6 className="font-display text-base font-semibold text-cream">
                  {s.label}
                </h6>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2-day timeline */}
        <div className="mt-20">
          <span className="eyebrow">Программа</span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 mt-4 font-display text-3xl font-semibold text-cream"
          >
            Два дня стратегической работы
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { num: '11', day: 'Четверг · День 1', title: 'Инвестиционный форум', schedule: day1 },
              { num: '12', day: 'Пятница · День 2', title: 'B2B + Подписание', schedule: day2 },
            ].map((d, idx) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="rounded border border-gold/15 bg-white/[0.03] p-8"
              >
                <header className="mb-6 flex items-baseline gap-5 border-b border-gold/20 pb-5">
                  <span className="font-display text-6xl font-medium leading-none text-gold">
                    {d.num}
                  </span>
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-gold-light">
                      {d.day}
                    </div>
                    <strong className="font-display text-xl font-medium text-cream">
                      {d.title}
                    </strong>
                  </div>
                </header>
                <ul>
                  {d.schedule.map(([time, what]) => (
                    <li
                      key={time + what}
                      className="grid grid-cols-[70px_1fr] gap-3.5 border-b border-white/[0.06] py-3 text-sm last:border-0"
                    >
                      <time className="font-medium tabular-nums text-gold-light">
                        {time}
                      </time>
                      <span className="text-cream/85">{what}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
