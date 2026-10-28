import { REAL_QUESTIONS } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 2 — THE REAL QUESTION
export default function RealQuestion() {
  return (
    <Section id="the-real-question" labelledBy="real-title" className="border-t border-line">
      <SectionHead n={2}>The Real Question</SectionHead>

      <div className="mt-8 grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <h2 id="real-title" data-reveal className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-7 lg:text-[4rem]">
          You May Be More Accomplished Than You Are <Accent>Recognized</Accent>
        </h2>
        <div data-reveal className="space-y-4 text-lg sm:text-xl lg:text-2xl leading-[1.8] font-light text-muted lg:col-span-5 lg:pt-2">
          <p className="text-ink font-normal">
            You&apos;ve spent years building businesses, leading teams, making decisions and creating value.
          </p>
          <p>
            Yet there may be a difference between your actual achievements and how people outside your immediate circle
            perceive you.
          </p>
        </div>
      </div>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <div data-reveal className="flex items-center justify-between pb-6 border-b border-line">
          <p className="eyebrow text-ink/80">
            Consider these questions
          </p>
          <span className="text-xs font-mono text-muted uppercase tracking-widest hidden sm:inline-block">
            Executive Reflection Matrix
          </span>
        </div>

        {/* Structured Interactive Question Grid */}
        <ol className="mt-10 sm:mt-12 grid gap-6 lg:gap-8">
          {REAL_QUESTIONS.map((q, i) => (
            <li
              key={q}
              data-reveal
              style={delay(i, 70)}
              data-spotlight
              className="group surface card-interactive relative rounded-3xl border border-line p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-ink/40 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-10">
                <div className="flex items-start sm:items-center gap-6 lg:gap-10 flex-1">
                  <span
                    aria-hidden="true"
                    className="headline text-outline text-3xl sm:text-5xl lg:text-6xl font-light opacity-60 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="headline text-xl sm:text-2xl lg:text-3xl text-ink font-light leading-snug group-hover:translate-x-1.5 transition-transform duration-300">
                    {q}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-muted uppercase shrink-0 sm:self-center">
                  <span className="size-1.5 rounded-full bg-line-strong group-hover:bg-ink transition-colors" />
                  <span className="hidden md:inline-block">Inquiry 0{i + 1}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Resonance Box */}
      <div data-reveal className="relative surface mt-24 sm:mt-36 lg:mt-44 rounded-[2.5rem] border border-line p-10 sm:p-16 lg:p-20 shadow-xl">
        <Corner className="absolute -top-px -right-px size-8 text-ink/70 sm:size-10" />
        <Corner flip className="absolute -bottom-px -left-px size-8 text-ink/70 sm:size-10" />
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <p className="headline serif-accent text-2xl sm:text-3xl lg:text-4xl text-ink lg:col-span-8 leading-tight">
            If these questions make you think, your personal brand may have more potential than you realize
          </p>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Cta label="Evaluate My Personal Brand →" className="w-full sm:w-auto shadow-md" />
          </div>
        </div>
      </div>
    </Section>
  );
}
