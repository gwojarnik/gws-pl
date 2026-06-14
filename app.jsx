/* gws.pl website — App orchestrator */
const { useState, useEffect, useMemo, useCallback, useRef } = React;

const SECTION_IDS = ['hero', 'map', 'manifest', 'about', 'services', 'extras', 'planner', 'faq', 'contact'];

function smoothTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const y = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem('gws-theme');
  const explicitTheme = localStorage.getItem('gws-theme-explicit') === '1';
  return explicitTheme && savedTheme ? savedTheme : 'dark';
}

function App() {
  const G = window.GWS_GRAPH;
  const I = window.GWS_I18N;

  const [lang, setLang] = useState(() => localStorage.getItem('gws-lang') || 'pl');
  const [theme, setTheme] = useState(getInitialTheme);
  const [selected, setSelected] = useState(null);
  const [activeTypes, setActiveTypes] = useState(() => new Set());
  const [activeSection, setActiveSection] = useState('hero');

  const t = I[lang];
  const nodes = useMemo(() => G.localizeNodes(lang), [lang]);
  const byId = useMemo(() => { const m = {}; nodes.forEach((n) => { m[n.id] = n; }); return m; }, [nodes]);
  const edges = G.EDGES;

  /* theme + lang side effects on <html> + meta */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gws-theme', theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('gws-lang', lang);
    document.title = t.meta.title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t.meta.description);
  }, [lang, t]);

  /* scrollspy */
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const selectNode = useCallback((id) => {
    setSelected(id);
    if (id) {
      // route to the most relevant view: contact nodes → contact, else the map
      const node = byId[id];
      const dest = node && node.type === 'contact' ? 'map' : 'map';
      setTimeout(() => smoothTo(dest), 0);
    }
  }, [byId]);

  const toggleFilter = useCallback((type) => {
    setActiveTypes((prev) => { const n = new Set(prev); n.has(type) ? n.delete(type) : n.add(type); return n; });
  }, []);
  const resetFilters = useCallback(() => setActiveTypes(new Set()), []);

  const openSection = useCallback((node) => {
    const target = node.type === 'contact' ? 'contact' : (node.targetSection || 'contact');
    smoothTo(target === 'hero' ? 'map' : target);
  }, []);

  const onNav = useCallback((id) => { smoothTo(id); }, []);
  const onBook = useCallback(() => { setSelected('contact.call'); smoothTo('contact'); }, []);
  const onTheme = useCallback(() => {
    localStorage.setItem('gws-theme-explicit', '1');
    setTheme((p) => (p === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <div className="site">
      <Header t={t} lang={lang} theme={theme} active={activeSection}
        onLang={setLang} onTheme={onTheme}
        onNav={onNav} onBook={onBook} />
      <main>
        <Hero t={t} lang={lang} nodes={nodes} edges={edges} selected={selected} onSelect={selectNode} theme={theme} />
        <KnowledgeMap t={t} lang={lang} nodes={nodes} edges={edges} byId={byId}
          selected={selected} onSelect={selectNode} activeTypes={activeTypes}
          onToggle={toggleFilter} onReset={resetFilters} theme={theme}
          onOpenSection={openSection} filterGroups={G.FILTER_GROUPS} />
        <ManifestSection t={t} onSelect={selectNode} />
        <AboutSection t={t} onSelect={selectNode} />
        <ServicesSection t={t} lang={lang} byId={byId} onSelect={selectNode} />
        <ExtrasSection t={t} byId={byId} onSelect={selectNode} />
        <Planner t={t} onSelect={selectNode} />
        <FaqSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} onNav={onNav} />
    </div>
  );
}

function boot() {
  const mount = () => {
    if (window.__gwsMounted) return;          // idempotent — never mount twice
    window.__gwsMounted = true;
    if (!window.__gwsRoot) window.__gwsRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__gwsRoot.render(<App />);
  };
  if (window.GWS_GRAPH && window.GWS_I18N) mount();
  else window.addEventListener('gws-graph-ready', mount, { once: true });
}
if (window.__GWS_PAGE === 'site' && !window.__gwsBooted) { window.__gwsBooted = true; boot(); }
