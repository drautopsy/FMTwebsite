const icons = {
  arrowRight:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  arrowLeft:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>',
  book:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
  file:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/></svg>',
  flask:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6"/><path d="M10 3v6l-5 8a3 3 0 0 0 2.5 4.5h9A3 3 0 0 0 19 17l-5-8V3"/><path d="M7 16h10"/></svg>',
  scale:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18"/><path d="M6 7h12"/><path d="m6 7-3 6h6z"/><path d="m18 7-3 6h6z"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  clipboard:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5h6"/><path d="M9 3h6v4H9z"/><path d="M6 5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  check:
    '<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
  alert:
    '<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
  mail:
    '<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="m4 7 8 6 8-6"/></svg>',
  clock:
    '<svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
};

let cases = [
  {
    id: "blunt-force-brief",
    title: "Blunt Force Injury Pattern",
    topic: "Injury Interpretation",
    difficulty: "Foundation",
    time: "18 min",
    objective: "Differentiate impact site, patterned injury, and competing explanations.",
    icon: "search",
  },
  {
    id: "sharp-force-documentation",
    title: "Sharp Force Documentation",
    topic: "Injury Interpretation",
    difficulty: "Intermediate",
    time: "22 min",
    objective: "Describe margins, direction, and limitations without overstatement.",
    icon: "file",
  },
  {
    id: "asphyxia-context",
    title: "Asphyxial Death Context",
    topic: "Death Investigation",
    difficulty: "Intermediate",
    time: "24 min",
    objective: "Use scene context and findings to build a cautious opinion framework.",
    icon: "clipboard",
  },
  {
    id: "firearm-wound-principles",
    title: "Firearm Wound Principles",
    topic: "Injury Interpretation",
    difficulty: "Advanced",
    time: "27 min",
    objective: "Use cautious language around range, direction, and evidence correlation.",
    icon: "search",
  },
  {
    id: "drowning-investigation",
    title: "Drowning Investigation",
    topic: "Death Investigation",
    difficulty: "Advanced",
    time: "26 min",
    objective: "Separate supportive findings from non-specific postmortem changes.",
    icon: "search",
  },
  {
    id: "burns-scalds",
    title: "Burns and Scalds",
    topic: "Injury Interpretation",
    difficulty: "Intermediate",
    time: "20 min",
    objective: "Document distribution and consider timing, pattern, and history.",
    icon: "file",
  },
  {
    id: "road-traffic-injuries",
    title: "Road Traffic Injury Basics",
    topic: "Death Investigation",
    difficulty: "Foundation",
    time: "21 min",
    objective: "Connect injury distribution with reconstruction limits and evidence needs.",
    icon: "search",
  },
  {
    id: "sexual-offence-exam",
    title: "Sexual Offence Examination Principles",
    topic: "Clinical Forensic Medicine",
    difficulty: "Intermediate",
    time: "24 min",
    objective: "Apply consent, documentation, sample integrity, and trauma-informed care principles.",
    icon: "clipboard",
  },
  {
    id: "child-protection-indicators",
    title: "Child Protection Indicators",
    topic: "Clinical Forensic Medicine",
    difficulty: "Advanced",
    time: "26 min",
    objective: "Distinguish documentation duties, safeguarding signals, and limits of opinion.",
    icon: "book",
  },
  {
    id: "alcohol-intoxication",
    title: "Alcohol Intoxication Opinion",
    topic: "Toxicology",
    difficulty: "Foundation",
    time: "16 min",
    objective: "Interpret toxicology values with sampling, tolerance, and context in mind.",
    icon: "flask",
  },
  {
    id: "op-poisoning",
    title: "Organophosphorus Poisoning",
    topic: "Toxicology",
    difficulty: "Intermediate",
    time: "25 min",
    objective: "Recognize a classic toxicology pattern and plan defensible documentation.",
    icon: "flask",
  },
  {
    id: "carbon-monoxide",
    title: "Carbon Monoxide Exposure",
    topic: "Toxicology",
    difficulty: "Intermediate",
    time: "19 min",
    objective: "Assess exposure setting, sample choice, and competing causes.",
    icon: "flask",
  },
  {
    id: "drug-overdose",
    title: "Drug Overdose Review",
    topic: "Toxicology",
    difficulty: "Advanced",
    time: "28 min",
    objective: "Frame cause and manner carefully when mixed substances are reported.",
    icon: "flask",
  },
  {
    id: "snakebite-envenomation",
    title: "Snakebite and Envenomation",
    topic: "Toxicology",
    difficulty: "Foundation",
    time: "17 min",
    objective: "Connect history, clinical record, and sampling in a teaching case.",
    icon: "book",
  },
  {
    id: "chain-of-custody",
    title: "Chain of Custody Gap",
    topic: "Evidence Handling",
    difficulty: "Foundation",
    time: "15 min",
    objective: "Identify documentation gaps that affect evidence integrity.",
    icon: "clipboard",
  },
  {
    id: "medicolegal-report",
    title: "Medicolegal Report Review",
    topic: "Medicolegal Reporting",
    difficulty: "Advanced",
    time: "30 min",
    objective: "Improve opinion language, limitations, and court-ready structure.",
    icon: "scale",
  },
];

