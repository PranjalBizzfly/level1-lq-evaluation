import { Accent, Corner, Cta, Section, SectionHead } from "@/components/ui";

// SECTION 3 — INTRODUCING LQ™
export default function IntroducingLq() {
  return (
    <Section id="introducing-lq" labelledBy="intro-title" className="border-t border-line">
      <SectionHead n={3}>Introducing LQ™</SectionHead>

      {/* Centred editorial opening. */}
      <div data-reveal className="mx-auto mt-20 max-w-3xl text-center lg:mt-32">
        <h2 id="intro-title" className="headline text-[2.25rem] sm:text-5xl lg:text-[3.75rem]">
          What Is Your <Accent>Level Quotient™</Accent>?
        </h2>
        <p className="mt-8 text-xl tracking-[-0.01em] sm:text-2xl">A Clearer Picture of Your Personal Brand</p>
        <span aria-hidden="true" className="mx-auto mt-12 block h-px w-16 bg-ink" />
      </div>

      <div
        data-reveal
        className="mx-auto mt-14 grid max-w-5xl gap-10 text-lg leading-[1.85] sm:grid-cols-2 sm:gap-16 lg:mt-16"
      >
        <div className="space-y-6">
          <p>Your Level Quotient™ (LQ™) is an evaluation of where your personal brand stands today.</p>
          <p>
            It helps you understand how effectively your experience, achievements, leadership and influence are reflected
            in your professional reputation.
          </p>
        </div>
        <div className="space-y-6">
          <p>LQ™ looks beyond your job title, number of followers or social media activity.</p>
          <p>
            It evaluates the strength of your personal brand across the areas that matter to your leadership journey.
          </p>
        </div>
      </div>

      {/* Quote framed by the Level141 corner marks. */}
      <blockquote data-reveal className="relative mx-auto mt-28 max-w-4xl px-10 py-14 text-center sm:px-16 sm:py-20 lg:mt-36">
        <Corner flip className="absolute bottom-0 left-0 size-6 text-ink sm:size-7" />
        <Corner className="absolute right-0 top-0 size-6 text-ink sm:size-7" />
        <p className="headline serif-accent text-3xl sm:text-4xl lg:text-[3.25rem]">
          Because success and recognition are not always the same thing
        </p>
      </blockquote>

      <div data-reveal className="mt-16 flex justify-center lg:mt-20">
        <Cta label="Discover Your LQ™ →" />
      </div>
    </Section>
  );
}
