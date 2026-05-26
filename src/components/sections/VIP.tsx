import { motion, type Variants } from 'framer-motion';
import { ItalyFlag, KazakhstanFlag } from '../ui/Flag';

interface Person {
  name: string;
  role: string;
}

const kzList: Person[] = [
  { name: 'Олжас Бектенов', role: 'Премьер-Министр РК' },
  { name: 'Серик Жумангарин', role: 'Зам. Премьер-министра — Министр нац. экономики' },
  { name: 'Министерство торговли и интеграции', role: "МТИ РК · организатор SCF'26" },
  { name: 'Министерство сельского хозяйства', role: 'МСХ РК' },
  { name: 'Министерство науки и высшего образования', role: 'МНВО РК' },
  { name: 'Министерство промышленности и строительства', role: 'МПС РК' },
  { name: '«Самрук-Қазына»', role: 'Фонд национального благосостояния' },
  { name: 'Холдинг «Байтерек»', role: 'Национальный холдинг' },
  { name: 'Kazakh Invest', role: 'Национальная компания' },
  { name: 'KITH', role: 'Kazakh-Italian Trade House' },
];

const itList: Person[] = [
  { name: 'Посольство Италии в Астане', role: "Ambasciata d'Italia" },
  { name: 'Джанантонио Трамет', role: 'Президент CCIK' },
  { name: 'Francesco Lollobrigida', role: 'Министр сельского хозяйства' },
  { name: 'Adolfo Urso', role: 'Министр промышленности и Made in Italy' },
  { name: 'Giancarlo Giorgetti', role: 'Министр экономики и финансов' },
  { name: 'Luca Zaia', role: 'Президент региона Венето' },
  { name: 'Federico Caner', role: 'Veneto Agricoltura' },
  { name: 'Mauro Viti', role: 'ERSA Friuli' },
  { name: 'Matteo Zoppas', role: 'Президент ICE' },
  { name: 'Paolo Boccardelli, Vittorio De Pedys', role: 'Университеты и бизнес-школы' },
];

const item: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.04 },
  }),
};

interface DelegationProps {
  flag: 'it' | 'kz';
  title: string;
  list: Person[];
}

function Delegation({ flag, title, list }: DelegationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`border-t-4 bg-white p-9 ${flag === 'it' ? 'border-it-green' : 'border-kz-blue'}`}
    >
      <header className="mb-7 flex items-center gap-4 border-b border-ink/10 pb-5">
        {flag === 'it' ? (
          <ItalyFlag className="h-7 w-11" />
        ) : (
          <KazakhstanFlag className="h-7 w-11" />
        )}
        <h3 className="font-display text-2xl font-medium text-navy">{title}</h3>
      </header>
      <ul>
        {list.map((p, i) => (
          <motion.li
            key={p.name}
            custom={i}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="grid grid-cols-[1fr_auto] items-baseline gap-3 border-b border-ink/10 py-3 last:border-0"
          >
            <span className="text-sm font-semibold text-navy">{p.name}</span>
            <span className="text-right font-display text-xs italic text-ink/55">
              {p.role}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function VIP() {
  return (
    <section id="vip" className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <span className="eyebrow">Участники высшего звена</span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-2 mt-5 max-w-3xl text-navy"
        >
          Делегации двух стран в{' '}
          <em className="italic text-gold">одном пространстве</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 mt-6 max-w-2xl text-lg font-light leading-relaxed text-ink/70"
        >
          Объединённый список ожидаемых VIP-участников обоих мероприятий. Состав подтверждается; возможны корректировки.
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2">
          <Delegation flag="kz" title="Казахстан" list={kzList} />
          <Delegation flag="it" title="Италия" list={itList} />
        </div>
      </div>
    </section>
  );
}