let detailedCases = {
  "op-poisoning": {
    brief:
      "A fictional adult patient is brought to care after being found unwell near stored agricultural chemicals. The teaching focus is toxicology reasoning, sample choice, and opinion wording.",
    context:
      "The case file includes witness statements about recent access to pesticide containers, a hospital record describing cholinergic features, and delayed notification to the investigating officer.",
    findings: [
      "Clinical notes describe excessive secretions, constricted pupils, and respiratory distress.",
      "Clothing and container labels were sealed separately, but the seal numbers were not cross-referenced in the first report.",
      "Specimens were collected after treatment had already begun, creating an interpretation limitation.",
    ],
    questions: [
      "Which findings are supportive rather than diagnostic?",
      "What sample handling details should be recorded?",
      "How should the opinion acknowledge treatment and timing?",
    ],
    interpretation:
      "The pattern is consistent with organophosphorus exposure, but the report should separate clinical consistency from chemical confirmation. Timing, treatment, and chain-of-custody notes affect confidence.",
    framework:
      "Opinion language should state the basis of inference, specimen limitations, and the need to correlate toxicology results with clinical and scene documentation.",
    points: [
      "Avoid presenting a toxidrome as definitive proof without analytical support.",
      "Record container seizure, labels, seal numbers, specimen type, preservative, and transfer details.",
      "Mention therapeutic intervention as a possible influence on later biological samples.",
    ],
    quiz: {
      question: "Which statement is most defensible at the preliminary stage?",
      options: [
        "The death must be certified as organophosphorus poisoning based only on scene history.",
        "The features are consistent with organophosphorus exposure and require toxicological correlation.",
        "Treatment records are irrelevant once a chemical container is found.",
      ],
      correct: 1,
      feedback:
        "Correct. A careful preliminary opinion separates consistency from confirmation and names the evidence needed for correlation.",
    },
  },
  "carbon-monoxide": {
    brief:
      "A fictional family reports a person found unconscious in a closed room with a faulty heater. The case teaches environmental context and toxicology interpretation.",
    context:
      "The room had poor ventilation, but the heater was moved before documentation. The teaching file includes scene photographs, witness notes, and a blood sample request.",
    findings: [
      "Witnesses report headache and dizziness among others present in the same building.",
      "Scene alteration occurred before full documentation.",
      "A carboxyhemoglobin test was requested with timing noted on the requisition.",
    ],
    questions: [
      "Which scene details strengthen the exposure hypothesis?",
      "What should be documented when the scene is altered?",
      "How does timing affect interpretation of carboxyhemoglobin levels?",
    ],
    interpretation:
      "A closed-space exposure pattern supports carbon monoxide consideration. The final opinion should integrate scene, clinical, and laboratory evidence while acknowledging altered scene conditions.",
    framework:
      "Describe the basis for suspected exposure, record missing or altered scene elements, and state that toxicological confirmation is required for stronger attribution.",
    points: [
      "Do not rely on a single visual finding as a diagnostic shortcut.",
      "Record ventilation, appliances, fuel source, witness symptoms, and scene disturbance.",
      "Use precise sample timing and analytical results in the opinion.",
    ],
    quiz: {
      question: "What is the best next documentation priority?",
      options: [
        "Ignore the moved heater because witness history is enough.",
        "Document the alteration and collect corroborating scene, clinical, and laboratory evidence.",
        "State that all closed-room deaths are carbon monoxide exposure.",
      ],
      correct: 1,
      feedback:
        "Correct. Scene alteration is itself important and should be recorded alongside corroborating evidence.",
    },
  },
  "chain-of-custody": {
    brief:
      "A fictional toxicology sample arrives at a laboratory with a missing transfer signature. The case teaches how documentation gaps affect evidence integrity.",
    context:
      "The sample label is intact, but the transfer form has a blank receiver field and unclear time notation. The teaching focus is not blame, but defensible reporting.",
    findings: [
      "Seal number on the sample matches one line in the requisition.",
      "The receiving signature is missing on the transfer sheet.",
      "Storage conditions were recorded only after laboratory receipt.",
    ],
    questions: [
      "Which details support continuity?",
      "Which missing elements should be flagged?",
      "How should an expert mention the limitation without overstating it?",
    ],
    interpretation:
      "The matching seal number supports continuity, but missing transfer documentation weakens the record. The limitation should be described plainly in any report relying on the sample.",
    framework:
      "A report can state what is documented, what is absent, and whether the gap affects confidence in identity, integrity, timing, or storage.",
    points: [
      "Chain of custody is a record of accountable transfer, not just a label.",
      "Limitations should be transparent, specific, and proportionate.",
      "Corrective statements should avoid speculation about what happened in the gap.",
    ],
    quiz: {
      question: "Which report phrase is best?",
      options: [
        "The sample is invalid because one signature is missing.",
        "The transfer record has a missing receiver signature, which is a chain-of-custody limitation.",
        "The sample was certainly tampered with.",
      ],
      correct: 1,
      feedback:
        "Correct. The phrase states the documented limitation without making unsupported conclusions.",
    },
  },
};

