Jesteś senior product designerem, creative frontend developerem i architektem informacji. Tworzysz nowoczesne, dopracowane strony internetowe w React / Next.js / TypeScript, z naciskiem na interakcję, storytelling, animacje, wysoką jakość UX, dostępność i bardzo dobrą wydajność.

## KONTEKST PROJEKTU

Pracujesz nad stroną `gws.pl`. Obecna strona w repozytorium jest statyczna i korzysta z treści w plikach:

- `index.html`
- `i18n/pl.json`
- `i18n/en.json`
- `i18n/translations.js`
- `content.js`
- `CNAME` z domeną `gws.pl`

Źródłem nadrzędnym dla aktualnej publicznej strony są `index.html`, `i18n/pl.json` i `i18n/en.json`. Plik `content.js` zawiera dodatkowe, bogatsze opisy usług AI i może służyć jako dodatkowy materiał treściowy, ale jeśli pojawia się konflikt, trzymaj się danych z `i18n/*.json`.

Ważne konflikty danych:

- Aktualny e-mail na stronie: `biuro@gws.pl`.
- W starszym/dodatkowym `content.js` występuje `kontakt@gws.pl`; nie używaj go jako głównego kontaktu, chyba że zostanie wyraźnie potwierdzony.
- Aktualny LinkedIn: `linkedin.com/in/grzegorz-wojarnik`, URL: `https://linkedin.com/in/grzegorz-wojarnik`.
- Obecna strona ma wersje językowe PL i EN.

## ZADANIE

Stwórz nową stronę internetową na bazie obecnych treści gws.pl. Nie traktuj tego jako zwykłego redesignu obecnej strony. Potraktuj istniejącą stronę jako źródło treści, języków, linków, SEO i struktury informacyjnej, a następnie zaprojektuj nową, bardziej innowacyjną stronę z efektem "wow".

Nowa strona ma nadal pełnić funkcję profesjonalnej strony doradczej, ale jej doświadczenie ma przypominać interaktywny osobisty system wiedzy.

## GŁÓWNA KONCEPCJA

Nowa strona ma działać jak interaktywny "system wiedzy" inspirowany grafem powiązań z Obsidiana. Treści ze strony mają być pokazane jako sieć połączonych idei, usług, kompetencji, formatów współpracy, grup odbiorców, rezultatów i ścieżek kontaktu.

Graf nie ma być dekoracją. Ma być realnym sposobem eksplorowania strony.

Użytkownik powinien móc odkrywać:

- dlaczego AI jest decyzją strategiczną, a nie tylko narzędziem,
- jakie obszary doradztwa i szkoleń są dostępne,
- dla kogo są przeznaczone usługi,
- jakie cele może mieć szkolenie,
- jak manifest, doświadczenie i oferta łączą się w spójną praktykę,
- jak przejść od problemu organizacyjnego do rozmowy kontaktowej.

## TREŚCI OBECNEJ STRONY - INVENTORY DO ZACHOWANIA

Zachowaj sens i kompletność obecnych treści. Nie wymyślaj nowych faktów. Możesz poprawić mikrocopy, rytm zdań i układ tekstu, ale nie zmieniaj znaczenia.

### Marka i domena

- Marka: `gws.pl`
- Domena: `gws.pl`
- Obszar: strategiczne doradztwo, szkolenia, praca z organizacjami, AI, strategia, ludzie, wyniki.
- Aktualny claim/footer PL: `Strategiczne doradztwo. Szkolenia. Praca z organizacjami.`
- Aktualny claim/footer EN: `Strategic advisory. Training. Working with organizations.`

### SEO / metadata obecne

PL:

- Title: `gws.pl — Strategia. Ludzie. Wyniki.`
- Locale: `pl-PL`

EN:

- Title: `gws.pl — Strategy. People. Results.`
- Locale: `en-GB`

Dla nowej strony przygotuj też sensowne meta descriptions na bazie obecnych treści oraz poprawne `hreflang` dla PL i EN.

### Nawigacja

PL:

- Manifest
- O mnie
- Doradztwo
- Obszary dodatkowe
- Plan szkolenia
- FAQ
- Kontakt

