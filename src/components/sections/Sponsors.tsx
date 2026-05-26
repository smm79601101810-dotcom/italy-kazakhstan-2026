import { motion, type Variants } from 'framer-motion';
import { clsx } from 'clsx';

type TierLevel = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

interface Tier {
  level: TierLevel;
  price: string;
  desc: string;
  perks: string[];
  isCoOrg?: boolean;
}

const tiers: Tier[] = [
  {
    level: 'Platinum',
    price: '€50.000',
    desc: 'Уникальная возможность стать со-формирователем повестки. Категория для лидеров, ищущих статус «соорганизатора».',
    perks: [
      'Tailor-Made пакет',
      'Доступ к закрытым executive-сессиям',
      'Участие в post-forum white paper',
      '«Signature» медиа-контент',
      'Согласование позиционирования',
    ],
    isCoOrg: true,
  },
  {
    level: 'Gold',
    price: '€25.000',
    desc: 'Премиум-видимость и speaker-возможности',
    perks: [
      'Логотип на главном экране',
      'Брендинг на LED-экранах',
      'Keynote 5–7 минут',
      '5 проходов делегата',
      '5 пропусков на VIP-приём',
    ],
  },
  {
    level: 'Silver',
    price: '€10.000',
    desc: 'Базовая видимость и доступ',
    perks: [
      'Логотип в программе',
      'Roll-up в зоне нетворкинга',
      '3 прохода делегата',
      '3 пропуска на VIP-приём',
    ],
  },
  {
    level: 'Bronze',
    price: '€5.000',
    desc: 'Старт-пакет участия',
    perks: [
      'Логотип в программе',
      'Логотип на экране',
      '3 прохода делегата',
      'Упоминание в коммуникациях',
    ],
  },
];

const specials = [
  {
    title: 'Session Sponsor',
    desc: 'Брендинг тематической сессии · модерация · логотип на материалах',
    price: '€30.000',
  },
  {
    title: 'Networking Cocktail Sponsor',
    desc: 'Брендинг официального коктейль-приёма · логотип в зоне коктейля',
    price: '€10.000',
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

const tierLabelClass: Record<TierLevel, string> = {
  Platinum: 'text-gold-light',
  Gold: 'text-amber-600',
  Silver: 'text-stone-500',
  Bronze: 'text-amber-800',
};

const tierPriceClass: Record<TierLevel, string> = {
  Platinum: 'text-gold',
  Gold: 'text-amber-600',
  Silver: 'text-stone-500',
  Bronze: 'text-amber-800',
};

export default function Sponsors() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow !text-green">SCF'26 · Sponsorship Packages</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Спонсорские пакеты{' '}
          <em className="italic text-green">Supply Chain Forum</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-14 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Четыре основных уровня партнёрства и две специальные опции для брендирования сессий и нетворкинга. Платиновый уровень — это статус соорганизатора, а не традиционное спонсорство.
        </motion.p>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.level}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={clsx(
                'relative rounded p-9 transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10',
                tier.isCoOrg
                  ? 'border border-gold bg-gradient-to-b from-navy to-navy-deep text-cream'
                  : 'border border-ink/10 bg-gradient-to-b from-white to-stone-50',
              )}
            >
              {tier.isCoOrg && (
                <span className="absolute right-4 top-4 inline-block rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-navy-deep">
                  CO-ORGANIZER
                </span>
              )}
              <div
                className={clsx(
                  'mb-3 text-xs font-semibold uppercase tracking-[0.3em]',
                  tierLabelClass[tier.level],
                )}
              >
                {tier.level}
              </div>
              <div
                className={clsx(
                  'mb-2 font-display text-5xl font-medium leading-none tracking-tight',
                  tierPriceClass[tier.level],
                )}
              >
                {tier.price}
              </div>
              <p
                className={clsx(
                  'mb-5 text-sm leading-snug',
                  tier.isCoOrg ? 'text-cream/70' : 'text-ink/70',
                )}
              >
                {tier.desc}
              </p>
              <ul
                className={clsx(
                  'space-y-2 border-t pt-4',
                  tier.isCoOrg ? 'border-gold/20' : 'border-ink/10',
                )}
              >
                {tier.perks.map((p) => (
                  <li
                    key={p}
                    className={clsx(
                      'flex gap-2 text-sm',
                      tier.isCoOrg ? 'text-cream/85' : 'text-ink/75',
                    )}
                  >
                    <span className="shrink-0 text-gold">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {specials.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between gap-6 rounded border border-ink/10 bg-paper p-7"
            >
              <div>
                <h5 className="mb-1 font-display text-xl font-semibold text-navy">
                  {s.title}
                </h5>
                <p className="text-sm text-ink/60">{s.desc}</p>
              </div>
              <div className="shrink-0 font-display text-2xl font-semibold text-green">
                {s.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