let topics = [
  {
    title: "Forensic Pathology",
    description: "Death investigation, injury interpretation, autopsy reasoning, and cause-of-death language.",
    icon: "search",
    tags: ["Asphyxia", "Drowning", "Burns"],
  },
  {
    title: "Clinical Forensic Medicine",
    description: "Documentation principles, examination logic, consent, injury recording, and limits of opinion.",
    icon: "clipboard",
    tags: ["Injury notes", "History", "Consent"],
  },
  {
    title: "Toxicology",
    description: "Poisoning scenarios, sample selection, analytical correlation, and cautious interpretation.",
    icon: "flask",
    tags: ["OP compounds", "CO", "Alcohol"],
  },
  {
    title: "Evidence Handling",
    description: "Sealing, labeling, transfer documentation, storage conditions, and continuity of evidence.",
    icon: "file",
    tags: ["Seal numbers", "Storage", "Transfer"],
  },
  {
    title: "Medical Jurisprudence",
    description: "Medicolegal duties, report structure, ethical boundaries, and professional communication.",
    icon: "scale",
    tags: ["Opinion", "Duty", "Limits"],
  },
  {
    title: "Expert Witness Skills",
    description: "Clear testimony, neutral phrasing, limitation handling, and court-ready explanations.",
    icon: "book",
    tags: ["Clarity", "Cross-exam", "Evidence"],
  },
];

let pathSteps = [
  {
    title: "Foundations",
    text: "Learn terms, documentation standards, case-file reading, and safe educational boundaries.",
    progress: "22%",
  },
  {
    title: "Injury Interpretation",
    text: "Practice describing injuries, recognizing patterns, and avoiding unsupported certainty.",
    progress: "38%",
  },
  {
    title: "Death Investigation",
    text: "Integrate scene, history, examination findings, and postmortem limitations.",
    progress: "55%",
  },
  {
    title: "Toxicology",
    text: "Use clinical context, sample timing, laboratory correlation, and chain of custody.",
    progress: "70%",
  },
  {
    title: "Documentation",
    text: "Build concise medicolegal reports with findings, reasoning, opinion, and limitations.",
    progress: "84%",
  },
  {
    title: "Courtroom Readiness",
    text: "Translate technical reasoning into clear, impartial expert explanations.",
    progress: "100%",
  },
];