EN:

- Manifesto
- About
- Advisory
- Other areas
- Training planner
- FAQ
- Contact

Aktualne sekcje i kotwice:

- `#manifest`
- `#about`
- `#services`
- `#extras`
- `#planner`
- `#faq`
- `#contact`

### CTA i elementy UI

PL:

- `Umów rozmowę`
- `Poznaj mój manifest`
- `Dowiedz się więcej o mnie`
- `Zobacz, jak pracuję`
- `Zaproponuj szkolenie`
- Formularz: `Imię i nazwisko*`, `E-mail*`, `Telefon`, `Temat`, `Napisz, w czym mogę Ci pomóc...`, `Wyślij wiadomość`, `Dziękuję. Odpowiem w ciągu dwóch dni roboczych.`

EN:

- `Book a call`
- `Read my manifesto`
- `Learn more about me`
- `See how I work`
- `Propose a training`
- Form: `Full name*`, `Email*`, `Phone`, `Subject`, `Tell me how I can help...`, `Send message`, `Thank you. I will reply within two business days.`

### Hero

PL:

Headline:
`Strategia. Ludzie. Wyniki. Razem budujemy organizacje gotowe na AI.`

Lead:
`Doradzam zarządom, uczę kadrę zarządzającą i prowadzę warsztaty dla zespołów. Łączę doktorat z ekonomii z dwiema dekadami praktyki w projektowaniu systemów — porządkując złożoność, wzmacniając przewagę i budując trwałą wartość.`

EN:

Headline:
`Strategy. People. Results. Together we build organizations ready for AI.`

Lead:
`I advise boards, train executives and run workshops for teams. I combine a PhD in economics with two decades of practice in systems design — bringing order to complexity, strengthening competitive edge and building lasting value.`

### Manifest

Sekcja PL:

- Eyebrow: `Manifest`
- Title: `Cztery zasady mojej praktyki`

Zasady PL:

1. `Strategia zakorzeniona w rzeczywistości` — `Sztuczna inteligencja nie jest produktem — jest nową formą kompetencji organizacyjnej.`
2. `Ludzie są największą przewagą` — `Dobra decyzja dotycząca AI zaczyna się od dobrze sformułowanego pytania, nie od wyboru modelu.`
3. `Decyzje oparte na danych i dowodach` — `Wdrożenie bez zrozumienia jest kosztem; wdrożenie z nauką jest inwestycją.`
4. `Partnerstwo i odpowiedzialność` — `Rolą doradcy nie jest dostarczenie magii, lecz zdjęcie z niej kurtyny.`

Sekcja EN:

- Eyebrow: `Manifesto`
- Title: `Four principles of my practice`

Principles EN:

1. `Strategy rooted in reality` — `Artificial intelligence is not a product — it is a new form of organizational competence.`
2. `People are the greatest advantage` — `A good AI decision starts with a well-formed question, not with a choice of model.`
3. `Decisions based on data and evidence` — `Adoption without understanding is a cost; adoption with learning is an investment.`
4. `Partnership and responsibility` — `An advisor's role is not to deliver magic, but to lift its curtain.`

### O mnie / About

Sekcja PL:

- Eyebrow: `O mnie`
- Title outer: `Akademia, inżynieria i praktyka — w jednej praktyce`
- Title inner: `Łączę akademię, inżynierię i praktykę doradczą.`

Body PL:

`Tytuł doktora nauk ekonomicznych uzyskałem na podstawie pracy łączącej ekonomię z systemami informatycznymi — ta perspektywa do dziś organizuje sposób, w jaki doradzam organizacjom w sprawach AI: od rachunku ekonomicznego wdrożenia, przez modele operacyjne, po mierzalne efekty. Równolegle od lat projektuję i programuję aplikacje na zamówienie firm i instytucji.`

`Doradzam, kiedy decyzja o AI jest decyzją zarządczą; uczę, kiedy jest decyzją zespołu; tworzę kod, kiedy potrzebny jest prototyp, który rozstrzyga wątpliwość.`

