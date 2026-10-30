import { VIBE } from "@/content/lq";
import { Accent, Cta, Section, SectionHead } from "@/components/ui";

// SECTION 4 — WHAT WE EVALUATE
// All four dimensions in plain view, as calm full-width rows.
export default function Vibe() {
  return (
    <Section id="vibe" labelledBy="vibe-title" className="border-t border-line">
      <SectionHead>What We Evaluate</SectionHead>

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

      <ol className="mt-20 border-b border-line lg:mt-28">
        {VIBE.map((d) => (
          <li
            key={d.letter}
            id={`vibe-${d.letter.toLowerCase()}`}
            data-reveal
            className="grid gap-y-5 border-t border-line py-10 lg:grid-cols-12 lg:gap-x-16 lg:py-16"
          >
            <h3 className="text-4xl font-light tracking-[-0.03em] sm:text-5xl lg:col-span-4">{d.name}</h3>
            <div className="lg:col-span-8">
              <p className="text-xl font-light leading-snug text-ink sm:text-2xl">{d.question}</p>
              <div className="mt-5 max-w-2xl space-y-4 text-lg leading-[1.8] text-muted">
                {d.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-16 lg:mt-20">
        <Cta variant="link" label="Start My LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
