/* @ds-bundle: {"format":3,"namespace":"GwsPlDesignSystem_50b22c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FilterPill","sourcePath":"components/graph/FilterPill.jsx"},{"name":"KnowledgeGraph","sourcePath":"components/graph/KnowledgeGraph.jsx"},{"name":"NodeBadge","sourcePath":"components/graph/NodeBadge.jsx"},{"name":"NodePanel","sourcePath":"components/graph/NodePanel.jsx"},{"name":"NODE_TYPES","sourcePath":"data/graph.js"},{"name":"FILTER_GROUPS","sourcePath":"data/graph.js"},{"name":"NAV_HUBS","sourcePath":"data/graph.js"},{"name":"NODES","sourcePath":"data/graph.js"},{"name":"EDGES","sourcePath":"data/graph.js"}],"sourceHashes":{"components/core/Badge.jsx":"03740237077c","components/core/Button.jsx":"f13be0bc18e1","components/core/Card.jsx":"17c35649fc76","components/core/Eyebrow.jsx":"3d534b91fe86","components/graph/FilterPill.jsx":"0e4aa617c768","components/graph/KnowledgeGraph.jsx":"23befb22da77","components/graph/NodeBadge.jsx":"9ae455745e04","components/graph/NodePanel.jsx":"851584cecae1","data/graph.js":"64bf31553e56","ui_kits/website/app.jsx":"978ef6045928","ui_kits/website/chrome.jsx":"dc808a90c7ab","ui_kits/website/engage.jsx":"95fe1e5d150d","ui_kits/website/graph-app.jsx":"0a5291abb1b3","ui_kits/website/hero-map.jsx":"784360475eda","ui_kits/website/i18n.js":"7baabefbb8dd","ui_kits/website/planner.jsx":"a1bdd7f195c3","ui_kits/website/sections.jsx":"50f48d0a60de"},"inlinedExternals":[],"unexposedExports":[{"name":"localizeNodes","sourcePath":"data/graph.js"},{"name":"neighborsOf","sourcePath":"data/graph.js"}]} */

