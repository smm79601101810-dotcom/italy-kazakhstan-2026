import { clsx } from 'clsx';

interface FlagProps {
  className?: string;
}

export function ItalyFlag({ className }: FlagProps) {
  return (
    <div
      className={clsx(
        'flex overflow-hidden rounded-sm shadow-lg shadow-black/30 ring-1 ring-white/10',
        className,
      )}
      aria-label="Флаг Италии"
      role="img"
    >
      <div className="flex-1 bg-it-green" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-it-red" />
    </div>
  );
}

export function KazakhstanFlag({ className }: FlagProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-sm bg-kz-blue shadow-lg shadow-black/30 ring-1 ring-white/10',
        className,
      )}
      aria-label="Флаг Казахстана"
      role="img"
    >
      <svg
        viewBox="0 0 100 65"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Sun rays */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
          const x1 = 50 + Math.cos(angle) * 13;
          const y1 = 32 + Math.sin(angle) * 13;
          const x2 = 50 + Math.cos(angle) * 22;
          const y2 = 32 + Math.sin(angle) * 22;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ffc72c"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx="50" cy="32" r="11" fill="#ffc72c" />
      </svg>
    </div>
  );
}