let resources = [
  {
    title: "Autopsy Documentation Checklist",
    type: "Checklist",
    text: "A structured teaching checklist for external, internal, sample, and opinion sections.",
    icon: "clipboard",
  },
  {
    title: "Toxicology Sample Guide",
    type: "Guide",
    text: "Specimen type, preservative, timing, labeling, and transfer prompts for learning.",
    icon: "flask",
  },
  {
    title: "Injury Documentation Template",
    type: "Template",
    text: "A neutral description framework for site, size, shape, margins, and limitations.",
    icon: "file",
  },
  {
    title: "Medicolegal Report Outline",
    type: "Outline",
    text: "A court-friendly structure for history, findings, reasoning, opinion, and caveats.",
    icon: "scale",
  },
  {
    title: "Chain-of-Custody Checklist",
    type: "Checklist",
    text: "A practical sequence for seals, labels, signatures, times, and storage entries.",
    icon: "clipboard",
  },
];

let faqs = [
  {
    q: "Who is this site for?",
    a: "It is designed for medical students, forensic medicine trainees, educators, healthcare professionals, and legal learners who want structured fictional case practice.",
  },
  {
    q: "Are these real cases?",
    a: "No. The cases are fictionalized teaching scenarios created to demonstrate reasoning patterns without exposing private or graphic material.",
  },
  {
    q: "Can this replace formal training?",
    a: "No. It is an educational supplement and does not replace supervised forensic, clinical, legal, or laboratory training.",
  },
  {
    q: "Where should a learner start?",
    a: "Begin with Foundations, then move through injury interpretation, death investigation, toxicology, documentation, and courtroom readiness.",
  },
  {
    q: "Can educators suggest topics?",
    a: "Yes. The contact form is set up for topic suggestions and teaching feedback.",
  },
];

