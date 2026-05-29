import { motion, type Variants } from 'framer-motion';

const hotels = [
  {
    stars: 5,
    name: 'Rixos President Astana',
    rooms: [
      ['Deluxe King (Single)', '129 000 ₸'],
      ['Premium King', '147 000 ₸'],
      ['Premium Twin', '168 000 ₸'],
      ['Junior Suite', '234 000 ₸'],
      ['Presidential Suite', '690 000 ₸'],
    ],
    note: '★ Партнёрский отель форума',
  },
  {
    stars: 5,
    name: 'Saad Hotel Astana',
    rooms: [
      ['Deluxe King (Single)', '93 000 ₸'],
      ['Deluxe King (Double)', '108 000 ₸'],
      ['Superior King (Single)', '114 000 ₸'],
      ['Superior King (Double)', '132 000 ₸'],
    ],
  },
  {
    stars: 4,
    name: 'Hilton Garden Inn',
    rooms: [
      ['Superior Standard (Single)', '117 000 ₸'],
      ['Superior Standard (Double)', '135 000 ₸'],
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
        <span className="eyebrow">Размещение в Астане · корпоративные тарифы</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-4xl text-navy"
        >
          Отели по <em className="italic text-gold">специальным тарифам</em> для участников форума
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Для всех делегатов Investment Forum 11–12 июня 2026 года действуют корпоративные тарифы в отелях Астаны. Размещение бронируется через оргкомитет — укажите интерес в форме регистрации.
        </motion.p>

        <div className="grid gap-4 lg:grid-cols-3">
          {hotels.map((h, i) => (
            <motion.div
              key={h.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="overflow-hidden rounded border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/10"
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
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
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
