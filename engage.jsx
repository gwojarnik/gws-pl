/* gws.pl website — FAQ accordion + Contact section */
const { useState: useEngageState } = React;

function FaqSection({ t }) {
  const { Eyebrow } = window.GwsPlDesignSystem_50b22c;
  const [open, setOpen] = useEngageState(0);
  return (
    <section className="section" id="faq" data-screen-label="FAQ">
      <div className="container narrow">
        <div className="section__head">
          <Eyebrow index="07">{t.faq.eyebrow}</Eyebrow>
          <h2 className="section__title">{t.faq.title}</h2>
        </div>
        <div className="faq__list">
          {t.faq.items.map((it, i) => (
            <div className="faq-item" key={i} data-open={open === i}>
              <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </button>
              <div className="faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  const { Eyebrow, Button } = window.GwsPlDesignSystem_50b22c;
  const c = t.contact;
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="08">{c.eyebrow}</Eyebrow>
          <h2 className="section__title">{c.title}</h2>
          <p className="section__lead">{c.lead}</p>
        </div>
        <div className="contact__grid">
          <div className="contact__info">
            <a className="contact-row" href={'mailto:' + c.email}>
              <span className="contact-row__k">{c.emailLabel}</span>
              <span className="contact-row__v">{window.Icon.mail()} {c.email}</span>
            </a>
            <a className="contact-row" href={c.linkedinUrl} target="_blank" rel="noopener">
              <span className="contact-row__k">{c.linkedinLabel}</span>
              <span className="contact-row__v">{window.Icon.linkedin()} {c.linkedin}</span>
            </a>
          </div>
          <div className="contact__note">
            <span className="contact__note-k">{c.callTitle}</span>
            <p className="contact__note-p">{c.callBody}</p>
            <div className="contact__note-cta">
              <Button variant="primary" size="lg" arrow as="a" href={'mailto:' + c.email}>{c.emailCta}</Button>
              <Button variant="secondary" size="lg" as="a" href={c.linkedinUrl} target="_blank" rel="noopener">{c.linkedinLabel}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FaqSection, ContactSection });
