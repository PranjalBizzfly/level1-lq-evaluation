// LQ Assessment: questionnaire, scoring model and report rules.
// Source of truth: "Claimed LQ_Assessment Guide" (Level141, 27 October 2026). Wording is reproduced from it;
// do not edit without client approval. Points, weights and the calculation are internal and never shown.

export type CategoryId = "V" | "I" | "B" | "E";

export const CATEGORIES: { id: CategoryId; name: string; weight: number; description: string }[] = [
  {
    id: "V",
    name: "Visionary Leadership",
    weight: 30,
    description: "What you stand for, and whether others can repeat it.",
  },
  { id: "I", name: "Impact", weight: 25, description: "The proof behind you, and whether it holds up when checked." },
  {
    id: "B",
    name: "Business Growth",
    weight: 25,
    description: "Whether the people who decide your next stage can reach and see you.",
  },
  { id: "E", name: "Evolution", weight: 20, description: "Where you are heading, and the knowledge you are building." },
];

// ---------- Context questions (never scored) ----------

export const ROLE_OPTIONS = [
  { label: "Founder or entrepreneur", wording: "As a founder…" },
  { label: "CEO or managing director", wording: "As a chief executive…" },
  { label: "Investor", wording: "As an investor…" },
  { label: "Next-generation or family-business leader", wording: "As a next-generation leader…" },
  { label: "Senior professional (employed, not running an organisation)", wording: "As a senior professional…" },
  { label: "Independent expert, consultant or adviser", wording: "As an independent expert…" },
  { label: "Prefer not to say", wording: "As a leader…" },
] as const;

export const GOAL_OPTIONS = [
  { label: "Raise capital or win investor confidence", flags: [6, 7, 5] },
  { label: "Win larger clients, partners or deals", flags: [3, 5, 7] },
  { label: "Earn board, advisory or trusted-adviser roles", flags: [6, 7, 8] },
  { label: "Attract senior talent or build a leadership team", flags: [3, 4, 9] },
  { label: "Step into a bigger role or lead a larger organisation", flags: [9, 7, 6] },
  { label: "Become a recognised industry voice (speaking, media, publishing)", flags: [4, 5, 10] },
  { label: "I have not defined it yet", flags: [9] },
] as const;

// ---------- Scored questions ----------

export type AnswerOption = { label: string; points: number };

const STANDARD: AnswerOption[] = [
  { label: "Yes", points: 100 },
  { label: "Partly", points: 50 },
  { label: "No", points: 0 },
  { label: "Not sure", points: 0 },
];

export type ScoredQuestion = {
  n: number;
  category: CategoryId;
  subFactor: string;
  text: string;
  options: AnswerOption[];
  /** The LQ Standard test the question checks (shown with gaps and strengths). */
  test: string;
  /** "Level141 service for this gap". */
  service: string;
};

