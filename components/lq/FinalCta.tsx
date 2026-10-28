import { Accent, Corner, Cta } from "@/components/ui";

// SECTION 10 — FINAL CTA
export default function FinalCta() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-title"
      className="relative overflow-hidden border-t border-line bg-paper text-ink"
    >
      {/* Ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 size-[44rem] rounded-full bg-paper-2 opacity-70 blur-[130px]"
      />

      <div className="container-x py-24 sm:py-32 lg:py-40">
        <div className="surface relative rounded-[2.5rem] border border-line-strong/80 p-8 sm:p-14 lg:p-20 shadow-2xl backdrop-blur-xl">
          <Corner className="absolute -top-px -right-px size-8 text-ink/80 sm:size-10" />
          <Corner flip className="absolute -bottom-px -left-px size-8 text-ink/80 sm:size-10" />

          <div className="eyebrow flex items-baseline justify-between border-b border-line pb-6">
            <span className="text-xs tracking-[0.25em] text-ink/80">Discover your Level Quotient™ today</span>
            <span className="font-mono text-xs text-muted uppercase hidden sm:inline-block">Executive Intake</span>
          </div>

          <div data-reveal className="relative mt-12 sm:mt-16">
            <h2 id="final-title" className="headline max-w-5xl text-[2.75rem] leading-[1.08] sm:text-6xl lg:text-[4.75rem]">
              <span className="block font-light">You Know What You&apos;ve Achieved</span>{" "}
              <Accent>Discover How You&apos;re Perceived</Accent>
            </h2>
          </div>

          <div data-reveal className="mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:items-end lg:gap-x-12">
            <div className="space-y-3 text-lg sm:text-xl lg:text-2xl leading-[1.75] lg:col-span-7 font-light">
              <p className="text-ink font-normal">Your experience has value.</p>
              <p className="text-ink font-normal">Your reputation has influence.</p>
              <p className="text-muted">Your next opportunity may depend on how well the world understands both.</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
              <Cta label="Discover My LQ™ →" className="w-full sm:w-auto shadow-xl" />
              <p className="eyebrow text-xs tracking-widest text-muted">Complimentary | Private &amp; Confidential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
