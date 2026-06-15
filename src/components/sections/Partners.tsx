import { motion } from 'framer-motion';
import { partnerLogos, logoAlt } from '../../data/partners';

interface MarqueeRowProps {
  logos: string[];
  /** seconds for one full loop; larger = slower */
  duration?: number;
  /** 'ltr' drifts left→right, 'rtl' right→left */
  direction?: 'ltr' | 'rtl';
}

/**
 * One infinite marquee row. The track holds the logos twice so the loop
 * is seamless (translateX 0 → -50%).
 */
function MarqueeRow({ logos, duration = 64, direction = 'rtl' }: MarqueeRowProps) {
  const doubled = [...logos, ...logos];
  const anim =
    direction === 'rtl'
      ? `partners-marquee ${duration}s linear infinite`
      : `partners-marquee-rev ${duration}s linear infinite`;
  return (
    <div className="relative overflow-hidden py-3 [&:hover_>div]:[animation-play-state:paused]">
      <div className="flex w-max items-center gap-12" style={{ animation: anim }}>
        {doubled.map((file, i) => (
          <img
            key={`${file}-${i}`}
            src={`/partners/${file}`}
            alt={logoAlt(file)}
            loading="lazy"
            className="h-12 w-auto shrink-0 object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-14"
          />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const mid = Math.ceil(partnerLogos.length / 2);
  const rowA = partnerLogos.slice(0, mid);
  const rowB = partnerLogos.slice(mid);

  return (
    <section
      id="partners"
      className="overflow-hidden bg-gradient-to-b from-white to-paper py-20 md:py-28"
    >
      {/* Accent header: big "40+" + text */}
      <div className="container-x mb-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-10 md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl font-bold leading-none tracking-tight text-gold md:text-8xl"
          >
            40+
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="eyebrow !justify-center md:!justify-start">
              Партнёры и участники
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy md:text-4xl">
              компаний-участников форума
            </h2>
            <p className="mt-3 text-lg font-light leading-relaxed text-ink/70">
              Италия × Казахстан — агропром и пищевой сектор, логистика,
              технологии, консалтинг и не только.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Two rows, opposite directions, with edge fade masks */}
      <div
        className="relative"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <MarqueeRow logos={rowA} duration={64} direction="rtl" />
        <MarqueeRow logos={rowB} duration={78} direction="ltr" />
      </div>
    </section>
  );
}
