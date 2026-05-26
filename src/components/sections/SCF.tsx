import { motion, type Variants } from 'framer-motion';

const focusAreas = [
  {
    num: '01',
    title: 'Energy Transition & Petrochemical',
    desc: 'Энергопереход и нефтехимия: технологии, локализация, цепочки поставок',
  },
  {
    num: '02',
    title: 'Logistics & Transport Corridors',
    desc: 'Логистика и транспортные коридоры, развитие Среднего коридора',
  },
  {
    num: '03',
    title: 'Sustainable Aviation Fuel',
    desc: 'Устойчивое авиационное топливо (SAF) — формирующаяся цепочка ценности',
  },
  {
    num: '04',
    title: 'Other Industries Opportunity',
    desc: 'Кросс-отраслевые возможности для технологических партнёрств',
  },
];

const sessions = [
  {
    time: '09:00',
    kind: 'Session 1',
    title: 'Institutional Opening Remarks',
    desc: 'Central Asia Energy Transition and the Role of Supply Chains in delivery and sustainability',
    tag: 'Открытие',
  },
  {
    time: '10:30',
    kind: 'Session 2 · Panel',
    title: 'Smart Solutions in the Middle Corridor',
    desc: 'Implementing Energy Transition and Raw Material Transformation through Smart Solutions',
    tag: 'Панель',
  },
  {
    time: '11:30',
    kind: 'Session 3 · ACIK Talks',
    title: 'Supply Chain Case Study Discussion',
    desc: 'Пять кейс-стади по нефтехимии, SAF, экспорту, Среднему коридору и возобновляемой энергетике',
    tag: 'Case Studies',
  },
];

const cases = [
  'Assessing Petrochemical Local Supply Chain Readiness — оценка готовности локальной цепочки поставок нефтехимии.',
  'Leveraging Local Feedstocks for Sustainable Aviation Fuel (SAF) Production — использование локального сырья для производства SAF.',
  'Meeting Local Needs and Seizing Worldwide Export Opportunities — удовлетворение локального спроса и глобальный экспорт.',
  'Middle Corridor Development — расширение экспорта и рост локального производства через Средний коридор.',
  'Renewable Energy vs Traditional Ones — переход от угля к газу в энергогенерации как возможность индустриализации страны.',
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function SCF() {
  return (
    <section
      id="scf"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f0faf2] py-24 md:py-32"
    >
      {/* Giant ghost label */}
      <div className="pointer-events-none absolute -right-12 top-16 select-none font-display text-[18rem] font-medium leading-none text-green/[0.04]">
        SCF·26
      </div>

      <div className="container-x relative">
        {/* Header: title + meta card */}
        <div className="mb-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow !text-green">Event 01 · Supply Chain Forum</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="display-2 mt-5 text-navy"
            >
              SCF'26 · <em className="italic text-green">Energy Transition</em> in Central Asia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 text-lg font-light leading-relaxed text-ink/70"
            >
              Практическая бизнес-платформа, дополняющая Ecology and Energy Transition Summit. Фокус — на «механизмах реализации» стратегических обязательств: нефтехимия, логистика, транспортные коридоры и формирующаяся отрасль устойчивого авиатоплива (SAF).
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded bg-gradient-to-br from-green to-green-dark p-10 text-white shadow-2xl shadow-green/20"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-white/10" />
            <div className="relative z-10">
              <div className="mb-6 text-xs uppercase tracking-[0.2em] opacity-85">
                Вторник
              </div>
              <div className="mb-2 font-display text-6xl font-medium leading-none">
                21 <span className="text-xl font-normal opacity-85">апреля</span>
              </div>
              <dl className="mt-8 divide-y divide-white/20">
                {[
                  ['Место', 'Rixos President Astana'],
                  ['Начало', '08:00'],
                  ['Длительность', '1 день'],
                  ['Чартер', 'Milan ↔ Astana'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-4 text-sm">
                    <dt className="text-xs uppercase tracking-[0.1em] opacity-70">
                      {k}
                    </dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="mt-12">
          <span className="eyebrow !text-green mb-4">Key Focus Areas</span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 mt-4 font-display text-3xl font-semibold text-navy"
          >
            Четыре приоритетных направления
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f, i) => (
              <motion.div
                key={f.num}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="rounded border border-green/25 bg-white p-7 transition-all hover:-translate-y-1 hover:border-green hover:shadow-2xl hover:shadow-green/10"
              >
                <div className="mb-3 font-display text-sm italic tracking-wide text-green">
                  — {f.num} —
                </div>
                <h4 className="mb-2 font-display text-xl font-semibold leading-tight text-navy">
                  {f.title}
                </h4>
                <p className="text-sm leading-relaxed text-ink/65">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sessions */}
        <div className="mt-20">
          <span className="eyebrow !text-green mb-4">Format & Structure</span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 mt-4 font-display text-3xl font-semibold text-navy"
          >
            Три ключевые сессии
          </motion.h3>
          <div className="space-y-4">
            {sessions.map((s, i) => (
              <motion.div
                key={s.time}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid items-center gap-6 border-l-4 border-green bg-white p-8 transition-all hover:translate-x-1 hover:shadow-2xl hover:shadow-green/10 lg:grid-cols-[100px_1fr_auto]"
              >
                <div className="font-display text-3xl font-medium leading-none text-green">
                  {s.time}
                </div>
                <div>
                  <div className="mb-1.5 text-[10px] uppercase tracking-[0.25em] text-ink/50">
                    {s.kind}
                  </div>
                  <h5 className="mb-1.5 font-display text-xl font-semibold text-navy">
                    {s.title}
                  </h5>
                  <p className="text-sm text-ink/65">{s.desc}</p>
                </div>
                <span className="inline-flex items-center whitespace-nowrap rounded-full bg-green/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-dark">
                  {s.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACIK Talks Cases */}
        <div className="mt-16 border-t border-green/20 pt-12">
          <span className="eyebrow !text-green mb-4">ACIK Talks · 5 Case Studies</span>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 mt-4 font-display text-2xl font-semibold text-navy"
          >
            Practical insights from industry leaders
          </motion.h4>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`flex gap-5 rounded border border-green/20 bg-white p-6 ${
                  i === cases.length - 1 ? 'md:col-span-2' : ''
                }`}
              >
                <span className="shrink-0 font-display text-4xl font-medium italic leading-none text-green">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-ink/80">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
