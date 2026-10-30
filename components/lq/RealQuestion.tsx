import { REAL_QUESTIONS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead } from "@/components/ui";
import Photo from "@/components/lq/Photo";
import ceoPortrait from "@/public/images/ceo-portrait.png";

// SECTION 2 — THE REAL QUESTION
export default function RealQuestion() {
  return (
    <Section id="the-real-question" labelledBy="real-title" className="border-t border-line">
      {/* Opening statement, continued from the hero. */}
      <div data-reveal className="mb-28 max-w-3xl space-y-6 lg:mb-40">
        <p className="text-2xl leading-[1.4] tracking-[-0.02em] text-ink sm:text-3xl">
          But does your personal reputation truly reflect your experience, influence and ambitions?
        </p>
        <p className="text-lg leading-[1.8] text-muted">
          Discover where your personal brand stands today with the{" "}
          <strong className="font-medium text-ink">complimentary LQ™ Snapshot</strong>.
        </p>
        <p className="text-lg leading-[1.8] text-muted">
          Understand your strengths, identify potential gaps and discover opportunities to strengthen your professional
          reputation.
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 pt-4 text-sm text-muted">
          <li>Complimentary Evaluation</li>
          <li>Personalized Snapshot</li>
          <li>Private &amp; Confidential</li>
        </ul>
      </div>

      <SectionHead>The Real Question</SectionHead>

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

      {/* Editorial index: the label holds its place while the numbered questions pass. */}
      <div className="mt-28 grid gap-y-10 lg:mt-40 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <p className="eyebrow lg:sticky lg:top-32">Consider these questions</p>
        </div>
        <ol className="border-b border-line lg:col-span-8">
          {REAL_QUESTIONS.map((q, i) => (
            <li
              key={q}
              data-reveal
              className="grid grid-cols-[2.75rem_1fr] items-baseline border-t border-line py-7 sm:grid-cols-[4.5rem_1fr] lg:py-9"
            >
              <span className="text-xs tabular-nums tracking-[0.12em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xl font-light leading-[1.4] tracking-[-0.015em] sm:text-2xl">{q}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Closing thought, alone and centred. */}
      <div data-reveal className="mx-auto mt-28 max-w-2xl text-center lg:mt-40">
        <p className="serif-accent text-ink text-2xl leading-[1.35] sm:text-3xl">
          If these questions make you think, your personal brand may have more potential than you realize
        </p>
        <div className="mt-10 flex justify-center">
          <Cta variant="link" label="Evaluate My Personal Brand →" />
        </div>
      </div>
    </Section>
  );
}
