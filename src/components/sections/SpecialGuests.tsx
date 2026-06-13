import { motion, type Variants } from 'framer-motion';
import { ItalyFlag } from '../ui/Flag';

interface Guest {
  name: string;
  role: string;
}

const guests: Guest[] = [
  {
    name: 'Аниелло Петито',
    role: 'Заместитель главы представительства Посольства Италии в Казахстане',
  },
  {
    name: 'Федерико Канер',
    role: 'Генеральный директор Veneto Agricoltura',
  },
  {
    name: 'Андреа Комаккио',
    role: 'Технический координатор Комиссии по сельскохозяйственной политике Конференции регионов и автономных провинций',
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

export default function SpecialGuests() {
  return (
    <section id="guests" className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Особые участники · Institutional Attendance</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Подтверждённые <em className="italic text-gold">институциональные гости</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Официальная делегация институциональных представителей Италии,
          подтвердивших личное участие в форуме 29–30 июня 2026 года в Астане.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded border border-ink/10 bg-white shadow-xl shadow-navy/5"
        >
          {/* Table header */}
          <div className="flex items-center gap-3 bg-navy px-6 py-5 text-cream md:px-8">
            <ItalyFlag className="h-6 w-9 shrink-0" />
            <h3 className="font-display text-lg font-semibold md:text-xl">
              B2B Forum Astana · 29–30 June 2026
            </h3>
          </div>

          {/* Column labels (desktop) */}
          <div className="hidden grid-cols-[1fr_1.6fr_auto] gap-6 border-b border-ink/10 bg-cream px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/50 md:grid">
            <span>Участник</span>
            <span>Должность</span>
            <span>Формат</span>
          </div>

          {/* Rows */}
          <ul>
            {guests.map((g, i) => (
              <motion.li
                key={g.name}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                className="grid grid-cols-1 gap-1 border-b border-ink/10 px-6 py-4 transition-colors last:border-0 hover:bg-cream md:grid-cols-[1fr_1.6fr_auto] md:items-center md:gap-6 md:px-8 md:py-5"
              >
                <span className="font-display text-base font-semibold text-navy">
                  {g.name}
                </span>
                <span className="text-sm leading-snug text-ink/80">{g.role}</span>
                <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-green-dark md:mt-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  Личное участие
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-sm italic text-ink/50"
        >
          Список подтверждённых участников; возможны дополнения.
        </motion.p>
      </div>
    </section>
  );
}
