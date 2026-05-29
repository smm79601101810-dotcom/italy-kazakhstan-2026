import { motion } from 'framer-motion';
import { ItalyFlag, KazakhstanFlag } from '../ui/Flag';

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-50 bg-navy-deep py-2.5 text-xs tracking-wide text-cream"
    >
      <div className="container-x flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ItalyFlag className="h-[18px] w-7" />
          <span className="opacity-70">Italia</span>
          <KazakhstanFlag className="h-[18px] w-7" />
          <span className="opacity-70">Қазақстан · 2026</span>
        </div>
        <div className="hidden opacity-70 sm:block">
          📍 Астана · 29–30 июня 2026
        </div>
      </div>
    </motion.div>
  );
}
