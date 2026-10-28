import { DELIVERABLES } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 6 — WHAT YOU RECEIVE
export default function WhatYouReceive() {
  return (
    <Section id="what-you-receive" labelledBy="receive-title" className="border-t border-line">
      <SectionHead n={6}>What You Receive</SectionHead>

      <div data-reveal className="mt-8 grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <h2 id="receive-title" className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-8 lg:text-[4rem]">
          Your Personal Brand <Accent>Snapshot</Accent>
        </h2>
        <div className="lg:col-span-4 lg:pt-3">
          <p className="text-lg sm:text-xl lg:text-2xl leading-[1.8] font-light text-muted">
            Your LQ™ Evaluation will give you a clearer understanding of your current personal brand position.
          </p>
        </div>
      </div>

      {/* Structured Executive Deliverable Suite (Bento Layout) */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <div data-reveal className="flex items-center justify-between pb-6 border-b border-line">
          <p className="eyebrow text-ink/80">Evaluation Deliverables</p>
          <span className="text-xs font-mono text-muted tracking-widest uppercase hidden sm:inline-block">
            Comprehensive Suite
          </span>
        </div>

        <ol className="mt-10 sm:mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          {DELIVERABLES.map((d, i) => {
            const isRowTwoFirst = i === 3;
            return (
              <li
                key={d.title}
                data-reveal
                style={delay(i, 60)}
                data-spotlight
                className={`surface card-interactive group relative rounded-3xl border p-8 sm:p-10 lg:p-12 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                  d.emphasis
                    ? "border-ink/60 bg-gradient-to-b from-paper to-surface shadow-xl sm:col-span-2 lg:col-span-6"
                    : isRowTwoFirst
                    ? "border-line hover:border-ink/40 sm:col-span-1 lg:col-span-2 lg:col-start-2"
                    : i === 4
                    ? "border-line hover:border-ink/40 sm:col-span-2 sm:max-w-md sm:w-full sm:mx-auto lg:max-w-none lg:col-span-2"
                    : "border-line hover:border-ink/40 sm:col-span-1 lg:col-span-2"
                }`}
              >
                {d.emphasis && (
                  <Corner className="absolute -top-px -right-px size-8 text-ink/80 sm:size-10" />
                )}

                <div>
                  <h3
                    className={`headline text-2xl sm:text-3xl text-ink font-light leading-snug ${
                      d.emphasis ? "serif-accent text-3xl sm:text-4xl lg:text-5xl text-ink" : ""
                    }`}
                  >
                    {d.title}
                  </h3>
                </div>

                <div className="mt-8 pt-6 border-t border-line/60">
                  <p className={`text-base sm:text-lg leading-[1.85] ${d.emphasis ? "text-ink font-medium" : "text-muted"}`}>
                    {d.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Advisory Note & Action */}
      <div data-reveal className="surface mt-24 sm:mt-36 lg:mt-44 rounded-[2.5rem] border border-line p-10 sm:p-14 lg:p-16 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-12">
          <div className="lg:col-span-7">
            <Cta label="Get My Complimentary LQ™ Snapshot →" className="w-full sm:w-auto shadow-lg" />
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-10 lg:col-span-5">
            <p className="text-xs sm:text-sm italic leading-[1.85] text-muted">
              Your LQ™ Snapshot is an initial self-reported assessment. A comprehensive evaluation involves deeper research,
              analysis and strategic recommendations.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
