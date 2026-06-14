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

export const NODE_TYPES = [
  'core', 'idea', 'service', 'audience', 'training_goal',
  'training_module', 'technology', 'result', 'extra', 'contact',
];

export const FILTER_GROUPS = [
  { type: 'service',  pl: 'Usługi',     en: 'Services' },
  { type: 'audience', pl: 'Odbiorcy',   en: 'Audiences' },
  { type: 'training_goal', pl: 'Cele',  en: 'Goals' },
  { type: 'idea',     pl: 'Idee',       en: 'Ideas' },
  { type: 'result',   pl: 'Rezultaty',  en: 'Results' },
  { type: 'extra',    pl: 'Dodatkowe',  en: 'Other areas' },
  { type: 'contact',  pl: 'Kontakt',    en: 'Contact' },
];

/* nav hubs ↔ page sections (used as alternative navigation). */
export const NAV_HUBS = ['nav.manifest', 'nav.about', 'nav.services', 'nav.extras', 'nav.planner', 'nav.faq', 'nav.contact'];

const N = (id, type, importance, targetSection, pl, en) =>
  ({ id, type, importance, targetSection, pl, en });

export const NODES = [
  /* ── home / core ────────────────────────────────────────── */
  N('core.gws', 'core', 5, 'hero',
    { label: 'gws.pl', summary: 'Strategia. Ludzie. Wyniki. Dzięki AI wspólnie budujemy sprawne organizacje i konkurencyjne biznesy.' },
    { label: 'gws.pl', summary: 'Strategy. People. Results. With AI, together we build capable organizations and competitive businesses.' }),

  /* ── navigation spine — the menu, as graph hubs (always labelled) ── */
  N('nav.manifest', 'idea', 4, 'manifest',
    { label: 'Manifest', summary: 'Cztery zasady mojej praktyki — strategia, ludzie, dowody, odpowiedzialność.' },
    { label: 'Manifesto', summary: 'Four principles of my practice — strategy, people, evidence, responsibility.' }),
  N('nav.about', 'idea', 4, 'about',
    { label: 'O mnie', summary: 'Akademia, inżynieria i praktyka doradcza — w jednej osobie.' },
    { label: 'About', summary: 'Academia, engineering and advisory practice — in one person.' }),
  N('nav.services', 'service', 4, 'services',
    { label: 'Doradztwo', summary: 'Pięć obszarów doradczych i pięć formatów pracy z AI.' },
    { label: 'Advisory', summary: 'Five advisory areas and five ways to work with AI.' }),
  N('nav.extras', 'extra', 4, 'extras',
    { label: 'Obszary dodatkowe', summary: 'Hi-fi, high-end oraz aplikacje desktopowe na zamówienie.' },
    { label: 'Other areas', summary: 'Hi-fi, high-end and custom desktop applications.' }),
  N('nav.planner', 'training_goal', 4, 'planner',
    { label: 'Plan szkolenia', summary: 'Zaplanuj szkolenie krok po kroku: odbiorca, cel, czas, forma.' },
    { label: 'Training planner', summary: 'Plan a training step by step: audience, goal, duration, format.' }),
  N('nav.faq', 'idea', 4, 'faq',
    { label: 'FAQ', summary: 'Najczęściej zadawane pytania o zakres, pierwsze spotkanie i koszty.' },
    { label: 'FAQ', summary: 'Frequently asked questions about scope, the first meeting and costs.' }),
  N('nav.contact', 'contact', 4, 'contact',
    { label: 'Kontakt', summary: 'Umów bezpłatną, 45-minutową rozmowę — albo napisz na e-mail.' },
    { label: 'Contact', summary: 'Book a free, 45-minute call — or reach out by email.' }),

  /* ── supporting core concepts ──────────────────────────────── */
  N('core.spr', 'core', 3, 'hero',
    { label: 'Strategia · Ludzie · Wyniki', summary: 'Trzy filary praktyki: porządkowanie złożoności, wzmacnianie przewagi, trwała wartość.' },
    { label: 'Strategy · People · Results', summary: 'Three pillars of the practice: order in complexity, sharper edge, lasting value.' }),
  N('core.ai', 'core', 3, 'manifest',
    { label: 'Gotowość na AI', summary: 'AI jako nowa forma kompetencji organizacyjnej, a nie produkt.' },
    { label: 'AI readiness', summary: 'AI as a new form of organizational competence — not a product.' }),

  /* ── manifesto ideas ────────────────────────────────────── */
  N('idea.competence', 'idea', 2, 'manifest',
    { label: 'AI jako kompetencja', summary: 'Sztuczna inteligencja nie jest produktem — jest nową formą kompetencji organizacyjnej.' },
    { label: 'AI as competence', summary: 'Artificial intelligence is not a product — it is a new form of organizational competence.' }),
  N('idea.question', 'idea', 2, 'manifest',
    { label: 'Dobrze sformułowane pytanie', summary: 'Dobra decyzja dotycząca AI zaczyna się od dobrze sformułowanego pytania, nie od wyboru modelu.' },
    { label: 'Well-formed question', summary: 'A good AI decision starts with a well-formed question, not with a choice of model.' }),
  N('idea.learning', 'idea', 2, 'manifest',
    { label: 'Wdrożenie z nauką', summary: 'Wdrożenie bez zrozumienia jest kosztem; wdrożenie z nauką jest inwestycją.' },
    { label: 'Adoption with learning', summary: 'Adoption without understanding is a cost; adoption with learning is an investment.' }),
  N('idea.responsibility', 'idea', 2, 'manifest',
    { label: 'Odpowiedzialne doradztwo', summary: "Rolą doradcy nie jest dostarczenie magii, lecz zdjęcie z niej kurtyny." },
    { label: 'Responsible advisory', summary: "An advisor's role is not to deliver magic, but to lift its curtain." }),

  /* ── core advisory services (public offer) ──────────────── */
  N('svc.strategy', 'service', 3, 'services',
    { label: 'Strategia i model biznesowy', summary: 'Budowa i weryfikacja strategii oraz modelu, które tworzą przewagę konkurencyjną.' },
    { label: 'Strategy and business model', summary: 'Building and validating strategies and models that create competitive advantage.' }),
  N('svc.process', 'service', 2, 'services',
    { label: 'Optymalizacja procesów', summary: 'Projektowanie i usprawnianie procesów dla większej efektywności i jakości.' },
    { label: 'Process optimization', summary: 'Designing and improving processes for greater efficiency and quality.' }),
  N('svc.change', 'service', 2, 'services',
    { label: 'Zarządzanie zmianą', summary: 'Skuteczne wdrażanie zmian z uwzględnieniem ludzi, komunikacji i celów.' },
    { label: 'Change management', summary: 'Effective change adoption with attention to people, communication and goals.' }),
  N('svc.people', 'service', 2, 'services',
    { label: 'Zarządzanie ludźmi', summary: 'Rozwój liderów, zespołów i kompetencji kluczowych dla organizacji.' },
    { label: 'People management', summary: 'Developing leaders, teams and competencies that matter most to the organization.' }),
  N('svc.analytics', 'service', 2, 'services',
    { label: 'Analityka i decyzje', summary: 'Dane, wnioski i rekomendacje, które prowadzą do lepszych decyzji.' },
    { label: 'Analytics and decisions', summary: 'Data, insights and recommendations that lead to better decisions.' }),

  /* ── extended AI services (from content.js) ─────────────── */
  N('svc.ai_strategy', 'service', 3, 'services',
    { label: 'Strategiczne doradztwo AI', subtitle: 'Dla zarządów i C-level',
      body: 'Budowa strategii AI w horyzoncie 12–36 miesięcy: mapowanie okazji, analiza ryzyka regulacyjnego (w tym AI Act), modele operacyjne, decyzje build/buy, kryteria sukcesu.',
      forWhom: 'Zarządy, rady nadzorcze, komitety strategiczne', format: 'Warsztaty decyzyjne · Sesje cykliczne · Dokument strategiczny',
      summary: 'Strategia AI w horyzoncie 12–36 miesięcy dla zarządów.' },
    { label: 'Strategic AI advisory', subtitle: 'For boards and C-level',
      body: 'Building an AI strategy over a 12–36 month horizon: opportunity mapping, regulatory risk (incl. the AI Act), operating models, build/buy decisions, success criteria.',
      forWhom: 'Boards, supervisory boards, strategy committees', format: 'Decision workshops · Recurring sessions · Strategy document',
      summary: 'A 12–36 month AI strategy for boards.' }),
  N('svc.exec_training', 'service', 3, 'services',
    { label: 'Szkolenia dla kadry zarządzającej', subtitle: "AI bez hype'u, z konsekwencjami",
      body: 'Program szkoleniowy dopasowany do dojrzałości organizacji. Kończy się nie certyfikatem, lecz listą decyzji, które uczestnicy są gotowi podjąć następnego dnia.',
      forWhom: 'Dyrektorzy, członkowie zarządów, dyrektorzy departamentów', format: 'Sesje 1–2 dniowe · In-house lub rezydencyjne · PL/EN',
      summary: 'Szkolenia AI dla kadry zarządzającej, bez hype’u.' },
    { label: 'Executive training', subtitle: 'AI without the hype, with consequences',
      body: "A training program matched to the organization's maturity. It ends not with a certificate but with a list of decisions participants are ready to make the next day.",
      forWhom: 'Directors, board members, department heads', format: '1–2 day sessions · In-house or residential · PL/EN',
      summary: 'AI training for executives, without the hype.' }),
  N('svc.prompt', 'service', 3, 'services',
    { label: 'Warsztaty prompt engineering i LLM', subtitle: 'Dla zespołów pracujących z modelami',
      body: 'Praktyczny warsztat oparty o realne zadania uczestników. Od formułowania instrukcji, przez wzorce agentowe, po ocenę jakości i ograniczanie halucynacji.',
      forWhom: 'Zespoły produktowe, analityczne, prawne, operacyjne', format: '1–3 dni · Grupy 6–16 osób · Własne dane uczestników',
      summary: 'Praktyczne warsztaty z LLM na danych zespołu.' },
    { label: 'Prompt engineering & LLM workshops', subtitle: 'For teams working with language models',
      body: "A hands-on workshop built on participants' real tasks. From writing instructions, through agentic patterns, to quality evaluation and limiting hallucinations.",
      forWhom: 'Product, analytics, legal and operations teams', format: '1–3 days · Groups of 6–16 · Participants’ own data',
      summary: "Hands-on LLM workshops on the team's own data." }),
  N('svc.mentoring', 'service', 2, 'services',
    { label: 'Mentoring i office hours', subtitle: 'Stała relacja doradcza',
      body: 'Cykliczne, krótkie sesje dla liderów produktu i CTO. Bez slajdów, bez formalności — z konsekwentną pracą nad dojrzałością decyzji technologicznych.',
      forWhom: 'CTO, Head of AI, liderzy produktu', format: '60–90 min · Co 2 tygodnie lub miesięcznie',
      summary: 'Cykliczne office hours dla liderów produktu i CTO.' },
    { label: 'Mentoring & office hours', subtitle: 'An ongoing advisory relationship',
      body: 'Short, recurring sessions for product leaders and CTOs. No slides, no formality — consistent work on the maturity of technology decisions.',
      forWhom: 'CTOs, Heads of AI, product leaders', format: '60–90 min · Biweekly or monthly',
      summary: 'Recurring office hours for product leaders and CTOs.' }),
  N('svc.talks', 'service', 2, 'services',
    { label: 'Wykłady i prelekcje', subtitle: 'Dla konferencji, uczelni, spotkań branżowych',
      body: 'Wystąpienia o AI jako zjawisku kulturowym i inżynierskim: od podstaw matematycznych po konsekwencje społeczne. Przygotowane pod profil słuchaczy.',
      forWhom: 'Konferencje, uczelnie, kongresy branżowe', format: '30–90 min · PL/EN · Możliwa dyskusja moderowana',
      summary: 'Wykłady o AI dopasowane do profilu słuchaczy.' },
    { label: 'Lectures & talks', subtitle: 'For conferences, universities, industry events',
      body: 'Talks on AI as a cultural and engineering phenomenon: from mathematical foundations to social consequences. Tailored to the audience profile.',
      forWhom: 'Conferences, universities, industry congresses', format: '30–90 min · PL/EN · Moderated discussion possible',
      summary: 'Talks on AI tailored to the audience.' }),

  /* ── audiences ──────────────────────────────────────────── */
  N('aud.board', 'audience', 3, 'planner',
    { label: 'Zarząd / C-level', summary: 'Decyzje strategiczne, ryzyko, priorytety.' },
    { label: 'Board / C-level', summary: 'Strategic decisions, risk, priorities.' }),
  N('aud.middle', 'audience', 2, 'planner',
    { label: 'Kadra kierownicza średniego szczebla', summary: 'Wdrożenia, zmiana procesów.' },
    { label: 'Middle management', summary: 'Adoption, process change.' }),
  N('aud.itdata', 'audience', 2, 'planner',
    { label: 'Zespół IT / data', summary: 'Techniczne umiejętności praktyczne.' },
    { label: 'IT / data team', summary: 'Practical technical skills.' }),
  N('aud.ops', 'audience', 2, 'planner',
    { label: 'Zespół operacyjny / biznes', summary: 'Codzienne wykorzystanie narzędzi AI.' },
    { label: 'Operations / business team', summary: 'Daily use of AI tools.' }),
  N('aud.public', 'audience', 2, 'planner',
    { label: 'Kadra administracji publicznej', summary: 'Regulacje, zamówienia, odpowiedzialność.' },
    { label: 'Public administration staff', summary: 'Regulation, procurement, accountability.' }),

  /* ── training goals ─────────────────────────────────────── */
  N('goal.literacy', 'training_goal', 2, 'planner',
    { label: 'Podstawowa piśmienność AI', summary: 'Zrozumieć, czym AI jest, a czym nie jest.' },
    { label: 'Basic AI literacy', summary: "Understand what AI is and what it isn't." }),
  N('goal.strategy', 'training_goal', 2, 'planner',
    { label: 'Strategia i decyzje zarządcze', summary: 'Kiedy inwestować, kiedy się wstrzymać.' },
    { label: 'Strategy and board decisions', summary: 'When to invest, when to hold.' }),
  N('goal.llm', 'training_goal', 2, 'planner',
    { label: 'Praktyka pracy z LLM', summary: 'Prompt engineering, wzorce, jakość.' },
    { label: 'Working with LLMs', summary: 'Prompt engineering, patterns, quality.' }),
  N('goal.risk', 'training_goal', 2, 'planner',
    { label: 'Ryzyko, AI Act, compliance', summary: 'Zrozumieć zobowiązania regulacyjne.' },
    { label: 'Risk, AI Act, compliance', summary: 'Understand regulatory obligations.' }),
  N('goal.change', 'training_goal', 2, 'planner',
    { label: 'Wdrażanie zmiany w zespołach', summary: 'Jak wprowadzić AI w zespołach i utrzymać adopcję.' },
    { label: 'Rolling out change in teams', summary: 'How to introduce AI in teams and sustain adoption.' }),

  /* ── technologies ───────────────────────────────────────── */
  N('tech.llm', 'technology', 2, 'planner',
    { label: 'Modele językowe (LLM)', summary: 'Klasy modeli, wzorce agentowe, ewaluacja, ograniczanie halucynacji.' },
    { label: 'Language models (LLM)', summary: 'Model classes, agentic patterns, evaluation, limiting hallucinations.' }),
  N('tech.aiact', 'technology', 2, 'planner',
    { label: 'AI Act i governance', summary: 'Klasyfikacja ryzyka, obowiązki organizacji, audit trail i dokumentacja.' },
    { label: 'AI Act & governance', summary: 'Risk classification, organizational obligations, audit trail and documentation.' }),
  N('tech.data', 'technology', 2, 'planner',
    { label: 'Dane, bezpieczeństwo, prywatność', summary: 'Bezpieczeństwo i prywatność danych jako fundament wdrożenia.' },
    { label: 'Data, security, privacy', summary: 'Data security and privacy as the foundation of adoption.' }),

  /* ── results ────────────────────────────────────────────── */
  N('res.edge', 'result', 3, 'about',
    { label: 'Przewaga konkurencyjna', summary: 'Strategia i model, które realnie różnicują organizację.' },
    { label: 'Competitive advantage', summary: 'Strategy and a model that genuinely differentiate the organization.' }),
  N('res.measurable', 'result', 3, 'about',
    { label: 'Mierzalne efekty', summary: 'Od rachunku ekonomicznego wdrożenia po KPI i kryteria sukcesu.' },
    { label: 'Measurable outcomes', summary: 'From the economic case for adoption to KPIs and success criteria.' }),
  N('res.decisions', 'result', 2, 'about',
    { label: 'Lepsze decyzje', summary: 'Decyzje oparte na danych i dowodach, nie na hype.' },
    { label: 'Better decisions', summary: 'Decisions based on data and evidence, not hype.' }),
  N('res.maturity', 'result', 2, 'about',
    { label: 'Dojrzałość technologiczna', summary: 'Konsekwentna praca nad dojrzałością decyzji technologicznych.' },
    { label: 'Technological maturity', summary: 'Consistent work on the maturity of technology decisions.' }),
  N('res.responsible', 'result', 2, 'manifest',
    { label: 'Odpowiedzialne wdrożenie AI', summary: 'Wdrożenie ze zrozumieniem ryzyka, regulacji i ludzi.' },
    { label: 'Responsible AI adoption', summary: 'Adoption that understands risk, regulation and people.' }),

  /* ── about (detail) ─────────────────────────────────────── */
  N('about.me', 'idea', 3, 'about',
    { label: 'Akademia · inżynieria · praktyka',
      body: 'Doktorat z ekonomii na pracy łączącej ekonomię z systemami informatycznymi; dwie dekady projektowania i programowania aplikacji na zamówienie; praktyka doradcza przy zarządach. Doradzam, kiedy AI jest decyzją zarządczą; uczę, kiedy jest decyzją zespołu; tworzę kod, kiedy potrzebny jest prototyp.',
      summary: 'Doktorat z ekonomii, dwie dekady projektowania systemów, praktyka doradcza w jednej osobie.' },
    { label: 'Academia · engineering · practice',
      body: 'A PhD in economics on a thesis bridging economics and information systems; two decades designing and building custom applications; advisory practice with boards. I advise when AI is a board decision; I teach when it is a team decision; I write code when a prototype is needed.',
      summary: 'A PhD in economics, two decades of systems design, advisory practice in one person.' }),

  /* ── extra areas ────────────────────────────────────────── */
  N('extra.hifi', 'extra', 2, 'extras',
    { label: 'Doradztwo hi-fi i high-end', summary: 'Dobór komponentów, strojenie torów, akustyka pomieszczenia odsłuchowego — bez afiliacji z dystrybutorem.' },
    { label: 'Hi-fi and high-end advisory', summary: 'Component selection, signal-chain tuning, listening-room acoustics — with no distributor affiliation.' }),
  N('extra.apps', 'extra', 2, 'extras',
    { label: 'Aplikacje desktopowe na zamówienie', summary: 'Narzędzia szyte na miarę: od analityki i raportowania po systemy wspierające procesy operacyjne.' },
    { label: 'Custom desktop applications', summary: 'Tailored tools: from analytics and reporting to systems supporting operational processes.' }),

  /* ── contact (detail) ───────────────────────────────────── */
  N('contact.call', 'contact', 3, 'contact',
    { label: 'Umów rozmowę', subtitle: 'Bezpłatne · 45 min · zdalnie',
      body: 'Pierwsze spotkanie jest bezpłatne, trwa zwykle 45 minut i odbywa się zdalnie. Celem jest rozpoznanie, czego potrzebuje organizacja — i czy moje kompetencje są właściwą odpowiedzią.',
      summary: 'Bezpłatna, 45-minutowa rozmowa wprowadzająca.' },
    { label: 'Book a call', subtitle: 'Free · 45 min · remote',
      body: 'The first meeting is free, usually 45 minutes and held remotely. The goal is to recognize what the organization needs — and whether my competencies are the right answer.',
      summary: 'A free, 45-minute introductory call.' }),
  N('contact.email', 'contact', 3, 'contact',
    { label: 'biuro@gws.pl', summary: 'Napisz wiadomość — odpowiem w ciągu dwóch dni roboczych.' },
    { label: 'biuro@gws.pl', summary: 'Send a message — I reply within two business days.' }),
  N('contact.linkedin', 'contact', 3, 'contact',
    { label: 'LinkedIn', summary: 'linkedin.com/in/grzegorz-wojarnik' },
    { label: 'LinkedIn', summary: 'linkedin.com/in/grzegorz-wojarnik' }),
];

