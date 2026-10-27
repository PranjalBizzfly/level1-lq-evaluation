import { STEPS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 8 — HOW IT WORKS
export default function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title">
      <SectionHead n={8}>How It Works</SectionHead>

      <h2 id="how-title" data-reveal className="headline mt-20 text-[2.25rem] sm:text-5xl lg:mt-32 lg:text-[3.75rem]">
        Three <Accent>Simple</Accent> Steps
      </h2>

      <ol className="mt-24 grid gap-px bg-line-strong md:grid-cols-3 lg:mt-36">
        {STEPS.map((s, i) => (
          <li key={s.n} data-reveal style={delay(i, 120)} className="flex flex-col bg-paper py-10 md:px-8 md:first:pl-0 md:last:pr-0">
            <span aria-hidden="true" className="headline text-outline text-[6rem] leading-[0.8] sm:text-[7rem]">
              {s.n}
            </span>
            <div className="mt-10 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-ink" />
              <h3 className="eyebrow">
                <span className="sr-only">{s.n} — </span>
                {s.title}
              </h3>
            </div>
            <p className="mt-5 text-lg leading-[1.85]">{s.body}</p>
          </li>
        ))}
      </ol>
      <div data-reveal className="mt-16 lg:mt-24">
        <Cta label="Start My LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
