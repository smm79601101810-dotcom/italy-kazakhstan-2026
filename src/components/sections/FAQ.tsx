import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Когда и где проходит форум?',
    a: 'Investment Forum пройдёт 29–30 июня 2026 года в Международном финансовом центре Астана (AIFC, Mangilik El 55/18). Два дня программы: пленарные сессии, B2B-встречи, подписание соглашений, гала-ужин 30 июня.',
  },
  {
    q: 'Что включено в тарифы?',
    a: 'Basic — light pass для наблюдателей: один день, доступ к пленарной части, без B2B-встреч. Business — официальный взнос CCIK, полное двухдневное участие с программой B2B-встреч и networking-приёмом. Premium — плюс гала-ужин, доступ к VIP-залам, проживание и трансфер. VIP — максимальный пакет с двумя ночами в Rixos, VIP-столом на гала-ужине и персональным менеджером. Подробности и цены — в разделе «Тарифы».',
  },
  {
    q: 'Как добраться до Астаны и где остановиться?',
    a: 'Прямые рейсы в Астану (NQZ) выполняются из Стамбула, Дубая, Франкфурта и других хабов. Для делегатов форума мы зарезервировали корпоративные тарифы в Rixos President, Saad Hotel и Hilton Garden Inn — укажите интерес в форме регистрации, оргкомитет забронирует номер за вас.',
  },
  {
    q: 'Гарантировано ли участие после заявки?',
    a: 'Количество мест ограничено, приоритет отдаётся по порядку поступления заявок и подтверждению мэтчинга с казахстанскими операторами. Срок приёма заявок ограничен — рекомендуем подавать заранее.',
  },
  {
    q: 'На каких языках проходит форум?',
    a: 'Рабочие языки — итальянский, русский, казахский и английский. Все пленарные сессии, круглые столы и B2B-встречи обеспечены профессиональным синхронным переводом.',
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
