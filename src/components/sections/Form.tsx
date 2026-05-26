import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  signer: string;
  position: string;
  company: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  vat: string;
  website: string;
  description: string;
  participant: string;
  participantPosition: string;
  participantPhone: string;
  participantEmail: string;
  hotel: string;
  termsAccepted: boolean;
  gdprAccepted: boolean;
}

const initial: FormState = {
  signer: '',
  position: '',
  company: '',
  country: '',
  address: '',
  phone: '',
  email: '',
  vat: '',
  website: '',
  description: '',
  participant: '',
  participantPosition: '',
  participantPhone: '',
  participantEmail: '',
  hotel: '',
  termsAccepted: false,
  gdprAccepted: false,
};

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-navy">
      {children} {required && <span className="text-it-red">*</span>}
    </label>
  );
}

const fieldClass = 'w-full rounded-sm border border-ink/10 bg-cream px-4 py-3.5 text-[15px] text-ink transition-all focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20';

export default function Form() {
  const [state, setState] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Backend will be wired later — show success state for now
    console.log('Form submission:', state);
    setSubmitted(true);
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
            <span className="eyebrow inline-flex !justify-center">Регистрация</span>
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
              {/* Company data */}
              <div>
                <h3 className="mb-5 flex items-center gap-3 border-b border-ink/10 pb-3 font-display text-xl font-semibold text-navy">
                  <span className="h-5 w-1.5 bg-gold" /> Данные компании
                </h3>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <FieldLabel required>ФИО подписанта</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.signer} onChange={(e) => update('signer', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>Должность</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.position} onChange={(e) => update('position', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <FieldLabel required>Название компании</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.company} onChange={(e) => update('company', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>Страна</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.country} onChange={(e) => update('country', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>Город / Адрес</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.address} onChange={(e) => update('address', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>Телефон</FieldLabel>
                    <input type="tel" required className={fieldClass} value={state.phone} onChange={(e) => update('phone', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>E-mail</FieldLabel>
                    <input type="email" required className={fieldClass} value={state.email} onChange={(e) => update('email', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel>НДС / Налоговый код</FieldLabel>
                    <input type="text" className={fieldClass} value={state.vat} onChange={(e) => update('vat', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel>Сайт компании</FieldLabel>
                    <input type="text" placeholder="www." className={fieldClass} value={state.website} onChange={(e) => update('website', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <FieldLabel required>Сфера деятельности и интересы</FieldLabel>
                    <textarea
                      required
                      rows={4}
                      placeholder="Опишите деятельность компании, интересующие отрасли и цели участия..."
                      className={`${fieldClass} min-h-[120px] resize-y`}
                      value={state.description}
                      onChange={(e) => update('description', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Participant data */}
              <div>
                <h3 className="mb-5 flex items-center gap-3 border-b border-ink/10 pb-3 font-display text-xl font-semibold text-navy">
                  <span className="h-5 w-1.5 bg-gold" /> Участник мероприятия
                </h3>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <FieldLabel required>ФИО</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.participant} onChange={(e) => update('participant', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>Должность</FieldLabel>
                    <input type="text" required className={fieldClass} value={state.participantPosition} onChange={(e) => update('participantPosition', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>Прямой телефон</FieldLabel>
                    <input type="tel" required className={fieldClass} value={state.participantPhone} onChange={(e) => update('participantPhone', e.target.value)} />
                  </div>
                  <div>
                    <FieldLabel required>E-mail участника</FieldLabel>
                    <input type="email" required className={fieldClass} value={state.participantEmail} onChange={(e) => update('participantEmail', e.target.value)} />
                  </div>
                </div>
              </div>

              {/* Logistics */}
              <div>
                <h3 className="mb-5 flex items-center gap-3 border-b border-ink/10 pb-3 font-display text-xl font-semibold text-navy">
                  <span className="h-5 w-1.5 bg-gold" /> Размещение в Астане
                </h3>
                <div className="grid gap-5">
                  <div>
                    <FieldLabel>Интересует размещение в отеле-партнёре?</FieldLabel>
                    <select className={fieldClass} value={state.hotel} onChange={(e) => update('hotel', e.target.value)}>
                      <option value="">Не нужно</option>
                      <option value="rixos">Rixos President (от €215)</option>
                      <option value="saad">Saad Hotel (от €155)</option>
                      <option value="hilton">Hilton Garden Inn (от €195)</option>
                      <option value="info">Хочу узнать больше</option>
                    </select>
                  </div>
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

              <button
                type="submit"
                className="w-full bg-navy py-5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold hover:text-navy-deep"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
