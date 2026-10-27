import { REAL_QUESTIONS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 2 — THE REAL QUESTION
export default function RealQuestion() {
  return (
    <Section id="the-real-question" labelledBy="real-title" className="border-t border-line">
      <SectionHead n={2}>The Real Question</SectionHead>

      <div className="mt-20 grid gap-y-8 lg:mt-32 lg:grid-cols-12 lg:items-start lg:gap-x-10">
        <h2 id="real-title" data-reveal className="headline text-[2.25rem] sm:text-5xl lg:col-span-8 lg:text-[3.75rem]">
          You May Be More Accomplished Than You Are <Accent>Recognized</Accent>
        </h2>
        <div data-reveal className="space-y-6 text-lg leading-[1.85] lg:col-span-4 lg:col-start-9">
          <p>You&apos;ve spent years building businesses, leading teams, making decisions and creating value.</p>
          <p>
            Yet there may be a difference between your actual achievements and how people outside your immediate circle
            perceive you.
          </p>
        </div>
      </div>

      <p data-reveal className="eyebrow mt-28 lg:mt-40">
        Consider these questions
      </p>
      <ol className="mt-6 border-t border-current/25">
        {REAL_QUESTIONS.map((q, i) => (
          <li
            key={q}
            data-reveal
            style={delay(i, 70)}
            className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-current/25 py-10 sm:grid-cols-[6rem_1fr] sm:py-12 lg:grid-cols-12 lg:gap-x-10"
          >
            <span aria-hidden="true" className="headline text-outline text-4xl sm:text-6xl lg:col-span-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="headline text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:col-span-10 lg:text-[2.25rem]">
              {q}
            </p>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-16 lg:mt-24 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-10">
        <p className="headline serif-accent text-2xl sm:text-3xl lg:col-span-7">
          If these questions make you think, your personal brand may have more potential than you realize
        </p>
        <Cta label="Evaluate My Personal Brand →" className="self-start lg:col-span-4 lg:col-start-9 lg:justify-self-start" />
      </div>
    </Section>
  );
}