`Prywatnie moją pasją jest sprzęt audio, dlatego doradzam też w obszarze hi-fi i high-end dla wszystkich, którym zależy na wysokiej wierności odtwarzanej muzyki, a nie mają czasu i możliwości, aby zająć się tym samodzielnie.`

Pillars PL:

- `Wykształcenie akademickie`
- `Doświadczenie praktyczne`
- `Praktyka doradcza`

Sekcja EN:

- Eyebrow: `About`
- Title outer: `Academia, engineering and practice — in one practice`
- Title inner: `I combine academia, engineering and advisory practice.`

Body EN:

`I earned my PhD in economics with a thesis bridging economics and information systems — a perspective that to this day shapes how I advise organizations on AI: from the economic case for adoption, through operating models, to measurable outcomes. In parallel, I have spent years designing and building custom applications for businesses and public institutions.`

`I advise when an AI decision is a board decision; I teach when it is a team decision; I write code when a prototype is needed to settle a doubt.`

`Personally, my passion is audio gear, which is why I also advise on hi-fi and high-end systems for those who care about high-fidelity playback but lack the time or capacity to handle it themselves.`

Pillars EN:

- `Academic background`
- `Hands-on experience`
- `Advisory practice`

### Doradztwo / Advisory - obecna publiczna oferta

Sekcja PL:

- Eyebrow: `Doradztwo`
- Title: `W czym mogę Cię wesprzeć?`

Usługi PL:

1. `Strategia i model biznesowy` — `Budowa i weryfikacja strategii oraz modelu, które tworzą przewagę konkurencyjną.`
2. `Optymalizacja procesów` — `Projektowanie i usprawnianie procesów dla większej efektywności i jakości.`
3. `Zarządzanie zmianą` — `Skuteczne wdrażanie zmian z uwzględnieniem ludzi, komunikacji i celów.`
4. `Zarządzanie ludźmi` — `Rozwój liderów, zespołów i kompetencji kluczowych dla organizacji.`
5. `Analityka i decyzje strategiczne` — `Dane, wnioski i rekomendacje, które prowadzą do lepszych decyzji.`

Sekcja EN:

- Eyebrow: `Advisory`
- Title: `How can I help you?`

Services EN:

1. `Strategy and business model` — `Building and validating strategies and models that create competitive advantage.`
2. `Process optimization` — `Designing and improving processes for greater efficiency and quality.`
3. `Change management` — `Effective change adoption with attention to people, communication and goals.`
4. `People management` — `Developing leaders, teams and competencies that matter most to the organization.`
5. `Analytics and strategic decisions` — `Data, insights and recommendations that lead to better decisions.`

### Dodatkowe, bogatsze opisy usług z `content.js`

Użyj ich jako materiału do rozwinięcia narracji, paneli grafu lub podstruktury oferty, zwłaszcza jeśli nowa strona ma być mocniej pozycjonowana wokół AI.

PL:

1. `Strategiczne doradztwo AI`
   - Subtitle: `Dla zarządów i C-level`
   - Body: `Budowa strategii AI w horyzoncie 12–36 miesięcy: mapowanie okazji, analiza ryzyka regulacyjnego (w tym AI Act), modele operacyjne, decyzje build/buy, kryteria sukcesu. Współpraca w formacie warsztatów decyzyjnych i cyklicznych sesji przy zarządzie.`
   - For: `Zarządy, rady nadzorcze, komitety strategiczne`
   - Format: `Warsztaty decyzyjne · Sesje cykliczne · Dokument strategiczny`

2. `Szkolenia dla kadry zarządzającej`
   - Subtitle: `AI bez hype'u, z konsekwencjami`
   - Body: `Program szkoleniowy dopasowany do poziomu dojrzałości organizacji. Kończy się nie certyfikatem, lecz listą decyzji, które uczestnicy są gotowi podjąć następnego dnia. Case studies z sektora prywatnego i publicznego.`
   - For: `Dyrektorzy, członkowie zarządów, dyrektorzy departamentów w administracji`
   - Format: `Sesje 1–2 dniowe · In-house lub rezydencyjne · PL/EN`

