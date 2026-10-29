"use client";

import { useState } from "react";
import { VIBE } from "@/content/lq";
import { Accent, Cta, Section, SectionHead } from "@/components/ui";

// SECTION 4 — WHAT WE EVALUATE
// Numbered accordion: one dimension open at a time, so each idea gets the reader's full attention.
export default function Vibe() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="vibe" labelledBy="vibe-title" className="border-t border-line">
      <SectionHead n={4}>What We Evaluate</SectionHead>

      <div className="mt-16 grid gap-y-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
        <h2
          id="vibe-title"
          data-reveal
          className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-7 lg:text-[4.25rem] xl:text-[5.25rem]"
        >
          <span className="block">Your Personal Brand</span> <Accent>Four Essential Dimensions</Accent>
        </h2>
        <p data-reveal className="max-w-md text-lg leading-[1.8] text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          The LQ™ Evaluation is built around <strong className="font-medium text-ink">VIBE™</strong>, Level141&apos;s
          approach to Personal Brand Architecture.
        </p>
      </div>

      <ol className="mt-20 border-t border-line-strong lg:ml-[33.333%] lg:mt-28">
        {VIBE.map((d, i) => {
          const isOpen = open === i;
          const id = `vibe-panel-${d.letter.toLowerCase()}`;
          return (
            <li
              key={d.letter}
              id={`vibe-${d.letter.toLowerCase()}`}
              data-reveal
              className="border-b border-line-strong"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-baseline gap-5 py-8 text-left sm:gap-8 sm:py-10"
                >
                  <span className="text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-3xl font-light tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">
                    <span className="serif-accent">{d.letter}</span>
                    <span className="text-muted"> — </span>
                    {d.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative size-5 shrink-0 self-center transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
                  </span>
                </button>
              </h3>
              {/* Grid-rows trick animates height smoothly without measuring. */}
              <div
                id={id}
                role="region"
                className={`grid transition-[grid-template-rows] duration-700 ease-[var(--ease-architect)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 pb-12 pl-9 sm:pl-14 lg:grid-cols-2 lg:gap-12">
                    <p className="text-xl font-light leading-snug text-ink sm:text-2xl">{d.question}</p>
                    <div className="space-y-4 text-lg leading-[1.8] text-muted">
                      {d.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div data-reveal className="mt-16 lg:ml-[33.333%] lg:mt-20">
        <Cta label="Start My LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
