import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin gold progress bar fixed at the very top of the viewport.
 * Tracks document scroll position 0 → 1.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_0_12px_rgba(201,164,73,0.6)]"
    />
  );
}
