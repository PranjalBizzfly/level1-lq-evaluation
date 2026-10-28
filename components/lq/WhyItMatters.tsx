import { WHY_QUESTIONS } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 5 — WHY IT MATTERS
export default function WhyItMatters() {
  return (
    <Section id="why-it-matters" labelledBy="why-title" className="border-t border-line">
      <SectionHead n={5}>Why It Matters</SectionHead>

      <div className="mt-8 grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <div data-reveal className="lg:col-span-7">
          <h2 id="why-title" className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4rem]">
            Your Reputation Should Work <Accent>Beyond Your Network</Accent>
          </h2>
        </div>
        <div data-reveal className="space-y-6 lg:col-span-5 lg:pt-3">
          <p className="text-lg sm:text-xl lg:text-2xl leading-[1.8] font-light text-muted">
            You may already have a strong business, an established network and a respected position.
          </p>
          <p className="headline serif-accent text-2xl sm:text-3xl text-ink leading-snug">
            But what happens beyond those circles?
          </p>
        </div>
      </div>

      {/* 2x2 Executive Strategic Matrix */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <div data-reveal className="flex items-center justify-between pb-6 border-b border-line">
          <p className="eyebrow text-ink/80">Strategic Perspectives</p>
          <span className="text-xs font-mono text-muted tracking-widest uppercase hidden sm:inline-block">
            Market Perception Audit
          </span>
        </div>

        <ul className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {WHY_QUESTIONS.map((q, i) => (
            <li
              key={q}
              data-reveal
              style={delay(i)}
              data-spotlight
              className="surface card-interactive group relative rounded-3xl border border-line p-8 sm:p-10 min-h-[320px] flex flex-col justify-between gap-8 transition-all duration-300 hover:border-ink/50 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="luxury-pill">
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="size-2 rounded-full bg-line-strong group-hover:bg-ink transition-colors" />
              </div>
              <p className="relative text-xl sm:text-2xl font-light leading-snug tracking-tight text-ink group-hover:translate-x-1 transition-transform duration-300">
                {q}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Takeaway Anchor */}
      <div
        data-reveal
        className="surface relative mt-24 sm:mt-36 lg:mt-44 rounded-[2.5rem] border border-line p-10 sm:p-16 lg:p-20 shadow-xl"
      >
        <Corner className="absolute -top-px -right-px size-8 text-ink/70 sm:size-10" />
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <p className="headline text-2xl sm:text-3xl lg:text-4xl text-ink lg:col-span-7 font-light leading-snug">
            Your personal brand influences how people understand your value before they ever meet you
          </p>
          <div className="space-y-6 lg:col-span-5 lg:justify-self-end">
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              LQ™ helps you understand where that perception stands today.
            </p>
            <Cta label="Discover Where You Stand →" className="w-full sm:w-auto shadow-md" />
          </div>
        </div>
      </div>
    </Section>
  );
}
