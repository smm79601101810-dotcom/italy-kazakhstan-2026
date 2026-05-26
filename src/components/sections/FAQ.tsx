import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Чем отличаются два форума?',
    a: "SCF'26 (21 апреля, Rixos) посвящён энергопереходу и цепочкам поставок — это стратегический контекст. B2B Investment Forum (11–12 июня, AIFC) — прямые B2B-встречи и подписание соглашений. Можно участвовать в одном или обоих.",
  },
  {
    q: 'Что включено в тарифы B2B Forum?',
    a: 'Basic (€1.000) — участие, B2B-встречи, перевод, обеды. Business — плюс гала-ужин и VIP-залы. Premium — плюс проживание и трансфер. VIP — максимальный пакет с 2 ночами в Rixos и персональным менеджером. Цены расширенных пакетов уточняются.',
  },
  {
    q: 'Есть ли чартер из Италии?',
    a: "Да, для SCF'26 организован выделенный чартер Milan ↔ Astana (Boeing 737 MAX), вылет 20 апреля, возврат 23 апреля. Economy €1.000 / Premium €1.500 round trip. Бронирование через команду организаторов.",
  },
  {
    q: 'Гарантировано ли участие после заявки?',
    a: 'Для B2B Forum количество мест ограничено, приоритет — по порядку поступления заявок и подтверждению мэтчинга с операторами. Заявки на B2B принимаются до 24 апреля 2026.',
  },
  {
    q: 'На каких языках проходят форумы?',
    a: 'Рабочие языки — итальянский, русский, казахский и английский. Все сессии и B2B-встречи обеспечены профессиональным синхронным переводом.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow inline-flex">Частые вопросы</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-2 mx-auto mt-5 max-w-3xl text-navy"
          >
            Что нужно <em className="italic text-gold">знать заранее</em>
          </motion.h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06 }}
                className="border-b border-ink/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left transition-colors hover:text-gold md:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-navy md:text-xl">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-3xl font-light text-gold"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-[15px] leading-relaxed text-ink/70">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