3. `Warsztaty z prompt engineering i LLM`
   - Subtitle: `Dla zespołów pracujących z modelami językowymi`
   - Body: `Praktyczny warsztat oparty o realne zadania uczestników. Od poprawnego formułowania instrukcji, przez wzorce agentowe, po ocenę jakości i ograniczanie halucynacji. Pracujemy na materiałach przyniesionych przez zespół.`
   - For: `Zespoły produktowe, analityczne, prawne, operacyjne`
   - Format: `1–3 dni · Grupy 6–16 osób · Własne dane uczestników`

4. `Mentoring i office hours`
   - Subtitle: `Stała relacja doradcza`
   - Body: `Cykliczne, krótkie sesje dla liderów produktu i CTO, w których przynoszą konkretny problem. Bez slajdów, bez formalności — z konsekwentną pracą nad dojrzałością decyzji technologicznych w organizacji.`
   - For: `CTO, Head of AI, liderzy produktu`
   - Format: `60–90 min · Co 2 tygodnie lub miesięcznie`

5. `Wykłady i prelekcje`
   - Subtitle: `Dla konferencji, uczelni, spotkań branżowych`
   - Body: `Wystąpienia o AI jako zjawisku kulturowym i inżynierskim: od podstaw matematycznych po konsekwencje społeczne. Przygotowane pod profil słuchaczy — inaczej mówię do inżynierów, inaczej do prawników, inaczej do studentów.`
   - For: `Konferencje, uczelnie, kongresy branżowe`
   - Format: `30–90 min · PL/EN · Możliwa forma dyskusji moderowanej`

### Obszary dodatkowe / Other areas

Sekcja PL:

- Eyebrow: `Obszary dodatkowe`
- Title: `Specjalizacje, które uzupełniają moje podejście`

Treści PL:

1. `Doradztwo hi-fi i high-end` — `Dobór komponentów, strojenie torów sygnałowych, akustyka pomieszczenia odsłuchowego, konsultacje zakupowe dla kolekcjonerów i osób budujących system referencyjny. Praca oparta o wieloletnie doświadczenie odsłuchowe i techniczne, bez afiliacji z konkretnym dystrybutorem.`
2. `Aplikacje desktopowe na zamówienie` — `Projektuję i doradzam w zakresie aplikacje desktopowe dla organizacji, które potrzebują narzędzi szytych na miarę — od analityki i raportowania, po systemy wspierające procesy produkcyjne i operacyjne.`

Sekcja EN:

- Eyebrow: `Other areas`
- Title: `Specializations that complement my approach`

Content EN:

1. `Hi-fi and high-end advisory` — `Component selection, signal-chain tuning, listening-room acoustics, purchasing consultations for collectors and those building a reference system. Work grounded in many years of listening and technical experience, with no distributor affiliation.`
2. `Custom desktop applications` — `I design and advise on desktop applications for organizations that need tailored tools — from analytics and reporting to systems supporting production and operational processes.`

### Plan szkolenia / Training planner

Sekcja PL:

- Eyebrow: `Plan szkolenia`
- Title: `Zaplanuj szkolenie krok po kroku`

Sekcja EN:

- Eyebrow: `Training planner`
- Title: `Plan a training step by step`

Stepper PL:

1. `Dla kogo?` — `Określamy grupę docelową i jej potrzeby rozwojowe`
2. `Jaki cel?` — `Definiujemy cele szkolenia i oczekiwane rezultaty`
3. `Jak długo?` — `Dobieramy optymalny czas trwania i intensywność`
4. `Forma?` — `Wybieramy formę: warsztat, szkolenie, program cykliczny`

Stepper EN:

1. `For whom?` — `We define the target group and its development needs`
2. `What goals?` — `We set training objectives and expected outcomes`
3. `How long?` — `We pick the optimal duration and intensity`
4. `Format?` — `Workshop, training, or recurring program`

Odbiorcy PL / EN:

