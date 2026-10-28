import { STEPS } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead, delay } from "@/components/ui";

const STAGE_LABELS = ["Phase 01 • Assessment", "Phase 02 • Synthesis", "Phase 03 • Strategy"];

// SECTION 8 — HOW IT WORKS
export default function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title" tone="muted" className="border-t border-line">
      <SectionHead n={8}>How It Works</SectionHead>

      <div data-reveal className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-line">
        <h2 id="how-title" className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem]">
          Three <Accent>Simple</Accent> Steps
        </h2>
        <p className="text-sm font-mono uppercase tracking-widest text-muted">
          Linear Assessment Methodology
        </p>
      </div>

      {/* Architectural Roadmap Timeline */}
      <ol data-reveal className="mt-16 sm:mt-20 grid gap-8 md:grid-cols-3 lg:mt-24 lg:gap-10 xl:gap-12">
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            style={delay(i, 120)}
            data-spotlight
            className="surface card-interactive group relative rounded-3xl border border-line p-8 sm:p-12 lg:p-14 flex flex-col justify-between transition-all duration-300 hover:border-ink/50 shadow-sm"
          >
            {i === 2 && (
              <Corner className="absolute -top-px -right-px size-8 text-ink/70 sm:size-10" />
            )}

            <div>
              {/* Step indicator header */}
              <div className="flex items-center justify-between border-b border-line pb-8">
                <span className="btn-solid grid size-14 place-items-center rounded-2xl bg-ink font-mono text-lg font-bold text-paper shadow-md">
                  {s.n}
                </span>
                <span className="text-xs font-mono tracking-widest text-muted uppercase">
                  {STAGE_LABELS[i]}
                </span>
              </div>

              <h3 className="headline mt-8 text-2xl sm:text-3xl text-ink font-light leading-snug group-hover:translate-x-1.5 transition-transform duration-300">
                <span className="sr-only">{s.n} — </span>
                {s.title}
              </h3>
            </div>

            <div className="mt-10 pt-6 border-t border-line/60">
              <p className="text-base sm:text-lg leading-[1.85] text-muted group-hover:text-ink transition-colors duration-300">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-20 lg:mt-32 flex justify-center">
        <Cta label="Start My LQ™ Evaluation →" className="shadow-lg" />
      </div>
    </Section>
  );
}
