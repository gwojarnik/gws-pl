/* gws.pl website — content sections: Manifest, About, Services, Extras */

function ManifestSection({ t, onSelect }) {
  const { Card, Eyebrow } = window.GwsPlDesignSystem_50b22c;
  const ideaIds = ['idea.competence', 'idea.question', 'idea.learning', 'idea.responsibility'];
  return (
    <section className="section" id="manifest" data-screen-label="Manifesto">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="02">{t.manifest.eyebrow}</Eyebrow>
          <h2 className="section__title">{t.manifest.title}</h2>
        </div>
        <div className="manifest__grid">
          {t.manifest.items.map((it, i) => (
            <Card key={i} node="idea" interactive onClick={() => onSelect(ideaIds[i])}>
              <div className="principle">
                <span className="principle__num">{String(i + 1).padStart(2, '0')} / 04</span>
                <h3 className="principle__t">{it.t}</h3>
                <p className="principle__d">{it.d}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ t, onSelect }) {
  const { Eyebrow, Button } = window.GwsPlDesignSystem_50b22c;
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="03">{t.about.eyebrow}</Eyebrow>
          <h2 className="section__title">{t.about.titleOuter}</h2>
        </div>
        <div className="about__grid">
          <aside className="about__aside">
            <h3 className="about__inner-title">{t.about.titleInner}</h3>
            <div className="about__pillars">
              {t.about.pillars.map((p, i) => (
                <div className="pillar" key={i}><span className="pdot" aria-hidden="true" /><span>{p}</span></div>
              ))}
            </div>
            <Button variant="secondary" arrow onClick={() => onSelect('res.measurable')}>{t.cta.work}</Button>
          </aside>
          <div className="about__body">
            {t.about.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ node, onSelect }) {
  const { Card } = window.GwsPlDesignSystem_50b22c;
  return (
    <Card node="service" interactive onClick={() => onSelect(node.id)}>
      <div className="svc-card">
        {node.subtitle && <span className="svc-card__sub">{node.subtitle}</span>}
        <span className="svc-card__t">{node.label}</span>
        <span className="svc-card__d">{node.summary}</span>
        <span className="svc-card__more">{node.format ? '↗ details' : '↗'} </span>
      </div>
    </Card>
  );
}

function ServicesSection({ t, lang, byId, onSelect }) {
  const { Eyebrow } = window.GwsPlDesignSystem_50b22c;
  const core = ['svc.strategy', 'svc.process', 'svc.change', 'svc.people', 'svc.analytics'].map((id) => byId[id]).filter(Boolean);
  const ai = ['svc.ai_strategy', 'svc.exec_training', 'svc.prompt', 'svc.mentoring', 'svc.talks'].map((id) => byId[id]).filter(Boolean);
  return (
    <section className="section" id="services" data-screen-label="Advisory">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="04">{t.services.eyebrow}</Eyebrow>
          <h2 className="section__title">{t.services.title}</h2>
          <p className="section__lead">{t.services.lead}</p>
        </div>
        <div className="svc__group">
          <div className="svc__grouplabel"><span>{t.services.coreLabel}</span><span className="rule" /></div>
          <div className="svc__grid">
            {core.map((n) => <ServiceCard key={n.id} node={n} onSelect={onSelect} />)}
          </div>
        </div>
        <div className="svc__group">
          <div className="svc__grouplabel"><span>{t.services.aiLabel}</span><span className="rule" /></div>
          <div className="svc__grid">
            {ai.map((n) => <ServiceCard key={n.id} node={n} onSelect={onSelect} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtrasSection({ t, byId, onSelect }) {
  const { Card, Eyebrow, NodeBadge } = window.GwsPlDesignSystem_50b22c;
  const items = ['extra.hifi', 'extra.apps'].map((id) => byId[id]).filter(Boolean);
  const extraLabel = t.locale && t.locale.startsWith('pl') ? 'Dodatkowe' : 'Extra';
  return (
    <section className="section" id="extras" data-screen-label="Other areas">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="05">{t.extras.eyebrow}</Eyebrow>
          <h2 className="section__title">{t.extras.title}</h2>
        </div>
        <div className="extras__grid">
          {items.map((n) => (
            <Card key={n.id} node="extra" interactive onClick={() => onSelect(n.id)}>
              <div className="extra-card">
                <NodeBadge type="extra" label={extraLabel} />
                <h3 className="extra-card__t">{n.label}</h3>
                <p className="extra-card__d">{n.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ManifestSection, AboutSection, ServicesSection, ExtrasSection });
