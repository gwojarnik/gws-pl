/* gws.pl — Graph-only explorer (v2) app */
const { useState, useEffect, useMemo, useCallback } = React;

const NODE_VAR = {
  core: '--node-core', idea: '--node-idea', service: '--node-service', audience: '--node-audience',
  training_goal: '--node-goal', training_module: '--node-module', technology: '--node-tech',
  result: '--node-result', extra: '--node-extra', contact: '--node-contact',
};
const TYPE_NAME = {
  pl: { core: 'rdzeń', idea: 'idea', service: 'usługa', audience: 'odbiorca', training_goal: 'cel', training_module: 'moduł', technology: 'technologia', result: 'rezultat', extra: 'dodatkowe', contact: 'kontakt' },
  en: { core: 'core', idea: 'idea', service: 'service', audience: 'audience', training_goal: 'goal', training_module: 'module', technology: 'technology', result: 'result', extra: 'extra', contact: 'contact' },
};

function getInitialTheme() {
  const savedTheme = localStorage.getItem('gws-theme');
  const explicitTheme = localStorage.getItem('gws-theme-explicit') === '1';
  return explicitTheme && savedTheme ? savedTheme : 'dark';
}

function GxSearch({ lang, nodes, onPick }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return nodes.filter((n) => n.importance >= 4).slice(0, 8);
    return nodes.filter((n) => n.label.toLowerCase().includes(s) || (n.summary || '').toLowerCase().includes(s)).slice(0, 12);
  }, [q, nodes]);
  return (
    <div className="gx__search" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
      <label className="gx__searchin">
        {window.Icon.search ? window.Icon.search() : null}
        <input type="text" value={q} placeholder={lang === 'pl' ? 'Szukaj w grafie…' : 'Search the graph…'}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)} />
      </label>
      {open && (
        <div className="gx__results">
          {matches.length === 0 ? (
            <div className="gx__noresult">{lang === 'pl' ? 'Brak wyników' : 'No matches'}</div>
          ) : matches.map((n) => (
            <button key={n.id} className="gx__result" onMouseDown={(e) => e.preventDefault()}
              onClick={() => { onPick(n.id); setOpen(false); setQ(''); }}>
              <span className="rdot" style={{ '--_dot': `var(${NODE_VAR[n.type]})` }} />
              <span className="rl">{n.label}</span>
              <span className="rt">{TYPE_NAME[lang][n.type]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GxPanel({ t, lang, node, related, history, onClose, onSelect, onBook }) {
  if (!node) return null;
  const { NodeBadge, Button } = window.GwsPlDesignSystem_50b22c;
  const c = `var(${NODE_VAR[node.type] || '--node-idea'})`;
  const isContact = node.type === 'contact';
  return (
    <div className="gx__panel-inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="gx__panel-top" style={{ '--_c': c }}>
        {history.length > 1 && (
          <div className="gx__breadcrumb">
            {history.slice(-4).map((h, i, arr) => (
              <React.Fragment key={h.id + i}>
                {i > 0 && <span className="sep">/</span>}
                <button onClick={() => onSelect(h.id)}>{h.label.length > 18 ? h.label.slice(0, 16) + '…' : h.label}</button>
              </React.Fragment>
            ))}
          </div>
        )}
        <div className="gx__panel-row">
          <NodeBadge type={node.type} size="lg" />
          <button className="gx__close" onClick={onClose} aria-label={lang === 'pl' ? 'Zamknij' : 'Close'}>{window.Icon.x()}</button>
        </div>
        <h1 className="gx__title">{node.label}</h1>
        {node.subtitle && <div className="gx__subtitle">{node.subtitle}</div>}
      </div>

      <div className="gx__panel-body">
        <p className="gx__summary">{node.body || node.summary}</p>

        {(node.forWhom || node.format) && (
          <div className="gx__meta">
            {node.forWhom && <div className="gx__metarow"><span className="gx__metak">{t.panel.forWhom}</span><span className="gx__metav">{node.forWhom}</span></div>}
            {node.format && <div className="gx__metarow"><span className="gx__metak">{t.panel.format}</span><span className="gx__metav">{node.format}</span></div>}
          </div>
        )}

        {node.id === 'nav.faq' && t.faq && t.faq.items && (
          <div className="gx__faq">
            <div className="gx__seclabel">{t.faq.title}</div>
            {t.faq.items.map((it, i) => (
              <details key={i} className="gx__faq-item" open={i === 0}>
                <summary className="gx__faq-q">{it.q}</summary>
                <p className="gx__faq-a">{it.a}</p>
              </details>
            ))}
          </div>
        )}

        {isContact && (
          <div className="gx__links">
            <a className="gx__linkrow" href={'mailto:' + t.contact.email}>{window.Icon.mail()} {t.contact.email}</a>
            <a className="gx__linkrow" href={t.contact.linkedinUrl} target="_blank" rel="noopener">{window.Icon.linkedin()} {t.contact.linkedin}</a>
          </div>
        )}

        {related.length > 0 && (
          <div>
            <div className="gx__seclabel">{t.panel.related} · {related.length}</div>
            <div className="gx__related">
              {related.map((r) => (
                <button key={r.id} className="gx__chip" style={{ '--_cc': `var(${NODE_VAR[r.type]})` }} onClick={() => onSelect(r.id)}>
                  <span className="cdot" /> {r.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="gx__panel-foot">
        {isContact ? (
          <Button variant="primary" full arrow as="a" href={'mailto:' + t.contact.email}>{t.contact.emailCta}</Button>
        ) : (
          <Button variant="primary" full arrow onClick={onBook}>{t.cta.book}</Button>
        )}
      </div>
    </div>
  );
}

function GxApp() {
  const G = window.GWS_GRAPH, I = window.GWS_I18N;
  const { KnowledgeGraph, FilterPill } = window.GwsPlDesignSystem_50b22c;

  const [lang, setLang] = useState(() => localStorage.getItem('gws-lang') || 'pl');
  const [theme, setTheme] = useState(getInitialTheme);
  const [selected, setSelected] = useState(null);
  const [activeTypes, setActiveTypes] = useState(() => new Set());
  const [history, setHistory] = useState([]);
  const [touched, setTouched] = useState(false);
  const [vh, setVh] = useState(() => window.innerHeight);

  const t = I[lang];
  const nodes = useMemo(() => G.localizeNodes(lang), [lang]);
  const byId = useMemo(() => { const m = {}; nodes.forEach((n) => { m[n.id] = n; }); return m; }, [nodes]);

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('gws-theme', theme); }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang); localStorage.setItem('gws-lang', lang);
    document.title = lang === 'pl' ? 'gws.pl — Graf wiedzy' : 'gws.pl — Knowledge graph';
  }, [lang]);
  useEffect(() => {
    const onR = () => setVh(window.innerHeight);
    window.addEventListener('resize', onR); return () => window.removeEventListener('resize', onR);
  }, []);

  const node = selected ? byId[selected] : null;
  const related = node ? G.neighborsOf(node.id).map((id) => byId[id]).filter(Boolean).map((n) => ({ id: n.id, label: n.label, type: n.type })) : [];

  const selectNode = useCallback((id) => {
    setTouched(true);
    if (!id) { setSelected(null); return; }
    setSelected(id);
    setHistory((h) => {
      const last = h[h.length - 1];
      if (last && last.id === id) return h;
      const n = byId[id];
      return [...h.filter((x) => x.id !== id), { id, label: n ? n.label : id }].slice(-6);
    });
  }, [byId]);

  const toggleFilter = useCallback((type) => setActiveTypes((p) => { const n = new Set(p); n.has(type) ? n.delete(type) : n.add(type); return n; }), []);
  const clearAll = useCallback(() => { setSelected(null); setHistory([]); setActiveTypes(new Set()); }, []);
  const onThemeToggle = useCallback(() => {
    localStorage.setItem('gws-theme-explicit', '1');
    setTheme((p) => (p === 'dark' ? 'light' : 'dark'));
  }, []);

  const open = !!node;
  return (
    <div className="gx">
      <div className="gx__bar">
        <a className="gx__brand" href="#" onClick={(e) => { e.preventDefault(); clearAll(); }}>
          <img src="./assets/gws-mark.svg" alt="" />
          <span className="gx__wm">gws<span className="dot">.</span>pl</span>
        </a>
        <span className="gx__viewtag">{lang === 'pl' ? 'Graf wiedzy' : 'Knowledge graph'}</span>
        <div className="gx__spacer" />
        <div className="gx__right">
          <GxSearch lang={lang} nodes={nodes} onPick={selectNode} />
          <a className="gx__pagelink" href="strona.html">{window.Icon.layout ? window.Icon.layout() : null}<span>{lang === 'pl' ? 'Widok strony' : 'Page view'}</span></a>
          <window.LangToggle lang={lang} onChange={setLang} />
          <window.ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>

      <div className={'gx__stage' + (open ? ' is-open' : '')}>
        <KnowledgeGraph nodes={nodes} edges={G.EDGES} selectedId={selected} activeTypes={activeTypes}
          theme={theme} height={vh - 64} fullscreen onSelect={selectNode} />
      </div>

      <div className={'gx__hint' + (touched ? ' hide' : '')}>
        <div className="ring"><span /></div>
        <div className="txt">
          <h2>{lang === 'pl' ? 'Kliknij węzeł, aby odkryć treść' : 'Click a node to reveal its content'}</h2>
          <p>{lang === 'pl' ? 'Kluczowe węzły to sekcje menu. Przybliżaj kółkiem, przeciągaj tło.' : 'Key nodes are the menu sections. Zoom with the wheel, drag the background.'}</p>
        </div>
      </div>

      <div className="gx__legend">
        <div className="gx__legend-h">
          <span>{t.map.filtersLabel}</span>
          {activeTypes.size > 0 && <button onClick={() => setActiveTypes(new Set())}>{t.map.reset}</button>}
        </div>
        <div className="gx__legend-pills">
          {G.FILTER_GROUPS.map((g) => (
            <FilterPill key={g.type} type={g.type} label={g[lang]} active={activeTypes.has(g.type)} onClick={() => toggleFilter(g.type)} />
          ))}
        </div>
      </div>

      {(selected || activeTypes.size > 0) && (
        <button className="gx__recenter" onClick={clearAll}>{window.Icon.home ? window.Icon.home() : null}{lang === 'pl' ? 'Wyśrodkuj' : 'Recenter'}</button>
      )}

      <div className={'gx__panel' + (open ? ' is-open' : '')} role="dialog" aria-hidden={!open}>
        <GxPanel t={t} lang={lang} node={node} related={related} history={history}
          onClose={() => setSelected(null)} onSelect={selectNode} onBook={() => selectNode('contact.call')} />
      </div>
    </div>
  );
}

function gxBoot() {
  const mount = () => {
    if (window.__gxMounted) return;
    window.__gxMounted = true;
    if (!window.__gxRoot) window.__gxRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__gxRoot.render(<GxApp />);
  };
  if (window.GWS_GRAPH && window.GWS_I18N) mount();
  else window.addEventListener('gws-graph-ready', mount, { once: true });
}
if (window.__GWS_PAGE === 'graph' && !window.__gxBooted) { window.__gxBooted = true; gxBoot(); }