const main = document.querySelector("#main");
const mobileToggle = document.querySelector("#mobile-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const headerSearch = document.querySelector("#header-search");
const siteSearch = document.querySelector("#site-search");
let pendingSearch = "";

function renderIcon(name) {
  return icons[name] || icons.file;
}

function difficultyClass(difficulty) {
  return difficulty.toLowerCase();
}

function uniqueTopics() {
  return ["All topics", ...Array.from(new Set(cases.map((item) => item.topic)))];
}

function caseCard(item, compact = false) {
  return `
    <article class="card case-card">
      <div class="icon-tile">${renderIcon(item.icon)}</div>
      <div class="card-meta">
        <span>${item.topic}</span>
        <span>${icons.clock}${item.time}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.objective}</p>
      <span class="difficulty ${difficultyClass(item.difficulty)}">${item.difficulty}</span>
      ${
        compact
          ? ""
          : `<a class="button subtle" href="#case/${item.id}">Open Case ${icons.arrowRight}</a>`
      }
    </article>
  `;
}

function renderHome() {
  const featured = cases.slice(0, 5).map((item) => caseCard(item, true)).join("");
  const latest = cases.slice(7, 10).map((item) => caseCard(item)).join("");

  main.innerHTML = `
    <div class="page">
      <section class="hero">
        <div class="hero-copy">
          <h1>Learn Forensic Medicine and Toxicology Through Cases</h1>
          <p class="lead">
            Build observation, interpretation, documentation, and medicolegal
            reasoning with fictional, non-graphic teaching cases designed for
            careful learners.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#cases">Browse Cases ${icons.arrowRight}</a>
            <a class="button" href="#learning-path">View Learning Path ${icons.book}</a>
          </div>
          <div class="learning-strip" aria-label="Learning outcomes">
            <div><strong>12</strong><span>teaching cases</span></div>
            <div><strong>6</strong><span>core topics</span></div>
            <div><strong>5</strong><span>resource guides</span></div>
            <div><strong>Quiz</strong><span>instant feedback</span></div>
          </div>
        </div>
        <div class="hero-visual">
          <aside class="glance-panel" aria-label="Case library at a glance">
            <h2>Case Library at a Glance</h2>
            <p>
              Explore a growing collection of fictional case scenarios with
              quizzes, interpretation guides, and opinion-writing prompts.
            </p>
            <div class="glance-stats">
              <div><strong>${cases.length}</strong><span>Cases</span></div>
              <div><strong>${topics.length}</strong><span>Topics</span></div>
              <div><strong>3</strong><span>Detailed modules</span></div>
              <div><strong>All</strong><span>Levels</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section class="section band" aria-labelledby="featured-cases-title">
        <div class="section-header">
          <div>
            <h2 id="featured-cases-title">Case Library</h2>
            <p>Start with focused case cards, then open a full teaching flow with questions, interpretation, opinion framing, and quiz feedback.</p>
          </div>
          <a class="button" href="#cases">All Cases ${icons.arrowRight}</a>
        </div>
        <div class="grid five">${featured}</div>
      </section>

      <section class="section method-split" aria-labelledby="method-title">
        <figure class="hero-image">
          <img src="assets/forensic-education-hero.png" alt="Educational case files, laboratory notes, and forensic medicine study materials on a desk" />
        </figure>
        <div>
          <h2 id="method-title">A Practical Case Method</h2>
          <p class="lead">
            Each module moves from a short brief to structured findings, learner
            questions, interpretation, opinion framing, and a quick knowledge
            check.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#case/op-poisoning">Open Sample Case ${icons.arrowRight}</a>
            <a class="button" href="#resources">View Resources ${icons.file}</a>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="topics-title">
        <div class="section-header">
          <div>
            <h2 id="topics-title">Topics</h2>
            <p>Move between pathology, clinical forensic practice, toxicology, evidence handling, jurisprudence, and expert communication.</p>
          </div>
          <a class="button" href="#topics">Explore Topics ${icons.arrowRight}</a>
        </div>
        <div class="grid three">${topics.slice(0, 3).map(topicCard).join("")}</div>
      </section>

      <section class="section band" aria-labelledby="latest-title">
        <div class="section-header">
          <div>
            <h2 id="latest-title">Latest Teaching Cases</h2>
            <p>Each case is fictional and written to teach careful, transparent reasoning rather than sensational conclusions.</p>
          </div>
        </div>
        <div class="grid three">${latest}</div>
      </section>

      <section class="section" aria-labelledby="faq-title">
        <div class="section-header">
          <div>
            <h2 id="faq-title">FAQ</h2>
            <p>Quick answers about the learning scope, case design, and educational limitations.</p>
          </div>
        </div>
        ${faqList()}
      </section>
    </div>
  `;
  bindFaq();
}

function renderCases() {
  main.innerHTML = `
    <div class="page">
      <section class="section" aria-labelledby="cases-title">
        <div class="section-header">
          <div>
            <h1 id="cases-title">Case Library</h1>
            <p class="lead">Filter fictional teaching cases by topic and difficulty, then open a case to work through findings, questions, opinion framing, and quiz feedback.</p>
          </div>
        </div>
        <form class="filters" id="case-filters">
          <div class="field">
            <label for="text-filter">Search</label>
            <input id="text-filter" name="search" placeholder="Case title or topic" />
          </div>
          <div class="field">
            <label for="topic-filter">Topic</label>
            <select id="topic-filter" name="topic">
              ${uniqueTopics().map((topic) => `<option value="${topic}">${topic}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="difficulty-filter">Difficulty</label>
            <select id="difficulty-filter" name="difficulty">
              <option value="All difficulties">All difficulties</option>
              <option value="Foundation">Foundation</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button class="button" type="reset">Reset Filters</button>
        </form>
        <div class="grid three" id="case-results"></div>
      </section>
    </div>
  `;
  bindCaseFilters();
}

function bindCaseFilters() {
  const form = document.querySelector("#case-filters");
  const text = document.querySelector("#text-filter");
  const topic = document.querySelector("#topic-filter");
  const difficulty = document.querySelector("#difficulty-filter");
  const results = document.querySelector("#case-results");
  text.value = pendingSearch;
  pendingSearch = "";

  function update() {
    const query = text.value.trim().toLowerCase();
    const filtered = cases.filter((item) => {
      const searchable = `${item.title} ${item.topic} ${item.difficulty} ${item.objective}`.toLowerCase();
      const textMatch = !query || searchable.includes(query);
      const topicMatch = topic.value === "All topics" || item.topic === topic.value;
      const difficultyMatch =
        difficulty.value === "All difficulties" || item.difficulty === difficulty.value;
      return textMatch && topicMatch && difficultyMatch;
    });

    results.innerHTML = filtered.length
      ? filtered.map((item) => caseCard(item)).join("")
      : '<div class="empty-state">No cases match the current filters.</div>';
  }

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("reset", () => setTimeout(update, 0));
  update();
}

function topicCard(topic) {
  return `
    <article class="topic-card">
      <div class="icon-tile">${renderIcon(topic.icon)}</div>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <div class="topic-links">${topic.tags.map((tag) => `<span class="text-chip">${tag}</span>`).join("")}</div>
    </article>
  `;
}

function renderTopics() {
  main.innerHTML = `
    <div class="page">
      <section class="section" aria-labelledby="topics-page-title">
        <div class="section-header">
          <div>
            <h1 id="topics-page-title">Topics</h1>
            <p class="lead">A practical map of the subject area, from forensic pathology and toxicology to evidence integrity and courtroom communication.</p>
          </div>
        </div>
        <div class="grid three">${topics.map(topicCard).join("")}</div>
      </section>
    </div>
  `;
}

function renderLearningPath() {
  main.innerHTML = `
    <div class="page">
      <section class="section" aria-labelledby="path-title">
        <div class="section-header">
          <div>
            <h1 id="path-title">Learning Path</h1>
            <p class="lead">Follow a structured path from core vocabulary to court-ready reasoning. The progress bars are visual guideposts for the learning sequence.</p>
          </div>
        </div>
        <div class="path">
          ${pathSteps
            .map(
              (step, index) => `
                <article class="path-step">
                  <span class="step-number">${index + 1}</span>
                  <div>
                    <h3>${step.title}</h3>
                    <p>${step.text}</p>
                  </div>
                  <div class="progress-rail" aria-label="${step.title} progress marker"><span style="width: ${step.progress}"></span></div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderResources() {
  main.innerHTML = `
    <div class="page">
      <section class="section" aria-labelledby="resources-title">
        <div class="section-header">
          <div>
            <h1 id="resources-title">Resources</h1>
            <p class="lead">Static teaching resources for documentation, sample handling, opinion structure, and evidence continuity.</p>
          </div>
        </div>
        <div class="grid three">
          ${resources
            .map(
              (item) => `
                <article class="resource-card">
                  <div class="icon-tile">${renderIcon(item.icon)}</div>
                  <div class="resource-meta">${item.type}</div>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                  <a class="button subtle" href="#contact">Request version ${icons.arrowRight}</a>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderContact() {
  main.innerHTML = `
    <div class="page">
      <section class="section" aria-labelledby="contact-title">
        <div class="contact-grid">
          <div class="contact-panel">
            <h1 id="contact-title">Contact</h1>
            <p class="lead">Send teaching feedback, request a topic, or suggest a fictional case area for future learning modules.</p>
            <div class="contact-list">
              <div>${icons.mail}<span>education@forensiccaseacademy.example</span></div>
              <div>${icons.book}<span>Designed for supervised learning and classroom use.</span></div>
              <div>${icons.alert}<span>Not for emergency, clinical, legal, or investigative consultation.</span></div>
            </div>
          </div>
          <form class="contact-panel" id="contact-form" novalidate>
            <div class="form-grid">
              <div class="field">
                <label for="name">Name</label>
                <input id="name" name="name" autocomplete="name" />
                <span class="error" data-error-for="name"></span>
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" autocomplete="email" />
                <span class="error" data-error-for="email"></span>
              </div>
              <div class="field">
                <label for="role">Learner role</label>
                <select id="role" name="role">
                  <option value="">Select a role</option>
                  <option>Medical student</option>
                  <option>Forensic trainee</option>
                  <option>Healthcare professional</option>
                  <option>Law student</option>
                  <option>Educator</option>
                </select>
                <span class="error" data-error-for="role"></span>
              </div>
              <div class="field">
                <label for="interest">Topic interest</label>
                <select id="interest" name="interest">
                  <option>Toxicology</option>
                  <option>Injury interpretation</option>
                  <option>Death investigation</option>
                  <option>Evidence handling</option>
                  <option>Report writing</option>
                </select>
              </div>
              <div class="field full">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <span class="error" data-error-for="message"></span>
              </div>
            </div>
            <div class="form-actions">
              <button class="button primary" type="submit">Send Feedback ${icons.arrowRight}</button>
            </div>
            <div class="success-message" id="success-message">Thank you. Your teaching feedback has been captured in this demo form.</div>
          </form>
        </div>
      </section>
    </div>
  `;
  bindContactForm();
}

function detailForCase(item) {
  return (
    detailedCases[item.id] || {
      brief: `${item.title} is a fictional teaching case focused on ${item.objective.toLowerCase()}`,
      context:
        "The file includes a short history, scene or clinical context, examination notes, and selected documentation prompts for structured reasoning.",
      findings: [
        "The available history gives a preliminary direction but does not establish the final opinion by itself.",
        "Findings should be documented using neutral descriptive language.",
        "Any missing records, delayed samples, or altered context should be stated as limitations.",
      ],
      questions: [
        "Which facts are observations and which are interpretations?",
        "What limitations should be stated before forming an opinion?",
        "What additional records would improve confidence?",
      ],
      interpretation:
        "The teaching emphasis is to connect findings with context while preserving uncertainty where evidence is incomplete.",
      framework:
        "A balanced opinion should include the basis for reasoning, relevant negative or missing information, and a clear statement of limitations.",
      points: [
        "Use descriptive observations before conclusions.",
        "State what evidence supports the opinion and what remains uncertain.",
        "Avoid language that exceeds the evidence in the teaching file.",
      ],
      quiz: {
        question: "Which habit best improves medicolegal reasoning?",
        options: [
          "Move directly to a conclusion when the history sounds familiar.",
          "Separate observations, interpretations, and limitations before giving an opinion.",
          "Ignore missing documents if the likely answer is obvious.",
        ],
        correct: 1,
        feedback:
          "Correct. Strong medicolegal reasoning separates observed facts, interpretation, and limitations.",
      },
    }
  );
}

function renderCaseDetail(id) {
  const item = cases.find((entry) => entry.id === id) || cases[0];
  const detail = detailForCase(item);

  main.innerHTML = `
    <div class="page">
      <section class="section" aria-labelledby="case-detail-title">
        <div class="section-header">
          <div>
            <a class="button subtle" href="#cases">${icons.arrowLeft} Back to Cases</a>
            <h1 id="case-detail-title">${item.title}</h1>
            <p class="lead">${item.objective}</p>
          </div>
        </div>
        <div class="detail-layout">
          <div>
            ${detailSection("Case Brief", detail.brief)}
            ${detailSection("Context", detail.context)}
            ${listSection("Examination Findings", detail.findings)}
            ${listSection("Learner Questions", detail.questions, "ol")}
            ${detailSection("Interpretation Guide", detail.interpretation)}
            ${detailSection("Medicolegal Opinion Framework", detail.framework)}
            ${listSection("Teaching Points", detail.points)}
            ${quizSection(detail.quiz, item.id)}
          </div>
          <aside class="side-note">
            <div class="panel-topline"><span class="status-dot"></span><span>${item.topic}</span></div>
            <h3>${item.difficulty} Case</h3>
            <p>${item.time} estimated study time. Fictionalized for education, with non-graphic professional language.</p>
            <a class="button" href="#learning-path">Use in Learning Path ${icons.arrowRight}</a>
          </aside>
        </div>
      </section>
    </div>
  `;
  bindQuiz(item.id, detail.quiz);
}

function detailSection(title, body) {
  return `
    <article class="detail-section">
      <h2>${title}</h2>
      <p>${body}</p>
    </article>
  `;
}

function listSection(title, list, type = "ul") {
  return `
    <article class="detail-section">
      <h2>${title}</h2>
      <${type}>${list.map((item) => `<li>${item}</li>`).join("")}</${type}>
    </article>
  `;
}

function quizSection(quiz, id) {
  return `
    <article class="detail-section">
      <h2>Quiz</h2>
      <p>${quiz.question}</p>
      <div class="quiz-options" id="quiz-${id}">
        ${quiz.options
          .map((option, index) => `<button class="quiz-option" type="button" data-index="${index}">${option}</button>`)
          .join("")}
      </div>
      <div class="quiz-feedback" id="quiz-feedback-${id}" hidden></div>
    </article>
  `;
}

function bindQuiz(id, quiz) {
  const options = document.querySelectorAll(`#quiz-${id} .quiz-option`);
  const feedback = document.querySelector(`#quiz-feedback-${id}`);
  const correctIndex = Number(quiz.correct);
  options.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.index);
      options.forEach((option) => {
        option.classList.remove("correct", "incorrect");
        option.disabled = true;
      });
      button.classList.add(selected === correctIndex ? "correct" : "incorrect");
      options[correctIndex].classList.add("correct");
      feedback.hidden = false;
      feedback.textContent =
        selected === correctIndex
          ? quiz.feedback
          : `Not quite. ${quiz.feedback}`;
    });
  });
}