export const SCORED: ScoredQuestion[] = [
  {
    n: 3,
    category: "V",
    subFactor: "V1 Positioning Precision",
    text: "Does your audience see you exactly the way you see yourself?",
    options: STANDARD,
    test: "Your positioning is clearly stated and repeated by your audience in its own words (the Echo Test).",
    service: "Module 2 Visionary Leadership Architecture",
  },
  {
    n: 4,
    category: "V",
    subFactor: "V3 Territory Ownership",
    text: "Have you published or spoken on your key topics 6 times in the past year?",
    options: STANDARD,
    test: "Six public outputs in 12 months on two or three named subjects.",
    service: "Module 4 Thought Leadership Architecture",
  },
  {
    n: 5,
    category: "I",
    subFactor: "I2 External Validation",
    text: "Have 2 or more independent, unpaid sources featured you in the past year (a publication, an award, a ranking or a citation)?",
    options: STANDARD,
    test: "Public third-party validation in the last 12 months, from two independent, unpaid sources.",
    service: "Module 5 Impact & Trust Architecture",
  },
  {
    n: 6,
    category: "I",
    subFactor: "I1 Evidence Depth",
    text: "Are your results documented, like paying customers, client results or past achievements?",
    options: STANDARD,
    test: "Proof of results, such as paying customers, client results or past achievements, that can be shown to someone outside the organisation.",
    service: "Module 5 Impact & Trust Architecture",
  },
  {
    n: 7,
    category: "B",
    subFactor: "B2 Audience Fit",
    text: "Do your key stakeholders know who you are and what you stand for?",
    options: [
      { label: "They know my position", points: 100 },
      { label: "They know my name", points: 50 },
      { label: "They don’t know me yet", points: 0 },
      { label: "Not sure", points: 0 },
    ],
    test: "The people who decide the next stage understand the leader's position.",
    service: "Module 6 Opportunity Architecture",
  },
  {
    n: 8,
    category: "B",
    subFactor: "B1 Opportunity Flow",
    text: "In the past year, have at least three or more relevant opportunities (investment, partnership, board seat or keynote) come from people who didn’t already know you?",
    options: STANDARD,
    test: "Three relevant, unprompted opportunities in 12 months, from people who did not already know the leader.",
    service: "Module 6 Opportunity Architecture",
  },
  {
    n: 9,
    category: "E",
    subFactor: "E1 Ambition Definition",
    text: "Is your next business milestone written down with a date and a target?",
    options: STANDARD,
    test: "A dated, measurable ambition in writing.",
    service: "Module 7 Evolution & Governance",
  },
  {
    n: 10,
    category: "E",
    subFactor: "E3 Knowledge Compounding",
    text: "Have you published a book, framework, or method that others use or quote?",
    options: STANDARD,
    test: "Original knowledge that others cite, reuse or teach.",
    service: "Module 7 Evolution & Governance",
  },
];

export const CONTEXT_QUESTIONS = [
  { n: 1, text: "Which best describes your role?", options: ROLE_OPTIONS.map((o) => o.label) },
  {
    n: 2,
    text: "What’s the biggest moment you want your reputation to bring you in the next 2 years?",
    options: GOAL_OPTIONS.map((o) => o.label),
  },
];

export const INSTRUCTIONS = [
  "Answer each question for where you are today, not where you plan to be.",
  "Answer Yes only when the statement is true today and you could show it. Choose Partly when it is only partly true, No when it is not true, and Not sure when you have not checked.",
  "You can go back and change any answer before you submit. Your score is calculated only when you select “Calculate My LQ Score”.",
  "There are no trick questions. An honest answer gives you a more useful report than a generous one.",
];

// ---------- Bands and labels ----------

export const BANDS = [
  {
    level: 5,
    name: "Reference",
    min: 85,
    reading:
      "A default name in your category. Your answers describe a leader whose position, proof and reach are already established.",
    next: "Compound knowledge and steward the field. The useful question now is whether an independent review would confirm what you see.",
  },
  {
    level: 4,
    name: "Authoritative",
    min: 70,
    reading:
      "Recognised for a territory. Your answers describe a clear position with real pull. The remaining gaps are usually about the proof and structure behind it.",
    next: "Own the territory and convert reputation into opportunity: a documented point of view, independent confirmation and a clear route to the people who decide.",
  },
  {
    level: 3,
    name: "Established",
    min: 50,
    reading:
      "Clear and credible to your core audience. Your answers describe a leader who knows what they stand for and is credible to the people closest to them, with reach still to extend.",
    next: "Extend reach and add third-party validation. This is the step where authority starts to create opportunity.",
  },
  {
    level: 2,
    name: "Emerging",
    min: 30,
    reading:
      "Visible in parts. Your answers describe real substance that shows up unevenly. Story and proof are not yet joined up.",
    next: "Join up story and proof, so every appearance, article and introduction adds to the same picture.",
  },
  {
    level: 1,
    name: "Latent",
    min: 0,
    reading:
      "Substance the market cannot yet see. Your answers point to experience and results that are not yet written, published or findable.",
    next: "Build the foundation first: a clear position and a small body of proof, before any visibility effort.",
  },
];

export function categoryLabel(score: number) {
  if (score >= 80) return "Strong";
  if (score >= 60) return "Solid";
  if (score >= 40) return "Developing";
  if (score >= 20) return "Thin";
  return "Largely absent";
}

