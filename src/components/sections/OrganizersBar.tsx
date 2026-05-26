import { motion, type Variants } from 'framer-motion';

const orgs = [
  'Посольство Италии в Астане',
  'Посольство Казахстана в Италии',
  'Министерство торговли и интеграции РК',
  'Министерство национальной экономики РК',
  'ACIK',
  'CCIK · 1996',
  'Самрук-Қазына',
  'KITH · Kazakh-Italian Trade House',
  'AIFC',
  'ICE · Italian Trade Agency',
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function OrganizersBar() {
  return (
    <div className="border-t border-gold/15 bg-navy-deep py-10">
      <div className="container-x text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-[11px] uppercase tracking-[0.3em] text-gold-light"
        >
          При поддержке и под эгидой
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {orgs.map((org) => (
            <motion.div
              key={org}
              variants={item}
              className="px-2 font-display text-base font-medium text-cream/75"
            >
              {org}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