(() => {

const __ds_ns = (window.GwsPlDesignSystem_50b22c = window.GwsPlDesignSystem_50b22c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'gws-badge-styles';
const CSS = `
.gws-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: var(--text-meta);
  font-weight: var(--fw-medium); letter-spacing: var(--tracking-meta);
  text-transform: uppercase;
  padding: 4px 9px; border-radius: var(--radius-pill);
  border: 1px solid var(--border-default); background: var(--surface-raised);
  color: var(--text-secondary); white-space: nowrap;
}
.gws-badge--accent { background: var(--accent-soft); border-color: var(--accent-line); color: var(--text-accent); }
.gws-badge--success { background: color-mix(in srgb, var(--success) 14%, transparent); border-color: color-mix(in srgb, var(--success) 40%, transparent); color: var(--success); }
.gws-badge--warning { background: color-mix(in srgb, var(--warning) 14%, transparent); border-color: color-mix(in srgb, var(--warning) 40%, transparent); color: var(--warning); }
.gws-badge--plain { background: transparent; }
.gws-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['gws-badge', tone !== 'neutral' && `gws-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "gws-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'gws-button-styles';
const CSS = `
.gws-btn {
  --_h: 44px; --_px: 20px; --_fs: 0.9375rem;
  display: inline-flex; align-items: center; justify-content: center; gap: 9px;
  height: var(--_h); padding: 0 var(--_px);
  font-family: var(--font-body); font-weight: var(--fw-semibold); font-size: var(--_fs);
  letter-spacing: -0.005em; line-height: 1; white-space: nowrap;
  border: 1px solid transparent; border-radius: var(--radius-pill);
  cursor: pointer; user-select: none; text-decoration: none;
  transition: background var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out);
}
.gws-btn:active { transform: translateY(1px); }
.gws-btn:disabled, .gws-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
.gws-btn--sm { --_h: 36px; --_px: 14px; --_fs: 0.8125rem; }
.gws-btn--lg { --_h: 52px; --_px: 26px; --_fs: 1rem; }
.gws-btn--full { width: 100%; }

.gws-btn--primary { background: var(--accent); color: var(--text-on-accent); }
.gws-btn--primary:hover { background: var(--accent-hover); }

.gws-btn--secondary {
  background: var(--surface-raised); color: var(--text-primary);
  border-color: var(--border-strong);
}
.gws-btn--secondary:hover { border-color: var(--border-accent); background: var(--surface-card); }

.gws-btn--ghost { background: transparent; color: var(--text-secondary); }
.gws-btn--ghost:hover { color: var(--text-primary); background: var(--accent-soft); }

.gws-btn--accentline {
  background: var(--accent-soft); color: var(--text-accent);
  border-color: var(--accent-line);
}
.gws-btn--accentline:hover { background: color-mix(in srgb, var(--accent) 20%, transparent); }

.gws-btn__icon { display: inline-flex; width: 1.05em; height: 1.05em; }
.gws-btn__icon svg { width: 100%; height: 100%; }
.gws-btn__arrow { transition: transform var(--dur-fast) var(--ease-out); }
.gws-btn:hover .gws-btn__arrow { transform: translateX(3px); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  arrow = false,
  full = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const cls = ['gws-btn', `gws-btn--${variant}`, size !== 'md' && `gws-btn--${size}`, full && 'gws-btn--full', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "gws-btn__icon"
  }, icon), children && /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    className: "gws-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "gws-btn__icon"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'gws-card-styles';
const CSS = `
.gws-card {
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: border-color var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out);
}
.gws-card--raised { background: var(--surface-raised); box-shadow: var(--shadow-md); }
.gws-card--interactive { cursor: pointer; }
.gws-card--interactive:hover {
  border-color: var(--border-accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}
.gws-card--interactive:active { transform: translateY(-1px); }
/* node-typed left rail: a thin top accent that reads as a graph tag */
.gws-card[data-node] { padding-top: calc(var(--space-5) + 4px); }
.gws-card[data-node]::before {
  content: ""; position: absolute; inset: 0 auto auto 0;
  height: 3px; width: 100%; border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: var(--_node, var(--accent));
  opacity: 0.9;
}
`;
const NODE_VAR = {
  core: 'var(--node-core)',
  idea: 'var(--node-idea)',
  service: 'var(--node-service)',
  audience: 'var(--node-audience)',
  goal: 'var(--node-goal)',
  module: 'var(--node-module)',
  technology: 'var(--node-tech)',
  result: 'var(--node-result)',
  extra: 'var(--node-extra)',
  contact: 'var(--node-contact)'
};
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  raised = false,
  interactive = false,
  node,
  children,
  className = '',
  style = {},
  ...rest
}) {
  ensureStyles();
  const cls = ['gws-card', raised && 'gws-card--raised', interactive && 'gws-card--interactive', className].filter(Boolean).join(' ');
  const mergedStyle = node ? {
    ...style,
    '--_node': NODE_VAR[node] || 'var(--accent)'
  } : style;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    "data-node": node || undefined,
    style: mergedStyle
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'gws-eyebrow-styles';
const CSS = `
.gws-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono); font-size: var(--text-eyebrow);
  font-weight: var(--fw-medium); letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase; color: var(--text-accent);
}
.gws-eyebrow__tick { width: 18px; height: 1px; background: var(--accent-line); }
.gws-eyebrow__idx { color: var(--text-faint); }
.gws-eyebrow--muted { color: var(--text-muted); }
.gws-eyebrow--muted .gws-eyebrow__tick { background: var(--border-strong); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Eyebrow({
  children,
  index,
  tick = true,
  muted = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['gws-eyebrow', muted && 'gws-eyebrow--muted', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    className: "gws-eyebrow__tick",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, children), index != null && /*#__PURE__*/React.createElement("span", {
    className: "gws-eyebrow__idx"
  }, "/ ", index));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/graph/FilterPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'gws-filterpill-styles';
const CSS = `
.gws-filterpill {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: var(--text-eyebrow);
  font-weight: var(--fw-medium); letter-spacing: 0.04em;
  padding: 7px 13px; border-radius: var(--radius-pill);
  border: 1px solid var(--border-default); background: var(--surface-raised);
  color: var(--text-muted); cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              background var(--dur-fast) var(--ease-out);
}
.gws-filterpill:hover { color: var(--text-secondary); border-color: var(--border-strong); }
.gws-filterpill__dot {
  width: 9px; height: 9px; border-radius: 50%; background: var(--_c);
  transition: box-shadow var(--dur-fast) var(--ease-out);
}
.gws-filterpill[aria-pressed="true"] {
  color: var(--text-primary);
  border-color: color-mix(in srgb, var(--_c) 55%, transparent);
  background: color-mix(in srgb, var(--_c) 12%, transparent);
}
.gws-filterpill[aria-pressed="true"] .gws-filterpill__dot { box-shadow: 0 0 0 3px color-mix(in srgb, var(--_c) 28%, transparent); }
.gws-filterpill__count { color: var(--text-faint); font-size: var(--text-meta); }
.gws-filterpill[aria-pressed="true"] .gws-filterpill__count { color: var(--text-secondary); }
`;
const NODE_VAR = {
  core: '--node-core',
  idea: '--node-idea',
  service: '--node-service',
  audience: '--node-audience',
  training_goal: '--node-goal',
  goal: '--node-goal',
  training_module: '--node-module',
  module: '--node-module',
  technology: '--node-tech',
  result: '--node-result',
  extra: '--node-extra',
  contact: '--node-contact'
};
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function FilterPill({
  type = 'idea',
  label,
  active = false,
  count,
  onClick,
  className = '',
  ...rest
}) {
  ensureStyles();
  const v = NODE_VAR[type] || '--node-idea';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['gws-filterpill', className].filter(Boolean).join(' '),
    style: {
      '--_c': `var(${v})`
    },
    "aria-pressed": active,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "gws-filterpill__dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, label), count != null && /*#__PURE__*/React.createElement("span", {
    className: "gws-filterpill__count"
  }, count));
}
Object.assign(__ds_scope, { FilterPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graph/FilterPill.jsx", error: String((e && e.message) || e) }); }

// components/graph/KnowledgeGraph.jsx
try { (() => {
const {
  useRef,
  useEffect,
  useState,
  useCallback
} = React;
/* Map data-model node types → palette key (CSS var suffix). */
const TYPE_KEY = {
  core: 'core',
  idea: 'idea',
  service: 'service',
  audience: 'audience',
  training_goal: 'goal',
  training_module: 'module',
  technology: 'technology',
  result: 'result',
  extra: 'extra',
  contact: 'contact'
};
const STYLE_ID = 'gws-graph-styles';
const CSS = `
.kg-zoom { position: absolute; top: 14px; right: 14px; z-index: 6; display: flex; flex-direction: column; gap: 6px; }
.kg-zoom button {
  width: 34px; height: 34px; display: grid; place-items: center;
  border-radius: var(--radius-sm); border: 1px solid var(--border-default);
  background: var(--surface-overlay); -webkit-backdrop-filter: blur(var(--blur-sm)); backdrop-filter: blur(var(--blur-sm));
  color: var(--text-secondary); font-family: var(--font-mono); font-size: 16px; line-height: 1; cursor: pointer;
  transition: color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.kg-zoom button:hover { color: var(--text-primary); border-color: var(--border-accent); }
`;
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function resolvePalette(el) {
  const cs = getComputedStyle(el);
  const g = n => cs.getPropertyValue(n).trim();
  return {
    core: g('--node-core'),
    idea: g('--node-idea'),
    service: g('--node-service'),
    audience: g('--node-audience'),
    goal: g('--node-goal'),
    module: g('--node-module'),
    technology: g('--node-tech'),
    result: g('--node-result'),
    extra: g('--node-extra'),
    contact: g('--node-contact'),
    edge: g('--graph-edge'),
    edgeHot: g('--graph-edge-hot'),
    ring: g('--graph-node-ring'),
    text: g('--text-secondary'),
    textFaint: g('--text-faint'),
    bg1: g('--graph-bg-1'),
    bg2: g('--graph-bg-2'),
    grid: g('--graph-grid')
  };
}
const TAU = Math.PI * 2;
/* parse a CSS color (hex #rgb/#rrggbb or rgb()/rgba()) into {r,g,b} */
function parseRGB(s) {
  s = (s || '').trim();
  if (s[0] === '#') {
    let h = s.slice(1);
    if (h.length === 3) h = h.replace(/./g, c => c + c);
    const n = parseInt(h, 16);
    return { r: n >> 16 & 255, g: n >> 8 & 255, b: n & 255 };
  }
  const m = s.match(/[\d.]+/g) || [0, 0, 0];
  return { r: +m[0] || 0, g: +m[1] || 0, b: +m[2] || 0 };
}
const RGBA = (c, a) => `rgba(${c.r | 0},${c.g | 0},${c.b | 0},${a})`;
function paletteRGB(pal) {
  const out = {};
  for (const k in pal) out[k] = parseRGB(pal[k]);
  return out;
}
const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
const radiusFor = imp => 5 + (imp || 1) * 2.3;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function KnowledgeGraph({
  nodes = [],
  edges = [],
  selectedId = null,
  activeTypes = null,
  onSelect,
  onHover,
  theme = 'light',
  height = 540,
  fullscreen = false,
  controls = true,
  className = ''
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const ctrlRef = useRef({});
  const stateRef = useRef({
    pos: new Map(),
    vel: new Map(),
    alpha: 1,
    raf: 0,
    drag: null,
    hover: null,
    w: 0,
    h: 0,
    pal: null,
    rgb: null,
    _palTheme: null,
    t: 0,
    _last: 0,
    intro: null,
    view: {
      s: 1,
      tx: 0,
      ty: 0
    },
    vt: {
      s: 1,
      tx: 0,
      ty: 0
    },
    userView: false,
    panning: null
  });
  const [hoverId, setHoverId] = useState(null);
  const isActive = useCallback(t => !activeTypes || activeTypes.size === 0 || activeTypes.has(t), [activeTypes]);
  // "live" mirror of frequently-changing inputs so the render loop can read the
  // latest values WITHOUT being torn down + rebuilt on every selection / filter
  const liveRef = useRef({});
  liveRef.current.selectedId = selectedId;
  liveRef.current.activeTypes = activeTypes;
  liveRef.current.onSelect = onSelect;
  liveRef.current.onHover = onHover;

  /* (re)initialise layout when the node set changes */
  useEffect(() => {
    const st = stateRef.current;
    const ids = nodes.map(n => n.id);
    const sameSet = ids.length === st.pos.size && ids.every(id => st.pos.has(id));
    if (sameSet) return;
    const cx = (st.w || 800) / 2,
      cy = (st.h || height) / 2;
    st.pos = new Map();
    st.vel = new Map();
    const Nn = nodes.length;
    nodes.forEach((n, i) => {
      const core = n.type === 'core';
      const ang = i / Math.max(1, Nn) * Math.PI * 2;
      const rad = core ? 26 + i * 7 : 150 + i * 53 % 180;
      st.pos.set(n.id, {
        x: cx + Math.cos(ang) * rad,
        y: cy + Math.sin(ang) * rad
      });
      st.vel.set(n.id, {
        x: 0,
        y: 0
      });
    });
    st.alpha = 1;
    st.intro = {
      start: performance.now(),
      dur: 950
    };
  }, [nodes, height]);

  /* simulation + render loop */
  useEffect(() => {
    const canvas = canvasRef.current,
      wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    const st = stateRef.current;
    st.pal = resolvePalette(canvas);
    st.rgb = paletteRGB(st.pal);
    // read filter state live (shadows the outer isActive) so filtering doesn't
    // require re-running this effect
    const isActive = t => {
      const at = liveRef.current.activeTypes;
      return !at || at.size === 0 || at.has(t);
    };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const adjacency = new Map();
    nodes.forEach(n => adjacency.set(n.id, new Set()));
    edges.forEach(e => {
      adjacency.get(e.source)?.add(e.target);
      adjacency.get(e.target)?.add(e.source);
    });
    const typeById = new Map(nodes.map(n => [n.id, n.type]));

    function resize() {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.round(r.width * dpr),
        chh = Math.round(height * dpr);
      st.w = r.width;
      st.h = height;
      st._dpr = dpr;
      // only reassign (which clears the canvas) when the pixel size truly changes,
      // then repaint immediately so a resize never flashes a blank/cleared frame
      if (canvas.width !== cw || canvas.height !== chh) {
        canvas.width = cw;
        canvas.height = chh;
        canvas.style.width = r.width + 'px';
        canvas.style.height = height + 'px';
        if (st.rgb) draw();
      }
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }
    // default (unselected) view: scale the whole graph to fill the viewport so it
    // grows with the screen instead of sitting at a fixed size on large monitors.
    // never shrinks below 1 (mobile/embeds keep today's behaviour) and caps below
    // the selected-node zoom so clicking a node still reads as a focus-in.
    function computeFit() {
      if (!fullscreen || !st.pos.size) return { s: 1, tx: 0, ty: 0 };
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      nodes.forEach(n => {
        const p = st.pos.get(n.id);
        if (!p) return;
        const r = radiusFor(n.importance) + 12;
        if (p.x - r < minX) minX = p.x - r;
        if (p.y - r < minY) minY = p.y - r;
        if (p.x + r > maxX) maxX = p.x + r;
        if (p.y + r > maxY) maxY = p.y + r;
      });
      if (!isFinite(minX)) return { s: 1, tx: 0, ty: 0 };
      const bw = Math.max(1, maxX - minX), bh = Math.max(1, maxY - minY);
      const s = clamp(Math.min(st.w / bw, st.h / bh) * 0.96, 1, 2);
      const bcx = (minX + maxX) / 2, bcy = (minY + maxY) / 2;
      return { s, tx: st.w / 2 - bcx * s, ty: st.h / 2 - bcy * s };
    }
    function tick() {
      const selectedId = liveRef.current.selectedId;
      // Resolve the themed palette inside the rAF loop (not the effect body):
      // by the time a frame runs, the consumer's data-theme attribute is already
      // applied, so toggling theme never leaves the canvas on the stale palette.
      if (st._palTheme !== theme) {
        st.pal = resolvePalette(canvas);
        st.rgb = paletteRGB(st.pal);
        st._palTheme = theme;
      }
      const cx = st.w / 2,
        cy = st.h / 2;
      // visual clock — advances regardless of physics alpha so the graph stays alive
      const now = performance.now();
      const dt = st._last ? Math.min((now - st._last) / 16.67, 3) : 1;
      st._last = now;
      if (!reduce) st.t += dt;
      if (reduce) st.intro = null;
      if (st.alpha > 0.02 && !reduce) {
        // repulsion
        for (let i = 0; i < nodes.length; i++) {
          const a = st.pos.get(nodes[i].id);
          if (!a) continue;
          for (let j = i + 1; j < nodes.length; j++) {
            const b = st.pos.get(nodes[j].id);
            if (!b) continue;
            let dx = a.x - b.x,
              dy = a.y - b.y;
            let d2 = dx * dx + dy * dy || 1;
            const d = Math.sqrt(d2);
            const f = 1500 / d2;
            const fx = dx / d * f,
              fy = dy / d * f;
            const va = st.vel.get(nodes[i].id),
              vb = st.vel.get(nodes[j].id);
            va.x += fx;
            va.y += fy;
            vb.x -= fx;
            vb.y -= fy;
          }
        }
        // springs
        edges.forEach(e => {
          const a = st.pos.get(e.source),
            b = st.pos.get(e.target);
          if (!a || !b) return;
          const dx = b.x - a.x,
            dy = b.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const rest = 92 + (6 - (e.strength || 3)) * 22;
          const f = (d - rest) * 0.015;
          const fx = dx / d * f,
            fy = dy / d * f;
          st.vel.get(e.source).x += fx;
          st.vel.get(e.source).y += fy;
          st.vel.get(e.target).x -= fx;
          st.vel.get(e.target).y -= fy;
        });
        // gather selected node's neighbours toward it (bring related forward)
        const selP = selectedId ? st.pos.get(selectedId) : null;
        const neigh = selectedId ? adjacency.get(selectedId) : null;
        // centering + integrate
        nodes.forEach(n => {
          const p = st.pos.get(n.id),
            v = st.vel.get(n.id);
          if (!p) return;
          v.x += (cx - p.x) * 0.0015;
          v.y += (cy - p.y) * 0.0015;
          if (selP && neigh && neigh.has(n.id)) {
            v.x += (selP.x - p.x) * 0.02;
            v.y += (selP.y - p.y) * 0.02;
          }
          v.x *= 0.86;
          v.y *= 0.86;
          if (st.drag !== n.id) {
            p.x += v.x * st.alpha;
            p.y += v.y * st.alpha;
          }
        });
        st.alpha *= 0.99;
      }

      // ── view: auto-focus on selected, else fit ──
      if (!st.userView) {
        const sel = selectedId ? st.pos.get(selectedId) : null;
        if (sel) {
          const s = fullscreen ? 2.05 : 1.75;
          st.vt = {
            s,
            tx: st.w / 2 - sel.x * s,
            ty: st.h / 2 - sel.y * s
          };
        } else {
          st.vt = computeFit();
        }
      }
      const k = reduce ? 1 : 0.12;
      st.view.s = lerp(st.view.s, st.vt.s, k);
      st.view.tx = lerp(st.view.tx, st.vt.tx, k);
      st.view.ty = lerp(st.view.ty, st.vt.ty, k);
      canvas.__kgScale = st.view.s;
      draw();
      st.raf = requestAnimationFrame(tick);
    }
    function draw() {
      const selectedId = liveRef.current.selectedId;
      const activeTypes = liveRef.current.activeTypes;
      const pal = st.pal,
        rgb = st.rgb || {},
        dpr = st._dpr || 1;
      const dark = theme !== 'light';
      const ADD = dark ? 'lighter' : 'source-over';
      const GLOW = dark ? 1 : 0.45;

      // intro progress (0→1, eased); collapses to 1 under reduced-motion
      let ip = 1;
      if (st.intro) {
        if (reduce) {
          st.intro = null;
        } else {
          const raw = clamp((performance.now() - st.intro.start) / st.intro.dur, 0, 1);
          ip = easeOutCubic(raw);
          if (raw >= 1) st.intro = null;
        }
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, st.w, st.h);

      // ── animated background (fullscreen only; embeds keep their card bg) ──
      if (fullscreen && rgb.bg1) {
        const bg = ctx.createRadialGradient(st.w * 0.5, st.h * 0.28, 0, st.w * 0.5, st.h * 0.5, Math.hypot(st.w, st.h) * 0.62);
        bg.addColorStop(0, RGBA(rgb.bg1, 1));
        bg.addColorStop(1, RGBA(rgb.bg2, 1));
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, st.w, st.h);
        // slowly drifting nebula in accent hues
        ctx.save();
        ctx.globalCompositeOperation = dark ? 'lighter' : 'multiply';
        const hues = [rgb.core, rgb.technology, rgb.result];
        for (let i = 0; i < 3; i++) {
          const nx = st.w * (0.28 + 0.22 * i) + Math.sin(st.t * 0.0009 + i * 1.7) * st.w * 0.1;
          const ny = st.h * (0.34 + 0.18 * Math.sin(i * 2.1)) + Math.cos(st.t * 0.0008 + i) * st.h * 0.08;
          const R = Math.max(st.w, st.h) * 0.5;
          const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, R);
          const hue = hues[i] || rgb.idea;
          g.addColorStop(0, RGBA(hue, (dark ? 0.09 : 0.05) * GLOW));
          g.addColorStop(1, RGBA(hue, 0));
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, st.w, st.h);
        }
        ctx.restore();
      }

      ctx.translate(st.view.tx, st.view.ty);
      ctx.scale(st.view.s, st.view.s);
      const sc = st.view.s;
      const hov = st.hover || selectedId;
      const neighbors = hov ? adjacency.get(hov) : null;
      const filtering = !!(activeTypes && activeTypes.size > 0);

      // floated positions — subtle "alive" drift, computed for rendering only
      // (never written back to st.pos, so pick()/drag stay pixel-accurate)
      const F = new Map();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i],
          p = st.pos.get(n.id);
        if (!p) continue;
        if (reduce || n.id === st.drag) {
          F.set(n.id, p);
        } else {
          F.set(n.id, {
            x: p.x + Math.sin(st.t * 0.02 + i * 1.7) * 0.7,
            y: p.y + Math.cos(st.t * 0.017 + i * 1.3) * 0.7
          });
        }
      }

      // ── edges (gently curved; hue gradient when hot; draw-in on intro) ──
      edges.forEach((e, ei) => {
        const a = F.get(e.source),
          b = F.get(e.target);
        if (!a || !b) return;
        const active = isActive(typeById.get(e.source)) && isActive(typeById.get(e.target));
        const hot = hov && (e.source === hov || e.target === hov);
        const dx = b.x - a.x,
          dy = b.y - a.y;
        const mx = (a.x + b.x) / 2,
          my = (a.y + b.y) / 2;
        const off = (ei % 2 ? 1 : -1) * 0.12;
        const cxp = mx - dy * off,
          cyp = my + dx * off;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cxp, cyp, b.x, b.y);
        if (hot && rgb.core) {
          const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          g.addColorStop(0, RGBA(rgb[TYPE_KEY[typeById.get(e.source)] || 'idea'] || rgb.idea, 0.95));
          g.addColorStop(1, RGBA(rgb[TYPE_KEY[typeById.get(e.target)] || 'idea'] || rgb.idea, 0.95));
          ctx.strokeStyle = g;
        } else {
          ctx.strokeStyle = pal.edge;
        }
        ctx.lineWidth = (hot ? 1.8 : 0.9) / sc;
        let ea = active ? hov && !hot ? 0.22 : 1 : 0.05;
        if (ip < 1) {
          const L = Math.hypot(dx, dy) || 1;
          const ep = easeOutCubic(clamp(ip * 1.8 - 0.2, 0, 1));
          ctx.setLineDash([L, L]);
          ctx.lineDashOffset = L * (1 - ep);
          ea *= ep;
        }
        ctx.globalAlpha = ea;
        ctx.stroke();
        if (ip < 1) ctx.setLineDash([]);
      });
      ctx.globalAlpha = 1;

      // ── node bloom (additive, batched; breathing; intro-scaled) ──
      ctx.save();
      ctx.globalCompositeOperation = ADD;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i],
          p = F.get(n.id);
        if (!p) continue;
        const c = rgb[TYPE_KEY[n.type] || 'idea'] || rgb.idea;
        if (!c) continue;
        const isHot = n.id === st.hover || n.id === selectedId;
        const big = isHot || n.type === 'core' || n.importance >= 3;
        if (!big) continue;
        const active = isActive(n.type);
        const related = hov && (n.id === hov || neighbors && neighbors.has(n.id));
        let a = active ? 1 : 0.12;
        if (hov && !related) a *= 0.3;
        if (ip < 1) a *= easeOutCubic(clamp(ip * 1.6 - i * 0.012, 0, 1));
        if (a <= 0.01) continue;
        const r = radiusFor(n.importance);
        const breathe = reduce ? 1 : 1 + 0.12 * Math.sin(st.t * 0.04 + i * 1.7);
        const R = r * (isHot ? 3.1 : 2.2) * breathe;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        g.addColorStop(0, RGBA(c, (isHot ? 0.5 : 0.28) * GLOW * a));
        g.addColorStop(0.5, RGBA(c, 0.1 * GLOW * a));
        g.addColorStop(1, RGBA(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, R, 0, TAU);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;

      // ── nodes (solid + ring + core corona + label) ──
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i],
          p = F.get(n.id);
        if (!p) continue;
        const color = pal[TYPE_KEY[n.type] || 'idea'] || pal.idea;
        const c = rgb[TYPE_KEY[n.type] || 'idea'] || rgb.idea;
        let r = radiusFor(n.importance);
        const active = isActive(n.type);
        const isHov = n.id === st.hover,
          isSel = n.id === selectedId;
        const related = hov && (n.id === hov || neighbors && neighbors.has(n.id));
        const inFilter = filtering && activeTypes.has(n.type);
        let alpha = active ? 1 : 0.12;
        if (hov && !related) alpha *= 0.3;
        let np = 1;
        if (ip < 1) {
          np = easeOutCubic(clamp(ip * 1.6 - i * 0.012, 0, 1));
          alpha *= np;
        }
        if (alpha <= 0.01) continue;
        r *= 0.6 + 0.4 * np;
        ctx.globalAlpha = alpha;
        // crisp bloom for the focused node (dark theme only — would muddy paper)
        if ((isHov || isSel) && c && dark) {
          ctx.save();
          ctx.shadowColor = RGBA(c, 0.9);
          ctx.shadowBlur = 16;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, TAU);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.restore();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, TAU);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 1.5 / sc;
        ctx.strokeStyle = pal.ring;
        ctx.stroke();
        // slowly rotating corona for core nodes
        if (n.type === 'core') {
          ctx.save();
          ctx.globalAlpha = alpha * 0.55;
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.4 / sc;
          if (!reduce) {
            ctx.setLineDash([2 / sc, 5 / sc]);
            ctx.lineDashOffset = -st.t * 0.15;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 8 + (reduce ? 0 : 1.5 * Math.sin(st.t * 0.04)), 0, TAU);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.restore();
        }
        if (isSel) {
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 2 / sc;
          ctx.strokeStyle = color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 4, 0, TAU);
          ctx.stroke();
        }
        const showLabel = n.importance >= 4 || isHov || isSel || related || inFilter;
        if (showLabel && active) {
          ctx.globalAlpha = alpha;
          const fs = (isHov || isSel ? 12.5 : 12) / sc;
          ctx.font = `${isHov || isSel ? '600 ' : '500 '}${fs}px "JetBrains Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillStyle = isHov || isSel || n.importance >= 4 ? pal.text : pal.textFaint;
          const label = n.label.length > 28 ? n.label.slice(0, 26) + '…' : n.label;
          ctx.fillText(label, p.x, p.y + r + 6 / sc);
        }
      }
      ctx.globalAlpha = 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // ── coordinate helpers ──
    function toWorld(mx, my) {
      return {
        x: (mx - st.view.tx) / st.view.s,
        y: (my - st.view.ty) / st.view.s
      };
    }
    function pick(mx, my) {
      const w = toWorld(mx, my);
      let best = null,
        bd = Infinity;
      nodes.forEach(n => {
        const p = st.pos.get(n.id);
        if (!p || !isActive(n.type)) return;
        const dx = w.x - p.x,
          dy = w.y - p.y;
        const d = dx * dx + dy * dy;
        const rr = radiusFor(n.importance) + 9;
        if (d < rr * rr && d < bd) {
          bd = d;
          best = n.id;
        }
      });
      return best;
    }
    function evtPos(ev) {
      const r = canvas.getBoundingClientRect();
      const c = ev.touches ? ev.touches[0] : ev;
      return {
        x: c.clientX - r.left,
        y: c.clientY - r.top
      };
    }
    function onMove(ev) {
      const {
        x,
        y
      } = evtPos(ev);
      if (st.drag) {
        const w = toWorld(x, y);
        const p = st.pos.get(st.drag);
        if (p) {
          p.x = w.x;
          p.y = w.y;
          st.alpha = Math.max(st.alpha, 0.4);
        }
        return;
      }
      if (st.panning) {
        st.view.tx = st.panning.tx + (x - st.panning.x);
        st.view.ty = st.panning.ty + (y - st.panning.y);
        st.vt = {
          ...st.view
        };
        st.userView = true;
        return;
      }
      const id = pick(x, y);
      if (id !== st.hover) {
        st.hover = id;
        setHoverId(id);
        liveRef.current.onHover && liveRef.current.onHover(id);
        canvas.style.cursor = id ? 'pointer' : 'grab';
      }
    }
    function onDown(ev) {
      const {
        x,
        y
      } = evtPos(ev);
      const id = pick(x, y);
      if (id) {
        st.drag = id;
        st.dragMoved = false;
      } else {
        st.panning = {
          x,
          y,
          tx: st.view.tx,
          ty: st.view.ty
        };
        canvas.style.cursor = 'grabbing';
      }
    }
    function onUp(ev) {
      if (st.drag) {
        const id = st.drag;
        st.drag = null;
        if (!st.dragMoved && liveRef.current.onSelect) liveRef.current.onSelect(id);
        st.dragMoved = false;
      } else if (st.panning) {
        st.panning = null;
        canvas.style.cursor = 'grab';
      }
    }
    function onLeave() {
      st.hover = null;
      setHoverId(null);
      liveRef.current.onHover && liveRef.current.onHover(null);
      if (!st.panning) canvas.style.cursor = 'grab';
    }
    function onWheel(ev) {
      const allow = fullscreen || ev.ctrlKey || ev.metaKey;
      if (!allow) return;
      ev.preventDefault();
      const {
        x,
        y
      } = evtPos(ev);
      const w = toWorld(x, y);
      const ns = clamp(st.view.s * Math.exp(-ev.deltaY * 0.0015), 0.4, 3.5);
      st.view.s = ns;
      st.view.tx = x - w.x * ns;
      st.view.ty = y - w.y * ns;
      st.vt = {
        ...st.view
      };
      st.userView = true;
    }
    canvas.style.cursor = 'grab';
    const mm = e => {
      if (st.drag || st.panning) st.dragMoved = true;
      onMove(e);
    };
    canvas.addEventListener('mousemove', mm);
    canvas.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('wheel', onWheel, {
      passive: false
    });
    function tdist(t) {
      return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    }
    function tmid(t) {
      const r = canvas.getBoundingClientRect();
      return {
        x: (t[0].clientX + t[1].clientX) / 2 - r.left,
        y: (t[0].clientY + t[1].clientY) / 2 - r.top
      };
    }
    function onTouchStart(e) {
      if (e.touches.length === 2) {
        const m = tmid(e.touches);
        st.pinch = {
          d: tdist(e.touches),
          s: st.view.s,
          m,
          w: toWorld(m.x, m.y)
        };
        st.drag = null;
        st.panning = null;
      } else onDown(e);
    }
    function onTouchMove(e) {
      if (e.touches.length === 2 && st.pinch) {
        e.preventDefault();
        const ns = clamp(st.pinch.s * (tdist(e.touches) / (st.pinch.d || 1)), 0.4, 3.5);
        st.view.s = ns;
        st.view.tx = st.pinch.m.x - st.pinch.w.x * ns;
        st.view.ty = st.pinch.m.y - st.pinch.w.y * ns;
        st.vt = {
          ...st.view
        };
        st.userView = true;
      } else {
        st.dragMoved = true;
        onMove(e);
      }
    }
    function onTouchEnd(e) {
      if (e.touches.length < 2) st.pinch = null;
      if (e.touches.length === 0) onUp(e);
    }
    canvas.addEventListener('touchstart', onTouchStart, {
      passive: false
    });
    canvas.addEventListener('touchmove', onTouchMove, {
      passive: false
    });
    canvas.addEventListener('touchend', onTouchEnd);

    // expose zoom controls
    ctrlRef.current.zoom = factor => {
      const ns = clamp(st.view.s * factor, 0.4, 3.5);
      const cx = st.w / 2,
        cy = st.h / 2;
      const w = toWorld(cx, cy);
      st.view.s = ns;
      st.view.tx = cx - w.x * ns;
      st.view.ty = cy - w.y * ns;
      st.vt = {
        ...st.view
      };
      st.userView = true;
    };
    ctrlRef.current.fit = () => {
      st.userView = false;
      st.vt = computeFit();
      st.alpha = Math.max(st.alpha, 0.2);
    };
    st.raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(st.raf);
      ro.disconnect();
      window.removeEventListener('mouseup', onUp);
      canvas.removeEventListener('mousemove', mm);
      canvas.removeEventListener('mousedown', onDown);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [nodes, edges, theme, height, fullscreen]);
  // selection / filter change: re-energize the layout and resume auto-follow
  // WITHOUT tearing down the render loop above (which would clear the canvas
  // and momentarily drop the enhanced rendering)
  useEffect(() => {
    const st = stateRef.current;
    st.userView = false;
    if (selectedId) st.alpha = Math.max(st.alpha, 0.65);
  }, [selectedId, activeTypes]);
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: className,
    style: {
      position: 'relative',
      width: '100%',
      height
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    role: "img",
    "aria-label": `Knowledge graph of ${nodes.length} connected ideas, services and audiences. Use the text list below for an accessible view.`
  }), controls && /*#__PURE__*/React.createElement("div", {
    className: "kg-zoom",
    role: "group",
    "aria-label": "Zoom"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Zoom in",
    onClick: () => ctrlRef.current.zoom && ctrlRef.current.zoom(1.3)
  }, "+"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Zoom out",
    onClick: () => ctrlRef.current.zoom && ctrlRef.current.zoom(1 / 1.3)
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fit",
    title: "Fit",
    onClick: () => ctrlRef.current.fit && ctrlRef.current.fit(),
    style: {
      fontSize: 13
    }
  }, "\u2922")), /*#__PURE__*/React.createElement("ul", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap'
    }
  }, nodes.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.id
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect && onSelect(n.id)
  }, n.label, " \u2014 ", n.summary)))));
}
Object.assign(__ds_scope, { KnowledgeGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graph/KnowledgeGraph.jsx", error: String((e && e.message) || e) }); }

// components/graph/NodeBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'gws-nodebadge-styles';
const CSS = `
.gws-nodebadge {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--font-mono); font-size: var(--text-meta);
  font-weight: var(--fw-medium); letter-spacing: var(--tracking-meta);
  text-transform: uppercase;
  padding: 4px 10px 4px 8px; border-radius: var(--radius-pill);
  border: 1px solid color-mix(in srgb, var(--_c) 35%, transparent);
  background: color-mix(in srgb, var(--_c) 12%, transparent);
  color: var(--_c); white-space: nowrap;
}
.gws-nodebadge__dot {
  width: 8px; height: 8px; border-radius: 50%; background: var(--_c);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--_c) 22%, transparent);
}
.gws-nodebadge--lg { font-size: var(--text-eyebrow); padding: 6px 12px 6px 10px; }
.gws-nodebadge--lg .gws-nodebadge__dot { width: 10px; height: 10px; }
`;
const NODE_VAR = {
  core: '--node-core',
  idea: '--node-idea',
  service: '--node-service',
  audience: '--node-audience',
  training_goal: '--node-goal',
  goal: '--node-goal',
  training_module: '--node-module',
  module: '--node-module',
  technology: '--node-tech',
  result: '--node-result',
  extra: '--node-extra',
  contact: '--node-contact'
};
const TYPE_LABEL = {
  core: 'Core',
  idea: 'Idea',
  service: 'Service',
  audience: 'Audience',
  training_goal: 'Goal',
  goal: 'Goal',
  training_module: 'Module',
  module: 'Module',
  technology: 'Technology',
  result: 'Result',
  extra: 'Extra',
  contact: 'Contact'
};
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function NodeBadge({
  type = 'idea',
  label,
  size = 'md',
  dot = true,
  className = '',
  ...rest
}) {
  ensureStyles();
  const v = NODE_VAR[type] || '--node-idea';
  const cls = ['gws-nodebadge', size === 'lg' && 'gws-nodebadge--lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      '--_c': `var(${v})`
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "gws-nodebadge__dot",
    "aria-hidden": "true"
  }), label || TYPE_LABEL[type] || type);
}
Object.assign(__ds_scope, { NodeBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graph/NodeBadge.jsx", error: String((e && e.message) || e) }); }

// components/graph/NodePanel.jsx
try { (() => {
const STYLE_ID = 'gws-nodepanel-styles';
const CSS = `
.gws-nodepanel {
  display: flex; flex-direction: column;
  background: var(--surface-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-panel);
  overflow: hidden;
}
.gws-nodepanel__top {
  position: relative; padding: var(--space-5);
  border-bottom: 1px solid var(--border-subtle);
}
.gws-nodepanel__top::before {
  content: ""; position: absolute; inset: 0 0 auto 0; height: 3px;
  background: var(--_c, var(--accent));
}
.gws-nodepanel__row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.gws-nodepanel__close {
  width: 30px; height: 30px; flex: none; display: grid; place-items: center;
  border-radius: var(--radius-sm); border: 1px solid var(--border-default);
  background: var(--surface-raised); color: var(--text-muted);
  font-family: var(--font-mono); font-size: 14px; line-height: 1;
  transition: color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.gws-nodepanel__close:hover { color: var(--text-primary); border-color: var(--border-accent); }
.gws-nodepanel__title { font-family: var(--font-display); font-weight: 600; font-size: 1.5rem; letter-spacing: -0.018em; color: var(--text-primary); line-height: 1.12; }
.gws-nodepanel__subtitle { margin-top: 6px; font-family: var(--font-mono); font-size: var(--text-meta); letter-spacing: var(--tracking-meta); text-transform: uppercase; color: var(--text-muted); }
.gws-nodepanel__body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-5); overflow-y: auto; }
.gws-nodepanel__summary { font-family: var(--font-body); font-size: var(--text-base); line-height: 1.6; color: var(--text-secondary); }
.gws-nodepanel__meta { display: flex; flex-direction: column; gap: 10px; }
.gws-nodepanel__metarow { display: grid; grid-template-columns: 96px 1fr; gap: 12px; align-items: start; }
.gws-nodepanel__metakey { font-family: var(--font-mono); font-size: var(--text-meta); letter-spacing: var(--tracking-meta); text-transform: uppercase; color: var(--text-faint); padding-top: 2px; }
.gws-nodepanel__metaval { font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; }
.gws-nodepanel__section-label { font-family: var(--font-mono); font-size: var(--text-meta); letter-spacing: var(--tracking-eyebrow); text-transform: uppercase; color: var(--text-faint); margin-bottom: 12px; }
.gws-nodepanel__related { display: flex; flex-wrap: wrap; gap: 8px; }
.gws-nodepanel__chip {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--font-body); font-size: var(--text-sm); font-weight: 500;
  padding: 6px 12px; border-radius: var(--radius-pill);
  border: 1px solid var(--border-default); background: var(--surface-raised);
  color: var(--text-secondary); cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.gws-nodepanel__chip:hover { color: var(--text-primary); border-color: color-mix(in srgb, var(--_cc) 55%, transparent); transform: translateY(-1px); }
