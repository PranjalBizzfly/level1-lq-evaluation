import { Accent, Cta, Section, SectionHead } from "@/components/ui";
import VibeDiagram from "@/components/lq/VibeDiagram";

// SECTION 3 — INTRODUCING LQ™
export default function IntroducingLq() {
  return (
    <Section id="introducing-lq" labelledBy="intro-title" className="border-t border-line">
      <SectionHead n={3}>Introducing LQ™</SectionHead>

      {/* Statement: big heading, then a lede and supporting paragraph offset to the right. */}
      <h2
        id="intro-title"
        data-reveal
        className="headline mt-16 max-w-4xl text-[2.5rem] leading-[1.06] sm:text-5xl lg:mt-20 lg:text-[4.25rem] xl:text-[5.25rem]"
      >
        What Is Your <Accent>Level Quotient™</Accent>?
      </h2>

      <div data-reveal className="mt-14 grid gap-y-8 lg:mt-20 lg:grid-cols-12 lg:gap-x-16">
        <p className="eyebrow lg:col-span-3 lg:pt-2">A Clearer Picture of Your Personal Brand</p>
        <div className="max-w-xl space-y-6 lg:col-span-6 lg:col-start-7">
          <p className="text-xl leading-[1.6] text-ink sm:text-2xl">
            Your Level Quotient™ (LQ™) is an evaluation of where your personal brand stands today.
          </p>
          <p className="text-lg leading-[1.8] text-muted">
            It helps you understand how effectively your experience, achievements, leadership and influence are
            reflected in your professional reputation.
          </p>
        </div>
      </div>

      {/* The framework, then the remaining copy beside it. */}
      <div className="mt-24 grid items-center gap-16 lg:mt-32 lg:grid-cols-12 lg:gap-x-16">
        <div data-reveal className="lg:col-span-5">
          <VibeDiagram />
        </div>
        <div data-reveal className="max-w-xl space-y-6 lg:col-span-6 lg:col-start-7">
          <p className="text-xl leading-[1.6] text-ink sm:text-2xl">
            LQ™ looks beyond your job title, number of followers or social media activity.
          </p>
          <p className="text-lg leading-[1.8] text-muted">
            It evaluates the strength of your personal brand across the areas that matter to your leadership journey.
          </p>
        </div>
      </div>

      <div data-reveal className="mt-24 border-t border-line-strong pt-14 lg:mt-32">
        <p className="serif-accent text-ink max-w-3xl text-3xl leading-snug sm:text-4xl">
          Because success and recognition are not always the same thing
        </p>
        <div className="mt-10">
          <Cta label="Discover Your LQ™ →" />
        </div>
      </div>
    </Section>
  );
}
