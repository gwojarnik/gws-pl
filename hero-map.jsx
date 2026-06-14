/* gws.pl website — Hero + Knowledge map sections */

function Hero({ t, lang, nodes, edges, selected, onSelect, theme }) {
  const { KnowledgeGraph, Button, Eyebrow } = window.GwsPlDesignSystem_50b22c;
  const stats = lang === 'pl'
    ? [{ b: 'dr', s: 'ekonomia' }, { b: '20+', s: 'lat praktyki' }, { b: 'PL · EN', s: 'dwa języki' }]
    : [{ b: 'PhD', s: 'economics' }, { b: '20+', s: 'years of practice' }, { b: 'PL · EN', s: 'two languages' }];
  // headline: lead word coloring
  return (
    <section className="section hero" id="hero" data-screen-label="Hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="hero__headline">
              <span className="accent">{lang === 'pl' ? 'Strategia. Ludzie. Wyniki.' : 'Strategy. People. Results.'}</span>{' '}
              {t.hero.headline}
            </h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__cta">
              <Button variant="primary" size="lg" arrow onClick={() => onSelect('contact.call')}>{t.cta.book}</Button>
              <Button variant="secondary" size="lg" onClick={() => onSelect('idea.responsibility')}>{t.cta.manifesto}</Button>
            </div>
            <div className="hero__stats">
              {stats.map((s, i) => (
                <div className="hero__stat" key={i}><b>{s.b}</b><span>{s.s}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KnowledgeMap({ t, lang, nodes, edges, byId, selected, onSelect, activeTypes, onToggle, onReset, theme, onOpenSection, filterGroups }) {
  const { KnowledgeGraph, NodePanel, FilterPill, Eyebrow } = window.GwsPlDesignSystem_50b22c;
  const node = selected ? byId[selected] : null;
  const related = node
    ? window.GWS_GRAPH.neighborsOf(node.id).map((id) => byId[id]).filter(Boolean)
        .map((n) => ({ id: n.id, label: n.label, type: n.type }))
    : [];
  const counts = {};
  nodes.forEach((n) => { counts[n.type] = (counts[n.type] || 0) + 1; });

  return (
    <section className="section" id="map" data-screen-label="Knowledge map">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="01">{t.map.eyebrow}</Eyebrow>
          <h2 className="section__title">{t.map.title}</h2>
          <p className="section__lead">{t.map.lead}</p>
        </div>
        <div className="map__bar">
          <div className="map__filters" role="group" aria-label={t.map.filtersLabel}>
            {filterGroups.map((g) => (
              <FilterPill key={g.type} type={g.type} label={g[lang]} count={counts[g.type]}
                active={activeTypes.has(g.type)} onClick={() => onToggle(g.type)} />
            ))}
            {activeTypes.size > 0 && (
              <button className="nav-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }} onClick={onReset}>{t.map.reset} ✕</button>
            )}
          </div>
        </div>
        <div className="map__layout">
          <div className="map__stage">
            <KnowledgeGraph nodes={nodes} edges={edges} selectedId={selected} activeTypes={activeTypes}
              theme={theme} height={600} onSelect={onSelect} />
            <div className="graph-hint">{lang === 'pl' ? 'najedź, by prześledzić · przeciągnij węzeł · filtruj powyżej' : 'hover to trace · drag a node · filter above'}</div>
          </div>
          <div className="map__panelcol">
            {node ? (
              <NodePanel node={node} related={related} labels={t.panel}
                onClose={() => onSelect(null)} onSelect={onSelect}
                onOpen={(n) => onOpenSection(n)} />
            ) : (
              <div className="map__placeholder">
                <div className="pdot" />
                {t.map.panelHint}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, KnowledgeMap });
