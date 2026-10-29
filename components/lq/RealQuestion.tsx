import { Accent, Cta, Section, SectionHead } from "@/components/ui";
import Photo from "@/components/lq/Photo";
import QuestionSlider from "@/components/lq/QuestionSlider";
import ceoPortrait from "@/public/images/ceo-portrait.png";

// SECTION 2 — THE REAL QUESTION
export default function RealQuestion() {
  return (
    <Section id="the-real-question" labelledBy="real-title" className="border-t border-line">
      <SectionHead n={2}>The Real Question</SectionHead>

      {/* Statement: big heading, then the lede offset to the right beside a portrait. */}
      <h2
        id="real-title"
        data-reveal
        className="headline mt-16 max-w-4xl text-[2.5rem] leading-[1.06] sm:text-5xl lg:mt-20 lg:text-[4.25rem] xl:text-[5.25rem]"
      >
        You May Be More Accomplished Than You Are <Accent>Recognized</Accent>
      </h2>

      <div className="mt-16 grid items-end gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <Photo src={ceoPortrait} alt="A leader in a dark suit, deep in thought" aspect="aspect-[4/5]" />
        </div>
        <div data-reveal className="max-w-xl space-y-6 lg:col-span-6 lg:col-start-7">
          <p className="text-xl leading-[1.6] text-ink sm:text-2xl">
            You&apos;ve spent years building businesses, leading teams, making decisions and creating value.
          </p>
          <p className="text-lg leading-[1.8] text-muted">
            Yet there may be a difference between your actual achievements and how people outside your immediate circle
            perceive you.
          </p>
        </div>
      </div>

      {/* Slider: one question at a time. */}
      <div className="mt-24 lg:mt-32">
        <QuestionSlider />
      </div>

      <div
        data-reveal
        className="mt-16 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
      >
        <p className="serif-accent text-ink max-w-2xl text-2xl leading-snug sm:text-3xl">
          If these questions make you think, your personal brand may have more potential than you realize
        </p>
        <div className="shrink-0">
          <Cta label="Evaluate My Personal Brand →" />
        </div>
      </div>
    </Section>
  );
}
