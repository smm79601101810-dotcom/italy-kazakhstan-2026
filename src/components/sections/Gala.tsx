import { motion } from 'framer-motion';

const galaFeatures = [
  'Дегустационное меню высокой казахской кухни',
  'Живая музыкальная и культурная программа',
  'Награждение участников и подписантов',
  'Нетворкинг с лидерами отрасли двух стран',
];

const galaDetails: [string, string][] = [
  ['Дата', '12 июня 2026'],
  ['Место', 'AIFC, Астана'],
  ['Дресс-код', 'Black Tie'],
  ['Доступ', 'Business · Premium · VIP'],
];

export default function Gala() {
  return (
    <section
      id="gala"
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute right-16 top-10 select-none text-[12rem] leading-none text-gold/[0.06]">
        ✦
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow !text-gold-light">
              <span className="bg-gold-light/0 [&::before]:!bg-gold-light" />
              Вечерняя программа · Investment Forum
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-2 mt-5 text-cream"
            >
              Гала-ужин{' '}
              <em className="italic text-gold-light">
                высокой казахской кухни
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg font-light leading-relaxed text-cream/80"
            >
              Деловая часть форума завершится торжественным гала-ужином с дегустационным меню и культурной программой, подчёркивающей гостеприимство и традиции Казахстана. Дополнительная возможность для нетворкинга и укрепления институциональных отношений в неформальной обстановке.
            </motion.p>
            <ul className="mt-7 space-y-0">
              {galaFeatures.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3.5 border-b border-white/10 py-3.5 text-[15px] text-cream/90"
                >
                  <span className="text-gold">✦</span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded border border-gold/30 bg-white/[0.04] p-10 backdrop-blur"
          >
            <div className="mb-6 border-b border-gold/20 pb-6 font-display text-2xl text-gold-light">
              12 июня · 20:00
            </div>
            {galaDetails.map(([k, v], i) => (
              <div
                key={k}
                className={`flex justify-between py-3 text-sm ${
                  i === galaDetails.length - 1
                    ? 'mt-2 border-t border-gold/20 pt-4'
                    : ''
                }`}
              >
                <span className="text-xs uppercase tracking-[0.1em] text-cream/60">
                  {k}
                </span>
                <span className="font-semibold text-cream">{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
