import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-center text-cream md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(201,164,73,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(0,166,81,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-medium leading-tight md:text-6xl"
          >
            Будущее итало-казахстанского
            <br />
            партнёрства <em className="italic text-gold-light">начинается здесь</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-lg font-light text-cream/80 md:text-xl"
          >
            Присоединяйтесь к лидерам бизнеса и государственным институтам двух стран на главных событиях 2026 года.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#form" className="btn btn-primary">
              Подать заявку на участие
            </a>
            <a href="#tariffs" className="btn btn-ghost">
              Посмотреть тарифы →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-xs uppercase tracking-[0.15em] text-gold-light"
          >
            ⚠ Количество мест ограничено
          </motion.div>
        </div>
      </div>
    </section>
  );
}
