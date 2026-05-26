import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const navItems = [
  { href: '#roadmap', label: 'Календарь' },
  { href: '#b2b', label: 'Программа' },
  { href: '#audience', label: 'Для кого' },
  { href: '#tariffs', label: 'Тарифы' },
  { href: '#logistics', label: 'Размещение' },
  { href: '#form', label: 'Регистрация' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className={clsx(
        'sticky top-0 z-50 border-b border-gold/20 transition-colors duration-300',
        scrolled
          ? 'bg-navy/85 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'bg-navy',
      )}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-[13px] font-bold text-navy-deep shadow-lg shadow-gold/30 transition-transform group-hover:scale-105 font-display">
            IT·KZ
          </div>
          <div className="leading-tight text-cream font-display">
            <div className="text-lg font-semibold">Italy–Kazakhstan 2026</div>
            <div className="font-sans text-[11px] uppercase tracking-[0.15em] opacity-70">
              Forums · Astana
            </div>
          </div>
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-medium text-cream transition-colors hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#form" className="btn btn-primary text-[12px]">
          Подать заявку
        </a>
      </div>
    </motion.header>
  );
}
