import { Accent, Corner, Cta } from "@/components/ui";

// SECTION 10 — FINAL CTA
export default function FinalCta() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-title"
      className="relative overflow-hidden border-t border-line bg-paper text-ink"
    >
      <div className="container-x py-24 sm:py-32 lg:py-40">
        <div className="eyebrow flex items-baseline justify-between border-b border-current/25 pb-4">
          <span>Discover your Level Quotient™ today</span>
        </div>

        <div data-reveal className="relative mt-16 lg:mt-36">
          <Corner className="absolute -top-2 right-0 size-6 text-ink sm:size-8" />
          <h2 id="final-title" className="headline max-w-6xl pr-12 text-[2.5rem] sm:text-6xl lg:text-[4.5rem]">
            <span className="block">You Know What You&apos;ve Achieved</span> <Accent>Discover How You&apos;re Perceived</Accent>
          </h2>
        </div>

        <div data-reveal className="mt-20 grid gap-10 border-t border-current/25 pt-10 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="space-y-1 text-xl leading-[1.85] lg:col-span-7">
            <p>Your experience has value.</p>
            <p>Your reputation has influence.</p>
            <p>Your next opportunity may depend on how well the world understands both.</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9">
            <Cta label="Discover My LQ™ →" className="w-full sm:w-auto" />
            <p className="eyebrow">Complimentary | Private &amp; Confidential</p>
          </div>
        </div>
      </div>
    </section>
  );
}
