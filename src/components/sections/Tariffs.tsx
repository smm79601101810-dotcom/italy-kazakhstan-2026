import { motion, type Variants } from 'framer-motion';
import { clsx } from 'clsx';

interface Tariff {
  name: string;
  sub: string;
  price: string;
  note: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
}

const tariffs: Tariff[] = [
  {
    name: 'Business',
    sub: 'Официальный взнос CCIK',
    price: '180 000',
    note: 'По официальной форме CCIK',
    popular: true,
    features: [
      { text: 'Участие в форуме (2 дня)', included: true },
      { text: 'Программа B2B-встреч', included: true },
      { text: 'Пленарные сессии и круглые столы', included: true },
      { text: 'Деловые обеды', included: true },
      { text: 'Синхронный перевод', included: true },
      { text: 'Networking-приём', included: true },
      { text: 'Гала-ужин 29 июня', included: true },
      { text: '1 представитель', included: true },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function Tariffs() {
  return (
    <section id="tariffs" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Тарифы участия · Investment Forum</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Выберите <em className="italic text-gold">формат участия</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Единый тариф участия — официальный взнос CCIK 180 000 ₸. Включает полное двухдневное участие, программу B2B-встреч, networking-приём и гала-ужин 29 июня.
        </motion.p>

        <div className="mx-auto grid max-w-sm gap-4">
          {tariffs.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className={clsx(
                'relative flex flex-col rounded p-9 transition-all hover:-translate-y-1.5',
                t.popular
                  ? 'border-2 border-gold shadow-2xl shadow-gold/20'
                  : 'border border-ink/10 hover:shadow-2xl hover:shadow-navy/10',
              )}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-navy-deep">
                  ★ Популярный
                </span>
              )}
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                {t.name}
              </div>
              <div className="mb-5 min-h-[32px] text-xs text-ink/55">{t.sub}</div>
              <div className="mb-1 whitespace-nowrap font-display text-4xl font-semibold leading-none tracking-tight text-navy">
                {t.price}
                <span className="align-top text-xl"> ₸</span>
              </div>
              <div className="mb-6 border-b border-ink/10 pb-6 text-[11px] text-ink/50">
                {t.note}
              </div>
              <ul className="mb-6 flex-1 space-y-1.5">
                {t.features.map((f) => (
                  <li
                    key={f.text}
                    className={clsx(
                      'flex gap-2.5 text-[13px] leading-snug',
                      f.included ? 'text-ink/75' : 'text-ink/30',
                    )}
                  >
                    <span className={clsx('shrink-0', f.included ? 'text-green font-bold' : '')}>
                      {f.included ? '✓' : '—'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className={clsx(
                  'block rounded-sm border border-navy py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors',
                  t.popular
                    ? 'bg-navy text-cream hover:bg-gold hover:border-gold hover:text-navy-deep'
                    : 'bg-cream text-navy hover:bg-gold hover:border-gold hover:text-navy-deep',
                )}
              >
                Выбрать {t.name}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 border-l-[3px] border-gold bg-cream p-6 text-[13px] leading-relaxed text-ink/70"
        >
          <strong className="text-navy">Важно:</strong> Тариф участия (180 000 ₸) и связанные с ним условия (юрисдикция Суда Рима, компенсация при отказе до 180 000 ₸) соответствуют официальной форме Modulo CCIK. Участники по спискам государственных органов проходят регистрацию бесплатно — отметьте соответствующую опцию в форме заявки.
        </motion.div>
      </div>
    </section>
  );
}