const E = (source, target, relation, strength) => ({ source, target, relation, strength });

export const EDGES = [
  /* ── navigation spine: home ↔ menu hubs ─────────────────── */
  E('core.gws', 'nav.manifest', 'explains', 5),
  E('core.gws', 'nav.about', 'explains', 5),
  E('core.gws', 'nav.services', 'explains', 5),
  E('core.gws', 'nav.extras', 'explains', 4),
  E('core.gws', 'nav.planner', 'explains', 5),
  E('core.gws', 'nav.faq', 'explains', 4),
  E('core.gws', 'nav.contact', 'leads_to', 5),
  E('core.gws', 'core.spr', 'explains', 4),
  E('core.gws', 'core.ai', 'leads_to', 4),

  /* ── manifest hub → ideas ───────────────────────────────── */
  E('nav.manifest', 'idea.competence', 'explains', 4),
  E('nav.manifest', 'idea.question', 'explains', 4),
  E('nav.manifest', 'idea.learning', 'explains', 4),
  E('nav.manifest', 'idea.responsibility', 'explains', 4),
  E('idea.competence', 'core.ai', 'explains', 3),
  E('idea.learning', 'res.responsible', 'leads_to', 3),
  E('idea.responsibility', 'res.responsible', 'proves', 3),

  /* ── about hub → detail + results ───────────────────────── */
  E('nav.about', 'about.me', 'explains', 5),
  E('about.me', 'res.measurable', 'proves', 3),
  E('about.me', 'core.spr', 'supports', 3),

  /* ── services hub → all services ────────────────────────── */
  E('nav.services', 'svc.strategy', 'belongs_to', 4),
  E('nav.services', 'svc.process', 'belongs_to', 3),
  E('nav.services', 'svc.change', 'belongs_to', 3),
  E('nav.services', 'svc.people', 'belongs_to', 3),
  E('nav.services', 'svc.analytics', 'belongs_to', 3),
  E('nav.services', 'svc.ai_strategy', 'belongs_to', 4),
  E('nav.services', 'svc.exec_training', 'belongs_to', 4),
  E('nav.services', 'svc.prompt', 'belongs_to', 4),
  E('nav.services', 'svc.mentoring', 'belongs_to', 3),
  E('nav.services', 'svc.talks', 'belongs_to', 3),

  /* services → results / audiences / tech */
  E('svc.strategy', 'res.edge', 'leads_to', 4),
  E('svc.process', 'res.measurable', 'leads_to', 3),
  E('svc.change', 'res.maturity', 'leads_to', 3),
  E('svc.people', 'res.maturity', 'supports', 3),
  E('svc.analytics', 'res.decisions', 'leads_to', 3),
  E('svc.ai_strategy', 'core.ai', 'supports', 4),
  E('svc.ai_strategy', 'aud.board', 'is_for', 4),
  E('svc.ai_strategy', 'res.edge', 'leads_to', 3),
  E('svc.exec_training', 'aud.board', 'is_for', 3),
  E('svc.exec_training', 'goal.strategy', 'supports', 3),
  E('svc.prompt', 'aud.itdata', 'is_for', 3),
  E('svc.prompt', 'goal.llm', 'supports', 4),
  E('svc.prompt', 'tech.llm', 'uses', 4),
  E('svc.mentoring', 'aud.itdata', 'is_for', 2),
  E('svc.mentoring', 'res.maturity', 'leads_to', 2),
  E('svc.talks', 'aud.public', 'is_for', 2),

  /* ── planner hub → audiences + goals ────────────────────── */
  E('nav.planner', 'aud.board', 'is_for', 3),
  E('nav.planner', 'aud.middle', 'is_for', 3),
  E('nav.planner', 'aud.itdata', 'is_for', 3),
  E('nav.planner', 'aud.ops', 'is_for', 3),
  E('nav.planner', 'aud.public', 'is_for', 3),
  E('nav.planner', 'goal.literacy', 'leads_to', 3),
  E('nav.planner', 'goal.strategy', 'leads_to', 3),
  E('nav.planner', 'goal.llm', 'leads_to', 3),
  E('nav.planner', 'goal.risk', 'leads_to', 3),
  E('nav.planner', 'goal.change', 'leads_to', 3),

  /* audiences → goals; goals → tech */
  E('aud.board', 'goal.strategy', 'is_for', 3),
  E('aud.middle', 'goal.change', 'is_for', 2),
  E('aud.itdata', 'goal.llm', 'is_for', 3),
  E('aud.ops', 'goal.literacy', 'is_for', 2),
  E('aud.public', 'goal.risk', 'is_for', 3),
  E('goal.literacy', 'core.ai', 'supports', 2),
  E('goal.strategy', 'res.decisions', 'leads_to', 2),
  E('goal.llm', 'tech.llm', 'uses', 3),
  E('goal.risk', 'tech.aiact', 'uses', 4),
  E('goal.risk', 'tech.data', 'uses', 2),

  /* technologies → results */
  E('tech.llm', 'res.measurable', 'proves', 2),
  E('tech.aiact', 'res.responsible', 'supports', 3),
  E('tech.data', 'res.responsible', 'supports', 2),

  /* ── extras hub → areas ─────────────────────────────────── */
  E('nav.extras', 'extra.hifi', 'belongs_to', 4),
  E('nav.extras', 'extra.apps', 'belongs_to', 4),
  E('about.me', 'extra.apps', 'supports', 2),
  E('about.me', 'extra.hifi', 'supports', 2),

  /* ── faq hub → contact / about ──────────────────────────── */
  E('nav.faq', 'nav.contact', 'contact_path', 4),
  E('nav.faq', 'nav.about', 'explains', 3),

  /* ── contact hub → channels; everything funnels here ────── */
  E('nav.contact', 'contact.call', 'leads_to', 5),
  E('nav.contact', 'contact.email', 'supports', 4),
  E('nav.contact', 'contact.linkedin', 'supports', 3),
  E('res.edge', 'contact.call', 'contact_path', 4),
  E('res.measurable', 'contact.call', 'contact_path', 3),
  E('svc.ai_strategy', 'contact.call', 'contact_path', 4),
  E('aud.board', 'contact.call', 'contact_path', 3),
  E('extra.apps', 'contact.call', 'contact_path', 2),
];

/* Resolve a localized node view for the graph/panel. */
export function localizeNodes(lang) {
  return NODES.map((n) => ({
    id: n.id, type: n.type, importance: n.importance, targetSection: n.targetSection,
    label: n[lang].label, summary: n[lang].summary,
    subtitle: n[lang].subtitle, body: n[lang].body,
    forWhom: n[lang].forWhom, format: n[lang].format,
  }));
}

export function neighborsOf(id) {
  const out = [];
  EDGES.forEach((e) => {
    if (e.source === id) out.push(e.target);
    else if (e.target === id) out.push(e.source);
  });
  return [...new Set(out)];
}
