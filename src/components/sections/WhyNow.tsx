import { motion, type Variants } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Энергопереход в действии',
    desc: 'Цели устойчивого развития переходят с уровня политики к реализации. Решающий фактор — эффективные цепочки поставок.',
  },
  {
    num: '02',
    title: 'Средний коридор',
    desc: 'Казахстан в выгодной географической позиции между Европой и Азией. Развитие коридора открывает экспортные возможности.',
  },
  {
    num: '03',
    title: 'Инвестиции — приоритет',
    desc: 'Создание совместного фонда с SIMEST и привлечение глобальных ритейл-сетей для офтейк-контрактов.',
  },
  {
    num: '04',
    title: 'Региональное лидерство',
    desc: 'Превращение Казахстана в стратегический деловой хаб, связывающий цепочки поставок между Европой, Азией и США.',
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

export default function WhyNow() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Почему именно сейчас</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Четыре стратегических <em className="italic text-gold">фактора момента</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Казахстан и Центральная Азия входят в новую фазу промышленной модернизации. Окно возможностей для итало-казахстанского партнёрства открыто именно сейчас.
        </motion.p>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className="py-6"
            >
              <div className="mb-5 inline-block border-b-2 border-gold pb-2 font-display text-5xl font-medium italic leading-none text-gold">
                {r.num}
              </div>
              <h4 className="mb-3 font-display text-2xl font-semibold leading-tight text-navy">
                {r.title}
              </h4>
              <p className="text-sm leading-relaxed text-ink/70">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
