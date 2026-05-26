export default function Footer() {
  return (
    <footer className="bg-navy-deep px-6 pb-8 pt-20 text-cream md:px-8">
      <div className="container-x">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <h3 className="mb-4 font-display text-2xl text-gold-light">
              Italy × Kazakhstan · Investment Forum 2026
            </h3>
            <p className="text-sm leading-relaxed text-cream/60">
              Главное событие двустороннего экономического сотрудничества Италии и Казахстана. Прямые B2B-встречи, подписание соглашений, создание совместного фонда с SIMEST. Под эгидой министерств обеих стран при участии CCIK (основана в 1996) и Kazakh Invest.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
              Investment Forum
            </h4>
            <p className="py-1.5 text-sm text-cream/70">11–12 июня 2026</p>
            <p className="py-1.5 text-sm text-cream/70">AIFC, Mangilik El 55/18</p>
            <p className="py-1.5 text-sm text-cream/70">300+ делегатов</p>
            <p className="py-1.5 text-sm text-cream/70">Регистрация открыта</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-gold">
              ASTANA · 2026
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
              href="mailto:Issak.K@agriqa.asia"
              className="block py-1.5 text-sm text-cream/70 transition-colors hover:text-gold-light"
            >
              Issak.K@agriqa.asia
            </a>
            <a
              href="mailto:Yusup.z@tetravision.kz"
              className="block py-1.5 text-sm text-cream/70 transition-colors hover:text-gold-light"
            >
              Yusup.z@tetravision.kz
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
          <div>© 2026 Camera di Commercio Italo-Kazaka · Kazakh Invest</div>
          <div>Под эгидой Министерств обеих стран · Sezione di Unioncamere</div>
        </div>
      </div>
    </footer>
  );
}
