"use client";

import { useState } from "react";
import { Accent, Corner, Cta, Section, SectionHead } from "@/components/ui";

const STRATEGIC_PILLARS = [
  {
    id: "experience",
    label: "Experience",
    focus: "Track Record & Depth",
    detail: "Evaluating how decades of operational mastery and expertise translate into external market authority.",
    metric: "Foundation",
    score: 92,
  },
  {
    id: "achievements",
    label: "Achievements",
    focus: "Proven Value Creation",
    detail: "Ensuring your verified business and institutional milestones carry weight outside your immediate circle.",
    metric: "Proof Points",
    score: 96,
  },
  {
    id: "leadership",
    label: "Leadership",
    focus: "Strategic Philosophy & Voice",
    detail: "Measuring how clearly your vision, management philosophy, and industry perspective are articulated.",
    metric: "Authority",
    score: 94,
  },
  {
    id: "influence",
    label: "Influence",
    focus: "Network & Strategic Gravitas",
    detail: "Assessing your reputation's power to open high-value doors, attract capital, and shape decisions.",
    metric: "Reach",
    score: 95,
  },
];

const FILTER_MODES = {
  measured: {
    title: "What LQ™ Evaluates",
    subtitle: "Strategic Pillars of Executive Authority",
    badge: "Core Assessment Focus",
    items: [
      {
        term: "Leadership Journey",
        desc: "How your external reputation has evolved as your responsibilities and ambitions grew.",
        status: "Active Metric",
      },
      {
        term: "Executive Gravitas",
        desc: "How you are perceived by peers, boards, investors, and prospective partners.",
        status: "Active Metric",
      },
      {
        term: "Opportunity Magnetism",
        desc: "Whether your professional presence organically generates high-value opportunities.",
        status: "Active Metric",
      },
    ],
  },
  filtered: {
    title: "What LQ™ Looks Beyond",
    subtitle: "Superficial Metrics Filtered Out",
    badge: "Excluded as Non-Strategic",
    items: [
      {
        term: "Job Title Alone",
        desc: "Titles convey employment, not intrinsic respect, influence, or leadership distinction.",
        status: "Filtered Out",
      },
      {
        term: "Follower Numbers",
        desc: "Audience volume on social platforms rarely equates to genuine executive credibility.",
        status: "Filtered Out",
      },
      {
        term: "Social Media Activity",
        desc: "Frequent posting creates noise, not the considered perception required by leaders.",
        status: "Filtered Out",
      },
    ],
  },
};

