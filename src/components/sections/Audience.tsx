import { motion, type Variants } from 'framer-motion';

const profiles = [
  {
    icon: '🏛',
    title: 'Госорганы и институты',
    bullets: [
      'Прямой G2G-диалог',
      'Формирование Project Needs List',
      'Институциональные соглашения',
      'Связь торговли, индустрии и транспорта',
    ],
  },
  {
    icon: '🏭',
    title: 'Нац. компании и операторы',
    bullets: [
      'Презентация проектов инвесторам',
      'Поиск технологических партнёров',
      'Нефтехимия, энергетика, инфраструктура',
      'Локализация производства',
    ],
  },
  {
    icon: '🔧',
    title: 'EPC и инжиниринг',
    bullets: [
      'Доступ к procurement-потребностям',
      'Точки входа в цепочки поставок',
      'Прямой контакт с владельцами проектов',
      'Поставщики и подрядчики',
    ],
  },
  {
    icon: '🚛',
    title: 'Логистика и коридоры',
    bullets: [
      'Развитие Среднего коридора',
      'Таможня и facilitation',
      'Терминалы и операторы',
      'Связки Европа–Азия',
    ],
  },
  {
    icon: '💰',
    title: 'Финансовые институты',
    bullets: [
      'Инвестиции и фонд с SIMEST',
      'Страхование и экспортная поддержка',
      'Снижение рисков',
      'Прозрачность отрасли',
    ],
  },
  {
    icon: '⚡',
    title: 'Технологические поставщики',
    bullets: [
      'Трансфер технологий KZ ↔ IT',
      'Прямые B2B-встречи',
      'Офтейк-контракты с ритейлом',
      'Выход на рынок Центральной Азии',
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
        <span className="eyebrow">Для кого эти форумы</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Шесть профилей участников,{' '}
          <em className="italic text-gold">один результат</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Программа форума спроектирована под конкретные роли. Каждый профиль получает прямой доступ к релевантным контактам, проектам и инструментам — без посредников.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="border-t-[3px] border-gold bg-white p-8 transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-2xl">
                {p.icon}
              </div>
              <h4 className="mb-4 font-display text-2xl font-semibold text-navy">
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
