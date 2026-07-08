import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqData from '../../content/faq.json';

const faqs = faqData.items;

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
