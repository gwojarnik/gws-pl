/* gws.pl website — chrome: icons, header, footer */

const Icon = {
  sun: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  moon: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUR: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.5V24H.2zM8.3 8.3h4.3v2.1h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V24h-4.5v-6.9c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V24H8.3z" />
    </svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  layout: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" />
    </svg>
  ),
  x: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  home: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  graph: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="6" cy="7" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="16" cy="18" r="2.4" /><path d="M8 8l8-1M7.5 9l8 7.5" />
    </svg>
  ),
  menu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
};

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="iconbtn" onClick={onToggle} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
      {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
    </button>
  );
}

function LangToggle({ lang, onChange }) {
  return (
    <div className="lang" role="group" aria-label="Language">
      <button aria-pressed={lang === 'pl'} onClick={() => onChange('pl')}>PL</button>
      <button aria-pressed={lang === 'en'} onClick={() => onChange('en')}>EN</button>
    </div>
  );
}

function Header({ t, lang, theme, active, onLang, onTheme, onNav, onBook }) {
  const { Button } = window.GwsPlDesignSystem_50b22c;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const go = (id) => { setMenuOpen(false); onNav(id); };
  const book = () => { setMenuOpen(false); onBook(); };
  return (
    <header className={'hdr' + (menuOpen ? ' is-open' : '')}>
      <div className="container hdr__in">
        <a className="hdr__brand" href="#hero" onClick={(e) => { e.preventDefault(); go('hero'); }}>
          <img src="./assets/gws-mark.svg" alt="" />
          <span className="hdr__wm">gws<span className="dot">.</span>pl</span>
        </a>
        <nav className="hdr__nav" aria-label="Primary">
          {t.nav.map((n) => (
            <a key={n.id} className="nav-link" href={'#' + n.id}
              aria-current={active === n.id ? 'true' : undefined}
              onClick={(e) => { e.preventDefault(); go(n.id); }}>{n.label}</a>
          ))}
        </nav>
        <div className="hdr__right">
          <a className="iconbtn" href="index.html" aria-label={lang === 'pl' ? 'Otwórz graf wiedzy' : 'Open knowledge graph'} title={lang === 'pl' ? 'Graf wiedzy' : 'Knowledge graph'}>
            <Icon.graph />
          </a>
          <LangToggle lang={lang} onChange={onLang} />
          <ThemeToggle theme={theme} onToggle={onTheme} />
          <Button variant="primary" size="sm" arrow onClick={onBook}>{t.cta.book}</Button>
        </div>
        <button className="hdr__burger" aria-label={menuOpen ? (lang === 'pl' ? 'Zamknij menu' : 'Close menu') : 'Menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <Icon.x /> : <Icon.menu />}
        </button>
      </div>
      <div className="hdr__mobile" aria-hidden={!menuOpen}>
        <nav className="hdr__mnav" aria-label="Mobile">
          {t.nav.map((n) => (
            <a key={n.id} className="hdr__mlink" href={'#' + n.id}
              aria-current={active === n.id ? 'true' : undefined}
              onClick={(e) => { e.preventDefault(); go(n.id); }}>{n.label}</a>
          ))}
        </nav>
        <div className="hdr__mrow">
          <LangToggle lang={lang} onChange={onLang} />
          <ThemeToggle theme={theme} onToggle={onTheme} />
          <a className="iconbtn" href="index.html" aria-label={lang === 'pl' ? 'Otwórz graf wiedzy' : 'Open knowledge graph'}>
            <Icon.graph />
          </a>
        </div>
        <Button variant="primary" size="lg" full arrow onClick={book}>{t.cta.book}</Button>
      </div>
    </header>
  );
}

function Footer({ t, onNav }) {
  const coop = [t.nav[2], t.nav[3], t.nav[4]];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <a className="hdr__brand" href="#hero" onClick={(e) => { e.preventDefault(); onNav('hero'); }}>
              <img src="./assets/gws-mark.svg" alt="" style={{ width: 30, height: 30 }} />
              <span className="hdr__wm" style={{ fontSize: 22 }}>gws<span className="dot">.</span>pl</span>
            </a>
            <p className="footer__claim">{t.footer.claim}</p>
          </div>
          <div className="footer__col">
            <h4>{t.footer.nav}</h4>
            {t.nav.slice(0, 4).map((n) => (
              <a key={n.id} href={'#' + n.id} onClick={(e) => { e.preventDefault(); onNav(n.id); }}>{n.label}</a>
            ))}
          </div>
          <div className="footer__col">
            <h4>{t.footer.coop}</h4>
            {coop.map((n) => (
              <a key={n.id} href={'#' + n.id} onClick={(e) => { e.preventDefault(); onNav(n.id); }}>{n.label}</a>
            ))}
            <a href={t.contact.linkedinUrl} target="_blank" rel="noopener">{t.contact.linkedinLabel}</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__rights">{t.footer.rights}</span>
          <div className="footer__legal">
            <a href="polityka-prywatnosci.html">{t.footer.privacy}</a>
            <a href="regulamin.html">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, ThemeToggle, LangToggle, Header, Footer });