.gws-nodepanel__chipdot { width: 7px; height: 7px; border-radius: 50%; background: var(--_cc); }
.gws-nodepanel__foot { padding: var(--space-5); border-top: 1px solid var(--border-subtle); display: flex; gap: 10px; }
.gws-nodepanel__cta {
  flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 46px; border-radius: var(--radius-pill); border: 1px solid transparent;
  font-family: var(--font-body); font-weight: 600; font-size: 0.9375rem; cursor: pointer;
  background: var(--accent); color: var(--text-on-accent);
  transition: background var(--dur-fast) var(--ease-out);
}
.gws-nodepanel__cta:hover { background: var(--accent-hover); }
.gws-nodepanel__cta--ghost { flex: none; padding: 0 18px; background: var(--surface-raised); color: var(--text-secondary); border-color: var(--border-strong); }
.gws-nodepanel__cta--ghost:hover { color: var(--text-primary); border-color: var(--border-accent); }
`;
const NODE_VAR = {
  core: '--node-core',
  idea: '--node-idea',
  service: '--node-service',
  audience: '--node-audience',
  training_goal: '--node-goal',
  goal: '--node-goal',
  training_module: '--node-module',
  module: '--node-module',
  technology: '--node-tech',
  result: '--node-result',
  extra: '--node-extra',
  contact: '--node-contact'
};
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function NodePanel({
  node,
  related = [],
  labels = {},
  onClose,
  onSelect,
  onOpen,
  className = '',
  style = {}
}) {
  ensureStyles();
  if (!node) return null;
  const v = NODE_VAR[node.type] || '--node-idea';
  const L = {
    type: 'Type',
    related: 'Connected',
    open: 'Open section',
    cta: 'Book a call',
    forWhom: 'For',
    format: 'Format',
    ...labels
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: ['gws-nodepanel', className].filter(Boolean).join(' '),
    style: {
      '--_c': `var(${v})`,
      ...style
    },
    role: "dialog",
    "aria-label": node.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__row"
  }, /*#__PURE__*/React.createElement(__ds_scope.NodeBadge, {
    type: node.type,
    size: "lg"
  }), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gws-nodepanel__close",
    onClick: onClose,
    "aria-label": "Close"
  }, "\u2715")), /*#__PURE__*/React.createElement("h3", {
    className: "gws-nodepanel__title"
  }, node.label), node.subtitle && /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__subtitle"
  }, node.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "gws-nodepanel__summary"
  }, node.body || node.summary), (node.forWhom || node.format) && /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__meta"
  }, node.forWhom && /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__metarow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gws-nodepanel__metakey"
  }, L.forWhom), /*#__PURE__*/React.createElement("span", {
    className: "gws-nodepanel__metaval"
  }, node.forWhom)), node.format && /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__metarow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gws-nodepanel__metakey"
  }, L.format), /*#__PURE__*/React.createElement("span", {
    className: "gws-nodepanel__metaval"
  }, node.format))), related.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__section-label"
  }, L.related), /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__related"
  }, related.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    className: "gws-nodepanel__chip",
    style: {
      '--_cc': `var(${NODE_VAR[r.type] || '--node-idea'})`
    },
    onClick: () => onSelect && onSelect(r.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "gws-nodepanel__chipdot",
    "aria-hidden": "true"
  }), r.label))))), /*#__PURE__*/React.createElement("div", {
    className: "gws-nodepanel__foot"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gws-nodepanel__cta",
    onClick: () => onOpen && onOpen(node)
  }, node.type === 'contact' ? L.cta : L.open, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { NodePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graph/NodePanel.jsx", error: String((e && e.message) || e) }); }

// data/graph.js
try { (() => {
/* ──────────────────────────────────────────────────────────────
   gws.pl — Knowledge graph data model (PL / EN)
   Source of truth for the knowledge map.

   Structure: a navigation SPINE of hub nodes (nav.*) that mirror the
   main-menu sections — these are the high-importance, always-labelled
   nodes. Each hub links to its detail/content nodes (lower importance,
   labelled on hover/select). Everything funnels to contact.

   type NodeType = 'core' | 'service' | 'audience' | 'training_goal'
     | 'training_module' | 'technology' | 'idea' | 'result' | 'extra' | 'contact';
   ────────────────────────────────────────────────────────────── */

const NODE_TYPES = ['core', 'idea', 'service', 'audience', 'training_goal', 'training_module', 'technology', 'result', 'extra', 'contact'];
const FILTER_GROUPS = [{
  type: 'service',
  pl: 'Usługi',
  en: 'Services'
}, {
  type: 'audience',
  pl: 'Odbiorcy',
  en: 'Audiences'
}, {
  type: 'training_goal',
  pl: 'Cele',
  en: 'Goals'
}, {
  type: 'idea',
  pl: 'Idee',
  en: 'Ideas'
}, {
  type: 'result',
  pl: 'Rezultaty',
  en: 'Results'
}, {
  type: 'extra',
  pl: 'Dodatkowe',
  en: 'Other areas'
}, {
  type: 'contact',
  pl: 'Kontakt',
  en: 'Contact'
}];

/* nav hubs ↔ page sections (used as alternative navigation). */
const NAV_HUBS = ['nav.manifest', 'nav.about', 'nav.services', 'nav.extras', 'nav.planner', 'nav.faq', 'nav.contact'];
const N = (id, type, importance, targetSection, pl, en) => ({
  id,
  type,
  importance,
  targetSection,
  pl,
  en
});
const NODES = [/* ── home / core ────────────────────────────────────────── */
N('core.gws', 'core', 5, 'hero', {
  label: 'gws.pl',
  summary: 'Strategia. Ludzie. Wyniki. Dzięki AI wspólnie budujemy sprawne organizacje i konkurencyjne biznesy.'
}, {
  label: 'gws.pl',
  summary: 'Strategy. People. Results. With AI, together we build capable organizations and competitive businesses.'
}), /* ── navigation spine — the menu, as graph hubs (always labelled) ── */
N('nav.manifest', 'idea', 4, 'manifest', {
  label: 'Manifest',
  summary: 'Cztery zasady mojej praktyki — strategia, ludzie, dowody, odpowiedzialność.'
}, {
  label: 'Manifesto',
  summary: 'Four principles of my practice — strategy, people, evidence, responsibility.'
}), N('nav.about', 'idea', 4, 'about', {
  label: 'O mnie',
  summary: 'Akademia, inżynieria i praktyka doradcza — w jednej osobie.'
}, {
  label: 'About',
  summary: 'Academia, engineering and advisory practice — in one person.'
}), N('nav.services', 'service', 4, 'services', {
  label: 'Doradztwo',
  summary: 'Pięć obszarów doradczych i pięć formatów pracy z AI.'
}, {
  label: 'Advisory',
  summary: 'Five advisory areas and five ways to work with AI.'
}), N('nav.extras', 'extra', 4, 'extras', {
  label: 'Obszary dodatkowe',
  summary: 'Hi-fi, high-end oraz aplikacje desktopowe na zamówienie.'
}, {
  label: 'Other areas',
  summary: 'Hi-fi, high-end and custom desktop applications.'
}), N('nav.planner', 'training_goal', 4, 'planner', {
  label: 'Plan szkolenia',
  summary: 'Zaplanuj szkolenie krok po kroku: odbiorca, cel, czas, forma.'
}, {
  label: 'Training planner',
  summary: 'Plan a training step by step: audience, goal, duration, format.'
}), N('nav.faq', 'idea', 4, 'faq', {
  label: 'FAQ',
  summary: 'Najczęściej zadawane pytania o zakres, pierwsze spotkanie i koszty.'
}, {
  label: 'FAQ',
  summary: 'Frequently asked questions about scope, the first meeting and costs.'
}), N('nav.contact', 'contact', 4, 'contact', {
  label: 'Kontakt',
  summary: 'Umów bezpłatną, 45-minutową rozmowę — albo napisz na e-mail.'
}, {
  label: 'Contact',
  summary: 'Book a free, 45-minute call — or reach out by email.'
}), /* ── supporting core concepts ──────────────────────────────── */
N('core.spr', 'core', 3, 'hero', {
  label: 'Strategia · Ludzie · Wyniki',
  summary: 'Trzy filary praktyki: porządkowanie złożoności, wzmacnianie przewagi, trwała wartość.'
}, {
  label: 'Strategy · People · Results',
  summary: 'Three pillars of the practice: order in complexity, sharper edge, lasting value.'
}), N('core.ai', 'core', 3, 'manifest', {
  label: 'Gotowość na AI',
  summary: 'AI jako nowa forma kompetencji organizacyjnej, a nie produkt.'
}, {
  label: 'AI readiness',
  summary: 'AI as a new form of organizational competence — not a product.'
}), /* ── manifesto ideas ────────────────────────────────────── */
N('idea.competence', 'idea', 2, 'manifest', {
  label: 'AI jako kompetencja',
  summary: 'Sztuczna inteligencja nie jest produktem — jest nową formą kompetencji organizacyjnej.'
}, {
  label: 'AI as competence',
  summary: 'Artificial intelligence is not a product — it is a new form of organizational competence.'
}), N('idea.question', 'idea', 2, 'manifest', {
  label: 'Dobrze sformułowane pytanie',
  summary: 'Dobra decyzja dotycząca AI zaczyna się od dobrze sformułowanego pytania, nie od wyboru modelu.'
}, {
  label: 'Well-formed question',
  summary: 'A good AI decision starts with a well-formed question, not with a choice of model.'
}), N('idea.learning', 'idea', 2, 'manifest', {
  label: 'Wdrożenie z nauką',
  summary: 'Wdrożenie bez zrozumienia jest kosztem; wdrożenie z nauką jest inwestycją.'
}, {
  label: 'Adoption with learning',
  summary: 'Adoption without understanding is a cost; adoption with learning is an investment.'
}), N('idea.responsibility', 'idea', 2, 'manifest', {
  label: 'Odpowiedzialne doradztwo',
  summary: "Rolą doradcy nie jest dostarczenie magii, lecz zdjęcie z niej kurtyny."
}, {
  label: 'Responsible advisory',
  summary: "An advisor's role is not to deliver magic, but to lift its curtain."
}), /* ── core advisory services (public offer) ──────────────── */
N('svc.strategy', 'service', 3, 'services', {
  label: 'Strategia i model biznesowy',
  summary: 'Budowa i weryfikacja strategii oraz modelu, które tworzą przewagę konkurencyjną.'
}, {
  label: 'Strategy and business model',
  summary: 'Building and validating strategies and models that create competitive advantage.'
}), N('svc.process', 'service', 2, 'services', {
  label: 'Optymalizacja procesów',
  summary: 'Projektowanie i usprawnianie procesów dla większej efektywności i jakości.'
}, {
  label: 'Process optimization',
  summary: 'Designing and improving processes for greater efficiency and quality.'
}), N('svc.change', 'service', 2, 'services', {
  label: 'Zarządzanie zmianą',
  summary: 'Skuteczne wdrażanie zmian z uwzględnieniem ludzi, komunikacji i celów.'
}, {
  label: 'Change management',
  summary: 'Effective change adoption with attention to people, communication and goals.'
}), N('svc.people', 'service', 2, 'services', {
  label: 'Zarządzanie ludźmi',
  summary: 'Rozwój liderów, zespołów i kompetencji kluczowych dla organizacji.'
}, {
  label: 'People management',
  summary: 'Developing leaders, teams and competencies that matter most to the organization.'
}), N('svc.analytics', 'service', 2, 'services', {
  label: 'Analityka i decyzje',
  summary: 'Dane, wnioski i rekomendacje, które prowadzą do lepszych decyzji.'
}, {
  label: 'Analytics and decisions',
  summary: 'Data, insights and recommendations that lead to better decisions.'
}), /* ── extended AI services (from content.js) ─────────────── */
N('svc.ai_strategy', 'service', 3, 'services', {
  label: 'Strategiczne doradztwo AI',
  subtitle: 'Dla zarządów i C-level',
  body: 'Budowa strategii AI w horyzoncie 12–36 miesięcy: mapowanie okazji, analiza ryzyka regulacyjnego (w tym AI Act), modele operacyjne, decyzje build/buy, kryteria sukcesu.',
  forWhom: 'Zarządy, rady nadzorcze, komitety strategiczne',
  format: 'Warsztaty decyzyjne · Sesje cykliczne · Dokument strategiczny',
  summary: 'Strategia AI w horyzoncie 12–36 miesięcy dla zarządów.'
}, {
  label: 'Strategic AI advisory',
  subtitle: 'For boards and C-level',
  body: 'Building an AI strategy over a 12–36 month horizon: opportunity mapping, regulatory risk (incl. the AI Act), operating models, build/buy decisions, success criteria.',
  forWhom: 'Boards, supervisory boards, strategy committees',
  format: 'Decision workshops · Recurring sessions · Strategy document',
  summary: 'A 12–36 month AI strategy for boards.'
}), N('svc.exec_training', 'service', 3, 'services', {
  label: 'Szkolenia dla kadry zarządzającej',
  subtitle: "AI bez hype'u, z konsekwencjami",
  body: 'Program szkoleniowy dopasowany do dojrzałości organizacji. Kończy się nie certyfikatem, lecz listą decyzji, które uczestnicy są gotowi podjąć następnego dnia.',
  forWhom: 'Dyrektorzy, członkowie zarządów, dyrektorzy departamentów',
  format: 'Sesje 1–2 dniowe · In-house lub rezydencyjne · PL/EN',
  summary: 'Szkolenia AI dla kadry zarządzającej, bez hype’u.'
}, {
  label: 'Executive training',
  subtitle: 'AI without the hype, with consequences',
  body: "A training program matched to the organization's maturity. It ends not with a certificate but with a list of decisions participants are ready to make the next day.",
  forWhom: 'Directors, board members, department heads',
  format: '1–2 day sessions · In-house or residential · PL/EN',
  summary: 'AI training for executives, without the hype.'
}), N('svc.prompt', 'service', 3, 'services', {
  label: 'Warsztaty prompt engineering i LLM',
  subtitle: 'Dla zespołów pracujących z modelami',
  body: 'Praktyczny warsztat oparty o realne zadania uczestników. Od formułowania instrukcji, przez wzorce agentowe, po ocenę jakości i ograniczanie halucynacji.',
  forWhom: 'Zespoły produktowe, analityczne, prawne, operacyjne',
  format: '1–3 dni · Grupy 6–16 osób · Własne dane uczestników',
  summary: 'Praktyczne warsztaty z LLM na danych zespołu.'
}, {
  label: 'Prompt engineering & LLM workshops',
  subtitle: 'For teams working with language models',
  body: "A hands-on workshop built on participants' real tasks. From writing instructions, through agentic patterns, to quality evaluation and limiting hallucinations.",
  forWhom: 'Product, analytics, legal and operations teams',
  format: '1–3 days · Groups of 6–16 · Participants’ own data',
  summary: "Hands-on LLM workshops on the team's own data."
}), N('svc.mentoring', 'service', 2, 'services', {
  label: 'Mentoring i office hours',
  subtitle: 'Stała relacja doradcza',
  body: 'Cykliczne, krótkie sesje dla liderów produktu i CTO. Bez slajdów, bez formalności — z konsekwentną pracą nad dojrzałością decyzji technologicznych.',
  forWhom: 'CTO, Head of AI, liderzy produktu',
  format: '60–90 min · Co 2 tygodnie lub miesięcznie',
  summary: 'Cykliczne office hours dla liderów produktu i CTO.'
}, {
  label: 'Mentoring & office hours',
  subtitle: 'An ongoing advisory relationship',
  body: 'Short, recurring sessions for product leaders and CTOs. No slides, no formality — consistent work on the maturity of technology decisions.',
  forWhom: 'CTOs, Heads of AI, product leaders',
  format: '60–90 min · Biweekly or monthly',
  summary: 'Recurring office hours for product leaders and CTOs.'
}), N('svc.talks', 'service', 2, 'services', {
  label: 'Wykłady i prelekcje',
  subtitle: 'Dla konferencji, uczelni, spotkań branżowych',
  body: 'Wystąpienia o AI jako zjawisku kulturowym i inżynierskim: od podstaw matematycznych po konsekwencje społeczne. Przygotowane pod profil słuchaczy.',
  forWhom: 'Konferencje, uczelnie, kongresy branżowe',
  format: '30–90 min · PL/EN · Możliwa dyskusja moderowana',
  summary: 'Wykłady o AI dopasowane do profilu słuchaczy.'
}, {
  label: 'Lectures & talks',
  subtitle: 'For conferences, universities, industry events',
  body: 'Talks on AI as a cultural and engineering phenomenon: from mathematical foundations to social consequences. Tailored to the audience profile.',
  forWhom: 'Conferences, universities, industry congresses',
  format: '30–90 min · PL/EN · Moderated discussion possible',
  summary: 'Talks on AI tailored to the audience.'
}), /* ── audiences ──────────────────────────────────────────── */
N('aud.board', 'audience', 3, 'planner', {
  label: 'Zarząd / C-level',
  summary: 'Decyzje strategiczne, ryzyko, priorytety.'
}, {
  label: 'Board / C-level',
  summary: 'Strategic decisions, risk, priorities.'
}), N('aud.middle', 'audience', 2, 'planner', {
  label: 'Kadra kierownicza średniego szczebla',
  summary: 'Wdrożenia, zmiana procesów.'
}, {
  label: 'Middle management',
  summary: 'Adoption, process change.'
}), N('aud.itdata', 'audience', 2, 'planner', {
  label: 'Zespół IT / data',
  summary: 'Techniczne umiejętności praktyczne.'
}, {
  label: 'IT / data team',
  summary: 'Practical technical skills.'
}), N('aud.ops', 'audience', 2, 'planner', {
  label: 'Zespół operacyjny / biznes',
  summary: 'Codzienne wykorzystanie narzędzi AI.'
}, {
  label: 'Operations / business team',
  summary: 'Daily use of AI tools.'
}), N('aud.public', 'audience', 2, 'planner', {
  label: 'Kadra administracji publicznej',
  summary: 'Regulacje, zamówienia, odpowiedzialność.'
}, {
  label: 'Public administration staff',
  summary: 'Regulation, procurement, accountability.'
}), /* ── training goals ─────────────────────────────────────── */
N('goal.literacy', 'training_goal', 2, 'planner', {
  label: 'Podstawowa piśmienność AI',
  summary: 'Zrozumieć, czym AI jest, a czym nie jest.'
}, {
  label: 'Basic AI literacy',
  summary: "Understand what AI is and what it isn't."
}), N('goal.strategy', 'training_goal', 2, 'planner', {
  label: 'Strategia i decyzje zarządcze',
  summary: 'Kiedy inwestować, kiedy się wstrzymać.'
}, {
  label: 'Strategy and board decisions',
  summary: 'When to invest, when to hold.'
}), N('goal.llm', 'training_goal', 2, 'planner', {
  label: 'Praktyka pracy z LLM',
  summary: 'Prompt engineering, wzorce, jakość.'
}, {
  label: 'Working with LLMs',
  summary: 'Prompt engineering, patterns, quality.'
}), N('goal.risk', 'training_goal', 2, 'planner', {
  label: 'Ryzyko, AI Act, compliance',
  summary: 'Zrozumieć zobowiązania regulacyjne.'
}, {
  label: 'Risk, AI Act, compliance',
  summary: 'Understand regulatory obligations.'
}), N('goal.change', 'training_goal', 2, 'planner', {
  label: 'Wdrażanie zmiany w zespołach',
  summary: 'Jak wprowadzić AI w zespołach i utrzymać adopcję.'
}, {
  label: 'Rolling out change in teams',
  summary: 'How to introduce AI in teams and sustain adoption.'
}), /* ── technologies ───────────────────────────────────────── */
N('tech.llm', 'technology', 2, 'planner', {
  label: 'Modele językowe (LLM)',
  summary: 'Klasy modeli, wzorce agentowe, ewaluacja, ograniczanie halucynacji.'
}, {
  label: 'Language models (LLM)',
  summary: 'Model classes, agentic patterns, evaluation, limiting hallucinations.'
}), N('tech.aiact', 'technology', 2, 'planner', {
  label: 'AI Act i governance',
  summary: 'Klasyfikacja ryzyka, obowiązki organizacji, audit trail i dokumentacja.'
}, {
  label: 'AI Act & governance',
  summary: 'Risk classification, organizational obligations, audit trail and documentation.'
}), N('tech.data', 'technology', 2, 'planner', {
  label: 'Dane, bezpieczeństwo, prywatność',
  summary: 'Bezpieczeństwo i prywatność danych jako fundament wdrożenia.'
}, {
  label: 'Data, security, privacy',
  summary: 'Data security and privacy as the foundation of adoption.'
}), /* ── results ────────────────────────────────────────────── */
N('res.edge', 'result', 3, 'about', {
  label: 'Przewaga konkurencyjna',
  summary: 'Strategia i model, które realnie różnicują organizację.'
}, {
  label: 'Competitive advantage',
  summary: 'Strategy and a model that genuinely differentiate the organization.'
}), N('res.measurable', 'result', 3, 'about', {
  label: 'Mierzalne efekty',
  summary: 'Od rachunku ekonomicznego wdrożenia po KPI i kryteria sukcesu.'
}, {
  label: 'Measurable outcomes',
  summary: 'From the economic case for adoption to KPIs and success criteria.'
}), N('res.decisions', 'result', 2, 'about', {
  label: 'Lepsze decyzje',
  summary: 'Decyzje oparte na danych i dowodach, nie na hype.'
}, {
  label: 'Better decisions',
  summary: 'Decisions based on data and evidence, not hype.'
}), N('res.maturity', 'result', 2, 'about', {
  label: 'Dojrzałość technologiczna',
  summary: 'Konsekwentna praca nad dojrzałością decyzji technologicznych.'
}, {
  label: 'Technological maturity',
  summary: 'Consistent work on the maturity of technology decisions.'
}), N('res.responsible', 'result', 2, 'manifest', {
  label: 'Odpowiedzialne wdrożenie AI',
  summary: 'Wdrożenie ze zrozumieniem ryzyka, regulacji i ludzi.'
}, {
  label: 'Responsible AI adoption',
  summary: 'Adoption that understands risk, regulation and people.'
}), /* ── about (detail) ─────────────────────────────────────── */
N('about.me', 'idea', 3, 'about', {
  label: 'Akademia · inżynieria · praktyka',
  body: 'Doktorat z ekonomii na pracy łączącej ekonomię z systemami informatycznymi; dwie dekady projektowania i programowania aplikacji na zamówienie; praktyka doradcza przy zarządach. Doradzam, kiedy AI jest decyzją zarządczą; uczę, kiedy jest decyzją zespołu; tworzę kod, kiedy potrzebny jest prototyp.',
  summary: 'Doktorat z ekonomii, dwie dekady projektowania systemów, praktyka doradcza w jednej osobie.'
}, {
  label: 'Academia · engineering · practice',
  body: 'A PhD in economics on a thesis bridging economics and information systems; two decades designing and building custom applications; advisory practice with boards. I advise when AI is a board decision; I teach when it is a team decision; I write code when a prototype is needed.',
  summary: 'A PhD in economics, two decades of systems design, advisory practice in one person.'
}), /* ── extra areas ────────────────────────────────────────── */
N('extra.hifi', 'extra', 2, 'extras', {
  label: 'Doradztwo hi-fi i high-end',
  summary: 'Dobór komponentów, strojenie torów, akustyka pomieszczenia odsłuchowego — bez afiliacji z dystrybutorem.'
}, {
  label: 'Hi-fi and high-end advisory',
  summary: 'Component selection, signal-chain tuning, listening-room acoustics — with no distributor affiliation.'
}), N('extra.apps', 'extra', 2, 'extras', {
  label: 'Aplikacje desktopowe na zamówienie',
  summary: 'Narzędzia szyte na miarę: od analityki i raportowania po systemy wspierające procesy operacyjne.'
}, {
  label: 'Custom desktop applications',
  summary: 'Tailored tools: from analytics and reporting to systems supporting operational processes.'
}), /* ── contact (detail) ───────────────────────────────────── */
N('contact.call', 'contact', 3, 'contact', {
  label: 'Umów rozmowę',
  subtitle: 'Bezpłatne · 45 min · zdalnie',
  body: 'Pierwsze spotkanie jest bezpłatne, trwa zwykle 45 minut i odbywa się zdalnie. Celem jest rozpoznanie, czego potrzebuje organizacja — i czy moje kompetencje są właściwą odpowiedzią.',
  summary: 'Bezpłatna, 45-minutowa rozmowa wprowadzająca.'
}, {
  label: 'Book a call',
  subtitle: 'Free · 45 min · remote',
  body: 'The first meeting is free, usually 45 minutes and held remotely. The goal is to recognize what the organization needs — and whether my competencies are the right answer.',
  summary: 'A free, 45-minute introductory call.'
}), N('contact.email', 'contact', 3, 'contact', {
  label: 'biuro@gws.pl',
  summary: 'Napisz wiadomość — odpowiem w ciągu dwóch dni roboczych.'
}, {
  label: 'biuro@gws.pl',
  summary: 'Send a message — I reply within two business days.'
}), N('contact.linkedin', 'contact', 3, 'contact', {
  label: 'LinkedIn',
  summary: 'linkedin.com/in/grzegorz-wojarnik'
}, {
  label: 'LinkedIn',
  summary: 'linkedin.com/in/grzegorz-wojarnik'
})];
const E = (source, target, relation, strength) => ({
  source,
  target,
  relation,
  strength
});
const EDGES = [/* ── navigation spine: home ↔ menu hubs ─────────────────── */
E('core.gws', 'nav.manifest', 'explains', 5), E('core.gws', 'nav.about', 'explains', 5), E('core.gws', 'nav.services', 'explains', 5), E('core.gws', 'nav.extras', 'explains', 4), E('core.gws', 'nav.planner', 'explains', 5), E('core.gws', 'nav.faq', 'explains', 4), E('core.gws', 'nav.contact', 'leads_to', 5), E('core.gws', 'core.spr', 'explains', 4), E('core.gws', 'core.ai', 'leads_to', 4), /* ── manifest hub → ideas ───────────────────────────────── */
E('nav.manifest', 'idea.competence', 'explains', 4), E('nav.manifest', 'idea.question', 'explains', 4), E('nav.manifest', 'idea.learning', 'explains', 4), E('nav.manifest', 'idea.responsibility', 'explains', 4), E('idea.competence', 'core.ai', 'explains', 3), E('idea.learning', 'res.responsible', 'leads_to', 3), E('idea.responsibility', 'res.responsible', 'proves', 3), /* ── about hub → detail + results ───────────────────────── */
E('nav.about', 'about.me', 'explains', 5), E('about.me', 'res.measurable', 'proves', 3), E('about.me', 'core.spr', 'supports', 3), /* ── services hub → all services ────────────────────────── */
E('nav.services', 'svc.strategy', 'belongs_to', 4), E('nav.services', 'svc.process', 'belongs_to', 3), E('nav.services', 'svc.change', 'belongs_to', 3), E('nav.services', 'svc.people', 'belongs_to', 3), E('nav.services', 'svc.analytics', 'belongs_to', 3), E('nav.services', 'svc.ai_strategy', 'belongs_to', 4), E('nav.services', 'svc.exec_training', 'belongs_to', 4), E('nav.services', 'svc.prompt', 'belongs_to', 4), E('nav.services', 'svc.mentoring', 'belongs_to', 3), E('nav.services', 'svc.talks', 'belongs_to', 3), /* services → results / audiences / tech */
E('svc.strategy', 'res.edge', 'leads_to', 4), E('svc.process', 'res.measurable', 'leads_to', 3), E('svc.change', 'res.maturity', 'leads_to', 3), E('svc.people', 'res.maturity', 'supports', 3), E('svc.analytics', 'res.decisions', 'leads_to', 3), E('svc.ai_strategy', 'core.ai', 'supports', 4), E('svc.ai_strategy', 'aud.board', 'is_for', 4), E('svc.ai_strategy', 'res.edge', 'leads_to', 3), E('svc.exec_training', 'aud.board', 'is_for', 3), E('svc.exec_training', 'goal.strategy', 'supports', 3), E('svc.prompt', 'aud.itdata', 'is_for', 3), E('svc.prompt', 'goal.llm', 'supports', 4), E('svc.prompt', 'tech.llm', 'uses', 4), E('svc.mentoring', 'aud.itdata', 'is_for', 2), E('svc.mentoring', 'res.maturity', 'leads_to', 2), E('svc.talks', 'aud.public', 'is_for', 2), /* ── planner hub → audiences + goals ────────────────────── */
E('nav.planner', 'aud.board', 'is_for', 3), E('nav.planner', 'aud.middle', 'is_for', 3), E('nav.planner', 'aud.itdata', 'is_for', 3), E('nav.planner', 'aud.ops', 'is_for', 3), E('nav.planner', 'aud.public', 'is_for', 3), E('nav.planner', 'goal.literacy', 'leads_to', 3), E('nav.planner', 'goal.strategy', 'leads_to', 3), E('nav.planner', 'goal.llm', 'leads_to', 3), E('nav.planner', 'goal.risk', 'leads_to', 3), E('nav.planner', 'goal.change', 'leads_to', 3), /* audiences → goals; goals → tech */
E('aud.board', 'goal.strategy', 'is_for', 3), E('aud.middle', 'goal.change', 'is_for', 2), E('aud.itdata', 'goal.llm', 'is_for', 3), E('aud.ops', 'goal.literacy', 'is_for', 2), E('aud.public', 'goal.risk', 'is_for', 3), E('goal.literacy', 'core.ai', 'supports', 2), E('goal.strategy', 'res.decisions', 'leads_to', 2), E('goal.llm', 'tech.llm', 'uses', 3), E('goal.risk', 'tech.aiact', 'uses', 4), E('goal.risk', 'tech.data', 'uses', 2), /* technologies → results */
E('tech.llm', 'res.measurable', 'proves', 2), E('tech.aiact', 'res.responsible', 'supports', 3), E('tech.data', 'res.responsible', 'supports', 2), /* ── extras hub → areas ─────────────────────────────────── */
E('nav.extras', 'extra.hifi', 'belongs_to', 4), E('nav.extras', 'extra.apps', 'belongs_to', 4), E('about.me', 'extra.apps', 'supports', 2), E('about.me', 'extra.hifi', 'supports', 2), /* ── faq hub → contact / about ──────────────────────────── */
E('nav.faq', 'nav.contact', 'contact_path', 4), E('nav.faq', 'nav.about', 'explains', 3), /* ── contact hub → channels; everything funnels here ────── */
E('nav.contact', 'contact.call', 'leads_to', 5), E('nav.contact', 'contact.email', 'supports', 4), E('nav.contact', 'contact.linkedin', 'supports', 3), E('res.edge', 'contact.call', 'contact_path', 4), E('res.measurable', 'contact.call', 'contact_path', 3), E('svc.ai_strategy', 'contact.call', 'contact_path', 4), E('aud.board', 'contact.call', 'contact_path', 3), E('extra.apps', 'contact.call', 'contact_path', 2)];

/* Resolve a localized node view for the graph/panel. */
function localizeNodes(lang) {
  return NODES.map(n => ({
    id: n.id,
    type: n.type,
    importance: n.importance,
    targetSection: n.targetSection,
    label: n[lang].label,
    summary: n[lang].summary,
    subtitle: n[lang].subtitle,
    body: n[lang].body,
    forWhom: n[lang].forWhom,
    format: n[lang].format
  }));
}
function neighborsOf(id) {
  const out = [];
  EDGES.forEach(e => {
    if (e.source === id) out.push(e.target);else if (e.target === id) out.push(e.source);
  });
  return [...new Set(out)];
}
Object.assign(__ds_scope, { NODE_TYPES, FILTER_GROUPS, NAV_HUBS, NODES, EDGES, localizeNodes, neighborsOf });
})(); } catch (e) { __ds_ns.__errors.push({ path: "data/graph.js", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* gws.pl website — App orchestrator */
const {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} = React;
const SECTION_IDS = ['hero', 'map', 'manifest', 'about', 'services', 'extras', 'planner', 'faq', 'contact'];
function smoothTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const y = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({
    top: y,
    behavior: reduce ? 'auto' : 'smooth'
  });
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
  const byId = useMemo(() => {
    const m = {};
    nodes.forEach(n => {
      m[n.id] = n;
    });
    return m;
  }, [nodes]);
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
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActiveSection(e.target.id);
      });
    }, {
      rootMargin: '-45% 0px -50% 0px'
    });
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  const selectNode = useCallback(id => {
    setSelected(id);
    if (id) {
      // route to the most relevant view: contact nodes → contact, else the map
      const node = byId[id];
      const dest = node && node.type === 'contact' ? 'map' : 'map';
      setTimeout(() => smoothTo(dest), 0);
    }
  }, [byId]);
  const toggleFilter = useCallback(type => {
    setActiveTypes(prev => {
      const n = new Set(prev);
      n.has(type) ? n.delete(type) : n.add(type);
      return n;
    });
  }, []);
  const resetFilters = useCallback(() => setActiveTypes(new Set()), []);
  const openSection = useCallback(node => {
    const target = node.type === 'contact' ? 'contact' : node.targetSection || 'contact';
    smoothTo(target === 'hero' ? 'map' : target);
  }, []);
  const onNav = useCallback(id => {
    smoothTo(id);
  }, []);
  const onBook = useCallback(() => {
    setSelected('contact.call');
    smoothTo('contact');
  }, []);
  const onTheme = useCallback(() => {
    localStorage.setItem('gws-theme-explicit', '1');
    setTheme(p => p === 'dark' ? 'light' : 'dark');
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, {
    t: t,
    lang: lang,
    theme: theme,
    active: activeSection,
    onLang: setLang,
    onTheme: onTheme,
    onNav: onNav,
    onBook: onBook
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    lang: lang,
    nodes: nodes,
    edges: edges,
    selected: selected,
    onSelect: selectNode,
    theme: theme
  }), /*#__PURE__*/React.createElement(KnowledgeMap, {
    t: t,
    lang: lang,
    nodes: nodes,
    edges: edges,
    byId: byId,
    selected: selected,
    onSelect: selectNode,
    activeTypes: activeTypes,
    onToggle: toggleFilter,
    onReset: resetFilters,
    theme: theme,
    onOpenSection: openSection,
    filterGroups: G.FILTER_GROUPS
  }), /*#__PURE__*/React.createElement(ManifestSection, {
    t: t,
    onSelect: selectNode
  }), /*#__PURE__*/React.createElement(AboutSection, {
    t: t,
    onSelect: selectNode
  }), /*#__PURE__*/React.createElement(ServicesSection, {
    t: t,
    lang: lang,
    byId: byId,
    onSelect: selectNode
  }), /*#__PURE__*/React.createElement(ExtrasSection, {
    t: t,
    byId: byId,
    onSelect: selectNode
  }), /*#__PURE__*/React.createElement(Planner, {
    t: t,
    onSelect: selectNode
  }), /*#__PURE__*/React.createElement(FaqSection, {
    t: t
  }), /*#__PURE__*/React.createElement(ContactSection, {
    t: t
  })), /*#__PURE__*/React.createElement(Footer, {
    t: t,
    onNav: onNav
  }));
}
function boot() {
  const mount = () => {
    if (window.__gwsMounted) return; // idempotent — never mount twice
    window.__gwsMounted = true;
    if (!window.__gwsRoot) window.__gwsRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__gwsRoot.render(/*#__PURE__*/React.createElement(App, null));
  };
  if (window.GWS_GRAPH && window.GWS_I18N) mount();else window.addEventListener('gws-graph-ready', mount, {
    once: true
  });
}
if (window.__GWS_PAGE === 'site' && !window.__gwsBooted) {
  window.__gwsBooted = true;
  boot();
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* gws.pl website — chrome: icons, header, footer */

const Icon = {
  sun: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  moon: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  })),
  arrow: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  arrowUR: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M8 7h9v9"
  })),
  mail: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })),
  phone: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"
  })),
  linkedin: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.5V24H.2zM8.3 8.3h4.3v2.1h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V24h-4.5v-6.9c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V24H8.3z"
  })),
  check: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  search: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  layout: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M9 9v11"
  })),
  x: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  home: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v3M12 18v3M3 12h3M18 12h3"
  })),
  graph: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "7",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "18",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8l8-1M7.5 9l8 7.5"
  })),
  menu: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))
};
function ThemeToggle({
  theme,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onToggle,
    "aria-label": theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  }, theme === 'dark' ? /*#__PURE__*/React.createElement(Icon.sun, null) : /*#__PURE__*/React.createElement(Icon.moon, null));
}
function LangToggle({
  lang,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lang",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    "aria-pressed": lang === 'pl',
    onClick: () => onChange('pl')
  }, "PL"), /*#__PURE__*/React.createElement("button", {
    "aria-pressed": lang === 'en',
    onClick: () => onChange('en')
  }, "EN"));
}
function Header({
  t,
  lang,
  theme,
  active,
  onLang,
  onTheme,
  onNav,
  onBook
}) {
  const {
    Button
  } = window.GwsPlDesignSystem_50b22c;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const go = id => {
    setMenuOpen(false);
    onNav(id);
  };
  const book = () => {
    setMenuOpen(false);
    onBook();
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr" + (menuOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hdr__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hdr__brand",
    href: "#hero",
    onClick: e => {
      e.preventDefault();
      go('hero');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/gws-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "hdr__wm"
  }, "gws", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."), "pl")), /*#__PURE__*/React.createElement("nav", {
    className: "hdr__nav",
    "aria-label": "Primary"
  }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: "nav-link",
    href: '#' + n.id,
    "aria-current": active === n.id ? 'true' : undefined,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "iconbtn",
    href: "index.html",
    "aria-label": lang === 'pl' ? 'Otwórz graf wiedzy' : 'Open knowledge graph',
    title: lang === 'pl' ? 'Graf wiedzy' : 'Knowledge graph'
  }, /*#__PURE__*/React.createElement(Icon.graph, null)), /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onChange: onLang
  }), /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    onToggle: onTheme
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: onBook
  }, t.cta.book)), /*#__PURE__*/React.createElement("button", {
    className: "hdr__burger",
    "aria-label": menuOpen ? lang === 'pl' ? 'Zamknij menu' : 'Close menu' : 'Menu',
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(v => !v)
  }, menuOpen ? /*#__PURE__*/React.createElement(Icon.x, null) : /*#__PURE__*/React.createElement(Icon.menu, null))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__mobile",
    "aria-hidden": !menuOpen
  }, /*#__PURE__*/React.createElement("nav", {
    className: "hdr__mnav",
    "aria-label": "Mobile"
  }, t.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: "hdr__mlink",
    href: '#' + n.id,
    "aria-current": active === n.id ? 'true' : undefined,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "hdr__mrow"
  }, /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onChange: onLang
  }), /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    onToggle: onTheme
  }), /*#__PURE__*/React.createElement("a", {
    className: "iconbtn",
    href: "index.html",
    "aria-label": lang === 'pl' ? 'Otwórz graf wiedzy' : 'Open knowledge graph'
  }, /*#__PURE__*/React.createElement(Icon.graph, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    arrow: true,
    onClick: book
  }, t.cta.book)));
}
function Footer({
  t,
  onNav
}) {
  const coop = [t.nav[2], t.nav[3], t.nav[4]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "hdr__brand",
    href: "#hero",
    onClick: e => {
      e.preventDefault();
      onNav('hero');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/gws-mark.svg",
    alt: "",
    style: {
      width: 30,
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "hdr__wm",
    style: {
      fontSize: 22
    }
  }, "gws", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."), "pl")), /*#__PURE__*/React.createElement("p", {
    className: "footer__claim"
  }, t.footer.claim)), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, t.footer.nav), t.nav.slice(0, 4).map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, t.footer.coop), coop.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, n.label)), /*#__PURE__*/React.createElement("a", {
    href: t.contact.linkedinUrl,
    target: "_blank",
    rel: "noopener"
  }, t.contact.linkedinLabel))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer__rights"
  }, t.footer.rights), /*#__PURE__*/React.createElement("div", {
    className: "footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "polityka-prywatnosci.html"
  }, t.footer.privacy), /*#__PURE__*/React.createElement("a", {
    href: "regulamin.html"
  }, t.footer.terms)))));
}
Object.assign(window, {
  Icon,
  ThemeToggle,
  LangToggle,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/engage.jsx
try { (() => {
/* gws.pl website — FAQ accordion + Contact section */
const {
  useState: useEngageState
} = React;
function FaqSection({
  t
}) {
  const {
    Eyebrow
  } = window.GwsPlDesignSystem_50b22c;
  const [open, setOpen] = useEngageState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq",
    "data-screen-label": "FAQ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "07"
  }, t.faq.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, t.faq.title)), /*#__PURE__*/React.createElement("div", {
    className: "faq__list"
  }, t.faq.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "faq-item",
    key: i,
    "data-open": open === i
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("svg", {
    className: "chev",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, /*#__PURE__*/React.createElement("p", null, it.a)))))));
}
function ContactSection({
  t
}) {
  const {
    Eyebrow,
    Button
  } = window.GwsPlDesignSystem_50b22c;
  const c = t.contact;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "contact",
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "08"
  }, c.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, c.lead)), /*#__PURE__*/React.createElement("div", {
    className: "contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__info"
  }, /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: 'mailto:' + c.email
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-row__k"
  }, c.emailLabel), /*#__PURE__*/React.createElement("span", {
    className: "contact-row__v"
  }, window.Icon.mail(), " ", c.email)), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: c.linkedinUrl,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-row__k"
  }, c.linkedinLabel), /*#__PURE__*/React.createElement("span", {
    className: "contact-row__v"
  }, window.Icon.linkedin(), " ", c.linkedin))), /*#__PURE__*/React.createElement("div", {
    className: "contact__note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact__note-k"
  }, c.callTitle), /*#__PURE__*/React.createElement("p", {
    className: "contact__note-p"
  }, c.callBody), /*#__PURE__*/React.createElement("div", {
    className: "contact__note-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    as: "a",
    href: 'mailto:' + c.email
  }, c.emailCta), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: c.linkedinUrl,
    target: "_blank",
    rel: "noopener"
  }, c.linkedinLabel))))));
}
Object.assign(window, {
  FaqSection,
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/engage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/graph-app.jsx
try { (() => {
/* gws.pl — Graph-only explorer (v2) app */
const {
  useState,
  useEffect,
  useMemo,
  useCallback
} = React;
const NODE_VAR = {
  core: '--node-core',
  idea: '--node-idea',
  service: '--node-service',
  audience: '--node-audience',
  training_goal: '--node-goal',
  training_module: '--node-module',
  technology: '--node-tech',
  result: '--node-result',
  extra: '--node-extra',
  contact: '--node-contact'
};
const TYPE_NAME = {
  pl: {
    core: 'rdzeń',
    idea: 'idea',
    service: 'usługa',
    audience: 'odbiorca',
    training_goal: 'cel',
    training_module: 'moduł',
    technology: 'technologia',
    result: 'rezultat',
    extra: 'dodatkowe',
    contact: 'kontakt'
  },
  en: {
    core: 'core',
    idea: 'idea',
    service: 'service',
    audience: 'audience',
    training_goal: 'goal',
    training_module: 'module',
    technology: 'technology',
    result: 'result',
    extra: 'extra',
    contact: 'contact'
  }
};
function getInitialTheme() {
  const savedTheme = localStorage.getItem('gws-theme');
  const explicitTheme = localStorage.getItem('gws-theme-explicit') === '1';
  return explicitTheme && savedTheme ? savedTheme : 'dark';
}
function GxSearch({
  lang,
  nodes,
  onPick
}) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return nodes.filter(n => n.importance >= 4).slice(0, 8);
    return nodes.filter(n => n.label.toLowerCase().includes(s) || (n.summary || '').toLowerCase().includes(s)).slice(0, 12);
  }, [q, nodes]);
  return /*#__PURE__*/React.createElement("div", {
    className: "gx__search",
    onBlur: e => {
      if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "gx__searchin"
  }, window.Icon.search ? window.Icon.search() : null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: q,
    placeholder: lang === 'pl' ? 'Szukaj w grafie…' : 'Search the graph…',
    onChange: e => {
      setQ(e.target.value);
      setOpen(true);
    },
    onFocus: () => setOpen(true)
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "gx__results"
  }, matches.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "gx__noresult"
  }, lang === 'pl' ? 'Brak wyników' : 'No matches') : matches.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: "gx__result",
    onMouseDown: e => e.preventDefault(),
    onClick: () => {
      onPick(n.id);
      setOpen(false);
      setQ('');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rdot",
    style: {
      '--_dot': `var(${NODE_VAR[n.type]})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rl"
  }, n.label), /*#__PURE__*/React.createElement("span", {
    className: "rt"
  }, TYPE_NAME[lang][n.type])))));
}
function GxPanel({
  t,
  lang,
  node,
  related,
  history,
  onClose,
  onSelect,
  onBook
}) {
  if (!node) return null;
  const {
    NodeBadge,
    Button
  } = window.GwsPlDesignSystem_50b22c;
  const c = `var(${NODE_VAR[node.type] || '--node-idea'})`;
  const isContact = node.type === 'contact';
  return /*#__PURE__*/React.createElement("div", {
    className: "gx__panel-inner",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx__panel-top",
    style: {
      '--_c': c
    }
  }, history.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "gx__breadcrumb"
  }, history.slice(-4).map((h, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h.id + i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect(h.id)
  }, h.label.length > 18 ? h.label.slice(0, 16) + '…' : h.label)))), /*#__PURE__*/React.createElement("div", {
    className: "gx__panel-row"
  }, /*#__PURE__*/React.createElement(NodeBadge, {
    type: node.type,
    size: "lg"
  }), /*#__PURE__*/React.createElement("button", {
    className: "gx__close",
    onClick: onClose,
    "aria-label": lang === 'pl' ? 'Zamknij' : 'Close'
  }, window.Icon.x())), /*#__PURE__*/React.createElement("h1", {
    className: "gx__title"
  }, node.label), node.subtitle && /*#__PURE__*/React.createElement("div", {
    className: "gx__subtitle"
  }, node.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "gx__panel-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "gx__summary"
  }, node.body || node.summary), (node.forWhom || node.format) && /*#__PURE__*/React.createElement("div", {
    className: "gx__meta"
  }, node.forWhom && /*#__PURE__*/React.createElement("div", {
    className: "gx__metarow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx__metak"
  }, t.panel.forWhom), /*#__PURE__*/React.createElement("span", {
    className: "gx__metav"
  }, node.forWhom)), node.format && /*#__PURE__*/React.createElement("div", {
    className: "gx__metarow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx__metak"
  }, t.panel.format), /*#__PURE__*/React.createElement("span", {
    className: "gx__metav"
  }, node.format))), node.id === 'nav.faq' && t.faq && t.faq.items && /*#__PURE__*/React.createElement("div", {
    className: "gx__faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx__seclabel"
  }, t.faq.title), t.faq.items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    className: "gx__faq-item",
    open: i === 0
  }, /*#__PURE__*/React.createElement("summary", {
    className: "gx__faq-q"
  }, it.q), /*#__PURE__*/React.createElement("p", {
    className: "gx__faq-a"
  }, it.a)))), isContact && /*#__PURE__*/React.createElement("div", {
    className: "gx__links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "gx__linkrow",
    href: 'mailto:' + t.contact.email
  }, window.Icon.mail(), " ", t.contact.email), /*#__PURE__*/React.createElement("a", {
    className: "gx__linkrow",
    href: t.contact.linkedinUrl,
    target: "_blank",
    rel: "noopener"
  }, window.Icon.linkedin(), " ", t.contact.linkedin)), related.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gx__seclabel"
  }, t.panel.related, " \xB7 ", related.length), /*#__PURE__*/React.createElement("div", {
    className: "gx__related"
  }, related.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    className: "gx__chip",
    style: {
      '--_cc': `var(${NODE_VAR[r.type]})`
    },
    onClick: () => onSelect(r.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cdot"
  }), " ", r.label))))), /*#__PURE__*/React.createElement("div", {
    className: "gx__panel-foot"
  }, isContact ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    arrow: true,
    as: "a",
    href: 'mailto:' + t.contact.email
  }, t.contact.emailCta) : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    arrow: true,
    onClick: onBook
  }, t.cta.book)));
}
function GxApp() {
  const G = window.GWS_GRAPH,
    I = window.GWS_I18N;
  const {
    KnowledgeGraph,
    FilterPill
  } = window.GwsPlDesignSystem_50b22c;
  const [lang, setLang] = useState(() => localStorage.getItem('gws-lang') || 'pl');
  const [theme, setTheme] = useState(getInitialTheme);
  const [selected, setSelected] = useState(null);
  const [activeTypes, setActiveTypes] = useState(() => new Set());
  const [history, setHistory] = useState([]);
  const [touched, setTouched] = useState(false);
  const [vh, setVh] = useState(() => window.innerHeight);
  const t = I[lang];
  const nodes = useMemo(() => G.localizeNodes(lang), [lang]);
  const byId = useMemo(() => {
    const m = {};
    nodes.forEach(n => {
      m[n.id] = n;
    });
    return m;
  }, [nodes]);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gws-theme', theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('gws-lang', lang);
    document.title = lang === 'pl' ? 'gws.pl — Graf wiedzy' : 'gws.pl — Knowledge graph';
  }, [lang]);
  useEffect(() => {
    const onR = () => setVh(window.innerHeight);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  const node = selected ? byId[selected] : null;
  const related = node ? G.neighborsOf(node.id).map(id => byId[id]).filter(Boolean).map(n => ({
    id: n.id,
    label: n.label,
    type: n.type
  })) : [];
  const selectNode = useCallback(id => {
    setTouched(true);
    if (!id) {
      setSelected(null);
      return;
    }
    setSelected(id);
    setHistory(h => {
      const last = h[h.length - 1];
      if (last && last.id === id) return h;
      const n = byId[id];
      return [...h.filter(x => x.id !== id), {
        id,
        label: n ? n.label : id
      }].slice(-6);
    });
  }, [byId]);
  const toggleFilter = useCallback(type => setActiveTypes(p => {
    const n = new Set(p);
    n.has(type) ? n.delete(type) : n.add(type);
    return n;
  }), []);
  const clearAll = useCallback(() => {
    setSelected(null);
    setHistory([]);
    setActiveTypes(new Set());
  }, []);
  const onThemeToggle = useCallback(() => {
    localStorage.setItem('gws-theme-explicit', '1');
    setTheme(p => p === 'dark' ? 'light' : 'dark');
  }, []);
  const open = !!node;
  return /*#__PURE__*/React.createElement("div", {
    className: "gx"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx__bar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "gx__brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      clearAll();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/gws-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "gx__wm"
  }, "gws", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."), "pl")), /*#__PURE__*/React.createElement("span", {
    className: "gx__viewtag"
  }, lang === 'pl' ? 'Graf wiedzy' : 'Knowledge graph'), /*#__PURE__*/React.createElement("div", {
    className: "gx__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gx__right"
  }, /*#__PURE__*/React.createElement(GxSearch, {
    lang: lang,
    nodes: nodes,
    onPick: selectNode
  }), /*#__PURE__*/React.createElement("a", {
    className: "gx__pagelink",
    href: "strona.html"
  }, window.Icon.layout ? window.Icon.layout() : null, /*#__PURE__*/React.createElement("span", null, lang === 'pl' ? 'Widok strony' : 'Page view')), /*#__PURE__*/React.createElement(window.LangToggle, {
    lang: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement(window.ThemeToggle, {
    theme: theme,
    onToggle: onThemeToggle
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'gx__stage' + (open ? ' is-open' : '')
  }, /*#__PURE__*/React.createElement(KnowledgeGraph, {
    nodes: nodes,
    edges: G.EDGES,
    selectedId: selected,
    activeTypes: activeTypes,
    theme: theme,
    height: vh - 64,
    fullscreen: true,
    onSelect: selectNode
  })), /*#__PURE__*/React.createElement("div", {
    className: 'gx__hint' + (touched ? ' hide' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ring"
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h2", null, lang === 'pl' ? 'Kliknij węzeł, aby odkryć treść' : 'Click a node to reveal its content'), /*#__PURE__*/React.createElement("p", null, lang === 'pl' ? 'Kluczowe węzły to sekcje menu. Przybliżaj kółkiem, przeciągaj tło.' : 'Key nodes are the menu sections. Zoom with the wheel, drag the background.'))), /*#__PURE__*/React.createElement("div", {
    className: "gx__legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gx__legend-h"
  }, /*#__PURE__*/React.createElement("span", null, t.map.filtersLabel), activeTypes.size > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTypes(new Set())
  }, t.map.reset)), /*#__PURE__*/React.createElement("div", {
    className: "gx__legend-pills"
  }, G.FILTER_GROUPS.map(g => /*#__PURE__*/React.createElement(FilterPill, {
    key: g.type,
    type: g.type,
    label: g[lang],
    active: activeTypes.has(g.type),
    onClick: () => toggleFilter(g.type)
  })))), (selected || activeTypes.size > 0) && /*#__PURE__*/React.createElement("button", {
    className: "gx__recenter",
    onClick: clearAll
  }, window.Icon.home ? window.Icon.home() : null, lang === 'pl' ? 'Wyśrodkuj' : 'Recenter'), /*#__PURE__*/React.createElement("div", {
    className: 'gx__panel' + (open ? ' is-open' : ''),
    role: "dialog",
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement(GxPanel, {
    t: t,
    lang: lang,
    node: node,
    related: related,
    history: history,
    onClose: () => setSelected(null),
    onSelect: selectNode,
    onBook: () => selectNode('contact.call')
  })));
}
function gxBoot() {
  const mount = () => {
    if (window.__gxMounted) return;
    window.__gxMounted = true;
    if (!window.__gxRoot) window.__gxRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__gxRoot.render(/*#__PURE__*/React.createElement(GxApp, null));
  };
  if (window.GWS_GRAPH && window.GWS_I18N) mount();else window.addEventListener('gws-graph-ready', mount, {
    once: true
  });
}
if (window.__GWS_PAGE === 'graph' && !window.__gxBooted) {
  window.__gxBooted = true;
  gxBoot();
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/graph-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hero-map.jsx
try { (() => {
/* gws.pl website — Hero + Knowledge map sections */

function Hero({
  t,
  lang,
  nodes,
  edges,
  selected,
  onSelect,
  theme
}) {
  const {
    KnowledgeGraph,
    Button,
    Eyebrow
  } = window.GwsPlDesignSystem_50b22c;
  const stats = lang === 'pl' ? [{
    b: 'dr',
    s: 'ekonomia'
  }, {
    b: '20+',
    s: 'lat praktyki'
  }, {
    b: 'PL · EN',
    s: 'dwa języki'
  }] : [{
    b: 'PhD',
    s: 'economics'
  }, {
    b: '20+',
    s: 'years of practice'
  }, {
    b: 'PL · EN',
    s: 'two languages'
  }];
  // headline: lead word coloring
  return /*#__PURE__*/React.createElement("section", {
    className: "section hero",
    id: "hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__text"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "hero__headline"
  }, t.hero.headline), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, t.hero.lead), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => onSelect('contact.call')
  }, t.cta.book), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onSelect('idea.responsibility')
  }, t.cta.manifesto)), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "hero__stat",
    key: i
  }, /*#__PURE__*/React.createElement("b", null, s.b), /*#__PURE__*/React.createElement("span", null, s.s))))))));
}
function KnowledgeMap({
  t,
  lang,
  nodes,
  edges,
  byId,
  selected,
  onSelect,
  activeTypes,
  onToggle,
  onReset,
  theme,
  onOpenSection,
  filterGroups
}) {
  const {
    KnowledgeGraph,
    NodePanel,
    FilterPill,
    Eyebrow
  } = window.GwsPlDesignSystem_50b22c;
  const node = selected ? byId[selected] : null;
  const related = node ? window.GWS_GRAPH.neighborsOf(node.id).map(id => byId[id]).filter(Boolean).map(n => ({
    id: n.id,
    label: n.label,
    type: n.type
  })) : [];
  const counts = {};
  nodes.forEach(n => {
    counts[n.type] = (counts[n.type] || 0) + 1;
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "map",
    "data-screen-label": "Knowledge map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01"
  }, t.map.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, t.map.title), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, t.map.lead)), /*#__PURE__*/React.createElement("div", {
    className: "map__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map__filters",
    role: "group",
    "aria-label": t.map.filtersLabel
  }, filterGroups.map(g => /*#__PURE__*/React.createElement(FilterPill, {
    key: g.type,
    type: g.type,
    label: g[lang],
    count: counts[g.type],
    active: activeTypes.has(g.type),
    onClick: () => onToggle(g.type)
  })), activeTypes.size > 0 && /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    },
    onClick: onReset
  }, t.map.reset, " \u2715"))), /*#__PURE__*/React.createElement("div", {
    className: "map__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map__stage"
  }, /*#__PURE__*/React.createElement(KnowledgeGraph, {
    nodes: nodes,
    edges: edges,
    selectedId: selected,
    activeTypes: activeTypes,
    theme: theme,
    height: 600,
    onSelect: onSelect
  }), /*#__PURE__*/React.createElement("div", {
    className: "graph-hint"
  }, lang === 'pl' ? 'najedź, by prześledzić · przeciągnij węzeł · filtruj powyżej' : 'hover to trace · drag a node · filter above')), /*#__PURE__*/React.createElement("div", {
    className: "map__panelcol"
  }, node ? /*#__PURE__*/React.createElement(NodePanel, {
    node: node,
    related: related,
    labels: t.panel,
    onClose: () => onSelect(null),
    onSelect: onSelect,
    onOpen: n => onOpenSection(n)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "map__placeholder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdot"
  }), t.map.panelHint)))));
}
Object.assign(window, {
  Hero,
  KnowledgeMap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hero-map.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/i18n.js
try { (() => {
/* gws.pl — UI kit copy (PL / EN). Section-level strings only;
   node labels/summaries live in data/graph.js. window.GWS_I18N */
window.GWS_I18N = {
  pl: {
    locale: 'pl-PL',
    meta: {
      title: 'gws.pl — Dzięki AI wspólnie budujemy sprawne organizacje i konkurencyjne biznesy.',
      description: 'Strategiczne doradztwo, szkolenia AI i praca z organizacjami. Doradzam zarządom, uczę kadrę zarządzającą i prowadzę warsztaty dla zespołów.'
    },
    nav: [{
      id: 'manifest',
      label: 'Manifest'
    }, {
      id: 'about',
      label: 'O mnie'
    }, {
      id: 'services',
      label: 'Doradztwo'
    }, {
      id: 'extras',
      label: 'Obszary dodatkowe'
    }, {
      id: 'planner',
      label: 'Plan szkolenia'
    }, {
      id: 'faq',
      label: 'FAQ'
    }, {
      id: 'contact',
      label: 'Kontakt'
    }],
    cta: {
      book: 'Umów rozmowę',
      manifesto: 'Poznaj mój manifest',
      about: 'Dowiedz się więcej o mnie',
      work: 'Zobacz, jak pracuję',
      propose: 'Zaproponuj szkolenie',
      openSection: 'Otwórz sekcję'
    },
    hero: {
      eyebrow: 'Strategia · Ludzie · Wyniki',
      headline: 'Dzięki AI wspólnie budujemy sprawne organizacje i konkurencyjne biznesy.',
      lead: 'Doradzam zarządom, uczę kadrę zarządzającą i prowadzę warsztaty dla zespołów. Łączę doktorat z ekonomii z dwiema dekadami praktyki w projektowaniu systemów — porządkując złożoność, wzmacniając przewagę i budując trwałą wartość.'
    },
    map: {
      eyebrow: 'Mapa wiedzy',
      title: 'Eksploruj praktykę jak graf powiązań',
      lead: 'Każda idea, usługa i grupa odbiorców jest węzłem. Najedź, by prześledzić powiązania; kliknij, by otworzyć panel. To także alternatywna nawigacja po stronie.',
      filtersLabel: 'Filtruj węzły',
      reset: 'Wyczyść',
      panelHint: 'Wybierz węzeł, aby zobaczyć szczegóły.'
    },
    panel: {
      related: 'Powiązane',
      open: 'Otwórz sekcję',
      cta: 'Umów rozmowę',
      forWhom: 'Dla kogo',
      format: 'Forma'
    },
    manifest: {
      eyebrow: 'Manifest',
      title: 'Cztery zasady mojej praktyki',
      items: [{
        t: 'Strategia zakorzeniona w rzeczywistości',
        d: 'Sztuczna inteligencja nie jest produktem — jest nową formą kompetencji organizacyjnej.'
      }, {
        t: 'Ludzie są największą przewagą',
        d: 'Dobra decyzja dotycząca AI zaczyna się od dobrze sformułowanego pytania, nie od wyboru modelu.'
      }, {
        t: 'Decyzje oparte na danych i dowodach',
        d: 'Wdrożenie bez zrozumienia jest kosztem; wdrożenie z nauką jest inwestycją.'
      }, {
        t: 'Partnerstwo i odpowiedzialność',
        d: 'Rolą doradcy nie jest dostarczenie magii, lecz zdjęcie z niej kurtyny.'
      }]
    },
    about: {
      eyebrow: 'O mnie',
      titleOuter: 'Akademia, inżynieria i praktyka — w jednej praktyce',
      titleInner: 'Łączę akademię, inżynierię i praktykę doradczą.',
      body: ['Tytuł doktora nauk ekonomicznych uzyskałem na podstawie pracy łączącej ekonomię z systemami informatycznymi — ta perspektywa do dziś organizuje sposób, w jaki doradzam organizacjom w sprawach AI: od rachunku ekonomicznego wdrożenia, przez modele operacyjne, po mierzalne efekty. Równolegle od lat projektuję i programuję aplikacje na zamówienie firm i instytucji.', 'Doradzam, kiedy decyzja o AI jest decyzją zarządczą; uczę, kiedy jest decyzją zespołu; tworzę kod, kiedy potrzebny jest prototyp, który rozstrzyga wątpliwość.', 'Prywatnie moją pasją jest sprzęt audio, dlatego doradzam też w obszarze hi-fi i high-end dla wszystkich, którym zależy na wysokiej wierności odtwarzanej muzyki, a nie mają czasu i możliwości, aby zająć się tym samodzielnie.'],
      pillars: ['Wykształcenie akademickie', 'Doświadczenie praktyczne', 'Praktyka doradcza']
    },
    services: {
      eyebrow: 'Doradztwo',
      title: 'W czym mogę Cię wesprzeć?',
      lead: 'Pięć obszarów doradczych i pięć formatów pracy z AI — od strategii przy zarządzie po praktyczne warsztaty z zespołami.',
      coreLabel: 'Doradztwo strategiczne',
      aiLabel: 'Praktyka AI'
    },
    extras: {
      eyebrow: 'Obszary dodatkowe',
      title: 'Specjalizacje, które uzupełniają moje podejście'
    },
    planner: {
      eyebrow: 'Plan szkolenia',
      title: 'Zaplanuj szkolenie krok po kroku',
      lead: 'Przejdź ścieżkę odbiorca → cel → czas → forma. Na końcu otrzymasz szkic programu, który możesz od razu omówić.',
      steps: [{
        t: 'Dla kogo?',
        d: 'Określamy grupę docelową i jej potrzeby rozwojowe'
      }, {
        t: 'Jaki cel?',
        d: 'Definiujemy cele szkolenia i oczekiwane rezultaty'
      }, {
        t: 'Jak długo?',
        d: 'Dobieramy optymalny czas trwania i intensywność'
      }, {
        t: 'Forma?',
        d: 'Wybieramy formę: warsztat, szkolenie, program cykliczny'
      }],
      audiences: [{
        id: 'board',
        t: 'Zarząd / C-level',
        d: 'Decyzje strategiczne, ryzyko, priorytety'
      }, {
        id: 'middle',
        t: 'Kadra kierownicza średniego szczebla',
        d: 'Wdrożenia, zmiana procesów'
      }, {
        id: 'itdata',
        t: 'Zespół IT / data',
        d: 'Techniczne umiejętności praktyczne'
      }, {
        id: 'ops',
        t: 'Zespół operacyjny / biznes',
        d: 'Codzienne wykorzystanie narzędzi AI'
      }, {
        id: 'public',
        t: 'Kadra administracji publicznej',
        d: 'Regulacje, zamówienia, odpowiedzialność'
      }],
      goals: [{
        id: 'literacy',
        t: 'Podstawowa piśmienność AI',
        d: 'Zrozumieć, czym AI jest, a czym nie jest'
      }, {
        id: 'strategy',
        t: 'Strategia i decyzje zarządcze',
        d: 'Kiedy inwestować, kiedy się wstrzymać'
      }, {
        id: 'llm',
        t: 'Praktyka pracy z LLM',
        d: 'Prompt engineering, wzorce, jakość'
      }, {
        id: 'risk',
        t: 'Ryzyko, AI Act, compliance',
        d: 'Zrozumieć zobowiązania regulacyjne'
      }, {
        id: 'change',
        t: 'Zarządzanie zmianą',
        d: 'Jak wdrożyć AI w zespołach'
      }],
      durations: [{
        id: 'half',
        t: 'Pół dnia',
        h: '4h'
      }, {
        id: 'full',
        t: 'Pełny dzień',
        h: '8h'
      }, {
        id: 'two',
        t: 'Dwa dni',
        h: '16h'
      }, {
        id: 'series',
        t: 'Cykl (4 sesje)',
        h: '12h'
      }],
      formats: [{
        id: 'onsite',
        t: 'Stacjonarnie'
      }, {
        id: 'remote',
        t: 'Zdalnie'
      }, {
        id: 'hybrid',
        t: 'Hybrydowo'
      }],
      modulesTitle: 'Szkic programu',
      modulesHint: 'Moduły dobrane do celu szkolenia:',
      labels: {
        audience: 'Odbiorca',
        goal: 'Cel',
        duration: 'Czas',
        format: 'Forma'
      },
      empty: 'Wybierz odbiorcę i cel, aby zobaczyć szkic programu.',
      modules: {
        literacy: ['Czym jest, a czym nie jest AI', 'Klasy modeli i ich zastosowania', 'Ćwiczenie: rozpoznaj problem AI', 'Mini-glosariusz dla zarządu'],
        strategy: ['Mapa okazji w organizacji', 'Model operacyjny AI', 'Decyzje build / buy / partner', 'KPI i kryteria sukcesu', 'Roadmapa 12 miesięcy'],
        llm: ['Anatomia dobrego promptu', 'Wzorce agentowe i kompozycyjne', 'Ograniczanie halucynacji, ewaluacja', 'Ćwiczenia na materiale uczestników'],
        risk: ['Bezpieczeństwo i prywatność danych', 'AI Act — obowiązki organizacji', 'Klasyfikacja ryzyka systemów', 'Governance i odpowiedzialność', 'Audit trail i dokumentacja'],
        change: ['Gotowość zespołów do zmiany', 'Projekt pilotażowy jako nośnik zmiany', 'Komunikacja wewnętrzna wokół AI', 'Pomiar adopcji i sukcesu']
      }
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Najczęściej zadawane pytania',
      items: [{
        q: 'Czy pracuje Pan wyłącznie z dużymi organizacjami?',
        a: 'Nie. Moja oferta jest skierowana do zarządów dużych firm, z MŚP, które potrzebują praktycznych szkoleń, oraz z jednostkami administracji publicznej. Forma współpracy jest dopasowywana do skali i dojrzałości organizacji.'
      }, {
        q: 'Jak wygląda pierwsze spotkanie?',
        a: 'Jest bezpłatne, trwa zwykle 45 minut, odbywa się zdalnie. Celem jest rozpoznanie, czego potrzebuje organizacja i czy moje kompetencje są właściwą odpowiedzią. Jeśli nie są — rekomenduję kogoś, kto pasuje lepiej.'
      }, {
        q: 'Czy prowadzi Pan szkolenia zdalnie?',
        a: 'Tak, to jest najprostsza a najbardziej komfortowa czasowo forma kontaktu. Szkolenia techniczne zdalne są równie skuteczne, jeśli grupa jest nieliczna i dobrze sprofilowana.'
      }, {
        q: 'Jakie są koszty współpracy?',
        a: 'Koszt zależy od formatu, długości zaangażowania i wielkości organizacji. Dla wystąpień konferencyjnych i krótkich warsztatów mam stawki standardowe; dla doradztwa strategicznego przygotowuję indywidualną ofertę po pierwszej rozmowie.'
      }, {
        q: 'Czy podpisze Pan NDA przed rozmową?',
        a: 'Tak, jeżeli charakter sprawy tego wymaga. Proszę o taką informację przy umawianiu spotkania.'
      }, {
        q: 'Jakie jest Pana doświadczenie?',
        a: 'Obejmuje ono ponad 20 lat w dydaktyce i nauce jako pracownik naukowy Uniwersytetu Szczecińskiego oraz praktyka biznesowa poprzez projektowanie, zapewnienie rozwoju systemów informatycznych w różnorodnych branżach.'
      }]
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Porozmawiajmy o Twoich celach',
      lead: 'Wszystkie ścieżki tej mapy prowadzą tu. Napisz, w czym mogę pomóc — odezwę się w ciągu dwóch dni roboczych.',
      emailLabel: 'E-mail',
      email: 'biuro@gws.pl',
      phoneLabel: 'Telefon',
      phone: 'dostępny po umówieniu spotkania',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/in/grzegorz-wojarnik',
      linkedinUrl: 'https://linkedin.com/in/grzegorz-wojarnik',
      callTitle: 'Pierwsza rozmowa',
      callBody: 'Bezpłatna, zwykle 45 minut, zdalnie. Rozpoznajemy, czego potrzebuje organizacja — i czy moje kompetencje są właściwą odpowiedzią. Odpowiadam w ciągu dwóch dni roboczych.',
      emailCta: 'Napisz e-mail',
      form: {
        name: 'Imię i nazwisko*',
        email: 'E-mail*',
        phone: 'Telefon',
        subject: 'Temat',
        message: 'Napisz, w czym mogę Ci pomóc...',
        submit: 'Wyślij wiadomość',
        thanks: 'Dziękuję. Odpowiem w ciągu dwóch dni roboczych.'
      }
    },
    footer: {
      claim: 'Strategiczne doradztwo. Szkolenia. Praca z organizacjami.',
      nav: 'Nawigacja',
      coop: 'Współpraca',
      rights: '© 2026 gws.pl. Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin'
    }
  },
  en: {
    locale: 'en-GB',
    meta: {
      title: 'gws.pl — With AI, together we build capable organizations and competitive businesses.',
      description: 'Strategic advisory, AI training and working with organizations. I advise boards, train executives and run workshops for teams.'
    },
    nav: [{
      id: 'manifest',
      label: 'Manifesto'
    }, {
      id: 'about',
      label: 'About'
    }, {
      id: 'services',
      label: 'Advisory'
    }, {
      id: 'extras',
      label: 'Other areas'
    }, {
      id: 'planner',
      label: 'Training planner'
    }, {
      id: 'faq',
      label: 'FAQ'
    }, {
      id: 'contact',
      label: 'Contact'
    }],
    cta: {
      book: 'Book a call',
      manifesto: 'Read my manifesto',
      about: 'Learn more about me',
      work: 'See how I work',
      propose: 'Propose a training',
      openSection: 'Open section'
    },
    hero: {
      eyebrow: 'Strategy · People · Results',
      headline: 'With AI, together we build capable organizations and competitive businesses.',
      lead: 'I advise boards, train executives and run workshops for teams. I combine a PhD in economics with two decades of practice in systems design — bringing order to complexity, strengthening competitive edge and building lasting value.'
    },
    map: {
      eyebrow: 'Knowledge map',
      title: 'Explore the practice as a graph of links',
      lead: 'Every idea, service and audience is a node. Hover to trace connections; click to open a panel. It doubles as alternative navigation for the whole site.',
      filtersLabel: 'Filter nodes',
      reset: 'Clear',
      panelHint: 'Select a node to see its details.'
    },
    panel: {
      related: 'Connected',
      open: 'Open section',
      cta: 'Book a call',
      forWhom: 'For',
      format: 'Format'
    },
    manifest: {
      eyebrow: 'Manifesto',
      title: 'Four principles of my practice',
      items: [{
        t: 'Strategy rooted in reality',
        d: 'Artificial intelligence is not a product — it is a new form of organizational competence.'
      }, {
        t: 'People are the greatest advantage',
        d: 'A good AI decision starts with a well-formed question, not with a choice of model.'
      }, {
        t: 'Decisions based on data and evidence',
        d: 'Adoption without understanding is a cost; adoption with learning is an investment.'
      }, {
        t: 'Partnership and responsibility',
        d: "An advisor's role is not to deliver magic, but to lift its curtain."
      }]
    },
    about: {
      eyebrow: 'About',
      titleOuter: 'Academia, engineering and practice — in one practice',
      titleInner: 'I combine academia, engineering and advisory practice.',
      body: ['I earned my PhD in economics with a thesis bridging economics and information systems — a perspective that to this day shapes how I advise organizations on AI: from the economic case for adoption, through operating models, to measurable outcomes. In parallel, I have spent years designing and building custom applications for businesses and public institutions.', 'I advise when an AI decision is a board decision; I teach when it is a team decision; I write code when a prototype is needed to settle a doubt.', 'Personally, my passion is audio gear, which is why I also advise on hi-fi and high-end systems for those who care about high-fidelity playback but lack the time or capacity to handle it themselves.'],
      pillars: ['Academic background', 'Hands-on experience', 'Advisory practice']
    },
    services: {
      eyebrow: 'Advisory',
      title: 'How can I help you?',
      lead: 'Five advisory areas and five ways to work with AI — from board-level strategy to hands-on workshops with teams.',
      coreLabel: 'Strategic advisory',
      aiLabel: 'AI practice'
    },
    extras: {
      eyebrow: 'Other areas',
      title: 'Specializations that complement my approach'
    },
    planner: {
      eyebrow: 'Training planner',
      title: 'Plan a training step by step',
      lead: 'Walk the path audience → goal → duration → format. At the end you get a draft program you can discuss right away.',
      steps: [{
        t: 'For whom?',
        d: 'We define the target group and its development needs'
      }, {
        t: 'What goals?',
        d: 'We set training objectives and expected outcomes'
      }, {
        t: 'How long?',
        d: 'We pick the optimal duration and intensity'
      }, {
        t: 'Format?',
        d: 'Workshop, training, or recurring program'
      }],
      audiences: [{
        id: 'board',
        t: 'Board / C-level',
        d: 'Strategic decisions, risk, priorities'
      }, {
        id: 'middle',
        t: 'Middle management',
        d: 'Adoption, process change'
      }, {
        id: 'itdata',
        t: 'IT / data team',
        d: 'Practical technical skills'
      }, {
        id: 'ops',
        t: 'Operations / business team',
        d: 'Daily use of AI tools'
      }, {
        id: 'public',
        t: 'Public administration staff',
        d: 'Regulation, procurement, accountability'
      }],
      goals: [{
        id: 'literacy',
        t: 'Basic AI literacy',
        d: "Understand what AI is and what it isn't"
      }, {
        id: 'strategy',
        t: 'Strategy and board decisions',
        d: 'When to invest, when to hold'
      }, {
        id: 'llm',
        t: 'Working with LLMs',
        d: 'Prompt engineering, patterns, quality'
      }, {
        id: 'risk',
        t: 'Risk, AI Act, compliance',
        d: 'Understand regulatory obligations'
      }, {
        id: 'change',
        t: 'Change management',
        d: 'How to roll out AI in teams'
      }],
      durations: [{
        id: 'half',
        t: 'Half day',
        h: '4h'
      }, {
        id: 'full',
        t: 'Full day',
        h: '8h'
      }, {
        id: 'two',
        t: 'Two days',
        h: '16h'
      }, {
        id: 'series',
        t: 'Series (4 sessions)',
        h: '12h'
      }],
      formats: [{
        id: 'onsite',
        t: 'On-site'
      }, {
        id: 'remote',
        t: 'Remote'
      }, {
        id: 'hybrid',
        t: 'Hybrid'
      }],
      modulesTitle: 'Draft program',
      modulesHint: 'Modules matched to the training goal:',
      labels: {
        audience: 'Audience',
        goal: 'Goal',
        duration: 'Duration',
        format: 'Format'
      },
      empty: 'Pick an audience and a goal to see a draft program.',
      modules: {
        literacy: ["What AI is and what it isn't", 'Model classes and their applications', 'Exercise: spot the AI problem', 'Mini-glossary for the board'],
        strategy: ['Map of opportunities in the organization', 'AI operating model', 'Build / buy / partner decisions', 'KPIs and success criteria', '12-month roadmap'],
        llm: ['Anatomy of a good prompt', 'Agent and compositional patterns', 'Limiting hallucinations, evaluation', "Hands-on with participants' material"],
        risk: ['Data security and privacy', "AI Act — your organization's obligations", 'Risk classification of systems', 'Governance and accountability', 'Audit trail and documentation'],
        change: ['Team readiness for change', 'Pilot project as a vehicle for change', 'Internal communication around AI', 'Measuring adoption and success']
      }
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [{
        q: 'Do you only work with large organizations?',
        a: 'No. My offer is aimed at boards of large companies, SMEs that need practical training, and public administration units. The form of cooperation is adapted to the scale and maturity of the organization.'
      }, {
        q: 'What does the first meeting look like?',
        a: "It is free, usually 45 minutes, held remotely. The goal is to recognize what the organization needs and whether my competencies are the right answer. If they aren't — I recommend someone who fits better."
      }, {
        q: 'Do you run training remotely?',
        a: 'Yes, this is the simplest and most time-efficient form of contact. Technical remote training is equally effective when the group is small and well-profiled.'
      }, {
        q: 'What does cooperation cost?',
        a: 'It depends on the format, length of engagement, and the size of the organization. For conference talks and short workshops I have standard rates; for strategic advisory I prepare an individual offer after the first conversation.'
      }, {
        q: 'Will you sign an NDA before the conversation?',
        a: 'Yes, if the nature of the matter requires it. Please mention this when scheduling the meeting.'
      }, {
        q: 'What is your experience?',
        a: 'It includes more than 20 years in teaching and research as a faculty member at the University of Szczecin, alongside business practice through designing and supporting the development of information systems across various industries.'
      }]
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your goals",
      lead: 'Every path on this map leads here. Tell me how I can help — I will reply within two business days.',
      emailLabel: 'Email',
      email: 'biuro@gws.pl',
      phoneLabel: 'Phone',
      phone: 'available after a scheduled meeting',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/in/grzegorz-wojarnik',
      linkedinUrl: 'https://linkedin.com/in/grzegorz-wojarnik',
      callTitle: 'The first call',
      callBody: 'Free, usually 45 minutes, remote. We work out what the organization needs — and whether my competencies are the right answer. I reply within two business days.',
      emailCta: 'Email me',
      form: {
        name: 'Full name*',
        email: 'Email*',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Tell me how I can help...',
        submit: 'Send message',
        thanks: 'Thank you. I will reply within two business days.'
      }
    },
    footer: {
      claim: 'Strategic advisory. Training. Working with organizations.',
      nav: 'Navigation',
      coop: 'Cooperation',
      rights: '© 2026 gws.pl. All rights reserved.',
      privacy: 'Privacy policy',
      terms: 'Terms'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/website/planner.jsx
try { (() => {
/* gws.pl website — Training planner (interactive stepper) */
const {
  useState: usePlannerState
} = React;
function Planner({
  t,
  onSelect
}) {
  const {
    Eyebrow,
    Button,
    NodeBadge
  } = window.GwsPlDesignSystem_50b22c;
  const p = t.planner;
  const [aud, setAud] = usePlannerState(null);
  const [goal, setGoal] = usePlannerState(null);
  const [dur, setDur] = usePlannerState('full');
  const [fmt, setFmt] = usePlannerState('onsite');
  const audObj = p.audiences.find(a => a.id === aud);
  const goalObj = p.goals.find(g => g.id === goal);
  const durObj = p.durations.find(d => d.id === dur);
  const fmtObj = p.formats.find(f => f.id === fmt);
  const modules = goal ? p.modules[goal] || [] : [];
  const ready = aud && goal;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "planner",
    "data-screen-label": "Training planner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "06"
  }, p.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, p.lead)), /*#__PURE__*/React.createElement("div", {
    className: "planner__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "planner__steps"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pstep__num"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__t"
  }, p.steps[0].t), /*#__PURE__*/React.createElement("div", {
    className: "pstep__d"
  }, p.steps[0].d))), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid opt-grid--2"
  }, p.audiences.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    className: "opt",
    "aria-pressed": aud === a.id,
    onClick: () => setAud(a.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__t"
  }, a.t), /*#__PURE__*/React.createElement("span", {
    className: "opt__d"
  }, a.d))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pstep__num"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__t"
  }, p.steps[1].t), /*#__PURE__*/React.createElement("div", {
    className: "pstep__d"
  }, p.steps[1].d))), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid opt-grid--2"
  }, p.goals.map(g => /*#__PURE__*/React.createElement("button", {
    key: g.id,
    className: "opt",
    "aria-pressed": goal === g.id,
    onClick: () => setGoal(g.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__t"
  }, g.t), /*#__PURE__*/React.createElement("span", {
    className: "opt__d"
  }, g.d))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pstep__num"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__t"
  }, p.steps[2].t), /*#__PURE__*/React.createElement("div", {
    className: "pstep__d"
  }, p.steps[2].d))), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid opt-grid--4"
  }, p.durations.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    className: "opt opt--mini",
    "aria-pressed": dur === d.id,
    onClick: () => setDur(d.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__t"
  }, d.t), /*#__PURE__*/React.createElement("span", {
    className: "opt__h"
  }, d.h))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pstep__num"
  }, "4"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pstep__t"
  }, p.steps[3].t), /*#__PURE__*/React.createElement("div", {
    className: "pstep__d"
  }, p.steps[3].d))), /*#__PURE__*/React.createElement("div", {
    className: "opt-grid opt-grid--3"
  }, p.formats.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    className: "opt opt--mini",
    "aria-pressed": fmt === f.id,
    onClick: () => setFmt(f.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "opt__t"
  }, f.t)))))), /*#__PURE__*/React.createElement("div", {
    className: "plan-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plan-out__top"
  }, /*#__PURE__*/React.createElement(NodeBadge, {
    type: "training_goal",
    label: p.modulesTitle,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plan-out__title",
    style: {
      marginTop: 12
    }
  }, ready ? goalObj.t : p.modulesTitle), /*#__PURE__*/React.createElement("div", {
    className: "plan-out__chips"
  }, audObj && /*#__PURE__*/React.createElement("span", {
    className: "plan-chip"
  }, p.labels.audience, ": ", /*#__PURE__*/React.createElement("b", null, audObj.t)), durObj && /*#__PURE__*/React.createElement("span", {
    className: "plan-chip"
  }, p.labels.duration, ": ", /*#__PURE__*/React.createElement("b", null, durObj.t, " \xB7 ", durObj.h)), fmtObj && /*#__PURE__*/React.createElement("span", {
    className: "plan-chip"
  }, p.labels.format, ": ", /*#__PURE__*/React.createElement("b", null, fmtObj.t)))), /*#__PURE__*/React.createElement("div", {
    className: "plan-out__body"
  }, ready ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "plan-out__hint"
  }, p.modulesHint), /*#__PURE__*/React.createElement("div", {
    className: "plan-mods"
  }, modules.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "plan-mod",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mdot",
    "aria-hidden": "true"
  }), m)))) : /*#__PURE__*/React.createElement("p", {
    className: "plan-empty"
  }, p.empty)), /*#__PURE__*/React.createElement("div", {
    className: "plan-out__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    arrow: true,
    onClick: () => onSelect('contact.call')
  }, t.cta.propose))))));
}
Object.assign(window, {
  Planner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/planner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* gws.pl website — content sections: Manifest, About, Services, Extras */

function ManifestSection({
  t,
  onSelect
}) {
  const {
    Card,
    Eyebrow
  } = window.GwsPlDesignSystem_50b22c;
  const ideaIds = ['idea.competence', 'idea.question', 'idea.learning', 'idea.responsibility'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "manifest",
    "data-screen-label": "Manifesto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02"
  }, t.manifest.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, t.manifest.title)), /*#__PURE__*/React.createElement("div", {
    className: "manifest__grid"
  }, t.manifest.items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    node: "idea",
    interactive: true,
    onClick: () => onSelect(ideaIds[i])
  }, /*#__PURE__*/React.createElement("div", {
    className: "principle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "principle__num"
  }, String(i + 1).padStart(2, '0'), " / 04"), /*#__PURE__*/React.createElement("h3", {
    className: "principle__t"
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "principle__d"
  }, it.d)))))));
}
function AboutSection({
  t,
  onSelect
}) {
  const {
    Eyebrow,
    Button
  } = window.GwsPlDesignSystem_50b22c;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "about",
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03"
  }, t.about.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, t.about.titleOuter)), /*#__PURE__*/React.createElement("div", {
    className: "about__grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "about__aside"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "about__inner-title"
  }, t.about.titleInner), /*#__PURE__*/React.createElement("div", {
    className: "about__pillars"
  }, t.about.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "pillar",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pdot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    onClick: () => onSelect('res.measurable')
  }, t.cta.work)), /*#__PURE__*/React.createElement("div", {
    className: "about__body"
  }, t.about.body.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, para))))));
}
function ServiceCard({
  node,
  onSelect
}) {
  const {
    Card
  } = window.GwsPlDesignSystem_50b22c;
  return /*#__PURE__*/React.createElement(Card, {
    node: "service",
    interactive: true,
    onClick: () => onSelect(node.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-card"
  }, node.subtitle && /*#__PURE__*/React.createElement("span", {
    className: "svc-card__sub"
  }, node.subtitle), /*#__PURE__*/React.createElement("span", {
    className: "svc-card__t"
  }, node.label), /*#__PURE__*/React.createElement("span", {
    className: "svc-card__d"
  }, node.summary), /*#__PURE__*/React.createElement("span", {
    className: "svc-card__more"
  }, node.format ? '↗ details' : '↗', " ")));
}
function ServicesSection({
  t,
  lang,
  byId,
  onSelect
}) {
  const {
    Eyebrow
  } = window.GwsPlDesignSystem_50b22c;
  const core = ['svc.strategy', 'svc.process', 'svc.change', 'svc.people', 'svc.analytics'].map(id => byId[id]).filter(Boolean);
  const ai = ['svc.ai_strategy', 'svc.exec_training', 'svc.prompt', 'svc.mentoring', 'svc.talks'].map(id => byId[id]).filter(Boolean);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services",
    "data-screen-label": "Advisory"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "04"
  }, t.services.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, t.services.title), /*#__PURE__*/React.createElement("p", {
    className: "section__lead"
  }, t.services.lead)), /*#__PURE__*/React.createElement("div", {
    className: "svc__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__grouplabel"
  }, /*#__PURE__*/React.createElement("span", null, t.services.coreLabel), /*#__PURE__*/React.createElement("span", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "svc__grid"
  }, core.map(n => /*#__PURE__*/React.createElement(ServiceCard, {
    key: n.id,
    node: n,
    onSelect: onSelect
  })))), /*#__PURE__*/React.createElement("div", {
    className: "svc__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__grouplabel"
  }, /*#__PURE__*/React.createElement("span", null, t.services.aiLabel), /*#__PURE__*/React.createElement("span", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "svc__grid"
  }, ai.map(n => /*#__PURE__*/React.createElement(ServiceCard, {
    key: n.id,
    node: n,
    onSelect: onSelect
  }))))));
}
function ExtrasSection({
  t,
  byId,
  onSelect
}) {
  const {
    Card,
    Eyebrow,
    NodeBadge
  } = window.GwsPlDesignSystem_50b22c;
  const items = ['extra.hifi', 'extra.apps'].map(id => byId[id]).filter(Boolean);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "extras",
    "data-screen-label": "Other areas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "05"
  }, t.extras.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, t.extras.title)), /*#__PURE__*/React.createElement("div", {
    className: "extras__grid"
  }, items.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.id,
    node: "extra",
    interactive: true,
    onClick: () => onSelect(n.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "extra-card"
  }, /*#__PURE__*/React.createElement(NodeBadge, {
    type: "extra"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "extra-card__t"
  }, n.label), /*#__PURE__*/React.createElement("p", {
    className: "extra-card__d"
  }, n.summary)))))));
}
Object.assign(window, {
  ManifestSection,
  AboutSection,
  ServicesSection,
  ExtrasSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FilterPill = __ds_scope.FilterPill;

__ds_ns.KnowledgeGraph = __ds_scope.KnowledgeGraph;

__ds_ns.NodeBadge = __ds_scope.NodeBadge;

__ds_ns.NodePanel = __ds_scope.NodePanel;

__ds_ns.NODE_TYPES = __ds_scope.NODE_TYPES;

__ds_ns.FILTER_GROUPS = __ds_scope.FILTER_GROUPS;

__ds_ns.NAV_HUBS = __ds_scope.NAV_HUBS;

__ds_ns.NODES = __ds_scope.NODES;

__ds_ns.EDGES = __ds_scope.EDGES;

})();
