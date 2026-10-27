import { WHY_QUESTIONS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 5 — WHY IT MATTERS
export default function WhyItMatters() {
  return (
    <Section id="why-it-matters" labelledBy="why-title" className="border-t border-line">
      <SectionHead n={5}>Why It Matters</SectionHead>

      <div className="mt-20 grid gap-y-8 lg:mt-32 lg:grid-cols-12 lg:items-start lg:gap-x-10">
        <div data-reveal className="lg:col-span-8">
          <h2 id="why-title" className="headline text-[2.25rem] sm:text-5xl lg:text-[3.75rem]">
            Your Reputation Should Work <Accent>Beyond Your Network</Accent>
          </h2>
        </div>
        <div data-reveal className="space-y-6 text-lg leading-[1.85] lg:col-span-4 lg:col-start-9">
          <p>You may already have a strong business, an established network and a respected position.</p>
          <p className="headline serif-accent text-3xl">But what happens beyond those circles?</p>
        </div>
      </div>

      <ul className="mt-28 grid border-t border-current/25 sm:grid-cols-2 sm:gap-x-10 lg:mt-36 lg:grid-cols-4 lg:gap-x-0 lg:pt-8">
        {WHY_QUESTIONS.map((q, i) => (
          <li
            key={q}
            data-reveal
            style={delay(i)}
            className="flex flex-col justify-between gap-12 border-b border-current/25 py-8 lg:border-b-0 lg:border-l lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
          >
            <span aria-hidden="true" className="eyebrow tabular-nums">
              Q.{String(i + 1).padStart(2, "0")}
            </span>
            <p className="headline text-2xl sm:text-3xl">{q}</p>
          </li>
        ))}
      </ul>

      <div
        data-reveal
        className="mt-28 grid gap-8 border-t border-current/25 pt-10 lg:mt-36 lg:grid-cols-12 lg:items-center lg:gap-x-10"
      >
        <p className="headline text-3xl sm:text-4xl lg:col-span-8">
          Your personal brand influences how people understand your value before they ever meet you
        </p>
        <div className="space-y-6 lg:col-span-4 lg:col-start-9">
          <p className="text-lg">LQ™ helps you understand where that perception stands today.</p>
          <Cta label="Discover Where You Stand →" />
        </div>
      </div>
    </Section>
  );
}