function faqList() {
  return `
    <div class="faq-list">
      ${faqs
        .map(
          (item, index) => `
            <article class="faq-item ${index === 0 ? "open" : ""}">
              <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                <span>${item.q}</span>
                ${icons.chevron}
              </button>
              <div class="faq-answer">${item.a}</div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function bindFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function bindContactForm() {
  const form = document.querySelector("#contact-form");
  const success = document.querySelector("#success-message");
  const errors = {
    name: document.querySelector('[data-error-for="name"]'),
    email: document.querySelector('[data-error-for="email"]'),
    role: document.querySelector('[data-error-for="role"]'),
    message: document.querySelector('[data-error-for="message"]'),
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    Object.values(errors).forEach((error) => {
      error.textContent = "";
    });
    success.classList.remove("show");

    const data = new FormData(form);
    let valid = true;
    const email = String(data.get("email") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!String(data.get("name") || "").trim()) {
      errors.name.textContent = "Name is required.";
      valid = false;
    }
    if (!emailPattern.test(email)) {
      errors.email.textContent = "Enter a valid email.";
      valid = false;
    }
    if (!String(data.get("role") || "").trim()) {
      errors.role.textContent = "Select a learner role.";
      valid = false;
    }
    if (!String(data.get("message") || "").trim()) {
      errors.message.textContent = "Message is required.";
      valid = false;
    }

    if (valid) {
      form.reset();
      success.classList.add("show");
    }
  });
}