// SECTION 3 — INTRODUCING LQ™
export default function IntroducingLq() {
  const [activePillar, setActivePillar] = useState(0);
  const [filterMode, setFilterMode] = useState<"measured" | "filtered">("measured");
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const currentPillar = STRATEGIC_PILLARS[activePillar];
  const currentScope = FILTER_MODES[filterMode];

  return (
    <Section id="introducing-lq" labelledBy="intro-title" className="border-t border-line">
      <SectionHead n={3}>Introducing LQ™</SectionHead>

      {/* Editorial Header */}
      <div data-reveal className="mx-auto mt-8 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/60 px-4 py-1 text-xs uppercase tracking-widest text-muted">
          <span>The Evaluation Metric</span>
        </div>
        <h2 id="intro-title" className="headline mt-6 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem]">
          What Is Your <Accent>Level Quotient™</Accent>?
        </h2>
        <p className="mt-6 text-xl tracking-tight text-ink/80 sm:text-2xl font-light">
          A Clearer Picture of Your Personal Brand
        </p>
        <div className="mx-auto mt-8 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-line-strong" />
          <span className="size-1.5 rounded-full bg-ink" />
          <span className="h-px w-10 bg-line-strong" />
        </div>
      </div>

      {/* Structured Dual Interactive Narrative Cards */}
      <div
        data-reveal
        className="mx-auto mt-20 grid max-w-6xl gap-8 sm:grid-cols-2 lg:mt-24 lg:gap-10 xl:gap-12 items-stretch"
      >
        {/* CARD 01: STRATEGIC OVERVIEW (INTERACTIVE) */}
        <div
          data-spotlight
          onClick={() => setActiveCard(0)}
          className={`surface halo-glow relative flex flex-col justify-between rounded-3xl border p-8 sm:p-10 lg:p-12 transition-all duration-500 cursor-pointer shadow-sm ${
            activeCard === 0
              ? "border-ink/50 shadow-2xl ring-1 ring-ink/20"
              : "border-line hover:border-line-strong shadow-lg"
          }`}
        >
          {/* Subtle architectural corner marks */}
          <Corner className="pointer-events-none absolute -right-px -top-px size-6 text-ink/40 sm:size-8" />
          <Corner flip className="pointer-events-none absolute -bottom-px -left-px size-6 text-ink/40 sm:size-8" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-6">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-500 pulse-dot" aria-hidden="true" />
                <span className="eyebrow text-xs tracking-wider text-muted">Strategic Overview</span>
              </div>
              <span className="font-mono text-xs font-semibold text-ink/80">01</span>
            </div>

            {/* Approved Client Copy */}
            <div className="mt-8 space-y-4 text-base sm:text-lg leading-[1.8] text-ink">
              <p className="font-normal text-ink">
                Your Level Quotient™ (LQ™) is an evaluation of where your personal brand stands today.
              </p>
              <p className="text-muted leading-relaxed">
                It helps you understand how effectively your experience, achievements, leadership and influence are reflected
                in your professional reputation.
              </p>
            </div>

            {/* Interactive Pillar Diagnostic Simulator */}
            <div className="mt-8 rounded-2xl border border-line/80 bg-paper/50 p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-muted uppercase tracking-wider mb-4">
                <span className="text-[0.68rem]">Select Pillar to Inspect</span>
                <span className="text-[0.65rem] text-emerald-500 flex items-center gap-1 font-sans">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Interactive
                </span>
              </div>

              {/* 4 Interactive Lever Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                {STRATEGIC_PILLARS.map((p, idx) => {
                  const isSelected = activePillar === idx;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePillar(idx);
                        setActiveCard(0);
                      }}
                      className={`group relative flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs transition-all duration-300 ${
                        isSelected
                          ? "bg-ink text-paper font-medium shadow-md shadow-ink/10"
                          : "border border-line/60 bg-paper/60 text-ink hover:border-ink/40 hover:bg-ink/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className={`font-mono text-[0.68rem] ${
                            isSelected ? "text-paper/80" : "text-muted group-hover:text-ink"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="truncate">{p.label}</span>
                      </div>
                      <span
                        className={`size-1.5 rounded-full transition-transform ${
                          isSelected ? "bg-paper scale-125" : "bg-line-strong group-hover:bg-ink"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Pillar Diagnostic Feedback */}
              <div className="mt-5 pt-4 border-t border-line/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-ink text-sm tracking-tight">
                    {currentPillar.focus}
                  </span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                    {currentPillar.metric}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-[0.85rem] text-muted leading-relaxed">
                  {currentPillar.detail}
                </p>

                {/* Animated Alignment Meter */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-[0.68rem] font-mono text-muted">
                    <span>Diagnostic Alignment</span>
                    <span className="text-ink font-semibold">{currentPillar.score}% Index</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-line/60">
                    <div
                      className="h-full rounded-full bg-ink transition-all duration-500 ease-out"
                      style={{ width: `${currentPillar.score}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-line/40 flex items-center justify-between text-[0.72rem] text-muted">
            <span>Evaluates 4 Core Strategic Levers</span>
            <span className="font-mono uppercase text-ink/75">Pillar 0{activePillar + 1} Active</span>
          </div>
        </div>

        {/* CARD 02: DEPTH & SCOPE (INTERACTIVE) */}
        <div
          data-spotlight
          onClick={() => setActiveCard(1)}
          className={`surface halo-glow relative flex flex-col justify-between rounded-3xl border p-8 sm:p-10 lg:p-12 transition-all duration-500 cursor-pointer shadow-sm ${
            activeCard === 1
              ? "border-ink/50 shadow-2xl ring-1 ring-ink/20"
              : "border-line hover:border-line-strong shadow-lg"
          }`}
        >
          {/* Subtle architectural corner marks */}
          <Corner className="pointer-events-none absolute -right-px -top-px size-6 text-ink/40 sm:size-8" />
          <Corner flip className="pointer-events-none absolute -bottom-px -left-px size-6 text-ink/40 sm:size-8" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-6">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-500 pulse-dot" aria-hidden="true" />
                <span className="eyebrow text-xs tracking-wider text-muted">Depth &amp; Scope</span>
              </div>
              <span className="font-mono text-xs font-semibold text-ink/80">02</span>
            </div>

            {/* Approved Client Copy */}
            <div className="mt-8 space-y-4 text-base sm:text-lg leading-[1.8] text-ink">
              <p className="font-normal text-ink">
                LQ™ looks beyond your job title, number of followers or social media activity.
              </p>
              <p className="text-muted leading-relaxed">
                It evaluates the strength of your personal brand across the areas that matter to your leadership journey.
              </p>
            </div>

            {/* Interactive Scope Filter Toggle */}
            <div className="mt-8 rounded-2xl border border-line/80 bg-paper/50 p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-muted uppercase tracking-wider mb-4">
                <span className="text-[0.68rem]">Evaluation Filter Matrix</span>
                <span className="text-[0.65rem] text-muted">Click to Toggle</span>
              </div>

              {/* 2-Way Interactive Switcher */}
              <div className="grid grid-cols-2 rounded-xl border border-line/80 bg-paper/80 p-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterMode("measured");
                    setActiveCard(1);
                  }}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium transition-all duration-300 ${
                    filterMode === "measured"
                      ? "bg-ink text-paper shadow-sm"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>What LQ™ Evaluates</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterMode("filtered");
                    setActiveCard(1);
                  }}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium transition-all duration-300 ${
                    filterMode === "filtered"
                      ? "bg-ink text-paper shadow-sm"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="size-1.5 rounded-full bg-line-strong" />
                  <span>What It Filters Out</span>
                </button>
              </div>

              {/* Filter Content Showcase */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-1 border-b border-line/40">
                  <span className="font-medium text-ink text-xs sm:text-[0.825rem]">
                    {currentScope.subtitle}
                  </span>
                  <span
                    className={`font-mono text-[0.65rem] uppercase tracking-wider ${
                      filterMode === "measured" ? "text-emerald-500 font-semibold" : "text-muted"
                    }`}
                  >
                    {currentScope.badge}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {currentScope.items.map((item) => (
                    <li
                      key={item.term}
                      className="group flex items-start gap-3 rounded-xl border border-line/50 bg-paper/40 p-3 text-xs transition-colors hover:border-ink/30 hover:bg-ink/[0.02]"
                    >
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md font-mono text-[0.65rem] ${
                          filterMode === "measured"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold"
                            : "bg-line/60 text-muted line-through"
                        }`}
                      >
                        {filterMode === "measured" ? "✓" : "✕"}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-medium ${
                            filterMode === "measured"
                              ? "text-ink"
                              : "text-ink/80 line-through decoration-line-strong"
                          }`}
                        >
                          {item.term}
                        </p>
                        <p className="mt-0.5 text-[0.72rem] text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-line/40 flex items-center justify-between text-[0.72rem] text-muted">
            <span>Filters Noise vs Strategic Signal</span>
            <span className="font-mono uppercase text-ink/75">
              {filterMode === "measured" ? "Strategic Mode" : "Exclusion Mode"}
            </span>
          </div>
        </div>
      </div>

      {/* Quote framed by the Level141 architectural corner marks */}
      <div data-reveal data-spotlight className="relative mx-auto mt-28 max-w-5xl lg:mt-36">
        <div className="surface relative rounded-[2.5rem] border border-line-strong/80 px-10 py-16 text-center sm:px-20 sm:py-24 shadow-2xl backdrop-blur-xl">
          <Corner flip className="absolute -bottom-px -left-px size-8 text-ink/80 sm:size-10" />
          <Corner className="absolute -right-px -top-px size-8 text-ink/80 sm:size-10" />

          <span
            aria-hidden="true"
            className="font-serif italic text-6xl sm:text-7xl leading-none text-muted/30 select-none block -mb-4"
          >
            &ldquo;
          </span>
          <blockquote className="relative serif-accent text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.2] text-ink">
            Because success and recognition are not always the same thing
          </blockquote>
        </div>
      </div>

      <div data-reveal className="mt-20 flex justify-center lg:mt-28">
        <Cta label="Discover Your LQ™ →" className="shadow-lg" />
      </div>
    </Section>
  );
}
