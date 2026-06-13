/* gws.pl website — Training planner (interactive stepper) */
const { useState: usePlannerState } = React;

function Planner({ t, onSelect }) {
  const { Eyebrow, Button, NodeBadge } = window.GwsPlDesignSystem_50b22c;
  const p = t.planner;
  const [aud, setAud] = usePlannerState(null);
  const [goal, setGoal] = usePlannerState(null);
  const [dur, setDur] = usePlannerState('full');
  const [fmt, setFmt] = usePlannerState('onsite');

  const audObj = p.audiences.find((a) => a.id === aud);
  const goalObj = p.goals.find((g) => g.id === goal);
  const durObj = p.durations.find((d) => d.id === dur);
  const fmtObj = p.formats.find((f) => f.id === fmt);
  const modules = goal ? (p.modules[goal] || []) : [];

  const ready = aud && goal;

  return (
    <section className="section" id="planner" data-screen-label="Training planner">
      <div className="container">
        <div className="section__head">
          <Eyebrow index="06">{p.eyebrow}</Eyebrow>
          <h2 className="section__title">{p.title}</h2>
          <p className="section__lead">{p.lead}</p>
        </div>
        <div className="planner__grid">
          <div className="planner__steps">
            {/* step 1 — audience */}
            <div>
              <div className="pstep__head">
                <span className="pstep__num">1</span>
                <div><div className="pstep__t">{p.steps[0].t}</div><div className="pstep__d">{p.steps[0].d}</div></div>
              </div>
              <div className="opt-grid opt-grid--2">
                {p.audiences.map((a) => (
                  <button key={a.id} className="opt" aria-pressed={aud === a.id} onClick={() => setAud(a.id)}>
                    <span className="opt__t">{a.t}</span>
                    <span className="opt__d">{a.d}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* step 2 — goal */}
            <div>
              <div className="pstep__head">
                <span className="pstep__num">2</span>
                <div><div className="pstep__t">{p.steps[1].t}</div><div className="pstep__d">{p.steps[1].d}</div></div>
              </div>
              <div className="opt-grid opt-grid--2">
                {p.goals.map((g) => (
                  <button key={g.id} className="opt" aria-pressed={goal === g.id} onClick={() => setGoal(g.id)}>
                    <span className="opt__t">{g.t}</span>
                    <span className="opt__d">{g.d}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* step 3 — duration */}
            <div>
              <div className="pstep__head">
                <span className="pstep__num">3</span>
                <div><div className="pstep__t">{p.steps[2].t}</div><div className="pstep__d">{p.steps[2].d}</div></div>
              </div>
              <div className="opt-grid opt-grid--4">
                {p.durations.map((d) => (
                  <button key={d.id} className="opt opt--mini" aria-pressed={dur === d.id} onClick={() => setDur(d.id)}>
                    <span className="opt__t">{d.t}</span>
                    <span className="opt__h">{d.h}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* step 4 — format */}
            <div>
              <div className="pstep__head">
                <span className="pstep__num">4</span>
                <div><div className="pstep__t">{p.steps[3].t}</div><div className="pstep__d">{p.steps[3].d}</div></div>
              </div>
              <div className="opt-grid opt-grid--3">
                {p.formats.map((f) => (
                  <button key={f.id} className="opt opt--mini" aria-pressed={fmt === f.id} onClick={() => setFmt(f.id)}>
                    <span className="opt__t">{f.t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* output */}
          <div className="plan-out">
            <div className="plan-out__top">
              <NodeBadge type="training_goal" label={p.modulesTitle} size="lg" />
              <div className="plan-out__title" style={{ marginTop: 12 }}>
                {ready ? goalObj.t : p.modulesTitle}
              </div>
              <div className="plan-out__chips">
                {audObj && <span className="plan-chip">{p.labels.audience}: <b>{audObj.t}</b></span>}
                {durObj && <span className="plan-chip">{p.labels.duration}: <b>{durObj.t} · {durObj.h}</b></span>}
                {fmtObj && <span className="plan-chip">{p.labels.format}: <b>{fmtObj.t}</b></span>}
              </div>
            </div>
            <div className="plan-out__body">
              {ready ? (
                <>
                  <div className="plan-out__hint">{p.modulesHint}</div>
                  <div className="plan-mods">
                    {modules.map((m, i) => (
                      <div className="plan-mod" key={i}><span className="mdot" aria-hidden="true" />{m}</div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="plan-empty">{p.empty}</p>
              )}
            </div>
            <div className="plan-out__foot">
              <Button variant="primary" full arrow onClick={() => onSelect('contact.call')}>{t.cta.propose}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Planner });
