"use client";

import { useState } from "react";
import { VIBE } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead } from "@/components/ui";

// SECTION 4 — WHAT WE EVALUATE
export default function Vibe() {
  const [active, setActive] = useState<number | null>(null);

  const scrollToDimension = (index: number) => {
    setActive(index);
    const el = document.getElementById(`vibe-${VIBE[index].letter.toLowerCase()}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Section id="vibe" labelledBy="vibe-title" className="border-t border-line">
      <SectionHead n={4}>What We Evaluate</SectionHead>

      <div data-reveal className="mt-8 grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <h2 id="vibe-title" className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-8 lg:text-[4rem]">
          <span className="block">Your Personal Brand</span> <Accent>Four Essential Dimensions</Accent>
        </h2>
        <div className="lg:col-span-4 lg:pt-3">
          <p className="text-lg sm:text-xl lg:text-2xl leading-[1.8] font-light text-muted">
            The LQ™ Evaluation is built around <strong className="font-medium text-ink">VIBE™</strong>, Level141&apos;s approach to
            Personal Brand Architecture.
          </p>
        </div>
      </div>

      {/* Quick Dimension Focus Bar */}
      <div data-reveal className="mt-16 sm:mt-24">
        <div className="flex items-center justify-between pb-4 border-b border-line">
          <p className="eyebrow text-ink/80">VIBE™ Architecture Pillars</p>
          <span className="text-xs font-mono text-muted tracking-widest uppercase hidden sm:inline-block">
            All 4 Steps Evaluated
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {VIBE.map((d, i) => (
            <button
              key={d.letter}
              type="button"
              onClick={() => scrollToDimension(i)}
              className={`flex items-center gap-4 rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300 ${
                active === i
                  ? "border-ink bg-ink text-paper shadow-xl scale-[1.02]"
                  : "border-line bg-paper/60 text-ink hover:border-line-strong hover:bg-paper hover:shadow-sm"
              }`}
            >
              <span className={`serif-accent text-3xl sm:text-4xl font-normal ${active === i ? "text-paper" : "text-ink"}`}>
                {d.letter}
              </span>
              <div className="truncate">
                <span className="block text-xs uppercase tracking-wider font-semibold truncate">
                  {d.name}
                </span>
                <span className={`text-[0.72rem] font-mono ${active === i ? "text-paper/70" : "text-muted"}`}>
                  Step 0{i + 1}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fully Visible 4-Step Executive Matrix — Nothing is hidden */}
      <div className="mt-16 sm:mt-20 grid gap-8 sm:grid-cols-2 lg:gap-10 xl:gap-12">
        {VIBE.map((d, i) => {
          const isFocused = active === i;
          return (
            <div
              key={d.letter}
              id={`vibe-${d.letter.toLowerCase()}`}
              data-spotlight
              onMouseEnter={() => setActive(i)}
              className={`surface card-interactive group relative rounded-3xl border p-8 sm:p-12 lg:p-14 flex flex-col justify-between transition-all duration-500 shadow-sm ${
                isFocused
                  ? "border-ink/80 shadow-2xl ring-2 ring-ink/20"
                  : "border-line hover:border-ink/50"
              }`}
            >
              <Corner className="absolute -top-px -right-px size-8 text-ink/60 sm:size-10" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-line pb-6">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-ink font-serif italic text-2xl text-paper shadow-sm">
                      {d.letter}
                    </span>
                    <div>
                      <h3 className="eyebrow text-ink">
                        0{i + 1} — {d.name}
                      </h3>
                      <p className="text-xs text-muted font-mono tracking-wider mt-0.5">Evaluation Dimension</p>
                    </div>
                  </div>
                  <span className="luxury-pill">Core Pillar</span>
                </div>

                {/* Question */}
                <p className="headline mt-8 text-2xl sm:text-3xl text-ink font-light leading-snug group-hover:translate-x-1 transition-transform duration-300">
                  {d.question}
                </p>
              </div>

              {/* Body paragraphs */}
              <div className="mt-10 pt-6 border-t border-line/60 space-y-4 text-base sm:text-lg leading-[1.85]">
                {d.body.map((p) => (
                  <p key={p} className="text-muted last:text-ink">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div data-reveal className="mt-20 lg:mt-32 flex justify-center">
        <Cta label="Start My LQ™ Evaluation →" className="shadow-lg" />
      </div>
    </Section>
  );
}
