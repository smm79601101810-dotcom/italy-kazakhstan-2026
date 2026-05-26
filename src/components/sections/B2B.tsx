import { motion, type Variants } from 'framer-motion';

const sectors = [
  { icon: '⛽', label: 'Нефть и газ' },
  { icon: '🌱', label: 'Зелёная энергетика' },
  { icon: '🌾', label: 'АПК' },
  { icon: '🍇', label: 'Food & Beverage' },
  { icon: '🚜', label: 'Сельхозтехника' },
  { icon: '⚙', label: 'Механика' },
  { icon: '🛋', label: 'Мебель' },
  { icon: '🧬', label: 'Биотех' },
  { icon: '🚛', label: 'Логистика' },
  { icon: '🧵', label: 'Текстиль' },
  { icon: '💡', label: 'Технологии' },
  { icon: '🛒', label: 'Ритейл' },
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
            <span className="eyebrow">Event 02 · Investment Forum</span>
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
                  ['Дедлайн', '24 апреля 2026'],
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
                className="rounded border border-gold/20 bg-white/[0.04] p-5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:bg-gold/10"
              >
                <div className="mb-2 text-2xl">{s.icon}</div>
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