export function presenceReading(gap: number) {
  if (gap >= 25) return { reading: "Wide", text: "The foundation is well ahead of what is visible." };
  if (gap >= 10) return { reading: "Noticeable", text: "Part of what you hold has not yet become visible." };
  if (gap > -10) return { reading: "Aligned", text: "What you hold and what the market can see are broadly in step." };
  return { reading: "Footprint ahead", text: "Your visible footprint is ahead of the foundation behind it." };
}

// ---------- Calculation ----------

export type Answers = {
  roles: string[];
  goals: string[];
  /** Scored answers by question number (3–10): the chosen option label. */
  scored: Partial<Record<number, string>>;
};

const pointsFor = (q: ScoredQuestion, label?: string) => q.options.find((o) => o.label === label)?.points ?? 0;
const roundHalfUp1 = (x: number) => Math.floor(x * 10 + 0.5 + 1e-9) / 10;
const weightOf = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)!.weight;

export function isComplete(a: Answers) {
  return a.roles.length > 0 && a.goals.length > 0 && SCORED.every((q) => a.scored[q.n]);
}

export function calculate(a: Answers) {
  const pts: Record<number, number> = {};
  for (const q of SCORED) pts[q.n] = pointsFor(q, a.scored[q.n]);

  const categories = CATEGORIES.map((c) => {
    const qs = SCORED.filter((q) => q.category === c.id);
    const score = qs.reduce((s, q) => s + pts[q.n], 0) / qs.length;
    return { ...c, score, label: categoryLabel(score), points: (score * c.weight) / 100 };
  });

  const lq = roundHalfUp1(categories.reduce((s, c) => s + c.points, 0));
  const band = BANDS.find((b) => lq >= b.min)!;

  // Strongest: highest score (ties to the heavier category); weakest: lowest score (ties to the lighter).
  const strongest = [...categories].sort((x, y) => y.score - x.score || y.weight - x.weight)[0];
  const weakest = [...categories].sort((x, y) => x.score - y.score || x.weight - y.weight)[0];

  const goalFlags = new Set(
    GOAL_OPTIONS.filter((g) => a.goals.includes(g.label)).flatMap((g) => g.flags as readonly number[]),
  );

  // Gaps: answers at 50 points or below, lowest first; ties to goal questions, then the heavier category; 2 to 4.
  const gaps = SCORED.filter((q) => pts[q.n] <= 50)
    .sort(
      (x, y) =>
        pts[x.n] - pts[y.n] ||
        Number(goalFlags.has(y.n)) - Number(goalFlags.has(x.n)) ||
        weightOf(y.category) - weightOf(x.category) ||
        x.n - y.n,
    )
    .slice(0, 4)
    .map((q) => ({ ...q, answer: a.scored[q.n]!, mattersForGoal: goalFlags.has(q.n) }));

  // Strengths: full-point answers, up to three (heavier category first).
  const strengths = SCORED.filter((q) => pts[q.n] === 100)
    .sort((x, y) => weightOf(y.category) - weightOf(x.category) || x.n - y.n)
    .slice(0, 3);

  // Presence Gap (indicator only): Foundation (Q6, Q9) minus Footprint (Q3, Q4, Q5, Q7, Q8, Q10).
  const foundation = (pts[6] + pts[9]) / 2;
  const footprint = (pts[3] + pts[4] + pts[5] + pts[7] + pts[8] + pts[10]) / 6;
  const presenceGap = foundation - footprint;

  const role = ROLE_OPTIONS.find((r) => a.roles.includes(r.label)) ?? ROLE_OPTIONS[ROLE_OPTIONS.length - 1];

  return {
    lq,
    band,
    categories,
    strongest,
    weakest,
    gaps,
    strengths,
    presence: { foundation, footprint, gap: presenceGap, ...presenceReading(presenceGap) },
    roleWording: role.wording,
    roles: a.roles,
    goals: a.goals,
  };
}

export type LqResult = ReturnType<typeof calculate>;