- `Zarząd / C-level` — `Decyzje strategiczne, ryzyko, priorytety` / `Board / C-level` — `Strategic decisions, risk, priorities`
- `Kadra kierownicza średniego szczebla` — `Wdrożenia, zmiana procesów` / `Middle management` — `Adoption, process change`
- `Zespół IT / data` — `Techniczne umiejętności praktyczne` / `IT / data team` — `Practical technical skills`
- `Zespół operacyjny / biznes` — `Codzienne wykorzystanie narzędzi AI` / `Operations / business team` — `Daily use of AI tools`
- `Kadra administracji publicznej` — `Regulacje, zamówienia, odpowiedzialność` / `Public administration staff` — `Regulation, procurement, accountability`

Cele PL / EN:

- `Podstawowa piśmienność AI` — `Zrozumieć, czym AI jest, a czym nie jest` / `Basic AI literacy` — `Understand what AI is and what it isn't`
- `Strategia i decyzje zarządcze` — `Kiedy inwestować, kiedy się wstrzymać` / `Strategy and board decisions` — `When to invest, when to hold`
- `Praktyka pracy z LLM` — `Prompt engineering, wzorce, jakość` / `Working with LLMs` — `Prompt engineering, patterns, quality`
- `Ryzyko, AI Act, compliance` — `Zrozumieć zobowiązania regulacyjne` / `Risk, AI Act, compliance` — `Understand regulatory obligations`
- `Zarządzanie zmianą` — `Jak wdrożyć AI w zespołach` / `Change management` — `How to roll out AI in teams`

Czas trwania PL / EN:

- `Pół dnia` / `Half day` — 4h
- `Pełny dzień` / `Full day` — 8h
- `Dwa dni` / `Two days` — 16h
- `Cykl (4 sesje)` / `Series (4 sessions)` — 12h

Format PL / EN:

- `Stacjonarnie` / `On-site`
- `Zdalnie` / `Remote`
- `Hybrydowo` / `Hybrid`

Moduły szkoleniowe PL:

- `Czym jest, a czym nie jest AI`
- `Klasy modeli i ich zastosowania`
- `Ćwiczenie: rozpoznaj problem AI`
- `Mini-glosariusz dla zarządu`
- `Mapa okazji w organizacji`
- `Model operacyjny AI`
- `Decyzje build / buy / partner`
- `KPI i kryteria sukcesu`
- `Roadmapa 12 miesięcy`
- `Anatomia dobrego promptu`
- `Wzorce agentowe i kompozycyjne`
- `Ograniczanie halucynacji, ewaluacja`
- `Ćwiczenia na materiale uczestników`
- `Bezpieczeństwo i prywatność danych`
- `AI Act — obowiązki organizacji`
- `Klasyfikacja ryzyka systemów`
- `Governance i odpowiedzialność`
- `Audit trail i dokumentacja`
- `Gotowość zespołów do zmiany`
- `Projekt pilotażowy jako nośnik zmiany`
- `Komunikacja wewnętrzna wokół AI`
- `Pomiar adopcji i sukcesu`

Moduły szkoleniowe EN:

- `What AI is and what it isn't`
- `Model classes and their applications`
- `Exercise: spot the AI problem`
- `Mini-glossary for the board`
- `Map of opportunities in the organization`
- `AI operating model`
- `Build / buy / partner decisions`
- `KPIs and success criteria`
- `12-month roadmap`
- `Anatomy of a good prompt`
- `Agent and compositional patterns`
- `Limiting hallucinations, evaluation`
- `Hands-on with participants' material`
- `Data security and privacy`
- `AI Act — your organization's obligations`
- `Risk classification of systems`
- `Governance and accountability`
- `Audit trail and documentation`
- `Team readiness for change`
- `Pilot project as a vehicle for change`
- `Internal communication around AI`
- `Measuring adoption and success`

### FAQ

Sekcja PL:

- Eyebrow: `FAQ`
- Title: `Najczęściej zadawane pytania`

FAQ PL:

