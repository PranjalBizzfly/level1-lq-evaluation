// Approved copy for the LQ™ Evaluation landing page.
// Source of truth: "LQ Landing Page" client document. Do not edit wording here without client approval.

export const CTA_TARGET = "#register";

export const VIBE = [
  {
    letter: "V",
    name: "Vision",
    question: "Are You Recognized for Your Leadership?",
    body: [
      "Does your personal brand communicate your vision, expertise, leadership philosophy and the direction you want to take?",
      "We examine how clearly your professional identity reflects who you are and what you stand for.",
    ],
  },
  {
    letter: "I",
    name: "Impact",
    question: "Does Your Reputation Reflect Your Contribution?",
    body: [
      "Your influence extends beyond your professional achievements.",
      "We examine how effectively your personal brand communicates the professional, personal, social and spiritual impact that matters to you.",
    ],
  },
  {
    letter: "B",
    name: "Business Growth",
    question: "Is Your Reputation Creating Opportunities?",
    body: [
      "A strong personal brand can open doors to valuable relationships, partnerships, investments, speaking opportunities and business growth.",
      "We examine how well your professional presence supports your wider business and career ambitions.",
    ],
  },
  {
    letter: "E",
    name: "Evolution",
    question: "Is Your Personal Brand Growing With You?",
    body: [
      "The person you are today may not be the person you were five years ago.",
      "But has your public reputation evolved with your experience, achievements and aspirations?",
      "We examine how well your personal brand reflects your current position and future direction.",
    ],
  },
];

export const DELIVERABLES = [
  { title: "Your Overall LQ™", body: "An indicative assessment of your current personal brand strength." },
  {
    title: "Your VIBE™ Profile",
    body: "An overview of how your personal brand performs across Vision, Impact, Business Growth and Evolution.",
  },
  { title: "Your Strengths", body: "Areas where your personal brand is already supporting your professional reputation." },
  {
    title: "Your Visibility & Positioning Gaps",
    body: "Areas where your public presence may not fully reflect your achievements and capabilities.",
  },
  { title: "Your Opportunities for Improvement", body: "Priority areas to consider as you strengthen your personal brand." },
  {
    title: "Your Next Step",
    body: "Understand what you could focus on to strengthen your professional reputation.",
    emphasis: true,
  },
];

export const AUDIENCES = [
  {
    title: "Business Owners & Entrepreneurs",
    body: "Who want their personal reputation to reflect the businesses and value they have created.",
  },
  { title: "Founders & CEOs", body: "Who want to build recognition and influence beyond their organizations." },
  {
    title: "Investors & Business Leaders",
    body: "Who want to strengthen their professional authority and expand their network of opportunities.",
  },
  {
    title: "Senior Executives",
    body: "Who want to establish a distinctive professional identity beyond their current position.",
  },
  {
    title: "Industry Experts & Professionals",
    body: "Who want their knowledge, achievements and perspectives to receive greater recognition.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Complete Your Evaluation",
    body: "Answer a series of questions about your leadership, professional presence, reputation and ambitions.",
  },
  {
    n: "02",
    title: "Discover Your LQ™",
    body: "Receive an initial assessment of your personal brand across the four VIBE™ dimensions.",
  },
  {
    n: "03",
    title: "Understand Your Next Level",
    body: "Identify strengths, potential gaps and areas where a more structured personal branding strategy could make a difference.",
  },
];

export const REAL_QUESTIONS = [
  "Are you known beyond the people who already know you?",
  "When someone searches for your name, do they discover the leader you truly are?",
  "Are you recognized for your expertise or simply your designation?",
  "Do the right people think of you when opportunities arise?",
  "Is your personal reputation creating opportunities even when you're not in the room?",
];

export const WHY_QUESTIONS = [
  "When someone recommends your name, what will others discover?",
  "When an opportunity arises, will you be considered?",
  "When someone compares you with another industry leader, what shapes their perception?",
  "When you enter a new market or business, does your reputation travel with you?",
];

export const OFFERS = [
  {
    name: "LQ™ Snapshot",
    headline: "Discover Where You Stand",
    body: [
      "A complimentary evaluation that provides an initial understanding of your personal brand.",
      "Includes your indicative LQ™ score, VIBE™ profile, key strengths and opportunities for improvement.",
    ],
    tier: "Complimentary",
    tone: "outline",
  },
  {
    name: "LQ™ Executive Assessment",
    headline: "Understand Your Potential",
    body: [
      "An in-depth personal brand assessment supported by research, strategic analysis and a personalized development roadmap.",
      "Includes a detailed LQ™ report, digital presence review, positioning recommendations, a 90-day roadmap and selected starter deliverables.",
    ],
    tier: "Private, Paid Engagement",
    tone: "muted",
  },
  {
    name: "Personal Brand Architecture™",
    headline: "Architect Your Next Level",
    body: [
      "A comprehensive personal branding engagement designed to build visibility, credibility, authority and meaningful professional opportunities.",
      "From strategic positioning to coordinated brand development and governance, PBA helps turn your professional reputation into a long-term asset.",
    ],
    tier: "Premium Strategic Engagement",
    tone: "inverse",
  },
] as const;

