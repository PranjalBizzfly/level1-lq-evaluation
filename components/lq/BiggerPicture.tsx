import { OFFERS } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead, delay } from "@/components/ui";

const CARD = {
  outline: "border border-line-strong bg-paper",
  muted: "border border-line-strong bg-paper",
  inverse: "border border-line-strong bg-paper",
};

// SECTION 9 — THE BIGGER PICTURE
export default function BiggerPicture() {
  return (
    <Section id="the-bigger-picture" labelledBy="bigger-title">
      <SectionHead n={9}>The Bigger Picture</SectionHead>

      <div data-reveal className="mt-20 grid gap-y-10 lg:mt-32 lg:grid-cols-12 lg:items-start lg:gap-x-10">
        <h2 id="bigger-title" className="headline text-[2.25rem] sm:text-5xl lg:col-span-8 lg:text-[3.75rem]">
          <span className="block">Your LQ™ Is Your Starting Point</span> <Accent>Not Your Destination</Accent>
        </h2>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="headline serif-accent text-3xl">What Comes Next Is Your Choice</p>
          <div className="mt-4 space-y-5 leading-[1.85]">
            <p>Understanding your current personal brand is the first step.</p>
            <p>
              For those who want to go deeper, Level141 offers a comprehensive assessment and a structured approach to
              personal brand development.
            </p>
          </div>
        </div>
      </div>

      {/* Three engagements side by side; the premium one carries the corner mark. */}
      <ol className="mt-24 grid gap-4 lg:mt-36 lg:grid-cols-3 lg:gap-0">
        {OFFERS.map((o, i) => (
          <li
            key={o.name}
            data-reveal
            style={delay(i, 100)}
            className={`relative flex flex-col p-8 sm:p-12 lg:[&+&]:border-l-0 ${CARD[o.tone]}`}
          >
            {o.tone === "inverse" && <Corner className="absolute right-0 top-0 size-8 text-ink" />}
            <div className="flex items-baseline justify-between gap-4">
              <span aria-hidden="true" className="headline text-outline text-6xl leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="eyebrow text-right">{o.tier}</span>
            </div>
            <h3 className="eyebrow mt-14 border-t border-line-strong pt-5">{o.name}</h3>
            <p className="headline serif-accent mt-3 text-4xl">{o.headline}</p>
            <div className="mt-6 flex-1 space-y-5 leading-[1.85]">
              {o.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-16 lg:mt-24">
        <Cta label="Start With My Complimentary LQ™ Evaluation →" />
      </div>
    </Section>
  );
}
