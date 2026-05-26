import { motion, type Variants } from 'framer-motion';

const flights = [
  {
    cls: 'Economy Class',
    name: 'Эконом',
    round: '€1.000',
    oneway: '€600',
    features: [
      'Багаж 23 кг + ручная кладь 8 кг',
      'Замена имени за 48 часов (сбор €240)',
      'Частичный возврат при отмене за 72 часа (–20% + €75)',
      'Вылет: 20 апреля 09:00 / возврат 23 апреля 21:00',
    ],
  },
  {
    cls: 'Premium Class',
    name: 'Премиум',
    round: '€1.500',
    oneway: '€850',
    premium: true,
    features: [
      'Выделенная регистрация на рейс',
      'Fast Track (MXP)',
      'Доступ в лаунж (MXP)',
      'Премиум-питание на борту',
      'Wi-Fi (subject to availability)',
    ],
  },
];

const hotels = [
  {
    stars: 5,
    name: 'Rixos President Astana',
    rooms: [
      ['Deluxe King (Single)', '€215'],
      ['Premium King', '€245'],
      ['Premium Twin', '€280'],
      ['Junior Suite', '€390'],
      ['Presidential Suite', '€1.150'],
    ],
    note: "★ Площадка SCF'26",
  },
  {
    stars: 5,
    name: 'Saad Hotel Astana',
    rooms: [
      ['Deluxe King (Single)', '€155'],
      ['Deluxe King (Double)', '€180'],
      ['Superior King (Single)', '€190'],
      ['Superior King (Double)', '€220'],
    ],
  },
  {
    stars: 4,
    name: 'Hilton Garden Inn',
    rooms: [
      ['Superior Standard (Single)', '€195'],
      ['Superior Standard (Double)', '€225'],
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Logistics() {
  return (
    <section id="logistics" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Логистика для итальянской делегации</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-4xl text-navy"
        >
          Чартер <em className="italic text-gold">Milan ↔ Astana</em> и отели по специальным тарифам
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Для участников из Италии организован выделенный чартер на апрельский форум SCF'26. Для июньского форума действуют корпоративные тарифы в отелях Астаны.
        </motion.p>

        {/* Charter intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid items-center gap-12 rounded bg-gradient-to-br from-navy to-navy-deep p-10 text-cream md:p-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <h3 className="mb-3 font-display text-3xl font-medium md:text-4xl">
              Dedicated Charter Flight
            </h3>
            <p className="text-[15px] leading-relaxed text-cream/80">
              Выделенный чартер Boeing 737 MAX, организованный специально для итальянской делегации SCF'26. Вылет из Милана 20 апреля, возврат 23 апреля.
            </p>
            <p className="mt-3 text-[13px] italic text-gold-light">
              Только для SCF'26 · апрель 2026
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 rounded bg-white/[0.06] p-6">
            <div className="text-center">
              <div className="font-display text-5xl font-semibold leading-none text-gold">
                MXP
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-cream/70">
                Milan Malpensa
              </div>
            </div>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="text-2xl text-gold"
            >
              ✈ →
            </motion.div>
            <div className="text-center">
              <div className="font-display text-5xl font-semibold leading-none text-gold">
                NQZ
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-cream/70">
                Astana
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flight tiers */}
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {flights.map((f, i) => (
            <motion.div
              key={f.cls}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`rounded border p-8 transition-all hover:border-gold hover:shadow-2xl hover:shadow-navy/10 ${
                f.premium
                  ? 'border-gold bg-gradient-to-b from-cream to-paper'
                  : 'border-ink/10 bg-white'
              }`}
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {f.cls}
              </div>
              <div className="mb-4 font-display text-3xl font-semibold text-navy">
                {f.name}
              </div>
              <div className="mb-5 grid grid-cols-2 gap-6 border-y border-ink/10 py-4">
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    Round trip
                  </div>
                  <strong className="font-display text-3xl font-semibold text-navy">
                    {f.round}
                  </strong>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    One-way
                  </div>
                  <strong className="font-display text-3xl font-semibold text-navy">
                    {f.oneway}
                  </strong>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm text-ink/70">
                {f.features.map((feat) => (
                  <li key={feat} className="flex gap-2">
                    <span className="text-green">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Hotels */}
        <span className="eyebrow">Размещение в Астане</span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 mt-4 font-display text-3xl font-semibold text-navy"
        >
          Корпоративные тарифы в отелях
        </motion.h3>

        <div className="grid gap-4 lg:grid-cols-3">
          {hotels.map((h, i) => (
            <motion.div
              key={h.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="overflow-hidden rounded border border-ink/10 bg-white"
            >
              <div className="bg-navy px-6 py-5 text-cream">
                <div className="mb-1.5 text-base tracking-[0.2em] text-gold">
                  {'★'.repeat(h.stars)}
                </div>
                <div className="font-display text-2xl font-semibold">{h.name}</div>
              </div>
              <div className="px-6 py-5">
                <ul>
                  {h.rooms.map(([room, price]) => (
                    <li
                      key={room}
                      className="flex justify-between border-b border-ink/10 py-2 text-sm text-ink/75 last:border-0"
                    >
                      <span>{room}</span>
                      <strong className="text-navy">{price}</strong>
                    </li>
                  ))}
                </ul>
                {h.note && (
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-green">
                    {h.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
