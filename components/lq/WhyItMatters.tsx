import { WHY_QUESTIONS } from "@/content/lq";
import { Accent, Cta, Section, SectionHead, delay } from "@/components/ui";
import PhotoBand from "@/components/lq/PhotoBand";
import walkCrowd from "@/public/images/walk-crowd.png";

// SECTION 5 — WHY IT MATTERS
export default function WhyItMatters() {
  return (
    <Section id="why-it-matters" labelledBy="why-title" className="border-t border-line">
      <SectionHead>Why It Matters</SectionHead>

      <div className="mt-10 grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
        <h2
          id="why-title"
          data-reveal
          className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-7 lg:text-[4.25rem] xl:text-[5.25rem]"
        >
          Your Reputation Should Work <Accent>Beyond Your Network</Accent>
        </h2>
        <div data-reveal className="space-y-5 lg:col-span-5 lg:pt-3">
          <p className="text-lg leading-[1.8] text-muted">
            You may already have a strong business, an established network and a respected position.
          </p>
          <p className="serif-accent text-2xl">But what happens beyond those circles?</p>
        </div>
      </div>

      {/* Numbered columns, each opened by its own hairline (reference "process" pattern). */}
      <ul className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        {WHY_QUESTIONS.map((q, i) => (
          <li key={q} data-reveal style={delay(i)} className="border-t border-line-strong pt-6">
            <span aria-hidden="true" className="text-sm tabular-nums text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-10 text-xl font-light leading-snug tracking-[-0.015em] sm:text-2xl">{q}</p>
          </li>
        ))}
      </ul>

      {/* The crowd image carries the takeaway: value is judged before anyone meets you. */}
      <div className="mt-20 lg:mt-28">
        <PhotoBand
          src={walkCrowd}
          alt="A businesswoman walking confidently through a busy conference hall"
          className="min-h-[30rem] sm:min-h-[34rem] lg:min-h-[38rem]"
          sizes="(min-width: 1440px) 82rem, 100vw"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <p className="max-w-2xl text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
              Your personal brand influences how people understand your value before they ever meet you
            </p>
            <div className="max-w-sm shrink-0 space-y-6">
              <p className="text-lg leading-[1.8] text-white/80">
                LQ™ helps you understand where that perception stands today.
              </p>
              <Cta label="Discover Where You Stand →" className="!bg-white !text-black hover:!bg-white/90" />
            </div>
          </div>
        </PhotoBand>
      </div>
    </Section>
  );
}