function setActive(route) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === route);
  });
}

async function loadSiteContent() {
  try {
    const response = await fetch("content/site.json", { cache: "no-store" });
    if (!response.ok) {
      return;
    }

    const data = await response.json();
    if (Array.isArray(data.cases) && data.cases.length) {
      cases = data.cases;
    }
    if (Array.isArray(data.caseDetails)) {
      detailedCases = Object.fromEntries(
        data.caseDetails
          .filter((item) => item.caseId)
          .map((item) => [item.caseId, item]),
      );
    } else if (data.detailedCases && typeof data.detailedCases === "object") {
      detailedCases = data.detailedCases;
    }
    if (Array.isArray(data.topics) && data.topics.length) {
      topics = data.topics;
    }
    if (Array.isArray(data.learningPath) && data.learningPath.length) {
      pathSteps = data.learningPath;
    }
    if (Array.isArray(data.resources) && data.resources.length) {
      resources = data.resources;
    }
    if (Array.isArray(data.faqs) && data.faqs.length) {
      faqs = data.faqs;
    }
  } catch (error) {
    console.info("Using built-in demo content because CMS content could not be loaded locally.");
  }
}

function route() {
  const hash = window.location.hash.replace(/^#/, "") || "home";
  const [page, id] = hash.split("/");
  mobileNav.classList.remove("open");
  mobileToggle.setAttribute("aria-expanded", "false");

  if (page === "cases") {
    renderCases();
    setActive("cases");
  } else if (page === "case") {
    renderCaseDetail(id);
    setActive("cases");
  } else if (page === "topics") {
    renderTopics();
    setActive("topics");
  } else if (page === "learning-path") {
    renderLearningPath();
    setActive("learning-path");
  } else if (page === "resources") {
    renderResources();
    setActive("resources");
  } else if (page === "contact") {
    renderContact();
    setActive("contact");
  } else {
    renderHome();
    setActive("home");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

mobileToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

headerSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  pendingSearch = siteSearch.value.trim().toLowerCase();
  if (window.location.hash.replace(/^#/, "") === "cases") {
    renderCases();
    setActive("cases");
  } else {
    window.location.hash = "cases";
  }
});

window.addEventListener("hashchange", route);
loadSiteContent().finally(route);