1. `Czy pracuje Pan wyłącznie z dużymi organizacjami?` — `Nie. Moja oferta jest skierowana do zarządów dużych firm, z MŚP, które potrzebują praktycznych szkoleń, oraz z jednostkami administracji publicznej. Forma współpracy jest dopasowywana do skali i dojrzałości organizacji.`
2. `Jak wygląda pierwsze spotkanie?` — `Jest bezpłatne, trwa zwykle 45 minut, odbywa się zdalnie. Celem jest rozpoznanie, czego potrzebuje organizacja i czy moje kompetencje są właściwą odpowiedzią. Jeśli nie są — rekomenduję kogoś, kto pasuje lepiej.`
3. `Czy prowadzi Pan szkolenia zdalnie?` — `Tak, to jest najprostsza a najbardziej komfortowa czasowo forma kontaktu. Szkolenia techniczne zdalne są równie skuteczne, jeśli grupa jest nieliczna i dobrze sprofilowana.`
4. `Jakie są koszty współpracy?` — `Koszt zależy od formatu, długości zaangażowania i wielkości organizacji. Dla wystąpień konferencyjnych i krótkich warsztatów mam stawki standardowe; dla doradztwa strategicznego przygotowuję indywidualną ofertę po pierwszej rozmowie.`
5. `Czy podpisze Pan NDA przed rozmową?` — `Tak, jeżeli charakter sprawy tego wymaga. Proszę o taką informację przy umawianiu spotkania.`
6. `Jakie jest Pana doświadczenie?` — `Obejmuje ono ponad 20 lat w dydaktyce i nauce jako pracownik naukowy Uniwersytetu Szczecińskiego oraz praktyka biznesowa poprzez projektowanie, zapewnienie rozwoju systemów informatycznych w różnorodnych branżach.`

FAQ EN:

1. `Do you only work with large organizations?` — `No. My offer is aimed at boards of large companies, SMEs that need practical training, and public administration units. The form of cooperation is adapted to the scale and maturity of the organization.`
2. `What does the first meeting look like?` — `It is free, usually 45 minutes, held remotely. The goal is to recognize what the organization needs and whether my competencies are the right answer. If they aren't — I recommend someone who fits better.`
3. `Do you run training remotely?` — `Yes, this is the simplest and most time-efficient form of contact. Technical remote training is equally effective when the group is small and well-profiled.`
4. `What does cooperation cost?` — `It depends on the format, length of engagement, and the size of the organization. For conference talks and short workshops I have standard rates; for strategic advisory I prepare an individual offer after the first conversation.`
5. `Will you sign an NDA before the conversation?` — `Yes, if the nature of the matter requires it. Please mention this when scheduling the meeting.`
6. `What is your experience?` — `It includes more than 20 years in teaching and research as a faculty member at the University of Szczecin, alongside business practice through designing and supporting the development of information systems across various industries.`

### Kontakt / Contact

Sekcja PL:

- Eyebrow: `Kontakt`
- Title: `Porozmawiajmy o Twoich celach`
- Email: `biuro@gws.pl`
- Phone: `dostępny po umówieniu spotkania`
- LinkedIn: `linkedin.com/in/grzegorz-wojarnik`
- LinkedIn URL: `https://linkedin.com/in/grzegorz-wojarnik`

Sekcja EN:

- Eyebrow: `Contact`
- Title: `Let's talk about your goals`
- Email: `biuro@gws.pl`
- Phone: `available after a scheduled meeting`
- LinkedIn: `linkedin.com/in/grzegorz-wojarnik`
- LinkedIn URL: `https://linkedin.com/in/grzegorz-wojarnik`

### Stopka / Footer

PL:

- `Strategiczne doradztwo. Szkolenia. Praca z organizacjami.`
- `Nawigacja`
- `Współpraca`
- `© 2026 gws.pl. Wszelkie prawa zastrzeżone.`
- `Polityka prywatności`
- `Regulamin`

EN:

- `Strategic advisory. Training. Working with organizations.`
- `Navigation`
- `Cooperation`
- `© 2026 gws.pl. All rights reserved.`
- `Privacy policy`
- `Terms`

## WERSJE JĘZYKOWE

Strona ma mieć dwie pełne wersje językowe:

- PL
- EN

Wymagania:

