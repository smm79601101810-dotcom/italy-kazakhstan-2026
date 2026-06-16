import { motion, type Variants } from 'framer-motion';
import { clsx } from 'clsx';

interface Plan {
  name: string;
  sub: string;
  price: string;
  unit?: string;
  note: string;
  features: { text: string; included: boolean }[];
  cta: string;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Участие в форуме',
    sub: 'Бесплатная регистрация',
    price: '0',
    unit: '₸',
    note: 'Участие бесплатное для всех',
    highlight: true,
    cta: 'Зарегистрироваться бесплатно',
    features: [
      { text: 'Участие в форуме (2 дня)', included: true },
      { text: 'Программа B2B-встреч', included: true },
      { text: 'Пленарные сессии и круглые столы', included: true },
      { text: 'Деловые обеды', included: true },
      { text: 'Синхронный перевод', included: true },
      { text: 'Networking-приём', included: true },
      { text: 'Гала-ужин (по желанию, отдельно)', included: false },
    ],
  },
  {
    name: 'Гала-ужин',
    sub: 'Праздничный ужин 29 июня',
    price: '60 000',
    unit: '₸',
    note: 'Только 12 мест · оплачивается отдельно',
    cta: 'Добавить Гала-ужин',
    features: [
      { text: 'Высокая казахская кухня', included: true },
      { text: 'Живая музыкальная программа', included: true },
      { text: 'Награждение участников', included: true },
      { text: 'Нетворкинг в неформальной обстановке', included: true },
      { text: 'Дресс-код Black Tie', included: true },
      { text: 'Ограничено: 12 мест', included: true },
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

export default function Tariffs() {
  return (
    <section id="tariffs" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Участие · Investment Forum</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Участие в форуме <em className="italic text-gold">бесплатное</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Регистрация на двухдневный форум — бесплатна для всех участников.
          Дополнительно можно посетить праздничный Гала-ужин 29 июня — это
          единственная платная опция (60 000 ₸, ограничено 12 мест).
        </motion.p>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              className={clsx(
                'relative flex flex-col rounded p-9 transition-all hover:-translate-y-1.5',
                p.highlight
                  ? 'border-2 border-green shadow-2xl shadow-green/20'
                  : 'border border-gold/40 hover:shadow-2xl hover:shadow-navy/10',
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Бесплатно
                </span>
              )}
              <div
                className={clsx(
                  'mb-2 text-xs font-bold uppercase tracking-[0.25em]',
                  p.highlight ? 'text-green' : 'text-gold',
                )}
              >
                {p.name}
              </div>
              <div className="mb-5 min-h-[32px] text-xs text-ink/55">{p.sub}</div>
              <div className="mb-1 whitespace-nowrap font-display text-4xl font-semibold leading-none tracking-tight text-navy">
                {p.price}
                <span className="align-top text-xl"> {p.unit}</span>
              </div>
              <div className="mb-6 border-b border-ink/10 pb-6 text-[11px] text-ink/50">
                {p.note}
              </div>
              <ul className="mb-6 flex-1 space-y-1.5">
                {p.features.map((f) => (
                  <li
                    key={f.text}
                    className={clsx(
                      'flex gap-2.5 text-[13px] leading-snug',
                      f.included ? 'text-ink/75' : 'text-ink/30',
                    )}
                  >
                    <span className={clsx('shrink-0', f.included ? 'font-bold text-green' : '')}>
                      {f.included ? '✓' : '—'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className={clsx(
                  'block rounded-sm border py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors',
                  p.highlight
                    ? 'border-navy bg-navy text-cream hover:bg-gold hover:border-gold hover:text-navy-deep'
                    : 'border-navy bg-cream text-navy hover:bg-gold hover:border-gold hover:text-navy-deep',
                )}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl border-l-[3px] border-gold bg-cream p-6 text-[13px] leading-relaxed text-ink/70"
        >
          <strong className="text-navy">Важно:</strong> Регистрация на форум
          бесплатна и не требует оплаты. Гала-ужин 29 июня — отдельная платная
          опция (60 000 ₸, 12 мест); оплачивается через оргкомитет после подачи
          заявки. Условия участия соответствуют официальной форме CCIK.
        </motion.div>
      </div>
    </section>
  );
}
