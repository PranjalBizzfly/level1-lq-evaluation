import { DELIVERABLES } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 6 — WHAT YOU RECEIVE
export default function WhatYouReceive() {
  return (
    <Section id="what-you-receive" labelledBy="receive-title">
      <SectionHead n={6}>What You Receive</SectionHead>

      <div data-reveal className="mt-20 grid gap-y-8 lg:mt-32 lg:grid-cols-12 lg:items-start lg:gap-x-10">
        <h2 id="receive-title" className="headline text-[2.25rem] sm:text-5xl lg:col-span-8 lg:text-[3.75rem]">
          Your Personal Brand <Accent>Snapshot</Accent>
        </h2>
        <p className="text-lg leading-[1.85] lg:col-span-4 lg:col-start-9">
          Your LQ™ Evaluation will give you a clearer understanding of your current personal brand position.
        </p>
      </div>

      {/* Ledger: one ruled row per deliverable; the final row closes the ledger with a heavier rule. */}
      <ol className="mt-24 border-t border-line-strong lg:mt-36">
        {DELIVERABLES.map((d, i) => (
          <li
            key={d.title}
            data-reveal
            style={delay(i, 60)}
            className={`grid gap-3 border-b border-line-strong py-10 sm:grid-cols-[5rem_1fr] sm:gap-x-6 lg:grid-cols-12 lg:items-baseline lg:gap-x-10 lg:py-14 ${
              d.emphasis ? "border-b-ink" : ""
            }`}
          >
            <span aria-hidden="true" className="eyebrow tabular-nums lg:col-span-2">
              {String(i + 1).padStart(2, "0")} / 06
            </span>
            <h3 className={`headline text-3xl sm:text-4xl lg:col-span-6 ${d.emphasis ? "serif-accent" : ""}`}>{d.title}</h3>
            <p className={`text-lg leading-[1.85] sm:col-start-2 lg:col-span-4 lg:col-start-9 ${d.emphasis ? "font-medium" : ""}`}>
              {d.body}
            </p>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-16 lg:mt-24 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-10">
        <Cta label="Get My Complimentary LQ™ Snapshot →" className="justify-self-start lg:col-span-8" />
        <p className="border-l border-line-strong pl-5 text-sm italic leading-[1.85] lg:col-span-4 lg:col-start-9">
          Your LQ™ Snapshot is an initial self-reported assessment. A comprehensive evaluation involves deeper research,
          analysis and strategic recommendations.
        </p>
      </div>
    </Section>
  );
}