- przełącznik języka widoczny w nawigacji,
- pełne tłumaczenia wszystkich sekcji,
- osobne metadata SEO dla każdej wersji językowej,
- poprawne `hreflang`,
- zachowanie obecnych linków i adresów tam, gdzie ma to sens,
- przełącznik języka nie resetuje kontekstu użytkownika: jeśli użytkownik ma otwarty panel konkretnego węzła grafu albo znajduje się w danej sekcji, po zmianie języka powinien zostać w tym samym kontekście.

## STYLISTYKA

Kierunek wizualny: `Obsidian meets premium personal operating system`.

Strona ma być:

- nowoczesna,
- elegancka,
- techniczna,
- przestrzenna,
- interaktywna,
- premium,
- bardziej jak mapa myślenia niż klasyczna wizytówka,
- wiarygodna dla zarządów, C-level, administracji publicznej, liderów produktu i zespołów technicznych.

Domyślnie zaprojektuj mocny tryb ciemny, ale dodaj przełącznik jasny / ciemny. Tryb jasny nie może wyglądać jak proste odwrócenie kolorów. Ma być osobno dopracowany.

Unikaj:

- generycznych fioletowych gradientów AI,
- stockowego wyglądu SaaS,
- nudnych kart w siatce,
- przesadnych efektów glow,
- layoutu wyglądającego jak gotowy template,
- infantylnego przedstawiania AI,
- efektów, które utrudniają czytanie treści.

## STRUKTURA STRONY

### 1. Hero

- pełny pierwszy ekran z interaktywnym grafem,
- headline oparty na obecnym głównym komunikacie strony,
- krótki opis wartości,
- główne CTA z obecnej strony,
- drugie CTA do manifestu,
- graf widoczny od razu jako główny motyw,
- hero powinien od razu komunikować: strategia, ludzie, wyniki, organizacje gotowe na AI.

### 2. Interaktywna mapa

- graf powiązań między treściami,
- kliknięcie w węzeł otwiera panel z opisem,
- hover podświetla powiązane elementy,
- filtry: usługi, odbiorcy, cele szkolenia, technologie, idee, rezultaty, kontakt,
- kliknięcie może przewijać do odpowiedniej sekcji strony,
- mapa ma być użyteczna także jako alternatywna nawigacja.

### 3. Sekcje merytoryczne

- wykorzystaj obecne treści,
- każda sekcja powinna być powiązana z konkretnymi węzłami grafu,
- podczas scrollowania aktywny fragment grafu powinien zmieniać się kontekstowo,
- unikaj klasycznej, płaskiej siatki kart jako głównej struktury.

### 4. Oferta / doświadczenie / plan szkolenia

- pokaż obecne treści w bardziej narracyjny sposób,
- połącz usługi z grupami odbiorców, cele szkolenia z modułami, manifest z rezultatami,
- planner szkolenia może być osobną interaktywną ścieżką w grafie: odbiorca -> cel -> format -> szkic programu -> kontakt.

### 5. Kontakt

- zachowaj obecne dane kontaktowe i CTA,
- finał strony powinien sprawiać wrażenie, że wszystkie ścieżki grafu prowadzą do kontaktu,
- wykorzystaj email `biuro@gws.pl` oraz LinkedIn `https://linkedin.com/in/grzegorz-wojarnik`.

## MODEL DANYCH

Utwórz strukturę danych dla treści i grafu, np.:

```ts
type NodeType =
  | "core"
  | "service"
  | "audience"
  | "training_goal"
  | "training_module"
  | "technology"
  | "idea"
  | "result"
  | "extra"
  | "contact";

type GraphNode = {
  id: string;
  label: string;
  type: NodeType;
  summary: string;
  language: "pl" | "en";
  targetSection: string;
  importance: 1 | 2 | 3 | 4 | 5;
};

type GraphEdge = {
  source: string;
  target: string;
  relation:
    | "supports"
    | "uses"
    | "leads_to"
    | "explains"
    | "proves"
    | "contact_path"
    | "belongs_to"
    | "is_for";
  strength: 1 | 2 | 3 | 4 | 5;
};
```

Minimalny zestaw węzłów grafu powinien objąć:

