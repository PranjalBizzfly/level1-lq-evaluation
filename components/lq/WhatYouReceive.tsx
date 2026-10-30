import { DELIVERABLES } from "@/content/lq";
import { Accent, Cta, Section, SectionHead } from "@/components/ui";

// SECTION 6 — WHAT YOU RECEIVE
// Heading left with a short note, then every deliverable in plain view, offset right.
export default function WhatYouReceive() {
  return (
    <Section id="what-you-receive" labelledBy="receive-title" className="border-t border-line">
      <SectionHead>What You Receive</SectionHead>

      <div className="mt-16 grid gap-y-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
        <h2
          id="receive-title"
          data-reveal
          className="headline text-[2.5rem] leading-[1.06] sm:text-5xl lg:col-span-7 lg:text-[4.25rem] xl:text-[5.25rem]"
        >
          Your Personal Brand <Accent>Snapshot</Accent>
        </h2>
        <p data-reveal className="max-w-md text-lg leading-[1.8] text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          Your LQ™ Evaluation will give you a clearer understanding of your current personal brand position.
        </p>
      </div>

      <div className="mt-20 lg:ml-[33.333%] lg:mt-28">
        <ul className="border-b border-line">
          {DELIVERABLES.map((d) => (
            <li key={d.title} data-reveal className="border-t border-line py-8 lg:py-10">
              <h3 className="text-2xl font-light tracking-[-0.02em] sm:text-3xl">{d.title}</h3>
              <p className="mt-3 max-w-xl text-lg leading-[1.8] text-muted">{d.body}</p>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-16 flex flex-col gap-8 lg:mt-20">
          <div>
            <Cta variant="link" label="Get My Complimentary LQ™ Snapshot →" />
          </div>
          <p className="max-w-xl text-sm italic leading-[1.8] text-muted">
            Your LQ™ Snapshot is an initial self-reported assessment. A comprehensive evaluation involves deeper
            research, analysis and strategic recommendations.
          </p>
        </div>
      </div>
    </Section>
  );
}
