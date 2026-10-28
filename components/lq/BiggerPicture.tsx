import { OFFERS } from "@/content/lq";
import { Accent, Corner, Cta, Section, SectionHead, delay } from "@/components/ui";

// SECTION 9 — THE BIGGER PICTURE
export default function BiggerPicture() {
  return (
    <Section id="the-bigger-picture" labelledBy="bigger-title" className="border-t border-line">
      <SectionHead n={9}>The Bigger Picture</SectionHead>

      <div data-reveal className="mt-8 grid gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-16">
        <h2 id="bigger-title" className="headline text-[2.5rem] leading-[1.08] sm:text-5xl lg:col-span-7 lg:text-[4rem]">
          <span className="block">Your LQ™ Is Your Starting Point</span> <Accent>Not Your Destination</Accent>
        </h2>
        <div className="lg:col-span-5 lg:pt-3 space-y-5">
          <p className="headline serif-accent text-2xl sm:text-3xl text-ink">What Comes Next Is Your Choice</p>
          <div className="space-y-4 text-lg sm:text-xl leading-[1.8] font-light text-muted">
            <p>Understanding your current personal brand is the first step.</p>
            <p>
              For those who want to go deeper, Level141 offers a comprehensive assessment and a structured approach to
              personal brand development.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Tier Luxury Engagement Suite */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <div data-reveal className="flex items-center justify-between pb-6 border-b border-line">
          <p className="eyebrow text-ink/80">Engagement Portfolio</p>
          <span className="text-xs font-mono text-muted tracking-widest uppercase hidden sm:inline-block">
            Tier Architecture
          </span>
        </div>

        <ol className="mt-10 sm:mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {OFFERS.map((o, i) => {
            const isFlagship = o.tone === "inverse";
            return (
              <li
                key={o.name}
                data-reveal
                style={delay(i, 100)}
                data-spotlight
                className={`surface card-interactive group relative flex flex-col rounded-3xl border p-8 sm:p-10 lg:p-12 ${
                  isFlagship ? "border-ink/50" : "border-line hover:border-ink/40"
                }`}
              >
                {isFlagship && <Corner className="absolute -right-px -top-px size-8 text-ink sm:size-10" />}

                {/* Number and tier sit on one line; a long tier wraps to the right instead of overlapping. */}
                <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
                  <span className="headline text-outline shrink-0 text-4xl font-light leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow max-w-[12rem] pt-1 text-right text-[0.65rem] leading-relaxed text-ink">
                    {o.tier}
                  </span>
                </div>

                <h3 className="eyebrow mt-8 text-ink">{o.name}</h3>
                {/* Fixed two-line height keeps the descriptions aligned across all three cards. */}
                <p className="headline serif-accent mt-4 text-3xl leading-tight text-ink sm:text-4xl lg:min-h-[2lh] lg:text-[2.4rem]">
                  {o.headline}
                </p>

                <div className="mt-8 space-y-4 border-t border-line pt-6 text-base leading-[1.8] text-muted sm:text-lg">
                  {o.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div data-reveal className="mt-20 lg:mt-32 flex justify-center">
        <Cta label="Start With My Complimentary LQ™ Evaluation →" className="shadow-lg" />
      </div>
    </Section>
  );
}
