import { STEPS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";
import Photo from "@/components/lq/Photo";
import study from "@/public/images/study.png";

// SECTION 8 — HOW IT WORKS
export default function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title" className="border-t border-line">
      <SectionHead n={8}>How It Works</SectionHead>

      <div className="mt-10 grid items-end gap-12 lg:grid-cols-12 lg:gap-x-16">
        <h2
          id="how-title"
          data-reveal
          className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-6 lg:text-[4.25rem] xl:text-[5.25rem]"
        >
          Three <Accent>Simple</Accent> Steps
        </h2>
        <div data-reveal className="lg:col-span-6">
          <Photo
            src={study}
            alt="An executive reflecting with a notebook in a modern study"
            aspect="aspect-[16/10]"
            position="50% 28%"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </div>

      {/* Process columns (reference pattern): hairline, number, title, short text. */}
      <ol className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-3 lg:mt-28">
        {STEPS.map((s, i) => (
          <li key={s.n} data-reveal style={delay(i, 140)} className="relative pt-6">
            <span aria-hidden="true" className="rule-draw absolute inset-x-0 top-0 h-px bg-line-strong" />
            <span aria-hidden="true" className="text-sm tabular-nums text-muted">
              {s.n}
            </span>
            <h3 className="mt-12 text-3xl font-light leading-[1.1] tracking-[-0.03em] sm:text-4xl">
              <span className="sr-only">{s.n} — </span>
              {s.title}
            </h3>
            <p className="mt-5 max-w-sm text-lg leading-[1.8] text-muted">{s.body}</p>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-20 lg:mt-24">
        <Cta label="Start My LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
