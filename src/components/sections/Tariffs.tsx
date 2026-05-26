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
    name: 'Basic',
    sub: 'Официальный взнос CCIK',
    price: '1.000',
    note: 'Оплата до 24 апреля 2026',
    features: [
      { text: 'Участие в форуме (2 дня)', included: true },
      { text: 'Программа B2B-встреч', included: true },
      { text: 'Пленарные сессии и круглые столы', included: true },
      { text: 'Деловые обеды', included: true },
      { text: 'Синхронный перевод', included: true },
      { text: 'Networking-приём', included: true },
      { text: 'Гала-ужин', included: false },
      { text: 'Проживание', included: false },
      { text: '1 представитель', included: true },
    ],
  },
  {
    name: 'Business',
    sub: 'Полное участие + гала-ужин',
    price: '1.900',
    note: 'Цена уточняется оргкомитетом',
    popular: true,
    features: [
      { text: 'Всё из Basic', included: true },
      { text: 'Гала-ужин 12 июня', included: true },
      { text: 'Доступ к VIP-залам', included: true },
      { text: 'Приоритетный мэтчинг', included: true },
      { text: 'VIP-зона на приёме', included: true },
      { text: 'Проживание', included: false },
      { text: '2 представителя', included: true },
    ],
  },
  {
    name: 'Premium',
    sub: '+ проживание и трансфер',
    price: '2.900',
    note: 'Цена уточняется оргкомитетом',
    features: [
      { text: 'Всё из Business', included: true },
      { text: 'Проживание 1 ночь (отель-партнёр)', included: true },
      { text: 'Трансфер аэропорт ↔ отель', included: true },
      { text: 'Приоритетный слот в VIP-залах', included: true },
      { text: 'Логотип в материалах форума', included: true },
      { text: '2 представителя', included: true },
    ],
  },
  {
    name: 'VIP',
    sub: 'Максимальный комфорт',
    price: '4.500',
    note: 'Цена уточняется оргкомитетом',
    features: [
      { text: 'Всё из Premium', included: true },
      { text: 'Проживание 2 ночи (Rixos 5★)', included: true },
      { text: 'VIP-стол на гала-ужине', included: true },
      { text: 'Персональный слот для встреч', included: true },
      { text: 'Персональный менеджер', included: true },
      { text: 'Персональный трансфер', included: true },
      { text: 'До 3 представителей', included: true },
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
        <span className="eyebrow">Тарифы участия · B2B Investment Forum</span>
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
          Базовый пакет соответствует официальному взносу CCIK €1.000. Расширенные пакеты включают проживание, доступ к гала-ужину и VIP-залам. Цены расширенных пакетов уточняются оргкомитетом.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="mb-1 font-display text-5xl font-semibold leading-none tracking-tight text-navy">
                <span className="align-top text-2xl">€</span>
                {t.price}
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
          <strong className="text-navy">Важно:</strong> Базовый пакет Basic (€1.000) и связанные с ним условия (юрисдикция Суда Рима, компенсация при отказе до €1.000) соответствуют официальной форме Modulo CCIK. Пакеты Business, Premium и VIP представляют собой базовый взнос плюс дополнительные услуги; их финальная стоимость определяется оргкомитетом с учётом тарифов отелей и логистики. Для SCF'26 действуют отдельные спонсорские пакеты (см. раздел выше).
        </motion.div>
      </div>
    </section>
  );
}
