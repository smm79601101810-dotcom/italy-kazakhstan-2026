export default function Footer() {
  return (
    <footer className="bg-navy-deep px-6 pb-8 pt-20 text-cream md:px-8">
      <div className="container-x">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="mb-4 font-display text-2xl text-gold-light">
              Italy–Kazakhstan 2026
            </h3>
            <p className="text-sm leading-relaxed text-cream/60">
              Серия флагманских мероприятий итало-казахстанского сотрудничества: от стратегического диалога об энергопереходе до конкретных инвестиционных решений и B2B-сделок. Под эгидой министерств обеих стран при участии CCIK (основана в 1996), ACIK и KITH.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
              SCF'26 · Апрель
            </h4>
            <p className="py-1.5 text-sm text-cream/70">21 апреля 2026</p>
            <p className="py-1.5 text-sm text-cream/70">Rixos President Astana</p>
            <p className="py-1.5 text-sm text-cream/70">Начало 08:00</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-green">
              ENERGY TRANSITION
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
              B2B Forum · Июнь
            </h4>
            <p className="py-1.5 text-sm text-cream/70">11–12 июня 2026</p>
            <p className="py-1.5 text-sm text-cream/70">AIFC, Mangilik El 55/18</p>
            <p className="py-1.5 text-sm text-cream/70">300+ делегатов</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
              INVESTMENT FORUM
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
              Связь
            </h4>
            <a
              href="mailto:info@italkazak.it"
              className="block py-1.5 text-sm text-cream/70 transition-colors hover:text-gold-light"
            >
              info@italkazak.it
            </a>
            <a
              href="mailto:ufficiopresidenza@italkaz.it"
              className="block py-1.5 text-sm text-cream/70 transition-colors hover:text-gold-light"
            >
              ufficiopresidenza@italkaz.it
            </a>
            <a
              href="mailto:property@aifc.kz"
              className="block py-1.5 text-sm text-cream/70 transition-colors hover:text-gold-light"
            >
              property@aifc.kz (AIFC)
            </a>
            <a
              href="https://www.italkazak.it"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1.5 text-sm text-cream/70 transition-colors hover:text-gold-light"
            >
              www.italkazak.it
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50">
          <div>© 2026 Camera di Commercio Italo-Kazaka · ACIK · KITH</div>
          <div>Под эгидой Министерств обеих стран · Sezione di Unioncamere</div>
        </div>
      </div>
    </footer>
  );
}