- core: `gws.pl`, `Strategy / People / Results`, `AI readiness`
- idee manifestu: `AI as organizational competence`, `Well-formed question`, `Adoption with learning`, `Responsible advisory`
- usługi: strategia i model biznesowy, optymalizacja procesów, zarządzanie zmianą, zarządzanie ludźmi, analityka i decyzje strategiczne
- usługi rozszerzone z `content.js`: strategiczne doradztwo AI, szkolenia dla kadry zarządzającej, warsztaty prompt engineering i LLM, mentoring i office hours, wykłady i prelekcje
- odbiorcy: zarząd/C-level, middle management, IT/data, operations/business, public administration
- cele szkolenia: AI literacy, strategy, LLM practice, risk/compliance, change management
- moduły szkoleniowe z obecnego plannera
- rezultaty: przewaga konkurencyjna, mierzalne efekty, lepsze decyzje, dojrzałość technologiczna, odpowiedzialne wdrożenie AI
- obszary dodatkowe: hi-fi/high-end advisory, custom desktop applications
- kontakt: book a call / umów rozmowę, email, LinkedIn

## TECHNOLOGIA

Jeśli tworzysz projekt od zera, użyj:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS,
- Framer Motion albo Motion,
- `d3-force`, `react-force-graph-2d` albo własny canvas dla grafu,
- lokalny system i18n dla PL/EN,
- typowany model danych dla treści i grafu.

Jeśli istniejący projekt ma już stack, zachowaj go, o ile nie blokuje realizacji tej koncepcji. Jeżeli przechodzisz ze statycznego HTML na Next.js, zachowaj pełną treść i linki z obecnej strony.

## INTERAKCJE

- graf reaguje na ruch kursora,
- kliknięcie w węzeł pokazuje szczegóły,
- aktywna sekcja strony podświetla odpowiadające węzły,
- filtry grafu działają bez przeładowania strony,
- przełącznik języka nie resetuje kontekstu użytkownika,
- przełącznik jasny / ciemny działa płynnie,
- na mobile graf jest uproszczony i wydajny,
- planner szkolenia powinien tworzyć czytelny szkic programu na bazie wybranych odbiorców, celów, czasu i formatu,
- CTA powinny zawsze prowadzić do sensownego następnego kroku.

## DOSTĘPNOŚĆ I WYDAJNOŚĆ

- dodaj fallback dla `prefers-reduced-motion`,
- zadbaj o kontrast tekstu,
- graf nie może blokować czytania treści,
- strona musi być responsywna,
- teksty nie mogą nachodzić na siebie,
- CTA muszą być łatwe do kliknięcia,
- graf na mobile ma być lekki i czytelny,
- canvas/SVG grafu musi mieć alternatywną strukturę tekstową dla użytkowników, którzy nie korzystają z interaktywnej wizualizacji,
- unikaj layout shift,
- utrzymuj stabilne rozmiary paneli, filtrów, przycisków i elementów grafu,
- zadbaj o focus states i obsługę klawiaturą dla panelu węzłów.

## WALIDACJA TREŚCI

Przed zakończeniem sprawdź:

- czy PL i EN mają kompletne sekcje,
- czy nie zgubiły się CTA,
- czy email to `biuro@gws.pl`,
- czy LinkedIn prowadzi do `https://linkedin.com/in/grzegorz-wojarnik`,
- czy manifest zawiera wszystkie 4 zasady,
- czy FAQ zawiera 6 pytań,
- czy planner zawiera 5 grup odbiorców, 5 celów, 4 długości i 3 formaty,
- czy metadata i `hreflang` są poprawne,
- czy tryb jasny i ciemny są dopracowane osobno,
- czy graf jest rzeczywistą warstwą eksploracji, a nie dekoracją.

## REZULTAT

Wygeneruj gotową, działającą stronę internetową z dwiema wersjami językowymi, obecnymi treściami gws.pl i interaktywną mapą powiązań w stylu Obsidiana. Strona ma wyglądać jak nowoczesny, osobisty system wiedzy i jednocześnie pełnić funkcję profesjonalnej strony internetowej dla doradztwa strategicznego, szkoleń AI i pracy z organizacjami.
