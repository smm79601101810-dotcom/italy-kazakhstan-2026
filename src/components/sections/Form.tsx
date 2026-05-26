import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  company: string;
  sector: string;
  fullName: string;
  position: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  description: string;
  termsAccepted: boolean;
  gdprAccepted: boolean;
}

const initial: FormState = {
  company: '',
  sector: '',
  fullName: '',
  position: '',
  address: '',
  email: '',
  phone: '',
  website: '',
  description: '',
  termsAccepted: false,
  gdprAccepted: false,
};

// Aligned with the 6 industry profiles in Audience section
const sectors = [
  'Энергетика, транспорт, инфраструктура',
  'АПК и пищевая промышленность',
  'Мода, красота, туризм, косметика',
  'Строительство, обрабатывающая промышленность',
  'Инвестиции, финансы, госорганы',
  'Наука, образование, инновации',
  'Другое',
];

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-navy">
      {children} {required && <span className="text-it-red">*</span>}
    </label>
  );
}

const fieldClass =
  'w-full rounded-sm border border-ink/10 bg-cream px-4 py-3.5 text-[15px] text-ink transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20';

export default function Form() {
  const [state, setState] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const resp = await fetch('/.netlify/functions/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
      const body = await resp.json().catch(() => ({ ok: false }));
      if (!resp.ok || !body.ok) {
        throw new Error(
          body.error ?? 'Не удалось отправить заявку. Попробуйте ещё раз.',
        );
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка сети');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="form"
      className="bg-gradient-to-b from-cream to-paper py-24 md:py-32"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl border-t-4 border-gold bg-white p-8 shadow-[0_30px_80px_rgba(10,30,63,0.1)] md:p-16"
        >
          {/* Flag accent strips on top */}
          <div className="absolute -top-1 left-0 h-1 w-1/3 bg-gradient-to-r from-it-green from-33% via-white via-66% to-it-red" />
          <div className="absolute -top-1 right-0 h-1 w-1/3 bg-kz-blue" />

          <header className="mb-10 border-b border-ink/10 pb-8 text-center">
            <span className="eyebrow inline-flex !justify-center">
              Регистрация
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-navy md:text-4xl">
              Подать заявку на участие
            </h2>
            <p className="mt-3 text-[15px] text-ink/60">
              Investment Forum · 11–12 июня 2026 · AIFC, Астана — заполните анкету, и наш менеджер свяжется с вами
            </p>
          </header>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded border-l-4 border-green bg-green/5 p-8 text-center"
            >
              <div className="mb-3 text-4xl">✓</div>
              <h3 className="mb-2 font-display text-2xl font-semibold text-navy">
                Заявка получена
              </h3>
              <p className="text-ink/70">
                Мы свяжемся с вами в течение 24 часов на указанный email.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Single consolidated block */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <FieldLabel required>Название компании</FieldLabel>
                  <input
                    type="text"
                    required
                    className={fieldClass}
                    value={state.company}
                    onChange={(e) => update('company', e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel required>Сектор</FieldLabel>
                  <select
                    required
                    className={fieldClass}
                    value={state.sector}
                    onChange={(e) => update('sector', e.target.value)}
                  >
                    <option value="" disabled>
                      Выберите сектор…
                    </option>
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel required>ФИО регистрируемого</FieldLabel>
                  <input
                    type="text"
                    required
                    className={fieldClass}
                    value={state.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                  />
                </div>
                <div>
                  <FieldLabel required>Должность</FieldLabel>
                  <input
                    type="text"
                    required
                    className={fieldClass}
                    value={state.position}
                    onChange={(e) => update('position', e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel required>Адрес компании</FieldLabel>
                  <input
                    type="text"
                    required
                    placeholder="Страна, город, улица"
                    className={fieldClass}
                    value={state.address}
                    onChange={(e) => update('address', e.target.value)}
                  />
                </div>

                <div>
                  <FieldLabel required>E-mail</FieldLabel>
                  <input
                    type="email"
                    required
                    className={fieldClass}
                    value={state.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div>
                  <FieldLabel required>Телефон</FieldLabel>
                  <input
                    type="tel"
                    required
                    className={fieldClass}
                    value={state.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel>Сайт (при наличии)</FieldLabel>
                  <input
                    type="text"
                    placeholder="www."
                    className={fieldClass}
                    value={state.website}
                    onChange={(e) => update('website', e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel required>
                    Краткое описание деятельности компании / продукта
                  </FieldLabel>
                  <textarea
                    required
                    rows={4}
                    placeholder="Чем занимается компания, что предлагает, какие цели на форуме…"
                    className={`${fieldClass} min-h-[120px] resize-y`}
                    value={state.description}
                    onChange={(e) => update('description', e.target.value)}
                  />
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <label className="flex cursor-pointer items-start gap-3 border-l-[3px] border-gold bg-cream p-4 text-[13px] leading-relaxed text-ink/75">
                  <input
                    type="checkbox"
                    required
                    checked={state.termsAccepted}
                    onChange={(e) => update('termsAccepted', e.target.checked)}
                    className="mt-1 h-[18px] w-[18px] accent-navy"
                  />
                  <span>
                    Подтверждаю принятие условий участия в Investment Forum: регистрационный взнос <strong>€1.000</strong> по официальной форме CCIK, юрисдикция Суда Рима.
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 border-l-[3px] border-gold bg-cream p-4 text-[13px] leading-relaxed text-ink/75">
                  <input
                    type="checkbox"
                    required
                    checked={state.gdprAccepted}
                    onChange={(e) => update('gdprAccepted', e.target.checked)}
                    className="mt-1 h-[18px] w-[18px] accent-navy"
                  />
                  <span>
                    Даю согласие на обработку персональных данных в соответствии с GDPR (Регламент ЕС 2016/679) и применимым законодательством.
                  </span>
                </label>
              </div>

              {error && (
                <div className="rounded border-l-[3px] border-it-red bg-it-red/5 p-4 text-sm text-it-red">
                  ⚠ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-navy py-5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold hover:text-navy-deep disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-navy disabled:hover:text-cream"
              >
                {submitting ? 'Отправка…' : 'Отправить заявку'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
